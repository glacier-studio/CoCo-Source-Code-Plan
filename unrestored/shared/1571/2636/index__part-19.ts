/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-19
 */

"use strict"

import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useIntl } from /* 710 */"react-intl"
import * as /* [auto-meaningful-name] */Module_188 from /* 188 */"./188"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_931 from /* 931 */"./931"
import /* [auto-meaningful-name] */Module_9311 from /* 931 */"./931"
var cn = memo(function (e) {
  var /* [auto-meaningful-name] */e$networkErrorVisible = e.networkErrorVisible
  var /* [auto-meaningful-name] */e$title = e.title
  var o = undefined === e$title ? "" : e$title
  var /* [auto-meaningful-name] */e$showCloseButton = e.showCloseButton
  var a = undefined !== e$showCloseButton && e$showCloseButton
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$onRetry = e.onRetry
  var /* [auto-meaningful-name] */e$onCancelRetry = e.onCancelRetry
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  return React.createElement(Src_shared_ui_components_index.f, {
    title: o,
    className: Classnames(e$className, Module_9311.networkDialog),
    visible: e$networkErrorVisible,
    showCloseButton: a,
    onClose: function () {
      return e$onCancelRetry && e$onCancelRetry()
    },
    footer: React.createElement("div", {
      className: Module_9311.networkFooterWrapper
    }, React.createElement(Src_shared_ui_components_index.d, {
      onClick: function () {
        if (e$onCancelRetry) {
          e$onCancelRetry()
        }
      }
    }, useIntl$formatMessage({
      id: "cancel"
    })), React.createElement(Src_shared_ui_components_index.d, {
      onClick: e$onRetry,
      type: "primary"
    }, useIntl$formatMessage({
      id: "retry"
    })))
  }, e$networkErrorVisible && React.createElement(Module_188.a, null, React.createElement(Module_188.b, {
    keys: "enter",
    callback: e$onRetry
  })), React.createElement("div", {
    className: Module_9311.networkContent
  }, React.createElement("img", {
    src: require(/* 1191 */"./1191"),
    alt: ""
  }), React.createElement("div", {
    className: Module_9311.networkText
  }, e$children)))
})
export { cn }
