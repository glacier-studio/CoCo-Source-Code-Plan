/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2164
 */

import * as inversify from "inversify"
import * as gl_matrix from "@kitten-team/gl-matrix"
import * as interfaces from /* 195 */"../../../../../../../../unrestored/shared/1571/2636/123/195"
// eslint-disable-next-line transform/use-meaningful-var-name
import * as di from /* 125 */"../di"
import * as base from /* 214 */"../../../../../../../../unrestored/shared/1571/2636/1022/214"
import * as event from /* 1126 */"../../../../../../../../unrestored/shared/1571/2636/17/499/1126"
import * as string from /* 852 */"../../../../../../../../unrestored/shared/1571/2636/17/499/852"
// eslint-disable-next-line transform/use-meaningful-var-name
import * as is from /* 478 */"../../../../../../../../unrestored/shared/1571/2636/123/478"
import type { Events } from "../singletons/events"

@inversify.injectable()
export class Gesture {

  @di.lazy_inject(di.BINDING.events)
  events: Events

  @di.lazy_inject(di.BINDING.runtime_data)
  runtime_data

  @di.lazy_inject(di.BINDING.touch_manager)
  touch_manager

  @di.lazy_inject(di.BINDING.utils)
  utils

  @di.lazy_inject(di.BINDING.widget_div)
  widget_div

  @di.lazy_inject(di.BINDING.xml)
  xml

  @di.lazy_inject(di.BINDING.theme)
  theme

  @di.lazy_inject(di.BINDING.CreateEvent)
  create_event_factory

  @di.lazy_inject(di.BINDING.UIEvent)
  ui_event_factory

  @di.lazy_inject(di.BINDING.WorkspaceElementDragger)
  element_dragger_factory

  @di.lazy_inject(di.BINDING.WorkspaceDragger)
  workspace_dragger_factory

  constructor(o) {
    /**
     * The position of the mouse when the gesture started.  Units are css pixels,
     * with (0, 0) at the top left of the browser window (mouseEvent clientX/Y).
     */
    this.mouse_down_xy = gl_matrix.vec2.create()
    /**
     * How far the mouse has moved during this drag, in pixel units.
     * (0, 0) is at protected mouseDownXY_.
     */
    this.current_drag_delta_xy = gl_matrix.vec2.create()
    /**
     * The field that the gesture started on, or undefined if it did not start on a
     * field.
     * TODO Add type for field
     */
    this.start_field = undefined
    /**
     * The block that the gesture started on, or undefined if it did not start on a
     * block.
     */
    this.start_block = undefined
    /**
     * The block that this gesture targets.  If the gesture started on a
     * shadow block, this is the first non-shadow parent of the block.  If the
     * gesture started in the flyout, this is the root block of the block group
     * that was clicked or dragged.
     */
    this.target_block = undefined
    /**
     * The workspace that the gesture started on.  There may be multiple
     * workspaces on a page; this is more accurate than using
     * Blockly.get_main_workspace().
     */
    this.start_workspace = undefined
    /**
     * Whether the pointer has at any point moved out of the drag radius.
     * A gesture that exceeds the drag radius is a drag even if it ends exactly at
     * its start point.
     */
    this.has_exceeded_drag_radius = false
    /**
     * Whether the workspace is currently being dragged.
     */
    this.is_dragging_workspace = false
    /**
     * Whether the block is currently being dragged.
     */
    this.is_dragging_block = false
    /**
     * field_mutation 或 field_button 是否正被点击。
     * 如果field被点击，则不触发积木的选中和点击，而是触发field自身的点击回调。
     */
    this.is_mutation_click = false
    /**
     * A handle to use to unbind a mouse move listener at the end of a drag.
     * Opaque data returned from Blockly.bind_event_with_checks.
     */
    this.on_move_wrapper = undefined
    /**
     * A handle to use to unbind a mouse up listener at the end of a drag.
     * Opaque data returned from Blockly.bind_event_with_checks.
     */
    this.on_up_wrapper = undefined
    /**
     * The object tracking a bubble drag, or undefined if none is in progress.
     */
    this.bubble_dragger = undefined
    /**
     * The object tracking a block drag, or undefined if none is in progress.
     */
    this.block_dragger = undefined
    /**
     * The object tracking a workspace or flyout workspace drag, or undefined if none
     * is in progress.
     */
    this.workspace_dragger = undefined
    /**
     * The flyout a gesture started in, if any.
     */
    this.flyout_ = undefined
    /**
     * Boolean for sanity-checking that some code is only called once.
     */
    this.called_update_is_dragging = false
    /**
     * Boolean for sanity-checking that some code is only called once.
     */
    this.has_started_ = false
    /**
     * Boolean used internally to break a cycle in disposal.
     */
    this.is_ending = false
    /**
     * True if dragging from the target block should duplicate the target block
     * and drag the duplicate instead.  This has a lot of side effects.
     */
    this.should_duplicate_on_drag = false
    this.body_width = document.body.clientWidth
    this.body_height = document.body.clientHeight
    this.PADDING = 20
    this.creator_workspace_ = o.workspace
    this.most_recent_event = o.event
  }

