import dbMgr from '@/db'
import lo from 'lodash'
const type = 'todos'
const dbName = 'todos'
const db = dbMgr.get(dbName)
const items = db.defaults({
    todos: []
}).get(type).value()

const todo = {
    state: {
        items
    },
    getters: {},
    mutations: {
        addTodo: (state, item) => {
            console.log('addTodo', item);
            db.get(type).push(item).write()
        },
    },
    actions: {

    }
}
export default todo