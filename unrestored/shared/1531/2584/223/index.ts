"use strict";

var r = require("../20");
var i = require("../33/index");
var o = require("../29");
var a = require("../54");
var s = require("../0/index");
var c = function __importDefault(module) {
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
}(s);
var u = require("../8");
var l = function __importDefault(module) {
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
}(u);
var f = require("./780");
var d = require("../108");
var h = require("./911/index");
var p = {};
function _(e, t) {
  0;
}
function A(e, t, n) {
  if (!(t || p[n])) {
    e(!1, n);
    p[n] = !0;
  }
}
var g = function (e, t) {
  A(_, e, t);
};
function v() {
  return !("undefined" === typeof window || !window.document || !window.document.createElement);
}
function m(e) {
  return e.attachTo ? e.attachTo : document.querySelector("head") || document.body;
}
function y(e) {
  var t;
  var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  if (!v()) {
    return null;
  }
  var r;
  var i = document.createElement("style");
  if (null === (t = n.csp) || void 0 === t ? void 0 : t.nonce) {
    i.nonce = null === (r = n.csp) || void 0 === r ? void 0 : r.nonce;
  }
  i.innerHTML = e;
  var o = m(n);
  var a = o.firstChild;
  if (n.prepend && o.prepend) {
    o.prepend(i);
  } else {
    if (n.prepend && a) {
      o.insertBefore(i, a);
    } else {
      o.appendChild(i);
    }
  }
  return i;
}
var b = new Map();
function w(e, t) {
  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
  var r = m(n);
  if (!b.has(r)) {
    var i = y("", n);
    var o = i.parentNode;
    b.set(r, o);
    o.removeChild(i);
  }
  var a = Array.from(b.get(r).children).find(function (e) {
    return "STYLE" === e.tagName && e["rc-util-key"] === t;
  });
  if (a) {
    var s;
    var c;
    var u;
    if ((null === (s = n.csp) || void 0 === s ? void 0 : s.nonce) && a.nonce !== (null === (c = n.csp) || void 0 === c ? void 0 : c.nonce)) {
      a.nonce = null === (u = n.csp) || void 0 === u ? void 0 : u.nonce;
    }
    if (a.innerHTML !== e) {
      a.innerHTML = e;
    }
    return a;
  }
  var l = y(e, n);
  l["rc-util-key"] = t;
  return l;
}
function E(e) {
  return "object" === Object(d.a)(e) && "string" === typeof e.name && "string" === typeof e.theme && ("object" === Object(d.a)(e.icon) || "function" === typeof e.icon);
}
function x() {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  return Object.keys(e).reduce(function (t, n) {
    var r = e[n];
    switch (n) {
      case "class":
        t.className = r;
        delete t.class;
        break;
      default:
        t[n] = r;
    }
    return t;
  }, {});
}
function C(e) {
  return Object(h.a)(e)[0];
}
function O(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var k = "\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n";
var S = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"];
var T = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
var B = function (e) {
  var t;
  var n;
  var i = e.icon;
  var o = e.className;
  var u = e.onClick;
  var l = e.style;
  var d = e.primaryColor;
  var h = e.secondaryColor;
  var p = Object(a.a)(e, S);
  var _ = T;
  if (d) {
    _ = {
      primaryColor: d,
      secondaryColor: h || C(d)
    };
  }
  (function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : k;
    var t = Object(s.useContext)(f.a);
    var n = t.csp;
    Object(s.useEffect)(function () {
      w(e, "@ant-design-icons", {
        prepend: !0,
        csp: n
      });
    }, []);
  })();
  t = E(i);
  n = "icon should be icon definiton, but got ".concat(i);
  g(t, "[@ant-design/icons] ".concat(n));
  if (!E(i)) {
    return null;
  }
  var A = i;
  if (A && "function" === typeof A.icon) {
    A = Object(r.a)(Object(r.a)({}, A), {}, {
      icon: A.icon(_.primaryColor, _.secondaryColor)
    });
  }
  return function e(t, n, i) {
    return i ? c.a.createElement(t.tag, Object(r.a)(Object(r.a)({
      key: n
    }, x(t.attrs)), i), (t.children || []).map(function (r, i) {
      return e(r, "".concat(n, "-").concat(t.tag, "-").concat(i));
    })) : c.a.createElement(t.tag, Object(r.a)({
      key: n
    }, x(t.attrs)), (t.children || []).map(function (r, i) {
      return e(r, "".concat(n, "-").concat(t.tag, "-").concat(i));
    }));
  }(A.icon, "svg-".concat(A.name), Object(r.a)({
    className: o,
    onClick: u,
    style: l,
    "data-icon": A.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }, p));
};
B.displayName = "IconReact";
B.getTwoToneColors = function () {
  return Object(r.a)({}, T);
};
B.setTwoToneColors = function (e) {
  var t = e.primaryColor;
  var n = e.secondaryColor;
  T.primaryColor = t;
  T.secondaryColor = n || C(t);
  T.calculated = !!n;
};
var D = B;
function I(e) {
  var t = O(e);
  var n = Object(i.a)(t, 2);
  var r = n[0];
  var o = n[1];
  return D.setTwoToneColors({
    primaryColor: r,
    secondaryColor: o
  });
}
var F = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
I("#1890ff");
var R = s.forwardRef(function (e, t) {
  var n;
  var c = e.className;
  var u = e.icon;
  var d = e.spin;
  var h = e.rotate;
  var p = e.tabIndex;
  var _ = e.onClick;
  var A = e.twoToneColor;
  var g = Object(a.a)(e, F);
  var v = s.useContext(f.a).prefixCls;
  var m = void 0 === v ? "anticon" : v;
  var y = l()(m, (n = {}, Object(o.a)(n, "".concat(m, "-").concat(u.name), !!u.name), Object(o.a)(n, "".concat(m, "-spin"), !!d || "loading" === u.name), n), c);
  var b = p;
  if (void 0 === b && _) {
    b = -1;
  }
  var w = h ? {
    msTransform: "rotate(".concat(h, "deg)"),
    transform: "rotate(".concat(h, "deg)")
  } : void 0;
  var E = O(A);
  var x = Object(i.a)(E, 2);
  var C = x[0];
  var k = x[1];
  return s.createElement("span", Object(r.a)(Object(r.a)({
    role: "img",
    "aria-label": u.name
  }, g), {}, {
    ref: t,
    tabIndex: b,
    onClick: _,
    className: y
  }), s.createElement(D, {
    icon: u,
    primaryColor: C,
    secondaryColor: k,
    style: w
  }));
});
R.displayName = "AntdIcon";
R.getTwoToneColor = function () {
  var e = D.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
};
R.setTwoToneColor = I;
export { R as a };
export default R;