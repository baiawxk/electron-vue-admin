import low from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'

const modules = {
  bookmarks: './bookmarks.json',
  juejin: './juejin.json',
  shouqu: './shouqu.json'
}

const dbIns = {}

function init() {
  for (const key in modules) {
    const path = modules[key]
    const adapter = new FileSync(path)
    const db = low(adapter)
    dbIns[key] = db
  }
}

init()

export default dbIns
