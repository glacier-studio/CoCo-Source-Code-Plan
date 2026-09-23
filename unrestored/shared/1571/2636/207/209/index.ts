/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：209
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.ProcedureManager = exports.register_procedure_json_generator = exports.register_procedure_generator = exports.PROCEDURE_BLOCK_FIELD_NAMES = exports.PROCEDURE_BLOCK_INPUT_NAMES = exports.PROCEDURE_BLOCK_TYPES = undefined
var r = require(/* 93 */"tslib")
var i = require(/* 125 */"../../../../../../src/shared/packages/@crc/blink/src/core/di")
var o = require(/* 387 */"../734/387")
var a = require(/* 732 */"../../../../../../src/shared/packages/@crc/blink/src/procedure/blocks")
var s = require(/* 173 */"../../1058/173")
var c = require(/* 733 */"../../228/733/index")
var u = require(/* 1346 */"../../228/733/1346")
var l = require(/* 734 */"../734/index")
var f = require(/* 762 */"../../1058/762");
(0, r.__exportStar)(require(/* 2146 */"./2146"), exports)
var d = require(/* 173 */"../../1058/173")
Object.defineProperty(exports, "PROCEDURE_BLOCK_TYPES", {
  enumerable: true,
  get: function () {
    return d.PROCEDURE_BLOCK_TYPES
  }
})
Object.defineProperty(exports, "PROCEDURE_BLOCK_INPUT_NAMES", {
  enumerable: true,
  get: function () {
    return d.PROCEDURE_BLOCK_INPUT_NAMES
  }
})
Object.defineProperty(exports, "PROCEDURE_BLOCK_FIELD_NAMES", {
  enumerable: true,
  get: function () {
    return d.PROCEDURE_BLOCK_FIELD_NAMES
  }
})
var h = require(/* 2147 */"./2147")
Object.defineProperty(exports, "register_procedure_generator", {
  enumerable: true,
  get: function () {
    return h.register_procedure_generator
  }
})
var p = require(/* 2148 */"./2148")
Object.defineProperty(exports, "register_procedure_json_generator", {
  enumerable: true,
  get: function () {
    return p.register_procedure_json_generator
  }
})
var _ = function () {
  function e(e, t, n) {
    var r = this
    this.caller_disable_callback = e
    this.param_update_callback = t
    this.rename_procedure_callback = n
    this.procedures = {}
    this.callers = {}
    this.get_all_procedures_xml = function () {
      var e = []
      var t = document.createElement("block")
      t.setAttribute("type", s.PROCEDURE_BLOCK_TYPES.DEF)
      e.push(t)
      var n = document.createElement("block")
      n.setAttribute("type", s.PROCEDURE_BLOCK_TYPES.RETURN)
      e.push(n)
      var i = document.createElement("sep")
      i.setAttribute("gap", "30")
      e.push(i)
      Object.keys(r.procedures).filter(function (e) {
        return !r.procedures[e].disabled
      }).sort(function (e, t) {
        return r.procedures[e].created_timestamp - r.procedures[t].created_timestamp
      }).forEach(function (t) {
        var n = r.procedures[t]
        if (!n.disabled) {
          var /* [auto-meaningful-name] */n$name = n.name
          var /* [auto-meaningful-name] */n$params = n.params
          var a = document.createElement("block")
          a.setAttribute("type", s.PROCEDURE_BLOCK_TYPES.CALL_NORETURN)
          var c = document.createElement("mutation")
          c.setAttribute("name", n$name)
          a.appendChild(c)
          var u = document.createElement("field")
          u.setAttribute("name", "NAME")
          u.textContent = n$name
          a.appendChild(u)
          n$params.forEach(function (e) {
            var t = document.createElement("procedures_2_parameter_shadow")
            t.setAttribute("name", e.param_name)
            if (undefined !== e.default_value) {
              t.setAttribute("value", e.default_value)
            } else {
              t.setAttribute("value", "0")
            }
            c.appendChild(t)
          })
          e.push(a)
          if (n.return_count > 0) {
            var l = a.cloneNode(true)
            l.setAttribute("type", s.PROCEDURE_BLOCK_TYPES.CALL_RETURN)
            e.push(l)
          }
        }
      })
      return e
    }
  }
  e.prototype.register_procedure_blocks = function (e, t, n) {
    (0, a.register_procedure_blocks)(e, this, t, n)
  }
  e.prototype.register_default_procedure_events = function (e) {
    (0, c.register_default_procedure_events)(e, this)
  }
  e.prototype.load_from_xml = function (e, t) {
    return (0, u.load_from_xml)(this, e, t)
  }
  e.prototype.delete_from_xml = function (e) {
    return (0, u.delete_from_xml)(this, e)
  }
  e.prototype.load_from_json = function (e, t) {
    return (0, l.load_from_json)(this, e, t)
  }
  e.prototype.delete_from_json = function (e) {
    return (0, l.delete_from_json)(this, e)
  }
  e.prototype.update_callers_disabled = function (e, t) {
    var n = this
    var r = (0, i.get_instance)().get(i.BINDING.events)
    var a = r.get_group()
    r.set_group(false)
    r.disable()
    var s = this.get_procedure_by_def(t);
    (0, o.assert)(s)
    var /* [auto-meaningful-name] */s$disabled = s.disabled
    var u = s.disabled || 0 === s.return_count
    s.callers_id.forEach(function (t) {
      var r = n.callers[t];
      (0, o.assert)(r)
      var i = e.get_block_by_id(t)
      if (i) {
        i.set_disabled("call_return" === r.call_type ? u : s$disabled)
      }
    })
    if (this.caller_disable_callback) {
      this.caller_disable_callback(s.name, s$disabled, u)
    }
    r.enable()
    r.set_group(a)
  }
  e.prototype.update_params = function (e, t, n, r) {
    var a = (0, i.get_instance)().get(i.BINDING.events)
    var s = a.get_group()
    a.set_group(false)
    a.disable()
    var c = this.procedures[t];
    (0, o.assert)(c, "Trying to update param on inexistent procedure")
    c.callers_id.forEach(function (t) {
      var /* [auto-meaningful-name] */a$addMutation
      var /* [auto-meaningful-name] */a$removeMutation
      var a = e.get_block_by_id(t)
      if (a) {
        if ("increase" === n) {
          if (!(null === (a$addMutation = a.addMutation) || undefined === a$addMutation)) {
            a$addMutation.call(a, r.default_value)
          }
        } else {
          if ("decrease" === n) {
            if (!(null === (a$removeMutation = a.removeMutation) || undefined === a$removeMutation)) {
              a$removeMutation.call(a)
            }
          }
        }
      }
    })
    if (this.param_update_callback) {
      this.param_update_callback(n, t, r)
    }
    a.enable()
    a.set_group(s)
  }
  e.prototype.update_procedure_name = function (e, t, n) {
    var r = (0, i.get_instance)().get(i.BINDING.events)
    var a = r.get_group()
    r.set_group(false)
    var s = r.is_record_undo()
    var c = this.procedures[n];
    (0, o.assert)(c, "Rename render should be called after rename data")
    var u = []
    c.callers_id.forEach(function (t) {
      var i = e.get_block_by_id(t)
      if (i) {
        var a = i.get_field("NAME");
        (0, o.assert)(a)
        r.set_record_undo(false)
        a.set_value(n)
        var c = i.get_collapsed_surround_parent()
        if (c) {
          i.update_collapsed(true)
          if (c === i || u.includes(c.id)) {
            return
          }
          u.push(c.id)
          c.update_collapsed(true)
        }
        r.set_record_undo(s)
      }
    })
    if (this.rename_procedure_callback) {
      this.rename_procedure_callback(t, n)
    }
    r.set_group(a)
  }
  e.prototype.add_procedure = function (e) {
    (0, o.assert)(undefined == this.procedures[e], "Duplicated procedure name")
    var t = {
      def_id: "",
      disabled: true,
      name: e,
      params: [],
      callers_id: [],
      return_count: 0,
      valid: false,
      base_name: e,
      created_timestamp: Date.now()
    }
    this.procedures[e] = t
    return t
  }
  e.prototype.add_procedure_def = function (e, t) {
    var n = this.procedures[e]
    if (n && n.def_id && n.def_id !== t) {
      var r = e
      e = (0, f.get_legal_procedure_name)(e + "%1", this.get_occupied_procedure_names())
      console.warn("Procedure " + r + " def exists. Renaming block [" + t + "] to " + e)
      n = this.add_procedure(e)
    }
    if (!n) {
      n = this.add_procedure(e)
    }
    n.def_id = t
    n.disabled = false
    if (!n.valid) {
      this.soft_recover(n)
    }
    return n
  }
  e.prototype.add_caller = function (e, t, n) {
    var r = this.get_procedure_by_name(e) || this.get_procedure_by_def(e)
    if (!r) {
      r = this.add_procedure(e)
    }
    if (!r.valid) {
      this.soft_recover(r)
    }
    if (this.callers[t]) {
      this.callers[t].disabled = false
      return this.callers[t]
    }
    var i = {
      id: t,
      proc_name: r.name,
      call_type: n,
      disabled: false
    }
    this.callers[t] = i
    r.callers_id.push(t)
    return i
  }
  e.prototype.add_param = function (e, t, n) {
    var r = this.procedures[e]
    if (!r) {
      r = this.add_procedure(e)
    }
    var i = r.params.find(function (e) {
      return e.param_name === t
    });
    (0, o.assert)(!i, "Param existed")
    r.params.push({
      param_name: t,
      default_value: n
    })
    return t
  }
  e.prototype.load_from_workspace = function (e) {
    var t = this
    e.blockDB_.forEach(function (e) {
      if (!(e.is_insertion_marker() || e.is_in_flyout)) {
        if (e.type !== s.PROCEDURE_BLOCK_TYPES.DEF) {
          if (!(e.type !== s.PROCEDURE_BLOCK_TYPES.CALL_NORETURN && e.type !== s.PROCEDURE_BLOCK_TYPES.CALL_RETURN)) {
            t.load_caller_from_block(e)
          }
        } else {
          t.load_def_from_block(e)
        }
      }
    })
  }
  e.prototype.load_def_from_block = function (e) {
    if (e.type === s.PROCEDURE_BLOCK_TYPES.DEF) {
      var t = e.get_field_value("NAME");
      (0, o.assert)(t)
      var n = this.add_procedure_def(t, e.id)
      n.params = e.inputList.filter(function (e) {
        return e.name.startsWith(s.PROCEDURE_BLOCK_INPUT_NAMES.PARAM_PREFIX)
      }).map(function (e) {
        var t = e.connection && e.connection.targetBlock()
        return {
          param_name: (null === t || undefined === t ? undefined : t.get_field_value(s.PROCEDURE_BLOCK_FIELD_NAMES.PARAM_NAME)) || "",
          default_value: (null === t || undefined === t ? undefined : t.get_field_value(s.PROCEDURE_BLOCK_FIELD_NAMES.PARAM_DEFAULT_VALUE)) || undefined
        }
      })
      n.return_count = e.get_descendants().filter(function (e) {
        return e.type === s.PROCEDURE_BLOCK_TYPES.RETURN
      }).length
      return n
    }
  }
  e.prototype.load_caller_from_block = function (e) {
    if (e.type === s.PROCEDURE_BLOCK_TYPES.CALL_RETURN || e.type === s.PROCEDURE_BLOCK_TYPES.CALL_NORETURN) {
      var t = e.get_field_value("NAME");
      (0, o.assert)(t)
      return this.add_caller(t, e.id, e.type === s.PROCEDURE_BLOCK_TYPES.CALL_RETURN ? "call_return" : "call")
    }
  }
  e.prototype.delete_procedure_def = function (e) {
    var t = this
    var n = this.get_procedure_by_def(e)
    if (n) {
      n.disabled = true
      if (n.callers_id.every(function (e) {
        return t.callers[e].disabled
      })) {
        this.soft_delete(n)
      }
      return n
    }
  }
  e.prototype.soft_delete = function (e) {
    var /* [auto-meaningful-name] */e$name = e.name
    this.rename_procedure(e$name, e.def_id)
    e.valid = false
    e.base_name = e$name
  }
  e.prototype.soft_recover = function (e) {
    if (e.base_name !== e.name) {
      this.rename_procedure(e.name, (0, f.get_legal_procedure_name)(e.base_name, this.get_occupied_procedure_names()))
    }
    e.valid = true
    e.base_name = e.name
  }
  e.prototype.delete_param = function (e, t) {
    var n = this.procedures[e];
    (0, o.assert)(n, "Target procedure does not exist. ")
    var r = n.params.findIndex(function (e) {
      return e.param_name === t
    });
    (0, o.assert)(r > -1, "Target procedure does not contain param " + t + ". ")
    return n.params.splice(r, 1)[0].param_name
  }
  e.prototype.delete_caller = function (e) {
    var t = this
    var n = this.callers[e]
    if (n) {
      var r = this.procedures[n.proc_name];
      (0, o.assert)(r)
      n.disabled = true
      if (r.disabled && r.callers_id.every(function (e) {
        return t.callers[e].disabled
      })) {
        this.soft_delete(r)
      }
      return n
    }
  }
  e.prototype.clear = function () {
    this.procedures = {}
    this.callers = {}
  }
  e.prototype.rename_procedure = function (e, t) {
    var n = this
    var r = this.procedures[e];
    (0, o.assert)(r)
    r.name = t
    r.base_name = t
    this.procedures[t] = r
    delete this.procedures[e]
    r.callers_id.forEach(function (e) {
      n.callers[e].proc_name = t
    })
    return t
  }
  e.prototype.change_return_count = function (e, t) {
    var n = this.procedures[e];
    (0, o.assert)(n)
    n.return_count += t
  }
  e.prototype.set_param_default_value = function (e, t, n) {
    var r = this.procedures[e].params.find(function (e) {
      return e.param_name === t
    });
    (0, o.assert)(r)
    r.default_value = n
  }
  e.prototype.get_procedures = function () {
    return this.procedures
  }
  e.prototype.get_procedure_by_name = function (e) {
    return this.procedures[e]
  }
  e.prototype.get_procedure_by_def = function (e) {
    for (var t = this.get_all_procedure_names(), /* [auto-meaningful-name] */t$length = t.length, r = 0; r < t$length; r++) {
      var i = this.procedures[t[r]]
      if (i.def_id === e) {
        return i
      }
    }
  }
  e.prototype.get_procedure_name_by_def = function (e) {
    var t = this.get_procedure_by_def(e);
    (0, o.assert)(t)
    return t.name
  }
  e.prototype.get_procedure_param_names = function (e) {
    var t = this.procedures[e];
    (0, o.assert)(t)
    return t.params.map(function (e) {
      return e.param_name
    })
  }
  e.prototype.get_all_procedure_names = function () {
    return Object.keys(this.procedures)
  }
  e.prototype.get_occupied_procedure_names = function () {
    var e = this
    return Object.keys(this.procedures).filter(function (t) {
      return e.procedures[t].valid
    })
  }
  e.prototype.get_procedure_by_caller_id = function (e) {
    var t = this.callers[e]
    if (t) {
      return this.procedures[t.proc_name]
    }
  }
  e.prototype.get_callers = function () {
    return this.callers
  }
  return e
}()
exports.ProcedureManager = _
