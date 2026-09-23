/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2161
 */

import * as inversify from /* 134 */"inversify"
import * as gl_matrix from /* 258 */"@kitten-team/gl-matrix"
// eslint-disable-next-line transform/use-meaningful-var-name
import * as di from /* 125 */"../di"
import * as interfaces from /* 195 */"../../../../../../../../unrestored/shared/1571/2636/123/195/index"
import * as dom from /* 123 */"../../../../../../../../unrestored/shared/1571/2636/123/index"
import type { Events } from "../singletons/events"

@inversify.injectable()
export class Flyout {

  @di.lazy_inject(di.BINDING.utils)
  utils

  @di.lazy_inject(di.BINDING.events)
  events: Events

  @di.lazy_inject(di.BINDING.xml)
  xml

  @di.lazy_inject(di.BINDING.theme)
  theme

  @di.lazy_inject(di.BINDING.CreateEvent)
  create_event_factory

  @di.lazy_inject(di.BINDING.UIEvent)
  ui_event_factory

  @di.lazy_inject(di.BINDING.FlyoutButton)
  flyout_button_factory

  @di.lazy_inject(di.BINDING.WorkspaceSvg)
  workspace_factory

  @di.lazy_inject(di.BINDING.Scrollbar)
  scrollbar_factory

  constructor(e) {
    /**
     * List of event listeners.
     * 会在flyout关闭再打开后被重新绑定
     */
    this.listeners_ = []
    /**
     * Whether the workspace containing this flyout is visible.
     */
    this.containerVisible_ = true
    /**
     * List of blocks that should always be disabled.
     * TODO: 确认是否有必要存在
     */
    this.permanently_disabled_ = []
    /**
     * 在show时被绑定reflow方法，在hide时被置空（flyout关闭时不需要reflow）。
     * 同时，在flyout显示期间被绑给this.workspace_的change事件，
     * 在其内容发生改变时执行reflow_wrapper内的操作。
     */
    this.reflow_wrapper = undefined
    /**
     * List of visible buttons.
     */
    this.buttons_ = []
    this.cached_blocks = new Map()
    this.cached_buttons = new Map()
    this.default_button_gap = 12
    /**
     * Flyout should be laid out horizontally vs vertically.
     */
    this.horizontalLayout_ = false
    /**
     * Whether the flyout is visible.
     */
    this.is_visible_ = false
    /**
     * Width of flyout in px
     */
    this.width_ = 0
    /**
     * Height of flyout in px
     */
    this.height_ = 0
    /**
     * Opaque data that can be passed to Blockly.unbind_event.
     */
    this.event_wrappers_ = []
    /**
     * Range of a drag angle from a flyout considered "dragging toward workspace".
     * Drags that are within the bounds of this many degrees from the orthogonal
     * line to the flyout edge are considered to be "drags toward the workspace".
     * Example:
     * Flyout                                                  Edge   Workspace
     * [block] /  <-within this angle, drags "toward workspace" |
     * [block] ---- orthogonal to flyout boundary ----          |
     * [block] \  <-within this angle, drags "toward workspace" |
     * The angle is given in degrees from the orthogonal.
     *
     * This is used to know when to create a new block and when to scroll the
     * flyout. Setting it to 360 means that all drags create a new block.
     */
    this.drag_angle_range_ = 50
    /**
     * Does the flyout automatically close when a block is created?
     */
    this.auto_close = true
    this.bind_transition_end_event = () => {
      if (this.svg_group && this.targetWorkspace_) {
        this.transition_end_wrapper = this.events.bind_event_with_checks(this.svg_group, "transitionend", this, function (e) {
          if (this.targetWorkspace_ && "transform" === e.propertyName && this.events.is_enabled()) {
            var n = this.ui_event_factory({
              type: interfaces.UIEventType.FLYOUT_SHOW,
              workspace_id: this.targetWorkspace_.id,
              old_value: !this.is_visible_,
              new_value: this.is_visible_
            })
            this.events.fire(n)
          }
        })
      }
    }
    e.get_metrics = this.get_metrics.bind(this)
    e.set_metrics = this.set_metrics.bind(this)
    e.has_categories = false
    e.in_flyout = true
    this.workspace_ = this.workspace_factory(e)
    this.workspace_.set_scale(e.zoomOptions.startScale)
    this.RTL = !!e.RTL
    this.toolboxPosition_ = e.toolboxPosition
    this.flyout_corner_radius = e.flyout.corner_radius || this.theme.renderer.FLYOUT_CORNER_RADIUS
    this.padding_top = e.flyout.padding.top
    this.padding_bottom = e.flyout.padding.bottom
    this.padding_left = e.flyout.padding.left
    this.padding_right = e.flyout.padding.right
  }

