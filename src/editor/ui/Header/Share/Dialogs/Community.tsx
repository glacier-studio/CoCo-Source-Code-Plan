/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-17
 */

import { Ge } from "../../../../../../unrestored/shared/1571/2636/index__part-9"
import * as /* [auto-meaningful-name] */Module_133 from /* 133 */"../../../../../../unrestored/shared/1571/2636/133"
import * as /* [auto-meaningful-name] */Module_197 from /* 197 */"../../../../../../unrestored/shared/1571/2636/197/index"
import * as /* [auto-meaningful-name] */Module_141 from /* 141 */"../../../../../../unrestored/shared/1571/2636/141/index"
import * as Tools from "../../../../../shared/tools"
import { getCommunityWorkUrl } from "../../../../../shared/tools"
import * as /* [auto-meaningful-name] */Module_97 from /* 97 */"../../../../../../unrestored/shared/1571/2636/97"
import * as CommonActions from "../../../../redux/common/actions"
import * as Components from "../../../../../shared/ui/components"
import { Button, Dialog, IconFont, Input } from "../../../../../shared/ui/components"
import { useIntl } from "react-intl"
import { useSelector, useDispatch } from "react-redux"
import /* [auto-meaningful-name] */React from "react"
import { memo, useState, useRef, useEffect } from "react"
import * as /* [auto-meaningful-name] */Module_177 from /* 177 */"../../../../../../unrestored/shared/1571/2636/177"
import * as /* [auto-meaningful-name] */Module_328 from /* 328 */"../../../../../../unrestored/shared/1571/2636/328"
import styles from "../../../../../../unrestored/shared/1571/2636/930"

interface IPublishInfo {
  name: string
  description: string
  operation: string
}

