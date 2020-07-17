import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history' ,
    routes: [
        {
            path: '/',
            name: 'dashboard',
            component: () => import('./components/views/pages/Dashboard')
        },
        {
            path: '/email',
            name: 'email',
            component: () => import('./components/views/pages/Email')
        }
        ,
        {
            path: '/users',
            name: 'users',
            component: () => import('./components/views/pages/user/UserList')
        }
    ]
});
export default router
