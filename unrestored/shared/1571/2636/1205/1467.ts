/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1467
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.init_tell_blocks = exports.is_controls_if = exports.init_control_blocks = undefined
var r = require(/* 125 */"../../../../../src/shared/packages/@crc/blink/src/core/di")
var o = require(/* 387 */"../207/734/387")
var i = require(/* 214 */"../1022/214")
var a = require(/* 581 */"./2610/581")
var s = ["Boolean"]
exports.init_control_blocks = function (e) {
  var t = [
    {
      type: "repeat_forever",
      message0: (0, a.i18n)("repeat_forever"),
      args0: [
        {
          type: "input_dummy",
          align: "CENTRE"
        }, {
          type: "input_statement",
          name: "DO"
        }
      ],
      previousStatement: true,
      nextStatement: true,
      colour: (0, a.i18n)("BLUE_1"),
      inputsInline: true
    }, {
      type: "repeat_n_times",
      message0: (0, a.i18n)("repeat_n_times"),
      args0: [
        {
          type: "input_value",
          name: "times",
          check: "Number",
          align: "CENTRE"
        }, {
          type: "input_dummy",
          align: "CENTRE"
        }, {
          type: "input_statement",
          name: "DO"
        }
      ],
      previousStatement: true,
      nextStatement: true,
      colour: (0, a.i18n)("BLUE_1"),
      inputsInline: true
    }, {
      type: "repeat_forever_until",
      message0: (0, a.i18n)("repeat_forever_until"),
      args0: [
        {
          type: "input_value",
          name: "condition",
          check: "Boolean",
          align: "CENTRE"
        }, {
          type: "input_dummy",
          align: "CENTRE"
        }, {
          type: "input_statement",
          name: "DO"
        }
      ],
      previousStatement: true,
      nextStatement: true,
      colour: (0, a.i18n)("BLUE_1"),
      inputsInline: true
    }, {
      type: "break",
      message0: (0, a.i18n)("break"),
      previousStatement: true,
      nextStatement: true,
      colour: (0, a.i18n)("BLUE_1"),
      inputsInline: true
    }, {
      type: "warp",
      message0: (0, a.i18n)("warp"),
      args0: [
        {
          type: "input_dummy",
          align: "CENTRE"
        }, {
          type: "input_statement",
          name: "DO"
        }
      ],
      previousStatement: true,
      nextStatement: true,
      colour: (0, a.i18n)("GREEN_5"),
      inputsInline: true
    }, {
      type: "wait",
      message0: (0, a.i18n)("wait_secs"),
      args0: [
        {
          type: "input_value",
          name: "time",
          check: "Number",
          align: "CENTRE"
        }
      ],
      previousStatement: true,
      nextStatement: true,
      colour: (0, a.i18n)("BLUE_1"),
      inputsInline: true
    }, {
      type: "wait_until",
      message0: (0, a.i18n)("wait_until"),
      args0: [
        {
          type: "input_value",
          name: "condition",
          check: "Boolean",
          align: "CENTRE"
        }
      ],
      previousStatement: true,
      nextStatement: true,
      colour: (0, a.i18n)("BLUE_1"),
      inputsInline: true
    }, {
      type: "destruct",
      message0: (0, a.i18n)("destruct"),
      previousStatement: true,
      nextStatement: true,
      colour: (0, a.i18n)("BLUE_1"),
      inputsInline: true
    }, {
      type: "controls_if",
      message0: (0, a.i18n)("CONTROLS_IF_MSG_IF") + " %1",
      args0: [
        {
          type: "input_value",
          name: "IF0",
          check: s
        }
      ],
      message1: "%1",
      args1: [
        {
          type: "input_statement",
          name: "DO0"
        }
      ],
      message2: "%1 %2",
      args2: [
        {
          type: "mutation_add_button",
          name: "ADD_ELSE_IF"
        }, {
          type: "input_dummy",
          name: "EXTRA_ADD_ELSE"
        }
      ],
      inputsInline: true,
      previousStatement: true,
      nextStatement: true,
      colour: (0, a.i18n)("BLUE_1"),
      mutator: "controls_if_mutator_codemao",
      extensions: ["controls_if_tooltip"]
    }
  ]
  e.define_blocks_with_json_array(t)
  Object.assign(e.blocks_xml, {
    repeat_forever: "<block type=\"repeat_forever\"/>",
    repeat_n_times: "<block type=\"repeat_n_times\">\n      " + (0, a.number_value)("times", "20", "1,,1") + "\n    </block>",
    repeat_forever_until: "<block type=\"repeat_forever_until\">\n      " + (0, a.logic_value)("condition") + "\n    </block>",
    break: "<block type=\"break\"/>",
    warp: "<block type=\"warp\"/>",
    wait: "<block type=\"wait\">\n      " + (0, a.number_value)("time", "1", "0") + "\n    </block>",
    wait_until: "<block type=\"wait_until\">\n      " + (0, a.logic_value)("condition") + "\n    </block>",
    destruct: "<block type=\"destruct\"/>",
    controls_if_no_else: "<block type=\"controls_if\">\n      " + (0, a.logic_value)("IF0") + "\n    </block>",
    controls_if: "<block type=\"controls_if\">\n      <mutation else=\"1\"></mutation>\n      " + (0, a.logic_value)("IF0") + "\n    </block>"
  })
  var n = {
    elseCount_: 0,
    prevElseCount_: 0,
    elseifCount_: 0,
    prevElseifCount_: 0,
    addMutation: function (t) {
      if (this.elseCount_ < 1) {
        this.elseCount_ = 1
      } else {
        this.elseifCount_++
      }
      this.updateShape_(t)
      var /* [auto-meaningful-name] */e$di_container = e.di_container
      var o = e$di_container.get(r.BINDING.events)
      var i = e$di_container.get(r.BINDING.ChangeEvent)
      if (o.is_enabled()) {
        var a = i("mutation", {
          block: this,
          old_value: undefined,
          new_value: t || this.prevElseifCount_
        })
        o.fire(a)
      }
    },
    removeMutation: function (t) {
      if (this.elseifCount_ > 0) {
        this.elseifCount_--
      } else {
        this.elseCount_ = 0
      }
      this.updateShape_(t)
      var /* [auto-meaningful-name] */e$di_container = e.di_container
      var o = e$di_container.get(r.BINDING.events)
      if (o.is_enabled()) {
        var i = e$di_container.get(r.BINDING.ChangeEvent)
        o.fire(i("mutation", {
          block: this,
          old_value: t || this.prevElseifCount_,
          new_value: undefined
        }))
      }
    },
    updateShape_: function (t) {
      var /* [auto-meaningful-name] */w$connection
      var c
      if (this.prevElseifCount_ !== this.elseifCount_ || this.prevElseCount_ !== this.elseCount_) {
        var /* [auto-meaningful-name] */e$di_container = e.di_container
        var u = e$di_container.get(r.BINDING.Msg)
        var d = e$di_container.get(r.BINDING.MutationAddButton)
        var p = e$di_container.get(r.BINDING.MutationRemoveButton)
        if (this.prevElseCount_ !== this.elseCount_) {
          if (this.prevElseCount_ < this.elseCount_) {
            this.remove_input("EXTRA_ADD_ELSE")
            this.append_dummy_input("ELSE_TEXT").append_field(u.CONTROLS_IF_MSG_ELSE).append_field(p(1), "REMOVE_ELSE").append_field(d(), "ADD_ELSE_IF")
            this.append_statement_input("ELSE")
          } else {
            this.remove_input("ELSE")
            this.remove_input("ELSE_TEXT")
            this.append_dummy_input("EXTRA_ADD_ELSE").append_field(d(), "ADD_ELSE_IF")
          }
          this.prevElseCount_ = this.elseCount_
        }
        if (this.prevElseifCount_ !== this.elseifCount_) {
          var f = e$di_container.get(r.BINDING.events)
          if (this.elseifCount_ > this.prevElseifCount_) {
            if (this.elseifCount_ > 0) {
              if ((b = this.get_input("ELSE_TEXT")) && b.get_field("REMOVE_ELSE")) {
                b.remove_field("REMOVE_ELSE")
                if (v = b.get_field("ADD_ELSE_IF")) {
                  v.margin_left = 26
                }
              }
            }
            var h = t || this.prevElseifCount_ + 1
            var m = this.elseifCount_ - this.prevElseifCount_
            this.inputList = this.inputList.map(function (e) {
              var t = Number(e.name.match(/[0-9]+/))
              if (t >= h) {
                e.name = e.name.replace(String(t), String(t + m))
                var n = e.fieldRow[0]
                if ((0, i.is_field_mutation)(n) && !n.is_add) {
                  n.set_index(t + m)
                }
              }
              return e
            })
            f.disable()
            for (var g = h + m - 1; g >= h; g--) {
              var _ = g === this.elseifCount_ ? "ELSE_TEXT" : "IF" + (g + 1)
              this.append_logic_shadow("IF" + g, _).set_check(s).append_field((0, a.i18n)("CONTROLS_IF_MSG_ELSEIF"))
              this.append_dummy_input("IF_TEXT" + g, _).append_field(p(g))
              this.append_statement_input("DO" + g, _)
            }
            f.enable()
          } else {
            if (0 === this.elseifCount_) {
              var v
              var b = this.get_input("ELSE_TEXT");
              (0, o.assert)(b)
              b.insert_field_at(1, p(1), "REMOVE_ELSE")
              if (v = b.get_field("ADD_ELSE_IF")) {
                v.margin_left = e.theme.renderer.SEP_SPACE_X
              }
            }
            for (var y = t || this.prevElseifCount_, E = new RegExp("[^0-9]" + y + "$"), O = this.inputList.length - 1; O >= 0; O--) {
              var w = this.inputList[O]
              if (E.test(w.name)) {
                if (null === (c = null === (w$connection = w.connection) || undefined === w$connection ? undefined : w$connection.targetBlock()) || undefined === c ? undefined : c.is_shadow()) {
                  f.disable()
                  this.remove_input(w.name)
                  f.enable()
                } else {
                  this.remove_input(w.name)
                }
              }
            }
            this.inputList = this.inputList.map(function (e) {
              var t = Number(e.name.match(/[0-9]+/))
              if (t > y) {
                e.name = e.name.replace(String(t), String(t - 1))
                var n = e.fieldRow[0]
                if ((0, i.is_field_mutation)(n) && !n.is_add) {
                  n.set_index(t - 1)
                }
              }
              return e
            })
          }
          this.prevElseifCount_ = this.elseifCount_
          this.render()
        } else {
          this.render()
        }
      }
    },
    domToMutation: function (e) {
      this.elseifCount_ = parseInt(e.getAttribute("elseif"), 10) || 0
      this.elseCount_ = parseInt(e.getAttribute("else"), 10) || 0
      this.updateShape_()
    },
    mutationToDom: function () {
      if (this.elseifCount_ || this.elseCount_) {
        var e = document.createElement("mutation")
        if (this.elseifCount_) {
          e.setAttribute("elseif", String(this.elseifCount_))
        }
        if (this.elseCount_) {
          e.setAttribute("else", String(1))
        }
        return e
      }
    }
  }
  var c = Object.assign({}, n, {
    updateShape_: function () {}
  })
  e.extensions.register("controls_if_tooltip", function () {
    var t = this
    this.set_tooltip(function () {
      var n = e.di_container.get(r.BINDING.utils)
      var o = function (e) {
        return n.replace_message_references((0, a.i18n)("CONTROLS_IF_TOOLTIP_" + e))
      }
      return t.elseifCount_ || t.elseCount_ ? !t.elseifCount_ && t.elseCount_ ? o(2) : t.elseifCount_ && !t.elseCount_ ? o(3) : o(4) : o(1)
    })
  })
  e.extensions.register_mutator("controls_if_mutator_codemao", n)
  e.extensions.register_mutator("controls_if_one_else_mutator_codemao", c)
}
exports.is_controls_if = function (e) {
  return "controls_if" === e.type
}
exports.init_tell_blocks = function (e, t) {
  var n = [
    {
      type: "tell",
      message0: (0, a.i18n)("tell"),
      args0: [
        {
          type: "field_dropdown",
          name: "sprite",
          options: function () {
            var e = t()
            if (e.length > 1) {
              e.shift()
            }
            return e
          }
        }, {
          type: "input_dummy",
          align: "CENTRE"
        }, {
          type: "input_statement",
          name: "DO"
        }
      ],
      previousStatement: true,
      nextStatement: true,
      colour: (0, a.i18n)("BLUE_1"),
      inputsInline: true,
      extensions: ["disable_inside_warp_loop"]
    }, {
      type: "sync_tell",
      message0: (0, a.i18n)("sync_tell"),
      args0: [
        {
          type: "field_dropdown",
          name: "sprite",
          options: function () {
            var e = t()
            if (e.length > 1) {
              e.shift()
            }
            return e
          }
        }, {
          type: "input_dummy",
          align: "CENTRE"
        }, {
          type: "input_statement",
          name: "DO"
        }
      ],
      previousStatement: true,
      nextStatement: true,
      colour: (0, a.i18n)("BLUE_1"),
      inputsInline: true,
      extensions: ["disable_inside_warp_loop"]
    }
  ]
  e.define_blocks_with_json_array(n)
  Object.assign(e.blocks_xml, {
    tell: "<block type=\"tell\"/>",
    sync_tell: "<block type=\"sync_tell\"/>"
  })
}
