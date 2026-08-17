/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1512
 */

import { memo, useRef, useState, useLayoutEffect, useEffect } from "react"
import * as React from "react"
import { useSelector, useDispatch } from "react-redux"
import classNames from "classnames"
import { useIntl } from "react-intl"
import { IconFont } from "../../../../shared/ui/components/index"
import * as CommonActions from "../../../redux/common/actions"
import { asyncCopyWidgetToScreenAction, asyncDeleteProjectWidgetAction, closeContextMenuAction, openConfirmDialogAction } from "../../../redux/common/actions"
import styles from "./styles.module.css"
import * as BuiltInWidgetTypes from "../../../widget/built-in/types"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"../../../../../unrestored/shared/1571/2636/9"
import * as /* [auto-meaningful-name] */Module_190 from /* 190 */"../../../../../unrestored/shared/1571/2636/190"
import * as /* [auto-meaningful-name] */Module_26 from /* 26 */"../../../../../unrestored/shared/1571/2636/26/index"
import * as /* [auto-meaningful-name] */Module_238 from /* 238 */"../../../../../unrestored/shared/1571/2636/238"

export const ContextMenu = memo(() => {

  var n = useRef()
  const wrapperElementRef = useRef<HTMLDivElement>(null)
  const [showsScreens, setShowsScreens] = useState(false)
  const screensElementRef = useRef<HTMLUListElement | null>(null)
  const { position, visible, widgetId } = useSelector((state) => state.project.contextMenuInfo).toJS()
  const widget = Module_9.Bb(widgetId)
  const screens = useSelector((state) => state.project.screens)
  const currentScreenId = Module_238.d()?.id

  useLayoutEffect(() => {
    const wrapperElement = wrapperElementRef.current
    if (visible && wrapperElement) {
      const { clientHeight } = wrapperElement
      const offset = window.innerHeight - (position.y + clientHeight)
      if (offset < 0) {
        position.y += offset
      }
      wrapperElement.style.top = position.y + "px"
      wrapperElement.style.left = position.x + "px"
    }
  }, [visible, position])

  const { formatMessage } = useIntl()
  const dispatch = useDispatch()

  useEffect(() => {
    function handleMouseDown() {
      setImmediate(() => {
        dispatch(closeContextMenuAction())
        document.removeEventListener("mousedown", handleMouseDown, true)
      })
    }
    if (visible) {
      document.addEventListener("mousedown", handleMouseDown, true)
    }
    return () => document.removeEventListener("mousedown", handleMouseDown, true)
  }, [dispatch, visible])

  function copyWidgetToScreen(screenId) {
    dispatch(asyncCopyWidgetToScreenAction(Module_9.w(widgetId), screenId))
  }

  var x = function () {
    var /* [auto-meaningful-name] */n$current
    var t = null === (n$current = n.current) || undefined === n$current ? undefined : n$current.id
    if (currentScreenId && t) {
      dispatch(asyncDeleteProjectWidgetAction(t, currentScreenId))
    }
  }

  var D = function () {
    n.current = undefined
  }

  useLayoutEffect(function () {
    const screensElement = screensElementRef.current
    if (screensElement) {
      if (showsScreens) {
        var t = screensElement.getClientRects()[0]
        var n = t.height + t.y - window.innerHeight
        if (n > 0) {
          screensElement.style.top = screensElement.offsetTop - n + "px"
        }
      } else {
        screensElement.style.top = "10px"
      }
    }
  }, [showsScreens])

  return <div
    className={styles.wrapper}
    ref={wrapperElementRef}
    style={{
      display: visible ? "block" : "none"
    }}
  >
    <div
      className={classNames(styles.menuItem)}
      onMouseDown={() => {
        dispatch(CommonActions.Ef(Module_9.w(widgetId)))
      }}
    >{formatMessage({ id: "copyAndPaste" })}</div>
    {![BuiltInWidgetTypes.ACTOR_WIDGET, BuiltInWidgetTypes.BRUSH_WIDGET].includes(widget?.type || "") && (
      <div
        className={classNames(styles.menuItem, styles.copyTo)}
        onMouseEnter={() => { setShowsScreens(true) }}
        onMouseLeave={() => { setShowsScreens(false) }}
      >
        <span>{formatMessage({ id: "copyTo" })}</span>
        <IconFont type="icon-right" />
        <ul
          ref={screensElementRef}
          className={styles.screens}
          style={{
            display: showsScreens ? "block" : "none"
          }}
        >
          {screens.map((screen, index) =>
            <li
              key={screen.get("id")}
              onMouseDown={copyWidgetToScreen.bind(null, screen.id)}
            >
              <span>{index + 1}.</span>
              <div className={styles.screenSnapshot}>
                <img src={screen.get("snapshot")} alt="" />
              </div>
              <p>{screen.get("title")}</p>
            </li>)}
        </ul>
      </div>
    )}
    <div
      onMouseDown={() => {
        var e = Module_9.Fb(widgetId || "")
        const title = formatMessage({ id: "deleteWidget" }) + "“" + Module_190.f(e, 10) + "”?"
        var r = Module_26.z.checkFieldValueIsSelected("WIDGET_ID", widgetId)
        var o = Module_26.z.checkSomeFieldValueIsSelected("WIDGET_ID", Module_9.U(widgetId))
        if (r || o) {
          n.current = Module_9.Bb(widgetId)
          dispatch(openConfirmDialogAction({
            onConfirm: x,
            onClose: D,
            allowText: formatMessage({ id: "delete" }),
            title,
            isDangerous: true,
            content: formatMessage({
              id: o ? "deleteParentWidgetTips" : "deleteWidgetTips"
            })
          }))
        } else if (currentScreenId) {
          dispatch(asyncDeleteProjectWidgetAction(widgetId, currentScreenId))
        }
      }}
      className={classNames(styles.menuItem, styles.delete)}
    >{formatMessage({ id: "delete" })}</div>
  </div>
})
