import bookmarks from '@/assets/data/bookmarks.json'
import shouqu from '@/assets/data/shouqu.json'
import juejin from '@/assets/data/juejin.json'

const items = [...bookmarks, ...shouqu, ...juejin]

export default {
  state: {
    items
  }
}
