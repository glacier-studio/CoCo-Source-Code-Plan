/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-170
 */

import { WidgetPanel } from "./WidgetPanel"
import { WidgetEditor } from "./WidgetEditor"
import { BlockEditor } from "./BlockEditor"
import { KT } from "../../../../unrestored/shared/1571/2636/index__part-152"
import { QT } from "../../../../unrestored/shared/1571/2636/index__part-153"
import { $T } from "../../../../unrestored/shared/1571/2636/index__part-154"
import { DS } from "../../../../unrestored/shared/1571/2636/index__part-156"
import { PS } from "../../../../unrestored/shared/1571/2636/index__part-157"
import styles from "./styles.module.css"
import classNames from "classnames"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"../../../../unrestored/shared/1571/2636/10/index"
import { useSelector } from "react-redux"
import React, { useState, useEffect } from /* 0 */"react"
import { RightSideMenu } from "./RightSideMenu"

export const EditArea = React.memo(() => {

  var widgetAttributeVisible = useSelector((state) => state.common.widgetAttributeVisible)
  var packageProgressVisible = useSelector((state) => state.project.packageProgressVisible)
  var playing = useSelector((state) => state.project.playing)
  var consoleMessages = useSelector((state) => state.common.consoleMessages)

  const [consoleVisible, setConsoleVisible] = useState(false)
  const [autoOpenConsole, setAutoOpenConsole] = useState(false)

  useEffect(() => {
    if (playing) {
      setAutoOpenConsole(true)
    }
  }, [playing])

  useEffect(()=> {
    const warnAndErrorCount = consoleMessages.filter((message) => message.get("type") !== "log").size
    if (autoOpenConsole && warnAndErrorCount > 0) {
      setConsoleVisible(true)
      setAutoOpenConsole(false)
    }
  }, [consoleMessages, autoOpenConsole])

  return <div className={styles.wrapper} data-html2canvas-ignore="true">
    <WidgetPanel />
    <WidgetEditor />
    <div className={classNames(styles.toolboxMask, !widgetAttributeVisible && styles.hide)} />
    <BlockEditor/>
    <RightSideMenu />
    {packageProgressVisible && <KT />}
    <PS/>
    <$T onToggle={() => { setConsoleVisible(!consoleVisible) }} />
    <QT />
    <DS consoleVisible={consoleVisible} onClose={() => { setConsoleVisible(false) }} />
  </div>
})

export { nI } from "./RightSideMenu"
