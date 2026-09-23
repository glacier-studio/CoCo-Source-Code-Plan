/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2607
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.init_text_blocks = undefined
var r = require(/* 125 */"../../../../../src/shared/packages/@crc/blink/src/core/di")
var o = require(/* 537 */"../123/537")
var i = require(/* 293 */"../123/293")
var a = require(/* 123 */"../123/index")
var s = require(/* 581 */"./2610/581")
exports.init_text_blocks = function (e) {
  e.define_blocks_with_json_array([
    {
      type: "text_select",
      message0: (0, s.i18n)("text_select"),
      args0: [
        {
          type: "input_value",
          name: "string",
          check: ["String", "Number"]
        }, {
          type: "input_value",
          name: "char_start_index",
          check: ["Number"]
        }, {
          type: "input_value",
          name: "char_end_index",
          check: ["Number"]
        }
      ],
      output: "String",
      colour: (0, s.i18n)("ORANGE_3"),
      inputsInline: true
    }, {
      type: "text_length",
      message0: (0, s.i18n)("text_length"),
      args0: [
        {
          type: "input_value",
          name: "VALUE",
          check: ["String", "Number"]
        }
      ],
      output: "Number",
      colour: (0, s.i18n)("ORANGE_3"),
      inputsInline: true
    }, {
      type: "text_contain",
      message0: (0, s.i18n)("text_contain"),
      args0: [
        {
          type: "input_value",
          name: "TEXT1",
          check: ["String", "Number"]
        }, {
          type: "input_value",
          name: "TEXT2",
          check: ["String", "Number"]
        }
      ],
      output: "Boolean",
      colour: (0, s.i18n)("ORANGE_3"),
      inputsInline: true
    }, {
      type: "text_split",
      message0: (0, s.i18n)("text_split"),
      args0: [
        {
          type: "input_value",
          name: "TEXT_TO_SPLIT",
          check: ["String", "Number"]
        }, {
          type: "input_value",
          name: "SPLIT_TEXT",
          check: ["String", "Number"]
        }
      ],
      output: "Array",
      colour: (0, s.i18n)("ORANGE_3"),
      inputsInline: true
    }, {
      type: "text_join",
      message0: "",
      output: "String",
      inputsInline: true,
      colour: (0, s.i18n)("ORANGE_3"),
      tooltip: (0, s.i18n)("TEXT_JOIN_TOOLTIP"),
      mutator: "text_join_mutator_codemao"
    }
  ])
  var t = {
    QUOTE_IMAGE_LEFT_DATAURI: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAn0lEQVQI1z3OMa5BURSF4f/cQhAKjUQhuQmFNwGJEUi0RKN5rU7FHKhpjEH3TEMtkdBSCY1EIv8r7nFX9e29V7EBAOvu7RPjwmWGH/VuF8CyN9/OAdvqIXYLvtRaNjx9mMTDyo+NjAN1HNcl9ZQ5oQMM3dgDUqDo1l8DzvwmtZN7mnD+PkmLa+4mhrxVA9fRowBWmVBhFy5gYEjKMfz9AylsaRRgGzvZAAAAAElFTkSuQmCC",
    QUOTE_IMAGE_RIGHT_DATAURI: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAqUlEQVQI1z3KvUpCcRiA8ef9E4JNHhI0aFEacm1o0BsI0Slx8wa8gLauoDnoBhq7DcfWhggONDmJJgqCPA7neJ7p934EOOKOnM8Q7PDElo/4x4lFb2DmuUjcUzS3URnGib9qaPNbuXvBO3sGPHJDRG6fGVdMSeWDP2q99FQdFrz26Gu5Tq7dFMzUvbXy8KXeAj57cOklgA+u1B5AoslLtGIHQMaCVnwDnADZIFIrXsoXrgAAAABJRU5ErkJggg==",
    QUOTE_IMAGE_WIDTH: 8,
    QUOTE_IMAGE_HEIGHT: 8,
    quoteField_: function (e) {
      for (var t = 0; t < this.inputList.length; t++) {
        for (var n = this.inputList[t], r = 0; r < n.fieldRow.length; r++) {
          if (e == n.fieldRow[r].name) {
            n.insert_field_at(r, this.newQuote_(true))
            return void n.insert_field_at(r + 2, this.newQuote_(false))
          }
        }
      }
    },
    newQuote_: function (n) {
      var i = (0, a.create_svg_element)("g", {});
      (0, a.create_svg_element)("path", {
        d: n ? o.ICON.LEFT_QUOTA : o.ICON.RIGHT_QUOTA,
        "fill-rule": "nonzero"
      }, i)
      return e.di_container.get(r.BINDING.FieldImage)({
        src: i,
        width: t.QUOTE_IMAGE_WIDTH,
        height: t.QUOTE_IMAGE_HEIGHT,
        opt_tag: n ? "quote_left" : "quote_right"
      })
    }
  }
  var n = {
    itemCount_: 0,
    addMutation: function (t) {
      var /* [auto-meaningful-name] */this$append_value_inputCTITLE_TAILUndefined0S$text_shadowUL$connection
      var o = e.di_container.get(r.BINDING.events)
      var a = o.get_group()
      if (!a) {
        o.set_group(true)
      }
      var c = "ADD" + this.itemCount_
      var l = this.shadow_ids[this.itemCount_] || (0, i.gen_uid)()
      this.shadow_ids[this.itemCount_] = l
      var u = t || ""
      if (!(null === (this$append_value_inputCTITLE_TAILUndefined0S$text_shadowUL$connection = this.append_value_input(c, "TITLE_TAIL", undefined, (0, s.text_shadow)(u, l)).connection) || undefined === this$append_value_inputCTITLE_TAILUndefined0S$text_shadowUL$connection)) {
        this$append_value_inputCTITLE_TAILUndefined0S$text_shadowUL$connection.respawn_shadow()
      }
      this.itemCount_++
      if (this.itemCount_ > 2) {
        var d = this.get_input("MUTATE_BUTTON")
        if (d && !d.get_field("REMOVE")) {
          var p = e.di_container.get(r.BINDING.MutationRemoveButton)
          d.insert_field_at(0, p(undefined), "REMOVE")
        }
      }
      if (o.is_enabled()) {
        var f = e.di_container.get(r.BINDING.ChangeEvent)
        o.fire(f("mutation", {
          block: this,
          old_value: undefined,
          new_value: u
        }))
      }
      if (!a) {
        o.set_group(false)
      }
    },
    removeMutation: function () {
      var t
      var n = this.itemCount_ - 1
      var o = "ADD" + n
      var a = this.get_input(o)
      this.itemCount_--
      if (this.itemCount_ <= 2) {
        var s = this.get_input("MUTATE_BUTTON")
        if (s && s.get_field("REMOVE")) {
          s.remove_field("REMOVE")
        }
      }
      if (a) {
        var c
        var l = e.di_container.get(r.BINDING.events)
        var u = l.get_group()
        if (!u) {
          l.set_group(true)
        }
        var d = a.connection.targetBlock()
        if (d && d.is_shadow()) {
          this.shadow_ids[n] = d.id
          c = d.get_field_value("TEXT") || ""
        } else {
          var p = a.connection.get_shadow_dom()
          this.shadow_ids[n] = (null === p || undefined === p ? undefined : p.getAttribute("id")) || (0, i.gen_uid)()
          c = (null === (t = null === p || undefined === p ? undefined : p.firstChild) || undefined === t ? undefined : t.textContent) || ""
        }
        this.remove_input(o)
        if (l.is_enabled()) {
          var f = e.di_container.get(r.BINDING.ChangeEvent)
          l.fire(f("mutation", {
            block: this,
            old_value: c,
            new_value: undefined
          }))
        }
        if ("" === u) {
          l.set_group(false)
        }
      }
    },
    mutationToDom: function () {
      var e = document.createElement("mutation")
      e.setAttribute("items", String(this.itemCount_))
      return e
    },
    domToMutation: function (t) {
      this.itemCount_ = Math.max(parseInt(t.getAttribute("items") || "0", 10), 2)
      var n = e.di_container.get(r.BINDING.events)
      n.disable()
      this.append_dummy_input("TITLE_HEAD").append_field((0, s.i18n)("TEXT_JOIN_TITLE_HEAD"))
      this.shadow_ids = this.shadow_ids || []
      for (var o = 0; o < this.itemCount_; o++) {
        if (!this.get_input("ADD" + o)) {
          var a = (0, i.gen_uid)()
          this.shadow_ids[o] = a
          if (0 == o) {
            this.append_shadow_input("ADD" + o, (0, s.text_shadow)("ab", a))
            continue
          }
          if (1 == o) {
            this.append_shadow_input("ADD" + o, (0, s.text_shadow)("c", a))
            continue
          }
          this.append_shadow_input("ADD" + o, (0, s.text_shadow)("", a))
        }
      }
      this.append_dummy_input("TITLE_TAIL").append_field((0, s.i18n)("TEXT_JOIN_TITLE_TAIL"))
      var c = e.di_container.get(r.BINDING.MutationAddButton)
      var l = this.append_dummy_input("MUTATE_BUTTON").append_field(c(), "ADD")
      if (this.itemCount_ > 2) {
        var u = e.di_container.get(r.BINDING.MutationRemoveButton)
        l.insert_field_at(0, u(undefined), "REMOVE")
      }
      n.enable()
    }
  }
  e.extensions.register("text_quotes", function () {
    this.mixin(t)
    this.quoteField_("TEXT")
  })
  e.extensions.register_mutator("text_join_mutator_codemao", n)
  Object.assign(e.blocks_xml, {
    text_select: "<block type=\"text_select\">\n      " + (0, s.text_value)("string", "abc") + "\n      " + (0, s.number_value)("char_start_index", "1") + "\n      " + (0, s.number_value)("char_end_index", "2") + "\n    </block>",
    text_length: "<block type=\"text_length\">\n      " + (0, s.text_value)("VALUE", "abc") + "\n    </block>",
    text_contain: "<block type=\"text_contain\">\n      " + (0, s.text_value)("TEXT1", "abc") + "\n      " + (0, s.text_value)("TEXT2", "abc") + "\n    </block>",
    text_split: "<block type=\"text_split\">\n      " + (0, s.text_value)("TEXT_TO_SPLIT", "1,2,3,4") + "\n      " + (0, s.text_value)("SPLIT_TEXT", ",") + "\n    </block>",
    text_join: "<block type=\"text_join\">\n      <mutation items=\"2\"></mutation>\n      " + (0, s.text_value)("ADD0", "ab") + "\n      " + (0, s.text_value)("ADD1", "c") + "\n    </block>"
  })
}
