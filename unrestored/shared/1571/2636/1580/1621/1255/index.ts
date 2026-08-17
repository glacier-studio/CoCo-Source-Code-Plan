/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1255
 */

"use strict"

var r = require(/* 194 */"../../1648/194")
var o = require(/* 271 */"../../1648/271")
var i = require(/* 1256 */"../../1754/257/1256")
var a = require(/* 425 */"../../1780/425")
var s = require(/* 760 */"../../1282/760")
var c = require(/* 168 */"../../1648/168")
var l = require(/* 639 */"../../1282/639")
var u = require(/* 477 */"../../1720/477")
var d = require(/* 256 */"../../1775/256")
var p = require(/* 1257 */"../../1750/578/1257")
var f = require(/* 1622 */"./1622")
var h = require(/* 497 */"../../1705/497")
var m = require(/* 638 */"../../1706/638")
var /* [auto-meaningful-name] */require_635_$$_$$_1648_635$f = require(/* 635 */"../../1648/635").f
var /* [auto-meaningful-name] */require_300_$$_$$_1648_300_index$f = require(/* 300 */"../../1648/300/index").f
var v = require(/* 1084 */"../../1753/1084")
var b = require(/* 534 */"../../1282/534")
var y = require(/* 426 */"../../1282/426")
var /* [auto-meaningful-name] */y$get = y.get
var /* [auto-meaningful-name] */y$set = y.set
var /* [auto-meaningful-name] */r$ArrayBuffer = r.ArrayBuffer
var C = r$ArrayBuffer
var /* [auto-meaningful-name] */r$DataView = r.DataView
var S = r$DataView && r$DataView.prototype
var /* [auto-meaningful-name] */Object$prototype = Object.prototype
var /* [auto-meaningful-name] */r$RangeError = r.RangeError
var /* [auto-meaningful-name] */f$pack = f.pack
var /* [auto-meaningful-name] */f$unpack = f.unpack
var R = function (e) {
  return [255 & e]
}
var k = function (e) {
  return [255 & e, e >> 8 & 255]
}
var x = function (e) {
  return [255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255]
}
var D = function (e) {
  return e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0]
}
var M = function (e) {
  return f$pack(e, 23, 4)
}
var L = function (e) {
  return f$pack(e, 52, 8)
}
var P = function (e, t) {
  require_300_$$_$$_1648_300_index$f(e.prototype, t, {
    get: function () {
      return y$get(this)[t]
    }
  })
}
var B = function (e, t, n, r) {
  var o = p(n)
  var i = y$get(e)
  if (o + t > i.byteLength) {
    throw r$RangeError("Wrong index")
  }
  var /* [auto-meaningful-name] */y$getI$buffer$bytes = y$get(i.buffer).bytes
  var s = o + i.byteOffset
  var c = y$getI$buffer$bytes.slice(s, s + t)
  return r ? c : c.reverse()
}
var F = function (e, t, n, r, o, i) {
  var a = p(n)
  var s = y$get(e)
  if (a + t > s.byteLength) {
    throw r$RangeError("Wrong index")
  }
  for (var /* [auto-meaningful-name] */y$getS$buffer$bytes = y$get(s.buffer).bytes, l = a + s.byteOffset, u = r(+o), d = 0; d < t; d++) {
    y$getS$buffer$bytes[l + d] = u[i ? d : t - d - 1]
  }
}
if (i) {
  if (!c(function () {
    r$ArrayBuffer(1)
  }) || !c(function () {
    new r$ArrayBuffer(-1)
  }) || c(function () {
    new r$ArrayBuffer()
    new r$ArrayBuffer(1.5)
    new r$ArrayBuffer(NaN)
    return "ArrayBuffer" != r$ArrayBuffer.name
  })) {
    for (var G, W = (C = function (e) {
        l(this, C)
        return new r$ArrayBuffer(p(e))
      }).prototype = r$ArrayBuffer.prototype, U = require_635_$$_$$_1648_635$f(r$ArrayBuffer), H = 0; U.length > H;) {
      if (!((G = U[H++]) in C)) {
        a(C, G, r$ArrayBuffer[G])
      }
    }
    W.constructor = C
  }
  if (m && h(S) !== Object$prototype) {
    m(S, Object$prototype)
  }
  var V = new r$DataView(new C(2))
  var /* [auto-meaningful-name] */S$setInt8 = S.setInt8
  V.setInt8(0, 2147483648)
  V.setInt8(1, 2147483649)
  if (!(!V.getInt8(0) && V.getInt8(1))) {
    s(S, {
      setInt8: function (e, t) {
        S$setInt8.call(this, e, t << 24 >> 24)
      },
      setUint8: function (e, t) {
        S$setInt8.call(this, e, t << 24 >> 24)
      }
    }, {
      unsafe: true
    })
  }
} else {
  C = function (e) {
    l(this, C, "ArrayBuffer")
    var t = p(e)
    y$set(this, {
      bytes: v.call(new Array(t), 0),
      byteLength: t
    })
    if (!o) {
      this.byteLength = t
    }
  }
  r$DataView = function (e, t, n) {
    l(this, r$DataView, "DataView")
    l(e, C, "DataView")
    var /* [auto-meaningful-name] */y$getE$byteLength = y$get(e).byteLength
    var i = u(t)
    if (i < 0 || i > y$getE$byteLength) {
      throw r$RangeError("Wrong offset")
    }
    if (i + (n = undefined === n ? y$getE$byteLength - i : d(n)) > y$getE$byteLength) {
      throw r$RangeError("Wrong length")
    }
    y$set(this, {
      buffer: e,
      byteLength: n,
      byteOffset: i
    })
    if (!o) {
      this.buffer = e
      this.byteLength = n
      this.byteOffset = i
    }
  }
  if (o) {
    P(C, "byteLength")
    P(r$DataView, "buffer")
    P(r$DataView, "byteLength")
    P(r$DataView, "byteOffset")
  }
  s(r$DataView.prototype, {
    getInt8: function (e) {
      return B(this, 1, e)[0] << 24 >> 24
    },
    getUint8: function (e) {
      return B(this, 1, e)[0]
    },
    getInt16: function (e) {
      var t = B(this, 2, e, arguments.length > 1 ? arguments[1] : undefined)
      return (t[1] << 8 | t[0]) << 16 >> 16
    },
    getUint16: function (e) {
      var t = B(this, 2, e, arguments.length > 1 ? arguments[1] : undefined)
      return t[1] << 8 | t[0]
    },
    getInt32: function (e) {
      return D(B(this, 4, e, arguments.length > 1 ? arguments[1] : undefined))
    },
    getUint32: function (e) {
      return D(B(this, 4, e, arguments.length > 1 ? arguments[1] : undefined)) >>> 0
    },
    getFloat32: function (e) {
      return f$unpack(B(this, 4, e, arguments.length > 1 ? arguments[1] : undefined), 23)
    },
    getFloat64: function (e) {
      return f$unpack(B(this, 8, e, arguments.length > 1 ? arguments[1] : undefined), 52)
    },
    setInt8: function (e, t) {
      F(this, 1, e, R, t)
    },
    setUint8: function (e, t) {
      F(this, 1, e, R, t)
    },
    setInt16: function (e, t) {
      F(this, 2, e, k, t, arguments.length > 2 ? arguments[2] : undefined)
    },
    setUint16: function (e, t) {
      F(this, 2, e, k, t, arguments.length > 2 ? arguments[2] : undefined)
    },
    setInt32: function (e, t) {
      F(this, 4, e, x, t, arguments.length > 2 ? arguments[2] : undefined)
    },
    setUint32: function (e, t) {
      F(this, 4, e, x, t, arguments.length > 2 ? arguments[2] : undefined)
    },
    setFloat32: function (e, t) {
      F(this, 4, e, M, t, arguments.length > 2 ? arguments[2] : undefined)
    },
    setFloat64: function (e, t) {
      F(this, 8, e, L, t, arguments.length > 2 ? arguments[2] : undefined)
    }
  })
}
b(C, "ArrayBuffer")
b(r$DataView, "DataView")
module.exports = {
  ArrayBuffer: C,
  DataView: r$DataView
}
