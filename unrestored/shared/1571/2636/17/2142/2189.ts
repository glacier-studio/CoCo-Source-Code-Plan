/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2189
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.SimplifiedCommentBubble = undefined
var r = require(/* 93 */"tslib")
var i = require(/* 134 */"inversify")
var o = require(/* 125 */"../../../../../../src/shared/packages/@crc/blink/src/core/di")
var a = require(/* 648 */"../../1205/2609/648")
var s = require(/* 214 */"../../1022/214")
var c = require(/* 195 */"../../123/195/index")
var u = require(/* 123 */"../../123/index")
var l = function () {
  function e() {
    this.is_showing = false
    this.selected_comment = ""
    this.comments = new Map()
  }
  e.prototype.popup = function (e) {
    var t
    var n = this
    if (!this.is_showing) {
      this.is_showing = true
      if (this.events.is_enabled()) {
        this.events.fire(this.ui_event_factory({
          type: c.UIEventType.COMMENT_OPEN,
          workspace_id: e.workspace.id,
          old_value: false,
          new_value: true,
          block_id: e.id
        }))
      }
      var r = null === (t = e.get_icon()) || undefined === t ? undefined : t.children
      if (r) {
        for (var i = 0; i < r.length; i++) {
          r[i].setAttribute("data-showing", "true")
        }
      }
      this.update_bubble("reset", e)
      if (this.bubble_) {
        document.body.appendChild(this.bubble_)
        this.animate_once(this.bubble_, "showBubbleAnimation")
      }
      var o = function t(i) {
        if (i.type !== c.UIEventType.H_SCROLLBAR_SET && i.type !== c.UIEventType.V_SCROLLBAR_SET && (i.type !== c.BlockEventType.CHANGE || "comment" !== i.element || i.get_new_value() || 0 === n.comments.size)) {
          if (i.type === c.BlockEventType.CHANGE && "comment_text" === i.element) {
            var o = i.get_block_id()
            if (o && n.comments.get(o)) {
              return
            }
          }
          if (i.type !== c.UIEventType.SIMPLIFIED_COMMENT_EDIT && i.type !== c.UIEventType.SIMPLIFIED_COMMENT_DELETE && i.type !== c.UIEventType.SIMPLIFIED_COMMENT_SELECT) {
            if (r) {
              for (var a = 0; a < r.length; a++) {
                r[a].removeAttribute("data-showing")
              }
            }
            if (n.bubble_) {
              n.animate_once(n.bubble_, "hideBubbleAnimation", function () {
                if (n.bubble_) {
                  (0, u.remove_node)(n.bubble_)
                }
              })
              e.workspace.remove_change_listener(t)
              n.is_showing = false
              n.comments.clear()
              n.selected_comment = ""
              if (n.events.is_enabled()) {
                n.events.fire(n.ui_event_factory({
                  type: c.UIEventType.COMMENT_OPEN,
                  workspace_id: e.workspace.id,
                  old_value: true,
                  new_value: false,
                  block_id: e.id
                }))
              }
            }
          }
        }
      }
      window.setTimeout(function () {
        return e.workspace.add_change_listener(o)
      })
    }
  }
  e.prototype.update_bubble = function (e, t) {
    var n
    var r = this
    var i = t.get_parent_block()
    if (i && (this.bubble_ || (this.bubble_ = document.createElement("div"), this.bubble_.classList.add("blocklySimplifiedCommentBubble", "blocklySimplifiedCommentBubbleCover"), this.bubble_content_ = document.createElement("div"), this.bubble_content_.classList.add("blocklySimplifiedCommentBubbleContent")), this.bubble_content_)) {
      if ("reset" !== e) {
        if ("remove" === e) {
          var o = null === (n = null === (c = this.comments.get(t.id)) || undefined === c ? undefined : c.parentElement) || undefined === n ? undefined : n.parentElement
          if (o) {
            this.bubble_content_.removeChild(o)
          }
          this.comments.delete(t.id)
          return void (this.selected_comment = "")
        }
        var c
        if ("edit" !== e) {
          ;
        } else if (c = this.comments.get(t.id)) {
          c.innerText = t.get_text()
        }
      } else {
        for (; this.bubble_content_.firstChild;) {
          this.bubble_content_.removeChild(this.bubble_content_.firstChild)
        }
        for (var u = (0, a.get_outer_block)(i), l = (0, a.get_nested_blocks_with_comment)(u), f = 0; f < l.length; f++) {
          var d = l[f]
          if ((0, s.is_block_group)(d)) {
            d.nested_blocks_with_comment.forEach(function (e) {
              r.create_comment_bubble_text(e)
            })
          } else {
            this.create_comment_bubble_text(l[f])
          }
        }
      }
    }
  }
  e.prototype.create_comment_bubble_text = function (e) {
    var t = this
    var /* [auto-meaningful-name] */e$comment = e.comment
    if (e$comment) {
      var r = document.createElement("div")
      r.classList.add("blocklySimplifiedCommentTextWrapper")
      var i = document.createElement("div")
      i.classList.add("blocklySimplifiedCommentTextDecorator")
      i.style.backgroundColor = e.get_colour().toString()
      var o = document.createElement("div")
      o.classList.add("blocklySimplifiedCommentTextBg")
      var a = document.createElement("div")
      a.classList.add("blocklySimplifiedCommentText")
      var s = function () {
        return 1 !== t.comments.size || e.is_output_block()
      }
      this.events.bind_event_with_checks(o, "click", e$comment, function () {
        var e
        var r
        var i
        if (s()) {
          var /* [auto-meaningful-name] */t$selected_comment = t.selected_comment
          if (t$selected_comment) {
            t.selected_comment = ""
            var a = t.comments.get(t$selected_comment)
            if (!(null === (e = null === a || undefined === a ? undefined : a.parentElement) || undefined === e)) {
              e.classList.remove("blocklySimplifiedCommentTextActive")
            }
            if (t.events.is_enabled()) {
              t.events.fire(t.ui_event_factory({
                type: c.UIEventType.SIMPLIFIED_COMMENT_SELECT,
                workspace_id: e$comment.workspace.id,
                old_value: true,
                new_value: false,
                block_id: t$selected_comment
              }))
            }
            if (t$selected_comment !== e$comment.id) {
              t.selected_comment = e$comment.id
              var u = t.comments.get(e$comment.id)
              if (!(null === (r = null === u || undefined === u ? undefined : u.parentElement) || undefined === r)) {
                r.classList.add("blocklySimplifiedCommentTextActive")
              }
              if (t.events.is_enabled()) {
                t.events.fire(t.ui_event_factory({
                  type: c.UIEventType.SIMPLIFIED_COMMENT_SELECT,
                  workspace_id: e$comment.workspace.id,
                  old_value: false,
                  new_value: true,
                  block_id: e$comment.id
                }))
              }
            }
          } else {
            t.selected_comment = e$comment.id
            var l = t.comments.get(e$comment.id)
            if (!(null === (i = null === l || undefined === l ? undefined : l.parentElement) || undefined === i)) {
              i.classList.add("blocklySimplifiedCommentTextActive")
            }
            if (t.events.is_enabled()) {
              t.events.fire(t.ui_event_factory({
                type: c.UIEventType.SIMPLIFIED_COMMENT_SELECT,
                workspace_id: e$comment.workspace.id,
                old_value: false,
                new_value: true,
                block_id: e$comment.id
              }))
            }
          }
        }
      })
      var u = document.createElement("div")
      u.classList.add("blocklySimplifiedCommentTextSeparator")
      var l = new Image()
      l.src = this.Msg.ICON_COMMENT_EDIT
      l.alt = "Edit"
      l.classList.add("blocklySimplifiedCommentEditButton")
      this.events.bind_event_with_checks(l, "click", e$comment, function () {
        if (t.events.is_enabled()) {
          t.events.fire(t.ui_event_factory({
            type: c.UIEventType.SIMPLIFIED_COMMENT_EDIT,
            workspace_id: e$comment.workspace.id,
            old_value: undefined,
            new_value: undefined,
            block_id: e$comment.id
          }))
        }
        e$comment.focus()
      })
      var f = new Image()
      f.src = this.Msg.ICON_COMMENT_REMOVE
      f.classList.add("blocklySimplifiedCommentRemoveButton")
      this.events.bind_event_with_checks(f, "click", e$comment, function () {
        if (t.events.is_enabled()) {
          t.events.fire(t.ui_event_factory({
            type: c.UIEventType.SIMPLIFIED_COMMENT_DELETE,
            workspace_id: e$comment.workspace.id,
            old_value: undefined,
            new_value: undefined,
            block_id: e$comment.id
          }))
        }
        e.set_comment_text(undefined)
      })
      var d = new Image()
      d.src = this.Msg.ICON_COMMENT_MORE
      d.classList.add("blocklySimplifiedCommentMoreButton")
      d.setAttribute("tabindex", "-1")
      var h = false
      var p = false
      this.events.bind_event_with_checks(d, "focus", e$comment, function () {
        var e
        var r
        if (!p) {
          var /* [auto-meaningful-name] */t$selected_comment
          var _
          p = true
          if (s()) {
            t$selected_comment = t.selected_comment
            t.selected_comment = e$comment.id
          }
          if (t$selected_comment && t$selected_comment !== e$comment.id) {
            if (t.events.is_enabled()) {
              if (!(null === (e = null === (_ = t.comments.get(t$selected_comment)) || undefined === _ ? undefined : _.parentElement) || undefined === e)) {
                e.classList.remove("blocklySimplifiedCommentTextActive")
              }
              t.events.fire(t.ui_event_factory({
                type: c.UIEventType.SIMPLIFIED_COMMENT_SELECT,
                workspace_id: e$comment.workspace.id,
                old_value: true,
                new_value: false,
                block_id: t$selected_comment
              }))
            }
          }
          if (t.selected_comment && t$selected_comment !== e$comment.id) {
            if (!(null === (r = null === (_ = t.comments.get(e$comment.id)) || undefined === _ ? undefined : _.parentElement) || undefined === r)) {
              r.classList.add("blocklySimplifiedCommentTextActive")
            }
            if (t.events.is_enabled()) {
              t.events.fire(t.ui_event_factory({
                type: c.UIEventType.SIMPLIFIED_COMMENT_SELECT,
                workspace_id: e$comment.workspace.id,
                old_value: false,
                new_value: true,
                block_id: e$comment.id
              }))
            }
          }
          l.style.display = "block"
          t.animate_once(l, "showEditButtonAnimation")
          f.style.display = "block"
          t.animate_once(f, "showRemoveButtonAnimation")
          t.animate_once(d, "expandMoreButtonAnimation", function () {
            d.style.transform = "rotate(90deg)"
            h = true
            p = false
          })
          i.style.opacity = "0.4"
          i.style.left = "26px"
          a.style.opacity = "0.4"
          o.style.marginLeft = "26px"
        }
      })
      this.events.bind_event_with_checks(d, "blur", e$comment, function () {
        if (!p) {
          p = true
          t.animate_once(l, "hideEditButtonAnimation", function () {
            return l.style.display = ""
          })
          t.animate_once(f, "hideRemoveButtonAnimation", function () {
            return f.style.display = ""
          })
          t.animate_once(d, "collapseMoreButtonAnimation", function () {
            d.style.transform = ""
            h = false
            p = false
          })
          a.style.opacity = ""
          o.style.marginLeft = ""
          i.style.opacity = ""
          i.style.left = ""
        }
      })
      this.events.bind_event_with_checks(d, "click", e$comment, function () {
        if (h) {
          d.blur()
        } else {
          d.focus()
        }
      })
      a.innerText = e$comment.get_text()
      this.comments.set(e$comment.id, a)
      if (this.bubble_ && this.bubble_content_) {
        r.appendChild(i)
        r.appendChild(o)
        o.appendChild(a)
        if (u) {
          r.appendChild(u)
        }
        r.appendChild(l)
        r.appendChild(f)
        r.appendChild(d)
        this.bubble_content_.appendChild(r)
        this.bubble_.appendChild(this.bubble_content_)
      }
    }
  }
  e.prototype.animate_once = function (e, t, n) {
    var r = function r() {
      if (e) {
        e.removeEventListener("webkitAnimationEnd", r)
        e.removeEventListener("animationend", r)
        e.classList.remove(t)
        if (n) {
          n()
        }
      }
    }
    e.addEventListener("webkitAnimationEnd", r)
    e.addEventListener("animationend", r)
    e.classList.add(t)
  };
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.events)], e.prototype, "events", undefined);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.UIEvent)], e.prototype, "ui_event_factory", undefined);
  (0, r.__decorate)([(0, o.lazy_inject)(o.BINDING.Msg)], e.prototype, "Msg", undefined)
  return e = (0, r.__decorate)([(0, i.injectable)()], e)
}()
exports.SimplifiedCommentBubble = l
