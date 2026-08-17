/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2321
 */

"use strict"

var r = require(/* 500 */"../500")
var i = require(/* 399 */"../399/index")
var o = require(/* 573 */"../../../1058/1393/573")
var a = require(/* 2322 */"./2322")
var s = require(/* 2323 */"./2323")
function c() {
  return 1 === arguments.length ? Object.assign({}, arguments.length <= 0 ? undefined : arguments[0]) : "string" === typeof (arguments.length <= 1 ? undefined : arguments[1]) ? {
    node: arguments.length <= 0 ? undefined : arguments[0],
    message: arguments.length <= 1 ? undefined : arguments[1],
    data: arguments.length <= 2 ? undefined : arguments[2],
    fix: arguments.length <= 3 ? undefined : arguments[3]
  } : {
    node: arguments.length <= 0 ? undefined : arguments[0],
    loc: arguments.length <= 1 ? undefined : arguments[1],
    message: arguments.length <= 2 ? undefined : arguments[2],
    data: arguments.length <= 3 ? undefined : arguments[3],
    fix: arguments.length <= 4 ? undefined : arguments[4]
  }
}
function u(e) {
  if (e.node) {
    o("object" === typeof e.node, "Node must be an object")
  } else {
    o(e.loc, "Node must be provided when reporting error if location is not provided")
  }
}
function l(e) {
  return e.loc ? e.loc.start ? e.loc : {
    start: e.loc,
    end: null
  } : e.node.loc
}
function f(e, t) {
  return e.range[0] - t.range[0] || e.range[1] - t.range[1]
}
function d(e, t) {
  if ("function" !== typeof e.fix) {
    return null
  }
  var n = e.fix(a)
  return n && Symbol.iterator in n ? function (e, t) {
    if (0 === e.length) {
      return null
    }
    if (1 === e.length) {
      return e[0]
    }
    e.sort(f)
    var n
    var /* [auto-meaningful-name] */t$text = t.text
    var a = e[0].range[0]
    var s = e[e.length - 1].range[1]
    var c = ""
    var /* [auto-meaningful-name] */Number$MIN_SAFE_INTEGER = Number.MIN_SAFE_INTEGER
    var l = i(e)
    try {
      for (l.s(); !(n = l.n()).done;) {
        var /* [auto-meaningful-name] */n$value = n.value
        o(n$value.range[0] >= Number$MIN_SAFE_INTEGER, "Fix objects must not be overlapped in a report.")
        if (n$value.range[0] >= 0) {
          c += t$text.slice(Math.max(0, a, Number$MIN_SAFE_INTEGER), n$value.range[0])
        }
        c += n$value.text
        Number$MIN_SAFE_INTEGER = n$value.range[1]
      }
    } catch (h) {
      l.e(h)
    } finally {
      l.f()
    }
    return {
      range: [a, s],
      text: c += t$text.slice(Math.max(0, a, Number$MIN_SAFE_INTEGER), s)
    }
  }(Array.from(n), t) : n
}
function h(e, t, n) {
  return e.suggest && Array.isArray(e.suggest) ? e.suggest.map(function (e) {
    var i = e.desc || n[e.messageId]
    return r(r({}, e), {}, {
      desc: s(i, e.data),
      fix: d(e, t)
    })
  }) : []
}
function p(e) {
  var t = {
    ruleId: e.ruleId,
    severity: e.severity,
    message: e.message,
    line: e.loc.start.line,
    column: e.loc.start.column + 1,
    nodeType: e.node && e.node.type || null
  }
  if (e.messageId) {
    t.messageId = e.messageId
  }
  if (e.loc.end) {
    t.endLine = e.loc.end.line
    t.endColumn = e.loc.end.column + 1
  }
  if (e.fix) {
    t.fix = e.fix
  }
  if (e.suggestions && e.suggestions.length > 0) {
    t.suggestions = e.suggestions
  }
  return t
}
function _(e, t) {
  if (e && Array.isArray(e)) {
    e.forEach(function (e) {
      if (e.messageId) {
        var /* [auto-meaningful-name] */e$messageId = e.messageId
        if (!t) {
          throw new TypeError("context.report() called with a suggest option with a messageId '".concat(e$messageId, "', but no messages were present in the rule metadata."))
        }
        if (!t[e$messageId]) {
          throw new TypeError("context.report() called with a suggest option with a messageId '".concat(e$messageId, "' which is not present in the 'messages' config: ").concat(JSON.stringify(t, null, 2)))
        }
        if (e.desc) {
          throw new TypeError("context.report() called with a suggest option that defines both a 'messageId' and an 'desc'. Please only pass one.")
        }
      } else if (!e.desc) {
        throw new TypeError("context.report() called with a suggest option that doesn't have either a `desc` or `messageId`")
      }
      if ("function" !== typeof e.fix) {
        throw new TypeError("context.report() called with a suggest option without a fix function. See: ".concat(e))
      }
    })
  }
}
module.exports = function (e) {
  return function () {
    var t
    var n = c.apply(undefined, arguments)
    var /* [auto-meaningful-name] */e$messageIds = e.messageIds
    u(n)
    if (n.messageId) {
      if (!e$messageIds) {
        throw new TypeError("context.report() called with a messageId, but no messages were present in the rule metadata.")
      }
      var /* [auto-meaningful-name] */n$messageId = n.messageId
      if (n.message) {
        throw new TypeError("context.report() called with a message and a messageId. Please only pass one.")
      }
      if (!e$messageIds || !Object.prototype.hasOwnProperty.call(e$messageIds, n$messageId)) {
        throw new TypeError("context.report() called with a messageId of '".concat(n$messageId, "' which is not present in the 'messages' config: ").concat(JSON.stringify(e$messageIds, null, 2)))
      }
      t = e$messageIds[n$messageId]
    } else {
      if (!n.message) {
        throw new TypeError("Missing `message` property in report() call; add a message that describes the linting problem.")
      }
      t = n.message
    }
    _(n.suggest, e$messageIds)
    return p({
      ruleId: e.ruleId,
      severity: e.severity,
      node: n.node,
      message: s(t, n.data),
      messageId: n.messageId,
      loc: l(n),
      fix: e.disableFixes ? null : d(n, e.sourceCode),
      suggestions: e.disableFixes ? [] : h(n, e.sourceCode, e$messageIds)
    })
  }
}
