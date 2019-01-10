import Vue from 'vue';
import Router from 'vue-router';
import FilmsPopulaires from './views/FilmsPopulaires.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'popular',
            component: FilmsPopulaires,
        },
        {
            path: '/upcoming',
            name: 'upcoming',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "upcoming" */ './views/FilmsAVenir.vue'),
        },
    ],
});
