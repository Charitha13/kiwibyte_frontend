import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AddTopic from '../views/AddTopic.vue'
import Topic from '../views/Topic.vue'
import EditTopic from '../views/EditTopic.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/topic/:id',
    name: 'topic',
    component: Topic
  },
  {
    path: '/add-topic',
    name: 'add-topic',
    component: AddTopic
  },
  {
    path: '/edit-topic/:id',
    name: 'edit-topic',
    component: EditTopic
  },
 
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
