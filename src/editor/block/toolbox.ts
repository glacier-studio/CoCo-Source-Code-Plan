/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：261
 */

export { FLYOUT_COMPONENTS_LABEL as b }
export { CATEGORIES as a }
export { SPACE as c }
export { TOOLBOXES as f }
export { l as e }
export { u as d }
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"../../../unrestored/shared/1571/2636/9"
import * as generate from "./index"

export const FLYOUT_COMPONENTS_LABEL = {
  PRIMITIVE: "PRIMITIVE",
  ARRAY: "ARRAY",
  OBJECT: "OBJECT",
  STORAGE: "STORAGE"
}

const CATEGORIES = {
  NUMBER: {
    id: "category_number",
    label: "数字"
  },
  BOOL: {
    id: "category_bool",
    label: "布尔"
  },
  STRING: {
    id: "category_string",
    label: "字符"
  },
  CONDITION: {
    id: "category_condition",
    label: "条件"
  },
  CIRCLE: {
    id: "category_circle",
    label: "循环"
  },
  WAIT: {
    id: "category_wait",
    label: "等待"
  },
  CONSOLE: {
    id: "category_console",
    label: "控制台"
  }
}
const SPACE = "-----"
const TOOLBOXES = {
  event: {
    id: "toolbox-event",
    text: "%{BKY_EVENT}",
    iconId: "icon-toolbox-event",
    blocks: [
      "screen_on_open",
      "screen_on_open_get_param",
      "app_on_switch_background",
      "new_screen_navigate_to",
      "new_screen_navigate_to_by_value",
      SPACE,
      "broadcast_on_receive",
      "broadcast_send",
      "broadcast_send_and_wait"
    ]
  },
  control: {
    id: "toolbox-control",
    text: "%{BKY_CONTROL}",
    iconId: "icon-toolbox-control",
    blocks: [
      `<label type="${CATEGORIES.CONDITION.id}"></label>`,
      "controls_if",
      SPACE,
      `<label type="${CATEGORIES.CIRCLE.id}"></label>`,
      "loop_conditionally",
      "loop_finitely",
      "loop_infinitely",
      "controls_for_closed_range",
      SPACE,
      "break_loop",
      "continue_loop",
      SPACE,
      `<label type="${CATEGORIES.WAIT.id}"></label>`,
      "sleep",
      "wait_until",
      SPACE,
      `<label type="${CATEGORIES.CONSOLE.id}"></label>`,
      "new_console_log"
    ]
  },
  feature: {
    id: "toolbox-feature",
    text: "%{BKY_PHONE}",
    iconId: "icon-toolbox-feature",
    blocks: [
      "phone_vibrate",
      SPACE,
      "date_get_current_date",
      "date_check_date_is_equal",
      "date_get_date_minus_operation",
      SPACE,
      "brightness_set_brightness",
      "brightness_get_brightness",
      "brightness_set_keep_screen_on",
      SPACE,
      "phone_battery_level"
    ]
  },
  operator: {
    id: "toolbox-operator",
    text: "%{BKY_OPERATOR}",
    iconId: "icon-toolbox-operation",
    blocks: [
      `<label type="${CATEGORIES.NUMBER.id}"></label>`,
      "math_shadow_number",
      "math_operation",
      "math_random_integer",
      SPACE,
      "math_round",
      "math_complex_operation",
      "math_modulo",
      "math_trig",
      SPACE,
      "math_check_divisible",
      "math_number_property",
      SPACE,
      `<label type="${CATEGORIES.BOOL.id}"></label>`,
      "math_compare",
      "logic_operation",
      "logic_negate",
      "logic_boolean",
      SPACE,
      `<label type="${CATEGORIES.STRING.id}"></label>`,
      "text_shadow",
      "text_join",
      "text_get_length",
      "text_split_text",
      "text_slice",
      "text_check_contain",
      SPACE,
      "text_convert_type"
    ]
  },
  primitive: {
    id: "toolbox-primitive",
    text: "%{BKY_PRIMITIVE}",
    iconId: "icon-toolbox-variable",
    blocks: [
      `<label type="${FLYOUT_COMPONENTS_LABEL.PRIMITIVE}" width="10" height="10" align="center"></label>`,
      "variables_get",
      "variables_set",
      "variables_change"
    ]
  },
  array: {
    id: "toolbox-array",
    text: "%{BKY_ARRAY}",
    iconId: "icon-toolbox-list",
    blocks: [
      `<label type="${FLYOUT_COMPONENTS_LABEL.ARRAY}" width="10" height="10" align="center"></label>`,
      "array_get",
      "lists_append",
      "lists_insert_value",
      "array_remove_item",
      "lists_replace",
      "array_copy",
      SPACE,
      "array_get_item",
      "array_get_length",
      "lists_index_of",
      "lists_is_exist",
      SPACE,
      "array_foreach"
    ]
  },
  object: {
    id: "toolbox-object",
    text: "%{BKY_OBJECT}",
    iconId: "icon-toolbox-object",
    blocks: [
      `<label type="${FLYOUT_COMPONENTS_LABEL.OBJECT}" width="10" height="10" align="center"></label>`,
      "object_get",
      "object_create",
      "object_set_item",
      "object_delete_item",
      "object_clear",
      SPACE,
      "object_length",
      "object_get_item",
      "object_include_key"
    ]
  },
  function: {
    id: "toolbox-function",
    text: "%{BKY_FUNCTION}",
    iconId: "icon-toolbox-function",
    blocks: "PROCEDURE"
  }
}
var l = function () {
  return Module_9.O()
}
var u = function (e) {
  var /* [auto-meaningful-name] */cN$text
  for (var n in TOOLBOXES) if (TOOLBOXES[n].id === e) {
    cN$text = TOOLBOXES[n].text
  }
  return cN$text ? generate.b()[cN$text.slice(6, -1)] : ""
}
