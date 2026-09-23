/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：503
 */

import * as inversify from "inversify"
import * as gl_matrix from "@kitten-team/gl-matrix"
import * as di from "../../../../di"
import * as interfaces from "../../../../../../../../../../../unrestored/shared/1571/2636/123/195/index"
import * as maths from "../../../../../../../../../../../unrestored/shared/1571/2636/123/293"
import * as dom from "../../../../../../../../../../../unrestored/shared/1571/2636/123/index"
import * as utils from "../../../../../../../../../../../unrestored/shared/1571/2636/123/index"
import * as is from "../../../../../../../../../../../unrestored/shared/1571/2636/17/499/index"

/**
 * Abstract class for an editable field.
 * @param text The initial content of the field.
 * @param opt_validator An optional function that is called
 *     to validate any constraints on what the user entered.  Takes the new
 *     text as an argument and returns either the accepted text, a replacement
 *     text, or undefined to abort the change.
 */
@inversify.injectable()
export class Field {

  @di.lazy_inject(di.BINDING.events)
  events
  @di.lazy_inject(di.BINDING.theme)
  theme
  @di.lazy_inject(di.BINDING.utils)
  utils
  @di.lazy_inject(di.BINDING.workspace_db)
  workspace_db
  @di.lazy_inject(di.BINDING.runtime_data)
  runtime_data
  @di.lazy_inject(di.BINDING.tooltip)
  tooltip
  @di.lazy_inject(di.BINDING.ChangeEvent)
  change_event_factory
  @di.lazy_inject(di.BINDING.UIEvent)
  ui_event_factory

  field_type: string
  editable: boolean
  visible_: boolean
  size_: maths.Size
  text_: string
  name: string | undefined
  margin_left: number
  render_sep: number
  validator_
  max_display_length: number
  value_before_editing
  source_block
  field_group
  border_rect
  input_element
  text_element
  mouse_down_wrapper
  html_input

  public constructor(text?: string, opt_validator?) {
    if (text === undefined) {
      text = ""
    }
    this.field_type = "Field"
    /**
     * 当前Field的值是否可被用户操作更改，发挥了 "serializable" 的作用。
     *
     * 如果为true，则说明用户操作可能更改该field的值，因此该field的值应该在序列化（转换到json/xml中）时被存储。
     *  （除此之外，还需要该field的name不为空，作为存储结构中的标识符）
     *
     * 如果为false，则说明该field的value值会被积木配置锁死，不会发生更改。
     *
     * 目前实现逻辑中，该属性不能被动态更改。如果为false则用户永远不能编辑该field， 如果为true，则当前field的可编辑性
     *  由所属积木的可编辑性决定（见is_currently_editable方法）。
     */
    this.editable = true
    this.visible_ = true
    this.size_ = new maths.Size(0, 0)
    /**
     * Visible text to display.
     * Used by Block when converting block to string.
     */
    this.text_ = ""
    this.name = undefined
    this.margin_left = this.theme.renderer.SEP_SPACE_X
    this.render_sep = this.margin_left
    this.validator_ = undefined
    this.set_value(text)
    this.validator_ = opt_validator
    this.max_display_length = ((this.workspace_db.current) === null || this.workspace_db.current === undefined ? undefined : this.workspace_db.current.get_options().field_max_length) || 50
    this.value_before_editing = undefined
  }

  public set_validator(handler): void {
    this.validator_ = handler
  }

  public get_validator() {
    return this.validator_
  }

  public set_value(new_value, render?: boolean): void {
    render
    var old_value = this.get_value()
    if (old_value == new_value) {
      return
    }
    var event
    if (this.source_block && this.events.is_enabled() && this.runtime_data.editing !== this) {
      event = this.change_event_factory("field", {
        block: this.source_block,
        old_value: old_value,
        new_value: new_value,
        name: this.name,
      })
    }
    this.set_text(new_value)
    if (event) {
      this.events.fire(event)
    }
  }

  public set_text(new_text: string): void {
    if (new_text === this.text_) {
      return
    }
    this.text_ = new_text
    this.force_rerender()
  }

  public force_rerender(): void {
    // Set width to 0 to force a rerender of this field.
    this.size_.width = 0
    if (this.source_block && this.source_block.rendered) {
      if (this.source_block.is_collapsed()) {
        this.source_block.update_collapsed(true)
      } else {
        this.source_block.render()
      }
      // this.source_block.bump_neighbours();
    }
  }

  public get_text(): string {
    return this.text_
  }

  public get_value(): string {
    return this.text_
  }

