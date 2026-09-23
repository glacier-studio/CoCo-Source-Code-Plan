/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2605
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.init_math_blocks = undefined
var r = require(/* 125 */"../../../../../src/shared/packages/@crc/blink/src/core/di")
var o = require(/* 581 */"./2610/581")
exports.init_math_blocks = function (e) {
  var /* [auto-meaningful-name] */e$Blocks = e.Blocks
  e.define_blocks_with_json_array([
    {
      type: "random",
      message0: (0, o.i18n)("random_num"),
      args0: [
        {
          type: "input_value",
          name: "a",
          check: "Number",
          align: "CENTRE"
        }, {
          type: "input_value",
          name: "b",
          check: "Number",
          align: "CENTRE"
        }
      ],
      output: "Number",
      colour: (0, o.i18n)("ORANGE_3"),
      inputsInline: true
    }, {
      type: "divisible_by",
      message0: (0, o.i18n)("divisible_by"),
      args0: [
        {
          type: "input_value",
          name: "NUMBER_TO_CHECK",
          check: "Number"
        }, {
          type: "input_value",
          name: "DIVISOR",
          check: "Number"
        }
      ],
      output: "Boolean",
      colour: (0, o.i18n)("ORANGE_3"),
      inputsInline: true
    }, {
      type: "calculate",
      message0: (0, o.i18n)("calculate"),
      args0: [
        {
          type: "input_value",
          name: "input",
          check: ["String", "Number"]
        }
      ],
      output: "Number",
      colour: (0, o.i18n)("ORANGE_3"),
      inputsInline: true,
      tooltip: (0, o.i18n)("CALCULATE_TOOLTIPS")
    }, {
      type: "math_arithmetic",
      message0: (0, o.i18n)("math_arithmetic"),
      args0: [
        {
          type: "input_value",
          name: "A",
          check: ["Number", "String", "Boolean", "Array"]
        }, {
          type: "field_dropdown",
          name: "OP",
          options: [[(0, o.i18n)("MATH_ADDITION_SYMBOL"), "ADD"], [(0, o.i18n)("MATH_SUBTRACTION_SYMBOL"), "MINUS"], [(0, o.i18n)("MATH_MULTIPLICATION_SYMBOL"), "MULTIPLY"], [(0, o.i18n)("MATH_DIVISION_SYMBOL"), "DIVIDE"], [(0, o.i18n)("MATH_POWER_SYMBOL"), "POWER"]]
        }, {
          type: "input_value",
          name: "B",
          check: ["Number", "String", "Boolean", "Array"]
        }
      ],
      inputsInline: true,
      output: "Number",
      colour: (0, o.i18n)("ORANGE_3"),
      extensions: ["math_op_tooltip"]
    }, {
      type: "math_single",
      message0: (0, o.i18n)("math_single"),
      args0: [
        {
          type: "field_dropdown",
          name: "OP",
          options: [[(0, o.i18n)("MATH_SINGLE_OP_ROOT"), "ROOT"], [(0, o.i18n)("MATH_SINGLE_OP_ABSOLUTE"), "ABS"], ["-", "NEG"], ["ln", "LN"], ["log10", "LOG10"], ["e^", "EXP"], ["10^", "POW10"]]
        }, {
          type: "input_value",
          name: "NUM",
          check: "Number"
        }
      ],
      output: "Number",
      colour: (0, o.i18n)("ORANGE_3"),
      extensions: ["math_op_tooltip"]
    }, {
      type: "math_round",
      message0: (0, o.i18n)("math_round"),
      args0: [
        {
          type: "field_dropdown",
          name: "OP",
          options: [[(0, o.i18n)("MATH_ROUND_OPERATOR_ROUND"), "ROUND"], [(0, o.i18n)("MATH_ROUND_OPERATOR_ROUNDUP"), "ROUNDUP"], [(0, o.i18n)("MATH_ROUND_OPERATOR_ROUNDDOWN"), "ROUNDDOWN"]]
        }, {
          type: "input_shadow",
          name: "NUM",
          field_type: "math",
          default_text: "0"
        }
      ],
      output: "Number",
      colour: (0, o.i18n)("ORANGE_3"),
      tooltip: (0, o.i18n)("MATH_ROUND_TOOLTIP")
    }, {
      type: "math_modulo",
      message0: (0, o.i18n)("MATH_MODULO_TITLE"),
      args0: [
        {
          type: "input_value",
          name: "DIVIDEND",
          check: "Number"
        }, {
          type: "input_value",
          name: "DIVISOR",
          check: "Number"
        }
      ],
      inputsInline: true,
      output: "Number",
      colour: (0, o.i18n)("ORANGE_3"),
      tooltip: (0, o.i18n)("MATH_MODULO_TOOLTIP")
    }, {
      type: "math_number_property",
      message0: (0, o.i18n)("math_number_property"),
      args0: [
        {
          type: "input_value",
          name: "NUMBER_TO_CHECK",
          check: "Number"
        }, {
          type: "field_dropdown",
          name: "PROPERTY",
          options: [[(0, o.i18n)("MATH_IS_EVEN"), "EVEN"], [(0, o.i18n)("MATH_IS_ODD"), "ODD"], [(0, o.i18n)("MATH_IS_PRIME"), "PRIME"], [(0, o.i18n)("MATH_IS_WHOLE"), "WHOLE"], [(0, o.i18n)("MATH_IS_POSITIVE"), "POSITIVE"], [(0, o.i18n)("MATH_IS_NEGATIVE"), "NEGATIVE"]]
        }
      ],
      inputsInline: true,
      output: "Boolean",
      colour: (0, o.i18n)("ORANGE_3"),
      tooltip: (0, o.i18n)("MATH_IS_TOOLTIP")
    }
  ])
  var n = {
    ADD: (0, o.i18n)("MATH_ARITHMETIC_TOOLTIP_ADD"),
    MINUS: (0, o.i18n)("MATH_ARITHMETIC_TOOLTIP_MINUS"),
    MULTIPLY: (0, o.i18n)("MATH_ARITHMETIC_TOOLTIP_MULTIPLY"),
    DIVIDE: (0, o.i18n)("MATH_ARITHMETIC_TOOLTIP_DIVIDE"),
    POWER: (0, o.i18n)("MATH_ARITHMETIC_TOOLTIP_POWER"),
    ROOT: (0, o.i18n)("MATH_SINGLE_TOOLTIP_ROOT"),
    ABS: (0, o.i18n)("MATH_SINGLE_TOOLTIP_ABS"),
    NEG: (0, o.i18n)("MATH_SINGLE_TOOLTIP_NEG"),
    LN: (0, o.i18n)("MATH_SINGLE_TOOLTIP_LN"),
    LOG10: (0, o.i18n)("MATH_SINGLE_TOOLTIP_LOG10"),
    EXP: (0, o.i18n)("MATH_SINGLE_TOOLTIP_EXP"),
    POW10: (0, o.i18n)("MATH_SINGLE_TOOLTIP_POW10")
  }
  e.extensions.register("math_op_tooltip", e.extensions.build_tooltip_for_dropdown("OP", n))
  e$Blocks.math_trig = {
    init: function () {
      this.set_colour_by_key((0, o.i18n)("ORANGE_3"))
      var t = this
      var n = e.di_container.get(r.BINDING.FieldDropdown)({
        menu_generator: [[(0, o.i18n)("MATH_TRIG_SIN"), "SIN"], [(0, o.i18n)("MATH_TRIG_COS"), "COS"], [(0, o.i18n)("MATH_TRIG_TAN"), "TAN"], [(0, o.i18n)("MATH_TRIG_ASIN"), "ASIN"], [(0, o.i18n)("MATH_TRIG_ACOS"), "ACOS"], [(0, o.i18n)("MATH_TRIG_ATAN"), "ATAN"]],
        opt_onchange: function (n) {
          var /* [auto-meaningful-name] */t$addMutation
          var /* [auto-meaningful-name] */t$removeMutation
          var a = "SIN" === n || "COS" === n || "TAN" === n
          var s = t.get_input("DEGREES")
          var c = e.di_container.get(r.BINDING.events)
          if (a) {
            if (!(s || c.is_undoing() || null === (t$addMutation = t.addMutation) || undefined === t$addMutation)) {
              t$addMutation.call(t)
            }
          } else {
            if (s && !c.is_undoing()) {
              if (!(null === (t$removeMutation = t.removeMutation) || undefined === t$removeMutation)) {
                t$removeMutation.call(t)
              }
            }
          }
        }
      })
      this.append_dummy_input().append_field(n, "OP")
      this.append_shadow_input("NUM", (0, o.number_shadow)("45")).set_check("Number")
      this.append_dummy_input("DEGREES").append_field((0, o.i18n)("MATH_DEGREES"))
      this.set_inputs_inline(true)
      this.set_output(true)
    },
    addMutation: function () {
      this.append_dummy_input("DEGREES").append_field((0, o.i18n)("MATH_DEGREES"))
      var t = e.di_container.get(r.BINDING.events)
      if (t.is_enabled()) {
        var n = e.di_container.get(r.BINDING.ChangeEvent)
        t.fire(n("mutation", {
          block: this,
          old_value: undefined,
          new_value: "add"
        }))
      }
    },
    removeMutation: function () {
      var t = e.di_container.get(r.BINDING.events)
      this.remove_input("DEGREES")
      if (t.is_enabled()) {
        var n = e.di_container.get(r.BINDING.ChangeEvent)
        t.fire(n("mutation", {
          block: this,
          old_value: "remove",
          new_value: undefined
        }))
      }
    }
  }
  Object.assign(e.blocks_xml, {
    random: "<block type=\"random\">\n      " + (0, o.number_value)("a", "0") + "\n      " + (0, o.number_value)("b", "5") + "\n    </block>\n    ",
    divisible_by: "<block type=\"divisible_by\">\n      " + (0, o.number_value)("NUMBER_TO_CHECK", "9") + "\n      " + (0, o.number_value)("DIVISOR", "3") + "\n    </block>\n    ",
    calculate: "<block type=\"calculate\">\n      " + (0, o.text_value)("input", "1+2") + "\n    </block>\n    ",
    math_arithmetic: "<block type=\"math_arithmetic\">\n      " + (0, o.number_value)("A", "0") + "\n      " + (0, o.number_value)("B", "0") + "\n    </block>\n    ",
    math_single: "<block type=\"math_single\">\n      " + (0, o.number_value)("NUM", "0") + "\n    </block>\n    ",
    math_round: "<block type=\"math_round\">\n      " + (0, o.number_value)("NUM", "3.1") + "\n    </block>\n    ",
    math_modulo: "<block type=\"math_modulo\">\n      " + (0, o.number_value)("DIVIDEND", "64") + "\n      " + (0, o.number_value)("DIVISOR", "10") + "\n    </block>\n    ",
    math_number_property: "<block type=\"math_number_property\">\n      " + (0, o.number_value)("NUMBER_TO_CHECK", "0") + "\n    </block>\n    ",
    math_trig: "<block type=\"math_trig\">\n      " + (0, o.number_value)("NUM", "45") + "\n    </block>\n    "
  })
}
