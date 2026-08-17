/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2389
 */

"use strict"

var r = require(/* 500 */"../../../../../../207/787/500")
var i = require(/* 1 */"regenerator-runtime")
var o = require(/* 180 */"../../../../../../207/787/180")
var a = require(/* 204 */"../../../../../../207/787/204")
var s = require(/* 311 */"../311")
var /* [auto-meaningful-name] */s$StringPrototypeSlice = s.StringPrototypeSlice
var /* [auto-meaningful-name] */s$SymbolIterator = s.SymbolIterator
var /* [auto-meaningful-name] */s$TypedArrayPrototypeSet = s.TypedArrayPrototypeSet
var /* [auto-meaningful-name] */s$Uint8Array = s.Uint8Array
var /* [auto-meaningful-name] */require_333_$$_333_index$Buffer = require(/* 333 */"../333/index").Buffer
var /* [auto-meaningful-name] */require_427_$$_427_index$inspect = require(/* 427 */"../427/index").inspect
module.exports = function () {
  function e() {
    o(this, e)
    this.head = null
    this.tail = null
    this.length = 0
  }
  a(e, [
    {
      key: "push",
      value: function (e) {
        var t = {
          data: e,
          next: null
        }
        if (this.length > 0) {
          this.tail.next = t
        } else {
          this.head = t
        }
        this.tail = t
        ++this.length
      }
    }, {
      key: "unshift",
      value: function (e) {
        var t = {
          data: e,
          next: this.head
        }
        if (0 === this.length) {
          this.tail = t
        }
        this.head = t
        ++this.length
      }
    }, {
      key: "shift",
      value: function () {
        if (0 !== this.length) {
          var /* [auto-meaningful-name] */this$head$data = this.head.data
          if (1 === this.length) {
            this.head = this.tail = null
          } else {
            this.head = this.head.next
          }
          --this.length
          return this$head$data
        }
      }
    }, {
      key: "clear",
      value: function () {
        this.head = this.tail = null
        this.length = 0
      }
    }, {
      key: "join",
      value: function (e) {
        if (0 === this.length) {
          return ""
        }
        for (var /* [auto-meaningful-name] */this$head = this.head, n = "" + this$head.data; null !== (this$head = this$head.next);) {
          n += e + this$head.data
        }
        return n
      }
    }, {
      key: "concat",
      value: function (e) {
        if (0 === this.length) {
          return require_333_$$_333_index$Buffer.alloc(0)
        }
        for (var t = require_333_$$_333_index$Buffer.allocUnsafe(e >>> 0), /* [auto-meaningful-name] */this$head = this.head, r = 0; this$head;) {
          s$TypedArrayPrototypeSet(t, this$head.data, r)
          r += this$head.data.length
          this$head = this$head.next
        }
        return t
      }
    }, {
      key: "consume",
      value: function (e, t) {
        var /* [auto-meaningful-name] */this$head$data = this.head.data
        if (e < this$head$data.length) {
          var r = this$head$data.slice(0, e)
          this.head.data = this$head$data.slice(e)
          return r
        }
        return e === this$head$data.length ? this.shift() : t ? this._getString(e) : this._getBuffer(e)
      }
    }, {
      key: "first",
      value: function () {
        return this.head.data
      }
    }, {
      key: s$SymbolIterator,
      value: i.mark(function e() {
        var t
        return i.wrap(function (e) {
          for (;;) {
            switch (e.prev = e.next) {
              case 0:
                t = this.head
              case 1:
                if (!t) {
                  e.next = 7
                  break
                }
                e.next = 4
                return t.data
              case 4:
                t = t.next
                e.next = 1
                break
              case 7:
              case "end":
                return e.stop()
            }
          }
        }, e, this)
      })
    }, {
      key: "_getString",
      value: function (e) {
        var t = ""
        var /* [auto-meaningful-name] */this$head = this.head
        var r = 0
        do {
          var /* [auto-meaningful-name] */this$head$data = this$head.data
          if (!(e > this$head$data.length)) {
            if (e === this$head$data.length) {
              t += this$head$data
              ++r
              if (this$head.next) {
                this.head = this$head.next
              } else {
                this.head = this.tail = null
              }
            } else {
              t += s$StringPrototypeSlice(this$head$data, 0, e)
              this.head = this$head
              this$head.data = s$StringPrototypeSlice(this$head$data, e)
            }
            break
          }
          t += this$head$data
          e -= this$head$data.length
          ++r
        } while (null !== (this$head = this$head.next))
        this.length -= r
        return t
      }
    }, {
      key: "_getBuffer",
      value: function (e) {
        var t = require_333_$$_333_index$Buffer.allocUnsafe(e)
        var n = e
        var /* [auto-meaningful-name] */this$head = this.head
        var i = 0
        do {
          var /* [auto-meaningful-name] */this$head$data = this$head.data
          if (!(e > this$head$data.length)) {
            if (e === this$head$data.length) {
              s$TypedArrayPrototypeSet(t, this$head$data, n - e)
              ++i
              if (this$head.next) {
                this.head = this$head.next
              } else {
                this.head = this.tail = null
              }
            } else {
              s$TypedArrayPrototypeSet(t, new s$Uint8Array(this$head$data.buffer, this$head$data.byteOffset, e), n - e)
              this.head = this$head
              this$head.data = this$head$data.slice(e)
            }
            break
          }
          s$TypedArrayPrototypeSet(t, this$head$data, n - e)
          e -= this$head$data.length
          ++i
        } while (null !== (this$head = this$head.next))
        this.length -= i
        return t
      }
    }, {
      key: Symbol.for("nodejs.util.inspect.custom"),
      value: function (e, t) {
        return require_427_$$_427_index$inspect(this, r(r({}, t), {}, {
          depth: 0,
          customInspect: false
        }))
      }
    }
  ])
  return e
}()
