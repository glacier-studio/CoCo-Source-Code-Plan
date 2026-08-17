/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2367
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
var r = require(/* 448 */"../../2373/448")
var i = require(/* 582 */"../../582")
var o = require(/* 2368 */"./2368/index")
var a = require(/* 1398 */"./1398/index")
var s = function () {
  function e(e) {
    this._binding = e
  }
  e.prototype.to = function (e) {
    this._binding.type = i.BindingTypeEnum.Instance
    this._binding.implementationType = e
    return new o.BindingInWhenOnSyntax(this._binding)
  }
  e.prototype.toSelf = function () {
    if ("function" !== typeof this._binding.serviceIdentifier) {
      throw new Error("" + r.INVALID_TO_SELF_VALUE)
    }
    var /* [auto-meaningful-name] */this$_binding$serviceIdentifier = this._binding.serviceIdentifier
    return this.to(this$_binding$serviceIdentifier)
  }
  e.prototype.toConstantValue = function (e) {
    this._binding.type = i.BindingTypeEnum.ConstantValue
    this._binding.cache = e
    this._binding.dynamicValue = null
    this._binding.implementationType = null
    return new a.BindingWhenOnSyntax(this._binding)
  }
  e.prototype.toDynamicValue = function (e) {
    this._binding.type = i.BindingTypeEnum.DynamicValue
    this._binding.cache = null
    this._binding.dynamicValue = e
    this._binding.implementationType = null
    return new o.BindingInWhenOnSyntax(this._binding)
  }
  e.prototype.toConstructor = function (e) {
    this._binding.type = i.BindingTypeEnum.Constructor
    this._binding.implementationType = e
    return new a.BindingWhenOnSyntax(this._binding)
  }
  e.prototype.toFactory = function (e) {
    this._binding.type = i.BindingTypeEnum.Factory
    this._binding.factory = e
    return new a.BindingWhenOnSyntax(this._binding)
  }
  e.prototype.toFunction = function (e) {
    if ("function" !== typeof e) {
      throw new Error(r.INVALID_FUNCTION_BINDING)
    }
    var t = this.toConstantValue(e)
    this._binding.type = i.BindingTypeEnum.Function
    return t
  }
  e.prototype.toAutoFactory = function (e) {
    this._binding.type = i.BindingTypeEnum.Factory
    this._binding.factory = function (t) {
      return function () {
        return t.container.get(e)
      }
    }
    return new a.BindingWhenOnSyntax(this._binding)
  }
  e.prototype.toProvider = function (e) {
    this._binding.type = i.BindingTypeEnum.Provider
    this._binding.provider = e
    return new a.BindingWhenOnSyntax(this._binding)
  }
  e.prototype.toService = function (e) {
    this.toDynamicValue(function (t) {
      return t.container.get(e)
    })
  }
  return e
}()
exports.BindingToSyntax = s
