!function (t, e) {
  if (true) {
    module.exports = e();
  } else {
    if ("function" == typeof define && define.amd) {
      define([], e);
    } else {
      if ("object" == typeof exports) {
        exports.qiniu = e();
      } else {
        t.qiniu = e();
      }
    }
  }
}("undefined" != typeof self ? self : this, function () {
  return function (t) {
    function e(r) {
      if (n[r]) {
        return n[r].exports;
      }
      var o = n[r] = {
        i: r,
        l: !1,
        exports: {}
      };
      t[r].call(o.exports, o, o.exports, e);
      o.l = !0;
      return o.exports;
    }
    var n = {};
    e.m = t;
    e.c = n;
    e.d = function (t, n, r) {
      if (!e.o(t, n)) {
        Object.defineProperty(t, n, {
          configurable: !1,
          enumerable: !0,
          get: r
        });
      }
    };
    e.n = function (t) {
      var n = t && t.__esModule ? function () {
        return t.default;
      } : function () {
        return t;
      };
      e.d(n, "a", n);
      return n;
    };
    e.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    };
    e.p = "/dist/";
    return e(e.s = 58);
  }([function (t, e) {
    var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    if ("number" == typeof __g) {
      __g = n;
    }
  }, function (t, e) {
    var n = t.exports = {
      version: "2.6.9"
    };
    if ("number" == typeof __e) {
      __e = n;
    }
  }, function (t, e, n) {
    var r = n(31)("wks");
    var o = n(22);
    var i = n(0).Symbol;
    var a = "function" == typeof i;
    (t.exports = function (t) {
      return r[t] || (r[t] = a && i[t] || (a ? i : o)("Symbol." + t));
    }).store = r;
  }, function (t, e, n) {
    var r = n(8);
    t.exports = function (t) {
      if (!r(t)) {
        throw TypeError(t + " is not an object!");
      }
      return t;
    };
  }, function (t, e, n) {
    t.exports = !n(10)(function () {
      return 7 != Object.defineProperty({}, "a", {
        get: function () {
          return 7;
        }
      }).a;
    });
  }, function (t, e, n) {
    var r = n(0);
    var o = n(1);
    var i = n(19);
    var a = n(6);
    var s = n(9);
    var u = function (t, e, n) {
      var c;
      var f;
      var l;
      var h = t & u.F;
      var p = t & u.G;
      var d = t & u.S;
      var g = t & u.P;
      var m = t & u.B;
      var v = t & u.W;
      var y = p ? o : o[e] || (o[e] = {});
      var b = y.prototype;
      var w = p ? r : d ? r[e] : (r[e] || {}).prototype;
      for (c in p && (n = e), n) if (!((f = !h && w && void 0 !== w[c]) && s(y, c))) {
        l = f ? w[c] : n[c];
        y[c] = p && "function" != typeof w[c] ? n[c] : m && f ? i(l, r) : v && w[c] == l ? function (t) {
          var e = function (e, n, r) {
            if (this instanceof t) {
              switch (arguments.length) {
                case 0:
                  return new t();
                case 1:
                  return new t(e);
                case 2:
                  return new t(e, n);
              }
              return new t(e, n, r);
            }
            return t.apply(this, arguments);
          };
          e.prototype = t.prototype;
          return e;
        }(l) : g && "function" == typeof l ? i(Function.call, l) : l;
        if (g) {
          (y.virtual || (y.virtual = {}))[c] = l;
          if (t & u.R && b && !b[c]) {
            a(b, c, l);
          }
        }
      }
    };
    u.F = 1;
    u.G = 2;
    u.S = 4;
    u.P = 8;
    u.B = 16;
    u.W = 32;
    u.U = 64;
    u.R = 128;
    t.exports = u;
  }, function (t, e, n) {
    var r = n(7);
    var o = n(21);
    t.exports = n(4) ? function (t, e, n) {
      return r.f(t, e, o(1, n));
    } : function (t, e, n) {
      t[e] = n;
      return t;
    };
  }, function (t, e, n) {
    var r = n(3);
    var o = n(43);
    var i = n(29);
    var a = Object.defineProperty;
    e.f = n(4) ? Object.defineProperty : function (t, e, n) {
      if (r(t), e = i(e, !0), r(n), o) {
        try {
          return a(t, e, n);
        } catch (t) {}
      }
      if ("get" in n || "set" in n) {
        throw TypeError("Accessors not supported!");
      }
      if ("value" in n) {
        t[e] = n.value;
      }
      return t;
    };
  }, function (t, e) {
    t.exports = function (t) {
      return "object" == typeof t ? null !== t : "function" == typeof t;
    };
  }, function (t, e) {
    var n = {}.hasOwnProperty;
    t.exports = function (t, e) {
      return n.call(t, e);
    };
  }, function (t, e) {
    t.exports = function (t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    };
  }, function (t, e, n) {
    var r = n(47);
    var o = n(27);
    t.exports = function (t) {
      return r(o(t));
    };
  }, function (t, e, n) {
    "use strict";

    function r(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }
    function o(t) {
      var e = t + 864e5;
      return new Date().getTime() > e;
    }
    function i(t) {
      return (0, m.default)(t).filter(function (t) {
        return t.startsWith("x:");
      }).map(function (e) {
        return [e, t[e].toString()];
      });
    }
    function a(t) {
      return "qiniu_js_sdk_upload_file_" + t.name + "_size_" + t.size;
    }
    function s(t) {
      try {
        return JSON.parse(localStorage.getItem(a(t))) || [];
      } catch (t) {
        if (window.console && window.console.warn) {
          console.warn("getLocalFileInfo failed");
        }
        return [];
      }
    }
    function u(t) {
      return {
        Authorization: "UpToken " + t
      };
    }
    function c() {
      return window.XMLHttpRequest ? new XMLHttpRequest() : new window.ActiveXObject("Microsoft.XMLHTTP");
    }
    function f(t) {
      return new p.default(function (e, n) {
        var r = new FileReader();
        r.readAsArrayBuffer(t);
        r.onload = function (t) {
          var n = t.target.result;
          e(n);
        };
        r.onerror = function () {
          n(new Error("fileReader 读取错误"));
        };
      });
    }
    function l(t, e) {
      return new p.default(function (n, r) {
        var o = c();
        o.open(e.method, t);
        if (e.onCreate) {
          e.onCreate(o);
        }
        if (e.headers) {
          (0, m.default)(e.headers).forEach(function (t) {
            return o.setRequestHeader(t, e.headers[t]);
          });
        }
        o.upload.addEventListener("progress", function (t) {
          if (t.lengthComputable && e.onProgress) {
            e.onProgress({
              loaded: t.loaded,
              total: t.total
            });
          }
        });
        o.onreadystatechange = function () {
          var t = o.responseText;
          if (4 === o.readyState) {
            var e = o.getResponseHeader("x-reqId") || "";
            if (200 !== o.status) {
              var i = "xhr request failed, code: " + o.status + ";";
              if (t) {
                i = i + " response: " + t;
              }
              return void r({
                code: o.status,
                message: i,
                reqId: e,
                isRequestError: !0
              });
            }
            try {
              n({
                data: JSON.parse(t),
                reqId: e
              });
            } catch (t) {
              r(t);
            }
          }
        };
        o.send(e.body);
      });
    }
    function h() {
      return "http:" === window.location.protocol ? "http:" : "https:";
    }
    e.__esModule = !0;
    var p = r(n(18));
    var d = r(n(34));
    var g = r(n(86));
    var m = r(n(36));
    e.isChunkExpired = o;
    e.getChunks = function (t, e) {
      for (var n = [], r = Math.ceil(t.size / e), o = 0; o < r; o++) {
        var i = t.slice(e * o, o === r - 1 ? t.size : e * (o + 1));
        n.push(i);
      }
      return n;
    };
    e.filterParams = i;
    e.sum = function (t) {
      return t.reduce(function (t, e) {
        return t + e;
      }, 0);
    };
    e.setLocalFileInfo = function (t, e) {
      try {
        localStorage.setItem(a(t), (0, g.default)(e));
      } catch (t) {
        if (window.console && window.console.warn) {
          console.warn("setLocalFileInfo failed");
        }
      }
    };
    e.removeLocalFileInfo = function (t) {
      try {
        localStorage.removeItem(a(t));
      } catch (t) {
        if (window.console && window.console.warn) {
          console.warn("removeLocalFileInfo failed");
        }
      }
    };
    e.getLocalFileInfo = s;
    e.getResumeUploadedSize = function (t) {
      return s(t).filter(function (t) {
        return t && !o(t.time);
      }).reduce(function (t, e) {
        return t + e.size;
      }, 0);
    };
    e.createMkFileUrl = function (t, e, n, r) {
      var o = t + "/mkfile/" + e.size;
      if (null != n) {
        o += "/key/" + (0, v.urlSafeBase64Encode)(n);
      }
      if (r.mimeType) {
        o += "/mimeType/" + (0, v.urlSafeBase64Encode)(e.type);
      }
      var a = r.fname;
      if (a) {
        o += "/fname/" + (0, v.urlSafeBase64Encode)(a);
      }
      if (r.params) {
        i(r.params).forEach(function (t) {
          return o += "/" + encodeURIComponent(t[0]) + "/" + (0, v.urlSafeBase64Encode)(t[1]);
        });
      }
      return o;
    };
    e.getHeadersForChunkUpload = function (t) {
      var e = u(t);
      return (0, d.default)({
        "content-type": "application/octet-stream"
      }, e);
    };
    e.getHeadersForMkFile = function (t) {
      var e = u(t);
      return (0, d.default)({
        "content-type": "text/plain"
      }, e);
    };
    e.createXHR = c;
    e.computeMd5 = function (t) {
      return f(t).then(function (t) {
        var e = new b.default.ArrayBuffer();
        e.append(t);
        return e.end();
      });
    };
    e.readAsArrayBuffer = f;
    e.request = l;
    e.getPortFromUrl = function (t) {
      if (t && t.match) {
        var e = t.match(/(^https?)/);
        if (!e) {
          return "";
        }
        var n = e[1];
        return (e = t.match(/^https?:\/\/([^:^\/]*):(\d*)/)) ? e[2] : "http" === n ? "80" : "443";
      }
      return "";
    };
    e.getDomainFromUrl = function (t) {
      if (t && t.match) {
        var e = t.match(/^https?:\/\/([^:^\/]*)/);
        return e ? e[1] : "";
      }
      return "";
    };
    e.getUploadUrl = function (t, e) {
      var n = h();
      if (null != t.uphost) {
        return p.default.resolve(n + "//" + t.uphost);
      }
      if (null != t.region) {
        var r = y.regionUphostMap[t.region];
        var o = t.useCdnDomain ? r.cdnUphost : r.srcUphost;
        return p.default.resolve(n + "//" + o);
      }
      return function (t) {
        try {
          var e = function (t) {
            var e = t.split(":");
            var n = e[0];
            var r = JSON.parse((0, v.urlSafeBase64Decode)(e[2]));
            r.ak = n;
            r.bucket = r.scope.split(":")[0];
            return r;
          }(t);
          return l(h() + "//api.qiniu.com/v2/query?ak=" + e.ak + "&bucket=" + e.bucket, {
            method: "GET"
          });
        } catch (t) {
          return p.default.reject(t);
        }
      }(e).then(function (t) {
        var e = t.data.up.acc.main;
        return n + "//" + e[0];
      });
    };
    e.isContainFileMimeType = function (t, e) {
      return e.indexOf(t) > -1;
    };
    e.createObjectURL = function (t) {
      return (window.URL || window.webkitURL || window.mozURL).createObjectURL(t);
    };
    e.getTransform = function (t, e) {
      var n = t.width;
      var r = t.height;
      switch (e) {
        case 1:
          return {
            width: n,
            height: r,
            matrix: [1, 0, 0, 1, 0, 0]
          };
        case 2:
          return {
            width: n,
            height: r,
            matrix: [-1, 0, 0, 1, n, 0]
          };
        case 3:
          return {
            width: n,
            height: r,
            matrix: [-1, 0, 0, -1, n, r]
          };
        case 4:
          return {
            width: n,
            height: r,
            matrix: [1, 0, 0, -1, 0, r]
          };
        case 5:
          return {
            width: r,
            height: n,
            matrix: [0, 1, 1, 0, 0, 0]
          };
        case 6:
          return {
            width: r,
            height: n,
            matrix: [0, 1, -1, 0, r, 0]
          };
        case 7:
          return {
            width: r,
            height: n,
            matrix: [0, -1, -1, 0, r, n]
          };
        case 8:
          return {
            width: r,
            height: n,
            matrix: [0, -1, 1, 0, 0, n]
          };
      }
    };
    var v = n(56);
    var y = n(39);
    var b = r(n(91));
  }, function (t, e) {
    t.exports = !0;
  }, function (t, e) {
    t.exports = {};
  }, function (t, e, n) {
    var r = n(46);
    var o = n(32);
    t.exports = Object.keys || function (t) {
      return r(t, o);
    };
  }, function (t, e) {
    var n = {}.toString;
    t.exports = function (t) {
      return n.call(t).slice(8, -1);
    };
  }, function (t, e, n) {
    "use strict";

    e.__esModule = !0;
    e.default = function (t, e) {
      if (!(t instanceof e)) {
        throw new TypeError("Cannot call a class as a function");
      }
    };
  }, function (t, e, n) {
    t.exports = {
      default: n(59),
      __esModule: !0
    };
  }, function (t, e, n) {
    var r = n(20);
    t.exports = function (t, e, n) {
      if (r(t), void 0 === e) {
        return t;
      }
      switch (n) {
        case 1:
          return function (n) {
            return t.call(e, n);
          };
        case 2:
          return function (n, r) {
            return t.call(e, n, r);
          };
        case 3:
          return function (n, r, o) {
            return t.call(e, n, r, o);
          };
      }
      return function () {
        return t.apply(e, arguments);
      };
    };
  }, function (t, e) {
    t.exports = function (t) {
      if ("function" != typeof t) {
        throw TypeError(t + " is not a function!");
      }
      return t;
    };
  }, function (t, e) {
    t.exports = function (t, e) {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: e
      };
    };
  }, function (t, e) {
    var n = 0;
    var r = Math.random();
    t.exports = function (t) {
      return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36));
    };
  }, function (t, e, n) {
    var r = n(7).f;
    var o = n(9);
    var i = n(2)("toStringTag");
    t.exports = function (t, e, n) {
      if (t && !o(t = n ? t : t.prototype, i)) {
        r(t, i, {
          configurable: !0,
          value: e
        });
      }
    };
  }, function (t, e, n) {
    var r = n(27);
    t.exports = function (t) {
      return Object(r(t));
    };
  }, function (t, e) {
    e.f = {}.propertyIsEnumerable;
  }, function (t, e) {
    var n = Math.ceil;
    var r = Math.floor;
    t.exports = function (t) {
      return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t);
    };
  }, function (t, e) {
    t.exports = function (t) {
      if (void 0 == t) {
        throw TypeError("Can't call method on  " + t);
      }
      return t;
    };
  }, function (t, e, n) {
    var r = n(8);
    var o = n(0).document;
    var i = r(o) && r(o.createElement);
    t.exports = function (t) {
      return i ? o.createElement(t) : {};
    };
  }, function (t, e, n) {
    var r = n(8);
    t.exports = function (t, e) {
      if (!r(t)) {
        return t;
      }
      var n;
      var o;
      if (e && "function" == typeof (n = t.toString) && !r(o = n.call(t))) {
        return o;
      }
      if ("function" == typeof (n = t.valueOf) && !r(o = n.call(t))) {
        return o;
      }
      if (!e && "function" == typeof (n = t.toString) && !r(o = n.call(t))) {
        return o;
      }
      throw TypeError("Can't convert object to primitive value");
    };
  }, function (t, e, n) {
    var r = n(31)("keys");
    var o = n(22);
    t.exports = function (t) {
      return r[t] || (r[t] = o(t));
    };
  }, function (t, e, n) {
    var r = n(1);
    var o = n(0);
    var i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
    (t.exports = function (t, e) {
      return i[t] || (i[t] = void 0 !== e ? e : {});
    })("versions", []).push({
      version: r.version,
      mode: n(13) ? "pure" : "global",
      copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
    });
  }, function (t, e) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
  }, function (t, e, n) {
    "use strict";

    var r = n(20);
    t.exports.f = function (t) {
      return new function (t) {
        var e;
        var n;
        this.promise = new t(function (t, r) {
          if (void 0 !== e || void 0 !== n) {
            throw TypeError("Bad Promise constructor");
          }
          e = t;
          n = r;
        });
        this.resolve = r(e);
        this.reject = r(n);
      }(t);
    };
  }, function (t, e, n) {
    t.exports = {
      default: n(83),
      __esModule: !0
    };
  }, function (t, e) {
    e.f = Object.getOwnPropertySymbols;
  }, function (t, e, n) {
    t.exports = {
      default: n(88),
      __esModule: !0
    };
  }, function (t, e, n) {
    e.f = n(2);
  }, function (t, e, n) {
    var r = n(0);
    var o = n(1);
    var i = n(13);
    var a = n(37);
    var s = n(7).f;
    t.exports = function (t) {
      var e = o.Symbol || (o.Symbol = i ? {} : r.Symbol || {});
      if (!("_" == t.charAt(0) || t in e)) {
        s(e, t, {
          value: a.f(t)
        });
      }
    };
  }, function (t, e, n) {
    "use strict";

    e.__esModule = !0;
    e.regionUphostMap = {
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
    };
    e.region = {
      z0: "z0",
      z1: "z1",
      z2: "z2",
      na0: "na0",
      as0: "as0"
    };
  }, function (t, e) {}, function (t, e, n) {
    "use strict";

    var r = n(60)(!0);
    n(42)(String, "String", function (t) {
      this._t = String(t);
      this._i = 0;
    }, function () {
      var t;
      var e = this._t;
      var n = this._i;
      return n >= e.length ? {
        value: void 0,
        done: !0
      } : (t = r(e, n), this._i += t.length, {
        value: t,
        done: !1
      });
    });
  }, function (t, e, n) {
    "use strict";

    var r = n(13);
    var o = n(5);
    var i = n(44);
    var a = n(6);
    var s = n(14);
    var u = n(61);
    var c = n(23);
    var f = n(65);
    var l = n(2)("iterator");
    var h = !([].keys && "next" in [].keys());
    var p = function () {
      return this;
    };
    t.exports = function (t, e, n, d, g, m, v) {
      u(n, e, d);
      var y;
      var b;
      var w;
      var x = function (t) {
        if (!h && t in C) {
          return C[t];
        }
        switch (t) {
          case "keys":
          case "values":
            return function () {
              return new n(this, t);
            };
        }
        return function () {
          return new n(this, t);
        };
      };
      var S = e + " Iterator";
      var P = "values" == g;
      var _ = !1;
      var C = t.prototype;
      var U = C[l] || C["@@iterator"] || g && C[g];
      var F = U || x(g);
      var I = g ? P ? x("entries") : F : void 0;
      var k = "Array" == e && C.entries || U;
      if (k && (w = f(k.call(new t()))) !== Object.prototype && w.next && (c(w, S, !0), r || "function" == typeof w[l] || a(w, l, p)), P && U && "values" !== U.name && (_ = !0, F = function () {
        return U.call(this);
      }), r && !v || !h && !_ && C[l] || a(C, l, F), s[e] = F, s[S] = p, g) {
        if (y = {
          values: P ? F : x("values"),
          keys: m ? F : x("keys"),
          entries: I
        }, v) {
          for (b in y) if (!(b in C)) {
            i(C, b, y[b]);
          }
        } else {
          o(o.P + o.F * (h || _), e, y);
        }
      }
      return y;
    };
  }, function (t, e, n) {
    t.exports = !n(4) && !n(10)(function () {
      return 7 != Object.defineProperty(n(28)("div"), "a", {
        get: function () {
          return 7;
        }
      }).a;
    });
  }, function (t, e, n) {
    t.exports = n(6);
  }, function (t, e, n) {
    var r = n(3);
    var o = n(62);
    var i = n(32);
    var a = n(30)("IE_PROTO");
    var s = function () {};
    var u = function () {
      var t;
      var e = n(28)("iframe");
      var r = i.length;
      for (e.style.display = "none", n(49).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), u = t.F; r--;) {
        delete u.prototype[i[r]];
      }
      return u();
    };
    t.exports = Object.create || function (t, e) {
      var n;
      if (null !== t) {
        s.prototype = r(t);
        n = new s();
        s.prototype = null;
        n[a] = t;
      } else {
        n = u();
      }
      return void 0 === e ? n : o(n, e);
    };
  }, function (t, e, n) {
    var r = n(9);
    var o = n(11);
    var i = n(63)(!1);
    var a = n(30)("IE_PROTO");
    t.exports = function (t, e) {
      var n;
      var s = o(t);
      var u = 0;
      var c = [];
      for (n in s) if (n != a && r(s, n)) {
        c.push(n);
      }
      for (; e.length > u;) {
        if (r(s, n = e[u++])) {
          if (!~i(c, n)) {
            c.push(n);
          }
        }
      }
      return c;
    };
  }, function (t, e, n) {
    var r = n(16);
    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
      return "String" == r(t) ? t.split("") : Object(t);
    };
  }, function (t, e, n) {
    var r = n(26);
    var o = Math.min;
    t.exports = function (t) {
      return t > 0 ? o(r(t), 9007199254740991) : 0;
    };
  }, function (t, e, n) {
    var r = n(0).document;
    t.exports = r && r.documentElement;
  }, function (t, e, n) {
    n(66);
    for (var r = n(0), o = n(6), i = n(14), a = n(2)("toStringTag"), s = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), u = 0; u < s.length; u++) {
      var c = s[u];
      var f = r[c];
      var l = f && f.prototype;
      if (l && !l[a]) {
        o(l, a, c);
      }
      i[c] = i.Array;
    }
  }, function (t, e, n) {
    var r = n(16);
    var o = n(2)("toStringTag");
    var i = "Arguments" == r(function () {
      return arguments;
    }());
    t.exports = function (t) {
      var e;
      var n;
      var a;
      return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = function (t, e) {
        try {
          return t[e];
        } catch (t) {}
      }(e = Object(t), o)) ? n : i ? r(e) : "Object" == (a = r(e)) && "function" == typeof e.callee ? "Arguments" : a;
    };
  }, function (t, e, n) {
    var r = n(3);
    var o = n(20);
    var i = n(2)("species");
    t.exports = function (t, e) {
      var n;
      var a = r(t).constructor;
      return void 0 === a || void 0 == (n = r(a)[i]) ? e : o(n);
    };
  }, function (t, e, n) {
    var r;
    var o;
    var i;
    var a = n(19);
    var s = n(75);
    var u = n(49);
    var c = n(28);
    var f = n(0);
    var l = f.process;
    var h = f.setImmediate;
    var p = f.clearImmediate;
    var d = f.MessageChannel;
    var g = f.Dispatch;
    var m = 0;
    var v = {};
    var y = function () {
      var t = +this;
      if (v.hasOwnProperty(t)) {
        var e = v[t];
        delete v[t];
        e();
      }
    };
    var b = function (t) {
      y.call(t.data);
    };
    if (!(h && p)) {
      h = function (t) {
        for (var e = [], n = 1; arguments.length > n;) {
          e.push(arguments[n++]);
        }
        v[++m] = function () {
          s("function" == typeof t ? t : Function(t), e);
        };
        r(m);
        return m;
      };
      p = function (t) {
        delete v[t];
      };
      if ("process" == n(16)(l)) {
        r = function (t) {
          l.nextTick(a(y, t, 1));
        };
      } else {
        if (g && g.now) {
          r = function (t) {
            g.now(a(y, t, 1));
          };
        } else {
          if (d) {
            i = (o = new d()).port2;
            o.port1.onmessage = b;
            r = a(i.postMessage, i, 1);
          } else {
            if (f.addEventListener && "function" == typeof postMessage && !f.importScripts) {
              r = function (t) {
                f.postMessage(t + "", "*");
              };
              f.addEventListener("message", b, !1);
            } else {
              r = "onreadystatechange" in c("script") ? function (t) {
                u.appendChild(c("script")).onreadystatechange = function () {
                  u.removeChild(this);
                  y.call(t);
                };
              } : function (t) {
                setTimeout(a(y, t, 1), 0);
              };
            }
          }
        }
      }
    }
    t.exports = {
      set: h,
      clear: p
    };
  }, function (t, e) {
    t.exports = function (t) {
      try {
        return {
          e: !1,
          v: t()
        };
      } catch (t) {
        return {
          e: !0,
          v: t
        };
      }
    };
  }, function (t, e, n) {
    var r = n(3);
    var o = n(8);
    var i = n(33);
    t.exports = function (t, e) {
      if (r(t), o(e) && e.constructor === t) {
        return e;
      }
      var n = i.f(t);
      (0, n.resolve)(e);
      return n.promise;
    };
  }, function (t, e, n) {
    "use strict";

    e.__esModule = !0;
    e.urlSafeBase64Encode = function (t) {
      return (t = function (t) {
        var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        var n = void 0;
        var r = void 0;
        var o = void 0;
        var i = void 0;
        var a = void 0;
        var s = void 0;
        var u = void 0;
        var c = void 0;
        var f = 0;
        var l = 0;
        var h = "";
        var p = [];
        if (!t) {
          return t;
        }
        t = function (t) {
          if (null === t || void 0 === t) {
            return "";
          }
          var e = t + "";
          var n = "";
          var r = void 0;
          var o = void 0;
          var i = 0;
          r = o = 0;
          i = e.length;
          for (var a = 0; a < i; a++) {
            var s = e.charCodeAt(a);
            var u = null;
            if (s < 128) {
              o++;
            } else if (s > 127 && s < 2048) {
              u = String.fromCharCode(s >> 6 | 192, 63 & s | 128);
            } else if (63488 & s ^ !0) {
              u = String.fromCharCode(s >> 12 | 224, s >> 6 & 63 | 128, 63 & s | 128);
            } else {
              if (64512 & s ^ !0) {
                throw new RangeError("Unmatched trail surrogate at " + a);
              }
              var c = e.charCodeAt(++a);
              if (64512 & c ^ !0) {
                throw new RangeError("Unmatched lead surrogate at " + (a - 1));
              }
              s = ((1023 & s) << 10) + (1023 & c) + 65536;
              u = String.fromCharCode(s >> 18 | 240, s >> 12 & 63 | 128, s >> 6 & 63 | 128, 63 & s | 128);
            }
            if (null !== u) {
              if (o > r) {
                n += e.slice(r, o);
              }
              n += u;
              r = o = a + 1;
            }
          }
          if (o > r) {
            n += e.slice(r, i);
          }
          return n;
        }(t + "");
        do {
          n = t.charCodeAt(f++);
          r = t.charCodeAt(f++);
          o = t.charCodeAt(f++);
          i = (c = n << 16 | r << 8 | o) >> 18 & 63;
          a = c >> 12 & 63;
          s = c >> 6 & 63;
          u = 63 & c;
          p[l++] = e.charAt(i) + e.charAt(a) + e.charAt(s) + e.charAt(u);
        } while (f < t.length);
        switch (h = p.join(""), t.length % 3) {
          case 1:
            h = h.slice(0, -2) + "==";
            break;
          case 2:
            h = h.slice(0, -1) + "=";
        }
        return h;
      }(t)).replace(/\//g, "_").replace(/\+/g, "-");
    };
    e.urlSafeBase64Decode = function (t) {
      return function (t) {
        var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        var n = void 0;
        var r = void 0;
        var o = void 0;
        var i = void 0;
        var a = void 0;
        var s = void 0;
        var u = void 0;
        var c = void 0;
        var f = 0;
        var l = 0;
        var h = [];
        if (!t) {
          return t;
        }
        t += "";
        do {
          i = e.indexOf(t.charAt(f++));
          a = e.indexOf(t.charAt(f++));
          s = e.indexOf(t.charAt(f++));
          u = e.indexOf(t.charAt(f++));
          n = (c = i << 18 | a << 12 | s << 6 | u) >> 16 & 255;
          r = c >> 8 & 255;
          o = 255 & c;
          h[l++] = 64 === s ? String.fromCharCode(n) : 64 === u ? String.fromCharCode(n, r) : String.fromCharCode(n, r, o);
        } while (f < t.length);
        return h.join("");
      }(t = t.replace(/_/g, "/").replace(/-/g, "+"));
    };
  }, function (t, e, n) {
    var r = n(46);
    var o = n(32).concat("length", "prototype");
    e.f = Object.getOwnPropertyNames || function (t) {
      return r(t, o);
    };
  }, function (t, e, n) {
    "use strict";

    e.__esModule = !0;
    e.pipeline = e.compressImage = e.exif = e.imageInfo = e.watermark = e.imageMogr2 = e.getUploadUrl = e.filterParams = e.getHeadersForMkFile = e.getResumeUploadedSize = e.getHeadersForChunkUpload = e.createMkFileUrl = e.region = e.upload = void 0;
    var r = n(39);
    var o = n(12);
    var i = n(92);
    var a = n(94);
    var s = n(95);
    var u = n(109);
    var c = function (t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }(n(110));
    var f = new u.StatisticsLogger();
    e.upload = function (t, e, n, r, o) {
      var a = {
        file: t,
        key: e,
        token: n,
        putExtra: r,
        config: o
      };
      return new s.Observable(function (t) {
        var e = new i.UploadManager(a, {
          onData: function (e) {
            return t.next(e);
          },
          onError: function (e) {
            return t.error(e);
          },
          onComplete: function (e) {
            return t.complete(e);
          }
        }, f);
        e.putFile();
        return e.stop.bind(e);
      });
    };
    e.region = r.region;
    e.createMkFileUrl = o.createMkFileUrl;
    e.getHeadersForChunkUpload = o.getHeadersForChunkUpload;
    e.getResumeUploadedSize = o.getResumeUploadedSize;
    e.getHeadersForMkFile = o.getHeadersForMkFile;
    e.filterParams = o.filterParams;
    e.getUploadUrl = o.getUploadUrl;
    e.imageMogr2 = a.imageMogr2;
    e.watermark = a.watermark;
    e.imageInfo = a.imageInfo;
    e.exif = a.exif;
    e.compressImage = c.default;
    e.pipeline = a.pipeline;
  }, function (t, e, n) {
    n(40);
    n(41);
    n(50);
    n(69);
    n(81);
    n(82);
    t.exports = n(1).Promise;
  }, function (t, e, n) {
    var r = n(26);
    var o = n(27);
    t.exports = function (t) {
      return function (e, n) {
        var i;
        var a;
        var s = String(o(e));
        var u = r(n);
        var c = s.length;
        return u < 0 || u >= c ? t ? "" : void 0 : (i = s.charCodeAt(u)) < 55296 || i > 56319 || u + 1 === c || (a = s.charCodeAt(u + 1)) < 56320 || a > 57343 ? t ? s.charAt(u) : i : t ? s.slice(u, u + 2) : a - 56320 + (i - 55296 << 10) + 65536;
      };
    };
  }, function (t, e, n) {
    "use strict";

    var r = n(45);
    var o = n(21);
    var i = n(23);
    var a = {};
    n(6)(a, n(2)("iterator"), function () {
      return this;
    });
    t.exports = function (t, e, n) {
      t.prototype = r(a, {
        next: o(1, n)
      });
      i(t, e + " Iterator");
    };
  }, function (t, e, n) {
    var r = n(7);
    var o = n(3);
    var i = n(15);
    t.exports = n(4) ? Object.defineProperties : function (t, e) {
      o(t);
      for (var n, a = i(e), s = a.length, u = 0; s > u;) {
        r.f(t, n = a[u++], e[n]);
      }
      return t;
    };
  }, function (t, e, n) {
    var r = n(11);
    var o = n(48);
    var i = n(64);
    t.exports = function (t) {
      return function (e, n, a) {
        var s;
        var u = r(e);
        var c = o(u.length);
        var f = i(a, c);
        if (t && n != n) {
          for (; c > f;) {
            if ((s = u[f++]) != s) {
              return !0;
            }
          }
        } else {
          for (; c > f; f++) {
            if ((t || f in u) && u[f] === n) {
              return t || f || 0;
            }
          }
        }
        return !t && -1;
      };
    };
  }, function (t, e, n) {
    var r = n(26);
    var o = Math.max;
    var i = Math.min;
    t.exports = function (t, e) {
      return (t = r(t)) < 0 ? o(t + e, 0) : i(t, e);
    };
  }, function (t, e, n) {
    var r = n(9);
    var o = n(24);
    var i = n(30)("IE_PROTO");
    var a = Object.prototype;
    t.exports = Object.getPrototypeOf || function (t) {
      t = o(t);
      return r(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null;
    };
  }, function (t, e, n) {
    "use strict";

    var r = n(67);
    var o = n(68);
    var i = n(14);
    var a = n(11);
    t.exports = n(42)(Array, "Array", function (t, e) {
      this._t = a(t);
      this._i = 0;
      this._k = e;
    }, function () {
      var t = this._t;
      var e = this._k;
      var n = this._i++;
      return !t || n >= t.length ? (this._t = void 0, o(1)) : o(0, "keys" == e ? n : "values" == e ? t[n] : [n, t[n]]);
    }, "values");
    i.Arguments = i.Array;
    r("keys");
    r("values");
    r("entries");
  }, function (t, e) {
    t.exports = function () {};
  }, function (t, e) {
    t.exports = function (t, e) {
      return {
        value: e,
        done: !!t
      };
    };
  }, function (t, e, n) {
    "use strict";

    var r;
    var o;
    var i;
    var a;
    var s = n(13);
    var u = n(0);
    var c = n(19);
    var f = n(51);
    var l = n(5);
    var h = n(8);
    var p = n(20);
    var d = n(70);
    var g = n(71);
    var m = n(52);
    var v = n(53).set;
    var y = n(76)();
    var b = n(33);
    var w = n(54);
    var x = n(77);
    var S = n(55);
    var P = u.TypeError;
    var _ = u.process;
    var C = _ && _.versions;
    var U = C && C.v8 || "";
    var F = u.Promise;
    var I = "process" == f(_);
    var k = function () {};
    var E = o = b.f;
    var M = !!function () {
      try {
        var t = F.resolve(1);
        var e = (t.constructor = {})[n(2)("species")] = function (t) {
          t(k, k);
        };
        return (I || "function" == typeof PromiseRejectionEvent) && t.then(k) instanceof e && 0 !== U.indexOf("6.6") && -1 === x.indexOf("Chrome/66");
      } catch (t) {}
    }();
    var O = function (t) {
      var e;
      return !(!h(t) || "function" != typeof (e = t.then)) && e;
    };
    var T = function (t, e) {
      if (!t._n) {
        t._n = !0;
        var n = t._c;
        y(function () {
          for (var r = t._v, o = 1 == t._s, i = 0; n.length > i;) {
            !function (e) {
              var n;
              var i;
              var a;
              var s = o ? e.ok : e.fail;
              var u = e.resolve;
              var c = e.reject;
              var f = e.domain;
              try {
                if (s) {
                  if (!o) {
                    if (2 == t._h) {
                      L(t);
                    }
                    t._h = 1;
                  }
                  if (!0 === s) {
                    n = r;
                  } else {
                    if (f) {
                      f.enter();
                    }
                    n = s(r);
                    if (f) {
                      f.exit();
                      a = !0;
                    }
                  }
                  if (n === e.promise) {
                    c(P("Promise-chain cycle"));
                  } else {
                    if (i = O(n)) {
                      i.call(n, u, c);
                    } else {
                      u(n);
                    }
                  }
                } else {
                  c(r);
                }
              } catch (t) {
                if (f && !a) {
                  f.exit();
                }
                c(t);
              }
            }(n[i++]);
          }
          t._c = [];
          t._n = !1;
          if (e && !t._h) {
            R(t);
          }
        });
      }
    };
    var R = function (t) {
      v.call(u, function () {
        var e;
        var n;
        var r;
        var o = t._v;
        var i = A(t);
        if (i && (e = w(function () {
          if (I) {
            _.emit("unhandledRejection", o, t);
          } else {
            if (n = u.onunhandledrejection) {
              n({
                promise: t,
                reason: o
              });
            } else {
              if ((r = u.console) && r.error) {
                r.error("Unhandled promise rejection", o);
              }
            }
          }
        }), t._h = I || A(t) ? 2 : 1), t._a = void 0, i && e.e) {
          throw e.v;
        }
      });
    };
    var A = function (t) {
      return 1 !== t._h && 0 === (t._a || t._c).length;
    };
    var L = function (t) {
      v.call(u, function () {
        var e;
        if (I) {
          _.emit("rejectionHandled", t);
        } else {
          if (e = u.onrejectionhandled) {
            e({
              promise: t,
              reason: t._v
            });
          }
        }
      });
    };
    var D = function (t) {
      var e = this;
      if (!e._d) {
        e._d = !0;
        (e = e._w || e)._v = t;
        e._s = 2;
        if (!e._a) {
          e._a = e._c.slice();
        }
        T(e, !0);
      }
    };
    var j = function (t) {
      var e;
      var n = this;
      if (!n._d) {
        n._d = !0;
        n = n._w || n;
        try {
          if (n === t) {
            throw P("Promise can't be resolved itself");
          }
          if (e = O(t)) {
            y(function () {
              var r = {
                _w: n,
                _d: !1
              };
              try {
                e.call(t, c(j, r, 1), c(D, r, 1));
              } catch (t) {
                D.call(r, t);
              }
            });
          } else {
            n._v = t;
            n._s = 1;
            T(n, !1);
          }
        } catch (t) {
          D.call({
            _w: n,
            _d: !1
          }, t);
        }
      }
    };
    if (!M) {
      F = function (t) {
        d(this, F, "Promise", "_h");
        p(t);
        r.call(this);
        try {
          t(c(j, this, 1), c(D, this, 1));
        } catch (t) {
          D.call(this, t);
        }
      };
      (r = function (t) {
        this._c = [];
        this._a = void 0;
        this._s = 0;
        this._d = !1;
        this._v = void 0;
        this._h = 0;
        this._n = !1;
      }).prototype = n(78)(F.prototype, {
        then: function (t, e) {
          var n = E(m(this, F));
          n.ok = "function" != typeof t || t;
          n.fail = "function" == typeof e && e;
          n.domain = I ? _.domain : void 0;
          this._c.push(n);
          if (this._a) {
            this._a.push(n);
          }
          if (this._s) {
            T(this, !1);
          }
          return n.promise;
        },
        catch: function (t) {
          return this.then(void 0, t);
        }
      });
      i = function () {
        var t = new r();
        this.promise = t;
        this.resolve = c(j, t, 1);
        this.reject = c(D, t, 1);
      };
      b.f = E = function (t) {
        return t === F || t === a ? new i(t) : o(t);
      };
    }
    l(l.G + l.W + l.F * !M, {
      Promise: F
    });
    n(23)(F, "Promise");
    n(79)("Promise");
    a = n(1).Promise;
    l(l.S + l.F * !M, "Promise", {
      reject: function (t) {
        var e = E(this);
        (0, e.reject)(t);
        return e.promise;
      }
    });
    l(l.S + l.F * (s || !M), "Promise", {
      resolve: function (t) {
        return S(s && this === a ? F : this, t);
      }
    });
    l(l.S + l.F * !(M && n(80)(function (t) {
      F.all(t).catch(k);
    })), "Promise", {
      all: function (t) {
        var e = this;
        var n = E(e);
        var r = n.resolve;
        var o = n.reject;
        var i = w(function () {
          var n = [];
          var i = 0;
          var a = 1;
          g(t, !1, function (t) {
            var s = i++;
            var u = !1;
            n.push(void 0);
            a++;
            e.resolve(t).then(function (t) {
              if (!u) {
                u = !0;
                n[s] = t;
                if (! --a) {
                  r(n);
                }
              }
            }, o);
          });
          if (! --a) {
            r(n);
          }
        });
        if (i.e) {
          o(i.v);
        }
        return n.promise;
      },
      race: function (t) {
        var e = this;
        var n = E(e);
        var r = n.reject;
        var o = w(function () {
          g(t, !1, function (t) {
            e.resolve(t).then(n.resolve, r);
          });
        });
        if (o.e) {
          r(o.v);
        }
        return n.promise;
      }
    });
  }, function (t, e) {
    t.exports = function (t, e, n, r) {
      if (!(t instanceof e) || void 0 !== r && r in t) {
        throw TypeError(n + ": incorrect invocation!");
      }
      return t;
    };
  }, function (t, e, n) {
    var r = n(19);
    var o = n(72);
    var i = n(73);
    var a = n(3);
    var s = n(48);
    var u = n(74);
    var c = {};
    var f = {};
    (e = t.exports = function (t, e, n, l, h) {
      var p;
      var d;
      var g;
      var m;
      var v = h ? function () {
        return t;
      } : u(t);
      var y = r(n, l, e ? 2 : 1);
      var b = 0;
      if ("function" != typeof v) {
        throw TypeError(t + " is not iterable!");
      }
      if (i(v)) {
        for (p = s(t.length); p > b; b++) {
          if ((m = e ? y(a(d = t[b])[0], d[1]) : y(t[b])) === c || m === f) {
            return m;
          }
        }
      } else {
        for (g = v.call(t); !(d = g.next()).done;) {
          if ((m = o(g, y, d.value, e)) === c || m === f) {
            return m;
          }
        }
      }
    }).BREAK = c;
    e.RETURN = f;
  }, function (t, e, n) {
    var r = n(3);
    t.exports = function (t, e, n, o) {
      try {
        return o ? e(r(n)[0], n[1]) : e(n);
      } catch (e) {
        var i = t.return;
        throw void 0 !== i && r(i.call(t)), e;
      }
    };
  }, function (t, e, n) {
    var r = n(14);
    var o = n(2)("iterator");
    var i = Array.prototype;
    t.exports = function (t) {
      return void 0 !== t && (r.Array === t || i[o] === t);
    };
  }, function (t, e, n) {
    var r = n(51);
    var o = n(2)("iterator");
    var i = n(14);
    t.exports = n(1).getIteratorMethod = function (t) {
      if (void 0 != t) {
        return t[o] || t["@@iterator"] || i[r(t)];
      }
    };
  }, function (t, e) {
    t.exports = function (t, e, n) {
      var r = void 0 === n;
      switch (e.length) {
        case 0:
          return r ? t() : t.call(n);
        case 1:
          return r ? t(e[0]) : t.call(n, e[0]);
        case 2:
          return r ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
        case 3:
          return r ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
        case 4:
          return r ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3]);
      }
      return t.apply(n, e);
    };
  }, function (t, e, n) {
    var r = n(0);
    var o = n(53).set;
    var i = r.MutationObserver || r.WebKitMutationObserver;
    var a = r.process;
    var s = r.Promise;
    var u = "process" == n(16)(a);
    t.exports = function () {
      var t;
      var e;
      var n;
      var c = function () {
        var r;
        var o;
        for (u && (r = a.domain) && r.exit(); t;) {
          o = t.fn;
          t = t.next;
          try {
            o();
          } catch (r) {
            throw t ? n() : e = void 0, r;
          }
        }
        e = void 0;
        if (r) {
          r.enter();
        }
      };
      if (u) {
        n = function () {
          a.nextTick(c);
        };
      } else if (!i || r.navigator && r.navigator.standalone) {
        if (s && s.resolve) {
          var f = s.resolve(void 0);
          n = function () {
            f.then(c);
          };
        } else {
          n = function () {
            o.call(r, c);
          };
        }
      } else {
        var l = !0;
        var h = document.createTextNode("");
        new i(c).observe(h, {
          characterData: !0
        });
        n = function () {
          h.data = l = !l;
        };
      }
      return function (r) {
        var o = {
          fn: r,
          next: void 0
        };
        if (e) {
          e.next = o;
        }
        if (!t) {
          t = o;
          n();
        }
        e = o;
      };
    };
  }, function (t, e, n) {
    var r = n(0).navigator;
    t.exports = r && r.userAgent || "";
  }, function (t, e, n) {
    var r = n(6);
    t.exports = function (t, e, n) {
      for (var o in e) if (n && t[o]) {
        t[o] = e[o];
      } else {
        r(t, o, e[o]);
      }
      return t;
    };
  }, function (t, e, n) {
    "use strict";

    var r = n(0);
    var o = n(1);
    var i = n(7);
    var a = n(4);
    var s = n(2)("species");
    t.exports = function (t) {
      var e = "function" == typeof o[t] ? o[t] : r[t];
      if (a && e && !e[s]) {
        i.f(e, s, {
          configurable: !0,
          get: function () {
            return this;
          }
        });
      }
    };
  }, function (t, e, n) {
    var r = n(2)("iterator");
    var o = !1;
    try {
      var i = [7][r]();
      i.return = function () {
        o = !0;
      };
      Array.from(i, function () {
        throw 2;
      });
    } catch (t) {}
    t.exports = function (t, e) {
      if (!e && !o) {
        return !1;
      }
      var n = !1;
      try {
        var i = [7];
        var a = i[r]();
        a.next = function () {
          return {
            done: n = !0
          };
        };
        i[r] = function () {
          return a;
        };
        t(i);
      } catch (t) {}
      return n;
    };
  }, function (t, e, n) {
    "use strict";

    var r = n(5);
    var o = n(1);
    var i = n(0);
    var a = n(52);
    var s = n(55);
    r(r.P + r.R, "Promise", {
      finally: function (t) {
        var e = a(this, o.Promise || i.Promise);
        var n = "function" == typeof t;
        return this.then(n ? function (n) {
          return s(e, t()).then(function () {
            return n;
          });
        } : t, n ? function (n) {
          return s(e, t()).then(function () {
            throw n;
          });
        } : t);
      }
    });
  }, function (t, e, n) {
    "use strict";

    var r = n(5);
    var o = n(33);
    var i = n(54);
    r(r.S, "Promise", {
      try: function (t) {
        var e = o.f(this);
        var n = i(t);
        (n.e ? e.reject : e.resolve)(n.v);
        return e.promise;
      }
    });
  }, function (t, e, n) {
    n(84);
    t.exports = n(1).Object.assign;
  }, function (t, e, n) {
    var r = n(5);
    r(r.S + r.F, "Object", {
      assign: n(85)
    });
  }, function (t, e, n) {
    "use strict";

    var r = n(4);
    var o = n(15);
    var i = n(35);
    var a = n(25);
    var s = n(24);
    var u = n(47);
    var c = Object.assign;
    t.exports = !c || n(10)(function () {
      var t = {};
      var e = {};
      var n = Symbol();
      var r = "abcdefghijklmnopqrst";
      t[n] = 7;
      r.split("").forEach(function (t) {
        e[t] = t;
      });
      return 7 != c({}, t)[n] || Object.keys(c({}, e)).join("") != r;
    }) ? function (t, e) {
      for (var n = s(t), c = arguments.length, f = 1, l = i.f, h = a.f; c > f;) {
        for (var p, d = u(arguments[f++]), g = l ? o(d).concat(l(d)) : o(d), m = g.length, v = 0; m > v;) {
          p = g[v++];
          if (!(r && !h.call(d, p))) {
            n[p] = d[p];
          }
        }
      }
      return n;
    } : c;
  }, function (t, e, n) {
    t.exports = {
      default: n(87),
      __esModule: !0
    };
  }, function (t, e, n) {
    var r = n(1);
    var o = r.JSON || (r.JSON = {
      stringify: JSON.stringify
    });
    t.exports = function (t) {
      return o.stringify.apply(o, arguments);
    };
  }, function (t, e, n) {
    n(89);
    t.exports = n(1).Object.keys;
  }, function (t, e, n) {
    var r = n(24);
    var o = n(15);
    n(90)("keys", function () {
      return function (t) {
        return o(r(t));
      };
    });
  }, function (t, e, n) {
    var r = n(5);
    var o = n(1);
    var i = n(10);
    t.exports = function (t, e) {
      var n = (o.Object || {})[t] || Object[t];
      var a = {};
      a[t] = e(n);
      r(r.S + r.F * i(function () {
        n(1);
      }), "Object", a);
    };
  }, function (t, e, n) {
    !function (e) {
      t.exports = function (t) {
        "use strict";

        function e(t, e) {
          var n = t[0];
          var r = t[1];
          var o = t[2];
          var i = t[3];
          r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r & o | ~r & i) + e[0] - 680876936 | 0) << 7 | n >>> 25) + r | 0) & r | ~n & o) + e[1] - 389564586 | 0) << 12 | i >>> 20) + n | 0) & n | ~i & r) + e[2] + 606105819 | 0) << 17 | o >>> 15) + i | 0) & i | ~o & n) + e[3] - 1044525330 | 0) << 22 | r >>> 10) + o | 0;
          r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r & o | ~r & i) + e[4] - 176418897 | 0) << 7 | n >>> 25) + r | 0) & r | ~n & o) + e[5] + 1200080426 | 0) << 12 | i >>> 20) + n | 0) & n | ~i & r) + e[6] - 1473231341 | 0) << 17 | o >>> 15) + i | 0) & i | ~o & n) + e[7] - 45705983 | 0) << 22 | r >>> 10) + o | 0;
          r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r & o | ~r & i) + e[8] + 1770035416 | 0) << 7 | n >>> 25) + r | 0) & r | ~n & o) + e[9] - 1958414417 | 0) << 12 | i >>> 20) + n | 0) & n | ~i & r) + e[10] - 42063 | 0) << 17 | o >>> 15) + i | 0) & i | ~o & n) + e[11] - 1990404162 | 0) << 22 | r >>> 10) + o | 0;
          r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r & o | ~r & i) + e[12] + 1804603682 | 0) << 7 | n >>> 25) + r | 0) & r | ~n & o) + e[13] - 40341101 | 0) << 12 | i >>> 20) + n | 0) & n | ~i & r) + e[14] - 1502002290 | 0) << 17 | o >>> 15) + i | 0) & i | ~o & n) + e[15] + 1236535329 | 0) << 22 | r >>> 10) + o | 0;
          r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r & i | o & ~i) + e[1] - 165796510 | 0) << 5 | n >>> 27) + r | 0) & o | r & ~o) + e[6] - 1069501632 | 0) << 9 | i >>> 23) + n | 0) & r | n & ~r) + e[11] + 643717713 | 0) << 14 | o >>> 18) + i | 0) & n | i & ~n) + e[0] - 373897302 | 0) << 20 | r >>> 12) + o | 0;
          r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r & i | o & ~i) + e[5] - 701558691 | 0) << 5 | n >>> 27) + r | 0) & o | r & ~o) + e[10] + 38016083 | 0) << 9 | i >>> 23) + n | 0) & r | n & ~r) + e[15] - 660478335 | 0) << 14 | o >>> 18) + i | 0) & n | i & ~n) + e[4] - 405537848 | 0) << 20 | r >>> 12) + o | 0;
          r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r & i | o & ~i) + e[9] + 568446438 | 0) << 5 | n >>> 27) + r | 0) & o | r & ~o) + e[14] - 1019803690 | 0) << 9 | i >>> 23) + n | 0) & r | n & ~r) + e[3] - 187363961 | 0) << 14 | o >>> 18) + i | 0) & n | i & ~n) + e[8] + 1163531501 | 0) << 20 | r >>> 12) + o | 0;
          r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r & i | o & ~i) + e[13] - 1444681467 | 0) << 5 | n >>> 27) + r | 0) & o | r & ~o) + e[2] - 51403784 | 0) << 9 | i >>> 23) + n | 0) & r | n & ~r) + e[7] + 1735328473 | 0) << 14 | o >>> 18) + i | 0) & n | i & ~n) + e[12] - 1926607734 | 0) << 20 | r >>> 12) + o | 0;
          r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r ^ o ^ i) + e[5] - 378558 | 0) << 4 | n >>> 28) + r | 0) ^ r ^ o) + e[8] - 2022574463 | 0) << 11 | i >>> 21) + n | 0) ^ n ^ r) + e[11] + 1839030562 | 0) << 16 | o >>> 16) + i | 0) ^ i ^ n) + e[14] - 35309556 | 0) << 23 | r >>> 9) + o | 0;
          r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r ^ o ^ i) + e[1] - 1530992060 | 0) << 4 | n >>> 28) + r | 0) ^ r ^ o) + e[4] + 1272893353 | 0) << 11 | i >>> 21) + n | 0) ^ n ^ r) + e[7] - 155497632 | 0) << 16 | o >>> 16) + i | 0) ^ i ^ n) + e[10] - 1094730640 | 0) << 23 | r >>> 9) + o | 0;
          r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r ^ o ^ i) + e[13] + 681279174 | 0) << 4 | n >>> 28) + r | 0) ^ r ^ o) + e[0] - 358537222 | 0) << 11 | i >>> 21) + n | 0) ^ n ^ r) + e[3] - 722521979 | 0) << 16 | o >>> 16) + i | 0) ^ i ^ n) + e[6] + 76029189 | 0) << 23 | r >>> 9) + o | 0;
          r = ((r += ((o = ((o += ((i = ((i += ((n = ((n += (r ^ o ^ i) + e[9] - 640364487 | 0) << 4 | n >>> 28) + r | 0) ^ r ^ o) + e[12] - 421815835 | 0) << 11 | i >>> 21) + n | 0) ^ n ^ r) + e[15] + 530742520 | 0) << 16 | o >>> 16) + i | 0) ^ i ^ n) + e[2] - 995338651 | 0) << 23 | r >>> 9) + o | 0;
          r = ((r += ((i = ((i += (r ^ ((n = ((n += (o ^ (r | ~i)) + e[0] - 198630844 | 0) << 6 | n >>> 26) + r | 0) | ~o)) + e[7] + 1126891415 | 0) << 10 | i >>> 22) + n | 0) ^ ((o = ((o += (n ^ (i | ~r)) + e[14] - 1416354905 | 0) << 15 | o >>> 17) + i | 0) | ~n)) + e[5] - 57434055 | 0) << 21 | r >>> 11) + o | 0;
          r = ((r += ((i = ((i += (r ^ ((n = ((n += (o ^ (r | ~i)) + e[12] + 1700485571 | 0) << 6 | n >>> 26) + r | 0) | ~o)) + e[3] - 1894986606 | 0) << 10 | i >>> 22) + n | 0) ^ ((o = ((o += (n ^ (i | ~r)) + e[10] - 1051523 | 0) << 15 | o >>> 17) + i | 0) | ~n)) + e[1] - 2054922799 | 0) << 21 | r >>> 11) + o | 0;
          r = ((r += ((i = ((i += (r ^ ((n = ((n += (o ^ (r | ~i)) + e[8] + 1873313359 | 0) << 6 | n >>> 26) + r | 0) | ~o)) + e[15] - 30611744 | 0) << 10 | i >>> 22) + n | 0) ^ ((o = ((o += (n ^ (i | ~r)) + e[6] - 1560198380 | 0) << 15 | o >>> 17) + i | 0) | ~n)) + e[13] + 1309151649 | 0) << 21 | r >>> 11) + o | 0;
          r = ((r += ((i = ((i += (r ^ ((n = ((n += (o ^ (r | ~i)) + e[4] - 145523070 | 0) << 6 | n >>> 26) + r | 0) | ~o)) + e[11] - 1120210379 | 0) << 10 | i >>> 22) + n | 0) ^ ((o = ((o += (n ^ (i | ~r)) + e[2] + 718787259 | 0) << 15 | o >>> 17) + i | 0) | ~n)) + e[9] - 343485551 | 0) << 21 | r >>> 11) + o | 0;
          t[0] = n + t[0] | 0;
          t[1] = r + t[1] | 0;
          t[2] = o + t[2] | 0;
          t[3] = i + t[3] | 0;
        }
        function n(t) {
          var e;
          var n = [];
          for (e = 0; e < 64; e += 4) {
            n[e >> 2] = t.charCodeAt(e) + (t.charCodeAt(e + 1) << 8) + (t.charCodeAt(e + 2) << 16) + (t.charCodeAt(e + 3) << 24);
          }
          return n;
        }
        function r(t) {
          var e;
          var n = [];
          for (e = 0; e < 64; e += 4) {
            n[e >> 2] = t[e] + (t[e + 1] << 8) + (t[e + 2] << 16) + (t[e + 3] << 24);
          }
          return n;
        }
        function o(t) {
          var r;
          var o;
          var i;
          var a;
          var s;
          var u;
          var c = t.length;
          var f = [1732584193, -271733879, -1732584194, 271733878];
          for (r = 64; r <= c; r += 64) {
            e(f, n(t.substring(r - 64, r)));
          }
          for (o = (t = t.substring(r - 64)).length, i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], r = 0; r < o; r += 1) {
            i[r >> 2] |= t.charCodeAt(r) << (r % 4 << 3);
          }
          if (i[r >> 2] |= 128 << (r % 4 << 3), r > 55) {
            for (e(f, i), r = 0; r < 16; r += 1) {
              i[r] = 0;
            }
          }
          a = (a = 8 * c).toString(16).match(/(.*?)(.{0,8})$/);
          s = parseInt(a[2], 16);
          u = parseInt(a[1], 16) || 0;
          i[14] = s;
          i[15] = u;
          e(f, i);
          return f;
        }
        function i(t) {
          var e;
          var n = "";
          for (e = 0; e < 4; e += 1) {
            n += f[t >> 8 * e + 4 & 15] + f[t >> 8 * e & 15];
          }
          return n;
        }
        function a(t) {
          var e;
          for (e = 0; e < t.length; e += 1) {
            t[e] = i(t[e]);
          }
          return t.join("");
        }
        function s(t) {
          if (/[\u0080-\uFFFF]/.test(t)) {
            t = unescape(encodeURIComponent(t));
          }
          return t;
        }
        function u(t) {
          var e;
          var n = [];
          var r = t.length;
          for (e = 0; e < r - 1; e += 2) {
            n.push(parseInt(t.substr(e, 2), 16));
          }
          return String.fromCharCode.apply(String, n);
        }
        function c() {
          this.reset();
        }
        var f = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
        a(o("hello"));
        if (!("undefined" == typeof ArrayBuffer || ArrayBuffer.prototype.slice)) {
          (function () {
            function e(t, e) {
              return (t = 0 | t || 0) < 0 ? Math.max(t + e, 0) : Math.min(t, e);
            }
            ArrayBuffer.prototype.slice = function (n, r) {
              var o;
              var i;
              var a;
              var s;
              var u = this.byteLength;
              var c = e(n, u);
              var f = u;
              if (r !== t) {
                f = e(r, u);
              }
              return c > f ? new ArrayBuffer(0) : (o = f - c, i = new ArrayBuffer(o), a = new Uint8Array(i), s = new Uint8Array(this, c, o), a.set(s), i);
            };
          })();
        }
        c.prototype.append = function (t) {
          this.appendBinary(s(t));
          return this;
        };
        c.prototype.appendBinary = function (t) {
          this._buff += t;
          this._length += t.length;
          var r;
          var o = this._buff.length;
          for (r = 64; r <= o; r += 64) {
            e(this._hash, n(this._buff.substring(r - 64, r)));
          }
          this._buff = this._buff.substring(r - 64);
          return this;
        };
        c.prototype.end = function (t) {
          var e;
          var n;
          var r = this._buff;
          var o = r.length;
          var i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          for (e = 0; e < o; e += 1) {
            i[e >> 2] |= r.charCodeAt(e) << (e % 4 << 3);
          }
          this._finish(i, o);
          n = a(this._hash);
          if (t) {
            n = u(n);
          }
          this.reset();
          return n;
        };
        c.prototype.reset = function () {
          this._buff = "";
          this._length = 0;
          this._hash = [1732584193, -271733879, -1732584194, 271733878];
          return this;
        };
        c.prototype.getState = function () {
          return {
            buff: this._buff,
            length: this._length,
            hash: this._hash
          };
        };
        c.prototype.setState = function (t) {
          this._buff = t.buff;
          this._length = t.length;
          this._hash = t.hash;
          return this;
        };
        c.prototype.destroy = function () {
          delete this._hash;
          delete this._buff;
          delete this._length;
        };
        c.prototype._finish = function (t, n) {
          var r;
          var o;
          var i;
          var a = n;
          if (t[a >> 2] |= 128 << (a % 4 << 3), a > 55) {
            for (e(this._hash, t), a = 0; a < 16; a += 1) {
              t[a] = 0;
            }
          }
          r = (r = 8 * this._length).toString(16).match(/(.*?)(.{0,8})$/);
          o = parseInt(r[2], 16);
          i = parseInt(r[1], 16) || 0;
          t[14] = o;
          t[15] = i;
          e(this._hash, t);
        };
        c.hash = function (t, e) {
          return c.hashBinary(s(t), e);
        };
        c.hashBinary = function (t, e) {
          var n = a(o(t));
          return e ? u(n) : n;
        };
        c.ArrayBuffer = function () {
          this.reset();
        };
        c.ArrayBuffer.prototype.append = function (t) {
          var n;
          var o = function (t, e, n) {
            var r = new Uint8Array(t.byteLength + e.byteLength);
            r.set(new Uint8Array(t));
            r.set(new Uint8Array(e), t.byteLength);
            return r;
          }(this._buff.buffer, t);
          var i = o.length;
          for (this._length += t.byteLength, n = 64; n <= i; n += 64) {
            e(this._hash, r(o.subarray(n - 64, n)));
          }
          this._buff = n - 64 < i ? new Uint8Array(o.buffer.slice(n - 64)) : new Uint8Array(0);
          return this;
        };
        c.ArrayBuffer.prototype.end = function (t) {
          var e;
          var n;
          var r = this._buff;
          var o = r.length;
          var i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          for (e = 0; e < o; e += 1) {
            i[e >> 2] |= r[e] << (e % 4 << 3);
          }
          this._finish(i, o);
          n = a(this._hash);
          if (t) {
            n = u(n);
          }
          this.reset();
          return n;
        };
        c.ArrayBuffer.prototype.reset = function () {
          this._buff = new Uint8Array(0);
          this._length = 0;
          this._hash = [1732584193, -271733879, -1732584194, 271733878];
          return this;
        };
        c.ArrayBuffer.prototype.getState = function () {
          var t = c.prototype.getState.call(this);
          t.buff = function (t) {
            return String.fromCharCode.apply(null, new Uint8Array(t));
          }(t.buff);
          return t;
        };
        c.ArrayBuffer.prototype.setState = function (t) {
          t.buff = function (t, e) {
            var n;
            var r = t.length;
            var o = new ArrayBuffer(r);
            var i = new Uint8Array(o);
            for (n = 0; n < r; n += 1) {
              i[n] = t.charCodeAt(n);
            }
            return i;
          }(t.buff);
          return c.prototype.setState.call(this, t);
        };
        c.ArrayBuffer.prototype.destroy = c.prototype.destroy;
        c.ArrayBuffer.prototype._finish = c.prototype._finish;
        c.ArrayBuffer.hash = function (t, n) {
          var o = a(function (t) {
            var n;
            var o;
            var i;
            var a;
            var s;
            var u;
            var c = t.length;
            var f = [1732584193, -271733879, -1732584194, 271733878];
            for (n = 64; n <= c; n += 64) {
              e(f, r(t.subarray(n - 64, n)));
            }
            for (o = (t = n - 64 < c ? t.subarray(n - 64) : new Uint8Array(0)).length, i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], n = 0; n < o; n += 1) {
              i[n >> 2] |= t[n] << (n % 4 << 3);
            }
            if (i[n >> 2] |= 128 << (n % 4 << 3), n > 55) {
              for (e(f, i), n = 0; n < 16; n += 1) {
                i[n] = 0;
              }
            }
            a = (a = 8 * c).toString(16).match(/(.*?)(.{0,8})$/);
            s = parseInt(a[2], 16);
            u = parseInt(a[1], 16) || 0;
            i[14] = s;
            i[15] = u;
            e(f, i);
            return f;
          }(new Uint8Array(t)));
          return n ? u(o) : o;
        };
        return c;
      }();
    }();
  }, function (t, e, n) {
    "use strict";

    function r(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }
    e.__esModule = !0;
    e.UploadManager = void 0;
    var o = r(n(18));
    var i = r(n(34));
    var a = r(n(17));
    var s = n(12);
    var u = n(93);
    e.UploadManager = function () {
      function t(e, n, r) {
        var o = this;
        (0, a.default)(this, t);
        this.config = (0, i.default)({
          useCdnDomain: !0,
          disableStatisticsReport: !1,
          retryCount: 3,
          checkByMD5: !1,
          uphost: null,
          forceDirect: !1,
          concurrentRequestLimit: 3,
          region: null
        }, e.config);
        this.putExtra = (0, i.default)({
          fname: "",
          params: {},
          mimeType: null
        }, e.putExtra);
        this.statisticsLogger = r;
        this.progress = null;
        this.xhrList = [];
        this.xhrHandler = function (t) {
          return o.xhrList.push(t);
        };
        this.aborted = !1;
        this.file = e.file;
        this.key = e.key;
        this.token = e.token;
        this.onData = function () {};
        this.onError = function () {};
        this.onComplete = function () {};
        this.retryCount = 0;
        (0, i.default)(this, n);
      }
      t.prototype.putFile = function () {
        var t = this;
        if (this.aborted = !1, this.putExtra.fname || (this.putExtra.fname = this.file.name), !this.putExtra.mimeType || !this.putExtra.mimeType.length || (0, s.isContainFileMimeType)(this.file.type, this.putExtra.mimeType)) {
          var e = (0, s.getUploadUrl)(this.config, this.token).then(function (e) {
            t.uploadUrl = e;
            t.uploadAt = new Date().getTime();
            return t.config.forceDirect ? t.directUpload() : t.file.size > 4194304 ? t.resumeUpload() : t.directUpload();
          });
          e.then(function (e) {
            t.onComplete(e.data);
            if (!t.config.disableStatisticsReport) {
              t.sendLog(e.reqId, 200);
            }
          }, function (e) {
            if (t.clear(), e.isRequestError && !t.config.disableStatisticsReport) {
              var n = t.aborted ? "" : e.reqId;
              var r = t.aborted ? -2 : e.code;
              t.sendLog(n, r);
            }
            var o = e.isRequestError && 0 === e.code && !t.aborted;
            var i = ++t.retryCount <= t.config.retryCount;
            if (o && i) {
              t.putFile();
            } else {
              t.onError(e);
            }
          });
          return e;
        }
        var n = new Error("file type doesn't match with what you specify");
        this.onError(n);
      };
      t.prototype.clear = function () {
        this.xhrList.forEach(function (t) {
          return t.abort();
        });
        this.xhrList = [];
      };
      t.prototype.stop = function () {
        this.clear();
        this.aborted = !0;
      };
      t.prototype.sendLog = function (t, e) {
        this.statisticsLogger.log({
          code: e,
          reqId: t,
          host: (0, s.getDomainFromUrl)(this.uploadUrl),
          remoteIp: "",
          port: (0, s.getPortFromUrl)(this.uploadUrl),
          duration: (new Date().getTime() - this.uploadAt) / 1e3,
          time: Math.floor(this.uploadAt / 1e3),
          bytesSent: this.progress ? this.progress.total.loaded : 0,
          upType: "jssdk-h5",
          size: this.file.size
        }, this.token);
      };
      t.prototype.directUpload = function () {
        var t = this;
        var e = new FormData();
        e.append("file", this.file);
        e.append("token", this.token);
        if (null != this.key) {
          e.append("key", this.key);
        }
        e.append("fname", this.putExtra.fname);
        (0, s.filterParams)(this.putExtra.params).forEach(function (t) {
          return e.append(t[0], t[1]);
        });
        return (0, s.request)(this.uploadUrl, {
          method: "POST",
          body: e,
          onProgress: function (e) {
            t.updateDirectProgress(e.loaded, e.total);
          },
          onCreate: this.xhrHandler
        }).then(function (e) {
          t.finishDirectProgress();
          return e;
        });
      };
      t.prototype.resumeUpload = function () {
        var t = this;
        this.loaded = {
          mkFileProgress: 0,
          chunks: null
        };
        this.ctxList = [];
        this.localInfo = (0, s.getLocalFileInfo)(this.file);
        this.chunks = (0, s.getChunks)(this.file, 4194304);
        this.initChunksProgress();
        var e = new u.Pool(function (e) {
          return t.uploadChunk(e);
        }, this.config.concurrentRequestLimit);
        var n = this.chunks.map(function (t, n) {
          return e.enqueue({
            chunk: t,
            index: n
          });
        });
        var r = o.default.all(n).then(function () {
          return t.mkFileReq();
        });
        r.then(function (e) {
          (0, s.removeLocalFileInfo)(t.file);
        }, function (e) {
          if (!(701 !== e.code)) {
            (0, s.removeLocalFileInfo)(t.file);
          }
        });
        return r;
      };
      t.prototype.uploadChunk = function (t) {
        var e = this;
        var n = t.index;
        var r = t.chunk;
        var i = this.localInfo[n];
        var a = this.uploadUrl + "/mkblk/" + r.size;
        var u = i && !(0, s.isChunkExpired)(i.time);
        var c = this.config.checkByMD5;
        var f = function () {
          e.updateChunkProgress(r.size, n);
          e.ctxList[n] = {
            ctx: i.ctx,
            size: i.size,
            time: i.time,
            md5: i.md5
          };
          return o.default.resolve(null);
        };
        return u && !c ? f() : (0, s.computeMd5)(r).then(function (t) {
          if (u && t === i.md5) {
            return f();
          }
          var o = (0, s.getHeadersForChunkUpload)(e.token);
          var c = function (t) {
            e.updateChunkProgress(t.loaded, n);
          };
          var l = e.xhrHandler;
          return (0, s.request)(a, {
            method: "POST",
            headers: o,
            body: r,
            onProgress: c,
            onCreate: l
          }).then(function (o) {
            c({
              loaded: r.size
            });
            e.ctxList[n] = {
              time: new Date().getTime(),
              ctx: o.data.ctx,
              size: r.size,
              md5: t
            };
            (0, s.setLocalFileInfo)(e.file, e.ctxList);
          });
        });
      };
      t.prototype.mkFileReq = function () {
        var t = this;
        var e = (0, i.default)({
          mimeType: "application/octet-stream"
        }, this.putExtra);
        var n = (0, s.createMkFileUrl)(this.uploadUrl, this.file, this.key, e);
        var r = this.ctxList.map(function (t) {
          return t.ctx;
        }).join(",");
        var a = (0, s.getHeadersForMkFile)(this.token);
        var u = this.xhrHandler;
        return (0, s.request)(n, {
          method: "POST",
          body: r,
          headers: a,
          onCreate: u
        }).then(function (e) {
          t.updateMkFileProgress(1);
          return o.default.resolve(e);
        });
      };
      t.prototype.updateDirectProgress = function (t, e) {
        this.progress = {
          total: this.getProgressInfoItem(t, e + 1)
        };
        this.onData(this.progress);
      };
      t.prototype.finishDirectProgress = function () {
        if (!this.progress) {
          this.progress = {
            total: this.getProgressInfoItem(this.file.size, this.file.size)
          };
          return void this.onData(this.progress);
        }
        var t = this.progress.total;
        this.progress = {
          total: this.getProgressInfoItem(t.loaded + 1, t.size)
        };
        this.onData(this.progress);
      };
      t.prototype.initChunksProgress = function () {
        this.loaded.chunks = this.chunks.map(function (t) {
          return 0;
        });
        this.notifyResumeProgress();
      };
      t.prototype.updateChunkProgress = function (t, e) {
        this.loaded.chunks[e] = t;
        this.notifyResumeProgress();
      };
      t.prototype.updateMkFileProgress = function (t) {
        this.loaded.mkFileProgress = t;
        this.notifyResumeProgress();
      };
      t.prototype.notifyResumeProgress = function () {
        var t = this;
        this.progress = {
          total: this.getProgressInfoItem((0, s.sum)(this.loaded.chunks) + this.loaded.mkFileProgress, this.file.size + 1),
          chunks: this.chunks.map(function (e, n) {
            return t.getProgressInfoItem(t.loaded.chunks[n], e.size);
          })
        };
        this.onData(this.progress);
      };
      t.prototype.getProgressInfoItem = function (t, e) {
        return {
          loaded: t,
          size: e,
          percent: t / e * 100
        };
      };
      return t;
    }();
  }, function (t, e, n) {
    "use strict";

    function r(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }
    e.__esModule = !0;
    e.Pool = void 0;
    var o = r(n(18));
    var i = r(n(17));
    e.Pool = function () {
      function t(e, n) {
        (0, i.default)(this, t);
        this.runTask = e;
        this.queue = [];
        this.processing = [];
        this.limit = n;
      }
      t.prototype.enqueue = function (t) {
        var e = this;
        return new o.default(function (n, r) {
          e.queue.push({
            task: t,
            resolve: n,
            reject: r
          });
          e.check();
        });
      };
      t.prototype.run = function (t) {
        var e = this;
        this.queue = this.queue.filter(function (e) {
          return e !== t;
        });
        this.processing.push(t);
        this.runTask(t.task).then(function () {
          e.processing = e.processing.filter(function (e) {
            return e !== t;
          });
          t.resolve();
          e.check();
        }, function (e) {
          return t.reject(e);
        });
      };
      t.prototype.check = function () {
        var t = this;
        var e = this.processing.length;
        var n = this.limit - e;
        this.queue.slice(0, n).forEach(function (e, n) {
          t.run(e);
        });
      };
      return t;
    }();
  }, function (t, e, n) {
    "use strict";

    function r(t, e) {
      t = encodeURIComponent(t);
      if ("/" !== e.slice(e.length - 1)) {
        e += "/";
      }
      return e + t;
    }
    function o(t, e, n) {
      if (!/^\d$/.test(t.mode)) {
        throw "mode should be number in imageView2";
      }
      var o = t.mode;
      var i = t.w;
      var a = t.h;
      var s = t.q;
      var u = t.format;
      if (!i && !a) {
        throw "param w and h is empty in imageView2";
      }
      var c = "imageView2/" + encodeURIComponent(o);
      c += i ? "/w/" + encodeURIComponent(i) : "";
      c += a ? "/h/" + encodeURIComponent(a) : "";
      c += s ? "/q/" + encodeURIComponent(s) : "";
      c += u ? "/format/" + encodeURIComponent(u) : "";
      if (e) {
        c = r(e, n) + "?" + c;
      }
      return c;
    }
    function i(t, e, n) {
      var o = t["auto-orient"];
      var i = t.thumbnail;
      var a = t.strip;
      var s = t.gravity;
      var u = t.crop;
      var c = t.quality;
      var f = t.rotate;
      var l = t.format;
      var h = t.blur;
      var p = "imageMogr2";
      p += o ? "/auto-orient" : "";
      p += i ? "/thumbnail/" + encodeURIComponent(i) : "";
      p += a ? "/strip" : "";
      p += s ? "/gravity/" + encodeURIComponent(s) : "";
      p += c ? "/quality/" + encodeURIComponent(c) : "";
      p += u ? "/crop/" + encodeURIComponent(u) : "";
      p += f ? "/rotate/" + encodeURIComponent(f) : "";
      p += l ? "/format/" + encodeURIComponent(l) : "";
      p += h ? "/blur/" + encodeURIComponent(h) : "";
      if (e) {
        p = r(e, n) + "?" + p;
      }
      return p;
    }
    function a(t, e, n) {
      var o = t.mode;
      if (!o) {
        throw "mode can't be empty in watermark";
      }
      var i = "watermark/" + o;
      if (1 !== o && 2 !== o) {
        throw "mode is wrong";
      }
      if (1 === o) {
        var a = t.image;
        if (!a) {
          throw "image can't be empty in watermark";
        }
        i += a ? "/image/" + (0, u.urlSafeBase64Encode)(a) : "";
      }
      if (2 === o) {
        var s = t.text;
        var c = t.font;
        var f = t.fontsize;
        var l = t.fill;
        if (!s) {
          throw "text can't be empty in watermark";
        }
        i += s ? "/text/" + (0, u.urlSafeBase64Encode)(s) : "";
        i += c ? "/font/" + (0, u.urlSafeBase64Encode)(c) : "";
        i += f ? "/fontsize/" + f : "";
        i += l ? "/fill/" + (0, u.urlSafeBase64Encode)(l) : "";
      }
      var h = t.dissolve;
      var p = t.gravity;
      var d = t.dx;
      var g = t.dy;
      i += h ? "/dissolve/" + encodeURIComponent(h) : "";
      i += p ? "/gravity/" + encodeURIComponent(p) : "";
      i += d ? "/dx/" + encodeURIComponent(d) : "";
      i += g ? "/dy/" + encodeURIComponent(g) : "";
      if (e) {
        i = r(e, n) + "?" + i;
      }
      return i;
    }
    e.__esModule = !0;
    e.imageView2 = o;
    e.imageMogr2 = i;
    e.watermark = a;
    e.imageInfo = function (t, e) {
      var n = r(t, e) + "?imageInfo";
      return (0, s.request)(n, {
        method: "GET"
      });
    };
    e.exif = function (t, e) {
      var n = r(t, e) + "?exif";
      return (0, s.request)(n, {
        method: "GET"
      });
    };
    e.pipeline = function (t, e, n) {
      var s = void 0;
      var u = void 0;
      var c = "";
      if ("[object Array]" === Object.prototype.toString.call(t)) {
        for (var f = 0, l = t.length; f < l; f++) {
          if (!(s = t[f]).fop) {
            throw "fop can't be empty in pipeline";
          }
          switch (s.fop) {
            case "watermark":
              c += a(s) + "|";
              break;
            case "imageView2":
              c += o(s) + "|";
              break;
            case "imageMogr2":
              c += i(s) + "|";
              break;
            default:
              u = !0;
          }
          if (u) {
            throw "fop is wrong in pipeline";
          }
        }
        if (e) {
          var h = (c = r(e, n) + "?" + c).length;
          if ("|" === c.slice(h - 1)) {
            c = c.slice(0, h - 1);
          }
        }
        return c;
      }
      throw "pipeline's first param should be array";
    };
    var s = n(12);
    var u = n(56);
  }, function (t, e, n) {
    "use strict";

    function r(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }
    e.__esModule = !0;
    e.Observable = void 0;
    var o = r(n(96));
    var i = r(n(17));
    e.Observable = function () {
      function t(e) {
        (0, i.default)(this, t);
        this.subscribeAction = e;
      }
      t.prototype.subscribe = function (t, e, n) {
        var r = new a(t, e, n);
        var o = this.subscribeAction(r);
        return new s(r, o);
      };
      return t;
    }();
    var a = function () {
      function t(e, n, r) {
        (0, i.default)(this, t);
        this.isStopped = !1;
        if ("object" === (void 0 === e ? "undefined" : (0, o.default)(e))) {
          this._onNext = e.next;
          this._onError = e.error;
          this._onCompleted = e.complete;
        } else {
          this._onNext = e;
          this._onError = n;
          this._onCompleted = r;
        }
      }
      t.prototype.next = function (t) {
        if (!this.isStopped && this._onNext) {
          this._onNext(t);
        }
      };
      t.prototype.error = function (t) {
        if (!this.isStopped && this._onError) {
          this.isStopped = !0;
          this._onError(t);
        }
      };
      t.prototype.complete = function (t) {
        if (!this.isStopped && this._onCompleted) {
          this.isStopped = !0;
          this._onCompleted(t);
        }
      };
      return t;
    }();
    var s = function () {
      function t(e, n) {
        (0, i.default)(this, t);
        this.observer = e;
        this.result = n;
      }
      t.prototype.unsubscribe = function () {
        this.observer.isStopped = !0;
        this.result();
      };
      return t;
    }();
  }, function (t, e, n) {
    "use strict";

    function r(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }
    e.__esModule = !0;
    var o = r(n(97));
    var i = r(n(99));
    var a = "function" == typeof i.default && "symbol" == typeof o.default ? function (t) {
      return typeof t;
    } : function (t) {
      return t && "function" == typeof i.default && t.constructor === i.default && t !== i.default.prototype ? "symbol" : typeof t;
    };
    e.default = "function" == typeof i.default && "symbol" === a(o.default) ? function (t) {
      return void 0 === t ? "undefined" : a(t);
    } : function (t) {
      return t && "function" == typeof i.default && t.constructor === i.default && t !== i.default.prototype ? "symbol" : void 0 === t ? "undefined" : a(t);
    };
  }, function (t, e, n) {
    t.exports = {
      default: n(98),
      __esModule: !0
    };
  }, function (t, e, n) {
    n(41);
    n(50);
    t.exports = n(37).f("iterator");
  }, function (t, e, n) {
    t.exports = {
      default: n(100),
      __esModule: !0
    };
  }, function (t, e, n) {
    n(101);
    n(40);
    n(107);
    n(108);
    t.exports = n(1).Symbol;
  }, function (t, e, n) {
    "use strict";

    var r = n(0);
    var o = n(9);
    var i = n(4);
    var a = n(5);
    var s = n(44);
    var u = n(102).KEY;
    var c = n(10);
    var f = n(31);
    var l = n(23);
    var h = n(22);
    var p = n(2);
    var d = n(37);
    var g = n(38);
    var m = n(103);
    var v = n(104);
    var y = n(3);
    var b = n(8);
    var w = n(24);
    var x = n(11);
    var S = n(29);
    var P = n(21);
    var _ = n(45);
    var C = n(105);
    var U = n(106);
    var F = n(35);
    var I = n(7);
    var k = n(15);
    var E = U.f;
    var M = I.f;
    var O = C.f;
    var T = r.Symbol;
    var R = r.JSON;
    var A = R && R.stringify;
    var L = p("_hidden");
    var D = p("toPrimitive");
    var j = {}.propertyIsEnumerable;
    var B = f("symbol-registry");
    var G = f("symbols");
    var q = f("op-symbols");
    var N = Object.prototype;
    var z = "function" == typeof T && !!F.f;
    var H = r.QObject;
    var V = !H || !H.prototype || !H.prototype.findChild;
    var W = i && c(function () {
      return 7 != _(M({}, "a", {
        get: function () {
          return M(this, "a", {
            value: 7
          }).a;
        }
      })).a;
    }) ? function (t, e, n) {
      var r = E(N, e);
      if (r) {
        delete N[e];
      }
      M(t, e, n);
      if (r && t !== N) {
        M(N, e, r);
      }
    } : M;
    var J = function (t) {
      var e = G[t] = _(T.prototype);
      e._k = t;
      return e;
    };
    var X = z && "symbol" == typeof T.iterator ? function (t) {
      return "symbol" == typeof t;
    } : function (t) {
      return t instanceof T;
    };
    var Y = function (t, e, n) {
      if (t === N) {
        Y(q, e, n);
      }
      y(t);
      e = S(e, !0);
      y(n);
      return o(G, e) ? (n.enumerable ? (o(t, L) && t[L][e] && (t[L][e] = !1), n = _(n, {
        enumerable: P(0, !1)
      })) : (o(t, L) || M(t, L, P(1, {})), t[L][e] = !0), W(t, e, n)) : M(t, e, n);
    };
    var K = function (t, e) {
      y(t);
      for (var n, r = m(e = x(e)), o = 0, i = r.length; i > o;) {
        Y(t, n = r[o++], e[n]);
      }
      return t;
    };
    var $ = function (t) {
      var e = j.call(this, t = S(t, !0));
      return !(this === N && o(G, t) && !o(q, t)) && (!(e || !o(this, t) || !o(G, t) || o(this, L) && this[L][t]) || e);
    };
    var Q = function (t, e) {
      if (t = x(t), e = S(e, !0), t !== N || !o(G, e) || o(q, e)) {
        var n = E(t, e);
        if (!(!n || !o(G, e) || o(t, L) && t[L][e])) {
          n.enumerable = !0;
        }
        return n;
      }
    };
    var Z = function (t) {
      for (var e, n = O(x(t)), r = [], i = 0; n.length > i;) {
        if (!(o(G, e = n[i++]) || e == L || e == u)) {
          r.push(e);
        }
      }
      return r;
    };
    var tt = function (t) {
      for (var e, n = t === N, r = O(n ? q : x(t)), i = [], a = 0; r.length > a;) {
        if (!(!o(G, e = r[a++]) || n && !o(N, e))) {
          i.push(G[e]);
        }
      }
      return i;
    };
    if (!z) {
      s((T = function () {
        if (this instanceof T) {
          throw TypeError("Symbol is not a constructor!");
        }
        var t = h(arguments.length > 0 ? arguments[0] : void 0);
        var e = function (n) {
          if (this === N) {
            e.call(q, n);
          }
          if (o(this, L) && o(this[L], t)) {
            this[L][t] = !1;
          }
          W(this, t, P(1, n));
        };
        if (i && V) {
          W(N, t, {
            configurable: !0,
            set: e
          });
        }
        return J(t);
      }).prototype, "toString", function () {
        return this._k;
      });
      U.f = Q;
      I.f = Y;
      n(57).f = C.f = Z;
      n(25).f = $;
      F.f = tt;
      if (i && !n(13)) {
        s(N, "propertyIsEnumerable", $, !0);
      }
      d.f = function (t) {
        return J(p(t));
      };
    }
    a(a.G + a.W + a.F * !z, {
      Symbol: T
    });
    for (var et = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), nt = 0; et.length > nt;) {
      p(et[nt++]);
    }
    for (var rt = k(p.store), ot = 0; rt.length > ot;) {
      g(rt[ot++]);
    }
    a(a.S + a.F * !z, "Symbol", {
      for: function (t) {
        return o(B, t += "") ? B[t] : B[t] = T(t);
      },
      keyFor: function (t) {
        if (!X(t)) {
          throw TypeError(t + " is not a symbol!");
        }
        for (var e in B) if (B[e] === t) {
          return e;
        }
      },
      useSetter: function () {
        V = !0;
      },
      useSimple: function () {
        V = !1;
      }
    });
    a(a.S + a.F * !z, "Object", {
      create: function (t, e) {
        return void 0 === e ? _(t) : K(_(t), e);
      },
      defineProperty: Y,
      defineProperties: K,
      getOwnPropertyDescriptor: Q,
      getOwnPropertyNames: Z,
      getOwnPropertySymbols: tt
    });
    var it = c(function () {
      F.f(1);
    });
    a(a.S + a.F * it, "Object", {
      getOwnPropertySymbols: function (t) {
        return F.f(w(t));
      }
    });
    if (R) {
      a(a.S + a.F * (!z || c(function () {
        var t = T();
        return "[null]" != A([t]) || "{}" != A({
          a: t
        }) || "{}" != A(Object(t));
      })), "JSON", {
        stringify: function (t) {
          for (var e, n, r = [t], o = 1; arguments.length > o;) {
            r.push(arguments[o++]);
          }
          if (n = e = r[1], (b(e) || void 0 !== t) && !X(t)) {
            if (!v(e)) {
              e = function (t, e) {
                if ("function" == typeof n && (e = n.call(this, t, e)), !X(e)) {
                  return e;
                }
              };
            }
            r[1] = e;
            return A.apply(R, r);
          }
        }
      });
    }
    if (!T.prototype[D]) {
      n(6)(T.prototype, D, T.prototype.valueOf);
    }
    l(T, "Symbol");
    l(Math, "Math", !0);
    l(r.JSON, "JSON", !0);
  }, function (t, e, n) {
    var r = n(22)("meta");
    var o = n(8);
    var i = n(9);
    var a = n(7).f;
    var s = 0;
    var u = Object.isExtensible || function () {
      return !0;
    };
    var c = !n(10)(function () {
      return u(Object.preventExtensions({}));
    });
    var f = function (t) {
      a(t, r, {
        value: {
          i: "O" + ++s,
          w: {}
        }
      });
    };
    var l = t.exports = {
      KEY: r,
      NEED: !1,
      fastKey: function (t, e) {
        if (!o(t)) {
          return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
        }
        if (!i(t, r)) {
          if (!u(t)) {
            return "F";
          }
          if (!e) {
            return "E";
          }
          f(t);
        }
        return t[r].i;
      },
      getWeak: function (t, e) {
        if (!i(t, r)) {
          if (!u(t)) {
            return !0;
          }
          if (!e) {
            return !1;
          }
          f(t);
        }
        return t[r].w;
      },
      onFreeze: function (t) {
        if (c && l.NEED && u(t) && !i(t, r)) {
          f(t);
        }
        return t;
      }
    };
  }, function (t, e, n) {
    var r = n(15);
    var o = n(35);
    var i = n(25);
    t.exports = function (t) {
      var e = r(t);
      var n = o.f;
      if (n) {
        for (var a, s = n(t), u = i.f, c = 0; s.length > c;) {
          if (u.call(t, a = s[c++])) {
            e.push(a);
          }
        }
      }
      return e;
    };
  }, function (t, e, n) {
    var r = n(16);
    t.exports = Array.isArray || function (t) {
      return "Array" == r(t);
    };
  }, function (t, e, n) {
    var r = n(11);
    var o = n(57).f;
    var i = {}.toString;
    var a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    t.exports.f = function (t) {
      return a && "[object Window]" == i.call(t) ? function (t) {
        try {
          return o(t);
        } catch (t) {
          return a.slice();
        }
      }(t) : o(r(t));
    };
  }, function (t, e, n) {
    var r = n(25);
    var o = n(21);
    var i = n(11);
    var a = n(29);
    var s = n(9);
    var u = n(43);
    var c = Object.getOwnPropertyDescriptor;
    e.f = n(4) ? c : function (t, e) {
      if (t = i(t), e = a(e, !0), u) {
        try {
          return c(t, e);
        } catch (t) {}
      }
      if (s(t, e)) {
        return o(!r.f.call(t, e), t[e]);
      }
    };
  }, function (t, e, n) {
    n(38)("asyncIterator");
  }, function (t, e, n) {
    n(38)("observable");
  }, function (t, e, n) {
    "use strict";

    function r(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }
    e.__esModule = !0;
    e.StatisticsLogger = void 0;
    var o = r(n(36));
    var i = r(n(17));
    var a = n(12);
    e.StatisticsLogger = function () {
      function t() {
        (0, i.default)(this, t);
      }
      t.prototype.log = function (t, e) {
        var n = "";
        (0, o.default)(t).forEach(function (e) {
          return n += t[e] + ",";
        });
        this.send(n, e, 0);
      };
      t.prototype.send = function (t, e, n) {
        var r = (0, a.createXHR)();
        var o = this;
        r.open("POST", "https://uplog.qbox.me/log/3");
        r.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        r.setRequestHeader("Authorization", "UpToken " + e);
        r.onreadystatechange = function () {
          if (4 === r.readyState && 200 !== r.status && ++n <= 3) {
            o.send(t, e, n);
          }
        };
        r.send(t);
      };
      return t;
    }();
  }, function (t, e, n) {
    "use strict";

    function r(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }
    e.__esModule = !0;
    var o = r(n(18));
    var i = r(n(34));
    var a = r(n(17));
    var s = r(n(36));
    var u = n(111);
    var c = n(12);
    var f = {
      PNG: "image/png",
      JPEG: "image/jpeg",
      WEBP: "image/webp",
      BMP: "image/bmp"
    };
    var l = Math.log(2);
    var h = (0, s.default)(f).map(function (t) {
      return f[t];
    });
    var p = f.JPEG;
    var d = function () {
      function t(e, n) {
        (0, a.default)(this, t);
        this.config = (0, i.default)({
          quality: .92,
          noCompressIfLarger: !1
        }, n);
        this.file = e;
      }
      t.prototype.process = function () {
        var t = this;
        this.outputType = this.file.type;
        var e = {};
        return function (t) {
          return h.includes(t);
        }(this.file.type) ? this.getOriginImage().then(function (e) {
          return t.getCanvas(e);
        }).then(function (n) {
          var r = 1;
          if (t.config.maxWidth) {
            r = Math.min(1, t.config.maxWidth / n.width);
          }
          if (t.config.maxHeight) {
            r = Math.min(1, r, t.config.maxHeight / n.height);
          }
          e.width = n.width;
          e.height = n.height;
          return t.doScale(n, r);
        }).then(function (n) {
          var r = t.toBlob(n);
          return r.size > t.file.size && t.config.noCompressIfLarger ? {
            dist: t.file,
            width: e.width,
            height: e.height
          } : {
            dist: r,
            width: n.width,
            height: n.height
          };
        }) : o.default.reject(new Error("unsupported file type: " + this.file.type));
      };
      t.prototype.clear = function (t, e, n) {
        if (this.outputType === p) {
          t.fillStyle = "#fff";
          t.fillRect(0, 0, e, n);
        } else {
          t.clearRect(0, 0, e, n);
        }
      };
      t.prototype.getOriginImage = function () {
        var t = this;
        return new o.default(function (e, n) {
          var r = (0, c.createObjectURL)(t.file);
          var o = new Image();
          o.onload = function () {
            e(o);
          };
          o.onerror = function () {
            n("image load error");
          };
          o.src = r;
        });
      };
      t.prototype.getCanvas = function (t) {
        var e = this;
        return new o.default(function (n, r) {
          u.EXIF.getData(t, function () {
            var r = u.EXIF.getTag(t, "Orientation") || 1;
            var o = (0, c.getTransform)(t, r);
            var i = o.width;
            var a = o.height;
            var s = o.matrix;
            var f = document.createElement("canvas");
            var l = f.getContext("2d");
            f.width = i;
            f.height = a;
            e.clear(l, i, a);
            l.transform.apply(l, s);
            l.drawImage(t, 0, 0);
            n(f);
          });
        });
      };
      t.prototype.doScale = function (t, e) {
        if (1 === e) {
          return o.default.resolve(t);
        }
        var n = t.getContext("2d");
        var r = Math.min(4, Math.ceil(1 / e / l));
        var i = Math.pow(e, 1 / r);
        var a = document.createElement("canvas");
        var s = a.getContext("2d");
        var u = t.width;
        var c = t.height;
        var f = u;
        var h = c;
        a.width = u;
        a.height = c;
        for (var p = void 0, d = void 0, g = 0; g < r; g++) {
          var m = u * i | 0;
          var v = c * i | 0;
          if (g === r - 1) {
            m = f * e;
            v = h * e;
          }
          if (g % 2 == 0) {
            p = t;
            d = s;
          } else {
            p = a;
            d = n;
          }
          this.clear(d, u, c);
          d.drawImage(p, 0, 0, u, c, 0, 0, m, v);
          u = m;
          c = v;
        }
        var y = p === t ? a : t;
        var b = d.getImageData(0, 0, u, c);
        y.width = u;
        y.height = c;
        d.putImageData(b, 0, 0);
        return o.default.resolve(y);
      };
      t.prototype.toBlob = function (t) {
        var e = t.toDataURL(this.outputType, this.config.quality);
        var n = atob(e.split(",")[1]).split("").map(function (t) {
          return t.charCodeAt(0);
        });
        return new Blob([new Uint8Array(n)], {
          type: this.outputType
        });
      };
      return t;
    }();
    e.default = function (t, e) {
      return new d(t, e).process();
    };
  }, function (t, e, r) {
    var o;
    (function () {
      function r(t) {
        return !!t.exifdata;
      }
      function i(t, e) {
        function n(n) {
          var r = a(n);
          t.exifdata = r || {};
          var o = function (t) {
            var e = new DataView(t);
            if (d && console.log("Got file of length " + t.byteLength), 255 != e.getUint8(0) || 216 != e.getUint8(1)) {
              if (d) {
                console.log("Not a valid JPEG");
              }
              return !1;
            }
            for (var n = 2, r = t.byteLength; n < r;) {
              if (function (t, e) {
                return 56 === t.getUint8(e) && 66 === t.getUint8(e + 1) && 73 === t.getUint8(e + 2) && 77 === t.getUint8(e + 3) && 4 === t.getUint8(e + 4) && 4 === t.getUint8(e + 5);
              }(e, n)) {
                var o = e.getUint8(n + 7);
                if (o % 2 != 0) {
                  o += 1;
                }
                if (0 === o) {
                  o = 4;
                }
                return s(t, n + 8 + o, e.getUint16(n + 6 + o));
              }
              n++;
            }
          }(n);
          if (t.iptcdata = o || {}, g.isXmpEnabled) {
            var i = function (t) {
              if ("DOMParser" in self) {
                var e = new DataView(t);
                if (d && console.log("Got file of length " + t.byteLength), 255 != e.getUint8(0) || 216 != e.getUint8(1)) {
                  if (d) {
                    console.log("Not a valid JPEG");
                  }
                  return !1;
                }
                for (var n = 2, r = t.byteLength, o = new DOMParser(); n < r - 4;) {
                  if ("http" == f(e, n, 4)) {
                    var i = n - 1;
                    var a = e.getUint16(n - 2) - 1;
                    var s = f(e, i, a);
                    var u = s.indexOf("xmpmeta>") + 8;
                    var c = (s = s.substring(s.indexOf("<x:xmpmeta"), u)).indexOf("x:xmpmeta") + 10;
                    s = s.slice(0, c) + 'xmlns:Iptc4xmpCore="http://iptc.org/std/Iptc4xmpCore/1.0/xmlns/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:tiff="http://ns.adobe.com/tiff/1.0/" xmlns:plus="http://schemas.android.com/apk/lib/com.google.android.gms.plus" xmlns:ext="http://www.gettyimages.com/xsltExtension/1.0" xmlns:exif="http://ns.adobe.com/exif/1.0/" xmlns:stEvt="http://ns.adobe.com/xap/1.0/sType/ResourceEvent#" xmlns:stRef="http://ns.adobe.com/xap/1.0/sType/ResourceRef#" xmlns:crs="http://ns.adobe.com/camera-raw-settings/1.0/" xmlns:xapGImg="http://ns.adobe.com/xap/1.0/g/img/" xmlns:Iptc4xmpExt="http://iptc.org/std/Iptc4xmpExt/2008-02-29/" ' + s.slice(c);
                    return p(o.parseFromString(s, "text/xml"));
                  }
                  n++;
                }
              }
            }(n);
            t.xmpdata = i || {};
          }
          if (e) {
            e.call(t);
          }
        }
        if (t.src) {
          if (/^data\:/i.test(t.src)) {
            n(function (t, e) {
              e = e || t.match(/^data\:([^\;]+)\;base64,/im)[1] || "";
              t = t.replace(/^data\:([^\;]+)\;base64,/gim, "");
              for (var n = atob(t), r = n.length, o = new ArrayBuffer(r), i = new Uint8Array(o), a = 0; a < r; a++) {
                i[a] = n.charCodeAt(a);
              }
              return o;
            }(t.src));
          } else if (/^blob\:/i.test(t.src)) {
            (o = new FileReader()).onload = function (t) {
              n(t.target.result);
            };
            (function (t, e) {
              var n = new XMLHttpRequest();
              n.open("GET", t, !0);
              n.responseType = "blob";
              n.onload = function (t) {
                if (!(200 != this.status && 0 !== this.status)) {
                  e(this.response);
                }
              };
              n.send();
            })(t.src, function (t) {
              o.readAsArrayBuffer(t);
            });
          } else {
            var r = new XMLHttpRequest();
            r.onload = function () {
              if (200 != this.status && 0 !== this.status) {
                throw "Could not load image";
              }
              n(r.response);
              r = null;
            };
            r.open("GET", t.src, !0);
            r.responseType = "arraybuffer";
            r.send(null);
          }
        } else if (self.FileReader && (t instanceof self.Blob || t instanceof self.File)) {
          var o;
          (o = new FileReader()).onload = function (t) {
            if (d) {
              console.log("Got file of length " + t.target.result.byteLength);
            }
            n(t.target.result);
          };
          o.readAsArrayBuffer(t);
        }
      }
      function a(t) {
        var e = new DataView(t);
        if (d && console.log("Got file of length " + t.byteLength), 255 != e.getUint8(0) || 216 != e.getUint8(1)) {
          if (d) {
            console.log("Not a valid JPEG");
          }
          return !1;
        }
        for (var n, r = 2, o = t.byteLength; r < o;) {
          if (255 != e.getUint8(r)) {
            if (d) {
              console.log("Not a valid marker at offset " + r + ", found: " + e.getUint8(r));
            }
            return !1;
          }
          if (n = e.getUint8(r + 1), d && console.log(n), 225 == n) {
            if (d) {
              console.log("Found 0xFFE1 marker");
            }
            return l(e, r + 4, e.getUint16(r + 2));
          }
          r += 2 + e.getUint16(r + 2);
        }
      }
      function s(t, e, n) {
        for (var r, o, i, a, s = new DataView(t), u = {}, c = e; c < e + n;) {
          if (28 === s.getUint8(c) && 2 === s.getUint8(c + 1) && (a = s.getUint8(c + 2)) in x) {
            i = s.getInt16(c + 3);
            o = x[a];
            r = f(s, c + 5, i);
            if (u.hasOwnProperty(o)) {
              if (u[o] instanceof Array) {
                u[o].push(r);
              } else {
                u[o] = [u[o], r];
              }
            } else {
              u[o] = r;
            }
          }
          c++;
        }
        return u;
      }
      function u(t, e, n, r, o) {
        var i;
        var a;
        var s;
        var u = t.getUint16(n, !o);
        var f = {};
        for (s = 0; s < u; s++) {
          i = n + 12 * s + 2;
          if (!(a = r[t.getUint16(i, !o)]) && d) {
            console.log("Unknown tag: " + t.getUint16(i, !o));
          }
          f[a] = c(t, i, e, n, o);
        }
        return f;
      }
      function c(t, e, n, r, o) {
        var i;
        var a;
        var s;
        var u;
        var c;
        var l;
        var h = t.getUint16(e + 2, !o);
        var p = t.getUint32(e + 4, !o);
        var d = t.getUint32(e + 8, !o) + n;
        switch (h) {
          case 1:
          case 7:
            if (1 == p) {
              return t.getUint8(e + 8, !o);
            }
            for (i = p > 4 ? d : e + 8, a = [], u = 0; u < p; u++) {
              a[u] = t.getUint8(i + u);
            }
            return a;
          case 2:
            return f(t, i = p > 4 ? d : e + 8, p - 1);
          case 3:
            if (1 == p) {
              return t.getUint16(e + 8, !o);
            }
            for (i = p > 2 ? d : e + 8, a = [], u = 0; u < p; u++) {
              a[u] = t.getUint16(i + 2 * u, !o);
            }
            return a;
          case 4:
            if (1 == p) {
              return t.getUint32(e + 8, !o);
            }
            for (a = [], u = 0; u < p; u++) {
              a[u] = t.getUint32(d + 4 * u, !o);
            }
            return a;
          case 5:
            if (1 == p) {
              c = t.getUint32(d, !o);
              l = t.getUint32(d + 4, !o);
              (s = new Number(c / l)).numerator = c;
              s.denominator = l;
              return s;
            }
            for (a = [], u = 0; u < p; u++) {
              c = t.getUint32(d + 8 * u, !o);
              l = t.getUint32(d + 4 + 8 * u, !o);
              a[u] = new Number(c / l);
              a[u].numerator = c;
              a[u].denominator = l;
            }
            return a;
          case 9:
            if (1 == p) {
              return t.getInt32(e + 8, !o);
            }
            for (a = [], u = 0; u < p; u++) {
              a[u] = t.getInt32(d + 4 * u, !o);
            }
            return a;
          case 10:
            if (1 == p) {
              return t.getInt32(d, !o) / t.getInt32(d + 4, !o);
            }
            for (a = [], u = 0; u < p; u++) {
              a[u] = t.getInt32(d + 8 * u, !o) / t.getInt32(d + 4 + 8 * u, !o);
            }
            return a;
        }
      }
      function f(t, e, r) {
        var o = "";
        for (n = e; n < e + r; n++) {
          o += String.fromCharCode(t.getUint8(n));
        }
        return o;
      }
      function l(t, e) {
        if ("Exif" != f(t, e, 4)) {
          if (d) {
            console.log("Not valid EXIF data! " + f(t, e, 4));
          }
          return !1;
        }
        var n;
        var r;
        var o;
        var i;
        var a;
        var s = e + 6;
        if (18761 == t.getUint16(s)) {
          n = !1;
        } else {
          if (19789 != t.getUint16(s)) {
            if (d) {
              console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)");
            }
            return !1;
          }
          n = !0;
        }
        if (42 != t.getUint16(s + 2, !n)) {
          if (d) {
            console.log("Not valid TIFF data! (no 0x002A)");
          }
          return !1;
        }
        var c = t.getUint32(s + 4, !n);
        if (c < 8) {
          if (d) {
            console.log("Not valid TIFF data! (First offset less than 8)", t.getUint32(s + 4, !n));
          }
          return !1;
        }
        if ((r = u(t, s, s + c, v, n)).ExifIFDPointer) {
          for (o in i = u(t, s, s + r.ExifIFDPointer, m, n)) {
            switch (o) {
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
                i[o] = w[o][i[o]];
                break;
              case "ExifVersion":
              case "FlashpixVersion":
                i[o] = String.fromCharCode(i[o][0], i[o][1], i[o][2], i[o][3]);
                break;
              case "ComponentsConfiguration":
                i[o] = w.Components[i[o][0]] + w.Components[i[o][1]] + w.Components[i[o][2]] + w.Components[i[o][3]];
            }
            r[o] = i[o];
          }
        }
        if (r.GPSInfoIFDPointer) {
          for (o in a = u(t, s, s + r.GPSInfoIFDPointer, y, n)) {
            switch (o) {
              case "GPSVersionID":
                a[o] = a[o][0] + "." + a[o][1] + "." + a[o][2] + "." + a[o][3];
            }
            r[o] = a[o];
          }
        }
        r.thumbnail = function (t, e, n, r) {
          var o = function (t, e, n) {
            var r = t.getUint16(e, !n);
            return t.getUint32(e + 2 + 12 * r, !n);
          }(t, e + n, r);
          if (!o) {
            return {};
          }
          if (o > t.byteLength) {
            return {};
          }
          var i = u(t, e, e + o, b, r);
          if (i.Compression) {
            switch (i.Compression) {
              case 6:
                if (i.JpegIFOffset && i.JpegIFByteCount) {
                  var a = e + i.JpegIFOffset;
                  var s = i.JpegIFByteCount;
                  i.blob = new Blob([new Uint8Array(t.buffer, a, s)], {
                    type: "image/jpeg"
                  });
                }
                break;
              case 1:
                console.log("Thumbnail image format is TIFF, which is not implemented.");
                break;
              default:
                console.log("Unknown thumbnail image format '%s'", i.Compression);
            }
          } else if (2 == i.PhotometricInterpretation) {
            console.log("Thumbnail image format is RGB, which is not implemented.");
          }
          return i;
        }(t, s, c, n);
        return r;
      }
      function h(t) {
        var e = {};
        if (1 == t.nodeType) {
          if (t.attributes.length > 0) {
            e["@attributes"] = {};
            for (var n = 0; n < t.attributes.length; n++) {
              var r = t.attributes.item(n);
              e["@attributes"][r.nodeName] = r.nodeValue;
            }
          }
        } else if (3 == t.nodeType) {
          return t.nodeValue;
        }
        if (t.hasChildNodes()) {
          for (var o = 0; o < t.childNodes.length; o++) {
            var i = t.childNodes.item(o);
            var a = i.nodeName;
            if (null == e[a]) {
              e[a] = h(i);
            } else {
              if (null == e[a].push) {
                var s = e[a];
                e[a] = [];
                e[a].push(s);
              }
              e[a].push(h(i));
            }
          }
        }
        return e;
      }
      function p(t) {
        try {
          var e = {};
          if (t.children.length > 0) {
            for (var n = 0; n < t.children.length; n++) {
              var r = t.children.item(n);
              var o = r.attributes;
              for (var i in o) {
                var a = o[i];
                var s = a.nodeName;
                var u = a.nodeValue;
                if (void 0 !== s) {
                  e[s] = u;
                }
              }
              var c = r.nodeName;
              if (void 0 === e[c]) {
                e[c] = h(r);
              } else {
                if (void 0 === e[c].push) {
                  var f = e[c];
                  e[c] = [];
                  e[c].push(f);
                }
                e[c].push(h(r));
              }
            }
          } else {
            e = t.textContent;
          }
          return e;
        } catch (t) {
          console.log(t.message);
        }
      }
      var d = !1;
      var g = function (t) {
        return t instanceof g ? t : this instanceof g ? void (this.EXIFwrapped = t) : new g(t);
      };
      if (void 0 !== t && t.exports) {
        e = t.exports = g;
      }
      e.EXIF = g;
      var m = g.Tags = {
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
      };
      var v = g.TiffTags = {
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
      };
      var y = g.GPSTags = {
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
      };
      var b = g.IFD1Tags = {
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
      };
      var w = g.StringValues = {
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
      };
      var x = {
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
      };
      g.enableXmp = function () {
        g.isXmpEnabled = !0;
      };
      g.disableXmp = function () {
        g.isXmpEnabled = !1;
      };
      g.getData = function (t, e) {
        return !((self.Image && t instanceof self.Image || self.HTMLImageElement && t instanceof self.HTMLImageElement) && !t.complete || (r(t) ? e && e.call(t) : i(t, e), 0));
      };
      g.getTag = function (t, e) {
        if (r(t)) {
          return t.exifdata[e];
        }
      };
      g.getIptcTag = function (t, e) {
        if (r(t)) {
          return t.iptcdata[e];
        }
      };
      g.getAllTags = function (t) {
        if (!r(t)) {
          return {};
        }
        var e;
        var n = t.exifdata;
        var o = {};
        for (e in n) if (n.hasOwnProperty(e)) {
          o[e] = n[e];
        }
        return o;
      };
      g.getAllIptcTags = function (t) {
        if (!r(t)) {
          return {};
        }
        var e;
        var n = t.iptcdata;
        var o = {};
        for (e in n) if (n.hasOwnProperty(e)) {
          o[e] = n[e];
        }
        return o;
      };
      g.pretty = function (t) {
        if (!r(t)) {
          return "";
        }
        var e;
        var n = t.exifdata;
        var o = "";
        for (e in n) if (n.hasOwnProperty(e)) {
          if ("object" == typeof n[e]) {
            if (n[e] instanceof Number) {
              o += e + " : " + n[e] + " [" + n[e].numerator + "/" + n[e].denominator + "]\r\n";
            } else {
              o += e + " : [" + n[e].length + " values]\r\n";
            }
          } else {
            o += e + " : " + n[e] + "\r\n";
          }
        }
        return o;
      };
      g.readFromBinaryFile = function (t) {
        return a(t);
      };
      if (!(void 0 === (o = function () {
        return g;
      }.apply(e, [])))) {
        t.exports = o;
      }
    }).call(this);
  }]);
});
//# sourceMappingURL=qiniu.min.js.map

/***/