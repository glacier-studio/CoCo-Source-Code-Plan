"use strict";

export { g as d };
export { _ as c };
export { v as b };
export { E as a };
export { O as e };
var r = require("../1/index");
var o = function __importDefault(module) {
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
var i = require("../7");
var a = require("../17/index");
var s = require("./724");
var c = require("./723");
var l = require("../38/index");
var u = require("../2/index");
var d = require("../15/index");
var p = require("../9");
var f = require("../141/index");
var h = require("./262");
var m = require("../26/index");
function g() {
  Object.keys(Object(m.h)()).forEach(function (e) {
    _(e);
  });
}
function _(e) {
  a.Blink.mainWorkspace.register_toolbox_category_callback(e, function () {
    var t = m.g.getToolbox();
    var n = E();
    return t && n ? b(e, n, !1) : [];
  });
  a.Blink.mainWorkspace.register_toolbox_category_callback("ANY_" + e, function () {
    return m.g.getToolbox() ? b(e, "", !0) : [];
  });
}
function v(e) {
  var t = l.d.dispatch;
  Object(c.register_procedure_blocks)(a.Blink, e, function () {
    var n = Object(i.a)(o.a.mark(function n(r) {
      var i;
      var a;
      var s;
      return o.a.wrap(function (n) {
        for (;;) {
          switch (n.prev = n.next) {
            case 0:
              if (i = e(), a = i.get_procedure_by_def(r)) {
                n.next = 4;
                break;
              }
              return n.abrupt("return");
            case 4:
              s = a.name;
              return n.abrupt("return", new Promise(function (e) {
                t(Object(u.lj)({
                  title: "procedureDialogTitle",
                  defaultValue: s,
                  placeholder: "procedureDialogPlaceholder",
                  maxLength: 20,
                  validator: function (e) {
                    if ("" === e) {
                      return "emptyProcedureName";
                    }
                    var t = i.get_occupied_procedure_names();
                    t.splice(t.indexOf(s), 1);
                    if (t.includes(e)) {
                      return "procedureNameExists";
                    }
                    if (e[0].match(/[0-9_]/)) {
                      return "invalidVariableFirstChar";
                    }
                    if (!Object(d.j)(e)) {
                      return "invalidVariableName";
                    }
                    return ["\u51fd\u6570", "\u51fd\u6578", "function"].includes(e) ? "preservedProcedureName" : void 0;
                  },
                  confirmCallback: function (t) {
                    if (t !== s) {
                      e(t);
                    }
                    e(void 0);
                  },
                  cancelCallback: function () {
                    return e(void 0);
                  }
                }));
              }));
            case 6:
            case "end":
              return n.stop();
          }
        }
      }, n);
    }));
    return function (e) {
      return n.apply(this, arguments);
    };
  }(), function () {
    var n = Object(i.a)(o.a.mark(function n(r) {
      var i;
      var a;
      return o.a.wrap(function (n) {
        for (;;) {
          switch (n.prev = n.next) {
            case 0:
              if (i = e(), a = i.get_procedure_by_def(r)) {
                n.next = 4;
                break;
              }
              throw Error("Trying to add param to undefined procedure");
            case 4:
              return n.abrupt("return", new Promise(function (e) {
                t(Object(u.lj)({
                  title: "parameterDialogTitle",
                  placeholder: "parameterDialogPlaceholder",
                  maxLength: 20,
                  validator: function (e) {
                    return "" === e ? "emptyParameterName" : a.params.find(function (t) {
                      return t.param_name === e;
                    }) ? "parameterExists" : e[0].match(/[0-9_]/) ? "invalidVariableFirstChar" : Object(d.j)(e) ? void 0 : "invalidVariableName";
                  },
                  confirmCallback: function (t) {
                    return e({
                      param_name: t,
                      default_value: void 0
                    });
                  },
                  cancelCallback: function () {
                    return e(void 0);
                  }
                }));
              }));
            case 5:
            case "end":
              return n.stop();
          }
        }
      }, n);
    }));
    return function (e) {
      return n.apply(this, arguments);
    };
  }());
  a.Blink.mainWorkspace.register_toolbox_category_callback("PROCEDURE", function () {
    return e().get_all_procedures_xml();
  });
  Object(s.register_default_procedure_events)(a.Blink.mainWorkspace, e);
}
function b(e, t, n) {
  var r = function (e, t, n) {
    return Object(p.Cb)(e, t, n);
  }(e, t, n);
  var o = "<xml>";
  r.forEach(function (e) {
    o += e;
  });
  o += "</xml>";
  return Array.from(a.Blink.xml.text_to_dom(o).children);
}
var y = "";
function E() {
  return y;
}
function O(e) {
  y = e;
  var t = l.d.getState();
  var n = t.project.screens.get(t.project.currentScreenIndex);
  var r = Object(p.Fb)(e) || Object(h.d)(e);
  Object(f.a)("BlockCategoryClick", {
    isCooperation: !!t.oTState.collWorkId,
    screenId: (null === n || void 0 === n ? void 0 : n.id) || "",
    screenName: (null === n || void 0 === n ? void 0 : n.title) || "",
    blockCategory: r
  });
}
export default E;