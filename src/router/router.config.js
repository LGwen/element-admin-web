import { BasicLayout, UserLayout, EmptyLayout } from "@/layouts";
/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: "/user",
    redirect: "/user/login",
    hidden: true,
    component: BasicLayout,
    children: [
      {
        path: "login",
        name: "login",
        component: () =>
          import(/* webpackChunkName: "user" */ "../views/User/Login"),
        meta: {
          title: "登录"
        }
      }
    ]
  }
];
/**
 * 登录之后按照权限配置的路由
 */
export const rightRouter = [
  {
    path: "/",
    name: "index",
    component: UserLayout,
    meta: { title: "首页" },
    redirect: "/admin/home",
    children: [
      {
        path: "/admin/home",
        component: () => import("../views/Admin/Home"),
        name: "home",
        meta: {
          title: "首页",
          icon: "location",
          keepAlive: true,
          permission: ["R001"]
        }
      },
      {
        path: "/table",
        component: EmptyLayout,
        redirect: "/table/base",
        name: "table",
        meta: {
          title: "表格页",
          icon: "menu",
          keepAlive: false,
          permission: ["R002"]
        },
        children: [
          {
            path: "/table/base",
            name: "table-base",
            component: () => import("../views/Table/Table-base"),
            meta: { title: "基础表格", keepAlive: false, permission: ["R002"] }
          },
          {
            path: "/list/basic",
            name: "list-basic",
            component: () => import("../views/List/List-basic"),
            meta: { title: "基础列表", keepAlive: false, permission: ["R002"] }
          },
          {
            path: "/list/card",
            name: "list-card",
            component: () => import("../views/List/List-card"),
            meta: { title: "卡片列表", keepAlive: false, permission: ["R002"] }
          }
        ]
      },
      {
        path: "/form",
        component: EmptyLayout,
        redirect: "/form/base",
        name: "form",
        meta: {
          title: "表单页",
          icon: "document",
          keepAlive: false,
          permission: ["R002"]
        },
        children: [
          {
            path: "/form/base",
            name: "form-base",
            component: () => import("../views/Form/Form-base"),
            meta: { title: "基础表单", keepAlive: false, permission: ["R002"] }
          },
          {
            path: "/form/step",
            name: "form-step",
            component: () => import("../views/Form/Form-step"),
            meta: { title: "步骤表单", keepAlive: false, permission: ["R002"] }
          }
        ]
      },
    ]
  }
];
