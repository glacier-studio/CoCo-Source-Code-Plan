/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：374
 */

import * as inversify from "inversify"
import * as di from "../../../../di"
import * as maths from "../../../../../../../../../../../unrestored/shared/1571/2636/123/293"
import * as dom from "../../../../../../../../../../../unrestored/shared/1571/2636/123/index"
import * as is from "../../../../../../../../../../../unrestored/shared/1571/2636/123/478"
import { Field } from "./field"

@inversify.injectable()
export class FieldTextInput extends Field {

  static readonly FONTSIZE: number = 12

  @di.lazy_inject(di.BINDING.widget_div)
  widget_div

  spellcheck_: boolean
  is_composition_inputting: boolean

  on_start_composition: () => void = () => { this.is_composition_inputting = true }
  on_end_composition: () => void = () => { this.is_composition_inputting = false }

  public constructor(o) {
    super(o.text, o.opt_validator)
    this.field_type = "FieldTextInput"
    /**
     * Allow browser to spellcheck this field.
     */
    this.spellcheck_ = true
    this.is_composition_inputting = false
    this.on_start_composition = function () { this.is_composition_inputting = true }
    this.on_end_composition = function () { this.is_composition_inputting = false }
    this.size_ = new maths.Size(0, 30)
  }

  public resize_editor(): void {
    if (!this.source_block || !this.workspace_) {
      return
    }
    const div = this.widget_div.DIV
    if (!this.field_group || !div) {
      return
    }
    let size
    let xy
    if (!this.source_block.is_shadow()) {
      size = dom.get_size_attr(this.border_rect || this.field_group)
      xy = dom.get_page_offset(this.field_group)
    } else {
      size = { width: this.source_block.width, height: this.source_block.height }
      xy = dom.get_page_offset(this.source_block.svg_group)
    }
    div.style.width = size.width + "px"
    div.style.height = size.height + "px"
    div.style.left = xy[0] + "px"
    div.style.top = xy[1] + "px"
    div.style.transformOrigin = "top left"
    const scale = this.workspace_.get_scale()
    div.style.transform = "scale(" + (scale ?? 1) + ")"
  }

  public show_editor(e?, dispose_cb?) {
    if (!this.source_block) {
      throw new ReferenceError("source_block is undefined")
    }
    this.workspace_ = this.source_block.get_workspace()
    this.widget_div.show(this, () => {
      this.focus(false)
      if (dispose_cb) {
        dispose_cb()
      }
      this.widget_dispose()()
    })
    if (this.widget_div.DIV === undefined) {
      throw new Error("DIV is undefined")
    }
    this.html_input = this.widget_create()
    this.bind_input_events()
    this.html_input.focus()
    this.html_input.select()
    return this.html_input
  }

  public update_width(): void {
    if (this.text_element && this.source_block) {
      let width = this.utils.get_cached_width(this.text_element)
      if (!this.source_block.is_shadow()) {
        const padding_x = width >= this.theme.renderer.TEXT_MIN_WIDTH_IN_FIELD ? this.theme.renderer.TEXT_PADDING_IN_FIELD : (this.theme.renderer.TEXT_MIN_WIDTH_IN_FIELD + 2 * this.theme.renderer.TEXT_PADDING_IN_FIELD - width) / 2
        this.text_element.setAttribute("x", "" + padding_x)
        width += 2 * padding_x
      }
      this.size_.width = width
    }
  }

  public update_height(): void {
    super.update_height()
    this.text_element?.setAttribute("y", String(this.size_.height / 2))
  }

  public layout(cursor_xy: number[], row_height: number): void {
    if (this.field_group && this.text_element) {
      cursor_xy[0] += this.render_sep
      this.field_group.setAttribute("transform", "translate(" + cursor_xy[0] + ", " + (cursor_xy[1] + (row_height - this.size_.height) / 2) + ")")
      cursor_xy[0] += this.size_.width
    }
  }

  public validate_(): void {
    let valid = "true"
    if (this.html_input) {
      if (this.source_block) {
        valid = this.call_validator(this.html_input.value)
      }
      if (valid === undefined) {
        dom.add_class(this.html_input, "blocklyInvalidInput")
      } else {
        dom.remove_class(this.html_input, "blocklyInvalidInput")
      }
    }
  }

  public widget_dispose(text?: string): () => void {
    return () => {
      if (this.source_block && this.workspace_ && this.html_input) {
        if (!text) {
          text = this.html_input.value
        }
        let event
        const current_group = this.events.get_group()
        this.events.set_group(current_group || true)
        if (text !== this.html_input.defaultValue && this.events.is_enabled()) {
          event = this.change_event_factory("field", {
            block: this.source_block,
            old_value: this.html_input.defaultValue,
            new_value: text,
            name: this.name,
          })
        }
        this.set_text(text as string)
        if (this.source_block?.rendered) {
          this.source_block.render()
        }
        if (this.html_input.onKeyDownWrapper_) {
          this.events.unbind_event(this.html_input.onKeyDownWrapper_)
        }
        if (this.html_input.onKeyUpWrapper_) {
          this.events.unbind_event(this.html_input.onKeyUpWrapper_)
        }
        if (this.html_input.onKeyPressWrapper_) {
          this.events.unbind_event(this.html_input.onKeyPressWrapper_)
        }
        if (this.html_input.onInputWrapper_) {
          this.events.unbind_event(this.html_input.onInputWrapper_ || [])
        }
        if (this.html_input.onWorkspaceChangeWrapper_) {
          this.workspace_?.remove_change_listener(this.html_input.onWorkspaceChangeWrapper_)
        }
        if (this.html_input.on_composition_start_wrapper_) {
          this.events.unbind_event(this.html_input.on_composition_start_wrapper_)
        }
        if (this.html_input.on_composition_end_wrapper_) {
          this.events.unbind_event(this.html_input.on_composition_end_wrapper_)
        }
        delete this.html_input
        var div_style = this.widget_div.DIV.style
        div_style.width = "auto"
        div_style.height = "auto"
        div_style.fontSize = ""
        div_style.transition = ""
        div_style.boxShadow = ""
        div_style.borderRadius = ""
        if (event) {
          this.events.fire(event)
        }
        this.events.set_group(false)
      }
    }
  }

