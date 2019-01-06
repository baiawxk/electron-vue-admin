import lo from 'lodash'
import pinyin from 'pinyin4js'
import uuid from 'uuid/v1'

import Segmentit, {
  useDefault
} from 'segmentit';
//tencent-nlp
const segmentit = useDefault(new Segmentit());


//todo status
const ST_DONE = "done"
const ST_TODO = "todo"
const ST_DEL = "DEL"

//todo type
const TP_TODO = "todo"
const TP_PRO = "project"

//project type
const PRO_INFO = "infobox"
const PRO_NEXT = "next"
const PRO_MAYBE = "maybe"
const PRO_FUTURE = "future"
const PRO_WAIT = "wait"




const opt_dft = {
  status: ST_TODO,
  subs: [],
  tags: [],
  gtdInfo: {
    project: PRO_INFO,
  },
}

function get(str, opt) {
  if (!lo.isEmpty(str)) {
    let obj = {
      id: uuid(),
      title: str,
      createTime: new Date().getTime()
    }
    return lo.defaults(obj, opt_dft, opt, appendPinyin(obj), appendCuts(obj))
  } else {
    return null
  }
}

function appendCuts(obj) {
  let title = obj.title;
  return {
    segment: {
      title: segmentResultToAry(segmentit.doSegment(title))
    }
  }
}

function segmentResultToAry(obj) {

  return lo.chain(obj)
    .flatMap(function (obj) {
      let w = obj['w'];
      if (w.length <= 1)
        return [];
      else return w;
    })
    .uniq()
    .value()
}

function appendPinyin(obj) {
  let title = obj.title || "";
  let content = obj.content || "";
  return {
    pinyin: {
      title: PinyinHelper.convertToPinyinString(title, '', PinyinFormat.FIRST_LETTER),
      content: PinyinHelper.convertToPinyinString(content, '', PinyinFormat.FIRST_LETTER)
    }
  }
}

export default {
  get
}