  /**
   * Sever all links from this object.
   */
  dispose() {
    this.touch_manager.clear_touch_identifier()
    // Clear the owner's reference to this gesture.
    this.creator_workspace_.clear_gesture()
    if (this.on_move_wrapper) {
      this.events.unbind_event(this.on_move_wrapper)
    }
    if (this.on_up_wrapper) {
      this.events.unbind_event(this.on_up_wrapper)
    }
    this.start_field = undefined
    this.start_block = undefined
    this.target_block = undefined
    this.start_workspace = undefined
    this.flyout_ = undefined
    this.block_dragger = undefined
    this.workspace_dragger = undefined
  }

  /**
   * Update internal state based on an event.
   * @param e The most recent mouse or touch event.
   */
  update_from_event(e) {
    var current_xy = gl_matrix.vec2.fromValues(e.clientX, e.clientY)
    if (this.update_drag_delta(current_xy)) {
      this.update_is_dragging()
      this.touch_manager.long_stop()
    }
    this.most_recent_event = e
  }

  /**
   * DO MATH to set currentDragDeltaXY_ based on the most recent mouse position.
   * @param current_xy The most recent mouse/pointer
   *     position, in pixel units, with (0, 0) at the window's top left corner.
   * @return True if the drag just exceeded the drag radius for the
   *     first time.
   */
  update_drag_delta(e) {
    gl_matrix.vec2.sub(this.current_drag_delta_xy, e, this.mouse_down_xy)
    if (!this.has_exceeded_drag_radius) {
      var current_drag_delta = gl_matrix.vec2.sqrLen(this.current_drag_delta_xy)
      // The flyout has a different drag radius from the rest of Editor.
      var limit_radius = this.flyout_ ? this.theme.blink_params.FLYOUT_DRAG_RADIUS : this.theme.blink_params.DRAG_RADIUS
      this.has_exceeded_drag_radius = current_drag_delta > limit_radius
      return this.has_exceeded_drag_radius
    }
    return false
  }

  /**
   * Update this gesture to record whether a block is being dragged from the
   * flyout.
   * This function should be called on a mouse/touch move event the first time the
   * drag radius is exceeded.  It should be called no more than once per gesture.
   * If a block should be dragged from the flyout this function creates the new
   * block on the main workspace and updates targetBlock_ and startWorkspace_.
   * @return True if a block is being dragged from the flyout.
   */
  update_is_dragging_from_flyout() {
    // Disabled blocks may not be dragged from the flyout.
    if (!this.target_block || this.target_block.disabled || !(0, base.is_block_svg)(this.target_block)) {
      return false
    }
    if ((this.flyout_ && !this.flyout_.is_scrollable()) ||
        (this.flyout_ && this.flyout_.is_drag_toward_workspace(this.current_drag_delta_xy))) {
      this.start_workspace = this.flyout_.targetWorkspace_
      if (this.start_workspace != undefined) {
        this.start_workspace.update_screen_calculations_if_scrolled()
      }
      // Start the event group now, so that the same event group is used for block
      // creation and block dragging.
      if (!this.events.get_group()) {
        this.events.set_group(true)
      }
      // The start block is no longer relevant, because this is a drag.
      this.start_block = undefined
      this.target_block = this.flyout_.create_block(this.target_block, false, gl_matrix.vec2.fromValues(this.mouse_down_xy[0], this.mouse_down_xy[1]))
      if (this.target_block != undefined) {
        this.target_block.select()
        if ((0, base.is_block_svg)(this.target_block)) {
          // 从flyout中拖出创建积木的过程由dom_to_block实现。
          // 而在通过dom_to_block从xml生成积木块时，被生成的积木块上的连接会被隐藏， 直到渲染结束后（通过setTimeout实现）
          // 才打开，以加速整体积木的加载。
          // 但在从flyout中拖出进行积木创建时，setTimeout被用户拖拽操作阻塞，造成的结果是 初次结束拖拽前，新积木的连接都被隐藏。
          // 本次修改中，在拖拽前，初始化积木上可用连接时(见 _init_available_connections )，会过滤掉被隐藏的连接。
          // 因此需要在拖出创建积木后，手动同步地取消新积木上连接的隐藏状态。
          this.target_block.set_connections_hidden(false)
        }
      }
      return true
    }
    return false
  }

