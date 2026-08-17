/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-86
 */

import * as React from "react"

import { r, o, i, a, s, c, l, u, d, p } from "../../../../../unrestored/shared/1571/2636/index__part-0"
import { Cp } from "../../../../../unrestored/shared/1571/2636/index__part-38"
import { Lp } from "../../../../../unrestored/shared/1571/2636/index__part-40"
import { Kp } from "../../../../../unrestored/shared/1571/2636/index__part-43"
import { tf } from "../../../../../unrestored/shared/1571/2636/index__part-44"
import { uf } from "../../../../../unrestored/shared/1571/2636/index__part-46"
import { _f } from "../../../../../unrestored/shared/1571/2636/index__part-48"
import { Tf } from "../../../../../unrestored/shared/1571/2636/index__part-50"
import { xf } from "../../../../../unrestored/shared/1571/2636/index__part-53"
import { Wf } from "../../../../../unrestored/shared/1571/2636/index__part-55"
import { Jf } from "../../../../../unrestored/shared/1571/2636/index__part-58"
import { ah } from "../../../../../unrestored/shared/1571/2636/index__part-60"
import { wh } from "../../../../../unrestored/shared/1571/2636/index__part-64"
import { xh } from "../../../../../unrestored/shared/1571/2636/index__part-66"
import { zh, Xh } from "../../../../../unrestored/shared/1571/2636/index__part-68"
import { nm, im, cm } from "../../../../../unrestored/shared/1571/2636/index__part-70"
import { hm } from "../../../../../unrestored/shared/1571/2636/index__part-72"
import { ym, wm, Sm } from "../../../widget/built-in/http-client-and-timer"
import { Pm, zm, qm, eg } from "../../../../../unrestored/shared/1571/2636/index__part-75"
import { cg } from "../../../../../unrestored/shared/1571/2636/index__part-76"
import { gg } from "../../../../../unrestored/shared/1571/2636/index__part-77"
import { Og } from "../../../../../unrestored/shared/1571/2636/index__part-78"
import { c_ } from "../../../../../unrestored/shared/1571/2636/index__part-80"
import { __ } from "../../../../../unrestored/shared/1571/2636/index__part-81"
import { tv } from "../../../../../unrestored/shared/1571/2636/index__part-85"
var ev
import * as /* [auto-meaningful-name] */Module_682 from /* 682 */"../../../../../unrestored/shared/1571/2636/682"
import * as /* [auto-meaningful-name] */Module_681 from /* 681 */"../../../../../unrestored/shared/1571/2636/681"
import * as /* [auto-meaningful-name] */Module_680 from /* 680 */"../../../../../unrestored/shared/1571/2636/680"
import * as /* [auto-meaningful-name] */Module_679 from /* 679 */"../../../../../unrestored/shared/1571/2636/679"
import * as /* [auto-meaningful-name] */Module_688 from /* 688 */"../../../../../unrestored/shared/1571/2636/688"
import * as /* [auto-meaningful-name] */Module_687 from /* 687 */"../../../../../unrestored/shared/1571/2636/687"
import * as /* [auto-meaningful-name] */Module_678 from /* 678 */"../../../../../unrestored/shared/1571/2636/678"
import * as /* [auto-meaningful-name] */Module_686 from /* 686 */"../../../../../unrestored/shared/1571/2636/686"
import * as /* [auto-meaningful-name] */Module_685 from /* 685 */"../../../../../unrestored/shared/1571/2636/685/index"
import * as /* [auto-meaningful-name] */Module_684 from /* 684 */"../../../../../unrestored/shared/1571/2636/684/index"
import * as /* [auto-meaningful-name] */Module_683 from /* 683 */"../../../../../unrestored/shared/1571/2636/683"
import styles from "./styles.module.css"
import * as /* [auto-meaningful-name] */Module_53 from /* 53 */"../../../../../unrestored/shared/1571/2636/53"
import * as /* [auto-meaningful-name] */Module_238 from /* 238 */"../../../../../unrestored/shared/1571/2636/238"
import * as BuiltInWidgetTypes from "../../../widget/built-in/types"
import * as /* [auto-meaningful-name] */Shared_widget_custom_type from "../../../../shared/widget/custom/type"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"../../../../../unrestored/shared/1571/2636/9"
import * as /* [auto-meaningful-name] */Shared_widget_custom_load from "../../../../shared/widget/custom/load"
import * as /* [auto-meaningful-name] */Shared_tools from "../../../../shared/tools"
import * as /* [auto-meaningful-name] */Module_1213 from /* 1213 */"../../../../../unrestored/shared/1571/2636/1213"
import * as Actions from "../../../redux/common/actions"
import * as /* [auto-meaningful-name] */Module_11 from /* 11 */"../../../../../unrestored/shared/1571/2636/11"
import classNames from "classnames"
import { useIntl } from "react-intl"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"../../../../../unrestored/shared/1571/2636/10/index"
import * as /* [auto-meaningful-name] */Shared_ui_language from "../../../../shared/ui/language"
import { useDispatch, useSelector } from "react-redux"
import { IconFont } from "../../../../shared/ui/components/Iconfont"
import * as WidgetShop from "../../../../shared/widget/custom/shop"
import * as /* [auto-meaningful-name] */Module_542 from /* 542 */"../../../../../unrestored/shared/1571/2636/542"
var iv = [require(/* 543 */"../../../../../unrestored/shared/1571/2636/543").a, Module_542.a, "UNSAFE_EXTENSION_KANO_WAND_WIDGET"]

