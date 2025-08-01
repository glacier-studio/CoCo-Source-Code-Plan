"use strict";

export { l as g };
export { d as f };
export { f as k };
export { m as d };
export { _ as v };
export { b };
export { S as a };
export { A as j };
export { N as h };
export { k as l };
export { D as p };
export { L as e };
export { B as w };
export { G as c };
export { W as r };
export { V as o };
export { Y as u };
export { q as s };
export { Q as t };
export { J as n };
export { ee as i };
export { ne as m };
export { oe as q };
var r = require("../1/index");
var o = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default;
  } : function () {
    return module;
  };
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  });
  return defaultExport;
}(r);
var i = require("../7");
var a = require("../59/index");
var s = require("../41");
var c = "".concat(a.a.serverHost, "/coconut");
function l(e) {
  return u.apply(this, arguments);
}
function u() {
  return (u = Object(i.a)(o.a.mark(function e(t) {
    var n;
    var r;
    var i;
    var a;
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            n = "".concat(c, "/webdb/admin/dict");
            r = {
              type: 1
            };
            if (t) {
              r.work_id = t;
            }
            e.next = 5;
            return s.a.get(n, {
              params: r
            });
          case 5:
            if (i = e.sent, 200 !== (a = i.data).code) {
              e.next = 9;
              break;
            }
            return e.abrupt("return", a.data);
          case 9:
            throw new Error(JSON.stringify({
              msg: a.msg,
              code: a.code
            }));
          case 10:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function d(e) {
  return p.apply(this, arguments);
}
function p() {
  return (p = Object(i.a)(o.a.mark(function e(t) {
    var n;
    var r;
    var i;
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            n = "".concat(c, "/webdb/admin/dict/").concat(t);
            e.next = 3;
            return s.a.get(n, {
              params: {
                offset: 0,
                limit: 1e3
              },
              headers: {
                env: 1
              }
            });
          case 3:
            if (r = e.sent, 200 !== (i = r.data).code) {
              e.next = 7;
              break;
            }
            return e.abrupt("return", i.data.items.map(function (e) {
              return {
                id: e.id,
                key: e.key
              };
            }));
          case 7:
            throw new Error(i.msg);
          case 8:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function f(e, t) {
  return h.apply(this, arguments);
}
function h() {
  return (h = Object(i.a)(o.a.mark(function e(t, n) {
    var r;
    var i;
    var a;
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            r = "".concat(c, "/webdb/v2/admin/").concat(t, "/keys");
            e.next = 3;
            return s.a.get(r, {
              params: {
                offset: 0,
                limit: 1e3,
                work_id: n
              },
              headers: {
                env: 1
              }
            });
          case 3:
            if (i = e.sent, 200 !== (a = i.data).code) {
              e.next = 7;
              break;
            }
            return e.abrupt("return", a.data.items.map(function (e) {
              return {
                id: e.id,
                key: e.key
              };
            }));
          case 7:
            throw new Error(a.msg);
          case 8:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function m(e, t) {
  return g.apply(this, arguments);
}
function g() {
  return (g = Object(i.a)(o.a.mark(function e(t, n) {
    var r;
    var i;
    var a;
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            r = "".concat(c, "/webdb/v2/admin/reference");
            e.next = 3;
            return s.a.post(r, {
              dict_ids: n
            }, {
              params: {
                work_id: t
              }
            });
          case 3:
            if (i = e.sent, 200 !== (a = i.data).code) {
              e.next = 7;
              break;
            }
            return e.abrupt("return", a);
          case 7:
            throw new Error(JSON.stringify({
              msg: a.msg,
              code: a.code
            }));
          case 8:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function _(e, t) {
  return v.apply(this, arguments);
}
function v() {
  return (v = Object(i.a)(o.a.mark(function e(t, n) {
    var r;
    var i;
    var a;
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            r = "".concat(c, "/webdb/v2/admin/reference/batch");
            e.next = 3;
            return s.a.delete(r, {
              params: {
                work_id: t,
                dict_ids: n.join(",")
              }
            });
          case 3:
            if (i = e.sent, 200 !== (a = i.data).code) {
              e.next = 7;
              break;
            }
            return e.abrupt("return", a);
          case 7:
            throw new Error(JSON.stringify({
              msg: a.msg,
              code: a.code
            }));
          case 8:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function b(e) {
  return y.apply(this, arguments);
}
function y() {
  return (y = Object(i.a)(o.a.mark(function e(t) {
    var n;
    var r;
    var i;
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            n = "".concat(c, "/webdb/v2/admin/dict/copyBatch");
            e.next = 3;
            return s.a.post(n, {
              dict_ids: t
            });
          case 3:
            if (r = e.sent, 200 !== (i = r.data).code) {
              e.next = 7;
              break;
            }
            return e.abrupt("return", i.data);
          case 7:
            throw new Error(JSON.stringify({
              msg: i.msg,
              code: i.code
            }));
          case 8:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
var E = require("../6");
var O = require("../11");
var w = require("../48/119/index");
var C = require("../48/87");
var T = "".concat(a.a.serverHost, "/coconut");
var S = 405e5;
var I = Object(O.a)({
  40400100: "\u7528\u6237\u672a\u6388\u6743",
  40400915: "\u5f53\u524d\u7528\u6237\u65e0\u64cd\u4f5c\u6743\u9650",
  40400916: "\u884c\u4e3a\u7a7a\u6216\u4e0d\u5b58\u5728",
  40400917: "\u5217\u4e3a\u7a7a\u6216\u4e0d\u5b58\u5728",
  40400919: "\u5bb9\u91cf\u5df2\u8fbe\u4e0a\u9650",
  40400926: "\u6570\u636e\u6e90\u4e0d\u5b58\u5728",
  40400927: "\u8d85\u8fc7\u6700\u5927\u6570\u636e\u5e93\u6570\u91cf",
  40400931: "\u5b58\u50a8\u7684\u6570\u636e\u8d85\u51fa\u5355\u5143\u683c\u9650\u5236(1k\u4e2a\u5b57\u7b26)"
}, S, "\u5b58\u50a8\u7684\u6570\u636e\u8d85\u51fa\u5f53\u524d\u5217\u6570\uff0c\u6ea2\u51fa\u90e8\u5206\u5b58\u50a8\u5931\u8d25");
function A(e) {
  return j.apply(this, arguments);
}
function j() {
  return (j = Object(i.a)(o.a.mark(function e(t) {
    var n;
    var r;
    var i;
    var a;
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            n = "".concat(T, "/clouddb/user/list/detail");
            r = {
              type: 1
            };
            if (t) {
              r.work_id = t;
            }
            e.next = 5;
            return s.a.get(n, {
              headers: {
                env: 1
              },
              params: r
            });
          case 5:
            if (i = e.sent, 200 !== (a = i.data).code) {
              e.next = 9;
              break;
            }
            return e.abrupt("return", a.data);
          case 9:
            throw new Error(JSON.stringify({
              msg: a.msg,
              code: a.code
            }));
          case 10:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function N(e) {
  return R.apply(this, arguments);
}
function R() {
  return (R = Object(i.a)(o.a.mark(function e(t) {
    var n;
    var r;
    var i;
    var a;
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            n = "".concat(T, "/clouddb/").concat(t, "/data_list?offset=0&limit=500");
            e.next = 3;
            return s.a.get(n, {
              headers: {
                env: 1
              }
            });
          case 3:
            if (r = e.sent, 200 !== (i = r.data).code) {
              e.next = 7;
              break;
            }
            return e.abrupt("return", null === (a = i.data) || void 0 === a ? void 0 : a.records.map(function (e) {
              return Object(E.a)({
                rowId: e.record_id
              }, e.values);
            }));
          case 7:
            throw new Error(i.msg);
          case 8:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function k(e, t) {
  return x.apply(this, arguments);
}
function x() {
  return (x = Object(i.a)(o.a.mark(function e(t, n) {
    var r;
    var i;
    var a;
    var c;
    var l;
    var u;
    var d;
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2;
            return Object(w.a)("id=".concat(t));
          case 2:
            r = e.sent;
            i = r.sign;
            a = r.timestamp;
            c = "".concat(T, "/clouddb/v2/").concat(t, "/data_list?work_id=").concat(n, "&offset=0&limit=500");
            e.next = 8;
            return s.a.get(c, {
              headers: {
                env: 1,
                sign: i,
                timestamp: a
              }
            });
          case 8:
            if (l = e.sent, 200 !== (u = l.data).code) {
              e.next = 12;
              break;
            }
            return e.abrupt("return", null === (d = u.data) || void 0 === d ? void 0 : d.records.map(function (e) {
              return Object(E.a)({
                rowId: e.record_id
              }, e.values);
            }));
          case 12:
            throw new Error(u.msg);
          case 13:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function D(e) {
  return M.apply(this, arguments);
}
function M() {
  return (M = Object(i.a)(o.a.mark(function e(t) {
    var n;
    var r;
    var i;
    var a;
    var c;
    var l;
    var u;
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2;
            return Object(w.a)("id=".concat(t, "&limit=500&offset=0"));
          case 2:
            n = e.sent;
            r = n.sign;
            i = n.timestamp;
            a = "".concat(T, "/clouddb/runtime/").concat(t, "/list");
            e.next = 8;
            return s.a.get(a, {
              params: {
                offset: 0,
                limit: 500
              },
              headers: Object(E.a)({
                env: 1,
                sign: r,
                timestamp: i
              }, Object(C.a)())
            });
          case 8:
            if (c = e.sent, 200 !== (l = c.data).code) {
              e.next = 12;
              break;
            }
            return e.abrupt("return", null === (u = l.data) || void 0 === u ? void 0 : u.records.map(function (e) {
              return Object(E.a)({
                rowId: e.record_id
              }, e.values);
            }));
          case 12:
            throw new Error(l.msg);
          case 13:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function L(e, t) {
  return P.apply(this, arguments);
}
function P() {
  return (P = Object(i.a)(o.a.mark(function e(t, n) {
    var r;
    var i;
    var a;
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            r = "".concat(T, "/clouddb/reference");
            e.next = 3;
            return s.a.post(r, {
              db_ids: n
            }, {
              params: {
                work_id: t
              }
            });
          case 3:
            if (i = e.sent, 200 !== (a = i.data).code) {
              e.next = 7;
              break;
            }
            return e.abrupt("return", a);
          case 7:
            throw new Error(JSON.stringify({
              msg: a.msg,
              code: a.code
            }));
          case 8:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function B(e, t) {
  return F.apply(this, arguments);
}
function F() {
  return (F = Object(i.a)(o.a.mark(function e(t, n) {
    var r;
    var i;
    var a;
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            r = "".concat(T, "/clouddb/reference/batch");
            e.next = 3;
            return s.a.delete(r, {
              params: {
                work_id: t,
                db_ids: n.join(",")
              }
            });
          case 3:
            if (i = e.sent, 200 !== (a = i.data).code) {
              e.next = 7;
              break;
            }
            return e.abrupt("return", a);
          case 7:
            throw new Error(JSON.stringify({
              msg: a.msg,
              code: a.code
            }));
          case 8:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function G(e) {
  return U.apply(this, arguments);
}
function U() {
  return (U = Object(i.a)(o.a.mark(function e(t) {
    var n;
    var r;
    var i;
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            n = "".concat(T, "/clouddb/v2/copy");
            e.next = 3;
            return s.a.post(n, {}, {
              params: {
                db_ids: t.join(",")
              }
            });
          case 3:
            if (r = e.sent, 200 !== (i = r.data).code) {
              e.next = 7;
              break;
            }
            return e.abrupt("return", i.data);
          case 7:
            throw new Error(JSON.stringify({
              msg: i.msg,
              code: i.code
            }));
          case 8:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function W(e, t) {
  return H.apply(this, arguments);
}
function H() {
  return (H = Object(i.a)(o.a.mark(function e(t, n) {
    var r;
    var i;
    var a;
    var c;
    var l;
    var u;
    var d;
    var p;
    var f;
    var h;
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0;
            r = "".concat(T, "/clouddb/runtime/").concat(t, "/insert");
            i = {
              values: n
            };
            e.next = 5;
            return Object(w.a)("".concat(JSON.stringify(i)));
          case 5:
            a = e.sent;
            c = a.sign;
            l = a.timestamp;
            e.next = 10;
            return s.a.post(r, i, {
              headers: Object(E.a)({
                env: 1,
                sign: c,
                timestamp: l
              }, Object(C.a)())
            });
          case 10:
            if (u = e.sent, 200 !== (d = u.data).code) {
              e.next = 20;
              break;
            }
            if ("\u63d2\u5165\u6570\u636e\u4e0e\u5217\u5c5e\u6027\u4e0d\u5339\u914d" !== d.data) {
              e.next = 17;
              break;
            }
            throw d.code = S, ae(d), new Error(JSON.stringify({
              msg: d.msg,
              code: d.code
            }));
          case 17:
            return e.abrupt("return", d.data);
          case 20:
            throw ae(d), new Error(JSON.stringify({
              msg: d.msg,
              code: d.code
            }));
          case 22:
            e.next = 39;
            break;
          case 24:
            if (e.prev = 24, e.t0 = e.catch(0), console.error(e.t0), !(p = e.t0.response)) {
              e.next = 38;
              break;
            }
            if (f = p.status, h = p.data, 403 !== f) {
              e.next = 35;
              break;
            }
            throw new Error(JSON.stringify({
              msg: h.msg,
              code: h.code
            }));
          case 35:
            throw new Error(JSON.stringify({
              msg: "\u670d\u52a1\u5668\u9519\u8bef",
              code: "E0"
            }));
          case 36:
            e.next = 39;
            break;
          case 38:
            throw e.t0;
          case 39:
          case "end":
            return e.stop();
        }
      }
    }, e, null, [[0, 24]]);
  }))).apply(this, arguments);
}
function V(e, t, n, r) {
  return z.apply(this, arguments);
}
function z() {
  return (z = Object(i.a)(o.a.mark(function e(t, n, r, i) {
    var a;
    var c;
    var l;
    var u;
    var d;
    var p;
    var f;
    var h;
    var m;
    var g;
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0;
            a = "".concat(T, "/clouddb/runtime/").concat(t, "/delete");
            c = {
              querys: {
                querys: [{
                  column_id: n,
                  op: r,
                  value: i.toString()
                }]
              }
            };
            e.next = 5;
            return Object(w.a)("".concat(JSON.stringify(c)));
          case 5:
            l = e.sent;
            u = l.sign;
            d = l.timestamp;
            e.next = 10;
            return s.a.put(a, c, {
              headers: Object(E.a)({
                env: 1,
                sign: u,
                timestamp: d
              }, Object(C.a)())
            });
          case 10:
            if (p = e.sent, 200 !== (f = p.data).code) {
              e.next = 16;
              break;
            }
            return e.abrupt("return", f.data);
          case 16:
            throw new Error(JSON.stringify({
              msg: f.msg,
              code: f.code
            }));
          case 17:
            e.next = 34;
            break;
          case 19:
            if (e.prev = 19, e.t0 = e.catch(0), console.error(e.t0), !(h = e.t0.response)) {
              e.next = 33;
              break;
            }
            if (m = h.status, g = h.data, 403 !== m) {
              e.next = 30;
              break;
            }
            throw new Error(JSON.stringify({
              msg: g.msg,
              code: g.code
            }));
          case 30:
            throw new Error(JSON.stringify({
              msg: "\u670d\u52a1\u5668\u9519\u8bef",
              code: "E0"
            }));
          case 31:
            e.next = 34;
            break;
          case 33:
            throw e.t0;
          case 34:
          case "end":
            return e.stop();
        }
      }
    }, e, null, [[0, 19]]);
  }))).apply(this, arguments);
}
function Y(e, t, n, r, o, i) {
  return K.apply(this, arguments);
}
function K() {
  return (K = Object(i.a)(o.a.mark(function e(t, n, r, i, a, c) {
    var l;
    var u;
    var d;
    var p;
    var f;
    var h;
    var m;
    var g;
    var _;
    var v;
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0;
            l = "".concat(T, "/clouddb/runtime/").concat(t, "/update");
            u = {
              querys: {
                querys: [{
                  column_id: n,
                  op: r,
                  value: i.toString()
                }]
              },
              values: [{
                column_id: a,
                value: c.toString()
              }]
            };
            e.next = 5;
            return Object(w.a)("".concat(JSON.stringify(u)));
          case 5:
            d = e.sent;
            p = d.sign;
            f = d.timestamp;
            e.next = 10;
            return s.a.put(l, u, {
              headers: Object(E.a)({
                env: 1,
                sign: p,
                timestamp: f
              }, Object(C.a)())
            });
          case 10:
            if (h = e.sent, 200 !== (m = h.data).code) {
              e.next = 16;
              break;
            }
            return e.abrupt("return", m.data);
          case 16:
            throw new Error(JSON.stringify({
              msg: m.msg,
              code: m.code
            }));
          case 17:
            e.next = 34;
            break;
          case 19:
            if (e.prev = 19, e.t0 = e.catch(0), console.error(e.t0), !(g = e.t0.response)) {
              e.next = 33;
              break;
            }
            if (_ = g.status, v = g.data, 403 !== _) {
              e.next = 30;
              break;
            }
            throw new Error(JSON.stringify({
              msg: v.msg,
              code: v.code
            }));
          case 30:
            throw new Error(JSON.stringify({
              msg: "\u670d\u52a1\u5668\u9519\u8bef",
              code: "E0"
            }));
          case 31:
            e.next = 34;
            break;
          case 33:
            throw e.t0;
          case 34:
          case "end":
            return e.stop();
        }
      }
    }, e, null, [[0, 19]]);
  }))).apply(this, arguments);
}
function q(e, t, n, r) {
  return X.apply(this, arguments);
}
function X() {
  return (X = Object(i.a)(o.a.mark(function e(t, n, r, i) {
    var a;
    var c;
    var l;
    var u;
    var d;
    var p;
    var f;
    var h;
    var m;
    var g;
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0;
            a = "".concat(T, "/clouddb/runtime/").concat(t, "/select");
            c = {
              querys: {
                querys: [{
                  column_id: n,
                  op: r,
                  value: i.toString()
                }]
              }
            };
            e.next = 5;
            return Object(w.a)("".concat(JSON.stringify(c)));
          case 5:
            l = e.sent;
            u = l.sign;
            d = l.timestamp;
            e.next = 10;
            return s.a.post(a, {
              querys: {
                querys: [{
                  op: r,
                  column_id: n,
                  value: i
                }]
              }
            }, {
              headers: Object(E.a)({
                env: 1,
                sign: u,
                timestamp: d
              }, Object(C.a)())
            });
          case 10:
            if (p = e.sent, 200 !== (f = p.data).code) {
              e.next = 16;
              break;
            }
            return e.abrupt("return", f.data);
          case 16:
            throw ae(f), new Error(JSON.stringify({
              msg: f.msg,
              code: f.code
            }));
          case 18:
            e.next = 35;
            break;
          case 20:
            if (e.prev = 20, e.t0 = e.catch(0), console.error(e.t0), !(h = e.t0.response)) {
              e.next = 34;
              break;
            }
            if (m = h.status, g = h.data, 403 !== m) {
              e.next = 31;
              break;
            }
            throw new Error(JSON.stringify({
              msg: g.msg,
              code: g.code
            }));
          case 31:
            throw new Error(JSON.stringify({
              msg: "\u670d\u52a1\u5668\u9519\u8bef",
              code: "E0"
            }));
          case 32:
            e.next = 35;
            break;
          case 34:
            throw e.t0;
          case 35:
          case "end":
            return e.stop();
        }
      }
    }, e, null, [[0, 20]]);
  }))).apply(this, arguments);
}
function Q(e, t) {
  return Z.apply(this, arguments);
}
function Z() {
  return (Z = Object(i.a)(o.a.mark(function e(t, n) {
    var r;
    var i;
    var a;
    var c;
    var l;
    var u;
    var d;
    var p;
    var f;
    var h;
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            r = "row" === n ? "RECORD" : "COLUMN";
            e.next = 3;
            return Object(w.a)("id=".concat(t, "&type=").concat(r));
          case 3:
            i = e.sent;
            a = i.sign;
            c = i.timestamp;
            e.prev = 6;
            l = "".concat(T, "/clouddb/runtime/").concat(t, "/count?type=").concat(r);
            e.next = 10;
            return s.a.get(l, {
              headers: Object(E.a)({
                env: 1,
                sign: a,
                timestamp: c
              }, Object(C.a)())
            });
          case 10:
            if (u = e.sent, 200 !== (d = u.data).code) {
              e.next = 16;
              break;
            }
            return e.abrupt("return", d.data);
          case 16:
            throw ae(d), new Error(JSON.stringify({
              msg: d.msg,
              code: d.code
            }));
          case 18:
            e.next = 35;
            break;
          case 20:
            if (e.prev = 20, e.t0 = e.catch(6), console.error(e.t0), !(p = e.t0.response)) {
              e.next = 34;
              break;
            }
            if (f = p.status, h = p.data, 403 !== f) {
              e.next = 31;
              break;
            }
            throw new Error(JSON.stringify({
              msg: h.msg,
              code: h.code
            }));
          case 31:
            throw new Error(JSON.stringify({
              msg: "\u670d\u52a1\u5668\u9519\u8bef",
              code: "E0"
            }));
          case 32:
            e.next = 35;
            break;
          case 34:
            throw e.t0;
          case 35:
          case "end":
            return e.stop();
        }
      }
    }, e, null, [[6, 20]]);
  }))).apply(this, arguments);
}
function J(e) {
  return $.apply(this, arguments);
}
function $() {
  return ($ = Object(i.a)(o.a.mark(function e(t) {
    var n;
    var r;
    var i;
    var a;
    var c;
    var l;
    var u;
    var d;
    var p;
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0;
            e.next = 3;
            return Object(w.a)("id=".concat(t));
          case 3:
            n = e.sent;
            r = n.sign;
            i = n.timestamp;
            a = "".concat(T, "/clouddb/v2/runtime/").concat(t, "/clear");
            e.next = 9;
            return s.a.put(a, {}, {
              headers: Object(E.a)({
                sign: r,
                timestamp: i
              }, Object(C.a)())
            });
          case 9:
            if (c = e.sent, 200 !== (l = c.data).code) {
              e.next = 15;
              break;
            }
            return e.abrupt("return", l.data);
          case 15:
            throw ae(l), new Error(JSON.stringify({
              msg: l.msg,
              code: l.code
            }));
          case 17:
            e.next = 34;
            break;
          case 19:
            if (e.prev = 19, e.t0 = e.catch(0), console.error(e.t0), !(u = e.t0.response)) {
              e.next = 33;
              break;
            }
            if (d = u.status, p = u.data, 403 !== d) {
              e.next = 30;
              break;
            }
            throw new Error(JSON.stringify({
              msg: p.msg,
              code: p.code
            }));
          case 30:
            throw new Error(JSON.stringify({
              msg: "\u670d\u52a1\u5668\u9519\u8bef",
              code: "E0"
            }));
          case 31:
            e.next = 34;
            break;
          case 33:
            throw e.t0;
          case 34:
          case "end":
            return e.stop();
        }
      }
    }, e, null, [[0, 19]]);
  }))).apply(this, arguments);
}
function ee(e) {
  return te.apply(this, arguments);
}
function te() {
  return (te = Object(i.a)(o.a.mark(function e(t) {
    var n;
    var r;
    var i;
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            n = "".concat(T, "/clouddb/v2/").concat(t, "/detail");
            e.next = 3;
            return s.a.get(n, {
              params: {
                offset: 0,
                limit: 1e3
              },
              headers: {
                env: 1
              }
            });
          case 3:
            if (r = e.sent, 200 !== (i = r.data).code) {
              e.next = 9;
              break;
            }
            return e.abrupt("return", i.data);
          case 9:
            ae(i);
          case 10:
            throw new Error(JSON.stringify({
              msg: i.msg,
              code: i.code
            }));
          case 11:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function ne(e, t) {
  return re.apply(this, arguments);
}
function re() {
  return (re = Object(i.a)(o.a.mark(function e(t, n) {
    var r;
    var i;
    var a;
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            r = "".concat(T, "/clouddb/v2/").concat(t, "/detail");
            e.next = 3;
            return s.a.get(r, {
              params: {
                offset: 0,
                limit: 1e3,
                work_id: n
              },
              headers: {
                env: 1
              }
            });
          case 3:
            if (i = e.sent, 200 !== (a = i.data).code) {
              e.next = 9;
              break;
            }
            return e.abrupt("return", a.data);
          case 9:
            ae(a);
          case 10:
            throw new Error(a.msg);
          case 11:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function oe(e) {
  return ie.apply(this, arguments);
}
function ie() {
  return (ie = Object(i.a)(o.a.mark(function e(t) {
    var n;
    var r;
    var i;
    var a;
    var c;
    var l;
    var u;
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            n = {
              db_ids: t.join(",")
            };
            e.next = 3;
            return Object(w.a)("ids=[".concat(t.join(","), "]"));
          case 3:
            r = e.sent;
            i = r.sign;
            a = r.timestamp;
            c = "".concat(T, "/clouddb/v2/runtime/list");
            e.next = 9;
            return s.a.get(c, {
              headers: Object(E.a)({
                env: 1,
                sign: i,
                timestamp: a
              }, Object(C.a)()),
              params: n
            });
          case 9:
            if (l = e.sent, 200 !== (u = l.data).code) {
              e.next = 15;
              break;
            }
            return e.abrupt("return", u.data);
          case 15:
            ae(u);
          case 16:
            throw new Error(JSON.stringify({
              msg: u.msg,
              code: u.code
            }));
          case 17:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function ae(e) {
  e.msg = I[e.code] || "network error";
}
export default S;