export const ShareCommunityDialog = memo(({
  visible, onClose, onConfirm
}: {
  visible: boolean
  onClose(): void
  onConfirm(): void
}) => {

  const id = useSelector((state) => state.project.id)
  const title = useSelector((state) => state.project.title)
  const [isPublishing, setIsPublishing] = useState(false)
  const workCoverEditorRef = useRef(null)
  const { formatMessage } = useIntl()
  const dispatch = useDispatch()
  const [publishInfo, setPublishInfo] = useState<IPublishInfo>({
    name: title,
    description: "",
    operation: ""
  })
  const snapshot = useSelector((state) => state.project.screens.get(0)?.snapshot)
  const projectSource = useSelector((state) => state.project.projectSource)

  useEffect(() => {
    if (visible) {
      workCoverEditorRef.current?.setScale(1)
    }
  }, [visible])

  useEffect(() => {
    setPublishInfo({
      description: "",
      operation: "",
      name: title
    })
  }, [title])

  const [workCover, setWorkCover] = useState<string | File>("")
  const [workCoverFallback, setWorkCoverFallback] = useState(snapshot || "")

  function handleWorkCoverChange(files: FileList) {
    if (files && files[0]) {
      setWorkCover(files[0])
    }
  }

  async function publish() {
    if (isPublishing) {
      return
    }
    setIsPublishing(true)
    if (!(await onConfirm())) {
      setIsPublishing(false)
      return
    }
    const coverCanvas = workCoverEditorRef?.current?.target?.getImageScaledToCanvas()
    let coverUrl = ""
    if (coverCanvas) {
      const coverDataUrl = coverCanvas.toDataURL("image/png")
      const processedCoverDataUrl = Tools.m(coverDataUrl)
      if (processedCoverDataUrl) {
        coverUrl = (await Module_197.e(processedCoverDataUrl)).url
      }
    }
    try {
      const workId = await CommonActions.promisify<string>(
        dispatch, CommonActions.publishWorkToCommunityAction(
          publishInfo.name, publishInfo.description, publishInfo.operation, coverUrl
        )
      )
      dispatch(CommonActions.showCommonToastInfoAction({
        type: "success",
        message: formatMessage({ id: "Publish.publishSuccess" }),
        showCloseIcon: false
      }))
      window.open(getCommunityWorkUrl(workId))
      onClose()
      track(publishInfo, true, "")
    } catch (error) {
      if (error.message === "40500104") {
        dispatch(CommonActions.showCommonToastInfoAction({
          message: "分享失败，作品使用了未审核的自定义控件",
          type: "error"
        }))
        setIsPublishing(false)
        onClose()
        return
      }
      dispatch(CommonActions.showCommonToastInfoAction({
        type: "error",
        message: formatMessage({ id: "Publish.publishFail" }),
        showCloseIcon: false
      }))
      track(publishInfo, false, error.message)
      setIsPublishing(false)
    }
  }

  function track(publishInfo: IPublishInfo, isSuccess: boolean, failReason: string) {
    Module_141.a("WorkPublish", {
      workId: id,
      workName: publishInfo.name,
      workType: "APP工匠",
      workDescription: publishInfo.description,
      sourceTag: projectSource.tag,
      sourceId: projectSource.id,
      isSuccess,
      failReason
    })
  }

  useEffect(function () {
    if (visible) {
      if (Module_97.a(id)) {
        Module_177.j(id).then(({ data }) => {
          setPublishInfo({
            name: data.name,
            description: data.description === Module_328.a ? "" : data.description || "",
            operation: data.operation === Module_328.b ? "" : data.operation || ""
          })
          if (data.cover_url) {
            setWorkCover(data.cover_url)
          } else {
            setWorkCoverFallback(snapshot || "")
          }
        })
      } else {
        setWorkCoverFallback(snapshot || "")
      }
    } else {
      setWorkCover("")
    }
  }, [visible])

  return <Dialog
    onClose={onClose}
    className={styles.publishDialog}
    visible={visible}
    withPortal={true}
    title={formatMessage({ id: "Publish.publish" })}
  >
    <main>
      <div>
        <Components.c
          ref={workCoverEditorRef}
          width={340}
          height={340}
          sourceImage={workCover || workCoverFallback}
        />
        <div className={styles.changePoster}>
          <Components.B
            onChange={handleWorkCoverChange}
            accept={Module_133.f}
          >
            <IconFont type="icon-player-upload-file" />
            {formatMessage({ id: "Publish.changeWorkCover" })}
          </Components.B>
        </div>
      </div>
      <div className={styles.right}>
        <ul>
          <li>
            <p>
              {formatMessage({ id: "Publish.publishName" })}
              <span className={styles.required}>*</span>
            </p>
            <Input
              defaultValue={publishInfo.name}
              maxLength={20}
              placeholder={formatMessage({ id: "Publish.inputPublishName" })}
              onChange={(name, __event) => { setPublishInfo({ ...publishInfo, name }) }}
              isTrimmed={true}
            />
          </li>
          <li>
            <p>{formatMessage({ id: "Publish.publishDescription" })}</p>
            <Components.A
              defaultValue={publishInfo.description}
              maxLength={200}
              placeholder={formatMessage({ id: "Publish.inputPublishDescription"})}
              rows={5}
              onChange={(event) => { setPublishInfo({ ...publishInfo, description: event.target.value }) }}
            />
          </li>
          <li>
            <p>{formatMessage({ id: "Publish.publishOperation" })}</p>
            <Components.A
              defaultValue={publishInfo.operation}
              maxLength={200}
              placeholder={formatMessage({ id: "Publish.inputPublishOperation" })}
              rows={5}
              onChange={(event) => { setPublishInfo({ ...publishInfo, operation: event.target.value }) }}
            />
          </li>
        </ul>
      </div>
    </main>
    <footer>
      <Button
        type="primary"
        onClick={publish}
        disabled={!publishInfo.name}
      >{isPublishing ? <Ge /> : formatMessage({ id: "Publish.publish" })}</Button>
    </footer>
  </Dialog>
})