  /**
   * Update this gesture to record whether a block is being dragged.
   * This function should be called on a mouse/touch move event the first time the
   * drag radius is exceeded.  It should be called no more than once per gesture.
   * If a block should be dragged, either from the flyout or in the workspace,
   * this function creates the necessary BlockDragger and starts the drag.
   * @return true if a block is being dragged.
   */
  update_is_dragging_block() {
    if (!this.target_block) {
      return false
    }
    if (this.flyout_) {
      this.is_dragging_block = this.update_is_dragging_from_flyout()
    }
    else if (this.target_block.is_movable() || this.should_duplicate_on_drag) {
      this.is_dragging_block = true
    }
    if (this.is_dragging_block) {
      this.start_dragging_block()
      return true
    }
    return false
  }

  /**
   * Update this gesture to record whether a workspace is being dragged.
   * This function should be called on a mouse/touch move event the first time the
   * drag radius is exceeded.  It should be called no more than once per gesture.
   * If a workspace is being dragged this function creates the necessary
   * WorkspaceDragger or FlyoutDragger and starts the drag.
   */
  update_is_dragging_workspace() {
    var ws_movable = this.flyout_ ? this.flyout_.is_scrollable() :
      this.start_workspace && this.start_workspace.is_draggable()
    if (!ws_movable) {
      return
    }
    if (this.flyout_) {
      this.workspace_dragger = this.workspace_dragger_factory(this.flyout_)
    } else if (this.start_workspace != undefined) {
      this.workspace_dragger = this.workspace_dragger_factory(this.start_workspace)
    } else {
      return
    }
    this.is_dragging_workspace = true
    this.workspace_dragger.start_drag()
  }

  /**
   * Update this gesture to record whether anything is being dragged.
   * This function should be called on a mouse/touch move event the first time the
   * drag radius is exceeded.  It should be called no more than once per gesture.
   */
  update_is_dragging() {
    if (this.called_update_is_dragging) {
      // console.warn('update_is_dragging should only be called once per gesture.');
      return
    }
    this.called_update_is_dragging = true
    // Then check if it was a block drag.
    if (this.update_is_dragging_block()) {
      return
    }
    // Then check if it's a workspace drag.
    this.update_is_dragging_workspace()
  }

  update_is_mutation_click(is_click) {
    this.is_mutation_click = is_click
  }

  /**
   * Create a block dragger and start dragging the selected block.
   */
  start_dragging_block() {
    var current_group = this.events.get_group()
    this.events.set_group(current_group || true)
    if (this.should_duplicate_on_drag) {
      this.duplicate_on_drag()
    }
    if (this.target_block == undefined || this.start_workspace == undefined) {
      // console.warn('No target block to drag.');
      return
    }
    this.block_dragger = this.element_dragger_factory({
      target: this.target_block,
      workspace: this.start_workspace,
    })
    this.block_dragger.start_block_drag(this.current_drag_delta_xy)
    this.block_dragger.drag_block(this.most_recent_event, this.current_drag_delta_xy)
  }

