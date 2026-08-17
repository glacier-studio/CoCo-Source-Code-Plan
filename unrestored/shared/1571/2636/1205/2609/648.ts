/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：648
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.get_nested_blocks_with_comment = exports.get_outer_block = exports.has_context = exports.is_valid_context = exports.cal_num_blocks = exports.fire_block_onchange = exports.update_disable_status = undefined
var r = require(/* 209 */"../../207/209/index")
var i = require(/* 195 */"../../123/195/index")
var o = require(/* 387 */"../../207/734/387")
var a = require(/* 214 */"../../1022/214")
function s(e) {
  var t = e.previous_connection || e.output_connection
  return !(!t || !t.context || t.source_block.is_shadow())
}
exports.update_disable_status = function (e) {
  if (!e.is_in_flyout) {
    for (var t = ["repeat_forever", "repeat_n_times", "repeat_forever_until"], n = true, r = e.get_surround_parent(); r;) {
      if (t.includes(r.type)) {
        n = false
        break
      }
      r = r.get_surround_parent()
    }
    if (n) {
      if (!e.disabled) {
        return
      }
      e.disabled = false
      e.update_disabled()
    } else {
      if (e.disabled) {
        return
      }
      e.disabled = true
      e.update_disabled()
    }
  }
}
exports.fire_block_onchange = function (e) {
  for (var t = {}, n = 0, r = e.get_descendants(); n < r.length; n++) {
    var i = r[n]
    if (i.onchange) {
      i.onchange(t)
    }
  }
}
exports.cal_num_blocks = function (e) {
  return e.filter(function (e) {
    return (0, a.is_block_svg)(e) && !e.is_shadow() && !(e.type.includes("parameter") && e.parent_block && e.parent_block.type.includes("procedures_2_def")) || (0, a.is_workspace_comment)(e)
  }).length
}
exports.is_valid_context = function (e) {
  var /* [auto-meaningful-name] */a$target_connection$source_block$previous_connection
  var /* [auto-meaningful-name] */a$target_connection$source_block$output_connection
  var a = e.previous_connection || e.output_connection
  if (!a || !a.target_connection || !s(e)) {
    return true
  }
  for (var /* [auto-meaningful-name] */a$target_connection = a.target_connection, u = function () {
    (0, o.assert)(a$target_connection.is_superior())
    if (a$target_connection.context === a.context) {
      if (e.type === r.PROCEDURE_BLOCK_TYPES.PARAM) {
        var s = false
        var u = e.get_field_value("param_name") || ""
        a$target_connection.get_source_block().inputList.forEach(function (e) {
          var /* [auto-meaningful-name] */e$connection
          if (e.type === i.InputType.VALUE) {
            var n = null === (e$connection = e.connection) || undefined === e$connection ? undefined : e$connection.targetBlock()
            if (n && n.get_field_value("param_name") === u) {
              s = true
            }
          }
        })
        return {
          value: s
        }
      }
      return {
        value: true
      }
    }
    a$target_connection = (null === (a$target_connection$source_block$previous_connection = a$target_connection.source_block.previous_connection) || undefined === a$target_connection$source_block$previous_connection ? undefined : a$target_connection$source_block$previous_connection.target_connection) || (null === (a$target_connection$source_block$output_connection = a$target_connection.source_block.output_connection) || undefined === a$target_connection$source_block$output_connection ? undefined : a$target_connection$source_block$output_connection.target_connection)
  }; a$target_connection;) {
    var l = u()
    if ("object" === typeof l) {
      return l.value
    }
  }
  return false
}
exports.has_context = s
exports.get_outer_block = function (e) {
  var t = e
  if (!t.is_output_block()) {
    return t
  }
  for (; t.parent_block && t.parent_block.is_output_block();) {
    t = t.parent_block
  }
  if (t.parent_block && !t.parent_block.is_output_block()) {
    t = t.parent_block
  }
  return t
}
exports.get_nested_blocks_with_comment = function (e) {
  return e.get_all_nested_blocks().filter(function (e) {
    return e.comment
  })
}
