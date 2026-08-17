/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：301__part-5
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"../../../../../unrestored/shared/1571/2636/9"
import * as /* [auto-meaningful-name] */Shared_widget_custom_load from /* 34 */"../../../../shared/widget/custom/load"
import * as /* [auto-meaningful-name] */Module_118 from /* 118 */"../../../../../unrestored/shared/1571/2636/118/index"
import * as /* [auto-meaningful-name] */Shared_tools_index from /* 15 */"../../../../shared/tools/index"
import * as /* [auto-meaningful-name] */Module_85 from /* 85 */"../../../../../unrestored/shared/1571/2636/34/85"
function fe(e, t) {
  var n
  if (Array.isArray(e)) {
    var r = typeof t
    n = "number" === r || "string" === r || "boolean" === r && e.includes(r) ? r : e[0]
  } else {
    n = e
  }
  var o = "<shadow type=\"text\">\n    <field name=\"TEXT\">".concat(t, "</field>\n  </shadow>")
  switch (n) {
    case "number":
      o = "<shadow type=\"math_number\">\n      <field name=\"NUM\">".concat(t, "</field>\n    </shadow>")
      break
    case "boolean":
      o = "<shadow type=\"widget_boolean\">\n      <field name=\"BOOL\">".concat(t ? "TRUE" : "FALSE", "</field>\n    </shadow>")
      break
    case "color":
      o = "<shadow type=\"color_picker\">\n      <field name=\"COLOR_PALETTE\">".concat(Shared_tools_index.i(t) ? "#ffffff" : t, "</field>\n    </shadow>")
      break
    case "image":
      o = "<shadow type=\"image_file_list_dropdown\">\n        <field name=\"IMAGE_FILE_ID\">".concat(Module_9.h, "</field>\n      </shadow>")
      break
    case "icon":
      o = "<shadow type=\"icon_file_list_dropdown\">\n          <field name=\"ICON_FILE_ID\">".concat(Module_9.h, "</field>\n        </shadow>")
      break
    case "multilineString":
      o = "<shadow type=\"text_multiline\">\n        <field name=\"TEXT\">".concat(t, "</field>\n      </shadow>")
      break
    case "richTextString":
      o = "<shadow type=\"text_rich_text\">\n          <field name=\"TEXT\">".concat(function (e) {
        var t = {
          "&": "&amp;",
          "\"": "&quot;",
          "'": "&apos;",
          "<": "&lt;",
          ">": "&gt;"
        }
        return e.replace(/[&"'<>]/g, function (e) {
          return t[e]
        })
      }(t), "</field>\n        </shadow>")
  }
  return o
}
function he(e, t) {
  return t.map(function (t) {
    var n = Module_85.a(e, t.label)
    if (undefined === n) {
      n = t.label
    }
    return t.image ? [
      n, String(t.value), {
        src: t.image,
        width: 30,
        height: 30,
        margin_right: 4,
        is_hide: t.isHideFieldImage
      }
    ] : [n, String(t.value)]
  })
}
export { fe }
export { he }
