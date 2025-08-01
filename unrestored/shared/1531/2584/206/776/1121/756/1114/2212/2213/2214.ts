!function () {
  "use strict";

  function t(e) {
    if (null == e) {
      return !1;
    }
    switch (e.type) {
      case "BlockStatement":
      case "BreakStatement":
      case "ContinueStatement":
      case "DebuggerStatement":
      case "DoWhileStatement":
      case "EmptyStatement":
      case "ExpressionStatement":
      case "ForInStatement":
      case "ForStatement":
      case "IfStatement":
      case "LabeledStatement":
      case "ReturnStatement":
      case "SwitchStatement":
      case "ThrowStatement":
      case "TryStatement":
      case "VariableDeclaration":
      case "WhileStatement":
      case "WithStatement":
        return !0;
    }
    return !1;
  }
  function n(e) {
    switch (e.type) {
      case "IfStatement":
        return null != e.alternate ? e.alternate : e.consequent;
      case "LabeledStatement":
      case "ForStatement":
      case "ForInStatement":
      case "WhileStatement":
      case "WithStatement":
        return e.body;
    }
    return null;
  }
  module.exports = {
    isExpression: function (e) {
      if (null == e) {
        return !1;
      }
      switch (e.type) {
        case "ArrayExpression":
        case "AssignmentExpression":
        case "BinaryExpression":
        case "CallExpression":
        case "ConditionalExpression":
        case "FunctionExpression":
        case "Identifier":
        case "Literal":
        case "LogicalExpression":
        case "MemberExpression":
        case "NewExpression":
        case "ObjectExpression":
        case "SequenceExpression":
        case "ThisExpression":
        case "UnaryExpression":
        case "UpdateExpression":
          return !0;
      }
      return !1;
    },
    isStatement: t,
    isIterationStatement: function (e) {
      if (null == e) {
        return !1;
      }
      switch (e.type) {
        case "DoWhileStatement":
        case "ForInStatement":
        case "ForStatement":
        case "WhileStatement":
          return !0;
      }
      return !1;
    },
    isSourceElement: function (e) {
      return t(e) || null != e && "FunctionDeclaration" === e.type;
    },
    isProblematicIfStatement: function (e) {
      var t;
      if ("IfStatement" !== e.type) {
        return !1;
      }
      if (null == e.alternate) {
        return !1;
      }
      t = e.consequent;
      do {
        if ("IfStatement" === t.type && null == t.alternate) {
          return !0;
        }
        t = n(t);
      } while (t);
      return !1;
    },
    trailingStatement: n
  };
}();