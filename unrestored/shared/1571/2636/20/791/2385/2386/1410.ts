/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1410
 */

"use strict"

var r = require(/* 311 */"./1402/311")
var /* [auto-meaningful-name] */r$ArrayPrototypePop = r.ArrayPrototypePop
var /* [auto-meaningful-name] */r$Promise = r.Promise
var a = require(/* 583 */"./1402/583")
var /* [auto-meaningful-name] */a$isIterable = a.isIterable
var /* [auto-meaningful-name] */a$isNodeStream = a.isNodeStream
var /* [auto-meaningful-name] */a$isWebStream = a.isWebStream
var /* [auto-meaningful-name] */require_1159_$_1402_1159_index$pipelineImpl = require(/* 1159 */"./1402/1159/index").pipelineImpl
var /* [auto-meaningful-name] */require_650_$_1402_650$finished = require(/* 650 */"./1402/650").finished
require(/* 1402 */"./1402/index")
module.exports = {
  finished: require_650_$_1402_650$finished,
  pipeline: function () {
    for (var /* [auto-meaningful-name] */arguments$length = arguments.length, t = new Array(arguments$length), n = 0; n < arguments$length; n++) {
      t[n] = arguments[n]
    }
    return new r$Promise(function (e, n) {
      var /* [auto-meaningful-name] */f$signal
      var /* [auto-meaningful-name] */f$end
      var a = t[t.length - 1]
      if (a && "object" === typeof a && !a$isNodeStream(a) && !a$isIterable(a) && !a$isWebStream(a)) {
        var f = r$ArrayPrototypePop(t)
        f$signal = f.signal
        f$end = f.end
      }
      require_1159_$_1402_1159_index$pipelineImpl(t, function (t, r) {
        if (t) {
          n(t)
        } else {
          e(r)
        }
      }, {
        signal: f$signal,
        end: f$end
      })
    })
  }
}
