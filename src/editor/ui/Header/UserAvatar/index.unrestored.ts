/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-10
 */

"use strict"

import { Ve } from "../../../../../unrestored/shared/1571/2636/index__part-9"
var Ye
import * as /* [auto-meaningful-name] */Module_141 from /* 141 */"../../../../../unrestored/shared/1571/2636/141/index"
import * as /* [auto-meaningful-name] */Shared_tools_index from /* 15 */"../../../../shared/tools/index"
import * as /* [auto-meaningful-name] */Redux_common_actions from /* 2 */"../../../redux/common/actions"
import * as /* [auto-meaningful-name] */Shared_ui_components_index from /* 13 */"../../../../shared/ui/components/index"
import { useIntl } from /* 710 */"react-intl"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"../../../../../unrestored/shared/1571/2636/7"
import /* [auto-meaningful-name] */RegeneratorRuntime from /* 1 */"regenerator-runtime"
import { useDispatch, useSelector } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_1051 from /* 1051 */"../../../../../unrestored/shared/1571/2636/1051"
import /* [auto-meaningful-name] */Module_10511 from /* 1051 */"../../../../../unrestored/shared/1571/2636/1051"
!function (e) {
  e.LOGOUT = "LOGOUT"
  e.ACCOUNT_SETTING = "ACCOUNT_SETTING"
  e.USER_AGREEMENT = "USER_AGREEMENT"
}(Ye || (Ye = {}))
var Qe = [
  {
    label: "用户协议",
    link: "https://static-platform.codemao.cn/926/protocols/7KeVbBdw_userserviceProtocol.html"
  }, {
    label: "隐私协议",
    link: "https://static-platform.codemao.cn/926/protocols/7KeVbBdw_privacyProtocol.html"
  }, {
    label: "儿童隐私保护协议",
    link: "https://static-platform.codemao.cn/926/protocols/7KeVbBdw_childrenPrivacyProtectProtocol.html"
  }, {
    label: "个人信息保护政策摘要",
    link: "https://static-platform.codemao.cn/926/protocols/7KeVbBdw_informationProtectionPolicySummary.html"
  }, {
    label: "个人信息收集清单",
    link: "https://static-platform.codemao.cn/926/protocols/7KeVbBdw_informationCollectionList.html"
  }, {
    label: "个人信息共享清单",
    link: "https://static-platform.codemao.cn/926/protocols/7KeVbBdw_informationSharingList.html"
  }
]
var Ze = memo(function (e) {
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var n = useDispatch()
  var r = useSelector(function (e) {
    return e.common.userInfo
  })
  var o = function () {
    var e = Module_7.a(RegeneratorRuntime.mark(function e(t) {
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              e.t0 = t
              e.next = e.t0 === Ye.LOGOUT ? 3 : e.t0 === Ye.ACCOUNT_SETTING ? 14 : 16
              break
            case 3:
              e.prev = 3
              e.next = 6
              return Ve()
            case 6:
              e.next = 8
              return n(Redux_common_actions.wg(null))
            case 8:
              e.next = 13
              break
            case 10:
              e.prev = 10
              e.t1 = e.catch(3)
              console.error(e.t1)
            case 13:
              return e.abrupt("break", 16)
            case 14:
              window.open(Shared_tools_index.D(), "_blank")
              return e.abrupt("break", 16)
            case 16:
            case "end":
              return e.stop()
          }
        }
      }, e, null, [[3, 10]])
    }))
    return function (t) {
      return e.apply(this, arguments)
    }
  }()
  var i = React.createElement(Shared_ui_components_index.l, null, Qe.map(function (e, t) {
    return React.createElement(Shared_ui_components_index.m, {
      key: t
    }, React.createElement("div", {
      onClick: function () {
        return window.open(e.link, "_blank")
      }
    }, e.label))
  }))
  return r ? React.createElement("div", {
    className: Module_10511.wrapper
  }, React.createElement(Shared_ui_components_index.g, {
    overlay: React.createElement(Shared_ui_components_index.l, {
      onClick: o
    }, React.createElement(Shared_ui_components_index.m, {
      value: Ye.ACCOUNT_SETTING
    }, React.createElement("div", null, useIntl$formatMessage({
      id: "accountSetting"
    }))), React.createElement(Shared_ui_components_index.y, {
      subMenu: i
    }, React.createElement("div", null, useIntl$formatMessage({
      id: "serviceAgreement"
    }))), React.createElement(Shared_ui_components_index.m, {
      value: Ye.LOGOUT
    }, React.createElement("div", null, useIntl$formatMessage({
      id: "logout"
    }))))
  }, React.createElement("div", {
    className: Module_10511.image,
    style: {
      backgroundImage: "url(".concat(r.avatar_url, ")")
    }
  }))) : React.createElement("div", {
    className: Module_10511.loginButton,
    onClick: function () {
      n(Redux_common_actions.Ch())
      Module_141.a("LoginButtonClick")
    }
  }, useIntl$formatMessage({
    id: "login"
  }))
})
export { Ze }
