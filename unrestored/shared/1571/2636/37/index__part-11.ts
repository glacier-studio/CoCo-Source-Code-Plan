/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：37__part-11
 */

"use strict"

import { qn } from "./index__part-9"
import { ar } from "../../../../../src/shared/utils/image/index"
import { Ms } from "../../../../../src/editor/redux/common/saga"
var gr
import * as /* [auto-meaningful-name] */Module_33 from /* 33 */"../33"
import * as /* [auto-meaningful-name] */Module_110 from /* 110 */"../110"
import * as /* [auto-meaningful-name] */Module_20 from /* 20 */"../20/index"
import * as /* [auto-meaningful-name] */Src_shared_tools_index from /* 15 */"../../../../../src/shared/tools/index"
import * as /* [auto-meaningful-name] */Module_49 from /* 49 */"../49"
import * as /* [auto-meaningful-name] */Src_shared_ui_language from /* 23 */"../../../../../src/shared/ui/language"
import * as /* [auto-meaningful-name] */Module_64 from /* 64 */"../64/index"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"../9"
import * as /* [auto-meaningful-name] */Module_197 from /* 197 */"../197/index"
import * as /* [auto-meaningful-name] */Module_26 from /* 26 */"../26/index"
import * as /* [auto-meaningful-name] */Module_11 from /* 11 */"../11"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"../7"
import * as /* [auto-meaningful-name] */Module_3 from /* 3 */"../48/3/index"
import /* [auto-meaningful-name] */RegeneratorRuntime from /* 1 */"regenerator-runtime"
import * as /* [auto-meaningful-name] */Module_47 from /* 47 */"../47"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Module_25 from /* 25 */"../25/index"
import * as /* [auto-meaningful-name] */Module_22 from /* 22 */"./22"
var vr = RegeneratorRuntime.mark(Fr)
var br = RegeneratorRuntime.mark(Gr)
var yr = RegeneratorRuntime.mark(Hr)
var Er = RegeneratorRuntime.mark(Vr)
var Or = RegeneratorRuntime.mark(zr)
var wr = RegeneratorRuntime.mark(Yr)
var Cr = RegeneratorRuntime.mark(Kr)
var Tr = RegeneratorRuntime.mark(qr)
var Sr = RegeneratorRuntime.mark(Zr)
var Ar = RegeneratorRuntime.mark(Jr)
var Ir = RegeneratorRuntime.mark($r)
var jr = RegeneratorRuntime.mark(eo)
var Nr = RegeneratorRuntime.mark(to)
var Rr = RegeneratorRuntime.mark(no)
var kr = RegeneratorRuntime.mark(ro)
var xr = RegeneratorRuntime.mark(ao)
var Dr = RegeneratorRuntime.mark(so)
var Mr = RegeneratorRuntime.mark(co)
var Lr = RegeneratorRuntime.mark(lo)
var Pr = RegeneratorRuntime.mark(uo)
var Br = RegeneratorRuntime.mark(ho)
function Fr(e) {
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$imageFile
  var /* [auto-meaningful-name] */e$payload$widgetId
  var o
  var /* [auto-meaningful-name] */s$sent
  var a
  return RegeneratorRuntime.wrap(function (s) {
    for (;;) {
      switch (s.prev = s.next) {
        case 0:
          if (e$payload = e.payload, e$payload$imageFile = e$payload.imageFile, e$payload$widgetId = e$payload.widgetId, o = Module_9.Bb(e$payload$widgetId), e$payload$imageFile && o) {
            s.next = 4
            break
          }
          return s.abrupt("return")
        case 4:
          if (o.type !== Src_editor_widget_builtIn_types.v) {
            s.next = 14
            break
          }
          s.next = 7
          return Module_3.b(Src_shared_tools_index.L, e$payload$imageFile.source || e$payload$imageFile.cdnUrl)
        case 7:
          if (s$sent = s.sent, !Module_9.Kb(o)) {
            s.next = 12
            break
          }
          a = Module_9.nb(s$sent)
          s.next = 12
          return Module_3.e(Src_editor_redux_common_actions.Lg(e$payload$widgetId, "size", a, false, false))
        case 12:
          s.next = 14
          return Module_3.e(Src_editor_redux_common_actions.Lg(e$payload$widgetId, "fileId", e$payload$imageFile.id, true, true))
        case 14:
          if (o.type !== Src_editor_widget_builtIn_types.f && o.type !== Src_editor_widget_builtIn_types.z && o.type !== Src_editor_widget_builtIn_types.w) {
            s.next = 17
            break
          }
          s.next = 17
          return Module_3.e(Src_editor_redux_common_actions.Lg(e$payload$widgetId, "backgroundImage", e$payload$imageFile.id, true, true))
        case 17:
        case "end":
          return s.stop()
      }
    }
  }, vr)
}
function Gr(e) {
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$fileList
  var /* [auto-meaningful-name] */e$payload$onSuccess
  var /* [auto-meaningful-name] */e$payload$isMultipleFiles
  var /* [auto-meaningful-name] */y$sent
  var a
  var s
  var l
  var u
  var /* [auto-meaningful-name] */y$sent1
  var p
  var f
  var /* [auto-meaningful-name] */y$sent2
  var m
  var g
  var /* [auto-meaningful-name] */g$value
  var /* [auto-meaningful-name] */y$sent3
  var /* [auto-meaningful-name] */Module_49$oTHelper$imageFileList
  return RegeneratorRuntime.wrap(function (y) {
    for (;;) {
      switch (y.prev = y.next) {
        case 0:
          e$payload = e.payload
          e$payload$fileList = e$payload.fileList
          e$payload$onSuccess = e$payload.onSuccess
          e$payload$isMultipleFiles = e$payload.isMultipleFiles
          y.next = 3
          return Module_3.f(Module_22.s)
        case 3:
          y$sent = y.sent
          a = []
          s = []
          l = []
          u = Array.from(e$payload$fileList)
          y.next = 10
          return Module_3.b(Wr, u)
        case 10:
          y$sent1 = y.sent
          p = 0
        case 12:
          if (!(p < y$sent1.length)) {
            y.next = 21
            break
          }
          f = y$sent1[p]
          y.next = 16
          return Module_3.b(Src_shared_tools_index.qb, f, y$sent)
        case 16:
          if ("success" === (y$sent2 = y.sent).status) {
            s.push(y$sent2)
          } else {
            a.push(y$sent2)
          }
        case 18:
          p++
          y.next = 12
          break
        case 21:
          if (!s.length) {
            y.next = 24
            break
          }
          y.next = 24
          return Module_3.e(Src_editor_redux_common_actions.Fi(true))
        case 24:
          if (!(a.length > 0)) {
            y.next = 34
            break
          }
          if (e$payload$isMultipleFiles) {
            y.next = 30
            break
          }
          y.next = 28
          return Module_3.e(Src_editor_redux_common_actions.mj({
            message: a[0].message,
            showCloseIcon: false,
            showPrefixIcon: false,
            type: "error"
          }))
        case 28:
          y.next = 32
          break
        case 30:
          y.next = 32
          return Module_3.e(Src_editor_redux_common_actions.uj(a, "image"))
        case 32:
          y.next = 36
          break
        case 34:
          y.next = 36
          return Module_3.e(Src_editor_redux_common_actions.mj({
            message: Src_shared_ui_language.c(y$sent, "importImageSuccess").toString(),
            duration: 1e3,
            type: "success"
          }))
        case 36:
          if (!(s.length > 0)) {
            y.next = 61
            break
          }
          m = Module_47.a(s)
          y.prev = 38
          m.s()
        case 40:
          if ((g = m.n()).done) {
            y.next = 48
            break
          }
          g$value = g.value
          y.next = 44
          return Module_3.b(Module_9.y, g$value.file)
        case 44:
          if (y$sent3 = y.sent) {
            l.push(y$sent3)
            if (!(null === (Module_49$oTHelper$imageFileList = Module_49.oTHelper.imageFileList) || undefined === Module_49$oTHelper$imageFileList)) {
              Module_49$oTHelper$imageFileList.clientOp.add(y$sent3)
            }
          }
        case 46:
          y.next = 40
          break
        case 48:
          y.next = 53
          break
        case 50:
          y.prev = 50
          y.t0 = y.catch(38)
          m.e(y.t0)
        case 53:
          y.prev = 53
          m.f()
          return y.finish(53)
        case 56:
          if (e$payload$onSuccess) {
            e$payload$onSuccess(l)
          }
          y.next = 59
          return Module_3.e(Src_editor_redux_common_actions.Zj())
        case 59:
          y.next = 61
          return Module_3.b(Ms)
        case 61:
        case "end":
          return y.stop()
      }
    }
  }, br, null, [[38, 50, 53, 56]])
}
function Wr(e) {
  return Ur.apply(this, arguments)
}
function Ur() {
  return (Ur = Module_7.a(RegeneratorRuntime.mark(function e(t) {
    var n
    var r
    var o
    var i
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            n = []
            r = Module_47.a(t)
            e.prev = 2
            i = RegeneratorRuntime.mark(function e() {
              var /* [auto-meaningful-name] */o$value
              var /* [auto-meaningful-name] */e$sent
              return RegeneratorRuntime.wrap(function (e) {
                for (;;) {
                  switch (e.prev = e.next) {
                    case 0:
                      o$value = o.value
                      e.next = 3
                      return new Promise(function (e) {
                        ar(o$value, function (t) {
                          e(t)
                        }).catch(function (e) {
                          console.error(e)
                        })
                      })
                    case 3:
                      e$sent = e.sent
                      n.push(e$sent)
                    case 5:
                    case "end":
                      return e.stop()
                  }
                }
              }, e)
            })
            r.s()
          case 5:
            if ((o = r.n()).done) {
              e.next = 9
              break
            }
            return e.delegateYield(i(), "t0", 7)
          case 7:
            e.next = 5
            break
          case 9:
            e.next = 14
            break
          case 11:
            e.prev = 11
            e.t1 = e.catch(2)
            r.e(e.t1)
          case 14:
            e.prev = 14
            r.f()
            return e.finish(14)
          case 17:
            return e.abrupt("return", n)
          case 18:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[2, 11, 14, 17]])
  }))).apply(this, arguments)
}
function Hr(e) {
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$imageFiles
  var /* [auto-meaningful-name] */e$payload$isEmitOT
  var o
  var i
  var a
  var /* [auto-meaningful-name] */a$value
  var /* [auto-meaningful-name] */Module_49$oTHelper$imageFileList
  return RegeneratorRuntime.wrap(function (u) {
    for (;;) {
      switch (u.prev = u.next) {
        case 0:
          e$payload = e.payload
          e$payload$imageFiles = e$payload.imageFiles
          e$payload$isEmitOT = e$payload.isEmitOT
          o = undefined === e$payload$isEmitOT || e$payload$isEmitOT
          i = Module_47.a(e$payload$imageFiles)
          try {
            for (i.s(); !(a = i.n()).done;) {
              a$value = a.value
              Module_9.Tb(a$value)
              if (o) {
                if (!(null === (Module_49$oTHelper$imageFileList = Module_49.oTHelper.imageFileList) || undefined === Module_49$oTHelper$imageFileList)) {
                  Module_49$oTHelper$imageFileList.clientOp.add(a$value)
                }
              }
            }
          } catch (d) {
            i.e(d)
          } finally {
            i.f()
          }
          u.next = 5
          return Module_3.e(Src_editor_redux_common_actions.Zj())
        case 5:
        case "end":
          return u.stop()
      }
    }
  }, yr)
}
function Vr(e) {
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$imageFileId
  var /* [auto-meaningful-name] */e$payload$isEmitOT
  var o
  var /* [auto-meaningful-name] */Module_49$oTHelper$imageFileList
  return RegeneratorRuntime.wrap(function (a) {
    for (;;) {
      switch (a.prev = a.next) {
        case 0:
          e$payload = e.payload
          e$payload$imageFileId = e$payload.imageFileId
          e$payload$isEmitOT = e$payload.isEmitOT
          o = undefined === e$payload$isEmitOT || e$payload$isEmitOT
          Module_9.E(e$payload$imageFileId)
          a.next = 4
          return Module_3.e(Src_editor_redux_common_actions.Qj())
        case 4:
          a.next = 6
          return Module_3.e(Src_editor_redux_common_actions.Uj())
        case 6:
          a.next = 8
          return Module_3.e(Src_editor_redux_common_actions.Zj())
        case 8:
          a.next = 10
          return Module_3.e(Src_editor_redux_common_actions.Fi(true))
        case 10:
          if (o) {
            if (!(null === (Module_49$oTHelper$imageFileList = Module_49.oTHelper.imageFileList) || undefined === Module_49$oTHelper$imageFileList)) {
              Module_49$oTHelper$imageFileList.clientOp.remove(e$payload$imageFileId)
            }
            Module_26.q(Module_26.c.IMAGE_LIBRARY, e$payload$imageFileId)
          }
        case 11:
        case "end":
          return a.stop()
      }
    }
  }, Er)
}
function zr(e) {
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$newId
  var /* [auto-meaningful-name] */e$payload$oldId
  var /* [auto-meaningful-name] */e$payload$isEmitOT
  var i
  var /* [auto-meaningful-name] */f$sent
  var s
  var l
  var /* [auto-meaningful-name] */l$value
  var /* [auto-meaningful-name] */l$value$backgroundImage
  var /* [auto-meaningful-name] */Module_49$oTHelper$imageFileList
  return RegeneratorRuntime.wrap(function (f) {
    for (;;) {
      switch (f.prev = f.next) {
        case 0:
          e$payload = e.payload
          e$payload$newId = e$payload.newId
          e$payload$oldId = e$payload.oldId
          e$payload$isEmitOT = e$payload.isEmitOT
          i = undefined === e$payload$isEmitOT || e$payload$isEmitOT
          f.next = 3
          return Module_3.f(Module_22.C)
        case 3:
          f$sent = f.sent
          Module_9.p(e$payload$oldId, e$payload$newId)
          Module_9.Rb(e$payload$oldId, e$payload$newId)
          s = Module_47.a(f$sent)
          f.prev = 7
          s.s()
        case 9:
          if ((l = s.n()).done) {
            f.next = 20
            break
          }
          if (l$value = l.value, (l$value$backgroundImage = l$value.backgroundImage) !== e$payload$oldId) {
            f.next = 15
            break
          }
          f.next = 15
          return Module_3.e(Src_editor_redux_common_actions.Jg(l$value.id, "backgroundImage", e$payload$newId))
        case 15:
          if (!Module_33.o(e$payload$oldId, l$value$backgroundImage)) {
            f.next = 18
            break
          }
          f.next = 18
          return Module_3.e(Src_editor_redux_common_actions.Jg(l$value.id, "backgroundImage", Module_33.eb(e$payload$oldId, e$payload$newId, l$value$backgroundImage)))
        case 18:
          f.next = 9
          break
        case 20:
          f.next = 25
          break
        case 22:
          f.prev = 22
          f.t0 = f.catch(7)
          s.e(f.t0)
        case 25:
          f.prev = 25
          s.f()
          return f.finish(25)
        case 28:
          Module_33.m(e$payload$oldId, e$payload$newId)
          f.next = 31
          return Module_3.e(Src_editor_redux_common_actions.Qj())
        case 31:
          f.next = 33
          return Module_3.e(Src_editor_redux_common_actions.Zj())
        case 33:
          if (i) {
            if (!(null === (Module_49$oTHelper$imageFileList = Module_49.oTHelper.imageFileList) || undefined === Module_49$oTHelper$imageFileList)) {
              Module_49$oTHelper$imageFileList.clientOp.replaceImageFileId(e$payload$oldId, e$payload$newId)
            }
            Module_26.z.replaceFieldValue("image_file_list_dropdown", "IMAGE_FILE_ID", e$payload$oldId, e$payload$newId)
          }
        case 34:
        case "end":
          return f.stop()
      }
    }
  }, Or, null, [[7, 22, 25, 28]])
}
function Yr(e) {
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$soundFile
  var /* [auto-meaningful-name] */e$payload$widgetId
  var o
  return RegeneratorRuntime.wrap(function (i) {
    for (;;) {
      switch (i.prev = i.next) {
        case 0:
          if (e$payload = e.payload, e$payload$soundFile = e$payload.soundFile, e$payload$widgetId = e$payload.widgetId, o = Module_9.Bb(e$payload$widgetId), !e$payload$soundFile || !o || o.type !== Src_editor_widget_builtIn_types.b) {
            i.next = 5
            break
          }
          i.next = 5
          return Module_3.e(Src_editor_redux_common_actions.Lg(e$payload$widgetId, "fileId", e$payload$soundFile.id, true, true))
        case 5:
        case "end":
          return i.stop()
      }
    }
  }, wr)
}
function Kr(e) {
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$soundFiles
  var /* [auto-meaningful-name] */e$payload$isEmitOT
  var o
  var /* [auto-meaningful-name] */Module_49$oTHelper$soundFileList
  return RegeneratorRuntime.wrap(function (a) {
    for (;;) {
      switch (a.prev = a.next) {
        case 0:
          e$payload = e.payload
          e$payload$soundFiles = e$payload.soundFiles
          e$payload$isEmitOT = e$payload.isEmitOT
          o = undefined === e$payload$isEmitOT || e$payload$isEmitOT
          a.next = 3
          return Module_3.e(Src_editor_redux_common_actions.kf(e$payload$soundFiles))
        case 3:
          if (o) {
            if (!(null === (Module_49$oTHelper$soundFileList = Module_49.oTHelper.soundFileList) || undefined === Module_49$oTHelper$soundFileList)) {
              Module_49$oTHelper$soundFileList.clientOp.add(e$payload$soundFiles)
            }
          }
        case 4:
        case "end":
          return a.stop()
      }
    }
  }, Cr)
}
function qr(e) {
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$fileList
  var /* [auto-meaningful-name] */e$payload$onSuccess
  var /* [auto-meaningful-name] */e$payload$isMultipleFiles
  var /* [auto-meaningful-name] */_$sent
  var a
  var s
  var l
  var u
  var d
  var p
  var /* [auto-meaningful-name] */_$sent1
  var h
  var m
  var g
  return RegeneratorRuntime.wrap(function (_) {
    for (;;) {
      switch (_.prev = _.next) {
        case 0:
          e$payload = e.payload
          e$payload$fileList = e$payload.fileList
          e$payload$onSuccess = e$payload.onSuccess
          e$payload$isMultipleFiles = e$payload.isMultipleFiles
          _.next = 3
          return Module_3.f(Module_22.s)
        case 3:
          _$sent = _.sent
          a = []
          s = []
          l = []
          u = Array.from(e$payload$fileList)
          d = 0
        case 9:
          if (!(d < u.length)) {
            _.next = 18
            break
          }
          p = u[d]
          _.next = 13
          return Module_3.b(Src_shared_tools_index.rb, p, _$sent)
        case 13:
          if ("success" === (_$sent1 = _.sent).status) {
            s.push(_$sent1)
          } else {
            a.push(_$sent1)
          }
        case 15:
          d++
          _.next = 9
          break
        case 18:
          if (!s.length) {
            _.next = 21
            break
          }
          _.next = 21
          return Module_3.e(Src_editor_redux_common_actions.Fi(true))
        case 21:
          if (!(a.length > 0)) {
            _.next = 31
            break
          }
          if (e$payload$isMultipleFiles) {
            _.next = 27
            break
          }
          _.next = 25
          return Module_3.e(Src_editor_redux_common_actions.mj({
            message: a[0].message,
            showCloseIcon: false,
            showPrefixIcon: false,
            type: "error"
          }))
        case 25:
          _.next = 29
          break
        case 27:
          _.next = 29
          return Module_3.e(Src_editor_redux_common_actions.uj(a, "sound"))
        case 29:
          _.next = 33
          break
        case 31:
          _.next = 33
          return Module_3.e(Src_editor_redux_common_actions.mj({
            message: Src_shared_ui_language.c(_$sent, "importSoundSuccess").toString(),
            type: "success"
          }))
        case 33:
          if (!(s.length > 0)) {
            _.next = 55
            break
          }
          h = Module_47.a(s)
          _.prev = 35
          g = RegeneratorRuntime.mark(function e() {
            var /* [auto-meaningful-name] */m$value
            var n
            var r
            var o
            var i
            var /* [auto-meaningful-name] */e$sent
            var /* [auto-meaningful-name] */Module_49$oTHelper$soundFileList
            return RegeneratorRuntime.wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    m$value = m.value
                    n = m$value.file.name.slice(0, m$value.file.name.lastIndexOf("."))
                    r = Src_shared_tools_index.I(m$value.file.name)
                    o = []
                    e.next = 6
                    return Module_3.f(Module_22.I)
                  case 6:
                    e.sent.forEach(function (e) {
                      if (Src_shared_tools_index.I(e.name) === r) {
                        o.push(e.name.slice(0, e.name.lastIndexOf(".")))
                      }
                    })
                    i = Module_33.bc(n, o) + r
                    e.next = 11
                    return Module_3.b(Xr, m$value.file, i)
                  case 11:
                    if (!(null === (e$sent = e.sent) || undefined === e$sent ? undefined : e$sent.id)) {
                      e.next = 17
                      break
                    }
                    l.push(e$sent)
                    e.next = 16
                    return Module_3.e(Src_editor_redux_common_actions.kf([e$sent]))
                  case 16:
                    if (!(null === (Module_49$oTHelper$soundFileList = Module_49.oTHelper.soundFileList) || undefined === Module_49$oTHelper$soundFileList)) {
                      Module_49$oTHelper$soundFileList.clientOp.add([e$sent])
                    }
                  case 17:
                  case "end":
                    return e.stop()
                }
              }
            }, e)
          })
          h.s()
        case 38:
          if ((m = h.n()).done) {
            _.next = 42
            break
          }
          return _.delegateYield(g(), "t0", 40)
        case 40:
          _.next = 38
          break
        case 42:
          _.next = 47
          break
        case 44:
          _.prev = 44
          _.t1 = _.catch(35)
          h.e(_.t1)
        case 47:
          _.prev = 47
          h.f()
          return _.finish(47)
        case 50:
          if (e$payload$onSuccess) {
            e$payload$onSuccess(l)
          }
          _.next = 53
          return Module_3.e(Src_editor_redux_common_actions.Zj())
        case 53:
          _.next = 55
          return Module_3.b(Zr)
        case 55:
        case "end":
          return _.stop()
      }
    }
  }, Tr, null, [[35, 44, 47, 50]])
}
function Xr(e, t) {
  return Qr.apply(this, arguments)
}
function Qr() {
  return (Qr = Module_7.a(RegeneratorRuntime.mark(function e(t, n) {
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent1
    var i
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2
            return Src_shared_tools_index.ob(t)
          case 2:
            if (!(e$sent = e.sent)) {
              e.next = 9
              break
            }
            e.next = 6
            return Src_shared_tools_index.y(e$sent)
          case 6:
            e$sent1 = e.sent
            i = {
              cdnUrl: "",
              id: n,
              name: n,
              source: e$sent,
              duration: e$sent1 < 1 ? 1 : e$sent1
            }
            return e.abrupt("return", i)
          case 9:
            return e.abrupt("return", null)
          case 10:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function Zr() {
  var /* [auto-meaningful-name] */n$sent
  var /* [auto-meaningful-name] */n$sent1
  return RegeneratorRuntime.wrap(function (n) {
    for (;;) {
      switch (n.prev = n.next) {
        case 0:
          n.next = 2
          return Module_3.f(Module_22.J)
        case 2:
          n$sent = n.sent
          n.next = 5
          return Module_3.f(Module_22.I)
        case 5:
          if (n$sent1 = n.sent, !n$sent) {
            n.next = 9
            break
          }
          n.next = 9
          return Module_3.b(Module_197.d, n$sent1, function (e) {
            var /* [auto-meaningful-name] */Module_49$oTHelper$soundFileList
            Jr(e)
            if (!(null === (Module_49$oTHelper$soundFileList = Module_49.oTHelper.soundFileList) || undefined === Module_49$oTHelper$soundFileList)) {
              Module_49$oTHelper$soundFileList.clientOp.replaceSoundFileCdnUrl(e.id, e.cdnUrl)
            }
          })
        case 9:
        case "end":
          return n.stop()
      }
    }
  }, Sr)
}
function Jr(e) {
  return RegeneratorRuntime.wrap(function (t) {
    for (;;) {
      switch (t.prev = t.next) {
        case 0:
          t.next = 2
          return Module_3.e(Src_editor_redux_common_actions.Rg(e.id, e.cdnUrl))
        case 2:
        case "end":
          return t.stop()
      }
    }
  }, Ar)
}
function $r(e) {
  return RegeneratorRuntime.wrap(function (t) {
    for (;;) {
      switch (t.prev = t.next) {
        case 0:
          if (!(null === e || undefined === e)) {
            e.forEach(function (e) {
              if (e.source && Src_shared_tools_index.R(e.source)) {
                e.source = Src_shared_tools_index.n(e.source)
              }
            })
          }
          t.next = 3
          return Module_3.e(Src_editor_redux_common_actions.Vh(e || []))
        case 3:
          t.next = 5
          return Module_3.b(Zr)
        case 5:
        case "end":
          return t.stop()
      }
    }
  }, Ir)
}
function eo(e) {
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$id
  var /* [auto-meaningful-name] */e$payload$isEmitOT
  var o
  var /* [auto-meaningful-name] */Module_49$oTHelper$soundFileList
  return RegeneratorRuntime.wrap(function (a) {
    for (;;) {
      switch (a.prev = a.next) {
        case 0:
          e$payload = e.payload
          e$payload$id = e$payload.id
          e$payload$isEmitOT = e$payload.isEmitOT
          o = undefined === e$payload$isEmitOT || e$payload$isEmitOT
          Module_33.Tb(e$payload$id)
          a.next = 4
          return Module_3.e(Src_editor_redux_common_actions.Nh(e$payload$id))
        case 4:
          a.next = 6
          return Module_3.e(Src_editor_redux_common_actions.Qj())
        case 6:
          a.next = 8
          return Module_3.e(Src_editor_redux_common_actions.Uj())
        case 8:
          a.next = 10
          return Module_3.e(Src_editor_redux_common_actions.Zj())
        case 10:
          a.next = 12
          return Module_3.e(Src_editor_redux_common_actions.Fi(true))
        case 12:
          if (o) {
            if (!(null === (Module_49$oTHelper$soundFileList = Module_49.oTHelper.soundFileList) || undefined === Module_49$oTHelper$soundFileList)) {
              Module_49$oTHelper$soundFileList.clientOp.remove(e$payload$id)
            }
            Module_26.q(Module_26.c.SOUND_LIBRARY, e$payload$id)
          }
        case 13:
        case "end":
          return a.stop()
      }
    }
  }, jr)
}
function to(e) {
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$id
  var /* [auto-meaningful-name] */e$payload$newName
  var /* [auto-meaningful-name] */e$payload$oldName
  var /* [auto-meaningful-name] */e$payload$isEmitOT
  var a
  var /* [auto-meaningful-name] */Module_49$oTHelper$soundFileList
  return RegeneratorRuntime.wrap(function (l) {
    for (;;) {
      switch (l.prev = l.next) {
        case 0:
          e$payload = e.payload
          e$payload$id = e$payload.id
          e$payload$newName = e$payload.newName
          e$payload$oldName = e$payload.oldName
          e$payload$isEmitOT = e$payload.isEmitOT
          a = undefined === e$payload$isEmitOT || e$payload$isEmitOT
          l.next = 3
          return Module_3.e(Src_editor_redux_common_actions.Ph(e$payload$id, e$payload$newName))
        case 3:
          l.next = 5
          return Module_3.e(Src_editor_redux_common_actions.Qj())
        case 5:
          l.next = 7
          return Module_3.e(Src_editor_redux_common_actions.Zj())
        case 7:
          if (a) {
            if (!(null === (Module_49$oTHelper$soundFileList = Module_49.oTHelper.soundFileList) || undefined === Module_49$oTHelper$soundFileList)) {
              Module_49$oTHelper$soundFileList.clientOp.replaceSoundName(e$payload$id, e$payload$newName)
            }
            Module_26.z.replaceTextValue("audio_sound_file_list_dropdown", "SOUND_FILE_ID", e$payload$oldName, e$payload$newName)
          }
        case 8:
        case "end":
          return l.stop()
      }
    }
  }, Nr)
}
function no(e) {
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$iconFiles
  var /* [auto-meaningful-name] */e$payload$isEmitOT
  var o
  var /* [auto-meaningful-name] */Module_49$oTHelper$iconFileList
  return RegeneratorRuntime.wrap(function (a) {
    for (;;) {
      switch (a.prev = a.next) {
        case 0:
          e$payload = e.payload
          e$payload$iconFiles = e$payload.iconFiles
          e$payload$isEmitOT = e$payload.isEmitOT
          o = undefined === e$payload$isEmitOT || e$payload$isEmitOT
          a.next = 3
          return Module_3.e(Src_editor_redux_common_actions.df(e$payload$iconFiles))
        case 3:
          if (o) {
            if (!(null === (Module_49$oTHelper$iconFileList = Module_49.oTHelper.iconFileList) || undefined === Module_49$oTHelper$iconFileList)) {
              Module_49$oTHelper$iconFileList.clientOp.add(e$payload$iconFiles)
            }
          }
        case 4:
        case "end":
          return a.stop()
      }
    }
  }, Rr)
}
function ro(e) {
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$fileList
  var /* [auto-meaningful-name] */e$payload$onSuccess
  var /* [auto-meaningful-name] */g$sent
  var i
  var a
  var s
  var l
  var u
  var d
  var /* [auto-meaningful-name] */g$sent1
  var f
  var h
  var m
  return RegeneratorRuntime.wrap(function (g) {
    for (;;) {
      switch (g.prev = g.next) {
        case 0:
          e$payload = e.payload
          e$payload$fileList = e$payload.fileList
          e$payload$onSuccess = e$payload.onSuccess
          g.next = 3
          return Module_3.f(Module_22.s)
        case 3:
          g$sent = g.sent
          i = []
          a = []
          s = []
          l = Array.from(e$payload$fileList)
          u = 0
        case 9:
          if (!(u < l.length)) {
            g.next = 18
            break
          }
          d = l[u]
          g.next = 13
          return Module_3.b(Src_shared_tools_index.qb, d, g$sent, [".svg"])
        case 13:
          if ("success" === (g$sent1 = g.sent).status) {
            a.push(g$sent1)
          } else {
            i.push(g$sent1)
          }
        case 15:
          u++
          g.next = 9
          break
        case 18:
          if (!a.length) {
            g.next = 21
            break
          }
          g.next = 21
          return Module_3.e(Src_editor_redux_common_actions.Fi(true))
        case 21:
          if (!(i.length > 0)) {
            g.next = 26
            break
          }
          g.next = 24
          return Module_3.e(Src_editor_redux_common_actions.uj(i, "image"))
        case 24:
          g.next = 28
          break
        case 26:
          g.next = 28
          return Module_3.e(Src_editor_redux_common_actions.mj({
            message: Src_shared_ui_language.c(g$sent, "importImageSuccess").toString(),
            duration: 1e3,
            type: "success"
          }))
        case 28:
          if (!(a.length > 0)) {
            g.next = 50
            break
          }
          f = Module_47.a(a)
          g.prev = 30
          m = RegeneratorRuntime.mark(function e() {
            var /* [auto-meaningful-name] */h$value
            var n
            var r
            var o
            var /* [auto-meaningful-name] */e$sent
            var /* [auto-meaningful-name] */Module_49$oTHelper$iconFileList
            return RegeneratorRuntime.wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    h$value = h.value
                    n = h$value.file.name.slice(0, h$value.file.name.lastIndexOf("."))
                    r = []
                    e.next = 5
                    return Module_3.f(Module_22.o)
                  case 5:
                    e.sent.forEach(function (e) {
                      r.push(e.name)
                    })
                    o = Module_33.bc(n, r)
                    e.next = 10
                    return Module_3.b(oo, h$value.file, o)
                  case 10:
                    if (!(e$sent = e.sent)) {
                      e.next = 16
                      break
                    }
                    s.push(e$sent)
                    e.next = 15
                    return Module_3.e(Src_editor_redux_common_actions.df([e$sent]))
                  case 15:
                    if (!(null === (Module_49$oTHelper$iconFileList = Module_49.oTHelper.iconFileList) || undefined === Module_49$oTHelper$iconFileList)) {
                      Module_49$oTHelper$iconFileList.clientOp.add([e$sent])
                    }
                  case 16:
                  case "end":
                    return e.stop()
                }
              }
            }, e)
          })
          f.s()
        case 33:
          if ((h = f.n()).done) {
            g.next = 37
            break
          }
          return g.delegateYield(m(), "t0", 35)
        case 35:
          g.next = 33
          break
        case 37:
          g.next = 42
          break
        case 39:
          g.prev = 39
          g.t1 = g.catch(30)
          f.e(g.t1)
        case 42:
          g.prev = 42
          f.f()
          return g.finish(42)
        case 45:
          if (e$payload$onSuccess) {
            e$payload$onSuccess(s)
          }
          g.next = 48
          return Module_3.e(Src_editor_redux_common_actions.Zj())
        case 48:
          g.next = 50
          return Module_3.b(ao)
        case 50:
        case "end":
          return g.stop()
      }
    }
  }, kr, null, [[30, 39, 42, 45]])
}
function oo(e, t) {
  return io.apply(this, arguments)
}
function io() {
  return (io = Module_7.a(RegeneratorRuntime.mark(function e(t, n) {
    var /* [auto-meaningful-name] */e$sent
    var o
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2
            return Src_shared_tools_index.ob(t)
          case 2:
            if (!(e$sent = e.sent)) {
              e.next = 6
              break
            }
            o = {
              cdnUrl: "",
              id: Module_64.a("ICON"),
              name: n,
              md5: "",
              source: e$sent
            }
            return e.abrupt("return", o)
          case 6:
            return e.abrupt("return", null)
          case 7:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function ao() {
  var /* [auto-meaningful-name] */n$sent
  var /* [auto-meaningful-name] */n$sent1
  return RegeneratorRuntime.wrap(function (n) {
    for (;;) {
      switch (n.prev = n.next) {
        case 0:
          n.next = 2
          return Module_3.f(Module_22.J)
        case 2:
          n$sent = n.sent
          n.next = 5
          return Module_3.f(Module_22.o)
        case 5:
          if (n$sent1 = n.sent, n.prev = 6, !n$sent) {
            n.next = 10
            break
          }
          n.next = 10
          return Module_3.b(Module_197.b, n$sent1, function (e) {
            var /* [auto-meaningful-name] */Module_49$oTHelper$iconFileList
            so(e)
            if (!(null === (Module_49$oTHelper$iconFileList = Module_49.oTHelper.iconFileList) || undefined === Module_49$oTHelper$iconFileList)) {
              Module_49$oTHelper$iconFileList.clientOp.replaceIconFileCdnUrl(e.id, e.cdnUrl)
            }
          })
        case 10:
          n.next = 15
          break
        case 12:
          n.prev = 12
          n.t0 = n.catch(6)
          console.error(n.t0)
        case 15:
        case "end":
          return n.stop()
      }
    }
  }, xr, null, [[6, 12]])
}
function so(e) {
  return RegeneratorRuntime.wrap(function (t) {
    for (;;) {
      switch (t.prev = t.next) {
        case 0:
          t.next = 2
          return Module_3.e(Src_editor_redux_common_actions.Pg(e.id, e.cdnUrl))
        case 2:
        case "end":
          return t.stop()
      }
    }
  }, Dr)
}
function co(e) {
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$id
  var /* [auto-meaningful-name] */e$payload$isEmitOT
  var o
  var /* [auto-meaningful-name] */Module_49$oTHelper$iconFileList
  return RegeneratorRuntime.wrap(function (a) {
    for (;;) {
      switch (a.prev = a.next) {
        case 0:
          e$payload = e.payload
          e$payload$id = e$payload.id
          e$payload$isEmitOT = e$payload.isEmitOT
          o = undefined === e$payload$isEmitOT || e$payload$isEmitOT
          a.next = 3
          return Module_3.e(Src_editor_redux_common_actions.Hh(e$payload$id))
        case 3:
          a.next = 5
          return Module_3.e(Src_editor_redux_common_actions.Qj())
        case 5:
          a.next = 7
          return Module_3.e(Src_editor_redux_common_actions.Uj())
        case 7:
          a.next = 9
          return Module_3.e(Src_editor_redux_common_actions.Zj())
        case 9:
          a.next = 11
          return Module_3.e(Src_editor_redux_common_actions.Fi(true))
        case 11:
          if (o) {
            if (!(null === (Module_49$oTHelper$iconFileList = Module_49.oTHelper.iconFileList) || undefined === Module_49$oTHelper$iconFileList)) {
              Module_49$oTHelper$iconFileList.clientOp.remove(e$payload$id)
            }
            Module_26.q(Module_26.c.ICON_LIBRARY, e$payload$id)
          }
        case 12:
        case "end":
          return a.stop()
      }
    }
  }, Mr)
}
function lo(e) {
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$id
  var /* [auto-meaningful-name] */e$payload$newName
  var /* [auto-meaningful-name] */e$payload$oldName
  var /* [auto-meaningful-name] */e$payload$isEmitOT
  var a
  var /* [auto-meaningful-name] */Module_49$oTHelper$iconFileList
  return RegeneratorRuntime.wrap(function (l) {
    for (;;) {
      switch (l.prev = l.next) {
        case 0:
          e$payload = e.payload
          e$payload$id = e$payload.id
          e$payload$newName = e$payload.newName
          e$payload$oldName = e$payload.oldName
          e$payload$isEmitOT = e$payload.isEmitOT
          a = undefined === e$payload$isEmitOT || e$payload$isEmitOT
          l.next = 3
          return Module_3.e(Src_editor_redux_common_actions.Oh(e$payload$id, e$payload$newName))
        case 3:
          l.next = 5
          return Module_3.e(Src_editor_redux_common_actions.Qj())
        case 5:
          l.next = 7
          return Module_3.e(Src_editor_redux_common_actions.Zj())
        case 7:
          if (a) {
            if (!(null === (Module_49$oTHelper$iconFileList = Module_49.oTHelper.iconFileList) || undefined === Module_49$oTHelper$iconFileList)) {
              Module_49$oTHelper$iconFileList.clientOp.replaceIconName(e$payload$id, e$payload$newName)
            }
            Module_26.z.replaceTextValue("icon_file_list_dropdown", "ICON_FILE_ID", e$payload$oldName + ".svg", e$payload$newName + ".svg")
          }
        case 8:
        case "end":
          return l.stop()
      }
    }
  }, Lr)
}
function uo(e) {
  return RegeneratorRuntime.wrap(function (t) {
    for (;;) {
      switch (t.prev = t.next) {
        case 0:
          if (!(null === e || undefined === e)) {
            e.forEach(function (e) {
              if (e.source && Src_shared_tools_index.R(e.source)) {
                e.source = Src_shared_tools_index.n(e.source)
              }
            })
          }
          t.next = 3
          return Module_3.e(Src_editor_redux_common_actions.Rh(e || []))
        case 3:
          t.next = 5
          return Module_3.b(ao)
        case 5:
        case "end":
          return t.stop()
      }
    }
  }, Pr)
}
gr = {}
Module_11.a(gr, Src_editor_redux_common_actions.X, Fr)
Module_11.a(gr, Src_editor_redux_common_actions.Y, Gr)
Module_11.a(gr, Src_editor_redux_common_actions.s, Hr)
Module_11.a(gr, Src_editor_redux_common_actions.A, zr)
Module_11.a(gr, Src_editor_redux_common_actions.J, Vr)
Module_11.a(gr, Src_editor_redux_common_actions.Z, Yr)
Module_11.a(gr, Src_editor_redux_common_actions.w, qr)
Module_11.a(gr, Src_editor_redux_common_actions.v, Kr)
Module_11.a(gr, Src_editor_redux_common_actions.ob, eo)
Module_11.a(gr, Src_editor_redux_common_actions.qb, to)
Module_11.a(gr, Src_editor_redux_common_actions.q, no)
Module_11.a(gr, Src_editor_redux_common_actions.r, ro)
Module_11.a(gr, Src_editor_redux_common_actions.mb, co)
Module_11.a(gr, Src_editor_redux_common_actions.pb, lo)
var po = gr
var fo = qn(po)
function ho() {
  return RegeneratorRuntime.wrap(function (e) {
    for (;;) {
      switch (e.prev = e.next) {
        case 0:
          e.next = 2
          return Module_3.g(Object.keys(po), fo)
        case 2:
        case "end":
          return e.stop()
      }
    }
  }, Br)
}
var mo = RegeneratorRuntime.mark(go)
function go() {
  var /* [auto-meaningful-name] */O$sent
  var /* [auto-meaningful-name] */O$sent1
  var /* [auto-meaningful-name] */O$sent2
  var /* [auto-meaningful-name] */O$sent3
  var /* [auto-meaningful-name] */O$sent4
  var /* [auto-meaningful-name] */O$sent5
  var s
  var l
  var u
  var d
  var p
  var f
  var h
  var m
  var g
  var _
  var v
  var b
  var y
  var /* [auto-meaningful-name] */y$value
  return RegeneratorRuntime.wrap(function (O) {
    for (;;) {
      switch (O.prev = O.next) {
        case 0:
          O.next = 2
          return Module_3.f(function (e) {
            return e.project.globalVariableList
          })
        case 2:
          O$sent = O.sent
          O.next = 5
          return Module_3.f(function (e) {
            return e.project.globalArrayList
          })
        case 5:
          O$sent1 = O.sent
          O.next = 8
          return Module_3.f(function (e) {
            return e.project.globalObjectList
          })
        case 8:
          O$sent2 = O.sent
          O.next = 11
          return Module_3.f(function (e) {
            return e.project.globalWidgetIds
          })
        case 11:
          O$sent3 = O.sent
          O.next = 14
          return Module_3.f(function (e) {
            return e.project.id
          })
        case 14:
          O$sent4 = O.sent
          O.next = 17
          return Module_3.f(function (e) {
            return e.project.screens
          })
        case 17:
          O$sent5 = O.sent
          s = []
          l = []
          u = []
          d = []
          p = []
          O$sent3.forEach(function (e) {
            var t = Module_9.dc.get(e)
            if (t) {
              if (!(t.type !== Src_editor_widget_builtIn_types.B && t.type !== Src_editor_widget_builtIn_types.y)) {
                d.push(t)
              }
              if (t.type === Src_editor_widget_builtIn_types.G) {
                p.push(t)
              }
            }
          })
          Array.prototype.push.apply(s, O$sent)
          Array.prototype.push.apply(l, O$sent1)
          Array.prototype.push.apply(u, O$sent2)
          f = s.map(function (e) {
            return Module_110.a("PRIMITIVE", e, {
              isWatching: false
            })
          })
          h = l.map(function (e) {
            return Module_110.a("LIST", e, {
              isWatching: false
            })
          })
          m = u.map(function (e) {
            return Module_110.a("DICT", e, {
              isWatching: false
            })
          })
          g = d.map(function (e) {
            var t = Module_20.getLocalDocumentObject(O$sent4, e.id) || e.attributes.fields
            return Module_110.a(e.type, {
              id: e.id,
              defaultValue: "no-use",
              value: t,
              name: e.title,
              isWatching: false
            })
          })
          _ = p.map(function (e) {
            return Module_110.a(e.type, {
              id: e.id,
              defaultValue: "no-use",
              value: e.attributes.db,
              name: e.title,
              isWatching: false
            })
          })
          O$sent5.forEach(function (e) {
            var /* [auto-meaningful-name] */e$primitiveVariables = e.primitiveVariables
            var /* [auto-meaningful-name] */e$arrayVariables = e.arrayVariables
            var /* [auto-meaningful-name] */e$objectVariables = e.objectVariables
            e$primitiveVariables.forEach(function (t) {
              f.push(Module_110.a("PRIMITIVE", t, {
                isWatching: false,
                screenId: e.id
              }))
            })
            e$arrayVariables.forEach(function (t) {
              h.push(Module_110.a("LIST", t, {
                isWatching: false,
                screenId: e.id
              }))
            })
            e$objectVariables.forEach(function (t) {
              m.push(Module_110.a("DICT", t, {
                isWatching: false,
                screenId: e.id
              }))
            })
          })
          v = [].concat(Module_25.a(f), Module_25.a(h), Module_25.a(m), Module_25.a(g), Module_25.a(_))
          b = Module_47.a(v)
          O.prev = 35
          b.s()
        case 37:
          if ((y = b.n()).done) {
            O.next = 43
            break
          }
          y$value = y.value
          O.next = 41
          return Module_3.e(Src_editor_redux_common_actions.bf(y$value))
        case 41:
          O.next = 37
          break
        case 43:
          O.next = 48
          break
        case 45:
          O.prev = 45
          O.t0 = O.catch(35)
          b.e(O.t0)
        case 48:
          O.prev = 48
          b.f()
          return O.finish(48)
        case 51:
        case "end":
          return O.stop()
      }
    }
  }, mo, null, [[35, 45, 48, 51]])
}
export { $r }
export { uo }
export { ho }
export { go }
