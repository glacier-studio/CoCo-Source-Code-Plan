/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：327
 */

import * as inversify from "inversify"
import * as di from "../../../../di"
import * as interfaces from "../../../../../../../../../../../unrestored/shared/1571/2636/123/195/index"
import * as constants from "../../../../../../../../../../../unrestored/shared/1571/2636/123/537"
import * as maths from "../../../../../../../../../../../unrestored/shared/1571/2636/123/293"
import * as dom from "../../../../../../../../../../../unrestored/shared/1571/2636/123/index"
import * as utils from "../../../../../../../../../../../unrestored/shared/1571/2636/17/499/index"
import { FieldTextInput } from "./field_textinput"

@inversify.injectable()
export class FieldNumber extends FieldTextInput {

  static QUOTE_WIDTH: number = 10
  static LEFT_QUOTE_X: number = -10
  static QUOTE_Y: number = 0

  /**
   * All field_number inside these blocks should support text.
   * TODO: 找一个更优的方案，extension / 业务方migration
   */
  static WHITE_LIST_BLOCKS: string[] = [
    "math_arithmetic",
    "logic_compare",
    "variables_set",
    "change_variable",
    "cloud_variables_set",
    "change_cloud_variable",
    "lists_append",
    "lists_index_of",
    "lists_is_exist",
    "cloud_lists_append",
    "cloud_lists_index_of",
    "cloud_lists_is_exist",
    "procedures_2_callnoreturn",
    "procedures_2_callreturn",
    "procedures_2_return_value",
    "wood_block_set",
    "wood_block_get",
    "auto_player_set_feature",
  ]

  /**
   * Some field_number (indicated by the value) inside these blocks should support text.
   */
  static WHITE_LIST_SPECIAL: { [key: string]: string } = {
    "lists_insert_value": "VALUE",
    "lists_replace": "VALUE",
    "cloud_lists_insert_value": "VALUE",
    "cloud_lists_replace": "VALUE",
  }

  @di.lazy_inject(di.BINDING.slider_controller)
  slider_controller

  @di.lazy_inject(di.BINDING.angle_controller)
  angle_controller

  @di.lazy_inject(di.BINDING.color_controller)
  color_controller

  controller_option
  controller
  min_: number
  max_: number
  precision_: number
  should_show_quote: boolean

  public constructor(o) {
    super({
      text: (o.opt_value && !isNaN(o.opt_value)) ? String(o.opt_value) : "0",
      opt_validator: o.opt_validator,
    })
    this.controller_option = undefined
    this.controller = undefined
    this.min_ = -Infinity
    this.max_ = Infinity
    this.precision_ = 0
    /**
     * The function render_() is called both on change and on dispose.
     * The visibility of quotes should be updated on dispose **and on undo or redo**
     * This parameter is used to indicate whether
     */
    this.should_show_quote = false
    this.field_type = "FieldNumber"
    this.set_constraints(o.opt_min, o.opt_max, o.opt_precision)
    this.allow_text = undefined // will be override
    this.controller_option = o.opt_controller || undefined
    if (o.opt_controller) {
      this.set_controller_option(o.opt_controller)
    }
  }

  /**
   * TODO:
   * 以后会在外部业务中被覆盖，用于显示特殊的输入组件
   * @param set_num 设置新的输入到ui
   */
  public show_input_controller(set_num): void {
    set_num
  }

  /**
   * TODO:
   * 在外部业务中被覆盖。
   * 隐藏特殊的输入组件，应该要在widget_dispose中被调用。
   */
  public hide_input_controller(): void {
  }

  /**
   * 放在这里更新是因为撤销到积木消失 + 重做会产生新的Field
   * 会有不触发widget_dispose但更改内容为text的情况
   * 这里更新 allow_text及input 可以保证运行结果正确
   */
  public init(): void {
    if (!this.field_group && this.source_block) {
      this.update_allow_text()
      this.field_group = dom.create_svg_element("g", {})
      if (!this.visible_) {
        this.field_group.style.display = "none"
      }
      if (!this.source_block.is_shadow()) {
        this.border_rect = dom.create_svg_element("rect", {
          rx: 4,
          ry: 4
        }, this.field_group)
        if (this.field_group) {
          this.field_group.classList.add("blocklyFieldTextInput")
        }
      }
      this.input_element = dom.create_svg_element("g", {
        class: "blocklyInputElement"
      }, this.field_group)
      this.text_element = dom.create_svg_element("text", {
        class: "blocklyText",
        "font-size": this.theme.font.SIZE,
        "dominant-baseline": "central"
      }, this.input_element)
      this.update_editable()
      this.source_block.get_svg_root().appendChild(this.field_group)
      this.bind_field_click_event()
      this.update_input()
      this.render_()
    }
  }

