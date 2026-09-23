/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：544
 */

import * as inversify from "inversify"
import * as base from "../../../../../../../../../../../unrestored/shared/1571/2636/1022/214"
import * as maths from "../../../../../../../../../../../unrestored/shared/1571/2636/123/293"
import * as dom from "../../../../../../../../../../../unrestored/shared/1571/2636/123/index"
import { Field } from "./field"

@inversify.injectable()
export class FieldImage extends Field {

  public static readonly DEFAULT_WIDTH: number = 20

  public constructor(options) {
    super(options.opt_alt)
    this.field_type = "FieldImage"
    this.editable = false
    this.src_ = options.src
    this.width_ = isNaN(Number(options.width)) ? FieldImage.DEFAULT_WIDTH : Number(options.width)
    this.height_ = isNaN(Number(options.height)) ? this.width_ : Number(options.height)
    this.size_ = new maths.Size(this.width_, this.height_ + 2 * this.theme.renderer.STATEMENT_ROW_PADDING_Y_TO_VALUE_BLOCK)
    this.text_ = ""
    this.tag = options.opt_tag || undefined
  }

  update_width() {
    this.size_.width = this.width_
  }

  update_height() {
    // TODO：按照constructor写的，不知道为什么要加边距，可能后续会修改
    this.size_.height = this.height_ + 2 * this.theme.renderer.STATEMENT_ROW_PADDING_Y_TO_VALUE_BLOCK
  }

  /**
   * Set the source URL of this image.
   * @param src New source.
   * @override
   */
  set_value(src) {
    if (src == undefined) {
      // Codemao: No change if undefined, we can't use undefined.
      return
    }
    this.src_ = src
    if (this.image_element) {
      this.image_element.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", src || "")
    }
  }

  /**
   * Install this image on a block.
   */
  init() {
    if (this.field_group) {
      return
    }
    this.field_group = dom.create_svg_element("g", {})
    if (!this.visible_) {
      this.field_group.style.display = "none"
    }
    if (typeof this.src_ === "string") {
      this.image_element = dom.create_svg_element("image", {
        height: this.height_ + "px",
        width: this.width_ + "px"
      }, this.field_group)
      this.set_value(this.src_)
    } else {
      this.image_element = this.src_
      this.field_group.appendChild(this.image_element)
    }
    if (this.source_block == undefined) {
      throw new ReferenceError("Field should have source block before init.")
    }
    if (this.source_block != undefined) {
      const svg_root = this.source_block.get_svg_root()
      if (undefined == svg_root) {
        throw new ReferenceError("Field should have svg root before init.")
      }
      svg_root.appendChild(this.field_group)
    }
  }

  /**
   * Layout the field, update the field_xy
   * @param cursor_xy
   */
  layout(cursor_xy, row_height) {
    if (!this.source_block) {
      return
    }
    cursor_xy[0] += this.render_sep
    if (base.is_nil(this.image_element)) {
      return
    }
    if (this.tag === "quote_left" || this.tag === "quote_right") {
      var translate_x = this.tag == "quote_left" ? cursor_xy[0] - 4 : cursor_xy[0] - 6
      this.image_element.classList.add("blocklyQuote")
      this.image_element.setAttribute("transform", "translate(" + translate_x + ", " + (cursor_xy[1] + 6) + ")")
      return
    }
    var scale = this.get_img_scale()
    var t_offset = Number(((1 - scale) * this.size_.width / 2).toFixed(2))
    var x_offset = this.source_block.previous_connection ? 4 * t_offset : 3 * t_offset
    var y_offset = 1.5 * t_offset
    this.image_element.setAttribute(
      "transform",
      // Center align
      "scale(" + scale + ") translate(" + (cursor_xy[0] + x_offset) + ", " + (cursor_xy[1] + row_height / 2 - this.height_ / 2 + y_offset) + ")"
    )
    cursor_xy[0] += this.size_.width
  }

  // Override in other projects
  get_img_scale() {
    return 1
  }

  on_mouse_down(e) {
    if (!this.source_block || !this.source_block.get_workspace()) {
        return;
    }
    if (this.source_block.is_in_flyout) {
        return;
    }
    if (this.tooltip) {
        this.tooltip.hide();
    }
    const gesture = this.source_block.get_workspace().get_gesture(e);
    if (gesture) {
        gesture.set_start_field(this);
    }
  }
}
