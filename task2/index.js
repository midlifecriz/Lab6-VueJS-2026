import { createRouter, createWebHistory } from 'vue-router'
import TodoList from '../views/TodoList.vue'
import AddTask from '../views/AddTask.vue'
import TaskView from '../views/TaskView.vue'
import About from '../views/About.vue'

const routes = [
  { path: '/', component: TodoList },
  { path: '/add', component: AddTask },
  { path: '/task/:id', component: TaskView },
  { path: '/about', component: About }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
