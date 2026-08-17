/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-22
 */

import * as React from "react"

import { B, G, H } from "../../../../unrestored/shared/1571/2636/index__part-2"
import { Q } from "../../../../unrestored/shared/1571/2636/index__part-3"
import { ProjectDialog } from "../Dialogs/ProjectDialog"
import { Ge } from "../../../../unrestored/shared/1571/2636/index__part-9"
import { UserInfo } from "./UserAvatar"
import { Xe, ot as Notice } from "../../../../unrestored/shared/1571/2636/index__part-11"
import { Collaboration } from "./Collaboration"
import { Dt } from "../../../../unrestored/shared/1571/2636/index__part-15"
import { Gt } from "../../../../unrestored/shared/1571/2636/index__part-16"
import { ShareMenuItem } from "./Share/MenuItem"
import { dn as SaveFailedDialog1, pn as SaveFailedDialog2, fn as SaveFailedDialog3 } from "../../../../unrestored/shared/1571/2636/index__part-20"
import { gn as SaveProgress } from "../../../../unrestored/shared/1571/2636/index__part-21"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"../../../../unrestored/shared/1571/2636/9"
import * as /* [auto-meaningful-name] */Module_276 from /* 276 */"../../../../unrestored/shared/1571/2636/276"
import * as LoadCustomWidget from "../../../shared/widget/custom/load"
import * as /* [auto-meaningful-name] */Module_141 from /* 141 */"../../../../unrestored/shared/1571/2636/141/index"
import * as /* [auto-meaningful-name] */Shared_tools from "../../../shared/tools"
import * as /* [auto-meaningful-name] */Module_97 from /* 97 */"../../../../unrestored/shared/1571/2636/97"
import * as /* [auto-meaningful-name] */Module_454 from /* 454 */"../../../../unrestored/shared/1571/2636/454"
import * as /* [auto-meaningful-name] */Module_18 from /* 18 */"../../../../unrestored/shared/1571/2636/18"
import * as CommonActions from "../../redux/common/actions"
import { warpAsyncCreateProject } from "../../redux/common/actions"
import * as Components from "../../../shared/ui/components"
import { Button, Dropdown, IconFont, Menu, MenuItem } from "../../../shared/ui/components"
import * as /* [auto-meaningful-name] */Module_627 from /* 627 */"../../../../unrestored/shared/1571/2636/627"
import classNames from "classnames"
import { useIntl } from "react-intl"
import { a as Tooltip } from "../../../../unrestored/shared/1571/2636/748/index"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"../../../../unrestored/shared/1571/2636/10/index"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"../../../../unrestored/shared/1571/2636/7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import { useDispatch, useSelector } from "react-redux"
import * as /* [auto-meaningful-name] */Module_47 from /* 47 */"../../../../unrestored/shared/1571/2636/47"
import cloudSpaceManagerStyles from "../../../../unrestored/shared/1571/2636/1053"

import styles from "./styles.module.css"

