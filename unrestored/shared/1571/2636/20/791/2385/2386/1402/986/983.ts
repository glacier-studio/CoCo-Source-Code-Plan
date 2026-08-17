/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：983
 */

"use strict"

var r
var i = "object" === typeof Reflect ? Reflect : null
var o = i && "function" === typeof i.apply ? i.apply : function (e, t, n) {
  return Function.prototype.apply.call(e, t, n)
}
r = i && "function" === typeof i.ownKeys ? i.ownKeys : Object.getOwnPropertySymbols ? function (e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
} : function (e) {
  return Object.getOwnPropertyNames(e)
}
var a = Number.isNaN || function (e) {
  return e !== e
}
function s() {
  s.init.call(this)
}
module.exports = s
module.exports.once = function (e, t) {
  return new Promise(function (n, r) {
    function i(n) {
      e.removeListener(t, o)
      r(n)
    }
    function o() {
      if ("function" === typeof e.removeListener) {
        e.removeListener("error", i)
      }
      n([].slice.call(arguments))
    }
    g(e, t, o, {
      once: true
    })
    if ("error" !== t) {
      (function (e, t, n) {
        if ("function" === typeof e.on) {
          g(e, "error", t, n)
        }
      })(e, i, {
        once: true
      })
    }
  })
}
s.EventEmitter = s
s.prototype._events = undefined
s.prototype._eventsCount = 0
s.prototype._maxListeners = undefined
var c = 10
function u(e) {
  if ("function" !== typeof e) {
    throw new TypeError("The \"listener\" argument must be of type Function. Received type " + typeof e)
  }
}
function l(e) {
  return undefined === e._maxListeners ? s.defaultMaxListeners : e._maxListeners
}
function f(e, t, n, r) {
  var i
  var o
  var a
  var s
  u(n)
  if (undefined === (o = e._events)) {
    o = e._events = Object.create(null)
    e._eventsCount = 0
  } else {
    if (undefined !== o.newListener) {
      e.emit("newListener", t, n.listener ? n.listener : n)
      o = e._events
    }
    a = o[t]
  }
  if (undefined === a) {
    a = o[t] = n
    ++e._eventsCount
  } else if ("function" === typeof a ? a = o[t] = r ? [n, a] : [a, n] : r ? a.unshift(n) : a.push(n), (i = l(e)) > 0 && a.length > i && !a.warned) {
    a.warned = true
    var c = new Error("Possible EventEmitter memory leak detected. " + a.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit")
    c.name = "MaxListenersExceededWarning"
    c.emitter = e
    c.type = t
    c.count = a.length
    s = c
    if (console && console.warn) {
      console.warn(s)
    }
  }
  return e
}
function d() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn)
    this.fired = true
    return 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
  }
}
function h(e, t, n) {
  var r = {
    fired: false,
    wrapFn: undefined,
    target: e,
    type: t,
    listener: n
  }
  var i = d.bind(r)
  i.listener = n
  r.wrapFn = i
  return i
}
function p(e, t, n) {
  var /* [auto-meaningful-name] */e$_events = e._events
  if (undefined === e$_events) {
    return []
  }
  var i = e$_events[t]
  return undefined === i ? [] : "function" === typeof i ? n ? [i.listener || i] : [i] : n ? function (e) {
    for (var t = new Array(e.length), n = 0; n < t.length; ++n) {
      t[n] = e[n].listener || e[n]
    }
    return t
  }(i) : A(i, i.length)
}
function _(e) {
  var /* [auto-meaningful-name] */this$_events = this._events
  if (undefined !== this$_events) {
    var n = this$_events[e]
    if ("function" === typeof n) {
      return 1
    }
    if (undefined !== n) {
      return n.length
    }
  }
  return 0
}
function A(e, t) {
  for (var n = new Array(t), r = 0; r < t; ++r) {
    n[r] = e[r]
  }
  return n
}
function g(e, t, n, r) {
  if ("function" === typeof e.on) {
    if (r.once) {
      e.once(t, n)
    } else {
      e.on(t, n)
    }
  } else {
    if ("function" !== typeof e.addEventListener) {
      throw new TypeError("The \"emitter\" argument must be of type EventEmitter. Received type " + typeof e)
    }
    e.addEventListener(t, function i(o) {
      if (r.once) {
        e.removeEventListener(t, i)
      }
      n(o)
    })
  }
}
Object.defineProperty(s, "defaultMaxListeners", {
  enumerable: true,
  get: function () {
    return c
  },
  set: function (e) {
    if ("number" !== typeof e || e < 0 || a(e)) {
      throw new RangeError("The value of \"defaultMaxListeners\" is out of range. It must be a non-negative number. Received " + e + ".")
    }
    c = e
  }
})
s.init = function () {
  if (!(undefined !== this._events && this._events !== Object.getPrototypeOf(this)._events)) {
    this._events = Object.create(null)
    this._eventsCount = 0
  }
  this._maxListeners = this._maxListeners || undefined
}
s.prototype.setMaxListeners = function (e) {
  if ("number" !== typeof e || e < 0 || a(e)) {
    throw new RangeError("The value of \"n\" is out of range. It must be a non-negative number. Received " + e + ".")
  }
  this._maxListeners = e
  return this
}
s.prototype.getMaxListeners = function () {
  return l(this)
}
s.prototype.emit = function (e) {
  for (var t = [], n = 1; n < arguments.length; n++) {
    t.push(arguments[n])
  }
  var r = "error" === e
  var /* [auto-meaningful-name] */this$_events = this._events
  if (undefined !== this$_events) {
    r = r && undefined === this$_events.error
  } else if (!r) {
    return false
  }
  if (r) {
    var a
    if (t.length > 0) {
      a = t[0]
    }
    if (a instanceof Error) {
      throw a
    }
    var s = new Error("Unhandled error." + (a ? " (" + a.message + ")" : ""))
    s.context = a
    throw s
  }
  var c = this$_events[e]
  if (undefined === c) {
    return false
  }
  if ("function" === typeof c) {
    o(c, this, t)
  } else {
    var /* [auto-meaningful-name] */c$length = c.length
    var l = A(c, c$length)
    for (n = 0; n < c$length; ++n) {
      o(l[n], this, t)
    }
  }
  return true
}
s.prototype.addListener = function (e, t) {
  return f(this, e, t, false)
}
s.prototype.on = s.prototype.addListener
s.prototype.prependListener = function (e, t) {
  return f(this, e, t, true)
}
s.prototype.once = function (e, t) {
  u(t)
  this.on(e, h(this, e, t))
  return this
}
s.prototype.prependOnceListener = function (e, t) {
  u(t)
  this.prependListener(e, h(this, e, t))
  return this
}
s.prototype.removeListener = function (e, t) {
  var n
  var /* [auto-meaningful-name] */this$_events
  var i
  var o
  var /* [auto-meaningful-name] */nO$listener
  u(t)
  if (undefined === (this$_events = this._events)) {
    return this
  }
  if (undefined === (n = this$_events[e])) {
    return this
  }
  if (n === t || n.listener === t) {
    if (0 === --this._eventsCount) {
      this._events = Object.create(null)
    } else {
      delete this$_events[e]
      if (this$_events.removeListener) {
        this.emit("removeListener", e, n.listener || t)
      }
    }
  } else if ("function" !== typeof n) {
    for (i = -1, o = n.length - 1; o >= 0; o--) {
      if (n[o] === t || n[o].listener === t) {
        nO$listener = n[o].listener
        i = o
        break
      }
    }
    if (i < 0) {
      return this
    }
    if (0 === i) {
      n.shift()
    } else {
      (function (e, t) {
        for (; t + 1 < e.length; t++) {
          e[t] = e[t + 1]
        }
        e.pop()
      })(n, i)
    }
    if (1 === n.length) {
      this$_events[e] = n[0]
    }
    if (undefined !== this$_events.removeListener) {
      this.emit("removeListener", e, nO$listener || t)
    }
  }
  return this
}
s.prototype.off = s.prototype.removeListener
s.prototype.removeAllListeners = function (e) {
  var t
  var /* [auto-meaningful-name] */this$_events
  var r
  if (undefined === (this$_events = this._events)) {
    return this
  }
  if (undefined === this$_events.removeListener) {
    if (0 === arguments.length) {
      this._events = Object.create(null)
      this._eventsCount = 0
    } else {
      if (undefined !== this$_events[e]) {
        if (0 === --this._eventsCount) {
          this._events = Object.create(null)
        } else {
          delete this$_events[e]
        }
      }
    }
    return this
  }
  if (0 === arguments.length) {
    var i
    var o = Object.keys(this$_events)
    for (r = 0; r < o.length; ++r) {
      if ("removeListener" !== (i = o[r])) {
        this.removeAllListeners(i)
      }
    }
    this.removeAllListeners("removeListener")
    this._events = Object.create(null)
    this._eventsCount = 0
    return this
  }
  if ("function" === typeof (t = this$_events[e])) {
    this.removeListener(e, t)
  } else if (undefined !== t) {
    for (r = t.length - 1; r >= 0; r--) {
      this.removeListener(e, t[r])
    }
  }
  return this
}
s.prototype.listeners = function (e) {
  return p(this, e, true)
}
s.prototype.rawListeners = function (e) {
  return p(this, e, false)
}
s.listenerCount = function (e, t) {
  return "function" === typeof e.listenerCount ? e.listenerCount(t) : _.call(e, t)
}
s.prototype.listenerCount = _
s.prototype.eventNames = function () {
  return this._eventsCount > 0 ? r(this._events) : []
}
