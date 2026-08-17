/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2303
 */

"use strict"

var r = require(/* 180 */"../180")
var i = require(/* 204 */"../204")
var o = require(/* 573 */"../../../1058/1393/573")
var /* [auto-meaningful-name] */require_979_$$_979$breakableTypePattern = require(/* 979 */"../979").breakableTypePattern
var s = require(/* 2304 */"./2304/index")
var c = require(/* 1141 */"./1141")
var u = require(/* 1376 */"./1376")
var l = require(/* 1375 */"./1375")
function f(e) {
  return Boolean(e.test)
}
function d(e) {
  return "&&" === e || "||" === e
}
function h(e) {
  return "LabeledStatement" === e.parent.type ? e.parent.label.name : null
}
function p(e) {
  if ("Literal" === e.type) {
    return Boolean(e.value)
  }
}
function _(e, t) {
  var n
  var r
  var i
  var /* [auto-meaningful-name] */e$codePath = e.codePath
  var a = s.getState(e$codePath)
  var /* [auto-meaningful-name] */a$currentSegments = a.currentSegments
  var /* [auto-meaningful-name] */a$headSegments = a.headSegments
  var d = Math.max(a$currentSegments.length, a$headSegments.length)
  for (n = 0; n < d; ++n) {
    if ((r = a$currentSegments[n]) !== (i = a$headSegments[n]) && r) {
      l.dump("onCodePathSegmentEnd ".concat(r.id))
      if (r.reachable) {
        e.emitter.emit("onCodePathSegmentEnd", r, t)
      }
    }
  }
  for (a.currentSegments = a$headSegments, n = 0; n < d; ++n) {
    if ((r = a$currentSegments[n]) !== (i = a$headSegments[n]) && i) {
      l.dump("onCodePathSegmentStart ".concat(i.id))
      c.markUsed(i)
      if (i.reachable) {
        e.emitter.emit("onCodePathSegmentStart", i, t)
      }
    }
  }
}
function A(e, t) {
  var /* [auto-meaningful-name] */e$codePath = e.codePath
  var r = e$codePath && s.getState(e$codePath)
  var /* [auto-meaningful-name] */t$parent = t.parent
  switch (t.type) {
    case "Program":
    case "FunctionDeclaration":
    case "FunctionExpression":
    case "ArrowFunctionExpression":
      if (e$codePath) {
        _(e, t)
        l.dumpState(t, r, false)
      }
      e$codePath = e.codePath = new s(e.idGenerator.next(), e$codePath, e.onLooped)
      r = s.getState(e$codePath)
      l.dump("onCodePathStart ".concat(e$codePath.id))
      e.emitter.emit("onCodePathStart", e$codePath, t)
      break
    case "LogicalExpression":
      if (d(t.operator)) {
        r.pushChoiceContext(t.operator, function (e) {
          var /* [auto-meaningful-name] */e$parent = e.parent
          switch (e$parent.type) {
            case "ConditionalExpression":
            case "IfStatement":
            case "WhileStatement":
            case "DoWhileStatement":
            case "ForStatement":
              return e$parent.test === e
            case "LogicalExpression":
              return d(e$parent.operator)
            default:
              return false
          }
        }(t))
      }
      break
    case "ConditionalExpression":
    case "IfStatement":
      r.pushChoiceContext("test", false)
      break
    case "SwitchStatement":
      r.pushSwitchContext(t.cases.some(f), h(t))
      break
    case "TryStatement":
      r.pushTryContext(Boolean(t.finalizer))
      break
    case "SwitchCase":
      if (t$parent.discriminant !== t && t$parent.cases[0] !== t) {
        r.forkPath()
      }
      break
    case "WhileStatement":
    case "DoWhileStatement":
    case "ForStatement":
    case "ForInStatement":
    case "ForOfStatement":
      r.pushLoopContext(t.type, h(t))
      break
    case "LabeledStatement":
      if (!require_979_$$_979$breakableTypePattern.test(t.body.type)) {
        r.pushBreakContext(false, t.label.name)
      }
  }
  _(e, t)
  l.dumpState(t, r, false)
}
function g(e, t) {
  switch (t.type) {
    case "Program":
    case "FunctionDeclaration":
    case "FunctionExpression":
    case "ArrowFunctionExpression":
      var /* [auto-meaningful-name] */e$codePath = e.codePath
      s.getState(e$codePath).makeFinal();
      (function (e, t) {
        for (var n = s.getState(e.codePath), /* [auto-meaningful-name] */n$currentSegments = n.currentSegments, i = 0; i < n$currentSegments.length; ++i) {
          var o = n$currentSegments[i]
          l.dump("onCodePathSegmentEnd ".concat(o.id))
          if (o.reachable) {
            e.emitter.emit("onCodePathSegmentEnd", o, t)
          }
        }
        n.currentSegments = []
      })(e, t)
      l.dump("onCodePathEnd ".concat(e$codePath.id))
      e.emitter.emit("onCodePathEnd", e$codePath, t)
      l.dumpDot(e$codePath)
      if (e$codePath = e.codePath = e.codePath.upper) {
        l.dumpState(t, s.getState(e$codePath), true)
      }
  }
}
var v = function () {
  function e(t) {
    r(this, e)
    this.original = t
    this.emitter = t.emitter
    this.codePath = null
    this.idGenerator = new u("s")
    this.currentNode = null
    this.onLooped = this.onLooped.bind(this)
  }
  i(e, [
    {
      key: "enterNode",
      value: function (e) {
        this.currentNode = e
        if (e.parent) {
          (function (e, t) {
            var /* [auto-meaningful-name] */e$codePath = e.codePath
            var r = s.getState(e$codePath)
            var /* [auto-meaningful-name] */t$parent = t.parent
            switch (t$parent.type) {
              case "LogicalExpression":
                if (t$parent.right === t && d(t$parent.operator)) {
                  r.makeLogicalRight()
                }
                break
              case "ConditionalExpression":
              case "IfStatement":
                if (t$parent.consequent === t) {
                  r.makeIfConsequent()
                } else {
                  if (t$parent.alternate === t) {
                    r.makeIfAlternate()
                  }
                }
                break
              case "SwitchCase":
                if (t$parent.consequent[0] === t) {
                  r.makeSwitchCaseBody(false, !t$parent.test)
                }
                break
              case "TryStatement":
                if (t$parent.handler === t) {
                  r.makeCatchBlock()
                } else {
                  if (t$parent.finalizer === t) {
                    r.makeFinallyBlock()
                  }
                }
                break
              case "WhileStatement":
                if (t$parent.test === t) {
                  r.makeWhileTest(p(t))
                } else {
                  o(t$parent.body === t)
                  r.makeWhileBody()
                }
                break
              case "DoWhileStatement":
                if (t$parent.body === t) {
                  r.makeDoWhileBody()
                } else {
                  o(t$parent.test === t)
                  r.makeDoWhileTest(p(t))
                }
                break
              case "ForStatement":
                if (t$parent.test === t) {
                  r.makeForTest(p(t))
                } else {
                  if (t$parent.update === t) {
                    r.makeForUpdate()
                  } else {
                    if (t$parent.body === t) {
                      r.makeForBody()
                    }
                  }
                }
                break
              case "ForInStatement":
              case "ForOfStatement":
                if (t$parent.left === t) {
                  r.makeForInOfLeft()
                } else {
                  if (t$parent.right === t) {
                    r.makeForInOfRight()
                  } else {
                    o(t$parent.body === t)
                    r.makeForInOfBody()
                  }
                }
                break
              case "AssignmentPattern":
                if (t$parent.right === t) {
                  r.pushForkContext()
                  r.forkBypassPath()
                  r.forkPath()
                }
            }
          })(this, e)
        }
        A(this, e)
        this.original.enterNode(e)
        this.currentNode = null
      }
    }, {
      key: "leaveNode",
      value: function (e) {
        this.currentNode = e;
        (function (e, t) {
          var /* [auto-meaningful-name] */e$codePath = e.codePath
          var r = s.getState(e$codePath)
          var i = false
          switch (t.type) {
            case "IfStatement":
            case "ConditionalExpression":
              r.popChoiceContext()
              break
            case "LogicalExpression":
              if (d(t.operator)) {
                r.popChoiceContext()
              }
              break
            case "SwitchStatement":
              r.popSwitchContext()
              break
            case "SwitchCase":
              if (0 === t.consequent.length) {
                r.makeSwitchCaseBody(true, !t.test)
              }
              if (r.forkContext.reachable) {
                i = true
              }
              break
            case "TryStatement":
              r.popTryContext()
              break
            case "BreakStatement":
              _(e, t)
              r.makeBreak(t.label && t.label.name)
              i = true
              break
            case "ContinueStatement":
              _(e, t)
              r.makeContinue(t.label && t.label.name)
              i = true
              break
            case "ReturnStatement":
              _(e, t)
              r.makeReturn()
              i = true
              break
            case "ThrowStatement":
              _(e, t)
              r.makeThrow()
              i = true
              break
            case "Identifier":
              if (function (e) {
                var /* [auto-meaningful-name] */e$parent = e.parent
                switch (e$parent.type) {
                  case "LabeledStatement":
                  case "BreakStatement":
                  case "ContinueStatement":
                  case "ArrayPattern":
                  case "RestElement":
                  case "ImportSpecifier":
                  case "ImportDefaultSpecifier":
                  case "ImportNamespaceSpecifier":
                  case "CatchClause":
                    return false
                  case "FunctionDeclaration":
                  case "FunctionExpression":
                  case "ArrowFunctionExpression":
                  case "ClassDeclaration":
                  case "ClassExpression":
                  case "VariableDeclarator":
                    return e$parent.id !== e
                  case "Property":
                  case "MethodDefinition":
                    return e$parent.key !== e || e$parent.computed || e$parent.shorthand
                  case "AssignmentPattern":
                    return e$parent.key !== e
                  default:
                    return true
                }
              }(t)) {
                r.makeFirstThrowablePathInTryBlock()
                i = true
              }
              break
            case "CallExpression":
            case "ImportExpression":
            case "MemberExpression":
            case "NewExpression":
              r.makeFirstThrowablePathInTryBlock()
              break
            case "WhileStatement":
            case "DoWhileStatement":
            case "ForStatement":
            case "ForInStatement":
            case "ForOfStatement":
              r.popLoopContext()
              break
            case "AssignmentPattern":
              r.popForkContext()
              break
            case "LabeledStatement":
              if (!require_979_$$_979$breakableTypePattern.test(t.body.type)) {
                r.popBreakContext()
              }
          }
          if (!i) {
            _(e, t)
          }
          l.dumpState(t, r, true)
        })(this, e)
        this.original.leaveNode(e)
        g(this, e)
        this.currentNode = null
      }
    }, {
      key: "onLooped",
      value: function (e, t) {
        if (e.reachable && t.reachable) {
          l.dump("onCodePathSegmentLoop ".concat(e.id, " -> ").concat(t.id))
          this.emitter.emit("onCodePathSegmentLoop", e, t, this.currentNode)
        }
      }
    }
  ])
  return e
}()
module.exports = v
