/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2144
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.CreateEvent = undefined
var r = require(/* 93 */"tslib")
var i = require(/* 134 */"inversify")
var o = require(/* 195 */"../../../123/195/index")
var a = (0, r.__importStar)(require(/* 499 */"../../499/index"))
var s = require(/* 125 */"../../../../../../../src/shared/packages/@crc/blink/src/core/di")
var c = function (e) {
  function t(t) {
    var n = e.call(this, t.block) || this
    n.type = o.BlockEventType.CREATE
    n.ids = []
    n.is_shadow = false
    n.source = t.source || "other"
    var /* [auto-meaningful-name] */t$block = t.block
    var i = t$block.get_workspace()
    if (undefined != i && i.rendered) {
      n._xml = n.xml.workspace_element_to_dom_with_xy(t$block)
    } else {
      n._xml = n.xml.workspace_element_to_dom(t$block)
    }
    if (a.base.is_block_svg(t$block)) {
      n.ids = t$block.get_descendant_ids()
      n.is_shadow = t$block.is_shadow()
      n._element_json = n.json.block_to_json(t$block)
    } else {
      if (!a.base.is_workspace_comment(t$block)) {
        throw new Error("Trying to fire create event for unsupported workspace element.")
      }
      n.ids = [t$block.id]
      n._element_json = {
        blocks: {},
        comments: {},
        connections: {}
      }
      n._element_json.comments[t$block.id] = n.json.comment_to_json(t$block)
    }
    return n
  }
  (0, r.__extends)(t, e)
  t.prototype.run = function (e) {
    var t = this._get_event_workspace()
    if (e) {
      var n = a.dom.create_dom("xml")
      n.appendChild(this._xml)
      return void this.xml.dom_to_workspace(n, t)
    }
    for (var r = 0; r < this.ids.length; r++) {
      var i = this.ids[r]
      var o = t.get_element_from_db(i)
      if (o) {
        o.dispose(false, false)
      } else {
        if (i == this._block_id) {
          this.is_shadow
        }
      }
    }
  }
  t.prototype.get_element_json = function () {
    return this._element_json
  }
  t.prototype.serialize = function () {
    if (this._element_json) {
      return {
        group: this._group,
        blocks: this._element_json.blocks,
        comments: this._element_json.comments,
        connections: this._element_json.connections
      }
    }
  };
  (0, r.__decorate)([(0, s.lazy_inject)(s.BINDING.events)], t.prototype, "events", undefined);
  (0, r.__decorate)([(0, s.lazy_inject)(s.BINDING.xml)], t.prototype, "xml", undefined)
  return t = (0, r.__decorate)([(0, i.injectable)()], t)
}(require(/* 647 */"./647").BlockEvent)
exports.CreateEvent = c