  /**
   * Set the maximum, minimum and precision constraints on this field.
   * Any of these properties may be undefined or NaN to be disabled.
   * Setting precision (usually a power of 10) enforces a minimum step between
   * values. That is, the user"s value will rounded to the closest multiple of
   * precision. The least significant digit place is inferred from the precision.
   * Integers values can be enforces by choosing an integer precision.
   * @param min Minimum value.
   * @param max Maximum value.
   * @param precision Precision for value.
   */
  public set_constraints(min, max, precision): void {
    precision = parseFloat(precision)
    this.precision_ = isNaN(precision) ? 0 : precision
    min = parseFloat(min)
    this.min_ = isNaN(min) ? -Infinity : min
    max = parseFloat(max)
    this.max_ = isNaN(max) ? Infinity : max
    this.set_value(this.get_validated_value(this.get_value()))
  }

  /**
   * Validation function of a number field.
   * @param text current text
   * @returns validated text according to block setting
   */
  public get_validated_value(text): string {
    // Check whether the input is a number
    if (!maths.is_valid_number(text)) {
      if (!this.allow_text) {
        return ""
      }
      return text
    }
    // Number handling
    var n = parseFloat(text)
    // Round to nearest multiple of precision.
    if (this.precision_) {
      n = Math.round(n / Number(this.precision_)) * Number(this.precision_)
    }
    // Get the value in range.
    if (!this.exceptions || this.exceptions.indexOf(n) === -1) {
      // value 为 Infinity 或者 -Infinity 的时候不进行模运算
      if (this.mod_ != undefined && n !== Infinity && n !== -Infinity) {
        var max = Number(this.max_)
        var min = Number(this.min_)
        var mod = max - min
        n = n % mod
        if (this.mod_) {
          // mod_为true，range是(min, max]
          if (n <= min) {
            n += mod
          } else if (n > max) {
            n -= mod
          }
        } else {
          // mod_为true，range是[min, max)
          if (n < min) {
            n += mod
          } else if (n >= max) {
            n -= mod
          }
        }
      }
      n = maths.clamp(n, this.min_, this.max_)
    }
    return String(n)
  }

  /**
   * Set allow_text parameter of current instance of field_number.
   * See the comments to this.allow_text to know more.
   * @param allow_text whether this field accepts text input or not
   */
  public set_allow_text(allow_text): void {
    if (typeof this.allow_text !== "undefined" || allow_text === undefined) {
      return
    }
    this.allow_text = allow_text
  }

  /**
   * 通过白名单，更新field的allow_text属性。
   */
  public update_allow_text(): void {
    if (typeof this.allow_text !== "undefined" || !this.source_block?.parent_block) {
      return
    }
    var allow_text = false
    var parent_block = this.source_block.parent_block
    var input_name = parent_block.get_input_with_block(this.source_block)?.name
    if (FieldNumber.WHITE_LIST_BLOCKS.includes(parent_block.type) ||
        (Object.keys(FieldNumber.WHITE_LIST_SPECIAL).includes(parent_block.type) &&
         FieldNumber.WHITE_LIST_SPECIAL[parent_block.type] === input_name)) {
      allow_text = true
    }
    this.set_allow_text(allow_text)
  }

  public set_mod(mode): void {
    if (!mode) {
      this.mod_ = undefined
      return
    }
    this.mod_ = mode === "true"
  }

  public set_exceptions(e): void {
    if (!e) {
      this.exceptions = undefined
      return
    }
    this.exceptions = e
  }

