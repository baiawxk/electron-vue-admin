import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import bookmark from './modules/bookmark'
import shortcut from './modules/shortcut'
import getters from './getters'
import todo from './modules/todo'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    user,
    bookmark,
    shortcut,
    todo
  },
  getters
})

export default store