var r = require("./1807/957/index");
module.exports = function (e) {
  var t = r(this, e).delete(e);
  this.size -= t ? 1 : 0;
  return t;
};