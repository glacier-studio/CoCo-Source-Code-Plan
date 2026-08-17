/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：732
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.register_procedure_blocks = exports.icon_procedure = undefined
var r = require(/* 93 */"tslib")
var i = require(/* 387 */"../../../../../../../unrestored/shared/1571/2636/207/734/387")
var o = require(/* 125 */"../../../../../../../unrestored/shared/1571/2636/1058/125")
var a = require(/* 214 */"../../../../../../../unrestored/shared/1571/2636/1022/214")
var s = require(/* 762 */"../../../../../../../unrestored/shared/1571/2636/1058/762")
var c = require(/* 173 */"../../../../../../../unrestored/shared/1571/2636/1058/173")
exports.icon_procedure = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xOCAzNkM4LjA1OSAzNiAwIDI3Ljk0MSAwIDE4UzguMDU5IDAgMTggMHMxOCA4LjA1OSAxOCAxOC04LjA1OSAxOC0xOCAxOHptMC0xYzkuMzg5IDAgMTctNy42MTEgMTctMTdTMjcuMzg5IDEgMTggMSAxIDguNjExIDEgMThzNy42MTEgMTcgMTcgMTd6IiBmaWxsPSIjRDc4MDU4IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48Y2lyY2xlIGZpbGw9IiNGRkYiIGN4PSIxOCIgY3k9IjE4IiByPSIxNyIvPjxwYXRoIGQ9Ik0yNy4xNTcgMjIuOTM1Yy0uMDQzLjE1LS4yMzUuMjUzLS40OS4zOWEuOTEyLjkxMiAwIDAgMS0uNjg1LjA4NC44Ni44NiAwIDAgMS0uNDQtLjMyNWwtMi4yOTItMy4wMzItMi43OCAzLjAxN2MtLjMzMi4zNi0uNzA4LjQxMy0xLjEzOC4xNTgtLjE3Ny0uMTAzLS41LS40ODctLjUzOC0uNjYtLjAzNi0uMTczLjAzMi0uMzU0LjIxLS41NDhsMy4wNzMtMy4zNDUtMi4yNC0yLjk2M2MtLjA5Mi0uMTM2LS4xMDEtLjI5NC0uMDI4LS40NzQuMDctLjE4LjIzNi0uMjg3LjQxMy0uMzkyLjI1NC0uMTQzLjQ4Ny0uMTQ3LjY2LS4xMzQuMTczLjAxLjMzLjExLjQ3NS4yOTNsMS44NjEgMi40MjcgMi4yNTQtMi40NTVjLjE5NS0uMjE2LjQxNi0uMjkyLjYyOS0uMzUzLjIxMi0uMDYxLjYzLjE1OC44Ni4yODYuMjM0LjEyNy4zNTYuMjczLjM3LjQzOC4wMTUuMTY0LS4wNS4zMjYtLjE5Ni40ODZsLTIuNzUzIDIuOTg1IDIuNzE3IDMuNzI1YS40MDUuNDA1IDAgMCAxIC4wNTguMzkyem0tNy4wNzUtMTQuODVjLS45NTYtLjEwNy0yLjk1Ni0uMjUtNC4xNjkuNTM0LTEuMjE1Ljc4OC0xLjkxMyAyLjE0LTIuMjUxIDMuNzVsLS40NzcgMi4yNzJIOS43NjJjLS4zOTggMC0uNzE1LjExNC0uNzQ4LjgyNy4wMzMuMzg5LjM1LjY5Ny43NDguNjk3aDMuMDk1bC0yLjA0IDkuOTY2cy0uNTIyIDEuNjI2LjYyIDEuNjk3Yy45OTguMDYzIDEuMTk2LTEuNTYxIDEuMTk2LTEuNTYxbDIuMDU3LTEwLjEwMmgyLjYxM2EuNzYyLjc2MiAwIDAgMCAwLTEuNTI0aC0yLjI4OGwuNDUyLTIuMjI3Yy45NjctMy41NSAyLjc3MS0yLjY4OCA0LjQzOC0yLjY4OC4yNzMgMCAxLjMwMS4wNzIgMS4zNzMtLjYzMi4wOTEtLjg4LS43OTQtLjk2My0xLjE5Ni0xLjAwOHpNOSAxNS41OGMwLS4wNDYuMDQ1LS4wNjkuMDU4LS4xMS0uMDEzLS4wMjMtLjA1OC0uMDQzLS4wNTgtLjA2N3YuMTc3eiIgZmlsbD0iI0YwOEY2MyIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9nPjwvc3ZnPgo="
exports.register_procedure_blocks = function (e, n, u, l) {
  var f = e.di_container.get(o.BINDING.FieldIcon)
  var d = e.di_container.get(o.BINDING.FieldTextInput)
  var h = e.di_container.get(o.BINDING.MutationAddButton)
  var p = e.di_container.get(o.BINDING.MutationRemoveButton)
  var _ = e.di_container.get(o.BINDING.FieldLabelSerializable)
  var A = e.di_container.get(o.BINDING.CreateEvent)
  var g = e.di_container.get(o.BINDING.ChangeEvent)
  e.define_block_with_object(c.PROCEDURE_BLOCK_TYPES.DEF, {
    init: function () {
      var o = this
      var l = (0, a.is_func)(n) ? n() : n
      var _ = f({
        src: exports.icon_procedure,
        opt_is_head: true
      })
      var /* [auto-meaningful-name] */e$Msg$PROCEDURES_DEFNORETURN_PROCEDURE = e.Msg.PROCEDURES_DEFNORETURN_PROCEDURE
      var v = e$Msg$PROCEDURES_DEFNORETURN_PROCEDURE
      var m = l.get_procedure_by_def(this.id)
      if (m) {
        v = m.name
      }
      var y = d({
        text: v,
        opt_validator: function (t) {
          var n = l.get_procedure_by_def(o.id)
          return n ? e.events.is_undoing() ? n.name : t : (0, s.get_legal_procedure_name)(t, l.get_occupied_procedure_names().concat([e$Msg$PROCEDURES_DEFNORETURN_PROCEDURE]))
        }
      })
      y.set_spell_check(false)
      if (!(this.is_in_flyout || this.is_insertion_marker())) {
        y.on_mouse_down = function () {
          return (0, r.__awaiter)(o, undefined, undefined, function () {
            var /* [auto-meaningful-name] */this$id
            var n
            var o
            var a
            var f
            var /* [auto-meaningful-name] */f$name
            return (0, r.__generator)(this, function (r) {
              switch (r.label) {
                case 0:
                  this$id = this.id
                  return [4, u.call(this, this$id)]
                case 1:
                  return (n = r.sent()) ? (o = e.mainWorkspace.get_block_by_id(this$id), (0, i.assert)(o), l.get_procedure_by_name(n) && (a = n, n = (0, s.get_legal_procedure_name)(n, l.get_occupied_procedure_names()), console.warn("Procedure " + a + " def exists. Renaming block [" + this$id + "] to " + n)), f = l.get_procedure_by_def(this$id), (0, i.assert)(f), f.disabled ? (console.warn("Trying to rename deleted procedure " + this$id), [2]) : (f$name = f.name, e.events.disable(), l.rename_procedure(f$name, n), y.set_value(n), e.events.enable(), e.events.fire(g("procedure_rename", {
                    block: o,
                    old_value: f$name,
                    new_value: n,
                    name: c.PROCEDURE_BLOCK_FIELD_NAMES.PROCEDURE_NAME
                  })), [2])) : [2]
              }
            })
          })
        }
      }
      this.append_dummy_input("PROCEDURES_2_DEFNORETURN_DEFINE").append_field(_).append_field(e.Msg.PROCEDURES_DEFNORETURN_TITLE).append_field(y, c.PROCEDURE_BLOCK_FIELD_NAMES.PROCEDURE_NAME)
      var b = p(undefined)
      b.margin_left = 12
      this.append_dummy_input(c.PROCEDURE_BLOCK_INPUT_NAMES.DEF_MUTATOR).append_field(b).append_field(h())
      this.append_statement_input("STACK", undefined, c.PROCEDURE_CONTEXT)
      this.set_inputs_inline(true)
      this.set_colour(e.theme.block_color.ORANGE_4.fill)
      this.set_tooltip(e.Msg.PROCEDURES_DEFNORETURN_TOOLTIP)
    },
    addMutation: function (t) {
      return (0, r.__awaiter)(this, undefined, undefined, function () {
        var /* [auto-meaningful-name] */this$id
        var s
        var u
        var f
        var d
        var h
        var p
        var /* [auto-meaningful-name] */p$length
        var A
        var v
        var m
        var y
        return (0, r.__generator)(this, function (r) {
          switch (r.label) {
            case 0:
              this$id = this.id
              s = undefined
              return "string" === typeof t && t ? [3, 2] : [4, l.call(this, this$id)]
            case 1:
              u = r.sent()
              t = null === u || undefined === u ? undefined : u.param_name
              s = null === u || undefined === u ? undefined : u.default_value
              r.label = 2
            case 2:
              return t ? (f = e.mainWorkspace.get_block_by_id(this$id), (0, i.assert)(f), d = (0, a.is_func)(n) ? n() : n, h = d.get_procedure_by_def(this$id), (0, i.assert)(h), h.disabled ? (console.warn("Trying to add param to deleted procedure " + this$id), [2]) : (p = d.get_procedure_param_names(h.name)).includes(t) ? (console.warn("Param " + t + " exists."), [2]) : (p$length = p.length, e.events.disable(), A = f.append_math_shadow("" + c.PROCEDURE_BLOCK_INPUT_NAMES.PARAM_PREFIX + p$length, c.PROCEDURE_BLOCK_INPUT_NAMES.DEF_MUTATOR), v = "<block type=\"" + c.PROCEDURE_BLOCK_TYPES.PARAM_ON_BLOCK + "\"></block>", (m = f.append_block_input(v, A)).set_field_value(t, c.PROCEDURE_BLOCK_FIELD_NAMES.PARAM_NAME), undefined !== s && m.set_field_value("=" + s, c.PROCEDURE_BLOCK_FIELD_NAMES.PARAM_DEFAULT_VALUE), e.events.enable(), e.events.is_enabled() && (y = e.events.get_group(), e.events.set_group(y || true), e.events.fire(g("change_procedure_param", {
                block: f,
                old_value: undefined,
                new_value: {
                  param_name: t,
                  default_value: s
                }
              })), e.events.set_group(y)), [2])) : [2]
          }
        })
      })
    },
    removeMutation: function () {
      var t
      var r = (0, a.is_func)(n) ? n() : n
      var i = r.get_procedure_name_by_def(this.id)
      var o = null === (t = r.get_procedure_by_name(i)) || undefined === t ? undefined : t.params
      if (o && 0 !== o.length) {
        e.events.disable()
        var s = "" + c.PROCEDURE_BLOCK_INPUT_NAMES.PARAM_PREFIX + (o.length - 1)
        var u = this.get_input(s)
        var l = u && u.connection && u.connection.targetBlock()
        if (l) {
          l.dispose(undefined, false)
        }
        this.remove_input(s)
        e.events.enable()
        var f = o[o.length - 1]
        if (e.events.is_enabled()) {
          e.events.fire(g("change_procedure_param", {
            block: this,
            old_value: f,
            new_value: undefined
          }))
        }
      }
    },
    domToMutation: function (e) {
      if (e) {
        for (var /* [auto-meaningful-name] */e$children$length = e.children.length, n = 0; n < t; n++) {
          var r = e.children[n]
          if ("arg" === r.nodeName.toLowerCase()) {
            var o = r.getAttribute("name");
            (0, i.assert)(o)
            this.append_math_shadow("" + c.PROCEDURE_BLOCK_INPUT_NAMES.PARAM_PREFIX + n, c.PROCEDURE_BLOCK_INPUT_NAMES.DEF_MUTATOR)
          }
        }
      }
    },
    mutationToDom: function () {
      for (var e = document.createElement("mutation"), t = this.inputList.filter(function (e) {
          return e.name.startsWith(c.PROCEDURE_BLOCK_INPUT_NAMES.PARAM_PREFIX)
        }), n = 0; n < t.length; n++) {
        var r = document.createElement("arg")
        r.setAttribute("name", t[n].name)
        e.appendChild(r)
      }
      return e
    }
  })
  e.define_block_with_object(c.PROCEDURE_BLOCK_TYPES.PARAM_ON_BLOCK, {
    init: function () {
      var t = this
      var n = _({
        text: ""
      })
      n.on_mouse_down = function (e) {
        e.preventDefault()
      }
      this.append_dummy_input().append_field(n, c.PROCEDURE_BLOCK_FIELD_NAMES.PARAM_NAME)
      var r = _({
        text: ""
      })
      r.margin_left = 2
      this.append_dummy_input().append_field(r, c.PROCEDURE_BLOCK_FIELD_NAMES.PARAM_DEFAULT_VALUE)
      this.set_output(true)
      this.set_inputs_inline(true)
      this.set_colour(e.theme.block_color.ORANGE_7.fill)
      this.on_mouse_down = function (n) {
        var r = e.events.get_group()
        e.events.set_group(r || true)
        if (0 === n.button) {
          var i = t.workspace.get_gesture(n)
          if (i) {
            var o = i.handle_move.bind(i)
            var a = i.handle_up.bind(i)
            var s = 0
            var u = false
            i.handle_move = function (r) {
              if (u) {
                o(r)
              } else if (s < 10) {
                s++
              } else {
                i.is_dragging_block = true
                var a = function () {
                  e.events.disable()
                  var n = t.get_field_value(c.PROCEDURE_BLOCK_FIELD_NAMES.PARAM_NAME) || ""
                  var r = t.workspace.new_block(c.PROCEDURE_BLOCK_TYPES.PARAM)
                  var i = t.get_relative_to_surface_xy()
                  r.move_by(i)
                  r.set_field_value(n, c.PROCEDURE_BLOCK_FIELD_NAMES.PARAM_NAME)
                  r.init_svg()
                  r.render()
                  e.events.enable()
                  if (e.events.is_enabled()) {
                    e.events.fire(A({
                      block: r,
                      source: "other"
                    }))
                  }
                  return r
                }()
                a.select()
                i.handle_block_start(n, a)
                i.target_block = a
                u = true
              }
            }
            i.handle_up = function (t) {
              a(t)
              e.events.set_group(r)
            }
          }
        }
      }
    }
  })
  e.define_block_with_object(c.PROCEDURE_BLOCK_TYPES.RETURN, {
    init: function () {
      this.append_dummy_input("PROCEDURES_2_DEFRETURN_RETURN").append_field(e.Msg.PROCEDURES_DEFRETURN_RETURN)
      this.append_math_shadow(c.PROCEDURE_BLOCK_INPUT_NAMES.RETURN_VALUE)
      this.append_dummy_input(c.PROCEDURE_BLOCK_INPUT_NAMES.RETURN_MUTATOR).append_field(p(undefined), "REMOVE_MUTATOR")
      this.set_previous_statement(true)
      this.set_next_statement(false)
      this.set_inputs_inline(true)
      this.set_colour(e.theme.block_color.ORANGE_4.fill)
      this.itemCount_ = 1
    },
    addMutation: function (t) {
      var /* [auto-meaningful-name] */o$connection
      if (0 === this.itemCount_) {
        var r = this.get_input(c.PROCEDURE_BLOCK_INPUT_NAMES.RETURN_MUTATOR);
        (0, i.assert)(r)
        r.remove_field("ADD_MUTATOR")
        r.append_field(p(undefined), "REMOVE_MUTATOR")
        this.append_math_shadow(c.PROCEDURE_BLOCK_INPUT_NAMES.RETURN_VALUE, c.PROCEDURE_BLOCK_INPUT_NAMES.RETURN_MUTATOR)
        var o = this.get_input(c.PROCEDURE_BLOCK_INPUT_NAMES.RETURN_VALUE)
        var a = o && (null === (o$connection = o.connection) || undefined === o$connection ? undefined : o$connection.targetBlock())
        if (t) {
          e.events.disable()
          if (!(null === a || undefined === a)) {
            a.set_field_value(t.toString(), "NUM")
          }
          e.events.enable()
        }
        this.itemCount_ = 1
        this.render()
        if (e.events.is_enabled()) {
          e.events.fire(g("mutation", {
            block: this,
            old_value: undefined,
            new_value: t || 1
          }))
        }
      }
    },
    removeMutation: function () {
      var /* [auto-meaningful-name] */r$connection
      var n
      if (!(this.itemCount_ < 1)) {
        var r = this.get_input(c.PROCEDURE_BLOCK_INPUT_NAMES.RETURN_VALUE)
        var o = r && (null === (r$connection = r.connection) || undefined === r$connection ? undefined : r$connection.targetBlock())
        var a = ""
        if (null === o || undefined === o ? undefined : o.is_shadow()) {
          a = o.get_field_value("NUM") || ""
        } else {
          var s = null === (n = null === r || undefined === r ? undefined : r.connection) || undefined === n ? undefined : n.get_shadow_dom()
          var u = null === s || undefined === s ? undefined : s.firstChild
          if (u && null !== u.textContent) {
            a = u.textContent
          }
        }
        this.remove_input(c.PROCEDURE_BLOCK_INPUT_NAMES.RETURN_VALUE)
        var l = this.get_input(c.PROCEDURE_BLOCK_INPUT_NAMES.RETURN_MUTATOR);
        (0, i.assert)(l)
        l.remove_field("REMOVE_MUTATOR")
        l.append_field(h(), "ADD_MUTATOR")
        this.itemCount_ = 0
        this.render()
        if (e.events.is_enabled()) {
          e.events.fire(g("mutation", {
            block: this,
            old_value: a,
            new_value: undefined
          }))
        }
      }
    },
    mutationToDom: function () {
      var e = document.createElement("mutation")
      e.setAttribute("items", String(this.itemCount_))
      return e
    },
    domToMutation: function (e) {
      var /* [auto-meaningful-name] */this$removeMutation
      if (e) {
        if (0 === parseInt(e.getAttribute("items") || "0", 10)) {
          if (!(null === (this$removeMutation = this.removeMutation) || undefined === this$removeMutation)) {
            this$removeMutation.call(this)
          }
        }
      }
    }
  })
  var v = {
    build_inputs: function () {
      var t = this
      var r = (0, a.is_func)(n) ? n() : n
      var i = this.append_dummy_input("NAME").append_field(_({
        text: ""
      }), c.PROCEDURE_BLOCK_FIELD_NAMES.PROCEDURE_NAME).fieldRow[0]
      i.set_validator(function (n) {
        if (e.runtime_data.is_pasting()) {
          return i.get_value() || n
        }
        var o = r.get_procedure_by_caller_id(t.id)
        return o ? o.name : n
      })
    },
    domToMutation: function (t) {
      var r
      var o = (0, a.is_func)(n) ? n() : n
      var s = t.getAttribute("name");
      (0, i.assert)(s)
      var u = t.getAttribute("def_id")
      var l = u ? o.get_procedure_by_def(u) : o.get_procedure_by_name(s)
      s = l ? l.name : s
      e.events.disable()
      this.set_field_value(s, c.PROCEDURE_BLOCK_FIELD_NAMES.PROCEDURE_NAME)
      e.events.enable()
      for (var f = l ? l.params.length : t.childNodes.length, d = 0; d < f; d++) {
        var h = t.childNodes[d]
        if (!h || "procedures_2_parameter_shadow" === h.nodeName.toLowerCase()) {
          var p = h.getAttribute("value")
          var _ = this.append_default_value_shadow("" + c.PROCEDURE_BLOCK_INPUT_NAMES.ARG_PREFIX + d)
          var A = p || "0"
          var g = null === (r = null === _ || undefined === _ ? undefined : _.connection) || undefined === r ? undefined : r.targetBlock()
          if (null === g || undefined === g ? undefined : g.is_shadow()) {
            var v = g.get_field("TEXT")
            if (v && (0, a.is_field_default_value)(v)) {
              v.set_value(A)
            }
          }
        }
      }
    },
    mutationToDom: function () {
      var e = (0, a.is_func)(n) ? n() : n
      var t = document.createElement("mutation")
      var r = this.get_field_value(c.PROCEDURE_BLOCK_FIELD_NAMES.PROCEDURE_NAME);
      (0, i.assert)(r)
      t.setAttribute("name", r)
      var o = e.get_procedure_by_name(r) || e.get_procedure_by_def(r);
      (0, i.assert)(o)
      t.setAttribute("def_id", o.def_id)
      for (var /* [auto-meaningful-name] */o$params = o.params, u = 0; u < o$params.length; u++) {
        var l = document.createElement("procedures_2_parameter_shadow")
        var f = o$params[u]
        l.setAttribute("name", f.param_name)
        l.setAttribute("value", f.default_value || "0")
        t.appendChild(l)
      }
      return t
    },
    addMutation: function (e) {
      var t
      var /* [auto-meaningful-name] */this$inputList$filterFunctionEReturnE$name$includesC$PROCEDURE_BLOCK_INPUT_NAMES$ARG_PREFIX$length = this.inputList.filter(function (e) {
        return e.name.includes(c.PROCEDURE_BLOCK_INPUT_NAMES.ARG_PREFIX)
      }).length
      var r = this.append_default_value_shadow("" + c.PROCEDURE_BLOCK_INPUT_NAMES.ARG_PREFIX + this$inputList$filterFunctionEReturnE$name$includesC$PROCEDURE_BLOCK_INPUT_NAMES$ARG_PREFIX$length)
      var i = e || "0"
      var o = null === (t = null === r || undefined === r ? undefined : r.connection) || undefined === t ? undefined : t.targetBlock()
      if (null === o || undefined === o ? undefined : o.is_shadow()) {
        var s = o.get_field("TEXT")
        if (s && (0, a.is_field_default_value)(s)) {
          s.set_value(i)
        }
      }
      if (this.is_collapsed()) {
        this.update_collapsed(true)
      } else {
        this.render()
      }
    },
    removeMutation: function () {
      var /* [auto-meaningful-name] */this$inputList$filterFunctionEReturnE$name$includesC$PROCEDURE_BLOCK_INPUT_NAMES$ARG_PREFIX$length = this.inputList.filter(function (e) {
        return e.name.includes(c.PROCEDURE_BLOCK_INPUT_NAMES.ARG_PREFIX)
      }).length
      if (!this$inputList$filterFunctionEReturnE$name$includesC$PROCEDURE_BLOCK_INPUT_NAMES$ARG_PREFIX$length) {
        throw Error("Trying to remove no-existent arg input on a call block")
      }
      this.remove_input("" + c.PROCEDURE_BLOCK_INPUT_NAMES.ARG_PREFIX + (this$inputList$filterFunctionEReturnE$name$includesC$PROCEDURE_BLOCK_INPUT_NAMES$ARG_PREFIX$length - 1))
      if (this.is_collapsed()) {
        this.update_collapsed(true)
      } else {
        this.render()
      }
    }
  }
  e.define_block_with_object(c.PROCEDURE_BLOCK_TYPES.CALL_RETURN, (0, r.__assign)((0, r.__assign)({}, v), {
    init: function () {
      v.build_inputs.call(this)
      this.set_output(true)
      this.set_inputs_inline(true)
      this.set_colour(e.theme.block_color.ORANGE_4.fill)
    }
  }))
  e.define_block_with_object(c.PROCEDURE_BLOCK_TYPES.CALL_NORETURN, (0, r.__assign)((0, r.__assign)({}, v), {
    init: function () {
      v.build_inputs.call(this)
      this.set_previous_statement(true)
      this.set_next_statement(true)
      this.set_inputs_inline(true)
      this.set_colour(e.theme.block_color.ORANGE_4.fill)
    }
  }))
  e.define_blocks_with_json_array([
    {
      type: c.PROCEDURE_BLOCK_TYPES.PARAM,
      message0: "%1",
      args0: [
        {
          type: "field_label_serializable",
          name: c.PROCEDURE_BLOCK_FIELD_NAMES.PARAM_NAME,
          text: "x"
        }
      ],
      output: true,
      colour: "%{BKY_ORANGE_7}",
      required_context: c.PROCEDURE_CONTEXT,
      extensions: ["param_block"]
    }
  ])
}
