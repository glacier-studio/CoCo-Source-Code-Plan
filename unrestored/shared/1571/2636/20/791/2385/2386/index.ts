/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2386
 */

"use strict"

var r = require(/* 1402 */"./1402/index")
var i = require(/* 1410 */"./1410")
var /* [auto-meaningful-name] */r$Readable$destroy = r.Readable.destroy
module.exports = r.Readable
module.exports._uint8ArrayToBuffer = r._uint8ArrayToBuffer
module.exports._isUint8Array = r._isUint8Array
module.exports.isDisturbed = r.isDisturbed
module.exports.isErrored = r.isErrored
module.exports.isReadable = r.isReadable
module.exports.Readable = r.Readable
module.exports.Writable = r.Writable
module.exports.Duplex = r.Duplex
module.exports.Transform = r.Transform
module.exports.PassThrough = r.PassThrough
module.exports.addAbortSignal = r.addAbortSignal
module.exports.finished = r.finished
module.exports.destroy = r.destroy
module.exports.destroy = r$Readable$destroy
module.exports.pipeline = r.pipeline
module.exports.compose = r.compose
Object.defineProperty(r, "promises", {
  configurable: true,
  enumerable: true,
  get: function () {
    return i
  }
})
module.exports.Stream = r.Stream
module.exports.default = module.exports
