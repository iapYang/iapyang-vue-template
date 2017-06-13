import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const About = r => require.ensure([], () => r(require('./component/view/About.vue')), 'about');

const Hello = r => require.ensure([], () => r(require('./component/view/Hello.vue')), 'hello');

const routes = [{
    path: '/about',
    name: 'about',
    component: About,
}, {
    path: '/hello',
    name: 'hello',
    component: Hello,
}];

const router = new VueRouter({
    routes,
});

export default router;
