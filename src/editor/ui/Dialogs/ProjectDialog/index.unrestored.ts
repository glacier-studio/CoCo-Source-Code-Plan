/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-8
 */

"use strict"

import { Re } from "./MyProject/index"
import * as /* [auto-meaningful-name] */Module_141 from /* 141 */"../../../../../unrestored/shared/1571/2636/141/index"
import /* [auto-meaningful-name] */Styles_module_css from /* 525 */"./styles.module.css"
import * as /* [auto-meaningful-name] */Module_18 from /* 18 */"../../../../../unrestored/shared/1571/2636/18"
import * as /* [auto-meaningful-name] */Redux_common_actions from /* 2 */"../../../redux/common/actions"
import * as /* [auto-meaningful-name] */Shared_ui_components_index from /* 13 */"../../../../shared/ui/components/index"
import * as /* [auto-meaningful-name] */Module_11 from /* 11 */"../../../../../unrestored/shared/1571/2636/11"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"../../../../../unrestored/shared/1571/2636/7"
import /* [auto-meaningful-name] */RegeneratorRuntime from /* 1 */"regenerator-runtime"
import { useDispatch, useSelector } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Axios from /* 129 */"axios"
import /* [auto-meaningful-name] */Axios1 from /* 129 */"axios"
import * as /* [auto-meaningful-name] */CreateProject_styles_module_css from /* 495 */"./CreateProject/styles.module.css"
import /* [auto-meaningful-name] */CreateProject_styles_module_css1 from /* 495 */"./CreateProject/styles.module.css"
var Le = memo(function (e) {
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$importProjectJson = e.importProjectJson
  var r = useDispatch()
  var o = useSelector(function (e) {
    return e.common.templateList
  })
  var i = function () {
    var e = Module_7.a(RegeneratorRuntime.mark(function e(t, o) {
      var /* [auto-meaningful-name] */e$sent
      var /* [auto-meaningful-name] */e$sent$data
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              e.next = 2
              return Axios1.get(t)
            case 2:
              if ((e$sent = e.sent).data) {
                e$sent$data = e$sent.data
                e$importProjectJson({
                  json: e$sent$data,
                  jsonFrom: Module_18.d.TEMPLATE,
                  sourceTag: Module_18.g.TEMPLATE,
                  sourceId: o
                })
              }
              r(Redux_common_actions.Xg())
              Module_141.a("TemplateClick", {
                templateName: o
              })
            case 6:
            case "end":
              return e.stop()
          }
        }
      }, e)
    }))
    return function (t, n) {
      return e.apply(this, arguments)
    }
  }()
  return e$visible ? React.createElement("div", {
    className: CreateProject_styles_module_css1.container
  }, React.createElement("div", {
    className: CreateProject_styles_module_css1.itemContainer,
    onClick: function () {
      e$importProjectJson()
      r(Redux_common_actions.Xg())
    }
  }, React.createElement("div", {
    className: Classnames(CreateProject_styles_module_css1.emptyItem, CreateProject_styles_module_css1.item)
  }, React.createElement("div", {
    className: CreateProject_styles_module_css1.emptyContent
  }, React.createElement("span", {
    className: CreateProject_styles_module_css1.iconContainer
  }, React.createElement(Shared_ui_components_index.j, {
    type: "icon-add",
    className: CreateProject_styles_module_css1.icon
  })), React.createElement("p", {
    className: CreateProject_styles_module_css1.text
  }, "创建空白作品")))), o.length > 0 && o.map(function (e) {
    return React.createElement("div", {
      className: CreateProject_styles_module_css1.itemContainer,
      key: e.id,
      onClick: function () {
        i(e.bcmUrl, e.name)
      }
    }, React.createElement("div", {
      className: Classnames(CreateProject_styles_module_css1.item),
      style: {
        backgroundImage: "url(".concat(e.image, ")")
      }
    }, React.createElement("img", {
      src: e.gif,
      alt: e.name,
      className: CreateProject_styles_module_css1.gif
    })))
  })) : null
})
var Pe = memo(function (e) {
  var /* [auto-meaningful-name] */e$importProjectJson = e.importProjectJson
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var r = useDispatch()
  var o = useSelector(function (e) {
    return e.common.projectDialog
  })
  var /* [auto-meaningful-name] */o$visible = o.visible
  var /* [auto-meaningful-name] */o$selected = o.selected
  var s = function (e) {
    r(Redux_common_actions.Ah(e))
  }
  return o$visible ? React.createElement(Shared_ui_components_index.f, {
    visible: o$visible,
    className: Styles_module_css.container,
    onClose: function () {
      r(Redux_common_actions.Xg())
    }
  }, React.createElement("div", {
    className: Styles_module_css.wrapper
  }, React.createElement("header", {
    className: Styles_module_css.header
  }, React.createElement("div", {
    className: Classnames(Styles_module_css.tabItem, Module_11.a({}, Styles_module_css.selected, o$selected === Module_18.f.CREATE_PROJECT)),
    onClick: function () {
      s(Module_18.f.CREATE_PROJECT)
    }
  }, React.createElement(Shared_ui_components_index.j, {
    type: "icon-new-project",
    className: Styles_module_css.icon
  }), useIntl$formatMessage({
    id: "projectDialog.newProject"
  })), React.createElement("div", {
    className: Classnames(Styles_module_css.tabItem, Module_11.a({}, Styles_module_css.selected, o$selected === Module_18.f.MY_PROJECT)),
    onClick: function () {
      s(Module_18.f.MY_PROJECT)
    }
  }, React.createElement(Shared_ui_components_index.j, {
    type: "icon-my-project",
    className: Styles_module_css.icon
  }), useIntl$formatMessage({
    id: "projectDialog.myProject"
  }))), React.createElement("div", {
    className: Styles_module_css.content
  }, React.createElement(Le, {
    visible: o$selected === Module_18.f.CREATE_PROJECT,
    importProjectJson: e$importProjectJson
  }), React.createElement(Re, {
    visible: o$selected === Module_18.f.MY_PROJECT,
    importProjectJson: e$importProjectJson
  })))) : null
})
export { Pe }
