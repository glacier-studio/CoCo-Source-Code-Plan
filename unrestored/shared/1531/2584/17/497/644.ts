"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.get_nested_blocks_with_comment = exports.get_outer_block = exports.has_context = exports.is_valid_context = exports.cal_num_blocks = exports.fire_block_onchange = exports.update_disable_status = void 0;
var r = require("../../206/208/index");
var i = require("../../125/195/index");
var o = require("../../206/208/387");
var a = require("../../1001/213/index");
function s(e) {
  var t = e.previous_connection || e.output_connection;
  return !(!t || !t.context || t.source_block.is_shadow());
}
exports.update_disable_status = function (e) {
  if (!e.is_in_flyout) {
    for (var t = ["repeat_forever", "repeat_n_times", "repeat_forever_until"], n = !0, r = e.get_surround_parent(); r;) {
      if (t.includes(r.type)) {
        n = !1;
        break;
      }
      r = r.get_surround_parent();
    }
    if (n) {
      if (!e.disabled) {
        return;
      }
      e.disabled = !1;
      e.update_disabled();
    } else {
      if (e.disabled) {
        return;
      }
      e.disabled = !0;
      e.update_disabled();
    }
  }
};
exports.fire_block_onchange = function (e) {
  for (var t = {}, n = 0, r = e.get_descendants(); n < r.length; n++) {
    var i = r[n];
    if (i.onchange) {
      i.onchange(t);
    }
  }
};
exports.cal_num_blocks = function (e) {
  return e.filter(function (e) {
    return (0, a.is_block_svg)(e) && !e.is_shadow() && !(e.type.includes("parameter") && e.parent_block && e.parent_block.type.includes("procedures_2_def")) || (0, a.is_workspace_comment)(e);
  }).length;
};
exports.is_valid_context = function (e) {
  var t;
  var n;
  var a = e.previous_connection || e.output_connection;
  if (!a || !a.target_connection || !s(e)) {
    return !0;
  }
  for (var c = a.target_connection, u = function () {
      (0, o.assert)(c.is_superior());
      if (c.context === a.context) {
        if (e.type === r.PROCEDURE_BLOCK_TYPES.PARAM) {
          var s = !1;
          var u = e.get_field_value("param_name") || "";
          c.get_source_block().inputList.forEach(function (e) {
            var t;
            if (e.type === i.InputType.VALUE) {
              var n = null === (t = e.connection) || void 0 === t ? void 0 : t.targetBlock();
              if (n && n.get_field_value("param_name") === u) {
                s = !0;
              }
            }
          });
          return {
            value: s
          };
        }
        return {
          value: !0
        };
      }
      c = (null === (t = c.source_block.previous_connection) || void 0 === t ? void 0 : t.target_connection) || (null === (n = c.source_block.output_connection) || void 0 === n ? void 0 : n.target_connection);
    }; c;) {
    var l = u();
    if ("object" === typeof l) {
      return l.value;
    }
  }
  return !1;
};
exports.has_context = s;
exports.get_outer_block = function (e) {
  var t = e;
  if (!t.is_output_block()) {
    return t;
  }
  for (; t.parent_block && t.parent_block.is_output_block();) {
    t = t.parent_block;
  }
  if (t.parent_block && !t.parent_block.is_output_block()) {
    t = t.parent_block;
  }
  return t;
};
exports.get_nested_blocks_with_comment = function (e) {
  return e.get_all_nested_blocks().filter(function (e) {
    return e.comment;
  });
};