/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-7
 */

import * as React from "react"

import { ne } from "../../../../../../unrestored/shared/1571/2636/index__part-4"
import { de } from "../../../../../../unrestored/shared/1571/2636/index__part-5"
import { we } from "../../../../../../unrestored/shared/1571/2636/index__part-6"
import * as /* [auto-meaningful-name] */Module_141 from /* 141 */"../../../../../../unrestored/shared/1571/2636/141/index"
import * as /* [auto-meaningful-name] */Module_190 from /* 190 */"../../../../../../unrestored/shared/1571/2636/190"
import * as /* [auto-meaningful-name] */Module_297 from /* 297 */"../../../../../../unrestored/shared/1571/2636/297"
import * as Tools from "../../../../../shared/tools"
import * as /* [auto-meaningful-name] */Module_1213 from /* 1213 */"../../../../../../unrestored/shared/1571/2636/1213"
import * as /* [auto-meaningful-name] */Module_18 from /* 18 */"../../../../../../unrestored/shared/1571/2636/18"
import { asyncGetProjectErrorAction, closeProjectDialogAction, openConfirmDialogAction, showCommonToastInfoAction, warpAsyncCreateProject } from "../../../../redux/common/actions"
import { AdvancedText, IconFont, Menu, MenuItem, ScrollPaginate } from "../../../../../shared/ui/components"
import * as /* [auto-meaningful-name] */Module_25 from /* 25 */"../../../../../../unrestored/shared/1571/2636/25/index"
import classNames from "classnames"
import { useIntl } from "react-intl"
import * as /* [auto-meaningful-name] */Shared_ui_language from "../../../../../shared/ui/language"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"../../../../../../unrestored/shared/1571/2636/7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import { useDispatch, useSelector } from "react-redux"
import * as /* [auto-meaningful-name] */Shared_player_audit from "../../../../../shared/player/audit"
import styles from "./styles.module.css"

enum EType {
  SELF = "self",
  COLL = "coll",
  PUBLISHED = "published",
  UNPUBLISHED = "unpublished"
}

const TYPES = [EType.SELF, EType.COLL, EType.PUBLISHED, EType.UNPUBLISHED]
const TIPS = {
  self: "MyProject.noCreateProjectTips",
  coll: "MyProject.noCollProjectTips",
  published: "MyProject.noPublishProjectTips",
  unpublished: "MyProject.noCreateProjectTips"
}

function je(e) {
  var /* [auto-meaningful-name] */e$title = e.title
  var /* [auto-meaningful-name] */e$type = e.type
  return "loaded" === e$type ? <></> : "emptyList" === e$type ? <div
    className={styles.emptyContainer}
  >
    {React.createElement(we, {
      text: e$title
    })}
  </div> : <></>
}

interface IProjectItemProps {
  project: (/** TODO */any)
  onClick(id: string, name: string, updateTime: string): void
  onDelete(id: string, name: string, isCollWork: boolean): void
  filterType: EType
  status: "loading" | "loaded" | "emptyList"
}

function ProjectItem({
  project, onClick, onDelete, filterType, status
}: IProjectItemProps) {

  const { formatMessage } = useIntl()

  function menuItems() {
    const items = []
    if (filterType === EType.COLL) {
      items.push("deleteCollProject")
    } else if (!project.publishedTime) {
      items.push("deleteProject")
    }
    return items
  }

  return <div
    className={classNames(styles.item)}
    onClick={() => { onClick(project.id, project.name, project.updateTime) }}
    key={project.id}
  >
    <div className={styles.cover}>
      <img
        src={(project.coverUrl || project.previewUrl)?.replace("https://static-creation.codemao.cn/", "https://creation.codemao.cn/")}
        alt={project.name}
      />
    </div>
    <AdvancedText className={styles.name} text={project.name} />
    <p className={styles.time}>
      {React.createElement(ne, {
        time: project.updateTime,
        currentTime: project.serverTime
      })}
    </p>
    {!!menuItems().length && <div
      className={styles.menuContainer}
      onClick={(event) => { event.stopPropagation() }}
    >
      <Module_1213.a
        placement="rightTop"
        trigger="click"
        overlayClassName={styles.menuPopover}
        zIndex={100}
        content={
          <div className={styles.menuContent}>
            <Menu
              onClick={(value) => {
                if (value === "deleteProject" || value === "deleteCollProject") {
                  onDelete(project.id, project.name, project.isCollWork || filterType === EType.COLL)
                }
              }}
            >
              {menuItems().map((item, index) => (
                <MenuItem value={item} key={index}>
                  <span>{formatMessage({ id: "MyProject." + item })}</span>
                </MenuItem>
              ))}
            </Menu>
          </div>
        }
      >
        <div><IconFont type="icon-more" /></div>
      </Module_1213.a>
    </div>}
    <div className={styles.badgeWrapper}>
      {(project.isCollWork || filterType === EType.COLL) && status === "loaded" &&
        <IconFont type="icon-collaborator" />}
      {!!project.publishedTime && <IconFont type="icon-publish" />}
    </div>
  </div>
}