const ConfigItem = React.memo(({
  icon, title, type, isMallExtensionWidget, isInvisibleWidget, widgetServerId
}: {
  icon: string
  title: string
  type: string
  isMallExtensionWidget: boolean
  isInvisibleWidget: boolean
  widgetServerId?: number
}) => {
  const currentScreen = Module_238.d()
  const dispatch = useDispatch()
  const { formatMessage } = useIntl()
  const [menuVisible, setMenuVisible] = React.useState(false)
  const [bigImageVisible, setBigImageVisible] = React.useState(false)
  const [isMouseIn, setIsMouseIn] = React.useState(false)
  var R = React.useState(true)
  var x = Module_10.a(R, 2)
  var D = x[0]
  var M = x[1]
  const globalWidgetIds = useSelector((state) => state.project.globalWidgetIds)
  const language = useSelector((state) => state.common.language)

  React.useEffect(function () {
    function listener() {
      setMenuVisible(false)
      setBigImageVisible(false)
      document.removeEventListener("click", listener, true)
      document.removeEventListener("contextmenu", listener, true)
      document.removeEventListener("dragstart", listener, true)
    }
    if (menuVisible || bigImageVisible) {
      document.addEventListener("click", listener, true)
      document.addEventListener("contextmenu", listener, true)
      document.addEventListener("dragstart", listener, true)
    }
  }, [menuVisible, bigImageVisible])

  React.useEffect(function () {
    if (iv.includes(type)) {
      var e = globalWidgetIds.some((id) => id.includes(type))
      M(!e)
    }
  }, [type, globalWidgetIds])

  let hasCanvasWidget = true
  if (!(type !== BuiltInWidgetTypes.ACTOR_WIDGET && type !== BuiltInWidgetTypes.BRUSH_WIDGET || !currentScreen)) {
    hasCanvasWidget = currentScreen.widgetIds.some((id) => Module_9.Bb(id)?.type === BuiltInWidgetTypes.CANVAS_WIDGET)
  }

  const removeShopWidget = async () => {
    if (widgetServerId) {
      if (await WidgetShop.remove([widgetServerId])) {
        dispatch(Actions.showCommonToastInfoAction({
          message: formatMessage({
            id: "WidgetMall.removeSuccess"
          }),
          type: "success"
        }))
        dispatch(Actions.Kh([type]))
      } else {
        dispatch(Actions.showCommonToastInfoAction({
          message: formatMessage({
            id: "WidgetMall.removeFailure"
          })
        }))
      }
    } else {
      console.error("removeWidget error: widgetServerId is null")
    }
  }

  return (
    <Module_1213.a
      placement="rightTop"
      trigger="hover"
      onVisibleChange={(event) => {
        if (event) {
          setMenuVisible(false)
          setBigImageVisible(false)
        }
      }}
      visible={menuVisible || bigImageVisible}
      content={() =>
        menuVisible ? (
          <div className={styles.menuWrapper} onMouseDown={removeShopWidget}>
            {formatMessage({ id: "Widget.removeWidget" })}
          </div>
        ) : bigImageVisible && isMouseIn ? (
          <div className={styles.imgWrapper}>
            <div className={styles.widgetImgBig} style={{ backgroundImage: `url("${icon}")` }} />
          </div>
        ) : undefined
      }
    >
      <div
        className={classNames(styles.widgetItem, Module_11.a({}, styles.disabled, !hasCanvasWidget || !D))}
        draggable
        onMouseEnter={() => {
          if (isMallExtensionWidget && !isInvisibleWidget) {
            if (!menuVisible) {
              setIsMouseIn(true)
              ev = window.setTimeout(() => {
                setBigImageVisible(true)
              }, 2000)
            }
          }
        }}
        onMouseLeave={() => {
          if (isMallExtensionWidget && !isInvisibleWidget) {
            if (ev) {
              clearTimeout(ev)
            }
            setIsMouseIn(false)
            setBigImageVisible(false)
          }
        }}
        onContextMenu={(event) => {
          event.preventDefault()
          if (isMallExtensionWidget) {
            setIsMouseIn(false)
            setBigImageVisible(false)
            setMenuVisible(true)
          }
        }}
        onDragStart={(event) => {
          if (!hasCanvasWidget || !D) {
            var t = ""
            if (D) {
              t = formatMessage({
                id: "StageToast.addCanvasWidgetTips"
              })
            } else {
              var n
              var o = Module_9.Db(type)
              if (!o) {
                return
              }
              var i = null === (n = Shared_ui_language.c(language, o.title)) || undefined === n ? undefined : n.toString()
              t = formatMessage({
                id: "StageToast.addLimitedWidgetTips"
              }, {
                widgetTitle: i
              })
            }
            dispatch(Actions.xj(t))
            return void event.preventDefault()
          }
          if (!(type !== BuiltInWidgetTypes.a && type !== BuiltInWidgetTypes.c)) {
            dispatch(Actions.Yh(true))
          }
          var /* [auto-meaningful-name] */event$target = event.target
          var s = null === event$target || undefined === event$target ? undefined : event$target.getClientRects()[0]
          if (event$target && event$target.dataset.widgetType && s) {
            var u = event.clientX - s.x
            var d = event.clientY - s.y
            event.dataTransfer.setData("widget/dragging-offset-x", u + "")
            event.dataTransfer.setData("widget/dragging-offset-y", d + "")
            event.dataTransfer.dropEffect = "copy"
            event.dataTransfer.setData("widget/type", event$target.dataset.widgetType)
            event.dataTransfer.setData("widget/action", BuiltInWidgetTypes.r.CREATE)
          }
        }}
        onDragEnd={() => {
          if (!(type !== BuiltInWidgetTypes.ACTOR_WIDGET && type !== BuiltInWidgetTypes.BRUSH_WIDGET)) {
            dispatch(Actions.Yh(false))
          }
        }}
        data-widget-type={type}
      >
        {Shared_tools.X(icon) ? (
          isInvisibleWidget ? (
            <img className={styles.icon} src={icon} alt={title} draggable={false} />
          ) : (
            <div
              className={styles.widgetImgSmall}
              style={{ backgroundImage: `url("${icon}")` }}
            />
          )
        ) : (
          <span className={styles.icon}>
            <IconFont type={icon} />
          </span>
        )}
        <span className={styles.title}>{title}</span>
      </div>
    </Module_1213.a>
  )
})

