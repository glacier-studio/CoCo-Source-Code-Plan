/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-190
 */

"use strict"

import { we } from "./index__part-6"
import { fj, hj } from "./index__part-181"
import { Pj } from "./index__part-186"
import { Hj } from "./index__part-187"
import { Yj } from "./index__part-188"
import { Xj } from "./index__part-189"
import /* [auto-meaningful-name] */Module_164 from /* 164 */"./164"
var Nj
import * as /* [auto-meaningful-name] */Src_shared_ui_components_Dialog_index from /* 540 */"../../../../src/shared/ui/components/Dialog/index"
import * as /* [auto-meaningful-name] */Module_64 from /* 64 */"./64/index"
import * as /* [auto-meaningful-name] */Lodash from /* 30 */"lodash"
import * as /* [auto-meaningful-name] */Module_39 from /* 39 */"./39"
import * as /* [auto-meaningful-name] */Module_68 from /* 68 */"./68"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"./9"
import /* [auto-meaningful-name] */Axios from /* 129 */"axios"
import * as /* [auto-meaningful-name] */Src_shared_env from /* 57 */"../../../../src/shared/env"
import * as /* [auto-meaningful-name] */Src_shared_tools_index from /* 15 */"../../../../src/shared/tools/index"
import * as /* [auto-meaningful-name] */Module_27 from /* 27 */"./27"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import * as /* [auto-meaningful-name] */Module_25 from /* 25 */"./25/index"
import * as /* [auto-meaningful-name] */Module_11 from /* 11 */"./11"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"./10/index"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"./7"
import /* [auto-meaningful-name] */RegeneratorRuntime from /* 1 */"regenerator-runtime"
import { useSelector, useDispatch } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo, useState, useRef, useLayoutEffect, useEffect, useMemo } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_1528 from /* 1528 */"./1528"
import /* [auto-meaningful-name] */Module_15281 from /* 1528 */"./1528"
var Jj = ["staging", "press", "production"].includes(Src_shared_env.b()) ? {
  icon: ["https://creation.codemao.cn/884/l4zcboqu.json", "https://creation.codemao.cn/884/l4zcbf62.json", "https://creation.codemao.cn/884/l4zcb9gi.json"],
  sound: ["https://creation.codemao.cn/884/l4zcb0p4.json", "https://creation.codemao.cn/884/l4zcb365.json"],
  image: ["https://creation.codemao.cn/884/l4zc64z0.json", "https://creation.codemao.cn/884/l4zc6s4c.json", "https://creation.codemao.cn/884/l4zc7haq.json", "https://creation.codemao.cn/884/l4zc8el6.json", "https://creation.codemao.cn/884/l4zc8tz0.json", "https://creation.codemao.cn/884/1epopn5u3oyo00.json", "https://creation.codemao.cn/884/l9wg26l9.json", "https://creation.codemao.cn/884/l4zcaecb.json"]
} : {
  icon: ["https://dev-cdn-common.codemao.cn/dev/884/l4z74kja.json", "https://dev-cdn-common.codemao.cn/dev/884/l4z7497p.json", "https://dev-cdn-common.codemao.cn/dev/884/l4z73yo6.json"],
  sound: ["https://dev-cdn-common.codemao.cn/dev/884/l4z73i6b.json", "https://dev-cdn-common.codemao.cn/dev/884/l4z73qlg.json"],
  image: ["https://dev-cdn-common.codemao.cn/dev/884/l4z7sv9x.json", "https://dev-cdn-common.codemao.cn/dev/884/l4z7tuu6.json", "https://dev-cdn-common.codemao.cn/dev/884/l4z7uukm.json", "https://dev-cdn-common.codemao.cn/dev/884/l4z81dqy.json", "https://dev-cdn-common.codemao.cn/dev/884/l4z82awm.json", "https://dev-cdn-common.codemao.cn/dev/884/l4zarg1d.json", "https://dev-cdn-common.codemao.cn/dev/884/l9whw61i.json", "https://dev-cdn-common.codemao.cn/dev/884/l4zasm3n.json"]
}
var $j = function (e) {
  return Jj[e]
}
var eN = new (function () {
  function e() {
    Module_27.a(this, e)
    this.isInited = false
    this.materialFilter = {
      icon: ["全部"],
      sound: ["全部"],
      image: ["全部"]
    }
    this.materialResources = {
      icon: [],
      sound: [],
      image: []
    }
  }
  Module_39.a(e, [
    {
      key: "init",
      value: function () {
        var e = Module_7.a(RegeneratorRuntime.mark(function e() {
          return RegeneratorRuntime.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  if (!this.isInited) {
                    e.next = 2
                    break
                  }
                  return e.abrupt("return")
                case 2:
                  e.next = 4
                  return Promise.all([this.setMaterialList("icon"), this.setMaterialList("sound"), this.setMaterialList("image")])
                case 4:
                  this.isInited = true
                case 5:
                case "end":
                  return e.stop()
              }
            }
          }, e, this)
        }))
        return function () {
          return e.apply(this, arguments)
        }
      }()
    }, {
      key: "setMaterialList",
      value: function () {
        var e = Module_7.a(RegeneratorRuntime.mark(function e(t) {
          var n
          var r
          var /* [auto-meaningful-name] */e$sent
          var i
          var a = this
          return RegeneratorRuntime.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  n = $j(t)
                  r = n.map(function (e) {
                    return Axios.get(e)
                  })
                  e.next = 4
                  return Promise.all(r)
                case 4:
                  e$sent = e.sent
                  i = []
                  e$sent.forEach(function (e) {
                    var /* [auto-meaningful-name] */e$data = e.data
                    var r = e$data.materialList.map(function (e) {
                      return {
                        id: "".concat(e$data.name, "/").concat(e.name),
                        name: e.name,
                        md5: e.md5 || Module_15281("".concat(e$data.name, "/").concat(e.name)),
                        subtitle: e$data.name,
                        cdnUrl: e.urls[0],
                        duration: e.duration,
                        urls: e.urls,
                        frameMap: e.frameMap
                      }
                    })
                    i = i.concat(r)
                    a.materialFilter[t].push(e$data.name)
                  })
                  this.materialResources[t] = i
                case 8:
                case "end":
                  return e.stop()
              }
            }
          }, e, this)
        }))
        return function (t) {
          return e.apply(this, arguments)
        }
      }()
    }, {
      key: "getMaterialList",
      value: function () {
        return this.materialResources
      }
    }, {
      key: "getMaterialFilter",
      value: function () {
        return this.materialFilter
      }
    }, {
      key: "getSearchMaterialList",
      value: function (e) {
        return {
          icon: this.materialResources.icon.filter(function (t) {
            return t.name.indexOf(e) > -1
          }),
          sound: this.materialResources.sound.filter(function (t) {
            return t.name.indexOf(e) > -1
          }),
          image: this.materialResources.image.filter(function (t) {
            return t.name.indexOf(e) > -1
          })
        }
      }
    }
  ])
  return e
}())()
var tN = [
  {
    name: "Image",
    type: Module_68.d.IMAGE
  }, {
    name: "Icon",
    type: Module_68.d.ICON
  }, {
    name: "Sound",
    type: Module_68.d.SOUND
  }
]
var nN = memo(function (e) {
  var t
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$selectedIds = e.selectedIds
  var /* [auto-meaningful-name] */e$selectHandler = e.selectHandler
  var /* [auto-meaningful-name] */e$searchName = e.searchName
  var /* [auto-meaningful-name] */e$clearSearchHandler = e.clearSearchHandler
  var /* [auto-meaningful-name] */e$canShowMultiply = e.canShowMultiply
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var l = useIntl$formatMessage({
    id: "allType"
  })
  var u = useIntl$formatMessage({
    id: "Resource.Image"
  })
  var d = useIntl$formatMessage({
    id: "Resource.Icon"
  })
  var p = useIntl$formatMessage({
    id: "Resource.Sound"
  })
  var m = useState(e.sidebarType || Z(e.mode))
  var g = Module_10.a(m, 2)
  var v = g[0]
  var b = g[1]
  var y = useState("")
  var w = Module_10.a(y, 2)
  var C = w[0]
  var T = w[1]
  var A = useState(l)
  var j = Module_10.a(A, 2)
  var R = j[0]
  var x = j[1]
  var D = useState(6)
  var M = Module_10.a(D, 2)
  var L = M[0]
  var P = M[1]
  var B = useState(1)
  var F = Module_10.a(B, 2)
  var G = F[0]
  var W = F[1]
  var U = useState(false)
  var H = Module_10.a(U, 2)
  var V = H[0]
  var Y = H[1]
  var K = useRef(null)
  var q = useRef(null)
  var X = useSelector(function (e) {
    return e.resource.soundFileList
  })
  var Q = useSelector(function (e) {
    return e.resource.iconFileList
  })
  function Z(e) {
    switch (e) {
      case Module_68.c.IconLibrary:
        return Module_68.d.ICON
      case Module_68.c.SoundLibrary:
        return Module_68.d.SOUND
      default:
        return Module_68.d.IMAGE
    }
  }
  useLayoutEffect(function () {
    var e = true
    if (e$visible && !V) {
      (function () {
        var t = Module_7.a(RegeneratorRuntime.mark(function t() {
          return RegeneratorRuntime.wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  t.next = 2
                  return eN.init()
                case 2:
                  if (e) {
                    Y(true)
                  }
                case 3:
                case "end":
                  return t.stop()
              }
            }
          }, t)
        }))
        return function () {
          return t.apply(this, arguments)
        }
      })()()
    }
    return function () {
      e = false
    }
  }, [V, e$visible])
  useLayoutEffect(function () {
    var t = e.sidebarType || Z(e.mode)
    b(t)
    W(1)
  }, [e.mode, e.sidebarType])
  useEffect(function () {
    x(l)
    W(1)
  }, [l, e$searchName])
  var J = function (e) {
    T(e)
  }
  var $ = function (e) {
    return e$selectedIds.includes(e)
  }
  var ee = function (e, t) {
    return e.map(function (e) {
      return React.createElement(Yj, Object.assign({
        key: e.id
      }, e, {
        isAdded: !!e.md5 && t.includes(e.md5),
        canShowMultiply: e$canShowMultiply,
        isSelect: $(e.id),
        selectHandler: e$selectHandler
      }))
    })
  }
  var te = function (e, t) {
    return e.map(function (e) {
      return React.createElement(Xj, {
        key: e.id,
        md5: e.md5,
        id: e.id,
        cdnUrl: e.cdnUrl,
        name: e.name,
        isSelect: $(e.id),
        isAdded: !!e.md5 && t.includes(e.md5),
        selectHandler: e$selectHandler
      })
    })
  }
  var ne = function (e, t) {
    return e.map(function (e) {
      return React.createElement(Hj, Object.assign({
        key: e.id
      }, e, {
        isAdded: !!e.md5 && t.includes(e.md5),
        isSelect: $(e.id),
        isPlaying: e.id === C,
        selectHandler: e$selectHandler,
        setSoundPlayingId: J
      }))
    })
  }
  t = {}
  Module_11.a(t, Module_68.d.IMAGE, [eN.materialResources.image, Module_9.jb(), ee])
  Module_11.a(t, Module_68.d.ICON, [eN.materialResources.icon, Q, te])
  Module_11.a(t, Module_68.d.SOUND, [eN.materialResources.sound, X, ne])
  var re = t
  var oe = useMemo(function () {
    if (e$searchName) {
      return eN.getSearchMaterialList(e$searchName)
    }
  }, [e$searchName])
  var ie = function (t) {
    var n = Lodash.cloneDeep(t[0])
    var r = t[1]
    var o = t[2]
    if (R !== l && (!e$searchName || e.mode < 3)) {
      n = n.filter(function (e) {
        return e.subtitle === R
      })
    }
    var a = []
    r.forEach(function (e) {
      if (e.md5) {
        a.push(e.md5)
      }
    })
    return o(n, a)
  }
  var ae = e$searchName ? function () {
    if (oe) {
      var /* [auto-meaningful-name] */oe$image = oe.image
      var /* [auto-meaningful-name] */oe$icon = oe.icon
      var /* [auto-meaningful-name] */oe$sound = oe.sound
      var o = ie([oe$image, Module_9.jb(), ee])
      var i = ie([oe$icon, Q, te])
      var a = ie([oe$sound, X, ne])
      switch (e.mode) {
        case 0:
          return o
        case 1:
          return i
        case 2:
          return a
      }
      switch (R) {
        case u:
          return o
        case d:
          return i
        case p:
          return a
        default:
          return o.concat(i).concat(a)
      }
    }
  }() : ie(re[v])
  var se = function () {
    var /* [auto-meaningful-name] */K$current = K.current
    var /* [auto-meaningful-name] */q$current = q.current
    var n = 0
    if (null === q$current || undefined === q$current ? undefined : q$current.offsetWidth) {
      var r = Math.floor((q$current.offsetWidth - 6) / 146)
      if (q$current.offsetWidth - 6 - 146 * r < 20 * (r - 1)) {
        r -= 1
      }
      n = ((null === q$current || undefined === q$current ? undefined : q$current.offsetWidth) - (146 * r + 20 * (r - 1))) / 2
      P(r)
    }
    if (K$current) {
      K$current.style.paddingLeft = n + "px"
    }
  }
  useEffect(function () {
    window.addEventListener("resize", se)
    return function () {
      window.removeEventListener("resize", se)
    }
  }, [])
  useEffect(function () {
    se()
  })
  return React.createElement(React.Fragment, null, e.mode !== Module_68.c.ResourceLibrary ? null : React.createElement("div", {
    className: Module_164.sidebar
  }, tN.map(function (e) {
    return React.createElement("div", {
      className: Classnames(Module_164.item, e.type === v && !e$searchName && Module_164.selected),
      key: e.name,
      onClick: function () {
        !function (e) {
          var /* [auto-meaningful-name] */q$current
          b(e)
          x(l)
          e$clearSearchHandler()
          if (!(null === (q$current = q.current) || undefined === q$current)) {
            q$current.scrollTo(0, 0)
          }
          W(1)
        }(e.type)
      }
    }, React.createElement(Src_shared_ui_components_index.j, {
      type: "icon-".concat(e.name),
      className: Module_164.icon
    }), useIntl$formatMessage({
      id: "Resource.".concat(e.name)
    }))
  }), React.createElement("a", {
    className: Module_164.help,
    href: "https://codemao-guide.yuque.com/bfiekm/sbo5kh/xgm6rd",
    target: "_blank",
    rel: "noopener noreferrer"
  }, useIntl$formatMessage({
    id: "Resource.HowFindMaterial"
  }))), React.createElement("div", {
    className: Classnames(Module_164.itemContent, e.mode === Module_68.c.ResourceLibrary && Module_164.sidebarShow)
  }, function () {
    var t = e$searchName && 3 === e.mode ? [l, u, d, p] : v === Module_68.d.ICON ? eN.getMaterialFilter().icon : v === Module_68.d.IMAGE ? eN.getMaterialFilter().image : v === Module_68.d.SOUND ? eN.getMaterialFilter().sound : []
    return React.createElement("div", {
      ref: K,
      className: Module_164.filter
    }, t.map(function (e) {
      return React.createElement("div", {
        onClick: function () {
          return function (e) {
            var /* [auto-meaningful-name] */q$current
            if (R !== e) {
              x(e)
              if (!(null === (q$current = q.current) || undefined === q$current)) {
                q$current.scrollTo(0, 0)
              }
              W(1)
            }
          }(e)
        },
        className: Classnames(Module_164.filter_item, R === e && Module_164.selected),
        key: e
      }, e)
    }))
  }(), ae.length > 0 ? React.createElement("ul", {
    className: Module_164.itemListWrap,
    ref: q,
    onScrollCapture: function (e) {
      var /* [auto-meaningful-name] */e$currentTarget = e.currentTarget
      if (e$currentTarget.scrollHeight - e$currentTarget.scrollTop - e$currentTarget.clientHeight < .5) {
        W(G + 1)
      }
    }
  }, ae.slice(0, G * L * 4)) : React.createElement("div", {
    style: {
      marginTop: 224
    }
  }, React.createElement(we, {
    text: useIntl$formatMessage({
      id: "material.materialNotFound"
    }),
    type: "image-text"
  }))))
})
!function (e) {
  e[e.Library = 0] = "Library"
  e[e.Mall = 1] = "Mall"
}(Nj || (Nj = {}))
var rN = memo(function () {
  var e = useSelector(function (e) {
    return e.resource.resourceLibraryDialogInfo
  })
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$onSelect = e.onSelect
  var /* [auto-meaningful-name] */e$multiple = e.multiple
  var /* [auto-meaningful-name] */e$mode = e.mode
  var /* [auto-meaningful-name] */e$sidebarType = e.sidebarType
  var /* [auto-meaningful-name] */e$setTab = e.setTab
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var c = useDispatch()
  var l = function () {
    Q()
    c(Src_editor_redux_common_actions.sh())
  }
  var u = useState(false)
  var d = Module_10.a(u, 2)
  var p = d[0]
  var m = d[1]
  var g = useState("")
  var v = Module_10.a(g, 2)
  var b = v[0]
  var y = v[1]
  var E = useState(Nj.Mall)
  var O = Module_10.a(E, 2)
  var w = O[0]
  var C = O[1]
  var T = useState([])
  var A = Module_10.a(T, 2)
  var j = A[0]
  var R = A[1]
  var k = useState(false)
  var D = Module_10.a(k, 2)
  var M = D[0]
  var L = D[1]
  var P = useState(false)
  var B = Module_10.a(P, 2)
  var F = B[0]
  var G = B[1]
  var W = useRef(null)
  var U = useRef(null)
  var H = useRef(true)
  useLayoutEffect(function () {
    if (e$mode === Module_68.c.ResourceLibrary) {
      m(false)
      C(Nj.Mall)
    } else {
      m(true)
      C(Nj.Library)
    }
  }, [e$mode])
  useLayoutEffect(function () {
    if (!e$visible) {
      R([])
    }
  }, [e$visible])
  useLayoutEffect(function () {
    var /* [auto-meaningful-name] */W$current = W.current
    if (W$current) {
      var /* [auto-meaningful-name] */W$current$scrollWidth = W$current.scrollWidth
      var /* [auto-meaningful-name] */W$current$clientWidth = W$current.clientWidth
      W$current.scrollLeft = W$current$scrollWidth - W$current$clientWidth
    }
    if (j.length > 0) {
      L(false)
      G(false)
    }
  }, [j.length])
  var V = function () {
    H.current = false
  }
  var K = function () {
    H.current = true
    q()
  }
  var q = function () {
    var /* [auto-meaningful-name] */U$current
    var /* [auto-meaningful-name] */U$current$input
    if (H.current) {
      y((null === (U$current = U.current) || undefined === U$current || null === (U$current$input = U$current.input) || undefined === U$current$input ? undefined : U$current$input.value) || "")
    }
  }
  var X = function (e) {
    if (13 === e.keyCode) {
      y(e.currentTarget.value)
    }
  }
  var Q = function () {
    y("")
    var /* [auto-meaningful-name] */U$current = U.current
    if (U$current && U$current.input) {
      U$current.input.value = ""
      U$current.value = ""
    }
  }
  var Z = function () {
    return e$mode === Module_68.c.ResourceLibrary || e$multiple
  }
  var J = function (e, t) {
    return j.some(function (n) {
      return n.id === e && n.cdnUrl === t
    })
  }
  var $ = function (e, t) {
    var n = Module_25.a(j)
    if (!Z()) {
      return j.length > 0 ? J(e.id, e.cdnUrl) ? void R([]) : void R([e]) : (n.push(e), void R(n))
    }
    if (J(e.id, e.cdnUrl)) {
      var r = n.filter(function (t) {
        return t.id !== e.id
      })
      R(r)
    } else {
      n.push(e)
      R(n)
      var o = null === t || undefined === t ? undefined : t.currentTarget
      var i = null === o || undefined === o ? undefined : o.parentElement
      var a = null === o || undefined === o ? undefined : o.getBoundingClientRect().bottom
      var s = null === i || undefined === i ? undefined : i.getBoundingClientRect().bottom
      if (a && s) {
        var c = a - s + 10
        if (1 === n.length) {
          c += 165
        }
        if (c > 0 && i) {
          var /* [auto-meaningful-name] */i$scrollTop = i.scrollTop
          i.scrollTop = i.scrollTop + c
          if (i$scrollTop === i.scrollTop) {
            setTimeout(function () {
              i.scrollTop = i.scrollTop + c
            })
          }
        }
      }
    }
  }
  var ee = function (e) {
    var t = []
    j.forEach(function (n) {
      if (n.selectFrom === e) {
        t.push(n.id)
      }
    })
    return t
  }
  var ne = function (e, t, n) {
    var r = "".concat(e, "-").concat(t + 1).concat(Src_shared_tools_index.I(n))
    var o = Module_9.ib(e, t)
    return {
      id: o ? o.id : Module_9.z(r),
      cdnUrl: n,
      md5: "",
      groupId: e,
      groupImageIndex: t,
      extension: Src_shared_tools_index.I(n)
    }
  }
  var re = function (e) {
    R([])
    if (e) {
      l()
    }
  }
  var oe = function () {
    var e = ee(hj.Mall)
    var t = ee(hj.Library)
    var r = j.filter(function (e) {
      return e.type === fj.Icon
    }).map(function (e) {
      return {
        id: e.selectFrom === hj.Mall ? Module_64.a("ICON") : e.id,
        md5: e.md5,
        name: e.name,
        cdnUrl: e.cdnUrl
      }
    })
    var i = r.filter(function (n) {
      return !e.includes(n.id) && !t.includes(n.id)
    })
    var s = j.filter(function (e) {
      return e.type === fj.Sound
    }).map(function (e) {
      return {
        id: e.selectFrom === hj.Mall ? Module_64.a("SOUND") : e.id,
        md5: e.md5,
        name: "".concat(e.name).concat(e.selectFrom === hj.Mall ? Src_shared_tools_index.I(e.cdnUrl) : ""),
        cdnUrl: e.cdnUrl,
        duration: e.duration
      }
    })
    var u = s.filter(function (n) {
      return !e.includes(n.id) && !t.includes(n.id)
    })
    var d = j.filter(function (e) {
      return e.type === fj.Image
    })
    var p = d.map(function (e) {
      var t = e.urls && e.urls.length > 1 ? "" : Src_shared_tools_index.I(e.cdnUrl)
      return {
        id: e.selectFrom === hj.Mall ? "".concat(e.name).concat(t) : e.id,
        cdnUrl: e.cdnUrl,
        md5: e.md5,
        extension: t,
        urls: e.urls
      }
    })
    d.forEach(function (e) {
      if (e.urls && e.urls.length > 1) {
        if (Z()) {
          e.urls.forEach(function (t, n) {
            p.push(ne(e.name, n, t))
          })
        } else {
          var t = e.urls.findIndex(function (t) {
            return t === e.cdnUrl
          })
          p.push(ne(e.name, t, e.cdnUrl))
        }
      }
    })
    var f = p.filter(function (n) {
      return !e.includes(n.id) && !t.includes(n.id) && !Module_9.hb(n.id)
    })
    c(Src_editor_redux_common_actions.qf(i))
    c(Src_editor_redux_common_actions.vf(u))
    c(Src_editor_redux_common_actions.sf(f))
    if (e$mode === Module_68.c.SoundLibrary) {
      if (e$onSelect) {
        e$onSelect(s)
      }
    } else {
      if (e$mode === Module_68.c.IconLibrary) {
        if (e$onSelect) {
          e$onSelect(r)
        }
      } else {
        if (e$mode === Module_68.c.ImageLibrary && e$onSelect) {
          e$onSelect(p.filter(function (e) {
            return !(e.urls && e.urls.length > 1)
          }))
        }
      }
    }
    if (e$setTab) {
      e$setTab(f.length > 0 ? "image" : i.length > 0 ? "icon" : "sound")
    }
    R([])
    l()
  }
  return React.createElement(Src_shared_ui_components_Dialog_index.a, {
    withPortal: true,
    visible: e$visible,
    className: Classnames(Module_164.imageLibrary, e$mode === Module_68.c.ResourceLibrary && Module_164.mall),
    showCloseButton: true,
    onClose: l
  }, e$visible && React.createElement("div", {
    className: Module_164.LibraryHeader
  }, React.createElement("div", {
    className: Module_164.title
  }, e$mode === Module_68.c.ResourceLibrary ? useIntl$formatMessage({
    id: "Resource.ResourceMall"
  }) : e$mode === Module_68.c.ImageLibrary ? useIntl$formatMessage({
    id: "Resource.ImageLibrary"
  }) : e$mode === Module_68.c.SoundLibrary ? useIntl$formatMessage({
    id: "Resource.SoundLibrary"
  }) : e$mode === Module_68.c.IconLibrary ? useIntl$formatMessage({
    id: "Resource.IconLibrary"
  }) : ""), p && React.createElement("div", {
    className: Module_164.tab
  }, React.createElement("div", {
    className: Classnames(Module_164.tabItem, w === Nj.Library && Module_164.selected),
    onClick: function () {
      C(Nj.Library)
      Q()
    }
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-project-resources",
    className: Module_164.icon
  }), useIntl$formatMessage({
    id: "Resource.ProjectLibrary"
  })), React.createElement("div", {
    className: Classnames(Module_164.tabItem, w === Nj.Mall && Module_164.selected),
    onClick: function () {
      C(Nj.Mall)
      Q()
    }
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-material-store",
    className: Module_164.icon
  }), useIntl$formatMessage({
    id: "Resource.ResourceMall"
  }))), React.createElement(Src_shared_ui_components_index.k, {
    ref: U,
    onClearCallback: Q,
    className: Module_164.searchInput,
    placeholder: useIntl$formatMessage({
      id: "Resource.search"
    }),
    onKeyDown: X,
    onChange: q,
    onCompositionStart: V,
    onCompositionEnd: K,
    clearButtonVisible: !!b,
    before: React.createElement(Src_shared_ui_components_index.j, {
      type: "icon-material-search"
    })
  })), React.createElement("div", {
    className: Classnames(Module_164.LibraryContent, j.length > 0 && Module_164.footerShow, j.length > 0 && Z() && Module_164.selectBarShow)
  }, w === Nj.Library && React.createElement(Pj, {
    mode: e$mode,
    searchName: b,
    selectHandler: $,
    selectedIds: ee(hj.Library),
    canShowMultiply: Z()
  }), w === Nj.Mall && React.createElement(nN, {
    mode: e$mode,
    visible: e$visible,
    searchName: b,
    clearSearchHandler: Q,
    selectHandler: $,
    selectedIds: ee(hj.Mall),
    sidebarType: e$sidebarType,
    canShowMultiply: Z()
  })), Z() ? 0 === j.length ? F ? null : React.createElement("div", {
    className: Classnames(Module_164.selectBar, e$mode === Module_68.c.ResourceLibrary && Module_164.sidebarShow, Module_164.fade),
    onAnimationEnd: function () {
      return G(true)
    }
  }) : React.createElement("div", {
    ref: W,
    className: Classnames(Module_164.selectBar, e$mode === Module_68.c.ResourceLibrary && Module_164.sidebarShow)
  }, j.map(function (e) {
    return React.createElement("div", {
      key: e.id,
      className: Classnames(Module_164.selectedItem)
    }, React.createElement("div", {
      className: Module_164.delete,
      onClick: function () {
        return function (e, t) {
          var n = Module_25.a(j)
          if (J(e, t)) {
            var r = n.filter(function (t) {
              return t.id !== e
            })
            R(r)
          }
        }(e.id, e.cdnUrl)
      }
    }, React.createElement(Src_shared_ui_components_index.j, {
      type: "icon-close",
      className: Module_164.iconDelete
    })), React.createElement("div", {
      className: Module_164.content
    }, e.type === fj.Image && React.createElement("img", {
      alt: "",
      className: Module_164.imageContent,
      src: e.cdnUrl
    }), e.type === fj.Icon && React.createElement("img", {
      alt: "",
      className: Module_164.iconContent,
      src: e.cdnUrl
    }), e.type === fj.Sound && React.createElement(Src_shared_ui_components_index.j, {
      type: "icon-music",
      className: Module_164.soundContent
    })), React.createElement("div", {
      className: Module_164.name
    }, e.name))
  })) : null, 0 === j.length ? M ? null : React.createElement("div", {
    className: Classnames(Module_164.footer, Module_164.fade),
    onAnimationEnd: function () {
      return L(true)
    }
  }) : Z() ? React.createElement("div", {
    className: Module_164.footer
  }, React.createElement("div", {
    className: Module_164.btns
  }, React.createElement("div", {
    className: Classnames(Module_164.btn, Module_164.btnCancel),
    onClick: function () {
      return re(false)
    }
  }, useIntl$formatMessage({
    id: "Resource.Clear"
  })), React.createElement("div", {
    className: Classnames(Module_164.btn, Module_164.btnConfirm),
    onClick: oe
  }, useIntl$formatMessage({
    id: "Resource.Add"
  }), "(", j.length, ")"))) : React.createElement("div", {
    className: Module_164.footer
  }, React.createElement("div", {
    className: Module_164.btns
  }, React.createElement("div", {
    className: Classnames(Module_164.btn, Module_164.btnCancel),
    onClick: function () {
      return re(true)
    }
  }, useIntl$formatMessage({
    id: "Resource.Cancel"
  })), React.createElement("div", {
    className: Classnames(Module_164.btn, Module_164.btnConfirm),
    onClick: oe
  }, useIntl$formatMessage({
    id: "Resource.Apply"
  })))))
})
export { rN }
