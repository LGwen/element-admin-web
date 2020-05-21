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
        path: "/user",
        component: EmptyLayout,
        redirect: "/user/online",
        name: "online",
        meta: {
          title: "用户管理",
          icon: "menu",
          keepAlive: false,
          permission: ["R002", "R003", "R004"]
        },
        children: [
          {
            path: "/user/online",
            name: "useronline",
            component: () => import("../views/Account/Account"),
            meta: { title: "在线用户", keepAlive: false, permission: ["R002"] }
          },
          {
            path: "/user/all",
            name: "alluser",
            component: () => import("../views/Account/Account"),
            meta: { title: "所有用户", hideHeader: false, permission: ["R003"] }
          },
          {
            path: "/user/chart",
            name: "userchart",
            component: () => import("../views/Account/Account"),
            meta: {
              title: "用户画像",
              hideHeader: true,
              permission: ["R004"]
            }
          }
        ]
      }
    ]
  }
];
// export const asyncRouterMap = [
//   {
//     path: "/",
//     name: "index",
//     component: BasicLayout,
//     meta: { title: "首页" },
//     redirect: "/admin/home",
//     children: [
//       {
//         path: "/admin/home",
//         component: () => import("@/views/home/index"),
//         name: "home",
//         meta: {
//           title: "首页",
//           icon: "home",
//           keepAlive: true,
//           permission: ["P011"]
//         }
//       },
//       {
//         path: "/user",
//         component: RouteView,
//         redirect: "/user/online",
//         name: "online",
//         meta: {
//           title: "用户管理",
//           icon: "user",
//           keepAlive: false,
//           permission: ["P001", "P002", "P012"]
//         },
//         children: [
//           {
//             path: "/user/online",
//             name: "useronline",
//             component: () => import("@/views/account/user-online"),
//             meta: { title: "在线用户", keepAlive: false, permission: ["P001"] }
//           },
//           {
//             path: "/user/all",
//             name: "alluser",
//             component: () => import("@/views/account/user-all"),
//             meta: { title: "所有用户", hideHeader: false, permission: ["P002"] }
//           },
//           {
//             path: "/user/chart",
//             name: "userchart",
//             component: () => import("@/views/account/user-chart"),
//             meta: {
//               title: "用户画像",
//               hideHeader: true,
//               permission: ["P012"]
//             }
//           }
//         ]
//       },
//       {
//         path: "/role",
//         component: RouteView,
//         redirect: "/role/admin",
//         name: "roles",
//         meta: {
//           title: "系统管理",
//           icon: "setting",
//           keepAlive: false,
//           permission: ["P003", "P004"]
//         },
//         children: [
//           {
//             path: "/role/admin",
//             name: "admin",
//             component: () => import("@/views/role/role-admin"),
//             meta: { title: "管理员列表", keepAlive: false, permission: ["P003"] }
//           },
//           {
//             path: "/role/all",
//             name: "allrole",
//             component: () => import("@/views/role/role-all"),
//             meta: { title: "角色列表", keepAlive: false, permission: ["P004"] }
//           }
//         ]
//       },
//       {
//         path: "/credentials",
//         component: RouteView,
//         redirect: "/credentials/bind",
//         name: "credentials",
//         meta: {
//           title: "证照管理",
//           icon: "credit-card",
//           keepAlive: false,
//           permission: ["P005", "P006", "P0077"]
//         },
//         children: [
//           {
//             path: "/credentials/bind",
//             name: "cardbind",
//             component: () => import("@/views/credentials/card-bind"),
//             meta: {
//               title: "证照绑定信息",
//               keepAlive: false,
//               permission: ["P005"]
//             }
//           },
//           {
//             path: "/credentials/all",
//             name: "callall",
//             component: () => import("@/views/credentials/card-total"),
//             meta: { title: "亮证统计", hideHeader: false, permission: ["P006"] }
//           },
//           {
//             path: "/credentials/type",
//             component: () => import("@/views/exception/developing"),
//             name: "cardtype",
//             meta: {
//               title: "添加卡证类型",
//               keepAlive: true,
//               // P007
//               permission: ["P0077"]
//             }
//           }
//         ]
//       },
//       {
//         path: "/event",
//         component: RouteView,
//         redirect: "/event/all",
//         name: "event",
//         meta: {
//           title: "事项管理",
//           icon: "solution",
//           keepAlive: true,
//           permission: ["P008", "P008-sxydb"]
//         },
//         children: [
//           {
//             path: "/event/all",
//             component: () => import("@/views/event/event-all"),
//             name: "event",
//             meta: {
//               title: "事项管理",
//               keepAlive: false,
//               permission: ["P008"]
//             }
//           },
//           {
//             path: "/event/setting",
//             component: () => import("@/views/event/event-setting"),
//             name: "evt-setting",
//             meta: {
//               title: "事项移动办设置",
//               keepAlive: false,
//               permission: ["P014"]
//             }
//           }
//         ]
//       },
//       {
//         path: "/public",
//         component: RouteView,
//         redirect: "/public/notice",
//         name: "public",
//         meta: {
//           title: "公共服务",
//           icon: "notification",
//           keepAlive: false,
//           permission: ["P009", "P013"]
//         },
//         children: [
//           {
//             path: "/public/notice",
//             name: "notice",
//             component: () => import("@/views/public-service/notice"),
//             meta: { title: "公告管理", keepAlive: false, permission: ["P009"] }
//           },
//           {
//             path: "/public/message",
//             name: "消息管理",
//             component: () => import("@/views/public-service/message"),
//             meta: { title: "消息管理", keepAlive: false, permission: ["P013"] }
//           }
//           // ,
//           // {
//           //   path: "/public/cache",
//           //   name: "cache",
//           //   component: () => import("@/views/public-service/cache"),
//           //   meta: {
//           //     title: "缓存管理",
//           //     keepAlive: true,
//           //     permission: ["缓存管理"]
//           //   }
//           // },
//           // {
//           //   path: "/public/search",
//           //   name: "search",
//           //   component: () => import("@/views/exception/developing"),
//           //   meta: {
//           //     title: "搜索管理",
//           //     keepAlive: true,
//           //     permission: ["搜索管理"]
//           //   }
//           // }
//         ]
//       },
//       {
//         path: "/collection/all",
//         component: () => import("@/views/collection/collection-all"),
//         name: "allcollection",
//         meta: {
//           title: "收藏统计",
//           icon: "folder",
//           keepAlive: false,
//           permission: ["P010"]
//         }
//       },
//       {
//         path: "/logs/all",
//         component: () => import("@/views/exception/developing"),
//         name: "logs",
//         meta: {
//           title: "日志服务",
//           icon: "profile",
//           keepAlive: true,
//           permission: ["日志服务"]
//         }
//       },
//       {
//         path: "/media/all",
//         component: () => import("@/views/exception/developing"),
//         name: "media",
//         meta: {
//           title: "多媒体服务",
//           icon: "video-camera",
//           keepAlive: true,
//           permission: ["多媒体服务"]
//         }
//       }
//     ]
//   },
//   {
//     path: "*",
//     redirect: "/404",
//     hidden: true
//   }
// ];
