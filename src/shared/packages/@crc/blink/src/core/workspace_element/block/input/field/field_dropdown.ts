/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：736
 */

import * as inversify from "inversify"
import * as di from "../../../../di"
import * as interfaces from "../../../../../../../../../../../unrestored/shared/1571/2636/123/195/index"
import * as dom from "../../../../../../../../../../../unrestored/shared/1571/2636/123/index"
import * as is from "../../../../../../../../../../../unrestored/shared/1571/2636/123/478"
import * as base from "../../../../../../../../../../../unrestored/shared/1571/2636/1022/214"
import * as asserts from "../../../../../../../../../../../unrestored/shared/1571/2636/207/734/387"
import * as style from "../../../../../../../../../../../unrestored/shared/1571/2636/123/723"
import * as maths from "../../../../../../../../../../../unrestored/shared/1571/2636/123/293"
import { Field } from "./field"
import * as utils from "../../../../../../../../../../../unrestored/shared/1571/2636/301/484"

@inversify.injectable()
export class FieldDropdown extends Field {

  @di.lazy_inject(di.BINDING.widget_div)
  widget_div

  value_: string
  prefix_field
  suffix_field
  generate_customized_dropdown
  menu_generator
  menu_generator_advanced
  arrow_

  public constructor(o) {
    super(undefined, o.opt_validator)
    this.field_type = "FieldDropdown"
    /**
     * Language-neutral currently selected string or image object.
     */
    this.value_ = "?"
    this.prefix_field = undefined
    this.suffix_field = undefined
    this.generate_customized_dropdown = undefined
    this.menu_generator = o.menu_generator
    this.menu_generator_advanced = o.menu_generator_advanced
    var options = this.get_advanced_options() ? this.get_expanded_advanced_options() : this.get_basic_options()
    var selected_index = base.is_func(o.selected_index) ? o.selected_index() : (o.selected_index || 0)
    while (options[selected_index] &&
        (!this.get_option_value(options[selected_index]) || this.get_option_callback(options[selected_index]))) {
      selected_index++
    }
    var default_selection = options[selected_index] && this.get_option_value(options[selected_index]) || "?"
    this.trim_options()
    this.set_value(default_selection)
    this.onchange = o.opt_onchange
  }

  /**
   * Install this dropdown on a block.
   */
  public init(): void {
    if (!this.source_block) {
      return
    }
    this.arrow_ = utils.draw_arrow(this.source_block.workspace.options.dropdown.arrow_type)
    super.init()
    if (this.source_block.is_shadow()) {
      this.source_block.get_svg_root().classList.add("blocklyShadowDropdown")
    }
    this.field_group && this.field_group.classList.add("blocklyFieldDropdown")
  }

  public bind_field_click_event(): void {
    if (!this.source_block) {
      return
    }
    if (!this.source_block.is_shadow()) {
      super.bind_field_click_event()
    } else {
      var click_node = this.source_block.get_svg_root()
      this.mouse_down_wrapper = this.events.bind_event_with_checks(click_node, "mouseup", this, this.on_mouse_down)
    }
  }

  /**
   * Draws the border with the correct width.
   */
  public render_(): void {
    if (!this.visible_ || !this.source_block) {
      this.size_.width = 0
      return
    }
    if (!this.field_group || !this.arrow_) {
      // insertion_marker no need render
      return
    }
    dom.remove_children(this.field_group)
    var padding = this.source_block.workspace.options.dropdown.padding
    var border_padding = this.source_block.workspace.options.dropdown.padding + 6
    this.size_.width = this.border_rect ? padding : border_padding
    this.update_height()
    this.render_border()
    this.render_image_element()
    this.render_text_element()
    this.field_group.appendChild(this.arrow_)
    this.size_.width += padding
    var width = this.border_rect ? this.size_.width : this.size_.width - 2
    var height = this.size_.height / 2 - 7
    this.arrow_.setAttribute("transform", "translate(" + width + ", " + height + ")")
    this.size_.width += 12 + padding
    this.change_editor_style(false)
    // shadow block下的dropdown为可嵌入可下拉样式（如列表下拉框）。
    // 与普通dropdown样式有差别，且show editor时的操作也有差别。
    if (!this.source_block.is_shadow()) {
      this.render_not_shadow_style()
    } else {
      this.render_shadow_style()
    }
    this.border_rect?.setAttribute("height", String(this.size_.height))
    this.border_rect?.setAttribute("width", String(this.size_.width))
  }

