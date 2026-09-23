/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2166
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.Blink = undefined
var r = require(/* 93 */"tslib")
var i = require(/* 134 */"inversify")
var o = require(/* 1349 */"../../../../../../../../unrestored/shared/1571/2636/1205/1349")
var a = require(/* 1350 */"../../../../../../../../unrestored/shared/1571/2636/17/2142/2181/1350")
var s = require(/* 2167 */"../../../../../../../../unrestored/shared/1571/2636/17/2142/2166/2167/index")
var c = require(/* 644 */"../di/container")
var u = require(/* 125 */"../di")
var l = function () {
  function e() {
    this.Blocks = Object.create(null)
    this.blocks_xml = {}
    this.version = require(/* 1352 */"../../../package.json").version
    this.inject = s.Inject.bind(this)
    Object.assign(this.Msg, a.zh_hans);
    (0, o.init_shadows)(this)
  }
  Object.defineProperty(e.prototype, "mainWorkspace", {
    get: function () {
      return this.workspace_db.current
    },
    set: function (e) {
      this.workspace_db.current = e
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "di_container", {
    get: function () {
      return (0, c.get_instance)()
    },
    enumerable: false,
    configurable: true
  })
  e.prototype.define_blocks_with_json_array = function (e) {
    for (var t = 0; t < e.length; t++) {
      var n = e[t]
      if (n) {
        var /* [auto-meaningful-name] */n$type = n.type
        if (n$type) {
          if (this.Blocks[n$type]) {
            console.warn("Block definition #" + t + " in JSON array overwrites prior definition of \"" + n$type + "\".")
          }
          this.Blocks[n$type] = {
            init: function (e) {
              return function () {
                this.jsonInit(e)
              }
            }(n)
          }
        } else {
          console.warn("Block definition #" + t + " in JSON array is missing a type attribute. Skipping.")
        }
      } else {
        console.warn("Block definition #" + t + " in JSON array not exist. Skipping.")
      }
    }
  }
  e.prototype.define_block_with_object = function (e, t) {
    if (this.Blocks[e]) {
      console.warn("Block definition overwrites prior definition of \"" + e + "\".")
    }
    this.Blocks[e] = t
  };
  (0, r.__decorate)([(0, u.lazy_inject)(u.BINDING.context_menu)], e.prototype, "context_menu", undefined);
  (0, r.__decorate)([(0, u.lazy_inject)(u.BINDING.events)], e.prototype, "events", undefined);
  (0, r.__decorate)([(0, u.lazy_inject)(u.BINDING.extensions)], e.prototype, "extensions", undefined);
  (0, r.__decorate)([(0, u.lazy_inject)(u.BINDING.Msg)], e.prototype, "Msg", undefined);
  (0, r.__decorate)([(0, u.lazy_inject)(u.BINDING.registry)], e.prototype, "registry", undefined);
  (0, r.__decorate)([(0, u.lazy_inject)(u.BINDING.runtime_data)], e.prototype, "runtime_data", undefined);
  (0, r.__decorate)([(0, u.lazy_inject)(u.BINDING.theme)], e.prototype, "theme", undefined);
  (0, r.__decorate)([(0, u.lazy_inject)(u.BINDING.tooltip)], e.prototype, "tooltip", undefined);
  (0, r.__decorate)([(0, u.lazy_inject)(u.BINDING.widget_div)], e.prototype, "widget_div", undefined);
  (0, r.__decorate)([(0, u.lazy_inject)(u.BINDING.workspace_db)], e.prototype, "workspace_db", undefined);
  (0, r.__decorate)([(0, u.lazy_inject)(u.BINDING.xml)], e.prototype, "xml", undefined);
  (0, r.__decorate)([(0, u.lazy_inject)(u.BINDING.json)], e.prototype, "json", undefined);
  (0, r.__decorate)([(0, u.lazy_inject)(u.BINDING.utils)], e.prototype, "utils", undefined)
  return e = (0, r.__decorate)([(0, i.injectable)()], e)
}()
exports.Blink = l
