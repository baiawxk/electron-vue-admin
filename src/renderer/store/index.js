import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import bookmark from './modules/bookmark'
import shortcut from './modules/shortcut'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    user,
    bookmark,
    shortcut
  },
  getters
})

export default store