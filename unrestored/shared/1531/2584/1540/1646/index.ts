"use strict";

var r;
var o;
var i;
var a;
var s = require("../1633/86/index");
var c = require("../1541/530");
var l = require("../1745/194");
var u = require("../1253/472");
var d = require("../1652/1236");
var p = require("../1745/398");
var f = require("../1738/752");
var h = require("../1666/634");
var m = require("../1745/531");
var g = require("../1667/751");
var _ = require("../1633/231");
var v = require("../1734/439");
var b = require("../1745/635");
var y = require("./1058");
var E = require("./827/index");
var O = require("../1565/935");
var w = require("../1683/943");
var C = require("../1743/1072/index").set;
var T = require("../1744/1238/index");
var S = require("../1652/1239");
var I = require("./1649");
var A = require("./1240");
var j = require("./1650");
var N = require("../1745/423/index");
var R = require("../1667/818");
var k = require("../1742/247/index");
var x = require("./1651");
var D = require("../1744/750");
var M = require("../1734/629");
var L = k("species");
var P = "Promise";
var B = N.get;
var F = N.set;
var G = N.getterFor(P);
var U = d && d.prototype;
var W = d;
var H = U;
var V = l.TypeError;
var z = l.document;
var Y = l.process;
var K = A.f;
var q = K;
var X = !!(z && z.createEvent && l.dispatchEvent);
var Q = "function" == typeof PromiseRejectionEvent;
var Z = !1;
var J = R(P, function () {
  var e = y(W);
  var t = e !== String(W);
  if (!t && 66 === M) {
    return !0;
  }
  if (c && !H.finally) {
    return !0;
  }
  if (M >= 51 && /native code/.test(e)) {
    return !1;
  }
  var n = new W(function (e) {
    e(1);
  });
  var r = function (e) {
    e(function () {}, function () {});
  };
  (n.constructor = {})[L] = r;
  return !(Z = n.then(function () {}) instanceof r) || !t && x && !Q;
});
var $ = J || !O(function (e) {
  W.all(e).catch(function () {});
});
var ee = function (e) {
  var t;
  return !(!_(e) || "function" != typeof (t = e.then)) && t;
};
var te = function (e, t) {
  if (!e.notified) {
    e.notified = !0;
    var n = e.reactions;
    T(function () {
      for (var r = e.value, o = 1 == e.state, i = 0; n.length > i;) {
        var a;
        var s;
        var c;
        var l = n[i++];
        var u = o ? l.ok : l.fail;
        var d = l.resolve;
        var p = l.reject;
        var f = l.domain;
        try {
          if (u) {
            if (!o) {
              if (2 === e.rejection) {
                ie(e);
              }
              e.rejection = 1;
            }
            if (!0 === u) {
              a = r;
            } else {
              if (f) {
                f.enter();
              }
              a = u(r);
              if (f) {
                f.exit();
                c = !0;
              }
            }
            if (a === l.promise) {
              p(V("Promise-chain cycle"));
            } else {
              if (s = ee(a)) {
                s.call(a, d, p);
              } else {
                d(a);
              }
            }
          } else {
            p(r);
          }
        } catch (h) {
          if (f && !c) {
            f.exit();
          }
          p(h);
        }
      }
      e.reactions = [];
      e.notified = !1;
      if (t && !e.rejection) {
        re(e);
      }
    });
  }
};
var ne = function (e, t, n) {
  var r;
  var o;
  if (X) {
    (r = z.createEvent("Event")).promise = t;
    r.reason = n;
    r.initEvent(e, !1, !0);
    l.dispatchEvent(r);
  } else {
    r = {
      promise: t,
      reason: n
    };
  }
  if (!Q && (o = l["on" + e])) {
    o(r);
  } else {
    if ("unhandledrejection" === e) {
      I("Unhandled promise rejection", n);
    }
  }
};
var re = function (e) {
  C.call(l, function () {
    var t;
    var n = e.facade;
    var r = e.value;
    if (oe(e) && (t = j(function () {
      if (D) {
        Y.emit("unhandledRejection", r, n);
      } else {
        ne("unhandledrejection", n, r);
      }
    }), e.rejection = D || oe(e) ? 2 : 1, t.error)) {
      throw t.value;
    }
  });
};
var oe = function (e) {
  return 1 !== e.rejection && !e.parent;
};
var ie = function (e) {
  C.call(l, function () {
    var t = e.facade;
    if (D) {
      Y.emit("rejectionHandled", t);
    } else {
      ne("rejectionhandled", t, e.value);
    }
  });
};
var ae = function (e, t, n) {
  return function (r) {
    e(t, r, n);
  };
};
var se = function (e, t, n) {
  if (!e.done) {
    e.done = !0;
    if (n) {
      e = n;
    }
    e.value = t;
    e.state = 2;
    te(e, !0);
  }
};
var ce = function e(t, n, r) {
  if (!t.done) {
    t.done = !0;
    if (r) {
      t = r;
    }
    try {
      if (t.facade === n) {
        throw V("Promise can't be resolved itself");
      }
      var o = ee(n);
      if (o) {
        T(function () {
          var r = {
            done: !1
          };
          try {
            o.call(n, ae(e, r, t), ae(se, r, t));
          } catch (i) {
            se(r, i, t);
          }
        });
      } else {
        t.value = n;
        t.state = 1;
        te(t, !1);
      }
    } catch (i) {
      se({
        done: !1
      }, i, t);
    }
  }
};
if (J && (H = (W = function (e) {
  b(this, W, P);
  v(e);
  r.call(this);
  var t = B(this);
  try {
    e(ae(ce, t), ae(se, t));
  } catch (n) {
    se(t, n);
  }
}).prototype, (r = function (e) {
  F(this, {
    type: P,
    done: !1,
    notified: !1,
    parent: !1,
    reactions: [],
    rejection: !1,
    state: 0,
    value: void 0
  });
}).prototype = f(H, {
  then: function (e, t) {
    var n = G(this);
    var r = K(w(this, W));
    r.ok = "function" != typeof e || e;
    r.fail = "function" == typeof t && t;
    r.domain = D ? Y.domain : void 0;
    n.parent = !0;
    n.reactions.push(r);
    if (0 != n.state) {
      te(n, !1);
    }
    return r.promise;
  },
  catch: function (e) {
    return this.then(void 0, e);
  }
}), o = function () {
  var e = new r();
  var t = B(e);
  this.promise = e;
  this.resolve = ae(ce, t);
  this.reject = ae(se, t);
}, A.f = K = function (e) {
  return e === W || e === i ? new o(e) : q(e);
}, !c && "function" == typeof d && U !== Object.prototype)) {
  a = U.then;
  if (!Z) {
    p(U, "then", function (e, t) {
      var n = this;
      return new W(function (e, t) {
        a.call(n, e, t);
      }).then(e, t);
    }, {
      unsafe: !0
    });
    p(U, "catch", H.catch, {
      unsafe: !0
    });
  }
  try {
    delete U.constructor;
  } catch (le) {}
  if (h) {
    h(U, H);
  }
}
s({
  global: !0,
  wrap: !0,
  forced: J
}, {
  Promise: W
});
m(W, P, !1, !0);
g(P);
i = u(P);
s({
  target: P,
  stat: !0,
  forced: J
}, {
  reject: function (e) {
    var t = K(this);
    t.reject.call(void 0, e);
    return t.promise;
  }
});
s({
  target: P,
  stat: !0,
  forced: c || J
}, {
  resolve: function (e) {
    return S(c && this === i ? W : this, e);
  }
});
s({
  target: P,
  stat: !0,
  forced: $
}, {
  all: function (e) {
    var t = this;
    var n = K(t);
    var r = n.resolve;
    var o = n.reject;
    var i = j(function () {
      var n = v(t.resolve);
      var i = [];
      var a = 0;
      var s = 1;
      E(e, function (e) {
        var c = a++;
        var l = !1;
        i.push(void 0);
        s++;
        n.call(t, e).then(function (e) {
          if (!l) {
            l = !0;
            i[c] = e;
            if (! --s) {
              r(i);
            }
          }
        }, o);
      });
      if (! --s) {
        r(i);
      }
    });
    if (i.error) {
      o(i.value);
    }
    return n.promise;
  },
  race: function (e) {
    var t = this;
    var n = K(t);
    var r = n.reject;
    var o = j(function () {
      var o = v(t.resolve);
      E(e, function (e) {
        o.call(t, e).then(n.resolve, r);
      });
    });
    if (o.error) {
      r(o.value);
    }
    return n.promise;
  }
});