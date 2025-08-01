"use strict";

export { l as a };
export { H as c };
export { unstable_batchedUpdates as b } from "../75/index";
export { W as d };
export { q as e };
export { z as f };
var r = require("../0/index");
var i = function __importDefault(module) {
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
require("../50/index");
var o = i.a.createContext(null);
var a = function (e) {
  e();
};
var s = {
  notify: function () {}
};
function c() {
  var e = a;
  var t = null;
  var n = null;
  return {
    clear: function () {
      t = null;
      n = null;
    },
    notify: function () {
      e(function () {
        for (var e = t; e;) {
          e.callback();
          e = e.next;
        }
      });
    },
    get: function () {
      for (var e = [], n = t; n;) {
        e.push(n);
        n = n.next;
      }
      return e;
    },
    subscribe: function (e) {
      var r = !0;
      var i = n = {
        callback: e,
        next: null,
        prev: n
      };
      if (i.prev) {
        i.prev.next = i;
      } else {
        t = i;
      }
      return function () {
        if (r && null !== t) {
          r = !1;
          if (i.next) {
            i.next.prev = i.prev;
          } else {
            n = i.prev;
          }
          if (i.prev) {
            i.prev.next = i.next;
          } else {
            t = i.next;
          }
        }
      };
    }
  };
}
var u = function () {
  function e(e, t) {
    this.store = e;
    this.parentSub = t;
    this.unsubscribe = null;
    this.listeners = s;
    this.handleChangeWrapper = this.handleChangeWrapper.bind(this);
  }
  var t = e.prototype;
  t.addNestedSub = function (e) {
    this.trySubscribe();
    return this.listeners.subscribe(e);
  };
  t.notifyNestedSubs = function () {
    this.listeners.notify();
  };
  t.handleChangeWrapper = function () {
    if (this.onStateChange) {
      this.onStateChange();
    }
  };
  t.isSubscribed = function () {
    return Boolean(this.unsubscribe);
  };
  t.trySubscribe = function () {
    if (!this.unsubscribe) {
      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.handleChangeWrapper) : this.store.subscribe(this.handleChangeWrapper);
      this.listeners = c();
    }
  };
  t.tryUnsubscribe = function () {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
      this.listeners.clear();
      this.listeners = s;
    }
  };
  return e;
}();
var l = function (e) {
  var t = e.store;
  var n = e.context;
  var a = e.children;
  var s = Object(r.useMemo)(function () {
    var e = new u(t);
    e.onStateChange = e.notifyNestedSubs;
    return {
      store: t,
      subscription: e
    };
  }, [t]);
  var c = Object(r.useMemo)(function () {
    return t.getState();
  }, [t]);
  Object(r.useEffect)(function () {
    var e = s.subscription;
    e.trySubscribe();
    if (c !== t.getState()) {
      e.notifyNestedSubs();
    }
    return function () {
      e.tryUnsubscribe();
      e.onStateChange = null;
    };
  }, [s, c]);
  var l = n || o;
  return i.a.createElement(l.Provider, {
    value: s
  }, a);
};
var f = require("../19");
var d = require("../337");
var h = require("./687");
var p = function __importDefault(module) {
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
}(h);
var _ = require("../242/index");
var A = "undefined" !== typeof window && "undefined" !== typeof window.document && "undefined" !== typeof window.document.createElement ? r.useLayoutEffect : r.useEffect;
var g = [];
var v = [null, null];
function m(e, t) {
  var n = e[1];
  return [t.payload, n + 1];
}
function y(e, t, n) {
  A(function () {
    return e.apply(void 0, t);
  }, n);
}
function b(e, t, n, r, i, o, a) {
  e.current = r;
  t.current = i;
  n.current = !1;
  if (o.current) {
    o.current = null;
    a();
  }
}
function w(e, t, n, r, i, o, a, s, c, u) {
  if (e) {
    var l = !1;
    var f = null;
    var d = function () {
      if (!l) {
        var e;
        var n;
        var d = t.getState();
        try {
          e = r(d, i.current);
        } catch (h) {
          n = h;
          f = h;
        }
        if (!n) {
          f = null;
        }
        if (e === o.current) {
          if (!a.current) {
            c();
          }
        } else {
          o.current = e;
          s.current = e;
          a.current = !0;
          u({
            type: "STORE_UPDATED",
            payload: {
              error: n
            }
          });
        }
      }
    };
    n.onStateChange = d;
    n.trySubscribe();
    d();
    return function () {
      l = !0;
      n.tryUnsubscribe();
      n.onStateChange = null;
      if (f) {
        throw f;
      }
    };
  }
}
var E = function () {
  return [null, 0];
};
function x(e, t) {
  if (void 0 === t) {
    t = {};
  }
  var n = t;
  var a = n.getDisplayName;
  var s = void 0 === a ? function (e) {
    return "ConnectAdvanced(" + e + ")";
  } : a;
  var c = n.methodName;
  var l = void 0 === c ? "connectAdvanced" : c;
  var h = n.renderCountProp;
  var A = void 0 === h ? void 0 : h;
  var x = n.shouldHandleStateChanges;
  var C = void 0 === x || x;
  var O = n.storeKey;
  var k = void 0 === O ? "store" : O;
  n.withRef;
  var S = n.forwardRef;
  var T = void 0 !== S && S;
  var B = n.context;
  var D = void 0 === B ? o : B;
  var I = Object(d.a)(n, ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef", "forwardRef", "context"]);
  var F = D;
  return function (t) {
    var n = t.displayName || t.name || "Component";
    var o = s(n);
    var a = Object(f.a)({}, I, {
      getDisplayName: s,
      methodName: l,
      renderCountProp: A,
      shouldHandleStateChanges: C,
      storeKey: k,
      displayName: o,
      wrappedComponentName: n,
      WrappedComponent: t
    });
    var c = I.pure;
    var h = c ? r.useMemo : function (e) {
      return e();
    };
    function x(n) {
      var o = Object(r.useMemo)(function () {
        var e = n.reactReduxForwardedRef;
        var t = Object(d.a)(n, ["reactReduxForwardedRef"]);
        return [n.context, e, t];
      }, [n]);
      var s = o[0];
      var c = o[1];
      var l = o[2];
      var p = Object(r.useMemo)(function () {
        return s && s.Consumer && Object(_.isContextConsumer)(i.a.createElement(s.Consumer, null)) ? s : F;
      }, [s, F]);
      var A = Object(r.useContext)(p);
      var x = Boolean(n.store) && Boolean(n.store.getState) && Boolean(n.store.dispatch);
      if (Boolean(A)) {
        Boolean(A.store);
      }
      var O = x ? n.store : A.store;
      var k = Object(r.useMemo)(function () {
        return function (t) {
          return e(t.dispatch, a);
        }(O);
      }, [O]);
      var S = Object(r.useMemo)(function () {
        if (!C) {
          return v;
        }
        var e = new u(O, x ? null : A.subscription);
        var t = e.notifyNestedSubs.bind(e);
        return [e, t];
      }, [O, x, A]);
      var T = S[0];
      var B = S[1];
      var D = Object(r.useMemo)(function () {
        return x ? A : Object(f.a)({}, A, {
          subscription: T
        });
      }, [x, A, T]);
      var I = Object(r.useReducer)(m, g, E);
      var R = I[0][0];
      var P = I[1];
      if (R && R.error) {
        throw R.error;
      }
      var N = Object(r.useRef)();
      var M = Object(r.useRef)(l);
      var j = Object(r.useRef)();
      var L = Object(r.useRef)(!1);
      var U = h(function () {
        return j.current && l === M.current ? j.current : k(O.getState(), l);
      }, [O, R, l]);
      y(b, [M, N, L, l, U, j, B]);
      y(w, [C, O, T, k, M, N, L, j, B, P], [O, T, k]);
      var H = Object(r.useMemo)(function () {
        return i.a.createElement(t, Object(f.a)({}, U, {
          ref: c
        }));
      }, [c, t, U]);
      return Object(r.useMemo)(function () {
        return C ? i.a.createElement(p.Provider, {
          value: D
        }, H) : H;
      }, [p, H, D]);
    }
    var O = c ? i.a.memo(x) : x;
    O.WrappedComponent = t;
    O.displayName = o;
    if (T) {
      var S = i.a.forwardRef(function (e, t) {
        return i.a.createElement(O, Object(f.a)({}, e, {
          reactReduxForwardedRef: t
        }));
      });
      S.displayName = o;
      S.WrappedComponent = t;
      return p()(S, t);
    }
    return p()(O, t);
  };
}
function C(e, t) {
  return e === t ? 0 !== e || 0 !== t || 1 / e === 1 / t : e !== e && t !== t;
}
function O(e, t) {
  if (C(e, t)) {
    return !0;
  }
  if ("object" !== typeof e || null === e || "object" !== typeof t || null === t) {
    return !1;
  }
  var n = Object.keys(e);
  var r = Object.keys(t);
  if (n.length !== r.length) {
    return !1;
  }
  for (var i = 0; i < n.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(t, n[i]) || !C(e[n[i]], t[n[i]])) {
      return !1;
    }
  }
  return !0;
}
var k = require("../155/index");
function S(e) {
  return function (t, n) {
    var r = e(t, n);
    function i() {
      return r;
    }
    i.dependsOnOwnProps = !1;
    return i;
  };
}
function T(e) {
  return null !== e.dependsOnOwnProps && void 0 !== e.dependsOnOwnProps ? Boolean(e.dependsOnOwnProps) : 1 !== e.length;
}
function B(e, t) {
  return function (t, n) {
    n.displayName;
    var r = function (e, t) {
      return r.dependsOnOwnProps ? r.mapToProps(e, t) : r.mapToProps(e);
    };
    r.dependsOnOwnProps = !0;
    r.mapToProps = function (t, n) {
      r.mapToProps = e;
      r.dependsOnOwnProps = T(e);
      var i = r(t, n);
      if ("function" === typeof i) {
        r.mapToProps = i;
        r.dependsOnOwnProps = T(i);
        i = r(t, n);
      }
      return i;
    };
    return r;
  };
}
var D = [function (e) {
  return "function" === typeof e ? B(e) : void 0;
}, function (e) {
  return e ? void 0 : S(function (e) {
    return {
      dispatch: e
    };
  });
}, function (e) {
  return e && "object" === typeof e ? S(function (t) {
    return Object(k.bindActionCreators)(e, t);
  }) : void 0;
}];
var I = [function (e) {
  return "function" === typeof e ? B(e) : void 0;
}, function (e) {
  return e ? void 0 : S(function () {
    return {};
  });
}];
function F(e, t, n) {
  return Object(f.a)({}, n, {}, e, {}, t);
}
var R = [function (e) {
  return "function" === typeof e ? function (e) {
    return function (t, n) {
      n.displayName;
      var r;
      var i = n.pure;
      var o = n.areMergedPropsEqual;
      var a = !1;
      return function (t, n, s) {
        var c = e(t, n, s);
        if (a) {
          if (!(i && o(c, r))) {
            r = c;
          }
        } else {
          a = !0;
          r = c;
        }
        return r;
      };
    };
  }(e) : void 0;
}, function (e) {
  return e ? void 0 : function () {
    return F;
  };
}];
function P(e, t, n, r) {
  return function (i, o) {
    return n(e(i, o), t(r, o), o);
  };
}
function N(e, t, n, r, i) {
  var o;
  var a;
  var s;
  var c;
  var u;
  var l = i.areStatesEqual;
  var f = i.areOwnPropsEqual;
  var d = i.areStatePropsEqual;
  var h = !1;
  function p(i, h) {
    var p = !f(h, a);
    var _ = !l(i, o);
    o = i;
    a = h;
    return p && _ ? (s = e(o, a), t.dependsOnOwnProps && (c = t(r, a)), u = n(s, c, a)) : p ? (e.dependsOnOwnProps && (s = e(o, a)), t.dependsOnOwnProps && (c = t(r, a)), u = n(s, c, a)) : _ ? function () {
      var t = e(o, a);
      var r = !d(t, s);
      s = t;
      if (r) {
        u = n(s, c, a);
      }
      return u;
    }() : u;
  }
  return function (i, l) {
    return h ? p(i, l) : (s = e(o = i, a = l), c = t(r, a), u = n(s, c, a), h = !0, u);
  };
}
function M(e, t) {
  var n = t.initMapStateToProps;
  var r = t.initMapDispatchToProps;
  var i = t.initMergeProps;
  var o = Object(d.a)(t, ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"]);
  var a = n(e, o);
  var s = r(e, o);
  var c = i(e, o);
  return (o.pure ? N : P)(a, s, c, e, o);
}
function j(e, t, n) {
  for (var r = t.length - 1; r >= 0; r--) {
    var i = t[r](e);
    if (i) {
      return i;
    }
  }
  return function (t, r) {
    throw new Error("Invalid value of type " + typeof e + " for " + n + " argument when connecting component " + r.wrappedComponentName + ".");
  };
}
function L(e, t) {
  return e === t;
}
function U(e) {
  var t = void 0 === e ? {} : e;
  var n = t.connectHOC;
  var r = void 0 === n ? x : n;
  var i = t.mapStateToPropsFactories;
  var o = void 0 === i ? I : i;
  var a = t.mapDispatchToPropsFactories;
  var s = void 0 === a ? D : a;
  var c = t.mergePropsFactories;
  var u = void 0 === c ? R : c;
  var l = t.selectorFactory;
  var h = void 0 === l ? M : l;
  return function (e, t, n, i) {
    if (void 0 === i) {
      i = {};
    }
    var a = i;
    var c = a.pure;
    var l = void 0 === c || c;
    var p = a.areStatesEqual;
    var _ = void 0 === p ? L : p;
    var A = a.areOwnPropsEqual;
    var g = void 0 === A ? O : A;
    var v = a.areStatePropsEqual;
    var m = void 0 === v ? O : v;
    var y = a.areMergedPropsEqual;
    var b = void 0 === y ? O : y;
    var w = Object(d.a)(a, ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"]);
    var E = j(e, o, "mapStateToProps");
    var x = j(t, s, "mapDispatchToProps");
    var C = j(n, u, "mergeProps");
    return r(h, Object(f.a)({
      methodName: "connect",
      getDisplayName: function (e) {
        return "Connect(" + e + ")";
      },
      shouldHandleStateChanges: Boolean(e),
      initMapStateToProps: E,
      initMapDispatchToProps: x,
      initMergeProps: C,
      pure: l,
      areStatesEqual: _,
      areOwnPropsEqual: g,
      areStatePropsEqual: m,
      areMergedPropsEqual: b
    }, w));
  };
}
var H = U();
function V() {
  return Object(r.useContext)(o);
}
function G(e) {
  if (void 0 === e) {
    e = o;
  }
  var t = e === o ? V : function () {
    return Object(r.useContext)(e);
  };
  return function () {
    return t().store;
  };
}
var z = G();
function Q(e) {
  if (void 0 === e) {
    e = o;
  }
  var t = e === o ? z : G(e);
  return function () {
    return t().dispatch;
  };
}
var W = Q();
var K = function (e, t) {
  return e === t;
};
function X(e) {
  if (void 0 === e) {
    e = o;
  }
  var t = e === o ? V : function () {
    return Object(r.useContext)(e);
  };
  return function (e, n) {
    if (void 0 === n) {
      n = K;
    }
    var i = t();
    var o = function (e, t, n, i) {
      var o;
      var a = Object(r.useReducer)(function (e) {
        return e + 1;
      }, 0)[1];
      var s = Object(r.useMemo)(function () {
        return new u(n, i);
      }, [n, i]);
      var c = Object(r.useRef)();
      var l = Object(r.useRef)();
      var f = Object(r.useRef)();
      var d = Object(r.useRef)();
      var h = n.getState();
      try {
        o = e !== l.current || h !== f.current || c.current ? e(h) : d.current;
      } catch (p) {
        throw c.current && (p.message += "\nThe error may be correlated with this previous error:\n" + c.current.stack + "\n\n"), p;
      }
      A(function () {
        l.current = e;
        f.current = h;
        d.current = o;
        c.current = void 0;
      });
      A(function () {
        function e() {
          try {
            var e = l.current(n.getState());
            if (t(e, d.current)) {
              return;
            }
            d.current = e;
          } catch (p) {
            c.current = p;
          }
          a();
        }
        s.onStateChange = e;
        s.trySubscribe();
        e();
        return function () {
          return s.tryUnsubscribe();
        };
      }, [n, s]);
      return o;
    }(e, n, i.store, i.subscription);
    Object(r.useDebugValue)(o);
    return o;
  };
}
var Y;
var q = X();
var $ = require("../75/index");
Y = $.unstable_batchedUpdates;
a = Y;
export default l;