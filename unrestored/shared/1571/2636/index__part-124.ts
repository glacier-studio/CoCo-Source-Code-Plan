/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-124
 */

"use strict"

import /* [auto-meaningful-name] */Module_208 from /* 208 */"./208"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"./10/index"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo, useRef, useState, useEffect } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_557 from /* 557 */"./557"
import * as /* [auto-meaningful-name] */Module_807 from /* 807 */"./807"
var ow = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "header" : e$keyName
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var i = e$getValue(n)
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var s = useRef(-1)
  var c = useState([])
  var l = Module_10.a(c, 2)
  var u = l[0]
  var d = l[1]
  var p = useState(-1)
  var m = Module_10.a(p, 2)
  var g = m[0]
  var _ = m[1]
  var v = useState(0)
  var b = Module_10.a(v, 2)
  var y = b[0]
  var E = b[1]
  function O(e) {
    var /* [auto-meaningful-name] */e$target = e.target
    if (e$target instanceof HTMLInputElement) {
      e$target.select()
    }
  }
  function w(e, t) {
    s.current = 2 * e + t
  }
  function C(e, t) {
    u[e].key = t
    e$onChange(n, u)
  }
  function T(e, t) {
    u[e].value = t
    e$onChange(n, u)
  }
  function A(e) {
    u.splice(e, 1)
    e$onChange(n, u)
  }
  useEffect(function () {
    d(i || [])
  }, [i])
  useEffect(function () {
    var e = 2 * g
    var t = document.querySelector(".".concat("HTTP_HEADER_KEY_VALUE_INPUT_SERIAL_" + e, " input"))
    if (t instanceof HTMLInputElement) {
      s.current = e
      Module_807.a(t, false)
    }
  }, [g])
  return React.createElement("div", {
    className: Classnames(Module_208.formItemWrapper, Module_208.httpHeader)
  }, React.createElement("div", {
    className: Module_208.title
  }, React.createElement("div", null, useIntl$formatMessage({
    id: "HttpClientWidget.header"
  }))), React.createElement("div", {
    className: Module_208.list
  }, React.createElement("div", {
    className: Module_208.listHeader
  }, React.createElement("div", {
    className: Module_208.column1
  }, useIntl$formatMessage({
    id: "key"
  })), React.createElement("div", {
    className: Module_208.column2
  }, useIntl$formatMessage({
    id: "value"
  })), React.createElement("div", {
    className: Module_208.column3
  })), React.createElement("div", {
    className: Module_208.itemWrapper,
    onKeyDown: function (e) {
      var /* [auto-meaningful-name] */e$target = e.target
      var /* [auto-meaningful-name] */s$current = s.current
      if (e$target instanceof HTMLInputElement && s$current > -1 && e$target.selectionEnd === e$target.selectionStart) {
        var /* [auto-meaningful-name] */e$keyCode = e.keyCode
        var o = s$current
        var i = true
        if (38 === e$keyCode) {
          o -= 2
        } else {
          if (40 === e$keyCode) {
            o += 2
          } else {
            if (37 === e$keyCode && 0 === e$target.selectionStart) {
              o -= 1
              i = false
            } else {
              if (39 === e$keyCode && e$target.selectionEnd === e$target.value.length) {
                o += 1
              }
            }
          }
        }
        if (s$current !== o) {
          var a = document.querySelector(".".concat("HTTP_HEADER_KEY_VALUE_INPUT_SERIAL_" + o, " input"))
          if (a && a instanceof HTMLInputElement) {
            s.current = o
            Module_807.a(a, i)
          }
        }
      }
    }
  }, i && i.length > 0 && React.createElement(Module_557.a, {
    width: "auto",
    height: 44 * (i.length > 5 ? 5 : i.length),
    itemCount: i.length,
    renderItem: function (e) {
      var /* [auto-meaningful-name] */e$index = e.index
      var /* [auto-meaningful-name] */e$style = e.style
      return React.createElement("div", {
        className: Module_208.listItem,
        key: e$index,
        style: e$style
      }, React.createElement("div", {
        className: Module_208.column1
      }, React.createElement(Src_shared_ui_components_index.k, {
        type: "text",
        isTrimmed: true,
        className: Classnames(Module_208.listInput, "HTTP_HEADER_KEY_VALUE_INPUT_SERIAL_" + 2 * e$index),
        maxLength: 100,
        onClick: O,
        defaultValue: i[e$index].key,
        onFocus: w.bind(null, e$index, 0),
        onBlur: C.bind(null, e$index),
        dependency: i[e$index].key
      })), React.createElement("div", {
        className: Module_208.column2
      }, React.createElement(Src_shared_ui_components_index.k, {
        type: "text",
        className: Classnames(Module_208.listInput, "HTTP_HEADER_KEY_VALUE_INPUT_SERIAL_" + (2 * e$index + 1)),
        maxLength: 3e3,
        isTrimmed: true,
        onClick: O,
        defaultValue: i[e$index].value,
        onFocus: w.bind(null, e$index, 1),
        onBlur: T.bind(null, e$index),
        dependency: i[e$index].value
      })), React.createElement("div", {
        className: Classnames(Module_208.inputClose, Module_208.column3),
        onClick: A.bind(null, e$index)
      }, React.createElement(Src_shared_ui_components_index.j, {
        type: "icon-close"
      })))
    },
    scrollToIndex: y,
    itemSize: 44,
    className: "VirtualList"
  }))), React.createElement("div", {
    className: Module_208.addBtnBox
  }, React.createElement(Src_shared_ui_components_index.d, {
    className: Module_208.addBtn,
    onClick: function () {
      u.push({
        key: "",
        value: ""
      })
      e$onChange(n, u)
      _(u.length - 1)
      E(u.length - 1)
    }
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-add"
  }))))
})
var iw = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "params" : e$keyName
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var i = e$getValue(n)
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var s = useRef(-1)
  var c = useState([])
  var l = Module_10.a(c, 2)
  var u = l[0]
  var d = l[1]
  var p = useState(-1)
  var m = Module_10.a(p, 2)
  var g = m[0]
  var _ = m[1]
  var v = useState(0)
  var b = Module_10.a(v, 2)
  var y = b[0]
  var E = b[1]
  function O(e) {
    var /* [auto-meaningful-name] */e$target = e.target
    if (e$target instanceof HTMLInputElement) {
      e$target.select()
    }
  }
  function w(e, t) {
    s.current = 2 * e + t
  }
  function C(e, t) {
    u[e].key = t
    e$onChange(n, u)
  }
  function T(e, t) {
    u[e].value = t
    e$onChange(n, u)
  }
  function A(e) {
    u.splice(e, 1)
    e$onChange(n, u)
  }
  useEffect(function () {
    d(i || [])
  }, [i])
  useEffect(function () {
    var e = 2 * g
    var t = document.querySelector(".".concat("HTTP_PARAM_KEY_VALUE_INPUT_SERIAL_" + e, " input"))
    if (t instanceof HTMLInputElement) {
      s.current = e
      Module_807.a(t, false)
    }
  }, [g])
  return React.createElement("div", {
    className: Classnames(Module_208.formItemWrapper, Module_208.httpParams)
  }, React.createElement("div", {
    className: Module_208.title
  }, React.createElement("div", null, useIntl$formatMessage({
    id: "HttpClientWidget.params"
  }))), React.createElement("div", {
    className: Module_208.list
  }, React.createElement("div", {
    className: Module_208.listHeader
  }, React.createElement("div", {
    className: Module_208.column1
  }, useIntl$formatMessage({
    id: "key"
  })), React.createElement("div", {
    className: Module_208.column2
  }, useIntl$formatMessage({
    id: "value"
  })), React.createElement("div", {
    className: Module_208.column3
  })), React.createElement("div", {
    className: Module_208.itemWrapper,
    onKeyDown: function (e) {
      var /* [auto-meaningful-name] */e$target = e.target
      var /* [auto-meaningful-name] */s$current = s.current
      if (e$target instanceof HTMLInputElement && s$current > -1 && e$target.selectionEnd === e$target.selectionStart) {
        var /* [auto-meaningful-name] */e$keyCode = e.keyCode
        var o = s$current
        var i = true
        if (38 === e$keyCode) {
          o -= 2
        } else {
          if (40 === e$keyCode) {
            o += 2
          } else {
            if (37 === e$keyCode && 0 === e$target.selectionStart) {
              o -= 1
              i = false
            } else {
              if (39 === e$keyCode && e$target.selectionEnd === e$target.value.length) {
                o += 1
              }
            }
          }
        }
        if (s$current !== o) {
          var a = document.querySelector(".".concat("HTTP_PARAM_KEY_VALUE_INPUT_SERIAL_" + o, " input"))
          if (a && a instanceof HTMLInputElement) {
            s.current = o
            Module_807.a(a, i)
          }
        }
      }
    }
  }, i && i.length > 0 && React.createElement(Module_557.a, {
    width: "auto",
    height: 44 * (i.length > 5 ? 5 : i.length),
    itemCount: i.length,
    renderItem: function (e) {
      var /* [auto-meaningful-name] */e$index = e.index
      var /* [auto-meaningful-name] */e$style = e.style
      return React.createElement("div", {
        className: Module_208.listItem,
        key: e$index,
        style: e$style
      }, React.createElement("div", {
        className: Module_208.column1
      }, React.createElement(Src_shared_ui_components_index.k, {
        type: "text",
        isTrimmed: true,
        className: Classnames(Module_208.listInput, "HTTP_PARAM_KEY_VALUE_INPUT_SERIAL_" + 2 * e$index),
        maxLength: 100,
        onClick: O,
        defaultValue: i[e$index].key,
        onFocus: w.bind(null, e$index, 0),
        onBlur: C.bind(null, e$index),
        dependency: i[e$index].key
      })), React.createElement("div", {
        className: Module_208.column2
      }, React.createElement(Src_shared_ui_components_index.k, {
        type: "text",
        className: Classnames(Module_208.listInput, "HTTP_PARAM_KEY_VALUE_INPUT_SERIAL_" + (2 * e$index + 1)),
        maxLength: 3e3,
        isTrimmed: true,
        onClick: O,
        defaultValue: i[e$index].value,
        onFocus: w.bind(null, e$index, 1),
        onBlur: T.bind(null, e$index),
        dependency: i[e$index].value
      })), React.createElement("div", {
        className: Classnames(Module_208.inputClose, Module_208.column3),
        onClick: A.bind(null, e$index)
      }, React.createElement(Src_shared_ui_components_index.j, {
        type: "icon-close"
      })))
    },
    scrollToIndex: y,
    itemSize: 44,
    className: "VirtualList"
  }))), React.createElement("div", {
    className: Module_208.addBtnBox
  }, React.createElement(Src_shared_ui_components_index.d, {
    className: Module_208.addBtn,
    onClick: function () {
      u.push({
        key: "",
        value: ""
      })
      e$onChange(n, u)
      _(u.length - 1)
      E(u.length - 1)
    }
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-add"
  }))))
})
export { ow }
export { iw }
