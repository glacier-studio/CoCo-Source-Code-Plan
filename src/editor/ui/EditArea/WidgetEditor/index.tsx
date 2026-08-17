/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-142
 */

import { wy } from "../../../../../unrestored/shared/1571/2636/index__part-105"
import styles from "./styles.module.css"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"../../../../../unrestored/shared/1571/2636/9"
import * as /* [auto-meaningful-name] */Module_26 from /* 26 */"../../../../../unrestored/shared/1571/2636/26/index"
import * as /* [auto-meaningful-name] */Module_18 from /* 18 */"../../../../../unrestored/shared/1571/2636/18"
import { setWidgetAttributeVisibleAction } from "../../../redux/common/actions"
import { IconFont } from "../../../../shared/ui/components"
import classNames from "classnames"
import { useIntl } from "react-intl"
import { useDispatch, useSelector } from /* 16 */"react-redux"
import React, { memo } from "react"
import { WidgetStyleForm } from "./WidgetStyleForm"

export const WidgetEditor = memo(() => {

  const dispatch = useDispatch()
  const { formatMessage } = useIntl()

  const selectedWidgetId = useSelector((state) => state.project.selectedWidgetId)
  const widgetAttributeVisible = useSelector((state) => state.common.widgetAttributeVisible)
  const consoleHeight = useSelector((state) => state.common.consoleHeight)
  const blockyToolboxPinned = useSelector((state) => state.common.blockyToolboxPinned)
  const widget = selectedWidgetId ? Module_9.Bb(selectedWidgetId) : undefined
  const readOnly = useSelector((state) => state.uiConfig.widgetEditor) === Module_18.j.ReadOnly

  function close() {
    if (!(dispatch(setWidgetAttributeVisibleAction(false)), blockyToolboxPinned)) {
      Module_26.g.setSelectedItem()
      Module_26.g.getToolbox()?.flyout.hide()
    }
  }

  if (selectedWidgetId && !widget) {
    dispatch(setWidgetAttributeVisibleAction(false))
    return null
  }

  if (widget?.type) {
    const { type } = widget
    const widgetTypes = Module_9.Db(type)
    if (widgetTypes) {
      const { editConfig, icon, childWidgetEditConfig } = widgetTypes
      const finalEditConfig = widget.parentId && childWidgetEditConfig ? childWidgetEditConfig : editConfig
      return <div
        className={classNames(styles.wrapper, !widgetAttributeVisible && styles.hide)}
        style={{ bottom: consoleHeight + 8 }}
      >
        <div className={styles.header}>
          <h3 className={styles.title}>{formatMessage({ id: "property" })}</h3>
          <div onClick={close} className={styles.close}>
            <IconFont type="icon-close-bold" />
          </div>
        </div>
        <div className={classNames(styles.content, readOnly && styles.readonly)}>
          <WidgetStyleForm widgetId={widget.id} widgetType={widget.type} editConfig={finalEditConfig} widgetIcon={icon} />
        </div>
      </div>
    }
  }

  return <div
    className={classNames(styles.wrapper, !widgetAttributeVisible && styles.hide)}
    style={{ bottom: consoleHeight + 8 }}
  >
    <div className={styles.header}>
      <h3 className={styles.title}>{formatMessage({ id: "property" })}</h3>
      <div onClick={close} className={styles.close}>
        <IconFont type="icon-close-bold" />
      </div>
    </div>
    <div className={classNames(styles.content, readOnly && styles.readonly)}>
      {React.createElement(wy, null)}
    </div>
  </div>
})
