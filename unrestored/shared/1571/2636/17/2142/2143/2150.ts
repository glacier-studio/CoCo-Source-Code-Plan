/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2150
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.DeleteEvent = undefined
var r = require(/* 93 */"tslib")
var i = require(/* 134 */"inversify")
var o = require(/* 195 */"../../../123/195/index")
var a = require(/* 125 */"../../../../../../../src/shared/packages/@crc/blink/src/core/di")
var s = (0, r.__importStar)(require(/* 499 */"../../499/index"))
var c = function (e) {
  function t(t) {
    var n = e.call(this, t.block) || this
    n.type = o.BlockEventType.DELETE
    n.ids = []
    n.is_shadow = false
    var /* [auto-meaningful-name] */t$block = t.block
    if (s.base.is_block_svg(t$block) && t$block.get_parent()) {
      console.error("Connected blocks cannot be deleted.")
      return n
    }
    var i = t$block.get_workspace()
    if (undefined != i && i.rendered) {
      n.old_xml = n.xml.workspace_element_to_dom_with_xy(t$block)
    } else {
      n.old_xml = n.xml.workspace_element_to_dom(t$block)
    }
    n.ids = [t$block.id]
    if (s.base.is_block_svg(t$block)) {
      n.ids = t$block.get_descendant_ids()
      n.is_shadow = t$block.is_shadow()
    }
    return n
  }
  (0, r.__extends)(t, e)
  t.prototype.run = function (e) {
    var t = this._get_event_workspace()
    if (e) {
      for (var n = 0; n < this.ids.length; n++) {
        var r = this.ids[n]
        if (o = t.get_element_from_db(r)) {
          o.dispose(false, false)
        } else {
          if (!(r !== this._block_id || this.is_shadow)) {
            console.warn("Can't delete non-existent block: " + r)
          }
        }
      }
    } else {
      var i = this.old_xml.getAttribute("id")
      if (i) {
        var o
        if (undefined != (o = t.get_element_from_db(i))) {
          o.dispose(false, false)
        }
        var a = s.dom.create_dom("xml")
        a.appendChild(this.old_xml)
        this.xml.dom_to_workspace(a, t)
      }
    }
  }
  t.prototype.serialize = function () {
    return {
      id: this._block_id,
      all_ids: this.ids,
      group: this._group
    }
  };
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.xml)], t.prototype, "xml", undefined);
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.events)], t.prototype, "events", undefined);
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.Blink)], t.prototype, "Blink", undefined)
  return t = (0, r.__decorate)([(0, i.injectable)()], t)
}(require(/* 647 */"./647").BlockEvent)
exports.DeleteEvent = c
