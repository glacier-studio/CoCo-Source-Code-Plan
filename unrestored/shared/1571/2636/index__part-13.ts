/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-13
 */

"use strict"

import { lt, ft } from "./index__part-12"
var pt
import * as /* [auto-meaningful-name] */Module_390 from /* 390 */"./390"
import * as /* [auto-meaningful-name] */Src_shared_tools_index from /* 15 */"../../../../src/shared/tools/index"
import * as /* [auto-meaningful-name] */Module_1213 from /* 1213 */"./1213"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import * as /* [auto-meaningful-name] */Module_748 from /* 748 */"./748/index"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"./10/index"
import { useSelector } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { useState, useEffect } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_136 from /* 136 */"./136"
import /* [auto-meaningful-name] */Module_1361 from /* 136 */"./136"
var gt = function () {
  var e = useSelector(function (e) {
    return e.oTState.userFocusOTInfoList
  })
  var t = useSelector(function (e) {
    return e.oTState.cooperationUserList
  })
  var n = useSelector(function (e) {
    return e.oTState.onlineCooperationUserColorRecord
  })
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var o = useState([])
  var i = Module_10.a(o, 2)
  var a = i[0]
  var s = i[1]
  var c = useState({
    left: 0,
    top: 0
  })
  var l = Module_10.a(c, 2)
  var u = l[0]
  var d = l[1]
  var p = useState(false)
  var m = Module_10.a(p, 2)
  var g = m[0]
  var v = m[1]
  useEffect(function () {
    var n = function (n) {
      v(false)
      if (pt) {
        clearTimeout(pt)
      }
      var r = function (e) {
        var t = e.target.closest(".otFocusElement")
        return null === t || undefined === t ? undefined : t.id
      }(n) || function (e) {
        var /* [auto-meaningful-name] */e$target = e.target
        if (e$target instanceof SVGElement) {
          var n = e$target.closest(".focusSvgClassName")
          return null === n || undefined === n ? undefined : n.dataset.focusId
        }
      }(n)
      if (r) {
        if (pt) {
          clearTimeout(pt)
        }
        pt = setTimeout(function () {
          var o = e.filter(function (e) {
            return e.path.id === r
          })
          d({
            left: n.clientX + 20,
            top: n.clientY + 20
          })
          v(true)
          s(t.filter(function (e) {
            return o.some(function (t) {
              return t.userId === e.id
            })
          }).toJSON())
        }, 1e3)
      }
    }
    document.body.addEventListener("mousemove", n)
    return function () {
      document.body.removeEventListener("mousemove", n)
    }
  })
  return 0 === a.length ? React.createElement(React.Fragment, null) : React.createElement("div", {
    style: {
      display: g ? "block" : "none",
      position: "fixed",
      left: u.left,
      top: u.top,
      backgroundColor: 1 === a.length ? n.get(a[0].id) : Module_390.a
    },
    className: Module_1361.userFocusCard
  }, a.length > 1 ? React.createElement("div", {
    className: Module_1361.item
  }, a.map(function (e, t) {
    return React.createElement("div", {
      key: t,
      className: Module_1361.headPhoto,
      style: {
        zIndex: a.length - t,
        backgroundImage: "url(\"".concat(e.avatar_url, "\")"),
        borderColor: n.get(e.id)
      }
    })
  }), React.createElement("span", {
    className: Module_1361.nickname
  }, a.length, " ", useIntl$formatMessage({
    id: "OT.collPeopleCount"
  }))) : React.createElement("div", {
    key: a[0].id,
    className: Module_1361.item
  }, React.createElement("div", {
    className: Module_1361.headPhoto,
    style: {
      backgroundImage: "url(\"".concat(a[0].avatar_url, "\")"),
      borderColor: n.get(a[0].id)
    }
  }), React.createElement("div", {
    className: Module_1361.nickname
  }, a[0].nickname)))
}
var _t = React.memo(function () {
  var e = useSelector(function (e) {
    return e.oTState.userFocusOTInfoList
  })
  var t = useSelector(function (e) {
    return e.oTState.onlineCooperationUserColorRecord
  })
  var n = e.filter(function (e) {
    return "block" === e.path.type
  }).toJSON()
  useEffect(function () {
    var n = e.filter(function (e) {
      return "dynamicData" === e.path.type || "widget" === e.path.type
    }).toJSON()
    document.querySelectorAll(".otFocusElement").forEach(function (e) {
      var t = e.querySelector(".otFocusElementBorder")
      if (!(null === t || undefined === t)) {
        t.remove()
      }
      e.classList.remove("otFocusElement")
    })
    if (n && n.length > 0) {
      var r = lt(n, t.toJSON())
      n.forEach(function (e) {
        var t = document.getElementById(e.path.id)
        if (t && !t.classList.contains("otFocusElement")) {
          var n = document.createElement("div")
          n.setAttribute("data-html2canvas-ignore", "true")
          n.classList.add("otFocusElementBorder")
          n.style.borderColor = r[e.userId]
          t.classList.add("otFocusElement")
          t.appendChild(n)
        }
      })
    }
  }, [t, e])
  return React.createElement(React.Fragment, null, React.createElement(ft, {
    list: n
  }), React.createElement(gt, null))
})
var vt = function (e) {
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$onClose = e.onClose
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  return React.createElement(Src_shared_ui_components_index.f, {
    className: Module_1361.invalidUrlDialog,
    visible: e$visible,
    onClose: e$onClose
  }, React.createElement("h3", null, useIntl$formatMessage({
    id: "OT.urlIsInvalid"
  })), React.createElement("p", null, useIntl$formatMessage({
    id: "OT.urlIsInvalidDetail"
  })), React.createElement(Src_shared_ui_components_index.d, {
    type: "primary",
    onClick: e$onClose
  }, useIntl$formatMessage({
    id: "know"
  })))
}
var bt = function (e) {
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  return React.createElement(Src_shared_ui_components_index.f, {
    className: Module_1361.loadingDialog,
    visible: e$visible,
    showCloseButton: false
  }, React.createElement("div", {
    className: Module_1361.icon
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-loading2"
  })), React.createElement("p", null, useIntl$formatMessage({
    id: "OT.isBuildingCollWork"
  })))
}
var yt = React.memo(function () {
  var e = useSelector(function (e) {
    return e.oTState.onlineCooperationUserList
  }).toJSON()
  var t = useSelector(function (e) {
    return e.oTState.onlineCooperationUserColorRecord
  })
  var n = Src_shared_tools_index.q(e).reverse()
  return React.createElement("div", {
    className: Module_1361.users
  }, n.map(function (e, n) {
    return n + 1 > 3 ? null : React.createElement("div", {
      className: Classnames(Module_1361.headerPhotoBorder, Module_1361.user),
      key: e.id,
      style: {
        borderColor: t.get(e.id)
      }
    }, React.createElement(Module_748.a, {
      placement: "bottom",
      title: e.nickname
    }, React.createElement("div", {
      className: Module_1361.headPhoto,
      style: {
        backgroundImage: "url(\"".concat(e.avatar_url, "\")")
      }
    })))
  }), n.length > 3 && React.createElement(Module_1213.a, {
    overlayClassName: Module_1361.avatarPopover,
    content: React.createElement("div", {
      className: Module_1361.avatarContent
    }, n.map(function (e) {
      return React.createElement("div", {
        key: e.id,
        className: Module_1361.avatarItem
      }, React.createElement("div", {
        className: Classnames(Module_1361.headerPhotoBorder, Module_1361.user),
        key: e.id,
        style: {
          borderColor: t.get(e.id)
        }
      }, React.createElement(Module_748.a, {
        placement: "bottom",
        title: e.nickname
      }, React.createElement("div", {
        className: Module_1361.headPhoto,
        style: {
          backgroundImage: "url(\"".concat(e.avatar_url, "\")")
        }
      }))), React.createElement("div", {
        className: Module_1361.itemName
      }, e.nickname))
    }))
  }, React.createElement("div", {
    className: Classnames(Module_1361.count, Module_1361.user)
  }, React.createElement("div", {
    className: Module_1361.countPhoto
  }, n.length))))
})
export { _t }
export { vt }
export { bt }
export { yt }
