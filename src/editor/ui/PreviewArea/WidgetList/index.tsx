/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-87
 */

import * as React from "react"

import { we as Empty } from "../../../../../unrestored/shared/1571/2636/index__part-6"
import { WidgetCategoryItem, BuiltInWidgetList } from "./item"
import * as /* [auto-meaningful-name] */Shared_ui_components_Iconfont_index from "../../../../shared/ui/components/Iconfont/index"
import styles from "./styles.module.css"
import * as /* [auto-meaningful-name] */Module_238 from /* 238 */"../../../../../unrestored/shared/1571/2636/238"
import * as CustomWidgetType from "../../../../shared/widget/custom/type"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"../../../../../unrestored/shared/1571/2636/9"
import * as /* [auto-meaningful-name] */Module_18 from /* 18 */"../../../../../unrestored/shared/1571/2636/18"
import * as CommonActions from "../../../redux/common/actions"
import { Button } from "../../../../shared/ui/components"
import classNames from "classnames"
import { useIntl } from "react-intl"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"../../../../../unrestored/shared/1571/2636/10/index"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"../../../../../unrestored/shared/1571/2636/7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import { useDispatch, useSelector } from "react-redux"
import /* [auto-meaningful-name] */Unrestored_shared_1571_2636_1514 from "../../../../../unrestored/shared/1571/2636/1514"

const WidgetMallButton = React.memo((props) => {

  const { formatMessage } = useIntl()
  const userInfo = useSelector((state) => state.common.userInfo)
  const dispatch = useDispatch()

  return (
    <Button
      className={styles.widgetMallBtn}
      onClick={() => {
        const e = () => {
          dispatch(CommonActions.gj(true))
        }
        if (userInfo) {
          e()
        } else {
          dispatch(CommonActions.Ch(e))
        }
      }}
    >
      <Shared_ui_components_Iconfont_index.a type="icon-shop" className={styles.shopIcon} />
      {!props.singleColumn && <span>{formatMessage({ id: "Widget.widgetMall" })}</span>}
    </Button>
  )
})

const WidgetScrollExtension = React.memo(function (e) {
  var t = useSelector(function (e) {
    return e.common.myExtensionWidgets
  })
  var n = useSelector(function (e) {
    return e.common.userInfo
  })
  var r = useDispatch()
  var o = []
  var i = []
  const a = (e) => ({
    icon: e.icon,
    title: e.widgetName,
    previewAreaWidgetTitle: "",
    type: CustomWidgetType.standardize(e.type, true),
    isInvisibleWidget: e.isInvisibleWidget,
    widgetServerId: e.id
  })
  t.forEach((e) => {
    if (e.isInvisibleWidget) {
      i.push(a(e))
    } else {
      o.push(a(e))
    }
  })
  const { formatMessage } = useIntl()
  var c = React.useState(false)
  var l = Module_10.a(c, 2)
  var u = l[0]
  var d = l[1]
  var p = React.useState(true)
  var m = Module_10.a(p, 2)
  var g = m[0]
  var v = m[1]
  var b = Module_238.c()
  const unsafeExtensions = Module_9.Eb(Module_9.j.EXTENSION).filter(function (e) {
    return !CustomWidgetType.isSafeExtensions(e.type)
  })
  React.useEffect(() => {
    const e = (() => {
      const e = Module_7.a(RegeneratorRuntime.mark(function e() {
        return RegeneratorRuntime.wrap(function (e) {
          for (;;) {
            switch (e.prev = e.next) {
              case 0:
                e.next = 2
                return CommonActions.Nf(r, CommonActions.eg())
              case 2:
                d(false)
              case 3:
              case "end":
                return e.stop()
            }
          }
        }, e)
      }))
      return function () {
        return e.apply(this, arguments)
      }
    })()
    if (n) {
      d(true)
      e()
    } else {
      r(CommonActions.Sh([]))
    }
  }, [r, n])
  React.useEffect(() => {
    if (0 === unsafeExtensions.length && 0 === o.length && 0 === i.length) {
      v(true)
    } else {
      v(false)
    }
  }, [unsafeExtensions, o, i])
  return <>
    <div className={styles.scrollExtension}>
      {!u && g && (
        <div className={styles.noExtensionWidgets}>
          <div className={styles.noExtensionWidgetsWrapper}>
            {!e.singleColumn && (
              <Empty
                type="image-text"
                text={
                  <>
                    {formatMessage({ id: "Widget.emptyTip1" })}
                    <br />
                    {formatMessage({ id: "Widget.emptyTip2" })}
                  </>
                }
              />
            )}
            <WidgetMallButton singleColumn={e.singleColumn} />
          </div>
        </div>
      )}
      {!u && (
        <>
          <WidgetCategoryItem configList={i} title="ExtensionWidget.category.function" />
          <WidgetCategoryItem configList={o} title="ExtensionWidget.category.ui" />
          <WidgetCategoryItem key={b} configList={unsafeExtensions} title="ExtensionWidget.category.extension" />
        </>
      )}
      {u && (
        <div className={styles.loading} style={{ height: "100%" }}>
          <img src={Unrestored_shared_1571_2636_1514} alt="loading" />
        </div>
      )}
    </div>
    <div className={styles.widgetMallBtnContainer}>
      {!g && <WidgetMallButton singleColumn={e.singleColumn} />}
    </div>
  </>
})

enum ETab {
  BASIC = "BASIC",
  EXTENSION = "EXTENSION"
}

export const WidgetTabContainer = React.memo(function (e) {
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var n = useSelector(function (e) {
    return e.uiConfig.widgetEditor
  }) === Module_18.j.ReadOnly
  var r = useSelector(function (e) {
    return !!e.oTState.collWorkId
  })
  var o = React.useState(ETab.BASIC)
  var i = Module_10.a(o, 2)
  var a = i[0]
  var s = i[1]
  return (
    <div
      className={classNames(styles.tabContainer, e.singleColumn ? styles.singleColumn : styles.doubleColumn, n && styles.readonly)}
    >
      <div className={styles.tabNav}>
        <div
          onClick={() => {
            s(ETab.BASIC)
          }}
          className={classNames(styles.tab, a === ETab.BASIC && styles.activeTab)}
        >
          <div>{useIntl$formatMessage({ id: "Widget.basic" })}</div>
        </div>
        <div
          onClick={() => {
            s(ETab.EXTENSION)
          }}
          className={classNames(styles.tab, a === ETab.EXTENSION && styles.activeTab)}
        >
          <div>{useIntl$formatMessage({ id: "Widget.extension" })}</div>
        </div>
      </div>
      <div className={styles.tabContent}>
        <div className={classNames(styles.tabContentBox, a !== ETab.BASIC && styles.hide)}>
          <BuiltInWidgetList isOT={r} />
        </div>
        <div className={classNames(styles.tabContentBox, a !== ETab.EXTENSION && styles.hide)}>
          <WidgetScrollExtension singleColumn={e.singleColumn} />
        </div>
      </div>
    </div>
  )
})
