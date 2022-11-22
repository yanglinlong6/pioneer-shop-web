const routers = [
    {
        path: '/',
        name: 'layout',  // 路由名称
        component: () => import("@/views/Layout")  // 组件对象 默认加载index.vue
    },
    {
        path: "/home",
        name: "home",
        component: () => import("@/components/HelloWorld.vue")
    },
    {
        path: "/about",
        name: "about",
        component: () => import("@/components/Good.vue")
    },
    {
        path: "/about1",
        name: "about",
        component: () => import("@/components/Home.vue")
    },
    {
        path: "/about2",
        name: "about",
        component: () => import("@/components/About.vue")
    }, {
        path: "/meihao",
        name: "meihao",
        component: () => import("@/components/meihao.vue")
    }
]

export default routers