  get_workspace() {
    return this.workspace_
  }

  get_buttons_() {
    return this.buttons_
  }

  set_corner_radius(corner_radius) {
    this.flyout_corner_radius = corner_radius
  }

  filter_for_capacity() {
    if (!this.targetWorkspace_)
      return
    var remaining_capacity = this.targetWorkspace_.remaining_capacity()
    var blocks = this.workspace_.get_top_blocks(false)
    for (var i = 0; i < blocks.length; i++) {
      var block = blocks[i]
      if (this.permanently_disabled_.indexOf(block) == -1) {
        var allBlocks = block.get_descendants()
        block.set_disabled(allBlocks.length > remaining_capacity)
      }
    }
  }

  reflow() {
    if (this.reflow_wrapper) {
      this.workspace_.remove_change_listener(this.reflow_wrapper)
    }
    var blocks = this.workspace_.get_top_blocks(false)
    this.reflow_internal(blocks)
    if (this.reflow_wrapper) {
      this.workspace_.add_change_listener(this.reflow_wrapper)
    }
  }

  /**
   * Set whether the flyout is visible. A value of true does not necessarily mean
   * that the flyout is shown. It could be hidden because its container is hidden.
   * @param visible True if visible.
   */
  set_visible(visible) {
    var visibility_changed = visible != this.is_visible_
    this.is_visible_ = visible
    if (visibility_changed) {
      this.update_display()
    }
  }

  /**
   * Update the display property of the flyout based whether it thinks it should
   * be visible and whether its containing workspace is visible.
   */
  update_display() {
    var is_show = this.is_visible()
    // Update the scrollbar's visiblity too since it should mimic the
    // flyout's visibility.
    this.scrollbar_ && this.scrollbar_.set_container_visible(is_show)
    return is_show
  }

  /**
   * Handle a mouse-down on an SVG block in a non-closing flyout.
   * @param block The flyout block to copy.
   * @return Function to call when block is clicked.
   */
  block_mouse_down(block) {
    var flyout = this
    return (e) => {
      if (!this.targetWorkspace_)
        return
      var gesture = this.targetWorkspace_.get_gesture(e)
      if (gesture) {
        gesture.set_start_block(block)
        gesture.handle_flyout_start(e, flyout)
      }
    }
  }

  get_svg_root() {
    return this.svg_group
  }

  get_background() {
    return this.svg_background_
  }

  get_scrollbar() {
    return this.scrollbar_
  }

  is_scrollable() {
    return this.scrollbar_ ? this.scrollbar_.is_visible() : false
  }

  is_horizontal() {
    return this.horizontalLayout_
  }

  is_visible() {
    return this.is_visible_ && this.containerVisible_
  }

  get_width() {
    return this.width_
  }

  get_height() {
    return this.height_
  }

  set_auto_close(auto_close) {
    if (auto_close !== this.auto_close) {
      this.auto_close = auto_close
      if (this.targetWorkspace_) {
        this.utils.svg_resize(this.targetWorkspace_)
      }
      if (this.svg_group) {
        if (auto_close) {
          (0, dom.add_class_if_necessary)(this.svg_group, "blocklyFlyoutAutoClose");
          (0, dom.remove_class_if_necessary)(this.svg_group, "blocklyFlyoutPinned")
        } else {
          (0, dom.remove_class_if_necessary)(this.svg_group, "blocklyFlyoutAutoClose");
          (0, dom.add_class_if_necessary)(this.svg_group, "blocklyFlyoutPinned")
        }
      }
    }
  }

  is_auto_close() {
    return this.auto_close
  }

