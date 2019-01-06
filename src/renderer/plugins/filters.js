import moment from 'moment'

export default {
    filters: {
        fromNow: function (ts) {
            let m = moment(ts, 'x')
            return m.fromNow()
        }
    }
}