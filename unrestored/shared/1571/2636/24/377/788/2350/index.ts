/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2350
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.TransformToIde = undefined
var r = require(/* 93 */"tslib")
var i = require(/* 976 */"../../../../17/499/976")
var o = require(/* 173 */"../../../../1058/173")
var a = require(/* 125 */"../../../../../../../../src/shared/packages/@crc/blink/src/core/di")
var s = require(/* 1123 */"../../../../123/195/2051/1123")
var c = (0, r.__importStar)(require(/* 536 */"../../../../17/536"))
var u = require(/* 214 */"../../../../1022/214")
var l = (0, r.__importStar)(require(/* 1154 */"../../737/1154"))
var f = (0, r.__importStar)(require(/* 1155 */"../../737/1155"))
var d = require(/* 2351 */"./2351/index")
var h = function () {
  function e() {
    this.plugins = new Set()
    this.error = function (e) {
      for (var t = [], n = 1; n < arguments.length; n++) {
        t[n - 1] = arguments[n]
      }
      console.error.apply(console, (0, r.__spreadArray)(["Error when transform to ide ", "[" + e + "]: "], t, false))
    }
    this.param_block_ids = []
    this.redo_param_connect = []
    this.redo_collapse_ids = []
    var e = new d.ConflictResolver()
    this.register_plugins([e])
  }
  e.prototype.register_plugins = function (e) {
    var t = this
    e.forEach(function (e) {
      return t.plugins.add(e)
    })
  }
  e.prototype.decompose_and_transform_op = function (e) {
    var t = this
    try {
      this.plugins.forEach(function (t) {
        t.before_decompose_and_sort_op(e)
      })
    } catch (u) {
      this.error("Before decompose and sort op", u)
    }
    var n = undefined
    try {
      n = f.decompose_and_sort_op(e)
    } catch (u) {
      this.error("Decompose and sort op", u)
    }
    if (n) {
      for (var r = this.analyze_sorted_ops(n), /* [auto-meaningful-name] */r$analyze_result = r.analyze_result, /* [auto-meaningful-name] */r$affected_ids = r.affected_ids, a = Array.from(this.plugins), s = 0; s < a.length; s++) {
        var c = a[s]
        try {
          if (!c.after_analyze_op(r$affected_ids)) {
            return
          }
        } catch (u) {
          return void this.error("After analyze op", u)
        }
      }
      r$analyze_result.pick_ops.forEach(function (e) {
        t.transform_pick_operation(e, r$analyze_result.drop_ops)
      })
      r$analyze_result.drop_ops.forEach(function (e) {
        t.transform_drop_operation(e)
      })
      if (this.redo_param_connect.length) {
        this.redo_param_connect.forEach(function (e) {
          t.transform_drop_operation(e)
        })
      }
      this.redo_param_connect = []
      this.param_block_ids = []
      if (this.redo_collapse_ids.length) {
        this.redo_collapse_ids.forEach(function (e) {
          try {
            t.Blink.events.disable()
            var n = t.Blink.mainWorkspace.get_block_by_id(e)
            if (!(null === n || undefined === n)) {
              n.set_collapsed(false)
            }
            if (!(null === n || undefined === n)) {
              n.set_collapsed(true)
            }
          } catch (u) {
            t.error("Retrying creating collapsed blocks", e)
          } finally {
            t.Blink.events.enable()
          }
        })
      }
      this.redo_collapse_ids = []
      try {
        this.plugins.forEach(function (t) {
          t.after_transform_op_to_event(e)
        })
      } catch (u) {
        this.error("After transform op to event", u)
      }
    }
  }
  e.prototype.analyze_sorted_ops = function (e) {
    var t = this
    var n = []
    var r = {
      drop_ops: [],
      pick_ops: []
    }
    e.pick_ops.forEach(function (e) {
      if (l.is_pick_operation(e.operation)) {
        try {
          t.plugins.forEach(function (t) {
            t.before_analyze_op(e)
          })
        } catch (o) {
          t.error("Before analyze pick op", e, o)
        }
        var i = f.analyze_path("pick", e.path)
        if (undefined !== i && (r.pick_ops.push({
          event_type: i.event_type,
          normalized_path: i.normalized_path,
          operation: e.operation
        }), n.push(i.normalized_path.target_id), i.event_type === l.EventType.DISCONNECT)) {
          if (!l.is_path_3(i.normalized_path)) {
            return
          }
          n.push(i.normalized_path.property)
        }
      }
    })
    e.drop_ops.forEach(function (e) {
      if (l.is_drop_operation(e.operation)) {
        try {
          t.plugins.forEach(function (t) {
            t.before_analyze_op(e)
          })
        } catch (a) {
          t.error("Before analyze drop op", e, a)
        }
        var i = f.analyze_path("drop", e.path)
        if (undefined !== i) {
          r.drop_ops.push({
            event_type: i.event_type,
            normalized_path: i.normalized_path,
            operation: e.operation
          })
          n.push(i.normalized_path.target_id)
          if (i.event_type === l.EventType.CONNECT) {
            if (!l.is_path_3(i.normalized_path)) {
              return
            }
            n.push(i.normalized_path.property)
          }
          if (i.event_type === l.EventType.CREATE_COMMENT) {
            var /* [auto-meaningful-name] */e$operation = e.operation
            if (e$operation.i && (0, s.is_comment_json)(e$operation.i) && null !== e$operation.i.parent_id) {
              n.push(e$operation.i.parent_id)
            }
          }
        }
      }
    })
    return {
      analyze_result: r,
      affected_ids: n
    }
  }
  e.prototype.transform_pick_operation = function (e, t) {
    var n = this
    try {
      this.plugins.forEach(function (t) {
        t.before_generate_event(e)
      })
    } catch (w) {
      this.error("Before generate pick event", e, w)
    }
    var /* [auto-meaningful-name] */e$event_type = e.event_type
    var /* [auto-meaningful-name] */e$normalized_path = e.normalized_path
    var a = function () {
      for (var t = [], i = 0; i < arguments.length; i++) {
        t[i] = arguments[i]
      }
      return n.error.apply(n, (0, r.__spreadArray)(["Transforming pick operation", e], t, false))
    }
    if (e$event_type !== l.EventType.DISCONNECT) {
      if (e$event_type !== l.EventType.DELETE_BLOCK) {
        if (e$event_type !== l.EventType.DELETE_COMMENT) {
          if (e$event_type === l.EventType.REMOVE_SHADOW_INPUT) {
            if (!l.is_path_4(e$normalized_path)) {
              return
            }
            e$normalized_path$target_id1 = e$normalized_path.target_id
            if (!(v = this.Blink.mainWorkspace.get_block_by_id(e$normalized_path$target_id1))) {
              return void a("remove shadow input: cannot find target block " + e$normalized_path$target_id1)
            }
            for (var s = undefined, c = 0; c < t.length; c++) {
              var u = t[c]
              if (u.event_type === l.EventType.APPEND_SHADOW_INPUT && l.is_path_4(u.normalized_path) && u.normalized_path.target_id === e$normalized_path.target_id && u.normalized_path.property_name === e$normalized_path.property_name) {
                s = u
                break
              }
            }
            if (!s) {
              if (!v.removeMutation) {
                return void a("Block " + e$normalized_path$target_id1 + " should have function: removeMutation.")
              }
              this.Blink.events.disable()
              try {
                v.removeMutation()
              } catch (w) {
                a(w)
              } finally {
                this.Blink.events.enable()
              }
            }
          }
        } else {
          if (!l.is_path_2(e$normalized_path)) {
            return
          }
          var /* [auto-meaningful-name] */e$normalized_path$target_id = e$normalized_path.target_id
          var d = this.Blink.mainWorkspace.workspace_comment_db.get(e$normalized_path$target_id)
          if (!d) {
            return
          }
          if (e$normalized_path$target_id2 = this.Blink.json.comment_to_json(d).parent_id) {
            var h = this.Blink.mainWorkspace.get_element_from_db(e$normalized_path$target_id2)
            if (!h) {
              return void a("cannot find block connected to this comment " + e$normalized_path$target_id)
            }
            this.Blink.events.disable()
            try {
              var p = this.Blink.xml.comment_to_dom_with_xy(d)
              this.change_event_factory("comment", {
                block: h,
                old_value: p,
                new_value: undefined
              }).run(true)
            } catch (w) {
              a(w)
            } finally {
              this.Blink.events.enable()
            }
          } else {
            A = this.delete_event_factory({
              block: d
            })
            this.Blink.events.disable()
            try {
              A.run(true)
            } catch (w) {
              a(w)
            } finally {
              this.Blink.events.enable()
            }
          }
        }
      } else {
        if (!l.is_path_2(e$normalized_path)) {
          return
        }
        var /* [auto-meaningful-name] */e$normalized_path$target_id1 = e$normalized_path.target_id
        if (!(v = this.Blink.mainWorkspace.get_block_by_id(e$normalized_path$target_id1)) || v.is_shadow()) {
          return
        }
        if (m = v.get_parent()) {
          y = {
            id: e$normalized_path$target_id1,
            group: "",
            old_parent_id: m.id
          }
          b = this.move_event_factory({
            block: v
          })
          this.Blink.events.disable()
          try {
            b.deserialize(y)
            b.run(true)
          } catch (w) {
            a("disconnecting from parent", w)
          } finally {
            this.Blink.events.enable()
          }
        }
        var A = this.delete_event_factory({
          block: v
        })
        this.Blink.events.disable()
        try {
          A.run(true)
        } catch (w) {
          a("deleting", w)
        } finally {
          this.Blink.events.enable()
        }
      }
    } else {
      if (!l.is_path_3(e$normalized_path)) {
        return
      }
      var e$normalized_path$target_id1 = e$normalized_path.property
      var /* [auto-meaningful-name] */e$normalized_path$target_id2 = e$normalized_path.target_id
      var v = this.Blink.mainWorkspace.get_block_by_id(e$normalized_path$target_id1)
      var m = this.Blink.mainWorkspace.get_block_by_id(e$normalized_path$target_id2)
      if (!v || !m || v.is_shadow()) {
        return
      }
      var y = {
        id: e$normalized_path$target_id1,
        group: "",
        old_parent_id: e$normalized_path$target_id2
      }
      var b = this.move_event_factory({
        block: v
      })
      this.Blink.events.disable()
      try {
        b.deserialize(y)
        b.run(true)
      } catch (w) {
        a(w)
      } finally {
        this.Blink.events.enable()
      }
    }
  }
  e.prototype.transform_drop_operation = function (e) {
    var t
    var n
    var /* [auto-meaningful-name] */z$connection
    var /* [auto-meaningful-name] */U$addMutation
    var d
    var h
    var p
    var _ = this
    try {
      this.plugins.forEach(function (t) {
        t.before_generate_event(e)
      })
    } catch (ie) {
      this.error("Before generate drop event", e, ie)
    }
    var A = function () {
      for (var t = [], n = 0; n < arguments.length; n++) {
        t[n] = arguments[n]
      }
      return _.error.apply(_, (0, r.__spreadArray)(["Transforming drop operation", e], t, false))
    }
    var /* [auto-meaningful-name] */e$event_type = e.event_type
    var /* [auto-meaningful-name] */e$normalized_path = e.normalized_path
    var /* [auto-meaningful-name] */e$operation = e.operation
    if (l.is_path_2(e$normalized_path)) {
      if (e$event_type === l.EventType.CREATE_BLOCK) {
        var /* [auto-meaningful-name] */e$normalized_path$target_id = e$normalized_path.target_id
        if (!e$operation.i || !(0, s.is_block_json)(e$operation.i)) {
          return void A("Invalid op. ")
        }
        if (U = this.Blink.mainWorkspace.get_block_by_id(e$normalized_path$target_id)) {
          return void this.Blink.json.parse_block_data(e$operation.i, U)
        }
        var b = {
          blocks: (t = {}, t[e$normalized_path$target_id] = e$operation.i, t),
          connections: {},
          comments: {}
        }
        this.Blink.events.disable()
        try {
          this.Blink.json.json_to_workspace(b, this.Blink.mainWorkspace)
        } catch (ie) {
          A(ie)
        } finally {
          this.Blink.events.enable()
        }
        var w = this.Blink.mainWorkspace.get_block_by_id(e$normalized_path$target_id)
        if ("param" === (null === w || undefined === w ? undefined : w.element_type)) {
          this.param_block_ids.push(e$normalized_path$target_id)
        }
        return void ((null === w || undefined === w ? undefined : w.is_collapsed()) && this.redo_collapse_ids.push(e$normalized_path$target_id))
      }
      if (e$event_type === l.EventType.CREATE_COMMENT) {
        var /* [auto-meaningful-name] */e$normalized_path$target_id1 = e$normalized_path.target_id
        if (!e$operation.i || !(0, s.is_comment_json)(e$operation.i)) {
          return void A("Invalid op. ")
        }
        var /* [auto-meaningful-name] */e$operation$i = e$operation.i
        if (e$operation$i.parent_id) {
          if (!(q = this.Blink.mainWorkspace.get_element_from_db(e$operation$i.parent_id))) {
            return void A("cannot find block connected to this comment " + e$normalized_path$target_id1)
          }
          var C = this.change_event_factory("comment", {
            block: q,
            old_value: undefined,
            new_value: e$normalized_path$target_id1
          })
          this.Blink.events.disable()
          try {
            C.run(true)
          } catch (ie) {
            A(ie)
          } finally {
            this.Blink.events.enable()
          }
          if (!(K = this.Blink.mainWorkspace.get_element_from_db(e$normalized_path$target_id1)) || !(0, u.is_workspace_comment)(K)) {
            return void A("create: cannot find target comment " + e$normalized_path$target_id1)
          }
          var /* [auto-meaningful-name] */e$operation$i$location = e$operation$i.location
          if (!Array.isArray(e$operation$i$location) || "number" !== typeof e$operation$i$location[0] || "number" !== typeof e$operation$i$location[1]) {
            return void A("Invalid op. ")
          }
          var k = [e$operation$i$location[0], e$operation$i$location[1]]
          var S = {
            id: K.id,
            group: "",
            new_coordinate: k
          }
          var T = this.move_event_factory({
            block: K
          })
          this.Blink.events.disable()
          try {
            T.deserialize(S)
            T.run(true)
          } catch (ie) {
            A(ie)
          } finally {
            this.Blink.events.enable()
          }
          if (e$operation$i.text) {
            var B = this.change_event_factory("comment_text", {
              block: K,
              old_value: "",
              new_value: e$operation$i.text
            })
            this.Blink.events.disable()
            try {
              B.run(true)
            } catch (ie) {
              A(ie)
            } finally {
              this.Blink.events.enable()
            }
          }
          var D = K.get_color_theme()
          var I = this.change_event_factory("comment_color", {
            block: K,
            old_value: D,
            new_value: e$operation$i.color_theme
          })
          this.Blink.events.disable()
          try {
            I.run(true)
          } catch (ie) {
            A(ie)
          } finally {
            this.Blink.events.enable()
          }
        } else {
          b = {
            blocks: {},
            connections: {},
            comments: (n = {}, n[e$operation$i.id] = e$operation$i, n)
          }
          this.Blink.events.disable()
          try {
            this.Blink.json.json_to_workspace(b, this.Blink.mainWorkspace)
          } catch (ie) {
            A(ie)
          } finally {
            this.Blink.events.enable()
          }
        }
        return
      }
    }
    if (l.is_path_3(e$normalized_path)) {
      if (e$event_type === l.EventType.MOVE_BLOCK) {
        e$normalized_path$target_id = e$normalized_path.target_id
        var R = this.Blink.mainWorkspace.get_block_by_id(e$normalized_path$target_id)
        if (!R) {
          return void A("move block: cannot find target block " + e$normalized_path$target_id)
        }
        if (R.is_shadow()) {
          return
        }
        if (!Array.isArray(e$operation.i) || "number" !== typeof e$operation.i[0] || "number" !== typeof e$operation.i[1]) {
          return void A("invalid op. ")
        }
        S = {
          id: e$normalized_path$target_id,
          group: "",
          new_coordinate: k = [e$operation.i[0], e$operation.i[1]]
        }
        T = this.move_event_factory({
          block: R
        })
        this.Blink.events.disable()
        try {
          T.deserialize(S)
          T.run(true)
        } catch (ie) {
          A(ie)
        } finally {
          this.Blink.events.enable()
        }
        return
      }
      if (e$event_type === l.EventType.COLLAPSE_BLOCK) {
        e$normalized_path$target_id = e$normalized_path.target_id
        var F = this.Blink.mainWorkspace.get_element_from_db(e$normalized_path$target_id)
        if (!F) {
          return void A("Invalid block " + e$normalized_path$target_id + ". ")
        }
        if ("boolean" !== typeof e$operation.i) {
          return void A("Invalid op. ")
        }
        var /* [auto-meaningful-name] */e$operation$i1 = e$operation.i
        C = this.change_event_factory("collapsed", {
          block: F,
          old_value: !e$operation$i1,
          new_value: e$operation$i1
        })
        this.Blink.events.disable()
        try {
          C.run(true)
        } catch (ie) {
          A(ie)
        } finally {
          this.Blink.events.enable()
        }
        return
      }
      if (e$event_type === l.EventType.DISABLE_BLOCK) {
        e$normalized_path$target_id = e$normalized_path.target_id
        if (!(U = this.Blink.mainWorkspace.get_block_by_id(e$normalized_path$target_id))) {
          return void A("Invalid block " + e$normalized_path$target_id + ". ")
        }
        var /* [auto-meaningful-name] */e$operation$i2 = e$operation.i
        if ("boolean" !== typeof e$operation$i2) {
          return void A("Invalid op. ")
        }
        C = this.change_event_factory("disabled", {
          block: U,
          old_value: !e$operation$i2,
          new_value: e$operation$i2
        })
        this.Blink.events.disable()
        try {
          C.run(true)
        } catch (ie) {
          A(ie)
        } finally {
          this.Blink.events.enable()
        }
        return
      }
      if (e$event_type === l.EventType.SET_BLOCK_VISIBILITY) {
        e$normalized_path$target_id = e$normalized_path.target_id
        if (!(U = this.Blink.mainWorkspace.get_block_by_id(e$normalized_path$target_id))) {
          return void A("Invalid block " + e$normalized_path$target_id + ". ")
        }
        var /* [auto-meaningful-name] */e$operation$i3 = e$operation.i
        if ("string" !== typeof e$operation$i3) {
          return void A("Invalid op. ")
        }
        var L = (0, i.parse_visibility)(e$operation$i3)
        if (!L) {
          return void A("Invalid op. ")
        }
        C = this.change_event_factory("visibility", {
          block: U,
          old_value: c.BlockVisibility.HIDDEN,
          new_value: L
        })
        this.Blink.events.disable()
        try {
          C.run(true)
        } catch (ie) {
          A(ie)
        } finally {
          this.Blink.events.enable()
        }
        return
      }
      if (e$event_type === l.EventType.CONNECT) {
        e$normalized_path$target_id = e$normalized_path.property
        var /* [auto-meaningful-name] */e$normalized_path$target_id2 = e$normalized_path.target_id
        var U = this.Blink.mainWorkspace.get_block_by_id(e$normalized_path$target_id)
        var H = this.Blink.mainWorkspace.get_block_by_id(e$normalized_path$target_id2)
        if (!U) {
          return void A("Invalid block " + e$normalized_path$target_id + ". ")
        }
        if (!e$operation.i || !(0, s.is_connection_json)(e$operation.i)) {
          return void A("Invalid op. ")
        }
        var /* [auto-meaningful-name] */e$operation$i4 = e$operation.i
        S = {
          id: e$normalized_path$target_id,
          group: ""
        }
        if ("next" === e$operation$i4.type) {
          S.new_parent_id = e$normalized_path$target_id2
        }
        if ("input" === e$operation$i4.type) {
          S.new_parent_id = e$normalized_path$target_id2
          S.new_input_name = e$operation$i4.input_name
          if (!H) {
            return void A("Invalid block " + e$normalized_path$target_id + ". ")
          }
          if (!(z = H.get_input(e$operation$i4.input_name))) {
            return void A("Cannot find target input " + e$operation$i4.input_name + " on block " + e$normalized_path$target_id2)
          }
        }
        T = this.move_event_factory({
          block: U
        })
        this.Blink.events.disable()
        try {
          T.deserialize(S)
          T.run(true)
        } catch (ie) {
          A(ie)
        } finally {
          this.Blink.events.enable()
        }
        if (this.param_block_ids.includes(e$normalized_path$target_id)) {
          this.redo_param_connect.push(e)
        }
        if (!U.is_shadow()) {
          return
        }
        for (var G = 0; G < U.inputList.length; G++) {
          for (var z = U.inputList[G], Q = 0; Q < z.fieldRow.length; Q++) {
            var W = z.fieldRow[Q]
            if ((0, u.is_field_number)(W)) {
              W.update_allow_text()
            }
          }
        }
        return
      }
      if (e$event_type === l.EventType.MOVE_COMMENT) {
        var K
        e$normalized_path$target_id1 = e$normalized_path.target_id
        if (!(K = this.Blink.mainWorkspace.get_element_from_db(e$normalized_path$target_id1))) {
          return void A("Invalid comment " + e$normalized_path$target_id1)
        }
        if (!Array.isArray(e$operation.i) || "number" !== typeof e$operation.i[0] || "number" !== typeof e$operation.i[1]) {
          return void A("Invalid op. ")
        }
        S = {
          id: e$normalized_path$target_id1,
          group: "",
          new_coordinate: k = [e$operation.i[0], e$operation.i[1]]
        }
        T = this.move_event_factory({
          block: K
        })
        this.Blink.events.disable()
        try {
          T.deserialize(S)
          T.run(true)
        } catch (ie) {
          A(ie)
        } finally {
          this.Blink.events.enable()
        }
        return
      }
      if (e$event_type === l.EventType.EDIT_COMMENT) {
        e$normalized_path$target_id1 = e$normalized_path.target_id
        if (!(q = this.Blink.mainWorkspace.get_element_from_db(e$normalized_path$target_id1))) {
          return void A("Invalid comment " + e$normalized_path$target_id1)
        }
        if ("string" !== typeof e$operation.i) {
          return void A("Invalid op. ")
        }
        B = this.change_event_factory("comment_text", {
          block: q,
          old_value: "",
          new_value: e$operation.i
        })
        this.Blink.events.disable()
        try {
          B.run(true)
        } catch (ie) {
          A(ie)
        } finally {
          this.Blink.events.enable()
        }
        return
      }
      if (e$event_type === l.EventType.COLLAPSE_COMMENT) {
        e$normalized_path$target_id1 = e$normalized_path.target_id
        if (!(q = this.Blink.mainWorkspace.get_element_from_db(e$normalized_path$target_id1))) {
          return void A("Invalid comment " + e$normalized_path$target_id1)
        }
        if ("boolean" !== typeof e$operation.i) {
          return void A("Invalid op. ")
        }
        var /* [auto-meaningful-name] */e$operation$i5 = e$operation.i
        var Y = this.change_event_factory("comment_expand", {
          block: q,
          old_value: !e$operation$i5,
          new_value: e$operation$i5
        })
        this.Blink.events.disable()
        try {
          Y.run(true)
        } catch (ie) {
          A(ie)
        } finally {
          this.Blink.events.enable()
        }
        return
      }
      if (e$event_type === l.EventType.CHANGE_COMMENT_COLOR) {
        e$normalized_path$target_id1 = e$normalized_path.target_id
        var q = this.Blink.mainWorkspace.get_element_from_db(e$normalized_path$target_id1)
        if (!(0, u.is_workspace_comment)(q)) {
          return void A("Invalid comment " + e$normalized_path$target_id1)
        }
        if (!(0, u.is_comment_theme)(e$operation.i)) {
          return void A("Invalid op. ")
        }
        D = q.get_color_theme()
        I = this.change_event_factory("comment_color", {
          block: q,
          old_value: D,
          new_value: e$operation.i
        })
        this.Blink.events.disable()
        try {
          I.run(true)
        } catch (ie) {
          A(ie)
        } finally {
          this.Blink.events.enable()
        }
        return
      }
      if (e$event_type === l.EventType.RESIZE_COMMENT) {
        e$normalized_path$target_id1 = e$normalized_path.target_id
        if (!(q = this.Blink.mainWorkspace.get_element_from_db(e$normalized_path$target_id1))) {
          return void A("Invalid comment " + e$normalized_path$target_id1)
        }
        if (!Array.isArray(e$operation.i) || "number" !== typeof e$operation.i[0] || "number" !== typeof e$operation.i[1]) {
          return void A("Invalid op. ")
        }
        var $ = q.get_height_width()
        var J = this.change_event_factory("comment_resize", {
          block: q,
          old_value: [$.width, $.height],
          new_value: [e$operation.i[0], e$operation.i[1]]
        })
        this.Blink.events.disable()
        try {
          J.run(true)
        } catch (ie) {
          A(ie)
        } finally {
          this.Blink.events.enable()
        }
        return
      }
    }
    if (l.is_path_4(e$normalized_path)) {
      if (e$event_type === l.EventType.EDIT_BLOCK_FIELD) {
        if ("string" !== typeof e$operation.i) {
          return void A("Invalid op. ")
        }
        e$normalized_path$target_id = e$normalized_path.target_id
        if (!(U = this.Blink.mainWorkspace.get_block_by_id(e$normalized_path$target_id))) {
          return void A("Invalid block " + e$normalized_path$target_id)
        }
        var /* [auto-meaningful-name] */e$normalized_path$property_name = e$normalized_path.property_name
        if (!(W = U.get_field(e$normalized_path$property_name))) {
          var ee = {
            TEXT: "NUM",
            NUM: "TEXT"
          }
          if (!(W = U.get_field(ee[e$normalized_path$property_name])) || !W.allow_text) {
            return void A("Invalid field " + e$normalized_path$property_name + " on block " + e$normalized_path$target_id)
          }
          e$normalized_path$property_name = ee[e$normalized_path$property_name]
        }
        var te = W.get_value()
        if (te === e$operation.i) {
          return
        }
        var ne = U.type === o.PROCEDURE_BLOCK_TYPES.DEF && e$normalized_path$property_name === o.PROCEDURE_BLOCK_FIELD_NAMES.PROCEDURE_NAME
        C = this.change_event_factory(ne ? "procedure_rename" : "field", {
          block: U,
          old_value: te,
          new_value: e$operation.i,
          name: e$normalized_path$property_name
        })
        this.Blink.events.disable()
        try {
          C.run(true)
        } catch (ie) {
          A(ie)
        } finally {
          this.Blink.events.enable()
        }
        return
      }
      if (e$event_type === l.EventType.APPEND_SHADOW_INPUT) {
        if ("string" !== typeof e$operation.i) {
          return void A("Invalid op. ")
        }
        e$normalized_path$target_id = e$normalized_path.target_id
        var /* [auto-meaningful-name] */e$normalized_path$property_name1 = e$normalized_path.property_name
        if (!(U = this.Blink.mainWorkspace.get_block_by_id(e$normalized_path$target_id))) {
          return void A("Invalid block " + e$normalized_path$target_id)
        }
        if (z = U.get_input(e$normalized_path$property_name1)) {
          if (!(null === (z$connection = z.connection) || undefined === z$connection)) {
            z$connection.set_shadow_from_string(e$operation.i)
          }
        } else {
          this.Blink.events.disable()
          try {
            if (!(null === (U$addMutation = U.addMutation) || undefined === U$addMutation)) {
              U$addMutation.call(U)
            }
            if (!(null === (p = null === (h = null === (d = U.get_input(e$normalized_path$property_name1)) || undefined === d ? undefined : d.connection) || undefined === h ? undefined : h.targetBlock()) || undefined === p)) {
              p.dispose()
            }
          } catch (ie) {
            A(ie)
          } finally {
            this.Blink.events.enable()
          }
        }
      }
    }
    if (l.is_path_5(e$normalized_path) && e$event_type === l.EventType.EDIT_FIELD_EXTRA_ATTR) {
      e$normalized_path$target_id = e$normalized_path.target_id
      if (!(U = this.Blink.mainWorkspace.get_block_by_id(e$normalized_path$target_id))) {
        return void A("Invalid block " + e$normalized_path$target_id)
      }
      e$normalized_path$property_name = e$normalized_path.property_name
      if (!(W = U.get_field(e$normalized_path$property_name))) {
        return void A("Cannot find field " + e$normalized_path$property_name + " on block " + e$normalized_path$target_id)
      }
      if ((0, u.is_field_default_value)(W)) {
        if ("boolean" !== typeof e$operation.i) {
          return void A("Invalid op. ")
        }
        W.set_has_been_edited(e$operation.i)
      }
    }
  };
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.Blink)], e.prototype, "Blink", undefined);
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.MoveEvent)], e.prototype, "move_event_factory", undefined);
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.DeleteEvent)], e.prototype, "delete_event_factory", undefined);
  (0, r.__decorate)([(0, a.lazy_inject)(a.BINDING.ChangeEvent)], e.prototype, "change_event_factory", undefined)
  return e
}()
exports.TransformToIde = h
