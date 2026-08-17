/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-18
 */

import { ShareQRDialog } from "./Dialogs/QR"
import { ShareCommunityDialog } from "./Dialogs/Community"
import * as CustomWidgetRestrict from "../../../../shared/widget/custom/restrict"
import * as CustomWidgetStorage from "../../../../shared/widget/custom/storage"
import /* [auto-meaningful-name] */Unrestored_shared_1571_2636_1510 from "../../../../../unrestored/shared/1571/2636/1510"
import /* [auto-meaningful-name] */Unrestored_shared_1571_2636_1509 from "../../../../../unrestored/shared/1571/2636/1509"
import * as CustomWidgetType from "../../../../shared/widget/custom/type"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"../../../../../unrestored/shared/1571/2636/9"
import { getWhitelist } from "../../../../shared/player/audit"
import * as Tools from "../../../../shared/tools"
import * as /* [auto-meaningful-name] */Module_97 from /* 97 */"../../../../../unrestored/shared/1571/2636/97"
import * as CommonActions from "../../../redux/common/actions"
import { promisify, showCommonToastInfoAction } from "../../../redux/common/actions"
import { useIntl } from "react-intl"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"../../../../../unrestored/shared/1571/2636/7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import { useSelector, useDispatch } from "react-redux"
import React from "react"
import { useState } from "react"
import styles from "../../../../../unrestored/shared/1571/2636/1052"

enum EShareDialogType {
  NONE = "NONE",
  SHARE_COMMUNITY_DIALOG = "SHARE_COMMUNITY_DIALOG",
  SHARE_QR_DIALOG = "SHARE_QR_DIALOG"
}

export function ShareMenuItem({ target }: { target: "community" | "others" }) {

  const dialogInfo = {
    icon: target === "community" ? Unrestored_shared_1571_2636_1509 : Unrestored_shared_1571_2636_1510,
    message: target === "community" ? "Publish.shareToCommunity" : "Publish.shareToOthers",
    dialogType: target === "community" ? EShareDialogType.SHARE_COMMUNITY_DIALOG : EShareDialogType.SHARE_QR_DIALOG
  }

  const [dialogType, setDialogType] = useState(EShareDialogType.NONE)
  const userInfo = useSelector((state) => state.common.userInfo)
  const { formatMessage } = useIntl()
  const id = useSelector((state) => state.project.id)
  const globalWidgetIds = useSelector((state) => state.project.globalWidgetIds)
  const dispatch = useDispatch()

  async function showShareDialog() {
    if (!userInfo) {
      dispatch(CommonActions.openSignInDialogAction())
      return
    }
    const widgetTypesMap = {}
    globalWidgetIds.forEach((id) => {
      var types = Module_9.Bb(id)
      if (types) {
        widgetTypesMap[id] = types
      }
    })
    const widgetIncludingKeyWord = new Set<string>()
    const includesKeyWords = new Set<string>()
    Object.values(widgetTypesMap).forEach(({ type }) => {
      const storage = CustomWidgetStorage.getExtension(type)
      if (type.includes(CustomWidgetType.UNSAFE_EXTENSION_PREFIX) && storage) {
        const notNullStorage = storage
        CustomWidgetRestrict.keyWords.forEach((keyWord) => {
          if (notNullStorage.code?.includes(keyWord)) {
            includesKeyWords.add(keyWord)
            widgetIncludingKeyWord.add(storage.types.title)
          }
        })
      }
    })
    if (includesKeyWords.size) {
      dispatch(CommonActions.openConfirmDialogAction({
        allowText: formatMessage({ id: "cloudDb.know" }),
        title: "error",
        content: formatMessage({
          id: "Play.widgetNotSupportsForbiddenKeywords"
        }, {
          widgetTypeNames: Array.from(widgetIncludingKeyWord).join("、"),
          keywords: Array.from(includesKeyWords).join("、")
        }),
        cancelBtnVisible: false
      }))
      return
    }
    const unsafeExtensions = Module_9.Eb(Module_9.j.EXTENSION).filter(function (e) {
      return !CustomWidgetType.isSafeExtensions(e.type)
    })
    if (!(await getWhitelist()).includes(Number(id)) && unsafeExtensions.length > 0) {
      dispatch(CommonActions.openConfirmDialogAction({
        allowText: formatMessage({ id: "know" }),
        title: "",
        content: (
          <div>
            作品使用了未审核的自定义控件，需将控件提交至
            <a href={Tools.WIDGET_POST_FORM_URL} target="__blank" rel="noopener noreferrer">
              Coco控件商城-投稿
            </a>
            ，并等待审核通过后才能进行分享。
          </div>
        ),
        cancelBtnVisible: false
      }))
      return
    }
    const boundSetDialogType = () => { setDialogType(dialogInfo.dialogType) }
    if (dialogInfo.dialogType === EShareDialogType.SHARE_QR_DIALOG) {
      promisify(dispatch, CommonActions.Wf(boundSetDialogType))
    } else if (Module_9.Y().length > 0 && localStorage.getItem("cloudDBPublishGuide") !== "true") {
      dispatch(CommonActions.kj(true, "share", boundSetDialogType))
    } else {
      boundSetDialogType()
    }
  }

  function saveProject() {
    return g.apply(this, arguments)
  }
  function g() {
    return (g = Module_7.a(RegeneratorRuntime.mark(function e() {
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              e.prev = 0
              e.next = 3
              return promisify(dispatch, CommonActions.tg({
                isUpdate: Module_97.a(id),
                isAutoSave: true
              }))
            case 3:
              e.next = 5
              return dispatch(CommonActions.kh())
            case 5:
              return e.abrupt("return", true)
            case 8:
              e.prev = 8
              e.t0 = e.catch(0)
              e.next = 12
              return dispatch(showCommonToastInfoAction({
                message: formatMessage({
                  id: "Publish.projectSaveFail"
                }),
                type: "error"
              }))
            case 12:
              return e.abrupt("return", false)
            case 13:
            case "end":
              return e.stop()
          }
        }
      }, e, null, [[0, 8]])
    }))).apply(this, arguments)
  }

  function closeDialog() {
    setDialogType(EShareDialogType.NONE)
  }

  return <div>
    <div onClick={showShareDialog} className={styles.shareBtn}>
      <img src={dialogInfo.icon} alt={target} className={styles.shareIcon} />
      <span className={styles.shareMessage}>{formatMessage({ id: dialogInfo.message })}</span>
    </div>
    <ShareCommunityDialog
      onClose={closeDialog}
      onConfirm={saveProject}
      visible={dialogType === EShareDialogType.SHARE_COMMUNITY_DIALOG}
    />
    <ShareQRDialog
      onClose={closeDialog}
      onConfirm={saveProject}
      visible={dialogType === EShareDialogType.SHARE_QR_DIALOG}
    />
  </div>
}
