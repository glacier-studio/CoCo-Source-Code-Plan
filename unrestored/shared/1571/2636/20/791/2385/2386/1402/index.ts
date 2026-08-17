/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1402
 */

"use strict"

var r = require(/* 399 */"../../../../../207/787/399/index")
var /* [auto-meaningful-name] */require_333_$_333_index$Buffer = require(/* 333 */"./333/index").Buffer
var o = require(/* 311 */"./311")
var /* [auto-meaningful-name] */o$ObjectDefineProperty = o.ObjectDefineProperty
var /* [auto-meaningful-name] */o$ObjectKeys = o.ObjectKeys
var /* [auto-meaningful-name] */o$ReflectApply = o.ReflectApply
var /* [auto-meaningful-name] */require_427_$_427_index$promisify$custom = require(/* 427 */"./427/index").promisify.custom
var l = require(/* 2387 */"./2387")
var /* [auto-meaningful-name] */l$streamReturningOperators = l.streamReturningOperators
var /* [auto-meaningful-name] */l$promiseReturningOperators = l.promiseReturningOperators
var /* [auto-meaningful-name] */require_402_$_402$codes$ERR_ILLEGAL_CONSTRUCTOR = require(/* 402 */"./402").codes.ERR_ILLEGAL_CONSTRUCTOR
var p = require(/* 1406 */"./1406")
var _ = require(/* 988 */"./988")
var /* [auto-meaningful-name] */_$setDefaultHighWaterMark = _.setDefaultHighWaterMark
var /* [auto-meaningful-name] */_$getDefaultHighWaterMark = _.getDefaultHighWaterMark
var /* [auto-meaningful-name] */require_1159_$_1159_index$pipeline = require(/* 1159 */"./1159/index").pipeline
var /* [auto-meaningful-name] */require_769_$_769$destroyer = require(/* 769 */"./769").destroyer
var y = require(/* 650 */"./650")
var b = require(/* 1410 */"../1410")
var w = require(/* 583 */"./583")
var E = module.exports = require(/* 1160 */"./1160").Stream
E.isDestroyed = w.isDestroyed
E.isDisturbed = w.isDisturbed
E.isErrored = w.isErrored
E.isReadable = w.isReadable
E.isWritable = w.isWritable
E.Readable = require(/* 986 */"./986/index")
var x
var C = r(o$ObjectKeys(l$streamReturningOperators))
try {
  var O = function () {
    var /* [auto-meaningful-name] */x$value = x.value
    var t = l$streamReturningOperators[x$value]
    function n() {
      if (this instanceof n ? this.constructor : undefined) {
        throw require_402_$_402$codes$ERR_ILLEGAL_CONSTRUCTOR()
      }
      for (var /* [auto-meaningful-name] */arguments$length = arguments.length, r = new Array(arguments$length), i = 0; i < arguments$length; i++) {
        r[i] = arguments[i]
      }
      return E.Readable.from(o$ReflectApply(t, this, r))
    }
    o$ObjectDefineProperty(n, "name", {
      __proto__: null,
      value: t.name
    })
    o$ObjectDefineProperty(n, "length", {
      __proto__: null,
      value: t.length
    })
    o$ObjectDefineProperty(E.Readable.prototype, x$value, {
      __proto__: null,
      value: n,
      enumerable: false,
      configurable: true,
      writable: true
    })
  }
  for (C.s(); !(x = C.n()).done;) {
    O()
  }
} catch (D) {
  C.e(D)
} finally {
  C.f()
}
var k
var S = r(o$ObjectKeys(l$promiseReturningOperators))
try {
  var T = function () {
    var /* [auto-meaningful-name] */k$value = k.value
    var t = l$promiseReturningOperators[k$value]
    function n() {
      if (this instanceof n ? this.constructor : undefined) {
        throw require_402_$_402$codes$ERR_ILLEGAL_CONSTRUCTOR()
      }
      for (var /* [auto-meaningful-name] */arguments$length = arguments.length, r = new Array(arguments$length), i = 0; i < arguments$length; i++) {
        r[i] = arguments[i]
      }
      return o$ReflectApply(t, this, r)
    }
    o$ObjectDefineProperty(n, "name", {
      __proto__: null,
      value: t.name
    })
    o$ObjectDefineProperty(n, "length", {
      __proto__: null,
      value: t.length
    })
    o$ObjectDefineProperty(E.Readable.prototype, k$value, {
      __proto__: null,
      value: n,
      enumerable: false,
      configurable: true,
      writable: true
    })
  }
  for (S.s(); !(k = S.n()).done;) {
    T()
  }
} catch (D) {
  S.e(D)
} finally {
  S.f()
}
E.Writable = require(/* 1161 */"./1161")
E.Duplex = require(/* 584 */"./584/index")
E.Transform = require(/* 1409 */"./1409")
E.PassThrough = require(/* 1408 */"./1408")
E.pipeline = require_1159_$_1159_index$pipeline
var /* [auto-meaningful-name] */require_987_$_987$addAbortSignal = require(/* 987 */"./987").addAbortSignal
E.addAbortSignal = require_987_$_987$addAbortSignal
E.finished = y
E.destroy = require_769_$_769$destroyer
E.compose = p
E.setDefaultHighWaterMark = _$setDefaultHighWaterMark
E.getDefaultHighWaterMark = _$getDefaultHighWaterMark
o$ObjectDefineProperty(E, "promises", {
  __proto__: null,
  configurable: true,
  enumerable: true,
  get: function () {
    return b
  }
})
o$ObjectDefineProperty(require_1159_$_1159_index$pipeline, require_427_$_427_index$promisify$custom, {
  __proto__: null,
  enumerable: true,
  get: function () {
    return b.pipeline
  }
})
o$ObjectDefineProperty(y, require_427_$_427_index$promisify$custom, {
  __proto__: null,
  enumerable: true,
  get: function () {
    return b.finished
  }
})
E.Stream = E
E._isUint8Array = function (e) {
  return e instanceof Uint8Array
}
E._uint8ArrayToBuffer = function (e) {
  return require_333_$_333_index$Buffer.from(e.buffer, e.byteOffset, e.byteLength)
}
