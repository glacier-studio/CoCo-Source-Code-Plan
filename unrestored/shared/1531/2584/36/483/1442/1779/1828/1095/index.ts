var r = require("./1275");
module.exports = function (e) {
  var t = new e.constructor(e.byteLength);
  new r(t).set(new r(e));
  return t;
};