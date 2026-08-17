import * as React from "react"
import { memo, useEffect, useLayoutEffect, useRef, useState } from "react"
import classNames from "classnames"
import { useDispatch, useSelector } from "react-redux"

import { Player } from "./Player"
import { ScreenList } from "./ScreenList"
import { WidgetTabContainer } from "./WidgetList"
import { lo as DragBar } from "../../../../unrestored/shared/1571/2636/index__part-27"
import { Stage } from "./stage"
import { StageToast } from "./StageToast"
import styles from "./styles.module.css"
import { ContextMenu } from "./ContextMenu"
import * as /* [auto-meaningful-name] */Module_75 from /* 75 */"../../../../unrestored/shared/1571/2636/75"
import * as /* [auto-meaningful-name] */Module_90 from /* 90 */"../../../../unrestored/shared/1571/2636/90"
import * as /* [auto-meaningful-name] */Animejs from "animejs"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"../../../../unrestored/shared/1571/2636/9"
import * as CommonActions from "../../redux/common/actions"
import { setIsHoverBlockAreaAction, setStageScaleAction, setStageWidthAction } from "../../redux/common/actions"
import { changeContextMenuInfoAction, closeContextMenuAction } from "../../redux/common/actions"
import { IconFont } from "../../../shared/ui/components"
import { useIntl } from "react-intl"
import * as /* [auto-meaningful-name] */Module_748 from /* 748 */"../../../../unrestored/shared/1571/2636/748/index"

export const widgetListWidth = window.innerWidth > 1300 ? 144 : 92
const widgetListSingleColumn = widgetListWidth === 92

export const PreviewArea = memo(() => {

  const { formatMessage } = useIntl()
  const dispatch = useDispatch()
  const mainElementRef = useRef<HTMLElement>(null)
  const previewAreaRef = useRef<HTMLDivElement>(null)
  const playing = useSelector((state) => state.project.playing)
  const stageVisible = useSelector((state) => state.common.stageVisible)
  const isHoverBlockArea = useSelector((state) => state.common.isHoverBlockArea)
  const [previewAreaWidth, setPreviewAreaWidth] = useState(0)
  const [m, g] = useState(false)

  useEffect(function () {
    const mainElement = mainElementRef.current
    function handleContextMenu(event: PointerEvent) {
      const { target, clientX, clientY } = event as PointerEvent & { target: HTMLElement }
      const closestSelectable = target.closest("." + Module_90.b)
      const id = closestSelectable?.id || ""
      const editable = closestSelectable?.classList.contains(Module_90.a)
      if (!editable) {
        event.preventDefault()
      }
      if (!closestSelectable || editable || Module_9.Bb(id)?.parentId) {
        dispatch(closeContextMenuAction())
      } else {
        dispatch(changeContextMenuInfoAction({
          position: {
            x: clientX,
            y: clientY
          },
          visible: true,
          widgetId: closestSelectable.id
        }))
      }
    }
    if (mainElement) {
      mainElement.addEventListener("contextmenu", handleContextMenu)
    }
    return function () {
      if (mainElement) {
        mainElement.removeEventListener("contextmenu", handleContextMenu)
      }
    }
  }, [dispatch, mainElementRef])

  useLayoutEffect(() => {
    if (previewAreaRef.current) {
      const width = Math.max(window.innerWidth / 3, 514)
      previewAreaRef.current.style.width = `${width}px`
      setPreviewAreaWidth(width + 1)
      dispatch(setStageWidthAction(width - widgetListWidth))
      if (mainElementRef.current) {
        const { offsetWidth, offsetHeight } = mainElementRef.current
        const scaleX = .8 * offsetWidth / Module_75.e
        const scaleY = (offsetHeight - 80) / Module_75.d
        let scale = Math.min(scaleX, scaleY, 1)
        scale = Math.max(scale, .7)
        dispatch(setStageScaleAction(scale))
      }
    }
  }, [dispatch])

  useLayoutEffect(function () {
    if (previewAreaRef.current && mainElementRef.current) {
      let width = mainElementRef.current.offsetWidth + widgetListWidth
      width = Math.max(width, 514)
      Animejs.default({
        targets: "#previewAreaWrapper",
        width,
        easing: "easeInOutSine",
        duration: 300
      })
    }
  }, [])

  return (
    <div
      id="previewAreaWrapper"
      className={styles.wrapper}
      ref={previewAreaRef}
      style={{ marginLeft: stageVisible || playing ? 0 : -previewAreaWidth }}
    >
      <section className={styles.body}>
        <>
          <aside
            style={{ width: `${widgetListWidth}px` }}
            className={styles.side}
          >
            <WidgetTabContainer singleColumn={widgetListSingleColumn} />
          </aside>
          <ScreenList />
          <main className={styles.main} ref={mainElementRef}>
            <Stage />
            <StageToast />
            <ContextMenu />
          </main>
          {!playing && (
            <Module_748.a
              placement="bottom"
              title={formatMessage({
                id: stageVisible ? "HeaderDropdown.hideWidgetAndStage" : "HeaderDropdown.showWidgetAndStage"
              })}
              trigger={["hover", "click"]}
            >
              <div
                className={classNames(styles.foldBtn, stageVisible ? styles.hide : styles.show, (m || isHoverBlockArea) && styles.visible)}
                onClick={() => {
                  dispatch(CommonActions.Yi(!stageVisible))
                }}
                onMouseEnter={() => g(true)}
                onMouseLeave={() => g(false)}
              >
                <IconFont type="icon-double-arrow" />
              </div>
            </Module_748.a>
          )}
        </>
      </section>
      <Player />
      {!playing && (
        <DragBar
          onDrag={(width) => { dispatch(setStageWidthAction(width - widgetListWidth)) }}
          onDragEnd={(width) => {
            setPreviewAreaWidth(width + 1)
            dispatch(setStageWidthAction(width - widgetListWidth))
          }}
          onEnter={() => dispatch(setIsHoverBlockAreaAction(true))}
          onLeave={() => dispatch(setIsHoverBlockAreaAction(false))}
          previewAreaRef={previewAreaRef}
        />
      )}
    </div>
  )
})