  do_start(e) {
    if ((0, event.is_target_input)(e)) {
      this.cancel()
      return
    }
    if (this.start_workspace == undefined) {
      // console.warn('Gesture not on valid workspace');
      return
    }
    if (!this.start_workspace.is_gestures_enabled() &&
        !this.start_block) {
      this.touch_manager.clear_touch_identifier()
      return
    }
    this.has_started_ = true
    // this.BlockAnimations.disconnectUiStop();
    this.start_workspace.update_screen_calculations_if_scrolled()
    this.start_workspace.mark_focused()
    this.most_recent_event = e
    // Hide chaff also hides the flyout, so don't do it if the click is in a flyout.
    this.utils.hide_chaff(!!this.flyout_)
    if (this.target_block && !this.is_mutation_click) {
      this.target_block.select()
    }
    if ((0, event.is_right_button)(e)) {
      this.handle_right_click(e)
      return
    }
    if ((0, string.case_insensitive_equals)(e.type, 'touchstart')) {
      this.touch_manager.long_start(e, this)
    }
    this.mouse_down_xy = gl_matrix.vec2.fromValues(e.clientX, e.clientY)
    this.bind_mouse_events(e)
  }

  /**
   * Bind gesture events.
   * @param e A mouse down or touch start event.
   */
  bind_mouse_events(e) {
    this.on_move_wrapper = this.events.bind_event_with_checks(document, "mousemove", undefined, this.handle_move.bind(this))
    this.on_up_wrapper = this.events.bind_event_with_checks(document, "mouseup", undefined, this.handle_up.bind(this))
    e.preventDefault()
    e.stopPropagation()
  }

  /**
   * Handle a mouse move or touch move event.
   * @param e A mouse move or touch move event.
   */
  handle_move(e) {
    // Because there is no 'touchend' event when the finger was pulled out of the screen,
    // it was triggered manually when it was monitored to move out of the screen.
    if (is.is.mobile()) {
      var targetX = e.clientX
      var targetY = e.clientY
      if (targetX <= this.PADDING ||
            targetX >= this.body_width - this.PADDING ||
            targetY <= this.PADDING ||
            targetY >= this.body_height - this.PADDING) {
        this.handle_up(e)
        return
      }
    }
    var stop_propagation = true
    this.update_from_event(e)
    if (this.is_dragging_workspace) {
      if (this.workspace_dragger == undefined) {
        console.error("Trying to drag workspace without dragger.")
        return
      }
      this.workspace_dragger.drag(this.current_drag_delta_xy)
    } else if (this.is_dragging_block) {
      if (this.block_dragger == undefined) {
        console.error("Trying to drag block without dragger.")
        return
      }
      // TODO 这里之前的那个if到底是什么鬼
      this.block_dragger.drag_block(this.most_recent_event, this.current_drag_delta_xy)
    }
    if (stop_propagation) {
      e.preventDefault()
      e.stopPropagation()
    }
  }

  /**
   * Handle a mouse up or touch end event.
   * @param e A mouse up or touch end event.
   */
  handle_up(e) {
    if (this.is_ending) {
      // console.warn('Trying to end a gesture recursively.');
      return
    }
    this.is_ending = true
    try {
      this.update_from_event(e)
      this.touch_manager.long_stop()
      // The ordering of these checks is important: drags have higher priority than
      // clicks.  Fields have higher priority than blocks; blocks have higher
      // priority than workspaces.
      // The ordering within drags does not matter, because the three types of
      // dragging are exclusive.
      if (this.is_dragging_block) {
        if (this.block_dragger == undefined) {
          console.error("Trying to drag block without dragger.")
          return
        }
        this.is_dragging_block = false
        this.block_dragger.end_block_drag(e, this.current_drag_delta_xy)
      } else if (this.is_dragging_workspace) {
        if (this.workspace_dragger == undefined) {
          console.error('Trying to drag workspace without dragger.')
          return
        }
        this.is_dragging_workspace = false
        this.workspace_dragger.end_drag(this.current_drag_delta_xy)
      } else if (this.is_field_click()) {
        this.do_field_click(e)
      } else if (this.is_block_click() && !this.is_mutation_click) {
        this.do_block_click()
      } else if (this.is_workspace_click()) {
        this.do_workspace_click()
      }
    } catch (e) {
      console.error("Occurs error when handle mouseup: ", e)
    } finally {
      e.preventDefault()
      e.stopPropagation()
      this.dispose()
    }
  }

