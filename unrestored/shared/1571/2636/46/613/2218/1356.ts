/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1356
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.JsonGenerator = undefined
var r = require(/* 1123 */"../../../123/195/2051/1123")
function i(e) {
  return "string" == typeof e || e instanceof String
}
var o = function () {
  function e(e) {
    this.json_data_convertors = new Map()
    this.INDENT = "  "
    this.ORDER_OVERRIDES = []
    this.name_ = e
  }
  e.prototype.register = function (e, t) {
    this.json_data_convertors.set(e, t)
  }
  e.prototype.workspace_to_code = function (e, t) {
    var n = this
    var i = []
    var o = []
    Object.keys(e.blocks).forEach(function (n) {
      var r = e.blocks[n]
      if (!r.parent_id) {
        if (t && !t(r.type)) {
          return
        }
        o.push(r)
      }
    })
    Object.keys(e.comments).forEach(function (t) {
      var n = e.comments[t]
      if (!n.parent_id) {
        o.push(n)
      }
    })
    o.sort(function (e, t) {
      return e.location && t.location ? e.location[1] - t.location[1] || e.location[0] - t.location[0] : 0
    })
    o.forEach(function (t) {
      if ((0, r.is_block_json)(t)) {
        var o = n.block_to_code(e, t.id)
        if (Array.isArray(o)) {
          o = o[0]
        }
        if (o) {
          if (t.is_output) {
            o = n.scrub_naked_value(o)
          }
          i.push(o)
        }
      } else {
        i.push(n.add_comment_prefix(t.text || ""))
      }
    })
    return i.join("\n")
  }
  e.prototype.block_to_code = function (e, t) {
    if (!t) {
      return ""
    }
    var n = e.blocks[t]
    if (n.disabled) {
      return this.block_to_code(e, this.find_next_block(e, t))
    }
    var r
    var o = this.json_data_convertors.get(n.type)
    if (!(r = o) || "[object Function]" !== {}.toString.call(r)) {
      throw Error("Language " + this.name_ + " does not know how to generate code for block type " + n.type + ".")
    }
    var a = o.call(this, e, t)
    if (Array.isArray(a)) {
      return [this.scrub_(e, t, a[0]), a[1]]
    }
    if (i(a)) {
      return "start_on_click" === n.type ? a : this.scrub_(e, t, a)
    }
    if (undefined == a) {
      return ""
    }
    throw Error("Invalid code generated: " + a)
  }
  e.prototype.scrub_ = function (e, t, n) {
    return this.block_comment_to_code(e, t) + n + this.block_to_code(e, this.find_next_block(e, t))
  }
  e.prototype.block_comment_to_code = function (e, t) {
    var n = e.blocks[t]
    if (n.is_output && n.parent_id) {
      return ""
    }
    var r = ""
    if (n.comment) {
      r += this.add_comment_prefix(n.comment + "\n")
    }
    var i = this.get_nested_children_comments(e, t).join("\n")
    if (i) {
      r += this.add_comment_prefix(i + "\n")
    }
    return r
  }
  e.prototype.prefix_lines = function (e, t) {
    return t + e.replace(/(?!\n$)\n/g, "\n" + t)
  }
  e.prototype.find_next_block = function (e, t) {
    var n = e.connections[t]
    return Object.keys(n).find(function (e) {
      return "next" === n[e].type
    })
  }
  e.prototype.get_input_target_block = function (e, t, n) {
    var r = e.connections[t]
    return Object.keys(r).find(function (e) {
      var t = r[e]
      return "input" === t.type && t.input_name === n
    })
  }
  e.prototype.find_statement_block = function (e, t, n) {
    var r = e.connections[t]
    return Object.keys(r).find(function (t) {
      var i = r[t]
      var o = e.blocks[t]
      return "input" === i.type && i.input_name === n && o && !o.is_output
    })
  }
  e.prototype.get_nested_children_comments = function (e, t) {
    var n = this
    var r = []
    var i = e.connections[t]
    var /* [auto-meaningful-name] */e$blocks = e.blocks
    Object.keys(i).forEach(function (t) {
      if ("input" === i[t].type) {
        if (e$blocks[t].is_output) {
          r = r.concat(n.get_nested_children_comments(e, t))
        }
      }
    })
    return r
  }
  e.prototype.value_to_code = function (e, t, n, r) {
    var i = this.get_input_target_block(e, t, n)
    if (!i) {
      return ""
    }
    var o = this.block_to_code(e, i)
    if ("" === o) {
      return ""
    }
    if (!Array.isArray(o)) {
      o = [o, 0]
    }
    var a = o[0]
    if (!a) {
      return ""
    }
    var s = o[1] || 0
    var c = false
    var u = Math.floor(r)
    var l = Math.floor(s)
    if (u <= l) {
      if (u !== l || 0 !== u && 99 !== u) {
        c = true
        for (var f = 0; f < this.ORDER_OVERRIDES.length; f++) {
          if (this.ORDER_OVERRIDES[f][0] == r && this.ORDER_OVERRIDES[f][1] == s) {
            c = false
            break
          }
        }
      } else {
        ;
      }
    }
    if (c) {
      a = "(" + a + ")"
    }
    return a
  }
  e.prototype.statement_to_code = function (e, t, n) {
    var r = this.find_statement_block(e, t, n)
    if (!r) {
      return ""
    }
    var o = this.block_to_code(e, r)
    if (!i(o)) {
      o = o[0]
    }
    if (o) {
      o = this.prefix_lines(o, this.INDENT)
    }
    return o
  }
  e.prototype.get_field_value = function (e, t) {
    return e.fields[t]
  }
  return e
}()
exports.JsonGenerator = o
