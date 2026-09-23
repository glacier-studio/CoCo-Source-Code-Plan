/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2200
 */

import * as inversify from "inversify"
import * as dom from "../../../../../../../../../../../unrestored/shared/1571/2636/123/index"
import * as utils from "../../../../../../../../../../../unrestored/shared/1571/2636/17/499/index"
import * as maths from "../../../../../../../../../../../unrestored/shared/1571/2636/123/293"
import { FieldImage } from "./field_image"

@inversify.injectable()
export class FieldIcon extends FieldImage {

  public width_: number
  public height_: number
  public opt_is_head_: boolean

  public constructor(o) {
    super(o)
    this.field_type = "FieldIcon"
    this.width_ = this.theme.renderer.HEAD_ICON_WIDTH
    this.height_ = this.theme.renderer.HEAD_ICON_WIDTH
    this.size_ = new maths.Size(0, 0)
    this.opt_is_head_ = o.opt_is_head || false
    this.set_value(this.utils.replace_message_references(o.src))
  }

  public is_head(): boolean {
    return this.opt_is_head_
  }

  /**
   * Codemao: init
   */
  public init(): void {
    if (this.field_group) {
      // Image has already been initialized once.
      return
    }
    if (this.opt_is_head_ === false &&
        this.source_block != undefined) {
      if (this.text_ === "*" || this.text_ === "") {
        return
      } else {
        // Codemao: only "restart" block step into up to date
        this.size_ = new maths.Size(this.width_, this.height_)
      }
    }
    // Build the DOM.
    this.field_group = dom.create_svg_element("g", {
      transform: "translate(-" + this.theme.renderer.HEAD_ICON_WRAP_WIDTH / 2 + ", -" + (this.theme.renderer.HEAD_ICON_WRAP_WIDTH - this.theme.renderer.MIN_HEIGHT) + ")",
    })
    if (!this.visible_) {
      this.field_group.style.display = "none"
    }
    var wrap_radius = this.theme.renderer.HEAD_ICON_WRAP_WIDTH / 2
    dom.create_svg_element("circle", {
      cx: wrap_radius,
      cy: wrap_radius,
      r: wrap_radius,
      fill: this.source_block != undefined ? this.source_block.get_colour() : "",
      stroke: this.source_block != undefined ?
          this.source_block.get_border_colour() :
          this.theme.block_color.DEFAULT.border,
      class: "blockly_head_icon_wrapper" /* HEAD_ICON_BACKGROUND */,
    }, this.field_group)
    this.image_element = dom.create_svg_element("image", {
      height: this.height_ + "px",
      width: this.width_ + "px",
      x: wrap_radius - this.width_ / 2,
      y: wrap_radius - this.height_ / 2,
      class: "blockly_head_icon" /* HEAD_ICON */
    }, this.field_group)
    this.set_value(this.src_)
    if (utils.is.Gecko()) {
      /**
       * Due to a Firefox bug which eats mouse events on image elements,
       * a transparent rectangle needs to be placed on top of the image.
       */
      dom.create_svg_element("rect", { "height": this.height_ + "px",
          "width": this.width_ + "px",
          "fill-opacity": 0 }, this.field_group)
    }
    if (this.source_block == undefined) {
      throw new ReferenceError("Field should have source block when init.")
    }
    var svg_root = this.source_block.get_svg_root()
    if (svg_root == undefined) {
      throw new ReferenceError("Field should have svg root when init.")
    }
    svg_root.appendChild(this.field_group)
  }

  public layout(cursor_xy: number[]): number[] {
    // Head icons have fixed layout.
    return cursor_xy
  }
}
