/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-90
 */

import { WidgetTree } from "./WidgetTree"
import * as /* [auto-meaningful-name] */Module_26 from /* 26 */"../../../../../unrestored/shared/1571/2636/26/index"
import { asyncSelectProjectWidgetAction, setIsHoverBlockAreaAction, setWidgetAttributeVisibleAction } from "../../../redux/common/actions"
import { IconFont } from "../../../../shared/ui/components"
import classNames from "classnames"
import { useIntl } from "react-intl"
import { useDispatch, useSelector } from "react-redux"
import React, { memo, useState, useEffect, useRef } from "react"
import styles from "./styles.module.css"

const ItemBlock = memo(({ id, icon, label, color, bgColor }) => {

  const dispatch = useDispatch()
  const { formatMessage } = useIntl()

  const selectedWidgetId = useSelector((state) => state.project.selectedWidgetId)
  const flyoutVisible = useSelector((state) => state.block.flyoutVisible)
  const [p, m] = useState(false)
  const [backgroundColor, setBackgroundColor] = useState("")

  useEffect(() => {
    setBackgroundColor(
      selectedWidgetId === id && flyoutVisible ?
        color :
        p || selectedWidgetId === id && !flyoutVisible ? bgColor : ""
    )
  }, [selectedWidgetId, id, flyoutVisible, p, color, bgColor])

  return <div
    key={id}
    className={classNames(styles.itemBlock, selectedWidgetId === id && flyoutVisible && styles.itemSelected)}
    style={{ backgroundColor }}
    onClick={() => {
      dispatch(asyncSelectProjectWidgetAction(id))
      dispatch(setWidgetAttributeVisibleAction(false))
      if (selectedWidgetId === id && flyoutVisible) {
        Module_26.g.setSelectedItem()
        Module_26.g.getToolbox()?.flyout.hide()
      } else {
        Module_26.g.setSelectedItem(Module_26.g.getToolbox()?.find_node_by_name(id))
      }
    }}
    onMouseEnter={() => { m(true) }}
    onMouseLeave={() => { m(false) }}
  >
    <div className={styles.itemBlockIcon} style={{ color }}>
      <IconFont type={icon} />
    </div>
    <span>{formatMessage({ id: label })}</span>
  </div>
})

const BASIC_BLOCK_BOX = [
  {
    id: "toolbox-event",
    icon: "icon-toolbox-event",
    label: "event",
    color: "rgb(84, 115, 248)",
    bgColor: "rgba(84, 115, 248,0.2)"
  }, {
    id: "toolbox-control",
    icon: "icon-toolbox-control",
    label: "control",
    color: "#01ADFF",
    bgColor: "rgba(1,173,255,0.2)"
  }, {
    id: "toolbox-feature",
    icon: "icon-toolbox-feature",
    label: "feature",
    color: "rgb(0, 175, 195)",
    bgColor: "rgb(0, 175, 195, 0.2)"
  }, {
    id: "toolbox-operator",
    icon: "icon-toolbox-operation",
    label: "operators",
    color: "#FF844E",
    bgColor: "rgba(255,132,78,0.2)"
  }, {
    id: "toolbox-primitive",
    icon: "icon-toolbox-variable",
    label: "variable",
    color: "#FFBB55",
    bgColor: "rgba(255,187,85,0.2)"
  }, {
    id: "toolbox-array",
    icon: "icon-toolbox-list",
    label: "list",
    color: "#FFC915",
    bgColor: "rgba(255,201,21,0.2)"
  }, {
    id: "toolbox-object",
    icon: "icon-toolbox-object",
    label: "object",
    color: "rgb(160, 115, 255)",
    bgColor: "rgb(160, 115, 255, 0.2)"
  }, {
    id: "toolbox-function",
    icon: "icon-toolbox-function",
    label: "procedures",
    color: "#F78767",
    bgColor: "rgba(247,135,103,0.2)"
  }
]

const BasicBlockBox = memo(() => {
  const { formatMessage } = useIntl()
  return <div className={styles.basicBlockBox}>
    <div className={styles.categoryTitle}>{formatMessage({ id: "basicBlock" })}</div>
    <div className={styles.blockList}>{BASIC_BLOCK_BOX.map((box) => <ItemBlock key={box.id} {...box} />)}</div>
    <div className={styles.spaceLine} />
  </div>
})

const DeleteBlockBox = memo(() => {

  const { formatMessage } = useIntl()
  const isBlockDragDeleteArea = useSelector((state) => state.block.isBlockDragDeleteArea)

  return <div className={styles.deleteBlockBox}>
    <div className={classNames(styles.deleteTopIconBox, isBlockDragDeleteArea && styles.deleteTopIconBoxOff)}>
      <IconFont type="icon-delete-top" className={styles.deleteBlockTopIcon} />
    </div>
    <div className={styles.deleteBottomIconBox}>
      <IconFont type="icon-delete-bottom" className={styles.deleteBlockBottomIcon} />
    </div>
    <div>{formatMessage({ id: "Workspace.blockDragDeleteAreaTips" })}</div>
  </div>
})

export const WidgetPanel = memo(() => {

  const dispatch = useDispatch()
  const widgetTreeRef = useRef(null)
  const isBlockDragDeleteArea = useSelector((state) => state.block.isBlockDragDeleteArea)

  return <div
    className={styles.wrapper}
    onMouseEnter={() => dispatch(setIsHoverBlockAreaAction(true))}
    onMouseLeave={() => dispatch(setIsHoverBlockAreaAction(false))}
  >
    <div className={styles.basicBlock}>{<BasicBlockBox />}</div>
    <div className={styles.widgetTree} ref={widgetTreeRef}><WidgetTree /></div>
    <div className={classNames( styles.deleteBlockPanel, isBlockDragDeleteArea && styles.deleteBlockPanelShow)}>
      <DeleteBlockBox />
    </div>
  </div>
})
