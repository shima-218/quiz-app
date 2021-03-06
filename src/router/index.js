import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Question from '../views/Question.vue'
import Result from '../views/Result.vue'
import Confirm from '../views/Confirm.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/:id',
        name: 'Question',
        component: Question
    },
    {
        path: '/confirm',
        name: 'Confirm',
        component: Confirm
    },
    {
        path: '/result',
        name: 'Result',
        component: Result
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/'
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router