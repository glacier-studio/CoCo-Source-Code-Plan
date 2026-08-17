/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-211
 */

"use strict"

var tP
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"./10/index"
import { useSelector, useDispatch } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo, useState, useEffect } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_385 from /* 385 */"./385"
import /* [auto-meaningful-name] */Module_3851 from /* 385 */"./385"
import * as /* [auto-meaningful-name] */Module_1209 from /* 1209 */"./1209"
import /* [auto-meaningful-name] */Module_12091 from /* 1209 */"./1209"
import * as /* [auto-meaningful-name] */Module_1535 from /* 1535 */"./1535"
import /* [auto-meaningful-name] */Module_15351 from /* 1535 */"./1535"
import * as /* [auto-meaningful-name] */Module_1536 from /* 1536 */"./1536"
import /* [auto-meaningful-name] */Module_15361 from /* 1536 */"./1536"
import * as /* [auto-meaningful-name] */Module_1537 from /* 1537 */"./1537"
import /* [auto-meaningful-name] */Module_15371 from /* 1537 */"./1537"
!function (e) {
  e[e.STEP0 = 0] = "STEP0"
  e[e.STEP1 = 1] = "STEP1"
  e[e.STEP2 = 2] = "STEP2"
  e[e.STEP3 = 3] = "STEP3"
}(tP || (tP = {}))
var _P = memo(function () {
  var e = useState(tP.STEP0)
  var t = Module_10.a(e, 2)
  var n = t[0]
  var r = t[1]
  var o = useSelector(function (e) {
    return e.common.cloudDBPublishDialogInfo
  })
  var /* [auto-meaningful-name] */o$visible = o.visible
  var /* [auto-meaningful-name] */o$type = o.type
  var /* [auto-meaningful-name] */o$callback = o.callback
  var c = "share" === o$type ? "分享" : "打包"
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var u = useDispatch()
  useEffect(function () {
    if (o$visible) {
      localStorage.setItem("cloudDBPublishGuide", "true")
    }
  }, [o$visible])
  var d = function () {
    r(tP.STEP0)
    u(Src_editor_redux_common_actions.kj(false, "", function () {}))
  }
  return React.createElement(Src_shared_ui_components_index.f, {
    visible: o$visible,
    className: Module_3851.cloudDBPublishDialog,
    onClose: d
  }, React.createElement("div", {
    className: Module_3851.container
  }, n !== tP.STEP0 && React.createElement("div", {
    className: Module_3851.jump,
    onClick: function () {
      if (o$callback) {
        o$callback()
      }
      d()
    }
  }, useIntl$formatMessage({
    id: "cloudDBPublishDialog.jump"
  })), React.createElement("div", {
    className: Module_3851.imgArea
  }, function () {
    switch (n) {
      case tP.STEP0:
        return React.createElement("img", {
          src: Module_12091,
          alt: ""
        })
      case tP.STEP1:
        return React.createElement("img", {
          src: Module_15351,
          alt: ""
        })
      case tP.STEP2:
        return React.createElement("img", {
          src: Module_15361,
          alt: ""
        })
      case tP.STEP3:
        return React.createElement("img", {
          src: Module_15371,
          alt: ""
        })
      default:
        return React.createElement("img", {
          src: Module_12091,
          alt: ""
        })
    }
  }()), React.createElement("div", {
    className: Module_3851.orderArea
  }, function () {
    if (n !== tP.STEP0) {
      return React.createElement(React.Fragment, null, React.createElement("div", {
        className: Classnames(Module_3851.round, n === tP.STEP1 && Module_3851.selected)
      }), React.createElement("div", {
        className: Classnames(Module_3851.round, n === tP.STEP2 && Module_3851.selected)
      }), React.createElement("div", {
        className: Classnames(Module_3851.round, n === tP.STEP3 && Module_3851.selected)
      }))
    }
  }()), React.createElement("div", {
    className: Module_3851.textArea
  }, function () {
    switch (n) {
      case tP.STEP0:
        return React.createElement("span", null, "恭喜你第一次", c, "了使用云数据库的作品，有一些小知识需要了解下")
      case tP.STEP1:
        return React.createElement(React.Fragment, null, React.createElement("span", null, "之前编辑器内使用的数据是"), React.createElement("span", {
          className: Module_3851.yellow
        }, "【测试数据】"))
      case tP.STEP2:
        return React.createElement(React.Fragment, null, React.createElement("div", null, c, "后会自动生成一套新的数据库，"), React.createElement("div", null, "其他小伙伴使用应用时产生的数据将存储在", React.createElement("span", {
          className: Module_3851.blue
        }, "【正式数据】"), "中"))
      case tP.STEP3:
        return React.createElement(React.Fragment, null, React.createElement("span", null, "两套数据互不干扰，你可以在"), React.createElement("span", {
          className: Module_3851.purple
        }, " 导航栏>数据管理 "), React.createElement("span", null, "中管理和修改所有数据"))
      default:
        return React.createElement("span", null)
    }
  }()), React.createElement("div", {
    className: Module_3851.btn
  }, React.createElement(Src_shared_ui_components_index.d, {
    type: "primary",
    onClick: function () {
      if (n !== tP.STEP0) {
        if (n !== tP.STEP1) {
          if (n !== tP.STEP2) {
            return n === tP.STEP3 ? (o$callback(), void d()) : undefined
          }
          r(tP.STEP3)
        } else {
          r(tP.STEP2)
        }
      } else {
        r(tP.STEP1)
      }
    }
  }, function () {
    switch (n) {
      case tP.STEP0:
        return React.createElement("span", null, useIntl$formatMessage({
          id: "cloudDBPublishDialog.know"
        }))
      case tP.STEP1:
      case tP.STEP2:
        return React.createElement("span", null, useIntl$formatMessage({
          id: "cloudDBPublishDialog.then"
        }))
      case tP.STEP3:
        return React.createElement("span", null, "去", c)
      default:
        return React.createElement("span", null)
    }
  }()))))
})
export { _P }
