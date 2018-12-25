const url = 'https://d.miwifi.com/d2r?url='

const Base64 = require('js-base64').Base64

const opn = require('opn')

exports.genUrl = function(url) {
  const dl = 'https://d.miwifi.com/d2r/'
  if (url == null) {
    return dl
  } else {
    const base = Base64.encode(url)
    const returnUrl = `${dl}?url=${base}`
    return returnUrl
  }
}

exports.dlUrl = function(url) {
  const rl = this.genUrl(url)
  opn(rl)
}
