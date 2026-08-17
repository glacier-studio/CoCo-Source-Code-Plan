/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：37__part-4
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_18 from /* 18 */"../18"
import * as /* [auto-meaningful-name] */Immutable from /* 66 */"immutable"
import * as /* [auto-meaningful-name] */Module_343 from /* 343 */"./343"
var nt = Immutable.Record({
  header: {
    logo: Module_18.j.Show,
    file: {
      newProject: Module_18.j.Show,
      openMyProject: Module_18.j.Show,
      saveAs: Module_18.j.Show,
      showHistory: Module_18.j.Show,
      openLocalFile: Module_18.j.Show,
      exportLocalFile: Module_18.j.Show
    },
    tutorial: {
      tutorial: Module_18.j.Show,
      feedback: Module_18.j.Show,
      releaseInfo: Module_18.j.Show,
      about: Module_18.j.Show
    },
    help: {
      ruler: Module_18.j.Show,
      stage: Module_18.j.Show
    },
    projectName: Module_18.j.Show,
    coll: Module_18.j.Show,
    save: Module_18.j.Show,
    cloudDBManager: Module_18.j.Show,
    cloudSpaceManager: Module_18.j.Show,
    cutLine: Module_18.j.Show,
    package: Module_18.j.Show,
    userInfo: Module_18.j.Show,
    preventLeave: Module_18.j.Show
  },
  widgetPanel: Module_18.j.Show,
  stage: Module_18.j.Show,
  widgetEditor: Module_18.j.Show,
  workspace: Module_18.j.Show,
  screenPanel: Module_18.j.Show,
  resourceLibrary: Module_18.j.Show
})()
var rt = function () {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : nt
  var t = arguments.length > 1 ? arguments[1] : undefined
  switch (t.type) {
    case Module_343.a:
      return e.merge(t.payload)
    case Module_343.c:
      return e.mergeDeep(t.payload)
    case Module_343.b:
      return e.setIn(["header", "preventLeave"], t.payload)
    default:
      return e
  }
}
export { rt }