  public render_border(): void {
    this.field_group && this.border_rect && this.field_group.appendChild(this.border_rect)
  }

  /**
   * Render the arrow directly when this field is appended to a non-shadow block.
   */
  public render_not_shadow_style(): void {
    if (!this.source_block || !this.arrow_) {
      return
    }
    this.arrow_.style.fill = this.source_block.get_colour().toString()
  }

  /**
   * Some inputs accept both choice from dropdown or an inserted block.
   * In this case, the dropdown is not appended to the parent block directly,
   * but appended to a shadow block and then connected to the parent instead.
   * Color of the arrow is decided by the parent block of the source block.
   */
  public render_shadow_style(): void {
    const set_arrow_color = () => {
      const parent = this.source_block && this.source_block.get_parent()
      if (parent && this.arrow_) {
        this.arrow_.style.fill = parent.get_colour().toString()
      }
    }
    /**
     * In normal block creation flow, all BlockSvg and Field class are constructed without rendering,
     *  then data is set, and then render happens from top to bottom.
     *
     * But consider such a situation: move a number block to replace a shadow block with dropdown.
     * In this case, several events are recorded:
     * - movement of number block
     * - disconnection of shadow block
     * - dispose of shadow block
     * - connection of number block
     * When undo this connect operation, even if these events are in the same group, they are run one by one.
     * The dropdown is re-created when the shadow block is re-created, and then the shadow block is re-connected to the parent.
     * Since the two steps are separated, the source block has no parent when this dropdown is re-render.
     * So the set_arrow_color should be delayed while undoing.
     */
    if (this.events.is_record_undo()) {
      set_arrow_color()
    } else {
      window.setTimeout(set_arrow_color)
    }
  }

  public render_text_element(): number {
    const text = this.get_display_text()
    // 如果text为空或只有空格，则不创建text element。
    // 这种dropdown可能是只有图标，需要避免空白文本占位。
    if (!text.trim()) {
      return 0
    }
    let text_element_width: number
    if (is.is.safari() || is.is.mobile()) {
      this.text_element = dom.create_svg_element("text", {
        "class": "blocklyText",
        "dy": ".4em",
        "font-size": this.theme.font.SIZE,
      }, this.field_group)
    } else {
      this.text_element = dom.create_svg_element("text", {
        "class": "blocklyText",
        "dominant-baseline": "central",
        "font-size": this.theme.font.SIZE,
      }, this.field_group)
    }
    const text_node = document.createTextNode(text)
    this.text_element.appendChild(text_node)
    this.text_element.setAttribute("text-anchor", "start")
    this.text_element.setAttribute("y", String(this.size_.height / 2))
    this.text_element.setAttribute("x", String(this.size_.width))
    text_element_width = this.utils.get_cached_width(this.text_element)
    text_element_width = this.update_min_width(text_element_width)
    this.size_.width += text_element_width
    return text_element_width
  }

  public update_min_width(width: number): number {
    const MIN_WIDTH = 20
    if (!this.text_element) {
      return MIN_WIDTH
    }
    // Do nothing
    if (width >= MIN_WIDTH) {
      return width
    }
    // Get the origin attr x
    const origin_x = this.text_element.getAttribute("x")
    const offset = (MIN_WIDTH - width) / 2
    // Set the text to the right position
    this.text_element.setAttribute("x", String(Number(origin_x) + offset))
    return MIN_WIDTH
  }

  public render_image_element(): void {
    asserts.assert(this.field_group)
    if (this.image_json && !this.image_json?.is_hide) {
      this.image_element = this.create_image(this.image_json)
      this.field_group.appendChild(this.image_element)
      this.image_element.setAttribute("x", "" + this.size_.width)
      this.image_element.setAttribute("y", "" + (this.size_.height - Number(this.image_element.getAttribute("height"))) / 2)
      var margin_right = typeof this.image_json.margin_right === "number" ? this.image_json.margin_right : 2
      this.size_.width += Number(this.image_element.getAttribute("width")) + margin_right
    }
  }

  /**
   * Get the language-neutral value from this dropdown menu.
   * @return Current text.
   */
  public get_value(): string {
    return this.value_
  }