  /**
   * Cancel an in-progress gesture.  If a workspace or block drag is in progress,
   * end the drag at the most recent location.
   */
  cancel() {
    // Disposing of a block cancels in-progress drags, but dragging to a delete
    // area disposes of a block and leads to recursive disposal. Break that cycle.
    if (this.is_ending) {
      // console.warn('Trying to cancel a gesture recursively.');
      return
    }
    this.is_ending = true
    try {
      this.touch_manager.long_stop()
      if (this.is_dragging_block) {
        if (this.block_dragger == undefined) {
          console.error('Trying to drag block without dragger.')
          return
        }
        this.block_dragger.end_block_drag(this.most_recent_event, this.current_drag_delta_xy)
      } else if (this.is_dragging_workspace) {
        if (this.workspace_dragger == undefined) {
          console.error('Trying to drag workspace without dragger.')
          return
        }
        this.workspace_dragger.end_drag(this.current_drag_delta_xy)
      }
    } catch (e) {
      console.error("Occurs error when cancel gesture: ", e)
    } finally {
      this.dispose()
    }
  }

  /**
   * Handle a real or faked right-click event by showing a context menu.
   * @param e A mouse move or touch move event.
   */
  handle_right_click(e) {
    if (this.target_block) {
      this.bring_block_to_front()
      this.utils.hide_chaff(!!this.flyout_)
      this.target_block.show_context_menu(e)
    } else {
      if (this.start_workspace && !this.flyout_) {
        this.utils.hide_chaff()
        this.start_workspace.show_context_menu(e)
      }
    }
    e.preventDefault()
    e.stopPropagation()
    this.dispose()
  }

  /**
   * Handle a mousedown/touchstart event on a workspace.
   * @param e A mouse down or touch start event.
   * @param ws The workspace the event hit.
   */
  handle_ws_start(e, ws) {
    if (this.has_started_) {
      return
    }
    this.set_start_workspace(ws)
    this.most_recent_event = e
    this.do_start(e)
  }

  /**
   * Handle a mousedown/touchstart event on a flyout.
   * @param e A mouse down or touch start event.
   * @param flyout The flyout the event hit.
   */
  handle_flyout_start(e, flyout) {
    if (this.has_started_) {
      return
    }
    var ws = flyout.get_workspace()
    if (ws == undefined) {
      return
    }
    this.set_start_flyout(flyout)
    this.handle_ws_start(e, ws)
  }

  /**
   * Handle a mousedown/touchstart event on a block.
   * @param e A mouse down or touch start event.
   * @param block The block the event hit.
   */
  handle_block_start(e, block) {
    if (this.has_started_) {
      return
    }
    this.set_start_block(block)
    this.most_recent_event = e
  }

  /**
   * Execute a field click.
   */
  do_field_click(e) {
    if (this.start_field == undefined) {
      console.error('Click event without start field.')
      return
    }
    if (this.events.is_enabled()) {
      this.events.fire(this.ui_event_factory({
        type: interfaces.UIEventType.CLICK,
        workspace_id: this.start_field.source_block.workspace.id,
      }))
    }
    this.start_field.focus(true)
    this.start_field.show_editor(e)
    this.bring_block_to_front()
  }

