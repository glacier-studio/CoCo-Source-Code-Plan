/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-14
 */

import * as React from "react"

import { se, le, de, fe, ge } from "../../../../../unrestored/shared/1571/2636/index__part-5"
import { _t, vt as InvalidUrlDialog, bt as LoadingDialog, yt as Users } from "../../../../../unrestored/shared/1571/2636/index__part-13"
import styles from "../../../../../unrestored/shared/1571/2636/136"
import * as CollaborationMessage from "../../../../../unrestored/shared/1571/2636/100"
import * as /* [auto-meaningful-name] */Module_24 from /* 24 */"../../../../../unrestored/shared/1571/2636/24/index"
import * as /* [auto-meaningful-name] */Shared_player_audit from "../../../../shared/player/audit"
import * as /* [auto-meaningful-name] */Module_141 from /* 141 */"../../../../../unrestored/shared/1571/2636/141/index"
import * as Tools from "../../../../shared/tools"
import * as /* [auto-meaningful-name] */Module_1213 from /* 1213 */"../../../../../unrestored/shared/1571/2636/1213"
import * as /* [auto-meaningful-name] */Module_97 from /* 97 */"../../../../../unrestored/shared/1571/2636/97"
import * as /* [auto-meaningful-name] */Module_18 from /* 18 */"../../../../../unrestored/shared/1571/2636/18"
import * as Actions from "../../../redux/common/actions"
import { Button, Dialog, IconFont, Popover } from "../../../../shared/ui/components"
import classNames from "classnames"
import { useIntl } from "react-intl"
import * as /* [auto-meaningful-name] */Module_748 from /* 748 */"../../../../../unrestored/shared/1571/2636/748/index"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"../../../../../unrestored/shared/1571/2636/10/index"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"../../../../../unrestored/shared/1571/2636/7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import { useDispatch, useSelector } from "react-redux"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"../../../../../unrestored/shared/1571/2636/9"
import * as CustomWidgetType from "../../../../shared/widget/custom/type"
var PermissionDialog = function (e) {
  var t
  var /* [auto-meaningful-name] */e$permission
  var r = React.useState(false)
  var o = Module_10.a(r, 2)
  var i = o[0]
  var a = o[1]
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var c = function () {
    a(false)
  }
  React.useEffect(function () {
    if (!e.parentVisible) {
      a(false)
    }
  }, [e.parentVisible])
  return e.isAuthor ? (
    <Module_1213.a
      placement="bottom"
      content={(t = e.id, e$permission = e.permission, (
        <div className={styles.permissionDialog}>
          <div
            onClick={() => e.handleChangePermission(Module_18.c.Edit, t, c)}
            className={styles.item}
          >
            <IconFont
              type="icon-selected"
              className={classNames(styles.icon, e$permission === Module_18.c.Edit && styles.selected)}
            />
            <span>{useIntl$formatMessage({ id: "OT.dialogCanEdit" })}</span>
          </div>
          <div
            onClick={() => e.handleChangePermission(Module_18.c.ReadOnly, t, c)}
            className={styles.item}
          >
            <IconFont
              type="icon-selected"
              className={classNames(styles.icon, e$permission === Module_18.c.ReadOnly && styles.selected)}
            />
            <span>{useIntl$formatMessage({ id: "OT.dialogReadOnly" })}</span>
          </div>
          <div
            onClick={() => e.handleRemovePermission(t, c)}
            className={classNames(styles.item, styles.remove)}
          >
            <span>{useIntl$formatMessage({ id: "OT.dialogRemove" })}</span>
          </div>
        </div>
      ))}
      trigger="click"
      visible={i}
      onVisibleChange={(e) => a(e)}
    >
      <div className={styles.edit_role}>
        <span>
          {e.permission === Module_18.c.Edit
            ? useIntl$formatMessage({ id: "OT.edit" })
            : useIntl$formatMessage({ id: "OT.readonly" })}
        </span>
        <div className={styles.icon}>
          <IconFont type="icon-dropdown-down" className={styles.icon} />
        </div>
      </div>
    </Module_1213.a>
  ) : (
    <div className={classNames(styles.edit_role, styles.disabled)}>
      <span>
        {e.permission === Module_18.c.Edit
          ? useIntl$formatMessage({ id: "OT.edit" })
          : useIntl$formatMessage({ id: "OT.readonly" })}
      </span>
      <div className={styles.icon}>
        <IconFont type="icon-dropdown-down" className={styles.icon} />
      </div>
    </div>
  )
}
var Ct = React.memo(function () {
  var project = useSelector(function (e) {
    return e.project
  })
  var /* [auto-meaningful-name] */project$id = project.id
  var title = project.title
  var cooperationUserList = useSelector(function (e) {
    return e.oTState.cooperationUserList
  })
  var onlineCooperationUserColorRecord = useSelector(function (e) {
    return e.oTState.onlineCooperationUserColorRecord
  })
  var userInfo = useSelector(function (e) {
    return e.common.userInfo
  })
  var isAuthor = useSelector(function (e) {
    return e.oTState.isAuthor
  })
  var collWorkId = useSelector(function (e) {
    return e.oTState.collWorkId
  })
  var formatMessage = useIntl().formatMessage
  var isProjectModified = useSelector(function (e) {
    return e.common.isProjectModified
  })
  if (cooperationUserList.size === 0 && userInfo) {
    cooperationUserList = cooperationUserList.push({
      id: userInfo.id,
      avatar_url: userInfo.avatar_url,
      nickname: userInfo.nickname,
      is_author: true,
      edit_permission: 1
    })
  }
  var isUpdate = Module_97.a(project$id)
  var editorInviteUrl = useSelector(function (e) {
    return e.oTState.editorInviteUrl
  })
  var readOnlyInviteUrl = useSelector(function (e) {
    return e.oTState.readOnlyInviteUrl
  })
  var dispatch = useDispatch()
  var g = React.useState(false)
  var v = Module_10.a(g, 2)
  var b = v[0]
  var y = v[1]
  var w = React.useState(Module_18.c.Edit)
  var C = Module_10.a(w, 2)
  var T = C[0]
  var j = C[1]
  var R = React.useRef(null)
  var k = React.useState(false)
  var x = Module_10.a(k, 2)
  var D = x[0]
  var M = x[1]
  async function share() {
    const unsafeWidgets = Module_9.Eb(Module_9.j.EXTENSION).filter((widget) => {
      return !CustomWidgetType.isSafeExtensions(widget.type)
    })
    if (!(await Shared_player_audit.getWhitelist()).includes(Number(project$id)) && unsafeWidgets.length > 0) {
      y(false)
      dispatch(Actions.openConfirmDialogAction({
        allowText: formatMessage({
          id: "know"
        }),
        title: "",
        content: (
          <div>
            作品使用了未审核的自定义控件，需将控件提交至<a href={Tools.WIDGET_POST_FORM_URL} target="__blank" rel="noopener noreferrer">Coco控件商城-投稿</a>，并等待审核通过后才能进行协作。
          </div>
        ),
        cancelBtnVisible: false
      }))
      return
    }
    let newId = project$id
    y(true)
    if (!isUpdate && isProjectModified) {
      newId = await Actions.promisify(dispatch, Actions.asyncSaveProjectAction({
        isUpdate,
        isAutoSave: true
      }))
    } else {
      newId = project$id
    }
    if (Module_9.Y().length > 0) {
      y(false)
      dispatch(Actions.openConfirmDialogAction({
        allowText: "确定",
        title: "提示",
        content: "作品中含有云数据库控件，暂时无法协作",
        cancelBtnVisible: false
      }))
      return
    }
    if (!editorInviteUrl) {
      if (newId !== collWorkId) {
        await se(newId)
      }
      dispatch(CollaborationMessage.o(newId))
      const inviteCode = await fe(newId, Module_18.c.Edit)
      const inviteUrl = Tools.x(newId, inviteCode)
      dispatch(CollaborationMessage.p(inviteUrl))
    }
    Module_141.a("InviteCollaborationClick", {
      authorId: userInfo?.id || "",
      nickName: userInfo?.nickname || ""
    })
  }
  var P = function () {
    var e = Module_7.a(RegeneratorRuntime.mark(function e(n, r, o) {
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              ge(r, project$id, n).then(function () {
                var /* [auto-meaningful-name] */R$current
                le(project$id).then(function () {
                  var e = Module_7.a(RegeneratorRuntime.mark(function e(t) {
                    return RegeneratorRuntime.wrap(function (e) {
                      for (;;) {
                        switch (e.prev = e.next) {
                          case 0:
                            dispatch(CollaborationMessage.s(t))
                          case 1:
                          case "end":
                            return e.stop()
                        }
                      }
                    }, e)
                  }))
                  return function (t) {
                    return e.apply(this, arguments)
                  }
                }())
                if (!(null === (R$current = R.current) || undefined === R$current)) {
                  R$current.hideContent()
                }
                o()
              })
            case 1:
            case "end":
              return e.stop()
          }
        }
      }, e)
    }))
    return function (t, n, r) {
      return e.apply(this, arguments)
    }
  }()
  var B = function () {
    var e = Module_7.a(RegeneratorRuntime.mark(function e(n, r) {
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              de(project$id, n).then(function () {
                var /* [auto-meaningful-name] */R$current
                if (!(null === (R$current = R.current) || undefined === R$current)) {
                  R$current.hideContent()
                }
                r()
              })
            case 1:
            case "end":
              return e.stop()
          }
        }
      }, e)
    }))
    return function (t, n) {
      return e.apply(this, arguments)
    }
  }()
  var F = (
    <div className={styles.content}>
      {isAuthor && (
        <div className={styles.header}>
          <Button
            className={styles.shareButton}
            onClick={() => share.apply(this, arguments)}
          >
            <IconFont className={styles.invitationIcon} type="icon-ot-invitation" />
            {formatMessage({ id: "OT.inviteFriend" })}
          </Button>
        </div>
      )}
      <ul className={styles.list}>
        {cooperationUserList.map((e, t) => {
          var n = e.id
          var e$is_author = e.is_author
          var e$edit_permission = e.edit_permission
          return (
            <li key={t}>
              <div
                className={classNames(styles.headerPhotoBorder)}
                key={e.id}
                style={{
                  marginRight: "8px",
                  borderColor: onlineCooperationUserColorRecord.get(e.id)
                }}
              >
                <div
                  className={styles.headPhoto}
                  style={{ backgroundImage: `url(${e.avatar_url})` }}
                />
              </div>
              <div className={styles.name}>
                <p>{e.nickname}</p>
                <span>{e.id}</span>
              </div>
              {e$is_author ? (
                <div className={styles.role}>
                  <div>{formatMessage({ id: "OT.creator" })}</div>
                </div>
              ) : (
                <PermissionDialog
                  isAuthor={isAuthor}
                  permission={e$edit_permission}
                  id={n}
                  handleChangePermission={P}
                  handleRemovePermission={B}
                  parentVisible={D}
                />
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
  var G = React.useCallback(function () {
    return T === Module_18.c.Edit ? editorInviteUrl : T === Module_18.c.ReadOnly ? readOnlyInviteUrl : ""
  }, [editorInviteUrl, readOnlyInviteUrl, T])
  var W = React.useCallback(function () {
    var e = Module_7.a(RegeneratorRuntime.mark(function e(n) {
      var /* [auto-meaningful-name] */e$sent
      var o
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (n !== Module_18.c.Edit) {
                e.next = 3
                break
              }
              j(n)
              return e.abrupt("return")
            case 3:
              if (n !== Module_18.c.ReadOnly) {
                e.next = 14
                break
              }
              if (readOnlyInviteUrl) {
                e.next = 13
                break
              }
              e.next = 7
              return fe(project$id, Module_18.c.ReadOnly)
            case 7:
              e$sent = e.sent
              o = Tools.x(project$id, e$sent)
              dispatch(CollaborationMessage.r(o))
              j(n)
              e.next = 14
              break
            case 13:
              j(n)
            case 14:
            case "end":
              return e.stop()
          }
        }
      }, e)
    }))
    return function (t) {
      return e.apply(this, arguments)
    }
  }(), [dispatch, project$id, readOnlyInviteUrl])
  return (
    <div style={{ height: "100%" }}>
      <Popover
        content={F}
        className={styles.oTButton}
        onOpen={() => M(true)}
        onClose={() => M(false)}
        ref={R}
      >
        <Module_748.a
          mouseLeaveDelay={0}
          placement="bottom"
          title={formatMessage({ id: "OT.coll" })}
          trigger={["hover", "click"]}
          overlayInnerStyle={{ position: "relative", top: -4 }}
        >
          <div className={classNames(styles.collIconWrapper, D && styles.activeCollIconWrapper)}>
            <IconFont type="icon-collaborate-active" className={styles.collIcon} />
          </div>
        </Module_748.a>
      </Popover>
      <Dialog
        className={styles.shareOtDialog}
        visible={b}
        title={formatMessage({ id: "OT.copyCollInvitationUrl" })}
        onClose={() => y(false)}
      >
        <div className={styles.dialogMain}>
          <div className={styles.text}>{formatMessage({ id: "OT.expiration" })}</div>
          <div
            onClick={() => W(Module_18.c.Edit)}
            className={classNames(styles.tab, T === Module_18.c.Edit && styles.selected)}
          >
            {formatMessage({ id: "OT.editor" })}
            <span>{formatMessage({ id: "OT.editorRules" })}</span>
            {T === Module_18.c.Edit && (
              <div className={styles.icon}>
                <IconFont type="icon-selected" />
              </div>
            )}
          </div>
          <div
            onClick={() => W(Module_18.c.ReadOnly)}
            className={classNames(styles.tab, T === Module_18.c.ReadOnly && styles.selected)}
          >
            {formatMessage({ id: "OT.reader" })}
            <span>{formatMessage({ id: "OT.readerRules" })}</span>
            {T === Module_18.c.ReadOnly && (
              <div className={styles.icon}>
                <IconFont type="icon-selected" />
              </div>
            )}
          </div>
        </div>
        {G() ? (
          <Button
            className={styles.copy}
            type="primary"
            onClick={() => {
              var e = document.createElement("input")
              var t =
                T === Module_18.c.Edit
                  ? `${G()} 点击链接，一起进入《${title}》的协同创作吧~`
                  : `${G()} 点击链接，查看《${title}》的作品内容吧~`
              e.setAttribute("value", t)
              document.body.append(e)
              e.select()
              document.execCommand("Copy")
              document.body.removeChild(e)
              dispatch(Actions.showCommonToastInfoAction({
                type: "success",
                message: formatMessage({ id: "OT.copySuccess" }),
                showCloseIcon: false
              }))
              y(false)
            }}
          >
            {formatMessage({ id: "OT.copyLink" })}
          </Button>
        ) : (
          <Button className={styles.loadingBtn} type="primary">
            <IconFont type="icon-loading2" />
          </Button>
        )}
      </Dialog>
    </div>
  )
})
export const Collaboration = React.memo(() => {
  const id = useSelector(function (e) {
    return e.project.id
  })
  const [showInvalidUrlDialog, setShowInvalidUrlDialog] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)
  const dispatch = useDispatch()
  const collWorkId = useSelector(function (e) {
    return e.oTState.collWorkId
  })
  React.useEffect(function () {
    if (collWorkId) {
      setIsLoading(true)
      le(collWorkId).then(function () {
        var e = Module_7.a(RegeneratorRuntime.mark(function e(t) {
          return RegeneratorRuntime.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  dispatch(CollaborationMessage.s(t))
                case 1:
                case "end":
                  return e.stop()
              }
            }
          }, e)
        }))
        return function (t) {
          return e.apply(this, arguments)
        }
      }())
      Module_24.a.init(collWorkId).then(() => {
        setIsLoading(false)
      })
    } else {
      setIsLoading(false)
      Module_24.a.disconnect()
    }
  }, [dispatch, collWorkId])
  return (
    <>
      <Users />
      <Ct />
      <InvalidUrlDialog visible={showInvalidUrlDialog} onClose={() => setShowInvalidUrlDialog(false)} />
      <LoadingDialog visible={isLoading} />
      {Module_97.a(id) && <_t />}
    </>
  )
})
