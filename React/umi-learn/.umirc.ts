import {
    defineConfig
} from 'umi';

export default defineConfig({
    dva: {
        immer: false,
        hmr: false
    },
    request: false,
    // fastRefresh: {},
    // 相当于webpack中的devServer中的proxy配置
    proxy: {
        // 匹配的请求
        "/api": {
            target: "http://api.duyiedu.com",// 目标地址
            changeOrigin: true,//改变源
        }
    }



    // routes: [{
    //     path: "/",
    //     component: "@/layouts/index",
    //     exact: false,
    //     routes: [{
    //             path: "/",
    //             component: "@/pages/index",
    //             title: "首页",
    //             wrappers: ["@/wrappers/HandleTitle.js"]
    //         },
    //         {
    //             path: "/login",
    //             component: "@/pages/login",
    //             title: "登录页",
    //             wrappers: ["@/wrappers/HandleTitle.js"]
    //         },
    //         {
    //             path: "/welcome",
    //             component: "@/pages/welcome",
    //             title: "欢迎页",
    //             wrappers: ["@/wrappers/PrivateRouter.js", "@/wrappers/HandleTitle.js"]
    //         }
    //     ]
    // }],

})