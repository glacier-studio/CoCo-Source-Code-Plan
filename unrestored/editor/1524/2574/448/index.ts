"use strict";

export { h as a };
export { m as b };
import * as r from "../0/index";
import * as o from "../0/index";
import * as i from "../5";
import * as a from "../42/index";
import * as s from "../64";
import * as c from "../205";
import * as l from "../35/index";
import * as u from "./670";
import * as d from "./670";
import * as p from "../76";
function f(e) {
  var t = e.id;
  var n = e.widgetIds;
  var r = e.position;
  var s = e.size;
  var u = e.backgroundColor;
  var p = e.backgroundImage;
  var f = e.backgroundImageResizeMode;
  var h = [];
  n.forEach(function (e, t) {
    var n = a.g.get(e);
    if (n) {
      n.zIndex = t;
      h.push(n);
    }
  });
  var m = Object(l.hb)(p);
  var g = (null === m || void 0 === m ? void 0 : m.source) || (null === m || void 0 === m ? void 0 : m.cdnUrl);
  if (!(g || !p.includes("://") && !p.includes("data:image/"))) {
    g = p;
  }
  return o.a.createElement("div", {
    id: t,
    className: d.a.screenView,
    "data-role": i.D,
    "data-widget-type": i.D,
    style: {
      top: r.y,
      left: r.x,
      width: s.width,
      height: s.height,
      backgroundColor: u,
      backgroundImage: g ? "url(".concat(g, ")") : "none",
      backgroundSize: f === c.a.STRETCH ? "100% 100%" : f
    }
  }, h.map(function (e) {
    return Object(a.f)({
      widget: e
    });
  }));
}
function h(e) {
  return {
    id: Object(s.a)(i.D),
    title: e,
    type: i.D,
    position: {
      x: 0,
      y: 0
    },
    backgroundColor: p.c,
    backgroundImage: "",
    backgroundImageResizeMode: c.a.COVER,
    size: {
      width: p.e,
      height: p.d
    },
    widgetIds: [],
    invisibleWidgetIds: [],
    blocksXML: "",
    snapshot: "",
    primitiveVariables: [],
    arrayVariables: [],
    objectVariables: [],
    broadcasts: ["Hi"]
  };
}
function m(e) {
  var t = e.id;
  var n = e.widgetIds;
  var r = e.position;
  var i = e.size;
  var a = e.backgroundColor;
  var s = e.backgroundImage;
  var c = e.backgroundImageResizeMode;
  return o.a.createElement(f, {
    id: t,
    widgetIds: n,
    position: r,
    size: i,
    key: t,
    backgroundColor: a,
    backgroundImage: s,
    backgroundImageResizeMode: c
  });
}