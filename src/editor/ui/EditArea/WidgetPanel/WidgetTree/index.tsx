/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-89
 */

import { Mv } from "../../../../../../unrestored/shared/1571/2636/index__part-88"
import * as /* [auto-meaningful-name] */Shared_ui_components_Iconfont_index from "../../../../../shared/ui/components/Iconfont/index"
import * as /* [auto-meaningful-name] */Module_49 from /* 49 */"../../../../../../unrestored/shared/1571/2636/49"
import * as /* [auto-meaningful-name] */Module_238 from /* 238 */"../../../../../../unrestored/shared/1571/2636/238"
import * as BuiltInWidgetTypes from "../../../../widget/built-in/types"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"../../../../../../unrestored/shared/1571/2636/9"
import * as /* [auto-meaningful-name] */Module_26 from /* 26 */"../../../../../../unrestored/shared/1571/2636/26/index"
import * as /* [auto-meaningful-name] */Module_190 from /* 190 */"../../../../../../unrestored/shared/1571/2636/190"
import * as /* [auto-meaningful-name] */Shared_tools from "../../../../../shared/tools"
import * as /* [auto-meaningful-name] */Module_1213 from /* 1213 */"../../../../../../unrestored/shared/1571/2636/1213"
import * as /* [auto-meaningful-name] */Module_18 from /* 18 */"../../../../../../unrestored/shared/1571/2636/18"
import * as CommonActions from "../../../../redux/common/actions"
import { asyncCopyWidgetToScreenAction, asyncDeleteProjectWidgetAction, openConfirmDialogAction } from "../../../../redux/common/actions"
import * as Components from "../../../../../shared/ui/components/index"
import * as /* [auto-meaningful-name] */Module_25 from /* 25 */"../../../../../../unrestored/shared/1571/2636/25/index"
import * as /* [auto-meaningful-name] */Module_11 from /* 11 */"../../../../../../unrestored/shared/1571/2636/11"
import classNames from "classnames"
import { useIntl } from "react-intl"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"../../../../../../unrestored/shared/1571/2636/10/index"
import { useSelector, useDispatch } from "react-redux"
import /* [auto-meaningful-name] */React from "react"
import { memo, useRef, useState, useEffect } from "react"
import styles from "./styles.module.css"

