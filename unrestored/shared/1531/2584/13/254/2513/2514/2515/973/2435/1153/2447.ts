var r = require("./2450/977/index");
module.exports = function (e) {
  var t = r(this, e).delete(e);
  this.size -= t ? 1 : 0;
  return t;
};