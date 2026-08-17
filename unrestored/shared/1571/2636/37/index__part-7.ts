/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：37__part-7
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_177 from /* 177 */"../177"
import * as /* [auto-meaningful-name] */Module_297 from /* 297 */"../297"
import * as /* [auto-meaningful-name] */Module_26 from /* 26 */"../26/index"
import * as /* [auto-meaningful-name] */Module_139 from /* 139 */"../207/139"
import * as /* [auto-meaningful-name] */Module_197 from /* 197 */"../197/index"
import * as /* [auto-meaningful-name] */Module_141 from /* 141 */"../141/index"
import * as /* [auto-meaningful-name] */Module_553 from /* 553 */"../553"
import * as /* [auto-meaningful-name] */Module_328 from /* 328 */"../328"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"../9"
import * as /* [auto-meaningful-name] */Module_215 from /* 215 */"../215"
import * as /* [auto-meaningful-name] */Module_305 from /* 305 */"../305"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */Module_64 from /* 64 */"../64/index"
import * as /* [auto-meaningful-name] */Src_shared_ui_language from /* 23 */"../../../../../src/shared/ui/language"
import * as /* [auto-meaningful-name] */Module_24 from /* 24 */"../24/index"
import * as /* [auto-meaningful-name] */Module_49 from /* 49 */"../49"
import * as /* [auto-meaningful-name] */Src_shared_tools_index from /* 15 */"../../../../../src/shared/tools/index"
import * as /* [auto-meaningful-name] */Module_97 from /* 97 */"../97/index"
import * as /* [auto-meaningful-name] */Module_145 from /* 145 */"../145"
function gn(e) {
  window.localStorage.removeItem("@__INITIALIZED__".concat(e))
  var t = "@".concat(e, "_DOCUMENT")
  Object.keys(window.localStorage).forEach(function (e) {
    if (0 === e.indexOf(t)) {
      window.localStorage.removeItem(e)
    }
  })
}
export { gn }
