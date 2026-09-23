/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2199
 */

import * as inversify from "inversify"
import * as base from "../../../../../../../../../../../unrestored/shared/1571/2636/1022/214"
import * as dom from "../../../../../../../../../../../unrestored/shared/1571/2636/123/index"
import * as utils from "../../../../../../../../../../../unrestored/shared/1571/2636/17/499/index"
import { FieldImage } from "./field_image"

@inversify.injectable()
export class FieldButton extends FieldImage {

  image_width
  image_height
  has_circle
  click_handler_

  public constructor(options) {
    super(options)
    this.field_type = "FieldButton"
    this.image_width = this.width_
    this.image_height = this.height_
    this.has_circle = options.has_circle
    this.click_handler_ = options.opt_callback
    if (this.has_circle) {
      this.image_width = this.width_ * 0.6
      this.image_height = this.height_ * 0.6
    }
  }

  public update_height(): void {
    this.size_.height = this.height_
  }

  /**
   * Install this image button on a block.
   */
  public init(): void {
    if (this.field_group) {
      // Image has already been initialized once.
      return
    }
    // Build the DOM.
    this.field_group = dom.create_svg_element("g", {
      class: "fieldButton",
      cursor: "default"
    }, undefined)
    if (!this.visible_) {
      this.field_group.style.display = "none"
    }
    if (this.has_circle) {
      this.circle_element = dom.create_svg_element("rect", {
        width: this.width_,
        height: this.height_,
        rx: this.width_ / 2,
        ry: this.width_ / 2,
        stroke: "rgba(0, 0, 0, .15)",
        fill: "rgba(255, 255, 255, .15)"
      }, this.field_group)
      this.events.bind_event_with_checks(this.field_group, "mousedown", this, () => {
        this.circle_element && (this.circle_element.style.fill = "rgba(0, 0, 0, .15)")
      })
    }
    if (typeof this.src_ === "string") {
      this.image_element = dom.create_svg_element("image", {
        height: this.image_height + "px",
        width: this.image_width + "px"
      }, this.field_group)
      this.set_value(this.src_)
    } else {
      this.image_element = dom.create_svg_element("g", {
        height: this.height_ + "px",
        width: this.width_ + "px"
      }, this.field_group)
      this.image_element.appendChild(this.src_)
    }
    if (utils.is.firefox()) {
      /**
       * Due to a Firefox bug which eats mouse events on image elements,
       * a transparent rectangle needs to be placed on top of the image.
       */
      this.rect_element = dom.create_svg_element("rect", {
        height: this.height_ + "px",
        width: this.width_ + "px",
        "fill-opacity": 0,
      }, this.field_group)
    }
    if (this.source_block == undefined) {
      throw new ReferenceError("Field should have source block when init.")
    }
    const svg_root = this.source_block.get_svg_root()
    svg_root.appendChild(this.field_group)
    this.events.bind_event_with_checks(this.field_group, "mouseup", this, this.on_click)
    this.mouse_down_wrapper = this.events.bind_event_with_checks(this.field_group, "mousedown", this, this.on_mouse_down)
  }

  public on_click(e): void {
    if (!this.source_block) {
      return
    }
    this.circle_element && (this.circle_element.style.fill = "rgba(255, 255, 255, .15)")
    const gesture = this.source_block.get_workspace().get_gesture(e)
    if (gesture) {
      if (gesture.is_dragging_block) {
        gesture.handle_up(e)
        return
      }
    }
    if (!this.source_block.is_in_flyout && !this.utils.is_right_button(e)) {
      if (gesture) {
        gesture.update_is_mutation_click(true)
        gesture.handle_up(e)
      }
      if (this.click_handler_) {
        this.click_handler_(this)
      }
    }
  }

  // Should not be override
  public get_img_scale(): number {
    return 1
  }

  public layout(cursor_xy: number[], row_height: number): void {
    if (!this.source_block) {
      return
    }
    cursor_xy[0] += this.render_sep
    if (base.is_nil(this.image_element)) {
      return
    }
    var scale = this.get_img_scale()
    var t_offset = Number((((1 - scale) * this.size_.width) / 2).toFixed(2))
    var x_offset = this.source_block.previous_connection ? 4 * t_offset : 3 * t_offset
    var y_offset = t_offset * 1.5
    var image_x_offset = (this.width_ - this.image_width) / 2
    var image_y_offset = (this.height_ - this.image_height) / 2
    if (this.circle_element) {
      this.circle_element.setAttribute("transform", "scale(" + scale + ") translate(" + (cursor_xy[0] + x_offset) + ", " + (cursor_xy[1] + row_height / 2 - this.height_ / 2 + y_offset) + ")")
    }
    this.image_element.setAttribute("transform", "scale(" + scale + ") translate(" + (cursor_xy[0] + x_offset + image_x_offset) + ", " + (cursor_xy[1] + row_height / 2 - this.height_ / 2 + y_offset + image_y_offset) + ")")
    cursor_xy[0] += this.size_.width
  }
}
