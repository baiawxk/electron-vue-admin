const fetch = require('node-fetch')
const cheerio = require('cheerio')
const url = require('url')

function getUrlMeta(urlString) {
  const obj = url.parse(urlString)

  const protocol = obj['protocol']
  const host = obj['host']

  const favicon = `${protocol}//${host}/favicon.ico`

  return new Promise(function(resolve, reject) {
    fetch(urlString)
      .then(res => res.text())
      .then(function(body) {
        const $ = cheerio.load(body)
        const title = $('title').text()
        const returnObj = {
          title,
          iconUrl: favicon
        }
        resolve(returnObj)
      })
  })
}

export default {
  getUrlMeta
}