interface ConfigItem {
  type: string
  icon: string
  previewAreaWidgetTitle: string
  title: string
  isInvisibleWidget: boolean
  widgetServerId?: number
}

export const WidgetCategoryItem = React.memo<{
  configList: ConfigItem[]
  title: string
  defaultExpanded: boolean
}>(({ configList, title, defaultExpanded }) => {
  const { formatMessage } = useIntl()
  var i = useSelector((state) => state.common.userInfo?.id)
  var a = React.useState(undefined === defaultExpanded || defaultExpanded)
  var s = Module_10.a(a, 2)
  var c = s[0]
  var l = s[1]
  var u = "newWidgetCategory_".concat(Module_53.f, "_").concat(i)
  var d = m()
  var p = !i || !d[title]
  function m() {
    var e = localStorage.getItem(u)
    return e ? JSON.parse(e) : {}
  }
  return configList.length ? (
    <div className={classNames(styles.categoryItem, Module_11.a({}, styles.expanded, c))}>
      <div
        className={classNames(styles.categoryHeader, window.innerWidth <= 1300 && styles.categoryMinHeader)}
        onClick={() => {
          l(!c)
          if (Module_53.k.includes(title) && i && !d[title]) {
            var e = m()
            e[title] = 1
            localStorage.setItem(u, JSON.stringify(e))
          }
        }}
      >
        <div className={styles.categoryTitleBox}>
          <h3 className={classNames(styles.categoryTitle)}>
            {formatMessage({ id: title })}
          </h3>
          {Module_53.k.includes(title) && p && <div className={styles.newTips}>New</div>}
        </div>
        <span className={styles.icon}>
          <IconFont type="icon-fold" />
        </span>
      </div>
      {c && (
        <div className={styles.categoryBody}>
          {configList.map((widget) => {
            const { type, icon, previewAreaWidgetTitle, title, isInvisibleWidget, widgetServerId } = widget
            return (
              !widget.isDiscard && (
                <ConfigItem
                  key={type}
                  icon={icon}
                  title={
                    previewAreaWidgetTitle
                      ? formatMessage({ id: previewAreaWidgetTitle })
                      : title
                  }
                  type={type}
                  widgetServerId={widgetServerId}
                  isMallExtensionWidget={Shared_widget_custom_type.isSafeExtensions(type)}
                  isInvisibleWidget={isInvisibleWidget}
                />
              )
            )
          })}
        </div>
      )}
    </div>
  ) : null
})

