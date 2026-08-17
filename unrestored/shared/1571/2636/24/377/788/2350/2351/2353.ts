/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2353
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.ConflictResolver = undefined
var r
var i = require(/* 93 */"tslib")
var o = require(/* 644 */"../../../../../17/644")
var a = require(/* 646 */"../../../../../17/646")
var s = (0, i.__importStar)(require(/* 536 */"../../../../../17/536"))
var c = require(/* 214 */"../../../../../1022/214")
var u = function (e) {
  function t() {
    return null !== e && e.apply(this, arguments) || this
  }
  (0, i.__extends)(t, e)
  t.prototype.after_analyze_op = function (e) {
    var t = this.detect_conflict(e)
    return !t || (t.type === r.Gesture ? (this.interrupt_gesture(t.target), true) : t.type === r.EditComment ? (this.interrupt_edit_comment(t.target), true) : t.type === r.EditField ? (this.interrupt_edit_field(t.target), true) : t.type !== r.UI || (this.interrupt_ui(t.target), true))
  }
  t.prototype.get_server_affected_id_list = function (e) {
    var t = this
    var n = new Set()
    e.forEach(function (e) {
      t.Blink.mainWorkspace.for_each_element_in_stack(e, function (e) {
        return n.add(e.id)
      })
    })
    return n
  }
  t.prototype.analyze_local_operation = function (e) {
    var /* [auto-meaningful-name] */this$Blink$runtime_data$editing$source_block
    var n = new Set()
    var /* [auto-meaningful-name] */this$Blink$mainWorkspace$current_gesture_ = this.Blink.mainWorkspace.current_gesture_
    var o = null === this$Blink$mainWorkspace$current_gesture_ || undefined === this$Blink$mainWorkspace$current_gesture_ ? undefined : this$Blink$mainWorkspace$current_gesture_.target_block
    if (this$Blink$mainWorkspace$current_gesture_ && o) {
      this.Blink.mainWorkspace.for_each_element_in_stack(o.id, function (e) {
        return n.add(e.id)
      })
      var /* [auto-meaningful-name] */this$Blink$mainWorkspace$current_gesture_$block_dragger = this$Blink$mainWorkspace$current_gesture_.block_dragger
      if (undefined !== (null === this$Blink$mainWorkspace$current_gesture_$block_dragger || undefined === this$Blink$mainWorkspace$current_gesture_$block_dragger ? undefined : this$Blink$mainWorkspace$current_gesture_$block_dragger.parent_before_drag)) {
        this.Blink.mainWorkspace.for_each_element_in_stack(this$Blink$mainWorkspace$current_gesture_$block_dragger.parent_before_drag.id, function (e) {
          return n.add(e.id)
        })
      }
      for (var s = Array.from(e), u = 0; u < s.length; u++) {
        if (n.has(s[u])) {
          return {
            type: r.Gesture,
            target: this$Blink$mainWorkspace$current_gesture_
          }
        }
      }
    }
    var /* [auto-meaningful-name] */this$Blink$runtime_data$selected = this.Blink.runtime_data.selected
    if (this$Blink$runtime_data$selected && e.has(this$Blink$runtime_data$selected.id)) {
      if (this.Blink.context_menu.current_block === this$Blink$runtime_data$selected) {
        return {
          type: r.UI,
          target: this$Blink$runtime_data$selected
        }
      }
      if ((0, c.is_workspace_comment)(this$Blink$runtime_data$selected) && (this$Blink$runtime_data$selected.is_textarea_focused || this$Blink$runtime_data$selected.size_before_resize)) {
        return {
          type: r.EditComment,
          target: this$Blink$runtime_data$selected
        }
      }
      if ((0, c.is_block_svg)(this$Blink$runtime_data$selected)) {
        var /* [auto-meaningful-name] */this$Blink$runtime_data$editing = this.Blink.runtime_data.editing
        if (!this$Blink$runtime_data$editing) {
          return
        }
        if (this$Blink$runtime_data$editing.source_block === this$Blink$runtime_data$selected || (null === (this$Blink$runtime_data$editing$source_block = this$Blink$runtime_data$editing.source_block) || undefined === this$Blink$runtime_data$editing$source_block ? undefined : this$Blink$runtime_data$editing$source_block.parent_block) === this$Blink$runtime_data$selected) {
          return {
            type: r.EditField,
            target: this$Blink$runtime_data$editing
          }
        }
      }
    }
  }
  t.prototype.detect_conflict = function (e) {
    var t = this.get_server_affected_id_list(e)
    if (t) {
      return this.analyze_local_operation(t)
    }
  }
  t.prototype.interrupt_edit_field = function (e) {
    var /* [auto-meaningful-name] */e$source_block
    this.Blink.events.disable()
    if (this.Blink.runtime_data.editing === e) {
      var /* [auto-meaningful-name] */e$value_before_editing = e.value_before_editing
      if (undefined !== e$value_before_editing) {
        e.set_value(e$value_before_editing)
        e.set_html_input_value(e$value_before_editing)
      }
      if (!(null === (e$source_block = e.source_block) || undefined === e$source_block)) {
        e$source_block.unselect()
      }
      e.focus(false)
    }
    if (this.Blink.widget_div.owner_) {
      this.Blink.widget_div.hide()
    }
    this.Blink.events.enable()
  }
  t.prototype.interrupt_edit_comment = function (e) {
    e.cancel_operation()
  }
  t.prototype.interrupt_ui = function (e) {
    this.Blink.events.disable()
    this.Blink.context_menu.hide()
    e.unselect()
    this.Blink.events.enable()
  }
  t.prototype.interrupt_gesture = function (e) {
    var /* [auto-meaningful-name] */e$block_dragger
    var /* [auto-meaningful-name] */e$block_dragger1
    var r = this.Blink.events.get_group()
    this.Blink.events.fire(this.group_event_factory({
      type: s.GroupEventType.GroupCancel,
      group: r
    }))
    try {
      this.Blink.events.disable_listener()
      var i = null === (e$block_dragger = e.block_dragger) || undefined === e$block_dragger ? undefined : e$block_dragger.redo_stack_before_drag.slice()
      var o = null === (e$block_dragger1 = e.block_dragger) || undefined === e$block_dragger1 ? undefined : e$block_dragger1.undo_stack_before_drag.slice()
      if (undefined === i || undefined === o) {
        return void console.error("Confilct resolver: cannot get redo stack before drag.")
      }
      e.cancel()
      if (o.length !== this.Blink.mainWorkspace.get_undo_stack().length) {
        this.Blink.mainWorkspace.undo()
        this.Blink.mainWorkspace.set_redo_stack(i)
      }
    } catch (a) {
      console.error("Occurs error when interruput gesture: ", a)
    } finally {
      this.Blink.events.enable_listener()
    }
  };
  (0, i.__decorate)([(0, o.lazy_inject)(a.BINDING.Blink)], t.prototype, "Blink", undefined);
  (0, i.__decorate)([(0, o.lazy_inject)(a.BINDING.GroupEvent)], t.prototype, "group_event_factory", undefined)
  return t
}(require(/* 1156 */"../../../737/1156").BasePlugin)
exports.ConflictResolver = u;
(function (e) {
  e.Gesture = "Gesture"
  e.EditField = "EditField"
  e.EditComment = "EditComment"
  e.UI = "UI"
})(r || (r = {}))