  public widget_dispose(): () => void {
    return () => {
      if (this.html_input) {
        const text = this.get_validated_value(this.html_input.value) || this.html_input.defaultValue
        super.widget_dispose.call(this, text)()
        if (this.controller) {
          this.controller.hide()
        }
      }
    }
  }

  public reset_text_element(): void {
    if (this.input_element && this.text_element) {
      dom.remove_children(this.input_element)
      const append_text_element = () => {
        if (utils.is.safari() || utils.is.mobile()) {
          this.text_element = dom.create_svg_element("text", {
            class: "blocklyText",
            dy: ".4em",
            "font-size": this.theme.font.SIZE
          }, this.input_element)
        } else {
          this.text_element = dom.create_svg_element("text", {
            class: "blocklyText",
            "dominant-baseline": "central",
            "font-size": this.theme.font.SIZE
          }, this.input_element)
        }
      }
      if (this.should_show_quote) {
        // Left
        dom.create_svg_element("path", {
          d: constants.ICON.LEFT_QUOTA,
          transform: "translate(" + FieldNumber.LEFT_QUOTE_X + ", " + FieldNumber.QUOTE_Y + ")",
          class: "blocklyQuote"
        }, this.input_element)
        // Text
        append_text_element()
        // Right
        this.quote_right = dom.create_svg_element("path", {
          d: constants.ICON.RIGHT_QUOTA,
          class: "blocklyQuote"
        }, this.input_element)
      } else {
        delete this.quote_right
        append_text_element()
      }
    }
  }

  public add_quote_input(): void {
    if (this.visible_ && this.text_element) {
      if (!this.quote_right) {
        this.reset_text_element()
      }
      // Replace the text
      dom.remove_children(this.text_element)
      var textNode = document.createTextNode(this.get_display_text())
      this.text_element.appendChild(textNode)
      this.update_width()
      // Locate right quote
      var RIGHT_QUOTE_X = FieldNumber.LEFT_QUOTE_X + FieldNumber.QUOTE_WIDTH + this.size_.width
      this.quote_right?.setAttribute("transform", "translate(" + RIGHT_QUOTE_X + ", " + FieldNumber.QUOTE_Y + ")")
    } else {
      this.size_.width = 0
    }
  }

  public remove_quote_input(): void {
    if (this.quote_right) {
      this.reset_text_element()
    }
  }

  public update_input(): void {
    this.should_show_quote = !!this.allow_text && !maths.is_valid_number(this.get_display_text())
    if (this.should_show_quote) {
      this.add_quote_input()
    } else {
      this.remove_quote_input()
    }
  }

  public set_text(new_text: string): void {
    if (new_text === null) {
      return
    }
    new_text = String(new_text)
    if (new_text === this.text_) {
      return
    }
    this.text_ = new_text
    this.update_input()
    this.force_rerender()
    if (this.controller) {
      this.controller.update_value(Number(new_text))
    }
  }

  public set_controller_option(controller): void {
    this.controller_option = controller
    switch (controller.type) {
      case interfaces.ControllerType.SLIDER:
        this.controller = this.slider_controller
        break
      case interfaces.ControllerType.ANGLE_SCALE:
        this.controller = this.angle_controller
        break
      case interfaces.ControllerType.COLOR_PICKER:
        this.controller = this.color_controller
        break
      default:
        break
    }
  }

  public get_controller_option() {
    return this.controller_option
  }

  public show_editor(e?, dispose_cb?) {
    if (!this.source_block) {
      throw new ReferenceError("source_block is undefined")
    }
    this.workspace_ = this.source_block.get_workspace()
    var hide_widget_and_panel = () => {
      this.focus(false)
      // dispose时重置状态
      if (this.runtime_data.editing === this) {
        this.focus(false)
      }
      if (dispose_cb) {
        dispose_cb()
      }
      this.widget_dispose()()
    }
    this.widget_div.show(this, hide_widget_and_panel)
    var div = this.widget_div.DIV
    if (div == undefined) {
      throw new Error("DIV is undefined")
    }
    // Create the input.
    this.html_input = this.widget_create()
    this.bind_input_events()
    this.html_input.focus()
    this.html_input.select()
    if (this.controller && this.controller_option) {
      this.controller.show(this, this.controller_option)
    }
    return this.html_input
  }
}
