"use strict";

export { u as b };
export { p as c };
export { h as a };
import * as r from "./1/index";
import * as o from "./1/index";
import * as i from "./7";
import * as a from "./41";
import * as s from "./59/index";
var c = (s.a.materialHost, s.a.serverHost);
var l = s.a.openServiceHost;
function u() {
  return d.apply(this, arguments);
}
function d() {
  return (d = Object(i.a)(o.a.mark(function e() {
    var t;
    var n;
    var r;
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0;
            e.next = 3;
            return a.a.get(c + "/coconut/primary-course/list");
          case 3:
            if (t = e.sent, 200 !== (n = t.data).code) {
              e.next = 10;
              break;
            }
            r = n.data.items.map(function (e) {
              return {
                id: e.id,
                gif: e.gif,
                preview: e.preview,
                title: e.title,
                bcmUrl: e.bcm_url,
                videoUrl: e.video_url,
                courseIntro: e.course_intro
              };
            });
            return e.abrupt("return", r);
          case 10:
            return e.abrupt("return", []);
          case 11:
            e.next = 17;
            break;
          case 13:
            throw e.prev = 13, e.t0 = e.catch(0), console.error(e.t0), e.t0;
          case 17:
          case "end":
            return e.stop();
        }
      }
    }, e, null, [[0, 13]]);
  }))).apply(this, arguments);
}
function p() {
  return f.apply(this, arguments);
}
function f() {
  return (f = Object(i.a)(o.a.mark(function e() {
    var t;
    var n;
    var r;
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0;
            e.next = 3;
            return a.a.get(c + "/coconut/sample/list");
          case 3:
            if (t = e.sent, 200 !== (n = t.data).code) {
              e.next = 10;
              break;
            }
            r = n.data.items.map(function (e) {
              return {
                id: e.id.toString(),
                name: e.name,
                gif: e.gif_url,
                image: e.preview_url,
                bcmUrl: e.bcm_url
              };
            });
            return e.abrupt("return", r);
          case 10:
            return e.abrupt("return", []);
          case 11:
            e.next = 17;
            break;
          case 13:
            throw e.prev = 13, e.t0 = e.catch(0), console.error(e.t0), e.t0;
          case 17:
          case "end":
            return e.stop();
        }
      }
    }, e, null, [[0, 13]]);
  }))).apply(this, arguments);
}
function h(e) {
  return m.apply(this, arguments);
}
function m() {
  return (m = Object(i.a)(o.a.mark(function e(t) {
    var n;
    var r;
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0;
            e.next = 3;
            return a.a.post(l + "/content-security/image/sensor", {
              businessCode: "coco",
              uri: t,
              params: ["PULP"]
            });
          case 3:
            if (200 !== (n = e.sent).status || !n.data) {
              e.next = 7;
              break;
            }
            r = n.data;
            return e.abrupt("return", r.result);
          case 7:
            return e.abrupt("return", !1);
          case 10:
            throw e.prev = 10, e.t0 = e.catch(0), console.error(e.t0), e.t0;
          case 14:
          case "end":
            return e.stop();
        }
      }
    }, e, null, [[0, 10]]);
  }))).apply(this, arguments);
}