  /**
   * Create a dropdown menu under the text.
   */
  public show_editor(): void {
    if (!this.source_block) {
      return
    }
    // 检查是否 extension 重写了这个方法，例如部分音乐积木
    if (this.source_block.show_editor) {
      const set_value = (value) => { this.set_value(value) }
      this.source_block.show_editor(set_value, this.value_)
      return
    }
    // 如硬件积木，外部对特定积木做了判断
    if (this.show_editor_extend(this)) {
      return
    }
    this.change_editor_style(true)
    let menu
    if (this.generate_customized_dropdown) {
      menu = this.generate_customized_dropdown()
    } else {
      menu = this.create_dropdown_element(this.get_advanced_options() || this.get_basic_options(), this.name)
      this.update_widget_div_position(menu)
    }
  }

  public create_image(icon) {
    const image_node = typeof icon.src === "string" ?
    dom.create_svg_element("image", {
      "xlink:href": icon.src,
      "width": "100%",
      "height": "100%",
    }) :
    typeof icon.src === "number" ? dom.get_num_g(icon.src) : dom.clone_node(icon.src, true)
    const image_width = icon.width || image_node.getAttribute("width") || 16
    const image_height = icon.height || Number(image_node.getAttribute("height")) || 16
    const image = dom.create_svg_element("svg", {
      "width": image_width,
      "height": image_height,
    })
    image.appendChild(image_node)
    return image
  }

  public create_menu_item_div(text, value, icon, callback, parent_group, enabled: boolean, tooltip) {
    if (enabled === undefined) {
      enabled = true
    }
    const menu_item = dom.create_div_element()
    if (icon) {
      const image = this.create_image(icon)
      const margin_right = typeof icon.margin_right === "number" ? icon.margin_right : 2
      image.style.marginRight = margin_right + "px"
      menu_item.appendChild(image)
    }
    const text_span = document.createElement("span")
    text_span.innerText = text
    menu_item.appendChild(text_span)
    menu_item.classList.add("menu-item")
    if (!enabled) {
      menu_item.classList.add("menu_item_disable")
    }
    if (callback) {
      menu_item.classList.add("menu_button")
    }
    menu_item.dataset.value = value
    if (value === this.value_) {
      menu_item.classList.add("menu_item_selected")
      if (parent_group !== null && parent_group !== undefined) {
        parent_group.classList.add("menu_item_selected")
      }
    }
    if (tooltip) {
      menu_item.tooltip = tooltip
      this.tooltip.bind_mouse_event(menu_item)
    }
    menu_item.addEventListener("click", (e) => {
      if (enabled) {
        e.stopImmediatePropagation()
        e.preventDefault()
        if (callback) {
          callback.call(this.set_value.bind(this))
        } else {
          if (value !== undefined) {
            this.set_value(value)
          }
        }
        this.widget_div.hide_if_owner(this)
        this.tooltip.hide()
        this.events.set_group(false)
      }
    })
    // 实测在移动端如果去掉这个方法直接用&:active的话，背景色的改变有略微延迟
    // 猜测的一个原因：移动端点击的判定延迟 https://thx.github.io/mobile/300ms-click-delay
    // 点击事件的触发可以通过meta修改，但active效果的触发依然有延迟
    // 目前看来绑定touchstart和touchend方法是唯一的解决方案
    if (callback || value !== undefined && enabled) {
      menu_item.addEventListener("touchstart", () => {
        menu_item.classList.add("menu_touch_effect")
      })
      menu_item.addEventListener("touchend", () => {
        menu_item.classList.remove("menu_touch_effect")
      })
    }
    return menu_item
  }