  public on_html_input_keydown(e): void {
    if (!this.html_input) {
      return
    }
    if (e.keyCode === 13) {
      this.widget_div.hide()
    } else if (e.keyCode === 27) {
      this.html_input.value = this.html_input.defaultValue
      this.widget_div.hide()
    } else if (e.keyCode === 9) {
      this.widget_div.hide()
      this.source_block?.tab(this, !e.shiftKey)
      e.preventDefault()
    }
  }

  public on_html_input_change(): void {
    if (!this.html_input) {
      return
    }
    var value = this.html_input.value
    if (value !== this.html_input.oldValue_) {
      this.html_input.oldValue_ = value
      this.set_value(value)
      this.validate_()
    } else if (is.is.webkit()) {
      this.source_block?.render()
    }
    this.resize_editor()
  }

  public widget_create(tag_name?: string, class_name?: string): HTMLInputElement {
    if (tag_name === undefined) {
      tag_name = "input"
    }
    if (class_name === undefined) {
      class_name = "blocklyHtmlInput"
    }
    const div = this.widget_div.DIV
    if (!this.source_block || !this.workspace_ || !div) {
      throw new Error("Trying to create a field editor without a source block.")
    }
    const html_input = dom.create_dom(tag_name, class_name) as HTMLInputElement
    html_input.setAttribute("spellcheck", String(this.spellcheck_))
    html_input.style.fontSize = FieldTextInput.FONTSIZE + "pt"
    html_input.value = html_input.defaultValue = this.text_
    html_input.oldValue_ = undefined
    html_input.style.webkitAppearance = "none"
    div.appendChild(html_input)
    this.resize_editor()
    this.validate_()
    if (this.source_block.workspace.options.theme === "dark") {
      return html_input
    }
    if (this.source_block.is_shadow()) {
      div.style.borderRadius = FieldTextInput.FONTSIZE + "pt"
      html_input.style.borderRadius = FieldTextInput.FONTSIZE + "pt"
      const border_color = (this.source_block.parent_block && this.source_block.parent_block?.get_colour()) || "#fff"
      html_input.style.boxShadow = "inset " + border_color + " 0px 0px 0px 2px"
    } else {
      div.style.borderRadius = "4px"
      html_input.style.borderRadius = "4px"
      const border_color = this.source_block.get_colour() || "#fff"
      html_input.style.boxShadow = "inset " + border_color + " 0px 0px 0px 2px"
    }
    div.style.transition = "box-shadow 0.25s ease 0s"
    div.style.boxShadow = "rgba(255, 255, 255, 1) 0px 0px 0px 3px"
    return html_input
  }

  public bind_input_events(): void {
    if (!this.html_input) {
      return
    }
    this.html_input.onKeyDownWrapper_ = this.events.bind_event_with_checks(this.html_input, "keydown", this, this.on_html_input_keydown)
    this.html_input.onKeyUpWrapper_ = this.events.bind_event_with_checks(this.html_input, "keyup", this, this.on_html_input_change)
    this.html_input.onKeyPressWrapper_ = this.events.bind_event_with_checks(this.html_input, "keypress", this, this.on_html_input_change)
    this.html_input.onInputWrapper_ = this.events.bind_event(this.html_input, "input", this, this.on_html_input_change)
    this.html_input.onWorkspaceChangeWrapper_ = this.resize_editor.bind(this)
    this.workspace_?.add_change_listener(this.html_input.onWorkspaceChangeWrapper_)
    this.html_input.on_composition_start_wrapper_ = this.events.bind_event_with_checks(this.html_input, "compositionstart", this, this.on_start_composition)
    this.html_input.on_composition_end_wrapper_ = this.events.bind_event_with_checks(this.html_input, "compositionend", this, this.on_end_composition)
  }

  public set_spell_check(check: boolean): void {
    this.spellcheck_ = check
  }

  public set_value(newValue: string): void {
    if (newValue !== undefined) {
      if (this.source_block) {
        var validated = this.call_validator(newValue)
        if (validated !== undefined) {
          newValue = validated
        }
      }
      super.set_value(newValue)
    }
  }

  public init(): void {
    super.init(true)
    if (this.source_block?.is_shadow()) {
      this.source_block.get_svg_root().classList.add("blocklyShadowTextInput")
    }
    if (this.field_group) {
      this.field_group.classList.add("blocklyFieldTextInput")
    }
  }
}
