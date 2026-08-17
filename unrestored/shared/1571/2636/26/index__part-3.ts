/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：26__part-3
 */

"use strict"

import * as /* [auto-meaningful-name] */Src_shared_tools_index from /* 15 */"../../../../../src/shared/tools/index"
import * as /* [auto-meaningful-name] */Src_shared_packages_Crc_blink_src_index from /* 17 */"../../../../../src/shared/packages/@crc/blink/src/index"
var r
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"../6"
import * as /* [auto-meaningful-name] */RegeneratorRuntime from /* 1 */"regenerator-runtime"
import /* [auto-meaningful-name] */RegeneratorRuntime1 from /* 1 */"regenerator-runtime"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"../7"
import * as /* [auto-meaningful-name] */Module_209 from /* 209 */"../207/209/index"
import * as /* [auto-meaningful-name] */Module_37 from /* 37 */"../37/index"
import * as /* [auto-meaningful-name] */Module_53 from /* 53 */"../53"
import * as /* [auto-meaningful-name] */Module_47 from /* 47 */"../47"
import * as /* [auto-meaningful-name] */Module_125 from /* 125 */"../1058/125"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../../src/editor/redux/common/actions"
!function (e) {
  e.PNG = "dataurl+png"
  e.SVG_ASCII = "dataurl+ascii"
  e.SVG_BASE64 = "dataurl+base64"
  e.XML = "xml"
}(r || (r = {}))
var /* [auto-meaningful-name] */Http__www$w3$org_2000_svg = "http://www.w3.org/2000/svg"
var /* [auto-meaningful-name] */Http__www$w3$org_1999_xlink = "http://www.w3.org/1999/xlink"
function te(e) {
  return ne.apply(this, arguments)
}
function ne() {
  return (ne = Module_7.a(RegeneratorRuntime1.mark(function e(t) {
    var n
    var r
    var o
    var /* [auto-meaningful-name] */e$sent
    var a
    var s
    var l
    var u = arguments
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (r = u.length > 1 && undefined !== u[1] ? u[1] : 2, o = null === (n = Src_shared_packages_Crc_blink_src_index.Blink.mainWorkspace.get_block_by_id(t)) || undefined === n ? undefined : n.svg_group) {
              e.next = 4
              break
            }
            return e.abrupt("return")
          case 4:
            e.next = 6
            return ce(o)
          case 6:
            e$sent = e.sent
            a = o.getBBox()
            s = (a.width + 10) * r
            l = (a.height + 10) * r
            ue(e$sent, s, l, "png", function (e) {
              Module_37.d.dispatch(Src_editor_redux_common_actions.bi(true, e))
            })
          case 11:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function re(e, t) {
  return oe.apply(this, arguments)
}
function oe() {
  return (oe = Module_7.a(RegeneratorRuntime1.mark(function e(t, n) {
    var r
    var /* [auto-meaningful-name] */t$type
    var /* [auto-meaningful-name] */e$sent
    var a
    var s
    var c
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            r = 2
            t$type = t.type
            e.next = 4
            return ce(n)
          case 4:
            e$sent = e.sent
            a = n.getBBox()
            s = (a.width + 10) * r
            c = (a.height + 10) * r
            return e.abrupt("return", new Promise(function (e) {
              ue(e$sent, s, c, "png", function (n) {
                var r = t
                var /* [auto-meaningful-name] */t$type1 = t.type
                var a = t.widgetType || ""
                a = a.toLowerCase()
                if ("widget_event" === t$type) {
                  var /* [auto-meaningful-name] */r$event = r.event
                  t$type1 = "".concat(a, "_event_").concat(r$event)
                } else if ("widget_get" === t$type) {
                  var /* [auto-meaningful-name] */r$property = r.property
                  t$type1 = "".concat(a, "_get_").concat(r$property)
                } else if ("widget_set" === t$type) {
                  var /* [auto-meaningful-name] */r$property1 = r.property
                  t$type1 = "".concat(a, "_set_").concat(r$property1)
                } else if ("widget_method" === t$type) {
                  var /* [auto-meaningful-name] */r$method = r.method
                  t$type1 = "".concat(a, "_method_").concat(r$method)
                }
                var d = document.createElement("a")
                d.href = n
                d.download = "".concat(t$type1, ".png")
                d.click()
                e(t$type1)
              })
            }))
          case 9:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function ie() {
  return ae.apply(this, arguments)
}
function ae() {
  return (ae = Module_7.a(RegeneratorRuntime1.mark(function e() {
    var t
    var n
    var r
    var o
    var i
    var a
    var /* [auto-meaningful-name] */i$value
    var l
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (n = null === (t = Src_shared_packages_Crc_blink_src_index.Blink.mainWorkspace.get_flyout()) || undefined === t ? undefined : t.get_workspace()) {
              e.next = 3
              break
            }
            return e.abrupt("return")
          case 3:
            r = n.get_top_blocks(false)
            o = Module_47.a(r)
            e.prev = 5
            o.s()
          case 7:
            if ((i = o.n()).done) {
              e.next = 18
              break
            }
            if (i$value = i.value, l = null === (a = n.get_block_by_id(i$value.id)) || undefined === a ? undefined : a.svg_group) {
              e.next = 12
              break
            }
            return e.abrupt("return")
          case 12:
            e.next = 14
            return re(i$value, l)
          case 14:
            e.next = 16
            return Src_shared_tools_index.lb(200)
          case 16:
            e.next = 7
            break
          case 18:
            e.next = 23
            break
          case 20:
            e.prev = 20
            e.t0 = e.catch(5)
            o.e(e.t0)
          case 23:
            e.prev = 23
            o.f()
            return e.finish(23)
          case 26:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[5, 20, 23, 26]])
  }))).apply(this, arguments)
}
var se = "batchDownloadBlockImage=1".toLowerCase()
function ce(e) {
  return le.apply(this, arguments)
}
function le() {
  return (le = Module_7.a(RegeneratorRuntime1.mark(function e(t) {
    var n
    var r
    var o
    var i
    var a
    var s
    var l
    var u
    var d
    var p
    var f
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            (n = t.cloneNode(true)).removeAttribute("width")
            n.removeAttribute("height")
            n.removeAttribute("transform")
            r = n.querySelectorAll("image")
            o = RegeneratorRuntime1.mark(function e(t) {
              var n
              return RegeneratorRuntime1.wrap(function (e) {
                for (;;) {
                  switch (e.prev = e.next) {
                    case 0:
                      if (!(n = r[t].getAttributeNS(Http__www$w3$org_1999_xlink, "href")) || !n.match(/\.svg$/g)) {
                        e.next = 4
                        break
                      }
                      e.next = 4
                      return fetch(n).then(function (e) {
                        return e.text()
                      }).then(function (e) {
                        var n = "data:image/svg+xml," + encodeURIComponent(e)
                        r[t].setAttributeNS(Http__www$w3$org_1999_xlink, "href", n)
                      })
                    case 4:
                    case "end":
                      return e.stop()
                  }
                }
              }, e)
            })
            i = 0
          case 7:
            if (!(i < r.length)) {
              e.next = 12
              break
            }
            return e.delegateYield(o(i), "t0", 9)
          case 9:
            i++
            e.next = 7
            break
          case 12:
            a = document.createElementNS("http://www.w3.org/2000/svg", "style")
            s = Src_shared_packages_Crc_blink_src_index.Blink.di_container.get(Module_125.BINDING.css)
            a.textContent = "".concat(s.CONTENT, " .blocklyDropdownArrow{ fill: rgba(0, 0, 0, .1); }");
            (l = t.getBBox()).x -= 5
            l.y -= 5
            l.width += 10
            l.height += 10
            u = new XMLSerializer()
            d = u.serializeToString(document.querySelector("defs"))
            p = u.serializeToString(a)
            f = u.serializeToString(n)
            d = d.replace(/[\n\r]|\s{2,}/g, "")
            return e.abrupt("return", "<svg xmlns=\"".concat(Http__www$w3$org_2000_svg, "\" xmlns:xlink=\"").concat(Http__www$w3$org_1999_xlink, "\" width=\"").concat(l.width, "\" height=\"").concat(l.height, "\"") + " viewBox=\"".concat(l.x, " ").concat(l.y, " ").concat(l.width, " ").concat(l.height, "\">\n      ").concat(d, "\n      ").concat(p, "\n      ").concat(f, "\n    </svg>"))
          case 26:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function ue(e, t, n, r, o) {
  r = r || "png"
  var i = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(e)))
  var a = document.createElement("canvas")
  var s = a.getContext("2d")
  if (s) {
    a.width = t
    a.height = n
    var c = new Image()
    c.onload = function () {
      s.clearRect(0, 0, t, n)
      s.drawImage(c, 0, 0, t, n)
      var e = a.toDataURL("image/".concat(r))
      o(e)
    }
    c.src = i
  }
}
if (window.location.href.toLowerCase().includes(se)) {
  window.addEventListener("load", function () {
    var e = document.getElementById("logo")
    if (!(null === e || undefined === e)) {
      e.addEventListener("click", ie)
    }
  })
}
export { te }
