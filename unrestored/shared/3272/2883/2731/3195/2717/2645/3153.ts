"use strict";

var r = require("../../../806/index");
var a = require("./2654");
var i = require("./2823");
var o = (0, a.defineAliasedType)("Miscellaneous");
o("Noop", {
  visitor: []
});
o("Placeholder", {
  visitor: [],
  builder: ["expectedNode", "name"],
  fields: {
    name: {
      validate: (0, a.assertNodeType)("Identifier")
    },
    expectedNode: {
      validate: a.assertOneOf.apply(void 0, r(i.PLACEHOLDERS))
    }
  }
});
o("V8IntrinsicIdentifier", {
  builder: ["name"],
  fields: {
    name: {
      validate: (0, a.assertValueType)("string")
    }
  }
});