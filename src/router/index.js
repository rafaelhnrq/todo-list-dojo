import VueRouter from 'vue-router'
import TodoList from '@/pages/todoList'

const About = () => import('@/pages/about')
const Error = () => import('@/pages/error')

const routes = [
    { path: '/', name: 'todo-list', component: TodoList },
    { path: '/about', name: 'about', component: About },
    { path: '*', name: 'error', component: Error },
]

const router = new VueRouter({
    routes
})

export default router