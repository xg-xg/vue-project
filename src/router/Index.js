import Vue from 'vue';
import VueRouter from 'vue-router';
import goTo from 'vuetify/es5/services/goto';
// const store = require('store');
Vue.use(VueRouter);
const routes = [
    {
        path: '/',
        redirect: {
            path: '/index',
            component: () => import('@/views/home/Index') // 首页
        }
    },
    {
        path: '/index',
        name: 'index',
        component: () => import('@/views/home/Index') // 首页
    },
    {
        path: '/rank',
        name: 'rank',
        component: ()=> import('@/views/rank/Index')
    },
    {
        path: '/songlist',
        name: 'songlist',
        component: ()=> import('@/views/songlist/Index')
    },
    {
        path: '/mv',
        name: 'mv',
        component: ()=> import('@/views/mv/Index')
    },
    {
        path: '/singer',
        name: 'singer',
        component: ()=> import('@/views/singer/Index')
    },
    {
        path: '/mysong',
        name: 'mysong',
        component: ()=> import('@/views/mysong/Index')
    }
];
const router = new VueRouter({
    scrollBehavior: (to, from, savedPosition) => {
        let scrollTo = 0;
        if (to.hash) {
            scrollTo = to.hash;
        } else if (savedPosition) {
            scrollTo = savedPosition.y;
        }
        return goTo(scrollTo);
    },
    routes
});
export default router