  create_dom(tag_name) {
    /*
    <svg | g>
      <path class="blocklyFlyoutBackground"/>
      <g class="blocklyFlyout"></g>
    </string svg | g>
    */
    // Setting style to display:none to start. The toolbox and flyout
    // hide/show code will set up proper visibility and size later.
    this.svg_group = (0, dom.create_svg_element)(tag_name, {
      class: this.auto_close ? "blocklyFlyout blocklyFlyoutHidden blocklyFlyoutAutoClose" : "blocklyFlyout blocklyFlyoutHidden blocklyFlyoutPinned",
      width: 0,
      height: 0
    })
    this.svg_background_ = (0, dom.create_svg_element)("path", {
      class: "blocklyFlyoutBackground"
    }, this.svg_group)
    this.svg_background_.style.fill = this.theme.flyout.BACKGROUND_COLOR.toString()
    this.svg_group.appendChild(this.create_workspace_with_padding_top(this.padding_top))
    return this.svg_group
  }

  /**
   * Create the flyout workspace with paddingTop
   * @param padding_top the number of width
   * @return the flyout workspace SVG group
   */
  create_workspace_with_padding_top(padding_top) {
    var ws_svg_group = this.workspace_.create_dom()
    this.set_padding_top(padding_top)
    return ws_svg_group
  }

  set_padding_top(padding_top) {
    if (!this.workspace_ || !this.workspace_.svg_group) {
      return
    }
    if (typeof padding_top === 'number') {
      this.workspace_.svg_group.style.transform = ''
      this.workspace_.svg_group.setAttribute('transform', "translate(0, " + padding_top + ")")
    }
    else {
      this.workspace_.svg_group.removeAttribute('transform')
      this.workspace_.svg_group.style.transform = "translate(0, " + padding_top + ")"
    }
  }

  dispose() {
    this.hide()
    this.unbind_scroll_events()
    if (this.transition_end_wrapper) {
      this.events.unbind_event(this.transition_end_wrapper)
      delete this.transition_end_wrapper
    }
    if (this.scrollbar_) {
      this.scrollbar_.dispose()
      // this.scrollbar_ = undefined;
      delete this.scrollbar_
    }
    if (this.workspace_) {
      this.workspace_.set_target_workspace(undefined)
      this.workspace_.dispose()
    }
    if (this.svg_group) {
      (0, dom.remove_node)(this.svg_group)
      delete this.svg_group
    }
    delete this.svg_background_
    delete this.targetWorkspace_
    this.cached_blocks.forEach((block) => block.dispose())
    this.cached_blocks.clear()
    this.cached_buttons.forEach((button) => button.dispose())
    this.cached_buttons.clear()
  }

  add_block_listeners(e, t) {
    this.listeners_.push(this.events.bind_event_with_checks(e, "mousedown", undefined, this.block_mouse_down(t)))
    // OVERRIDE: Only needed in kitten, override in kitten.
    // this.listeners_.push(this.Events.bind_event(root, 'mouseover', block, (block as IBlock).add_select));
    // this.listeners_.push(this.Events.bind_event(root, 'mouseout', block, (block as IBlock).remove_select));
  }

