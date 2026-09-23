/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2202
 */

import * as inversify from "inversify"
import * as dom from "../../../../../../../../../../../unrestored/shared/1571/2636/123/index"
import { FieldTextInput } from "./field_textinput"

@inversify.injectable()
export class FieldMultilineInput extends FieldTextInput {

  padding_y: number
  line_height: number
  padding_x: number
  max_length: number | undefined
  max_width: number | undefined

  public constructor(o) {
    super(o)
    this.padding_y = 3
    this.line_height = 22
    this.padding_x = 0
    this.field_type = "FieldMultilineInput"
    this.max_length = o.max_length
    this.max_width = o.max_width
  }

  public get_display_text(): string {
    if (!this.text_) {
      // Prevent the field from disappearing if empty.
      return " "
    }
    return this.text_
  }

  public render_(): void {
    if (this.visible_ && this.text_element && this.source_block) {
      dom.remove_children(this.text_element)
      this.text_element.setAttribute("text-anchor", "start")
      this.text_element.setAttribute("dominant-baseline", "central")
      var text = this.get_display_text()
      this.utils.start_text_cache()
      var content_width = 0
      var latest_tspan = dom.create_svg_element("tspan")
      // 需要保证tspan在被计算宽度时已经被append到了目标位置，以获取所有通过继承获得的外观属性
      this.text_element.appendChild(latest_tspan)
      var line_start_pos = 0
      var text_arr = Array.from(text)
      for (var i = 0; i < text_arr.length; i++) {
        latest_tspan.textContent = text_arr.slice(line_start_pos, i + 1)
          .join("")
          .replace(/\n/g, "") // 在svg上不让\n占位
          .replace(/\s/g, " ")
        var line_width = this.utils.get_cached_width(latest_tspan)
        content_width = Math.max(content_width, line_width)
        var current_char = text_arr[i]
        var next_char = text_arr[i + 1]
        var greater_than_width = this.max_width !== undefined && line_width >= this.max_width && text_arr[i + 1] !== undefined
        // 需要在下一个位置另起一行
        if (current_char === "\n" || greater_than_width) {
          latest_tspan = dom.create_svg_element("tspan")
          this.text_element.appendChild(latest_tspan)
          if (greater_than_width && next_char === "\n") { // 溢出换行紧接着 \n 换行，合并为一个换行
            i++
          }
          line_start_pos = i + 1
        }
      }
      this.utils.stop_text_cache()
      this.padding_x = 0
      if (!this.source_block.is_shadow()) {
        this.padding_x = content_width >= this.theme.renderer.TEXT_MIN_WIDTH_IN_FIELD ? this.theme.renderer.TEXT_PADDING_IN_FIELD : (this.theme.renderer.TEXT_MIN_WIDTH_IN_FIELD + 2 * this.theme.renderer.TEXT_PADDING_IN_FIELD - content_width) / 2
      }
      var padding_y_value = this.padding_y
      Array.from(this.text_element.children).forEach((e) => {
        e.setAttribute("x", "" + this.padding_x)
        e.setAttribute("y", "" + (padding_y_value + this.line_height / 2))
        padding_y_value += this.line_height
      })
      padding_y_value += this.padding_y
      this.size_.height = padding_y_value
      this.size_.width = content_width + 2 * this.padding_x
      if (!(this.border_rect?.setAttribute)) {
        return
      }
      this.border_rect?.setAttribute("width", String(this.size_.width))
      this.border_rect?.setAttribute("height", String(this.size_.height))
    } else {
      this.size_.width = 0
    }
  }

  public widget_create() {
    if (!this.source_block) {
      throw new Error("[FieldMultilineInput] Trying to create widget before init on a block.")
    }
    this.html_input = super.widget_create("textarea", "blocklyHtmlTextarea")
    this.html_input.style.lineHeight = this.line_height + "px"
    this.html_input.style.paddingTop = this.source_block.is_shadow() && this.source_block.height <= this.theme.renderer.MIN_HEIGHT_SHADOW ? (this.source_block.height - this.line_height) / 2 + "px" : this.padding_y + "px"
    if (this.source_block.is_shadow()) {
      this.html_input.style.paddingLeft = "23px"
      this.html_input.style.paddingRight = 23 * 0.8 + "px"
    } else {
      this.html_input.style.paddingLeft = this.padding_x + "px"
      this.html_input.style.paddingRight = 0.8 * this.padding_x + "px"
    }
    return this.html_input
  }

  public on_html_input_keydown(t): void {
    if (t.key !== "Enter") {
      super.on_html_input_keydown(t)
    }
  }

  public on_html_input_change(): void {
    if (this.html_input && this.source_block) {
      if (!this.is_composition_inputting && this.max_length && this.html_input.value.length > this.max_length) {
        this.html_input.value = this.html_input.value.substr(0, this.max_length)
      }
      super.on_html_input_change()
      this.html_input.style.paddingTop = this.source_block.is_shadow() && this.source_block.height <= this.theme.renderer.MIN_HEIGHT_SHADOW ? (this.source_block.height - this.line_height) / 2 + "px" : this.padding_y + "px"
      if (!this.source_block.is_shadow()) {
        this.html_input.style.paddingLeft = this.padding_x + "px"
        this.html_input.style.paddingRight = this.padding_x + "px"
      }
    }
  }
}
