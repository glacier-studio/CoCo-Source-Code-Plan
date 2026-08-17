/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-18
 */

import { Ge } from "../../../../../../unrestored/shared/1571/2636/index__part-9"
import /* [auto-meaningful-name] */Module_1036 from /* 1036 */"../../../../../../unrestored/shared/1571/2636/1036/index"
import * as /* [auto-meaningful-name] */Module_133 from /* 133 */"../../../../../../unrestored/shared/1571/2636/133"
import * as /* [auto-meaningful-name] */Module_197 from /* 197 */"../../../../../../unrestored/shared/1571/2636/197/index"
import * as /* [auto-meaningful-name] */Module_141 from /* 141 */"../../../../../../unrestored/shared/1571/2636/141/index"
import * as /* [auto-meaningful-name] */Module_190 from /* 190 */"../../../../../../unrestored/shared/1571/2636/190"
import * as Tools from "../../../../../shared/tools"
import * as /* [auto-meaningful-name] */Module_97 from /* 97 */"../../../../../../unrestored/shared/1571/2636/97"
import * as CommonActions from "../../../../redux/common/actions"
import * as Components from "../../../../../shared/ui/components"
import { Dialog, IconFont, Input } from "../../../../../shared/ui/components"
import classNames from "classnames"
import { useIntl } from "react-intl"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"../../../../../../unrestored/shared/1571/2636/10/index"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"../../../../../../unrestored/shared/1571/2636/7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import { useSelector, useDispatch } from "react-redux"
import /* [auto-meaningful-name] */React from "react"
import { useState, useRef, useCallback, useEffect } from "react"
import styles from "../../../../../../unrestored/shared/1571/2636/281"

