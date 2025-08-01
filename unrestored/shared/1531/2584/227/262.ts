"use strict";

export { i as b };
export { a };
export { s as c };
export { c as f };
export { l as e };
export { u as d };
var r = require("../9");
var o = require("../301/index");
var i = {
  PRIMITIVE: "PRIMITIVE",
  ARRAY: "ARRAY",
  OBJECT: "OBJECT",
  STORAGE: "STORAGE"
};
var a = {
  NUMBER: {
    id: "category_number",
    label: "\u6570\u5b57"
  },
  BOOL: {
    id: "category_bool",
    label: "\u5e03\u5c14"
  },
  STRING: {
    id: "category_string",
    label: "\u5b57\u7b26"
  },
  CONDITION: {
    id: "category_condition",
    label: "\u6761\u4ef6"
  },
  CIRCLE: {
    id: "category_circle",
    label: "\u5faa\u73af"
  },
  WAIT: {
    id: "category_wait",
    label: "\u7b49\u5f85"
  },
  CONSOLE: {
    id: "category_console",
    label: "\u63a7\u5236\u53f0"
  }
};
var s = "-----";
var c = {
  event: {
    id: "toolbox-event",
    text: "%{BKY_EVENT}",
    iconId: "icon-toolbox-event",
    blocks: ["screen_on_open", "screen_on_open_get_param", "app_on_switch_background", "new_screen_navigate_to", "new_screen_navigate_to_by_value", s, "broadcast_on_receive", "broadcast_send", "broadcast_send_and_wait"]
  },
  control: {
    id: "toolbox-control",
    text: "%{BKY_CONTROL}",
    iconId: "icon-toolbox-control",
    blocks: ['<label type="'.concat(a.CONDITION.id, '"></label>'), "controls_if", s, '<label type="'.concat(a.CIRCLE.id, '"></label>'), "loop_conditionally", "loop_finitely", "loop_infinitely", "controls_for_closed_range", s, "break_loop", "continue_loop", s, '<label type="'.concat(a.WAIT.id, '"></label>'), "sleep", "wait_until", s, '<label type="'.concat(a.CONSOLE.id, '"></label>'), "new_console_log"]
  },
  feature: {
    id: "toolbox-feature",
    text: "%{BKY_PHONE}",
    iconId: "icon-toolbox-feature",
    blocks: ["phone_vibrate", s, "date_get_current_date", "date_check_date_is_equal", "date_get_date_minus_operation", s, "brightness_set_brightness", "brightness_get_brightness", "brightness_set_keep_screen_on", s, "phone_battery_level"]
  },
  operator: {
    id: "toolbox-operator",
    text: "%{BKY_OPERATOR}",
    iconId: "icon-toolbox-operation",
    blocks: ['<label type="'.concat(a.NUMBER.id, '"></label>'), "math_shadow_number", "math_operation", "math_random_integer", s, "math_round", "math_complex_operation", "math_modulo", "math_trig", s, "math_check_divisible", "math_number_property", s, '<label type="'.concat(a.BOOL.id, '"></label>'), "math_compare", "logic_operation", "logic_negate", "logic_boolean", s, '<label type="'.concat(a.STRING.id, '"></label>'), "text_shadow", "text_join", "text_get_length", "text_split_text", "text_slice", "text_check_contain", s, "text_convert_type"]
  },
  primitive: {
    id: "toolbox-primitive",
    text: "%{BKY_PRIMITIVE}",
    iconId: "icon-toolbox-variable",
    blocks: ['<label type="'.concat(i.PRIMITIVE, '" width="10" height="10" align="center"></label>'), "variables_get", "variables_set", "variables_change"]
  },
  array: {
    id: "toolbox-array",
    text: "%{BKY_ARRAY}",
    iconId: "icon-toolbox-list",
    blocks: ['<label type="'.concat(i.ARRAY, '" width="10" height="10" align="center"></label>'), "array_get", "lists_append", "lists_insert_value", "array_remove_item", "lists_replace", "array_copy", s, "array_get_item", "array_get_length", "lists_index_of", "lists_is_exist", s, "array_foreach"]
  },
  object: {
    id: "toolbox-object",
    text: "%{BKY_OBJECT}",
    iconId: "icon-toolbox-object",
    blocks: ['<label type="'.concat(i.OBJECT, '" width="10" height="10" align="center"></label>'), "object_get", "object_create", "object_set_item", "object_delete_item", "object_clear", s, "object_length", "object_get_item", "object_include_key"]
  },
  function: {
    id: "toolbox-function",
    text: "%{BKY_FUNCTION}",
    iconId: "icon-toolbox-function",
    blocks: "PROCEDURE"
  }
};
var l = function () {
  return Object(r.O)();
};
var u = function (e) {
  var t;
  for (var n in c) if (c[n].id === e) {
    t = c[n].text;
  }
  return t ? Object(o.b)()[t.slice(6, -1)] : "";
};
export default a;