  public create_menu_item(option, parent_group) {
    if (!base.is_old_dropdown_option(option) && option.type === "basic") {
      const menu_button = this.create_menu_item_div(option.text, option.value, option.icon, option.callback, parent_group, option.enabled, option.tooltip)
      return menu_button
    }
    if (!base.is_old_dropdown_option(option) && option.type === "group") {
      const menu_group = this.create_menu_item_div(option.name, undefined, undefined, undefined, parent_group)
      menu_group.classList.add("menu_group")
      menu_group.dataset.group_key = option.value || maths.gen_uid()
      const children_div = this.create_dropdown_element(option.options, undefined, menu_group)
      children_div.classList.add("menu_group_children")
      children_div.dataset.group_key = menu_group.dataset.group_key
      menu_group.addEventListener("mouseover", (e) => {
        e.stopPropagation()
        this.update_group_children_div_position(children_div, menu_group)
        menu_group.classList.add("menu_group_expanded")
      })
      function hide_cb(e) {
        e.stopPropagation()
        if (!e.relatedTarget || (!dom.is_parent(children_div, e.relatedTarget) && !dom.is_parent(menu_group, e.relatedTarget))) {
          dom.remove_node(children_div)
          menu_group.classList.remove("menu_group_expanded")
        }
      }
      menu_group.addEventListener("mouseout", hide_cb)
      children_div.addEventListener("mouseout", hide_cb)
      return menu_group
    }
    if (!base.is_old_dropdown_option(option) && option.type === "image_plus") {
      const index_icon =
        option.index === undefined ?
        undefined :
        typeof option.index === "number" ? { src: option.index } : option.index
      const menu_image_plus = this.create_menu_item_div(option.text || "", option.value, index_icon, option.callback, parent_group, option.enabled, option.tooltip)
      menu_image_plus.classList.add("menu_item_image_plus")
      const img = this.create_image(option.image_plus)
      const image_plus_wrapper = document.createElement("div")
      image_plus_wrapper.classList.add("image_plus")
      image_plus_wrapper.appendChild(img)
      if (menu_image_plus.lastElementChild) {
        dom.insert_before(image_plus_wrapper, menu_image_plus.lastElementChild)
      }
      return menu_image_plus
    }
    if (!base.is_old_dropdown_option(option) && option.type === "line") {
      const divider = document.createElement("div")
      divider.classList.add("dropdown_divider")
      return divider
    }
    // undefined or invalid type
    const menu_item = this.create_menu_item_div(option[interfaces.OptionTypes.TEXT], option[interfaces.OptionTypes.VALUE], option[interfaces.OptionTypes.ICON], option[interfaces.OptionTypes.TRIGGER_EVENT], parent_group)
    return menu_item
  }

  public create_dropdown_element(options, data_name?: string, parent_group?) {
    const menu = document.createElement("div")
    menu.classList.add("blocklyDropdownMenu")
    menu.classList.add("menu-wrapper")
    if (this.source_block) {
      menu.classList.add(this.source_block.type)
    }
    if (data_name) {
      menu.classList.add(data_name)
    }
    for (var i = 0; i < options.length; i++) {
      menu.appendChild(this.create_menu_item(options[i], parent_group))
    }
    return menu
  }

  public update_group_children_div_position(children, parent): void {
    document.body.appendChild(children)
    const children_rect = style.get_size(children)
    const parent_rect = style.get_size(parent)
    let { left, top } = parent.getBoundingClientRect()
    const children_padding_top = parseFloat(style.get_computed_style(children, "padding-top")) || 0
    const children_padding_bottom = parseFloat(style.get_computed_style(children, "padding-bottom")) || 0
    // 确定纵向位置
    if (top + children_rect.height - children_padding_top >= window.innerHeight) { // 超出屏幕下边缘，需要靠上对齐
      const children_item_height = children.lastElementChild && style.get_size(children.lastElementChild).height || 0
      top -= children_rect.height
      top += children_padding_bottom
      top += children_item_height
    } else {
      top -= children_padding_top
    }
    // 确定横向位置
    if (left + parent_rect.width + children_rect.width >= window.innerWidth) { // 超出屏幕右边缘，需要靠左对齐
      left -= children_rect.width
    } else {
      left += parent_rect.width
    }
    children.style.left = left + "px"
    children.style.top = top + "px"
  }

  public update_widget_div_position(menu): void {
    this.widget_div.show(this, () => {
      this.focus(false)
      this.change_editor_style(false)
      Array.from(document.querySelectorAll(".menu_group_children")).forEach((ele) => dom.remove_node(ele))
    })
    const div = this.widget_div.DIV
    if (div) {
      div.appendChild(menu)
    }
    const xy = utils.position_dropdown(menu, this)
    this.widget_div.position(xy[0], xy[1])
  }

  // 外部项目重写，如果改写了这个方法
  // 例如弹出钢琴，则不会走原来 field_dropdown 的逻辑
  public show_editor_extend(field_dropdown): boolean {
    return false
  }

