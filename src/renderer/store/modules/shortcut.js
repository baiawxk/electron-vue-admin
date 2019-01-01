import dbMgr from '@/db'
import lo from 'lodash'
const type = 'shortcut'
const dbName = 'data'
const db = dbMgr.get(dbName)
const items = db.defaults({
  shortcut: []
}).get(type).cloneDeep().value()

const shortcut = {
  state: {
    items
  },
  getters: {},
  mutations: {
    ADD: (state, arys) => {
      state.items.push(...arys)
      db.get(type).push(...arys).write()
    },
    DEL: (state, id) => {
      lo.remove(state.items, function (item) {
        return item.id == id
      })
      state.items.splice(state.items.length)
      db.get(type).remove(function (item) {
        return item.id == id
      }).write()
    }
  },
  actions: {
    add: function (context, items) {
      context.commit('ADD', items)
    },
    del: function (context, id) {
      context.commit('DEL', id)
    }
  }
}
export default shortcut