  public init(need_text?: boolean, prevent_render?: boolean): void {
    if (need_text === undefined) {
      need_text = true
    }
    if (this.field_group || !this.source_block) {
      return
    }
    this.field_group = dom.create_svg_element("g", {})
    if (!this.visible_) {
      this.field_group.style.display = "none"
    }
    if (!this.source_block.is_shadow()) {
      this.border_rect = dom.create_svg_element("rect", {
        rx: 4,
        ry: 4,
      }, this.field_group)
    }
    if (need_text) {
      this.input_element = dom.create_svg_element("g", {
        class: "blocklyInputElement",
      }, this.field_group)
      if (is.is.safari() || is.is.mobile()) {
        this.text_element = dom.create_svg_element("text", {
          class: "blocklyText",
          dy: ".4em",
          "font-size": this.theme.font.SIZE,
        }, this.input_element)
      } else {
        this.text_element = dom.create_svg_element("text", {
          class: "blocklyText",
          "dominant-baseline": "central",
          "font-size": this.theme.font.SIZE,
        }, this.input_element)
      }
    }
    this.update_editable()
    if (this.source_block != undefined) {
      var svg_root = this.source_block.get_svg_root()
      if (svg_root == undefined) {
        throw new ReferenceError("Field should have svg root when init.")
      }
      svg_root.appendChild(this.field_group)
    }
    this.bind_field_click_event()
    if (!prevent_render) {
      this.render_()
    }
  }

  public bind_field_click_event(): void {
    if (this.field_group && this.source_block) {
      var click_node = this.source_block.is_shadow() ? this.field_group.parentElement : this.field_group
      if (click_node) {
        this.mouse_down_wrapper = this.events.bind_event_with_checks(click_node, "mouseup", this, this.on_mouse_down)
      } else {
        console.warn("Field has no parent element.")
      }
    }
  }

  /**
   * Returns the height and width of the field,
   * accounting for the workspace scaling.
   * @return Height and width.
   */
  public get_scaled_bbox(): maths.Size {
    if (this.source_block == undefined) {
      throw new ReferenceError("Field has not been insert to workspace.")
    }
    var workspace = this.source_block.get_workspace()
    if (workspace == undefined) {
      throw new ReferenceError("Field\"s source block has not been insert to workspace.")
    }
    if (!this.field_group) {
      return new maths.Size(0, 0)
    }
    var bBox = dom.get_size_attr(this.border_rect || this.field_group)
    var scale = workspace.get_scale()
    // Create new object, as getBBox can return an uneditable SVGRect in IE.
    return new maths.Size(bBox.width * scale, bBox.height * scale)
  }

  public update_editable(): void {
    var group = this.field_group
    if (!this.editable || !group) {
      return
    }
    if (!this.source_block || !this.field_group) {
      throw new Error("no necessary elements.")
    }
    var TEXT_EDITABLE_CLASS = "blocklyEditable"
    var TEXT_NON_EDITABLE_CLASS = "blocklyNonEditable"
    if (this.source_block.is_editable()) {
      dom.add_class(group, TEXT_EDITABLE_CLASS)
      dom.remove_class(group, TEXT_NON_EDITABLE_CLASS)
      // this.field_group.style.cursor = this.CURSOR || null;
    } else {
      dom.add_class(group, TEXT_NON_EDITABLE_CLASS)
      dom.remove_class(group, TEXT_EDITABLE_CLASS)
      this.field_group.style.cursor = ""
    }
  }

  public on_mouse_down(e): void {
    if (this.source_block && this.source_block.get_workspace() && !this.source_block.is_in_flyout) {
      if (this.tooltip) {
        this.tooltip.hide()
      }
      var gesture = this.source_block.get_workspace().get_gesture(e)
      if (gesture) {
        gesture.set_start_field(this)
      }
    }
  }

  public is_currently_editable(): boolean {
    return this.editable && !!this.source_block && this.source_block.is_editable()
  }

  public get_size(): maths.Size {
    if (!this.size_.width) {
      this.render_()
    }
    return this.size_
  }

  public layout(cursor_xy: number[], row_height: number): void {
    if (this.field_group != undefined) {
      cursor_xy[0] += this.render_sep
      var new_x = cursor_xy[0]
      var new_y = cursor_xy[1] + (row_height - this.size_.height) / 2
      var original_translate = dom.get_translate(this.field_group)
      if (!(original_translate && original_translate.x === new_x && original_translate.y === new_y)) {
        // Center align
        this.field_group.setAttribute("transform", "translate(" + new_x + "," + new_y + ")")
      }
      cursor_xy[0] += this.size_.width
    }
  }

  public dispose(): void {
    if (this.mouse_down_wrapper) {
      this.events.unbind_event(this.mouse_down_wrapper)
      this.mouse_down_wrapper = undefined
    }
    // this.sourceBlock_ = undefined;
    delete this.source_block
    if (this.field_group != undefined) {
      dom.remove_node(this.field_group)
      this.field_group = undefined
    }
    if (this.input_element || this.text_element) {
      this.input_element && dom.remove_node(this.input_element)
      this.text_element && dom.remove_node(this.text_element)
      // this.textElement_ = undefined;
      delete this.text_element
      delete this.input_element
    }
    this.validator_ = undefined
  }

