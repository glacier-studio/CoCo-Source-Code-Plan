/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1058
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.effect_of_update_disabled = exports.effect_of_update_param = exports.effect_of_rename_proc = exports.update_after_set_disabled = exports.update_after_set_field_value = exports.update_after_mutation = undefined
var r = require(/* 31 */"ot-json1")
var o = require(/* 1393 */"./1393/index")
var i = require(/* 125 */"../../../../../src/shared/packages/@crc/blink/src/core/di")
var a = require(/* 173 */"./173")
var s = require(/* 762 */"./762")
function c(e, t, n, a, s, c) {
  var l
  var u
  var d = (0, i.get_instance)()
  var p = d.get(i.BINDING.workspace_db)
  var f = d.get(i.BINDING.utils)
  var h = d.get(i.BINDING.json)
  var m = d.get(i.BINDING.xml)
  if ("increase" === e) {
    var g = []
    var _ = t.blocks[n]
    var /* [auto-meaningful-name] */_$mutation = _.mutation
    var b = f.dom_to_string(a)
    _.mutation = b
    var y = ["blocks", _.id, "mutation"]
    g.push((0, r.replaceOp)(y, _$mutation, b))
    var E = p.current.get_block_by_id(n)
    var O = undefined
    var w = ""
    var C = ""
    if (E) {
      var T = null === (u = null === (l = E.get_input(s)) || undefined === l ? undefined : l.connection) || undefined === u ? undefined : u.targetBlock()
      if (!T) {
        return null
      }
      O = h.block_to_json(T)
      w = T.id
      C = f.dom_to_string(m.block_to_dom(T))
    } else if (c) {
      var S = f.string_to_dom(C)
      O = h.block_dom_to_json(S)
    } else {
      var A = document.createElement("shadow")
      A.setAttribute("type", "math_number")
      A.setAttribute("visible", "visible")
      w = f.gen_uid()
      A.setAttribute("id", w)
      var I = document.createElement("field")
      I.setAttribute("name", "NUM")
      I.setAttribute("constraints", "-Infinity,Infinity,0")
      I.textContent = "0"
      A.appendChild(I)
      O = h.block_dom_to_json(A, n)
      C = f.dom_to_string(A)
    }
    t.blocks[w] = O.blocks[w]
    t.connections[w] = {}
    var j = {
      type: "input",
      input_type: "value",
      input_name: s
    }
    t.connections[_.id][w] = j
    t.blocks[_.id].shadows[s] = C
    var N = ["blocks", _.id, "shadows", s]
    g.push((0, r.insertOp)(N, C))
    var R = ["blocks", w]
    g.push((0, r.insertOp)(R, O.blocks[w]))
    var k = ["connections", w]
    g.push((0, r.insertOp)(k, {}))
    var x = ["connections", _.id, w]
    g.push((0, r.insertOp)(x, j))
    return g.reduce(o.type.compose, null)
  }
  if ("decrease" === e) {
    var D = []
    var M = t.blocks[n]
    _$mutation = M.mutation
    b = f.dom_to_string(a)
    M.mutation = b
    y = ["blocks", M.id, "mutation"]
    D.push((0, r.replaceOp)(y, _$mutation, b))
    var L = t.connections[M.id]
    Object.keys(L).forEach(function (e) {
      var n = L[e]
      if ("input" === n.type && n.input_name === s) {
        var o = t.blocks[e]
        if (o.is_shadow) {
          delete t.blocks[e]
          delete t.connections[e]
          delete t.connections[M.id][e]
          delete t.blocks[M.id].shadows[s]
          var i = ["blocks", e]
          D.push((0, r.removeOp)(i))
          var a = ["connections", e]
          D.push((0, r.removeOp)(a))
          l = ["connections", M.id, e]
          D.push((0, r.removeOp)(l))
          u = ["blocks", M.id, "shadows", s]
          D.push((0, r.removeOp)(u))
        } else {
          o.parent_id = null
          delete t.connections[M.id][e]
          delete t.blocks[M.id].shadows[s]
          var c = ["blocks", M.id, "parent_id"]
          D.push((0, r.replaceOp)(c, true, null))
          var l = ["connections", M.id, e]
          D.push((0, r.removeOp)(l))
          var u = ["blocks", M.id, "shadows", s]
          D.push((0, r.removeOp)(u))
        }
      }
    })
    return D.reduce(o.type.compose, null)
  }
  return null
}
function l(e, t, n, a) {
  var s = (0, i.get_instance)().get(i.BINDING.utils)
  var c = []
  if (e.fields[t] !== a) {
    e.fields[t] = a
    var l = ["blocks", e.id, "fields", t]
    c.push((0, r.replaceOp)(l, n, a))
  }
  var /* [auto-meaningful-name] */e$mutation = e.mutation
  var d = s.string_to_dom(e$mutation)
  if (undefined !== d.getAttribute(t.toLowerCase())) {
    d.setAttribute(t.toLowerCase(), a)
    var p = s.dom_to_string(d)
    e.mutation = p
    var f = ["blocks", e.id, "mutation"]
    c.push((0, r.replaceOp)(f, e$mutation, p))
  }
  return c.reduce(o.type.compose, null)
}
function u(e, t) {
  e.disabled = t
  var n = ["blocks", e.id, "disabled"]
  return (0, r.replaceOp)(n, null, t)
}
exports.update_after_mutation = c
exports.update_after_set_field_value = l
exports.update_after_set_disabled = u
exports.effect_of_rename_proc = function (e, t, n) {
  for (var r = Object.keys(n.blocks), i = e, c = 0; c < r.length; c++) {
    var u = n.blocks[r[c]]
    if (u.type === a.PROCEDURE_BLOCK_TYPES.DEF && u.fields[a.PROCEDURE_BLOCK_FIELD_NAMES.PROCEDURE_NAME] === t) {
      i = t
      break
    }
  }
  var d = (0, s.find_caller_blocks)(n, i)
  if (d.length) {
    var p = []
    d.forEach(function (n) {
      p.push(l(n, a.PROCEDURE_BLOCK_FIELD_NAMES.PROCEDURE_NAME, e, t))
    })
    return p.reduce(o.type.compose, null)
  }
}
exports.effect_of_update_param = function (e, t, n, r) {
  var l = (0, s.find_caller_blocks)(r, t)
  if (l.length) {
    var u = (0, i.get_instance)().get(i.BINDING.utils)
    var d = []
    l.forEach(function (t) {
      if ("increase" === e) {
        var /* [auto-meaningful-name] */t$mutation = t.mutation
        var i = u.string_to_dom(t$mutation)
        var s = document.createElement("procedures_2_parameter_shadow")
        s.setAttribute("name", n.param_name)
        var l = undefined !== n.default_value ? n.default_value : "0"
        s.setAttribute("value", l)
        i.appendChild(s)
        var p = i.children.length - 1
        var f = "" + a.PROCEDURE_BLOCK_INPUT_NAMES.ARG_PREFIX + p
        var h = "<shadow type=\"default_value\"><field name=\"TEXT\">" + l + "</field></shadow>"
        if (null !== (m = c("increase", r, t.id, i, f, h))) {
          d.push(m)
        }
      }
      if ("decrease" === e) {
        t$mutation = t.mutation
        if ((i = u.string_to_dom(t$mutation)).lastChild) {
          i.removeChild(i.lastChild)
        }
        var m
        p = i.children.length
        f = "" + a.PROCEDURE_BLOCK_INPUT_NAMES.ARG_PREFIX + p
        if (null !== (m = c("decrease", r, t.id, i, f))) {
          d.push(m)
        }
      }
    })
    return d.reduce(o.type.compose, null)
  }
}
exports.effect_of_update_disabled = function (e, t, n, r) {
  var i = (0, s.find_caller_blocks)(r, e)
  if (i.length) {
    var c = []
    i.forEach(function (e) {
      switch (e.type) {
        case a.PROCEDURE_BLOCK_TYPES.CALL_RETURN:
          if (e.disabled !== n) {
            c.push(u(e, n))
          }
          break
        case a.PROCEDURE_BLOCK_TYPES.CALL_NORETURN:
          if (e.disabled !== t) {
            c.push(u(e, t))
          }
      }
    })
    return c.reduce(o.type.compose, null)
  }
}