export interface IMyProjectProps {
  visible: boolean
  importProjectJson
}

export const MyProject = React.memo(({ visible, importProjectJson }: IMyProjectProps) => {

  const [projects, setProjects] = React.useState([])
  const [status, setStatus] = React.useState<"loading" | "loaded" | "emptyList">("loaded")
  const language = useSelector((state) => state.common.language)
  const userInfo = useSelector((state) => state.common.userInfo)
  const id = useSelector((state) => state.project.id)
  const [selectedType, setSelectedType] = React.useState(EType.SELF)

  const dispatch = useDispatch()

  var C = React.useRef(0)
  var A = React.useRef(1)
  var j = React.useRef(false)

  const { formatMessage } = useIntl()

  async function onClick(id, r, o) {
    try {
      const response = await Module_297.d(id)
      const { data } = response
      if (data) {
        if (
          !(await Shared_player_audit.getWhitelist()).includes(Number(id)) &&
          !data.is_author &&
          data.is_coll_work &&
          data.content &&
          data.content.unsafeExtensionWidgetList &&
          data.content.unsafeExtensionWidgetList.length > 0
        ) {
          dispatch(openConfirmDialogAction({
            allowText: formatMessage({
              id: "know"
            }),
            title: "",
            content: (
              <div>
                作品使用了未审核的自定义控件，需将控件提交至
                <a href={Tools.WIDGET_POST_FORM_URL} target="__blank" rel="noopener noreferrer">Coco控件商城-投稿</a>
                并等待审核通过后才能进行协作。
              </div>
            ),
            cancelBtnVisible: false
          }))
          return
        }
        importProjectJson({
          json: data.content,
          projectId: id,
          lastSavedTime: 1e3 * data.updated_at,
          isCollWork: data.is_coll_work,
          isAuthor: data.is_author,
          editPermission: data.edit_permission,
          jsonFrom: data.is_coll_work ? Module_18.d.OTHER : Module_18.d.MY_WORK
        })
        Module_141.a("OpenWork", {
          workId: id,
          workType: selectedType === EType.COLL ? 2 : 1,
          isSuccess: true,
          failReason: ""
        })
      } else {
        dispatch(asyncGetProjectErrorAction({
          code: response.code
        }))
      }
    } catch (error) {
      console.error("getProjectJson error", error)
      Module_141.a("OpenWork", {
        workId: id,
        workType: selectedType === EType.COLL ? 2 : 1,
        isSuccess: false,
        failReason: error.message
      })
    }
    dispatch(closeProjectDialogAction())
  }

  var D = React.useCallback(function () {
    var e = Module_7.a(RegeneratorRuntime.mark(function e(t) {
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (!j.current) {
                e.next = 2
                break
              }
              return e.abrupt("return")
            case 2:
              if (j.current = true, setStatus("loading"), selectedType !== EType.COLL) {
                e.next = 10
                break
              }
              e.next = 7
              return P(t)
            case 7:
              t = e.sent
              e.next = 26
              break
            case 10:
              if (selectedType !== EType.SELF) {
                e.next = 16
                break
              }
              e.next = 13
              return M(t)
            case 13:
              t = e.sent
              e.next = 26
              break
            case 16:
              if (selectedType !== EType.PUBLISHED) {
                e.next = 22
                break
              }
              e.next = 19
              return M(t, true)
            case 19:
              t = e.sent
              e.next = 26
              break
            case 22:
              if (selectedType !== EType.UNPUBLISHED) {
                e.next = 26
                break
              }
              e.next = 25
              return M(t, false)
            case 25:
              t = e.sent
            case 26:
              F(t)
              j.current = false
            case 28:
            case "end":
              return e.stop()
          }
        }
      }, e)
    }))
    return function (t) {
      return e.apply(this, arguments)
    }
  }(), [selectedType])

  function M(e, t) {
    return L.apply(this, arguments)
  }
  function L() {
    return (L = Module_7.a(RegeneratorRuntime.mark(function e(t, n) {
      var /* [auto-meaningful-name] */e$sent
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (!(A.current < C.current)) {
                e.next = 2
                break
              }
              return e.abrupt("return", t)
            case 2:
              e.next = 4
              return Module_297.c(C.current, 20, n)
            case 4:
              e$sent = e.sent
              C.current += 20
              A.current = e$sent.total
              return e.abrupt("return", [].concat(Module_25.a(t), Module_25.a(e$sent.list)))
            case 8:
            case "end":
              return e.stop()
          }
        }
      }, e)
    }))).apply(this, arguments)
  }

  function P(e) {
    return B.apply(this, arguments)
  }
  function B() {
    return (B = Module_7.a(RegeneratorRuntime.mark(function e(t) {
      var /* [auto-meaningful-name] */e$sent
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (!(A.current < 20 * C.current)) {
                e.next = 2
                break
              }
              return e.abrupt("return", t)
            case 2:
              C.current++
              e.next = 5
              return Module_297.b(C.current, 20)
            case 5:
              e$sent = e.sent
              A.current = e$sent.total
              return e.abrupt("return", [].concat(Module_25.a(t), Module_25.a(e$sent.list)))
            case 8:
            case "end":
              return e.stop()
          }
        }
      }, e)
    }))).apply(this, arguments)
  }

  React.useEffect(function () {
    if (visible) {
      C.current = 0
      j.current = false
      D([])
    }
  }, [D, visible])

  if (!visible) {
    return null
  }

  function F(e) {
    setProjects(e)
    if (0 === e.length) {
      setStatus("emptyList")
    } else {
      setStatus("loaded")
    }
  }

  var G = function () {
    var e = Module_7.a(RegeneratorRuntime.mark(function e(t) {
      var n
      var r
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (!userInfo || selectedType !== EType.COLL) {
                e.next = 6
                break
              }
              e.next = 3
              return de(t, userInfo.id)
            case 3:
              n = e.sent
              e.next = 10
              break
            case 6:
              e.next = 8
              return Module_297.a(t)
            case 8:
              if (n = e.sent) {
                dispatch(showCommonToastInfoAction({
                  message: Shared_ui_language.c(language, "MyProject.deleteProjectSuccess").toString()
                }))
              }
            case 10:
              if (n) {
                if ((r = projects.findIndex(function (e) {
                  return e.id === t
                })) > -1) {
                  projects.splice(r, 1)
                  F(Module_25.a(projects))
                  if (id === t) {
                    dispatch(warpAsyncCreateProject())
                  }
                }
              } else {
                dispatch(showCommonToastInfoAction({
                  message: Shared_ui_language.c(language, "MyProject.deleteProjectError").toString(),
                  duration: 1e3,
                  type: "error"
                }))
              }
            case 11:
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

  function onDelete(e, t, n) {
    if (selectedType === EType.COLL) {
      dispatch(openConfirmDialogAction({
        onConfirm: G.bind(null, e),
        allowText: formatMessage({
          id: "MyProject.quitCollWorkConfirmText"
        }),
        title: formatMessage({
          id: "MyProject.quitCollWorkTitle"
        }, {
          name: Module_190.f(t)
        }),
        content: formatMessage({
          id: "MyProject.quitCollWorkDescription"
        }),
        isDangerous: true
      }))
    } else {
      G(e)
    }
  }

  var U = function () {
    var e = Module_7.a(RegeneratorRuntime.mark(function e(type) {
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              setSelectedType(type)
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
  }()

  return <div>
    <div className={styles.filter}>
      {TYPES.map((type) => (
        <div
          key={type}
          onClick={U.bind(null, type)}
          className={classNames(styles.filterItem, selectedType === type && styles.active)}
        >
          {formatMessage({ id: "MyProject.".concat(type) })}
        </div>
      ))}
    </div>
    <div className={styles.container}>
      {React.createElement(je, {
        title: formatMessage({ id: TIPS[selectedType] }),
        type: status
      })}
      {projects.length > 0 && (
        <div className={styles.main}>
          <ScrollPaginate
            offsetY={300}
            height={450}
            onScrollBottom={function () {
              D(projects)
            }}
          >
            {projects.map((project) => (
              <ProjectItem
                status={status}
                key={project.id}
                project={project}
                onClick={onClick}
                onDelete={onDelete}
                filterType={selectedType}
              />
            ))}
          </ScrollPaginate>
        </div>
      )}
    </div>
  </div>
})
