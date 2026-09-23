/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：735
 */

import * as inversify from "inversify"
import * as di from "../../../../di"
import * as dom from "../../../../../../../../../../../unrestored/shared/1571/2636/123/index"
import * as base from "../../../../../../../../../../../unrestored/shared/1571/2636/1022/214"
import * as style from "../../../../../../../../../../../unrestored/shared/1571/2636/123/723"
import * as maths from "../../../../../../../../../../../unrestored/shared/1571/2636/123/293"
import { Field } from "./field"

@inversify.injectable()
export class FieldColour extends Field {

  @di.lazy_inject(di.BINDING.widget_div)
  widget_div

  colour_: string
  size_: maths.Size

  readonly static COLUMNS: number = 7
  readonly static COLOURS: string[] = [
    "#ffffff", "#cccccc", "#c0c0c0", "#999999", "#666666", "#333333", "#000000",
    "#ffcccc", "#ff6666", "#ff0000", "#cc0000", "#990000", "#660000", "#330000",
    "#ffcc99", "#ff9966", "#ff9900", "#ff6600", "#cc6600", "#993300", "#663300",
    "#ffff99", "#ffff66", "#ffcc66", "#ffcc33", "#cc9933", "#996633", "#663333",
    "#ffffcc", "#ffff33", "#ffff00", "#ffcc00", "#999900", "#666600", "#333300",
    "#99ff99", "#66ff99", "#33ff33", "#33cc00", "#009900", "#006600", "#003300",
    "#99ffff", "#33ffff", "#66cccc", "#00cccc", "#339999", "#336666", "#003333",
    "#ccffff", "#66ffff", "#33ccff", "#3366ff", "#3333ff", "#000099", "#000066",
    "#ccccff", "#9999ff", "#6666cc", "#6633ff", "#6600cc", "#333399", "#330099",
    "#ffccff", "#ff99ff", "#cc66cc", "#cc33cc", "#993399", "#663366", "#330033",
  ]

  public constructor(options) {
    super(options.colour, options.opt_validator)
    this.field_type = "FieldColour"
    this.colour_ = FieldColour.OVERRIDE_COLOR || "#cc33cc"
    this.size_ = new maths.Size(40, 30)
    this.colour_ = options.colour
  }

  /**
   * Install this field on a block.
   */
  public init(): void {
    super.init(false)
    if (!this.border_rect) {
      this.border_rect = dom.create_svg_element("rect", { rx: 4, ry: 4 }, this.field_group)
    }
    this.border_rect.setAttribute("width", String(this.size_.width))
    this.border_rect.setAttribute("height", String(this.size_.height))
    this.border_rect.setAttribute("stroke", "#fff")
    this.border_rect.setAttribute("stroke-width", "1.5")
    this.border_rect.setAttribute("rx", "15")
    this.border_rect.setAttribute("ry", "15")
    this.border_rect.addEventListener("mouseover", () => {
      if (this.runtime_data.editing === this || !this.border_rect) {
        return
      }
      this.border_rect.setAttribute("stroke-width", "3")
    })
    this.border_rect.addEventListener("mouseleave", () => {
      if (this.runtime_data.editing === this || !this.border_rect) {
        return
      }
      this.border_rect.setAttribute("stroke-width", "1.5")
    })
    if (!this.background_transparent_element) {
      this.background_transparent_element = dom.create_svg_element("rect", {
        rx: 15,
        ry: 15,
        width: 40,
        height: 30,
        fill: "url(#transparentPattern)",
      })
      this.field_group?.insertBefore(this.background_transparent_element, this.border_rect)
    }
    this.set_value(this.get_value())
  }

  /**
   * Return the current colour.
   * @return Current colour in "#rrggbb" format.
   */
  public get_value(): string {
    return this.colour_
  }

  /**
   * Set the colour.
   * @param colour The new colour in "#rrggbb" format.
   */
  public set_value(colour: string): void {
    var event
    if (this.source_block && this.events.is_enabled() && this.colour_ != colour) {
      event = this.change_event_factory("field", {
        block: this.source_block,
        old_value: this.colour_,
        new_value: colour,
        name: this.name
      })
    }
    this.colour_ = colour
    this.border_rect?.setAttribute("fill", this.colour_)
    if (event) {
      this.events.fire(event)
    }
  }

  public render_(): void {
    if (base.is_nil(this.field_group)) {
      // insertion_marker no need render
      return
    }
    if (this.border_rect) {
      this.field_group.appendChild(this.border_rect)
    }
  }

  /**
   * Create a palette under the colour field.
   * @private
   */
  public show_editor(): void {
    this.widget_div.show(this, this.widget_dispose.bind(this))
    if (this.border_rect) {
      this.border_rect.setAttribute("stroke-width", "3")
      this.border_rect.setAttribute("filter", "url(#hiblur)")
    }
    const color_selector = document.createElement("div")
    color_selector.classList.add("color_selector", "clearfix")
    FieldColour.COLOURS.forEach(function (color: string) {
      const color_selector_item = document.createElement("i")
      color_selector_item.classList.add("color_selector_item")
      color_selector_item.dataset.value = color
      color_selector_item.style.background = color
      color_selector.appendChild(color_selector_item)
    })
    // Position the palette to line up with the field.
    // Record windowSize and scrollOffset before adding the palette.
    var windowSize = dom.get_viewport_size()
    var scrollOffset = style.get_viewport_page_offset(document)
    var xy = this.get_absolute_xy()
    var borderBBox = this.get_scaled_bbox()
    var div = this.widget_div.DIV
    div.appendChild(color_selector)
    // Record paletteSize after adding the palette.
    var paletteSize = style.get_size(color_selector)
    // Flip the palette vertically if off the bottom.
    if (xy[1] + paletteSize.height + borderBBox.height >= windowSize.height + scrollOffset[1]) {
      xy[1] -= paletteSize.height - 1
    } else {
      xy[1] += borderBBox.height - 1
    }
    // Don"t go offscreen right.
    if (xy[0] > windowSize.width + scrollOffset[0] - paletteSize.width) {
      xy[0] = windowSize.width + scrollOffset[0] - paletteSize.width
    }
    this.widget_div.position(xy[0], xy[1], windowSize, scrollOffset, this.source_block?.RTL)
    color_selector.addEventListener("click", (e) => {
      const target = e
      if (target.classList.contains("color_selector_item")) {
        var colour = target.dataset.value
        // if (!U.base.is_nil(color_picker)) {
        //   color_picker.hide();
        // }
        this.widget_div.hide()
        if (this.source_block) {
          // Call any validation function, and allow it to override.
          colour = this.call_validator(colour)
        }
        if (!base.is_nil(colour)) { // In case somewhere still using undefined.
          this.set_value(colour)
        }
      }
    })
  }

  /**
   * Hide the colour palette.
   */
  public widget_dispose(): void {
    this.focus(false)
    if (this.border_rect) {
      this.border_rect.setAttribute("stroke-width", "1.5")
      this.border_rect.removeAttribute("filter")
    }
    this.events.set_group(false)
  }

  /**
   * Layout the field, update the field_xy
   * @param cursor_xy
   */
  public layout(cursor_xy: number[], row_height: number): void {
    if (this.field_group == undefined) {
      // Some of fields may not have fieldGroup
      return
    }
    cursor_xy[0] += this.render_sep
    // Center align
    this.field_group.setAttribute("transform", "translate(" + cursor_xy[0] + ", " + (cursor_xy[1] + (row_height - this.size_.height) / 2) + ")")
    cursor_xy[0] += this.size_.width
  }
}
