"use strict";

import * as r from "../../../0/index";
var i = (require("../../../50/index"), require("../100"));
import * as o from "../../../19";
import * as a from "../../../54";
import * as s from "./1042";
import * as c from "../701/index";
import * as u from "./2580";
var l = Object(c.a)(function (e) {
  return {
    day: {
      width: 36,
      height: 36,
      fontSize: e.typography.caption.fontSize,
      margin: "0 2px",
      color: e.palette.text.primary,
      fontWeight: e.typography.fontWeightMedium,
      padding: 0
    },
    hidden: {
      opacity: 0,
      pointerEvents: "none"
    },
    current: {
      color: e.palette.primary.main,
      fontWeight: 600
    },
    daySelected: {
      color: e.palette.primary.contrastText,
      backgroundColor: e.palette.primary.main,
      fontWeight: e.typography.fontWeightMedium,
      "&:hover": {
        backgroundColor: e.palette.primary.main
      }
    },
    dayDisabled: {
      pointerEvents: "none",
      color: e.palette.text.hint
    }
  };
}, {
  name: "MuiPickersDay"
});
var f = function (e) {
  var t = e.children;
  var n = e.disabled;
  var c = e.hidden;
  var f = e.current;
  var h = e.selected;
  var d = Object(a.a)(e, ["children", "disabled", "hidden", "current", "selected"]);
  var p = l();
  var _ = Object(i.a)(p.day, c && p.hidden, f && p.current, h && p.daySelected, n && p.dayDisabled);
  return Object(r.createElement)(u.a, Object(o.a)({
    className: _,
    tabIndex: c || n ? -1 : 0
  }, d), Object(r.createElement)(s.a, {
    variant: "body2",
    color: "inherit"
  }, t));
};
f.displayName = "Day";
f.defaultProps = {
  disabled: !1,
  hidden: !1,
  current: !1,
  selected: !1
};
export { f as a };