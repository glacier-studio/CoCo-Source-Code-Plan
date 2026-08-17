/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：301__part-5
 */

import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"../../../../../unrestored/shared/1571/2636/9"
import * as /* [auto-meaningful-name] */Shared_tools from "../../../../shared/tools"
import * as /* [auto-meaningful-name] */Module_85 from /* 85 */"../../../../../unrestored/shared/1571/2636/34/85"

import * as CustomWidgetTypes from "../../../../shared/widget/custom/types"

export function getCustomWidgetBlockParamShadow(valueType: CustomWidgetTypes.ValueType, defaultValue: number | string | boolean) {
  let defaultValueType
  if (Array.isArray(valueType)) {
    const typeofDefaultValue = typeof defaultValue
    defaultValueType = "number" === typeofDefaultValue || "string" === typeofDefaultValue || "boolean" === typeofDefaultValue && valueType.includes(typeofDefaultValue) ? typeofDefaultValue : valueType[0]
  } else {
    defaultValueType = valueType
  }
  let shadow = `<shadow type="text">\n    <field name="TEXT">${defaultValue}</field>\n  </shadow>`
  switch (defaultValueType) {
    case "number":
      shadow = `<shadow type="math_number">\n      <field name="NUM">${defaultValue}</field>\n    </shadow>`
      break
    case "boolean":
      shadow = `<shadow type="widget_boolean">\n      <field name="BOOL">${defaultValue ? "TRUE" : "FALSE"}</field>\n    </shadow>`
      break
    case "color":
      shadow = `<shadow type="color_picker">\n      <field name="COLOR_PALETTE">${Shared_tools.i(defaultValue) ? "#ffffff" : defaultValue}</field>\n    </shadow>`
      break
    case "image":
      shadow = `<shadow type="image_file_list_dropdown">\n        <field name="IMAGE_FILE_ID">${Module_9.h}</field>\n      </shadow>`
      break
    case "icon":
      shadow = `<shadow type="icon_file_list_dropdown">\n          <field name="ICON_FILE_ID">${Module_9.h}</field>\n        </shadow>`
      break
    case "multilineString":
      shadow = `<shadow type="text_multiline">\n        <field name="TEXT">${defaultValue}</field>\n      </shadow>`
      break
    case "richTextString":
      shadow = `<shadow type="text_rich_text">\n          <field name="TEXT">${((defaultValue) => {
        const ESCAPE_MAP = {
          "&": "&amp;",
          "\"": "&quot;",
          "'": "&apos;",
          "<": "&lt;",
          ">": "&gt;"
        }
        return defaultValue.replace(/[&"'<>]/g, (char) => ESCAPE_MAP[char as keyof typeof ESCAPE_MAP])
      })(defaultValue as string)}</field>\n        </shadow>`
  }
  return shadow
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

export { he }
