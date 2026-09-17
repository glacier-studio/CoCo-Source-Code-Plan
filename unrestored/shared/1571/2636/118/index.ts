/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：118
 */

"use strict"

export { f as a }
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"../6"
import * as /* [auto-meaningful-name] */Module_27 from /* 27 */"../27"
import * as /* [auto-meaningful-name] */Module_39 from /* 39 */"../39"
import * as /* [auto-meaningful-name] */Module_58 from /* 58 */"../58/index"
import * as /* [auto-meaningful-name] */Module_59 from /* 59 */"../59/index"
import * as /* [auto-meaningful-name] */Src_shared_packages_Crc_blink_src_index from /* 17 */"../../../../../src/shared/packages/@crc/blink/src/index"
import * as /* [auto-meaningful-name] */Module_736 from /* 736 */"./736"
import * as /* [auto-meaningful-name] */Module_18 from /* 18 */"../18"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"../9"
import * as /* [auto-meaningful-name] */Module_46 from /* 46 */"../../../../../src/editor/block/declare/index"
var f = function (e) {
  Module_58.a(n, e)
  var t = Module_59.a(n)
  function n(e) {
    var r
    Module_27.a(this, n);
    (r = t.call(this, {
      menu_generator: e.options,
      opt_onchange: e.optOnchange,
      selected_index: e.selectedIndex,
      opt_validator: e.optValidator,
      menu_generator_advanced: e.advancedOptions
    })).MAX_BLOCK_HEIGHT = 40
    r.SVG_WIDTH = 2
    return r
  }
  Module_39.a(n, [
    {
      key: "show_editor",
      value: function () {
        var /* [auto-meaningful-name] */this$source_block
        var t = this
        var n = this.get_advanced_options() || this.get_options()
        var o = []
        if ("SCREEN_ID" === this.name) {
          for (var i in n) {
            var /* [auto-meaningful-name] */f$snapshot
            var /* [auto-meaningful-name] */f$snapshot1
            var /* [auto-meaningful-name] */f$snapshot2
            var f = n[i]
            var h = Module_6.a(Module_6.a({}, f), {}, {
              icon: {
                width: (null === (f$snapshot = f.snapshot) || undefined === f$snapshot ? undefined : f$snapshot.width) || 40,
                height: (null === (f$snapshot1 = f.snapshot) || undefined === f$snapshot1 ? undefined : f$snapshot1.height) || 40,
                src: (null === (f$snapshot2 = f.snapshot) || undefined === f$snapshot2 ? undefined : f$snapshot2.src) || ""
              }
            })
            o.push(h)
          }
        }
        var /* [auto-meaningful-name] */this$source_block1 = this.source_block
        var g = (null === (this$source_block = this.source_block) || undefined === this$source_block ? undefined : this$source_block.is_shadow()) && this.source_block.parent_block || this.source_block
        if (!this$source_block1 || !g) {
          throw Error("field is not attached to any block.")
        }
        var _ = g.get_field_value("WIDGET_ID")
        if ("DOC_KEYS" === this.name && _ === Module_9.h) {
          var v = {
            payload: undefined,
            type: "ASYNC_OPEN_TOAST_ON_NOT_SELECT_DOCUMENT"
          }
          Module_46.c().dispatchAction(v)
        } else {
          var /* [auto-meaningful-name] */this$source_block2
          var /* [auto-meaningful-name] */this$source_block1$parent_block
          var E
          var O
          var w
          var C
          var T = g.workspace.get_scale()
          var S = (Src_shared_packages_Crc_blink_src_index.Blink.theme.renderer.STATEMENT_ROW_PADDING_Y_TO_FIELD + 1) * T + 1
          if (this$source_block1.is_shadow()) {
            var /* [auto-meaningful-name] */this$source_block1$svg_group = this$source_block1.svg_group
            E = Src_shared_packages_Crc_blink_src_index.BU.dom.get_page_offset(this$source_block1$svg_group)
            var I = this$source_block1.get_height_width()
            O = I.width * T
            w = I.height * T + 2 * S
            C = E[1] + this$source_block1.height * T + S
          } else {
            E = this.get_absolute_xy()
            var j = this.get_scaled_bbox()
            O = j.width
            w = j.height + 2 * S
            C = E[1] + j.height + S
          }
          this.change_editor_style(true)
          var N = {
            payload: {
              type: Module_18.a.DYNAMIC_DROPDOWN,
              value: this.get_value(),
              setValue: function (e) {
                t.set_value(e)
              },
              showCurrentScreenIndex: false,
              position: {
                left: E[0],
                top: C
              },
              options: "[]" === JSON.stringify(o) ? n : o,
              blockInfo: {
                scale: T < 1 ? 1 : T,
                fieldWidth: O,
                blockHeight: w,
                sourceBlockId: (null === (this$source_block2 = this.source_block) || undefined === this$source_block2 ? undefined : this$source_block2.id) || "",
                fieldName: this.name || "",
                emptyImageVisible: "image_set_file_id" === (null === (this$source_block1$parent_block = this$source_block1.parent_block) || undefined === this$source_block1$parent_block ? undefined : this$source_block1$parent_block.type)
              },
              onHide: function () {
                if (t.source_block) {
                  t.focus(false)
                  t.change_editor_style(false)
                }
              }
            },
            type: "SHOW_BLOCKS_DROPDOWN"
          }
          if (!("BROADCAST" !== this.name && "VAR" !== this.name && "ARRAY" !== this.name && "OBJECT" !== this.name)) {
            N.payload.showCurrentScreenIndex = true
          }
          if ("IMAGE_FILE_ID" === this.name) {
            N.payload.type = Module_18.a.IMAGE_DROPDOWN
          } else {
            if ("ICON_FILE_ID" === this.name) {
              N.payload.type = Module_18.a.ICON_DROPDOWN
            } else {
              if ("ACTOR_ACTION_ID" === this.name || "ACTOR_STYLE_ID" === this.name) {
                N.payload.type = Module_18.a.ACTOR_STYLE_DROPDOWN
              } else {
                if ("SCREEN_ID" === this.name) {
                  N.payload.type = Module_18.a.SCREEN_DROPDOWN
                } else {
                  if ("SOUND_FILE_ID" === this.name) {
                    N.payload.type = Module_18.a.SOUND_DROPDOWN
                  }
                }
              }
            }
          }
          Module_46.c().dispatchAction(N)
        }
      }
    }, {
      key: "get_display_text",
      value: function () {
        var /* [auto-meaningful-name] */this$text_ = this.text_
        if (!this$text_) {
          return " "
        }
        for (var t = "", n = 0, r = 0; r < this$text_.length; r++) {
          if (this$text_.charCodeAt(r) > 127) {
            n += 2
          } else {
            n += 1
          }
          if (n > 14) {
            t += "…"
            break
          }
          t += this$text_[r]
        }
        return t = t.replace(/\s/g, " ")
      }
    }
  ])
  return n
}(Module_736.FieldDropdown)
f.field_type = "field_coco_dropdown"
export default f
