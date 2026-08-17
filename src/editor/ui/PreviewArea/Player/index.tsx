/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-23
 */

import { Q } from "../../../../../unrestored/shared/1571/2636/index__part-3"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"../../../../../unrestored/shared/1571/2636/9"
import * as LoadCustomWidget from "../../../../shared/widget/custom/load"
import * as /* [auto-meaningful-name] */Module_141 from /* 141 */"../../../../../unrestored/shared/1571/2636/141/index"
import { appendMessageToConsoleAction, setIsOffLineAction, togglePermissionDialogAction, updateDataWatchVariablePropertyAction } from "../../../redux/common/actions"
import classNames from "classnames"
import { useIntl } from "react-intl"
import * as Language from /* 23 */"../../../../shared/ui/language"
import { useSelector, useDispatch } from "react-redux"
import React, { ReactNode, useState, useRef, useCallback, useEffect, useLayoutEffect } from "react"
import * as /* [auto-meaningful-name] */Module_738 from /* 738 */"../../../../../unrestored/shared/1571/2636/738/index"
import * as /* [auto-meaningful-name] */Module_68 from /* 68 */"../../../../../unrestored/shared/1571/2636/68"
import * as /* [auto-meaningful-name] */Module_55 from /* 55 */"../../../../../unrestored/shared/1571/2636/55"
import * as BuiltInWidgetTypes from "../../../widget/built-in/types"
import styles from "./index.module.css"

interface IDeviceFrameProps {
  children?: ReactNode
  vibrating: boolean
  scale: number
}

const DeviceFrame = React.memo(({ children, vibrating, scale }: IDeviceFrameProps) => {
  return <div
    className={classNames(styles.deviceFrameContainer, styles.galaxy5)}
    style={{ transform: `scale(${scale})` }}
  >
    <div className={classNames(styles.deviceFrame, { vibrate: vibrating })}>
      {children}
      <div className={styles.mask} />
    </div>
  </div>
})

