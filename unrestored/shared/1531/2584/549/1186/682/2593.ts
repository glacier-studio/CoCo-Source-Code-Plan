"use strict";

export { a };
var r = require("../../../0/index");
var i = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default;
  } : function () {
    return module;
  };
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  });
  return defaultExport;
}(r);
var o = i.a.createContext(null);
function a() {
  return i.a.useContext(o);
}
export default a;