  /**
   * Generate block, button, label, etc. by the xml element
   * And save the content and computed gaps
   */
  xml_to_flyout_dom(xml, contents, gaps, ws) {
    if (ws === undefined) { ws = this.workspace_ }
    if (!this.targetWorkspace_) {
      throw new Error("Trying to construct flyout dom before setting target workspace. ")
    }
    var tag_name = xml.tagName.toUpperCase()
    if (!tag_name) {
      return
    }
    switch (tag_name) {
      case "BLOCK":
        var xml_string = this.xml.dom_to_text(xml)
        var cur_block = this.cached_blocks.get(xml_string)
        if (cur_block) {
          cur_block.retach(ws)
        } else {
          cur_block = this.xml.dom_to_block(xml, ws)
          /**
           * 一些动态积木例如：音频、广播，不需要根据 xml 进行缓存
           * 每次展开 flyout 需要动态读取数据，下面方法 Blink 默认返回 true
           * 外部重写后生效
           * TODO: 改成初始化时注册的方式，或对不需要缓存的积木加上特殊的attribute
          */
          if (this.check_if_cache_block(xml)) {
            this.cached_blocks.set(xml_string, cur_block)
          }
        }
        if (cur_block.disabled) {
          // Record blocks that were initially disabled.
          // Do not enable these blocks as a result of capacity filtering.
          this.permanently_disabled_.push(cur_block)
        }
        contents.push({
          type: "block",
          block: cur_block,
          inline: "true" === xml.getAttribute("layout_inline")
        })
        var default_gap = this.targetWorkspace_.options.flyout.blocks.default_gap
        /**
         * gaps[i] 是 contents[i] 下方的边距。
         * 在设计稿中，未自定义gap的情况下，头积木下方为默认gap，而上方需要额外增加一定数值防止撞头。
         * 因此需要在处理头积木时，修正其上方的间距。
         * 此时头积木下方的间距还未记录，gaps数组最后一项 (gaps[gaps.length - 1]) 即当前积木上方间距。
         */
        if (cur_block.is_starting_block()) {
          if (gaps.length > 0 && gaps[gaps.length - 1] === default_gap) {
            var starting_block_gap = this.targetWorkspace_.options.flyout.blocks.head_block_offset[1]
            gaps[gaps.length - 1] += starting_block_gap
          }
        }
        // 记录本积木下方的边距
        var str_gap = xml.getAttribute("gap")
        gaps.push(str_gap ?
          /**
           * Heart里的定义积木的方法中，当不特别规定gap时，传了gap="10"作为默认值
           * 这里给heart和各业务方背锅，强行改成16
           * TODO:
           * 如果可以去掉heart的积木配置 **（且保证各业务方都更新了heart）** ，
           * 这里就可以删掉。相信有生之年一定能删掉的
           */
          parseInt(str_gap) <= 10 ? default_gap : parseInt(str_gap) :
          default_gap)
        return
      case "SEP":
        // Change the gap between two blocks.
        // <sep gap="36"></sep>
        // The default gap is 24, can be set larger or smaller.
        // This overwrites the gap attribute on the previous block.
        // Note that a deprecated method is to add a gap to a block.
        // <block type="math_arithmetic" gap="8"></block>
        var str_gap_sep = xml.getAttribute("gap")
        // Ignore gaps before the first block.
        if (str_gap_sep && gaps.length > 0) {
          gaps[gaps.length - 1] = parseInt(str_gap_sep, 10)
        }
        return
      case "BUTTON":
      case "LABEL":
        // Labels behave the same as buttons, but are styled differently.
        var xml_str = new XMLSerializer().serializeToString(xml)
        var cur_button = this.cached_buttons.get(xml_str)
        if (cur_button) {
          cur_button.retach(ws)
        } else {
          cur_button = this.flyout_button_factory({
            workspace: ws,
            target_workspace: this.targetWorkspace_,
            xml: xml,
            is_label: tag_name === "LABEL",
            flyout_padding_left: this.padding_left,
            flyout_padding_right: this.padding_right
          })
          this.cached_buttons.set(xml_str, cur_button)
        }
        contents.push({
          type: "button",
          button: cur_button
        })
        gaps.push(this.default_button_gap)
        return
    }
  }

