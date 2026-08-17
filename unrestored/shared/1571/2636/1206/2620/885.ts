/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：885
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.getServiceOrigin = function (e, t) {
  var n = ""
  switch (e) {
    case "dev":
      n = "dev-"
      break
    case "test":
      n = "test-"
      break
    case "test1":
      n = "test1-"
      break
    case "test2":
      n = "test2-"
      break
    case "test3":
      n = "test3-"
      break
    case "test4":
      n = "test4-"
      break
    case "test5":
      n = "test5-"
      break
    case "test6":
      n = "test6-"
      break
    case "staging":
      n = "staging-"
  }
  return "https://".concat(n).concat(t)
}
exports.blobToJson = function (e) {
  return new Promise(function (t, n) {
    if ("application/json" === e.type) {
      var r = new FileReader()
      r.onload = function () {
        var /* [auto-meaningful-name] */r$result
        var o
        try {
          var i = null !== (o = null === (r$result = r.result) || undefined === r$result ? undefined : r$result.toString()) && undefined !== o ? o : ""
          t(JSON.parse(i))
        } catch (a) {
          n(new Error("Unable to parse JSON"))
        }
      }
      r.onerror = n
      r.readAsText(e)
    } else {
      n(new Error("Blob Type is ".concat(e.type, ", not application/json")))
    }
  })
}
