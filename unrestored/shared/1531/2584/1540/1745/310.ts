var r = require("../1541/749");
module.exports = function (e) {
  if (r(e)) {
    throw TypeError("Cannot convert a Symbol value to a string");
  }
  return String(e);
};