Shared_widget_custom_load.s(r)
Shared_widget_custom_load.s(o)
Shared_widget_custom_load.s(Module_680)
Shared_widget_custom_load.s(Module_682)
Shared_widget_custom_load.s(a)
Shared_widget_custom_load.s(Module_681)
Shared_widget_custom_load.s(i)
Shared_widget_custom_load.s(s)
Shared_widget_custom_load.s(c)
Shared_widget_custom_load.s(l)
Shared_widget_custom_load.s(u)
Shared_widget_custom_load.s(d)
Shared_widget_custom_load.s(p)
var cv = Shared_widget_custom_load.s(Module_679, tv)
var lv = Shared_widget_custom_load.s(Module_686)
Module_9.Nb(Module_9.j.UI, [Cp, Lp, cv, Kp, tf, uf, _f, Tf, xf, Wf, Jf, ah, lv])
Module_9.Nb(Module_9.j.STAGE, [wh, xh, zh])
var uv = Shared_widget_custom_load.s(Module_678)
var dv = Shared_widget_custom_load.s(Module_688)
Module_9.Nb(Module_9.j.MEDIA, [Xh, nm, uv, dv])
var pv = Shared_widget_custom_load.s(Module_687)
Module_9.Nb(Module_9.j.SENSOR, [im, cm, pv])
Module_9.Nb(Module_9.j.DATE, [hm, ym, wm])
var fv = Shared_widget_custom_load.s(Module_683)
var hv = Shared_widget_custom_load.s(Module_684)
var mv = Shared_widget_custom_load.s(Module_685)
Module_9.Nb(Module_9.j.NETWORK, [Sm, Pm, fv, hv, mv])
Module_9.Nb(Module_9.j.LOCAL_STORAGE, [qm, eg, gg])
Module_9.Nb(Module_9.j.CLOUD_STORAGE, [Og, zm])
Module_9.Nb(Module_9.j.CLOUD_SPACE, [c_, __])
Module_9.Nb(Module_9.j.DATABASE, [cg])
export const BuiltInWidgetList = React.memo(() => {
  var t = Module_9.Eb(Module_9.j.UI)
  var n = Module_9.Eb(Module_9.j.STAGE)
  var r = Module_9.Eb(Module_9.j.MEDIA)
  var o = Module_9.Eb(Module_9.j.DATE)
  var i = Module_9.Eb(Module_9.j.SENSOR)
  var a = Module_9.Eb(Module_9.j.LOCAL_STORAGE)
  var s = Module_9.Eb(Module_9.j.CLOUD_SPACE)
  var c = Module_9.Eb(Module_9.j.NETWORK)
  var l = Module_9.Eb(Module_9.j.SOCIAL)
  return (
    <div className={styles.scrollBasic}>
      <WidgetCategoryItem
        configList={t}
        title="WidgetList.category.ui"
        defaultExpanded
      />
      <WidgetCategoryItem
        configList={n}
        title="WidgetList.category.stage"
        defaultExpanded={false}
      />
      <WidgetCategoryItem
        configList={r}
        title="WidgetList.category.media"
        defaultExpanded={false}
      />
      <WidgetCategoryItem
        configList={o}
        title="WidgetList.category.dateTime"
        defaultExpanded={false}
      />
      <WidgetCategoryItem
        configList={i}
        title="WidgetList.category.sensor"
        defaultExpanded={false}
      />
      <WidgetCategoryItem
        configList={a}
        title="WidgetList.category.localStorage"
        defaultExpanded={false}
      />
      <WidgetCategoryItem
        configList={s}
        title="WidgetList.category.cloudSpace"
        defaultExpanded={false}
      />
      <WidgetCategoryItem
        configList={c}
        title="WidgetList.category.network"
        defaultExpanded={false}
      />
      <WidgetCategoryItem
        configList={l}
        title="WidgetList.category.social"
        defaultExpanded={false}
      />
    </div>
  )
})