  /**
   * Execute a block click.
   */
  do_block_click() {
    if (!(0, base.is_block_svg)(this.start_block) ||
              !(0, base.is_block_svg)(this.target_block)) {
      return
    }
    var current_group = this.events.get_group()
    // Block click in an autoclosing flyout.
    if (this.flyout_ && this.flyout_.is_auto_close()) {
      if (this.target_block != undefined && !this.target_block.disabled) {
        this.events.set_group(current_group || true)
        var new_block = this.flyout_.create_block(this.target_block, true, gl_matrix.vec2.fromValues(this.mouse_down_xy[0], this.mouse_down_xy[1]))
        new_block.select()
        new_block.schedule_snap_and_bump()
        new_block.workspace.set_resizes_enabled(true)
      }
    }
    else {
      // A field is being edited if either the WidgetDiv or DropDownDiv is currently open.
      // If a field is being edited, don't fire any click events.
      var field_editing = this.widget_div.is_visible()
      if (!field_editing) {
        if (this.events.is_enabled()) {
          var start_block_id = this.start_block.id
          var workspace_id = this.start_block.workspace.id
          // Scratch-specific: also fire a "stack click" event for this stack.
          // This is used to toggle the stack when any block in the stack is clicked.
          var root_block_id = this.start_block.get_root_block().id
          this.events.fire(this.ui_event_factory({
            type: interfaces.UIEventType.CLICK,
            workspace_id: workspace_id,
            block_id: start_block_id,
          }))
          this.events.fire(this.ui_event_factory({
            type: interfaces.UIEventType.STACK_CLICK,
            workspace_id: workspace_id,
            block_id: root_block_id,
          }))
        }
      }
    }
    this.bring_block_to_front()
    this.events.set_group(current_group)
  }

  /**
   * Execute a workspace click.
   */
  do_workspace_click() {
    if (this.start_workspace) {
      if (this.runtime_data.selected) {
        this.runtime_data.selected.unselect()
      }
      if (this.events.is_enabled()) {
        this.events.fire(this.ui_event_factory({
          type: interfaces.UIEventType.STACK_CLICK,
          workspace_id: this.start_workspace.id
        }))
      }
    }
  }

  /* End functions defining what actions to take to execute clicks on each type
  * of target. */
  // TODO: (fenichel): Move bubbles to the front.
  /**
   * Move the dragged/clicked block to the front of the workspace so that it is
   * not occluded by other blocks.
   */
  bring_block_to_front() {
    // Blocks in the flyout don't overlap, so skip the work.
    if (this.target_block && this.target_block.workspace && !this.flyout_) {
      this.target_block.bring_to_front()
    }
  }

  /* Begin functions for populating a gesture at mouse down. */
  /**
   * Record the field that a gesture started on.
   * @param field The field the gesture started on.
   */
  set_start_field(field) {
    // if (!!this.has_started_) {
    //   console.warn('Tried to call gesture.set_start_field, but the gesture had already been started.');
    // }
    if (!this.start_field) {
      this.start_field = field
    }
  }

  /**
   * Record the block that a gesture started on, and set the target block
   * appropriately.
   * @param block The block the gesture started on.
   */
  set_start_block(block) {
    // If the gesture already went through a bubble, don't set the start block.
    if (this.start_block) {
      return
    }
    // 拖动param_color内的shadow时需要可以把param_color拖出
    if ((0, base.is_block_svg)(block) && block.parent_block?.element_type === 'param_color' && block.is_shadow()) {
      block = block.parent_block
    }
    this.start_block = block
    if ((0, base.is_block_svg)(block) && block.is_in_flyout && block != block.get_root_block()) {
      this.should_duplicate_on_drag = false
      this.set_target_block(block.get_root_block())
    }
    else {
      if ((0, base.is_block_svg)(block)
            && block.is_shadow()
            && (block.element_type === 'param' || block.element_type === 'param_color')) {
        this.should_duplicate_on_drag = true
      }
      this.set_target_block(block)
    }
  }

  /**
   * Record the block that a gesture targets, meaning the block that will be
   * dragged if this turns into a drag.  If this block is a shadow, that will be
   * its first non-shadow parent.
   * @param block The block the gesture targets.
   */
  set_target_block(block) {
    if ((0, base.is_block_svg)(block) && block.is_shadow() && !this.should_duplicate_on_drag) {
      this.set_target_block(block.get_parent())
    } else {
      this.target_block = block
    }
  }

  /**
   * Record the workspace that a gesture started on.
   * @param ws The workspace the gesture started on.
   */
  set_start_workspace(ws) {
    if (!this.start_workspace) {
      this.start_workspace = ws
    }
  }

  /**
   * Record the flyout that a gesture started on.
   * @param flyout The flyout the gesture started on.
   */
  set_start_flyout(flyout) {
    if (!this.flyout_) {
      this.flyout_ = flyout
    }
  }

