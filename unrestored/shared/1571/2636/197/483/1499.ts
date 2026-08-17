/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1499
 */

if ("undefined" != typeof self) {
  self
}
module.exports = function (e) {
  function t(r) {
    if (n[r]) {
      return n[r].exports
    }
    var i = n[r] = {
      i: r,
      l: false,
      exports: {}
    }
    e[r].call(i.exports, i, i.exports, t)
    i.l = true
    return i.exports
  }
  var n = {}
  t.m = e
  t.c = n
  t.d = function (e, n, r) {
    if (!t.o(e, n)) {
      Object.defineProperty(e, n, {
        configurable: false,
        enumerable: true,
        get: r
      })
    }
  }
  t.n = function (e) {
    var n = e && e.__esModule ? function () {
      return e.default
    } : function () {
      return e
    }
    t.d(n, "a", n)
    return n
  }
  t.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }
  t.p = "/dist/"
  return t(t.s = 58)
}([
  function (e, t) {
    var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")()
    if ("number" == typeof __g) {
      __g = n
    }
  }, function (e, t) {
    var n = e.exports = {
      version: "2.6.9"
    }
    if ("number" == typeof __e) {
      __e = n
    }
  }, function (e, t, n) {
    var r = n(31)("wks")
    var i = n(22)
    var /* [auto-meaningful-name] */n0$Symbol = n(0).Symbol
    var a = "function" == typeof n0$Symbol;
    (e.exports = function (e) {
      return r[e] || (r[e] = a && n0$Symbol[e] || (a ? n0$Symbol : i)("Symbol." + e))
    }).store = r
  }, function (e, t, n) {
    var r = n(8)
    e.exports = function (e) {
      if (!r(e)) {
        throw TypeError(e + " is not an object!")
      }
      return e
    }
  }, function (e, t, n) {
    e.exports = !n(10)(function () {
      return 7 != Object.defineProperty({}, "a", {
        get: function () {
          return 7
        }
      }).a
    })
  }, function (e, t, n) {
    var r = n(0)
    var i = n(1)
    var o = n(19)
    var a = n(6)
    var s = n(9)
    var c = function e(t, n, c) {
      var u
      var l
      var f
      var d = t & e.F
      var h = t & e.G
      var p = t & e.S
      var _ = t & e.P
      var A = t & e.B
      var g = t & e.W
      var v = h ? i : i[n] || (i[n] = {})
      var /* [auto-meaningful-name] */v$prototype = v.prototype
      var y = h ? r : p ? r[n] : (r[n] || {}).prototype
      for (u in h && (c = n), c) if (!((l = !d && y && undefined !== y[u]) && s(v, u))) {
        f = l ? y[u] : c[u]
        v[u] = h && "function" != typeof y[u] ? c[u] : A && l ? o(f, r) : g && y[u] == f ? function (e) {
          var t = function (t, n, r) {
            if (this instanceof e) {
              switch (arguments.length) {
                case 0:
                  return new e()
                case 1:
                  return new e(t)
                case 2:
                  return new e(t, n)
              }
              return new e(t, n, r)
            }
            return e.apply(this, arguments)
          }
          t.prototype = e.prototype
          return t
        }(f) : _ && "function" == typeof f ? o(Function.call, f) : f
        if (_) {
          (v.virtual || (v.virtual = {}))[u] = f
          if (t & e.R && v$prototype && !v$prototype[u]) {
            a(v$prototype, u, f)
          }
        }
      }
    }
    c.F = 1
    c.G = 2
    c.S = 4
    c.P = 8
    c.B = 16
    c.W = 32
    c.U = 64
    c.R = 128
    e.exports = c
  }, function (e, t, n) {
    var r = n(7)
    var i = n(21)
    e.exports = n(4) ? function (e, t, n) {
      return r.f(e, t, i(1, n))
    } : function (e, t, n) {
      e[t] = n
      return e
    }
  }, function (e, t, n) {
    var r = n(3)
    var i = n(43)
    var o = n(29)
    var /* [auto-meaningful-name] */Object$defineProperty = Object.defineProperty
    t.f = n(4) ? Object.defineProperty : function (e, t, n) {
      r(e)
      t = o(t, true)
      r(n)
      if (i) {
        try {
          return Object$defineProperty(e, t, n)
        } catch (e) {}
      }
      if ("get" in n || "set" in n) {
        throw TypeError("Accessors not supported!")
      }
      if ("value" in n) {
        e[t] = n.value
      }
      return e
    }
  }, function (e, t) {
    e.exports = function (e) {
      return "object" == typeof e ? null !== e : "function" == typeof e
    }
  }, function (e, t) {
    var /* [auto-meaningful-name] */$hasOwnProperty = {}.hasOwnProperty
    e.exports = function (e, t) {
      return $hasOwnProperty.call(e, t)
    }
  }, function (e, t) {
    e.exports = function (e) {
      try {
        return !!e()
      } catch (e) {
        return true
      }
    }
  }, function (e, t, n) {
    var r = n(47)
    var i = n(27)
    e.exports = function (e) {
      return r(i(e))
    }
  }, function (e, t, n) {
    "use strict"

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    function i(e) {
      var t = e + 864e5
      return new Date().getTime() > t
    }
    function o(e) {
      return (0, A.default)(e).filter(function (e) {
        return e.startsWith("x:")
      }).map(function (t) {
        return [t, e[t].toString()]
      })
    }
    function a(e) {
      return "qiniu_js_sdk_upload_file_" + e.name + "_size_" + e.size
    }
    function s(e) {
      try {
        return JSON.parse(localStorage.getItem(a(e))) || []
      } catch (e) {
        if (window.console && window.console.warn) {
          console.warn("getLocalFileInfo failed")
        }
        return []
      }
    }
    function c(e) {
      return {
        Authorization: "UpToken " + e
      }
    }
    function u() {
      return window.XMLHttpRequest ? new XMLHttpRequest() : new window.ActiveXObject("Microsoft.XMLHTTP")
    }
    function l(e) {
      return new h.default(function (t, n) {
        var r = new FileReader()
        r.readAsArrayBuffer(e)
        r.onload = function (e) {
          var /* [auto-meaningful-name] */e$target$result = e.target.result
          t(e$target$result)
        }
        r.onerror = function () {
          n(new Error("fileReader 读取错误"))
        }
      })
    }
    function f(e, t) {
      return new h.default(function (n, r) {
        var i = u()
        i.open(t.method, e)
        if (t.onCreate) {
          t.onCreate(i)
        }
        if (t.headers) {
          (0, A.default)(t.headers).forEach(function (e) {
            return i.setRequestHeader(e, t.headers[e])
          })
        }
        i.upload.addEventListener("progress", function (e) {
          if (e.lengthComputable && t.onProgress) {
            t.onProgress({
              loaded: e.loaded,
              total: e.total
            })
          }
        })
        i.onreadystatechange = function () {
          var /* [auto-meaningful-name] */i$responseText = i.responseText
          if (4 === i.readyState) {
            var t = i.getResponseHeader("x-reqId") || ""
            if (200 !== i.status) {
              var o = "xhr request failed, code: " + i.status + ";"
              if (i$responseText) {
                o = o + " response: " + i$responseText
              }
              return void r({
                code: i.status,
                message: o,
                reqId: t,
                isRequestError: true
              })
            }
            try {
              n({
                data: JSON.parse(i$responseText),
                reqId: t
              })
            } catch (e) {
              r(e)
            }
          }
        }
        i.send(t.body)
      })
    }
    function d() {
      return "http:" === window.location.protocol ? "http:" : "https:"
    }
    t.__esModule = true
    var h = r(n(18))
    var p = r(n(34))
    var _ = r(n(86))
    var A = r(n(36))
    t.isChunkExpired = i
    t.getChunks = function (e, t) {
      for (var n = [], r = Math.ceil(e.size / t), i = 0; i < r; i++) {
        var o = e.slice(t * i, i === r - 1 ? e.size : t * (i + 1))
        n.push(o)
      }
      return n
    }
    t.filterParams = o
    t.sum = function (e) {
      return e.reduce(function (e, t) {
        return e + t
      }, 0)
    }
    t.setLocalFileInfo = function (e, t) {
      try {
        localStorage.setItem(a(e), (0, _.default)(t))
      } catch (e) {
        if (window.console && window.console.warn) {
          console.warn("setLocalFileInfo failed")
        }
      }
    }
    t.removeLocalFileInfo = function (e) {
      try {
        localStorage.removeItem(a(e))
      } catch (e) {
        if (window.console && window.console.warn) {
          console.warn("removeLocalFileInfo failed")
        }
      }
    }
    t.getLocalFileInfo = s
    t.getResumeUploadedSize = function (e) {
      return s(e).filter(function (e) {
        return e && !i(e.time)
      }).reduce(function (e, t) {
        return e + t.size
      }, 0)
    }
    t.createMkFileUrl = function (e, t, n, r) {
      var i = e + "/mkfile/" + t.size
      if (null != n) {
        i += "/key/" + (0, g.urlSafeBase64Encode)(n)
      }
      if (r.mimeType) {
        i += "/mimeType/" + (0, g.urlSafeBase64Encode)(t.type)
      }
      var /* [auto-meaningful-name] */r$fname = r.fname
      if (r$fname) {
        i += "/fname/" + (0, g.urlSafeBase64Encode)(r$fname)
      }
      if (r.params) {
        o(r.params).forEach(function (e) {
          return i += "/" + encodeURIComponent(e[0]) + "/" + (0, g.urlSafeBase64Encode)(e[1])
        })
      }
      return i
    }
    t.getHeadersForChunkUpload = function (e) {
      var t = c(e)
      return (0, p.default)({
        "content-type": "application/octet-stream"
      }, t)
    }
    t.getHeadersForMkFile = function (e) {
      var t = c(e)
      return (0, p.default)({
        "content-type": "text/plain"
      }, t)
    }
    t.createXHR = u
    t.computeMd5 = function (e) {
      return l(e).then(function (e) {
        var t = new m.default.ArrayBuffer()
        t.append(e)
        return t.end()
      })
    }
    t.readAsArrayBuffer = l
    t.request = f
    t.getPortFromUrl = function (e) {
      if (e && e.match) {
        var t = e.match(/(^https?)/)
        if (!t) {
          return ""
        }
        var n = t[1]
        return (t = e.match(/^https?:\/\/([^:^\/]*):(\d*)/)) ? t[2] : "http" === n ? "80" : "443"
      }
      return ""
    }
    t.getDomainFromUrl = function (e) {
      if (e && e.match) {
        var t = e.match(/^https?:\/\/([^:^\/]*)/)
        return t ? t[1] : ""
      }
      return ""
    }
    t.getUploadUrl = function (e, t) {
      var n = d()
      if (null != e.uphost) {
        return h.default.resolve(n + "//" + e.uphost)
      }
      if (null != e.region) {
        var r = v.regionUphostMap[e.region]
        var i = e.useCdnDomain ? r.cdnUphost : r.srcUphost
        return h.default.resolve(n + "//" + i)
      }
      return function (e) {
        try {
          var t = function (e) {
            var t = e.split(":")
            var n = t[0]
            var r = JSON.parse((0, g.urlSafeBase64Decode)(t[2]))
            r.ak = n
            r.bucket = r.scope.split(":")[0]
            return r
          }(e)
          return f(d() + "//api.qiniu.com/v2/query?ak=" + t.ak + "&bucket=" + t.bucket, {
            method: "GET"
          })
        } catch (e) {
          return h.default.reject(e)
        }
      }(t).then(function (e) {
        var /* [auto-meaningful-name] */e$data$up$acc$main = e.data.up.acc.main
        return n + "//" + e$data$up$acc$main[0]
      })
    }
    t.isContainFileMimeType = function (e, t) {
      return t.indexOf(e) > -1
    }
    t.createObjectURL = function (e) {
      return (window.URL || window.webkitURL || window.mozURL).createObjectURL(e)
    }
    t.getTransform = function (e, t) {
      var /* [auto-meaningful-name] */e$width = e.width
      var /* [auto-meaningful-name] */e$height = e.height
      switch (t) {
        case 1:
          return {
            width: e$width,
            height: e$height,
            matrix: [1, 0, 0, 1, 0, 0]
          }
        case 2:
          return {
            width: e$width,
            height: e$height,
            matrix: [-1, 0, 0, 1, e$width, 0]
          }
        case 3:
          return {
            width: e$width,
            height: e$height,
            matrix: [-1, 0, 0, -1, e$width, e$height]
          }
        case 4:
          return {
            width: e$width,
            height: e$height,
            matrix: [1, 0, 0, -1, 0, e$height]
          }
        case 5:
          return {
            width: e$height,
            height: e$width,
            matrix: [0, 1, 1, 0, 0, 0]
          }
        case 6:
          return {
            width: e$height,
            height: e$width,
            matrix: [0, 1, -1, 0, e$height, 0]
          }
        case 7:
          return {
            width: e$height,
            height: e$width,
            matrix: [0, -1, -1, 0, e$height, e$width]
          }
        case 8:
          return {
            width: e$height,
            height: e$width,
            matrix: [0, -1, 1, 0, 0, e$width]
          }
      }
    }
    var g = n(56)
    var v = n(39)
    var m = r(n(91))
  }, function (e, t) {
    e.exports = true
  }, function (e, t) {
    e.exports = {}
  }, function (e, t, n) {
    var r = n(46)
    var i = n(32)
    e.exports = Object.keys || function (e) {
      return r(e, i)
    }
  }, function (e, t) {
    var /* [auto-meaningful-name] */$toString = {}.toString
    e.exports = function (e) {
      return $toString.call(e).slice(8, -1)
    }
  }, function (e, t, n) {
    "use strict"

    t.__esModule = true
    t.default = function (e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function")
      }
    }
  }, function (e, t, n) {
    e.exports = {
      default: n(59),
      __esModule: true
    }
  }, function (e, t, n) {
    var r = n(20)
    e.exports = function (e, t, n) {
      r(e)
      if (undefined === t) {
        return e
      }
      switch (n) {
        case 1:
          return function (n) {
            return e.call(t, n)
          }
        case 2:
          return function (n, r) {
            return e.call(t, n, r)
          }
        case 3:
          return function (n, r, i) {
            return e.call(t, n, r, i)
          }
      }
      return function () {
        return e.apply(t, arguments)
      }
    }
  }, function (e, t) {
    e.exports = function (e) {
      if ("function" != typeof e) {
        throw TypeError(e + " is not a function!")
      }
      return e
    }
  }, function (e, t) {
    e.exports = function (e, t) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: t
      }
    }
  }, function (e, t) {
    var n = 0
    var r = Math.random()
    e.exports = function (e) {
      return "Symbol(".concat(undefined === e ? "" : e, ")_", (++n + r).toString(36))
    }
  }, function (e, t, n) {
    var r = n(7).f
    var i = n(9)
    var o = n(2)("toStringTag")
    e.exports = function (e, t, n) {
      if (e && !i(e = n ? e : e.prototype, o)) {
        r(e, o, {
          configurable: true,
          value: t
        })
      }
    }
  }, function (e, t, n) {
    var r = n(27)
    e.exports = function (e) {
      return Object(r(e))
    }
  }, function (e, t) {
    t.f = {}.propertyIsEnumerable
  }, function (e, t) {
    var /* [auto-meaningful-name] */Math$ceil = Math.ceil
    var /* [auto-meaningful-name] */Math$floor = Math.floor
    e.exports = function (e) {
      return isNaN(e = +e) ? 0 : (e > 0 ? Math$floor : Math$ceil)(e)
    }
  }, function (e, t) {
    e.exports = function (e) {
      if (undefined == e) {
        throw TypeError("Can't call method on  " + e)
      }
      return e
    }
  }, function (e, t, n) {
    var r = n(8)
    var /* [auto-meaningful-name] */n0$document = n(0).document
    var o = r(n0$document) && r(n0$document.createElement)
    e.exports = function (e) {
      return o ? n0$document.createElement(e) : {}
    }
  }, function (e, t, n) {
    var r = n(8)
    e.exports = function (e, t) {
      if (!r(e)) {
        return e
      }
      var n
      var i
      if (t && "function" == typeof (n = e.toString) && !r(i = n.call(e))) {
        return i
      }
      if ("function" == typeof (n = e.valueOf) && !r(i = n.call(e))) {
        return i
      }
      if (!t && "function" == typeof (n = e.toString) && !r(i = n.call(e))) {
        return i
      }
      throw TypeError("Can't convert object to primitive value")
    }
  }, function (e, t, n) {
    var r = n(31)("keys")
    var i = n(22)
    e.exports = function (e) {
      return r[e] || (r[e] = i(e))
    }
  }, function (e, t, n) {
    var r = n(1)
    var i = n(0)
    var o = i["__core-js_shared__"] || (i["__core-js_shared__"] = {});
    (e.exports = function (e, t) {
      return o[e] || (o[e] = undefined !== t ? t : {})
    })("versions", []).push({
      version: r.version,
      mode: n(13) ? "pure" : "global",
      copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
    })
  }, function (e, t) {
    e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
  }, function (e, t, n) {
    "use strict"

    var r = n(20)
    e.exports.f = function (e) {
      return new function (e) {
        var t
        var n
        this.promise = new e(function (e, r) {
          if (undefined !== t || undefined !== n) {
            throw TypeError("Bad Promise constructor")
          }
          t = e
          n = r
        })
        this.resolve = r(t)
        this.reject = r(n)
      }(e)
    }
  }, function (e, t, n) {
    e.exports = {
      default: n(83),
      __esModule: true
    }
  }, function (e, t) {
    t.f = Object.getOwnPropertySymbols
  }, function (e, t, n) {
    e.exports = {
      default: n(88),
      __esModule: true
    }
  }, function (e, t, n) {
    t.f = n(2)
  }, function (e, t, n) {
    var r = n(0)
    var i = n(1)
    var o = n(13)
    var a = n(37)
    var s = n(7).f
    e.exports = function (e) {
      var t = i.Symbol || (i.Symbol = o ? {} : r.Symbol || {})
      if (!("_" == e.charAt(0) || e in t)) {
        s(t, e, {
          value: a.f(e)
        })
      }
    }
  }, function (e, t, n) {
    "use strict"

    t.__esModule = true
    t.regionUphostMap = {
      z0: {
        srcUphost: "up.qiniup.com",
        cdnUphost: "upload.qiniup.com"
      },
      z1: {
        srcUphost: "up-z1.qiniup.com",
        cdnUphost: "upload-z1.qiniup.com"
      },
      z2: {
        srcUphost: "up-z2.qiniup.com",
        cdnUphost: "upload-z2.qiniup.com"
      },
      na0: {
        srcUphost: "up-na0.qiniup.com",
        cdnUphost: "upload-na0.qiniup.com"
      },
      as0: {
        srcUphost: "up-as0.qiniup.com",
        cdnUphost: "upload-as0.qiniup.com"
      }
    }
    t.region = {
      z0: "z0",
      z1: "z1",
      z2: "z2",
      na0: "na0",
      as0: "as0"
    }
  }, function (e, t) {}, function (e, t, n) {
    "use strict"

    var r = n(60)(true)
    n(42)(String, "String", function (e) {
      this._t = String(e)
      this._i = 0
    }, function () {
      var e
      var /* [auto-meaningful-name] */this$_t = this._t
      var /* [auto-meaningful-name] */this$_i = this._i
      return this$_i >= this$_t.length ? {
        value: undefined,
        done: true
      } : (e = r(this$_t, this$_i), this._i += e.length, {
        value: e,
        done: false
      })
    })
  }, function (e, t, n) {
    "use strict"

    var r = n(13)
    var i = n(5)
    var o = n(44)
    var a = n(6)
    var s = n(14)
    var c = n(61)
    var u = n(23)
    var l = n(65)
    var f = n(2)("iterator")
    var d = !([].keys && "next" in [].keys())
    var h = function () {
      return this
    }
    e.exports = function (e, t, n, p, _, A, g) {
      c(n, t, p)
      var v
      var m
      var y
      var b = function (e) {
        if (!d && e in e$prototype) {
          return e$prototype[e]
        }
        switch (e) {
          case "keys":
          case "values":
            return function () {
              return new n(this, e)
            }
        }
        return function () {
          return new n(this, e)
        }
      }
      var w = t + " Iterator"
      var E = "values" == _
      var x = false
      var /* [auto-meaningful-name] */e$prototype = e.prototype
      var O = e$prototype[f] || e$prototype["@@iterator"] || _ && e$prototype[_]
      var k = O || b(_)
      var S = _ ? E ? b("entries") : k : undefined
      var T = "Array" == t && e$prototype.entries || O
      if (T && (y = l(T.call(new e()))) !== Object.prototype && y.next) {
        u(y, w, true)
        if (!(r || "function" == typeof y[f])) {
          a(y, f, h)
        }
      }
      if (E && O && "values" !== O.name) {
        x = true
        k = function () {
          return O.call(this)
        }
      }
      if (!(r && !g || !d && !x && e$prototype[f])) {
        a(e$prototype, f, k)
      }
      s[t] = k
      s[w] = h
      if (_) {
        v = {
          values: E ? k : b("values"),
          keys: A ? k : b("keys"),
          entries: S
        }
        if (g) {
          for (m in v) if (!(m in e$prototype)) {
            o(e$prototype, m, v[m])
          }
        } else {
          i(i.P + i.F * (d || x), t, v)
        }
      }
      return v
    }
  }, function (e, t, n) {
    e.exports = !n(4) && !n(10)(function () {
      return 7 != Object.defineProperty(n(28)("div"), "a", {
        get: function () {
          return 7
        }
      }).a
    })
  }, function (e, t, n) {
    e.exports = n(6)
  }, function (e, t, n) {
    var r = n(3)
    var i = n(62)
    var o = n(32)
    var a = n(30)("IE_PROTO")
    var s = function () {}
    var c = function () {
      var /* [auto-meaningful-name] */t$contentWindow$document
      var t = n(28)("iframe")
      var /* [auto-meaningful-name] */o$length = o.length
      for (t.style.display = "none", n(49).appendChild(t), t.src = "javascript:", (t$contentWindow$document = t.contentWindow.document).open(), t$contentWindow$document.write("<script>document.F=Object</script>"), t$contentWindow$document.close(), c = t$contentWindow$document.F; o$length--;) {
        delete c.prototype[o[o$length]]
      }
      return c()
    }
    e.exports = Object.create || function (e, t) {
      var n
      if (null !== e) {
        s.prototype = r(e)
        n = new s()
        s.prototype = null
        n[a] = e
      } else {
        n = c()
      }
      return undefined === t ? n : i(n, t)
    }
  }, function (e, t, n) {
    var r = n(9)
    var i = n(11)
    var o = n(63)(false)
    var a = n(30)("IE_PROTO")
    e.exports = function (e, t) {
      var n
      var s = i(e)
      var c = 0
      var u = []
      for (n in s) if (n != a && r(s, n)) {
        u.push(n)
      }
      for (; t.length > c;) {
        if (r(s, n = t[c++])) {
          if (!~o(u, n)) {
            u.push(n)
          }
        }
      }
      return u
    }
  }, function (e, t, n) {
    var r = n(16)
    e.exports = Object("z").propertyIsEnumerable(0) ? Object : function (e) {
      return "String" == r(e) ? e.split("") : Object(e)
    }
  }, function (e, t, n) {
    var r = n(26)
    var /* [auto-meaningful-name] */Math$min = Math.min
    e.exports = function (e) {
      return e > 0 ? Math$min(r(e), 9007199254740991) : 0
    }
  }, function (e, t, n) {
    var /* [auto-meaningful-name] */n0$document = n(0).document
    e.exports = n0$document && n0$document.documentElement
  }, function (e, t, n) {
    n(66)
    for (var r = n(0), i = n(6), o = n(14), a = n(2)("toStringTag"), s = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), c = 0; c < s.length; c++) {
      var u = s[c]
      var l = r[u]
      var f = l && l.prototype
      if (f && !f[a]) {
        i(f, a, u)
      }
      o[u] = o.Array
    }
  }, function (e, t, n) {
    var r = n(16)
    var i = n(2)("toStringTag")
    var o = "Arguments" == r(function () {
      return arguments
    }())
    e.exports = function (e) {
      var t
      var n
      var a
      return undefined === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function (e, t) {
        try {
          return e[t]
        } catch (e) {}
      }(t = Object(e), i)) ? n : o ? r(t) : "Object" == (a = r(t)) && "function" == typeof t.callee ? "Arguments" : a
    }
  }, function (e, t, n) {
    var r = n(3)
    var i = n(20)
    var o = n(2)("species")
    e.exports = function (e, t) {
      var n
      var /* [auto-meaningful-name] */rE$constructor = r(e).constructor
      return undefined === rE$constructor || undefined == (n = r(rE$constructor)[o]) ? t : i(n)
    }
  }, function (e, t, n) {
    var r
    var i
    var /* [auto-meaningful-name] */INewL$MessageChannel$port2
    var a = n(19)
    var s = n(75)
    var c = n(49)
    var u = n(28)
    var l = n(0)
    var /* [auto-meaningful-name] */l$process = l.process
    var /* [auto-meaningful-name] */l$setImmediate = l.setImmediate
    var /* [auto-meaningful-name] */l$clearImmediate = l.clearImmediate
    var /* [auto-meaningful-name] */l$MessageChannel = l.MessageChannel
    var /* [auto-meaningful-name] */l$Dispatch = l.Dispatch
    var A = 0
    var g = {}
    var v = function () {
      var e = +this
      if (g.hasOwnProperty(e)) {
        var t = g[e]
        delete g[e]
        t()
      }
    }
    var m = function (e) {
      v.call(e.data)
    }
    if (!(l$setImmediate && l$clearImmediate)) {
      l$setImmediate = function (e) {
        for (var t = [], n = 1; arguments.length > n;) {
          t.push(arguments[n++])
        }
        g[++A] = function () {
          s("function" == typeof e ? e : Function(e), t)
        }
        r(A)
        return A
      }
      l$clearImmediate = function (e) {
        delete g[e]
      }
      if ("process" == n(16)(l$process)) {
        r = function (e) {
          l$process.nextTick(a(v, e, 1))
        }
      } else {
        if (l$Dispatch && l$Dispatch.now) {
          r = function (e) {
            l$Dispatch.now(a(v, e, 1))
          }
        } else {
          if (l$MessageChannel) {
            INewL$MessageChannel$port2 = (i = new l$MessageChannel()).port2
            i.port1.onmessage = m
            r = a(INewL$MessageChannel$port2.postMessage, INewL$MessageChannel$port2, 1)
          } else {
            if (l.addEventListener && "function" == typeof postMessage && !l.importScripts) {
              r = function (e) {
                l.postMessage(e + "", "*")
              }
              l.addEventListener("message", m, false)
            } else {
              r = "onreadystatechange" in u("script") ? function (e) {
                c.appendChild(u("script")).onreadystatechange = function () {
                  c.removeChild(this)
                  v.call(e)
                }
              } : function (e) {
                setTimeout(a(v, e, 1), 0)
              }
            }
          }
        }
      }
    }
    e.exports = {
      set: l$setImmediate,
      clear: l$clearImmediate
    }
  }, function (e, t) {
    e.exports = function (e) {
      try {
        return {
          e: false,
          v: e()
        }
      } catch (e) {
        return {
          e: true,
          v: e
        }
      }
    }
  }, function (e, t, n) {
    var r = n(3)
    var i = n(8)
    var o = n(33)
    e.exports = function (e, t) {
      r(e)
      if (i(t) && t.constructor === e) {
        return t
      }
      var n = o.f(e);
      (0, n.resolve)(t)
      return n.promise
    }
  }, function (e, t, n) {
    "use strict"

    t.__esModule = true
    t.urlSafeBase64Encode = function (e) {
      return (e = function (e) {
        var /* [auto-meaningful-name] */ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        var n = undefined
        var r = undefined
        var i = undefined
        var o = undefined
        var a = undefined
        var s = 0
        var c = 0
        var u = ""
        var l = []
        if (!e) {
          return e
        }
        e = function (e) {
          if (null === e || undefined === e) {
            return ""
          }
          var /* [auto-meaningful-name] */n$length
          var n = e + ""
          var r = ""
          var i = undefined
          var o = undefined
          i = o = 0
          n$length = n.length
          for (var a = 0; a < n$length; a++) {
            var s = n.charCodeAt(a)
            var c = null
            if (s < 128) {
              o++
            } else if (s > 127 && s < 2048) {
              c = String.fromCharCode(s >> 6 | 192, 63 & s | 128)
            } else if (63488 & s ^ true) {
              c = String.fromCharCode(s >> 12 | 224, s >> 6 & 63 | 128, 63 & s | 128)
            } else {
              if (64512 & s ^ true) {
                throw new RangeError("Unmatched trail surrogate at " + a)
              }
              var u = n.charCodeAt(++a)
              if (64512 & u ^ true) {
                throw new RangeError("Unmatched lead surrogate at " + (a - 1))
              }
              s = ((1023 & s) << 10) + (1023 & u) + 65536
              c = String.fromCharCode(s >> 18 | 240, s >> 12 & 63 | 128, s >> 6 & 63 | 128, 63 & s | 128)
            }
            if (null !== c) {
              if (o > i) {
                r += n.slice(i, o)
              }
              r += c
              i = o = a + 1
            }
          }
          if (o > i) {
            r += n.slice(i, n$length)
          }
          return r
        }(e + "")
        do {
          n = (a = e.charCodeAt(s++) << 16 | e.charCodeAt(s++) << 8 | e.charCodeAt(s++)) >> 18 & 63
          r = a >> 12 & 63
          i = a >> 6 & 63
          o = 63 & a
          l[c++] = ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_.charAt(n) + ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_.charAt(r) + ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_.charAt(i) + ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_.charAt(o)
        } while (s < e.length)
        switch (u = l.join(""), e.length % 3) {
          case 1:
            u = u.slice(0, -2) + "=="
            break
          case 2:
            u = u.slice(0, -1) + "="
        }
        return u
      }(e)).replace(/\//g, "_").replace(/\+/g, "-")
    }
    t.urlSafeBase64Decode = function (e) {
      return function (e) {
        var /* [auto-meaningful-name] */ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        var n = undefined
        var r = undefined
        var i = undefined
        var o = undefined
        var a = undefined
        var s = undefined
        var c = 0
        var u = 0
        var l = []
        if (!e) {
          return e
        }
        e += ""
        do {
          n = (s = ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_.indexOf(e.charAt(c++)) << 18 | ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_.indexOf(e.charAt(c++)) << 12 | (o = ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_.indexOf(e.charAt(c++))) << 6 | (a = ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_.indexOf(e.charAt(c++)))) >> 16 & 255
          r = s >> 8 & 255
          i = 255 & s
          l[u++] = 64 === o ? String.fromCharCode(n) : 64 === a ? String.fromCharCode(n, r) : String.fromCharCode(n, r, i)
        } while (c < e.length)
        return l.join("")
      }(e = e.replace(/_/g, "/").replace(/-/g, "+"))
    }
  }, function (e, t, n) {
    var r = n(46)
    var i = n(32).concat("length", "prototype")
    t.f = Object.getOwnPropertyNames || function (e) {
      return r(e, i)
    }
  }, function (e, t, n) {
    "use strict"

    t.__esModule = true
    t.pipeline = t.compressImage = t.exif = t.imageInfo = t.watermark = t.imageMogr2 = t.getUploadUrl = t.filterParams = t.getHeadersForMkFile = t.getResumeUploadedSize = t.getHeadersForChunkUpload = t.createMkFileUrl = t.region = t.upload = undefined
    var r = n(39)
    var i = n(12)
    var o = n(92)
    var a = n(94)
    var s = n(95)
    var c = n(109)
    var u = function (e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(n(110))
    var l = new c.StatisticsLogger()
    t.upload = function (e, t, n, r, i) {
      var a = {
        file: e,
        key: t,
        token: n,
        putExtra: r,
        config: i
      }
      return new s.Observable(function (e) {
        var t = new o.UploadManager(a, {
          onData: function (t) {
            return e.next(t)
          },
          onError: function (t) {
            return e.error(t)
          },
          onComplete: function (t) {
            return e.complete(t)
          }
        }, l)
        t.putFile()
        return t.stop.bind(t)
      })
    }
    t.region = r.region
    t.createMkFileUrl = i.createMkFileUrl
    t.getHeadersForChunkUpload = i.getHeadersForChunkUpload
    t.getResumeUploadedSize = i.getResumeUploadedSize
    t.getHeadersForMkFile = i.getHeadersForMkFile
    t.filterParams = i.filterParams
    t.getUploadUrl = i.getUploadUrl
    t.imageMogr2 = a.imageMogr2
    t.watermark = a.watermark
    t.imageInfo = a.imageInfo
    t.exif = a.exif
    t.compressImage = u.default
    t.pipeline = a.pipeline
  }, function (e, t, n) {
    n(40)
    n(41)
    n(50)
    n(69)
    n(81)
    n(82)
    e.exports = n(1).Promise
  }, function (e, t, n) {
    var r = n(26)
    var i = n(27)
    e.exports = function (e) {
      return function (t, n) {
        var o
        var a
        var s = String(i(t))
        var c = r(n)
        var /* [auto-meaningful-name] */s$length = s.length
        return c < 0 || c >= s$length ? e ? "" : undefined : (o = s.charCodeAt(c)) < 55296 || o > 56319 || c + 1 === s$length || (a = s.charCodeAt(c + 1)) < 56320 || a > 57343 ? e ? s.charAt(c) : o : e ? s.slice(c, c + 2) : a - 56320 + (o - 55296 << 10) + 65536
      }
    }
  }, function (e, t, n) {
    "use strict"

    var r = n(45)
    var i = n(21)
    var o = n(23)
    var a = {}
    n(6)(a, n(2)("iterator"), function () {
      return this
    })
    e.exports = function (e, t, n) {
      e.prototype = r(a, {
        next: i(1, n)
      })
      o(e, t + " Iterator")
    }
  }, function (e, t, n) {
    var r = n(7)
    var i = n(3)
    var o = n(15)
    e.exports = n(4) ? Object.defineProperties : function (e, t) {
      i(e)
      for (var n, a = o(t), /* [auto-meaningful-name] */a$length = a.length, c = 0; a$length > c;) {
        r.f(e, n = a[c++], t[n])
      }
      return e
    }
  }, function (e, t, n) {
    var r = n(11)
    var i = n(48)
    var o = n(64)
    e.exports = function (e) {
      return function (t, n, a) {
        var s
        var c = r(t)
        var u = i(c.length)
        var l = o(a, u)
        if (e && n != n) {
          for (; u > l;) {
            if ((s = c[l++]) != s) {
              return true
            }
          }
        } else {
          for (; u > l; l++) {
            if ((e || l in c) && c[l] === n) {
              return e || l || 0
            }
          }
        }
        return !e && -1
      }
    }
  }, function (e, t, n) {
    var r = n(26)
    var /* [auto-meaningful-name] */Math$max = Math.max
    var /* [auto-meaningful-name] */Math$min = Math.min
    e.exports = function (e, t) {
      return (e = r(e)) < 0 ? Math$max(e + t, 0) : Math$min(e, t)
    }
  }, function (e, t, n) {
    var r = n(9)
    var i = n(24)
    var o = n(30)("IE_PROTO")
    var /* [auto-meaningful-name] */Object$prototype = Object.prototype
    e.exports = Object.getPrototypeOf || function (e) {
      e = i(e)
      return r(e, o) ? e[o] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? Object$prototype : null
    }
  }, function (e, t, n) {
    "use strict"

    var r = n(67)
    var i = n(68)
    var o = n(14)
    var a = n(11)
    e.exports = n(42)(Array, "Array", function (e, t) {
      this._t = a(e)
      this._i = 0
      this._k = t
    }, function () {
      var /* [auto-meaningful-name] */this$_t = this._t
      var /* [auto-meaningful-name] */this$_k = this._k
      var n = this._i++
      return !this$_t || n >= this$_t.length ? (this._t = undefined, i(1)) : i(0, "keys" == this$_k ? n : "values" == this$_k ? this$_t[n] : [n, this$_t[n]])
    }, "values")
    o.Arguments = o.Array
    r("keys")
    r("values")
    r("entries")
  }, function (e, t) {
    e.exports = function () {}
  }, function (e, t) {
    e.exports = function (e, t) {
      return {
        value: t,
        done: !!e
      }
    }
  }, function (e, t, n) {
    "use strict"

    var r
    var i
    var o
    var /* [auto-meaningful-name] */n1$Promise
    var s = n(13)
    var c = n(0)
    var u = n(19)
    var l = n(51)
    var f = n(5)
    var d = n(8)
    var h = n(20)
    var p = n(70)
    var _ = n(71)
    var A = n(52)
    var /* [auto-meaningful-name] */n53$set = n(53).set
    var v = n(76)()
    var m = n(33)
    var y = n(54)
    var b = n(77)
    var w = n(55)
    var /* [auto-meaningful-name] */c$TypeError = c.TypeError
    var /* [auto-meaningful-name] */c$process = c.process
    var C = c$process && c$process.versions
    var O = C && C.v8 || ""
    var /* [auto-meaningful-name] */c$Promise = c.Promise
    var S = "process" == l(c$process)
    var T = function () {}
    var B = i = m.f
    var D = !!function () {
      try {
        var e = c$Promise.resolve(1)
        var t = (e.constructor = {})[n(2)("species")] = function (e) {
          e(T, T)
        }
        return (S || "function" == typeof PromiseRejectionEvent) && e.then(T) instanceof t && 0 !== O.indexOf("6.6") && -1 === b.indexOf("Chrome/66")
      } catch (e) {}
    }()
    var I = function (e) {
      var /* [auto-meaningful-name] */e$then
      return !(!d(e) || "function" != typeof (e$then = e.then)) && e$then
    }
    var R = function (e, t) {
      if (!e._n) {
        e._n = true
        var n = e._c
        v(function () {
          for (var r = e._v, i = 1 == e._s, o = 0; n.length > o;) {
            !function (t) {
              var n
              var o
              var a
              var s = i ? t.ok : t.fail
              var /* [auto-meaningful-name] */t$resolve = t.resolve
              var /* [auto-meaningful-name] */t$reject = t.reject
              var /* [auto-meaningful-name] */t$domain = t.domain
              try {
                if (s) {
                  if (!i) {
                    if (2 == e._h) {
                      N(e)
                    }
                    e._h = 1
                  }
                  if (true === s) {
                    n = r
                  } else {
                    if (t$domain) {
                      t$domain.enter()
                    }
                    n = s(r)
                    if (t$domain) {
                      t$domain.exit()
                      a = true
                    }
                  }
                  if (n === t.promise) {
                    t$reject(c$TypeError("Promise-chain cycle"))
                  } else {
                    if (o = I(n)) {
                      o.call(n, t$resolve, t$reject)
                    } else {
                      t$resolve(n)
                    }
                  }
                } else {
                  t$reject(r)
                }
              } catch (e) {
                if (t$domain && !a) {
                  t$domain.exit()
                }
                t$reject(e)
              }
            }(n[o++])
          }
          e._c = []
          e._n = false
          if (t && !e._h) {
            F(e)
          }
        })
      }
    }
    var F = function (e) {
      n53$set.call(c, function () {
        var t
        var /* [auto-meaningful-name] */c$onunhandledrejection
        var /* [auto-meaningful-name] */c$console
        var i = e._v
        var o = P(e)
        if (o) {
          t = y(function () {
            if (S) {
              c$process.emit("unhandledRejection", i, e)
            } else {
              if (c$onunhandledrejection = c.onunhandledrejection) {
                c$onunhandledrejection({
                  promise: e,
                  reason: i
                })
              } else {
                if ((c$console = c.console) && c$console.error) {
                  c$console.error("Unhandled promise rejection", i)
                }
              }
            }
          })
          e._h = S || P(e) ? 2 : 1
        }
        e._a = undefined
        if (o && t.e) {
          throw t.v
        }
      })
    }
    var P = function (e) {
      return 1 !== e._h && 0 === (e._a || e._c).length
    }
    var N = function (e) {
      n53$set.call(c, function () {
        var /* [auto-meaningful-name] */c$onrejectionhandled
        if (S) {
          c$process.emit("rejectionHandled", e)
        } else {
          if (c$onrejectionhandled = c.onrejectionhandled) {
            c$onrejectionhandled({
              promise: e,
              reason: e._v
            })
          }
        }
      })
    }
    var M = function (e) {
      var t = this
      if (!t._d) {
        t._d = true;
        (t = t._w || t)._v = e
        t._s = 2
        if (!t._a) {
          t._a = t._c.slice()
        }
        R(t, true)
      }
    }
    var L = function e(t) {
      var n
      var r = this
      if (!r._d) {
        r._d = true
        r = r._w || r
        try {
          if (r === t) {
            throw c$TypeError("Promise can't be resolved itself")
          }
          if (n = I(t)) {
            v(function () {
              var i = {
                _w: r,
                _d: false
              }
              try {
                n.call(t, u(e, i, 1), u(M, i, 1))
              } catch (t) {
                M.call(i, t)
              }
            })
          } else {
            r._v = t
            r._s = 1
            R(r, false)
          }
        } catch (t) {
          M.call({
            _w: r,
            _d: false
          }, t)
        }
      }
    }
    if (!D) {
      c$Promise = function (e) {
        p(this, c$Promise, "Promise", "_h")
        h(e)
        r.call(this)
        try {
          e(u(L, this, 1), u(M, this, 1))
        } catch (e) {
          M.call(this, e)
        }
      };
      (r = function (e) {
        this._c = []
        this._a = undefined
        this._s = 0
        this._d = false
        this._v = undefined
        this._h = 0
        this._n = false
      }).prototype = n(78)(c$Promise.prototype, {
        then: function (e, t) {
          var n = B(A(this, c$Promise))
          n.ok = "function" != typeof e || e
          n.fail = "function" == typeof t && t
          n.domain = S ? c$process.domain : undefined
          this._c.push(n)
          if (this._a) {
            this._a.push(n)
          }
          if (this._s) {
            R(this, false)
          }
          return n.promise
        },
        catch: function (e) {
          return this.then(undefined, e)
        }
      })
      o = function () {
        var e = new r()
        this.promise = e
        this.resolve = u(L, e, 1)
        this.reject = u(M, e, 1)
      }
      m.f = B = function (e) {
        return e === c$Promise || e === n1$Promise ? new o(e) : i(e)
      }
    }
    f(f.G + f.W + f.F * !D, {
      Promise: c$Promise
    })
    n(23)(c$Promise, "Promise")
    n(79)("Promise")
    n1$Promise = n(1).Promise
    f(f.S + f.F * !D, "Promise", {
      reject: function (e) {
        var t = B(this);
        (0, t.reject)(e)
        return t.promise
      }
    })
    f(f.S + f.F * (s || !D), "Promise", {
      resolve: function (e) {
        return w(s && this === n1$Promise ? c$Promise : this, e)
      }
    })
    f(f.S + f.F * !(D && n(80)(function (e) {
      c$Promise.all(e).catch(T)
    })), "Promise", {
      all: function (e) {
        var t = this
        var n = B(t)
        var /* [auto-meaningful-name] */n$resolve = n.resolve
        var /* [auto-meaningful-name] */n$reject = n.reject
        var o = y(function () {
          var n = []
          var o = 0
          var a = 1
          _(e, false, function (e) {
            var s = o++
            var c = false
            n.push(undefined)
            a++
            t.resolve(e).then(function (e) {
              if (!c) {
                c = true
                n[s] = e
                if (! --a) {
                  n$resolve(n)
                }
              }
            }, n$reject)
          })
          if (! --a) {
            n$resolve(n)
          }
        })
        if (o.e) {
          n$reject(o.v)
        }
        return n.promise
      },
      race: function (e) {
        var t = this
        var n = B(t)
        var /* [auto-meaningful-name] */n$reject = n.reject
        var i = y(function () {
          _(e, false, function (e) {
            t.resolve(e).then(n.resolve, n$reject)
          })
        })
        if (i.e) {
          n$reject(i.v)
        }
        return n.promise
      }
    })
  }, function (e, t) {
    e.exports = function (e, t, n, r) {
      if (!(e instanceof t) || undefined !== r && r in e) {
        throw TypeError(n + ": incorrect invocation!")
      }
      return e
    }
  }, function (e, t, n) {
    var r = n(19)
    var i = n(72)
    var o = n(73)
    var a = n(3)
    var s = n(48)
    var c = n(74)
    var u = {}
    var l = {};
    (t = e.exports = function (e, t, n, f, d) {
      var h
      var p
      var _
      var A
      var g = d ? function () {
        return e
      } : c(e)
      var v = r(n, f, t ? 2 : 1)
      var m = 0
      if ("function" != typeof g) {
        throw TypeError(e + " is not iterable!")
      }
      if (o(g)) {
        for (h = s(e.length); h > m; m++) {
          if ((A = t ? v(a(p = e[m])[0], p[1]) : v(e[m])) === u || A === l) {
            return A
          }
        }
      } else {
        for (_ = g.call(e); !(p = _.next()).done;) {
          if ((A = i(_, v, p.value, t)) === u || A === l) {
            return A
          }
        }
      }
    }).BREAK = u
    t.RETURN = l
  }, function (e, t, n) {
    var r = n(3)
    e.exports = function (e, t, n, i) {
      try {
        return i ? t(r(n)[0], n[1]) : t(n)
      } catch (t) {
        var /* [auto-meaningful-name] */e$return = e.return
        if (undefined !== e$return) {
          r(e$return.call(e))
        }
        throw t
      }
    }
  }, function (e, t, n) {
    var r = n(14)
    var i = n(2)("iterator")
    var /* [auto-meaningful-name] */Array$prototype = Array.prototype
    e.exports = function (e) {
      return undefined !== e && (r.Array === e || Array$prototype[i] === e)
    }
  }, function (e, t, n) {
    var r = n(51)
    var i = n(2)("iterator")
    var o = n(14)
    e.exports = n(1).getIteratorMethod = function (e) {
      if (undefined != e) {
        return e[i] || e["@@iterator"] || o[r(e)]
      }
    }
  }, function (e, t) {
    e.exports = function (e, t, n) {
      var r = undefined === n
      switch (t.length) {
        case 0:
          return r ? e() : e.call(n)
        case 1:
          return r ? e(t[0]) : e.call(n, t[0])
        case 2:
          return r ? e(t[0], t[1]) : e.call(n, t[0], t[1])
        case 3:
          return r ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2])
        case 4:
          return r ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3])
      }
      return e.apply(n, t)
    }
  }, function (e, t, n) {
    var r = n(0)
    var /* [auto-meaningful-name] */n53$set = n(53).set
    var o = r.MutationObserver || r.WebKitMutationObserver
    var /* [auto-meaningful-name] */r$process = r.process
    var /* [auto-meaningful-name] */r$Promise = r.Promise
    var c = "process" == n(16)(r$process)
    e.exports = function () {
      var e
      var t
      var n
      var u = function () {
        var /* [auto-meaningful-name] */r$process$domain
        var i
        for (c && (r$process$domain = r$process.domain) && r$process$domain.exit(); e;) {
          i = e.fn
          e = e.next
          try {
            i()
          } catch (r) {
            if (e) {
              n()
            } else {
              t = undefined
            }
            throw r
          }
        }
        t = undefined
        if (r$process$domain) {
          r$process$domain.enter()
        }
      }
      if (c) {
        n = function () {
          r$process.nextTick(u)
        }
      } else if (!o || r.navigator && r.navigator.standalone) {
        if (r$Promise && r$Promise.resolve) {
          var l = r$Promise.resolve(undefined)
          n = function () {
            l.then(u)
          }
        } else {
          n = function () {
            n53$set.call(r, u)
          }
        }
      } else {
        var f = true
        var d = document.createTextNode("")
        new o(u).observe(d, {
          characterData: true
        })
        n = function () {
          d.data = f = !f
        }
      }
      return function (r) {
        var i = {
          fn: r,
          next: undefined
        }
        if (t) {
          t.next = i
        }
        if (!e) {
          e = i
          n()
        }
        t = i
      }
    }
  }, function (e, t, n) {
    var /* [auto-meaningful-name] */n0$navigator = n(0).navigator
    e.exports = n0$navigator && n0$navigator.userAgent || ""
  }, function (e, t, n) {
    var r = n(6)
    e.exports = function (e, t, n) {
      for (var i in t) if (n && e[i]) {
        e[i] = t[i]
      } else {
        r(e, i, t[i])
      }
      return e
    }
  }, function (e, t, n) {
    "use strict"

    var r = n(0)
    var i = n(1)
    var o = n(7)
    var a = n(4)
    var s = n(2)("species")
    e.exports = function (e) {
      var t = "function" == typeof i[e] ? i[e] : r[e]
      if (a && t && !t[s]) {
        o.f(t, s, {
          configurable: true,
          get: function () {
            return this
          }
        })
      }
    }
  }, function (e, t, n) {
    var r = n(2)("iterator")
    var i = false
    try {
      var o = [7][r]()
      o.return = function () {
        i = true
      }
      Array.from(o, function () {
        throw 2
      })
    } catch (e) {}
    e.exports = function (e, t) {
      if (!t && !i) {
        return false
      }
      var n = false
      try {
        var o = [7]
        var a = o[r]()
        a.next = function () {
          return {
            done: n = true
          }
        }
        o[r] = function () {
          return a
        }
        e(o)
      } catch (e) {}
      return n
    }
  }, function (e, t, n) {
    "use strict"

    var r = n(5)
    var i = n(1)
    var o = n(0)
    var a = n(52)
    var s = n(55)
    r(r.P + r.R, "Promise", {
      finally: function (e) {
        var t = a(this, i.Promise || o.Promise)
        var n = "function" == typeof e
        return this.then(n ? function (n) {
          return s(t, e()).then(function () {
            return n
          })
        } : e, n ? function (n) {
          return s(t, e()).then(function () {
            throw n
          })
        } : e)
      }
    })
  }, function (e, t, n) {
    "use strict"

    var r = n(5)
    var i = n(33)
    var o = n(54)
    r(r.S, "Promise", {
      try: function (e) {
        var t = i.f(this)
        var n = o(e);
        (n.e ? t.reject : t.resolve)(n.v)
        return t.promise
      }
    })
  }, function (e, t, n) {
    n(84)
    e.exports = n(1).Object.assign
  }, function (e, t, n) {
    var r = n(5)
    r(r.S + r.F, "Object", {
      assign: n(85)
    })
  }, function (e, t, n) {
    "use strict"

    var r = n(4)
    var i = n(15)
    var o = n(35)
    var a = n(25)
    var s = n(24)
    var c = n(47)
    var /* [auto-meaningful-name] */Object$assign = Object.assign
    e.exports = !Object$assign || n(10)(function () {
      var e = {}
      var t = {}
      var n = Symbol()
      var /* [auto-meaningful-name] */Abcdefghijklmnopqrst = "abcdefghijklmnopqrst"
      e[n] = 7
      Abcdefghijklmnopqrst.split("").forEach(function (e) {
        t[e] = e
      })
      return 7 != Object$assign({}, e)[n] || Object.keys(Object$assign({}, t)).join("") != Abcdefghijklmnopqrst
    }) ? function (e, t) {
        for (var n = s(e), /* [auto-meaningful-name] */arguments$length = arguments.length, l = 1, f = o.f, d = a.f; arguments$length > l;) {
          for (var h, p = c(arguments[l++]), _ = f ? i(p).concat(f(p)) : i(p), /* [auto-meaningful-name] */_$length = _.length, g = 0; _$length > g;) {
            h = _[g++]
            if (!(r && !d.call(p, h))) {
              n[h] = p[h]
            }
          }
        }
        return n
      } : Object$assign
  }, function (e, t, n) {
    e.exports = {
      default: n(87),
      __esModule: true
    }
  }, function (e, t, n) {
    var r = n(1)
    var i = r.JSON || (r.JSON = {
      stringify: JSON.stringify
    })
    e.exports = function (e) {
      return i.stringify.apply(i, arguments)
    }
  }, function (e, t, n) {
    n(89)
    e.exports = n(1).Object.keys
  }, function (e, t, n) {
    var r = n(24)
    var i = n(15)
    n(90)("keys", function () {
      return function (e) {
        return i(r(e))
      }
    })
  }, function (e, t, n) {
    var r = n(5)
    var i = n(1)
    var o = n(10)
    e.exports = function (e, t) {
      var n = (i.Object || {})[e] || Object[e]
      var a = {}
      a[e] = t(n)
      r(r.S + r.F * o(function () {
        n(1)
      }), "Object", a)
    }
  }, function (e, t, n) {
    e.exports = function (e) {
      "use strict"

      function t(e, t) {
        var n = e[0]
        var r = e[1]
        var i = e[2]
        var o = e[3]
        r = ((r += ((i = ((i += ((o = ((o += ((n = ((n += (r & i | ~r & o) + t[0] - 680876936 | 0) << 7 | n >>> 25) + r | 0) & r | ~n & i) + t[1] - 389564586 | 0) << 12 | o >>> 20) + n | 0) & n | ~o & r) + t[2] + 606105819 | 0) << 17 | i >>> 15) + o | 0) & o | ~i & n) + t[3] - 1044525330 | 0) << 22 | r >>> 10) + i | 0
        r = ((r += ((i = ((i += ((o = ((o += ((n = ((n += (r & i | ~r & o) + t[4] - 176418897 | 0) << 7 | n >>> 25) + r | 0) & r | ~n & i) + t[5] + 1200080426 | 0) << 12 | o >>> 20) + n | 0) & n | ~o & r) + t[6] - 1473231341 | 0) << 17 | i >>> 15) + o | 0) & o | ~i & n) + t[7] - 45705983 | 0) << 22 | r >>> 10) + i | 0
        r = ((r += ((i = ((i += ((o = ((o += ((n = ((n += (r & i | ~r & o) + t[8] + 1770035416 | 0) << 7 | n >>> 25) + r | 0) & r | ~n & i) + t[9] - 1958414417 | 0) << 12 | o >>> 20) + n | 0) & n | ~o & r) + t[10] - 42063 | 0) << 17 | i >>> 15) + o | 0) & o | ~i & n) + t[11] - 1990404162 | 0) << 22 | r >>> 10) + i | 0
        r = ((r += ((i = ((i += ((o = ((o += ((n = ((n += (r & i | ~r & o) + t[12] + 1804603682 | 0) << 7 | n >>> 25) + r | 0) & r | ~n & i) + t[13] - 40341101 | 0) << 12 | o >>> 20) + n | 0) & n | ~o & r) + t[14] - 1502002290 | 0) << 17 | i >>> 15) + o | 0) & o | ~i & n) + t[15] + 1236535329 | 0) << 22 | r >>> 10) + i | 0
        r = ((r += ((i = ((i += ((o = ((o += ((n = ((n += (r & o | i & ~o) + t[1] - 165796510 | 0) << 5 | n >>> 27) + r | 0) & i | r & ~i) + t[6] - 1069501632 | 0) << 9 | o >>> 23) + n | 0) & r | n & ~r) + t[11] + 643717713 | 0) << 14 | i >>> 18) + o | 0) & n | o & ~n) + t[0] - 373897302 | 0) << 20 | r >>> 12) + i | 0
        r = ((r += ((i = ((i += ((o = ((o += ((n = ((n += (r & o | i & ~o) + t[5] - 701558691 | 0) << 5 | n >>> 27) + r | 0) & i | r & ~i) + t[10] + 38016083 | 0) << 9 | o >>> 23) + n | 0) & r | n & ~r) + t[15] - 660478335 | 0) << 14 | i >>> 18) + o | 0) & n | o & ~n) + t[4] - 405537848 | 0) << 20 | r >>> 12) + i | 0
        r = ((r += ((i = ((i += ((o = ((o += ((n = ((n += (r & o | i & ~o) + t[9] + 568446438 | 0) << 5 | n >>> 27) + r | 0) & i | r & ~i) + t[14] - 1019803690 | 0) << 9 | o >>> 23) + n | 0) & r | n & ~r) + t[3] - 187363961 | 0) << 14 | i >>> 18) + o | 0) & n | o & ~n) + t[8] + 1163531501 | 0) << 20 | r >>> 12) + i | 0
        r = ((r += ((i = ((i += ((o = ((o += ((n = ((n += (r & o | i & ~o) + t[13] - 1444681467 | 0) << 5 | n >>> 27) + r | 0) & i | r & ~i) + t[2] - 51403784 | 0) << 9 | o >>> 23) + n | 0) & r | n & ~r) + t[7] + 1735328473 | 0) << 14 | i >>> 18) + o | 0) & n | o & ~n) + t[12] - 1926607734 | 0) << 20 | r >>> 12) + i | 0
        r = ((r += ((i = ((i += ((o = ((o += ((n = ((n += (r ^ i ^ o) + t[5] - 378558 | 0) << 4 | n >>> 28) + r | 0) ^ r ^ i) + t[8] - 2022574463 | 0) << 11 | o >>> 21) + n | 0) ^ n ^ r) + t[11] + 1839030562 | 0) << 16 | i >>> 16) + o | 0) ^ o ^ n) + t[14] - 35309556 | 0) << 23 | r >>> 9) + i | 0
        r = ((r += ((i = ((i += ((o = ((o += ((n = ((n += (r ^ i ^ o) + t[1] - 1530992060 | 0) << 4 | n >>> 28) + r | 0) ^ r ^ i) + t[4] + 1272893353 | 0) << 11 | o >>> 21) + n | 0) ^ n ^ r) + t[7] - 155497632 | 0) << 16 | i >>> 16) + o | 0) ^ o ^ n) + t[10] - 1094730640 | 0) << 23 | r >>> 9) + i | 0
        r = ((r += ((i = ((i += ((o = ((o += ((n = ((n += (r ^ i ^ o) + t[13] + 681279174 | 0) << 4 | n >>> 28) + r | 0) ^ r ^ i) + t[0] - 358537222 | 0) << 11 | o >>> 21) + n | 0) ^ n ^ r) + t[3] - 722521979 | 0) << 16 | i >>> 16) + o | 0) ^ o ^ n) + t[6] + 76029189 | 0) << 23 | r >>> 9) + i | 0
        r = ((r += ((i = ((i += ((o = ((o += ((n = ((n += (r ^ i ^ o) + t[9] - 640364487 | 0) << 4 | n >>> 28) + r | 0) ^ r ^ i) + t[12] - 421815835 | 0) << 11 | o >>> 21) + n | 0) ^ n ^ r) + t[15] + 530742520 | 0) << 16 | i >>> 16) + o | 0) ^ o ^ n) + t[2] - 995338651 | 0) << 23 | r >>> 9) + i | 0
        r = ((r += ((o = ((o += (r ^ ((n = ((n += (i ^ (r | ~o)) + t[0] - 198630844 | 0) << 6 | n >>> 26) + r | 0) | ~i)) + t[7] + 1126891415 | 0) << 10 | o >>> 22) + n | 0) ^ ((i = ((i += (n ^ (o | ~r)) + t[14] - 1416354905 | 0) << 15 | i >>> 17) + o | 0) | ~n)) + t[5] - 57434055 | 0) << 21 | r >>> 11) + i | 0
        r = ((r += ((o = ((o += (r ^ ((n = ((n += (i ^ (r | ~o)) + t[12] + 1700485571 | 0) << 6 | n >>> 26) + r | 0) | ~i)) + t[3] - 1894986606 | 0) << 10 | o >>> 22) + n | 0) ^ ((i = ((i += (n ^ (o | ~r)) + t[10] - 1051523 | 0) << 15 | i >>> 17) + o | 0) | ~n)) + t[1] - 2054922799 | 0) << 21 | r >>> 11) + i | 0
        r = ((r += ((o = ((o += (r ^ ((n = ((n += (i ^ (r | ~o)) + t[8] + 1873313359 | 0) << 6 | n >>> 26) + r | 0) | ~i)) + t[15] - 30611744 | 0) << 10 | o >>> 22) + n | 0) ^ ((i = ((i += (n ^ (o | ~r)) + t[6] - 1560198380 | 0) << 15 | i >>> 17) + o | 0) | ~n)) + t[13] + 1309151649 | 0) << 21 | r >>> 11) + i | 0
        r = ((r += ((o = ((o += (r ^ ((n = ((n += (i ^ (r | ~o)) + t[4] - 145523070 | 0) << 6 | n >>> 26) + r | 0) | ~i)) + t[11] - 1120210379 | 0) << 10 | o >>> 22) + n | 0) ^ ((i = ((i += (n ^ (o | ~r)) + t[2] + 718787259 | 0) << 15 | i >>> 17) + o | 0) | ~n)) + t[9] - 343485551 | 0) << 21 | r >>> 11) + i | 0
        e[0] = n + e[0] | 0
        e[1] = r + e[1] | 0
        e[2] = i + e[2] | 0
        e[3] = o + e[3] | 0
      }
      function n(e) {
        var t
        var n = []
        for (t = 0; t < 64; t += 4) {
          n[t >> 2] = e.charCodeAt(t) + (e.charCodeAt(t + 1) << 8) + (e.charCodeAt(t + 2) << 16) + (e.charCodeAt(t + 3) << 24)
        }
        return n
      }
      function r(e) {
        var t
        var n = []
        for (t = 0; t < 64; t += 4) {
          n[t >> 2] = e[t] + (e[t + 1] << 8) + (e[t + 2] << 16) + (e[t + 3] << 24)
        }
        return n
      }
      function i(e) {
        var r
        var /* [auto-meaningful-name] */EE$substringR64$length
        var o
        var a
        var s
        var c
        var /* [auto-meaningful-name] */e$length = e.length
        var l = [1732584193, -271733879, -1732584194, 271733878]
        for (r = 64; r <= e$length; r += 64) {
          t(l, n(e.substring(r - 64, r)))
        }
        for (EE$substringR64$length = (e = e.substring(r - 64)).length, o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], r = 0; r < EE$substringR64$length; r += 1) {
          o[r >> 2] |= e.charCodeAt(r) << (r % 4 << 3)
        }
        o[r >> 2] |= 128 << (r % 4 << 3)
        if (r > 55) {
          for (t(l, o), r = 0; r < 16; r += 1) {
            o[r] = 0
          }
        }
        a = (a = 8 * e$length).toString(16).match(/(.*?)(.{0,8})$/)
        s = parseInt(a[2], 16)
        c = parseInt(a[1], 16) || 0
        o[14] = s
        o[15] = c
        t(l, o)
        return l
      }
      function o(e) {
        var t
        var n = ""
        for (t = 0; t < 4; t += 1) {
          n += l[e >> 8 * t + 4 & 15] + l[e >> 8 * t & 15]
        }
        return n
      }
      function a(e) {
        var t
        for (t = 0; t < e.length; t += 1) {
          e[t] = o(e[t])
        }
        return e.join("")
      }
      function s(e) {
        if (/[\u0080-\uFFFF]/.test(e)) {
          e = unescape(encodeURIComponent(e))
        }
        return e
      }
      function c(e) {
        var t
        var n = []
        var /* [auto-meaningful-name] */e$length = e.length
        for (t = 0; t < e$length - 1; t += 2) {
          n.push(parseInt(e.substr(t, 2), 16))
        }
        return String.fromCharCode.apply(String, n)
      }
      function u() {
        this.reset()
      }
      var l = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]
      a(i("hello"))
      if (!("undefined" == typeof ArrayBuffer || ArrayBuffer.prototype.slice)) {
        (function () {
          function e(e, t) {
            return (e = 0 | e || 0) < 0 ? Math.max(e + t, 0) : Math.min(e, t)
          }
          ArrayBuffer.prototype.slice = function (t, n) {
            var r
            var i
            var o
            var a
            var /* [auto-meaningful-name] */this$byteLength = this.byteLength
            var c = e(t, this$byteLength)
            var u = this$byteLength
            if (undefined !== n) {
              u = e(n, this$byteLength)
            }
            return c > u ? new ArrayBuffer(0) : (r = u - c, i = new ArrayBuffer(r), o = new Uint8Array(i), a = new Uint8Array(this, c, r), o.set(a), i)
          }
        })()
      }
      u.prototype.append = function (e) {
        this.appendBinary(s(e))
        return this
      }
      u.prototype.appendBinary = function (e) {
        this._buff += e
        this._length += e.length
        var r
        var /* [auto-meaningful-name] */this$_buff$length = this._buff.length
        for (r = 64; r <= this$_buff$length; r += 64) {
          t(this._hash, n(this._buff.substring(r - 64, r)))
        }
        this._buff = this._buff.substring(r - 64)
        return this
      }
      u.prototype.end = function (e) {
        var t
        var n
        var /* [auto-meaningful-name] */this$_buff = this._buff
        var /* [auto-meaningful-name] */this$_buff$length = this$_buff.length
        var o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        for (t = 0; t < this$_buff$length; t += 1) {
          o[t >> 2] |= this$_buff.charCodeAt(t) << (t % 4 << 3)
        }
        this._finish(o, this$_buff$length)
        n = a(this._hash)
        if (e) {
          n = c(n)
        }
        this.reset()
        return n
      }
      u.prototype.reset = function () {
        this._buff = ""
        this._length = 0
        this._hash = [1732584193, -271733879, -1732584194, 271733878]
        return this
      }
      u.prototype.getState = function () {
        return {
          buff: this._buff,
          length: this._length,
          hash: this._hash
        }
      }
      u.prototype.setState = function (e) {
        this._buff = e.buff
        this._length = e.length
        this._hash = e.hash
        return this
      }
      u.prototype.destroy = function () {
        delete this._hash
        delete this._buff
        delete this._length
      }
      u.prototype._finish = function (e, n) {
        var r
        var i
        var o
        var a = n
        e[a >> 2] |= 128 << (a % 4 << 3)
        if (a > 55) {
          for (t(this._hash, e), a = 0; a < 16; a += 1) {
            e[a] = 0
          }
        }
        r = (r = 8 * this._length).toString(16).match(/(.*?)(.{0,8})$/)
        i = parseInt(r[2], 16)
        o = parseInt(r[1], 16) || 0
        e[14] = i
        e[15] = o
        t(this._hash, e)
      }
      u.hash = function (e, t) {
        return u.hashBinary(s(e), t)
      }
      u.hashBinary = function (e, t) {
        var n = a(i(e))
        return t ? c(n) : n
      }
      u.ArrayBuffer = function () {
        this.reset()
      }
      u.ArrayBuffer.prototype.append = function (e) {
        var n
        var i = function (e, t, n) {
          var r = new Uint8Array(e.byteLength + t.byteLength)
          r.set(new Uint8Array(e))
          r.set(new Uint8Array(t), e.byteLength)
          return r
        }(this._buff.buffer, e)
        var /* [auto-meaningful-name] */i$length = i.length
        for (this._length += e.byteLength, n = 64; n <= i$length; n += 64) {
          t(this._hash, r(i.subarray(n - 64, n)))
        }
        this._buff = n - 64 < i$length ? new Uint8Array(i.buffer.slice(n - 64)) : new Uint8Array(0)
        return this
      }
      u.ArrayBuffer.prototype.end = function (e) {
        var t
        var n
        var /* [auto-meaningful-name] */this$_buff = this._buff
        var /* [auto-meaningful-name] */this$_buff$length = this$_buff.length
        var o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        for (t = 0; t < this$_buff$length; t += 1) {
          o[t >> 2] |= this$_buff[t] << (t % 4 << 3)
        }
        this._finish(o, this$_buff$length)
        n = a(this._hash)
        if (e) {
          n = c(n)
        }
        this.reset()
        return n
      }
      u.ArrayBuffer.prototype.reset = function () {
        this._buff = new Uint8Array(0)
        this._length = 0
        this._hash = [1732584193, -271733879, -1732584194, 271733878]
        return this
      }
      u.ArrayBuffer.prototype.getState = function () {
        var e = u.prototype.getState.call(this)
        e.buff = function (e) {
          return String.fromCharCode.apply(null, new Uint8Array(e))
        }(e.buff)
        return e
      }
      u.ArrayBuffer.prototype.setState = function (e) {
        e.buff = function (e, t) {
          var n
          var /* [auto-meaningful-name] */e$length = e.length
          var i = new ArrayBuffer(e$length)
          var o = new Uint8Array(i)
          for (n = 0; n < e$length; n += 1) {
            o[n] = e.charCodeAt(n)
          }
          return o
        }(e.buff)
        return u.prototype.setState.call(this, e)
      }
      u.ArrayBuffer.prototype.destroy = u.prototype.destroy
      u.ArrayBuffer.prototype._finish = u.prototype._finish
      u.ArrayBuffer.hash = function (e, n) {
        var i = a(function (e) {
          var n
          var /* [auto-meaningful-name] */EN64E$lengthE$subarrayN64NewUint8Array0$length
          var o
          var a
          var s
          var c
          var /* [auto-meaningful-name] */e$length = e.length
          var l = [1732584193, -271733879, -1732584194, 271733878]
          for (n = 64; n <= e$length; n += 64) {
            t(l, r(e.subarray(n - 64, n)))
          }
          for (EN64E$lengthE$subarrayN64NewUint8Array0$length = (e = n - 64 < e$length ? e.subarray(n - 64) : new Uint8Array(0)).length, o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], n = 0; n < EN64E$lengthE$subarrayN64NewUint8Array0$length; n += 1) {
            o[n >> 2] |= e[n] << (n % 4 << 3)
          }
          o[n >> 2] |= 128 << (n % 4 << 3)
          if (n > 55) {
            for (t(l, o), n = 0; n < 16; n += 1) {
              o[n] = 0
            }
          }
          a = (a = 8 * e$length).toString(16).match(/(.*?)(.{0,8})$/)
          s = parseInt(a[2], 16)
          c = parseInt(a[1], 16) || 0
          o[14] = s
          o[15] = c
          t(l, o)
          return l
        }(new Uint8Array(e)))
        return n ? c(i) : i
      }
      return u
    }()
  }, function (e, t, n) {
    "use strict"

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    t.__esModule = true
    t.UploadManager = undefined
    var i = r(n(18))
    var o = r(n(34))
    var a = r(n(17))
    var s = n(12)
    var c = n(93)
    t.UploadManager = function () {
      function e(t, n, r) {
        var i = this;
        (0, a.default)(this, e)
        this.config = (0, o.default)({
          useCdnDomain: true,
          disableStatisticsReport: false,
          retryCount: 3,
          checkByMD5: false,
          uphost: null,
          forceDirect: false,
          concurrentRequestLimit: 3,
          region: null
        }, t.config)
        this.putExtra = (0, o.default)({
          fname: "",
          params: {},
          mimeType: null
        }, t.putExtra)
        this.statisticsLogger = r
        this.progress = null
        this.xhrList = []
        this.xhrHandler = function (e) {
          return i.xhrList.push(e)
        }
        this.aborted = false
        this.file = t.file
        this.key = t.key
        this.token = t.token
        this.onData = function () {}
        this.onError = function () {}
        this.onComplete = function () {}
        this.retryCount = 0;
        (0, o.default)(this, n)
      }
      e.prototype.putFile = function () {
        var e = this
        this.aborted = false
        if (!this.putExtra.fname) {
          this.putExtra.fname = this.file.name
        }
        if (!this.putExtra.mimeType || !this.putExtra.mimeType.length || (0, s.isContainFileMimeType)(this.file.type, this.putExtra.mimeType)) {
          var t = (0, s.getUploadUrl)(this.config, this.token).then(function (t) {
            e.uploadUrl = t
            e.uploadAt = new Date().getTime()
            return e.config.forceDirect ? e.directUpload() : e.file.size > 4194304 ? e.resumeUpload() : e.directUpload()
          })
          t.then(function (t) {
            e.onComplete(t.data)
            if (!e.config.disableStatisticsReport) {
              e.sendLog(t.reqId, 200)
            }
          }, function (t) {
            e.clear()
            if (t.isRequestError && !e.config.disableStatisticsReport) {
              var n = e.aborted ? "" : t.reqId
              var r = e.aborted ? -2 : t.code
              e.sendLog(n, r)
            }
            var i = t.isRequestError && 0 === t.code && !e.aborted
            var o = ++e.retryCount <= e.config.retryCount
            if (i && o) {
              e.putFile()
            } else {
              e.onError(t)
            }
          })
          return t
        }
        var n = new Error("file type doesn't match with what you specify")
        this.onError(n)
      }
      e.prototype.clear = function () {
        this.xhrList.forEach(function (e) {
          return e.abort()
        })
        this.xhrList = []
      }
      e.prototype.stop = function () {
        this.clear()
        this.aborted = true
      }
      e.prototype.sendLog = function (e, t) {
        this.statisticsLogger.log({
          code: t,
          reqId: e,
          host: (0, s.getDomainFromUrl)(this.uploadUrl),
          remoteIp: "",
          port: (0, s.getPortFromUrl)(this.uploadUrl),
          duration: (new Date().getTime() - this.uploadAt) / 1e3,
          time: Math.floor(this.uploadAt / 1e3),
          bytesSent: this.progress ? this.progress.total.loaded : 0,
          upType: "jssdk-h5",
          size: this.file.size
        }, this.token)
      }
      e.prototype.directUpload = function () {
        var e = this
        var t = new FormData()
        t.append("file", this.file)
        t.append("token", this.token)
        if (null != this.key) {
          t.append("key", this.key)
        }
        t.append("fname", this.putExtra.fname);
        (0, s.filterParams)(this.putExtra.params).forEach(function (e) {
          return t.append(e[0], e[1])
        })
        return (0, s.request)(this.uploadUrl, {
          method: "POST",
          body: t,
          onProgress: function (t) {
            e.updateDirectProgress(t.loaded, t.total)
          },
          onCreate: this.xhrHandler
        }).then(function (t) {
          e.finishDirectProgress()
          return t
        })
      }
      e.prototype.resumeUpload = function () {
        var e = this
        this.loaded = {
          mkFileProgress: 0,
          chunks: null
        }
        this.ctxList = []
        this.localInfo = (0, s.getLocalFileInfo)(this.file)
        this.chunks = (0, s.getChunks)(this.file, 4194304)
        this.initChunksProgress()
        var t = new c.Pool(function (t) {
          return e.uploadChunk(t)
        }, this.config.concurrentRequestLimit)
        var n = this.chunks.map(function (e, n) {
          return t.enqueue({
            chunk: e,
            index: n
          })
        })
        var r = i.default.all(n).then(function () {
          return e.mkFileReq()
        })
        r.then(function (t) {
          (0, s.removeLocalFileInfo)(e.file)
        }, function (t) {
          if (!(701 !== t.code)) {
            (0, s.removeLocalFileInfo)(e.file)
          }
        })
        return r
      }
      e.prototype.uploadChunk = function (e) {
        var t = this
        var /* [auto-meaningful-name] */e$index = e.index
        var /* [auto-meaningful-name] */e$chunk = e.chunk
        var o = this.localInfo[e$index]
        var a = this.uploadUrl + "/mkblk/" + e$chunk.size
        var c = o && !(0, s.isChunkExpired)(o.time)
        var /* [auto-meaningful-name] */this$config$checkByMD5 = this.config.checkByMD5
        var l = function () {
          t.updateChunkProgress(e$chunk.size, e$index)
          t.ctxList[e$index] = {
            ctx: o.ctx,
            size: o.size,
            time: o.time,
            md5: o.md5
          }
          return i.default.resolve(null)
        }
        return c && !this$config$checkByMD5 ? l() : (0, s.computeMd5)(e$chunk).then(function (e) {
          if (c && e === o.md5) {
            return l()
          }
          var i = (0, s.getHeadersForChunkUpload)(t.token)
          var u = function (e) {
            t.updateChunkProgress(e.loaded, e$index)
          }
          var /* [auto-meaningful-name] */t$xhrHandler = t.xhrHandler
          return (0, s.request)(a, {
            method: "POST",
            headers: i,
            body: e$chunk,
            onProgress: u,
            onCreate: t$xhrHandler
          }).then(function (i) {
            u({
              loaded: e$chunk.size
            })
            t.ctxList[e$index] = {
              time: new Date().getTime(),
              ctx: i.data.ctx,
              size: e$chunk.size,
              md5: e
            };
            (0, s.setLocalFileInfo)(t.file, t.ctxList)
          })
        })
      }
      e.prototype.mkFileReq = function () {
        var e = this
        var t = (0, o.default)({
          mimeType: "application/octet-stream"
        }, this.putExtra)
        var n = (0, s.createMkFileUrl)(this.uploadUrl, this.file, this.key, t)
        var r = this.ctxList.map(function (e) {
          return e.ctx
        }).join(",")
        var a = (0, s.getHeadersForMkFile)(this.token)
        var /* [auto-meaningful-name] */this$xhrHandler = this.xhrHandler
        return (0, s.request)(n, {
          method: "POST",
          body: r,
          headers: a,
          onCreate: this$xhrHandler
        }).then(function (t) {
          e.updateMkFileProgress(1)
          return i.default.resolve(t)
        })
      }
      e.prototype.updateDirectProgress = function (e, t) {
        this.progress = {
          total: this.getProgressInfoItem(e, t + 1)
        }
        this.onData(this.progress)
      }
      e.prototype.finishDirectProgress = function () {
        if (!this.progress) {
          this.progress = {
            total: this.getProgressInfoItem(this.file.size, this.file.size)
          }
          return void this.onData(this.progress)
        }
        var /* [auto-meaningful-name] */this$progress$total = this.progress.total
        this.progress = {
          total: this.getProgressInfoItem(this$progress$total.loaded + 1, this$progress$total.size)
        }
        this.onData(this.progress)
      }
      e.prototype.initChunksProgress = function () {
        this.loaded.chunks = this.chunks.map(function (e) {
          return 0
        })
        this.notifyResumeProgress()
      }
      e.prototype.updateChunkProgress = function (e, t) {
        this.loaded.chunks[t] = e
        this.notifyResumeProgress()
      }
      e.prototype.updateMkFileProgress = function (e) {
        this.loaded.mkFileProgress = e
        this.notifyResumeProgress()
      }
      e.prototype.notifyResumeProgress = function () {
        var e = this
        this.progress = {
          total: this.getProgressInfoItem((0, s.sum)(this.loaded.chunks) + this.loaded.mkFileProgress, this.file.size + 1),
          chunks: this.chunks.map(function (t, n) {
            return e.getProgressInfoItem(e.loaded.chunks[n], t.size)
          })
        }
        this.onData(this.progress)
      }
      e.prototype.getProgressInfoItem = function (e, t) {
        return {
          loaded: e,
          size: t,
          percent: e / t * 100
        }
      }
      return e
    }()
  }, function (e, t, n) {
    "use strict"

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    t.__esModule = true
    t.Pool = undefined
    var i = r(n(18))
    var o = r(n(17))
    t.Pool = function () {
      function e(t, n) {
        (0, o.default)(this, e)
        this.runTask = t
        this.queue = []
        this.processing = []
        this.limit = n
      }
      e.prototype.enqueue = function (e) {
        var t = this
        return new i.default(function (n, r) {
          t.queue.push({
            task: e,
            resolve: n,
            reject: r
          })
          t.check()
        })
      }
      e.prototype.run = function (e) {
        var t = this
        this.queue = this.queue.filter(function (t) {
          return t !== e
        })
        this.processing.push(e)
        this.runTask(e.task).then(function () {
          t.processing = t.processing.filter(function (t) {
            return t !== e
          })
          e.resolve()
          t.check()
        }, function (t) {
          return e.reject(t)
        })
      }
      e.prototype.check = function () {
        var e = this
        var /* [auto-meaningful-name] */this$processing$length = this.processing.length
        var n = this.limit - this$processing$length
        this.queue.slice(0, n).forEach(function (t, n) {
          e.run(t)
        })
      }
      return e
    }()
  }, function (e, t, n) {
    "use strict"

    function r(e, t) {
      e = encodeURIComponent(e)
      if ("/" !== t.slice(t.length - 1)) {
        t += "/"
      }
      return t + e
    }
    function i(e, t, n) {
      if (!/^\d$/.test(e.mode)) {
        throw "mode should be number in imageView2"
      }
      var /* [auto-meaningful-name] */e$mode = e.mode
      var o = e.w
      var a = e.h
      var s = e.q
      var /* [auto-meaningful-name] */e$format = e.format
      if (!o && !a) {
        throw "param w and h is empty in imageView2"
      }
      var u = "imageView2/" + encodeURIComponent(e$mode)
      u += o ? "/w/" + encodeURIComponent(o) : ""
      u += a ? "/h/" + encodeURIComponent(a) : ""
      u += s ? "/q/" + encodeURIComponent(s) : ""
      u += e$format ? "/format/" + encodeURIComponent(e$format) : ""
      if (t) {
        u = r(t, n) + "?" + u
      }
      return u
    }
    function o(e, t, n) {
      var i = e["auto-orient"]
      var /* [auto-meaningful-name] */e$thumbnail = e.thumbnail
      var /* [auto-meaningful-name] */e$strip = e.strip
      var /* [auto-meaningful-name] */e$gravity = e.gravity
      var /* [auto-meaningful-name] */e$crop = e.crop
      var /* [auto-meaningful-name] */e$quality = e.quality
      var /* [auto-meaningful-name] */e$rotate = e.rotate
      var /* [auto-meaningful-name] */e$format = e.format
      var /* [auto-meaningful-name] */e$blur = e.blur
      var /* [auto-meaningful-name] */ImageMogr2 = "imageMogr2"
      ImageMogr2 += i ? "/auto-orient" : ""
      ImageMogr2 += e$thumbnail ? "/thumbnail/" + encodeURIComponent(e$thumbnail) : ""
      ImageMogr2 += e$strip ? "/strip" : ""
      ImageMogr2 += e$gravity ? "/gravity/" + encodeURIComponent(e$gravity) : ""
      ImageMogr2 += e$quality ? "/quality/" + encodeURIComponent(e$quality) : ""
      ImageMogr2 += e$crop ? "/crop/" + encodeURIComponent(e$crop) : ""
      ImageMogr2 += e$rotate ? "/rotate/" + encodeURIComponent(e$rotate) : ""
      ImageMogr2 += e$format ? "/format/" + encodeURIComponent(e$format) : ""
      ImageMogr2 += e$blur ? "/blur/" + encodeURIComponent(e$blur) : ""
      if (t) {
        ImageMogr2 = r(t, n) + "?" + ImageMogr2
      }
      return ImageMogr2
    }
    function a(e, t, n) {
      var /* [auto-meaningful-name] */e$mode = e.mode
      if (!e$mode) {
        throw "mode can't be empty in watermark"
      }
      var o = "watermark/" + e$mode
      if (1 !== e$mode && 2 !== e$mode) {
        throw "mode is wrong"
      }
      if (1 === e$mode) {
        var /* [auto-meaningful-name] */e$image = e.image
        if (!e$image) {
          throw "image can't be empty in watermark"
        }
        o += e$image ? "/image/" + (0, c.urlSafeBase64Encode)(e$image) : ""
      }
      if (2 === e$mode) {
        var /* [auto-meaningful-name] */e$text = e.text
        var /* [auto-meaningful-name] */e$font = e.font
        var /* [auto-meaningful-name] */e$fontsize = e.fontsize
        var /* [auto-meaningful-name] */e$fill = e.fill
        if (!e$text) {
          throw "text can't be empty in watermark"
        }
        o += e$text ? "/text/" + (0, c.urlSafeBase64Encode)(e$text) : ""
        o += e$font ? "/font/" + (0, c.urlSafeBase64Encode)(e$font) : ""
        o += e$fontsize ? "/fontsize/" + e$fontsize : ""
        o += e$fill ? "/fill/" + (0, c.urlSafeBase64Encode)(e$fill) : ""
      }
      var /* [auto-meaningful-name] */e$dissolve = e.dissolve
      var /* [auto-meaningful-name] */e$gravity = e.gravity
      var p = e.dx
      var _ = e.dy
      o += e$dissolve ? "/dissolve/" + encodeURIComponent(e$dissolve) : ""
      o += e$gravity ? "/gravity/" + encodeURIComponent(e$gravity) : ""
      o += p ? "/dx/" + encodeURIComponent(p) : ""
      o += _ ? "/dy/" + encodeURIComponent(_) : ""
      if (t) {
        o = r(t, n) + "?" + o
      }
      return o
    }
    t.__esModule = true
    t.imageView2 = i
    t.imageMogr2 = o
    t.watermark = a
    t.imageInfo = function (e, t) {
      var n = r(e, t) + "?imageInfo"
      return (0, s.request)(n, {
        method: "GET"
      })
    }
    t.exif = function (e, t) {
      var n = r(e, t) + "?exif"
      return (0, s.request)(n, {
        method: "GET"
      })
    }
    t.pipeline = function (e, t, n) {
      var s = undefined
      var c = undefined
      var u = ""
      if ("[object Array]" === Object.prototype.toString.call(e)) {
        for (var l = 0, /* [auto-meaningful-name] */e$length = e.length; l < e$length; l++) {
          if (!(s = e[l]).fop) {
            throw "fop can't be empty in pipeline"
          }
          switch (s.fop) {
            case "watermark":
              u += a(s) + "|"
              break
            case "imageView2":
              u += i(s) + "|"
              break
            case "imageMogr2":
              u += o(s) + "|"
              break
            default:
              c = true
          }
          if (c) {
            throw "fop is wrong in pipeline"
          }
        }
        if (t) {
          var /* [auto-meaningful-name] */URTNU$length = (u = r(t, n) + "?" + u).length
          if ("|" === u.slice(URTNU$length - 1)) {
            u = u.slice(0, URTNU$length - 1)
          }
        }
        return u
      }
      throw "pipeline's first param should be array"
    }
    var s = n(12)
    var c = n(56)
  }, function (e, t, n) {
    "use strict"

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    t.__esModule = true
    t.Observable = undefined
    var i = r(n(96))
    var o = r(n(17))
    t.Observable = function () {
      function e(t) {
        (0, o.default)(this, e)
        this.subscribeAction = t
      }
      e.prototype.subscribe = function (e, t, n) {
        var r = new a(e, t, n)
        var i = this.subscribeAction(r)
        return new s(r, i)
      }
      return e
    }()
    var a = function () {
      function e(t, n, r) {
        (0, o.default)(this, e)
        this.isStopped = false
        if ("object" === (undefined === t ? "undefined" : (0, i.default)(t))) {
          this._onNext = t.next
          this._onError = t.error
          this._onCompleted = t.complete
        } else {
          this._onNext = t
          this._onError = n
          this._onCompleted = r
        }
      }
      e.prototype.next = function (e) {
        if (!this.isStopped && this._onNext) {
          this._onNext(e)
        }
      }
      e.prototype.error = function (e) {
        if (!this.isStopped && this._onError) {
          this.isStopped = true
          this._onError(e)
        }
      }
      e.prototype.complete = function (e) {
        if (!this.isStopped && this._onCompleted) {
          this.isStopped = true
          this._onCompleted(e)
        }
      }
      return e
    }()
    var s = function () {
      function e(t, n) {
        (0, o.default)(this, e)
        this.observer = t
        this.result = n
      }
      e.prototype.unsubscribe = function () {
        this.observer.isStopped = true
        this.result()
      }
      return e
    }()
  }, function (e, t, n) {
    "use strict"

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    t.__esModule = true
    var i = r(n(97))
    var o = r(n(99))
    var a = "function" == typeof o.default && "symbol" == typeof i.default ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof o.default && e.constructor === o.default && e !== o.default.prototype ? "symbol" : typeof e
    }
    t.default = "function" == typeof o.default && "symbol" === a(i.default) ? function (e) {
      return undefined === e ? "undefined" : a(e)
    } : function (e) {
      return e && "function" == typeof o.default && e.constructor === o.default && e !== o.default.prototype ? "symbol" : undefined === e ? "undefined" : a(e)
    }
  }, function (e, t, n) {
    e.exports = {
      default: n(98),
      __esModule: true
    }
  }, function (e, t, n) {
    n(41)
    n(50)
    e.exports = n(37).f("iterator")
  }, function (e, t, n) {
    e.exports = {
      default: n(100),
      __esModule: true
    }
  }, function (e, t, n) {
    n(101)
    n(40)
    n(107)
    n(108)
    e.exports = n(1).Symbol
  }, function (e, t, n) {
    "use strict"

    var r = n(0)
    var i = n(9)
    var o = n(4)
    var a = n(5)
    var s = n(44)
    var /* [auto-meaningful-name] */n102$KEY = n(102).KEY
    var u = n(10)
    var l = n(31)
    var f = n(23)
    var d = n(22)
    var h = n(2)
    var p = n(37)
    var _ = n(38)
    var A = n(103)
    var g = n(104)
    var v = n(3)
    var m = n(8)
    var y = n(24)
    var b = n(11)
    var w = n(29)
    var E = n(21)
    var x = n(45)
    var C = n(105)
    var O = n(106)
    var k = n(35)
    var S = n(7)
    var T = n(15)
    var B = O.f
    var D = S.f
    var I = C.f
    var /* [auto-meaningful-name] */r$Symbol = r.Symbol
    var /* [auto-meaningful-name] */r$JSON = r.JSON
    var P = r$JSON && r$JSON.stringify
    var N = h("_hidden")
    var M = h("toPrimitive")
    var /* [auto-meaningful-name] */$propertyIsEnumerable = {}.propertyIsEnumerable
    var j = l("symbol-registry")
    var U = l("symbols")
    var H = l("op-symbols")
    var /* [auto-meaningful-name] */Object$prototype = Object.prototype
    var G = "function" == typeof r$Symbol && !!k.f
    var /* [auto-meaningful-name] */r$QObject = r.QObject
    var Q = !r$QObject || !r$QObject.prototype || !r$QObject.prototype.findChild
    var W = o && u(function () {
      return 7 != x(D({}, "a", {
        get: function () {
          return D(this, "a", {
            value: 7
          }).a
        }
      })).a
    }) ? function (e, t, n) {
        var r = B(Object$prototype, t)
        if (r) {
          delete Object$prototype[t]
        }
        D(e, t, n)
        if (r && e !== Object$prototype) {
          D(Object$prototype, t, r)
        }
      } : D
    var K = function (e) {
      var t = U[e] = x(r$Symbol.prototype)
      t._k = e
      return t
    }
    var X = G && "symbol" == typeof r$Symbol.iterator ? function (e) {
      return "symbol" == typeof e
    } : function (e) {
      return e instanceof r$Symbol
    }
    var Y = function e(t, n, r) {
      if (t === Object$prototype) {
        e(H, n, r)
      }
      v(t)
      n = w(n, true)
      v(r)
      return i(U, n) ? (r.enumerable ? (i(t, N) && t[N][n] && (t[N][n] = false), r = x(r, {
        enumerable: E(0, false)
      })) : (i(t, N) || D(t, N, E(1, {})), t[N][n] = true), W(t, n, r)) : D(t, n, r)
    }
    var q = function (e, t) {
      v(e)
      for (var n, r = A(t = b(t)), i = 0, /* [auto-meaningful-name] */r$length = r.length; r$length > i;) {
        Y(e, n = r[i++], t[n])
      }
      return e
    }
    var $ = function (e) {
      var t = $propertyIsEnumerable.call(this, e = w(e, true))
      return !(this === Object$prototype && i(U, e) && !i(H, e)) && (!(t || !i(this, e) || !i(U, e) || i(this, N) && this[N][e]) || t)
    }
    var J = function (e, t) {
      e = b(e)
      t = w(t, true)
      if (e !== Object$prototype || !i(U, t) || i(H, t)) {
        var n = B(e, t)
        if (!(!n || !i(U, t) || i(e, N) && e[N][t])) {
          n.enumerable = true
        }
        return n
      }
    }
    var Z = function (e) {
      for (var t, n = I(b(e)), r = [], o = 0; n.length > o;) {
        if (!(i(U, t = n[o++]) || t == N || t == n102$KEY)) {
          r.push(t)
        }
      }
      return r
    }
    var ee = function (e) {
      for (var t, n = e === Object$prototype, r = I(n ? H : b(e)), o = [], a = 0; r.length > a;) {
        if (!(!i(U, t = r[a++]) || n && !i(Object$prototype, t))) {
          o.push(U[t])
        }
      }
      return o
    }
    if (!G) {
      s((r$Symbol = function () {
        if (this instanceof r$Symbol) {
          throw TypeError("Symbol is not a constructor!")
        }
        var e = d(arguments.length > 0 ? arguments[0] : undefined)
        var t = function t(n) {
          if (this === Object$prototype) {
            t.call(H, n)
          }
          if (i(this, N) && i(this[N], e)) {
            this[N][e] = false
          }
          W(this, e, E(1, n))
        }
        if (o && Q) {
          W(Object$prototype, e, {
            configurable: true,
            set: t
          })
        }
        return K(e)
      }).prototype, "toString", function () {
        return this._k
      })
      O.f = J
      S.f = Y
      n(57).f = C.f = Z
      n(25).f = $
      k.f = ee
      if (o && !n(13)) {
        s(Object$prototype, "propertyIsEnumerable", $, true)
      }
      p.f = function (e) {
        return K(h(e))
      }
    }
    a(a.G + a.W + a.F * !G, {
      Symbol: r$Symbol
    })
    for (var te = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ne = 0; te.length > ne;) {
      h(te[ne++])
    }
    for (var re = T(h.store), ie = 0; re.length > ie;) {
      _(re[ie++])
    }
    a(a.S + a.F * !G, "Symbol", {
      for: function (e) {
        return i(j, e += "") ? j[e] : j[e] = r$Symbol(e)
      },
      keyFor: function (e) {
        if (!X(e)) {
          throw TypeError(e + " is not a symbol!")
        }
        for (var t in j) if (j[t] === e) {
          return t
        }
      },
      useSetter: function () {
        Q = true
      },
      useSimple: function () {
        Q = false
      }
    })
    a(a.S + a.F * !G, "Object", {
      create: function (e, t) {
        return undefined === t ? x(e) : q(x(e), t)
      },
      defineProperty: Y,
      defineProperties: q,
      getOwnPropertyDescriptor: J,
      getOwnPropertyNames: Z,
      getOwnPropertySymbols: ee
    })
    var oe = u(function () {
      k.f(1)
    })
    a(a.S + a.F * oe, "Object", {
      getOwnPropertySymbols: function (e) {
        return k.f(y(e))
      }
    })
    if (r$JSON) {
      a(a.S + a.F * (!G || u(function () {
        var e = r$Symbol()
        return "[null]" != P([e]) || "{}" != P({
          a: e
        }) || "{}" != P(Object(e))
      })), "JSON", {
        stringify: function (e) {
          for (var t, n, r = [e], i = 1; arguments.length > i;) {
            r.push(arguments[i++])
          }
          n = t = r[1]
          if ((m(t) || undefined !== e) && !X(e)) {
            if (!g(t)) {
              t = function (e, t) {
                if ("function" == typeof n) {
                  t = n.call(this, e, t)
                }
                if (!X(t)) {
                  return t
                }
              }
            }
            r[1] = t
            return P.apply(r$JSON, r)
          }
        }
      })
    }
    if (!r$Symbol.prototype[M]) {
      n(6)(r$Symbol.prototype, M, r$Symbol.prototype.valueOf)
    }
    f(r$Symbol, "Symbol")
    f(Math, "Math", true)
    f(r.JSON, "JSON", true)
  }, function (e, t, n) {
    var r = n(22)("meta")
    var i = n(8)
    var o = n(9)
    var a = n(7).f
    var s = 0
    var c = Object.isExtensible || function () {
      return true
    }
    var u = !n(10)(function () {
      return c(Object.preventExtensions({}))
    })
    var l = function (e) {
      a(e, r, {
        value: {
          i: "O" + ++s,
          w: {}
        }
      })
    }
    var f = e.exports = {
      KEY: r,
      NEED: false,
      fastKey: function (e, t) {
        if (!i(e)) {
          return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e
        }
        if (!o(e, r)) {
          if (!c(e)) {
            return "F"
          }
          if (!t) {
            return "E"
          }
          l(e)
        }
        return e[r].i
      },
      getWeak: function (e, t) {
        if (!o(e, r)) {
          if (!c(e)) {
            return true
          }
          if (!t) {
            return false
          }
          l(e)
        }
        return e[r].w
      },
      onFreeze: function (e) {
        if (u && f.NEED && c(e) && !o(e, r)) {
          l(e)
        }
        return e
      }
    }
  }, function (e, t, n) {
    var r = n(15)
    var i = n(35)
    var o = n(25)
    e.exports = function (e) {
      var t = r(e)
      var n = i.f
      if (n) {
        for (var a, s = n(e), c = o.f, u = 0; s.length > u;) {
          if (c.call(e, a = s[u++])) {
            t.push(a)
          }
        }
      }
      return t
    }
  }, function (e, t, n) {
    var r = n(16)
    e.exports = Array.isArray || function (e) {
      return "Array" == r(e)
    }
  }, function (e, t, n) {
    var r = n(11)
    var /* [auto-meaningful-name] */n57$f = n(57).f
    var /* [auto-meaningful-name] */$toString = {}.toString
    var a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : []
    e.exports.f = function (e) {
      return a && "[object Window]" == $toString.call(e) ? function (e) {
        try {
          return n57$f(e)
        } catch (e) {
          return a.slice()
        }
      }(e) : n57$f(r(e))
    }
  }, function (e, t, n) {
    var r = n(25)
    var i = n(21)
    var o = n(11)
    var a = n(29)
    var s = n(9)
    var c = n(43)
    var /* [auto-meaningful-name] */Object$getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor
    t.f = n(4) ? Object$getOwnPropertyDescriptor : function (e, t) {
      e = o(e)
      t = a(t, true)
      if (c) {
        try {
          return Object$getOwnPropertyDescriptor(e, t)
        } catch (e) {}
      }
      if (s(e, t)) {
        return i(!r.f.call(e, t), e[t])
      }
    }
  }, function (e, t, n) {
    n(38)("asyncIterator")
  }, function (e, t, n) {
    n(38)("observable")
  }, function (e, t, n) {
    "use strict"

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    t.__esModule = true
    t.StatisticsLogger = undefined
    var i = r(n(36))
    var o = r(n(17))
    var a = n(12)
    t.StatisticsLogger = function () {
      function e() {
        (0, o.default)(this, e)
      }
      e.prototype.log = function (e, t) {
        var n = "";
        (0, i.default)(e).forEach(function (t) {
          return n += e[t] + ","
        })
        this.send(n, t, 0)
      }
      e.prototype.send = function (e, t, n) {
        var r = (0, a.createXHR)()
        var i = this
        r.open("POST", "https://uplog.qbox.me/log/3")
        r.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
        r.setRequestHeader("Authorization", "UpToken " + t)
        r.onreadystatechange = function () {
          if (4 === r.readyState && 200 !== r.status && ++n <= 3) {
            i.send(e, t, n)
          }
        }
        r.send(e)
      }
      return e
    }()
  }, function (e, t, n) {
    "use strict"

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    t.__esModule = true
    var i = r(n(18))
    var o = r(n(34))
    var a = r(n(17))
    var s = r(n(36))
    var c = n(111)
    var u = n(12)
    var l = {
      PNG: "image/png",
      JPEG: "image/jpeg",
      WEBP: "image/webp",
      BMP: "image/bmp"
    }
    var f = Math.log(2)
    var d = (0, s.default)(l).map(function (e) {
      return l[e]
    })
    var /* [auto-meaningful-name] */l$JPEG = l.JPEG
    var p = function () {
      function e(t, n) {
        (0, a.default)(this, e)
        this.config = (0, o.default)({
          quality: .92,
          noCompressIfLarger: false
        }, n)
        this.file = t
      }
      e.prototype.process = function () {
        var e = this
        this.outputType = this.file.type
        var t = {}
        return function (e) {
          return d.includes(e)
        }(this.file.type) ? this.getOriginImage().then(function (t) {
            return e.getCanvas(t)
          }).then(function (n) {
            var r = 1
            if (e.config.maxWidth) {
              r = Math.min(1, e.config.maxWidth / n.width)
            }
            if (e.config.maxHeight) {
              r = Math.min(1, r, e.config.maxHeight / n.height)
            }
            t.width = n.width
            t.height = n.height
            return e.doScale(n, r)
          }).then(function (n) {
            var r = e.toBlob(n)
            return r.size > e.file.size && e.config.noCompressIfLarger ? {
              dist: e.file,
              width: t.width,
              height: t.height
            } : {
              dist: r,
              width: n.width,
              height: n.height
            }
          }) : i.default.reject(new Error("unsupported file type: " + this.file.type))
      }
      e.prototype.clear = function (e, t, n) {
        if (this.outputType === l$JPEG) {
          e.fillStyle = "#fff"
          e.fillRect(0, 0, t, n)
        } else {
          e.clearRect(0, 0, t, n)
        }
      }
      e.prototype.getOriginImage = function () {
        var e = this
        return new i.default(function (t, n) {
          var r = (0, u.createObjectURL)(e.file)
          var i = new Image()
          i.onload = function () {
            t(i)
          }
          i.onerror = function () {
            n("image load error")
          }
          i.src = r
        })
      }
      e.prototype.getCanvas = function (e) {
        var t = this
        return new i.default(function (n, r) {
          c.EXIF.getData(e, function () {
            var r = c.EXIF.getTag(e, "Orientation") || 1
            var i = (0, u.getTransform)(e, r)
            var /* [auto-meaningful-name] */i$width = i.width
            var /* [auto-meaningful-name] */i$height = i.height
            var /* [auto-meaningful-name] */i$matrix = i.matrix
            var l = document.createElement("canvas")
            var f = l.getContext("2d")
            l.width = i$width
            l.height = i$height
            t.clear(f, i$width, i$height)
            f.transform.apply(f, i$matrix)
            f.drawImage(e, 0, 0)
            n(l)
          })
        })
      }
      e.prototype.doScale = function (e, t) {
        if (1 === t) {
          return i.default.resolve(e)
        }
        var n = e.getContext("2d")
        var r = Math.min(4, Math.ceil(1 / t / f))
        var o = Math.pow(t, 1 / r)
        var a = document.createElement("canvas")
        var s = a.getContext("2d")
        var /* [auto-meaningful-name] */e$width = e.width
        var /* [auto-meaningful-name] */e$height = e.height
        var l = e$width
        var d = e$height
        a.width = e$width
        a.height = e$height
        for (var h = undefined, p = undefined, _ = 0; _ < r; _++) {
          var A = e$width * o | 0
          var g = e$height * o | 0
          if (_ === r - 1) {
            A = l * t
            g = d * t
          }
          if (_ % 2 == 0) {
            h = e
            p = s
          } else {
            h = a
            p = n
          }
          this.clear(p, e$width, e$height)
          p.drawImage(h, 0, 0, e$width, e$height, 0, 0, A, g)
          e$width = A
          e$height = g
        }
        var v = h === e ? a : e
        var m = p.getImageData(0, 0, e$width, e$height)
        v.width = e$width
        v.height = e$height
        p.putImageData(m, 0, 0)
        return i.default.resolve(v)
      }
      e.prototype.toBlob = function (e) {
        var t = e.toDataURL(this.outputType, this.config.quality)
        var n = atob(t.split(",")[1]).split("").map(function (e) {
          return e.charCodeAt(0)
        })
        return new Blob([new Uint8Array(n)], {
          type: this.outputType
        })
      }
      return e
    }()
    t.default = function (e, t) {
      return new p(e, t).process()
    }
  }, function (e, t, r) {
    var i;
    (function () {
      function r(e) {
        return !!e.exifdata
      }
      function o(e, t) {
        function n(n) {
          var r = a(n)
          e.exifdata = r || {}
          var i = function (e) {
            var t = new DataView(e)
            if (p) {
              console.log("Got file of length " + e.byteLength)
            }
            if (255 != t.getUint8(0) || 216 != t.getUint8(1)) {
              if (p) {
                console.log("Not a valid JPEG")
              }
              return false
            }
            for (var n = 2, /* [auto-meaningful-name] */e$byteLength = e.byteLength; n < e$byteLength;) {
              if (function (e, t) {
                return 56 === e.getUint8(t) && 66 === e.getUint8(t + 1) && 73 === e.getUint8(t + 2) && 77 === e.getUint8(t + 3) && 4 === e.getUint8(t + 4) && 4 === e.getUint8(t + 5)
              }(t, n)) {
                var i = t.getUint8(n + 7)
                if (i % 2 != 0) {
                  i += 1
                }
                if (0 === i) {
                  i = 4
                }
                return s(e, n + 8 + i, t.getUint16(n + 6 + i))
              }
              n++
            }
          }(n)
          e.iptcdata = i || {}
          if (_.isXmpEnabled) {
            var o = function (e) {
              if ("DOMParser" in self) {
                var t = new DataView(e)
                if (p) {
                  console.log("Got file of length " + e.byteLength)
                }
                if (255 != t.getUint8(0) || 216 != t.getUint8(1)) {
                  if (p) {
                    console.log("Not a valid JPEG")
                  }
                  return false
                }
                for (var n = 2, /* [auto-meaningful-name] */e$byteLength = e.byteLength, i = new DOMParser(); n < e$byteLength - 4;) {
                  if ("http" == l(t, n, 4)) {
                    var o = n - 1
                    var a = t.getUint16(n - 2) - 1
                    var s = l(t, o, a)
                    var c = s.indexOf("xmpmeta>") + 8
                    var u = (s = s.substring(s.indexOf("<x:xmpmeta"), c)).indexOf("x:xmpmeta") + 10
                    s = s.slice(0, u) + "xmlns:Iptc4xmpCore=\"http://iptc.org/std/Iptc4xmpCore/1.0/xmlns/\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:tiff=\"http://ns.adobe.com/tiff/1.0/\" xmlns:plus=\"http://schemas.android.com/apk/lib/com.google.android.gms.plus\" xmlns:ext=\"http://www.gettyimages.com/xsltExtension/1.0\" xmlns:exif=\"http://ns.adobe.com/exif/1.0/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmlns:stRef=\"http://ns.adobe.com/xap/1.0/sType/ResourceRef#\" xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\" xmlns:xapGImg=\"http://ns.adobe.com/xap/1.0/g/img/\" xmlns:Iptc4xmpExt=\"http://iptc.org/std/Iptc4xmpExt/2008-02-29/\" " + s.slice(u)
                    return h(i.parseFromString(s, "text/xml"))
                  }
                  n++
                }
              }
            }(n)
            e.xmpdata = o || {}
          }
          if (t) {
            t.call(e)
          }
        }
        if (e.src) {
          if (/^data\:/i.test(e.src)) {
            n(function (e, t) {
              t = t || e.match(/^data\:([^\;]+)\;base64,/im)[1] || ""
              e = e.replace(/^data\:([^\;]+)\;base64,/gim, "")
              for (var n = atob(e), /* [auto-meaningful-name] */n$length = n.length, i = new ArrayBuffer(n$length), o = new Uint8Array(i), a = 0; a < n$length; a++) {
                o[a] = n.charCodeAt(a)
              }
              return i
            }(e.src))
          } else if (/^blob\:/i.test(e.src)) {
            (i = new FileReader()).onload = function (e) {
              n(e.target.result)
            };
            (function (e, t) {
              var n = new XMLHttpRequest()
              n.open("GET", e, true)
              n.responseType = "blob"
              n.onload = function (e) {
                if (!(200 != this.status && 0 !== this.status)) {
                  (function (e) {
                    i.readAsArrayBuffer(e)
                  })(this.response)
                }
              }
              n.send()
            })(e.src)
          } else {
            var r = new XMLHttpRequest()
            r.onload = function () {
              if (200 != this.status && 0 !== this.status) {
                throw "Could not load image"
              }
              n(r.response)
              r = null
            }
            r.open("GET", e.src, true)
            r.responseType = "arraybuffer"
            r.send(null)
          }
        } else if (self.FileReader && (e instanceof self.Blob || e instanceof self.File)) {
          var i;
          (i = new FileReader()).onload = function (e) {
            if (p) {
              console.log("Got file of length " + e.target.result.byteLength)
            }
            n(e.target.result)
          }
          i.readAsArrayBuffer(e)
        }
      }
      function a(e) {
        var t = new DataView(e)
        if (p) {
          console.log("Got file of length " + e.byteLength)
        }
        if (255 != t.getUint8(0) || 216 != t.getUint8(1)) {
          if (p) {
            console.log("Not a valid JPEG")
          }
          return false
        }
        for (var n, r = 2, /* [auto-meaningful-name] */e$byteLength = e.byteLength; r < e$byteLength;) {
          if (255 != t.getUint8(r)) {
            if (p) {
              console.log("Not a valid marker at offset " + r + ", found: " + t.getUint8(r))
            }
            return false
          }
          n = t.getUint8(r + 1)
          if (p) {
            console.log(n)
          }
          if (225 == n) {
            if (p) {
              console.log("Found 0xFFE1 marker")
            }
            return f(t, r + 4, t.getUint16(r + 2))
          }
          r += 2 + t.getUint16(r + 2)
        }
      }
      function s(e, t, n) {
        for (var r, i, o, a, s = new DataView(e), c = {}, u = t; u < t + n;) {
          if (28 === s.getUint8(u) && 2 === s.getUint8(u + 1) && (a = s.getUint8(u + 2)) in b) {
            o = s.getInt16(u + 3)
            i = b[a]
            r = l(s, u + 5, o)
            if (c.hasOwnProperty(i)) {
              if (c[i] instanceof Array) {
                c[i].push(r)
              } else {
                c[i] = [c[i], r]
              }
            } else {
              c[i] = r
            }
          }
          u++
        }
        return c
      }
      function c(e, t, n, r, i) {
        var o
        var a
        var s
        var c = e.getUint16(n, !i)
        var l = {}
        for (s = 0; s < c; s++) {
          o = n + 12 * s + 2
          if (!(a = r[e.getUint16(o, !i)]) && p) {
            console.log("Unknown tag: " + e.getUint16(o, !i))
          }
          l[a] = u(e, o, t, 0, i)
        }
        return l
      }
      function u(e, t, n, r, i) {
        var o
        var a
        var s
        var c
        var u
        var f
        var d = e.getUint16(t + 2, !i)
        var h = e.getUint32(t + 4, !i)
        var p = e.getUint32(t + 8, !i) + n
        switch (d) {
          case 1:
          case 7:
            if (1 == h) {
              return e.getUint8(t + 8, !i)
            }
            for (o = h > 4 ? p : t + 8, a = [], c = 0; c < h; c++) {
              a[c] = e.getUint8(o + c)
            }
            return a
          case 2:
            return l(e, o = h > 4 ? p : t + 8, h - 1)
          case 3:
            if (1 == h) {
              return e.getUint16(t + 8, !i)
            }
            for (o = h > 2 ? p : t + 8, a = [], c = 0; c < h; c++) {
              a[c] = e.getUint16(o + 2 * c, !i)
            }
            return a
          case 4:
            if (1 == h) {
              return e.getUint32(t + 8, !i)
            }
            for (a = [], c = 0; c < h; c++) {
              a[c] = e.getUint32(p + 4 * c, !i)
            }
            return a
          case 5:
            if (1 == h) {
              u = e.getUint32(p, !i)
              f = e.getUint32(p + 4, !i);
              (s = new Number(u / f)).numerator = u
              s.denominator = f
              return s
            }
            for (a = [], c = 0; c < h; c++) {
              u = e.getUint32(p + 8 * c, !i)
              f = e.getUint32(p + 4 + 8 * c, !i)
              a[c] = new Number(u / f)
              a[c].numerator = u
              a[c].denominator = f
            }
            return a
          case 9:
            if (1 == h) {
              return e.getInt32(t + 8, !i)
            }
            for (a = [], c = 0; c < h; c++) {
              a[c] = e.getInt32(p + 4 * c, !i)
            }
            return a
          case 10:
            if (1 == h) {
              return e.getInt32(p, !i) / e.getInt32(p + 4, !i)
            }
            for (a = [], c = 0; c < h; c++) {
              a[c] = e.getInt32(p + 8 * c, !i) / e.getInt32(p + 4 + 8 * c, !i)
            }
            return a
        }
      }
      function l(e, t, r) {
        var i = ""
        for (n = t; n < t + r; n++) {
          i += String.fromCharCode(e.getUint8(n))
        }
        return i
      }
      function f(e, t) {
        if ("Exif" != l(e, t, 4)) {
          if (p) {
            console.log("Not valid EXIF data! " + l(e, t, 4))
          }
          return false
        }
        var n
        var r
        var i
        var o
        var a
        var s = t + 6
        if (18761 == e.getUint16(s)) {
          n = false
        } else {
          if (19789 != e.getUint16(s)) {
            if (p) {
              console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)")
            }
            return false
          }
          n = true
        }
        if (42 != e.getUint16(s + 2, !n)) {
          if (p) {
            console.log("Not valid TIFF data! (no 0x002A)")
          }
          return false
        }
        var u = e.getUint32(s + 4, !n)
        if (u < 8) {
          if (p) {
            console.log("Not valid TIFF data! (First offset less than 8)", e.getUint32(s + 4, !n))
          }
          return false
        }
        if ((r = c(e, s, s + u, g, n)).ExifIFDPointer) {
          for (i in o = c(e, s, s + r.ExifIFDPointer, A, n)) {
            switch (i) {
              case "LightSource":
              case "Flash":
              case "MeteringMode":
              case "ExposureProgram":
              case "SensingMethod":
              case "SceneCaptureType":
              case "SceneType":
              case "CustomRendered":
              case "WhiteBalance":
              case "GainControl":
              case "Contrast":
              case "Saturation":
              case "Sharpness":
              case "SubjectDistanceRange":
              case "FileSource":
                o[i] = y[i][o[i]]
                break
              case "ExifVersion":
              case "FlashpixVersion":
                o[i] = String.fromCharCode(o[i][0], o[i][1], o[i][2], o[i][3])
                break
              case "ComponentsConfiguration":
                o[i] = y.Components[o[i][0]] + y.Components[o[i][1]] + y.Components[o[i][2]] + y.Components[o[i][3]]
            }
            r[i] = o[i]
          }
        }
        if (r.GPSInfoIFDPointer) {
          for (i in a = c(e, s, s + r.GPSInfoIFDPointer, v, n)) {
            switch (i) {
              case "GPSVersionID":
                a[i] = a[i][0] + "." + a[i][1] + "." + a[i][2] + "." + a[i][3]
            }
            r[i] = a[i]
          }
        }
        r.thumbnail = function (e, t, n, r) {
          var i = function (e, t, n) {
            var r = e.getUint16(t, !n)
            return e.getUint32(t + 2 + 12 * r, !n)
          }(e, t + n, r)
          if (!i) {
            return {}
          }
          if (i > e.byteLength) {
            return {}
          }
          var o = c(e, t, t + i, m, r)
          if (o.Compression) {
            switch (o.Compression) {
              case 6:
                if (o.JpegIFOffset && o.JpegIFByteCount) {
                  var a = t + o.JpegIFOffset
                  var /* [auto-meaningful-name] */o$JpegIFByteCount = o.JpegIFByteCount
                  o.blob = new Blob([new Uint8Array(e.buffer, a, o$JpegIFByteCount)], {
                    type: "image/jpeg"
                  })
                }
                break
              case 1:
                console.log("Thumbnail image format is TIFF, which is not implemented.")
                break
              default:
                console.log("Unknown thumbnail image format '%s'", o.Compression)
            }
          } else if (2 == o.PhotometricInterpretation) {
            console.log("Thumbnail image format is RGB, which is not implemented.")
          }
          return o
        }(e, s, u, n)
        return r
      }
      function d(e) {
        var t = {}
        if (1 == e.nodeType) {
          if (e.attributes.length > 0) {
            t["@attributes"] = {}
            for (var n = 0; n < e.attributes.length; n++) {
              var r = e.attributes.item(n)
              t["@attributes"][r.nodeName] = r.nodeValue
            }
          }
        } else if (3 == e.nodeType) {
          return e.nodeValue
        }
        if (e.hasChildNodes()) {
          for (var i = 0; i < e.childNodes.length; i++) {
            var o = e.childNodes.item(i)
            var /* [auto-meaningful-name] */o$nodeName = o.nodeName
            if (null == t[o$nodeName]) {
              t[o$nodeName] = d(o)
            } else {
              if (null == t[o$nodeName].push) {
                var s = t[o$nodeName]
                t[o$nodeName] = []
                t[o$nodeName].push(s)
              }
              t[o$nodeName].push(d(o))
            }
          }
        }
        return t
      }
      function h(e) {
        try {
          var t = {}
          if (e.children.length > 0) {
            for (var n = 0; n < e.children.length; n++) {
              var r = e.children.item(n)
              var /* [auto-meaningful-name] */r$attributes = r.attributes
              for (var o in r$attributes) {
                var a = r$attributes[o]
                var /* [auto-meaningful-name] */a$nodeName = a.nodeName
                var /* [auto-meaningful-name] */a$nodeValue = a.nodeValue
                if (undefined !== a$nodeName) {
                  t[a$nodeName] = a$nodeValue
                }
              }
              var /* [auto-meaningful-name] */r$nodeName = r.nodeName
              if (undefined === t[r$nodeName]) {
                t[r$nodeName] = d(r)
              } else {
                if (undefined === t[r$nodeName].push) {
                  var l = t[r$nodeName]
                  t[r$nodeName] = []
                  t[r$nodeName].push(l)
                }
                t[r$nodeName].push(d(r))
              }
            }
          } else {
            t = e.textContent
          }
          return t
        } catch (e) {
          console.log(e.message)
        }
      }
      var p = false
      var _ = function e(t) {
        return t instanceof e ? t : this instanceof e ? void (this.EXIFwrapped = t) : new e(t)
      }
      if (undefined !== e && e.exports) {
        t = e.exports = _
      }
      t.EXIF = _
      var A = _.Tags = {
        36864: "ExifVersion",
        40960: "FlashpixVersion",
        40961: "ColorSpace",
        40962: "PixelXDimension",
        40963: "PixelYDimension",
        37121: "ComponentsConfiguration",
        37122: "CompressedBitsPerPixel",
        37500: "MakerNote",
        37510: "UserComment",
        40964: "RelatedSoundFile",
        36867: "DateTimeOriginal",
        36868: "DateTimeDigitized",
        37520: "SubsecTime",
        37521: "SubsecTimeOriginal",
        37522: "SubsecTimeDigitized",
        33434: "ExposureTime",
        33437: "FNumber",
        34850: "ExposureProgram",
        34852: "SpectralSensitivity",
        34855: "ISOSpeedRatings",
        34856: "OECF",
        37377: "ShutterSpeedValue",
        37378: "ApertureValue",
        37379: "BrightnessValue",
        37380: "ExposureBias",
        37381: "MaxApertureValue",
        37382: "SubjectDistance",
        37383: "MeteringMode",
        37384: "LightSource",
        37385: "Flash",
        37396: "SubjectArea",
        37386: "FocalLength",
        41483: "FlashEnergy",
        41484: "SpatialFrequencyResponse",
        41486: "FocalPlaneXResolution",
        41487: "FocalPlaneYResolution",
        41488: "FocalPlaneResolutionUnit",
        41492: "SubjectLocation",
        41493: "ExposureIndex",
        41495: "SensingMethod",
        41728: "FileSource",
        41729: "SceneType",
        41730: "CFAPattern",
        41985: "CustomRendered",
        41986: "ExposureMode",
        41987: "WhiteBalance",
        41988: "DigitalZoomRation",
        41989: "FocalLengthIn35mmFilm",
        41990: "SceneCaptureType",
        41991: "GainControl",
        41992: "Contrast",
        41993: "Saturation",
        41994: "Sharpness",
        41995: "DeviceSettingDescription",
        41996: "SubjectDistanceRange",
        40965: "InteroperabilityIFDPointer",
        42016: "ImageUniqueID"
      }
      var g = _.TiffTags = {
        256: "ImageWidth",
        257: "ImageHeight",
        34665: "ExifIFDPointer",
        34853: "GPSInfoIFDPointer",
        40965: "InteroperabilityIFDPointer",
        258: "BitsPerSample",
        259: "Compression",
        262: "PhotometricInterpretation",
        274: "Orientation",
        277: "SamplesPerPixel",
        284: "PlanarConfiguration",
        530: "YCbCrSubSampling",
        531: "YCbCrPositioning",
        282: "XResolution",
        283: "YResolution",
        296: "ResolutionUnit",
        273: "StripOffsets",
        278: "RowsPerStrip",
        279: "StripByteCounts",
        513: "JPEGInterchangeFormat",
        514: "JPEGInterchangeFormatLength",
        301: "TransferFunction",
        318: "WhitePoint",
        319: "PrimaryChromaticities",
        529: "YCbCrCoefficients",
        532: "ReferenceBlackWhite",
        306: "DateTime",
        270: "ImageDescription",
        271: "Make",
        272: "Model",
        305: "Software",
        315: "Artist",
        33432: "Copyright"
      }
      var v = _.GPSTags = {
        0: "GPSVersionID",
        1: "GPSLatitudeRef",
        2: "GPSLatitude",
        3: "GPSLongitudeRef",
        4: "GPSLongitude",
        5: "GPSAltitudeRef",
        6: "GPSAltitude",
        7: "GPSTimeStamp",
        8: "GPSSatellites",
        9: "GPSStatus",
        10: "GPSMeasureMode",
        11: "GPSDOP",
        12: "GPSSpeedRef",
        13: "GPSSpeed",
        14: "GPSTrackRef",
        15: "GPSTrack",
        16: "GPSImgDirectionRef",
        17: "GPSImgDirection",
        18: "GPSMapDatum",
        19: "GPSDestLatitudeRef",
        20: "GPSDestLatitude",
        21: "GPSDestLongitudeRef",
        22: "GPSDestLongitude",
        23: "GPSDestBearingRef",
        24: "GPSDestBearing",
        25: "GPSDestDistanceRef",
        26: "GPSDestDistance",
        27: "GPSProcessingMethod",
        28: "GPSAreaInformation",
        29: "GPSDateStamp",
        30: "GPSDifferential"
      }
      var m = _.IFD1Tags = {
        256: "ImageWidth",
        257: "ImageHeight",
        258: "BitsPerSample",
        259: "Compression",
        262: "PhotometricInterpretation",
        273: "StripOffsets",
        274: "Orientation",
        277: "SamplesPerPixel",
        278: "RowsPerStrip",
        279: "StripByteCounts",
        282: "XResolution",
        283: "YResolution",
        284: "PlanarConfiguration",
        296: "ResolutionUnit",
        513: "JpegIFOffset",
        514: "JpegIFByteCount",
        529: "YCbCrCoefficients",
        530: "YCbCrSubSampling",
        531: "YCbCrPositioning",
        532: "ReferenceBlackWhite"
      }
      var y = _.StringValues = {
        ExposureProgram: {
          0: "Not defined",
          1: "Manual",
          2: "Normal program",
          3: "Aperture priority",
          4: "Shutter priority",
          5: "Creative program",
          6: "Action program",
          7: "Portrait mode",
          8: "Landscape mode"
        },
        MeteringMode: {
          0: "Unknown",
          1: "Average",
          2: "CenterWeightedAverage",
          3: "Spot",
          4: "MultiSpot",
          5: "Pattern",
          6: "Partial",
          255: "Other"
        },
        LightSource: {
          0: "Unknown",
          1: "Daylight",
          2: "Fluorescent",
          3: "Tungsten (incandescent light)",
          4: "Flash",
          9: "Fine weather",
          10: "Cloudy weather",
          11: "Shade",
          12: "Daylight fluorescent (D 5700 - 7100K)",
          13: "Day white fluorescent (N 4600 - 5400K)",
          14: "Cool white fluorescent (W 3900 - 4500K)",
          15: "White fluorescent (WW 3200 - 3700K)",
          17: "Standard light A",
          18: "Standard light B",
          19: "Standard light C",
          20: "D55",
          21: "D65",
          22: "D75",
          23: "D50",
          24: "ISO studio tungsten",
          255: "Other"
        },
        Flash: {
          0: "Flash did not fire",
          1: "Flash fired",
          5: "Strobe return light not detected",
          7: "Strobe return light detected",
          9: "Flash fired, compulsory flash mode",
          13: "Flash fired, compulsory flash mode, return light not detected",
          15: "Flash fired, compulsory flash mode, return light detected",
          16: "Flash did not fire, compulsory flash mode",
          24: "Flash did not fire, auto mode",
          25: "Flash fired, auto mode",
          29: "Flash fired, auto mode, return light not detected",
          31: "Flash fired, auto mode, return light detected",
          32: "No flash function",
          65: "Flash fired, red-eye reduction mode",
          69: "Flash fired, red-eye reduction mode, return light not detected",
          71: "Flash fired, red-eye reduction mode, return light detected",
          73: "Flash fired, compulsory flash mode, red-eye reduction mode",
          77: "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
          79: "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",
          89: "Flash fired, auto mode, red-eye reduction mode",
          93: "Flash fired, auto mode, return light not detected, red-eye reduction mode",
          95: "Flash fired, auto mode, return light detected, red-eye reduction mode"
        },
        SensingMethod: {
          1: "Not defined",
          2: "One-chip color area sensor",
          3: "Two-chip color area sensor",
          4: "Three-chip color area sensor",
          5: "Color sequential area sensor",
          7: "Trilinear sensor",
          8: "Color sequential linear sensor"
        },
        SceneCaptureType: {
          0: "Standard",
          1: "Landscape",
          2: "Portrait",
          3: "Night scene"
        },
        SceneType: {
          1: "Directly photographed"
        },
        CustomRendered: {
          0: "Normal process",
          1: "Custom process"
        },
        WhiteBalance: {
          0: "Auto white balance",
          1: "Manual white balance"
        },
        GainControl: {
          0: "None",
          1: "Low gain up",
          2: "High gain up",
          3: "Low gain down",
          4: "High gain down"
        },
        Contrast: {
          0: "Normal",
          1: "Soft",
          2: "Hard"
        },
        Saturation: {
          0: "Normal",
          1: "Low saturation",
          2: "High saturation"
        },
        Sharpness: {
          0: "Normal",
          1: "Soft",
          2: "Hard"
        },
        SubjectDistanceRange: {
          0: "Unknown",
          1: "Macro",
          2: "Close view",
          3: "Distant view"
        },
        FileSource: {
          3: "DSC"
        },
        Components: {
          0: "",
          1: "Y",
          2: "Cb",
          3: "Cr",
          4: "R",
          5: "G",
          6: "B"
        }
      }
      var b = {
        120: "caption",
        110: "credit",
        25: "keywords",
        55: "dateCreated",
        80: "byline",
        85: "bylineTitle",
        122: "captionWriter",
        105: "headline",
        116: "copyright",
        15: "category"
      }
      _.enableXmp = function () {
        _.isXmpEnabled = true
      }
      _.disableXmp = function () {
        _.isXmpEnabled = false
      }
      _.getData = function (e, t) {
        return !((self.Image && e instanceof self.Image || self.HTMLImageElement && e instanceof self.HTMLImageElement) && !e.complete || (r(e) ? t && t.call(e) : o(e, t), 0))
      }
      _.getTag = function (e, t) {
        if (r(e)) {
          return e.exifdata[t]
        }
      }
      _.getIptcTag = function (e, t) {
        if (r(e)) {
          return e.iptcdata[t]
        }
      }
      _.getAllTags = function (e) {
        if (!r(e)) {
          return {}
        }
        var t
        var /* [auto-meaningful-name] */e$exifdata = e.exifdata
        var i = {}
        for (t in e$exifdata) if (e$exifdata.hasOwnProperty(t)) {
          i[t] = e$exifdata[t]
        }
        return i
      }
      _.getAllIptcTags = function (e) {
        if (!r(e)) {
          return {}
        }
        var t
        var /* [auto-meaningful-name] */e$iptcdata = e.iptcdata
        var i = {}
        for (t in e$iptcdata) if (e$iptcdata.hasOwnProperty(t)) {
          i[t] = e$iptcdata[t]
        }
        return i
      }
      _.pretty = function (e) {
        if (!r(e)) {
          return ""
        }
        var t
        var /* [auto-meaningful-name] */e$exifdata = e.exifdata
        var i = ""
        for (t in e$exifdata) if (e$exifdata.hasOwnProperty(t)) {
          if ("object" == typeof e$exifdata[t]) {
            if (e$exifdata[t] instanceof Number) {
              i += t + " : " + e$exifdata[t] + " [" + e$exifdata[t].numerator + "/" + e$exifdata[t].denominator + "]\r\n"
            } else {
              i += t + " : [" + e$exifdata[t].length + " values]\r\n"
            }
          } else {
            i += t + " : " + e$exifdata[t] + "\r\n"
          }
        }
        return i
      }
      _.readFromBinaryFile = function (e) {
        return a(e)
      }
      if (!(undefined === (i = function () {
        return _
      }.apply(t, [])))) {
        e.exports = i
      }
    }).call(this)
  }
])
