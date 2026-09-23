/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：301__part-5
 */

import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"../../../../../../unrestored/shared/1571/2636/9"
import * as /* [auto-meaningful-name] */Shared_tools from "../../../../../shared/tools"
import * as /* [auto-meaningful-name] */Module_85 from /* 85 */"../../../../../../unrestored/shared/1571/2636/34/85"

import * as CustomWidgetTypes from "../../../../../shared/widget/custom/types"

export function getCustomWidgetBlockParamShadow(valueType: CustomWidgetTypes.ValueType, defaultValue: number | string | boolean) {
  let defaultValueType: CustomWidgetTypes.SignalValueType
  if (Array.isArray(valueType)) {
    const typeofDefaultValue = typeof defaultValue
    defaultValueType =
      typeofDefaultValue === "number" ||
      typeofDefaultValue === "string" ||
      typeofDefaultValue === "boolean" &&
      valueType.includes(typeofDefaultValue) ? typeofDefaultValue : valueType[0]!
  } else {
    defaultValueType = valueType
  }
  let shadow = `<shadow type="text">
    <field name="TEXT">${defaultValue}</field>
  </shadow>`
  switch (defaultValueType) {
    case "number":
      shadow = `<shadow type="math_number">
        <field name="NUM">${defaultValue}</field>
      </shadow>`
      break
    case "boolean":
      shadow = `<shadow type="widget_boolean">
        <field name="BOOL">${defaultValue ? "TRUE" : "FALSE"}</field>
      </shadow>`
      break
    case "color":
      shadow = `<shadow type="color_picker">
        <field name="COLOR_PALETTE">${Shared_tools.i(defaultValue) ? "#ffffff" : defaultValue}</field>
      </shadow>`
      break
    case "image":
      shadow = `<shadow type="image_file_list_dropdown">
        <field name="IMAGE_FILE_ID">${Module_9.h}</field>
      </shadow>`
      break
    case "icon":
      shadow = `<shadow type="icon_file_list_dropdown">
        <field name="ICON_FILE_ID">${Module_9.h}</field>
      </shadow>`
      break
    case "multilineString":
      shadow = `<shadow type="text_multiline">
        <field name="TEXT">${defaultValue}</field>
      </shadow>`
      break
    case "richTextString":
      shadow = `<shadow type="text_rich_text">
        <field name="TEXT">${((defaultValue) => {
          const ESCAPE_MAP = {
            "&": "&amp;",
            "\"": "&quot;",
            "'": "&apos;",
            "<": "&lt;",
            ">": "&gt;"
          }
          return defaultValue.replace(/[&"'<>]/g, (char) => ESCAPE_MAP[char as keyof typeof ESCAPE_MAP])
        })(defaultValue as string)}</field>
      </shadow>`
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
