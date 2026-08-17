/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2023
 */

var r = require(/* 2024 */"./2024/index")
r.prototype.toPostfix = function () {
  "use strict"

  for (var e, t, n, /* [auto-meaningful-name] */EThis$valueU$pre, o, a = [], s = [
      {
        value: "(",
        type: 4,
        pre: 0
      }
    ], /* [auto-meaningful-name] */this$value = this.value, u = 1; u < this$value.length; u++) {
    if (1 === this$value[u].type || 3 === this$value[u].type || 13 === this$value[u].type) {
      if (1 === this$value[u].type) {
        this$value[u].value = Number(this$value[u].value)
      }
      a.push(this$value[u])
    } else if (4 === this$value[u].type) {
      s.push(this$value[u])
    } else if (5 === this$value[u].type) {
      for (; 4 !== (t = s.pop()).type;) {
        a.push(t)
      }
    } else if (11 === this$value[u].type) {
      for (; 4 !== (t = s.pop()).type;) {
        a.push(t)
      }
      s.push(t)
    } else {
      EThis$valueU$pre = (e = this$value[u]).pre
      n = (o = s[s.length - 1]).pre
      var l = "Math.pow" == o.value && "Math.pow" == e.value
      if (EThis$valueU$pre > n) {
        s.push(e)
      } else {
        for (; n >= EThis$valueU$pre && !l || l && EThis$valueU$pre < n;) {
          t = s.pop()
          o = s[s.length - 1]
          a.push(t)
          n = o.pre
          l = "Math.pow" == e.value && "Math.pow" == o.value
        }
        s.push(e)
      }
    }
  }
  return new r(a)
}
module.exports = r
