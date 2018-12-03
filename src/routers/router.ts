import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import staticRoute from './staticRoute'

Vue.use(Router)

export default new Router({
  routes: staticRoute
})
