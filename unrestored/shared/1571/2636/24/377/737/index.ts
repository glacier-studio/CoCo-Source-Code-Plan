/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：737
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.ProcedurePlugin = undefined
var r = require(/* 93 */"tslib")
var i = (0, r.__importStar)(require(/* 536 */"../../../17/536"))
var o = require(/* 173 */"../../../1058/173")
var a = require(/* 644 */"../../../../../../../src/shared/packages/@crc/blink/src/core/di/container")
var s = require(/* 646 */"../../../../../../../src/shared/packages/@crc/blink/src/core/di/di_symbols")
var c = require(/* 387 */"../../../207/734/387")
var u = (0, r.__importStar)(require(/* 1155 */"./1155"))
var l = (0, r.__importStar)(require(/* 1154 */"./1154"))
var f = function (e) {
  function t() {
    return null !== e && e.apply(this, arguments) || this
  }
  (0, r.__extends)(t, e)
  t.prototype.before_handle_event_group = function (e) {
    for (var t = new Map(), n = 0; n < e.length;) {
      var r = e[n]
      if (undefined !== r) {
        if (r.type !== i.BlockEventType.CREATE) {
          if (r.type === i.BlockEventType.CHANGE) {
            if ("procedure_rename" !== r.element && "field" !== r.element) {
              n++
              continue
            }
            u = r.get_block_id()
            var a = t.get(u)
            if (undefined !== a) {
              var s = r.get_new_value()
              var c = e[a].get_element_json()
              if ("string" === typeof s) {
                c.blocks[u].fields[o.PROCEDURE_BLOCK_FIELD_NAMES.PROCEDURE_NAME] = s
              }
              e.splice(n, 1)
              continue
            }
          }
          n++
        } else {
          var u = r.get_block_id()
          var l = r.get_element_json()
          if (l.blocks[u]) {
            var /* [auto-meaningful-name] */l$blocksU$type = l.blocks[u].type
            if (!(l$blocksU$type !== o.PROCEDURE_BLOCK_TYPES.DEF && l$blocksU$type !== o.PROCEDURE_BLOCK_TYPES.CALL_RETURN && l$blocksU$type !== o.PROCEDURE_BLOCK_TYPES.CALL_NORETURN)) {
              t.set(r.get_block_id(), n)
            }
          }
          n++
        }
      }
    }
  }
  t.prototype.analyze_op_and_update = function (e, t, n) {
    var r = this
    this.procedure_manager = n
    this.ws_json = t
    var i = u.decompose_and_sort_op(e)
    if (i) {
      var o = new Map()
      var a = new Map()
      var s = new Map()
      var c = []
      var f = []
      var d = new Map()
      i.pick_ops.forEach(function (e) {
        var t = u.analyze_path("pick", e.path)
        if (undefined !== t) {
          var /* [auto-meaningful-name] */t$event_type = t.event_type
          var /* [auto-meaningful-name] */t$normalized_path = t.normalized_path
          switch (t$event_type) {
            case l.EventType.DISCONNECT:
              c.push(t$normalized_path)
              break
            case l.EventType.DELETE_BLOCK:
              var i = o.get(t$normalized_path.target_id)
              if (undefined === i) {
                o.set(t$normalized_path.target_id, -1)
              } else {
                o.set(t$normalized_path.target_id, i - 1)
              }
              a.set(t$normalized_path.target_id, t$normalized_path)
              break
            default:
              return
          }
        }
      })
      i.drop_ops.forEach(function (e) {
        var t = u.analyze_path("drop", e.path)
        if (undefined !== t) {
          var /* [auto-meaningful-name] */t$event_type = t.event_type
          var /* [auto-meaningful-name] */t$normalized_path = t.normalized_path
          switch (t$event_type) {
            case l.EventType.CREATE_BLOCK:
              var i = o.get(t$normalized_path.target_id)
              if (undefined === i) {
                o.set(t$normalized_path.target_id, 1)
              } else {
                o.set(t$normalized_path.target_id, i + 1)
              }
              s.set(t$normalized_path.target_id, t$normalized_path)
              break
            case l.EventType.CONNECT:
              f.push(t$normalized_path)
              break
            case l.EventType.EDIT_BLOCK_FIELD:
              var /* [auto-meaningful-name] */e$operation$i = e.operation.i
              if ("string" !== typeof e$operation$i) {
                break
              }
              d.set(t$normalized_path, e$operation$i)
              break
            default:
              return
          }
        }
      })
      o.forEach(function (e, t) {
        switch (e) {
          case 1:
            var n = s.get(t)
            if (n) {
              r.handle_create(n)
            }
            break
          case -1:
            var i = a.get(t)
            if (i) {
              r.handle_delete(i)
            }
            break
          case 0:
            var o = s.get(t)
            if (o) {
              r.handle_mutate(o)
            }
        }
      })
      d.forEach(function (e, t) {
        r.handle_rename(t, e)
      })
      c.forEach(function (e) {
        r.handle_disconnect(e)
      })
      f.forEach(function (e) {
        r.handle_connect(e)
      })
    }
  }
  t.prototype.handle_create = function (e) {
    var /* [auto-meaningful-name] */e$target_id = e.target_id
    var n = this.ws_json.blocks[e$target_id]
    if (n.type === o.PROCEDURE_BLOCK_TYPES.DEF) {
      var r = n.fields[o.PROCEDURE_BLOCK_FIELD_NAMES.PROCEDURE_NAME];
      (0, c.assert)(r)
      var i = this.procedure_manager.get_procedure_by_def(e$target_id)
      if (i) {
        if (i.name !== r) {
          this.procedure_manager.rename_procedure(i.name, r)
        }
        i.disabled = false
        i.valid = true
        i.base_name = i.name
      } else {
        i = this.procedure_manager.add_procedure_def(r, n.id)
      }
      this.reload_params(i, e$target_id)
    }
    if (n.type === o.PROCEDURE_BLOCK_TYPES.CALL_RETURN || n.type === o.PROCEDURE_BLOCK_TYPES.CALL_NORETURN) {
      var a = n.fields[o.PROCEDURE_BLOCK_FIELD_NAMES.PROCEDURE_NAME];
      (0, c.assert)(a)
      this.procedure_manager.add_caller(a, n.id, n.type === o.PROCEDURE_BLOCK_TYPES.CALL_RETURN ? "call_return" : "call")
    }
  }
  t.prototype.handle_delete = function (e) {
    var /* [auto-meaningful-name] */e$target_id = e.target_id
    if (this.procedure_manager.get_procedure_by_def(e$target_id)) {
      this.procedure_manager.delete_procedure_def(e$target_id)
    } else {
      if (this.procedure_manager.get_procedure_by_caller_id(e$target_id)) {
        this.procedure_manager.delete_caller(e$target_id)
      }
    }
  }
  t.prototype.handle_connect = function (e) {
    if (l.is_path_3(e)) {
      for (var /* [auto-meaningful-name] */e$target_id = e.target_id, n = this.ws_json.blocks[e$target_id]; n.parent_id;) {
        n = this.ws_json.blocks[n.parent_id]
      }
      if (n.type === o.PROCEDURE_BLOCK_TYPES.DEF) {
        this.reload_return_count(n.id)
      }
    }
  }
  t.prototype.handle_disconnect = function (e) {
    if (l.is_path_3(e)) {
      var /* [auto-meaningful-name] */e$property = e.property
      var /* [auto-meaningful-name] */e$target_id = e.target_id
      var r = this.json.get_block_data_by_id(this.ws_json, e$property)
      if (r) {
        var /* [auto-meaningful-name] */Object$keysR$blocks$filterFunctionEReturnR$blocksE$typeO$PROCEDURE_BLOCK_TYPES$RETURNUndefinedR$blocksE$shadows$VALUE$length = Object.keys(r.blocks).filter(function (e) {
          return r.blocks[e].type === o.PROCEDURE_BLOCK_TYPES.RETURN && undefined !== r.blocks[e].shadows.VALUE
        }).length
        if (!(Object$keysR$blocks$filterFunctionEReturnR$blocksE$typeO$PROCEDURE_BLOCK_TYPES$RETURNUndefinedR$blocksE$shadows$VALUE$length < 1)) {
          for (var a = this.ws_json.blocks[e$target_id]; a.parent_id;) {
            a = this.ws_json.blocks[a.parent_id]
          }
          if (a.type === o.PROCEDURE_BLOCK_TYPES.DEF) {
            var s = this.procedure_manager.get_procedure_by_def(a.id);
            (0, c.assert)(s)
            this.procedure_manager.change_return_count(s.name, -1 * Object$keysR$blocks$filterFunctionEReturnR$blocksE$typeO$PROCEDURE_BLOCK_TYPES$RETURNUndefinedR$blocksE$shadows$VALUE$length)
          }
        }
      }
    }
  }
  t.prototype.handle_mutate = function (e) {
    var /* [auto-meaningful-name] */e$target_id = e.target_id
    if (this.ws_json.blocks[e$target_id].type === o.PROCEDURE_BLOCK_TYPES.DEF) {
      var n = this.procedure_manager.get_procedure_by_def(e$target_id);
      (0, c.assert)(n)
      this.reload_params(n, e$target_id)
    }
  }
  t.prototype.handle_rename = function (e, t) {
    var /* [auto-meaningful-name] */e$target_id = e.target_id
    if (this.ws_json.blocks[e$target_id].type === o.PROCEDURE_BLOCK_TYPES.DEF) {
      var r = this.procedure_manager.get_procedure_by_def(e$target_id);
      (0, c.assert)(r)
      if (r.name !== t) {
        this.procedure_manager.rename_procedure(r.name, t)
      }
    }
  }
  t.prototype.reload_params = function (e, t) {
    var n = this
    var r = this.ws_json.connections[t]
    var i = Object.keys(r)
    var a = []
    i.forEach(function (e) {
      var t = r[e]
      if ("input" === t.type && t.input_name.startsWith(o.PROCEDURE_BLOCK_INPUT_NAMES.PARAM_PREFIX)) {
        var i = n.ws_json.blocks[e]
        var s = i.fields[o.PROCEDURE_BLOCK_FIELD_NAMES.PARAM_NAME]
        var c = i.fields[o.PROCEDURE_BLOCK_FIELD_NAMES.PARAM_DEFAULT_VALUE].slice(1)
        a.push({
          param_name: s,
          default_value: c || undefined
        })
      }
    })
    e.params = a
  }
  t.prototype.reload_return_count = function (e) {
    var t = this.json.get_block_data_by_id(this.ws_json, e)
    if (t) {
      var /* [auto-meaningful-name] */Object$keysT$blocks$filterFunctionEReturnT$blocksE$typeO$PROCEDURE_BLOCK_TYPES$RETURNUndefinedT$blocksE$shadows$VALUE$length = Object.keys(t.blocks).filter(function (e) {
        return t.blocks[e].type === o.PROCEDURE_BLOCK_TYPES.RETURN && undefined !== t.blocks[e].shadows.VALUE
      }).length
      var r = this.procedure_manager.get_procedure_by_def(e);
      (0, c.assert)(r)
      r.return_count = Object$keysT$blocks$filterFunctionEReturnT$blocksE$typeO$PROCEDURE_BLOCK_TYPES$RETURNUndefinedT$blocksE$shadows$VALUE$length
    }
  };
  (0, r.__decorate)([(0, a.lazy_inject)(s.BINDING.json)], t.prototype, "json", undefined)
  return t
}(require(/* 1156 */"./1156").BasePlugin)
exports.ProcedurePlugin = f
