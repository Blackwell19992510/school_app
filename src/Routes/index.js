import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/views/HomeView.vue'
import CoursesPage from '../components/views/CoursesPage.vue'
import NewCourse from '../components/views/NewCourse.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/coursespage',
      name: 'CoursesPage',
      component: CoursesPage
    },
    {
        path: '/newcourse',
        name: 'NewCourse',
        component: NewCourse
    }
  ]
})

export default router
