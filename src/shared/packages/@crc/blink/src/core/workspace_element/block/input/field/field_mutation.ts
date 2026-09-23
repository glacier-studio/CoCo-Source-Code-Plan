/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2203
 */

import * as inversify from "inversify"
import * as dom from "../../../../../../../../../../../unrestored/shared/1571/2636/123/index"
import { FieldImage } from "./field_image"

@inversify.injectable()
export class FieldMutation extends FieldImage {

  is_add: boolean
  index_?: number

  public constructor(is_add: boolean, index_?: number, size?: number) {
    if (size === undefined) { size = 20 }
    super({
      src: "",
      width: size,
      height: size,
    })
    this.is_add = is_add
    this.index_ = index_
    this.field_type = "FieldMutation"
  }

  public init(): void {
    if (this.field_group) {
      // Image has already been initialized once.
      return
    }
    // Build the DOM.
    this.field_group = dom.create_svg_element("g", {}, undefined)
    if (!this.visible_) {
      this.field_group.style.display = "none"
    }
    this.image_element = dom.create_svg_element("g", {
      width: this.width_,
      height: this.height_,
      "class": "fieldButton"
    }, this.field_group)
    this.rect_element = dom.create_svg_element("rect", {
      width: this.width_,
      height: this.height_,
      rx: this.width_ / 2,
      ry: this.width_ / 2,
      "stroke": "rgba(0, 0, 0, .15)",
      "fill": "rgba(255, 255, 255, .15)",
    }, this.image_element)
    dom.create_svg_element("line", {
      "stroke": "#fff",
      "stroke-width": 2,
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-miterlimit": 10,
      "x1": this.width_ / 3,
      "y1": this.height_ / 2,
      "x2": this.width_ * 2 / 3,
      "y2": this.height_ / 2,
    }, this.image_element)
    if (this.is_add) {
      dom.create_svg_element("line", {
        "stroke": "#fff",
        "stroke-width": 2,
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-miterlimit": 10,
        "x1": this.width_ / 2,
        "y1": this.height_ / 3,
        "x2": this.width_ / 2,
        "y2": this.height_ * 2 / 3,
      }, this.image_element)
    }
    this.events.bind_event_with_checks(this.field_group, "mousedown", this, () => {
      this.rect_element && (this.rect_element.style.fill = "rgba(0, 0, 0, .15)")
    })
    var svg_root = this.source_block?.get_svg_root()
    if (svg_root == undefined) {
      throw new ReferenceError("Field should have svg root when init.")
    }
    svg_root.appendChild(this.field_group)
    this.events.bind_event_with_checks(this.field_group, "mouseup", this, this.on_click)
    this.mouse_down_wrapper = this.events.bind_event_with_checks(this.field_group, "mousedown", this, this.on_mouse_down)
  }

  // Should not be override
  public get_img_scale(): number {
    return 1
  }

  public on_click(e): void {
    if (!this.source_block) {
      return
    }
    this.rect_element && (this.rect_element.style.fill = "rgba(255, 255, 255, .15)")
    // Check if the mouse event is handled by gesture.
    const gesture = this.source_block.get_workspace().get_gesture(e)
    if (gesture) {
      if (gesture.is_dragging_block) {
        // Manually handle the gesture"s mouseup event and prevent the
        // mutation_add button callback.
        gesture.handle_up(e)
        return
      }
    }
    if (!this.source_block.is_in_flyout && !this.utils.is_right_button(e)) {
      if (gesture) {
        gesture.update_is_mutation_click(true)
        gesture.handle_up(e)
      }
      if (!this.events.is_enabled()) {
        return
      }
      const current_group = this.events.get_group()
      this.events.set_group(current_group || true)
      const source_block = this.source_block
      if (this.is_add) {
        source_block.addMutation?.call(source_block, this.index_, this.name)
      } else {
        source_block.removeMutation?.call(source_block, this.index_, this.name)
      }
      source_block.bump_neighbours()
      this.events.set_group(current_group)
    }
  }

  /**
   * Used when updateShape_
   */
  public set_index(index: number): void {
    this.index_ = index
  }
}

@inversify.injectable()
export class MutationAddButton extends FieldMutation {
  public constructor() {
    super(true)
  }
}

@inversify.injectable()
export class MutationRemoveButton extends FieldMutation {
  public constructor(index?: number) {
    if (index === undefined) { index = undefined; }
    super(false, index)
  }
}