function CloudSpaceManager() {

  const { formatMessage } = useIntl()

  const header = useSelector((state) => state.uiConfig.header)
  const cloudDictList = useSelector((state) => state.cloudSpace.cloudDictList)
  const cloudTableList = useSelector((state) => state.cloudSpace.cloudTableList)

  const [outWarnLimit, setOutWarnLimit] = React.useState(false)
  const [outMaxLimit, setOutMaxLimit] = React.useState(false)

  React.useEffect(function () {
    setOutWarnLimit(false)
    setOutMaxLimit(false)
    var e
    var t = Module_47.a(cloudDictList)
    try {
      for (t.s(); !(e = t.n()).done;) {
        var /* [auto-meaningful-name] */e$value = e.value
        if (e$value.prod_capacity >= Module_9.a * Module_9.c) {
          setOutMaxLimit(true)
          break
        }
        if (e$value.prod_capacity >= Module_9.b * Module_9.c) {
          setOutWarnLimit(true)
        }
      }
    } catch (l) {
      t.e(l)
    } finally {
      t.f()
    }
    var i
    var a = Module_47.a(cloudTableList)
    try {
      for (a.s(); !(i = a.n()).done;) {
        var /* [auto-meaningful-name] */i$value = i.value
        if (i$value.prod_capacity >= Module_9.a * Module_9.d) {
          setOutMaxLimit(true)
          break
        }
        if (i$value.prod_capacity >= Module_9.b * Module_9.d) {
          setOutWarnLimit(true)
        }
      }
    } catch (l) {
      a.e(l)
    } finally {
      a.f()
    }
  }, [cloudDictList, cloudTableList])

  if (header.cloudSpaceManager === Module_18.j.Hide) {
    return null
  }

  const title = formatMessage(outMaxLimit ? {
    id: "cloudSpace.outMaxLimit"
  } : outWarnLimit ? {
    id: "cloudSpace.outWarnLimit"
  } : {
    id: "cloudSpace.cloudSpace"
  })

  return  <Tooltip
    placement="bottom"
    trigger={["hover"]}
    title={title}
    overlayInnerStyle={{ position: "relative", top: -7 }}
  >
    <div
      onClick={() => window.open(`${Shared_tools.A()}/`, "_blank")}
      className={classNames(cloudSpaceManagerStyles.cloudSpaceManager)}
    >
      {title === formatMessage({ id: "cloudSpace.outMaxLimit" }) && (
        <div className={cloudSpaceManagerStyles.cloudIconError}>
          <IconFont type="icon-cloud-manager-error" />
        </div>
      )}
      {title === formatMessage({ id: "cloudSpace.outWarnLimit" }) && (
        <div className={cloudSpaceManagerStyles.cloudIconWarn}>
          <IconFont type="icon-cloud-manager-warn" />
        </div>
      )}
      {title === formatMessage({ id: "cloudSpace.cloudSpace" }) && (
        <div>
          <IconFont type="icon-cloud-manager-normal" />
        </div>
      )}
    </div>
  </Tooltip>
}

