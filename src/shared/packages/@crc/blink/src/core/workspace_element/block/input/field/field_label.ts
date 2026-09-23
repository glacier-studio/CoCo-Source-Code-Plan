/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：658
 */

import * as inversify from "inversify"
import * as maths from "../../../../../../../../../../../unrestored/shared/1571/2636/123/293"
import * as dom from "../../../../../../../../../../../unrestored/shared/1571/2636/123/index"
import * as is from "../../../../../../../../../../../unrestored/shared/1571/2636/123/478"
import { Field } from "./field"

/**
 * Class for a non-editable field.
 */
@inversify.injectable()
export class FieldLabel extends Field {

  class_

  public constructor(o) {
    super(o.text)
    this.editable = false
    this.field_type = "FieldLabel"
    this.size_ = new maths.Size(0, this.theme.renderer.SHADOW_FIELD_HEIGHT)
    this.class_ = o.opt_class
    this.set_value(o.text)
  }

  public init(): void {
    if (this.text_element) {
      // Text has already been initialized once.
      return
    }
    // Build the DOM.
    if (is.is.safari() || is.is.mobile()) {
      this.text_element = dom.create_svg_element("text", {
        "class": "blocklyText",
        "font-size": this.theme.font.SIZE,
        "dy": ".4em",
      })
    } else {
      this.text_element = dom.create_svg_element("text", {
        "class": "blocklyText",
        "font-size": this.theme.font.SIZE,
        "dominant-baseline": "central",
      })
    }
    if (this.class_) {
      dom.add_class(this.text_element, this.class_)
    }
    if (!this.visible_) {
      this.text_element.style.display = "none"
    }
    if (this.source_block == undefined) {
      throw new ReferenceError("Field should have source block when init.")
    }
    // Append the element
    if (this.source_block != undefined) {
      var svg_parent = this.source_block.get_svg_root()
      if (svg_parent == undefined) {
        throw new ReferenceError("Field should have svg root when init.")
      }
      svg_parent.appendChild(this.text_element)
    }
    if (!this.source_block) {
      return
    }
    // Force a render.
    this.render_()
  }

  /**
   * Layout the field, update the field_xy
   * @param cursor_xy
   */
  public layout(cursor_xy: number[], row_height: number): void {
    cursor_xy[0] += this.render_sep
    // Center align
    if (this.text_element) {
      this.text_element.setAttribute("transform", "translate(" + cursor_xy[0] + "," + (cursor_xy[1] + row_height / 2) + ")")
      cursor_xy[0] += this.size_.width
    }
  }
}
