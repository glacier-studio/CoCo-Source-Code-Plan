"use strict";

import * as r from "../../../1000/93";
import * as i from "../../../1000/134/index";
import * as o from "../../../125/195/index";
var a = function (e) {
  function t(t) {
    var n = e.call(this) || this;
    n.type = o.BlockEventType.CONTEXT_MENU_OPTION;
    n._record_undo = !1;
    n._workspace_id = t.workspace_id;
    n._option_name = t.option_name;
    n._source = t.source;
    return n;
  }
  (0, r.__extends)(t, e);
  return t = (0, r.__decorate)([(0, i.injectable)()], t);
}(require("./839").BaseEvent);
export { a as ContextMenuOptionEvent };