export const Player = React.memo(() => {

  const playing = useSelector((state) => state.project.playing)
  const playedAt = useSelector((state) => state.project.playedAt)
  const id = useSelector((state) => state.project.id)
  const language = useSelector((state) => state.common.language)

  const dispatch = useDispatch()
  const { formatMessage } = useIntl()

  const [isVibrating, setIsVibrating] = useState(false)
  const vibrateTimeoutHandle = useRef<number>()
  const targetEndTimeRef = useRef<number>()
  const wrapperElementRef = useRef<HTMLDivElement>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const emulatorWrapperElementRef = useRef<HTMLDivElement>(null)
  const [contentWindow, setContentWindow] = useState<Window | null>(null)
  const [scale, setScale] = useState(1)

  function handleVibrate(e) {
    const targetEndTime = Date.now() + e.data.duration
    if (!(targetEndTimeRef.current && targetEndTimeRef.current >= targetEndTime)) {
      setIsVibrating(true)
      window.clearTimeout(vibrateTimeoutHandle.current)
      vibrateTimeoutHandle.current = window.setTimeout(() => setIsVibrating(false), e.data.duration)
      targetEndTimeRef.current = targetEndTime
    }
  }

  function handleNotVibrate() {
    window.clearTimeout(vibrateTimeoutHandle.current)
    targetEndTimeRef.current = 0
    setIsVibrating(false)
  }

  const handleDataWatch = useCallback(({ data: { id, tab, value } }) => {
    dispatch(updateDataWatchVariablePropertyAction(id, "value", value))
    if (!(tab !== BuiltInWidgetTypes.NEW_LOCAL_STORAGE_WIDGET && tab !== BuiltInWidgetTypes.TABLE_DATA_WIDGET)) {
      dispatch(updateDataWatchVariablePropertyAction(id, "defaultValue", value))
    }
  }, [dispatch])

  const handlePermission = useCallback(({ data: { type } }) => {
    localStorage.removeItem(`${type}DialogPermission`)
    dispatch(togglePermissionDialogAction({
      type,
      visible: true,
      onConfirm() { localStorage.setItem(`${type}DialogPermission`, "true") },
      onDeny() { localStorage.setItem(`${type}DialogPermission`, "false") }
    }))
  }, [dispatch])

  const handleLog = useCallback(({ data }) => {
    let sourceMessage = ""
    let { widgetType, widgetId } = data
    data.message = data.message || ""
    if (!widgetType && widgetId) {
      const widget = Module_9.Bb(widgetId)
      if (widget) {
        widgetType = widget.type
      }
    }
    if (widgetType) {
      const widget = Module_9.Db(widgetType)
      const widgetTitle = formatMessage({ id: widget?.title || widget?.previewAreaWidgetTitle })
      if (widgetTitle) {
        sourceMessage += `【${widgetTitle}】`
      }
    }
    if (widgetId) {
      const widgetTitle = Module_9.Fb(widgetId)
      if (widgetTitle) {
        sourceMessage += `${widgetTitle} `
      }
    }
    if (data.msgType === Module_55.a) {
      if (widgetType && !LoadCustomWidget.isExtensions(widgetType)) {
        data.message = Language.d(data.message, data.values)
      }
    } else {
      data.message = Language.f(language, data.message, data.values)
    }
    if (sourceMessage) {
      data.message = `${sourceMessage}${data.message}`
    }
    dispatch(appendMessageToConsoleAction(data))
    if (data.type === "error" || data.type === "customError" || data.type === "lintError") {
      Module_141.a("ConsoleDetail", {
        errorMessage: data.message,
        warningMessage: ""
      })
    }
    if (data.type === "warning") {
      Module_141.a("ConsoleDetail", {
        errorMessage: "",
        warningMessage: data.message
      })
    }
  }, [dispatch, formatMessage, language])

  useEffect(function () {
    Q.add(Module_68.b.DEVICE_VIBRATE, handleVibrate)
    Q.add(Module_68.b.DEVICE_NOT_VIBRATE, handleNotVibrate)
    Q.add(Module_68.b.PLAYER_DATA_WATCH, handleDataWatch)
    Q.add(Module_68.b.RUNTIME_LOG, handleLog)
    Q.add(Module_68.b.PLAYER_PERMISSION, handlePermission)
  }, [handleLog, handleDataWatch, handlePermission])

  useEffect(function () {
    function setIsOffLine() {
      dispatch(setIsOffLineAction(!navigator.onLine))
    }
    window.addEventListener("online", setIsOffLine)
    window.addEventListener("offline", setIsOffLine)
    return () => {
      window.removeEventListener("online", setIsOffLine)
      window.removeEventListener("offline", setIsOffLine)
    }
  }, [dispatch])

  useEffect(() => {
    if (!playing) {
      if (vibrateTimeoutHandle.current) {
        window.clearTimeout(vibrateTimeoutHandle.current)
      }
      targetEndTimeRef.current = 0
      setIsVibrating(false)
    }
  }, [playing, dispatch])

  useLayoutEffect(() => {
    if (playing && wrapperElementRef.current && iframeRef.current) {
      const { clientWidth, clientHeight } = wrapperElementRef.current
      let scale = Math.min((clientWidth - 208) / 384, (clientHeight - 20) / 700, 1)
      scale = Math.floor(10 * scale) / 10
      scale = Math.max(scale, .7)
      const left = clientWidth / 2 + 192 * scale
      if (emulatorWrapperElementRef.current) {
        emulatorWrapperElementRef.current.style.left = `${left}px`
      }
      setScale(scale)
    }
  }, [playing])

  const searchParams = window.location.search.split("?")[1]
  const archiveId = new URLSearchParams(searchParams).get("archiveId")
  const archiveIdParam = archiveId ? `?&archiveId=${archiveId}` : ""
  const params = `#id=${id}&ts=${playedAt}&emulator=1`

  return <div
    style={{ display: playing ? undefined : "none" }}
    className={styles.wrapper}
    ref={wrapperElementRef}
  >
    <div className={styles.deviceFrameWrapper}>
      <DeviceFrame
        vibrating={isVibrating && playing}
        scale={scale}
      >
        {playing && <iframe
          ref={(ref) => {
            iframeRef.current = ref
            setContentWindow(ref?.contentWindow || null)
          }}
          title="Coco Player"
          sandbox="allow-forms allow-modals allow-popups allow-same-origin allow-scripts"
          src={`/editor/editor-player.html${archiveIdParam}${params}`}
        />}
      </DeviceFrame>
    </div>
    <div
      className={styles.emulatorWrapper}
      ref={emulatorWrapperElementRef}
    >
      <Module_738.a messageWindow={contentWindow} />
    </div>
  </div>
})
