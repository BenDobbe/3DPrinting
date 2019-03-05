// Import modules 
import Vue from 'vue';
import VueRouter from 'vue-router';

// Import Page Components
import HomePage from '@/views/HomePage.vue';
import ShowcasePage from '@/views/ShowcasePage.vue';
import ContactPage from '@/views/ContactPage.vue';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/home',
            name: 'home',
            component: HomePage
        },
        {
            path: '/showcase',
            name: 'showcase',
            component: ShowcasePage
        },
        {
            path: '/contact',
            name: 'contact',
            component: ContactPage
        },
        { path: '*', redirect: { name: 'home' } }
    ],
})