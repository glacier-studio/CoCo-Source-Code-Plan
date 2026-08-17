/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-125
 */

"use strict"

import { Sg } from "./index__part-79"
import { py } from "./index__part-102"
import * as /* [auto-meaningful-name] */Module_42 from /* 42 */"./42/index"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */Module_26 from /* 26 */"./26/index"
import * as /* [auto-meaningful-name] */Src_shared_tools_index from /* 15 */"../../../../src/shared/tools/index"
import * as /* [auto-meaningful-name] */Module_1213 from /* 1213 */"./1213"
import * as /* [auto-meaningful-name] */Module_454 from /* 454 */"./454/index"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"./6"
import * as /* [auto-meaningful-name] */Module_25 from /* 25 */"./25/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import * as /* [auto-meaningful-name] */Module_748 from /* 748 */"./748/index"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"./10/index"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"./7"
import /* [auto-meaningful-name] */RegeneratorRuntime from /* 1 */"regenerator-runtime"
import { useDispatch, useSelector } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo, useRef, useState, useEffect, useCallback, useMemo } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_186 from /* 186 */"./186"
import /* [auto-meaningful-name] */Module_1861 from /* 186 */"./186"
var /* [auto-meaningful-name] */py$Option = py.Option
var lw = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "dataSource" : e$keyName
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var i = e$getValue(n)
  var a = e$getValue("templateSlotMap")
  var s = useDispatch()
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var l = useRef(null)
  var u = useState(false)
  var d = Module_10.a(u, 2)
  var p = d[0]
  var m = d[1]
  var g = useState([])
  var v = Module_10.a(g, 2)
  var b = v[0]
  var y = v[1]
  var w = useSelector(function (e) {
    return e.project.globalWidgetIds
  })
  function C() {
    var e = []
    w.forEach(function (t) {
      var n = Module_42.g.get(t)
      if ((null === n || undefined === n ? undefined : n.type) === Src_editor_widget_builtIn_types.m) {
        e.push(n)
      }
    })
    return e
  }
  function T() {
    for (var e in a) a[e].dataBindings = ""
    if (e$onChange) {
      e$onChange("templateSlotMap", a)
    }
  }
  function A(t, o) {
    var /* [auto-meaningful-name] */o$deleteColumnIdList
    if (o.newName) {
      Module_26.m(Module_26.c.DATA_SOURCE, t, o.newName)
    }
    if (null === (o$deleteColumnIdList = o.deleteColumnIdList) || undefined === o$deleteColumnIdList ? undefined : o$deleteColumnIdList.length) {
      s(Src_editor_redux_common_actions.rg(i, o.deleteColumnIdList))
    }
    if (o.isCreateNewGrid) {
      if (e$onChange) {
        e$onChange(n, t)
      }
      T()
    }
    s(Src_editor_redux_common_actions.ug(e.widgetId))
  }
  function j() {
    return (j = Module_7.a(RegeneratorRuntime.mark(function e(t) {
      var n
      var r
      var o
      var /* [auto-meaningful-name] */e$sent
      var /* [auto-meaningful-name] */e$sent1
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (!(t && t.length > 0)) {
                e.next = 19
                break
              }
              if (n = t[0], Module_454.l(n)) {
                e.next = 6
                break
              }
              s(Src_editor_redux_common_actions.mj({
                message: useIntl$formatMessage({
                  id: "maximumGridSourceSize"
                })
              }))
              return e.abrupt("return")
            case 6:
              r = Sg(useIntl$formatMessage)
              o = C().map(function (e) {
                return e.title
              })
              e.next = 10
              return Module_454.h(n, n.name, r, o)
            case 10:
              if (e$sent = e.sent) {
                e.next = 14
                break
              }
              console.error("file import failed")
              return e.abrupt("return")
            case 14:
              e.next = 16
              return Src_editor_redux_common_actions.Nf(s, Src_editor_redux_common_actions.hg("", Src_editor_widget_builtIn_types.m, {
                x: 0,
                y: 0
              }, {
                name: e$sent.name,
                header: e$sent.header,
                data: e$sent.data
              }))
            case 16:
              e$sent1 = e.sent
              s(Src_editor_redux_common_actions.mj({
                message: useIntl$formatMessage({
                  id: "uploadGridSuccess"
                })
              }))
              s(Src_editor_redux_common_actions.sj({
                grid: Module_6.a({
                  id: e$sent1.id,
                  name: e$sent1.title
                }, e$sent1.attributes.db),
                isCreateNewGrid: true,
                onClose: A
              }))
            case 19:
            case "end":
              return e.stop()
          }
        }
      }, e)
    }))).apply(this, arguments)
  }
  function R(e, t) {
    a[e].dataBindings = t || ""
    if (e$onChange) {
      e$onChange("templateSlotMap", a)
    }
  }
  useEffect(function () {
    var e = Module_42.g.get(i)
    if ((null === e || undefined === e ? undefined : e.type) === Src_editor_widget_builtIn_types.m) {
      var /* [auto-meaningful-name] */e$attributes$db = e.attributes.db
      if (i && e) {
        var n = []
        for (var r in e$attributes$db.header) n.push([r, e$attributes$db.header[r].field])
        y(n)
      } else {
        y([])
      }
    }
  }, [i, w])
  return React.createElement("div", null, React.createElement("div", {
    className: Classnames(Module_1861.formItemWrapper, Module_1861.dataSource)
  }, React.createElement("div", {
    className: "coco-form-item coco-form-item-horizontal"
  }, React.createElement("div", {
    className: Module_1861.label
  }, useIntl$formatMessage({
    id: "ListViewerWidget.dataSource"
  })), React.createElement(py, {
    ref: l,
    allowClear: true,
    onChange: function (e) {
      if (i !== e) {
        T()
      }
      if (e$onChange) {
        e$onChange(n, e || "")
      }
    },
    value: i || undefined,
    placeholder: useIntl$formatMessage({
      id: "ListViewerWidget.dataSourcePlaceholder"
    }),
    optionLabelProp: "label",
    listHeight: 160,
    style: {
      width: "100%",
      maxWidth: "170px"
    },
    suffixIcon: React.createElement(Src_shared_ui_components_index.j, {
      type: "icon-dropdown-down"
    })
  }, C().map(function (e) {
    return React.createElement(py$Option, {
      value: e.id,
      key: e.id,
      label: e.title
    }, React.createElement("div", {
      className: Module_1861.dataSourceOptions
    }, e.title), React.createElement("span", {
      onClick: function (t) {
        return function (e, t) {
          var /* [auto-meaningful-name] */l$current
          e.stopPropagation()
          var r = Module_42.g.get(t)
          if (r && r.type === Src_editor_widget_builtIn_types.m) {
            s(Src_editor_redux_common_actions.ug(r.id))
            s(Src_editor_redux_common_actions.sj({
              grid: Module_6.a({
                id: r.id,
                name: r.title
              }, r.attributes.db),
              onClose: A
            }))
          }
          if (!(null === (l$current = l.current) || undefined === l$current)) {
            l$current.blur()
          }
        }(t, e.id)
      }
    }, React.createElement(Src_shared_ui_components_index.j, {
      type: "icon-edit"
    })))
  })), React.createElement(Module_1213.a, {
    placement: "right",
    onVisibleChange: function (e) {
      m(e)
    },
    visible: p,
    content: React.createElement("div", {
      className: Module_1861.addGridOverlay
    }, React.createElement(Src_shared_ui_components_index.l, {
      onClick: function (e) {
        switch (e) {
          case "CREATE_NEW_DATA_SOURCE":
            s(Src_editor_redux_common_actions.nj({
              title: useIntl$formatMessage({
                id: "addGridName"
              }),
              placeholder: useIntl$formatMessage({
                id: "addGridNamePlaceholder"
              }),
              onConfirm: function () {
                var e = Module_7.a(RegeneratorRuntime.mark(function e(t) {
                  var /* [auto-meaningful-name] */e$sent
                  return RegeneratorRuntime.wrap(function (e) {
                    for (;;) {
                      switch (e.prev = e.next) {
                        case 0:
                          e.next = 2
                          return Src_editor_redux_common_actions.Nf(s, Src_editor_redux_common_actions.hg("", Src_editor_widget_builtIn_types.m, {
                            x: 0,
                            y: 0
                          }, {
                            name: t
                          }))
                        case 2:
                          e$sent = e.sent
                          s(Src_editor_redux_common_actions.sj({
                            grid: Module_6.a({
                              id: e$sent.id,
                              name: e$sent.title
                            }, e$sent.attributes.db),
                            isCreateNewGrid: true,
                            onClose: A
                          }))
                        case 4:
                        case "end":
                          return e.stop()
                      }
                    }
                  }, e)
                }))
                return function (t) {
                  return e.apply(this, arguments)
                }
              }(),
              validators: [
                {
                  validator: function (e) {
                    return !C().some(function (t) {
                      return t.title === e
                    })
                  },
                  message: useIntl$formatMessage({
                    id: "gridNameRepeat"
                  })
                }
              ].concat(Module_25.a(Sg(useIntl$formatMessage)))
            }))
        }
        m(false)
      }
    }, React.createElement(Src_shared_ui_components_index.m, {
      value: "CREATE_NEW_DATA_SOURCE"
    }, React.createElement("div", {
      className: Module_1861.itemContent
    }, useIntl$formatMessage({
      id: "addGridName"
    }))), React.createElement(Src_shared_ui_components_index.m, {
      value: "IMPORT_DATA_SOURCE"
    }, React.createElement(Src_shared_ui_components_index.B, {
      onChange: function (e) {
        return j.apply(this, arguments)
      },
      accept: ".xlsx, .xls, .csv",
      className: Module_1861.itemContent
    }, useIntl$formatMessage({
      id: "ListViewerWidget.importNewSource"
    })))))
  }, React.createElement("div", {
    className: Module_1861.iconAddBox
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-add"
  }))))), i ? React.createElement("div", {
    className: Classnames(Module_1861.formItemWrapper, "dataBindings")
  }, React.createElement("div", {
    className: "coco-form-item-label"
  }, useIntl$formatMessage({
    id: "ListViewerWidget.dataBindings"
  })), Object.keys(a).reverse().map(function (e) {
    return React.createElement("div", {
      key: e,
      className: Module_1861.slotItem
    }, React.createElement("div", {
      className: Module_1861.label
    }, a[e].label), React.createElement(py, {
      allowClear: true,
      placeholder: useIntl$formatMessage({
        id: "ListViewerWidget.dataBindingsPlaceholder"
      }),
      onChange: R.bind(null, e),
      value: a[e].dataBindings || undefined,
      listHeight: 160,
      style: {
        width: "100%",
        maxWidth: "215px"
      }
    }, b.map(function (e) {
      return React.createElement(py$Option, {
        value: e[0],
        key: e[0]
      }, e[1])
    })))
  })) : null)
})
var /* [auto-meaningful-name] */py$Option1 = py.Option
var /* [auto-meaningful-name] */py$OptGroup = py.OptGroup
var pw = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "dataSource" : e$keyName
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */e$widgetId = e.widgetId
  var a = e$getValue(n)
  var s = e$getValue("templateSlotMap")
  var c = useDispatch()
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var u = useRef(null)
  var d = useState([])
  var p = Module_10.a(d, 2)
  var m = p[0]
  var g = p[1]
  var v = useState(false)
  var b = Module_10.a(v, 2)
  var y = b[0]
  var E = b[1]
  var O = useState(false)
  var w = Module_10.a(O, 2)
  var C = w[0]
  var T = w[1]
  var j = useSelector(function (e) {
    return e.project.globalWidgetIds
  })
  var R = useSelector(function (e) {
    return e.common.userInfo
  })
  var k = useSelector(function (e) {
    return e.cloudSpace.cloudTableList
  })
  var x = useSelector(function (e) {
    return e.oTState.isAuthor
  })
  useEffect(function () {
    if (a) {
      if ("string" === typeof a) {
        var e = Module_42.g.get(a)
        if (!e) {
          return void g([])
        }
        if ((null === e || undefined === e ? undefined : e.type) === Src_editor_widget_builtIn_types.G) {
          var /* [auto-meaningful-name] */e$attributes$db = e.attributes.db
          var n = []
          for (var r in e$attributes$db.header) n.push([r, e$attributes$db.header[r].field])
          g(n)
        }
      } else {
        var o = k.find(function (e) {
          return e.id === a
        })
        if (o) {
          var /* [auto-meaningful-name] */o$columns
          var s = []
          if (!(null === (o$columns = o.columns) || undefined === o$columns)) {
            o$columns.forEach(function (e) {
              return s.push([e.id, e.name])
            })
          }
          g(s)
        }
      }
    } else {
      g([])
    }
  }, [k, a, j])
  var M = useCallback(function () {
    c(Src_editor_redux_common_actions.ug(e$widgetId))
  }, [c, e$widgetId])
  var L = useCallback(function (e, t) {
    var /* [auto-meaningful-name] */u$current
    e.stopPropagation()
    if ("string" === typeof t) {
      var r = Module_42.g.get(t)
      if (r && r.type === Src_editor_widget_builtIn_types.G) {
        c(Src_editor_redux_common_actions.ug(r.id))
        c(Src_editor_redux_common_actions.zj({
          grid: Module_6.a({
            id: r.id,
            name: r.title
          }, r.attributes.db),
          onClose: M
        }))
      }
    } else {
      window.open("".concat(Src_shared_tools_index.A(), "/dashboard/table/").concat(t), "_blank")
    }
    if (!(null === (u$current = u.current) || undefined === u$current)) {
      u$current.blur()
    }
  }, [c, M])
  var P = useMemo(function () {
    var e = []
    j.forEach(function (t) {
      var n = Module_42.g.get(t)
      if ((null === n || undefined === n ? undefined : n.type) === Src_editor_widget_builtIn_types.G) {
        e.push(n)
      }
    })
    return {
      localOptions: e.map(function (e) {
        return React.createElement(py$Option1, {
          value: e.id,
          key: e.id,
          label: e.title
        }, React.createElement("div", {
          className: Module_1861.dataSourceOptions
        }, React.createElement(Src_shared_ui_components_index.j, {
          type: "icon-widget-table-data",
          className: "coco-widget-icon"
        }), e.title), React.createElement("span", {
          onClick: function (t) {
            return L(t, e.id)
          }
        }, React.createElement(Src_shared_ui_components_index.j, {
          type: "icon-turn-edit"
        })))
      }),
      cloudOptions: k.map(function (e) {
        return React.createElement(py$Option1, {
          value: e.id,
          key: e.id,
          label: e.name,
          className: "ant-select-item-hidden"
        }, React.createElement("div", {
          className: Module_1861.dataSourceOptions
        }, e.name))
      })
    }
  }, [k, j, L])
  var /* [auto-meaningful-name] */P$localOptions = P.localOptions
  var /* [auto-meaningful-name] */P$cloudOptions = P.cloudOptions
  function G(e) {
    if (a !== e) {
      W()
    }
    if ("number" === typeof e) {
      c(Src_editor_redux_common_actions.Sf(e))
      c(Src_editor_redux_common_actions.Rf(e, false))
    }
    if (e$onChange) {
      e$onChange(n, e || "")
    }
  }
  function W() {
    for (var e in s) s[e].dataBindings = ""
    if (e$onChange) {
      e$onChange("templateSlotMap", s)
    }
  }
  function U(e, t) {
    s[e].dataBindings = t || ""
    if (e$onChange) {
      e$onChange("templateSlotMap", s)
    }
  }
  var H = function () {
    E(true)
  }
  var V = function () {
    E(false)
  }
  var K = function () {
    T(true)
  }
  var q = function () {
    T(false)
  }
  var X = function () {
    c(Src_editor_redux_common_actions.Ch())
  }
  var Q = function (e, t) {
    var /* [auto-meaningful-name] */u$current
    G(e)
    if (!(null === (u$current = u.current) || undefined === u$current)) {
      u$current.blur()
    }
  }
  return React.createElement("div", null, React.createElement("div", {
    className: Classnames(Module_1861.formItemWrapper, Module_1861.dataSource)
  }, React.createElement("div", {
    className: Module_1861.itemLabel
  }, useIntl$formatMessage({
    id: "ListViewerWidget.dataSource"
  })), React.createElement(py, {
    ref: u,
    allowClear: true,
    onChange: G,
    dropdownRender: function (e) {
      return React.createElement("div", {
        className: Classnames(y || C ? "addBtnActive" : "")
      }, React.createElement("div", {
        onMouseEnter: H,
        onMouseLeave: V,
        className: Classnames(Module_1861.addDataSource),
        onClick: function () {
          var /* [auto-meaningful-name] */u$current
          if (!(null === u || undefined === u || null === (u$current = u.current) || undefined === u$current)) {
            u$current.blur()
          }
          c(Src_editor_redux_common_actions.oj({
            widgetId: e$widgetId,
            onConfirm: function (e) {
              e$onChange(n, e.id)
              W()
              if ((null === e || undefined === e ? undefined : e.type) === Src_editor_widget_builtIn_types.G) {
                c(Src_editor_redux_common_actions.zj({
                  grid: Module_6.a({
                    id: e.id,
                    name: e.title
                  }, e.attributes.db),
                  onClose: M
                }))
              }
            }
          }))
        }
      }, React.createElement("div", null, React.createElement(Src_shared_ui_components_index.j, {
        type: "icon-add",
        className: Module_1861.addIcon
      }), useIntl$formatMessage({
        id: "ListViewerWidget.createDataSource"
      }))), e, (P$localOptions.length > 0 || k.length > 0) && React.createElement("div", {
        className: Classnames(Module_1861.cloudTable, P$localOptions.length > 0 && Module_1861.showShadow),
        onMouseEnter: K,
        onMouseLeave: q
      }, React.createElement("div", null, useIntl$formatMessage({
        id: "CloudSpaceDBWidget.widgetName"
      })), x ? React.createElement(Src_shared_ui_components_index.j, {
        type: "icon-arrow-down",
        className: Module_1861.arrowIcon
      }) : React.createElement(Module_748.a, {
        placement: "bottom",
        title: useIntl$formatMessage({
          id: "ListViewerWidget.cloudTableOtTips"
        })
      }, React.createElement("div", null, React.createElement(Src_shared_ui_components_index.j, {
        type: "icon-locked",
        className: Module_1861.lockIcon
      })))), x && React.createElement("div", {
        onMouseEnter: K,
        onMouseLeave: q,
        className: Classnames(Module_1861.cloudTableList, C && Module_1861.visible)
      }, !R && React.createElement("div", {
        className: Module_1861.loginBox
      }, React.createElement(Src_shared_ui_components_index.d, {
        type: "primary",
        onClick: X
      }, useIntl$formatMessage({
        id: "cloudSpace.needLogin"
      }))), R && 0 === k.length && React.createElement("div", {
        className: Module_1861.noData
      }, "No Data"), R && k.length > 0 && React.createElement("div", {
        className: Module_1861.listBox
      }, k.map(function (e) {
        return React.createElement("div", {
          onClick: Q.bind(null, e.id, e.name),
          key: e.id,
          className: Classnames("ant-select-item", "ant-select-item-option", a === e.id && "ant-select-item-option-selected")
        }, React.createElement("div", {
          className: "ant-select-item-option-content"
        }, React.createElement("div", {
          className: Module_1861.dataSourceOptions
        }, React.createElement(Src_shared_ui_components_index.j, {
          type: "icon-widget-cloud-table",
          className: "coco-widget-icon"
        }), e.name), React.createElement("span", {
          onClick: function (t) {
            return L(t, e.id)
          }
        }, React.createElement(Src_shared_ui_components_index.j, {
          type: "icon-turn-edit"
        }))))
      }))))
    },
    value: a || undefined,
    placeholder: useIntl$formatMessage({
      id: "ListViewerWidget.dataSourcePlaceholder"
    }),
    optionLabelProp: "label",
    listHeight: 200,
    virtual: false,
    dropdownClassName: Module_1861.dataSourceSelectDropdown,
    suffixIcon: React.createElement(Src_shared_ui_components_index.j, {
      type: "icon-dropdown-down"
    })
  }, P$localOptions.length > 0 && React.createElement(py$OptGroup, {
    key: "localTableData",
    label: useIntl$formatMessage({
      id: "ListViewerWidget.localTableData"
    })
  }), P$localOptions, P$cloudOptions)), a ? React.createElement("div", {
    className: Classnames(Module_1861.formItemWrapper, "dataBindings")
  }, React.createElement("div", {
    className: "coco-form-item-label"
  }, useIntl$formatMessage({
    id: "ListViewerWidget.dataBindings"
  })), Object.keys(s).reverse().map(function (e) {
    return React.createElement("div", {
      key: e,
      className: Module_1861.slotItem
    }, React.createElement("div", {
      className: Module_1861.label
    }, s[e].label), React.createElement(py, {
      allowClear: true,
      placeholder: useIntl$formatMessage({
        id: "ListViewerWidget.dataBindingsPlaceholder"
      }),
      onChange: U.bind(null, e),
      value: s[e].dataBindings || undefined,
      listHeight: 160,
      style: {
        width: "100%",
        maxWidth: "215px"
      }
    }, m.map(function (e) {
      return React.createElement(py$Option1, {
        value: e[0],
        key: e[0]
      }, e[1])
    })))
  })) : null)
})
export { lw }
export { pw }
