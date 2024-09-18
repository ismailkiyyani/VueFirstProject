import { createRouter, createWebHistory } from 'vue-router';
import homeView from '@/views/HomeView.vue';
import JobsView from '@/views/JobsView.vue';
import JobView from '@/views/Job.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import AddJob from '@/views/Addjob.vue';


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: homeView,

        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView,

        },
        {
            path: '/:catchAll(.*)',
            name: 'not-found',
            component: NotFoundView,

        },
        {
            path: '/jobs/add',
            name: 'AddJob',
            component: AddJob,

        },
        {
            path: '/jobs/:id',
            name: 'job',
            component: JobView,

        },
    ],
});
export default router;