  show(xml_list_string) {
    if (!this.workspace_ || !this.svg_group) {
      console.error('Workspace has not been init.')
      return
    }
    this.events.disable()
    var xml_list
    this.workspace_.set_resizes_enabled(false)
    this.hide()
    this.clear_old_blocks()
    // Handle dynamic categories, represented by a name instead of a list of XML.
    // Look up the correct category generation function and call that to get a
    // valid XML list.
    if (typeof xml_list_string == "string") {
      var target_workspace = this.workspace_.get_target_workspace()
      if (!target_workspace) {
        console.error("Workspace has no target workspace.")
        return
      }
      var fn_to_apply = target_workspace.get_toolbox_category_callback(xml_list_string)
      xml_list = fn_to_apply ? fn_to_apply(this.workspace_.get_target_workspace()) : []
    } else {
      xml_list = xml_list_string
    }
    this.set_visible(true)
    // Create the blocks to be shown in this flyout.
    this.permanently_disabled_.length = 0
    var contents = []
    var gaps = []
    for (var i = 0; i < xml_list.length; i++) {
      var xml = xml_list[i]
      this.xml_to_flyout_dom(xml, contents, gaps)
    }
    this.layout_(contents, gaps)
    // IE 11 is an incompetent browser that fails to fire mouseout events.
    // When the mouse is over the background, deselect all blocks.
    var deselect_all = () => {
      var top_blocks = this.workspace_.get_top_blocks(false)
      for (var i = 0; i < top_blocks.length; i++) {
        top_blocks[i].remove_select()
      }
    }
    if (this.svg_background_) {
      this.listeners_.push(this.events.bind_event_with_checks(this.svg_background_, "mouseover", this, deselect_all))
    } else {
      console.warn("Flyout background svg not found.")
    }
    // 在reflow计算尺寸之前，重置width(竖版) 或 height(横版)
    this.reset_size()
    this.workspace_.set_resizes_enabled(true)
    this.reflow()
    this.filter_for_capacity()
    // Correctly position the flyout's scrollbar when it opens.
    this.position()
    this.reflow_wrapper = this.reflow.bind(this)
    if (this.reflow_wrapper) {
      this.workspace_.add_change_listener(this.reflow_wrapper)
    }
    if (!this.auto_close && this.targetWorkspace_) {
      this.utils.svg_resize(this.targetWorkspace_)
    }
    this.events.enable();
    (0, dom.add_class_if_necessary)(this.svg_group, "blocklyFlyoutVisible");
    (0, dom.remove_class_if_necessary)(this.svg_group, "blocklyFlyoutHidden")
  }

  check_if_cache_block(xml) {
    if (xml.getAttribute('uncache') === 'true') {
      return false
    }
    return true
  }

  hide() {
    if (!this.is_visible() || !this.targetWorkspace_ || !this.svg_group) {
      return
    }
    this.set_visible(false)
    // Delete all the event listeners.
    this.listeners_.forEach((listener) => this.events.unbind_event(listener))
    this.listeners_.length = 0
    // Correctly move this flyout ouside view out when hide.
    this.position()
    if (this.reflow_wrapper) {
      this.workspace_.remove_change_listener(this.reflow_wrapper)
      this.reflow_wrapper = undefined
    }
    if (!this.auto_close) {
      this.utils.svg_resize(this.targetWorkspace_)
    }
    (0, dom.add_class_if_necessary)(this.svg_group, "blocklyFlyoutHidden");
    (0, dom.remove_class_if_necessary)(this.svg_group, "blocklyFlyoutVisible")
    // Do NOT delete the blocks here.  Wait until Flyout.show.
    // https://neil.fraser.name/news/2014/08/09/
  }

  /**
   * Delete blocks and background buttons from a previous showing of the flyout.
   */
  clear_old_blocks() {
    // Delete any blocks from a previous showing.
    if (!this.workspace_) {
      console.error('Workspace has not been init.')
      return
    }
    var detach_blocks = function (ws) {
      var old_blocks = ws.get_top_blocks(false)
      for (var i = 0; i < old_blocks.length; i++) {
        var block = old_blocks[i]
        if (block.get_workspace() == ws) {
          block.detach()
        }
      }
    }
    detach_blocks(this.workspace_)
    for (var i = 0; i < this.buttons_.length; i++) {
      this.buttons_[i].detach()
    }
    this.buttons_.length = 0
  }

  /**
   * Update the view based on coordinates calculated in position().
   * @param width The computed width of the flyout's SVG group
   * @param height The computed height of the flyout's SVG group.
   * @param x The computed x origin of the flyout's SVG group.
   * @param y The computed y origin of the flyout's SVG group.
   */
  position_at(width, height, x, y) {
    if (this.svg_group) {
      this.svg_group.setAttribute("width", width.toString())
      this.svg_group.setAttribute("height", height.toString())
      this.utils.set_transform_style(this.svg_group, x, y)
    }
    // Update the scrollbar (if one exists).
    if (this.scrollbar_) {
      // Set the scrollbars origin to be the top left of the flyout.
      var dxy = gl_matrix.vec2.fromValues(x, y)
      this.scrollbar_.set_origin(dxy)
      this.scrollbar_.resize()
    }
  }

  set_container_visible(visible) {
    if (!this.svg_group) return
    var visibility_changed = visible != this.containerVisible_
    this.containerVisible_ = visible
    if (visibility_changed) {
      var is_show = this.update_display()
      this.svg_group.style.display = is_show ? "block" : "none"
    }
  }