export const Header = React.memo(({ children }: { children: JSX.Element }) => {
  const dispatch = useDispatch()
  var formatMessage = useIntl().formatMessage
  var o = React.useState(false)
  var i = Module_10.a(o, 2)
  var a = i[0]
  var s = i[1]
  var c = React.useState(false)
  var l = Module_10.a(c, 2)
  var u = l[0]
  var d = l[1]
  var asyncCreateProjectRef = React.useRef<null | (() => void)>()
  var userInfo = useSelector(function (e) {
    return e.common.userInfo
  })
  var saving = useSelector(function (e) {
    return e.common.saving
  })
  var isAuthor = useSelector(function (e) {
    return e.oTState.isAuthor
  })
  var checkedTimeStamp = useSelector(function (e) {
    return e.cloudSpace.checkedTimeStamp
  })
  var stageRulerVisible = useSelector(function (e) {
    return e.common.stageRulerVisible
  })
  var stageVisible = useSelector(function (e) {
    return e.common.stageVisible
  })
  var cloudDBManagerDialogVisible = useSelector(function (e) {
    return e.common.cloudDBManagerDialogVisible
  })
  var project = useSelector(function (e) {
    return e.project
  })
  const { isPackaging, packageQrCodeVisible, packageDialogVisible } = project
  var lastSavedTime = useSelector(function (e) {
    return e.common.lastSavedTime
  })
  var isProjectModified = useSelector(function (e) {
    return e.common.isProjectModified
  })
  var playing = useSelector(function (e) {
    return e.project.playing
  })
  var id = useSelector(function (e) {
    return e.project.id
  })
  var title = useSelector(function (e) {
    return e.project.title
  })
  var jsonFrom = useSelector(function (e) {
    return e.project.jsonFrom
  })
  var isUpdate = Module_97.a(id)
  var V = React.useRef(null)
  var X = React.useRef(null)
  var J = React.useRef(null)
  var $ = React.useState(false)
  var ee = Module_10.a($, 2)
  var ne = ee[0]
  var re = ee[1]
  const uiConfig = useSelector(function (e) {
    return e.uiConfig.header
  })
  var ie = React.useState(false)
  var ae = Module_10.a(ie, 2)
  var se = ae[0]
  var ce = ae[1]
  var le = undefined !== Shared_tools.parseURLSearchParamsToObject(window.location.href).archiveId
  React.useEffect(function () {
    re(false)
  }, [id])
  React.useEffect(function () {
    if (se) {
      save(false, true)
    }
  }, [checkedTimeStamp])
  React.useEffect(function () {
    function e() {
      if (V.current) {
        clearTimeout(V.current)
      }
    }
    if (isUpdate) {
      e()
    } else {
      V.current = window.setTimeout(function () {
        re(true)
      }, 18e4)
    }
    return e
  }, [id, isUpdate])
  var ue = React.useState(false)
  var de = Module_10.a(ue, 2)
  var pe = de[0]
  var fe = de[1]
  var collAutoSave = useSelector(function (e) {
    return e.common.collAutoSave
  })
  var historyArchiveId = useSelector(function (e) {
    return e.common.historyArchiveId
  })
  var collWorkId = useSelector(function (e) {
    return e.oTState.collWorkId
  })
  React.useEffect(function () {
    !function () {
      var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : H.PURPLE
      var t = G(e)
      var n = ""
      for (var r in t) if (t[r]) {
        n += "".concat(B[r], ": ").concat(t[r], "; ")
      }
      document.body.setAttribute("style", n)
    }()
    dispatch(CommonActions.Tf())
    dispatch(CommonActions.Xf())
  }, [dispatch])
  var _e = function () {
    var e = Module_7.a(RegeneratorRuntime.mark(function e() {
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (userInfo) {
                e.next = 3
                break
              }
              dispatch(CommonActions.openSignInDialogAction())
              return e.abrupt("return")
            case 3:
              if (!isPackaging) {
                e.next = 6
                break
              }
              dispatch(CommonActions.showCommonToastInfoAction({
                message: formatMessage({
                  id: "package.packagePending"
                }),
                type: "success"
              }))
              return e.abrupt("return")
            case 6:
              e.prev = 6
              e.next = 9
              return CommonActions.promisify(dispatch, CommonActions.Vf())
            case 9:
              e.next = 14
              break
            case 11:
              e.prev = 11
              e.t0 = e.catch(6)
              d(true)
            case 14:
            case "end":
              return e.stop()
          }
        }
      }, e, null, [[6, 11]])
    }))
    return function () {
      return e.apply(this, arguments)
    }
  }()
  var ve = function () {
    var e = Module_7.a(RegeneratorRuntime.mark(function e() {
      var /* [auto-meaningful-name] */e$sent
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              e.next = 2
              return save(false)
            case 2:
              e$sent = e.sent
              if (asyncCreateProjectRef.current) {
                asyncCreateProjectRef.current()
              }
              asyncCreateProjectRef.current = null
              if (e$sent) {
                dispatch(CommonActions.dj(Module_18.j.Hide))
                setTimeout(function () {
                  return Oe()
                }, 100)
              }
            case 6:
            case "end":
              return e.stop()
          }
        }
      }, e)
    }))
    return function () {
      return e.apply(this, arguments)
    }
  }()
  var ye = function () {
    if (asyncCreateProjectRef.current) {
      asyncCreateProjectRef.current()
    }
    asyncCreateProjectRef.current = null
    dispatch(CommonActions.dj(Module_18.j.Hide))
    setTimeout(function () {
      return Oe()
    }, 100)
  }
  var Ee = function () {
    var e = Module_7.a(RegeneratorRuntime.mark(function e() {
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (isUpdate || !isProjectModified) {
                e.next = 3
                break
              }
              dispatch(CommonActions.Ri({
                visible: true,
                openFrom: "backHome",
                onSave: ve,
                onImport: ye
              }))
              return e.abrupt("return")
            case 3:
              if (!isUpdate || !isProjectModified) {
                e.next = 9
                break
              }
              e.next = 6
              return save(true)
            case 6:
              if (e.sent) {
                e.next = 9
                break
              }
              return e.abrupt("return")
            case 9:
              dispatch(CommonActions.dj(Module_18.j.Hide))
              setTimeout(function () {
                return Oe()
              }, 100)
            case 11:
            case "end":
              return e.stop()
          }
        }
      }, e)
    }))
    return function () {
      return e.apply(this, arguments)
    }
  }()
  var Oe = function () {
    window.location.href = Shared_tools.B()
  }
  const save = React.useCallback(async (isAutoSave, isNeedReport) => {
    if (!userInfo) {
      dispatch(CommonActions.openSignInDialogAction())
      return
    }
    if (saving) {
      return
    }
    if (J.current) {
      clearTimeout(J.current)
    }
    if (!isAutoSave) {
      J.current = window.setTimeout(function () {
        dispatch(CommonActions.Qi(true))
      }, 6e3)
    }
    s(false)
    let isSuccess = true
    try {
      await CommonActions.promisify(dispatch, CommonActions.asyncSaveProjectAction({
        isUpdate,
        isAutoSave,
        isNeedReport
      }))
      if (!isAutoSave) {
        dispatch(CommonActions.showCommonToastInfoAction({
          message: formatMessage({
            id: "saveProject.successTips"
          }),
          type: "success"
        }))
      }
      fe(false)
    } catch (error) {
      if (error.message === Module_276.a.CLOUD_SPACE_DATA_ERROR) {
        dispatch(CommonActions.Cf(true))
        ce(true)
      } else {
        if (error.message !== Module_276.a.USER_CANCEL_SAVE && error.message !== Module_276.a.USER_NOT_LOGIN) {
          if (isAutoSave) {
            fe(true)
          } else {
            s(true)
          }
        }
      }
      dispatch(CommonActions.Si(false))
      isSuccess = false
    }
    if (J.current) {
      clearTimeout(J.current)
      dispatch(CommonActions.Qi(false))
    }
    return isSuccess
  }, [dispatch, formatMessage, isUpdate, saving, userInfo])
  React.useEffect(function () {
    function e() {
      if (X.current) {
        clearTimeout(X.current)
        X.current = null
      }
    }
    if (collWorkId || uiConfig.save === Module_18.j.Hide || uiConfig.save === Module_18.j.ReadOnly) {
      e()
    } else if (isUpdate && isProjectModified) {
      if (!X.current) {
        if (isUpdate && isProjectModified) {
          X.current = window.setTimeout(function () {
            save(true)
            e()
          }, 3e5)
        }
        return e
      }
    } else {
      e()
    }
  }, [isUpdate, isProjectModified, save, collWorkId, uiConfig.save])
  React.useEffect(function () {
    if (!saving) {
      if (historyArchiveId) {
        if (isProjectModified) {
          Module_7.a(RegeneratorRuntime.mark(function e() {
            return RegeneratorRuntime.wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    e.next = 2
                    return save(true)
                  case 2:
                    dispatch(CommonActions.sg(historyArchiveId))
                  case 3:
                  case "end":
                    return e.stop()
                }
              }
            }, e)
          }))()
        } else {
          dispatch(CommonActions.sg(historyArchiveId))
        }
      }
    }
  }, [isProjectModified, historyArchiveId, save, dispatch, saving])
  React.useEffect(function () {
    if (collAutoSave && isProjectModified) {
      save(true).then(function () {
        dispatch(CommonActions.di(false))
      }).catch(function (e) {
        console.error(e)
        dispatch(CommonActions.di(false))
      })
    }
  }, [isProjectModified, save, collAutoSave, dispatch])
  var Ce = function (e) {
    switch (e) {
      case "EXPORT_PROJECT_AS_JSON":
        dispatch(CommonActions.Of(true))
        Module_141.a("SaveToComputerClick", {
          workId: id,
          workName: title
        })
        break
      case "CREATE_NEW_PROJECT":
        dispatch(CommonActions.Ah(Module_18.f.CREATE_PROJECT))
        break
      case "OPEN_MY_PROJECT":
        if (!userInfo) {
          return void dispatch(CommonActions.openSignInDialogAction())
        }
        dispatch(CommonActions.Ah(Module_18.f.MY_PROJECT))
        break
      case "SAVE_AS":
        dispatch(CommonActions.asyncSaveProjectAction({
          isUpdate: false,
          isAutoSave: false,
          isNeedReport: true,
          isSaveAs: true
        }))
        break
      case "HISTORY":
        return void dispatch(CommonActions.tj(true))
      case "IMPORT_EXTENSION_WIDGET":
        break
      case "OPEN_LOCAL_FILE":
        dispatch(CommonActions.Gi(false))
    }
  }
  const importProjectJson = React.useCallback((e) => {
    if (isProjectModified) {
      dispatch(CommonActions.Ri({
        visible: true,
        openFrom: "",
        async onSave() {
          await save(false)
          if (asyncCreateProjectRef.current) {
            asyncCreateProjectRef.current()
          }
          asyncCreateProjectRef.current = null
        },
        onImport() {
          if (asyncCreateProjectRef.current) {
            asyncCreateProjectRef.current()
          }
          asyncCreateProjectRef.current = null
        }
      }))
      asyncCreateProjectRef.current = () => {
        dispatch(warpAsyncCreateProject(e))
      }
    } else {
      dispatch(warpAsyncCreateProject(e))
    }
    var editPermission = e?.editPermission === Module_18.c.ReadOnly ? Module_18.c.ReadOnly : Module_18.c.Edit
    dispatch(CommonActions.Ci(editPermission))
  }, [dispatch, save, isProjectModified])
  var Se = function () {
    var e = Module_7.a(RegeneratorRuntime.mark(function e(t) {
      var n
      var /* [auto-meaningful-name] */e$sent
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (!(t && t.length > 0)) {
                e.next = 10
                break
              }
              n = t[0]
              e.next = 4
              return Module_454.i(n)
            case 4:
              if (e$sent = e.sent) {
                e.next = 8
                break
              }
              console.error("file load failed")
              return e.abrupt("return")
            case 8:
              importProjectJson({
                json: e$sent,
                isAuthor: true,
                sourceTag: Module_18.g.LOCAL,
                jsonFrom: Module_18.d.LOCAL_FILE
              })
              Module_141.a("OpenComputerFileClick")
            case 10:
            case "end":
              return e.stop()
          }
        }
      }, e)
    }))
    return function (t) {
      return e.apply(this, arguments)
    }
  }()
  var Ae = function () {
    dispatch(CommonActions.Gi(true))
  }

  async function handleImportCustomWidget(fileList: FileList) {
    if (fileList && fileList.length > 0) {
      const file = fileList[0]!
      try {
        const { title } = await LoadCustomWidget.importCostumeWidgetFromBlob(file, false)
        dispatch(CommonActions.showCommonToastInfoAction({
          message: formatMessage({
            id: "HeaderDropdown.importExtensionSuccess"
          }, {
            title: title
          }),
          type: "info"
        }))
      } catch (error) {
        console.error(error)
      }
    }
  }

  var je = function (e) {
    if (!playing) {
      switch (e) {
        case "STAGE_RULER":
          dispatch(CommonActions.Wi(!stageRulerVisible))
          break
        case "STAGE_AREA":
          dispatch(CommonActions.Yi(!stageVisible))
      }
    }
  }
  React.useEffect(function () {
    if (uiConfig.preventLeave === Module_18.j.Show) {
      window.onbeforeunload = function (e) {
        if (e) {
          e.returnValue = "你要离开网页吗？"
        }
        return "你要离开网页吗？"
      }
    } else {
      window.onbeforeunload = function () {}
    }
  }, [uiConfig.preventLeave])
  React.useEffect(function () {
    window.addEventListener("message", Q.handle)
  }, [dispatch])
  var showOpenLocalFile = uiConfig.file.openLocalFile === Module_18.j.Show
  var showExportLocalFile = uiConfig.file.exportLocalFile === Module_18.j.Show && isAuthor
  var showSaveAs = uiConfig.file.saveAs === Module_18.j.Show && isAuthor
  var xe = function () {
    var e = Module_7.a(RegeneratorRuntime.mark(function e() {
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (!Module_627.a.isLoaded()) {
                e.next = 3
                break
              }
              dispatch(CommonActions.showCommonToastInfoAction({
                message: formatMessage({
                  id: "coursePlayingTips"
                })
              }))
              return e.abrupt("return")
            case 3:
              dispatch(CommonActions.fi(true))
            case 4:
            case "end":
              return e.stop()
          }
        }
      }, e)
    }))
    return function () {
      return e.apply(this, arguments)
    }
  }()
  var De = function () {
    window.open("".concat(Shared_tools.B(), "/about/"), "_blank")
  }
  return (
    <div className={styles.wrapper} data-html2canvas-ignore="true">
      <div className={styles.left}>
        {!le && uiConfig.logo !== Module_18.j.Hide && (
          <Tooltip
            mouseLeaveDelay={0}
            placement="bottom"
            title={formatMessage({ id: "back" })}
            overlayInnerStyle={{ position: "relative", top: -7 }}
          >
            <div className={styles.logoBox} id="logo" onClick={Ee}>
              <IconFont type="icon-dropdown-down" className={styles.back} />
              <div className={styles.logo} />
            </div>
          </Tooltip>
        )}
        {!le && uiConfig.cutLine === Module_18.j.Show && <div className={styles.logoCutLine} />}
        <div className={styles.menu}>
          {Object.values(uiConfig.file).includes(Module_18.j.Show) && !le && (
            <Dropdown
              className={styles.fileDropdown}
              overlay={
                <Menu onClick={Ce}>
                  {uiConfig.file.newProject === Module_18.j.Show && (
                    <MenuItem value="CREATE_NEW_PROJECT">
                      <div className={styles.itemContent}>
                        {formatMessage({ id: "HeaderDropdown.newProject" })}
                      </div>
                    </MenuItem>
                  )}
                  {uiConfig.file.openMyProject === Module_18.j.Show && (
                    <MenuItem value="OPEN_MY_PROJECT">
                      <div className={styles.itemContent}>
                        {formatMessage({ id: "HeaderDropdown.openProject" })}
                      </div>
                    </MenuItem>
                  )}
                  {showSaveAs && (
                    <MenuItem value="SAVE_AS">
                      <div className={styles.itemContent}>
                        {formatMessage({ id: "HeaderDropdown.saveAs" })}
                      </div>
                    </MenuItem>
                  )}
                  <div className={styles.line} />
                  {uiConfig.file.showHistory === Module_18.j.Show && isAuthor && (
                    <MenuItem value="HISTORY">
                      <div className={styles.itemContent}>
                        {formatMessage({ id: "HeaderDropdown.history" })}
                      </div>
                    </MenuItem>
                  )}
                  {!collWorkId && (
                    <MenuItem value="IMPORT_EXTENSION_WIDGET">
                      <Components.B
                        onChange={handleImportCustomWidget}
                        accept=".js,.jsx"
                        className={classNames(styles.itemUploadButton)}
                      >
                        {formatMessage({ id: "HeaderDropdown.importExtension" })}
                      </Components.B>
                    </MenuItem>
                  )}
                  {(showExportLocalFile || showExportLocalFile) && <div className={styles.line} />}
                  {showOpenLocalFile && (
                    <MenuItem value="OPEN_LOCAL_FILE">
                      <Components.B
                        onChange={Se}
                        onCancel={Ae}
                        accept=".json"
                        className={classNames(styles.itemUploadButton)}
                      >
                        {formatMessage({ id: "HeaderDropdown.openLocalFile" })}
                      </Components.B>
                    </MenuItem>
                  )}
                  {showExportLocalFile && (
                    <MenuItem value="EXPORT_PROJECT_AS_JSON">
                      <div className={styles.itemContent}>
                        {formatMessage({ id: "HeaderDropdown.exportProjectAsJson" })}
                      </div>
                    </MenuItem>
                  )}
                </Menu>
              }
            >
              <Tooltip
                mouseLeaveDelay={0}
                placement="bottom"
                trigger={["hover", "click"]}
                title={formatMessage({ id: "file" })}
                overlayInnerStyle={{ position: "relative", top: "6px", left: "5px" }}
              >
                <div className={styles.toolTipsBox}>
                  <IconFont className="coco-header-menuIcon" type="icon-file" />
                </div>
              </Tooltip>
            </Dropdown>
          )}
          {Object.values(uiConfig.tutorial).includes(Module_18.j.Show) && !le && (
            <Dropdown
              overlay={
                <Menu>
                  {uiConfig.tutorial.releaseInfo === Module_18.j.Show && (
                    <MenuItem value="courseVideo">
                      <div className={styles.itemLinkContent} onClick={xe}>
                        <span className={styles.link}>
                          {formatMessage({ id: "courseVideo" })}
                        </span>
                      </div>
                    </MenuItem>
                  )}
                  {uiConfig.tutorial.tutorial === Module_18.j.Show && (
                    <MenuItem value="tutorial">
                      <div className={styles.itemLinkContent}>
                        <a
                          href="https://codemao-guide.yuque.com/bfiekm/sbo5kh"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.link}
                        >
                          {formatMessage({ id: "seeTutorial" })}
                        </a>
                      </div>
                    </MenuItem>
                  )}
                  <div className={styles.line} />
                  {uiConfig.tutorial.feedback === Module_18.j.Show && (
                    <MenuItem value="feedback">
                      <div className={styles.itemLinkContent}>
                        <a
                          href="https://ozbws9i1yf.feishu.cn/share/base/form/shrcn5xCRSVjUiO4YnIrNRRdUDd"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.link}
                        >
                          {formatMessage({ id: "feedback" })}
                        </a>
                      </div>
                    </MenuItem>
                  )}
                  {uiConfig.tutorial.releaseInfo === Module_18.j.Show && (
                    <MenuItem value="releaseInfo">
                      <div className={styles.itemLinkContent} onClick={() => dispatch(CommonActions.showReleaseInfoDialog(true))}>
                        <span className={styles.link}>
                          {formatMessage({ id: "releaseInfo" })}
                        </span>
                      </div>
                    </MenuItem>
                  )}
                  {uiConfig.tutorial.about === Module_18.j.Show && (
                    <MenuItem value="aboutUs">
                      <div className={styles.itemLinkContent} onClick={De}>
                        <span className={styles.link}>
                          {formatMessage({ id: "aboutUs" })}
                        </span>
                      </div>
                    </MenuItem>
                  )}
                </Menu>
              }
            >
              <Tooltip
                mouseLeaveDelay={0}
                placement="bottom"
                trigger={["hover", "click"]}
                title={formatMessage({ id: "help" })}
                overlayInnerStyle={{ position: "relative", top: "6px", left: "5px" }}
              >
                <div className={styles.toolTipsBox}>
                  <IconFont className="coco-header-menuIcon" type="icon-help-circle-active" />
                </div>
              </Tooltip>
            </Dropdown>
          )}
          {Object.values(uiConfig.help).includes(Module_18.j.Show) && !le && (
            <Dropdown
              overlay={
                <Menu onClick={je}>
                  {uiConfig.help.ruler === Module_18.j.Show && (
                    <MenuItem value="STAGE_RULER">
                      <div className={classNames(styles.itemContent, playing && styles.disabled)}>
                        {formatMessage(stageRulerVisible ? { id: "HeaderDropdown.hideRuler" } : { id: "HeaderDropdown.showRuler" })}
                      </div>
                    </MenuItem>
                  )}
                  {uiConfig.help.stage === Module_18.j.Show && (
                    <MenuItem value="STAGE_AREA">
                      <div className={classNames(styles.itemContent, playing && styles.disabled)}>
                        {formatMessage(stageVisible ? { id: "HeaderDropdown.hideWidgetAndStage" } : { id: "HeaderDropdown.showWidgetAndStage" })}
                      </div>
                    </MenuItem>
                  )}
                </Menu>
              }
            >
              <Tooltip
                mouseLeaveDelay={0}
                placement="bottom"
                trigger={["hover", "click"]}
                title={formatMessage({ id: "setting" })}
                overlayInnerStyle={{ position: "relative", top: "6px", left: "5px" }}
              >
                <div className={styles.toolTipsBox}>
                  <IconFont className="coco-header-menuIcon" type="icon-settings" />
                </div>
              </Tooltip>
            </Dropdown>
          )}
        </div>
        {!le && uiConfig.cloudDBManager === Module_18.j.Show && (
          <Tooltip
            mouseLeaveDelay={0}
            placement="bottom"
            title={formatMessage({ id: "cloudDBManager" })}
            trigger={["hover", "click"]}
            overlayInnerStyle={{ position: "relative", top: -7 }}
          >
            <div
              className={classNames(styles.iconWrapper, styles.cloudIconWrapper, cloudDBManagerDialogVisible && styles.activeIconWrapper)}
              onClick={() => dispatch(userInfo ? CommonActions.jj(true) : CommonActions.openSignInDialogAction())}
            >
              <IconFont type="icon-database-manage-active" className={styles.databaseIcon} />
            </div>
          </Tooltip>
        )}
        <CloudSpaceManager />
      </div>
      <div className={styles.center}>{children}</div>
      <div className={styles.right}>
        {!le && uiConfig.coll === Module_18.j.Show && <div className={styles.otWrapper}><Collaboration /></div>}
        {!le && uiConfig.package === Module_18.j.Show && isAuthor && (
          <Dropdown
            className={styles.shareMenu}
            overlay={
              <Menu>
                <MenuItem>
                  <ShareMenuItem target="community" />
                </MenuItem>
                <MenuItem>
                  <ShareMenuItem target="others" />
                </MenuItem>
              </Menu>
            }
          >
            <Tooltip
              mouseLeaveDelay={0}
              placement="bottom"
              title={formatMessage({ id: "Publish.share" })}
              trigger={["hover", "click"]}
              overlayInnerStyle={{ position: "relative", top: -4 }}
            >
              <div className={classNames(styles.shareWrapper)}>
                <IconFont type="icon-share" className={styles.icon} />
              </div>
            </Tooltip>
          </Dropdown>
        )}
        {!le && uiConfig.cutLine === Module_18.j.Show && <div className={styles.cutLine} />}
        {!le && uiConfig.save === Module_18.j.Show && (
          <Tooltip
            placement="bottom"
            title={() => {
              if (!lastSavedTime) {
                return formatMessage({ id: "MyProject.notSaved" })
              }
              var e = lastSavedTime
              var t = Date.now()
              var n = t - e
              var o = Shared_tools.G(t, 0)
              var i = Shared_tools.G(t, -1)
              var a = Shared_tools.G(t, -2)
              var s = new Date(e)
              var c = ""
              var l = "".concat(formatMessage({ id: "MyProject.lastSaved" }), " ")
              if (n < 6e4) {
                c = "".concat(formatMessage({ id: "MyProject.justSaved" }))
              } else if (n < 36e5) {
                var u = Math.ceil(n / 60 / 1e3)
                u = Math.max(u, 1)
                u = Math.min(u, 59)
                c = l + "".concat(u).concat(formatMessage({ id: "MyProject.minute" })).concat(formatMessage({ id: "MyProject.ago" }))
              } else if (n < 216e5 || e > o) {
                var d = Math.floor(n / 36e5)
                var p = Math.floor(n % 36e5 / 6e4)
                if (d) {
                  c += "".concat(d).concat(formatMessage({ id: "MyProject.hour" }))
                }
                if (p) {
                  c += "".concat(p).concat(formatMessage({ id: "MyProject.minute" }))
                }
                c = l + (c += formatMessage({ id: "MyProject.ago" }))
              } else if (e > i) {
                c = l + (c = formatMessage({ id: "MyProject.yesterday" }) + Shared_tools.K(s))
              } else {
                if (e > a) {
                  c = l + (c = formatMessage({ id: "MyProject.theDayBeforeYesterday" }) + Shared_tools.K(s))
                } else {
                  c = "".concat(s.getFullYear()).concat(formatMessage({ id: "MyProject.year" }))
                  c += "".concat(s.getMonth() + 1).concat(formatMessage({ id: "MyProject.month" }))
                  c = l + (c += "".concat(s.getDate()).concat(formatMessage({ id: "MyProject.day" })))
                }
              }
              return c
            }}
            trigger={["hover", "click"]}
            overlayInnerStyle={{ position: "relative", top: "8px" }}
          >
            <Button
              onClick={() => save(false, true)}
              className={classNames(styles.saveBtn, saving && styles.saving)}
            >
              <span className={styles.saveText}>
                {formatMessage({ id: "save" })}
              </span>
              <span className={styles.savingIcon}>
                <Ge stroke="#6e4ff4" />
              </span>
            </Button>
          </Tooltip>
        )}
        {!le && uiConfig.package === Module_18.j.Show && isAuthor && (
          <Button
            className={styles.packageBtn}
            onClick={_e}
            disabled={isPackaging}
          >
            {formatMessage({ id: "package" })}
          </Button>
        )}
        {packageDialogVisible && <Dt />}
        {packageQrCodeVisible && <Gt />}
        {!le && uiConfig.userInfo === Module_18.j.Show && <UserInfo />}
        <div className={classNames(styles.saveTipsWrapper, jsonFrom !== Module_18.d.OTHER && ne && !isUpdate && styles.show)}>
          {formatMessage({ id: "MyProject.newSaveTips" })}
          <div className={styles.closeSaveTips} onClick={() => re(false)}>
            <IconFont type="icon-close" />
          </div>
        </div>
        {pe && (
          <Notice
            type={Xe.ERROR}
            message={formatMessage({ id: "MyProject.autoSaveErrorTips" })}
            onClose={() => fe(false)}
          />
        )}
        <ProjectDialog importProjectJson={importProjectJson} />
        <SaveProgress />
      </div>
      <SaveFailedDialog1 visible={a} onClose={() => s(false)} save={() => save(false)} />
      <SaveFailedDialog3 visible={u} onClose={() => d(false)} save={() => { d(false); _e() }} />
      <SaveFailedDialog2 />
    </div>
  )
})
