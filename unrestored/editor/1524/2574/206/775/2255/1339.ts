"use strict";

import * as r from "../../../../../3262/3188/2658/220";
import * as i from "../../../../../3262/3188/2658/230";
var o = function () {
  function e(t) {
    r(this, e);
    this.prefix = String(t);
    this.n = 0;
  }
  i(e, [{
    key: "next",
    value: function () {
      this.n = 1 + this.n | 0;
      if (this.n < 0) {
        this.n = 1;
      }
      return this.prefix + this.n;
    }
  }]);
  return e;
}();
module.exports = o;