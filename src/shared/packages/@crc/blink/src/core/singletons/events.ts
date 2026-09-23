/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2174
 */

import { injectable } from "inversify"
import * as di_symbols from/* 646 */"../di/di_symbols"
import { lazy_inject } from/* 644 */"../di/container"
import * as interfaces from/* 195 */"../../../../../../../../unrestored/shared/1571/2636/123/195/index"
import * as maths from/* 293 */"../../../../../../../../unrestored/shared/1571/2636/123/293"

/**
 * Events fired as a result of actions in Blockly's editor.
 * Singleton
 */
@injectable()
export class Events {

  @lazy_inject(di_symbols.BINDING.touch_manager)
  touch_manager

  @lazy_inject(di_symbols.BINDING.workspace_db)
  workspace_db

  @lazy_inject(di_symbols.BINDING.GroupEvent)
  group_event_factory

  constructor() {
    /**
     * List of events queued for firing.
     */
    this.FIRE_QUEUE_ = []
    /**
     * Allow change events to be created and fired.
     */
    this.disabled_ = 0
    /**
     * Group ID for new events.  Grouped events are indivisible.
     */
    this.group_ = ''
    /**
     * Sets whether events should be added to the undo stack.
     */
    this._record_undo = true
    this._is_undoing = false
    /**
     * Indicates whether events should be filtered or not.
     * Currently no filter is required.
     */
    this.enable_filter = false
    this.listener_disabled = 0
  }
  set_disabled(disabled) {
    this.disabled_ = disabled
  }
  is_record_undo() {
    return this._record_undo
  }
  set_record_undo(val) {
    this._record_undo = val
  }
  is_undoing() { return this._is_undoing }
  set_undoing(val) {
    this._is_undoing = val
  }
  fire(event) {
    var _this = this
    // event is not generated.
    if (!event) {
      return
    }
    if (!this.is_enabled()) {
      return
    }
    if (!event.is_record_undo() || !this.enable_filter) {
      var workspace = this.workspace_db.get(event.get_workspace_id())
      if (workspace) {
        workspace.fire_change_listener(event)
      }
      return
    }
    if (!this.FIRE_QUEUE_.length) {
      // First event added; schedule a firing of the event queue.
      window.setTimeout(function () {
        _this.fire_now()
      }, 0)
    }
    this.FIRE_QUEUE_.push(event)
  }
  /**
     * Fire all queued events.
     */
  fire_now() {
    var queue = this.filter(this.FIRE_QUEUE_, true)
    this.FIRE_QUEUE_.length = 0
    for (var i = 0; i < queue.length; i++) {
      var event_1 = queue[i]
      var workspace = this.workspace_db.get(event_1.get_workspace_id())
      // 目前认为只有在对应的workspace才应该去触发对应workspace的listener
      if (workspace) {
        workspace.fire_change_listener(event_1)
      }
    }
  }
  /**
     * 合并事件
     * 1. undo 需要 reverse 之后合并
     * 2. 同 type、blockId、workspaceId、element、input/field name 为同一事件
     * 3. 记录事件和 index
     * 4. 合并相邻的 move 事件
     * 5. 合并相同的 change 事件
     * 6. 过滤掉所有合并后 isNull 的事件
     * 7. undo 还原顺序
     * TODO 把所有 mutation event 放到队列头部 并只保留带有 input 的 move 事件 不确定这样排序的原因
     * @param queue_in Array of events.
     * @param forward True if forward (redo), false if backward (undo).
     * @returns Array of filtered events.
     */
  filter(queue_in, forward) {
    var queue = queue_in.slice()
    if (!forward) {
      // Undo is merged in reverse order.
      queue.reverse()
    }
    var merged_queue = []
    var event_map = new Map()
    // Merge duplicates.
    for (var i = 0; i < queue.length; i++) {
      var event_2 = queue[i]
      if (event_2.is_null()) {
        continue
      }
      var element = ''
      var element_name = ''
      if (event_2.type === interfaces.BlockEventType.CHANGE) {
        element = event_2.element || ''
        element_name = event_2.get_name() || ''
      }
      var key = event_2.type + "&&" + event_2.get_block_id() + "&&" + event_2.get_workspace_id() + "&&" + element + "&&" + element_name
      var last_entry = event_map.get(key)
      if (!last_entry) {
        event_map.set(key, {
          index: i,
          event: event_2,
        })
        merged_queue.push(event_2)
        continue
      }
      switch (event_2.type) {
        case interfaces.BlockEventType.MOVE:
          if (last_entry.index === i - 1) {
            // 只合并相邻的move事件
            var new_loc = event_2.get_new_loc()
            var last_move_event = last_entry.event
            last_move_event.update_new_loc(new_loc)
            last_entry.index = i
          }
          else {
            // 本次事件成为同个key的最新待校验事件
            event_map.set(key, {
              index: i,
              event: event_2,
            })
            merged_queue.push(event_2)
          }
          break
        case interfaces.BlockEventType.CHANGE:
          var e = event_2
          var last_change_event = last_entry.event
          last_change_event.update_new_value(e.get_new_value())
          break
        default:
          // 本次事件成为最新的待校验事件
          event_map.set(key, {
            index: i,
            event: event_2,
          })
          merged_queue.push(event_2)
      }
    }
    // Filter out any events that have become undefined due to merging.
    queue = merged_queue.filter(function (e) { return !e.is_null() })
    if (!forward) {
      // Restore undo order.
      queue.reverse()
    }
    return queue
  }
  /**
     * Modify pending undo events so that when they are fired they don't
     * land in the undo stack.  Called by Workspace.clear_undo.
     */
  clear_pending_undo() {
    for (var i = 0; i < this.FIRE_QUEUE_.length; i++) {
      var event_3 = this.FIRE_QUEUE_[i]
      event_3.set_record_undo(false)
    }
  }
  /**
     * Stop sending events.  Every call to this function MUST also call enable.
     */
  disable() {
    this.disabled_++
  }
  /**
     * Start sending events.  Unless events were already disabled when the
     * corresponding call to disable was made.
     */
  enable() {
    this.disabled_--
  }
  /**
     * Returns whether events may be fired or not.
     * @returns True if enabled.
     */
  is_enabled() {
    return this.disabled_ == 0
  }
  /**
     * Current group.
     * @return ID string.
     */
  get_group() {
    return this.group_
  }
  /**
     * Start or stop a group.
     * @param state True to start new group, false to end group.
     *   String to set group explicitly.
     */
  set_group(state) {
    var ori_group = this.group_
    if (typeof state == 'boolean') {
      this.group_ = state ? (0, maths.gen_uid)() : ''
    }
    else {
      this.group_ = state
    }
    // 事件组的开启和关闭有两种情况
    // 1. set_group(true)和set_group(false)嵌套使用，即未调用set_group(false)的情况下又调用了set_group(true)。
    //   在 set_group(true) 之前需要进行判断，如果当前存在事件组，则不重新生成 group id。
    //   但不能确定外部使用时，是否有上一个事件组未结束就开启新事件组的情况，所以没有在set_group方法内部做限制。
    // 2. 事件组已被关闭，但是需要再次开启，使用同一个group id。
    //   拖拽积木结束后，延迟一段时间进行bump，此时会重新开启拖拽的事件组。
    if (ori_group && ori_group !== this.group_ && this.is_enabled()) {
      var group_end_event = this.group_event_factory({
        type: interfaces.GroupEventType.GroupEnd,
        group: ori_group,
      })
      this.fire(group_end_event)
    }
    if (this.group_ && ori_group !== this.group_ && this.is_enabled()) {
      var group_start_event = this.group_event_factory({
        type: interfaces.GroupEventType.GroupStart,
        group: this.group_,
      })
      this.fire(group_start_event)
    }
  }
  /**
     * Enable/disable a block depending on whether it is properly connected.
     * Use this on applications where all blocks should be connected to a top block.
     * Recommend setting the 'disable' option to 'false' in the config so that
     * users don't try to reenable disabled orphan blocks.
     * @param {!this.Abstract} event Custom data for event.
     */
  disable_orphans(event) {
    if (event.type == interfaces.BlockEventType.MOVE ||
      event.type == interfaces.BlockEventType.CREATE) {
      this.disable()
      var workspace = this.workspace_db.get(event.get_workspace_id())
      if (workspace == undefined) {
        console.error('Trying to enable/disable a block when the workspace disposed.')
        this.enable()
        return
      }
      var block = workspace.get_block_by_id(event.get_block_id())
      if (block != undefined) {
        var parent_block = block.get_parent()
        if (parent_block && !parent_block.disabled) {
          var children = block.get_descendants()
          for (var i = 0; i < children.length; i++) {
            var child = children[i]
            child.set_disabled(false)
          }
        }
        else if ((block.output_connection || block.previous_connection)
          && !workspace.is_dragging()) {
          do {
            block.set_disabled(true)
            block = block.get_next_block()
          } while (block)
        }
      }
      this.enable()
    }
  }
  /**
     * Bind an event to a function call.  Handles multitouch events by using the
     * coordinates of the first changed touch, and doesn't do any safety checks for
     * simultaneous event processing.
     * @deprecated in favor of bind_event_with_checks, but preserved for external
     * users.
     * @param {!EventTarget} node Node upon which to listen.
     * @param {string} name Event name to listen to (e.g. 'mousedown').
     * @param {Object} this_object The value of 'this' in the function.
     * @param {!Function} func Function to call when event is triggered.
     * @return Opaque data that can be passed to unbind_event.
     * @private
     */
  bind_event(node, name, this_object, func) {
    var _this = this
    var wrap_func = function (e) {
      if (this_object) {
        func.call(this_object, e)
      }
      else {
        func(e)
      }
    }
    node.addEventListener(name, wrap_func, false)
    var bind_data = {
      original: {
        target: node,
        name: name,
        listener: wrap_func,
      },
      additional: [],
    }
    var unbind_original = function () { return _this.unbind_original(bind_data) }
    // Add equivalent touch event.
    if (name in this.touch_manager.TOUCH_MAP) {
      var touch_wrap_func = function (e) {
        // Punt on multi-touch events.
        if (e.changedTouches.length == 1) {
          // Map the touch event's properties to the event.
          var touch_point = e.changedTouches[0]
          e.clientX = touch_point.clientX
          e.clientY = touch_point.clientY
        }
        wrap_func(e)
        if (bind_data.original) {
          unbind_original()
        }
      }
      for (var i = 0; i < this.touch_manager.TOUCH_MAP[name].length; i++) {
        var type = this.touch_manager.TOUCH_MAP[name][i]
        node.addEventListener(type, touch_wrap_func, false)
        bind_data.additional.push({
          target: node,
          name: type,
          listener: touch_wrap_func,
        })
      }
    }
    return bind_data
  }
  unbind_event_by_data(bind_data) {
    var target = bind_data.target, name = bind_data.name, listener = bind_data.listener
    target.removeEventListener(name, listener, false)
    return listener
  }
  unbind_original(bind_data) {
    var func
    if (bind_data.original) {
      func = this.unbind_event_by_data(bind_data.original)
      bind_data.original = undefined
    }
    return func
  }
  unbind_event(bind_data) {
    var func = this.unbind_original(bind_data)
    while (bind_data.additional.length > 0) {
      var bindDatum = bind_data.additional.pop()
      func = this.unbind_event_by_data(bindDatum)
    }
    return func
  }
  bind_event_with_checks(node, name, thisObject, func, opt_noCaptureIdentifier?, opt_noPreventDefault?) {
    var wrap_func = (e) => {
      var target = e.target
      if (!(target instanceof Element)) {
        return
      }
      var capture_identifier = !opt_noCaptureIdentifier
      // Handle each touch point separately.  If the event was a mouse event,
      // this will hand back an array with one element, which we're fine handling.
      var events = this.touch_manager.split_event_by_touches(e)
      for (var i = 0; i < events.length; i++) {
        const event = events[i]
        // TODO:
        // hammer 的 pinch 事件在 iPhone 6 上不是很灵敏，有时候不触发 pinch 事件
        // 在 bindEventWithChecks_ 方法中取消了 Blink 的双指 move 监听
        // 目前观察到的情况没有双指滑动的需求
        if (events.length === 2) {
          return
        }
        if (capture_identifier && !this.touch_manager.should_handle_event(event)) {
          continue
        }
        this.touch_manager.set_client_from_touch(event)
        if (thisObject) {
          func.call(thisObject, event)
        }
        else {
          func(event)
        }
      }
    }
    node.addEventListener(name, wrap_func, false)
    var bind_data = {
      original: {
        target: node,
        name,
        listener: wrap_func,
      },
      additional: [],
    }
    var unbind_original = () => this.unbind_original(bind_data)
    // Add equivalent touch event.
    if (name in this.touch_manager.TOUCH_MAP) {
      var touch_wrap_func = function (e) {
        wrap_func(e)
        if (bind_data.original) {
          unbind_original()
        }
        // Calling preventDefault stops the browser from scrolling/zooming the page.
        var preventDef = !opt_noPreventDefault
        if (preventDef) {
          if (e.cancelable == false) {
            return
          }
          e.preventDefault()
        }
      }
      for (var i = 0; i < this.touch_manager.TOUCH_MAP[name].length; i++) {
        var event_name = this.touch_manager.TOUCH_MAP[name][i]
        // https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
        node.addEventListener(event_name, touch_wrap_func, false)
        bind_data.additional.push({
          target: node,
          name: event_name,
          listener: touch_wrap_func,
        })
      }
    }
    return bind_data
  }
  enable_listener() {
    this.listener_disabled++
  }
  disable_listener() {
    this.listener_disabled--
  }
  is_listener_enabled() {
    return this.listener_disabled === 0
  }
}
