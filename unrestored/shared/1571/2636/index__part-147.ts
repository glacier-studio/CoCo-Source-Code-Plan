/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-147
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_20 from /* 20 */"./20/index"
import * as /* [auto-meaningful-name] */Src_shared_packages_Crc_blink_src_index from /* 17 */"../../../../src/shared/packages/@crc/blink/src/index"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"./9"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import * as /* [auto-meaningful-name] */Module_25 from /* 25 */"./25/index"
import { useIntl } from /* 710 */"react-intl"
import { useSelector, useDispatch } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_550 from /* 550 */"./550"
import * as /* [auto-meaningful-name] */Module_423 from /* 423 */"./423"
import /* [auto-meaningful-name] */Module_4231 from /* 423 */"./423"
var OT = memo(function () {
  var e
  var t = useSelector(function (e) {
    return e.block.dropdown
  })
  var /* [auto-meaningful-name] */t$blockInfo = t.blockInfo
  var /* [auto-meaningful-name] */t$blockInfo$sourceBlockId = t$blockInfo.sourceBlockId
  var /* [auto-meaningful-name] */t$blockInfo$fieldName = t$blockInfo.fieldName
  var /* [auto-meaningful-name] */t$options = t.options
  var a = Src_shared_packages_Crc_blink_src_index.Blink.mainWorkspace.get_block_by_id(t$blockInfo$sourceBlockId)
  var s = (null === a || undefined === a ? undefined : a.get_field_value("WIDGET_ID")) || (null === a || undefined === a || null === (e = a.get_parent()) || undefined === e ? undefined : e.get_field_value("WIDGET_ID"))
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var l = useDispatch()
  if (!s) {
    console.error("actorId is null")
    return null
  }
  function u() {
    if (s) {
      l(Src_editor_redux_common_actions.Dh(s, function (e, t) {
        var n = null === a || undefined === a ? undefined : a.type
        var r = null === a || undefined === a ? undefined : a.get_parent()
        switch (n) {
          case "actor_style_input":
          case "actor_action_input":
            if (r) {
              setTimeout(function () {
                var n = Module_20.getActorActionInputField(r)
                var o = Module_20.getActorStyleInputField(r)
                if (n) {
                  if (!(null === n || undefined === n)) {
                    n.set_value(e)
                  }
                }
                if (o) {
                  if (t) {
                    if (!(null === o || undefined === o)) {
                      o.set_value(t)
                    }
                  } else {
                    if (!(null === o || undefined === o)) {
                      o.set_value(Module_9.h)
                    }
                  }
                }
              }, 0)
            }
            break
          default:
            if (!(null === a || undefined === a)) {
              a.set_field_value(e, "ACTOR_ACTION_ID")
            }
            if (t && (null === a || undefined === a ? undefined : a.get_field_value("ACTOR_STYLE_ID"))) {
              if (!(null === a || undefined === a)) {
                a.set_field_value(t, "ACTOR_STYLE_ID")
              }
            }
        }
      }))
    } else {
      console.error("actorId is null")
    }
  }
  return React.createElement(Src_shared_ui_components_index.w, {
    className: Module_4231.container,
    open: t.visible,
    value: t.value,
    onChange: function (e) {
      if ("__EMPTY_VALUE__" !== e) {
        t.setValue(e)
      }
      l(Src_editor_redux_common_actions.gh())
    }
  }, function () {
    var e = []
    switch (t$blockInfo$fieldName) {
      case "ACTOR_STYLE_ID":
        e = t$options.map(function (e, t) {
          if (!Src_shared_packages_Crc_blink_src_index.BU.base.is_old_dropdown_option(e) && "basic" === e.type) {
            var /* [auto-meaningful-name] */e$value = e.value
            var /* [auto-meaningful-name] */e$text = e.text
            if (e$value !== Module_9.h) {
              if ("DROPDOWN_ADD_BUTTON" === e$value) {
                return React.createElement(Src_shared_ui_components_index.p, {
                  value: "__EMPTY_VALUE__",
                  key: e$value
                }, React.createElement("div", {
                  className: Module_4231.addOption,
                  onClick: u
                }, React.createElement(Src_shared_ui_components_index.j, {
                  type: "icon-add"
                }), useIntl$formatMessage({
                  id: "actorAddStyle"
                })))
              }
              var o = function (e, t) {
                var n = Module_9.Bb(e)
                if (n) {
                  var /* [auto-meaningful-name] */n$attributes$actionList = n.attributes.actionList
                  var o = []
                  n$attributes$actionList.forEach(function (e) {
                    var /* [auto-meaningful-name] */e$styleList = e.styleList
                    o.push.apply(o, Module_25.a(e$styleList))
                  })
                  var i = o.find(function (e) {
                    return e.id === t
                  })
                  if (i) {
                    var /* [auto-meaningful-name] */i$source = i.source
                    return Module_9.mb(i$source)
                  }
                }
              }(s, e$value)
              return React.createElement(Src_shared_ui_components_index.p, {
                value: e$value,
                key: e$value
              }, React.createElement("span", {
                className: Module_4231.itemIndex
              }, t + 1, "."), React.createElement("div", {
                className: Module_4231.styleItem
              }, React.createElement("div", {
                className: Module_4231.imgContainer
              }, o ? React.createElement("img", {
                className: Module_4231.styleImg,
                src: o,
                alt: e$text
              }) : React.createElement("span", {
                className: Module_4231.styleEmptyImg
              })), React.createElement("span", {
                className: Module_4231.styleName
              }, e$text)))
            }
          }
        })
        break
      case "ACTOR_ACTION_ID":
        e = t$options.map(function (e) {
          if (!Src_shared_packages_Crc_blink_src_index.BU.base.is_old_dropdown_option(e) && "basic" === e.type) {
            var /* [auto-meaningful-name] */e$text = e.text
            var /* [auto-meaningful-name] */e$value = e.value
            var r = function (e, t) {
              var n = Module_9.Bb(e)
              if (n) {
                var r = n.attributes.actionList.find(function (e) {
                  return e.id === t
                })
                if (r) {
                  var o = r.styleList[0]
                  if (o) {
                    var /* [auto-meaningful-name] */o$source = o.source
                    return Module_9.mb(o$source)
                  }
                }
              }
            }(s, e$value)
            return "DROPDOWN_ADD_BUTTON" === e$value ? React.createElement(Src_shared_ui_components_index.p, {
              value: "__EMPTY_VALUE__",
              key: e$value
            }, React.createElement("div", {
              className: Module_4231.addOption,
              onClick: u
            }, React.createElement(Src_shared_ui_components_index.j, {
              type: "icon-add"
            }), useIntl$formatMessage({
              id: "ActorStyleDialog.addAction"
            }))) : React.createElement(Src_shared_ui_components_index.p, {
              value: e$value,
              key: e$value
            }, React.createElement("div", {
              className: Module_4231.actionItem
            }, React.createElement("div", {
              className: Module_4231.imgContainer
            }, r ? React.createElement("img", {
              className: Module_4231.actionImg,
              src: r,
              alt: e$text
            }) : React.createElement("span", {
              className: Module_4231.actionEmptyImg,
              style: {
                backgroundImage: "url(".concat(Module_550.a, ")")
              }
            })), React.createElement("span", {
              className: Module_4231.actionName
            }, e$text)))
          }
        })
    }
    return e
  }())
})
export { OT }
