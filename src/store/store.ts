import Vue from 'vue'
import Vuex from 'vuex'
import Music from './music/mutations'
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        music: Music
    }
  })
  