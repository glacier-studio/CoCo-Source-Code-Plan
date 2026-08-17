/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：392
 */

"use strict"

export { COURSE_ICON_NAME as a }
import { memo } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */React1 from /* 0 */"react"
import { useDispatch } from /* 16 */"react-redux"
import * as /* [auto-meaningful-name] */Module_627 from /* 627 */"../627/index"
import { useIntl } from /* 710 */"react-intl"
import * as /* [auto-meaningful-name] */Module_748 from /* 748 */"../748/index"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../../src/shared/ui/components/index"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Module_516 from /* 516 */"./516"
import /* [auto-meaningful-name] */Module_5161 from /* 516 */"./516"
var /* [auto-meaningful-name] */COURSE_ICON_NAME = "COURSE_ICON_NAME"
var _b
_b = memo(function () {
  var e = useDispatch()
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  return React1.createElement(Module_748.a, {
    placement: "left",
    title: useIntl$formatMessage({
      id: "studyCourseVideo"
    }),
    trigger: ["hover"]
  }, React1.createElement("div", {
    className: Module_5161.courseMinIcon,
    onClick: function () {
      Module_627.a.show()
      e(Src_editor_redux_common_actions.ii(COURSE_ICON_NAME, false))
    }
  }, React1.createElement(Src_shared_ui_components_index.j, {
    type: "icon-video"
  }), React1.createElement("div", {
    className: Module_5161.close,
    onClick: function (t) {
      t.stopPropagation()
      Module_627.a.show()
      Module_627.a.close({
        closeAnimationPos: {
          x: 150,
          y: 30
        }
      })
      e(Src_editor_redux_common_actions.Gh(COURSE_ICON_NAME))
    }
  }, React1.createElement(Src_shared_ui_components_index.j, {
    type: "icon-close"
  }))))
})
export { _b as b }
export default COURSE_ICON_NAME