  scroll_to_start() {
    if (!this.targetWorkspace_ || !this.targetWorkspace_.options.flyout_scrollable) {
      return
    }
    if (!this.scrollbar_) {
      console.error('Cannot scroll flyout before scrollbar is initialized. ', 'Make sure Flyout.init() is called before trying to scroll. ')
      return
    }
    this.scrollbar_.set(0)
  }

  create_block(original_block, by_click, mouse_xy) {
    if (!this.targetWorkspace_) {
      throw new Error("Trying to create block from flyout before target workspace set. ")
    }
    var new_block
    this.events.disable()
    this.targetWorkspace_.set_resizes_enabled(false)
    try {
      original_block.remove_hover()
      new_block = this.place_new_block(original_block, mouse_xy)
    } finally {
      this.events.enable()
      this.utils.hide_chaff()
    }
    if (this.events.is_enabled()) {
      if (!this.events.get_group()) {
        this.events.set_group(true)
      }
      if (new_block != undefined && this.events.is_enabled()) {
        this.events.fire(this.create_event_factory({
          block: new_block,
          source: by_click ? "flyout:click" : "flyout:drag"
        }))
      }
    }
    if (this.auto_close) {
      this.hide()
    }
    return new_block
  }

  init(targetWorkspace) {
    this.targetWorkspace_ = targetWorkspace
    if (!this.workspace_) {
      throw new Error("this.workspace_ can not be undefined")
    }
    this.workspace_.set_target_workspace(targetWorkspace)
    if (targetWorkspace.options.flyout_scrollable) {
      // Add scrollbar.
      this.scrollbar_ = this.scrollbar_factory(this.workspace_, this.horizontalLayout_, false, "blocklyFlyoutScrollbar", targetWorkspace.options.flyout_show_scrollbars)
      this.bind_scroll_events()
    }
    this.bind_transition_end_event()
    this.hide()
    if (!this.auto_close) {
      this.targetWorkspace_.add_change_listener(this.filter_for_capacity.bind(this))
    }
    // A flyout connected to a workspace doesn't have its own current gesture.
    this.workspace_.get_gesture = this.targetWorkspace_.get_gesture.bind(this.targetWorkspace_)
  }

  unbind_scroll_events() {
    this.event_wrappers_.forEach((evts) => this.events.unbind_event(evts))
    this.event_wrappers_ = []
  }

  bind_scroll_events() {
    if (!this.svg_group || !this.svg_background_) {
      throw new Error("Trying to bind scroll event for flyout before svg init. ")
    }
    // Mouse wheel event
    this.event_wrappers_.push(this.events.bind_event_with_checks(this.svg_group, "wheel", this, this.wheel_))
    // Dragging the flyout up and down
    this.event_wrappers_.push(this.events.bind_event_with_checks(this.svg_background_, "mousedown", this, this.on_mouse_down))
  }

  /**
   * Initialize the given button: move it to the correct location,
   * add listeners, etc.
   * @param button The button to initialize and place.
   * @param x The x position of the cursor during this layout pass.
   * @param y The y position of the cursor during this layout pass.
   */
  init_flyout_button(button, x, y, width) {
    var button_svg = button.get_svg_group() || button.create_dom(width)
    if (typeof x === "number" && typeof y === "number") {
      button.move_to(x, y)
    }
    button.show(button.default_display !== "none")
    // Clicking on a NON_FIXED flyout button or label is a lot like clicking on the
    // flyout background, can start a drag.
    // But a fixed button also need a empty mousedown event, so that the button
    // callback (binded with checks in mouseup event) can be triggered.
    this.listeners_.push(this.events.bind_event_with_checks(button_svg, "mousedown", this, button.position !== "fixed" ? this.on_mouse_down : function () {}))
    this.buttons_.push(button)
    return button_svg
  }

  /**
   * Mouse down on the flyout background.  Start a vertical scroll drag.
   * @param e Mouse down event.
   */
  on_mouse_down(e) {
    if (!this.is_visible() || !this.targetWorkspace_) {
      return
    }
    var gesture = this.targetWorkspace_.get_gesture(e)
    if (gesture) {
      gesture.handle_flyout_start(e, this)
    }
  }

  clear_cached_blocks() {
    this.cached_blocks.clear()
  }
}