  /**
   * Draws the border with the correct width.
   * Saves the computed width in a property.
   */
  public render_(): void {
    if (this.visible_) {
      if (this.image_element) {
        this.size_.width = parseFloat(this.image_element.getAttribute("width") || "0") || 0
      } else {
        if (this.text_element) {
          dom.remove_children(this.text_element)
          this.text_element.appendChild(document.createTextNode(this.get_display_text()))
          this.update_width()
          this.update_height()
          this.border_rect?.setAttribute("width", "" + this.size_.width)
          this.border_rect?.setAttribute("height", "" + this.size_.height)
        } else {
          this.size_.width = 0
        }
      }
    } else {
      this.size_.width = 0
    }
  }

  /**
   * 按照纯文字field的默认规则更新宽度，即完全以text_element的宽度作为自身宽度。
   * 只在render_的最后调用。
   * 对于需要动态变化宽度的field，需要重写该方法，或重写render_，直接在render_过程中同步计算宽度。
   **/
  public update_width(): void {
    if (this.text_element) {
      this.size_.width = this.utils.get_cached_width(this.text_element)
    }
  }

  /**
   * 按照单行field的默认规则更新高度。
   * 只在render_的最后调用。
   * 对于需要动态变化高度的field，需要重写该方法，或直接在render_()同步计算高度。
   */
  public update_height(): void {
    if (this.source_block) {
      this.size_.height = this.source_block.is_shadow() ? this.theme.renderer.SHADOW_FIELD_HEIGHT : this.theme.renderer.FIELD_HEIGHT
    }
  }

  public get_absolute_xy() {
    var el = this.border_rect || this.field_group
    if (!el) {
      return gl_matrix.vec2.create()
    }
    return dom.get_page_offset(el)
  }

  public get_svg_root() {
    return this.field_group
  }

  public show_editor(e?, dispose_cb?): void {
    throw new ReferenceError("show_editor 不能在 field 中调用，需要由子类实现")
  }

  public set_visible(visible: boolean): void {
    if (this.visible_ == visible) {
      return
    }
    this.visible_ = visible
    var root = this.get_svg_root()
    var text = this.input_element || this.text_element
    if (root) {
      root.style.display = visible ? "block" : "none"
      this.render_()
    }
    if (text) {
      text.style.display = visible ? "block" : "none"
      this.render_()
    }
  }

  public get_display_text(): string {
    var NBSP = " "
    var text = this.text_
    if (!text) {
      // Prevent the field from disappearing if empty.
      return NBSP
    }
    if (text.length > this.max_display_length) {
      // Truncate displayed string and add an ellipsis ("...").
      text = text.substring(0, this.max_display_length - 2) + "…"
    }
    // Replace whitespace with non-breaking spaces so the text doesn"t collapse.
    text = text.replace(/\s/g, NBSP)
    return text
  }

  public call_validator(text: string): string | undefined {
    if (text == undefined) {
      // Class validator rejects value.  Game over.
      return undefined
    }
    if (!this.validator_) {
      return text
    }
    var user_result = this.validator_.call(this, text)
    if (user_result == undefined) {
      // User validator rejects value.  Game over.
      return undefined
    }
    return user_result
  }

  public set_html_input_value(value: string): void {
    if (this.html_input) {
      this.html_input.value = value
    }
  }

  public focus(is_focused?: boolean): void {
    if (is_focused === undefined) { is_focused = true }
    if (!this.source_block) {
      return
    }
    var ori_editing = this.runtime_data.editing
    if (is_focused) {
      this.value_before_editing = this.get_value()
      this.runtime_data.editing = this
    } else {
      this.value_before_editing = undefined
      this.runtime_data.editing = undefined
    }
    var current_editing = this.runtime_data.editing
    if (ori_editing && ori_editing !== current_editing && this.events.is_enabled()) {
      // 错误情况，上一次被编辑的field没有清除编辑状态
      if (ori_editing.value_before_editing) {
        ori_editing.value_before_editing = undefined
      }
      this.events.fire(this.ui_event_factory({
        type: interfaces.UIEventType.FIELD_FOCUS_CHANGE,
        workspace_id: this.source_block.workspace.id,
        old_value: this.name,
        new_value: undefined,
        block_id: this.source_block.id,
      }))
    }
    if (current_editing && current_editing !== ori_editing && this.events.is_enabled()) {
      this.events.fire(this.ui_event_factory({
        type: interfaces.UIEventType.FIELD_FOCUS_CHANGE,
        workspace_id: this.source_block.workspace.id,
        old_value: undefined,
        new_value: this.name,
        block_id: this.source_block.id,
      }))
    }
  }
}
