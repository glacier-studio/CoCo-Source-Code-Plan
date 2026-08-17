/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-219
 */

import { Header } from "../Header"
import { PreviewArea } from "../PreviewArea"
import { EditArea } from "../EditArea"
import { Icons } from "../components/Icons"
import { lI } from "../../../../unrestored/shared/1571/2636/index__part-171"
import { hI } from "../../../../unrestored/shared/1571/2636/index__part-172"
import { bI } from "../../../../unrestored/shared/1571/2636/index__part-173"
import { BI } from "../../../../unrestored/shared/1571/2636/index__part-176"
import { aj } from "../../../../unrestored/shared/1571/2636/index__part-179"
import { mj } from "../../../../unrestored/shared/1571/2636/index__part-180"
import { rN } from "../../../../unrestored/shared/1571/2636/index__part-190"
import { kM } from "../../../../unrestored/shared/1571/2636/index__part-194"
import { OpenWork } from "../Functions/OpenWork"
import { PlayBox, pL } from "../components/PlayBox"
import { bL } from "../../../../unrestored/shared/1571/2636/index__part-201"
import { wL } from "../../../../unrestored/shared/1571/2636/index__part-202"
import { AL } from "../../../../unrestored/shared/1571/2636/index__part-203"
import { kL } from "../../../../unrestored/shared/1571/2636/index__part-204"
import { ML } from "../Dialogs/DownloadApk/index"
import { ReleaseInfo } from "../Dialogs/ReleaseInfo/index"
import { ZL } from "../../../../unrestored/shared/1571/2636/index__part-208"
import { aP } from "../../../../unrestored/shared/1571/2636/index__part-210"
import { _P } from "../../../../unrestored/shared/1571/2636/index__part-211"
import { kP } from "../../../../unrestored/shared/1571/2636/index__part-213"
import { LP } from "../../../../unrestored/shared/1571/2636/index__part-214"
import { zP } from "../../../../unrestored/shared/1571/2636/index__part-215"
import { qP } from "../../../../unrestored/shared/1571/2636/index__part-216"
import { ZP, JP } from "../../../../unrestored/shared/1571/2636/index__part-217"
import { iB } from "../../../../unrestored/shared/1571/2636/index__part-218"
import styles from "./styles.module.css"
import * as Tools from "../../../shared/tools"
import { parseURLSearchParamsToObject } from "../../../shared/tools"
import * as /* [auto-meaningful-name] */Module_97 from /* 97 */"../../../../unrestored/shared/1571/2636/97"
import * as /* [auto-meaningful-name] */Module_18 from /* 18 */"../../../../unrestored/shared/1571/2636/18"
import * as /* [auto-meaningful-name] */Redux_common_actions from "../../redux/common/actions"
import { Button, Dialog } from "../../../shared/ui/components"
import /* [auto-meaningful-name] */Classnames from "classnames"
import * as Language from "../../../shared/ui/language"
import * as /* [auto-meaningful-name] */Module_188 from /* 188 */"../../../../unrestored/shared/1571/2636/188"
import { IntlProvider } from /* 2681 */"react-intl"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"../../../../unrestored/shared/1571/2636/7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import { useSelector, useDispatch } from "react-redux"
import React from "react"
import { PermissionDialog } from "../PreviewArea/Player/PermissionDialog"
import "../style/global.css"

function lB(e) {
  e.preventDefault()
}
function uB(e) {
  e.preventDefault()
}
function dB() {
  var e = useDispatch()
  var t = useSelector(function (e) {
    return e.project.id
  })
  var n = Module_97.a(t)
  var r = function () {
    var t = Module_7.a(RegeneratorRuntime.mark(function t() {
      return RegeneratorRuntime.wrap(function (t) {
        for (;;) {
          switch (t.prev = t.next) {
            case 0:
              t.next = 2
              return Redux_common_actions.Nf(e, Redux_common_actions.tg({
                isUpdate: n,
                isAutoSave: false,
                isNeedReport: true
              }))
            case 2:
              if (t.sent) {
                e(Redux_common_actions.mj({
                  message: "作品保存成功",
                  type: "success"
                }))
              }
            case 4:
            case "end":
              return t.stop()
          }
        }
      }, t)
    }))
    return function () {
      return t.apply(this, arguments)
    }
  }()
  return <Module_188.a>
    <Module_188.b
      keys={{
        osx: "command+s",
        windows: "control+s"
      }}
      callback={r}
    />
  </Module_188.a>
}