  /**
   * Change the field style on block by setting data-showing attribute.
   * If it is called when showing a menu, it should also be called when hiding to ensure the field style is correct.
   * (Since it is called by render_, so it should only be called manually when the value is not change.)
   * @param is_show true if showing menu.
   */
  public change_editor_style(is_show: boolean): void {
    if (!this.source_block) {
      return
    }
    if (is_show) {
      // 非 shadow 的时候更改自身的 border_rect 颜色
      if (!this.source_block.is_shadow() && this.field_group) {
        // specify the showing status
        this.field_group.setAttribute("data-showing", "true")
      }
      // shadow 的时候更改 source block 的颜色
      if (this.source_block.is_shadow()) {
        // specify the showing status
        this.source_block.svg_group.setAttribute("data-showing", "true")
      }
      return
    }
    if (this.field_group) {
      this.field_group.removeAttribute("data-showing")
    }
    if (this.source_block.is_shadow()) {
      this.source_block.svg_group.removeAttribute("data-showing")
    }
  }

  /**
   * Set the language-neutral value for this dropdown menu.
   * @param new_value New value to set.
   */
  public set_value(new_value: string): void {
    if (!this.get_advanced_options() && !this.get_basic_options()) {
      return
    } // first call by Field
    if (new_value == undefined) {
      this.change_editor_style(false)
      return // No change if undefined.
    }
    // Look up and display the human-readable text.
    const new_option = this.get_option(new_value)
    const option_text = new_option && this.get_option_text(new_option) || ""
    // value和text都没有变化时，才判定为无变化
    if (new_value == this.value_ && option_text == this.text_) {
      this.change_editor_style(false)
    }
    let event
    const current_group = this.events.get_group()
    if (this.source_block) {
      // if (this.onchange) {
      //   // onchange 方法一般会改变积木的形状，造成 field 或 shadow block 的增减。
      //   // 因此需要在改变之前记录下整块积木的xml用于撤销。
      //   const old_xml = this.xml.block_to_dom_with_xy(this.source_block);
      //   event = new this.ChangeEvent(this.source_block, "field_dropdown", old_xml, new_value, this.name);
      //   this.events.disable();
      //   this.onchange(new_value);
      //   this.events.enable();
      // } else {
      //   // 无 onchange 方法的field_dropdown，只需要记录前后数值
      //   event = new this.ChangeEvent(this.source_block, "field", this.value_, new_value, this.name);
      // }
      if (this.events.is_enabled()) {
        if (!current_group) {
          this.events.set_group(true)
        }
        event = this.change_event_factory("field", {
          block: this.source_block,
          old_value: this.value_,
          new_value: new_value,
          name: this.name,
        })
      }
      if (this.onchange) {
        this.onchange(new_value)
      }
    }
    this.value_ = new_value
    if (new_option) {
      const new_icon = this.get_option_icon(new_option)
      if (new_icon !== this.image_json || option_text !== this.text_) {
        this.image_json = new_icon
        this.text_ = option_text
        this.force_rerender()
      }
      if (this.events.is_enabled() && event) {
        this.events.fire(event);
        this.events.set_group(current_group);
      }
      return;
    }
    // For value cannot find in options, reset to "?"
    // Todo except for tell block (local variable && styles)
    this.value_ = "?"
    this.image_json = undefined
    this.set_text("?")
    if (this.events.is_enabled() && event) {
      this.events.fire(event)
      this.events.set_group(current_group)
    }
  }

  /**
   * @override enable icon to be set. Field alue and text may not macth
   *  after manually call this method.
   */
  public set_text(new_text: string, new_icon?): void {
    if (new_text === this.text_&& (!new_icon || new_icon === this.image_json)) {
      return
    }
    this.text_ = new_text
    if (new_icon) {
      this.image_json = new_icon
    }
    this.force_rerender()
  }

  /**
   * Factor out common words in statically defined options.
   * Create prefix and/or suffix labels.
   * @private
   * @deprecated 旧版options将不再支持
   */
  public trim_options(): void {
    this.prefix_field = undefined
    this.suffix_field = undefined
    if (this.is_dynamic()) {
      return
    }
    const options = this.get_options()
    let hasImages = false
    // Localize label text and image alt text.
    for (let i = 0; i < options.length; i++) {
      const label = options[i][0]
      if (typeof label === "string") {
        options[i][0] = this.utils.replace_message_references(label)
      } else {
        if (label && label.alt !== undefined) {
          label.alt = this.utils.replace_message_references(label.alt)
        }
        hasImages = true
      }
    }
    if (hasImages || options.length < 2) {
      return; // Do nothing if too few items or at least one label is an image.
    }
    const strings = []
    for (let i = 0; i < options.length; i++) {
      strings.push(options[i][0])
    }
    const prefixLength = this.utils.common_word_prefix(strings)
    const suffixLength = this.utils.common_word_suffix(strings)
    if (!prefixLength && !suffixLength) {
      return
    }
    if (prefixLength) {
      this.prefix_field = strings[0].substring(0, prefixLength - 1)
    }
    if (suffixLength) {
      this.suffix_field = strings[0].substr(1 - suffixLength)
    }
    // Remove the prefix and suffix from the options.
    let newOptions = []
    for (let i = 0; i < options.length; i++) {
      let text = options[i][0]
      const value = options[i][1]
      text = text.substring(prefixLength, text.length - suffixLength)
      newOptions[i] = [text, value, undefined, undefined, undefined]
    }
    this.menu_generator = newOptions
  }