const WidgetListItem = memo(function (e) {
  var t
  var n = e.id
  var /* [auto-meaningful-name] */e$type = e.type
  var /* [auto-meaningful-name] */e$title = e.title
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$selected = e.selected
  var /* [auto-meaningful-name] */e$onDelete = e.onDelete
  var /* [auto-meaningful-name] */e$onSelect = e.onSelect
  var /* [auto-meaningful-name] */e$toggleAttributeVisible = e.toggleAttributeVisible
  var /* [auto-meaningful-name] */e$onCopyToCurrentScreen = e.onCopyToCurrentScreen
  var /* [auto-meaningful-name] */e$onHide = e.onHide
  var /* [auto-meaningful-name] */e$onShow = e.onShow
  var /* [auto-meaningful-name] */e$icon = e.icon
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$isChildren = e.isChildren
  var /* [auto-meaningful-name] */e$isLast = e.isLast
  var /* [auto-meaningful-name] */e$className = e.className
  var E = undefined === e$className ? "" : e$className
  var /* [auto-meaningful-name] */e$readonly = e.readonly
  var w = undefined !== e$readonly && e$readonly
  var /* [auto-meaningful-name] */e$isInvisibleWidget = e.isInvisibleWidget
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var A = useRef(null)
  var j = useSelector(function (e) {
    return e.block.flyoutVisible
  })
  var R = useState(true)
  var x = Module_10.a(R, 2)
  var D = x[0]
  var M = x[1]
  var L = useState(false)
  var P = Module_10.a(L, 2)
  var B = P[0]
  var F = P[1]
  useEffect(function () {
    var e = function e() {
      F(false)
      document.removeEventListener("click", e, true)
      document.removeEventListener("contextmenu", e, true)
    }
    if (B) {
      document.addEventListener("click", e, true)
      document.addEventListener("contextmenu", e, true)
    }
    return function () {
      document.removeEventListener("click", e, true)
      document.removeEventListener("contextmenu", e, true)
    }
  }, [B])
  useEffect(function () {
    if (e$selected && A.current) {
      A.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      })
    }
  }, [e$selected])
  var G = function (e) {
    e.stopPropagation()
    e$onDelete(n)
  }
  var W = function () {
    e$onCopyToCurrentScreen(n)
  }
  return <div className={classNames(styles.itemWrapper, E)}>
    {<Module_1213.a
      placement="bottomLeft"
      trigger="hover"
      onVisibleChange={function (e) {
        if (e) {
          F(false)
        }
      }}
      visible={B}
      arrowPointAtCenter={true}
      overlayClassName="popoverOverlay"
      content={function () {
        return <div
          className={styles.popoverWrapper}
          onContextMenu={function (e) {
            return e.preventDefault()
          }}
        >
          {!e$isInvisibleWidget && <div
            className={styles.menuItem}
            onMouseDown={W}
          >
            {useIntl$formatMessage({
              id: "copyAndPaste"
            })}
          </div>}
          {<div
            className={classNames(styles.menuItem, styles.delete)}
            onMouseDown={G}
          >
            {useIntl$formatMessage({
              id: "delete"
            })}
          </div>}
        </div>
      }}
    >
      {<div
        ref={A}
        className={classNames(styles.item, (t = {}, Module_11.a(t, styles.selected, e$selected && j), Module_11.a(t, styles.selectedLight, e$selected && !j), Module_11.a(t, styles.children, e$isChildren), Module_11.a(t, styles.parent, !!e$children), Module_11.a(t, styles.expanded, D), Module_11.a(t, styles.notLast, !e$isLast && e$isChildren), t))}
        onContextMenu={function (e) {
          e.preventDefault()
          if (!(w || e$type !== BuiltInWidgetTypes.c && e$type !== BuiltInWidgetTypes.a && e$isChildren)) {
            F(true)
          }
        }}
        onClick={function () {
          e$onSelect(n)
        }}
      >
        {<div
          className={styles.left}
        >
          {<span
            className={styles.foldIconContainer}
            onClick={function (e) {
              M(!D)
              e.stopPropagation()
            }}
          >
            {<Shared_ui_components_Iconfont_index.a
              type="icon-fold-left"
              className={styles.foldIcon}
            />}
          </span>}
          {Shared_tools.X(e$icon) ? <img
            className={classNames(styles.widgetIcon, styles.widgetUrlIcon)}
            src={e$icon}
            alt={e$title}
            draggable={false}
          /> : <Shared_ui_components_Iconfont_index.a
            type={e$icon}
            className={styles.widgetIcon}
          />}
          {<span
            className={classNames(styles.label, !e$visible && styles.labelGray)}
          >
            {e$title}
          </span>}
        </div>}
        {<div
          className={styles.right}
        >
          {!e$isInvisibleWidget && e$type !== BuiltInWidgetTypes.c && <div
            onClick={function (e) {
              e.stopPropagation()
              if (!e$visible) {
                e$onShow(n)
              } else {
                e$onHide(n)
              }
            }}
            className={classNames(styles.controlIcon, styles.seeIcon)}
          >
            {<Shared_ui_components_Iconfont_index.a
              type={e$visible ? "icon-see" : "icon-see-disable"}
            />}
          </div>}
          {<div
            onClick={function (e) {
              e.stopPropagation()
              e$toggleAttributeVisible(n)
            }}
            className={styles.controlIcon}
          >
            {<Shared_ui_components_Iconfont_index.a
              type="icon-attribute"
            />}
          </div>}
        </div>}
      </div>}
    </Module_1213.a>}
    {D && e$children}
  </div>
})