  is_start_from_flyout() {
    return !!this.flyout_
  }

  /**
   * Whether this gesture is a click on a block.  This should only be called when
   * ending a gesture (mouse up, touch end).
   * @return whether this gesture was a click on a block.
   */
  is_block_click() {
    // A block click starts on a block, never escapes the drag radius, and is not
    // a field click.
    var has_start_block = !!this.start_block
    return has_start_block && !this.has_exceeded_drag_radius && !this.is_field_click()
  }

  /**
   * Whether this gesture is a click on a field.  This should only be called when
   * ending a gesture (mouse up, touch end).
   * @return whether this gesture was a click on a field.
   */
  is_field_click() {
    return !!this.start_field && this.start_field.is_currently_editable() && !this.has_exceeded_drag_radius
  }

  /**
   * Whether this gesture is a click on a workspace.  This should only be called
   * when ending a gesture (mouse up, touch end).
   * @return whether this gesture was a click on a workspace.
   */
  is_workspace_click() {
    var only_touched_workspace = !this.start_block &&
            !this.start_field
    return only_touched_workspace && !this.has_exceeded_drag_radius
  }

  /* End helper functions defining types of clicks. */
  /**
   * Whether this gesture is a drag of either a workspace or block.
   * This function is called externally to block actions that cannot be taken
   * mid-drag (e.g. using the keyboard to delete the selected blocks).
   * @return true if this gesture is a drag of a workspace or block.
   */
  is_dragging() {
    return this.is_dragging_workspace || this.is_dragging_block
  }

  /**
   * Whether this gesture has already been started.  In theory every mouse down
   * has a corresponding mouse up, but in reality it is possible to lose a
   * mouse up, leaving an in-process gesture hanging.
   * @return whether this gesture was a click on a workspace.
   */
  has_started() {
    return this.has_started_
  }

  /**
   * Don't even think about using this function before talking to rachel-fenichel.
   *
   * Force a drag to start without clicking and dragging the block itself.  Used
   * to attach duplicated blocks to the mouse pointer.
   * @param fakeEvent An object with the properties needed to start a
   *     drag, including clientX and clientY.
   * @param block The block to start dragging.
   */
  force_start_block_drag(fakeEvent, block) {
    this.handle_block_start(fakeEvent, block)
    this.handle_ws_start(fakeEvent, block.get_workspace())
    this.is_dragging_block = true
    this.has_exceeded_drag_radius = true
    this.start_dragging_block()
  }

  /**
   * Duplicate the target block and start dragging the duplicated block.
   * This should be done once we are sure that it is a block drag, and no earlier.
   * Specifically for argument reporters in custom block definitions.
   */
  duplicate_on_drag() {
    var new_block = undefined
    if (this.start_workspace == undefined) {
      console.error('Try to drag without start workspace.')
      return
    }
    if (!(0, base.is_block_svg)(this.target_block)) {
      console.error('Try to drag without target block.')
      return
    }
    this.events.disable()
    try {
      // NOTE: targetBlock_ should have no children.  If it has children we would
      // need to update shadow block IDs to avoid problems in the VM.
      // Resizes will be reenabled at the end of the drag.
      this.start_workspace.set_resizes_enabled(false)
      var xml_block = this.xml.block_to_dom(this.target_block)
      var type = xml_block.getAttribute('type')
      if (type === 'color_picker') {
        new_block = this.xml.dom_to_block(xml_block, this.start_workspace)
        new_block.set_connections_hidden(false)
      }
      else {
        new_block = this.xml.dom_to_block_headless(xml_block, this.start_workspace)
      }
      new_block.init_svg()
      new_block.render()
      // Move the duplicate to original position.
      var xy = this.target_block.get_relative_to_surface_xy()
      new_block.move_by(xy)
      new_block.set_shadow(false)
    }
    finally {
      this.events.enable()
    }
    if (!new_block) {
      // Something went wrong.
      console.error('Something went wrong while duplicating a block.')
      return
    }
    if (this.events.is_enabled()) {
      this.events.fire(this.create_event_factory({ block: new_block }))
    }
    new_block.select()
    this.target_block = new_block
  }
}
