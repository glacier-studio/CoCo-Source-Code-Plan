/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：738__part-1
 */

"use strict"

import { f, m } from "./index__part-0"
import * as /* [auto-meaningful-name] */Module_62 from /* 62 */"./62"
import { useDispatch, useSelector } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { useRef, useState, useEffect, useCallback } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import /* [auto-meaningful-name] */Classnames1 from /* 8 */"classnames"
import /* 2681 */"react-intl"
import * as /* [auto-meaningful-name] */Src_shared_ui_language from /* 23 */"../../../../../src/shared/ui/language"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"../10/index"
import * as /* [auto-meaningful-name] */Module_1043 from /* 1043 */"./1043"
var M = function (e) {
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : .001
  return Math.abs(e.x) <= t && Math.abs(e.y) <= t && Math.abs(e.z) <= t
}
var L = new Module_62.g("#f6f4fd")
function P() {
  var e = useRef()
  var t = useRef(0)
  var n = useRef()
  var a = useState(false)
  var s = Module_10.a(a, 2)
  var c = s[0]
  var u = s[1]
  var d = useDispatch()
  var p = useSelector(function (e) {
    return e
  })
  n.current = p
  useEffect(function () {
    var t
    var n = {
      width: (null === (t = document.getElementById("emulatorCanvasWrapper")) || undefined === t ? undefined : t.clientWidth) || 340,
      height: 300
    }
    var r = new Module_62.H()
    var o = new Module_62.B(75, n.width / n.height, .1, 1e3)
    var i = new Module_62.R({
      antialias: true,
      alpha: false
    })
    var a = new Module_62.C()
    a.position.set(10, 10, 50)
    a.intensity = .2
    r.add(new Module_62.a())
    r.add(a)
    r.background = null
    o.position.z = 6
    i.setSize(n.width, n.height)
    i.setClearColor(L)
    i.autoClear = false
    var s = new Module_1043.a()
    var c = new Module_62.M().load("/editor/model/background.png")
    r.background = c
    s.loadAsync("/editor/model/phone.fbx").then(function (t) {
      r.add(t)
      e.current = {
        scene: r,
        renderer: i,
        camera: o,
        phone: t
      }
      u(true)
    })
    return function () {
      i.dispose()
      e.current = undefined
    }
  }, [])
  var h = new Module_62.O()
  var g = new Module_62.O()
  !function (e, t) {
    var n = React.useRef()
    var i = React.useRef()
    var a = useCallback(function (t) {
      if (undefined !== i.current) {
        var r = t - i.current
        e(r / 1e3)
      }
      i.current = t
      n.current = requestAnimationFrame(a)
    }, [e])
    React.useEffect(function () {
      n.current = requestAnimationFrame(a)
      return function () {
        if (n.current) {
          cancelAnimationFrame(n.current)
        }
      }
    }, [a])
  }(function (r) {
    var /* [auto-meaningful-name] */e$current = e.current
    var /* [auto-meaningful-name] */n$current = n.current
    if (e$current && n$current) {
      var /* [auto-meaningful-name] */e$current$renderer = e$current.renderer
      var /* [auto-meaningful-name] */e$current$scene = e$current.scene
      var /* [auto-meaningful-name] */e$current$camera = e$current.camera
      var /* [auto-meaningful-name] */e$current$phone = e$current.phone
      var p = 8 * r
      e$current$phone.rotation.toVector3(h)
      g.copy(e$current$phone.position)
      var /* [auto-meaningful-name] */e$current$phone$rotation = e$current$phone.rotation
      var /* [auto-meaningful-name] */e$current$phone$rotation$x = e$current$phone$rotation.x
      var /* [auto-meaningful-name] */e$current$phone$rotation$y = e$current$phone$rotation.y
      var /* [auto-meaningful-name] */e$current$phone$rotation$z = e$current$phone$rotation.z
      var /* [auto-meaningful-name] */n$current$rotation = n$current.rotation
      var /* [auto-meaningful-name] */n$current$rotation$x = n$current$rotation.x
      var /* [auto-meaningful-name] */n$current$rotation$y = n$current$rotation.y
      var /* [auto-meaningful-name] */n$current$rotation$z = n$current$rotation.z
      e$current$phone.rotation.set(Module_62.s.lerp(e$current$phone$rotation$x, n$current$rotation$x * Module_62.s.DEG2RAD, p), Module_62.s.lerp(e$current$phone$rotation$y, n$current$rotation$y * Module_62.s.DEG2RAD, p), Module_62.s.lerp(e$current$phone$rotation$z, n$current$rotation$z * Module_62.s.DEG2RAD, p))
      var /* [auto-meaningful-name] */e$current$phone$position = e$current$phone.position
      var /* [auto-meaningful-name] */e$current$phone$position$x = e$current$phone$position.x
      var /* [auto-meaningful-name] */e$current$phone$position$y = e$current$phone$position.y
      var /* [auto-meaningful-name] */e$current$phone$position$z = e$current$phone$position.z
      var /* [auto-meaningful-name] */n$current$position = n$current.position
      var /* [auto-meaningful-name] */n$current$position$x = n$current$position.x
      var /* [auto-meaningful-name] */n$current$position$y = n$current$position.y
      var /* [auto-meaningful-name] */n$current$position$z = n$current$position.z
      e$current$phone.position.set(Module_62.s.lerp(e$current$phone$position$x, n$current$position$x, p), Module_62.s.lerp(e$current$phone$position$y, n$current$position$y, p), Module_62.s.lerp(e$current$phone$position$z, n$current$position$z, p))
      e$current$renderer.clear(true, true, true)
      e$current$renderer.render(e$current$scene, e$current$camera)
      t.current -= r
      if (t.current < 0) {
        var x = g.subVectors(e$current$phone.position, g).divideScalar(r * r)
        if (M(x)) {
          if (!M(n$current.additionalAcceleration, 0)) {
            d(f({
              x: 0,
              y: 0,
              z: 0
            }))
          }
        } else {
          var D = x.x
          var L = x.y
          var P = x.z
          d(f({
            x: D,
            y: L,
            z: P
          }))
        }
        var B = h.subVectors(e$current$phone.rotation.toVector3(), h).divideScalar(r)
        if (M(B)) {
          if (!M(n$current.angularVelocity, 0)) {
            d(m({
              x: 0,
              y: 0,
              z: 0
            }))
          }
        } else {
          var F = B.x
          var G = B.y
          var W = B.z
          d(m({
            x: F,
            y: G,
            z: W
          }))
        }
        t.current = .33
      }
    }
  })
  var _ = useCallback(function (t) {
    if (t && e.current) {
      t.appendChild(e.current.renderer.domElement)
    }
  }, [c])
  return React.createElement("div", {
    ref: _,
    id: "emulatorCanvasWrapper"
  })
}
export { P }
