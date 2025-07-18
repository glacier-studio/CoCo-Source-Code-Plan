"use strict";

import * as r from "../../../1000/93";
import * as i from "../../../1000/134/index";
import * as o from "../../../125/195/index";
var a = function (e) {
  function t(t) {
    var n = e.call(this, t.block) || this;
    n._record_undo = !1;
    n.type = o.BlockEventType.END_DRAG;
    n.block = t.block;
    n._is_outside = t.is_outside;
    n.mouse_position = t.mouse_position;
    n._is_from_flyout = t.is_from_flyout;
    n.redo_stack_before_drag = t.redo_stack_before_drag;
    return n;
  }
  (0, r.__extends)(t, e);
  t.prototype.get_block_xml = function () {
    return this.xml.workspace_element_to_dom(this.block, !0);
  };
  t.prototype.delete_current = function () {
    this.block.dispose();
  };
  t.prototype.cancel_move = function () {
    var e = this._get_event_workspace();
    e.undo();
    e.set_redo_stack(this.redo_stack_before_drag);
  };
  return t = (0, r.__decorate)([(0, i.injectable)()], t);
}(require("./643").BlockEvent);
export { a as EndDragEvent };