export function ShareQRDialog({ visible, onClose }: {
  visible: boolean
  onClose(): void
  onConfirm(): void
}) {
  const projectShareInfo = useSelector((state) => state.project.projectShareInfo)
  const id = useSelector((state) => state.project.id)
  const userInfo = useSelector((state) => state.common.userInfo)
  const projectSource = useSelector((state) => state.project.projectSource)
  const { formatMessage } = useIntl()
  const dispatch = useDispatch()
  const [d, p] = useState(false)
  const [isLinkCopied, setIsLinkCopied] = useState(false)
  const [link, setLink] = useState("")
  const [isPublishing, setIsPublishing] = useState(false)
  const [isShareInfoChanged, setIsShareInfoChanged] =useState(false)
  const [F, G] = useState(false)
  const isPublishedRef = useRef(false)

  const track = useCallback((isSuccess: boolean, failReason: string) => {
    Module_141.a("WorkShare", {
      workId: id,
      workName: projectShareInfo.title,
      workTag: "",
      sourceTag: projectSource.tag,
      sourceId: projectSource.id,
      authorId: userInfo?.id || "",
      nickName: userInfo?.nickname || "",
      isSuccess,
      failReason
    })
  }, [id, projectSource, projectShareInfo.title, userInfo])

  const publish = useCallback(async () => {
    if (F || isPublishing) {
      return
    }
    try {
      await CommonActions.promisify(dispatch, CommonActions.publishWorkToH5Action(projectShareInfo))
      if (Module_97.a(id)) {
        setLink(Tools.getPlayerH5Url(id))
      }
      setIsPublishing(false)
      setIsShareInfoChanged(false)
      track(true, "")
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
        message: formatMessage({
          id: "Publish.shareQRError"
        }).toString(),
        type: "error"
      }))
      setIsPublishing(false)
      track(false, error.message)
    }
  }, [dispatch, formatMessage, isPublishing, onClose, id, projectShareInfo, track, F])

  function handleChangeWorkCover() {
    return (handleChangeWorkCover = Module_7.a(RegeneratorRuntime.mark(function e(t) {
      var n
      var /* [auto-meaningful-name] */e$sent
      var /* [auto-meaningful-name] */e$sent1
      var /* [auto-meaningful-name] */e$sent1$url
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (!t || !t[0]) {
                e.next = 22
                break
              }
              e.prev = 1
              n = t[0]
              setIsShareInfoChanged(true)
              G(true)
              e.next = 7
              return Tools.u(n)
            case 7:
              if (!(e$sent = e.sent)) {
                e.next = 14
                break
              }
              e.next = 11
              return Module_197.e(e$sent)
            case 11:
              e$sent1 = e.sent
              e$sent1$url = e$sent1.url
              dispatch(CommonActions.Ti({
                img: e$sent1$url
              }))
            case 14:
              e.next = 19
              break
            case 16:
              e.prev = 16
              e.t0 = e.catch(1)
              dispatch(CommonActions.mj({
                message: formatMessage({
                  id: "Publish.coverImageUploadFail"
                }).toString(),
                type: "error"
              }))
            case 19:
              e.prev = 19
              G(false)
              return e.finish(19)
            case 22:
            case "end":
              return e.stop()
          }
        }
      }, e, null, [[1, 16, 19, 22]])
    }))).apply(this, arguments)
  }

  async function handleCopyLink() {
    if (Module_190.a(link)) {
      setIsLinkCopied(true)
      dispatch(CommonActions.showCommonToastInfoAction({
        message: formatMessage({
          id: "Publish.copyLinkSuccess"
        }).toString(),
        duration: 1000,
        type: "success"
      }))
    } else {
      dispatch(CommonActions.showCommonToastInfoAction({
        message: formatMessage({
          id: "Publish.copyLinkFailure"
        }).toString(),
        duration: 1000,
        type: "error"
      }))
    }
  }

  useEffect(function () {
    if (visible) {
      if (!isPublishedRef.current) {
        setIsPublishing(true)
        publish()
      }
      isPublishedRef.current = true
    } else {
      isPublishedRef.current = false
      setIsShareInfoChanged(false)
      p(false)
      setIsLinkCopied(false)
    }
  }, [publish, visible])

  return <Dialog
    onClose={onClose}
    className={styles.shareToOthers}
    title={formatMessage({ id: "Publish.shareToOthers" })}
    withPortal={true}
    visible={visible}
  >
    <div className={styles.qrWrapper}>
      {(isPublishing || isShareInfoChanged || F) && <div className={styles.blocking}>
        <div className={styles.iconWrapper}>
          {isShareInfoChanged ? <div
            onClick={() => {
              isPublishedRef.current = false
              setIsPublishing(true)
              setIsShareInfoChanged(false)
              setIsLinkCopied(false)
            }}
          >
            <IconFont type="icon-refresh" className={styles.refreshIcon} />
          </div> : <Ge/>}
        </div>
        <span>
          {formatMessage(isShareInfoChanged ? { id: "Publish.refreshQrCode" } : { id: "Publish.creatingQrCode" })}
        </span>
      </div>}
      <div className={styles.qrCode}>
        <Module_1036
          value={link}
          size={168}
          level="M"
          imageSettings={{
            width: 54,
            height: 54,
            src: "https://static.bcmcdn.com/coco/image/share-dialog/qrlogo.png"
          }}
        />
      </div>
      <div className={styles.message}>
        {isPublishing || isShareInfoChanged ? "" : formatMessage({ id: "Publish.shareQrCode" })}
      </div>
      <div className={styles.shareLinkWrapper}>
        <div className={styles.link}>{link}</div>
        <div
          className={classNames(styles.copyBtn, isLinkCopied && styles.copied, (isPublishing || isShareInfoChanged || F) && styles.disabled)}
          onClick={handleCopyLink}
        >
          {formatMessage(isLinkCopied ? { id: "Publish.shareLinkCopied" } : { id: "Publish.copyShareLink" })}
        </div>
      </div>
    </div>
    <div className={styles.lineWrapper}>
      <div className={styles.line} />
      <div className={styles.settings} onClick={() => p(!d)}>
        <span>{formatMessage({ id: "Publish.moreSettings" })}</span>
        <IconFont
          type="icon-dropdown-down"
          className={classNames(styles.settingsIcon, d && styles.rotateSettingsIcon)}
        />
      </div>
      <div className={styles.line} />
    </div>
    <div className={classNames(styles.settingWrapper, !d && styles.invisible)}>
      <div className={styles.workInfo}>
        <ul>
          <li>
            <p className={styles.title}>
              {formatMessage({ id: "Publish.shareTitle" })}
              <span className={styles.required}>*</span>
            </p>
            <Input
              defaultValue={projectShareInfo.title}
              maxLength={20}
              placeholder={formatMessage({ id: "Publish.inputPublishName" })}
              onBlur={(title, event) => {
                if (title !== projectShareInfo.title) {
                  if (title !== "") {
                    setIsShareInfoChanged(true)
                    dispatch(CommonActions.Ti({ title }))
                  } else {
                    event.target.value = projectShareInfo.title
                  }
                }
              }}
              isTrimmed={true}
            />
          </li>
          <li>
            <p className={styles.title}>{formatMessage({ id: "Publish.shareDescription" })}</p>
            <Components.A
              defaultValue={projectShareInfo.desc}
              maxLength={25}
              placeholder={formatMessage({ id: "Publish.inputShareDescription" })}
              rows={3}
              onBlur={(event) => {
                if (event.target.value !== projectShareInfo.desc) {
                  setIsShareInfoChanged(true)
                  dispatch(CommonActions.Ti({
                    desc: event.target.value
                  }))
                }
              }}
            />
          </li>
        </ul>
      </div>
      <div>
        <p className={styles.title}>{formatMessage({ id: "Publish.workCover" })}</p>
        <Components.c width={140} height={138} sourceImage={projectShareInfo.img} />
        <div className={styles.changePoster}>
          <Components.B
            onChange={handleChangeWorkCover}
            accept={Module_133.f}
          >{formatMessage({ id: "Publish.changeWorkCover" })}</Components.B>
        </div>
      </div>
    </div>
  </Dialog>
}
