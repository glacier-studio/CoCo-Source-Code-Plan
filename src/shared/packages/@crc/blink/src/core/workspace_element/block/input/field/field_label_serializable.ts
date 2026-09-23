/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2201
 */

import * as inversify from "inversify"
import { FieldLabel } from "./field_label"

@inversify.injectable()
export class FieldLabelSerializable extends FieldLabel {

  public constructor(o) {
    super(o)
    this.editable = true
    this.field_type = "FieldLabelSerializable"
  }

  public get_display_text(): string {
    var NBSP = " "
    var text = this.text_
    if (text.length > this.max_display_length) {
      // Truncate displayed string and add an ellipsis ("...").
      text = text.substring(0, this.max_display_length - 2) + "…"
    }
    // Replace whitespace with non-breaking spaces so the text doesn"t collapse.
    text = text.replace(/\s/g, NBSP)
    return text
  }
}