export const App = React.memo(function () {

  const language = useSelector((state) => state.common.language)
  const visible = useSelector((state) => state.project.styleDialog.visible)
  const header = useSelector((state) => state.uiConfig.header)
  const hasArchiveId = parseURLSearchParamsToObject(window.location.href).archiveId !== undefined

  return <IntlProvider locale={language} messages={Language.messages[language] || Language.messages[Language.zh_CN]}>
    <div className={styles.layout} onDragOver={lB} onDrop={uB}>
      {React.createElement(dB, null)}
      <Icons />
      <OpenWork />
      <header className={styles.header}>
        <Header>
          <>
            <PlayBox />
            {!hasArchiveId && header.projectName !== Module_18.j.Hide && React.createElement(pL, {
              readonly: header.projectName === Module_18.j.ReadOnly
            })}
          </>
        </Header>
      </header>
      <section className={styles.body}>
        <aside><PreviewArea/></aside>
        <main className={styles.main}><EditArea /></main>
      </section>
      {React.createElement(lI, null)}
      {React.createElement(hI, null)}
      {React.createElement(rN, null)}
      {React.createElement(bI, null)}
      <PermissionDialog />
      {React.createElement(mj, null)}
      <BI/>
      {React.createElement(aj, null)}
      {React.createElement(kL, null)}
      {React.createElement(wL, null)}
      <AL/>
      <ML/>
      <ReleaseInfo />
      {React.createElement(aP, null)}
      <_P/>
      <ZL/>
      <LP/>
      {React.createElement(qP, null)}
      {visible && React.createElement(kM, null)}
      {React.createElement(bL, null)}
      {React.createElement(kP, null)}
      {React.createElement(zP, null)}
      <ZP/>
      <JP/>
      {React.createElement(iB, null)}
    </div>
  </IntlProvider>
})

var fB = function (e) {
  if (e && e instanceof Function && !Tools.h()) {
    import("../../../../unrestored/shared/1571/2636/3327").then(function (t) {
      var /* [auto-meaningful-name] */t$getCLS = t.getCLS
      var /* [auto-meaningful-name] */t$getFID = t.getFID
      var /* [auto-meaningful-name] */t$getFCP = t.getFCP
      var /* [auto-meaningful-name] */t$getLCP = t.getLCP
      var /* [auto-meaningful-name] */t$getTTFB = t.getTTFB
      t$getCLS(e)
      t$getFID(e)
      t$getFCP(e)
      t$getLCP(e)
      t$getTTFB(e)
    })
  }
}

export const isDevelopment = Boolean(
  window.location.hostname === "localhost" ||
  window.location.hostname === "dev-local.codemao.cn" ||
  window.location.hostname === "[::1]" ||
  window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
)

export interface ServiceWorkerRegisterInfo {
  swUrl: string
  onUpdate?(registration: ServiceWorkerRegistration): void
  onSuccess?(registration: ServiceWorkerRegistration): void
}

export function registerServiceWorker(scriptURL: string, info: ServiceWorkerRegisterInfo) {
  navigator.serviceWorker.register(scriptURL).then((registration) => {
    registration.onupdatefound = () => {
      const { installing } = registration
      if (installing != null) {
        installing.onstatechange = () => {
          if (installing.state === "installed") {
            if (navigator.serviceWorker.controller) {
              console.info("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA.")
              if (info && info.onUpdate) {
                info.onUpdate(registration)
              }
            } else {
              if (info && info.onSuccess) {
                info.onSuccess(registration)
              }
            }
          }
        }
      }
    }
  }).catch(function (e) {
    console.error("Error during service worker registration:", e)
  })
}

export { fB }
