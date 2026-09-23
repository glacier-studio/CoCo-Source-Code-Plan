/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2204
 */

import * as inversify from "inversify"
import * as dom from "../../../../../../../../../../../unrestored/shared/1571/2636/123/index"
import * as utils from "../../../../../../../../../../../unrestored/shared/1571/2636/301/484"
import { FieldTextInput } from "./field_textinput"

@inversify.injectable()
export class FieldTextDropdown extends FieldTextInput {

  menu_items
  padding_x: number
  text_margin: number
  arrow
  menu

  public constructor(get_options) {
    var first_option = get_options()[0]
    super({ text: (first_option === null || first_option === undefined ? undefined : first_option.value) || "" })
    this.get_options = get_options
    this.field_type = "FieldTextDropdown"
    this.menu_items = []
    this.padding_x = 10
    /**
     * 如果内容宽度小于最小宽度，需要在文字的左右两边增加水平margin使其占位宽度达到最小宽度
     */
    this.text_margin = 0
  }

  public render_(): void {
    this.size_.width = 0
    if (this.visible_ && this.field_group && this.source_block) {
      this.size_.width = this.padding_x
      // width在绘制过程中更新
      this.update_height()
      this.render_text_element()
      this.render_arrow()
      if (this.border_rect) {
        this.border_rect.setAttribute("width", String(this.size_.width))
      }
      if (this.border_rect) {
        this.border_rect.setAttribute("height", String(this.size_.height))
      }
    } else {
      this.size_.width = 0
    }
  }

  public render_text_element(): void {
    if (this.text_element && this.field_group) {
      dom.remove_children(this.text_element)
      this.text_element.appendChild(document.createTextNode(this.get_display_text()))
      var text_element_width = this.utils.get_cached_width(this.text_element)
      this.text_margin = text_element_width < this.theme.renderer.TEXT_MIN_WIDTH_IN_FIELD ? (this.theme.renderer.TEXT_MIN_WIDTH_IN_FIELD - text_element_width) / 2 : 0
      this.size_.width += this.text_margin
      this.text_element.setAttribute("y", String(this.size_.height / 2))
      this.text_element.setAttribute("x", String(this.size_.width))
      this.size_.width += text_element_width + this.text_margin
    }
  }

  public render_arrow(): void {
    if (this.field_group && this.source_block) {
      if (!this.arrow) {
        this.arrow = utils.draw_arrow(this.source_block.workspace.options.dropdown.arrow_type)
        this.field_group.appendChild(this.arrow)
      }
      this.size_.width += this.source_block.workspace.options.dropdown.padding
      this.arrow.setAttribute("transform", "translate(" + this.size_.width + ", " + (this.size_.height / 2 - 7) + ")")
      this.size_.width += 12 + this.source_block.workspace.options.dropdown.padding
      if (this.source_block.is_shadow()) {
        var set_arrow_color = () => {
          var parent_block = this.source_block && this.source_block.get_parent()
          if (parent_block && this.arrow) {
            this.arrow.style.fill = parent_block.get_colour().toString()
          }
        }
        if (this.events.is_record_undo()) {
          set_arrow_color()
        } else {
          window.setTimeout(set_arrow_color)
        }
      } else {
        this.arrow.style.fill = this.source_block.get_colour().toString()
      }
    }
  }

  public widget_dispose(): () => void {
    return () => {
      this.prototype.widget_dispose.call(this)()
      if (this.menu) {
        dom.remove_node(this.menu)
      }
      this.menu_items = []
      this.menu = undefined
    }
  }

  /**
   * 所有 field 必须定义这个方法，由 gesture 把控最后的手势
   */
  public show_editor() {
    var input = super.show_editor()
    if (!this.source_block) {
      return input
    }
    var scale = this.source_block.workspace.get_scale()
    input.style.paddingLeft = (this.padding_x + this.text_margin) * scale + "px"
    input.style.textAlign = "start"
    this.menu = this.create_dropdown_element()
    return input
  }

  public create_dropdown_element() {
    this.menu_items = []
    const menu = document.createElement("div")
    menu.classList.add("menu-wrapper")
    const options = this.get_options()
    for (let i = 0; i < options.length; i++) {
      const option = options[i]
      var menu_item = document.createElement("div")
      menu_item.classList.add("menu-item")
      menu_item.dataset.value = option.value
      menu_item.innerText = option.value
      // 用于接收焦点
      menu_item.setAttribute("tabindex", "-1")
      menu_item.style.outline = "none"
      if (option.value === this.get_value()) {
        menu_item.classList.add("menu_item_selected")
      }
      menu.appendChild(menu_item)
      // 最小宽度规定
      const MIN_MENU_WIDTH = 172
      menu_item.style.minWidth = MIN_MENU_WIDTH + "px"
      menu_item.addEventListener("click", () => {
        this.set_html_input_value(option.value)
        this.widget_div.hide()
      })
      this.menu_items.push(menu_item)
    }
    menu.classList.add("blocklyDropdownMenu")
    const dropdown_container = dom.create_svg_element("div", {
      style: "position: fixed",
      class: "blocklyWidgetDiv"
    })
    dropdown_container.appendChild(menu)
    document.body.appendChild(dropdown_container)
    dropdown_container.style.display = "block"
    const xy = utils.position_dropdown(menu, this)
    dropdown_container.style.left = xy[0] + "px"
    dropdown_container.style.top = xy[1] + "px"
    return dropdown_container
  }

  public highlight_matched(): void {
    if (this.menu) {
      for (var i = 0; i < this.menu_items.length; i++) {
        const menu_item = this.menu_items[i]
        if (this.get_value() === menu_item.dataset.value) {
          menu_item.classList.add("menu-item-hover")
          var item_rect = menu_item.getBoundingClientRect()
          var menu_rect = this.menu.getBoundingClientRect()
          var is_top_overflow = item_rect.top < menu_rect.top
          var is_bottom_overflow = item_rect.bottom > menu_rect.bottom
          // 输入时同步调用scrollIntoView会失效，因此在下一帧执行
          if (is_top_overflow || is_bottom_overflow) {
            requestAnimationFrame(() => {
              if (this.menu) {
                menu_item.scrollIntoView(is_top_overflow)
                // 对于滚动的表现，刚打开时使用默认参数（auto），之后输入过程中使用smooth
                if (!this.menu.classList.contains("scroll-smooth")) {
                  this.menu.classList.add("scroll-smooth")
                }
              }
            })
          }
        } else {
          menu_item.classList.remove("menu-item-hover")
        }
      }
    }
  }

  public dispose(): void {
    super.dispose()
    if (this.menu) {
      dom.remove_node(this.menu)
    }
    this.widget_div.hide_if_owner(this)
  }

  public on_html_input_change(): void {
    super.on_html_input_change()
    this.html_input.style.paddingLeft = (this.padding_x + this.text_margin) * this.workspace_.get_scale() + "px"
    this.highlight_matched()
  }
}