interface IRenderWidgetListOptions {
  parentId?: string
  isGlobalWidget?: boolean
  isInvisibleWidget?: boolean
  isDragAndDeleteDisabled?: boolean
}

export const WidgetTree = memo(() => {

  const { formatMessage } = useIntl()
  const dispatch = useDispatch()

  var o = useRef()
  const editAreaUpdatedAt = useSelector((state) => state.common.editAreaUpdatedAt)
  const widgetAttributeVisible = useSelector((state) => state.common.widgetAttributeVisible)
  const selectedWidgetId = useSelector((state) => state.project.selectedWidgetId)
  const globalWidgetIds = useSelector((state) => state.project.globalWidgetIds)
  const flyoutVisible = useSelector((state) => state.block.flyoutVisible)
  const currentScreen = Module_238.d()
  const [isFold, setIsFold] = useState(false)
  const [y, E] = useState(false)
  const [C, T] = useState(false)
  const [R, D] = useState(false)
  const readonly = useSelector((state) => state.uiConfig.widgetEditor) === Module_18.j.ReadOnly

  if (!currentScreen) {
    return null
  }

  function L(e) {
    var t
    var n
    dispatch(CommonActions.ug(e))
    if (selectedWidgetId === e && widgetAttributeVisible) {
      dispatch(CommonActions.fj(false))
    } else {
      if (selectedWidgetId === e && flyoutVisible) {
        Module_26.g.setSelectedItem()
        if (!(null === (t = Module_26.g.getToolbox()) || undefined === t)) {
          t.flyout.hide()
        }
      } else {
        Module_26.g.setSelectedItem(null === (n = Module_26.g.getToolbox()) || undefined === n ? undefined : n.find_node_by_name(e))
      }
    }
  }

  function P(e) {
    var t
    var n
    if (!(dispatch(CommonActions.ug(e)), selectedWidgetId === e && flyoutVisible)) {
      Module_26.g.setSelectedItem(null === (t = Module_26.g.getToolbox()) || undefined === t ? undefined : t.find_node_by_name(e))
    }
    if (selectedWidgetId === e && widgetAttributeVisible) {
      dispatch(CommonActions.fj(false))
      if (!(null === (n = Module_26.g.getToolbox()) || undefined === n)) {
        n.refresh_selection()
      }
    } else {
      dispatch(CommonActions.fj(true))
    }
  }

  function B(e) {
    dispatch(CommonActions.Lg(e, "visible", true, true, true))
  }

  function F(e) {
    dispatch(CommonActions.Lg(e, "visible", false, true, true))
  }

  function G(e) {
    dispatch(asyncCopyWidgetToScreenAction(Module_9.w(e)))
  }

  function W(e) {
    var t = Module_9.Bb(e)
    if (t) {
      var i = Module_9.Fb(t.id || "")
      var a = formatMessage({
        id: "deleteWidget"
      }) + "“" + Module_190.f(i, 10) + "”?"
      if (t.type === BuiltInWidgetTypes.h) {
        o.current = Module_9.Bb(e)
        return void dispatch(openConfirmDialogAction({
          onConfirm: H,
          onClose: V,
          allowText: formatMessage({
            id: "delete"
          }),
          isDangerous: true,
          title: a,
          content: formatMessage({
            id: "cloudDB.DeleteWidgetsTips"
          })
        }))
      }
      var s = Module_26.z.checkFieldValueIsSelected("WIDGET_ID", e)
      var c = Module_26.z.checkSomeFieldValueIsSelected("WIDGET_ID", Module_9.U(e))
      if (s || c) {
        o.current = Module_9.Bb(e)
        dispatch(openConfirmDialogAction({
          onConfirm: H,
          onClose: V,
          allowText: formatMessage({
            id: "delete"
          }),
          isDangerous: true,
          title: a,
          content: formatMessage({
            id: c ? "deleteParentWidgetTips" : "deleteWidgetTips"
          })
        }))
      } else {
        dispatch(asyncDeleteProjectWidgetAction(e, currentScreen.id))
        o.current = undefined
      }
    }
  }

  function U(e) {
    var t
    var n
    var o = e
    dispatch(CommonActions.ug(o))
    if (selectedWidgetId === o && flyoutVisible) {
      Module_26.g.setSelectedItem()
      if (!(null === (t = Module_26.g.getToolbox()) || undefined === t)) {
        t.flyout.hide()
      }
    } else {
      Module_26.g.setSelectedItem(null === (n = Module_26.g.getToolbox()) || undefined === n ? undefined : n.find_node_by_name(o))
    }
  }

  function H() {
    var t = o?.current.id
    if (t) {
      dispatch(asyncDeleteProjectWidgetAction(t, currentScreen.id))
    }
  }

  function V() {
    o.current = undefined
  }

  const currentScreenWidgets = []
  const currentScreenWidgetIds: string[] = []
  const currentScreenAnyWidgets = []
  const currentScreenAnyWidgetIds: string[] = []
  const currentScreenWidgetsMap = new Map()

  currentScreen.widgetIds.forEach((id) => {
    const types = Module_9.Bb(id)
    if (types) {
      if (types && !types.parentId) {
        currentScreenWidgetsMap.set(id, { widget: types })
      }
      const { type } = types
      if (types && !currentScreenAnyWidgetIds.includes(type)) {
        var o = Module_9.Db(types.type)
        if (o && o.hasAnyWidget) {
          currentScreenAnyWidgetIds.push(type)
          currentScreenAnyWidgets.push({
            type: "ANY_".concat(type),
            icon: o.icon,
            title: formatMessage({
              id: "anyWidgetAny"
            }) + formatMessage({
              id: o.title || o.previewAreaWidgetTitle
            })
          })
        }
      }
    }
  })

  currentScreenWidgetsMap.forEach((entry) => {
    if (!(
      entry.widget.type !== BuiltInWidgetTypes.CANVAS_WIDGET &&
      entry.widget.type !== BuiltInWidgetTypes.LIST_VIEWER_WIDGET &&
      entry.widget.type !== BuiltInWidgetTypes.NEW_LIST_VIEWER_WIDGET
    )) {
      entry.widget.widgetIds.forEach((widgetId) => {
        const types = Module_9.Bb(widgetId)
        if (types) {
          if (!entry.children) {
            entry.children = []
          }
          entry.children.push({
            widget: types
          })
        }
      })
    }
    currentScreenWidgets.push(entry)
    currentScreenWidgetIds.push(entry.widget.id)
  })

  const invisibleWidgets = []
  const invisibleWidgetIds = []
  currentScreen.invisibleWidgetIds?.forEach((type) => {
    const types = Module_9.Bb(type)
    if (types) {
      invisibleWidgets.push({
        widget: types
      })
      invisibleWidgetIds.push(types.id)
    }
  })

  const globalWidgets = []
  const globalWidgetIdsExceptForDatabaseWidget: string[] = []
  globalWidgetIds.forEach((type) => {
    const widget = Module_9.Bb(type)
    if (widget && widget.type !== BuiltInWidgetTypes.DATABASE_WIDGET) {
      globalWidgets.push({ widget: widget })
      globalWidgetIdsExceptForDatabaseWidget.push(widget.id)
    }
  })
  var oe
  function renderStaticWidgetList(widgets, parentId: string, options?: IRenderWidgetListOptions) {
    return <>{widgets.reverse().map(({ widget, children }, index) => <WidgetListItem
      className={parentId}
      id={widget.id}
      icon={Module_9.Db(widget.type)?.icon || ""}
      type={widget.type}
      title={Module_9.Fb(widget.id)}
      visible={widget.visible}
      readonly={readonly}
      key={widget.id}
      selected={selectedWidgetId === widget.id}
      onDelete={W}
      onHide={F}
      onSelect={L}
      onShow={B}
      onCopyToCurrentScreen={G}
      toggleAttributeVisible={P}
      isLast={index === widgets?.length - 1}
      isDragAndDeleteDisabled={options?.isDragAndDeleteDisabled}
      isInvisibleWidget={options?.isInvisibleWidget}
      isChildren={!!options?.parentId}
    >{children && renderWidgetList(children, {
        parentId: widget.id,
        isGlobalWidget: options?.isGlobalWidget,
        isInvisibleWidget: options?.isInvisibleWidget,
        isDragAndDeleteDisabled: widget.type === BuiltInWidgetTypes.LIST_VIEWER_WIDGET || widget.type === BuiltInWidgetTypes.NEW_LIST_VIEWER_WIDGET
      })}</WidgetListItem>)}</>
  }

  function renderWidgetList(widgets, options?: IRenderWidgetListOptions) {
    const parentId = options?.parentId ? "SubReactDragListViewItem" : "ReactDragListViewItem"
    const selector = `.${parentId}`
    return (
      options?.isInvisibleWidget ||
      options?.isGlobalWidget ||
      options?.isDragAndDeleteDisabled ||
      readonly
    ) ? renderStaticWidgetList(widgets, parentId, options) : (
        <Mv
          nodeSelector={selector}
          handleSelector={selector}
          onDragEnd={(fromIndex: number, toIndex: number) => {
            if (!readonly) {
              (function (fromIndex, toIndex, options) {
                if (!(fromIndex < 0 || toIndex < 0)) {
                  if (options?.parentId) {
                    var o = Module_9.Bb(null === options || undefined === options ? undefined : options.parentId)
                    var /* [auto-meaningful-name] */o$widgetIds = o.widgetIds
                    var a = o$widgetIds.length - fromIndex - 1
                    var s = o$widgetIds.length - toIndex - 1
                    var c = o$widgetIds.splice(a, 1)
                    var l = Module_10.a(c, 1)[0]
                    var d = Module_25.a(o$widgetIds)
                    d.splice(s, 0, l)
                    dispatch(CommonActions.Mg(currentScreen.id, o.id, d, true, true, true))
                  } else {
                    var /* [auto-meaningful-name] */po$oTHelper$widget
                    var f = currentScreenWidgetIds
                    var h = f.length - fromIndex - 1
                    var m = f.length - toIndex - 1
                    var g = f[h]
                    var _ = f[m]
                    const { widgetIds } = currentScreen
                    var b = widgetIds.indexOf(_)
                    var y = widgetIds.indexOf(g)
                    if (b < 0 || y < 0) {
                      return
                    }
                    widgetIds.splice(y, 1)
                    widgetIds.splice(b, 0, g)
                    dispatch(CommonActions.Bj(currentScreen.id, Module_25.a(widgetIds), null === options || undefined === options ? undefined : options.isInvisibleWidget))
                    if (!(null === (po$oTHelper$widget = Module_49.oTHelper.widget) || undefined === po$oTHelper$widget)) {
                      po$oTHelper$widget.clientOp.moveWidget(currentScreen.id, y, b)
                    }
                  }
                }
              })(fromIndex, toIndex, options)
            }
          }}
          lineClassName={styles.dragLine}
        >{renderStaticWidgetList(widgets, parentId, options)}</Mv>
      )
  }

  return <div className={styles.wrapper}>
    <div className={styles.list} data-updated-at={editAreaUpdatedAt}>
      <div className={styles.widgetCategory} onClick={() => { setIsFold(!isFold) }}>
        <span>{formatMessage({ id: "components" })}</span>
        <Components.j type="icon-fold" className={isFold ? styles.fold : styles.unFold} />
      </div>
      {!isFold && renderWidgetList(currentScreenWidgets)}
      {!isFold && <div
        className={classNames(styles.item, styles.screenItem, {
          [styles.selected]: !selectedWidgetId && flyoutVisible,
          [styles.selectedLight]: !selectedWidgetId && !flyoutVisible
        })}
        onContextMenu={(event) => event.preventDefault()}
        onClick={function () {
          var e
          var t
          dispatch(CommonActions.ug(undefined))
          if (selectedWidgetId || !widgetAttributeVisible) {
            if (!selectedWidgetId && flyoutVisible) {
              Module_26.g.setSelectedItem()
              if (!(null === (e = Module_26.g.getToolbox()) || undefined === e)) {
                e.flyout.hide()
              }
            } else {
              Module_26.g.setSelectedItem(null === (t = Module_26.g.getToolbox()) || undefined === t ? undefined : t.find_node_by_name(currentScreen.id))
            }
          } else {
            dispatch(CommonActions.fj(false))
          }
        }}
      >
        <div className={styles.left}>
          <Components.j type="icon-screen" className={styles.widgetIcon} />
          <span className={styles.label}>{currentScreen.title}</span>
        </div>
        <div
          className={styles.right}
        >
          <div
            onClick={function (e) {
              var t
              e.stopPropagation()
              dispatch(CommonActions.ug(undefined))
              Module_26.g.setSelectedItem(null === (t = Module_26.g.getToolbox()) || undefined === t ? undefined : t.find_node_by_name(currentScreen.id))
              dispatch(!selectedWidgetId && widgetAttributeVisible ? CommonActions.fj(false) : CommonActions.fj(true))
            }}
            className={classNames(styles.controlIcon, styles.attributeIcon)}
          >
            <Components.j type="icon-attribute" />
          </div>
          <div className={styles.screenBottomIcon}>
            <Components.j type="icon-screen-bottom" />
          </div>
        </div>
      </div>}
      {invisibleWidgetIds.length > 0 && <>
        <div
          className={styles.widgetCategory}
          onClick={() => { E(!y) }}
        >
          <span>{formatMessage({ id: "invisibleWidgetList" })}</span>
          <Components.j type="icon-fold" className={y ? styles.fold : styles.unFold} />
        </div>
        {!y && renderWidgetList(invisibleWidgets, { isInvisibleWidget: true })}
      </>}
      {globalWidgetIdsExceptForDatabaseWidget.length > 0 && <>
        <div
          className={styles.widgetCategory}
          onClick={() => { T(!C) }}
        >
          <span> {formatMessage({ id: "globalWidgetList" })} </span>
          <Components.j type="icon-fold" className={C ? styles.fold : styles.unFold} />
        </div>
        {!C && renderWidgetList(globalWidgets, {
          isGlobalWidget: true,
          isInvisibleWidget: true
        })}
      </>}
      {currentScreenAnyWidgets.length > 0 && <>
        <div
          className={styles.widgetCategory}
          onClick={() => { D(!R) }}
        >
          <span>{formatMessage({ id: "anyWidgetList" })}</span>
          <Components.j type="icon-fold" className={R ? styles.fold : styles.unFold} />
        </div>
        {!R && (oe = currentScreenAnyWidgets, <div
          onContextMenu={function (e) {
            return e.preventDefault()
          }}
        >
          {oe.reverse().map(function (e) {
            var t
            var /* [auto-meaningful-name] */e$type = e.type
            var /* [auto-meaningful-name] */e$icon = e.icon
            var /* [auto-meaningful-name] */e$title = e.title
            return <div
              onClick={U.bind(null, e$type)}
              key={e$type}
              className={classNames(styles.item, (t = {}, Module_11.a(t, styles.selected, selectedWidgetId === e$type && flyoutVisible), Module_11.a(t, styles.selectedLight, selectedWidgetId === e$type && !flyoutVisible), Module_11.a(t, styles.parent, false), t))}
            >
              <div className={classNames(styles.left, styles.anyWidget)}>
                {Shared_tools.X(e$icon) ? <img
                  className={classNames(styles.widgetIcon, styles.widgetUrlIcon)}
                  src={e$icon}
                  alt={e$title}
                  draggable={false}
                /> : <Components.j type={e$icon} className={styles.widgetIcon} />}
                <span className={classNames(styles.label)}>{e$title}</span>
              </div>
            </div>
          })}
        </div>)}
      </>}
    </div>
  </div>
})
