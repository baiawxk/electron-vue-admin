let url = 'https://d.miwifi.com/d2r?url=';

let Base64 = require('js-base64').Base64;

let opn = require('opn');

exports.genUrl = function (url) {
    let dl = 'https://d.miwifi.com/d2r/'
    if (url == null)
        return dl;
    else {
        let base = Base64.encode(url);
        let returnUrl = `${dl}?url=${base}`;
        return returnUrl;
    }
}

exports.dlUrl = function (url) {
    let rl = this.genUrl(url);
    opn(rl);
}