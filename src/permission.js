import Vue from "vue";
import { Notification } from "element-ui";
import router from "./router";
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css";
import { ACCESS_TOKEN } from "@/store/mutation-types";
import { setDocumentTitle, domTitle } from "@/utils/domUtil";
import store from "./store";
NProgress.configure({ showSpinner: true }); // NProgress Configuration

router.beforeEach((to, from, next) => {
  NProgress.start();
  to.meta &&
    typeof to.meta.title !== "undefined" &&
    setDocumentTitle(`${to.meta.title} - ${domTitle}`);
  // 如果当前用户登录过
  if (to.path === "/user/login") {
    next();
    NProgress.done();
  } else {
    if (Vue.ls.get(ACCESS_TOKEN)) {
      if (to.path === "/user/login") {
        next();
        NProgress.done();
      } else {
        // 判断路由权限并且重新初始化路由
        // 表示当前用户还没有相关权限，需要重新获取用户权限信息
        if (store.getters.roles.length === 0) {
          store
            .dispatch("user/getUserInfo")
            .then(roles => {
              if (!roles) {
                Notification({
                  title: "警告",
                  message: "该用户暂无权限，无法查看相关信息"
                });
                store.dispatch("user/logout").then(res => {
                  next({
                    path: "/user/login",
                    query: { redirect: to.fullPath }
                  });
                  NProgress.done();
                });
              } else {
                store
                  .dispatch("GenerateRoutes", { roles: roles })
                  .then(addRouters => {
                    router.addRoutes(store.getters.addRouters);
                    const redirect = decodeURIComponent(
                      from.query.redirect || to.path
                    );
                    if (to.path === redirect) {
                      next({ ...to, replace: true });
                    } else {
                      // 跳转到目的路由
                      next({ path: redirect });
                    }
                  })
                  .catch(() => {
                    store.dispatch("logout").then(res => {
                      next({
                        path: "/user/login",
                        query: { redirect: to.fullPath }
                      });
                    });
                  });
              }
            })
            .catch(() => {
              store.dispatch("user/logout").then(res => {
                next({ path: "/user/login", query: { redirect: to.fullPath } });
              });
            });
        } else {
          next();
          NProgress.done();
        }
      }
    } else {
      next({ path: "/user/login", query: { redirect: to.fullPath } });
      NProgress.done();
    }
  }
});

router.afterEach(() => {
  NProgress.done(); // finish progress bar
});
