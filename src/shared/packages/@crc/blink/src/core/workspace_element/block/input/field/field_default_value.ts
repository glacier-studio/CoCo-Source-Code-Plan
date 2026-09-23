/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2205
 */

import * as inversify from "inversify"
import * as di from "../../../../di"
import * as dom from "../../../../../../../../../../../unrestored/shared/1571/2636/123/index"
import { FieldTextInput } from "./field_textinput"

@inversify.injectable()
export class FieldDefaultValue extends FieldTextInput {

  @di.lazy_inject(di.BINDING.widget_div)
  widget_div

  has_been_edited: boolean
  enable_empty: boolean

  public constructor(o) {
    super({
      text: o.enable_empty ? o.default_value : (o.default_value || "0"),
      opt_validator: o.opt_validator
    })
    this.has_been_edited = false
    this.enable_empty = false
    this.field_type = "FieldDefaultValue"
    if (o.enable_empty !== undefined) {
      this.enable_empty = o.enable_empty
    }
  }

  public get_has_been_edited(): boolean {
    return this.has_been_edited
  }

  public set_has_been_edited(new_status: boolean): void {
    if (new_status !== this.has_been_edited) {
      if (this.source_block && this.events.is_enabled()) {
        var current_group = this.events.get_group()
        this.events.set_group(current_group || true)
        this.events.fire(this.change_event_factory("field_default_value", {
          block: this.source_block,
          old_value: this.has_been_edited,
          new_value: new_status,
          name: this.name
        }))
      }
      this.has_been_edited = new_status
      this.rerender()
    }
  }

  public rerender(): void {
    if (!this.text_element) {
      return
    }
    if (this.has_been_edited) {
      dom.remove_class_if_necessary(this.text_element, "blocklyTextDefault")
    } else {
      dom.add_class(this.text_element, "blocklyTextDefault")
    }
  }

  public on_html_input_change(): void {
    this.set_has_been_edited(true)
    super.on_html_input_change()
  }

  public get_validated_value(text: string, default_value: string): string {
    if (!this.enable_empty && !text) {
      return default_value
    }
    return text
  }

  public widget_dispose(): () => void {
    return () => {
      if (!this.html_input) {
        return
      }
      var text = this.get_validated_value(this.html_input.value, this.html_input.defaultValue)
      super.widget_dispose(text)()
    }
  }

  public init(): void {
    super.init()
    if (!this.text_element) {
      return
    }
    if (!this.has_been_edited) {
      dom.add_class(this.text_element, "blocklyTextDefault")
    }
  }
}
