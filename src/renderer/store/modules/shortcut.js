import dbMgr from '@/db'

const type = 'shortcut'
const dbName = 'data'
const db = dbMgr.get(dbName)
const items = db.defaults({ shortcut: [] }).get(type).cloneDeep().value()

const shortcut = {
  state: {
    items
  },
  getters: {},
  mutations: {
    ADD: (state, arys) => {
      state.items.push(...arys)
      db.get(type).push(...arys).write()
    }
  },
  actions: {
    add: function(context, items) {
      context.commit('ADD', items)
    }
  }
}
export default shortcut
