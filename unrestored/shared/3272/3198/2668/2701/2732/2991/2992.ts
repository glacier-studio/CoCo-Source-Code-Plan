"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.wrapRegExp = exports.typeof = exports.objectSpread2 = exports.jsx = exports.asyncIterator = void 0;
var r = require("./2706/index");
var i = {
  minVersion: "7.15.9",
  ast: function () {
    return r.default.program.ast('\nexport default function _asyncIterator(iterable) {\n  var method,\n    async,\n    sync,\n    retry = 2;\n  if (typeof Symbol !== "undefined") {\n    async = Symbol.asyncIterator;\n    sync = Symbol.iterator;\n  }\n  while (retry--) {\n    if (async && (method = iterable[async]) != null) {\n      return method.call(iterable);\n    }\n    if (sync && (method = iterable[sync]) != null) {\n      return new AsyncFromSyncIterator(method.call(iterable));\n    }\n    async = "@@asyncIterator";\n    sync = "@@iterator";\n  }\n  throw new TypeError("Object is not async iterable");\n}\nfunction AsyncFromSyncIterator(s) {\n  AsyncFromSyncIterator = function (s) {\n    this.s = s;\n    this.n = s.next;\n  };\n  AsyncFromSyncIterator.prototype = {\n     s: null,\n     n: null,\n    next: function () {\n      return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments));\n    },\n    return: function (value) {\n      var ret = this.s.return;\n      if (ret === undefined) {\n        return Promise.resolve({ value: value, done: true });\n      }\n      return AsyncFromSyncIteratorContinuation(ret.apply(this.s, arguments));\n    },\n    throw: function (value) {\n      var thr = this.s.return;\n      if (thr === undefined) return Promise.reject(value);\n      return AsyncFromSyncIteratorContinuation(thr.apply(this.s, arguments));\n    },\n  };\n  function AsyncFromSyncIteratorContinuation(r) {\n    \n    if (Object(r) !== r) {\n      return Promise.reject(new TypeError(r + " is not an object."));\n    }\n    var done = r.done;\n    return Promise.resolve(r.value).then(function (value) {\n      return { value: value, done: done };\n    });\n  }\n  return new AsyncFromSyncIterator(s);\n}\n');
  }
};
exports.asyncIterator = i;
var a = {
  minVersion: "7.0.0-beta.0",
  ast: function () {
    return r.default.program.ast('\nvar REACT_ELEMENT_TYPE;\nexport default function _createRawReactElement(type, props, key, children) {\n  if (!REACT_ELEMENT_TYPE) {\n    REACT_ELEMENT_TYPE =\n      (typeof Symbol === "function" &&\n        \n        Symbol["for"] &&\n        Symbol["for"]("react.element")) ||\n      0xeac7;\n  }\n  var defaultProps = type && type.defaultProps;\n  var childrenLength = arguments.length - 3;\n  if (!props && childrenLength !== 0) {\n    \n    \n    props = { children: void 0 };\n  }\n  if (childrenLength === 1) {\n    props.children = children;\n  } else if (childrenLength > 1) {\n    var childArray = new Array(childrenLength);\n    for (var i = 0; i < childrenLength; i++) {\n      childArray[i] = arguments[i + 3];\n    }\n    props.children = childArray;\n  }\n  if (props && defaultProps) {\n    for (var propName in defaultProps) {\n      if (props[propName] === void 0) {\n        props[propName] = defaultProps[propName];\n      }\n    }\n  } else if (!props) {\n    props = defaultProps || {};\n  }\n  return {\n    $$typeof: REACT_ELEMENT_TYPE,\n    type: type,\n    key: key === undefined ? null : "" + key,\n    ref: null,\n    props: props,\n    _owner: null,\n  };\n}\n');
  }
};
exports.jsx = a;
var s = {
  minVersion: "7.5.0",
  ast: function () {
    return r.default.program.ast('\nimport defineProperty from "defineProperty";\nfunction ownKeys(object, enumerableOnly) {\n  var keys = Object.keys(object);\n  if (Object.getOwnPropertySymbols) {\n    var symbols = Object.getOwnPropertySymbols(object);\n    if (enumerableOnly) {\n      symbols = symbols.filter(function (sym) {\n        return Object.getOwnPropertyDescriptor(object, sym).enumerable;\n      });\n    }\n    keys.push.apply(keys, symbols);\n  }\n  return keys;\n}\nexport default function _objectSpread2(target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i] != null ? arguments[i] : {};\n    if (i % 2) {\n      ownKeys(Object(source), true).forEach(function (key) {\n        defineProperty(target, key, source[key]);\n      });\n    } else if (Object.getOwnPropertyDescriptors) {\n      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));\n    } else {\n      ownKeys(Object(source)).forEach(function (key) {\n        Object.defineProperty(\n          target,\n          key,\n          Object.getOwnPropertyDescriptor(source, key)\n        );\n      });\n    }\n  }\n  return target;\n}\n');
  }
};
exports.objectSpread2 = s;
var o = {
  minVersion: "7.0.0-beta.0",
  ast: function () {
    return r.default.program.ast('\nexport default function _typeof(obj) {\n  "@babel/helpers - typeof";\n  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {\n    _typeof = function (obj) {\n      return typeof obj;\n    };\n  } else {\n    _typeof = function (obj) {\n      return obj &&\n        typeof Symbol === "function" &&\n        obj.constructor === Symbol &&\n        obj !== Symbol.prototype\n        ? "symbol"\n        : typeof obj;\n    };\n  }\n  return _typeof(obj);\n}\n');
  }
};
exports.typeof = o;
var l = {
  minVersion: "7.2.6",
  ast: function () {
    return r.default.program.ast('\nimport setPrototypeOf from "setPrototypeOf";\nimport inherits from "inherits";\nexport default function _wrapRegExp() {\n  _wrapRegExp = function (re, groups) {\n    return new BabelRegExp(re, undefined, groups);\n  };\n  var _super = RegExp.prototype;\n  var _groups = new WeakMap();\n  function BabelRegExp(re, flags, groups) {\n    var _this = new RegExp(re, flags);\n    \n    _groups.set(_this, groups || _groups.get(re));\n    return setPrototypeOf(_this, BabelRegExp.prototype);\n  }\n  inherits(BabelRegExp, RegExp);\n  BabelRegExp.prototype.exec = function (str) {\n    var result = _super.exec.call(this, str);\n    if (result) result.groups = buildGroups(result, this);\n    return result;\n  };\n  BabelRegExp.prototype[Symbol.replace] = function (str, substitution) {\n    if (typeof substitution === "string") {\n      var groups = _groups.get(this);\n      return _super[Symbol.replace].call(\n        this,\n        str,\n        substitution.replace(/\\$<([^>]+)>/g, function (_, name) {\n          return "$" + groups[name];\n        })\n      );\n    } else if (typeof substitution === "function") {\n      var _this = this;\n      return _super[Symbol.replace].call(this, str, function () {\n        var args = arguments;\n        \n        if (typeof args[args.length - 1] !== "object") {\n          args = [].slice.call(args);\n          args.push(buildGroups(args, _this));\n        }\n        return substitution.apply(this, args);\n      });\n    } else {\n      return _super[Symbol.replace].call(this, str, substitution);\n    }\n  };\n  function buildGroups(result, re) {\n    \n    \n    var g = _groups.get(re);\n    return Object.keys(g).reduce(function (groups, name) {\n      groups[name] = result[g[name]];\n      return groups;\n    }, Object.create(null));\n  }\n  return _wrapRegExp.apply(this, arguments);\n}\n');
  }
};
exports.wrapRegExp = l;