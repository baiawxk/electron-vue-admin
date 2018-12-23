import low from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'
import path from 'path'

const names = ['data']
const dbs = {}

function get(name) {
  let db = dbs[name]
  if (db == null) {
    const filePath = path.resolve(__dirname, `${name}.json`)
    const adapter = new FileSync(filePath)
    db = low(adapter)
  }
  return db
}

// function init() {
//   names.forEach(function(name) {
//     dbs[name] = get(name)
//   })
// }

// init()
// console.log(dbs)

// function write(name, json) {
//   const db = get()
//   db.setState(json).write()
// }

// function push(name, obj) {
//   const db = get(name)
//   if (db !== null) {
//     db.push(obj)
//       .write()
//   }
// }

// function read(name) {
//   const db = get(name)
//   if (db !== null) {
//     return db.getState()
//   }
// }

export default {
  get
}