  public get_basic_options() {
    if (base.is_func(this.menu_generator)) {
    return this.menu_generator.call(this)
    } else {
    return this.menu_generator
    }
  }

  public get_advanced_options() {
    if (!this.menu_generator_advanced) {
      return
    }
    if (base.is_func(this.menu_generator_advanced)) {
      return this.menu_generator_advanced.call(this);
    }
    return this.menu_generator_advanced;
  }

  /**
   * Return a list of the options for this dropdown.
   * If advanced options found, FieldDropdownItems will be filtered and
   *  FieldDropdownGroups will be expanded.
   * @return Array of option tuples.
   * @deprecated 旧版options将不再支持
   */
  public get_options() {
    const advanced_options = this.get_advanced_options()
    if (!advanced_options) {
      return this.get_basic_options()
    }
    const expanded_options = []
    function extract_options(item) {
      if (base.is_old_dropdown_option(item)) {
        expanded_options.push(item)
        return
      }
      if (item.type === "group") {
        item.options.forEach(extract_options)
      }
    }
    advanced_options.forEach(extract_options)
    return expanded_options
  }

  public get_expanded_advanced_options() {
    const advanced_options = this.get_advanced_options()
    if (!advanced_options) {
      return []
    }
    const expanded_options = []
    function extract_options(option) {
      if (base.is_old_dropdown_option(option) || option.type !== "group") {
        expanded_options.push(option)
      } else {
        option.options.forEach(extract_options)
      }
    }
    advanced_options.forEach(extract_options)
    return expanded_options
  }

  public get_option(value) {
    const find_option = (candidates) => {
      for (let i = 0; i < candidates.length; i++) {
        const option = candidates[i]
        if (!base.is_old_dropdown_option(option) && option.type === "group") {
          var g_res = find_option(option.options)
          if (g_res) {
            return g_res
          }
          continue
        }
        if (this.get_option_value(option) === value) {
          return option
        }
      }
      return undefined
    }
    return find_option(this.get_advanced_options() || this.get_basic_options())
  }

  public get_option_value(option) {
    if (base.is_old_dropdown_option(option)) {
      return option[interfaces.OptionTypes.VALUE]
    }
    switch (option.type) {
      case "image_plus": return option.value
      case "basic": return option.value
      default: return undefined
    }
  }

  public get_option_text(option): string | void {
    if (base.is_old_dropdown_option(option)) {
      return option[interfaces.OptionTypes.TEXT]
    }
    switch (option.type) {
      case "group": return option.name
      case "image_plus": return option.text
      case "basic": return option.text
      default: return
    }
  }

  public get_option_icon(option) {
    if (base.is_old_dropdown_option(option)) {
      return option[interfaces.OptionTypes.ICON]
    }
    switch (option.type) {
      case "image_plus":
        return option.index === undefined ? undefined : typeof option.index === "number" ? { src: option.index } : option.index
      case "basic":
        return option.icon
      default:
        return undefined
    }
  }

  public get_option_callback(option) {
    if (base.is_old_dropdown_option(option)) {
      return option[interfaces.OptionTypes.TRIGGER_EVENT]
    }
    switch (option.type) {
      case "basic": return option.callback
      case "image_plus": return option.callback
      default: return undefined
    }
  }

  /**
   * kids中点选下拉框时改变下拉按钮的功能
   * 为kids的功能提供接口
   */
  public update_btn_style(): void {}

  public register_dropdown(cb): void {
    this.generate_customized_dropdown = cb
  }

  public is_dynamic(): boolean {
    if (this.menu_generator_advanced) {
      return base.is_func(this.menu_generator_advanced)
    } else {
      return base.is_func(this.menu_generator)
    }
  }
}
