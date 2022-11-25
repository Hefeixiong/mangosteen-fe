import { createApp } from 'vue'
import {App} from './App'
import { Bar } from './components/Bar'
import { Foo } from './components/Foo'
import {createRouter, createWebHashHistory} from 'vue-router'


const routes = [
  { path: '/', component: Foo },
  {path: '/bar', component: Bar}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
