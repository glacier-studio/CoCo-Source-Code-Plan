/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：3323__part-4
 */

"use strict"

import { o, a, u } from "./3323__part-1"
import { m, c, f, v, y, x, A, C, g, V, w, k, M, P, I, G, D, F, L, j, T, O, q, E, N, J, X, Z, U, tt, it, ht, _t, mt, ct, yt, pt, Vt, It, Dt, Ft, Lt, Rt, jt, Tt, Ot, zt, Be, ge, Ve, Me, Pe, Ie, Ge, je, Ne } from "./3323__part-2"
import { ze, We, Qe, Ye, ei, ri, di, Fi, $i, hn, pn, Bn, Sn, Gn, Ln, Tn, qn, En } from "./3323__part-3"
import * as /* [auto-meaningful-name] */Module_59 from /* 59 */"../59/index"
import * as /* [auto-meaningful-name] */Module_58 from /* 58 */"../58/index"
import * as /* [auto-meaningful-name] */Module_39 from /* 39 */"../39"
import * as /* [auto-meaningful-name] */Module_27 from /* 27 */"../27"
import * as /* [auto-meaningful-name] */Module_47 from /* 47 */"../47"
var Jn = function () {
  function t() {
    Module_27.a(this, t)
    this.categoryBits = 1
    this.maskBits = 65535
    this.groupIndex = 0
  }
  Module_39.a(t, [
    {
      key: "Clone",
      value: function () {
        return new t().Copy(this)
      }
    }, {
      key: "Copy",
      value: function (t) {
        this.categoryBits = t.categoryBits
        this.maskBits = t.maskBits
        this.groupIndex = t.groupIndex || 0
        return this
      }
    }
  ])
  return t
}()
Jn.DEFAULT = new Jn()
var Xn = function t() {
  Module_27.a(this, t)
  this.userData = null
  this.friction = .2
  this.restitution = 0
  this.restitutionThreshold = 1 * y
  this.density = 0
  this.isSensor = false
  this.filter = new Jn()
}
var Zn = function () {
  function t(e, i) {
    Module_27.a(this, t)
    this.aabb = new Ie()
    this.childIndex = 0
    this.fixture = e
    this.childIndex = i
    this.fixture.m_shape.ComputeAABB(this.aabb, this.fixture.m_body.GetTransform(), i)
    this.treeNode = this.fixture.m_body.m_world.m_contactManager.m_broadPhase.CreateProxy(this.aabb, this)
  }
  Module_39.a(t, [
    {
      key: "Reset",
      value: function () {
        this.fixture.m_body.m_world.m_contactManager.m_broadPhase.DestroyProxy(this.treeNode)
      }
    }, {
      key: "Touch",
      value: function () {
        this.fixture.m_body.m_world.m_contactManager.m_broadPhase.TouchProxy(this.treeNode)
      }
    }, {
      key: "Synchronize",
      value: function (e, i) {
        if (e === i) {
          this.fixture.m_shape.ComputeAABB(this.aabb, e, this.childIndex)
          this.fixture.m_body.m_world.m_contactManager.m_broadPhase.MoveProxy(this.treeNode, this.aabb, It.ZERO)
        } else {
          var /* [auto-meaningful-name] */t$Synchronize_s_aabb1 = t.Synchronize_s_aabb1
          var /* [auto-meaningful-name] */t$Synchronize_s_aabb2 = t.Synchronize_s_aabb2
          this.fixture.m_shape.ComputeAABB(t$Synchronize_s_aabb1, e, this.childIndex)
          this.fixture.m_shape.ComputeAABB(t$Synchronize_s_aabb2, i, this.childIndex)
          this.aabb.Combine2(t$Synchronize_s_aabb1, t$Synchronize_s_aabb2)
          var /* [auto-meaningful-name] */t$Synchronize_s_displacement = t.Synchronize_s_displacement
          t$Synchronize_s_displacement.Copy(t$Synchronize_s_aabb2.GetCenter()).SelfSub(t$Synchronize_s_aabb1.GetCenter())
          this.fixture.m_body.m_world.m_contactManager.m_broadPhase.MoveProxy(this.treeNode, this.aabb, t$Synchronize_s_displacement)
        }
      }
    }
  ])
  return t
}()
Zn.Synchronize_s_aabb1 = new Ie()
Zn.Synchronize_s_aabb2 = new Ie()
Zn.Synchronize_s_displacement = new It()
var Un
var Wn = function () {
  function t(e, i) {
    Module_27.a(this, t)
    this.m_density = 0
    this.m_next = null
    this.m_friction = 0
    this.m_restitution = 0
    this.m_restitutionThreshold = 1 * y
    this.m_proxies = []
    this.m_filter = new Jn()
    this.m_isSensor = false
    this.m_userData = null
    this.m_body = e
    this.m_shape = i.shape.Clone()
    this.m_userData = m(i.userData, null)
    this.m_friction = m(i.friction, .2)
    this.m_restitution = m(i.restitution, 0)
    this.m_restitutionThreshold = m(i.restitutionThreshold, 0)
    this.m_filter.Copy(m(i.filter, Jn.DEFAULT))
    this.m_isSensor = m(i.isSensor, false)
    this.m_density = m(i.density, 0)
  }
  Module_39.a(t, [
    {
      key: "m_proxyCount",
      get: function () {
        return this.m_proxies.length
      }
    }, {
      key: "Reset",
      value: function () {}
    }, {
      key: "GetType",
      value: function () {
        return this.m_shape.GetType()
      }
    }, {
      key: "GetShape",
      value: function () {
        return this.m_shape
      }
    }, {
      key: "SetSensor",
      value: function (t) {
        if (t !== this.m_isSensor) {
          this.m_body.SetAwake(true)
          this.m_isSensor = t
        }
      }
    }, {
      key: "IsSensor",
      value: function () {
        return this.m_isSensor
      }
    }, {
      key: "SetFilterData",
      value: function (t) {
        this.m_filter.Copy(t)
        this.Refilter()
      }
    }, {
      key: "GetFilterData",
      value: function () {
        return this.m_filter
      }
    }, {
      key: "Refilter",
      value: function () {
        for (var t = this.m_body.GetContactList(); t;) {
          var /* [auto-meaningful-name] */t$contact = t.contact
          var i = t$contact.GetFixtureA()
          var n = t$contact.GetFixtureB()
          if (!(i !== this && n !== this)) {
            t$contact.FlagForFiltering()
          }
          t = t.next
        }
        this.TouchProxies()
      }
    }, {
      key: "GetBody",
      value: function () {
        return this.m_body
      }
    }, {
      key: "GetNext",
      value: function () {
        return this.m_next
      }
    }, {
      key: "GetUserData",
      value: function () {
        return this.m_userData
      }
    }, {
      key: "SetUserData",
      value: function (t) {
        this.m_userData = t
      }
    }, {
      key: "TestPoint",
      value: function (t) {
        return this.m_shape.TestPoint(this.m_body.GetTransform(), t)
      }
    }, {
      key: "ComputeDistance",
      value: function (t, e, i) {
        return this.m_shape.ComputeDistance(this.m_body.GetTransform(), t, e, i)
      }
    }, {
      key: "RayCast",
      value: function (t, e, i) {
        return this.m_shape.RayCast(t, e, this.m_body.GetTransform(), i)
      }
    }, {
      key: "GetMassData",
      value: function () {
        var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : new We()
        this.m_shape.ComputeMass(t, this.m_density)
        return t
      }
    }, {
      key: "SetDensity",
      value: function (t) {
        this.m_density = t
      }
    }, {
      key: "GetDensity",
      value: function () {
        return this.m_density
      }
    }, {
      key: "GetFriction",
      value: function () {
        return this.m_friction
      }
    }, {
      key: "SetFriction",
      value: function (t) {
        this.m_friction = t
      }
    }, {
      key: "GetRestitution",
      value: function () {
        return this.m_restitution
      }
    }, {
      key: "SetRestitution",
      value: function (t) {
        this.m_restitution = t
      }
    }, {
      key: "GetRestitutionThreshold",
      value: function () {
        return this.m_restitutionThreshold
      }
    }, {
      key: "SetRestitutionThreshold",
      value: function (t) {
        this.m_restitutionThreshold = t
      }
    }, {
      key: "GetAABB",
      value: function (t) {
        return this.m_proxies[t].aabb
      }
    }, {
      key: "Dump",
      value: function (t, e) {
        t("    const fd: b2FixtureDef = new b2FixtureDef();\n")
        t("    fd.friction = %.15f;\n", this.m_friction)
        t("    fd.restitution = %.15f;\n", this.m_restitution)
        t("    fd.restitutionThreshold = %.15f;\n", this.m_restitutionThreshold)
        t("    fd.density = %.15f;\n", this.m_density)
        t("    fd.isSensor = %s;\n", this.m_isSensor ? "true" : "false")
        t("    fd.filter.categoryBits = %d;\n", this.m_filter.categoryBits)
        t("    fd.filter.maskBits = %d;\n", this.m_filter.maskBits)
        t("    fd.filter.groupIndex = %d;\n", this.m_filter.groupIndex)
        this.m_shape.Dump(t)
        t("\n")
        t("    fd.shape = shape;\n")
        t("\n")
        t("    bodies[%d].CreateFixture(fd);\n", e)
      }
    }, {
      key: "CreateProxies",
      value: function () {
        if (0 !== this.m_proxies.length) {
          throw new Error()
        }
        for (var t = 0; t < this.m_shape.GetChildCount(); ++t) {
          this.m_proxies[t] = new Zn(this, t)
        }
      }
    }, {
      key: "DestroyProxies",
      value: function () {
        var t
        var e = Module_47.a(this.m_proxies)
        try {
          for (e.s(); !(t = e.n()).done;) {
            t.value.Reset()
          }
        } catch (i) {
          e.e(i)
        } finally {
          e.f()
        }
        this.m_proxies.length = 0
      }
    }, {
      key: "TouchProxies",
      value: function () {
        var t
        var e = Module_47.a(this.m_proxies)
        try {
          for (e.s(); !(t = e.n()).done;) {
            t.value.Touch()
          }
        } catch (i) {
          e.e(i)
        } finally {
          e.f()
        }
      }
    }, {
      key: "SynchronizeProxies",
      value: function (t, e) {
        var i
        var n = Module_47.a(this.m_proxies)
        try {
          for (n.s(); !(i = n.n()).done;) {
            i.value.Synchronize(t, e)
          }
        } catch (s) {
          n.e(s)
        } finally {
          n.f()
        }
      }
    }
  ])
  return t
}()
!function (t) {
  t[t.b2_unknown = -1] = "b2_unknown"
  t[t.b2_staticBody = 0] = "b2_staticBody"
  t[t.b2_kinematicBody = 1] = "b2_kinematicBody"
  t[t.b2_dynamicBody = 2] = "b2_dynamicBody"
}(Un || (Un = {}))
var Qn = function t() {
  Module_27.a(this, t)
  this.id = ""
  this.type = Un.b2_staticBody
  this.position = new It(0, 0)
  this.angle = 0
  this.linearVelocity = new It(0, 0)
  this.angularVelocity = 0
  this.linearDamping = 0
  this.angularDamping = 0
  this.allowSleep = true
  this.awake = true
  this.fixedRotation = false
  this.bullet = false
  this.enabled = true
  this.userData = null
  this.gravityScale = 1
}
var Yn = function () {
  function t(e, i) {
    Module_27.a(this, t)
    this.m_type = Un.b2_staticBody
    this.m_islandFlag = false
    this.m_awakeFlag = false
    this.m_autoSleepFlag = false
    this.m_bulletFlag = false
    this.m_fixedRotationFlag = false
    this.m_enabledFlag = false
    this.m_toiFlag = false
    this.m_islandIndex = 0
    this.m_xf = new Tt()
    this.m_xf0 = new Tt()
    this.m_sweep = new Ot()
    this.m_linearVelocity = new It()
    this.m_angularVelocity = 0
    this.m_force = new It()
    this.m_torque = 0
    this.m_prev = null
    this.m_next = null
    this.m_fixtureList = null
    this.m_fixtureCount = 0
    this.m_jointList = null
    this.m_contactList = null
    this.m_mass = 1
    this.m_invMass = 1
    this.m_I = 0
    this.m_invI = 0
    this.m_linearDamping = 0
    this.m_angularDamping = 0
    this.m_gravityScale = 1
    this.m_sleepTime = 0
    this.m_userData = null
    this.m_controllerList = null
    this.m_controllerCount = 0
    this.m_id = e.id
    this.m_bulletFlag = m(e.bullet, false)
    this.m_fixedRotationFlag = m(e.fixedRotation, false)
    this.m_autoSleepFlag = m(e.allowSleep, true)
    if (m(e.awake, false) && m(e.type, Un.b2_staticBody) !== Un.b2_staticBody) {
      this.m_awakeFlag = true
    }
    this.m_enabledFlag = m(e.enabled, true)
    this.m_world = i
    this.m_xf.p.Copy(m(e.position, It.ZERO))
    this.m_xf.q.SetAngle(m(e.angle, 0))
    this.m_xf0.Copy(this.m_xf)
    this.m_sweep.localCenter.SetZero()
    this.m_sweep.c0.Copy(this.m_xf.p)
    this.m_sweep.c.Copy(this.m_xf.p)
    this.m_sweep.a0 = this.m_sweep.a = this.m_xf.q.GetAngle()
    this.m_sweep.alpha0 = 0
    this.m_linearVelocity.Copy(m(e.linearVelocity, It.ZERO))
    this.m_angularVelocity = m(e.angularVelocity, 0)
    this.m_linearDamping = m(e.linearDamping, 0)
    this.m_angularDamping = m(e.angularDamping, 0)
    this.m_gravityScale = m(e.gravityScale, 1)
    this.m_force.SetZero()
    this.m_torque = 0
    this.m_sleepTime = 0
    this.m_type = m(e.type, Un.b2_staticBody)
    this.m_mass = 0
    this.m_invMass = 0
    this.m_I = 0
    this.m_invI = 0
    this.m_userData = e.userData
    this.m_fixtureList = null
    this.m_fixtureCount = 0
    this.m_controllerList = null
    this.m_controllerCount = 0
  }
  Module_39.a(t, [
    {
      key: "GetId",
      value: function () {
        return this.m_id
      }
    }, {
      key: "CreateFixture",
      value: function (t) {
        var e = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 0
        return t instanceof Qe ? this.CreateFixtureShapeDensity(t, e) : this.CreateFixtureDef(t)
      }
    }, {
      key: "CreateFixtureDef",
      value: function (t) {
        if (this.m_world.IsLocked()) {
          throw new Error()
        }
        var e = new Wn(this, t)
        if (this.m_enabledFlag) {
          e.CreateProxies()
        }
        e.m_next = this.m_fixtureList
        this.m_fixtureList = e
        ++this.m_fixtureCount
        if (e.m_density > 0) {
          this.ResetMassData()
        }
        this.m_world.m_newContacts = true
        return e
      }
    }, {
      key: "CreateFixtureShapeDensity",
      value: function (e) {
        var i = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 0
        var /* [auto-meaningful-name] */t$CreateFixtureShapeDensity_s_def = t.CreateFixtureShapeDensity_s_def
        t$CreateFixtureShapeDensity_s_def.shape = e
        t$CreateFixtureShapeDensity_s_def.density = i
        return this.CreateFixtureDef(t$CreateFixtureShapeDensity_s_def)
      }
    }, {
      key: "DestroyFixture",
      value: function (t) {
        if (this.m_world.IsLocked()) {
          throw new Error()
        }
        for (var /* [auto-meaningful-name] */this$m_fixtureList = this.m_fixtureList, i = null; null !== this$m_fixtureList;) {
          if (this$m_fixtureList === t) {
            if (i) {
              i.m_next = t.m_next
            } else {
              this.m_fixtureList = t.m_next
            }
            break
          }
          i = this$m_fixtureList
          this$m_fixtureList = this$m_fixtureList.m_next
        }
        for (var /* [auto-meaningful-name] */this$m_contactList = this.m_contactList; this$m_contactList;) {
          var /* [auto-meaningful-name] */this$m_contactList$contact = this$m_contactList.contact
          this$m_contactList = this$m_contactList.next
          var r = this$m_contactList$contact.GetFixtureA()
          var o = this$m_contactList$contact.GetFixtureB()
          if (!(t !== r && t !== o)) {
            this.m_world.m_contactManager.Destroy(this$m_contactList$contact)
          }
        }
        if (this.m_enabledFlag) {
          t.DestroyProxies()
        }
        t.m_next = null
        t.Reset()
        --this.m_fixtureCount
        this.ResetMassData()
      }
    }, {
      key: "SetTransformVec",
      value: function (t, e) {
        this.SetTransformXY(t.x, t.y, e)
      }
    }, {
      key: "SetTransformXY",
      value: function (t, e, i) {
        if (this.m_world.IsLocked()) {
          throw new Error()
        }
        this.m_xf.q.SetAngle(i)
        this.m_xf.p.Set(t, e)
        this.m_xf0.Copy(this.m_xf)
        Tt.MulXV(this.m_xf, this.m_sweep.localCenter, this.m_sweep.c)
        this.m_sweep.a = i
        this.m_sweep.c0.Copy(this.m_sweep.c)
        this.m_sweep.a0 = i
        for (var /* [auto-meaningful-name] */this$m_fixtureList = this.m_fixtureList; this$m_fixtureList; this$m_fixtureList = this$m_fixtureList.m_next) {
          this$m_fixtureList.SynchronizeProxies(this.m_xf, this.m_xf)
        }
        this.m_world.m_newContacts = true
      }
    }, {
      key: "SetTransform",
      value: function (t) {
        this.SetTransformVec(t.p, t.GetAngle())
      }
    }, {
      key: "GetTransform",
      value: function () {
        return this.m_xf
      }
    }, {
      key: "GetPosition",
      value: function () {
        return this.m_xf.p
      }
    }, {
      key: "SetPosition",
      value: function (t) {
        this.SetTransformVec(t, this.GetAngle())
      }
    }, {
      key: "SetPositionXY",
      value: function (t, e) {
        this.SetTransformXY(t, e, this.GetAngle())
      }
    }, {
      key: "GetAngle",
      value: function () {
        return this.m_sweep.a
      }
    }, {
      key: "SetAngle",
      value: function (t) {
        this.SetTransformVec(this.GetPosition(), t)
      }
    }, {
      key: "GetWorldCenter",
      value: function () {
        return this.m_sweep.c
      }
    }, {
      key: "GetLocalCenter",
      value: function () {
        return this.m_sweep.localCenter
      }
    }, {
      key: "SetLinearVelocity",
      value: function (t) {
        if (this.m_type !== Un.b2_staticBody) {
          if (It.DotVV(t, t) > 0) {
            this.SetAwake(true)
          }
          this.m_linearVelocity.Copy(t)
        }
      }
    }, {
      key: "GetLinearVelocity",
      value: function () {
        return this.m_linearVelocity
      }
    }, {
      key: "SetAngularVelocity",
      value: function (t) {
        if (this.m_type !== Un.b2_staticBody) {
          if (t * t > 0) {
            this.SetAwake(true)
          }
          this.m_angularVelocity = t
        }
      }
    }, {
      key: "GetAngularVelocity",
      value: function () {
        return this.m_angularVelocity
      }
    }, {
      key: "GetDefinition",
      value: function (t) {
        t.type = this.GetType()
        t.allowSleep = this.m_autoSleepFlag
        t.angle = this.GetAngle()
        t.angularDamping = this.m_angularDamping
        t.gravityScale = this.m_gravityScale
        t.angularVelocity = this.m_angularVelocity
        t.fixedRotation = this.m_fixedRotationFlag
        t.bullet = this.m_bulletFlag
        t.awake = this.m_awakeFlag
        t.linearDamping = this.m_linearDamping
        t.linearVelocity.Copy(this.GetLinearVelocity())
        t.position.Copy(this.GetPosition())
        t.userData = this.GetUserData()
        return t
      }
    }, {
      key: "ApplyForce",
      value: function (t, e) {
        var i = !(arguments.length > 2 && undefined !== arguments[2]) || arguments[2]
        if (this.m_type === Un.b2_dynamicBody) {
          if (i && !this.m_awakeFlag) {
            this.SetAwake(true)
          }
          if (this.m_awakeFlag) {
            this.m_force.x += t.x
            this.m_force.y += t.y
            this.m_torque += (e.x - this.m_sweep.c.x) * t.y - (e.y - this.m_sweep.c.y) * t.x
          }
        }
      }
    }, {
      key: "ApplyForceToCenter",
      value: function (t) {
        var e = !(arguments.length > 1 && undefined !== arguments[1]) || arguments[1]
        if (this.m_type === Un.b2_dynamicBody) {
          if (e && !this.m_awakeFlag) {
            this.SetAwake(true)
          }
          if (this.m_awakeFlag) {
            this.m_force.x += t.x
            this.m_force.y += t.y
          }
        }
      }
    }, {
      key: "ApplyTorque",
      value: function (t) {
        var e = !(arguments.length > 1 && undefined !== arguments[1]) || arguments[1]
        if (this.m_type === Un.b2_dynamicBody) {
          if (e && !this.m_awakeFlag) {
            this.SetAwake(true)
          }
          if (this.m_awakeFlag) {
            this.m_torque += t
          }
        }
      }
    }, {
      key: "ApplyLinearImpulse",
      value: function (t, e) {
        var i = !(arguments.length > 2 && undefined !== arguments[2]) || arguments[2]
        if (this.m_type === Un.b2_dynamicBody) {
          if (i && !this.m_awakeFlag) {
            this.SetAwake(true)
          }
          if (this.m_awakeFlag) {
            this.m_linearVelocity.x += this.m_invMass * t.x
            this.m_linearVelocity.y += this.m_invMass * t.y
            this.m_angularVelocity += this.m_invI * ((e.x - this.m_sweep.c.x) * t.y - (e.y - this.m_sweep.c.y) * t.x)
          }
        }
      }
    }, {
      key: "ApplyLinearImpulseToCenter",
      value: function (t) {
        var e = !(arguments.length > 1 && undefined !== arguments[1]) || arguments[1]
        if (this.m_type === Un.b2_dynamicBody) {
          if (e && !this.m_awakeFlag) {
            this.SetAwake(true)
          }
          if (this.m_awakeFlag) {
            this.m_linearVelocity.x += this.m_invMass * t.x
            this.m_linearVelocity.y += this.m_invMass * t.y
          }
        }
      }
    }, {
      key: "ApplyAngularImpulse",
      value: function (t) {
        var e = !(arguments.length > 1 && undefined !== arguments[1]) || arguments[1]
        if (this.m_type === Un.b2_dynamicBody) {
          if (e && !this.m_awakeFlag) {
            this.SetAwake(true)
          }
          if (this.m_awakeFlag) {
            this.m_angularVelocity += this.m_invI * t
          }
        }
      }
    }, {
      key: "GetMass",
      value: function () {
        return this.m_mass
      }
    }, {
      key: "GetInertia",
      value: function () {
        return this.m_I + this.m_mass * It.DotVV(this.m_sweep.localCenter, this.m_sweep.localCenter)
      }
    }, {
      key: "GetMassData",
      value: function (t) {
        t.mass = this.m_mass
        t.I = this.m_I + this.m_mass * It.DotVV(this.m_sweep.localCenter, this.m_sweep.localCenter)
        t.center.Copy(this.m_sweep.localCenter)
        return t
      }
    }, {
      key: "SetMassData",
      value: function (e) {
        if (this.m_world.IsLocked()) {
          throw new Error()
        }
        if (this.m_type === Un.b2_dynamicBody) {
          this.m_invMass = 0
          this.m_I = 0
          this.m_invI = 0
          this.m_mass = e.mass
          if (this.m_mass <= 0) {
            this.m_mass = 1
          }
          this.m_invMass = 1 / this.m_mass
          if (e.I > 0 && !this.m_fixedRotationFlag) {
            this.m_I = e.I - this.m_mass * It.DotVV(e.center, e.center)
            this.m_invI = 1 / this.m_I
          }
          var i = t.SetMassData_s_oldCenter.Copy(this.m_sweep.c)
          this.m_sweep.localCenter.Copy(e.center)
          Tt.MulXV(this.m_xf, this.m_sweep.localCenter, this.m_sweep.c)
          this.m_sweep.c0.Copy(this.m_sweep.c)
          It.AddVCrossSV(this.m_linearVelocity, this.m_angularVelocity, It.SubVV(this.m_sweep.c, i, It.s_t0), this.m_linearVelocity)
        }
      }
    }, {
      key: "ResetMassData",
      value: function () {
        this.m_mass = 0
        this.m_invMass = 0
        this.m_I = 0
        this.m_invI = 0
        this.m_sweep.localCenter.SetZero()
        if (this.m_type === Un.b2_staticBody || this.m_type === Un.b2_kinematicBody) {
          this.m_sweep.c0.Copy(this.m_xf.p)
          this.m_sweep.c.Copy(this.m_xf.p)
          return void (this.m_sweep.a0 = this.m_sweep.a)
        }
        for (var e = t.ResetMassData_s_localCenter.SetZero(), /* [auto-meaningful-name] */this$m_fixtureList = this.m_fixtureList; this$m_fixtureList; this$m_fixtureList = this$m_fixtureList.m_next) {
          if (0 !== this$m_fixtureList.m_density) {
            var n = this$m_fixtureList.GetMassData(t.ResetMassData_s_massData)
            this.m_mass += n.mass
            e.x += n.center.x * n.mass
            e.y += n.center.y * n.mass
            this.m_I += n.I
          }
        }
        if (this.m_mass > 0) {
          this.m_invMass = 1 / this.m_mass
          e.x *= this.m_invMass
          e.y *= this.m_invMass
        }
        if (this.m_I > 0 && !this.m_fixedRotationFlag) {
          this.m_I -= this.m_mass * It.DotVV(e, e)
          this.m_invI = 1 / this.m_I
        } else {
          this.m_I = 0
          this.m_invI = 0
        }
        var s = t.ResetMassData_s_oldCenter.Copy(this.m_sweep.c)
        this.m_sweep.localCenter.Copy(e)
        Tt.MulXV(this.m_xf, this.m_sweep.localCenter, this.m_sweep.c)
        this.m_sweep.c0.Copy(this.m_sweep.c)
        It.AddVCrossSV(this.m_linearVelocity, this.m_angularVelocity, It.SubVV(this.m_sweep.c, s, It.s_t0), this.m_linearVelocity)
      }
    }, {
      key: "GetWorldPoint",
      value: function (t, e) {
        return Tt.MulXV(this.m_xf, t, e)
      }
    }, {
      key: "GetWorldVector",
      value: function (t, e) {
        return jt.MulRV(this.m_xf.q, t, e)
      }
    }, {
      key: "GetLocalPoint",
      value: function (t, e) {
        return Tt.MulTXV(this.m_xf, t, e)
      }
    }, {
      key: "GetLocalVector",
      value: function (t, e) {
        return jt.MulTRV(this.m_xf.q, t, e)
      }
    }, {
      key: "GetLinearVelocityFromWorldPoint",
      value: function (t, e) {
        return It.AddVCrossSV(this.m_linearVelocity, this.m_angularVelocity, It.SubVV(t, this.m_sweep.c, It.s_t0), e)
      }
    }, {
      key: "GetLinearVelocityFromLocalPoint",
      value: function (t, e) {
        return this.GetLinearVelocityFromWorldPoint(this.GetWorldPoint(t, e), e)
      }
    }, {
      key: "GetLinearDamping",
      value: function () {
        return this.m_linearDamping
      }
    }, {
      key: "SetLinearDamping",
      value: function (t) {
        this.m_linearDamping = t
      }
    }, {
      key: "GetAngularDamping",
      value: function () {
        return this.m_angularDamping
      }
    }, {
      key: "SetAngularDamping",
      value: function (t) {
        this.m_angularDamping = t
      }
    }, {
      key: "GetGravityScale",
      value: function () {
        return this.m_gravityScale
      }
    }, {
      key: "SetGravityScale",
      value: function (t) {
        this.m_gravityScale = t
      }
    }, {
      key: "SetType",
      value: function (t) {
        if (this.m_world.IsLocked()) {
          throw new Error()
        }
        if (this.m_type !== t) {
          this.m_type = t
          this.ResetMassData()
          if (this.m_type === Un.b2_staticBody) {
            this.m_linearVelocity.SetZero()
            this.m_angularVelocity = 0
            this.m_sweep.a0 = this.m_sweep.a
            this.m_sweep.c0.Copy(this.m_sweep.c)
            this.m_awakeFlag = false
            this.SynchronizeFixtures()
          }
          this.SetAwake(true)
          this.m_force.SetZero()
          this.m_torque = 0
          for (var /* [auto-meaningful-name] */this$m_contactList = this.m_contactList; this$m_contactList;) {
            var i = this$m_contactList
            this$m_contactList = this$m_contactList.next
            this.m_world.m_contactManager.Destroy(i.contact)
          }
          this.m_contactList = null
          for (var /* [auto-meaningful-name] */this$m_fixtureList = this.m_fixtureList; this$m_fixtureList; this$m_fixtureList = this$m_fixtureList.m_next) {
            this$m_fixtureList.TouchProxies()
          }
        }
      }
    }, {
      key: "GetType",
      value: function () {
        return this.m_type
      }
    }, {
      key: "SetBullet",
      value: function (t) {
        this.m_bulletFlag = t
      }
    }, {
      key: "IsBullet",
      value: function () {
        return this.m_bulletFlag
      }
    }, {
      key: "SetSleepingAllowed",
      value: function (t) {
        this.m_autoSleepFlag = t
        if (!t) {
          this.SetAwake(true)
        }
      }
    }, {
      key: "IsSleepingAllowed",
      value: function () {
        return this.m_autoSleepFlag
      }
    }, {
      key: "SetAwake",
      value: function (t) {
        if (this.m_type !== Un.b2_staticBody) {
          if (t) {
            this.m_awakeFlag = true
            this.m_sleepTime = 0
          } else {
            this.m_awakeFlag = false
            this.m_sleepTime = 0
            this.m_linearVelocity.SetZero()
            this.m_angularVelocity = 0
            this.m_force.SetZero()
            this.m_torque = 0
          }
        }
      }
    }, {
      key: "IsAwake",
      value: function () {
        return this.m_awakeFlag
      }
    }, {
      key: "SetEnabled",
      value: function (t) {
        if (this.m_world.IsLocked()) {
          throw new Error()
        }
        if (t !== this.IsEnabled()) {
          this.m_enabledFlag = t
          if (t) {
            for (var /* [auto-meaningful-name] */this$m_fixtureList = this.m_fixtureList; this$m_fixtureList; this$m_fixtureList = this$m_fixtureList.m_next) {
              this$m_fixtureList.CreateProxies()
            }
            this.m_world.m_newContacts = true
          } else {
            for (var /* [auto-meaningful-name] */this$m_fixtureList1 = this.m_fixtureList; this$m_fixtureList1; this$m_fixtureList1 = this$m_fixtureList1.m_next) {
              this$m_fixtureList1.DestroyProxies()
            }
            for (var /* [auto-meaningful-name] */this$m_contactList = this.m_contactList; this$m_contactList;) {
              var s = this$m_contactList
              this$m_contactList = this$m_contactList.next
              this.m_world.m_contactManager.Destroy(s.contact)
            }
            this.m_contactList = null
          }
        }
      }
    }, {
      key: "IsEnabled",
      value: function () {
        return this.m_enabledFlag
      }
    }, {
      key: "SetFixedRotation",
      value: function (t) {
        if (this.m_fixedRotationFlag !== t) {
          this.m_fixedRotationFlag = t
          this.m_angularVelocity = 0
          this.ResetMassData()
        }
      }
    }, {
      key: "IsFixedRotation",
      value: function () {
        return this.m_fixedRotationFlag
      }
    }, {
      key: "GetFixtureList",
      value: function () {
        return this.m_fixtureList
      }
    }, {
      key: "GetJointList",
      value: function () {
        return this.m_jointList
      }
    }, {
      key: "GetContactList",
      value: function () {
        return this.m_contactList
      }
    }, {
      key: "GetNext",
      value: function () {
        return this.m_next
      }
    }, {
      key: "GetUserData",
      value: function () {
        return this.m_userData
      }
    }, {
      key: "SetUserData",
      value: function (t) {
        this.m_userData = t
      }
    }, {
      key: "GetWorld",
      value: function () {
        return this.m_world
      }
    }, {
      key: "Dump",
      value: function (t) {
        var /* [auto-meaningful-name] */this$m_islandIndex = this.m_islandIndex
        t("{\n")
        t("  const bd: b2BodyDef = new b2BodyDef();\n")
        var i = ""
        switch (this.m_type) {
          case Un.b2_staticBody:
            i = "b2BodyType.b2_staticBody"
            break
          case Un.b2_kinematicBody:
            i = "b2BodyType.b2_kinematicBody"
            break
          case Un.b2_dynamicBody:
            i = "b2BodyType.b2_dynamicBody"
        }
        t("  bd.type = %s;\n", i)
        t("  bd.position.Set(%.15f, %.15f);\n", this.m_xf.p.x, this.m_xf.p.y)
        t("  bd.angle = %.15f;\n", this.m_sweep.a)
        t("  bd.linearVelocity.Set(%.15f, %.15f);\n", this.m_linearVelocity.x, this.m_linearVelocity.y)
        t("  bd.angularVelocity = %.15f;\n", this.m_angularVelocity)
        t("  bd.linearDamping = %.15f;\n", this.m_linearDamping)
        t("  bd.angularDamping = %.15f;\n", this.m_angularDamping)
        t("  bd.allowSleep = %s;\n", this.m_autoSleepFlag ? "true" : "false")
        t("  bd.awake = %s;\n", this.m_awakeFlag ? "true" : "false")
        t("  bd.fixedRotation = %s;\n", this.m_fixedRotationFlag ? "true" : "false")
        t("  bd.bullet = %s;\n", this.m_bulletFlag ? "true" : "false")
        t("  bd.active = %s;\n", this.m_enabledFlag ? "true" : "false")
        t("  bd.gravityScale = %.15f;\n", this.m_gravityScale)
        t("\n")
        t("  bodies[%d] = this.m_world.CreateBody(bd);\n", this.m_islandIndex)
        t("\n")
        for (var /* [auto-meaningful-name] */this$m_fixtureList = this.m_fixtureList; this$m_fixtureList; this$m_fixtureList = this$m_fixtureList.m_next) {
          t("  {\n")
          this$m_fixtureList.Dump(t, this$m_islandIndex)
          t("  }\n")
        }
        t("}\n")
      }
    }, {
      key: "SynchronizeFixtures",
      value: function () {
        if (this.m_awakeFlag) {
          var /* [auto-meaningful-name] */t$SynchronizeFixtures_s_xf1 = t.SynchronizeFixtures_s_xf1
          t$SynchronizeFixtures_s_xf1.q.SetAngle(this.m_sweep.a0)
          jt.MulRV(t$SynchronizeFixtures_s_xf1.q, this.m_sweep.localCenter, t$SynchronizeFixtures_s_xf1.p)
          It.SubVV(this.m_sweep.c0, t$SynchronizeFixtures_s_xf1.p, t$SynchronizeFixtures_s_xf1.p)
          for (var /* [auto-meaningful-name] */this$m_fixtureList = this.m_fixtureList; this$m_fixtureList; this$m_fixtureList = this$m_fixtureList.m_next) {
            this$m_fixtureList.SynchronizeProxies(t$SynchronizeFixtures_s_xf1, this.m_xf)
          }
        } else {
          for (var /* [auto-meaningful-name] */this$m_fixtureList1 = this.m_fixtureList; this$m_fixtureList1; this$m_fixtureList1 = this$m_fixtureList1.m_next) {
            this$m_fixtureList1.SynchronizeProxies(this.m_xf, this.m_xf)
          }
        }
      }
    }, {
      key: "SynchronizeTransform",
      value: function () {
        this.m_xf.q.SetAngle(this.m_sweep.a)
        jt.MulRV(this.m_xf.q, this.m_sweep.localCenter, this.m_xf.p)
        It.SubVV(this.m_sweep.c, this.m_xf.p, this.m_xf.p)
      }
    }, {
      key: "ShouldCollide",
      value: function (t) {
        return (this.m_type !== Un.b2_staticBody || t.m_type !== Un.b2_staticBody) && this.ShouldCollideConnected(t)
      }
    }, {
      key: "ShouldCollideConnected",
      value: function (t) {
        for (var /* [auto-meaningful-name] */this$m_jointList = this.m_jointList; this$m_jointList; this$m_jointList = this$m_jointList.next) {
          if (this$m_jointList.other === t && !this$m_jointList.joint.m_collideConnected) {
            return false
          }
        }
        return true
      }
    }, {
      key: "Advance",
      value: function (t) {
        this.m_sweep.Advance(t)
        this.m_sweep.c.Copy(this.m_sweep.c0)
        this.m_sweep.a = this.m_sweep.a0
        this.m_xf.q.SetAngle(this.m_sweep.a)
        jt.MulRV(this.m_xf.q, this.m_sweep.localCenter, this.m_xf.p)
        It.SubVV(this.m_sweep.c, this.m_xf.p, this.m_xf.p)
      }
    }, {
      key: "GetControllerList",
      value: function () {
        return this.m_controllerList
      }
    }, {
      key: "GetControllerCount",
      value: function () {
        return this.m_controllerCount
      }
    }
  ])
  return t
}()
function Kn(t, e) {
  return pt(t * e)
}
function Hn(t, e) {
  return t > e ? t : e
}
function $n(t, e) {
  return t < e ? t : e
}
Yn.CreateFixtureShapeDensity_s_def = new Xn()
Yn.SetMassData_s_oldCenter = new It()
Yn.ResetMassData_s_localCenter = new It()
Yn.ResetMassData_s_oldCenter = new It()
Yn.ResetMassData_s_massData = new We()
Yn.SynchronizeFixtures_s_xf1 = new Tt()
var ts = function () {
  function t(e) {
    Module_27.a(this, t)
    this._other = null
    this.prev = null
    this.next = null
    this.contact = e
  }
  Module_39.a(t, [
    {
      key: "other",
      get: function () {
        if (null === this._other) {
          throw new Error()
        }
        return this._other
      },
      set: function (t) {
        if (null !== this._other) {
          throw new Error()
        }
        this._other = t
      }
    }, {
      key: "Reset",
      value: function () {
        this._other = null
        this.prev = null
        this.next = null
      }
    }
  ])
  return t
}()
var es = function () {
  function t() {
    Module_27.a(this, t)
    this.m_islandFlag = false
    this.m_touchingFlag = false
    this.m_enabledFlag = false
    this.m_filterFlag = false
    this.m_bulletHitFlag = false
    this.m_toiFlag = false
    this.m_prev = null
    this.m_next = null
    this.m_nodeA = new ts(this)
    this.m_nodeB = new ts(this)
    this.m_indexA = 0
    this.m_indexB = 0
    this.m_manifold = new ge()
    this.m_toiCount = 0
    this.m_toi = 0
    this.m_friction = 0
    this.m_restitution = 0
    this.m_restitutionThreshold = 0
    this.m_tangentSpeed = 0
    this.m_oldManifold = new ge()
  }
  Module_39.a(t, [
    {
      key: "GetManifold",
      value: function () {
        return this.m_manifold
      }
    }, {
      key: "GetWorldManifold",
      value: function (t) {
        var e = this.m_fixtureA.GetBody()
        var i = this.m_fixtureB.GetBody()
        var n = this.GetShapeA()
        var s = this.GetShapeB()
        t.Initialize(this.m_manifold, e.GetTransform(), n.m_radius, i.GetTransform(), s.m_radius)
      }
    }, {
      key: "IsTouching",
      value: function () {
        return this.m_touchingFlag
      }
    }, {
      key: "SetEnabled",
      value: function (t) {
        this.m_enabledFlag = t
      }
    }, {
      key: "IsEnabled",
      value: function () {
        return this.m_enabledFlag
      }
    }, {
      key: "GetNext",
      value: function () {
        return this.m_next
      }
    }, {
      key: "GetFixtureA",
      value: function () {
        return this.m_fixtureA
      }
    }, {
      key: "GetChildIndexA",
      value: function () {
        return this.m_indexA
      }
    }, {
      key: "GetShapeA",
      value: function () {
        return this.m_fixtureA.GetShape()
      }
    }, {
      key: "GetFixtureB",
      value: function () {
        return this.m_fixtureB
      }
    }, {
      key: "GetChildIndexB",
      value: function () {
        return this.m_indexB
      }
    }, {
      key: "GetShapeB",
      value: function () {
        return this.m_fixtureB.GetShape()
      }
    }, {
      key: "FlagForFiltering",
      value: function () {
        this.m_filterFlag = true
      }
    }, {
      key: "SetFriction",
      value: function (t) {
        this.m_friction = t
      }
    }, {
      key: "GetFriction",
      value: function () {
        return this.m_friction
      }
    }, {
      key: "ResetFriction",
      value: function () {
        this.m_friction = Kn(this.m_fixtureA.m_friction, this.m_fixtureB.m_friction)
      }
    }, {
      key: "SetRestitution",
      value: function (t) {
        this.m_restitution = t
      }
    }, {
      key: "GetRestitution",
      value: function () {
        return this.m_restitution
      }
    }, {
      key: "ResetRestitution",
      value: function () {
        this.m_restitution = Hn(this.m_fixtureA.m_restitution, this.m_fixtureB.m_restitution)
      }
    }, {
      key: "SetRestitutionThreshold",
      value: function (t) {
        this.m_restitutionThreshold = t
      }
    }, {
      key: "GetRestitutionThreshold",
      value: function () {
        return this.m_restitutionThreshold
      }
    }, {
      key: "ResetRestitutionThreshold",
      value: function () {
        this.m_restitutionThreshold = $n(this.m_fixtureA.m_restitutionThreshold, this.m_fixtureB.m_restitutionThreshold)
      }
    }, {
      key: "SetTangentSpeed",
      value: function (t) {
        this.m_tangentSpeed = t
      }
    }, {
      key: "GetTangentSpeed",
      value: function () {
        return this.m_tangentSpeed
      }
    }, {
      key: "Reset",
      value: function (t, e, i, n) {
        this.m_islandFlag = false
        this.m_touchingFlag = false
        this.m_enabledFlag = true
        this.m_filterFlag = false
        this.m_bulletHitFlag = false
        this.m_toiFlag = false
        this.m_fixtureA = t
        this.m_fixtureB = i
        this.m_indexA = e
        this.m_indexB = n
        this.m_manifold.pointCount = 0
        this.m_prev = null
        this.m_next = null
        this.m_nodeA.Reset()
        this.m_nodeB.Reset()
        this.m_toiCount = 0
        this.m_friction = Kn(this.m_fixtureA.m_friction, this.m_fixtureB.m_friction)
        this.m_restitution = Hn(this.m_fixtureA.m_restitution, this.m_fixtureB.m_restitution)
        this.m_restitutionThreshold = $n(this.m_fixtureA.m_restitutionThreshold, this.m_fixtureB.m_restitutionThreshold)
      }
    }, {
      key: "Update",
      value: function (t) {
        var /* [auto-meaningful-name] */this$m_oldManifold = this.m_oldManifold
        this.m_oldManifold = this.m_manifold
        this.m_manifold = this$m_oldManifold
        this.m_enabledFlag = true
        var i = false
        var /* [auto-meaningful-name] */this$m_touchingFlag = this.m_touchingFlag
        var s = this.m_fixtureA.IsSensor()
        var r = this.m_fixtureB.IsSensor()
        var o = s || r
        var a = this.m_fixtureA.GetBody()
        var u = this.m_fixtureB.GetBody()
        var l = a.GetTransform()
        var h = u.GetTransform()
        if (o) {
          var _ = this.GetShapeA()
          var m = this.GetShapeB()
          i = je(_, this.m_indexA, m, this.m_indexB, l, h)
          this.m_manifold.pointCount = 0
        } else {
          this.Evaluate(this.m_manifold, l, h)
          i = this.m_manifold.pointCount > 0
          for (var c = 0; c < this.m_manifold.pointCount; ++c) {
            var f = this.m_manifold.points[c]
            f.normalImpulse = 0
            f.tangentImpulse = 0
            for (var d = f.id, v = 0; v < this.m_oldManifold.pointCount; ++v) {
              var y = this.m_oldManifold.points[v]
              if (y.id.key === d.key) {
                f.normalImpulse = y.normalImpulse
                f.tangentImpulse = y.tangentImpulse
                break
              }
            }
          }
          if (i !== this$m_touchingFlag) {
            a.SetAwake(true)
            u.SetAwake(true)
          }
        }
        this.m_touchingFlag = i
        if (!this$m_touchingFlag && i && t) {
          t.BeginContact(this)
        }
        if (this$m_touchingFlag && !i && t) {
          t.EndContact(this)
        }
        if (!o && i && t) {
          t.PreSolve(this, this.m_oldManifold)
        }
      }
    }, {
      key: "ComputeTOI",
      value: function (e, i) {
        var /* [auto-meaningful-name] */t$ComputeTOI_s_input = t.ComputeTOI_s_input
        t$ComputeTOI_s_input.proxyA.SetShape(this.GetShapeA(), this.m_indexA)
        t$ComputeTOI_s_input.proxyB.SetShape(this.GetShapeB(), this.m_indexB)
        t$ComputeTOI_s_input.sweepA.Copy(e)
        t$ComputeTOI_s_input.sweepB.Copy(i)
        t$ComputeTOI_s_input.tMax = A
        var /* [auto-meaningful-name] */t$ComputeTOI_s_output = t.ComputeTOI_s_output
        Gn(t$ComputeTOI_s_output, t$ComputeTOI_s_input)
        return t$ComputeTOI_s_output.t
      }
    }
  ])
  return t
}()
es.ComputeTOI_s_input = new pn()
es.ComputeTOI_s_output = new Bn()
var is = function (t) {
  Module_58.a(i, t)
  var e = Module_59.a(i)
  function i() {
    Module_27.a(this, i)
    return e.apply(this, arguments)
  }
  Module_39.a(i, [
    {
      key: "Evaluate",
      value: function (t, e, n) {
        var /* [auto-meaningful-name] */i$Evaluate_s_edge = i.Evaluate_s_edge
        this.GetShapeA().GetChildEdge(i$Evaluate_s_edge, this.m_indexA)
        di(t, i$Evaluate_s_edge, e, this.GetShapeB(), n)
      }
    }
  ], [
    {
      key: "Create",
      value: function () {
        return new i()
      }
    }, {
      key: "Destroy",
      value: function (t) {}
    }
  ])
  return i
}(es)
is.Evaluate_s_edge = new Ye()
var ns = function (t) {
  Module_58.a(i, t)
  var e = Module_59.a(i)
  function i() {
    Module_27.a(this, i)
    return e.apply(this, arguments)
  }
  Module_39.a(i, [
    {
      key: "Evaluate",
      value: function (t, e, n) {
        var /* [auto-meaningful-name] */i$Evaluate_s_edge = i.Evaluate_s_edge
        this.GetShapeA().GetChildEdge(i$Evaluate_s_edge, this.m_indexA)
        Fi(t, i$Evaluate_s_edge, e, this.GetShapeB(), n)
      }
    }
  ], [
    {
      key: "Create",
      value: function () {
        return new i()
      }
    }, {
      key: "Destroy",
      value: function (t) {}
    }
  ])
  return i
}(es)
ns.Evaluate_s_edge = new Ye()
var ss = function (t) {
  Module_58.a(i, t)
  var e = Module_59.a(i)
  function i() {
    Module_27.a(this, i)
    return e.apply(this, arguments)
  }
  Module_39.a(i, [
    {
      key: "Evaluate",
      value: function (t, e, i) {
        ei(t, this.GetShapeA(), e, this.GetShapeB(), i)
      }
    }
  ], [
    {
      key: "Create",
      value: function () {
        return new i()
      }
    }, {
      key: "Destroy",
      value: function (t) {}
    }
  ])
  return i
}(es)
var rs = function (t) {
  Module_58.a(i, t)
  var e = Module_59.a(i)
  function i() {
    Module_27.a(this, i)
    return e.apply(this, arguments)
  }
  Module_39.a(i, [
    {
      key: "Evaluate",
      value: function (t, e, i) {
        $i(t, this.GetShapeA(), e, this.GetShapeB(), i)
      }
    }
  ], [
    {
      key: "Create",
      value: function () {
        return new i()
      }
    }, {
      key: "Destroy",
      value: function (t) {}
    }
  ])
  return i
}(es)
var os = function (t) {
  Module_58.a(i, t)
  var e = Module_59.a(i)
  function i() {
    Module_27.a(this, i)
    return e.apply(this, arguments)
  }
  Module_39.a(i, [
    {
      key: "Evaluate",
      value: function (t, e, i) {
        ri(t, this.GetShapeA(), e, this.GetShapeB(), i)
      }
    }
  ], [
    {
      key: "Create",
      value: function () {
        return new i()
      }
    }, {
      key: "Destroy",
      value: function (t) {}
    }
  ])
  return i
}(es)
var as = function (t) {
  Module_58.a(i, t)
  var e = Module_59.a(i)
  function i() {
    Module_27.a(this, i)
    return e.apply(this, arguments)
  }
  Module_39.a(i, [
    {
      key: "Evaluate",
      value: function (t, e, i) {
        di(t, this.GetShapeA(), e, this.GetShapeB(), i)
      }
    }
  ], [
    {
      key: "Create",
      value: function () {
        return new i()
      }
    }, {
      key: "Destroy",
      value: function (t) {}
    }
  ])
  return i
}(es)
var us = function (t) {
  Module_58.a(i, t)
  var e = Module_59.a(i)
  function i() {
    Module_27.a(this, i)
    return e.apply(this, arguments)
  }
  Module_39.a(i, [
    {
      key: "Evaluate",
      value: function (t, e, i) {
        Fi(t, this.GetShapeA(), e, this.GetShapeB(), i)
      }
    }
  ], [
    {
      key: "Create",
      value: function () {
        return new i()
      }
    }, {
      key: "Destroy",
      value: function (t) {}
    }
  ])
  return i
}(es)
var ls = function t() {
  Module_27.a(this, t)
  this.pool = []
  this.createFcn = null
  this.destroyFcn = null
  this.primary = false
}
var hs = function () {
  function t() {
    Module_27.a(this, t)
    this.m_registers = []
    this.InitializeRegisters()
  }
  Module_39.a(t, [
    {
      key: "AddType",
      value: function (t, e, i, n) {
        var s = []
        function r() {
          return s.pop() || t()
        }
        function o(t) {
          s.push(t)
        }
        this.m_registers[i][n].pool = s
        this.m_registers[i][n].createFcn = r
        this.m_registers[i][n].destroyFcn = o
        this.m_registers[i][n].primary = true
        if (i !== n) {
          this.m_registers[n][i].pool = s
          this.m_registers[n][i].createFcn = r
          this.m_registers[n][i].destroyFcn = o
          this.m_registers[n][i].primary = false
        }
      }
    }, {
      key: "InitializeRegisters",
      value: function () {
        for (var t = 0; t < ze.e_shapeTypeCount; t++) {
          this.m_registers[t] = []
          for (var e = 0; e < ze.e_shapeTypeCount; e++) {
            this.m_registers[t][e] = new ls()
          }
        }
        this.AddType(ss.Create, ss.Destroy, ze.e_circleShape, ze.e_circleShape)
        this.AddType(os.Create, os.Destroy, ze.e_polygonShape, ze.e_circleShape)
        this.AddType(rs.Create, rs.Destroy, ze.e_polygonShape, ze.e_polygonShape)
        this.AddType(as.Create, as.Destroy, ze.e_edgeShape, ze.e_circleShape)
        this.AddType(us.Create, us.Destroy, ze.e_edgeShape, ze.e_polygonShape)
        this.AddType(is.Create, is.Destroy, ze.e_chainShape, ze.e_circleShape)
        this.AddType(ns.Create, ns.Destroy, ze.e_chainShape, ze.e_polygonShape)
      }
    }, {
      key: "Create",
      value: function (t, e, i, n) {
        var s = t.GetType()
        var r = i.GetType()
        var o = this.m_registers[s][r]
        if (o.createFcn) {
          var a = o.createFcn()
          if (o.primary) {
            a.Reset(t, e, i, n)
          } else {
            a.Reset(i, n, t, e)
          }
          return a
        }
        return null
      }
    }, {
      key: "Destroy",
      value: function (t) {
        var e = t.m_fixtureA.GetType()
        var i = t.m_fixtureB.GetType()
        var n = this.m_registers[e][i]
        if (n.destroyFcn) {
          n.destroyFcn(t)
        }
      }
    }
  ])
  return t
}()
var _s = function () {
  function t() {
    Module_27.a(this, t)
  }
  Module_39.a(t, [
    {
      key: "SayGoodbyeJoint",
      value: function (t) {}
    }, {
      key: "SayGoodbyeFixture",
      value: function (t) {}
    }, {
      key: "SayGoodbyeParticleGroup",
      value: function (t) {}
    }, {
      key: "SayGoodbyeParticle",
      value: function (t, e) {}
    }
  ])
  return t
}()
var ms = function () {
  function t() {
    Module_27.a(this, t)
  }
  Module_39.a(t, [
    {
      key: "ShouldCollide",
      value: function (t, e) {
        var i = t.GetBody()
        var n = e.GetBody()
        if (n.GetType() === Un.b2_staticBody && i.GetType() === Un.b2_staticBody) {
          return false
        }
        if (!n.ShouldCollideConnected(i)) {
          return false
        }
        var s = t.GetFilterData()
        var r = e.GetFilterData()
        return s.groupIndex === r.groupIndex && 0 !== s.groupIndex ? s.groupIndex > 0 : 0 !== (s.maskBits & r.categoryBits) && 0 !== (s.categoryBits & r.maskBits)
      }
    }, {
      key: "ShouldCollideFixtureParticle",
      value: function (t, e, i) {
        return true
      }
    }, {
      key: "ShouldCollideParticleParticle",
      value: function (t, e, i) {
        return true
      }
    }
  ])
  return t
}()
ms.b2_defaultFilter = new ms()
var cs = function t() {
  Module_27.a(this, t)
  this.normalImpulses = it(x)
  this.tangentImpulses = it(x)
  this.count = 0
}
var fs = function () {
  function t() {
    Module_27.a(this, t)
  }
  Module_39.a(t, [
    {
      key: "BeginContact",
      value: function (t) {}
    }, {
      key: "EndContact",
      value: function (t) {}
    }, {
      key: "BeginContactFixtureParticle",
      value: function (t, e) {}
    }, {
      key: "EndContactFixtureParticle",
      value: function (t, e) {}
    }, {
      key: "BeginContactBodyParticleGroup",
      value: function (t, e) {}
    }, {
      key: "EndContactBodyParticleGroup",
      value: function (t, e) {}
    }, {
      key: "BeginContactParticleParticle",
      value: function (t, e) {}
    }, {
      key: "EndContactParticleParticle",
      value: function (t, e) {}
    }, {
      key: "BeginContactParticleGroupParticleGroup",
      value: function (t, e) {}
    }, {
      key: "EndContactParticleGroupParticleGroup",
      value: function (t, e) {}
    }, {
      key: "PreSolve",
      value: function (t, e) {}
    }, {
      key: "PostSolve",
      value: function (t, e) {}
    }
  ])
  return t
}()
fs.b2_defaultListener = new fs()
var ds = function () {
  function t() {
    Module_27.a(this, t)
  }
  Module_39.a(t, [
    {
      key: "ReportFixture",
      value: function (t) {
        return true
      }
    }, {
      key: "ReportParticle",
      value: function (t, e) {
        return false
      }
    }, {
      key: "ShouldQueryParticleSystem",
      value: function (t) {
        return true
      }
    }
  ])
  return t
}()
var vs = function () {
  function t() {
    Module_27.a(this, t)
  }
  Module_39.a(t, [
    {
      key: "ReportFixture",
      value: function (t, e, i, n) {
        return n
      }
    }, {
      key: "ReportParticle",
      value: function (t, e, i, n, s) {
        return 0
      }
    }, {
      key: "ShouldQueryParticleSystem",
      value: function (t) {
        return true
      }
    }
  ])
  return t
}()
var ys = function () {
  function t() {
    Module_27.a(this, t)
    this.m_broadPhase = new Ne()
    this.m_contactList = null
    this.m_contactCount = 0
    this.m_contactFilter = ms.b2_defaultFilter
    this.m_contactListener = fs.b2_defaultListener
    this.m_contactFactory = new hs()
  }
  Module_39.a(t, [
    {
      key: "AddPair",
      value: function (t, e) {
        var /* [auto-meaningful-name] */t$fixture = t.fixture
        var /* [auto-meaningful-name] */e$fixture = e.fixture
        var /* [auto-meaningful-name] */t$childIndex = t.childIndex
        var /* [auto-meaningful-name] */e$childIndex = e.childIndex
        var o = t$fixture.GetBody()
        var a = e$fixture.GetBody()
        if (o !== a) {
          for (var u = a.GetContactList(); u;) {
            if (u.other === o) {
              var l = u.contact.GetFixtureA()
              var h = u.contact.GetFixtureB()
              var _ = u.contact.GetChildIndexA()
              var m = u.contact.GetChildIndexB()
              if (l === t$fixture && h === e$fixture && _ === t$childIndex && m === e$childIndex) {
                return
              }
              if (l === e$fixture && h === t$fixture && _ === e$childIndex && m === t$childIndex) {
                return
              }
            }
            u = u.next
          }
          if (!this.m_contactFilter || this.m_contactFilter.ShouldCollide(t$fixture, e$fixture)) {
            var c = this.m_contactFactory.Create(t$fixture, t$childIndex, e$fixture, e$childIndex)
            if (null !== c) {
              t$fixture = c.GetFixtureA()
              e$fixture = c.GetFixtureB()
              t$childIndex = c.GetChildIndexA()
              e$childIndex = c.GetChildIndexB()
              o = t$fixture.m_body
              a = e$fixture.m_body
              c.m_prev = null
              c.m_next = this.m_contactList
              if (null !== this.m_contactList) {
                this.m_contactList.m_prev = c
              }
              this.m_contactList = c
              c.m_nodeA.other = a
              c.m_nodeA.prev = null
              c.m_nodeA.next = o.m_contactList
              if (null !== o.m_contactList) {
                o.m_contactList.prev = c.m_nodeA
              }
              o.m_contactList = c.m_nodeA
              c.m_nodeB.other = o
              c.m_nodeB.prev = null
              c.m_nodeB.next = a.m_contactList
              if (null !== a.m_contactList) {
                a.m_contactList.prev = c.m_nodeB
              }
              a.m_contactList = c.m_nodeB
              ++this.m_contactCount
            }
          }
        }
      }
    }, {
      key: "FindNewContacts",
      value: function () {
        var t = this
        this.m_broadPhase.UpdatePairs(function (e, i) {
          t.AddPair(e, i)
        })
      }
    }, {
      key: "Destroy",
      value: function (t) {
        var e = t.GetFixtureA()
        var i = t.GetFixtureB()
        var n = e.GetBody()
        var s = i.GetBody()
        if (this.m_contactListener && t.IsTouching()) {
          this.m_contactListener.EndContact(t)
        }
        if (t.m_prev) {
          t.m_prev.m_next = t.m_next
        }
        if (t.m_next) {
          t.m_next.m_prev = t.m_prev
        }
        if (t === this.m_contactList) {
          this.m_contactList = t.m_next
        }
        if (t.m_nodeA.prev) {
          t.m_nodeA.prev.next = t.m_nodeA.next
        }
        if (t.m_nodeA.next) {
          t.m_nodeA.next.prev = t.m_nodeA.prev
        }
        if (t.m_nodeA === n.m_contactList) {
          n.m_contactList = t.m_nodeA.next
        }
        if (t.m_nodeB.prev) {
          t.m_nodeB.prev.next = t.m_nodeB.next
        }
        if (t.m_nodeB.next) {
          t.m_nodeB.next.prev = t.m_nodeB.prev
        }
        if (t.m_nodeB === s.m_contactList) {
          s.m_contactList = t.m_nodeB.next
        }
        if (t.m_manifold.pointCount > 0 && !e.IsSensor() && !i.IsSensor()) {
          e.GetBody().SetAwake(true)
          i.GetBody().SetAwake(true)
        }
        this.m_contactFactory.Destroy(t)
        --this.m_contactCount
      }
    }, {
      key: "Collide",
      value: function () {
        for (var /* [auto-meaningful-name] */this$m_contactList = this.m_contactList; this$m_contactList;) {
          var e = this$m_contactList.GetFixtureA()
          var i = this$m_contactList.GetFixtureB()
          var n = this$m_contactList.GetChildIndexA()
          var s = this$m_contactList.GetChildIndexB()
          var r = e.GetBody()
          var o = i.GetBody()
          if (this$m_contactList.m_filterFlag) {
            if (this.m_contactFilter && !this.m_contactFilter.ShouldCollide(e, i)) {
              var a = this$m_contactList
              this$m_contactList = a.m_next
              this.Destroy(a)
              continue
            }
            this$m_contactList.m_filterFlag = false
          }
          var u = r.IsAwake() && r.m_type !== Un.b2_staticBody
          var l = o.IsAwake() && o.m_type !== Un.b2_staticBody
          if (u || l) {
            var /* [auto-meaningful-name] */e$m_proxiesN$treeNode = e.m_proxies[n].treeNode
            var /* [auto-meaningful-name] */i$m_proxiesS$treeNode = i.m_proxies[s].treeNode
            if (Ge(e$m_proxiesN$treeNode.aabb, i$m_proxiesS$treeNode.aabb)) {
              this$m_contactList.Update(this.m_contactListener)
              this$m_contactList = this$m_contactList.m_next
            } else {
              var m = this$m_contactList
              this$m_contactList = m.m_next
              this.Destroy(m)
            }
          } else {
            this$m_contactList = this$m_contactList.m_next
          }
        }
      }
    }
  ])
  return t
}()
var ps = function () {
  function t() {
    Module_27.a(this, t)
    this.step = 0
    this.collide = 0
    this.solve = 0
    this.solveInit = 0
    this.solveVelocity = 0
    this.solvePosition = 0
    this.broadphase = 0
    this.solveTOI = 0
  }
  Module_39.a(t, [
    {
      key: "Reset",
      value: function () {
        this.step = 0
        this.collide = 0
        this.solve = 0
        this.solveInit = 0
        this.solveVelocity = 0
        this.solvePosition = 0
        this.broadphase = 0
        this.solveTOI = 0
        return this
      }
    }
  ])
  return t
}()
var xs = function () {
  function t() {
    Module_27.a(this, t)
    this.dt = 0
    this.inv_dt = 0
    this.dtRatio = 0
    this.velocityIterations = 0
    this.positionIterations = 0
    this.particleIterations = 0
    this.warmStarting = false
  }
  Module_39.a(t, [
    {
      key: "Copy",
      value: function (t) {
        this.dt = t.dt
        this.inv_dt = t.inv_dt
        this.dtRatio = t.dtRatio
        this.positionIterations = t.positionIterations
        this.velocityIterations = t.velocityIterations
        this.particleIterations = t.particleIterations
        this.warmStarting = t.warmStarting
        return this
      }
    }
  ])
  return t
}()
var Bs = function () {
  function t() {
    Module_27.a(this, t)
    this.c = new It()
    this.a = 0
  }
  Module_39.a(t, null, [
    {
      key: "MakeArray",
      value: function (e) {
        return tt(e, function (e) {
          return new t()
        })
      }
    }
  ])
  return t
}()
var Ss = function () {
  function t() {
    Module_27.a(this, t)
    this.v = new It()
    this.w = 0
  }
  Module_39.a(t, null, [
    {
      key: "MakeArray",
      value: function (e) {
        return tt(e, function (e) {
          return new t()
        })
      }
    }
  ])
  return t
}()
var As = function t() {
  Module_27.a(this, t)
  this.step = new xs()
}
var Cs = false
function bs() {
  return Cs
}
function gs(t) {
  Cs = t
}
var Vs = function () {
  function t() {
    Module_27.a(this, t)
    this.rA = new It()
    this.rB = new It()
    this.normalImpulse = 0
    this.tangentImpulse = 0
    this.normalMass = 0
    this.tangentMass = 0
    this.velocityBias = 0
  }
  Module_39.a(t, null, [
    {
      key: "MakeArray",
      value: function (e) {
        return tt(e, function (e) {
          return new t()
        })
      }
    }
  ])
  return t
}()
var ws = function () {
  function t() {
    Module_27.a(this, t)
    this.points = Vs.MakeArray(x)
    this.normal = new It()
    this.tangent = new It()
    this.normalMass = new Lt()
    this.K = new Lt()
    this.indexA = 0
    this.indexB = 0
    this.invMassA = 0
    this.invMassB = 0
    this.invIA = 0
    this.invIB = 0
    this.friction = 0
    this.restitution = 0
    this.threshold = 0
    this.tangentSpeed = 0
    this.pointCount = 0
    this.contactIndex = 0
  }
  Module_39.a(t, null, [
    {
      key: "MakeArray",
      value: function (e) {
        return tt(e, function (e) {
          return new t()
        })
      }
    }
  ])
  return t
}()
var ks = function () {
  function t() {
    Module_27.a(this, t)
    this.localPoints = It.MakeArray(x)
    this.localNormal = new It()
    this.localPoint = new It()
    this.indexA = 0
    this.indexB = 0
    this.invMassA = 0
    this.invMassB = 0
    this.localCenterA = new It()
    this.localCenterB = new It()
    this.invIA = 0
    this.invIB = 0
    this.type = Be.e_unknown
    this.radiusA = 0
    this.radiusB = 0
    this.pointCount = 0
  }
  Module_39.a(t, null, [
    {
      key: "MakeArray",
      value: function (e) {
        return tt(e, function (e) {
          return new t()
        })
      }
    }
  ])
  return t
}()
var Ms = function t() {
  Module_27.a(this, t)
  this.step = new xs()
  this.count = 0
}
var Ps = function () {
  function t() {
    Module_27.a(this, t)
    this.normal = new It()
    this.point = new It()
    this.separation = 0
  }
  Module_39.a(t, [
    {
      key: "Initialize",
      value: function (e, i, n, s) {
        var /* [auto-meaningful-name] */t$Initialize_s_pointA = t.Initialize_s_pointA
        var /* [auto-meaningful-name] */t$Initialize_s_pointB = t.Initialize_s_pointB
        var /* [auto-meaningful-name] */t$Initialize_s_planePoint = t.Initialize_s_planePoint
        var /* [auto-meaningful-name] */t$Initialize_s_clipPoint = t.Initialize_s_clipPoint
        switch (e.type) {
          case Be.e_circles:
            Tt.MulXV(i, e.localPoint, t$Initialize_s_pointA)
            Tt.MulXV(n, e.localPoints[0], t$Initialize_s_pointB)
            It.SubVV(t$Initialize_s_pointB, t$Initialize_s_pointA, this.normal).SelfNormalize()
            It.MidVV(t$Initialize_s_pointA, t$Initialize_s_pointB, this.point)
            this.separation = It.DotVV(It.SubVV(t$Initialize_s_pointB, t$Initialize_s_pointA, It.s_t0), this.normal) - e.radiusA - e.radiusB
            break
          case Be.e_faceA:
            jt.MulRV(i.q, e.localNormal, this.normal)
            Tt.MulXV(i, e.localPoint, t$Initialize_s_planePoint)
            Tt.MulXV(n, e.localPoints[s], t$Initialize_s_clipPoint)
            this.separation = It.DotVV(It.SubVV(t$Initialize_s_clipPoint, t$Initialize_s_planePoint, It.s_t0), this.normal) - e.radiusA - e.radiusB
            this.point.Copy(t$Initialize_s_clipPoint)
            break
          case Be.e_faceB:
            jt.MulRV(n.q, e.localNormal, this.normal)
            Tt.MulXV(n, e.localPoint, t$Initialize_s_planePoint)
            Tt.MulXV(i, e.localPoints[s], t$Initialize_s_clipPoint)
            this.separation = It.DotVV(It.SubVV(t$Initialize_s_clipPoint, t$Initialize_s_planePoint, It.s_t0), this.normal) - e.radiusA - e.radiusB
            this.point.Copy(t$Initialize_s_clipPoint)
            this.normal.SelfNeg()
        }
      }
    }
  ])
  return t
}()
Ps.Initialize_s_pointA = new It()
Ps.Initialize_s_pointB = new It()
Ps.Initialize_s_planePoint = new It()
Ps.Initialize_s_clipPoint = new It()
var Is = function () {
  function t() {
    Module_27.a(this, t)
    this.m_step = new xs()
    this.m_positionConstraints = ks.MakeArray(1024)
    this.m_velocityConstraints = ws.MakeArray(1024)
    this.m_count = 0
  }
  Module_39.a(t, [
    {
      key: "Initialize",
      value: function (t) {
        this.m_step.Copy(t.step)
        this.m_count = t.count
        if (this.m_positionConstraints.length < this.m_count) {
          for (var e = mt(2 * this.m_positionConstraints.length, this.m_count); this.m_positionConstraints.length < e;) {
            this.m_positionConstraints[this.m_positionConstraints.length] = new ks()
          }
        }
        if (this.m_velocityConstraints.length < this.m_count) {
          for (var i = mt(2 * this.m_velocityConstraints.length, this.m_count); this.m_velocityConstraints.length < i;) {
            this.m_velocityConstraints[this.m_velocityConstraints.length] = new ws()
          }
        }
        this.m_positions = t.positions
        this.m_velocities = t.velocities
        this.m_contacts = t.contacts
        for (var n = 0; n < this.m_count; ++n) {
          var s = this.m_contacts[n]
          var /* [auto-meaningful-name] */s$m_fixtureA = s.m_fixtureA
          var /* [auto-meaningful-name] */s$m_fixtureB = s.m_fixtureB
          var a = s$m_fixtureA.GetShape()
          var u = s$m_fixtureB.GetShape()
          var /* [auto-meaningful-name] */a$m_radius = a.m_radius
          var /* [auto-meaningful-name] */u$m_radius = u.m_radius
          var _ = s$m_fixtureA.GetBody()
          var m = s$m_fixtureB.GetBody()
          var c = s.GetManifold()
          var /* [auto-meaningful-name] */c$pointCount = c.pointCount
          var d = this.m_velocityConstraints[n]
          d.friction = s.m_friction
          d.restitution = s.m_restitution
          d.threshold = s.m_restitutionThreshold
          d.tangentSpeed = s.m_tangentSpeed
          d.indexA = _.m_islandIndex
          d.indexB = m.m_islandIndex
          d.invMassA = _.m_invMass
          d.invMassB = m.m_invMass
          d.invIA = _.m_invI
          d.invIB = m.m_invI
          d.contactIndex = n
          d.pointCount = c$pointCount
          d.K.SetZero()
          d.normalMass.SetZero()
          var v = this.m_positionConstraints[n]
          v.indexA = _.m_islandIndex
          v.indexB = m.m_islandIndex
          v.invMassA = _.m_invMass
          v.invMassB = m.m_invMass
          v.localCenterA.Copy(_.m_sweep.localCenter)
          v.localCenterB.Copy(m.m_sweep.localCenter)
          v.invIA = _.m_invI
          v.invIB = m.m_invI
          v.localNormal.Copy(c.localNormal)
          v.localPoint.Copy(c.localPoint)
          v.pointCount = c$pointCount
          v.radiusA = a$m_radius
          v.radiusB = u$m_radius
          v.type = c.type
          for (var y = 0; y < c$pointCount; ++y) {
            var p = c.points[y]
            var x = d.points[y]
            if (this.m_step.warmStarting) {
              x.normalImpulse = this.m_step.dtRatio * p.normalImpulse
              x.tangentImpulse = this.m_step.dtRatio * p.tangentImpulse
            } else {
              x.normalImpulse = 0
              x.tangentImpulse = 0
            }
            x.rA.SetZero()
            x.rB.SetZero()
            x.normalMass = 0
            x.tangentMass = 0
            x.velocityBias = 0
            v.localPoints[y].Copy(p.localPoint)
          }
        }
        return this
      }
    }, {
      key: "InitializeVelocityConstraints",
      value: function () {
        for (var /* [auto-meaningful-name] */t$InitializeVelocityConstraints_s_xfA = t.InitializeVelocityConstraints_s_xfA, /* [auto-meaningful-name] */t$InitializeVelocityConstraints_s_xfB = t.InitializeVelocityConstraints_s_xfB, /* [auto-meaningful-name] */t$InitializeVelocityConstraints_s_worldManifold = t.InitializeVelocityConstraints_s_worldManifold, s = 0; s < this.m_count; ++s) {
          var r = this.m_velocityConstraints[s]
          var o = this.m_positionConstraints[s]
          var /* [auto-meaningful-name] */o$radiusA = o.radiusA
          var /* [auto-meaningful-name] */o$radiusB = o.radiusB
          var l = this.m_contacts[r.contactIndex].GetManifold()
          var /* [auto-meaningful-name] */r$indexA = r.indexA
          var /* [auto-meaningful-name] */r$indexB = r.indexB
          var /* [auto-meaningful-name] */r$invMassA = r.invMassA
          var /* [auto-meaningful-name] */r$invMassB = r.invMassB
          var /* [auto-meaningful-name] */r$invIA = r.invIA
          var /* [auto-meaningful-name] */r$invIB = r.invIB
          var /* [auto-meaningful-name] */o$localCenterA = o.localCenterA
          var /* [auto-meaningful-name] */o$localCenterB = o.localCenterB
          var /* [auto-meaningful-name] */this$m_positionsR$indexA$c = this.m_positions[r$indexA].c
          var /* [auto-meaningful-name] */this$m_positionsR$indexA$a = this.m_positions[r$indexA].a
          var /* [auto-meaningful-name] */this$m_velocitiesR$indexA$v = this.m_velocities[r$indexA].v
          var /* [auto-meaningful-name] */this$m_velocitiesR$indexA$w = this.m_velocities[r$indexA].w
          var /* [auto-meaningful-name] */this$m_positionsR$indexB$c = this.m_positions[r$indexB].c
          var /* [auto-meaningful-name] */this$m_positionsR$indexB$a = this.m_positions[r$indexB].a
          var /* [auto-meaningful-name] */this$m_velocitiesR$indexB$v = this.m_velocities[r$indexB].v
          var /* [auto-meaningful-name] */this$m_velocitiesR$indexB$w = this.m_velocities[r$indexB].w
          t$InitializeVelocityConstraints_s_xfA.q.SetAngle(this$m_positionsR$indexA$a)
          t$InitializeVelocityConstraints_s_xfB.q.SetAngle(this$m_positionsR$indexB$a)
          It.SubVV(this$m_positionsR$indexA$c, jt.MulRV(t$InitializeVelocityConstraints_s_xfA.q, o$localCenterA, It.s_t0), t$InitializeVelocityConstraints_s_xfA.p)
          It.SubVV(this$m_positionsR$indexB$c, jt.MulRV(t$InitializeVelocityConstraints_s_xfB.q, o$localCenterB, It.s_t0), t$InitializeVelocityConstraints_s_xfB.p)
          t$InitializeVelocityConstraints_s_worldManifold.Initialize(l, t$InitializeVelocityConstraints_s_xfA, o$radiusA, t$InitializeVelocityConstraints_s_xfB, o$radiusB)
          r.normal.Copy(t$InitializeVelocityConstraints_s_worldManifold.normal)
          It.CrossVOne(r.normal, r.tangent)
          for (var /* [auto-meaningful-name] */r$pointCount = r.pointCount, w = 0; w < r$pointCount; ++w) {
            var k = r.points[w]
            It.SubVV(t$InitializeVelocityConstraints_s_worldManifold.points[w], this$m_positionsR$indexA$c, k.rA)
            It.SubVV(t$InitializeVelocityConstraints_s_worldManifold.points[w], this$m_positionsR$indexB$c, k.rB)
            var M = It.CrossVV(k.rA, r.normal)
            var P = It.CrossVV(k.rB, r.normal)
            var I = r$invMassA + r$invMassB + r$invIA * M * M + r$invIB * P * P
            k.normalMass = I > 0 ? 1 / I : 0
            var /* [auto-meaningful-name] */r$tangent = r.tangent
            var D = It.CrossVV(k.rA, r$tangent)
            var F = It.CrossVV(k.rB, r$tangent)
            var L = r$invMassA + r$invMassB + r$invIA * D * D + r$invIB * F * F
            k.tangentMass = L > 0 ? 1 / L : 0
            k.velocityBias = 0
            var R = It.DotVV(r.normal, It.SubVV(It.AddVCrossSV(this$m_velocitiesR$indexB$v, this$m_velocitiesR$indexB$w, k.rB, It.s_t0), It.AddVCrossSV(this$m_velocitiesR$indexA$v, this$m_velocitiesR$indexA$w, k.rA, It.s_t1), It.s_t0))
            if (R < -r.threshold) {
              k.velocityBias += -r.restitution * R
            }
          }
          if (2 === r.pointCount && Cs) {
            var j = r.points[0]
            var T = r.points[1]
            var O = It.CrossVV(j.rA, r.normal)
            var q = It.CrossVV(j.rB, r.normal)
            var z = It.CrossVV(T.rA, r.normal)
            var E = It.CrossVV(T.rB, r.normal)
            var N = r$invMassA + r$invMassB + r$invIA * O * O + r$invIB * q * q
            var J = r$invMassA + r$invMassB + r$invIA * z * z + r$invIB * E * E
            var X = r$invMassA + r$invMassB + r$invIA * O * z + r$invIB * q * E
            if (N * N < 1e3 * (N * J - X * X)) {
              r.K.ex.Set(N, X)
              r.K.ey.Set(X, J)
              r.K.GetInverse(r.normalMass)
            } else {
              r.pointCount = 1
            }
          }
        }
      }
    }, {
      key: "WarmStart",
      value: function () {
        for (var /* [auto-meaningful-name] */t$WarmStart_s_P = t.WarmStart_s_P, i = 0; i < this.m_count; ++i) {
          for (var n = this.m_velocityConstraints[i], /* [auto-meaningful-name] */n$indexA = n.indexA, /* [auto-meaningful-name] */n$indexB = n.indexB, /* [auto-meaningful-name] */n$invMassA = n.invMassA, /* [auto-meaningful-name] */n$invIA = n.invIA, /* [auto-meaningful-name] */n$invMassB = n.invMassB, /* [auto-meaningful-name] */n$invIB = n.invIB, /* [auto-meaningful-name] */n$pointCount = n.pointCount, /* [auto-meaningful-name] */this$m_velocitiesN$indexA$v = this.m_velocities[n$indexA].v, /* [auto-meaningful-name] */this$m_velocitiesN$indexA$w = this.m_velocities[n$indexA].w, /* [auto-meaningful-name] */this$m_velocitiesN$indexB$v = this.m_velocities[n$indexB].v, /* [auto-meaningful-name] */this$m_velocitiesN$indexB$w = this.m_velocities[n$indexB].w, /* [auto-meaningful-name] */n$normal = n.normal, /* [auto-meaningful-name] */n$tangent = n.tangent, y = 0; y < n$pointCount; ++y) {
            var p = n.points[y]
            It.AddVV(It.MulSV(p.normalImpulse, n$normal, It.s_t0), It.MulSV(p.tangentImpulse, n$tangent, It.s_t1), t$WarmStart_s_P)
            this$m_velocitiesN$indexA$w -= n$invIA * It.CrossVV(p.rA, t$WarmStart_s_P)
            this$m_velocitiesN$indexA$v.SelfMulSub(n$invMassA, t$WarmStart_s_P)
            this$m_velocitiesN$indexB$w += n$invIB * It.CrossVV(p.rB, t$WarmStart_s_P)
            this$m_velocitiesN$indexB$v.SelfMulAdd(n$invMassB, t$WarmStart_s_P)
          }
          this.m_velocities[n$indexA].w = this$m_velocitiesN$indexA$w
          this.m_velocities[n$indexB].w = this$m_velocitiesN$indexB$w
        }
      }
    }, {
      key: "SolveVelocityConstraints",
      value: function () {
        for (var /* [auto-meaningful-name] */t$SolveVelocityConstraints_s_dv = t.SolveVelocityConstraints_s_dv, /* [auto-meaningful-name] */t$SolveVelocityConstraints_s_dv1 = t.SolveVelocityConstraints_s_dv1, /* [auto-meaningful-name] */t$SolveVelocityConstraints_s_dv2 = t.SolveVelocityConstraints_s_dv2, /* [auto-meaningful-name] */t$SolveVelocityConstraints_s_P = t.SolveVelocityConstraints_s_P, /* [auto-meaningful-name] */t$SolveVelocityConstraints_s_a = t.SolveVelocityConstraints_s_a, /* [auto-meaningful-name] */t$SolveVelocityConstraints_s_b = t.SolveVelocityConstraints_s_b, /* [auto-meaningful-name] */t$SolveVelocityConstraints_s_x = t.SolveVelocityConstraints_s_x, /* [auto-meaningful-name] */t$SolveVelocityConstraints_s_d = t.SolveVelocityConstraints_s_d, /* [auto-meaningful-name] */t$SolveVelocityConstraints_s_P1 = t.SolveVelocityConstraints_s_P1, /* [auto-meaningful-name] */t$SolveVelocityConstraints_s_P2 = t.SolveVelocityConstraints_s_P2, /* [auto-meaningful-name] */t$SolveVelocityConstraints_s_P1P2 = t.SolveVelocityConstraints_s_P1P2, m = 0; m < this.m_count; ++m) {
          for (var c = this.m_velocityConstraints[m], /* [auto-meaningful-name] */c$indexA = c.indexA, /* [auto-meaningful-name] */c$indexB = c.indexB, /* [auto-meaningful-name] */c$invMassA = c.invMassA, /* [auto-meaningful-name] */c$invIA = c.invIA, /* [auto-meaningful-name] */c$invMassB = c.invMassB, /* [auto-meaningful-name] */c$invIB = c.invIB, /* [auto-meaningful-name] */c$pointCount = c.pointCount, /* [auto-meaningful-name] */this$m_velocitiesC$indexA$v = this.m_velocities[c$indexA].v, /* [auto-meaningful-name] */this$m_velocitiesC$indexA$w = this.m_velocities[c$indexA].w, /* [auto-meaningful-name] */this$m_velocitiesC$indexB$v = this.m_velocities[c$indexB].v, /* [auto-meaningful-name] */this$m_velocitiesC$indexB$w = this.m_velocities[c$indexB].w, /* [auto-meaningful-name] */c$normal = c.normal, /* [auto-meaningful-name] */c$tangent = c.tangent, /* [auto-meaningful-name] */c$friction = c.friction, k = 0; k < c$pointCount; ++k) {
            var M = c.points[k]
            It.SubVV(It.AddVCrossSV(this$m_velocitiesC$indexB$v, this$m_velocitiesC$indexB$w, M.rB, It.s_t0), It.AddVCrossSV(this$m_velocitiesC$indexA$v, this$m_velocitiesC$indexA$w, M.rA, It.s_t1), t$SolveVelocityConstraints_s_dv)
            var P = It.DotVV(t$SolveVelocityConstraints_s_dv, c$tangent) - c.tangentSpeed
            var I = M.tangentMass * -P
            var G = c$friction * M.normalImpulse
            var D = ct(M.tangentImpulse + I, -G, G)
            I = D - M.tangentImpulse
            M.tangentImpulse = D
            It.MulSV(I, c$tangent, t$SolveVelocityConstraints_s_P)
            this$m_velocitiesC$indexA$v.SelfMulSub(c$invMassA, t$SolveVelocityConstraints_s_P)
            this$m_velocitiesC$indexA$w -= c$invIA * It.CrossVV(M.rA, t$SolveVelocityConstraints_s_P)
            this$m_velocitiesC$indexB$v.SelfMulAdd(c$invMassB, t$SolveVelocityConstraints_s_P)
            this$m_velocitiesC$indexB$w += c$invIB * It.CrossVV(M.rB, t$SolveVelocityConstraints_s_P)
          }
          if (1 === c.pointCount || false === Cs) {
            for (var F = 0; F < c$pointCount; ++F) {
              var L = c.points[F]
              It.SubVV(It.AddVCrossSV(this$m_velocitiesC$indexB$v, this$m_velocitiesC$indexB$w, L.rB, It.s_t0), It.AddVCrossSV(this$m_velocitiesC$indexA$v, this$m_velocitiesC$indexA$w, L.rA, It.s_t1), t$SolveVelocityConstraints_s_dv)
              var R = It.DotVV(t$SolveVelocityConstraints_s_dv, c$normal)
              var j = -L.normalMass * (R - L.velocityBias)
              var T = mt(L.normalImpulse + j, 0)
              j = T - L.normalImpulse
              L.normalImpulse = T
              It.MulSV(j, c$normal, t$SolveVelocityConstraints_s_P)
              this$m_velocitiesC$indexA$v.SelfMulSub(c$invMassA, t$SolveVelocityConstraints_s_P)
              this$m_velocitiesC$indexA$w -= c$invIA * It.CrossVV(L.rA, t$SolveVelocityConstraints_s_P)
              this$m_velocitiesC$indexB$v.SelfMulAdd(c$invMassB, t$SolveVelocityConstraints_s_P)
              this$m_velocitiesC$indexB$w += c$invIB * It.CrossVV(L.rB, t$SolveVelocityConstraints_s_P)
            }
          } else {
            var O = c.points[0]
            var q = c.points[1]
            t$SolveVelocityConstraints_s_a.Set(O.normalImpulse, q.normalImpulse)
            It.SubVV(It.AddVCrossSV(this$m_velocitiesC$indexB$v, this$m_velocitiesC$indexB$w, O.rB, It.s_t0), It.AddVCrossSV(this$m_velocitiesC$indexA$v, this$m_velocitiesC$indexA$w, O.rA, It.s_t1), t$SolveVelocityConstraints_s_dv1)
            It.SubVV(It.AddVCrossSV(this$m_velocitiesC$indexB$v, this$m_velocitiesC$indexB$w, q.rB, It.s_t0), It.AddVCrossSV(this$m_velocitiesC$indexA$v, this$m_velocitiesC$indexA$w, q.rA, It.s_t1), t$SolveVelocityConstraints_s_dv2)
            var z = It.DotVV(t$SolveVelocityConstraints_s_dv1, c$normal)
            var E = It.DotVV(t$SolveVelocityConstraints_s_dv2, c$normal)
            for (t$SolveVelocityConstraints_s_b.x = z - O.velocityBias, t$SolveVelocityConstraints_s_b.y = E - q.velocityBias, t$SolveVelocityConstraints_s_b.SelfSub(Lt.MulMV(c.K, t$SolveVelocityConstraints_s_a, It.s_t0));;) {
              Lt.MulMV(c.normalMass, t$SolveVelocityConstraints_s_b, t$SolveVelocityConstraints_s_x).SelfNeg()
              if (t$SolveVelocityConstraints_s_x.x >= 0 && t$SolveVelocityConstraints_s_x.y >= 0) {
                It.SubVV(t$SolveVelocityConstraints_s_x, t$SolveVelocityConstraints_s_a, t$SolveVelocityConstraints_s_d)
                It.MulSV(t$SolveVelocityConstraints_s_d.x, c$normal, t$SolveVelocityConstraints_s_P1)
                It.MulSV(t$SolveVelocityConstraints_s_d.y, c$normal, t$SolveVelocityConstraints_s_P2)
                It.AddVV(t$SolveVelocityConstraints_s_P1, t$SolveVelocityConstraints_s_P2, t$SolveVelocityConstraints_s_P1P2)
                this$m_velocitiesC$indexA$v.SelfMulSub(c$invMassA, t$SolveVelocityConstraints_s_P1P2)
                this$m_velocitiesC$indexA$w -= c$invIA * (It.CrossVV(O.rA, t$SolveVelocityConstraints_s_P1) + It.CrossVV(q.rA, t$SolveVelocityConstraints_s_P2))
                this$m_velocitiesC$indexB$v.SelfMulAdd(c$invMassB, t$SolveVelocityConstraints_s_P1P2)
                this$m_velocitiesC$indexB$w += c$invIB * (It.CrossVV(O.rB, t$SolveVelocityConstraints_s_P1) + It.CrossVV(q.rB, t$SolveVelocityConstraints_s_P2))
                O.normalImpulse = t$SolveVelocityConstraints_s_x.x
                q.normalImpulse = t$SolveVelocityConstraints_s_x.y
                break
              }
              t$SolveVelocityConstraints_s_x.x = -O.normalMass * t$SolveVelocityConstraints_s_b.x
              t$SolveVelocityConstraints_s_x.y = 0
              z = 0
              E = c.K.ex.y * t$SolveVelocityConstraints_s_x.x + t$SolveVelocityConstraints_s_b.y
              if (t$SolveVelocityConstraints_s_x.x >= 0 && E >= 0) {
                It.SubVV(t$SolveVelocityConstraints_s_x, t$SolveVelocityConstraints_s_a, t$SolveVelocityConstraints_s_d)
                It.MulSV(t$SolveVelocityConstraints_s_d.x, c$normal, t$SolveVelocityConstraints_s_P1)
                It.MulSV(t$SolveVelocityConstraints_s_d.y, c$normal, t$SolveVelocityConstraints_s_P2)
                It.AddVV(t$SolveVelocityConstraints_s_P1, t$SolveVelocityConstraints_s_P2, t$SolveVelocityConstraints_s_P1P2)
                this$m_velocitiesC$indexA$v.SelfMulSub(c$invMassA, t$SolveVelocityConstraints_s_P1P2)
                this$m_velocitiesC$indexA$w -= c$invIA * (It.CrossVV(O.rA, t$SolveVelocityConstraints_s_P1) + It.CrossVV(q.rA, t$SolveVelocityConstraints_s_P2))
                this$m_velocitiesC$indexB$v.SelfMulAdd(c$invMassB, t$SolveVelocityConstraints_s_P1P2)
                this$m_velocitiesC$indexB$w += c$invIB * (It.CrossVV(O.rB, t$SolveVelocityConstraints_s_P1) + It.CrossVV(q.rB, t$SolveVelocityConstraints_s_P2))
                O.normalImpulse = t$SolveVelocityConstraints_s_x.x
                q.normalImpulse = t$SolveVelocityConstraints_s_x.y
                break
              }
              t$SolveVelocityConstraints_s_x.x = 0
              t$SolveVelocityConstraints_s_x.y = -q.normalMass * t$SolveVelocityConstraints_s_b.y
              z = c.K.ey.x * t$SolveVelocityConstraints_s_x.y + t$SolveVelocityConstraints_s_b.x
              E = 0
              if (t$SolveVelocityConstraints_s_x.y >= 0 && z >= 0) {
                It.SubVV(t$SolveVelocityConstraints_s_x, t$SolveVelocityConstraints_s_a, t$SolveVelocityConstraints_s_d)
                It.MulSV(t$SolveVelocityConstraints_s_d.x, c$normal, t$SolveVelocityConstraints_s_P1)
                It.MulSV(t$SolveVelocityConstraints_s_d.y, c$normal, t$SolveVelocityConstraints_s_P2)
                It.AddVV(t$SolveVelocityConstraints_s_P1, t$SolveVelocityConstraints_s_P2, t$SolveVelocityConstraints_s_P1P2)
                this$m_velocitiesC$indexA$v.SelfMulSub(c$invMassA, t$SolveVelocityConstraints_s_P1P2)
                this$m_velocitiesC$indexA$w -= c$invIA * (It.CrossVV(O.rA, t$SolveVelocityConstraints_s_P1) + It.CrossVV(q.rA, t$SolveVelocityConstraints_s_P2))
                this$m_velocitiesC$indexB$v.SelfMulAdd(c$invMassB, t$SolveVelocityConstraints_s_P1P2)
                this$m_velocitiesC$indexB$w += c$invIB * (It.CrossVV(O.rB, t$SolveVelocityConstraints_s_P1) + It.CrossVV(q.rB, t$SolveVelocityConstraints_s_P2))
                O.normalImpulse = t$SolveVelocityConstraints_s_x.x
                q.normalImpulse = t$SolveVelocityConstraints_s_x.y
                break
              }
              t$SolveVelocityConstraints_s_x.x = 0
              t$SolveVelocityConstraints_s_x.y = 0
              z = t$SolveVelocityConstraints_s_b.x
              E = t$SolveVelocityConstraints_s_b.y
              if (z >= 0 && E >= 0) {
                It.SubVV(t$SolveVelocityConstraints_s_x, t$SolveVelocityConstraints_s_a, t$SolveVelocityConstraints_s_d)
                It.MulSV(t$SolveVelocityConstraints_s_d.x, c$normal, t$SolveVelocityConstraints_s_P1)
                It.MulSV(t$SolveVelocityConstraints_s_d.y, c$normal, t$SolveVelocityConstraints_s_P2)
                It.AddVV(t$SolveVelocityConstraints_s_P1, t$SolveVelocityConstraints_s_P2, t$SolveVelocityConstraints_s_P1P2)
                this$m_velocitiesC$indexA$v.SelfMulSub(c$invMassA, t$SolveVelocityConstraints_s_P1P2)
                this$m_velocitiesC$indexA$w -= c$invIA * (It.CrossVV(O.rA, t$SolveVelocityConstraints_s_P1) + It.CrossVV(q.rA, t$SolveVelocityConstraints_s_P2))
                this$m_velocitiesC$indexB$v.SelfMulAdd(c$invMassB, t$SolveVelocityConstraints_s_P1P2)
                this$m_velocitiesC$indexB$w += c$invIB * (It.CrossVV(O.rB, t$SolveVelocityConstraints_s_P1) + It.CrossVV(q.rB, t$SolveVelocityConstraints_s_P2))
                O.normalImpulse = t$SolveVelocityConstraints_s_x.x
                q.normalImpulse = t$SolveVelocityConstraints_s_x.y
                break
              }
              break
            }
          }
          this.m_velocities[c$indexA].w = this$m_velocitiesC$indexA$w
          this.m_velocities[c$indexB].w = this$m_velocitiesC$indexB$w
        }
      }
    }, {
      key: "StoreImpulses",
      value: function () {
        for (var t = 0; t < this.m_count; ++t) {
          for (var e = this.m_velocityConstraints[t], i = this.m_contacts[e.contactIndex].GetManifold(), n = 0; n < e.pointCount; ++n) {
            i.points[n].normalImpulse = e.points[n].normalImpulse
            i.points[n].tangentImpulse = e.points[n].tangentImpulse
          }
        }
      }
    }, {
      key: "SolvePositionConstraints",
      value: function () {
        for (var /* [auto-meaningful-name] */t$SolvePositionConstraints_s_xfA = t.SolvePositionConstraints_s_xfA, /* [auto-meaningful-name] */t$SolvePositionConstraints_s_xfB = t.SolvePositionConstraints_s_xfB, /* [auto-meaningful-name] */t$SolvePositionConstraints_s_psm = t.SolvePositionConstraints_s_psm, /* [auto-meaningful-name] */t$SolvePositionConstraints_s_rA = t.SolvePositionConstraints_s_rA, /* [auto-meaningful-name] */t$SolvePositionConstraints_s_rB = t.SolvePositionConstraints_s_rB, /* [auto-meaningful-name] */t$SolvePositionConstraints_s_P = t.SolvePositionConstraints_s_P, a = 0, u = 0; u < this.m_count; ++u) {
          for (var l = this.m_positionConstraints[u], /* [auto-meaningful-name] */l$indexA = l.indexA, /* [auto-meaningful-name] */l$indexB = l.indexB, /* [auto-meaningful-name] */l$localCenterA = l.localCenterA, /* [auto-meaningful-name] */l$invMassA = l.invMassA, /* [auto-meaningful-name] */l$invIA = l.invIA, /* [auto-meaningful-name] */l$localCenterB = l.localCenterB, /* [auto-meaningful-name] */l$invMassB = l.invMassB, /* [auto-meaningful-name] */l$invIB = l.invIB, /* [auto-meaningful-name] */l$pointCount = l.pointCount, /* [auto-meaningful-name] */this$m_positionsL$indexA$c = this.m_positions[l$indexA].c, /* [auto-meaningful-name] */this$m_positionsL$indexA$a = this.m_positions[l$indexA].a, /* [auto-meaningful-name] */this$m_positionsL$indexB$c = this.m_positions[l$indexB].c, /* [auto-meaningful-name] */this$m_positionsL$indexB$a = this.m_positions[l$indexB].a, b = 0; b < l$pointCount; ++b) {
            t$SolvePositionConstraints_s_xfA.q.SetAngle(this$m_positionsL$indexA$a)
            t$SolvePositionConstraints_s_xfB.q.SetAngle(this$m_positionsL$indexB$a)
            It.SubVV(this$m_positionsL$indexA$c, jt.MulRV(t$SolvePositionConstraints_s_xfA.q, l$localCenterA, It.s_t0), t$SolvePositionConstraints_s_xfA.p)
            It.SubVV(this$m_positionsL$indexB$c, jt.MulRV(t$SolvePositionConstraints_s_xfB.q, l$localCenterB, It.s_t0), t$SolvePositionConstraints_s_xfB.p)
            t$SolvePositionConstraints_s_psm.Initialize(l, t$SolvePositionConstraints_s_xfA, t$SolvePositionConstraints_s_xfB, b)
            var /* [auto-meaningful-name] */t$SolvePositionConstraints_s_psm$normal = t$SolvePositionConstraints_s_psm.normal
            var /* [auto-meaningful-name] */t$SolvePositionConstraints_s_psm$point = t$SolvePositionConstraints_s_psm.point
            var /* [auto-meaningful-name] */t$SolvePositionConstraints_s_psm$separation = t$SolvePositionConstraints_s_psm.separation
            It.SubVV(t$SolvePositionConstraints_s_psm$point, this$m_positionsL$indexA$c, t$SolvePositionConstraints_s_rA)
            It.SubVV(t$SolvePositionConstraints_s_psm$point, this$m_positionsL$indexB$c, t$SolvePositionConstraints_s_rB)
            a = _t(a, t$SolvePositionConstraints_s_psm$separation)
            var M = ct(D * (t$SolvePositionConstraints_s_psm$separation + A), -w, 0)
            var P = It.CrossVV(t$SolvePositionConstraints_s_rA, t$SolvePositionConstraints_s_psm$normal)
            var I = It.CrossVV(t$SolvePositionConstraints_s_rB, t$SolvePositionConstraints_s_psm$normal)
            var G = l$invMassA + l$invMassB + l$invIA * P * P + l$invIB * I * I
            var F = G > 0 ? -M / G : 0
            It.MulSV(F, t$SolvePositionConstraints_s_psm$normal, t$SolvePositionConstraints_s_P)
            this$m_positionsL$indexA$c.SelfMulSub(l$invMassA, t$SolvePositionConstraints_s_P)
            this$m_positionsL$indexA$a -= l$invIA * It.CrossVV(t$SolvePositionConstraints_s_rA, t$SolvePositionConstraints_s_P)
            this$m_positionsL$indexB$c.SelfMulAdd(l$invMassB, t$SolvePositionConstraints_s_P)
            this$m_positionsL$indexB$a += l$invIB * It.CrossVV(t$SolvePositionConstraints_s_rB, t$SolvePositionConstraints_s_P)
          }
          this.m_positions[l$indexA].a = this$m_positionsL$indexA$a
          this.m_positions[l$indexB].a = this$m_positionsL$indexB$a
        }
        return a > -3 * A
      }
    }, {
      key: "SolveTOIPositionConstraints",
      value: function (e, i) {
        for (var /* [auto-meaningful-name] */t$SolveTOIPositionConstraints_s_xfA = t.SolveTOIPositionConstraints_s_xfA, /* [auto-meaningful-name] */t$SolveTOIPositionConstraints_s_xfB = t.SolveTOIPositionConstraints_s_xfB, /* [auto-meaningful-name] */t$SolveTOIPositionConstraints_s_psm = t.SolveTOIPositionConstraints_s_psm, /* [auto-meaningful-name] */t$SolveTOIPositionConstraints_s_rA = t.SolveTOIPositionConstraints_s_rA, /* [auto-meaningful-name] */t$SolveTOIPositionConstraints_s_rB = t.SolveTOIPositionConstraints_s_rB, /* [auto-meaningful-name] */t$SolveTOIPositionConstraints_s_P = t.SolveTOIPositionConstraints_s_P, l = 0, h = 0; h < this.m_count; ++h) {
          var _ = this.m_positionConstraints[h]
          var /* [auto-meaningful-name] */_$indexA = _.indexA
          var /* [auto-meaningful-name] */_$indexB = _.indexB
          var /* [auto-meaningful-name] */_$localCenterA = _.localCenterA
          var /* [auto-meaningful-name] */_$localCenterB = _.localCenterB
          var /* [auto-meaningful-name] */_$pointCount = _.pointCount
          var y = 0
          var p = 0
          if (!(_$indexA !== e && _$indexA !== i)) {
            y = _.invMassA
            p = _.invIA
          }
          var x = 0
          var B = 0
          if (!(_$indexB !== e && _$indexB !== i)) {
            x = _.invMassB
            B = _.invIB
          }
          for (var /* [auto-meaningful-name] */this$m_positions_$indexA$c = this.m_positions[_$indexA].c, /* [auto-meaningful-name] */this$m_positions_$indexA$a = this.m_positions[_$indexA].a, /* [auto-meaningful-name] */this$m_positions_$indexB$c = this.m_positions[_$indexB].c, /* [auto-meaningful-name] */this$m_positions_$indexB$a = this.m_positions[_$indexB].a, V = 0; V < _$pointCount; ++V) {
            t$SolveTOIPositionConstraints_s_xfA.q.SetAngle(this$m_positions_$indexA$a)
            t$SolveTOIPositionConstraints_s_xfB.q.SetAngle(this$m_positions_$indexB$a)
            It.SubVV(this$m_positions_$indexA$c, jt.MulRV(t$SolveTOIPositionConstraints_s_xfA.q, _$localCenterA, It.s_t0), t$SolveTOIPositionConstraints_s_xfA.p)
            It.SubVV(this$m_positions_$indexB$c, jt.MulRV(t$SolveTOIPositionConstraints_s_xfB.q, _$localCenterB, It.s_t0), t$SolveTOIPositionConstraints_s_xfB.p)
            t$SolveTOIPositionConstraints_s_psm.Initialize(_, t$SolveTOIPositionConstraints_s_xfA, t$SolveTOIPositionConstraints_s_xfB, V)
            var /* [auto-meaningful-name] */t$SolveTOIPositionConstraints_s_psm$normal = t$SolveTOIPositionConstraints_s_psm.normal
            var /* [auto-meaningful-name] */t$SolveTOIPositionConstraints_s_psm$point = t$SolveTOIPositionConstraints_s_psm.point
            var /* [auto-meaningful-name] */t$SolveTOIPositionConstraints_s_psm$separation = t$SolveTOIPositionConstraints_s_psm.separation
            It.SubVV(t$SolveTOIPositionConstraints_s_psm$point, this$m_positions_$indexA$c, t$SolveTOIPositionConstraints_s_rA)
            It.SubVV(t$SolveTOIPositionConstraints_s_psm$point, this$m_positions_$indexB$c, t$SolveTOIPositionConstraints_s_rB)
            l = _t(l, t$SolveTOIPositionConstraints_s_psm$separation)
            var I = ct(F * (t$SolveTOIPositionConstraints_s_psm$separation + A), -w, 0)
            var G = It.CrossVV(t$SolveTOIPositionConstraints_s_rA, t$SolveTOIPositionConstraints_s_psm$normal)
            var D = It.CrossVV(t$SolveTOIPositionConstraints_s_rB, t$SolveTOIPositionConstraints_s_psm$normal)
            var L = y + x + p * G * G + B * D * D
            var R = L > 0 ? -I / L : 0
            It.MulSV(R, t$SolveTOIPositionConstraints_s_psm$normal, t$SolveTOIPositionConstraints_s_P)
            this$m_positions_$indexA$c.SelfMulSub(y, t$SolveTOIPositionConstraints_s_P)
            this$m_positions_$indexA$a -= p * It.CrossVV(t$SolveTOIPositionConstraints_s_rA, t$SolveTOIPositionConstraints_s_P)
            this$m_positions_$indexB$c.SelfMulAdd(x, t$SolveTOIPositionConstraints_s_P)
            this$m_positions_$indexB$a += B * It.CrossVV(t$SolveTOIPositionConstraints_s_rB, t$SolveTOIPositionConstraints_s_P)
          }
          this.m_positions[_$indexA].a = this$m_positions_$indexA$a
          this.m_positions[_$indexB].a = this$m_positions_$indexB$a
        }
        return l >= -1.5 * A
      }
    }
  ])
  return t
}()
Is.InitializeVelocityConstraints_s_xfA = new Tt()
Is.InitializeVelocityConstraints_s_xfB = new Tt()
Is.InitializeVelocityConstraints_s_worldManifold = new Ve()
Is.WarmStart_s_P = new It()
Is.SolveVelocityConstraints_s_dv = new It()
Is.SolveVelocityConstraints_s_dv1 = new It()
Is.SolveVelocityConstraints_s_dv2 = new It()
Is.SolveVelocityConstraints_s_P = new It()
Is.SolveVelocityConstraints_s_a = new It()
Is.SolveVelocityConstraints_s_b = new It()
Is.SolveVelocityConstraints_s_x = new It()
Is.SolveVelocityConstraints_s_d = new It()
Is.SolveVelocityConstraints_s_P1 = new It()
Is.SolveVelocityConstraints_s_P2 = new It()
Is.SolveVelocityConstraints_s_P1P2 = new It()
Is.SolvePositionConstraints_s_xfA = new Tt()
Is.SolvePositionConstraints_s_xfB = new Tt()
Is.SolvePositionConstraints_s_psm = new Ps()
Is.SolvePositionConstraints_s_rA = new It()
Is.SolvePositionConstraints_s_rB = new It()
Is.SolvePositionConstraints_s_P = new It()
Is.SolveTOIPositionConstraints_s_xfA = new Tt()
Is.SolveTOIPositionConstraints_s_xfB = new Tt()
Is.SolveTOIPositionConstraints_s_psm = new Ps()
Is.SolveTOIPositionConstraints_s_rA = new It()
Is.SolveTOIPositionConstraints_s_rB = new It()
Is.SolveTOIPositionConstraints_s_P = new It()
var Gs = function (t) {
  Module_58.a(i, t)
  var e = Module_59.a(i)
  function i() {
    var t
    Module_27.a(this, i);
    (t = e.call(this, Sn.e_frictionJoint)).localAnchorA = new It()
    t.localAnchorB = new It()
    t.maxForce = 0
    t.maxTorque = 0
    return t
  }
  Module_39.a(i, [
    {
      key: "Initialize",
      value: function (t, e, i) {
        this.bodyA = t
        this.bodyB = e
        this.bodyA.GetLocalPoint(i, this.localAnchorA)
        this.bodyB.GetLocalPoint(i, this.localAnchorB)
      }
    }
  ])
  return i
}(Ln)
var Ds = function (t) {
  Module_58.a(i, t)
  var e = Module_59.a(i)
  function i(t) {
    var s
    Module_27.a(this, i);
    (s = e.call(this, t)).m_localAnchorA = new It()
    s.m_localAnchorB = new It()
    s.m_linearImpulse = new It()
    s.m_angularImpulse = 0
    s.m_maxForce = 0
    s.m_maxTorque = 0
    s.m_indexA = 0
    s.m_indexB = 0
    s.m_rA = new It()
    s.m_rB = new It()
    s.m_localCenterA = new It()
    s.m_localCenterB = new It()
    s.m_invMassA = 0
    s.m_invMassB = 0
    s.m_invIA = 0
    s.m_invIB = 0
    s.m_linearMass = new Lt()
    s.m_angularMass = 0
    s.m_qA = new jt()
    s.m_qB = new jt()
    s.m_lalcA = new It()
    s.m_lalcB = new It()
    s.m_K = new Lt()
    s.m_localAnchorA.Copy(m(t.localAnchorA, It.ZERO))
    s.m_localAnchorB.Copy(m(t.localAnchorB, It.ZERO))
    s.m_linearImpulse.SetZero()
    s.m_maxForce = m(t.maxForce, 0)
    s.m_maxTorque = m(t.maxTorque, 0)
    s.m_linearMass.SetZero()
    return s
  }
  Module_39.a(i, [
    {
      key: "InitVelocityConstraints",
      value: function (t) {
        this.m_indexA = this.m_bodyA.m_islandIndex
        this.m_indexB = this.m_bodyB.m_islandIndex
        this.m_localCenterA.Copy(this.m_bodyA.m_sweep.localCenter)
        this.m_localCenterB.Copy(this.m_bodyB.m_sweep.localCenter)
        this.m_invMassA = this.m_bodyA.m_invMass
        this.m_invMassB = this.m_bodyB.m_invMass
        this.m_invIA = this.m_bodyA.m_invI
        this.m_invIB = this.m_bodyB.m_invI
        var /* [auto-meaningful-name] */t$positionsThis$m_indexA$a = t.positions[this.m_indexA].a
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexA$v = t.velocities[this.m_indexA].v
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexA$w = t.velocities[this.m_indexA].w
        var /* [auto-meaningful-name] */t$positionsThis$m_indexB$a = t.positions[this.m_indexB].a
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexB$v = t.velocities[this.m_indexB].v
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexB$w = t.velocities[this.m_indexB].w
        var a = this.m_qA.SetAngle(t$positionsThis$m_indexA$a)
        var u = this.m_qB.SetAngle(t$positionsThis$m_indexB$a)
        It.SubVV(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA)
        var l = jt.MulRV(a, this.m_lalcA, this.m_rA)
        It.SubVV(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB)
        var h = jt.MulRV(u, this.m_lalcB, this.m_rB)
        var /* [auto-meaningful-name] */this$m_invMassA = this.m_invMassA
        var /* [auto-meaningful-name] */this$m_invMassB = this.m_invMassB
        var /* [auto-meaningful-name] */this$m_invIA = this.m_invIA
        var /* [auto-meaningful-name] */this$m_invIB = this.m_invIB
        var /* [auto-meaningful-name] */this$m_K = this.m_K
        this$m_K.ex.x = this$m_invMassA + this$m_invMassB + this$m_invIA * l.y * l.y + this$m_invIB * h.y * h.y
        this$m_K.ex.y = -this$m_invIA * l.x * l.y - this$m_invIB * h.x * h.y
        this$m_K.ey.x = this$m_K.ex.y
        this$m_K.ey.y = this$m_invMassA + this$m_invMassB + this$m_invIA * l.x * l.x + this$m_invIB * h.x * h.x
        this$m_K.GetInverse(this.m_linearMass)
        this.m_angularMass = this$m_invIA + this$m_invIB
        if (this.m_angularMass > 0) {
          this.m_angularMass = 1 / this.m_angularMass
        }
        if (t.step.warmStarting) {
          this.m_linearImpulse.SelfMul(t.step.dtRatio)
          this.m_angularImpulse *= t.step.dtRatio
          var /* [auto-meaningful-name] */this$m_linearImpulse = this.m_linearImpulse
          t$velocitiesThis$m_indexA$v.SelfMulSub(this$m_invMassA, this$m_linearImpulse)
          t$velocitiesThis$m_indexA$w -= this$m_invIA * (It.CrossVV(this.m_rA, this$m_linearImpulse) + this.m_angularImpulse)
          t$velocitiesThis$m_indexB$v.SelfMulAdd(this$m_invMassB, this$m_linearImpulse)
          t$velocitiesThis$m_indexB$w += this$m_invIB * (It.CrossVV(this.m_rB, this$m_linearImpulse) + this.m_angularImpulse)
        } else {
          this.m_linearImpulse.SetZero()
          this.m_angularImpulse = 0
        }
        t.velocities[this.m_indexA].w = t$velocitiesThis$m_indexA$w
        t.velocities[this.m_indexB].w = t$velocitiesThis$m_indexB$w
      }
    }, {
      key: "SolveVelocityConstraints",
      value: function (t) {
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexA$v = t.velocities[this.m_indexA].v
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexA$w = t.velocities[this.m_indexA].w
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexB$v = t.velocities[this.m_indexB].v
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexB$w = t.velocities[this.m_indexB].w
        var /* [auto-meaningful-name] */this$m_invMassA = this.m_invMassA
        var /* [auto-meaningful-name] */this$m_invMassB = this.m_invMassB
        var /* [auto-meaningful-name] */this$m_invIA = this.m_invIA
        var /* [auto-meaningful-name] */this$m_invIB = this.m_invIB
        var /* [auto-meaningful-name] */t$step$dt = t.step.dt
        var _ = t$velocitiesThis$m_indexB$w - t$velocitiesThis$m_indexA$w
        var m = -this.m_angularMass * _
        var /* [auto-meaningful-name] */this$m_angularImpulse = this.m_angularImpulse
        var f = t$step$dt * this.m_maxTorque
        this.m_angularImpulse = ct(this.m_angularImpulse + m, -f, f)
        t$velocitiesThis$m_indexA$w -= this$m_invIA * (m = this.m_angularImpulse - this$m_angularImpulse)
        t$velocitiesThis$m_indexB$w += this$m_invIB * m
        var d = It.SubVV(It.AddVCrossSV(t$velocitiesThis$m_indexB$v, t$velocitiesThis$m_indexB$w, this.m_rB, It.s_t0), It.AddVCrossSV(t$velocitiesThis$m_indexA$v, t$velocitiesThis$m_indexA$w, this.m_rA, It.s_t1), i.SolveVelocityConstraints_s_Cdot_v2)
        var v = Lt.MulMV(this.m_linearMass, d, i.SolveVelocityConstraints_s_impulseV).SelfNeg()
        var y = i.SolveVelocityConstraints_s_oldImpulseV.Copy(this.m_linearImpulse)
        this.m_linearImpulse.SelfAdd(v)
        var p = t$step$dt * this.m_maxForce
        if (this.m_linearImpulse.LengthSquared() > p * p) {
          this.m_linearImpulse.Normalize()
          this.m_linearImpulse.SelfMul(p)
        }
        It.SubVV(this.m_linearImpulse, y, v)
        t$velocitiesThis$m_indexA$v.SelfMulSub(this$m_invMassA, v)
        t$velocitiesThis$m_indexA$w -= this$m_invIA * It.CrossVV(this.m_rA, v)
        t$velocitiesThis$m_indexB$v.SelfMulAdd(this$m_invMassB, v)
        t$velocitiesThis$m_indexB$w += this$m_invIB * It.CrossVV(this.m_rB, v)
        t.velocities[this.m_indexA].w = t$velocitiesThis$m_indexA$w
        t.velocities[this.m_indexB].w = t$velocitiesThis$m_indexB$w
      }
    }, {
      key: "SolvePositionConstraints",
      value: function (t) {
        return true
      }
    }, {
      key: "GetAnchorA",
      value: function (t) {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchorA, t)
      }
    }, {
      key: "GetAnchorB",
      value: function (t) {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchorB, t)
      }
    }, {
      key: "GetReactionForce",
      value: function (t, e) {
        e.x = t * this.m_linearImpulse.x
        e.y = t * this.m_linearImpulse.y
        return e
      }
    }, {
      key: "GetReactionTorque",
      value: function (t) {
        return t * this.m_angularImpulse
      }
    }, {
      key: "GetLocalAnchorA",
      value: function () {
        return this.m_localAnchorA
      }
    }, {
      key: "GetLocalAnchorB",
      value: function () {
        return this.m_localAnchorB
      }
    }, {
      key: "SetMaxForce",
      value: function (t) {
        this.m_maxForce = t
      }
    }, {
      key: "GetMaxForce",
      value: function () {
        return this.m_maxForce
      }
    }, {
      key: "SetMaxTorque",
      value: function (t) {
        this.m_maxTorque = t
      }
    }, {
      key: "GetMaxTorque",
      value: function () {
        return this.m_maxTorque
      }
    }, {
      key: "Dump",
      value: function (t) {
        var /* [auto-meaningful-name] */this$m_bodyA$m_islandIndex = this.m_bodyA.m_islandIndex
        var /* [auto-meaningful-name] */this$m_bodyB$m_islandIndex = this.m_bodyB.m_islandIndex
        t("  const jd: b2FrictionJointDef = new b2FrictionJointDef();\n")
        t("  jd.bodyA = bodies[%d];\n", this$m_bodyA$m_islandIndex)
        t("  jd.bodyB = bodies[%d];\n", this$m_bodyB$m_islandIndex)
        t("  jd.collideConnected = %s;\n", this.m_collideConnected ? "true" : "false")
        t("  jd.localAnchorA.Set(%.15f, %.15f);\n", this.m_localAnchorA.x, this.m_localAnchorA.y)
        t("  jd.localAnchorB.Set(%.15f, %.15f);\n", this.m_localAnchorB.x, this.m_localAnchorB.y)
        t("  jd.maxForce = %.15f;\n", this.m_maxForce)
        t("  jd.maxTorque = %.15f;\n", this.m_maxTorque)
        t("  joints[%d] = this.m_world.CreateJoint(jd);\n", this.m_index)
      }
    }
  ])
  return i
}(Tn)
Ds.SolveVelocityConstraints_s_Cdot_v2 = new It()
Ds.SolveVelocityConstraints_s_impulseV = new It()
Ds.SolveVelocityConstraints_s_oldImpulseV = new It()
var Fs = function (t) {
  Module_58.a(i, t)
  var e = Module_59.a(i)
  function i() {
    var t
    Module_27.a(this, i);
    (t = e.call(this, Sn.e_gearJoint)).ratio = 1
    return t
  }
  return i
}(Ln)
var Ls = function (t) {
  Module_58.a(i, t)
  var e = Module_59.a(i)
  function i(t) {
    var s
    var r
    var o
    Module_27.a(this, i);
    (s = e.call(this, t)).m_typeA = Sn.e_unknownJoint
    s.m_typeB = Sn.e_unknownJoint
    s.m_localAnchorA = new It()
    s.m_localAnchorB = new It()
    s.m_localAnchorC = new It()
    s.m_localAnchorD = new It()
    s.m_localAxisC = new It()
    s.m_localAxisD = new It()
    s.m_referenceAngleA = 0
    s.m_referenceAngleB = 0
    s.m_constant = 0
    s.m_ratio = 0
    s.m_impulse = 0
    s.m_indexA = 0
    s.m_indexB = 0
    s.m_indexC = 0
    s.m_indexD = 0
    s.m_lcA = new It()
    s.m_lcB = new It()
    s.m_lcC = new It()
    s.m_lcD = new It()
    s.m_mA = 0
    s.m_mB = 0
    s.m_mC = 0
    s.m_mD = 0
    s.m_iA = 0
    s.m_iB = 0
    s.m_iC = 0
    s.m_iD = 0
    s.m_JvAC = new It()
    s.m_JvBD = new It()
    s.m_JwA = 0
    s.m_JwB = 0
    s.m_JwC = 0
    s.m_JwD = 0
    s.m_mass = 0
    s.m_qA = new jt()
    s.m_qB = new jt()
    s.m_qC = new jt()
    s.m_qD = new jt()
    s.m_lalcA = new It()
    s.m_lalcB = new It()
    s.m_lalcC = new It()
    s.m_lalcD = new It()
    s.m_joint1 = t.joint1
    s.m_joint2 = t.joint2
    s.m_typeA = s.m_joint1.GetType()
    s.m_typeB = s.m_joint2.GetType()
    s.m_bodyC = s.m_joint1.GetBodyA()
    s.m_bodyA = s.m_joint1.GetBodyB()
    var /* [auto-meaningful-name] */s$m_bodyA$m_xf = s.m_bodyA.m_xf
    var /* [auto-meaningful-name] */s$m_bodyA$m_sweep$a = s.m_bodyA.m_sweep.a
    var /* [auto-meaningful-name] */s$m_bodyC$m_xf = s.m_bodyC.m_xf
    var /* [auto-meaningful-name] */s$m_bodyC$m_sweep$a = s.m_bodyC.m_sweep.a
    if (s.m_typeA === Sn.e_revoluteJoint) {
      var /* [auto-meaningful-name] */t$joint1 = t.joint1
      s.m_localAnchorC.Copy(t$joint1.m_localAnchorA)
      s.m_localAnchorA.Copy(t$joint1.m_localAnchorB)
      s.m_referenceAngleA = t$joint1.m_referenceAngle
      s.m_localAxisC.SetZero()
      r = s$m_bodyA$m_sweep$a - s$m_bodyC$m_sweep$a - s.m_referenceAngleA
    } else {
      var /* [auto-meaningful-name] */t$joint11 = t.joint1
      s.m_localAnchorC.Copy(t$joint11.m_localAnchorA)
      s.m_localAnchorA.Copy(t$joint11.m_localAnchorB)
      s.m_referenceAngleA = t$joint11.m_referenceAngle
      s.m_localAxisC.Copy(t$joint11.m_localXAxisA)
      var /* [auto-meaningful-name] */s$m_localAnchorC = s.m_localAnchorC
      var d = jt.MulTRV(s$m_bodyC$m_xf.q, It.AddVV(jt.MulRV(s$m_bodyA$m_xf.q, s.m_localAnchorA, It.s_t0), It.SubVV(s$m_bodyA$m_xf.p, s$m_bodyC$m_xf.p, It.s_t1), It.s_t0), It.s_t0)
      r = It.DotVV(It.SubVV(d, s$m_localAnchorC, It.s_t0), s.m_localAxisC)
    }
    s.m_bodyD = s.m_joint2.GetBodyA()
    s.m_bodyB = s.m_joint2.GetBodyB()
    var /* [auto-meaningful-name] */s$m_bodyB$m_xf = s.m_bodyB.m_xf
    var /* [auto-meaningful-name] */s$m_bodyB$m_sweep$a = s.m_bodyB.m_sweep.a
    var /* [auto-meaningful-name] */s$m_bodyD$m_xf = s.m_bodyD.m_xf
    var /* [auto-meaningful-name] */s$m_bodyD$m_sweep$a = s.m_bodyD.m_sweep.a
    if (s.m_typeB === Sn.e_revoluteJoint) {
      var /* [auto-meaningful-name] */t$joint2 = t.joint2
      s.m_localAnchorD.Copy(t$joint2.m_localAnchorA)
      s.m_localAnchorB.Copy(t$joint2.m_localAnchorB)
      s.m_referenceAngleB = t$joint2.m_referenceAngle
      s.m_localAxisD.SetZero()
      o = s$m_bodyB$m_sweep$a - s$m_bodyD$m_sweep$a - s.m_referenceAngleB
    } else {
      var /* [auto-meaningful-name] */t$joint21 = t.joint2
      s.m_localAnchorD.Copy(t$joint21.m_localAnchorA)
      s.m_localAnchorB.Copy(t$joint21.m_localAnchorB)
      s.m_referenceAngleB = t$joint21.m_referenceAngle
      s.m_localAxisD.Copy(t$joint21.m_localXAxisA)
      var /* [auto-meaningful-name] */s$m_localAnchorD = s.m_localAnchorD
      var C = jt.MulTRV(s$m_bodyD$m_xf.q, It.AddVV(jt.MulRV(s$m_bodyB$m_xf.q, s.m_localAnchorB, It.s_t0), It.SubVV(s$m_bodyB$m_xf.p, s$m_bodyD$m_xf.p, It.s_t1), It.s_t0), It.s_t0)
      o = It.DotVV(It.SubVV(C, s$m_localAnchorD, It.s_t0), s.m_localAxisD)
    }
    s.m_ratio = m(t.ratio, 1)
    s.m_constant = r + s.m_ratio * o
    s.m_impulse = 0
    return s
  }
  Module_39.a(i, [
    {
      key: "InitVelocityConstraints",
      value: function (t) {
        this.m_indexA = this.m_bodyA.m_islandIndex
        this.m_indexB = this.m_bodyB.m_islandIndex
        this.m_indexC = this.m_bodyC.m_islandIndex
        this.m_indexD = this.m_bodyD.m_islandIndex
        this.m_lcA.Copy(this.m_bodyA.m_sweep.localCenter)
        this.m_lcB.Copy(this.m_bodyB.m_sweep.localCenter)
        this.m_lcC.Copy(this.m_bodyC.m_sweep.localCenter)
        this.m_lcD.Copy(this.m_bodyD.m_sweep.localCenter)
        this.m_mA = this.m_bodyA.m_invMass
        this.m_mB = this.m_bodyB.m_invMass
        this.m_mC = this.m_bodyC.m_invMass
        this.m_mD = this.m_bodyD.m_invMass
        this.m_iA = this.m_bodyA.m_invI
        this.m_iB = this.m_bodyB.m_invI
        this.m_iC = this.m_bodyC.m_invI
        this.m_iD = this.m_bodyD.m_invI
        var /* [auto-meaningful-name] */t$positionsThis$m_indexA$a = t.positions[this.m_indexA].a
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexA$v = t.velocities[this.m_indexA].v
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexA$w = t.velocities[this.m_indexA].w
        var /* [auto-meaningful-name] */t$positionsThis$m_indexB$a = t.positions[this.m_indexB].a
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexB$v = t.velocities[this.m_indexB].v
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexB$w = t.velocities[this.m_indexB].w
        var /* [auto-meaningful-name] */t$positionsThis$m_indexC$a = t.positions[this.m_indexC].a
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexC$v = t.velocities[this.m_indexC].v
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexC$w = t.velocities[this.m_indexC].w
        var /* [auto-meaningful-name] */t$positionsThis$m_indexD$a = t.positions[this.m_indexD].a
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexD$v = t.velocities[this.m_indexD].v
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexD$w = t.velocities[this.m_indexD].w
        var f = this.m_qA.SetAngle(t$positionsThis$m_indexA$a)
        var d = this.m_qB.SetAngle(t$positionsThis$m_indexB$a)
        var v = this.m_qC.SetAngle(t$positionsThis$m_indexC$a)
        var y = this.m_qD.SetAngle(t$positionsThis$m_indexD$a)
        this.m_mass = 0
        if (this.m_typeA === Sn.e_revoluteJoint) {
          this.m_JvAC.SetZero()
          this.m_JwA = 1
          this.m_JwC = 1
          this.m_mass += this.m_iA + this.m_iC
        } else {
          var p = jt.MulRV(v, this.m_localAxisC, i.InitVelocityConstraints_s_u)
          It.SubVV(this.m_localAnchorC, this.m_lcC, this.m_lalcC)
          var x = jt.MulRV(v, this.m_lalcC, i.InitVelocityConstraints_s_rC)
          It.SubVV(this.m_localAnchorA, this.m_lcA, this.m_lalcA)
          var B = jt.MulRV(f, this.m_lalcA, i.InitVelocityConstraints_s_rA)
          this.m_JvAC.Copy(p)
          this.m_JwC = It.CrossVV(x, p)
          this.m_JwA = It.CrossVV(B, p)
          this.m_mass += this.m_mC + this.m_mA + this.m_iC * this.m_JwC * this.m_JwC + this.m_iA * this.m_JwA * this.m_JwA
        }
        if (this.m_typeB === Sn.e_revoluteJoint) {
          this.m_JvBD.SetZero()
          this.m_JwB = this.m_ratio
          this.m_JwD = this.m_ratio
          this.m_mass += this.m_ratio * this.m_ratio * (this.m_iB + this.m_iD)
        } else {
          var S = jt.MulRV(y, this.m_localAxisD, i.InitVelocityConstraints_s_u)
          It.SubVV(this.m_localAnchorD, this.m_lcD, this.m_lalcD)
          var A = jt.MulRV(y, this.m_lalcD, i.InitVelocityConstraints_s_rD)
          It.SubVV(this.m_localAnchorB, this.m_lcB, this.m_lalcB)
          var C = jt.MulRV(d, this.m_lalcB, i.InitVelocityConstraints_s_rB)
          It.MulSV(this.m_ratio, S, this.m_JvBD)
          this.m_JwD = this.m_ratio * It.CrossVV(A, S)
          this.m_JwB = this.m_ratio * It.CrossVV(C, S)
          this.m_mass += this.m_ratio * this.m_ratio * (this.m_mD + this.m_mB) + this.m_iD * this.m_JwD * this.m_JwD + this.m_iB * this.m_JwB * this.m_JwB
        }
        this.m_mass = this.m_mass > 0 ? 1 / this.m_mass : 0
        if (t.step.warmStarting) {
          t$velocitiesThis$m_indexA$v.SelfMulAdd(this.m_mA * this.m_impulse, this.m_JvAC)
          t$velocitiesThis$m_indexA$w += this.m_iA * this.m_impulse * this.m_JwA
          t$velocitiesThis$m_indexB$v.SelfMulAdd(this.m_mB * this.m_impulse, this.m_JvBD)
          t$velocitiesThis$m_indexB$w += this.m_iB * this.m_impulse * this.m_JwB
          t$velocitiesThis$m_indexC$v.SelfMulSub(this.m_mC * this.m_impulse, this.m_JvAC)
          t$velocitiesThis$m_indexC$w -= this.m_iC * this.m_impulse * this.m_JwC
          t$velocitiesThis$m_indexD$v.SelfMulSub(this.m_mD * this.m_impulse, this.m_JvBD)
          t$velocitiesThis$m_indexD$w -= this.m_iD * this.m_impulse * this.m_JwD
        } else {
          this.m_impulse = 0
        }
        t.velocities[this.m_indexA].w = t$velocitiesThis$m_indexA$w
        t.velocities[this.m_indexB].w = t$velocitiesThis$m_indexB$w
        t.velocities[this.m_indexC].w = t$velocitiesThis$m_indexC$w
        t.velocities[this.m_indexD].w = t$velocitiesThis$m_indexD$w
      }
    }, {
      key: "SolveVelocityConstraints",
      value: function (t) {
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexA$v = t.velocities[this.m_indexA].v
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexA$w = t.velocities[this.m_indexA].w
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexB$v = t.velocities[this.m_indexB].v
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexB$w = t.velocities[this.m_indexB].w
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexC$v = t.velocities[this.m_indexC].v
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexC$w = t.velocities[this.m_indexC].w
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexD$v = t.velocities[this.m_indexD].v
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexD$w = t.velocities[this.m_indexD].w
        var l = It.DotVV(this.m_JvAC, It.SubVV(t$velocitiesThis$m_indexA$v, t$velocitiesThis$m_indexC$v, It.s_t0)) + It.DotVV(this.m_JvBD, It.SubVV(t$velocitiesThis$m_indexB$v, t$velocitiesThis$m_indexD$v, It.s_t0))
        l += this.m_JwA * t$velocitiesThis$m_indexA$w - this.m_JwC * t$velocitiesThis$m_indexC$w + (this.m_JwB * t$velocitiesThis$m_indexB$w - this.m_JwD * t$velocitiesThis$m_indexD$w)
        var h = -this.m_mass * l
        this.m_impulse += h
        t$velocitiesThis$m_indexA$v.SelfMulAdd(this.m_mA * h, this.m_JvAC)
        t$velocitiesThis$m_indexA$w += this.m_iA * h * this.m_JwA
        t$velocitiesThis$m_indexB$v.SelfMulAdd(this.m_mB * h, this.m_JvBD)
        t$velocitiesThis$m_indexB$w += this.m_iB * h * this.m_JwB
        t$velocitiesThis$m_indexC$v.SelfMulSub(this.m_mC * h, this.m_JvAC)
        t$velocitiesThis$m_indexC$w -= this.m_iC * h * this.m_JwC
        t$velocitiesThis$m_indexD$v.SelfMulSub(this.m_mD * h, this.m_JvBD)
        t$velocitiesThis$m_indexD$w -= this.m_iD * h * this.m_JwD
        t.velocities[this.m_indexA].w = t$velocitiesThis$m_indexA$w
        t.velocities[this.m_indexB].w = t$velocitiesThis$m_indexB$w
        t.velocities[this.m_indexC].w = t$velocitiesThis$m_indexC$w
        t.velocities[this.m_indexD].w = t$velocitiesThis$m_indexD$w
      }
    }, {
      key: "SolvePositionConstraints",
      value: function (t) {
        var e
        var n
        var s
        var r
        var o
        var a
        var /* [auto-meaningful-name] */t$positionsThis$m_indexA$c = t.positions[this.m_indexA].c
        var /* [auto-meaningful-name] */t$positionsThis$m_indexA$a = t.positions[this.m_indexA].a
        var /* [auto-meaningful-name] */t$positionsThis$m_indexB$c = t.positions[this.m_indexB].c
        var /* [auto-meaningful-name] */t$positionsThis$m_indexB$a = t.positions[this.m_indexB].a
        var /* [auto-meaningful-name] */t$positionsThis$m_indexC$c = t.positions[this.m_indexC].c
        var /* [auto-meaningful-name] */t$positionsThis$m_indexC$a = t.positions[this.m_indexC].a
        var /* [auto-meaningful-name] */t$positionsThis$m_indexD$c = t.positions[this.m_indexD].c
        var /* [auto-meaningful-name] */t$positionsThis$m_indexD$a = t.positions[this.m_indexD].a
        var v = this.m_qA.SetAngle(t$positionsThis$m_indexA$a)
        var y = this.m_qB.SetAngle(t$positionsThis$m_indexB$a)
        var p = this.m_qC.SetAngle(t$positionsThis$m_indexC$a)
        var x = this.m_qD.SetAngle(t$positionsThis$m_indexD$a)
        var /* [auto-meaningful-name] */this$m_JvAC = this.m_JvAC
        var /* [auto-meaningful-name] */this$m_JvBD = this.m_JvBD
        var C = 0
        if (this.m_typeA === Sn.e_revoluteJoint) {
          this$m_JvAC.SetZero()
          s = 1
          o = 1
          C += this.m_iA + this.m_iC
          e = t$positionsThis$m_indexA$a - t$positionsThis$m_indexC$a - this.m_referenceAngleA
        } else {
          var b = jt.MulRV(p, this.m_localAxisC, i.SolvePositionConstraints_s_u)
          var g = jt.MulRV(p, this.m_lalcC, i.SolvePositionConstraints_s_rC)
          var V = jt.MulRV(v, this.m_lalcA, i.SolvePositionConstraints_s_rA)
          this$m_JvAC.Copy(b)
          o = It.CrossVV(g, b)
          s = It.CrossVV(V, b)
          C += this.m_mC + this.m_mA + this.m_iC * o * o + this.m_iA * s * s
          var /* [auto-meaningful-name] */this$m_lalcC = this.m_lalcC
          var k = jt.MulTRV(p, It.AddVV(V, It.SubVV(t$positionsThis$m_indexA$c, t$positionsThis$m_indexC$c, It.s_t0), It.s_t0), It.s_t0)
          e = It.DotVV(It.SubVV(k, this$m_lalcC, It.s_t0), this.m_localAxisC)
        }
        if (this.m_typeB === Sn.e_revoluteJoint) {
          this$m_JvBD.SetZero()
          r = this.m_ratio
          a = this.m_ratio
          C += this.m_ratio * this.m_ratio * (this.m_iB + this.m_iD)
          n = t$positionsThis$m_indexB$a - t$positionsThis$m_indexD$a - this.m_referenceAngleB
        } else {
          var M = jt.MulRV(x, this.m_localAxisD, i.SolvePositionConstraints_s_u)
          var P = jt.MulRV(x, this.m_lalcD, i.SolvePositionConstraints_s_rD)
          var I = jt.MulRV(y, this.m_lalcB, i.SolvePositionConstraints_s_rB)
          It.MulSV(this.m_ratio, M, this$m_JvBD)
          a = this.m_ratio * It.CrossVV(P, M)
          r = this.m_ratio * It.CrossVV(I, M)
          C += this.m_ratio * this.m_ratio * (this.m_mD + this.m_mB) + this.m_iD * a * a + this.m_iB * r * r
          var /* [auto-meaningful-name] */this$m_lalcD = this.m_lalcD
          var D = jt.MulTRV(x, It.AddVV(I, It.SubVV(t$positionsThis$m_indexB$c, t$positionsThis$m_indexD$c, It.s_t0), It.s_t0), It.s_t0)
          n = It.DotVV(It.SubVV(D, this$m_lalcD, It.s_t0), this.m_localAxisD)
        }
        var F = e + this.m_ratio * n - this.m_constant
        var L = 0
        if (C > 0) {
          L = -F / C
        }
        t$positionsThis$m_indexA$c.SelfMulAdd(this.m_mA * L, this$m_JvAC)
        t$positionsThis$m_indexA$a += this.m_iA * L * s
        t$positionsThis$m_indexB$c.SelfMulAdd(this.m_mB * L, this$m_JvBD)
        t$positionsThis$m_indexB$a += this.m_iB * L * r
        t$positionsThis$m_indexC$c.SelfMulSub(this.m_mC * L, this$m_JvAC)
        t$positionsThis$m_indexC$a -= this.m_iC * L * o
        t$positionsThis$m_indexD$c.SelfMulSub(this.m_mD * L, this$m_JvBD)
        t$positionsThis$m_indexD$a -= this.m_iD * L * a
        t.positions[this.m_indexA].a = t$positionsThis$m_indexA$a
        t.positions[this.m_indexB].a = t$positionsThis$m_indexB$a
        t.positions[this.m_indexC].a = t$positionsThis$m_indexC$a
        t.positions[this.m_indexD].a = t$positionsThis$m_indexD$a
        return 0 < A
      }
    }, {
      key: "GetAnchorA",
      value: function (t) {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchorA, t)
      }
    }, {
      key: "GetAnchorB",
      value: function (t) {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchorB, t)
      }
    }, {
      key: "GetReactionForce",
      value: function (t, e) {
        return It.MulSV(t * this.m_impulse, this.m_JvAC, e)
      }
    }, {
      key: "GetReactionTorque",
      value: function (t) {
        return t * this.m_impulse * this.m_JwA
      }
    }, {
      key: "GetJoint1",
      value: function () {
        return this.m_joint1
      }
    }, {
      key: "GetJoint2",
      value: function () {
        return this.m_joint2
      }
    }, {
      key: "GetRatio",
      value: function () {
        return this.m_ratio
      }
    }, {
      key: "SetRatio",
      value: function (t) {
        this.m_ratio = t
      }
    }, {
      key: "Dump",
      value: function (t) {
        var /* [auto-meaningful-name] */this$m_bodyA$m_islandIndex = this.m_bodyA.m_islandIndex
        var /* [auto-meaningful-name] */this$m_bodyB$m_islandIndex = this.m_bodyB.m_islandIndex
        var /* [auto-meaningful-name] */this$m_joint1$m_index = this.m_joint1.m_index
        var /* [auto-meaningful-name] */this$m_joint2$m_index = this.m_joint2.m_index
        t("  const jd: b2GearJointDef = new b2GearJointDef();\n")
        t("  jd.bodyA = bodies[%d];\n", this$m_bodyA$m_islandIndex)
        t("  jd.bodyB = bodies[%d];\n", this$m_bodyB$m_islandIndex)
        t("  jd.collideConnected = %s;\n", this.m_collideConnected ? "true" : "false")
        t("  jd.joint1 = joints[%d];\n", this$m_joint1$m_index)
        t("  jd.joint2 = joints[%d];\n", this$m_joint2$m_index)
        t("  jd.ratio = %.15f;\n", this.m_ratio)
        t("  joints[%d] = this.m_world.CreateJoint(jd);\n", this.m_index)
      }
    }
  ])
  return i
}(Tn)
Ls.InitVelocityConstraints_s_u = new It()
Ls.InitVelocityConstraints_s_rA = new It()
Ls.InitVelocityConstraints_s_rB = new It()
Ls.InitVelocityConstraints_s_rC = new It()
Ls.InitVelocityConstraints_s_rD = new It()
Ls.SolvePositionConstraints_s_u = new It()
Ls.SolvePositionConstraints_s_rA = new It()
Ls.SolvePositionConstraints_s_rB = new It()
Ls.SolvePositionConstraints_s_rC = new It()
Ls.SolvePositionConstraints_s_rD = new It()
var Rs = function () {
  function t() {
    Module_27.a(this, t)
    this.m_bodies = []
    this.m_contacts = []
    this.m_joints = []
    this.m_positions = Bs.MakeArray(1024)
    this.m_velocities = Ss.MakeArray(1024)
    this.m_bodyCount = 0
    this.m_jointCount = 0
    this.m_contactCount = 0
    this.m_bodyCapacity = 0
    this.m_contactCapacity = 0
    this.m_jointCapacity = 0
  }
  Module_39.a(t, [
    {
      key: "Initialize",
      value: function (t, e, i, n) {
        this.m_bodyCapacity = t
        this.m_contactCapacity = e
        this.m_jointCapacity = i
        this.m_bodyCount = 0
        this.m_contactCount = 0
        this.m_jointCount = 0
        this.m_listener = n
        if (this.m_positions.length < t) {
          for (var s = mt(2 * this.m_positions.length, t); this.m_positions.length < s;) {
            this.m_positions[this.m_positions.length] = new Bs()
          }
        }
        if (this.m_velocities.length < t) {
          for (var r = mt(2 * this.m_velocities.length, t); this.m_velocities.length < r;) {
            this.m_velocities[this.m_velocities.length] = new Ss()
          }
        }
      }
    }, {
      key: "Clear",
      value: function () {
        this.m_bodyCount = 0
        this.m_contactCount = 0
        this.m_jointCount = 0
      }
    }, {
      key: "AddBody",
      value: function (t) {
        t.m_islandIndex = this.m_bodyCount
        this.m_bodies[this.m_bodyCount++] = t
      }
    }, {
      key: "AddContact",
      value: function (t) {
        this.m_contacts[this.m_contactCount++] = t
      }
    }, {
      key: "AddJoint",
      value: function (t) {
        this.m_joints[this.m_jointCount++] = t
      }
    }, {
      key: "Solve",
      value: function (e, i, n, s) {
        for (var r = t.s_timer.Reset(), o = i.dt, a = 0; a < this.m_bodyCount; ++a) {
          var u = this.m_bodies[a]
          this.m_positions[a].c.Copy(u.m_sweep.c)
          var /* [auto-meaningful-name] */u$m_sweep$a = u.m_sweep.a
          var h = this.m_velocities[a].v.Copy(u.m_linearVelocity)
          var /* [auto-meaningful-name] */u$m_angularVelocity = u.m_angularVelocity
          u.m_sweep.c0.Copy(u.m_sweep.c)
          u.m_sweep.a0 = u.m_sweep.a
          if (u.m_type === Un.b2_dynamicBody) {
            h.x += o * u.m_invMass * (u.m_gravityScale * u.m_mass * n.x + u.m_force.x)
            h.y += o * u.m_invMass * (u.m_gravityScale * u.m_mass * n.y + u.m_force.y)
            u$m_angularVelocity += o * u.m_invI * u.m_torque
            h.SelfMul(1 / (1 + o * u.m_linearDamping))
            u$m_angularVelocity *= 1 / (1 + o * u.m_angularDamping)
          }
          this.m_positions[a].a = u$m_sweep$a
          this.m_velocities[a].w = u$m_angularVelocity
        }
        r.Reset()
        var /* [auto-meaningful-name] */t$s_solverData = t.s_solverData
        t$s_solverData.step.Copy(i)
        t$s_solverData.positions = this.m_positions
        t$s_solverData.velocities = this.m_velocities
        var /* [auto-meaningful-name] */t$s_contactSolverDef = t.s_contactSolverDef
        t$s_contactSolverDef.step.Copy(i)
        t$s_contactSolverDef.contacts = this.m_contacts
        t$s_contactSolverDef.count = this.m_contactCount
        t$s_contactSolverDef.positions = this.m_positions
        t$s_contactSolverDef.velocities = this.m_velocities
        var d = t.s_contactSolver.Initialize(t$s_contactSolverDef)
        d.InitializeVelocityConstraints()
        if (i.warmStarting) {
          d.WarmStart()
        }
        for (var v = 0; v < this.m_jointCount; ++v) {
          this.m_joints[v].InitVelocityConstraints(t$s_solverData)
        }
        e.solveInit = r.GetMilliseconds()
        r.Reset()
        for (var y = 0; y < i.velocityIterations; ++y) {
          for (var p = 0; p < this.m_jointCount; ++p) {
            this.m_joints[p].SolveVelocityConstraints(t$s_solverData)
          }
          d.SolveVelocityConstraints()
        }
        d.StoreImpulses()
        e.solveVelocity = r.GetMilliseconds()
        for (var x = 0; x < this.m_bodyCount; ++x) {
          var /* [auto-meaningful-name] */this$m_positionsX$c = this.m_positions[x].c
          var /* [auto-meaningful-name] */this$m_positionsX$a = this.m_positions[x].a
          var /* [auto-meaningful-name] */this$m_velocitiesX$v = this.m_velocities[x].v
          var /* [auto-meaningful-name] */this$m_velocitiesX$w = this.m_velocities[x].w
          var b = It.MulSV(o, this$m_velocitiesX$v, t.s_translation)
          if (It.DotVV(b, b) > P) {
            var g = M / b.Length()
            this$m_velocitiesX$v.SelfMul(g)
          }
          var V = o * this$m_velocitiesX$w
          if (V * V > G) {
            this$m_velocitiesX$w *= I / ht(V)
          }
          this$m_positionsX$c.x += o * this$m_velocitiesX$v.x
          this$m_positionsX$c.y += o * this$m_velocitiesX$v.y
          this$m_positionsX$a += o * this$m_velocitiesX$w
          this.m_positions[x].a = this$m_positionsX$a
          this.m_velocities[x].w = this$m_velocitiesX$w
        }
        r.Reset()
        for (var w = false, k = 0; k < i.positionIterations; ++k) {
          for (var D = d.SolvePositionConstraints(), F = true, L = 0; L < this.m_jointCount; ++L) {
            var R = this.m_joints[L].SolvePositionConstraints(t$s_solverData)
            F = F && R
          }
          if (D && F) {
            w = true
            break
          }
        }
        for (var j = 0; j < this.m_bodyCount; ++j) {
          var T = this.m_bodies[j]
          T.m_sweep.c.Copy(this.m_positions[j].c)
          T.m_sweep.a = this.m_positions[j].a
          T.m_linearVelocity.Copy(this.m_velocities[j].v)
          T.m_angularVelocity = this.m_velocities[j].w
          T.SynchronizeTransform()
        }
        e.solvePosition = r.GetMilliseconds()
        this.Report(d.m_velocityConstraints)
        if (s) {
          for (var O = c, q = Z * Z, z = U * U, E = 0; E < this.m_bodyCount; ++E) {
            var N = this.m_bodies[E]
            if (N.GetType() !== Un.b2_staticBody) {
              if (!N.m_autoSleepFlag || N.m_angularVelocity * N.m_angularVelocity > z || It.DotVV(N.m_linearVelocity, N.m_linearVelocity) > q) {
                N.m_sleepTime = 0
                O = 0
              } else {
                N.m_sleepTime += o
                O = _t(O, N.m_sleepTime)
              }
            }
          }
          if (O >= X && w) {
            for (var J = 0; J < this.m_bodyCount; ++J) {
              this.m_bodies[J].SetAwake(false)
            }
          }
        }
      }
    }, {
      key: "SolveTOI",
      value: function (e, i, n) {
        for (var s = 0; s < this.m_bodyCount; ++s) {
          var r = this.m_bodies[s]
          this.m_positions[s].c.Copy(r.m_sweep.c)
          this.m_positions[s].a = r.m_sweep.a
          this.m_velocities[s].v.Copy(r.m_linearVelocity)
          this.m_velocities[s].w = r.m_angularVelocity
        }
        var /* [auto-meaningful-name] */t$s_contactSolverDef = t.s_contactSolverDef
        t$s_contactSolverDef.contacts = this.m_contacts
        t$s_contactSolverDef.count = this.m_contactCount
        t$s_contactSolverDef.step.Copy(e)
        t$s_contactSolverDef.positions = this.m_positions
        t$s_contactSolverDef.velocities = this.m_velocities
        for (var a = t.s_contactSolver.Initialize(t$s_contactSolverDef), u = 0; u < e.positionIterations; ++u) {
          if (a.SolveTOIPositionConstraints(i, n)) {
            break
          }
        }
        this.m_bodies[i].m_sweep.c0.Copy(this.m_positions[i].c)
        this.m_bodies[i].m_sweep.a0 = this.m_positions[i].a
        this.m_bodies[n].m_sweep.c0.Copy(this.m_positions[n].c)
        this.m_bodies[n].m_sweep.a0 = this.m_positions[n].a
        a.InitializeVelocityConstraints()
        for (var l = 0; l < e.velocityIterations; ++l) {
          a.SolveVelocityConstraints()
        }
        for (var h = e.dt, _ = 0; _ < this.m_bodyCount; ++_) {
          var /* [auto-meaningful-name] */this$m_positions_$c = this.m_positions[_].c
          var /* [auto-meaningful-name] */this$m_positions_$a = this.m_positions[_].a
          var /* [auto-meaningful-name] */this$m_velocities_$v = this.m_velocities[_].v
          var /* [auto-meaningful-name] */this$m_velocities_$w = this.m_velocities[_].w
          var v = It.MulSV(h, this$m_velocities_$v, t.s_translation)
          if (It.DotVV(v, v) > P) {
            var y = M / v.Length()
            this$m_velocities_$v.SelfMul(y)
          }
          var p = h * this$m_velocities_$w
          if (p * p > G) {
            this$m_velocities_$w *= I / ht(p)
          }
          this$m_positions_$c.SelfMulAdd(h, this$m_velocities_$v)
          this$m_positions_$a += h * this$m_velocities_$w
          this.m_positions[_].a = this$m_positions_$a
          this.m_velocities[_].w = this$m_velocities_$w
          var x = this.m_bodies[_]
          x.m_sweep.c.Copy(this$m_positions_$c)
          x.m_sweep.a = this$m_positions_$a
          x.m_linearVelocity.Copy(this$m_velocities_$v)
          x.m_angularVelocity = this$m_velocities_$w
          x.SynchronizeTransform()
        }
        this.Report(a.m_velocityConstraints)
      }
    }, {
      key: "Report",
      value: function (e) {
        if (null !== this.m_listener) {
          for (var i = 0; i < this.m_contactCount; ++i) {
            var n = this.m_contacts[i]
            if (n) {
              var s = e[i]
              var /* [auto-meaningful-name] */t$s_impulse = t.s_impulse
              t$s_impulse.count = s.pointCount
              for (var o = 0; o < s.pointCount; ++o) {
                t$s_impulse.normalImpulses[o] = s.points[o].normalImpulse
                t$s_impulse.tangentImpulses[o] = s.points[o].tangentImpulse
              }
              this.m_listener.PostSolve(n, t$s_impulse)
            }
          }
        }
      }
    }
  ])
  return t
}()
Rs.s_timer = new zt()
Rs.s_solverData = new As()
Rs.s_contactSolverDef = new Ms()
Rs.s_contactSolver = new Is()
Rs.s_translation = new It()
Rs.s_impulse = new cs()
var js = function (t) {
  Module_58.a(i, t)
  var e = Module_59.a(i)
  function i() {
    var t
    Module_27.a(this, i);
    (t = e.call(this, Sn.e_motorJoint)).linearOffset = new It(0, 0)
    t.angularOffset = 0
    t.maxForce = 1
    t.maxTorque = 1
    t.correctionFactor = .3
    return t
  }
  Module_39.a(i, [
    {
      key: "Initialize",
      value: function (t, e) {
        this.bodyA = t
        this.bodyB = e
        this.bodyA.GetLocalPoint(this.bodyB.GetPosition(), this.linearOffset)
        var i = this.bodyA.GetAngle()
        var n = this.bodyB.GetAngle()
        this.angularOffset = n - i
      }
    }
  ])
  return i
}(Ln)
var Ts = function (t) {
  Module_58.a(i, t)
  var e = Module_59.a(i)
  function i(t) {
    var s
    Module_27.a(this, i);
    (s = e.call(this, t)).m_linearOffset = new It()
    s.m_angularOffset = 0
    s.m_linearImpulse = new It()
    s.m_angularImpulse = 0
    s.m_maxForce = 0
    s.m_maxTorque = 0
    s.m_correctionFactor = .3
    s.m_indexA = 0
    s.m_indexB = 0
    s.m_rA = new It()
    s.m_rB = new It()
    s.m_localCenterA = new It()
    s.m_localCenterB = new It()
    s.m_linearError = new It()
    s.m_angularError = 0
    s.m_invMassA = 0
    s.m_invMassB = 0
    s.m_invIA = 0
    s.m_invIB = 0
    s.m_linearMass = new Lt()
    s.m_angularMass = 0
    s.m_qA = new jt()
    s.m_qB = new jt()
    s.m_K = new Lt()
    s.m_linearOffset.Copy(m(t.linearOffset, It.ZERO))
    s.m_linearImpulse.SetZero()
    s.m_maxForce = m(t.maxForce, 0)
    s.m_maxTorque = m(t.maxTorque, 0)
    s.m_correctionFactor = m(t.correctionFactor, .3)
    return s
  }
  Module_39.a(i, [
    {
      key: "GetAnchorA",
      value: function (t) {
        var e = this.m_bodyA.GetPosition()
        t.x = e.x
        t.y = e.y
        return t
      }
    }, {
      key: "GetAnchorB",
      value: function (t) {
        var e = this.m_bodyB.GetPosition()
        t.x = e.x
        t.y = e.y
        return t
      }
    }, {
      key: "GetReactionForce",
      value: function (t, e) {
        return It.MulSV(t, this.m_linearImpulse, e)
      }
    }, {
      key: "GetReactionTorque",
      value: function (t) {
        return t * this.m_angularImpulse
      }
    }, {
      key: "SetLinearOffset",
      value: function (t) {
        if (!It.IsEqualToV(t, this.m_linearOffset)) {
          this.m_bodyA.SetAwake(true)
          this.m_bodyB.SetAwake(true)
          this.m_linearOffset.Copy(t)
        }
      }
    }, {
      key: "GetLinearOffset",
      value: function () {
        return this.m_linearOffset
      }
    }, {
      key: "SetAngularOffset",
      value: function (t) {
        if (t !== this.m_angularOffset) {
          this.m_bodyA.SetAwake(true)
          this.m_bodyB.SetAwake(true)
          this.m_angularOffset = t
        }
      }
    }, {
      key: "GetAngularOffset",
      value: function () {
        return this.m_angularOffset
      }
    }, {
      key: "SetMaxForce",
      value: function (t) {
        this.m_maxForce = t
      }
    }, {
      key: "GetMaxForce",
      value: function () {
        return this.m_maxForce
      }
    }, {
      key: "SetMaxTorque",
      value: function (t) {
        this.m_maxTorque = t
      }
    }, {
      key: "GetMaxTorque",
      value: function () {
        return this.m_maxTorque
      }
    }, {
      key: "InitVelocityConstraints",
      value: function (t) {
        this.m_indexA = this.m_bodyA.m_islandIndex
        this.m_indexB = this.m_bodyB.m_islandIndex
        this.m_localCenterA.Copy(this.m_bodyA.m_sweep.localCenter)
        this.m_localCenterB.Copy(this.m_bodyB.m_sweep.localCenter)
        this.m_invMassA = this.m_bodyA.m_invMass
        this.m_invMassB = this.m_bodyB.m_invMass
        this.m_invIA = this.m_bodyA.m_invI
        this.m_invIB = this.m_bodyB.m_invI
        var /* [auto-meaningful-name] */t$positionsThis$m_indexA$c = t.positions[this.m_indexA].c
        var /* [auto-meaningful-name] */t$positionsThis$m_indexA$a = t.positions[this.m_indexA].a
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexA$v = t.velocities[this.m_indexA].v
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexA$w = t.velocities[this.m_indexA].w
        var /* [auto-meaningful-name] */t$positionsThis$m_indexB$c = t.positions[this.m_indexB].c
        var /* [auto-meaningful-name] */t$positionsThis$m_indexB$a = t.positions[this.m_indexB].a
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexB$v = t.velocities[this.m_indexB].v
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexB$w = t.velocities[this.m_indexB].w
        var l = this.m_qA.SetAngle(t$positionsThis$m_indexA$a)
        var h = this.m_qB.SetAngle(t$positionsThis$m_indexB$a)
        var _ = jt.MulRV(l, It.SubVV(this.m_linearOffset, this.m_localCenterA, It.s_t0), this.m_rA)
        var m = jt.MulRV(h, It.NegV(this.m_localCenterB, It.s_t0), this.m_rB)
        var /* [auto-meaningful-name] */this$m_invMassA = this.m_invMassA
        var /* [auto-meaningful-name] */this$m_invMassB = this.m_invMassB
        var /* [auto-meaningful-name] */this$m_invIA = this.m_invIA
        var /* [auto-meaningful-name] */this$m_invIB = this.m_invIB
        var /* [auto-meaningful-name] */this$m_K = this.m_K
        this$m_K.ex.x = this$m_invMassA + this$m_invMassB + this$m_invIA * _.y * _.y + this$m_invIB * m.y * m.y
        this$m_K.ex.y = -this$m_invIA * _.x * _.y - this$m_invIB * m.x * m.y
        this$m_K.ey.x = this$m_K.ex.y
        this$m_K.ey.y = this$m_invMassA + this$m_invMassB + this$m_invIA * _.x * _.x + this$m_invIB * m.x * m.x
        this$m_K.GetInverse(this.m_linearMass)
        this.m_angularMass = this$m_invIA + this$m_invIB
        if (this.m_angularMass > 0) {
          this.m_angularMass = 1 / this.m_angularMass
        }
        It.SubVV(It.AddVV(t$positionsThis$m_indexB$c, m, It.s_t0), It.AddVV(t$positionsThis$m_indexA$c, _, It.s_t1), this.m_linearError)
        this.m_angularError = t$positionsThis$m_indexB$a - t$positionsThis$m_indexA$a - this.m_angularOffset
        if (t.step.warmStarting) {
          this.m_linearImpulse.SelfMul(t.step.dtRatio)
          this.m_angularImpulse *= t.step.dtRatio
          var /* [auto-meaningful-name] */this$m_linearImpulse = this.m_linearImpulse
          t$velocitiesThis$m_indexA$v.SelfMulSub(this$m_invMassA, this$m_linearImpulse)
          t$velocitiesThis$m_indexA$w -= this$m_invIA * (It.CrossVV(_, this$m_linearImpulse) + this.m_angularImpulse)
          t$velocitiesThis$m_indexB$v.SelfMulAdd(this$m_invMassB, this$m_linearImpulse)
          t$velocitiesThis$m_indexB$w += this$m_invIB * (It.CrossVV(m, this$m_linearImpulse) + this.m_angularImpulse)
        } else {
          this.m_linearImpulse.SetZero()
          this.m_angularImpulse = 0
        }
        t.velocities[this.m_indexA].w = t$velocitiesThis$m_indexA$w
        t.velocities[this.m_indexB].w = t$velocitiesThis$m_indexB$w
      }
    }, {
      key: "SolveVelocityConstraints",
      value: function (t) {
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexA$v = t.velocities[this.m_indexA].v
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexA$w = t.velocities[this.m_indexA].w
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexB$v = t.velocities[this.m_indexB].v
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexB$w = t.velocities[this.m_indexB].w
        var /* [auto-meaningful-name] */this$m_invMassA = this.m_invMassA
        var /* [auto-meaningful-name] */this$m_invMassB = this.m_invMassB
        var /* [auto-meaningful-name] */this$m_invIA = this.m_invIA
        var /* [auto-meaningful-name] */this$m_invIB = this.m_invIB
        var /* [auto-meaningful-name] */t$step$dt = t.step.dt
        var /* [auto-meaningful-name] */t$step$inv_dt = t.step.inv_dt
        var m = t$velocitiesThis$m_indexB$w - t$velocitiesThis$m_indexA$w + t$step$inv_dt * this.m_correctionFactor * this.m_angularError
        var c = -this.m_angularMass * m
        var /* [auto-meaningful-name] */this$m_angularImpulse = this.m_angularImpulse
        var d = t$step$dt * this.m_maxTorque
        this.m_angularImpulse = ct(this.m_angularImpulse + c, -d, d)
        t$velocitiesThis$m_indexA$w -= this$m_invIA * (c = this.m_angularImpulse - this$m_angularImpulse)
        t$velocitiesThis$m_indexB$w += this$m_invIB * c
        var /* [auto-meaningful-name] */this$m_rA = this.m_rA
        var /* [auto-meaningful-name] */this$m_rB = this.m_rB
        var p = It.AddVV(It.SubVV(It.AddVV(t$velocitiesThis$m_indexB$v, It.CrossSV(t$velocitiesThis$m_indexB$w, this$m_rB, It.s_t0), It.s_t0), It.AddVV(t$velocitiesThis$m_indexA$v, It.CrossSV(t$velocitiesThis$m_indexA$w, this$m_rA, It.s_t1), It.s_t1), It.s_t2), It.MulSV(t$step$inv_dt * this.m_correctionFactor, this.m_linearError, It.s_t3), i.SolveVelocityConstraints_s_Cdot_v2)
        var x = Lt.MulMV(this.m_linearMass, p, i.SolveVelocityConstraints_s_impulse_v2).SelfNeg()
        var B = i.SolveVelocityConstraints_s_oldImpulse_v2.Copy(this.m_linearImpulse)
        this.m_linearImpulse.SelfAdd(x)
        var S = t$step$dt * this.m_maxForce
        if (this.m_linearImpulse.LengthSquared() > S * S) {
          this.m_linearImpulse.Normalize()
          this.m_linearImpulse.SelfMul(S)
        }
        It.SubVV(this.m_linearImpulse, B, x)
        t$velocitiesThis$m_indexA$v.SelfMulSub(this$m_invMassA, x)
        t$velocitiesThis$m_indexA$w -= this$m_invIA * It.CrossVV(this$m_rA, x)
        t$velocitiesThis$m_indexB$v.SelfMulAdd(this$m_invMassB, x)
        t$velocitiesThis$m_indexB$w += this$m_invIB * It.CrossVV(this$m_rB, x)
        t.velocities[this.m_indexA].w = t$velocitiesThis$m_indexA$w
        t.velocities[this.m_indexB].w = t$velocitiesThis$m_indexB$w
      }
    }, {
      key: "SolvePositionConstraints",
      value: function (t) {
        return true
      }
    }, {
      key: "Dump",
      value: function (t) {
        var /* [auto-meaningful-name] */this$m_bodyA$m_islandIndex = this.m_bodyA.m_islandIndex
        var /* [auto-meaningful-name] */this$m_bodyB$m_islandIndex = this.m_bodyB.m_islandIndex
        t("  const jd: b2MotorJointDef = new b2MotorJointDef();\n")
        t("  jd.bodyA = bodies[%d];\n", this$m_bodyA$m_islandIndex)
        t("  jd.bodyB = bodies[%d];\n", this$m_bodyB$m_islandIndex)
        t("  jd.collideConnected = %s;\n", this.m_collideConnected ? "true" : "false")
        t("  jd.linearOffset.Set(%.15f, %.15f);\n", this.m_linearOffset.x, this.m_linearOffset.y)
        t("  jd.angularOffset = %.15f;\n", this.m_angularOffset)
        t("  jd.maxForce = %.15f;\n", this.m_maxForce)
        t("  jd.maxTorque = %.15f;\n", this.m_maxTorque)
        t("  jd.correctionFactor = %.15f;\n", this.m_correctionFactor)
        t("  joints[%d] = this.m_world.CreateJoint(jd);\n", this.m_index)
      }
    }
  ])
  return i
}(Tn)
Ts.SolveVelocityConstraints_s_Cdot_v2 = new It()
Ts.SolveVelocityConstraints_s_impulse_v2 = new It()
Ts.SolveVelocityConstraints_s_oldImpulse_v2 = new It()
var Os = function (t) {
  Module_58.a(i, t)
  var e = Module_59.a(i)
  function i() {
    var t
    Module_27.a(this, i);
    (t = e.call(this, Sn.e_mouseJoint)).target = new It()
    t.maxForce = 0
    t.stiffness = 5
    t.damping = .7
    return t
  }
  return i
}(Ln)
var qs = function (t) {
  Module_58.a(i, t)
  var e = Module_59.a(i)
  function i(t) {
    var s
    Module_27.a(this, i);
    (s = e.call(this, t)).m_localAnchorB = new It()
    s.m_targetA = new It()
    s.m_stiffness = 0
    s.m_damping = 0
    s.m_beta = 0
    s.m_impulse = new It()
    s.m_maxForce = 0
    s.m_gamma = 0
    s.m_indexA = 0
    s.m_indexB = 0
    s.m_rB = new It()
    s.m_localCenterB = new It()
    s.m_invMassB = 0
    s.m_invIB = 0
    s.m_mass = new Lt()
    s.m_C = new It()
    s.m_qB = new jt()
    s.m_lalcB = new It()
    s.m_K = new Lt()
    s.m_targetA.Copy(m(t.target, It.ZERO))
    Tt.MulTXV(s.m_bodyB.GetTransform(), s.m_targetA, s.m_localAnchorB)
    s.m_maxForce = m(t.maxForce, 0)
    s.m_impulse.SetZero()
    s.m_stiffness = m(t.stiffness, 0)
    s.m_damping = m(t.damping, 0)
    s.m_beta = 0
    s.m_gamma = 0
    return s
  }
  Module_39.a(i, [
    {
      key: "SetTarget",
      value: function (t) {
        if (!this.m_bodyB.IsAwake()) {
          this.m_bodyB.SetAwake(true)
        }
        this.m_targetA.Copy(t)
      }
    }, {
      key: "GetTarget",
      value: function () {
        return this.m_targetA
      }
    }, {
      key: "SetMaxForce",
      value: function (t) {
        this.m_maxForce = t
      }
    }, {
      key: "GetMaxForce",
      value: function () {
        return this.m_maxForce
      }
    }, {
      key: "SetStiffness",
      value: function (t) {
        this.m_stiffness = t
      }
    }, {
      key: "GetStiffness",
      value: function () {
        return this.m_stiffness
      }
    }, {
      key: "SetDamping",
      value: function (t) {
        this.m_damping = t
      }
    }, {
      key: "GetDamping",
      value: function () {
        return this.m_damping
      }
    }, {
      key: "InitVelocityConstraints",
      value: function (t) {
        this.m_indexB = this.m_bodyB.m_islandIndex
        this.m_localCenterB.Copy(this.m_bodyB.m_sweep.localCenter)
        this.m_invMassB = this.m_bodyB.m_invMass
        this.m_invIB = this.m_bodyB.m_invI
        var /* [auto-meaningful-name] */t$positionsThis$m_indexB$c = t.positions[this.m_indexB].c
        var /* [auto-meaningful-name] */t$positionsThis$m_indexB$a = t.positions[this.m_indexB].a
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexB$v = t.velocities[this.m_indexB].v
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexB$w = t.velocities[this.m_indexB].w
        var r = this.m_qB.SetAngle(t$positionsThis$m_indexB$a)
        var o = this.m_bodyB.GetMass()
        var a = 2 * v * this.m_stiffness
        var u = 2 * o * this.m_damping * a
        var l = o * (a * a)
        var /* [auto-meaningful-name] */t$step$dt = t.step.dt
        this.m_gamma = t$step$dt * (u + t$step$dt * l)
        if (0 !== this.m_gamma) {
          this.m_gamma = 1 / this.m_gamma
        }
        this.m_beta = t$step$dt * l * this.m_gamma
        It.SubVV(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB)
        jt.MulRV(r, this.m_lalcB, this.m_rB)
        var /* [auto-meaningful-name] */this$m_K = this.m_K
        this$m_K.ex.x = this.m_invMassB + this.m_invIB * this.m_rB.y * this.m_rB.y + this.m_gamma
        this$m_K.ex.y = -this.m_invIB * this.m_rB.x * this.m_rB.y
        this$m_K.ey.x = this$m_K.ex.y
        this$m_K.ey.y = this.m_invMassB + this.m_invIB * this.m_rB.x * this.m_rB.x + this.m_gamma
        this$m_K.GetInverse(this.m_mass)
        this.m_C.x = t$positionsThis$m_indexB$c.x + this.m_rB.x - this.m_targetA.x
        this.m_C.y = t$positionsThis$m_indexB$c.y + this.m_rB.y - this.m_targetA.y
        this.m_C.SelfMul(this.m_beta)
        t$velocitiesThis$m_indexB$w *= .98
        if (t.step.warmStarting) {
          this.m_impulse.SelfMul(t.step.dtRatio)
          t$velocitiesThis$m_indexB$v.x += this.m_invMassB * this.m_impulse.x
          t$velocitiesThis$m_indexB$v.y += this.m_invMassB * this.m_impulse.y
          t$velocitiesThis$m_indexB$w += this.m_invIB * It.CrossVV(this.m_rB, this.m_impulse)
        } else {
          this.m_impulse.SetZero()
        }
        t.velocities[this.m_indexB].w = t$velocitiesThis$m_indexB$w
      }
    }, {
      key: "SolveVelocityConstraints",
      value: function (t) {
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexB$v = t.velocities[this.m_indexB].v
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexB$w = t.velocities[this.m_indexB].w
        var s = It.AddVCrossSV(t$velocitiesThis$m_indexB$v, t$velocitiesThis$m_indexB$w, this.m_rB, i.SolveVelocityConstraints_s_Cdot)
        var r = Lt.MulMV(this.m_mass, It.AddVV(s, It.AddVV(this.m_C, It.MulSV(this.m_gamma, this.m_impulse, It.s_t0), It.s_t0), It.s_t0).SelfNeg(), i.SolveVelocityConstraints_s_impulse)
        var o = i.SolveVelocityConstraints_s_oldImpulse.Copy(this.m_impulse)
        this.m_impulse.SelfAdd(r)
        var a = t.step.dt * this.m_maxForce
        if (this.m_impulse.LengthSquared() > a * a) {
          this.m_impulse.SelfMul(a / this.m_impulse.Length())
        }
        It.SubVV(this.m_impulse, o, r)
        t$velocitiesThis$m_indexB$v.SelfMulAdd(this.m_invMassB, r)
        t$velocitiesThis$m_indexB$w += this.m_invIB * It.CrossVV(this.m_rB, r)
        t.velocities[this.m_indexB].w = t$velocitiesThis$m_indexB$w
      }
    }, {
      key: "SolvePositionConstraints",
      value: function (t) {
        return true
      }
    }, {
      key: "GetAnchorA",
      value: function (t) {
        t.x = this.m_targetA.x
        t.y = this.m_targetA.y
        return t
      }
    }, {
      key: "GetAnchorB",
      value: function (t) {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchorB, t)
      }
    }, {
      key: "GetReactionForce",
      value: function (t, e) {
        return It.MulSV(t, this.m_impulse, e)
      }
    }, {
      key: "GetReactionTorque",
      value: function (t) {
        return 0
      }
    }, {
      key: "Dump",
      value: function (t) {
        t("Mouse joint dumping is not supported.\n")
      }
    }, {
      key: "ShiftOrigin",
      value: function (t) {
        this.m_targetA.SelfSub(t)
      }
    }
  ])
  return i
}(Tn)
qs.SolveVelocityConstraints_s_Cdot = new It()
qs.SolveVelocityConstraints_s_impulse = new It()
qs.SolveVelocityConstraints_s_oldImpulse = new It()
var zs = function (t) {
  Module_58.a(i, t)
  var e = Module_59.a(i)
  function i() {
    var t
    Module_27.a(this, i);
    (t = e.call(this, Sn.e_prismaticJoint)).localAnchorA = new It()
    t.localAnchorB = new It()
    t.localAxisA = new It(1, 0)
    t.referenceAngle = 0
    t.enableLimit = false
    t.lowerTranslation = 0
    t.upperTranslation = 0
    t.enableMotor = false
    t.maxMotorForce = 0
    t.motorSpeed = 0
    return t
  }
  Module_39.a(i, [
    {
      key: "Initialize",
      value: function (t, e, i, n) {
        this.bodyA = t
        this.bodyB = e
        this.bodyA.GetLocalPoint(i, this.localAnchorA)
        this.bodyB.GetLocalPoint(i, this.localAnchorB)
        this.bodyA.GetLocalVector(n, this.localAxisA)
        this.referenceAngle = this.bodyB.GetAngle() - this.bodyA.GetAngle()
      }
    }
  ])
  return i
}(Ln)
var Es = function (t) {
  Module_58.a(i, t)
  var e = Module_59.a(i)
  function i(t) {
    var s
    Module_27.a(this, i);
    (s = e.call(this, t)).m_localAnchorA = new It()
    s.m_localAnchorB = new It()
    s.m_localXAxisA = new It()
    s.m_localYAxisA = new It()
    s.m_referenceAngle = 0
    s.m_impulse = new It(0, 0)
    s.m_motorImpulse = 0
    s.m_lowerImpulse = 0
    s.m_upperImpulse = 0
    s.m_lowerTranslation = 0
    s.m_upperTranslation = 0
    s.m_maxMotorForce = 0
    s.m_motorSpeed = 0
    s.m_enableLimit = false
    s.m_enableMotor = false
    s.m_indexA = 0
    s.m_indexB = 0
    s.m_localCenterA = new It()
    s.m_localCenterB = new It()
    s.m_invMassA = 0
    s.m_invMassB = 0
    s.m_invIA = 0
    s.m_invIB = 0
    s.m_axis = new It(0, 0)
    s.m_perp = new It(0, 0)
    s.m_s1 = 0
    s.m_s2 = 0
    s.m_a1 = 0
    s.m_a2 = 0
    s.m_K = new Lt()
    s.m_K3 = new Rt()
    s.m_K2 = new Lt()
    s.m_translation = 0
    s.m_axialMass = 0
    s.m_qA = new jt()
    s.m_qB = new jt()
    s.m_lalcA = new It()
    s.m_lalcB = new It()
    s.m_rA = new It()
    s.m_rB = new It()
    s.m_localAnchorA.Copy(m(t.localAnchorA, It.ZERO))
    s.m_localAnchorB.Copy(m(t.localAnchorB, It.ZERO))
    s.m_localXAxisA.Copy(m(t.localAxisA, new It(1, 0))).SelfNormalize()
    It.CrossOneV(s.m_localXAxisA, s.m_localYAxisA)
    s.m_referenceAngle = m(t.referenceAngle, 0)
    s.m_lowerTranslation = m(t.lowerTranslation, 0)
    s.m_upperTranslation = m(t.upperTranslation, 0)
    s.m_maxMotorForce = m(t.maxMotorForce, 0)
    s.m_motorSpeed = m(t.motorSpeed, 0)
    s.m_enableLimit = m(t.enableLimit, false)
    s.m_enableMotor = m(t.enableMotor, false)
    return s
  }
  Module_39.a(i, [
    {
      key: "InitVelocityConstraints",
      value: function (t) {
        this.m_indexA = this.m_bodyA.m_islandIndex
        this.m_indexB = this.m_bodyB.m_islandIndex
        this.m_localCenterA.Copy(this.m_bodyA.m_sweep.localCenter)
        this.m_localCenterB.Copy(this.m_bodyB.m_sweep.localCenter)
        this.m_invMassA = this.m_bodyA.m_invMass
        this.m_invMassB = this.m_bodyB.m_invMass
        this.m_invIA = this.m_bodyA.m_invI
        this.m_invIB = this.m_bodyB.m_invI
        var /* [auto-meaningful-name] */t$positionsThis$m_indexA$c = t.positions[this.m_indexA].c
        var /* [auto-meaningful-name] */t$positionsThis$m_indexA$a = t.positions[this.m_indexA].a
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexA$v = t.velocities[this.m_indexA].v
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexA$w = t.velocities[this.m_indexA].w
        var /* [auto-meaningful-name] */t$positionsThis$m_indexB$c = t.positions[this.m_indexB].c
        var /* [auto-meaningful-name] */t$positionsThis$m_indexB$a = t.positions[this.m_indexB].a
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexB$v = t.velocities[this.m_indexB].v
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexB$w = t.velocities[this.m_indexB].w
        var h = this.m_qA.SetAngle(t$positionsThis$m_indexA$a)
        var _ = this.m_qB.SetAngle(t$positionsThis$m_indexB$a)
        It.SubVV(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA)
        var m = jt.MulRV(h, this.m_lalcA, this.m_rA)
        It.SubVV(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB)
        var c = jt.MulRV(_, this.m_lalcB, this.m_rB)
        var f = It.AddVV(It.SubVV(t$positionsThis$m_indexB$c, t$positionsThis$m_indexA$c, It.s_t0), It.SubVV(c, m, It.s_t1), i.InitVelocityConstraints_s_d)
        var /* [auto-meaningful-name] */this$m_invMassA = this.m_invMassA
        var /* [auto-meaningful-name] */this$m_invMassB = this.m_invMassB
        var /* [auto-meaningful-name] */this$m_invIA = this.m_invIA
        var /* [auto-meaningful-name] */this$m_invIB = this.m_invIB
        jt.MulRV(h, this.m_localXAxisA, this.m_axis)
        this.m_a1 = It.CrossVV(It.AddVV(f, m, It.s_t0), this.m_axis)
        this.m_a2 = It.CrossVV(c, this.m_axis)
        this.m_axialMass = this$m_invMassA + this$m_invMassB + this$m_invIA * this.m_a1 * this.m_a1 + this$m_invIB * this.m_a2 * this.m_a2
        if (this.m_axialMass > 0) {
          this.m_axialMass = 1 / this.m_axialMass
        }
        jt.MulRV(h, this.m_localYAxisA, this.m_perp)
        this.m_s1 = It.CrossVV(It.AddVV(f, m, It.s_t0), this.m_perp)
        this.m_s2 = It.CrossVV(c, this.m_perp)
        this.m_K.ex.x = this$m_invMassA + this$m_invMassB + this$m_invIA * this.m_s1 * this.m_s1 + this$m_invIB * this.m_s2 * this.m_s2
        this.m_K.ex.y = this$m_invIA * this.m_s1 + this$m_invIB * this.m_s2
        this.m_K.ey.x = this.m_K.ex.y
        this.m_K.ey.y = this$m_invIA + this$m_invIB
        if (0 === this.m_K.ey.y) {
          this.m_K.ey.y = 1
        }
        if (this.m_enableLimit) {
          this.m_translation = It.DotVV(this.m_axis, f)
        } else {
          this.m_lowerImpulse = 0
          this.m_upperImpulse = 0
        }
        if (!this.m_enableMotor) {
          this.m_motorImpulse = 0
        }
        if (t.step.warmStarting) {
          this.m_impulse.SelfMul(t.step.dtRatio)
          this.m_motorImpulse *= t.step.dtRatio
          this.m_lowerImpulse *= t.step.dtRatio
          this.m_upperImpulse *= t.step.dtRatio
          var x = this.m_motorImpulse + this.m_lowerImpulse - this.m_upperImpulse
          var B = It.AddVV(It.MulSV(this.m_impulse.x, this.m_perp, It.s_t0), It.MulSV(x, this.m_axis, It.s_t1), i.InitVelocityConstraints_s_P)
          var S = this.m_impulse.x * this.m_s1 + this.m_impulse.y + x * this.m_a1
          var A = this.m_impulse.x * this.m_s2 + this.m_impulse.y + x * this.m_a2
          t$velocitiesThis$m_indexA$v.SelfMulSub(this$m_invMassA, B)
          t$velocitiesThis$m_indexA$w -= this$m_invIA * S
          t$velocitiesThis$m_indexB$v.SelfMulAdd(this$m_invMassB, B)
          t$velocitiesThis$m_indexB$w += this$m_invIB * A
        } else {
          this.m_impulse.SetZero()
          this.m_motorImpulse = 0
          this.m_lowerImpulse = 0
          this.m_upperImpulse = 0
        }
        t.velocities[this.m_indexA].w = t$velocitiesThis$m_indexA$w
        t.velocities[this.m_indexB].w = t$velocitiesThis$m_indexB$w
      }
    }, {
      key: "SolveVelocityConstraints",
      value: function (t) {
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexA$v = t.velocities[this.m_indexA].v
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexA$w = t.velocities[this.m_indexA].w
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexB$v = t.velocities[this.m_indexB].v
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexB$w = t.velocities[this.m_indexB].w
        var /* [auto-meaningful-name] */this$m_invMassA = this.m_invMassA
        var /* [auto-meaningful-name] */this$m_invMassB = this.m_invMassB
        var /* [auto-meaningful-name] */this$m_invIA = this.m_invIA
        var /* [auto-meaningful-name] */this$m_invIB = this.m_invIB
        if (this.m_enableMotor) {
          var h = It.DotVV(this.m_axis, It.SubVV(t$velocitiesThis$m_indexB$v, t$velocitiesThis$m_indexA$v, It.s_t0)) + this.m_a2 * t$velocitiesThis$m_indexB$w - this.m_a1 * t$velocitiesThis$m_indexA$w
          var _ = this.m_axialMass * (this.m_motorSpeed - h)
          var /* [auto-meaningful-name] */this$m_motorImpulse = this.m_motorImpulse
          var c = t.step.dt * this.m_maxMotorForce
          this.m_motorImpulse = ct(this.m_motorImpulse + _, -c, c)
          _ = this.m_motorImpulse - this$m_motorImpulse
          var f = It.MulSV(_, this.m_axis, i.SolveVelocityConstraints_s_P)
          var d = _ * this.m_a1
          var v = _ * this.m_a2
          t$velocitiesThis$m_indexA$v.SelfMulSub(this$m_invMassA, f)
          t$velocitiesThis$m_indexA$w -= this$m_invIA * d
          t$velocitiesThis$m_indexB$v.SelfMulAdd(this$m_invMassB, f)
          t$velocitiesThis$m_indexB$w += this$m_invIB * v
        }
        if (this.m_enableLimit) {
          var y = this.m_translation - this.m_lowerTranslation
          var p = It.DotVV(this.m_axis, It.SubVV(t$velocitiesThis$m_indexB$v, t$velocitiesThis$m_indexA$v, It.s_t0)) + this.m_a2 * t$velocitiesThis$m_indexB$w - this.m_a1 * t$velocitiesThis$m_indexA$w
          var x = -this.m_axialMass * (p + mt(y, 0) * t.step.inv_dt)
          var /* [auto-meaningful-name] */this$m_lowerImpulse = this.m_lowerImpulse
          this.m_lowerImpulse = mt(this.m_lowerImpulse + x, 0)
          x = this.m_lowerImpulse - this$m_lowerImpulse
          var S = It.MulSV(x, this.m_axis, i.SolveVelocityConstraints_s_P)
          var A = x * this.m_a1
          var C = x * this.m_a2
          t$velocitiesThis$m_indexA$v.SelfMulSub(this$m_invMassA, S)
          t$velocitiesThis$m_indexA$w -= this$m_invIA * A
          t$velocitiesThis$m_indexB$v.SelfMulAdd(this$m_invMassB, S)
          t$velocitiesThis$m_indexB$w += this$m_invIB * C
          var b = this.m_upperTranslation - this.m_translation
          var g = It.DotVV(this.m_axis, It.SubVV(t$velocitiesThis$m_indexA$v, t$velocitiesThis$m_indexB$v, It.s_t0)) + this.m_a1 * t$velocitiesThis$m_indexA$w - this.m_a2 * t$velocitiesThis$m_indexB$w
          var V = -this.m_axialMass * (g + mt(b, 0) * t.step.inv_dt)
          var /* [auto-meaningful-name] */this$m_upperImpulse = this.m_upperImpulse
          this.m_upperImpulse = mt(this.m_upperImpulse + V, 0)
          V = this.m_upperImpulse - this$m_upperImpulse
          var k = It.MulSV(V, this.m_axis, i.SolveVelocityConstraints_s_P)
          var M = V * this.m_a1
          var P = V * this.m_a2
          t$velocitiesThis$m_indexA$v.SelfMulAdd(this$m_invMassA, k)
          t$velocitiesThis$m_indexA$w += this$m_invIA * M
          t$velocitiesThis$m_indexB$v.SelfMulSub(this$m_invMassB, k)
          t$velocitiesThis$m_indexB$w -= this$m_invIB * P
        }
        var I = It.DotVV(this.m_perp, It.SubVV(t$velocitiesThis$m_indexB$v, t$velocitiesThis$m_indexA$v, It.s_t0)) + this.m_s2 * t$velocitiesThis$m_indexB$w - this.m_s1 * t$velocitiesThis$m_indexA$w
        var G = t$velocitiesThis$m_indexB$w - t$velocitiesThis$m_indexA$w
        var D = this.m_K.Solve(-I, -G, i.SolveVelocityConstraints_s_df)
        this.m_impulse.SelfAdd(D)
        var F = It.MulSV(D.x, this.m_perp, i.SolveVelocityConstraints_s_P)
        var L = D.x * this.m_s1 + D.y
        var R = D.x * this.m_s2 + D.y
        t$velocitiesThis$m_indexA$v.SelfMulSub(this$m_invMassA, F)
        t$velocitiesThis$m_indexA$w -= this$m_invIA * L
        t$velocitiesThis$m_indexB$v.SelfMulAdd(this$m_invMassB, F)
        t$velocitiesThis$m_indexB$w += this$m_invIB * R
        t.velocities[this.m_indexA].w = t$velocitiesThis$m_indexA$w
        t.velocities[this.m_indexB].w = t$velocitiesThis$m_indexB$w
      }
    }, {
      key: "SolvePositionConstraints",
      value: function (t) {
        var /* [auto-meaningful-name] */t$positionsThis$m_indexA$c = t.positions[this.m_indexA].c
        var /* [auto-meaningful-name] */t$positionsThis$m_indexA$a = t.positions[this.m_indexA].a
        var /* [auto-meaningful-name] */t$positionsThis$m_indexB$c = t.positions[this.m_indexB].c
        var /* [auto-meaningful-name] */t$positionsThis$m_indexB$a = t.positions[this.m_indexB].a
        var o = this.m_qA.SetAngle(t$positionsThis$m_indexA$a)
        var a = this.m_qB.SetAngle(t$positionsThis$m_indexB$a)
        var /* [auto-meaningful-name] */this$m_invMassA = this.m_invMassA
        var /* [auto-meaningful-name] */this$m_invMassB = this.m_invMassB
        var /* [auto-meaningful-name] */this$m_invIA = this.m_invIA
        var /* [auto-meaningful-name] */this$m_invIB = this.m_invIB
        var m = jt.MulRV(o, this.m_lalcA, this.m_rA)
        var c = jt.MulRV(a, this.m_lalcB, this.m_rB)
        var f = It.SubVV(It.AddVV(t$positionsThis$m_indexB$c, c, It.s_t0), It.AddVV(t$positionsThis$m_indexA$c, m, It.s_t1), i.SolvePositionConstraints_s_d)
        var d = jt.MulRV(o, this.m_localXAxisA, this.m_axis)
        var v = It.CrossVV(It.AddVV(f, m, It.s_t0), d)
        var y = It.CrossVV(c, d)
        var p = jt.MulRV(o, this.m_localYAxisA, this.m_perp)
        var x = It.CrossVV(It.AddVV(f, m, It.s_t0), p)
        var B = It.CrossVV(c, p)
        var /* [auto-meaningful-name] */i$SolvePositionConstraints_s_impulse = i.SolvePositionConstraints_s_impulse
        var b = It.DotVV(p, f)
        var g = t$positionsThis$m_indexB$a - t$positionsThis$m_indexA$a - this.m_referenceAngle
        var V = ht(b)
        var w = ht(g)
        var k = false
        var M = 0
        if (this.m_enableLimit) {
          var P = It.DotVV(d, f)
          if (ht(this.m_upperTranslation - this.m_lowerTranslation) < 2 * A) {
            M = P
            V = mt(V, ht(P))
            k = true
          } else {
            if (P <= this.m_lowerTranslation) {
              M = _t(P - this.m_lowerTranslation, 0)
              V = mt(V, this.m_lowerTranslation - P)
              k = true
            } else {
              if (P >= this.m_upperTranslation) {
                M = mt(P - this.m_upperTranslation, 0)
                V = mt(V, P - this.m_upperTranslation)
                k = true
              }
            }
          }
        }
        if (k) {
          var I = this$m_invMassA + this$m_invMassB + this$m_invIA * x * x + this$m_invIB * B * B
          var G = this$m_invIA * x + this$m_invIB * B
          var D = this$m_invIA * x * v + this$m_invIB * B * y
          var F = this$m_invIA + this$m_invIB
          if (0 === F) {
            F = 1
          }
          var L = this$m_invIA * v + this$m_invIB * y
          var R = this$m_invMassA + this$m_invMassB + this$m_invIA * v * v + this$m_invIB * y * y
          var /* [auto-meaningful-name] */this$m_K3 = this.m_K3
          this$m_K3.ex.SetXYZ(I, G, D)
          this$m_K3.ey.SetXYZ(G, F, L)
          this$m_K3.ez.SetXYZ(D, L, R)
          i$SolvePositionConstraints_s_impulse = this$m_K3.Solve33(-b, -g, -M, i$SolvePositionConstraints_s_impulse)
        } else {
          var T = this$m_invMassA + this$m_invMassB + this$m_invIA * x * x + this$m_invIB * B * B
          var O = this$m_invIA * x + this$m_invIB * B
          var q = this$m_invIA + this$m_invIB
          if (0 === q) {
            q = 1
          }
          var /* [auto-meaningful-name] */this$m_K2 = this.m_K2
          this$m_K2.ex.Set(T, O)
          this$m_K2.ey.Set(O, q)
          var E = this$m_K2.Solve(-b, -g, i.SolvePositionConstraints_s_impulse1)
          i$SolvePositionConstraints_s_impulse.x = E.x
          i$SolvePositionConstraints_s_impulse.y = E.y
          i$SolvePositionConstraints_s_impulse.z = 0
        }
        var N = It.AddVV(It.MulSV(i$SolvePositionConstraints_s_impulse.x, p, It.s_t0), It.MulSV(i$SolvePositionConstraints_s_impulse.z, d, It.s_t1), i.SolvePositionConstraints_s_P)
        var J = i$SolvePositionConstraints_s_impulse.x * x + i$SolvePositionConstraints_s_impulse.y + i$SolvePositionConstraints_s_impulse.z * v
        var X = i$SolvePositionConstraints_s_impulse.x * B + i$SolvePositionConstraints_s_impulse.y + i$SolvePositionConstraints_s_impulse.z * y
        t$positionsThis$m_indexA$c.SelfMulSub(this$m_invMassA, N)
        t$positionsThis$m_indexA$a -= this$m_invIA * J
        t$positionsThis$m_indexB$c.SelfMulAdd(this$m_invMassB, N)
        t$positionsThis$m_indexB$a += this$m_invIB * X
        t.positions[this.m_indexA].a = t$positionsThis$m_indexA$a
        t.positions[this.m_indexB].a = t$positionsThis$m_indexB$a
        return V <= A && w <= C
      }
    }, {
      key: "GetAnchorA",
      value: function (t) {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchorA, t)
      }
    }, {
      key: "GetAnchorB",
      value: function (t) {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchorB, t)
      }
    }, {
      key: "GetReactionForce",
      value: function (t, e) {
        e.x = t * (this.m_impulse.x * this.m_perp.x + (this.m_motorImpulse + this.m_lowerImpulse - this.m_upperImpulse) * this.m_axis.x)
        e.y = t * (this.m_impulse.y * this.m_perp.y + (this.m_motorImpulse + this.m_lowerImpulse - this.m_upperImpulse) * this.m_axis.y)
        return e
      }
    }, {
      key: "GetReactionTorque",
      value: function (t) {
        return t * this.m_impulse.y
      }
    }, {
      key: "GetLocalAnchorA",
      value: function () {
        return this.m_localAnchorA
      }
    }, {
      key: "GetLocalAnchorB",
      value: function () {
        return this.m_localAnchorB
      }
    }, {
      key: "GetLocalAxisA",
      value: function () {
        return this.m_localXAxisA
      }
    }, {
      key: "GetReferenceAngle",
      value: function () {
        return this.m_referenceAngle
      }
    }, {
      key: "GetJointTranslation",
      value: function () {
        var t = this.m_bodyA.GetWorldPoint(this.m_localAnchorA, i.GetJointTranslation_s_pA)
        var e = this.m_bodyB.GetWorldPoint(this.m_localAnchorB, i.GetJointTranslation_s_pB)
        var n = It.SubVV(e, t, i.GetJointTranslation_s_d)
        var s = this.m_bodyA.GetWorldVector(this.m_localXAxisA, i.GetJointTranslation_s_axis)
        return It.DotVV(n, s)
      }
    }, {
      key: "GetJointSpeed",
      value: function () {
        var /* [auto-meaningful-name] */this$m_bodyA = this.m_bodyA
        var /* [auto-meaningful-name] */this$m_bodyB = this.m_bodyB
        It.SubVV(this.m_localAnchorA, this$m_bodyA.m_sweep.localCenter, this.m_lalcA)
        var i = jt.MulRV(this$m_bodyA.m_xf.q, this.m_lalcA, this.m_rA)
        It.SubVV(this.m_localAnchorB, this$m_bodyB.m_sweep.localCenter, this.m_lalcB)
        var n = jt.MulRV(this$m_bodyB.m_xf.q, this.m_lalcB, this.m_rB)
        var s = It.AddVV(this$m_bodyA.m_sweep.c, i, It.s_t0)
        var r = It.AddVV(this$m_bodyB.m_sweep.c, n, It.s_t1)
        var o = It.SubVV(r, s, It.s_t2)
        var a = this$m_bodyA.GetWorldVector(this.m_localXAxisA, this.m_axis)
        var /* [auto-meaningful-name] */this$m_bodyA$m_linearVelocity = this$m_bodyA.m_linearVelocity
        var /* [auto-meaningful-name] */this$m_bodyB$m_linearVelocity = this$m_bodyB.m_linearVelocity
        var /* [auto-meaningful-name] */this$m_bodyA$m_angularVelocity = this$m_bodyA.m_angularVelocity
        var /* [auto-meaningful-name] */this$m_bodyB$m_angularVelocity = this$m_bodyB.m_angularVelocity
        return It.DotVV(o, It.CrossSV(this$m_bodyA$m_angularVelocity, a, It.s_t0)) + It.DotVV(a, It.SubVV(It.AddVCrossSV(this$m_bodyB$m_linearVelocity, this$m_bodyB$m_angularVelocity, n, It.s_t0), It.AddVCrossSV(this$m_bodyA$m_linearVelocity, this$m_bodyA$m_angularVelocity, i, It.s_t1), It.s_t0))
      }
    }, {
      key: "IsLimitEnabled",
      value: function () {
        return this.m_enableLimit
      }
    }, {
      key: "EnableLimit",
      value: function (t) {
        if (t !== this.m_enableLimit) {
          this.m_bodyA.SetAwake(true)
          this.m_bodyB.SetAwake(true)
          this.m_enableLimit = t
          this.m_lowerImpulse = 0
          this.m_upperImpulse = 0
        }
      }
    }, {
      key: "GetLowerLimit",
      value: function () {
        return this.m_lowerTranslation
      }
    }, {
      key: "GetUpperLimit",
      value: function () {
        return this.m_upperTranslation
      }
    }, {
      key: "SetLimits",
      value: function (t, e) {
        if (!(t === this.m_lowerTranslation && e === this.m_upperTranslation)) {
          this.m_bodyA.SetAwake(true)
          this.m_bodyB.SetAwake(true)
          this.m_lowerTranslation = t
          this.m_upperTranslation = e
          this.m_lowerImpulse = 0
          this.m_upperImpulse = 0
        }
      }
    }, {
      key: "IsMotorEnabled",
      value: function () {
        return this.m_enableMotor
      }
    }, {
      key: "EnableMotor",
      value: function (t) {
        if (t !== this.m_enableMotor) {
          this.m_bodyA.SetAwake(true)
          this.m_bodyB.SetAwake(true)
          this.m_enableMotor = t
        }
      }
    }, {
      key: "SetMotorSpeed",
      value: function (t) {
        if (t !== this.m_motorSpeed) {
          this.m_bodyA.SetAwake(true)
          this.m_bodyB.SetAwake(true)
          this.m_motorSpeed = t
        }
      }
    }, {
      key: "GetMotorSpeed",
      value: function () {
        return this.m_motorSpeed
      }
    }, {
      key: "SetMaxMotorForce",
      value: function (t) {
        if (t !== this.m_maxMotorForce) {
          this.m_bodyA.SetAwake(true)
          this.m_bodyB.SetAwake(true)
          this.m_maxMotorForce = t
        }
      }
    }, {
      key: "GetMaxMotorForce",
      value: function () {
        return this.m_maxMotorForce
      }
    }, {
      key: "GetMotorForce",
      value: function (t) {
        return t * this.m_motorImpulse
      }
    }, {
      key: "Dump",
      value: function (t) {
        var /* [auto-meaningful-name] */this$m_bodyA$m_islandIndex = this.m_bodyA.m_islandIndex
        var /* [auto-meaningful-name] */this$m_bodyB$m_islandIndex = this.m_bodyB.m_islandIndex
        t("  const jd: b2PrismaticJointDef = new b2PrismaticJointDef();\n")
        t("  jd.bodyA = bodies[%d];\n", this$m_bodyA$m_islandIndex)
        t("  jd.bodyB = bodies[%d];\n", this$m_bodyB$m_islandIndex)
        t("  jd.collideConnected = %s;\n", this.m_collideConnected ? "true" : "false")
        t("  jd.localAnchorA.Set(%.15f, %.15f);\n", this.m_localAnchorA.x, this.m_localAnchorA.y)
        t("  jd.localAnchorB.Set(%.15f, %.15f);\n", this.m_localAnchorB.x, this.m_localAnchorB.y)
        t("  jd.localAxisA.Set(%.15f, %.15f);\n", this.m_localXAxisA.x, this.m_localXAxisA.y)
        t("  jd.referenceAngle = %.15f;\n", this.m_referenceAngle)
        t("  jd.enableLimit = %s;\n", this.m_enableLimit ? "true" : "false")
        t("  jd.lowerTranslation = %.15f;\n", this.m_lowerTranslation)
        t("  jd.upperTranslation = %.15f;\n", this.m_upperTranslation)
        t("  jd.enableMotor = %s;\n", this.m_enableMotor ? "true" : "false")
        t("  jd.motorSpeed = %.15f;\n", this.m_motorSpeed)
        t("  jd.maxMotorForce = %.15f;\n", this.m_maxMotorForce)
        t("  joints[%d] = this.m_world.CreateJoint(jd);\n", this.m_index)
      }
    }, {
      key: "Draw",
      value: function (t) {
        var e = this.m_bodyA.GetTransform()
        var n = this.m_bodyB.GetTransform()
        var s = Tt.MulXV(e, this.m_localAnchorA, i.Draw_s_pA)
        var r = Tt.MulXV(n, this.m_localAnchorB, i.Draw_s_pB)
        var o = jt.MulRV(e.q, this.m_localXAxisA, i.Draw_s_axis)
        var /* [auto-meaningful-name] */i$Draw_s_c1 = i.Draw_s_c1
        var /* [auto-meaningful-name] */i$Draw_s_c2 = i.Draw_s_c2
        var /* [auto-meaningful-name] */i$Draw_s_c3 = i.Draw_s_c3
        var /* [auto-meaningful-name] */i$Draw_s_c4 = i.Draw_s_c4
        var /* [auto-meaningful-name] */i$Draw_s_c5 = i.Draw_s_c5
        t.DrawSegment(s, r, i$Draw_s_c5)
        if (this.m_enableLimit) {
          var m = It.AddVMulSV(s, this.m_lowerTranslation, o, i.Draw_s_lower)
          var c = It.AddVMulSV(s, this.m_upperTranslation, o, i.Draw_s_upper)
          var f = jt.MulRV(e.q, this.m_localYAxisA, i.Draw_s_perp)
          t.DrawSegment(m, c, i$Draw_s_c1)
          t.DrawSegment(It.AddVMulSV(m, -.5, f, It.s_t0), It.AddVMulSV(m, .5, f, It.s_t1), i$Draw_s_c2)
          t.DrawSegment(It.AddVMulSV(c, -.5, f, It.s_t0), It.AddVMulSV(c, .5, f, It.s_t1), i$Draw_s_c3)
        } else {
          t.DrawSegment(It.AddVMulSV(s, -1, o, It.s_t0), It.AddVMulSV(s, 1, o, It.s_t1), i$Draw_s_c1)
        }
        t.DrawPoint(s, 5, i$Draw_s_c1)
        t.DrawPoint(r, 5, i$Draw_s_c4)
      }
    }
  ])
  return i
}(Tn)
Es.InitVelocityConstraints_s_d = new It()
Es.InitVelocityConstraints_s_P = new It()
Es.SolveVelocityConstraints_s_P = new It()
Es.SolveVelocityConstraints_s_df = new It()
Es.SolvePositionConstraints_s_d = new It()
Es.SolvePositionConstraints_s_impulse = new Ft()
Es.SolvePositionConstraints_s_impulse1 = new It()
Es.SolvePositionConstraints_s_P = new It()
Es.GetJointTranslation_s_pA = new It()
Es.GetJointTranslation_s_pB = new It()
Es.GetJointTranslation_s_d = new It()
Es.GetJointTranslation_s_axis = new It()
Es.Draw_s_pA = new It()
Es.Draw_s_pB = new It()
Es.Draw_s_axis = new It()
Es.Draw_s_c1 = new o(.7, .7, .7)
Es.Draw_s_c2 = new o(.3, .9, .3)
Es.Draw_s_c3 = new o(.9, .3, .3)
Es.Draw_s_c4 = new o(.3, .3, .9)
Es.Draw_s_c5 = new o(.4, .4, .4)
Es.Draw_s_lower = new It()
Es.Draw_s_upper = new It()
Es.Draw_s_perp = new It()
var Ns = 2
var Js = function (t) {
  Module_58.a(i, t)
  var e = Module_59.a(i)
  function i() {
    var t
    Module_27.a(this, i);
    (t = e.call(this, Sn.e_pulleyJoint)).groundAnchorA = new It(-1, 1)
    t.groundAnchorB = new It(1, 1)
    t.localAnchorA = new It(-1, 0)
    t.localAnchorB = new It(1, 0)
    t.lengthA = 0
    t.lengthB = 0
    t.ratio = 1
    t.collideConnected = true
    return t
  }
  Module_39.a(i, [
    {
      key: "Initialize",
      value: function (t, e, i, n, s, r, o) {
        this.bodyA = t
        this.bodyB = e
        this.groundAnchorA.Copy(i)
        this.groundAnchorB.Copy(n)
        this.bodyA.GetLocalPoint(s, this.localAnchorA)
        this.bodyB.GetLocalPoint(r, this.localAnchorB)
        this.lengthA = It.DistanceVV(s, i)
        this.lengthB = It.DistanceVV(r, n)
        this.ratio = o
      }
    }
  ])
  return i
}(Ln)
var Xs = function (t) {
  Module_58.a(i, t)
  var e = Module_59.a(i)
  function i(t) {
    var s
    Module_27.a(this, i);
    (s = e.call(this, t)).m_groundAnchorA = new It()
    s.m_groundAnchorB = new It()
    s.m_lengthA = 0
    s.m_lengthB = 0
    s.m_localAnchorA = new It()
    s.m_localAnchorB = new It()
    s.m_constant = 0
    s.m_ratio = 0
    s.m_impulse = 0
    s.m_indexA = 0
    s.m_indexB = 0
    s.m_uA = new It()
    s.m_uB = new It()
    s.m_rA = new It()
    s.m_rB = new It()
    s.m_localCenterA = new It()
    s.m_localCenterB = new It()
    s.m_invMassA = 0
    s.m_invMassB = 0
    s.m_invIA = 0
    s.m_invIB = 0
    s.m_mass = 0
    s.m_qA = new jt()
    s.m_qB = new jt()
    s.m_lalcA = new It()
    s.m_lalcB = new It()
    s.m_groundAnchorA.Copy(m(t.groundAnchorA, new It(-1, 1)))
    s.m_groundAnchorB.Copy(m(t.groundAnchorB, new It(1, 0)))
    s.m_localAnchorA.Copy(m(t.localAnchorA, new It(-1, 0)))
    s.m_localAnchorB.Copy(m(t.localAnchorB, new It(1, 0)))
    s.m_lengthA = m(t.lengthA, 0)
    s.m_lengthB = m(t.lengthB, 0)
    s.m_ratio = m(t.ratio, 1)
    s.m_constant = m(t.lengthA, 0) + s.m_ratio * m(t.lengthB, 0)
    s.m_impulse = 0
    return s
  }
  Module_39.a(i, [
    {
      key: "InitVelocityConstraints",
      value: function (t) {
        this.m_indexA = this.m_bodyA.m_islandIndex
        this.m_indexB = this.m_bodyB.m_islandIndex
        this.m_localCenterA.Copy(this.m_bodyA.m_sweep.localCenter)
        this.m_localCenterB.Copy(this.m_bodyB.m_sweep.localCenter)
        this.m_invMassA = this.m_bodyA.m_invMass
        this.m_invMassB = this.m_bodyB.m_invMass
        this.m_invIA = this.m_bodyA.m_invI
        this.m_invIB = this.m_bodyB.m_invI
        var /* [auto-meaningful-name] */t$positionsThis$m_indexA$c = t.positions[this.m_indexA].c
        var /* [auto-meaningful-name] */t$positionsThis$m_indexA$a = t.positions[this.m_indexA].a
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexA$v = t.velocities[this.m_indexA].v
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexA$w = t.velocities[this.m_indexA].w
        var /* [auto-meaningful-name] */t$positionsThis$m_indexB$c = t.positions[this.m_indexB].c
        var /* [auto-meaningful-name] */t$positionsThis$m_indexB$a = t.positions[this.m_indexB].a
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexB$v = t.velocities[this.m_indexB].v
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexB$w = t.velocities[this.m_indexB].w
        var h = this.m_qA.SetAngle(t$positionsThis$m_indexA$a)
        var _ = this.m_qB.SetAngle(t$positionsThis$m_indexB$a)
        It.SubVV(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA)
        jt.MulRV(h, this.m_lalcA, this.m_rA)
        It.SubVV(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB)
        jt.MulRV(_, this.m_lalcB, this.m_rB)
        this.m_uA.Copy(t$positionsThis$m_indexA$c).SelfAdd(this.m_rA).SelfSub(this.m_groundAnchorA)
        this.m_uB.Copy(t$positionsThis$m_indexB$c).SelfAdd(this.m_rB).SelfSub(this.m_groundAnchorB)
        var m = this.m_uA.Length()
        var c = this.m_uB.Length()
        if (m > 10 * A) {
          this.m_uA.SelfMul(1 / m)
        } else {
          this.m_uA.SetZero()
        }
        if (c > 10 * A) {
          this.m_uB.SelfMul(1 / c)
        } else {
          this.m_uB.SetZero()
        }
        var f = It.CrossVV(this.m_rA, this.m_uA)
        var d = It.CrossVV(this.m_rB, this.m_uB)
        var v = this.m_invMassA + this.m_invIA * f * f
        var y = this.m_invMassB + this.m_invIB * d * d
        this.m_mass = v + this.m_ratio * this.m_ratio * y
        if (this.m_mass > 0) {
          this.m_mass = 1 / this.m_mass
        }
        if (t.step.warmStarting) {
          this.m_impulse *= t.step.dtRatio
          var p = It.MulSV(-this.m_impulse, this.m_uA, i.InitVelocityConstraints_s_PA)
          var x = It.MulSV(-this.m_ratio * this.m_impulse, this.m_uB, i.InitVelocityConstraints_s_PB)
          t$velocitiesThis$m_indexA$v.SelfMulAdd(this.m_invMassA, p)
          t$velocitiesThis$m_indexA$w += this.m_invIA * It.CrossVV(this.m_rA, p)
          t$velocitiesThis$m_indexB$v.SelfMulAdd(this.m_invMassB, x)
          t$velocitiesThis$m_indexB$w += this.m_invIB * It.CrossVV(this.m_rB, x)
        } else {
          this.m_impulse = 0
        }
        t.velocities[this.m_indexA].w = t$velocitiesThis$m_indexA$w
        t.velocities[this.m_indexB].w = t$velocitiesThis$m_indexB$w
      }
    }, {
      key: "SolveVelocityConstraints",
      value: function (t) {
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexA$v = t.velocities[this.m_indexA].v
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexA$w = t.velocities[this.m_indexA].w
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexB$v = t.velocities[this.m_indexB].v
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexB$w = t.velocities[this.m_indexB].w
        var o = It.AddVCrossSV(t$velocitiesThis$m_indexA$v, t$velocitiesThis$m_indexA$w, this.m_rA, i.SolveVelocityConstraints_s_vpA)
        var a = It.AddVCrossSV(t$velocitiesThis$m_indexB$v, t$velocitiesThis$m_indexB$w, this.m_rB, i.SolveVelocityConstraints_s_vpB)
        var u = -It.DotVV(this.m_uA, o) - this.m_ratio * It.DotVV(this.m_uB, a)
        var l = -this.m_mass * u
        this.m_impulse += l
        var h = It.MulSV(-l, this.m_uA, i.SolveVelocityConstraints_s_PA)
        var _ = It.MulSV(-this.m_ratio * l, this.m_uB, i.SolveVelocityConstraints_s_PB)
        t$velocitiesThis$m_indexA$v.SelfMulAdd(this.m_invMassA, h)
        t$velocitiesThis$m_indexA$w += this.m_invIA * It.CrossVV(this.m_rA, h)
        t$velocitiesThis$m_indexB$v.SelfMulAdd(this.m_invMassB, _)
        t$velocitiesThis$m_indexB$w += this.m_invIB * It.CrossVV(this.m_rB, _)
        t.velocities[this.m_indexA].w = t$velocitiesThis$m_indexA$w
        t.velocities[this.m_indexB].w = t$velocitiesThis$m_indexB$w
      }
    }, {
      key: "SolvePositionConstraints",
      value: function (t) {
        var /* [auto-meaningful-name] */t$positionsThis$m_indexA$c = t.positions[this.m_indexA].c
        var /* [auto-meaningful-name] */t$positionsThis$m_indexA$a = t.positions[this.m_indexA].a
        var /* [auto-meaningful-name] */t$positionsThis$m_indexB$c = t.positions[this.m_indexB].c
        var /* [auto-meaningful-name] */t$positionsThis$m_indexB$a = t.positions[this.m_indexB].a
        var o = this.m_qA.SetAngle(t$positionsThis$m_indexA$a)
        var a = this.m_qB.SetAngle(t$positionsThis$m_indexB$a)
        It.SubVV(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA)
        var u = jt.MulRV(o, this.m_lalcA, this.m_rA)
        It.SubVV(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB)
        var l = jt.MulRV(a, this.m_lalcB, this.m_rB)
        var h = this.m_uA.Copy(t$positionsThis$m_indexA$c).SelfAdd(u).SelfSub(this.m_groundAnchorA)
        var _ = this.m_uB.Copy(t$positionsThis$m_indexB$c).SelfAdd(l).SelfSub(this.m_groundAnchorB)
        var m = h.Length()
        var c = _.Length()
        if (m > 10 * A) {
          h.SelfMul(1 / m)
        } else {
          h.SetZero()
        }
        if (c > 10 * A) {
          _.SelfMul(1 / c)
        } else {
          _.SetZero()
        }
        var f = It.CrossVV(u, h)
        var d = It.CrossVV(l, _)
        var v = this.m_invMassA + this.m_invIA * f * f
        var y = this.m_invMassB + this.m_invIB * d * d
        var p = v + this.m_ratio * this.m_ratio * y
        if (p > 0) {
          p = 1 / p
        }
        var x = this.m_constant - m - this.m_ratio * c
        var B = ht(x)
        var S = -p * x
        var C = It.MulSV(-S, h, i.SolvePositionConstraints_s_PA)
        var b = It.MulSV(-this.m_ratio * S, _, i.SolvePositionConstraints_s_PB)
        t$positionsThis$m_indexA$c.SelfMulAdd(this.m_invMassA, C)
        t$positionsThis$m_indexA$a += this.m_invIA * It.CrossVV(u, C)
        t$positionsThis$m_indexB$c.SelfMulAdd(this.m_invMassB, b)
        t$positionsThis$m_indexB$a += this.m_invIB * It.CrossVV(l, b)
        t.positions[this.m_indexA].a = t$positionsThis$m_indexA$a
        t.positions[this.m_indexB].a = t$positionsThis$m_indexB$a
        return B < A
      }
    }, {
      key: "GetAnchorA",
      value: function (t) {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchorA, t)
      }
    }, {
      key: "GetAnchorB",
      value: function (t) {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchorB, t)
      }
    }, {
      key: "GetReactionForce",
      value: function (t, e) {
        e.x = t * this.m_impulse * this.m_uB.x
        e.y = t * this.m_impulse * this.m_uB.y
        return e
      }
    }, {
      key: "GetReactionTorque",
      value: function (t) {
        return 0
      }
    }, {
      key: "GetGroundAnchorA",
      value: function () {
        return this.m_groundAnchorA
      }
    }, {
      key: "GetGroundAnchorB",
      value: function () {
        return this.m_groundAnchorB
      }
    }, {
      key: "GetLengthA",
      value: function () {
        return this.m_lengthA
      }
    }, {
      key: "GetLengthB",
      value: function () {
        return this.m_lengthB
      }
    }, {
      key: "GetRatio",
      value: function () {
        return this.m_ratio
      }
    }, {
      key: "GetCurrentLengthA",
      value: function () {
        var t = this.m_bodyA.GetWorldPoint(this.m_localAnchorA, i.GetCurrentLengthA_s_p)
        var /* [auto-meaningful-name] */this$m_groundAnchorA = this.m_groundAnchorA
        return It.DistanceVV(t, this$m_groundAnchorA)
      }
    }, {
      key: "GetCurrentLengthB",
      value: function () {
        var t = this.m_bodyB.GetWorldPoint(this.m_localAnchorB, i.GetCurrentLengthB_s_p)
        var /* [auto-meaningful-name] */this$m_groundAnchorB = this.m_groundAnchorB
        return It.DistanceVV(t, this$m_groundAnchorB)
      }
    }, {
      key: "Dump",
      value: function (t) {
        var /* [auto-meaningful-name] */this$m_bodyA$m_islandIndex = this.m_bodyA.m_islandIndex
        var /* [auto-meaningful-name] */this$m_bodyB$m_islandIndex = this.m_bodyB.m_islandIndex
        t("  const jd: b2PulleyJointDef = new b2PulleyJointDef();\n")
        t("  jd.bodyA = bodies[%d];\n", this$m_bodyA$m_islandIndex)
        t("  jd.bodyB = bodies[%d];\n", this$m_bodyB$m_islandIndex)
        t("  jd.collideConnected = %s;\n", this.m_collideConnected ? "true" : "false")
        t("  jd.groundAnchorA.Set(%.15f, %.15f);\n", this.m_groundAnchorA.x, this.m_groundAnchorA.y)
        t("  jd.groundAnchorB.Set(%.15f, %.15f);\n", this.m_groundAnchorB.x, this.m_groundAnchorB.y)
        t("  jd.localAnchorA.Set(%.15f, %.15f);\n", this.m_localAnchorA.x, this.m_localAnchorA.y)
        t("  jd.localAnchorB.Set(%.15f, %.15f);\n", this.m_localAnchorB.x, this.m_localAnchorB.y)
        t("  jd.lengthA = %.15f;\n", this.m_lengthA)
        t("  jd.lengthB = %.15f;\n", this.m_lengthB)
        t("  jd.ratio = %.15f;\n", this.m_ratio)
        t("  joints[%d] = this.m_world.CreateJoint(jd);\n", this.m_index)
      }
    }, {
      key: "ShiftOrigin",
      value: function (t) {
        this.m_groundAnchorA.SelfSub(t)
        this.m_groundAnchorB.SelfSub(t)
      }
    }
  ])
  return i
}(Tn)
Xs.InitVelocityConstraints_s_PA = new It()
Xs.InitVelocityConstraints_s_PB = new It()
Xs.SolveVelocityConstraints_s_vpA = new It()
Xs.SolveVelocityConstraints_s_vpB = new It()
Xs.SolveVelocityConstraints_s_PA = new It()
Xs.SolveVelocityConstraints_s_PB = new It()
Xs.SolvePositionConstraints_s_PA = new It()
Xs.SolvePositionConstraints_s_PB = new It()
Xs.GetCurrentLengthA_s_p = new It()
Xs.GetCurrentLengthB_s_p = new It()
var Zs = function (t) {
  Module_58.a(i, t)
  var e = Module_59.a(i)
  function i() {
    var t
    Module_27.a(this, i);
    (t = e.call(this, Sn.e_revoluteJoint)).localAnchorA = new It(0, 0)
    t.localAnchorB = new It(0, 0)
    t.referenceAngle = 0
    t.enableLimit = false
    t.lowerAngle = 0
    t.upperAngle = 0
    t.enableMotor = false
    t.motorSpeed = 0
    t.maxMotorTorque = 0
    return t
  }
  Module_39.a(i, [
    {
      key: "Initialize",
      value: function (t, e, i) {
        this.bodyA = t
        this.bodyB = e
        this.bodyA.GetLocalPoint(i, this.localAnchorA)
        this.bodyB.GetLocalPoint(i, this.localAnchorB)
        this.referenceAngle = this.bodyB.GetAngle() - this.bodyA.GetAngle()
      }
    }
  ])
  return i
}(Ln)
var Us = function (t) {
  Module_58.a(i, t)
  var e = Module_59.a(i)
  function i(t) {
    var s
    Module_27.a(this, i);
    (s = e.call(this, t)).m_localAnchorA = new It()
    s.m_localAnchorB = new It()
    s.m_impulse = new It()
    s.m_motorImpulse = 0
    s.m_lowerImpulse = 0
    s.m_upperImpulse = 0
    s.m_enableMotor = false
    s.m_maxMotorTorque = 0
    s.m_motorSpeed = 0
    s.m_enableLimit = false
    s.m_referenceAngle = 0
    s.m_lowerAngle = 0
    s.m_upperAngle = 0
    s.m_indexA = 0
    s.m_indexB = 0
    s.m_rA = new It()
    s.m_rB = new It()
    s.m_localCenterA = new It()
    s.m_localCenterB = new It()
    s.m_invMassA = 0
    s.m_invMassB = 0
    s.m_invIA = 0
    s.m_invIB = 0
    s.m_K = new Lt()
    s.m_angle = 0
    s.m_axialMass = 0
    s.m_qA = new jt()
    s.m_qB = new jt()
    s.m_lalcA = new It()
    s.m_lalcB = new It()
    s.m_localAnchorA.Copy(m(t.localAnchorA, It.ZERO))
    s.m_localAnchorB.Copy(m(t.localAnchorB, It.ZERO))
    s.m_referenceAngle = m(t.referenceAngle, 0)
    s.m_impulse.SetZero()
    s.m_motorImpulse = 0
    s.m_lowerAngle = m(t.lowerAngle, 0)
    s.m_upperAngle = m(t.upperAngle, 0)
    s.m_maxMotorTorque = m(t.maxMotorTorque, 0)
    s.m_motorSpeed = m(t.motorSpeed, 0)
    s.m_enableLimit = m(t.enableLimit, false)
    s.m_enableMotor = m(t.enableMotor, false)
    return s
  }
  Module_39.a(i, [
    {
      key: "InitVelocityConstraints",
      value: function (t) {
        this.m_indexA = this.m_bodyA.m_islandIndex
        this.m_indexB = this.m_bodyB.m_islandIndex
        this.m_localCenterA.Copy(this.m_bodyA.m_sweep.localCenter)
        this.m_localCenterB.Copy(this.m_bodyB.m_sweep.localCenter)
        this.m_invMassA = this.m_bodyA.m_invMass
        this.m_invMassB = this.m_bodyB.m_invMass
        this.m_invIA = this.m_bodyA.m_invI
        this.m_invIB = this.m_bodyB.m_invI
        var /* [auto-meaningful-name] */t$positionsThis$m_indexA$a = t.positions[this.m_indexA].a
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexA$v = t.velocities[this.m_indexA].v
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexA$w = t.velocities[this.m_indexA].w
        var /* [auto-meaningful-name] */t$positionsThis$m_indexB$a = t.positions[this.m_indexB].a
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexB$v = t.velocities[this.m_indexB].v
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexB$w = t.velocities[this.m_indexB].w
        var u = this.m_qA.SetAngle(t$positionsThis$m_indexA$a)
        var l = this.m_qB.SetAngle(t$positionsThis$m_indexB$a)
        It.SubVV(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA)
        jt.MulRV(u, this.m_lalcA, this.m_rA)
        It.SubVV(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB)
        jt.MulRV(l, this.m_lalcB, this.m_rB)
        var h
        var /* [auto-meaningful-name] */this$m_invMassA = this.m_invMassA
        var /* [auto-meaningful-name] */this$m_invMassB = this.m_invMassB
        var /* [auto-meaningful-name] */this$m_invIA = this.m_invIA
        var /* [auto-meaningful-name] */this$m_invIB = this.m_invIB
        this.m_K.ex.x = this$m_invMassA + this$m_invMassB + this.m_rA.y * this.m_rA.y * this$m_invIA + this.m_rB.y * this.m_rB.y * this$m_invIB
        this.m_K.ey.x = -this.m_rA.y * this.m_rA.x * this$m_invIA - this.m_rB.y * this.m_rB.x * this$m_invIB
        this.m_K.ex.y = this.m_K.ey.x
        this.m_K.ey.y = this$m_invMassA + this$m_invMassB + this.m_rA.x * this.m_rA.x * this$m_invIA + this.m_rB.x * this.m_rB.x * this$m_invIB
        this.m_axialMass = this$m_invIA + this$m_invIB
        if (this.m_axialMass > 0) {
          this.m_axialMass = 1 / this.m_axialMass
          h = false
        } else {
          h = true
        }
        this.m_angle = t$positionsThis$m_indexB$a - t$positionsThis$m_indexA$a - this.m_referenceAngle
        if (false === this.m_enableLimit || h) {
          this.m_lowerImpulse = 0
          this.m_upperImpulse = 0
        }
        if (false === this.m_enableMotor || h) {
          this.m_motorImpulse = 0
        }
        if (t.step.warmStarting) {
          this.m_impulse.SelfMul(t.step.dtRatio)
          this.m_motorImpulse *= t.step.dtRatio
          this.m_lowerImpulse *= t.step.dtRatio
          this.m_upperImpulse *= t.step.dtRatio
          var d = this.m_motorImpulse + this.m_lowerImpulse - this.m_upperImpulse
          var v = i.InitVelocityConstraints_s_P.Set(this.m_impulse.x, this.m_impulse.y)
          t$velocitiesThis$m_indexA$v.SelfMulSub(this$m_invMassA, v)
          t$velocitiesThis$m_indexA$w -= this$m_invIA * (It.CrossVV(this.m_rA, v) + d)
          t$velocitiesThis$m_indexB$v.SelfMulAdd(this$m_invMassB, v)
          t$velocitiesThis$m_indexB$w += this$m_invIB * (It.CrossVV(this.m_rB, v) + d)
        } else {
          this.m_impulse.SetZero()
          this.m_motorImpulse = 0
          this.m_lowerImpulse = 0
          this.m_upperImpulse = 0
        }
        t.velocities[this.m_indexA].w = t$velocitiesThis$m_indexA$w
        t.velocities[this.m_indexB].w = t$velocitiesThis$m_indexB$w
      }
    }, {
      key: "SolveVelocityConstraints",
      value: function (t) {
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexA$v = t.velocities[this.m_indexA].v
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexA$w = t.velocities[this.m_indexA].w
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexB$v = t.velocities[this.m_indexB].v
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexB$w = t.velocities[this.m_indexB].w
        var /* [auto-meaningful-name] */this$m_invMassA = this.m_invMassA
        var /* [auto-meaningful-name] */this$m_invMassB = this.m_invMassB
        var /* [auto-meaningful-name] */this$m_invIA = this.m_invIA
        var /* [auto-meaningful-name] */this$m_invIB = this.m_invIB
        var h = this$m_invIA + this$m_invIB === 0
        if (this.m_enableMotor && !h) {
          var _ = t$velocitiesThis$m_indexB$w - t$velocitiesThis$m_indexA$w - this.m_motorSpeed
          var m = -this.m_axialMass * _
          var /* [auto-meaningful-name] */this$m_motorImpulse = this.m_motorImpulse
          var f = t.step.dt * this.m_maxMotorTorque
          this.m_motorImpulse = ct(this.m_motorImpulse + m, -f, f)
          t$velocitiesThis$m_indexA$w -= this$m_invIA * (m = this.m_motorImpulse - this$m_motorImpulse)
          t$velocitiesThis$m_indexB$w += this$m_invIB * m
        }
        if (this.m_enableLimit && !h) {
          var d = this.m_angle - this.m_lowerAngle
          var v = t$velocitiesThis$m_indexB$w - t$velocitiesThis$m_indexA$w
          var y = -this.m_axialMass * (v + mt(d, 0) * t.step.inv_dt)
          var /* [auto-meaningful-name] */this$m_lowerImpulse = this.m_lowerImpulse
          this.m_lowerImpulse = mt(this.m_lowerImpulse + y, 0)
          t$velocitiesThis$m_indexA$w -= this$m_invIA * (y = this.m_lowerImpulse - this$m_lowerImpulse)
          t$velocitiesThis$m_indexB$w += this$m_invIB * y
          var x = this.m_upperAngle - this.m_angle
          var B = t$velocitiesThis$m_indexA$w - t$velocitiesThis$m_indexB$w
          var S = -this.m_axialMass * (B + mt(x, 0) * t.step.inv_dt)
          var /* [auto-meaningful-name] */this$m_upperImpulse = this.m_upperImpulse
          this.m_upperImpulse = mt(this.m_upperImpulse + S, 0)
          t$velocitiesThis$m_indexA$w += this$m_invIA * (S = this.m_upperImpulse - this$m_upperImpulse)
          t$velocitiesThis$m_indexB$w -= this$m_invIB * S
        }
        var C = It.SubVV(It.AddVCrossSV(t$velocitiesThis$m_indexB$v, t$velocitiesThis$m_indexB$w, this.m_rB, It.s_t0), It.AddVCrossSV(t$velocitiesThis$m_indexA$v, t$velocitiesThis$m_indexA$w, this.m_rA, It.s_t1), i.SolveVelocityConstraints_s_Cdot_v2)
        var b = this.m_K.Solve(-C.x, -C.y, i.SolveVelocityConstraints_s_impulse_v2)
        this.m_impulse.x += b.x
        this.m_impulse.y += b.y
        t$velocitiesThis$m_indexA$v.SelfMulSub(this$m_invMassA, b)
        t$velocitiesThis$m_indexA$w -= this$m_invIA * It.CrossVV(this.m_rA, b)
        t$velocitiesThis$m_indexB$v.SelfMulAdd(this$m_invMassB, b)
        t$velocitiesThis$m_indexB$w += this$m_invIB * It.CrossVV(this.m_rB, b)
        t.velocities[this.m_indexA].w = t$velocitiesThis$m_indexA$w
        t.velocities[this.m_indexB].w = t$velocitiesThis$m_indexB$w
      }
    }, {
      key: "SolvePositionConstraints",
      value: function (t) {
        var e
        var /* [auto-meaningful-name] */t$positionsThis$m_indexA$c = t.positions[this.m_indexA].c
        var /* [auto-meaningful-name] */t$positionsThis$m_indexA$a = t.positions[this.m_indexA].a
        var /* [auto-meaningful-name] */t$positionsThis$m_indexB$c = t.positions[this.m_indexB].c
        var /* [auto-meaningful-name] */t$positionsThis$m_indexB$a = t.positions[this.m_indexB].a
        var a = this.m_qA.SetAngle(t$positionsThis$m_indexA$a)
        var u = this.m_qB.SetAngle(t$positionsThis$m_indexB$a)
        var l = 0
        var h = this.m_invIA + this.m_invIB === 0
        if (this.m_enableLimit && !h) {
          var _ = t$positionsThis$m_indexB$a - t$positionsThis$m_indexA$a - this.m_referenceAngle
          var m = 0
          if (ht(this.m_upperAngle - this.m_lowerAngle) < 2 * C) {
            m = ct(_ - this.m_lowerAngle, -k, k)
          } else {
            if (_ <= this.m_lowerAngle) {
              m = ct(_ - this.m_lowerAngle + C, -k, 0)
            } else {
              if (_ >= this.m_upperAngle) {
                m = ct(_ - this.m_upperAngle - C, 0, k)
              }
            }
          }
          var c = -this.m_axialMass * m
          t$positionsThis$m_indexA$a -= this.m_invIA * c
          t$positionsThis$m_indexB$a += this.m_invIB * c
          l = ht(m)
        }
        a.SetAngle(t$positionsThis$m_indexA$a)
        u.SetAngle(t$positionsThis$m_indexB$a)
        It.SubVV(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA)
        var f = jt.MulRV(a, this.m_lalcA, this.m_rA)
        It.SubVV(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB)
        var d = jt.MulRV(u, this.m_lalcB, this.m_rB)
        var v = It.SubVV(It.AddVV(t$positionsThis$m_indexB$c, d, It.s_t0), It.AddVV(t$positionsThis$m_indexA$c, f, It.s_t1), i.SolvePositionConstraints_s_C_v2)
        e = v.Length()
        var /* [auto-meaningful-name] */this$m_invMassA = this.m_invMassA
        var /* [auto-meaningful-name] */this$m_invMassB = this.m_invMassB
        var /* [auto-meaningful-name] */this$m_invIA = this.m_invIA
        var /* [auto-meaningful-name] */this$m_invIB = this.m_invIB
        var /* [auto-meaningful-name] */this$m_K = this.m_K
        this$m_K.ex.x = this$m_invMassA + this$m_invMassB + this$m_invIA * f.y * f.y + this$m_invIB * d.y * d.y
        this$m_K.ex.y = -this$m_invIA * f.x * f.y - this$m_invIB * d.x * d.y
        this$m_K.ey.x = this$m_K.ex.y
        this$m_K.ey.y = this$m_invMassA + this$m_invMassB + this$m_invIA * f.x * f.x + this$m_invIB * d.x * d.x
        var b = this$m_K.Solve(v.x, v.y, i.SolvePositionConstraints_s_impulse).SelfNeg()
        t$positionsThis$m_indexA$c.SelfMulSub(this$m_invMassA, b)
        t$positionsThis$m_indexA$a -= this$m_invIA * It.CrossVV(f, b)
        t$positionsThis$m_indexB$c.SelfMulAdd(this$m_invMassB, b)
        t$positionsThis$m_indexB$a += this$m_invIB * It.CrossVV(d, b)
        t.positions[this.m_indexA].a = t$positionsThis$m_indexA$a
        t.positions[this.m_indexB].a = t$positionsThis$m_indexB$a
        return e <= A && l <= C
      }
    }, {
      key: "GetAnchorA",
      value: function (t) {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchorA, t)
      }
    }, {
      key: "GetAnchorB",
      value: function (t) {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchorB, t)
      }
    }, {
      key: "GetReactionForce",
      value: function (t, e) {
        e.x = t * this.m_impulse.x
        e.y = t * this.m_impulse.y
        return e
      }
    }, {
      key: "GetReactionTorque",
      value: function (t) {
        return t * (this.m_lowerImpulse - this.m_upperImpulse)
      }
    }, {
      key: "GetLocalAnchorA",
      value: function () {
        return this.m_localAnchorA
      }
    }, {
      key: "GetLocalAnchorB",
      value: function () {
        return this.m_localAnchorB
      }
    }, {
      key: "GetReferenceAngle",
      value: function () {
        return this.m_referenceAngle
      }
    }, {
      key: "GetJointAngle",
      value: function () {
        return this.m_bodyB.m_sweep.a - this.m_bodyA.m_sweep.a - this.m_referenceAngle
      }
    }, {
      key: "GetJointSpeed",
      value: function () {
        return this.m_bodyB.m_angularVelocity - this.m_bodyA.m_angularVelocity
      }
    }, {
      key: "IsMotorEnabled",
      value: function () {
        return this.m_enableMotor
      }
    }, {
      key: "EnableMotor",
      value: function (t) {
        if (t !== this.m_enableMotor) {
          this.m_bodyA.SetAwake(true)
          this.m_bodyB.SetAwake(true)
          this.m_enableMotor = t
        }
      }
    }, {
      key: "GetMotorTorque",
      value: function (t) {
        return t * this.m_motorImpulse
      }
    }, {
      key: "GetMotorSpeed",
      value: function () {
        return this.m_motorSpeed
      }
    }, {
      key: "SetMaxMotorTorque",
      value: function (t) {
        if (t !== this.m_maxMotorTorque) {
          this.m_bodyA.SetAwake(true)
          this.m_bodyB.SetAwake(true)
          this.m_maxMotorTorque = t
        }
      }
    }, {
      key: "GetMaxMotorTorque",
      value: function () {
        return this.m_maxMotorTorque
      }
    }, {
      key: "IsLimitEnabled",
      value: function () {
        return this.m_enableLimit
      }
    }, {
      key: "EnableLimit",
      value: function (t) {
        if (t !== this.m_enableLimit) {
          this.m_bodyA.SetAwake(true)
          this.m_bodyB.SetAwake(true)
          this.m_enableLimit = t
          this.m_lowerImpulse = 0
          this.m_upperImpulse = 0
        }
      }
    }, {
      key: "GetLowerLimit",
      value: function () {
        return this.m_lowerAngle
      }
    }, {
      key: "GetUpperLimit",
      value: function () {
        return this.m_upperAngle
      }
    }, {
      key: "SetLimits",
      value: function (t, e) {
        if (!(t === this.m_lowerAngle && e === this.m_upperAngle)) {
          this.m_bodyA.SetAwake(true)
          this.m_bodyB.SetAwake(true)
          this.m_lowerImpulse = 0
          this.m_upperImpulse = 0
          this.m_lowerAngle = t
          this.m_upperAngle = e
        }
      }
    }, {
      key: "SetMotorSpeed",
      value: function (t) {
        if (t !== this.m_motorSpeed) {
          this.m_bodyA.SetAwake(true)
          this.m_bodyB.SetAwake(true)
          this.m_motorSpeed = t
        }
      }
    }, {
      key: "Dump",
      value: function (t) {
        var /* [auto-meaningful-name] */this$m_bodyA$m_islandIndex = this.m_bodyA.m_islandIndex
        var /* [auto-meaningful-name] */this$m_bodyB$m_islandIndex = this.m_bodyB.m_islandIndex
        t("  const jd: b2RevoluteJointDef = new b2RevoluteJointDef();\n")
        t("  jd.bodyA = bodies[%d];\n", this$m_bodyA$m_islandIndex)
        t("  jd.bodyB = bodies[%d];\n", this$m_bodyB$m_islandIndex)
        t("  jd.collideConnected = %s;\n", this.m_collideConnected ? "true" : "false")
        t("  jd.localAnchorA.Set(%.15f, %.15f);\n", this.m_localAnchorA.x, this.m_localAnchorA.y)
        t("  jd.localAnchorB.Set(%.15f, %.15f);\n", this.m_localAnchorB.x, this.m_localAnchorB.y)
        t("  jd.referenceAngle = %.15f;\n", this.m_referenceAngle)
        t("  jd.enableLimit = %s;\n", this.m_enableLimit ? "true" : "false")
        t("  jd.lowerAngle = %.15f;\n", this.m_lowerAngle)
        t("  jd.upperAngle = %.15f;\n", this.m_upperAngle)
        t("  jd.enableMotor = %s;\n", this.m_enableMotor ? "true" : "false")
        t("  jd.motorSpeed = %.15f;\n", this.m_motorSpeed)
        t("  jd.maxMotorTorque = %.15f;\n", this.m_maxMotorTorque)
        t("  joints[%d] = this.m_world.CreateJoint(jd);\n", this.m_index)
      }
    }, {
      key: "Draw",
      value: function (t) {
        var e = this.m_bodyA.GetTransform()
        var n = this.m_bodyB.GetTransform()
        var s = Tt.MulXV(e, this.m_localAnchorA, i.Draw_s_pA)
        var r = Tt.MulXV(n, this.m_localAnchorB, i.Draw_s_pB)
        var /* [auto-meaningful-name] */i$Draw_s_c1 = i.Draw_s_c1
        var /* [auto-meaningful-name] */i$Draw_s_c2 = i.Draw_s_c2
        var /* [auto-meaningful-name] */i$Draw_s_c3 = i.Draw_s_c3
        var /* [auto-meaningful-name] */i$Draw_s_c4 = i.Draw_s_c4
        var /* [auto-meaningful-name] */i$Draw_s_c5 = i.Draw_s_c5
        t.DrawPoint(s, 5, i$Draw_s_c4)
        t.DrawPoint(r, 5, i$Draw_s_c5)
        var _ = this.m_bodyA.GetAngle()
        var m = this.m_bodyB.GetAngle() - _ - this.m_referenceAngle
        var c = .5
        var f = i.Draw_s_r.Set(c * Math.cos(m), c * Math.sin(m))
        t.DrawSegment(r, It.AddVV(r, f, It.s_t0), i$Draw_s_c1)
        t.DrawCircle(r, c, i$Draw_s_c1)
        if (this.m_enableLimit) {
          var d = i.Draw_s_rlo.Set(c * Math.cos(this.m_lowerAngle), c * Math.sin(this.m_lowerAngle))
          var v = i.Draw_s_rhi.Set(c * Math.cos(this.m_upperAngle), c * Math.sin(this.m_upperAngle))
          t.DrawSegment(r, It.AddVV(r, d, It.s_t0), i$Draw_s_c2)
          t.DrawSegment(r, It.AddVV(r, v, It.s_t0), i$Draw_s_c3)
        }
        var /* [auto-meaningful-name] */i$Draw_s_color_ = i.Draw_s_color_
        t.DrawSegment(e.p, s, i$Draw_s_color_)
        t.DrawSegment(s, r, i$Draw_s_color_)
        t.DrawSegment(n.p, r, i$Draw_s_color_)
      }
    }
  ])
  return i
}(Tn)
Us.InitVelocityConstraints_s_P = new It()
Us.SolveVelocityConstraints_s_Cdot_v2 = new It()
Us.SolveVelocityConstraints_s_impulse_v2 = new It()
Us.SolvePositionConstraints_s_C_v2 = new It()
Us.SolvePositionConstraints_s_impulse = new It()
Us.Draw_s_pA = new It()
Us.Draw_s_pB = new It()
Us.Draw_s_c1 = new o(.7, .7, .7)
Us.Draw_s_c2 = new o(.3, .9, .3)
Us.Draw_s_c3 = new o(.9, .3, .3)
Us.Draw_s_c4 = new o(.3, .3, .9)
Us.Draw_s_c5 = new o(.4, .4, .4)
Us.Draw_s_color_ = new o(.5, .8, .8)
Us.Draw_s_r = new It()
Us.Draw_s_rlo = new It()
Us.Draw_s_rhi = new It()
var Ws = function (t) {
  Module_58.a(i, t)
  var e = Module_59.a(i)
  function i() {
    var t
    Module_27.a(this, i);
    (t = e.call(this, Sn.e_weldJoint)).localAnchorA = new It()
    t.localAnchorB = new It()
    t.referenceAngle = 0
    t.stiffness = 0
    t.damping = 0
    return t
  }
  Module_39.a(i, [
    {
      key: "Initialize",
      value: function (t, e, i) {
        this.bodyA = t
        this.bodyB = e
        this.bodyA.GetLocalPoint(i, this.localAnchorA)
        this.bodyB.GetLocalPoint(i, this.localAnchorB)
        this.referenceAngle = this.bodyB.GetAngle() - this.bodyA.GetAngle()
      }
    }
  ])
  return i
}(Ln)
var Qs = function (t) {
  Module_58.a(i, t)
  var e = Module_59.a(i)
  function i(t) {
    var s
    Module_27.a(this, i);
    (s = e.call(this, t)).m_stiffness = 0
    s.m_damping = 0
    s.m_bias = 0
    s.m_localAnchorA = new It()
    s.m_localAnchorB = new It()
    s.m_referenceAngle = 0
    s.m_gamma = 0
    s.m_impulse = new Ft(0, 0, 0)
    s.m_indexA = 0
    s.m_indexB = 0
    s.m_rA = new It()
    s.m_rB = new It()
    s.m_localCenterA = new It()
    s.m_localCenterB = new It()
    s.m_invMassA = 0
    s.m_invMassB = 0
    s.m_invIA = 0
    s.m_invIB = 0
    s.m_mass = new Rt()
    s.m_qA = new jt()
    s.m_qB = new jt()
    s.m_lalcA = new It()
    s.m_lalcB = new It()
    s.m_K = new Rt()
    s.m_stiffness = m(t.stiffness, 0)
    s.m_damping = m(t.damping, 0)
    s.m_localAnchorA.Copy(m(t.localAnchorA, It.ZERO))
    s.m_localAnchorB.Copy(m(t.localAnchorB, It.ZERO))
    s.m_referenceAngle = m(t.referenceAngle, 0)
    s.m_impulse.SetZero()
    return s
  }
  Module_39.a(i, [
    {
      key: "InitVelocityConstraints",
      value: function (t) {
        this.m_indexA = this.m_bodyA.m_islandIndex
        this.m_indexB = this.m_bodyB.m_islandIndex
        this.m_localCenterA.Copy(this.m_bodyA.m_sweep.localCenter)
        this.m_localCenterB.Copy(this.m_bodyB.m_sweep.localCenter)
        this.m_invMassA = this.m_bodyA.m_invMass
        this.m_invMassB = this.m_bodyB.m_invMass
        this.m_invIA = this.m_bodyA.m_invI
        this.m_invIB = this.m_bodyB.m_invI
        var /* [auto-meaningful-name] */t$positionsThis$m_indexA$a = t.positions[this.m_indexA].a
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexA$v = t.velocities[this.m_indexA].v
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexA$w = t.velocities[this.m_indexA].w
        var /* [auto-meaningful-name] */t$positionsThis$m_indexB$a = t.positions[this.m_indexB].a
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexB$v = t.velocities[this.m_indexB].v
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexB$w = t.velocities[this.m_indexB].w
        var u = this.m_qA.SetAngle(t$positionsThis$m_indexA$a)
        var l = this.m_qB.SetAngle(t$positionsThis$m_indexB$a)
        It.SubVV(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA)
        jt.MulRV(u, this.m_lalcA, this.m_rA)
        It.SubVV(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB)
        jt.MulRV(l, this.m_lalcB, this.m_rB)
        var /* [auto-meaningful-name] */this$m_invMassA = this.m_invMassA
        var /* [auto-meaningful-name] */this$m_invMassB = this.m_invMassB
        var /* [auto-meaningful-name] */this$m_invIA = this.m_invIA
        var /* [auto-meaningful-name] */this$m_invIB = this.m_invIB
        var /* [auto-meaningful-name] */this$m_K = this.m_K
        this$m_K.ex.x = this$m_invMassA + this$m_invMassB + this.m_rA.y * this.m_rA.y * this$m_invIA + this.m_rB.y * this.m_rB.y * this$m_invIB
        this$m_K.ey.x = -this.m_rA.y * this.m_rA.x * this$m_invIA - this.m_rB.y * this.m_rB.x * this$m_invIB
        this$m_K.ez.x = -this.m_rA.y * this$m_invIA - this.m_rB.y * this$m_invIB
        this$m_K.ex.y = this$m_K.ey.x
        this$m_K.ey.y = this$m_invMassA + this$m_invMassB + this.m_rA.x * this.m_rA.x * this$m_invIA + this.m_rB.x * this.m_rB.x * this$m_invIB
        this$m_K.ez.y = this.m_rA.x * this$m_invIA + this.m_rB.x * this$m_invIB
        this$m_K.ex.z = this$m_K.ez.x
        this$m_K.ey.z = this$m_K.ez.y
        this$m_K.ez.z = this$m_invIA + this$m_invIB
        if (this.m_stiffness > 0) {
          this$m_K.GetInverse22(this.m_mass)
          var d = this$m_invIA + this$m_invIB
          var v = t$positionsThis$m_indexB$a - t$positionsThis$m_indexA$a - this.m_referenceAngle
          var /* [auto-meaningful-name] */this$m_damping = this.m_damping
          var /* [auto-meaningful-name] */this$m_stiffness = this.m_stiffness
          var /* [auto-meaningful-name] */t$step$dt = t.step.dt
          this.m_gamma = t$step$dt * (this$m_damping + t$step$dt * this$m_stiffness)
          this.m_gamma = 0 !== this.m_gamma ? 1 / this.m_gamma : 0
          this.m_bias = v * t$step$dt * this$m_stiffness * this.m_gamma
          d += this.m_gamma
          this.m_mass.ez.z = 0 !== d ? 1 / d : 0
        } else {
          this$m_K.GetSymInverse33(this.m_mass)
          this.m_gamma = 0
          this.m_bias = 0
        }
        if (t.step.warmStarting) {
          this.m_impulse.SelfMul(t.step.dtRatio)
          var B = i.InitVelocityConstraints_s_P.Set(this.m_impulse.x, this.m_impulse.y)
          t$velocitiesThis$m_indexA$v.SelfMulSub(this$m_invMassA, B)
          t$velocitiesThis$m_indexA$w -= this$m_invIA * (It.CrossVV(this.m_rA, B) + this.m_impulse.z)
          t$velocitiesThis$m_indexB$v.SelfMulAdd(this$m_invMassB, B)
          t$velocitiesThis$m_indexB$w += this$m_invIB * (It.CrossVV(this.m_rB, B) + this.m_impulse.z)
        } else {
          this.m_impulse.SetZero()
        }
        t.velocities[this.m_indexA].w = t$velocitiesThis$m_indexA$w
        t.velocities[this.m_indexB].w = t$velocitiesThis$m_indexB$w
      }
    }, {
      key: "SolveVelocityConstraints",
      value: function (t) {
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexA$v = t.velocities[this.m_indexA].v
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexA$w = t.velocities[this.m_indexA].w
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexB$v = t.velocities[this.m_indexB].v
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexB$w = t.velocities[this.m_indexB].w
        var /* [auto-meaningful-name] */this$m_invMassA = this.m_invMassA
        var /* [auto-meaningful-name] */this$m_invMassB = this.m_invMassB
        var /* [auto-meaningful-name] */this$m_invIA = this.m_invIA
        var /* [auto-meaningful-name] */this$m_invIB = this.m_invIB
        if (this.m_stiffness > 0) {
          var h = t$velocitiesThis$m_indexB$w - t$velocitiesThis$m_indexA$w
          var _ = -this.m_mass.ez.z * (h + this.m_bias + this.m_gamma * this.m_impulse.z)
          this.m_impulse.z += _
          t$velocitiesThis$m_indexA$w -= this$m_invIA * _
          t$velocitiesThis$m_indexB$w += this$m_invIB * _
          var m = It.SubVV(It.AddVCrossSV(t$velocitiesThis$m_indexB$v, t$velocitiesThis$m_indexB$w, this.m_rB, It.s_t0), It.AddVCrossSV(t$velocitiesThis$m_indexA$v, t$velocitiesThis$m_indexA$w, this.m_rA, It.s_t1), i.SolveVelocityConstraints_s_Cdot1)
          var c = Rt.MulM33XY(this.m_mass, m.x, m.y, i.SolveVelocityConstraints_s_impulse1).SelfNeg()
          this.m_impulse.x += c.x
          this.m_impulse.y += c.y
          var f = c
          t$velocitiesThis$m_indexA$v.SelfMulSub(this$m_invMassA, f)
          t$velocitiesThis$m_indexA$w -= this$m_invIA * It.CrossVV(this.m_rA, f)
          t$velocitiesThis$m_indexB$v.SelfMulAdd(this$m_invMassB, f)
          t$velocitiesThis$m_indexB$w += this$m_invIB * It.CrossVV(this.m_rB, f)
        } else {
          var d = It.SubVV(It.AddVCrossSV(t$velocitiesThis$m_indexB$v, t$velocitiesThis$m_indexB$w, this.m_rB, It.s_t0), It.AddVCrossSV(t$velocitiesThis$m_indexA$v, t$velocitiesThis$m_indexA$w, this.m_rA, It.s_t1), i.SolveVelocityConstraints_s_Cdot1)
          var v = t$velocitiesThis$m_indexB$w - t$velocitiesThis$m_indexA$w
          var y = Rt.MulM33XYZ(this.m_mass, d.x, d.y, v, i.SolveVelocityConstraints_s_impulse).SelfNeg()
          this.m_impulse.SelfAdd(y)
          var p = i.SolveVelocityConstraints_s_P.Set(y.x, y.y)
          t$velocitiesThis$m_indexA$v.SelfMulSub(this$m_invMassA, p)
          t$velocitiesThis$m_indexA$w -= this$m_invIA * (It.CrossVV(this.m_rA, p) + y.z)
          t$velocitiesThis$m_indexB$v.SelfMulAdd(this$m_invMassB, p)
          t$velocitiesThis$m_indexB$w += this$m_invIB * (It.CrossVV(this.m_rB, p) + y.z)
        }
        t.velocities[this.m_indexA].w = t$velocitiesThis$m_indexA$w
        t.velocities[this.m_indexB].w = t$velocitiesThis$m_indexB$w
      }
    }, {
      key: "SolvePositionConstraints",
      value: function (t) {
        var /* [auto-meaningful-name] */t$positionsThis$m_indexA$c = t.positions[this.m_indexA].c
        var /* [auto-meaningful-name] */t$positionsThis$m_indexA$a = t.positions[this.m_indexA].a
        var /* [auto-meaningful-name] */t$positionsThis$m_indexB$c = t.positions[this.m_indexB].c
        var /* [auto-meaningful-name] */t$positionsThis$m_indexB$a = t.positions[this.m_indexB].a
        var o = this.m_qA.SetAngle(t$positionsThis$m_indexA$a)
        var a = this.m_qB.SetAngle(t$positionsThis$m_indexB$a)
        var /* [auto-meaningful-name] */this$m_invMassA = this.m_invMassA
        var /* [auto-meaningful-name] */this$m_invMassB = this.m_invMassB
        var /* [auto-meaningful-name] */this$m_invIA = this.m_invIA
        var /* [auto-meaningful-name] */this$m_invIB = this.m_invIB
        It.SubVV(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA)
        var m = jt.MulRV(o, this.m_lalcA, this.m_rA)
        It.SubVV(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB)
        var c
        var f
        var d = jt.MulRV(a, this.m_lalcB, this.m_rB)
        var /* [auto-meaningful-name] */this$m_K = this.m_K
        this$m_K.ex.x = this$m_invMassA + this$m_invMassB + m.y * m.y * this$m_invIA + d.y * d.y * this$m_invIB
        this$m_K.ey.x = -m.y * m.x * this$m_invIA - d.y * d.x * this$m_invIB
        this$m_K.ez.x = -m.y * this$m_invIA - d.y * this$m_invIB
        this$m_K.ex.y = this$m_K.ey.x
        this$m_K.ey.y = this$m_invMassA + this$m_invMassB + m.x * m.x * this$m_invIA + d.x * d.x * this$m_invIB
        this$m_K.ez.y = m.x * this$m_invIA + d.x * this$m_invIB
        this$m_K.ex.z = this$m_K.ez.x
        this$m_K.ey.z = this$m_K.ez.y
        this$m_K.ez.z = this$m_invIA + this$m_invIB
        if (this.m_stiffness > 0) {
          var y = It.SubVV(It.AddVV(t$positionsThis$m_indexB$c, d, It.s_t0), It.AddVV(t$positionsThis$m_indexA$c, m, It.s_t1), i.SolvePositionConstraints_s_C1)
          c = y.Length()
          f = 0
          var p = this$m_K.Solve22(y.x, y.y, i.SolvePositionConstraints_s_P).SelfNeg()
          t$positionsThis$m_indexA$c.SelfMulSub(this$m_invMassA, p)
          t$positionsThis$m_indexA$a -= this$m_invIA * It.CrossVV(m, p)
          t$positionsThis$m_indexB$c.SelfMulAdd(this$m_invMassB, p)
          t$positionsThis$m_indexB$a += this$m_invIB * It.CrossVV(d, p)
        } else {
          var x = It.SubVV(It.AddVV(t$positionsThis$m_indexB$c, d, It.s_t0), It.AddVV(t$positionsThis$m_indexA$c, m, It.s_t1), i.SolvePositionConstraints_s_C1)
          var B = t$positionsThis$m_indexB$a - t$positionsThis$m_indexA$a - this.m_referenceAngle
          c = x.Length()
          f = ht(B)
          var S = this$m_K.Solve33(x.x, x.y, B, i.SolvePositionConstraints_s_impulse).SelfNeg()
          var b = i.SolvePositionConstraints_s_P.Set(S.x, S.y)
          t$positionsThis$m_indexA$c.SelfMulSub(this$m_invMassA, b)
          t$positionsThis$m_indexA$a -= this$m_invIA * (It.CrossVV(this.m_rA, b) + S.z)
          t$positionsThis$m_indexB$c.SelfMulAdd(this$m_invMassB, b)
          t$positionsThis$m_indexB$a += this$m_invIB * (It.CrossVV(this.m_rB, b) + S.z)
        }
        t.positions[this.m_indexA].a = t$positionsThis$m_indexA$a
        t.positions[this.m_indexB].a = t$positionsThis$m_indexB$a
        return c <= A && f <= C
      }
    }, {
      key: "GetAnchorA",
      value: function (t) {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchorA, t)
      }
    }, {
      key: "GetAnchorB",
      value: function (t) {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchorB, t)
      }
    }, {
      key: "GetReactionForce",
      value: function (t, e) {
        e.x = t * this.m_impulse.x
        e.y = t * this.m_impulse.y
        return e
      }
    }, {
      key: "GetReactionTorque",
      value: function (t) {
        return t * this.m_impulse.z
      }
    }, {
      key: "GetLocalAnchorA",
      value: function () {
        return this.m_localAnchorA
      }
    }, {
      key: "GetLocalAnchorB",
      value: function () {
        return this.m_localAnchorB
      }
    }, {
      key: "GetReferenceAngle",
      value: function () {
        return this.m_referenceAngle
      }
    }, {
      key: "SetStiffness",
      value: function (t) {
        this.m_stiffness = t
      }
    }, {
      key: "GetStiffness",
      value: function () {
        return this.m_stiffness
      }
    }, {
      key: "SetDamping",
      value: function (t) {
        this.m_damping = t
      }
    }, {
      key: "GetDamping",
      value: function () {
        return this.m_damping
      }
    }, {
      key: "Dump",
      value: function (t) {
        var /* [auto-meaningful-name] */this$m_bodyA$m_islandIndex = this.m_bodyA.m_islandIndex
        var /* [auto-meaningful-name] */this$m_bodyB$m_islandIndex = this.m_bodyB.m_islandIndex
        t("  const jd: b2WeldJointDef = new b2WeldJointDef();\n")
        t("  jd.bodyA = bodies[%d];\n", this$m_bodyA$m_islandIndex)
        t("  jd.bodyB = bodies[%d];\n", this$m_bodyB$m_islandIndex)
        t("  jd.collideConnected = %s;\n", this.m_collideConnected ? "true" : "false")
        t("  jd.localAnchorA.Set(%.15f, %.15f);\n", this.m_localAnchorA.x, this.m_localAnchorA.y)
        t("  jd.localAnchorB.Set(%.15f, %.15f);\n", this.m_localAnchorB.x, this.m_localAnchorB.y)
        t("  jd.referenceAngle = %.15f;\n", this.m_referenceAngle)
        t("  jd.stiffness = %.15f;\n", this.m_stiffness)
        t("  jd.damping = %.15f;\n", this.m_damping)
        t("  joints[%d] = this.m_world.CreateJoint(jd);\n", this.m_index)
      }
    }
  ])
  return i
}(Tn)
Qs.InitVelocityConstraints_s_P = new It()
Qs.SolveVelocityConstraints_s_Cdot1 = new It()
Qs.SolveVelocityConstraints_s_impulse1 = new It()
Qs.SolveVelocityConstraints_s_impulse = new Ft()
Qs.SolveVelocityConstraints_s_P = new It()
Qs.SolvePositionConstraints_s_C1 = new It()
Qs.SolvePositionConstraints_s_P = new It()
Qs.SolvePositionConstraints_s_impulse = new Ft()
var Ys
var Ks = function (t) {
  Module_58.a(i, t)
  var e = Module_59.a(i)
  function i() {
    var t
    Module_27.a(this, i);
    (t = e.call(this, Sn.e_wheelJoint)).localAnchorA = new It(0, 0)
    t.localAnchorB = new It(0, 0)
    t.localAxisA = new It(1, 0)
    t.enableLimit = false
    t.lowerTranslation = 0
    t.upperTranslation = 0
    t.enableMotor = false
    t.maxMotorTorque = 0
    t.motorSpeed = 0
    t.stiffness = 0
    t.damping = 0
    return t
  }
  Module_39.a(i, [
    {
      key: "Initialize",
      value: function (t, e, i, n) {
        this.bodyA = t
        this.bodyB = e
        this.bodyA.GetLocalPoint(i, this.localAnchorA)
        this.bodyB.GetLocalPoint(i, this.localAnchorB)
        this.bodyA.GetLocalVector(n, this.localAxisA)
      }
    }
  ])
  return i
}(Ln)
var Hs = function (t) {
  Module_58.a(i, t)
  var e = Module_59.a(i)
  function i(t) {
    var s
    Module_27.a(this, i);
    (s = e.call(this, t)).m_localAnchorA = new It()
    s.m_localAnchorB = new It()
    s.m_localXAxisA = new It()
    s.m_localYAxisA = new It()
    s.m_impulse = 0
    s.m_motorImpulse = 0
    s.m_springImpulse = 0
    s.m_lowerImpulse = 0
    s.m_upperImpulse = 0
    s.m_translation = 0
    s.m_lowerTranslation = 0
    s.m_upperTranslation = 0
    s.m_maxMotorTorque = 0
    s.m_motorSpeed = 0
    s.m_enableLimit = false
    s.m_enableMotor = false
    s.m_stiffness = 0
    s.m_damping = 0
    s.m_indexA = 0
    s.m_indexB = 0
    s.m_localCenterA = new It()
    s.m_localCenterB = new It()
    s.m_invMassA = 0
    s.m_invMassB = 0
    s.m_invIA = 0
    s.m_invIB = 0
    s.m_ax = new It()
    s.m_ay = new It()
    s.m_sAx = 0
    s.m_sBx = 0
    s.m_sAy = 0
    s.m_sBy = 0
    s.m_mass = 0
    s.m_motorMass = 0
    s.m_axialMass = 0
    s.m_springMass = 0
    s.m_bias = 0
    s.m_gamma = 0
    s.m_qA = new jt()
    s.m_qB = new jt()
    s.m_lalcA = new It()
    s.m_lalcB = new It()
    s.m_rA = new It()
    s.m_rB = new It()
    s.m_localAnchorA.Copy(m(t.localAnchorA, It.ZERO))
    s.m_localAnchorB.Copy(m(t.localAnchorB, It.ZERO))
    s.m_localXAxisA.Copy(m(t.localAxisA, It.UNITX))
    It.CrossOneV(s.m_localXAxisA, s.m_localYAxisA)
    s.m_lowerTranslation = m(t.lowerTranslation, 0)
    s.m_upperTranslation = m(t.upperTranslation, 0)
    s.m_enableLimit = m(t.enableLimit, false)
    s.m_maxMotorTorque = m(t.maxMotorTorque, 0)
    s.m_motorSpeed = m(t.motorSpeed, 0)
    s.m_enableMotor = m(t.enableMotor, false)
    s.m_ax.SetZero()
    s.m_ay.SetZero()
    s.m_stiffness = m(t.stiffness, 0)
    s.m_damping = m(t.damping, 0)
    return s
  }
  Module_39.a(i, [
    {
      key: "GetMotorSpeed",
      value: function () {
        return this.m_motorSpeed
      }
    }, {
      key: "GetMaxMotorTorque",
      value: function () {
        return this.m_maxMotorTorque
      }
    }, {
      key: "SetSpringFrequencyHz",
      value: function (t) {
        this.m_stiffness = t
      }
    }, {
      key: "GetSpringFrequencyHz",
      value: function () {
        return this.m_stiffness
      }
    }, {
      key: "SetSpringDampingRatio",
      value: function (t) {
        this.m_damping = t
      }
    }, {
      key: "GetSpringDampingRatio",
      value: function () {
        return this.m_damping
      }
    }, {
      key: "InitVelocityConstraints",
      value: function (t) {
        this.m_indexA = this.m_bodyA.m_islandIndex
        this.m_indexB = this.m_bodyB.m_islandIndex
        this.m_localCenterA.Copy(this.m_bodyA.m_sweep.localCenter)
        this.m_localCenterB.Copy(this.m_bodyB.m_sweep.localCenter)
        this.m_invMassA = this.m_bodyA.m_invMass
        this.m_invMassB = this.m_bodyB.m_invMass
        this.m_invIA = this.m_bodyA.m_invI
        this.m_invIB = this.m_bodyB.m_invI
        var /* [auto-meaningful-name] */this$m_invMassA = this.m_invMassA
        var /* [auto-meaningful-name] */this$m_invMassB = this.m_invMassB
        var /* [auto-meaningful-name] */this$m_invIA = this.m_invIA
        var /* [auto-meaningful-name] */this$m_invIB = this.m_invIB
        var /* [auto-meaningful-name] */t$positionsThis$m_indexA$c = t.positions[this.m_indexA].c
        var /* [auto-meaningful-name] */t$positionsThis$m_indexA$a = t.positions[this.m_indexA].a
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexA$v = t.velocities[this.m_indexA].v
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexA$w = t.velocities[this.m_indexA].w
        var /* [auto-meaningful-name] */t$positionsThis$m_indexB$c = t.positions[this.m_indexB].c
        var /* [auto-meaningful-name] */t$positionsThis$m_indexB$a = t.positions[this.m_indexB].a
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexB$v = t.velocities[this.m_indexB].v
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexB$w = t.velocities[this.m_indexB].w
        var f = this.m_qA.SetAngle(t$positionsThis$m_indexA$a)
        var d = this.m_qB.SetAngle(t$positionsThis$m_indexB$a)
        It.SubVV(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA)
        var v = jt.MulRV(f, this.m_lalcA, this.m_rA)
        It.SubVV(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB)
        var y = jt.MulRV(d, this.m_lalcB, this.m_rB)
        var p = It.SubVV(It.AddVV(t$positionsThis$m_indexB$c, y, It.s_t0), It.AddVV(t$positionsThis$m_indexA$c, v, It.s_t1), i.InitVelocityConstraints_s_d)
        jt.MulRV(f, this.m_localYAxisA, this.m_ay)
        this.m_sAy = It.CrossVV(It.AddVV(p, v, It.s_t0), this.m_ay)
        this.m_sBy = It.CrossVV(y, this.m_ay)
        this.m_mass = this$m_invMassA + this$m_invMassB + this$m_invIA * this.m_sAy * this.m_sAy + this$m_invIB * this.m_sBy * this.m_sBy
        if (this.m_mass > 0) {
          this.m_mass = 1 / this.m_mass
        }
        jt.MulRV(f, this.m_localXAxisA, this.m_ax)
        this.m_sAx = It.CrossVV(It.AddVV(p, v, It.s_t0), this.m_ax)
        this.m_sBx = It.CrossVV(y, this.m_ax)
        var x = this$m_invMassA + this$m_invMassB + this$m_invIA * this.m_sAx * this.m_sAx + this$m_invIB * this.m_sBx * this.m_sBx
        this.m_axialMass = x > 0 ? 1 / x : 0
        this.m_springMass = 0
        this.m_bias = 0
        this.m_gamma = 0
        if (this.m_stiffness > 0 && x > 0) {
          this.m_springMass = 1 / x
          var B = It.DotVV(p, this.m_ax)
          var /* [auto-meaningful-name] */t$step$dt = t.step.dt
          this.m_gamma = t$step$dt * (this.m_damping + t$step$dt * this.m_stiffness)
          if (this.m_gamma > 0) {
            this.m_gamma = 1 / this.m_gamma
          }
          this.m_bias = B * t$step$dt * this.m_stiffness * this.m_gamma
          this.m_springMass = x + this.m_gamma
          if (this.m_springMass > 0) {
            this.m_springMass = 1 / this.m_springMass
          }
        } else {
          this.m_springImpulse = 0
        }
        if (this.m_enableLimit) {
          this.m_translation = It.DotVV(this.m_ax, p)
        } else {
          this.m_lowerImpulse = 0
          this.m_upperImpulse = 0
        }
        if (this.m_enableMotor) {
          this.m_motorMass = this$m_invIA + this$m_invIB
          if (this.m_motorMass > 0) {
            this.m_motorMass = 1 / this.m_motorMass
          }
        } else {
          this.m_motorMass = 0
          this.m_motorImpulse = 0
        }
        if (t.step.warmStarting) {
          this.m_impulse *= t.step.dtRatio
          this.m_springImpulse *= t.step.dtRatio
          this.m_motorImpulse *= t.step.dtRatio
          var A = this.m_springImpulse + this.m_lowerImpulse - this.m_upperImpulse
          var C = It.AddVV(It.MulSV(this.m_impulse, this.m_ay, It.s_t0), It.MulSV(A, this.m_ax, It.s_t1), i.InitVelocityConstraints_s_P)
          var b = this.m_impulse * this.m_sAy + A * this.m_sAx + this.m_motorImpulse
          var g = this.m_impulse * this.m_sBy + A * this.m_sBx + this.m_motorImpulse
          t$velocitiesThis$m_indexA$v.SelfMulSub(this.m_invMassA, C)
          t$velocitiesThis$m_indexA$w -= this.m_invIA * b
          t$velocitiesThis$m_indexB$v.SelfMulAdd(this.m_invMassB, C)
          t$velocitiesThis$m_indexB$w += this.m_invIB * g
        } else {
          this.m_impulse = 0
          this.m_springImpulse = 0
          this.m_motorImpulse = 0
          this.m_lowerImpulse = 0
          this.m_upperImpulse = 0
        }
        t.velocities[this.m_indexA].w = t$velocitiesThis$m_indexA$w
        t.velocities[this.m_indexB].w = t$velocitiesThis$m_indexB$w
      }
    }, {
      key: "SolveVelocityConstraints",
      value: function (t) {
        var /* [auto-meaningful-name] */this$m_invMassA = this.m_invMassA
        var /* [auto-meaningful-name] */this$m_invMassB = this.m_invMassB
        var /* [auto-meaningful-name] */this$m_invIA = this.m_invIA
        var /* [auto-meaningful-name] */this$m_invIB = this.m_invIB
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexA$v = t.velocities[this.m_indexA].v
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexA$w = t.velocities[this.m_indexA].w
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexB$v = t.velocities[this.m_indexB].v
        var /* [auto-meaningful-name] */t$velocitiesThis$m_indexB$w = t.velocities[this.m_indexB].w
        var h = It.DotVV(this.m_ax, It.SubVV(t$velocitiesThis$m_indexB$v, t$velocitiesThis$m_indexA$v, It.s_t0)) + this.m_sBx * t$velocitiesThis$m_indexB$w - this.m_sAx * t$velocitiesThis$m_indexA$w
        var _ = -this.m_springMass * (h + this.m_bias + this.m_gamma * this.m_springImpulse)
        this.m_springImpulse += _
        var m = It.MulSV(_, this.m_ax, i.SolveVelocityConstraints_s_P)
        var c = _ * this.m_sAx
        var f = _ * this.m_sBx
        t$velocitiesThis$m_indexA$v.SelfMulSub(this$m_invMassA, m)
        t$velocitiesThis$m_indexA$w -= this$m_invIA * c
        t$velocitiesThis$m_indexB$v.SelfMulAdd(this$m_invMassB, m)
        var d = (t$velocitiesThis$m_indexB$w += this$m_invIB * f) - t$velocitiesThis$m_indexA$w - this.m_motorSpeed
        var v = -this.m_motorMass * d
        var /* [auto-meaningful-name] */this$m_motorImpulse = this.m_motorImpulse
        var p = t.step.dt * this.m_maxMotorTorque
        this.m_motorImpulse = ct(this.m_motorImpulse + v, -p, p)
        t$velocitiesThis$m_indexA$w -= this$m_invIA * (v = this.m_motorImpulse - this$m_motorImpulse)
        t$velocitiesThis$m_indexB$w += this$m_invIB * v
        if (this.m_enableLimit) {
          var x = this.m_translation - this.m_lowerTranslation
          var B = It.DotVV(this.m_ax, It.SubVV(t$velocitiesThis$m_indexB$v, t$velocitiesThis$m_indexA$v, It.s_t0)) + this.m_sBx * t$velocitiesThis$m_indexB$w - this.m_sAx * t$velocitiesThis$m_indexA$w
          var S = -this.m_axialMass * (B + mt(x, 0) * t.step.inv_dt)
          var /* [auto-meaningful-name] */this$m_lowerImpulse = this.m_lowerImpulse
          this.m_lowerImpulse = mt(this.m_lowerImpulse + S, 0)
          S = this.m_lowerImpulse - this$m_lowerImpulse
          var C = It.MulSV(S, this.m_ax, i.SolveVelocityConstraints_s_P)
          var b = S * this.m_sAx
          var g = S * this.m_sBx
          t$velocitiesThis$m_indexA$v.SelfMulSub(this$m_invMassA, C)
          t$velocitiesThis$m_indexA$w -= this$m_invIA * b
          t$velocitiesThis$m_indexB$v.SelfMulAdd(this$m_invMassB, C)
          t$velocitiesThis$m_indexB$w += this$m_invIB * g
          var V = this.m_upperTranslation - this.m_translation
          var w = It.DotVV(this.m_ax, It.SubVV(t$velocitiesThis$m_indexA$v, t$velocitiesThis$m_indexB$v, It.s_t0)) + this.m_sAx * t$velocitiesThis$m_indexA$w - this.m_sBx * t$velocitiesThis$m_indexB$w
          var k = -this.m_axialMass * (w + mt(V, 0) * t.step.inv_dt)
          var /* [auto-meaningful-name] */this$m_upperImpulse = this.m_upperImpulse
          this.m_upperImpulse = mt(this.m_upperImpulse + k, 0)
          k = this.m_upperImpulse - this$m_upperImpulse
          var P = It.MulSV(k, this.m_ax, i.SolveVelocityConstraints_s_P)
          var I = k * this.m_sAx
          var G = k * this.m_sBx
          t$velocitiesThis$m_indexA$v.SelfMulAdd(this$m_invMassA, P)
          t$velocitiesThis$m_indexA$w += this$m_invIA * I
          t$velocitiesThis$m_indexB$v.SelfMulSub(this$m_invMassB, P)
          t$velocitiesThis$m_indexB$w -= this$m_invIB * G
        }
        var D = It.DotVV(this.m_ay, It.SubVV(t$velocitiesThis$m_indexB$v, t$velocitiesThis$m_indexA$v, It.s_t0)) + this.m_sBy * t$velocitiesThis$m_indexB$w - this.m_sAy * t$velocitiesThis$m_indexA$w
        var F = -this.m_mass * D
        this.m_impulse += F
        var L = It.MulSV(F, this.m_ay, i.SolveVelocityConstraints_s_P)
        var R = F * this.m_sAy
        var j = F * this.m_sBy
        t$velocitiesThis$m_indexA$v.SelfMulSub(this$m_invMassA, L)
        t$velocitiesThis$m_indexA$w -= this$m_invIA * R
        t$velocitiesThis$m_indexB$v.SelfMulAdd(this$m_invMassB, L)
        t$velocitiesThis$m_indexB$w += this$m_invIB * j
        t.velocities[this.m_indexA].w = t$velocitiesThis$m_indexA$w
        t.velocities[this.m_indexB].w = t$velocitiesThis$m_indexB$w
      }
    }, {
      key: "SolvePositionConstraints",
      value: function (t) {
        var /* [auto-meaningful-name] */t$positionsThis$m_indexA$c = t.positions[this.m_indexA].c
        var /* [auto-meaningful-name] */t$positionsThis$m_indexA$a = t.positions[this.m_indexA].a
        var /* [auto-meaningful-name] */t$positionsThis$m_indexB$c = t.positions[this.m_indexB].c
        var /* [auto-meaningful-name] */t$positionsThis$m_indexB$a = t.positions[this.m_indexB].a
        var o = 0
        if (this.m_enableLimit) {
          var a = this.m_qA.SetAngle(t$positionsThis$m_indexA$a)
          var u = this.m_qB.SetAngle(t$positionsThis$m_indexB$a)
          It.SubVV(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA)
          var l = jt.MulRV(a, this.m_lalcA, this.m_rA)
          It.SubVV(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB)
          var h = jt.MulRV(u, this.m_lalcB, this.m_rB)
          var _ = It.AddVV(It.SubVV(t$positionsThis$m_indexB$c, t$positionsThis$m_indexA$c, It.s_t0), It.SubVV(h, l, It.s_t1), i.SolvePositionConstraints_s_d)
          var m = jt.MulRV(a, this.m_localXAxisA, this.m_ax)
          var c = It.CrossVV(It.AddVV(_, l, It.s_t0), this.m_ax)
          var f = It.CrossVV(h, this.m_ax)
          var d = 0
          var v = It.DotVV(m, _)
          if (ht(this.m_upperTranslation - this.m_lowerTranslation) < 2 * A) {
            d = v
          } else {
            if (v <= this.m_lowerTranslation) {
              d = _t(v - this.m_lowerTranslation, 0)
            } else {
              if (v >= this.m_upperTranslation) {
                d = mt(v - this.m_upperTranslation, 0)
              }
            }
          }
          if (0 !== d) {
            var y = this.m_invMassA + this.m_invMassB + this.m_invIA * c * c + this.m_invIB * f * f
            var p = 0
            if (0 !== y) {
              p = -d / y
            }
            var x = It.MulSV(p, m, i.SolvePositionConstraints_s_P)
            var B = p * c
            var S = p * f
            t$positionsThis$m_indexA$c.SelfMulSub(this.m_invMassA, x)
            t$positionsThis$m_indexA$a -= this.m_invIA * B
            t$positionsThis$m_indexB$c.SelfMulAdd(this.m_invMassB, x)
            t$positionsThis$m_indexB$a += this.m_invIB * S
            o = ht(d)
          }
        }
        var C = this.m_qA.SetAngle(t$positionsThis$m_indexA$a)
        var b = this.m_qB.SetAngle(t$positionsThis$m_indexB$a)
        It.SubVV(this.m_localAnchorA, this.m_localCenterA, this.m_lalcA)
        var g = jt.MulRV(C, this.m_lalcA, this.m_rA)
        It.SubVV(this.m_localAnchorB, this.m_localCenterB, this.m_lalcB)
        var V = jt.MulRV(b, this.m_lalcB, this.m_rB)
        var w = It.AddVV(It.SubVV(t$positionsThis$m_indexB$c, t$positionsThis$m_indexA$c, It.s_t0), It.SubVV(V, g, It.s_t1), i.SolvePositionConstraints_s_d)
        var k = jt.MulRV(C, this.m_localYAxisA, this.m_ay)
        var M = It.CrossVV(It.AddVV(w, g, It.s_t0), k)
        var P = It.CrossVV(V, k)
        var I = It.DotVV(w, k)
        var G = this.m_invMassA + this.m_invMassB + this.m_invIA * this.m_sAy * this.m_sAy + this.m_invIB * this.m_sBy * this.m_sBy
        var D = 0
        if (0 !== G) {
          D = -I / G
        }
        var F = It.MulSV(D, k, i.SolvePositionConstraints_s_P)
        var L = D * M
        var R = D * P
        t$positionsThis$m_indexA$c.SelfMulSub(this.m_invMassA, F)
        t$positionsThis$m_indexA$a -= this.m_invIA * L
        t$positionsThis$m_indexB$c.SelfMulAdd(this.m_invMassB, F)
        t$positionsThis$m_indexB$a += this.m_invIB * R
        o = mt(o, ht(I))
        t.positions[this.m_indexA].a = t$positionsThis$m_indexA$a
        t.positions[this.m_indexB].a = t$positionsThis$m_indexB$a
        return o <= A
      }
    }, {
      key: "GetDefinition",
      value: function (t) {
        return t
      }
    }, {
      key: "GetAnchorA",
      value: function (t) {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchorA, t)
      }
    }, {
      key: "GetAnchorB",
      value: function (t) {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchorB, t)
      }
    }, {
      key: "GetReactionForce",
      value: function (t, e) {
        e.x = t * (this.m_impulse * this.m_ay.x + (this.m_springImpulse + this.m_lowerImpulse - this.m_upperImpulse) * this.m_ax.x)
        e.y = t * (this.m_impulse * this.m_ay.y + (this.m_springImpulse + this.m_lowerImpulse - this.m_upperImpulse) * this.m_ax.y)
        return e
      }
    }, {
      key: "GetReactionTorque",
      value: function (t) {
        return t * this.m_motorImpulse
      }
    }, {
      key: "GetLocalAnchorA",
      value: function () {
        return this.m_localAnchorA
      }
    }, {
      key: "GetLocalAnchorB",
      value: function () {
        return this.m_localAnchorB
      }
    }, {
      key: "GetLocalAxisA",
      value: function () {
        return this.m_localXAxisA
      }
    }, {
      key: "GetJointTranslation",
      value: function () {
        return this.GetPrismaticJointTranslation()
      }
    }, {
      key: "GetJointLinearSpeed",
      value: function () {
        return this.GetPrismaticJointSpeed()
      }
    }, {
      key: "GetJointAngle",
      value: function () {
        return this.GetRevoluteJointAngle()
      }
    }, {
      key: "GetJointAngularSpeed",
      value: function () {
        return this.GetRevoluteJointSpeed()
      }
    }, {
      key: "GetPrismaticJointTranslation",
      value: function () {
        var /* [auto-meaningful-name] */this$m_bodyA = this.m_bodyA
        var /* [auto-meaningful-name] */this$m_bodyB = this.m_bodyB
        var i = this$m_bodyA.GetWorldPoint(this.m_localAnchorA, new It())
        var n = this$m_bodyB.GetWorldPoint(this.m_localAnchorB, new It())
        var s = It.SubVV(n, i, new It())
        var r = this$m_bodyA.GetWorldVector(this.m_localXAxisA, new It())
        return It.DotVV(s, r)
      }
    }, {
      key: "GetPrismaticJointSpeed",
      value: function () {
        var /* [auto-meaningful-name] */this$m_bodyA = this.m_bodyA
        var /* [auto-meaningful-name] */this$m_bodyB = this.m_bodyB
        It.SubVV(this.m_localAnchorA, this$m_bodyA.m_sweep.localCenter, this.m_lalcA)
        var i = jt.MulRV(this$m_bodyA.m_xf.q, this.m_lalcA, this.m_rA)
        It.SubVV(this.m_localAnchorB, this$m_bodyB.m_sweep.localCenter, this.m_lalcB)
        var n = jt.MulRV(this$m_bodyB.m_xf.q, this.m_lalcB, this.m_rB)
        var s = It.AddVV(this$m_bodyA.m_sweep.c, i, It.s_t0)
        var r = It.AddVV(this$m_bodyB.m_sweep.c, n, It.s_t1)
        var o = It.SubVV(r, s, It.s_t2)
        var a = this$m_bodyA.GetWorldVector(this.m_localXAxisA, new It())
        var /* [auto-meaningful-name] */this$m_bodyA$m_linearVelocity = this$m_bodyA.m_linearVelocity
        var /* [auto-meaningful-name] */this$m_bodyB$m_linearVelocity = this$m_bodyB.m_linearVelocity
        var /* [auto-meaningful-name] */this$m_bodyA$m_angularVelocity = this$m_bodyA.m_angularVelocity
        var /* [auto-meaningful-name] */this$m_bodyB$m_angularVelocity = this$m_bodyB.m_angularVelocity
        return It.DotVV(o, It.CrossSV(this$m_bodyA$m_angularVelocity, a, It.s_t0)) + It.DotVV(a, It.SubVV(It.AddVCrossSV(this$m_bodyB$m_linearVelocity, this$m_bodyB$m_angularVelocity, n, It.s_t0), It.AddVCrossSV(this$m_bodyA$m_linearVelocity, this$m_bodyA$m_angularVelocity, i, It.s_t1), It.s_t0))
      }
    }, {
      key: "GetRevoluteJointAngle",
      value: function () {
        return this.m_bodyB.m_sweep.a - this.m_bodyA.m_sweep.a
      }
    }, {
      key: "GetRevoluteJointSpeed",
      value: function () {
        var /* [auto-meaningful-name] */this$m_bodyA$m_angularVelocity = this.m_bodyA.m_angularVelocity
        return this.m_bodyB.m_angularVelocity - this$m_bodyA$m_angularVelocity
      }
    }, {
      key: "IsMotorEnabled",
      value: function () {
        return this.m_enableMotor
      }
    }, {
      key: "EnableMotor",
      value: function (t) {
        if (t !== this.m_enableMotor) {
          this.m_bodyA.SetAwake(true)
          this.m_bodyB.SetAwake(true)
          this.m_enableMotor = t
        }
      }
    }, {
      key: "SetMotorSpeed",
      value: function (t) {
        if (t !== this.m_motorSpeed) {
          this.m_bodyA.SetAwake(true)
          this.m_bodyB.SetAwake(true)
          this.m_motorSpeed = t
        }
      }
    }, {
      key: "SetMaxMotorTorque",
      value: function (t) {
        if (t !== this.m_maxMotorTorque) {
          this.m_bodyA.SetAwake(true)
          this.m_bodyB.SetAwake(true)
          this.m_maxMotorTorque = t
        }
      }
    }, {
      key: "GetMotorTorque",
      value: function (t) {
        return t * this.m_motorImpulse
      }
    }, {
      key: "IsLimitEnabled",
      value: function () {
        return this.m_enableLimit
      }
    }, {
      key: "EnableLimit",
      value: function (t) {
        if (t !== this.m_enableLimit) {
          this.m_bodyA.SetAwake(true)
          this.m_bodyB.SetAwake(true)
          this.m_enableLimit = t
          this.m_lowerImpulse = 0
          this.m_upperImpulse = 0
        }
      }
    }, {
      key: "GetLowerLimit",
      value: function () {
        return this.m_lowerTranslation
      }
    }, {
      key: "GetUpperLimit",
      value: function () {
        return this.m_upperTranslation
      }
    }, {
      key: "SetLimits",
      value: function (t, e) {
        if (!(t === this.m_lowerTranslation && e === this.m_upperTranslation)) {
          this.m_bodyA.SetAwake(true)
          this.m_bodyB.SetAwake(true)
          this.m_lowerTranslation = t
          this.m_upperTranslation = e
          this.m_lowerImpulse = 0
          this.m_upperImpulse = 0
        }
      }
    }, {
      key: "Dump",
      value: function (t) {
        var /* [auto-meaningful-name] */this$m_bodyA$m_islandIndex = this.m_bodyA.m_islandIndex
        var /* [auto-meaningful-name] */this$m_bodyB$m_islandIndex = this.m_bodyB.m_islandIndex
        t("  const jd: b2WheelJointDef = new b2WheelJointDef();\n")
        t("  jd.bodyA = bodies[%d];\n", this$m_bodyA$m_islandIndex)
        t("  jd.bodyB = bodies[%d];\n", this$m_bodyB$m_islandIndex)
        t("  jd.collideConnected = %s;\n", this.m_collideConnected ? "true" : "false")
        t("  jd.localAnchorA.Set(%.15f, %.15f);\n", this.m_localAnchorA.x, this.m_localAnchorA.y)
        t("  jd.localAnchorB.Set(%.15f, %.15f);\n", this.m_localAnchorB.x, this.m_localAnchorB.y)
        t("  jd.localAxisA.Set(%.15f, %.15f);\n", this.m_localXAxisA.x, this.m_localXAxisA.y)
        t("  jd.enableMotor = %s;\n", this.m_enableMotor ? "true" : "false")
        t("  jd.motorSpeed = %.15f;\n", this.m_motorSpeed)
        t("  jd.maxMotorTorque = %.15f;\n", this.m_maxMotorTorque)
        t("  jd.stiffness = %.15f;\n", this.m_stiffness)
        t("  jd.damping = %.15f;\n", this.m_damping)
        t("  joints[%d] = this.m_world.CreateJoint(jd);\n", this.m_index)
      }
    }, {
      key: "Draw",
      value: function (t) {
        var e = this.m_bodyA.GetTransform()
        var n = this.m_bodyB.GetTransform()
        var s = Tt.MulXV(e, this.m_localAnchorA, i.Draw_s_pA)
        var r = Tt.MulXV(n, this.m_localAnchorB, i.Draw_s_pB)
        var o = jt.MulRV(e.q, this.m_localXAxisA, i.Draw_s_axis)
        var /* [auto-meaningful-name] */i$Draw_s_c1 = i.Draw_s_c1
        var /* [auto-meaningful-name] */i$Draw_s_c2 = i.Draw_s_c2
        var /* [auto-meaningful-name] */i$Draw_s_c3 = i.Draw_s_c3
        var /* [auto-meaningful-name] */i$Draw_s_c4 = i.Draw_s_c4
        var /* [auto-meaningful-name] */i$Draw_s_c5 = i.Draw_s_c5
        t.DrawSegment(s, r, i$Draw_s_c5)
        if (this.m_enableLimit) {
          var m = It.AddVMulSV(s, this.m_lowerTranslation, o, i.Draw_s_lower)
          var c = It.AddVMulSV(s, this.m_upperTranslation, o, i.Draw_s_upper)
          var f = jt.MulRV(e.q, this.m_localYAxisA, i.Draw_s_perp)
          t.DrawSegment(m, c, i$Draw_s_c1)
          t.DrawSegment(It.AddVMulSV(m, -.5, f, It.s_t0), It.AddVMulSV(m, .5, f, It.s_t1), i$Draw_s_c2)
          t.DrawSegment(It.AddVMulSV(c, -.5, f, It.s_t0), It.AddVMulSV(c, .5, f, It.s_t1), i$Draw_s_c3)
        } else {
          t.DrawSegment(It.AddVMulSV(s, -1, o, It.s_t0), It.AddVMulSV(s, 1, o, It.s_t1), i$Draw_s_c1)
        }
        t.DrawPoint(s, 5, i$Draw_s_c1)
        t.DrawPoint(r, 5, i$Draw_s_c4)
      }
    }
  ])
  return i
}(Tn)
Hs.InitVelocityConstraints_s_d = new It()
Hs.InitVelocityConstraints_s_P = new It()
Hs.SolveVelocityConstraints_s_P = new It()
Hs.SolvePositionConstraints_s_d = new It()
Hs.SolvePositionConstraints_s_P = new It()
Hs.Draw_s_pA = new It()
Hs.Draw_s_pB = new It()
Hs.Draw_s_axis = new It()
Hs.Draw_s_c1 = new o(.7, .7, .7)
Hs.Draw_s_c2 = new o(.3, .9, .3)
Hs.Draw_s_c3 = new o(.9, .3, .3)
Hs.Draw_s_c4 = new o(.3, .3, .9)
Hs.Draw_s_c5 = new o(.4, .4, .4)
Hs.Draw_s_lower = new It()
Hs.Draw_s_upper = new It()
Hs.Draw_s_perp = new It();
(function (t) {
  t[t.b2_waterParticle = 0] = "b2_waterParticle"
  t[t.b2_zombieParticle = 2] = "b2_zombieParticle"
  t[t.b2_wallParticle = 4] = "b2_wallParticle"
  t[t.b2_springParticle = 8] = "b2_springParticle"
  t[t.b2_elasticParticle = 16] = "b2_elasticParticle"
  t[t.b2_viscousParticle = 32] = "b2_viscousParticle"
  t[t.b2_powderParticle = 64] = "b2_powderParticle"
  t[t.b2_tensileParticle = 128] = "b2_tensileParticle"
  t[t.b2_colorMixingParticle = 256] = "b2_colorMixingParticle"
  t[t.b2_destructionListenerParticle = 512] = "b2_destructionListenerParticle"
  t[t.b2_barrierParticle = 1024] = "b2_barrierParticle"
  t[t.b2_staticPressureParticle = 2048] = "b2_staticPressureParticle"
  t[t.b2_reactiveParticle = 4096] = "b2_reactiveParticle"
  t[t.b2_repulsiveParticle = 8192] = "b2_repulsiveParticle"
  t[t.b2_fixtureContactListenerParticle = 16384] = "b2_fixtureContactListenerParticle"
  t[t.b2_particleContactListenerParticle = 32768] = "b2_particleContactListenerParticle"
  t[t.b2_fixtureContactFilterParticle = 65536] = "b2_fixtureContactFilterParticle"
  t[t.b2_particleContactFilterParticle = 131072] = "b2_particleContactFilterParticle"
})(Ys || (Ys = {}))
var $s = function t() {
  Module_27.a(this, t)
  this.flags = 0
  this.position = new It()
  this.velocity = new It()
  this.color = new o(0, 0, 0, 0)
  this.lifetime = 0
  this.userData = null
  this.group = null
}
function tr(t, e, i) {
  return ct(Math.ceil(Math.sqrt(t / (.01 * e)) * i), 1, 8)
}
var er
var ir = function () {
  function t() {
    Module_27.a(this, t)
    this.m_index = L
  }
  Module_39.a(t, [
    {
      key: "GetIndex",
      value: function () {
        return this.m_index
      }
    }, {
      key: "SetIndex",
      value: function (t) {
        this.m_index = t
      }
    }
  ])
  return t
}()
!function (t) {
  t[t.b2_solidParticleGroup = 1] = "b2_solidParticleGroup"
  t[t.b2_rigidParticleGroup = 2] = "b2_rigidParticleGroup"
  t[t.b2_particleGroupCanBeEmpty = 4] = "b2_particleGroupCanBeEmpty"
  t[t.b2_particleGroupWillBeDestroyed = 8] = "b2_particleGroupWillBeDestroyed"
  t[t.b2_particleGroupNeedsUpdateDepth = 16] = "b2_particleGroupNeedsUpdateDepth"
  t[t.b2_particleGroupInternalMask = 24] = "b2_particleGroupInternalMask"
}(er || (er = {}))
var nr = function t() {
  Module_27.a(this, t)
  this.id = ""
  this.flags = 0
  this.groupFlags = 0
  this.position = new It()
  this.angle = 0
  this.linearVelocity = new It()
  this.angularVelocity = 0
  this.color = new o()
  this.strength = 1
  this.userData = null
  this.group = null
}
var sr = function () {
  function t(e, i) {
    Module_27.a(this, t)
    this.m_firstIndex = 0
    this.m_lastIndex = 0
    this.m_groupFlags = 0
    this.m_strength = 1
    this.m_prev = null
    this.m_next = null
    this.m_timestamp = -1
    this.m_mass = 0
    this.m_inertia = 0
    this.m_center = new It()
    this.m_linearVelocity = new It()
    this.m_angularVelocity = 0
    this.m_transform = new Tt()
    this.m_userData = null
    this.anchorOffset = 0
    this.relativePositions = []
    this.m_system = e
    this.id = i
  }
  Module_39.a(t, [
    {
      key: "anchorIndex",
      get: function () {
        return this.m_firstIndex + this.anchorOffset
      }
    }, {
      key: "UpdateAnchor",
      value: function () {
        this.anchorOffset = Math.floor((this.m_lastIndex - this.m_firstIndex) / 2)
        var t = this.m_system.m_positionBuffer.data[this.anchorIndex]
        this.relativePositions.length = 0
        for (var /* [auto-meaningful-name] */this$m_firstIndex = this.m_firstIndex; this$m_firstIndex < this.m_lastIndex; this$m_firstIndex++) {
          var i = this.m_system.m_positionBuffer.data[this$m_firstIndex]
          var n = new It()
          It.SubVV(i, t, n)
          this.relativePositions.push(n)
        }
      }
    }, {
      key: "GetAnchorPosition",
      value: function () {
        return this.anchorIndex ? this.m_system.m_positionBuffer.data[this.anchorIndex] : It.ZERO
      }
    }, {
      key: "GetOffsets",
      value: function () {
        if (!this.anchorIndex) {
          return []
        }
        for (var t = this.m_system.m_positionBuffer.data[this.anchorIndex], e = [], /* [auto-meaningful-name] */this$m_firstIndex = this.m_firstIndex; this$m_firstIndex < this.m_lastIndex; this$m_firstIndex++) {
          var n = this.m_system.m_positionBuffer.data[this$m_firstIndex]
          var s = new It()
          It.SubVV(n, t, s)
          s.SelfSub(this.relativePositions[this$m_firstIndex - this.m_firstIndex])
          e.push(s)
        }
        return e
      }
    }, {
      key: "GetNext",
      value: function () {
        return this.m_next
      }
    }, {
      key: "GetParticleSystem",
      value: function () {
        return this.m_system
      }
    }, {
      key: "GetParticleCount",
      value: function () {
        return this.m_lastIndex - this.m_firstIndex
      }
    }, {
      key: "GetBufferIndex",
      value: function () {
        return this.m_firstIndex
      }
    }, {
      key: "ContainsParticle",
      value: function (t) {
        return this.m_firstIndex <= t && t < this.m_lastIndex
      }
    }, {
      key: "GetAllParticleFlags",
      value: function () {
        if (!this.m_system.m_flagsBuffer.data) {
          throw new Error()
        }
        for (var t = 0, /* [auto-meaningful-name] */this$m_firstIndex = this.m_firstIndex; this$m_firstIndex < this.m_lastIndex; this$m_firstIndex++) {
          t |= this.m_system.m_flagsBuffer.data[this$m_firstIndex]
        }
        return t
      }
    }, {
      key: "GetGroupFlags",
      value: function () {
        return this.m_groupFlags
      }
    }, {
      key: "SetGroupFlags",
      value: function (t) {
        t |= this.m_groupFlags & er.b2_particleGroupInternalMask
        this.m_system.SetGroupFlags(this, t)
      }
    }, {
      key: "GetMass",
      value: function () {
        this.UpdateStatistics()
        return this.m_mass
      }
    }, {
      key: "GetInertia",
      value: function () {
        this.UpdateStatistics()
        return this.m_inertia
      }
    }, {
      key: "GetCenter",
      value: function () {
        this.UpdateStatistics()
        return this.m_center
      }
    }, {
      key: "GetLinearVelocity",
      value: function () {
        this.UpdateStatistics()
        return this.m_linearVelocity
      }
    }, {
      key: "GetAngularVelocity",
      value: function () {
        this.UpdateStatistics()
        return this.m_angularVelocity
      }
    }, {
      key: "GetTransform",
      value: function () {
        return this.m_transform
      }
    }, {
      key: "GetPosition",
      value: function () {
        return this.m_transform.p
      }
    }, {
      key: "GetAngle",
      value: function () {
        return this.m_transform.q.GetAngle()
      }
    }, {
      key: "GetLinearVelocityFromWorldPoint",
      value: function (e, i) {
        var /* [auto-meaningful-name] */t$GetLinearVelocityFromWorldPoint_s_t0 = t.GetLinearVelocityFromWorldPoint_s_t0
        this.UpdateStatistics()
        return It.AddVCrossSV(this.m_linearVelocity, this.m_angularVelocity, It.SubVV(e, this.m_center, t$GetLinearVelocityFromWorldPoint_s_t0), i)
      }
    }, {
      key: "GetUserData",
      value: function () {
        return this.m_userData
      }
    }, {
      key: "SetUserData",
      value: function (t) {
        this.m_userData = t
      }
    }, {
      key: "ApplyForce",
      value: function (t) {
        this.m_system.ApplyForce(this.m_firstIndex, this.m_lastIndex, t)
      }
    }, {
      key: "ApplyLinearImpulse",
      value: function (t) {
        this.m_system.ApplyLinearImpulse(this.m_firstIndex, this.m_lastIndex, t)
      }
    }, {
      key: "DestroyParticles",
      value: function (t) {
        if (this.m_system.m_world.IsLocked()) {
          throw new Error()
        }
        for (var /* [auto-meaningful-name] */this$m_firstIndex = this.m_firstIndex; this$m_firstIndex < this.m_lastIndex; this$m_firstIndex++) {
          this.m_system.DestroyParticle(this$m_firstIndex, t)
        }
      }
    }, {
      key: "UpdateStatistics",
      value: function () {
        if (!this.m_system.m_positionBuffer.data) {
          throw new Error()
        }
        if (!this.m_system.m_velocityBuffer.data) {
          throw new Error()
        }
        if (this.m_timestamp !== this.m_system.m_timestamp) {
          var t = this.m_system.GetParticleMass()
          this.m_mass = t * (this.m_lastIndex - this.m_firstIndex)
          this.m_center.SetZero()
          this.m_linearVelocity.SetZero()
          for (var /* [auto-meaningful-name] */this$m_firstIndex = this.m_firstIndex; this$m_firstIndex < this.m_lastIndex; this$m_firstIndex++) {
            this.m_center.SelfMulAdd(t, this.m_system.m_positionBuffer.data[this$m_firstIndex])
            this.m_linearVelocity.SelfMulAdd(t, this.m_system.m_velocityBuffer.data[this$m_firstIndex])
          }
          if (this.m_mass > 0) {
            var i = 1 / this.m_mass
            this.m_center.SelfMul(i)
            this.m_linearVelocity.SelfMul(i)
          }
          this.m_inertia = 0
          this.m_angularVelocity = 0
          for (var n = new It(), s = new It(), /* [auto-meaningful-name] */this$m_firstIndex1 = this.m_firstIndex; this$m_firstIndex1 < this.m_lastIndex; this$m_firstIndex1++) {
            It.SubVV(this.m_system.m_positionBuffer.data[this$m_firstIndex1], this.m_center, n)
            It.SubVV(this.m_system.m_velocityBuffer.data[this$m_firstIndex1], this.m_linearVelocity, s)
            this.m_inertia += t * It.DotVV(n, n)
            this.m_angularVelocity += t * It.CrossVV(n, s)
          }
          if (this.m_inertia > 0) {
            this.m_angularVelocity *= 1 / this.m_inertia
          }
          this.m_timestamp = this.m_system.m_timestamp
        }
      }
    }
  ])
  return t
}()
sr.GetLinearVelocityFromWorldPoint_s_t0 = new It()
var rr = function () {
  function t(e) {
    Module_27.a(this, t)
    this.m_buffer = []
    this.m_front = 0
    this.m_back = 0
    this.m_buffer.fill(null, 0, e)
  }
  Module_39.a(t, [
    {
      key: "m_capacity",
      get: function () {
        return this.m_buffer.length
      }
    }, {
      key: "Push",
      value: function (t) {
        if (this.m_back >= this.m_capacity) {
          for (var /* [auto-meaningful-name] */this$m_front = this.m_front; this$m_front < this.m_back; this$m_front++) {
            this.m_buffer[this$m_front - this.m_front] = this.m_buffer[this$m_front]
          }
          this.m_back -= this.m_front
          this.m_front = 0
        }
        this.m_buffer[this.m_back] = t
        this.m_back++
      }
    }, {
      key: "Pop",
      value: function () {
        this.m_buffer[this.m_front] = null
        this.m_front++
      }
    }, {
      key: "Empty",
      value: function () {
        return this.m_front === this.m_back
      }
    }, {
      key: "Front",
      value: function () {
        var t = this.m_buffer[this.m_front]
        if (!t) {
          throw new Error()
        }
        return t
      }
    }
  ])
  return t
}()
var or = function () {
  function t(e) {
    Module_27.a(this, t)
    this.m_generatorCapacity = 0
    this.m_generatorCount = 0
    this.m_countX = 0
    this.m_countY = 0
    this.m_diagram = []
    this.m_generatorBuffer = tt(e, function () {
      return new ar()
    })
    this.m_generatorCapacity = e
  }
  Module_39.a(t, [
    {
      key: "AddGenerator",
      value: function (t, e, i) {
        var n = this.m_generatorBuffer[this.m_generatorCount++]
        n.center.Copy(t)
        n.tag = e
        n.necessary = i
      }
    }, {
      key: "Generate",
      value: function (t, e) {
        for (var i = 1 / t, n = new It(+c, +c), s = new It(-c, -c), r = 0, o = 0; o < this.m_generatorCount; o++) {
          var a = this.m_generatorBuffer[o]
          if (a.necessary) {
            It.MinV(n, a.center, n)
            It.MaxV(s, a.center, s)
            ++r
          }
        }
        if (0 === r) {
          this.m_countX = 0
          return void (this.m_countY = 0)
        }
        n.x -= e
        n.y -= e
        s.x += e
        s.y += e
        this.m_countX = 1 + Math.floor(i * (s.x - n.x))
        this.m_countY = 1 + Math.floor(i * (s.y - n.y))
        this.m_diagram = []
        for (var u = new rr(4 * this.m_countX * this.m_countY), l = 0; l < this.m_generatorCount; l++) {
          var h = this.m_generatorBuffer[l]
          h.center.SelfSub(n).SelfMul(i)
          var _ = Math.floor(h.center.x)
          var m = Math.floor(h.center.y)
          if (_ >= 0 && m >= 0 && _ < this.m_countX && m < this.m_countY) {
            u.Push(new ur(_, m, _ + m * this.m_countX, h))
          }
        }
        for (; !u.Empty();) {
          var f = u.Front()
          var /* [auto-meaningful-name] */f$m_x = f.m_x
          var /* [auto-meaningful-name] */f$m_y = f.m_y
          var /* [auto-meaningful-name] */f$m_i = f.m_i
          var /* [auto-meaningful-name] */f$m_generator = f.m_generator
          u.Pop()
          if (!this.m_diagram[f$m_i]) {
            this.m_diagram[f$m_i] = f$m_generator
            if (f$m_x > 0) {
              u.Push(new ur(f$m_x - 1, f$m_y, f$m_i - 1, f$m_generator))
            }
            if (f$m_y > 0) {
              u.Push(new ur(f$m_x, f$m_y - 1, f$m_i - this.m_countX, f$m_generator))
            }
            if (f$m_x < this.m_countX - 1) {
              u.Push(new ur(f$m_x + 1, f$m_y, f$m_i + 1, f$m_generator))
            }
            if (f$m_y < this.m_countY - 1) {
              u.Push(new ur(f$m_x, f$m_y + 1, f$m_i + this.m_countX, f$m_generator))
            }
          }
        }
        for (var x = 0; x < this.m_countY; x++) {
          for (var B = 0; B < this.m_countX - 1; B++) {
            var S = B + x * this.m_countX
            var A = this.m_diagram[S]
            var C = this.m_diagram[S + 1]
            if (A !== C) {
              u.Push(new ur(B, x, S, C))
              u.Push(new ur(B + 1, x, S + 1, A))
            }
          }
        }
        for (var b = 0; b < this.m_countY - 1; b++) {
          for (var g = 0; g < this.m_countX; g++) {
            var V = g + b * this.m_countX
            var w = this.m_diagram[V]
            var k = this.m_diagram[V + this.m_countX]
            if (w !== k) {
              u.Push(new ur(g, b, V, k))
              u.Push(new ur(g, b + 1, V + this.m_countX, w))
            }
          }
        }
        for (; !u.Empty();) {
          var M = u.Front()
          var /* [auto-meaningful-name] */M$m_x = M.m_x
          var /* [auto-meaningful-name] */M$m_y = M.m_y
          var /* [auto-meaningful-name] */M$m_i = M.m_i
          var /* [auto-meaningful-name] */M$m_generator = M.m_generator
          u.Pop()
          var F = this.m_diagram[M$m_i]
          var L = M$m_generator
          if (F !== L) {
            var R = F.center.x - M$m_x
            var j = F.center.y - M$m_y
            var T = L.center.x - M$m_x
            var O = L.center.y - M$m_y
            if (R * R + j * j > T * T + O * O) {
              this.m_diagram[M$m_i] = L
              if (M$m_x > 0) {
                u.Push(new ur(M$m_x - 1, M$m_y, M$m_i - 1, L))
              }
              if (M$m_y > 0) {
                u.Push(new ur(M$m_x, M$m_y - 1, M$m_i - this.m_countX, L))
              }
              if (M$m_x < this.m_countX - 1) {
                u.Push(new ur(M$m_x + 1, M$m_y, M$m_i + 1, L))
              }
              if (M$m_y < this.m_countY - 1) {
                u.Push(new ur(M$m_x, M$m_y + 1, M$m_i + this.m_countX, L))
              }
            }
          }
        }
      }
    }, {
      key: "GetNodes",
      value: function (t) {
        for (var e = 0; e < this.m_countY - 1; e++) {
          for (var i = 0; i < this.m_countX - 1; i++) {
            var n = i + e * this.m_countX
            var s = this.m_diagram[n]
            var r = this.m_diagram[n + 1]
            var o = this.m_diagram[n + this.m_countX]
            var a = this.m_diagram[n + 1 + this.m_countX]
            if (r !== o) {
              if (s !== r && s !== o && (s.necessary || r.necessary || o.necessary)) {
                t(s.tag, r.tag, o.tag)
              }
              if (a !== r && a !== o && (s.necessary || r.necessary || o.necessary)) {
                t(r.tag, a.tag, o.tag)
              }
            }
          }
        }
      }
    }
  ])
  return t
}()
var ar = function t() {
  Module_27.a(this, t)
  this.center = new It()
  this.tag = 0
  this.necessary = false
}
var ur = function t(e, i, s, r) {
  Module_27.a(this, t)
  this.m_x = e
  this.m_y = i
  this.m_i = s
  this.m_generator = r
}
function lr(t, e, i) {
  var n = t[e]
  t[e] = t[i]
  t[i] = n
}
function hr(t, e) {
  return t < e
}
function _r(t) {
  for (var e = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 0, i = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : t.length - e, n = arguments.length > 3 && undefined !== arguments[3] ? arguments[3] : hr, s = e, r = [], o = 0;;) {
    for (; s + 1 < i; i++) {
      var a = t[s + Math.floor(Math.random() * (i - s))]
      r[o++] = i
      for (var u = s - 1;;) {
        for (; n(t[++u], a);) {
          ;
        }
        for (; n(a, t[--i]);) {
          ;
        }
        if (u >= i) {
          break
        }
        lr(t, u, i)
      }
    }
    if (0 === o) {
      break
    }
    s = i
    i = r[--o]
  }
  return t
}
function mr(t) {
  var e = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 0
  var i = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : t.length - e
  var n = arguments.length > 3 && undefined !== arguments[3] ? arguments[3] : hr
  return _r(t, e, i, n)
}
function cr(t, e) {
  for (var i = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : t.length, n = 0, s = 0; s < i; ++s) {
    if (!e(t[s])) {
      if (s !== n) {
        lr(t, n++, s)
      } else {
        ++n
      }
    }
  }
  return n
}
function fr(t, e, i, n, s) {
  for (var r = i - e; r > 0;) {
    var o = Math.floor(r / 2)
    var a = e + o
    if (s(t[a], n)) {
      e = ++a
      r -= o + 1
    } else {
      r = o
    }
  }
  return e
}
function dr(t, e, i, n, s) {
  for (var r = i - e; r > 0;) {
    var o = Math.floor(r / 2)
    var a = e + o
    if (s(n, t[a])) {
      r = o
    } else {
      e = ++a
      r -= o + 1
    }
  }
  return e
}
function vr(t, e, i, n) {
  for (var s = i; e !== s;) {
    lr(t, e++, s++)
    if (s === n) {
      s = i
    } else {
      if (e === i) {
        i = s
      }
    }
  }
}
var yr = function () {
  function t(e) {
    Module_27.a(this, t)
    this.data = []
    this.count = 0
    this.capacity = 0
    this.allocator = e
  }
  Module_39.a(t, [
    {
      key: "Append",
      value: function () {
        if (this.count >= this.capacity) {
          this.Grow()
        }
        return this.count++
      }
    }, {
      key: "Reserve",
      value: function (t) {
        if (!(this.capacity >= t)) {
          for (var /* [auto-meaningful-name] */this$capacity = this.capacity; this$capacity < t; ++this$capacity) {
            this.data[this$capacity] = this.allocator()
          }
          this.capacity = t
        }
      }
    }, {
      key: "Grow",
      value: function () {
        var t = this.capacity ? 2 * this.capacity : N
        this.Reserve(t)
      }
    }, {
      key: "Free",
      value: function () {
        if (0 !== this.data.length) {
          this.data = []
          this.capacity = 0
          this.count = 0
        }
      }
    }, {
      key: "Shorten",
      value: function (t) {}
    }, {
      key: "Data",
      value: function () {
        return this.data
      }
    }, {
      key: "GetCount",
      value: function () {
        return this.count
      }
    }, {
      key: "SetCount",
      value: function (t) {
        this.count = t
      }
    }, {
      key: "GetCapacity",
      value: function () {
        return this.capacity
      }
    }, {
      key: "RemoveIf",
      value: function (t) {
        this.count = cr(this.data, t, this.count)
      }
    }, {
      key: "Unique",
      value: function (t) {
        this.count = function (t, e, i, n) {
          if (e === i) {
            return i
          }
          for (var s = e; ++e !== i;) {
            if (!n(t[s], t[e])) {
              lr(t, ++s, e)
            }
          }
          return ++s
        }(this.data, 0, this.count, t)
      }
    }
  ])
  return t
}()
var pr = function (t) {
  Module_58.a(i, t)
  var e = Module_59.a(i)
  function i(t) {
    var s
    Module_27.a(this, i);
    (s = e.call(this)).m_system = t
    return s
  }
  Module_39.a(i, [
    {
      key: "ShouldQueryParticleSystem",
      value: function (t) {
        return false
      }
    }, {
      key: "ReportFixture",
      value: function (t) {
        if (t.IsSensor()) {
          return true
        }
        for (var e = t.GetShape().GetChildCount(), i = 0; i < e; i++) {
          for (var n = t.GetAABB(i), s = this.m_system.GetInsideBoundsEnumerator(n), r = undefined; (r = s.GetNext()) >= 0;) {
            this.ReportFixtureAndParticle(t, i, r)
          }
        }
        return true
      }
    }, {
      key: "ReportParticle",
      value: function (t, e) {
        return false
      }
    }, {
      key: "ShouldCollideFixtureParticle",
      value: function (t, e) {
        var i = this.m_system.GetFixtureContactFilter()
        if (i && this.m_system.GetFlagsBuffer()[e] & Ys.b2_fixtureContactFilterParticle) {
          return i.ShouldCollideFixtureParticle(t, this.m_system, e)
        }
        return true
      }
    }
  ])
  return i
}(ds)
var xr = function () {
  function t() {
    Module_27.a(this, t)
    this.indexA = 0
    this.indexB = 0
    this.weight = 0
    this.normal = new It()
    this.flags = 0
  }
  Module_39.a(t, [
    {
      key: "Clone",
      value: function () {
        var e = new t()
        e.indexA = this.indexA
        e.indexB = this.indexB
        e.weight = this.weight
        e.normal = this.normal
        e.flags = this.flags
        return e
      }
    }, {
      key: "SetIndices",
      value: function (t, e) {
        this.indexA = t
        this.indexB = e
      }
    }, {
      key: "SetWeight",
      value: function (t) {
        this.weight = t
      }
    }, {
      key: "SetNormal",
      value: function (t) {
        this.normal.Copy(t)
      }
    }, {
      key: "SetFlags",
      value: function (t) {
        this.flags = t
      }
    }, {
      key: "GetIndexA",
      value: function () {
        return this.indexA
      }
    }, {
      key: "GetIndexB",
      value: function () {
        return this.indexB
      }
    }, {
      key: "GetWeight",
      value: function () {
        return this.weight
      }
    }, {
      key: "GetNormal",
      value: function () {
        return this.normal
      }
    }, {
      key: "GetFlags",
      value: function () {
        return this.flags
      }
    }, {
      key: "IsEqual",
      value: function (t) {
        return this.indexA === t.indexA && this.indexB === t.indexB && this.flags === t.flags && this.weight === t.weight && this.normal.x === t.normal.x && this.normal.y === t.normal.y
      }
    }, {
      key: "IsNotEqual",
      value: function (t) {
        return !this.IsEqual(t)
      }
    }, {
      key: "ApproximatelyEqual",
      value: function (t) {
        return this.indexA === t.indexA && this.indexB === t.indexB && this.flags === t.flags && ht(this.weight - t.weight) < .01 && It.DistanceSquaredVV(this.normal, t.normal) < 1e-4
      }
    }
  ])
  return t
}()
var Br = function () {
  function t() {
    Module_27.a(this, t)
    this.index = 0
    this.weight = 0
    this.normal = new It()
    this.mass = 0
  }
  Module_39.a(t, [
    {
      key: "Clone",
      value: function () {
        var e = new t()
        e.index = this.index
        e.body = this.body
        e.fixture = this.fixture
        e.weight = this.weight
        e.normal = this.normal
        e.mass = this.mass
        return e
      }
    }
  ])
  return t
}()
var Sr = function t() {
  Module_27.a(this, t)
  this.indexA = 0
  this.indexB = 0
  this.flags = 0
  this.strength = 0
  this.distance = 0
}
var Ar = function t() {
  Module_27.a(this, t)
  this.indexA = 0
  this.indexB = 0
  this.indexC = 0
  this.flags = 0
  this.strength = 0
  this.pa = new It(0, 0)
  this.pb = new It(0, 0)
  this.pc = new It(0, 0)
  this.ka = 0
  this.kb = 0
  this.kc = 0
  this.s = 0
}
var Cr = function () {
  function t() {
    Module_27.a(this, t)
    this.strictContactCheck = false
    this.density = 1
    this.gravityScale = 1
    this.radius = 1
    this.maxCount = 0
    this.pressureStrength = .005
    this.dampingStrength = 1
    this.elasticStrength = .25
    this.springStrength = .25
    this.viscousStrength = .25
    this.surfaceTensionPressureStrength = .2
    this.surfaceTensionNormalStrength = .2
    this.repulsiveStrength = 1
    this.powderStrength = .5
    this.ejectionStrength = .5
    this.staticPressureStrength = .2
    this.staticPressureRelaxation = .2
    this.staticPressureIterations = 8
    this.colorMixingStrength = .5
    this.destroyByAge = true
    this.lifetimeGranularity = 1 / 60
  }
  Module_39.a(t, [
    {
      key: "Copy",
      value: function (t) {
        this.strictContactCheck = t.strictContactCheck
        this.density = t.density
        this.gravityScale = t.gravityScale
        this.radius = t.radius
        this.maxCount = t.maxCount
        this.pressureStrength = t.pressureStrength
        this.dampingStrength = t.dampingStrength
        this.elasticStrength = t.elasticStrength
        this.springStrength = t.springStrength
        this.viscousStrength = t.viscousStrength
        this.surfaceTensionPressureStrength = t.surfaceTensionPressureStrength
        this.surfaceTensionNormalStrength = t.surfaceTensionNormalStrength
        this.repulsiveStrength = t.repulsiveStrength
        this.powderStrength = t.powderStrength
        this.ejectionStrength = t.ejectionStrength
        this.staticPressureStrength = t.staticPressureStrength
        this.staticPressureRelaxation = t.staticPressureRelaxation
        this.staticPressureIterations = t.staticPressureIterations
        this.colorMixingStrength = t.colorMixingStrength
        this.destroyByAge = t.destroyByAge
        this.lifetimeGranularity = t.lifetimeGranularity
        return this
      }
    }, {
      key: "Clone",
      value: function () {
        return new t().Copy(this)
      }
    }
  ])
  return t
}()
var br = function () {
  function t(e, i) {
    Module_27.a(this, t)
    this.m_paused = false
    this.m_timestamp = 0
    this.m_allParticleFlags = 0
    this.m_needsUpdateAllParticleFlags = false
    this.m_allGroupFlags = 0
    this.m_needsUpdateAllGroupFlags = false
    this.m_hasForce = false
    this.m_iterationIndex = 0
    this.m_inverseDensity = 0
    this.m_particleDiameter = 0
    this.m_inverseDiameter = 0
    this.m_squaredDiameter = 0
    this.m_count = 0
    this.m_internalAllocatedCapacity = 0
    this.m_handleIndexBuffer = new gr()
    this.m_flagsBuffer = new gr()
    this.m_positionBuffer = new gr()
    this.m_velocityBuffer = new gr()
    this.m_positionConstraintBuffer = []
    this.m_forceBuffer = []
    this.m_weightBuffer = []
    this.m_staticPressureBuffer = []
    this.m_accumulationBuffer = []
    this.m_accumulation2Buffer = []
    this.m_depthBuffer = []
    this.m_colorBuffer = new gr()
    this.m_groupBuffer = []
    this.m_userDataBuffer = new gr()
    this.m_stuckThreshold = 0
    this.m_lastBodyContactStepBuffer = new gr()
    this.m_bodyContactCountBuffer = new gr()
    this.m_consecutiveContactStepsBuffer = new gr()
    this.m_stuckParticleBuffer = new yr(function () {
      return 0
    })
    this.m_proxyBuffer = new yr(function () {
      return new Vr()
    })
    this.m_contactBuffer = new yr(function () {
      return new xr()
    })
    this.m_bodyContactBuffer = new yr(function () {
      return new Br()
    })
    this.m_pairBuffer = new yr(function () {
      return new Sr()
    })
    this.m_triadBuffer = new yr(function () {
      return new Ar()
    })
    this.m_expirationTimeBuffer = new gr()
    this.m_indexByExpirationTimeBuffer = new gr()
    this.m_timeElapsed = 0
    this.m_expirationTimeBufferRequiresSorting = false
    this.m_groupCount = 0
    this.m_groupList = null
    this.m_def = new Cr()
    this.m_prev = null
    this.m_next = null
    this.UpdateBodyContacts_callback = null
    this.SolveCollision_callback = null
    this.SetStrictContactCheck(e.strictContactCheck)
    this.SetDensity(e.density)
    this.SetGravityScale(e.gravityScale)
    this.SetRadius(e.radius)
    this.SetMaxParticleCount(e.maxCount)
    this.m_def = e.Clone()
    this.m_world = i
    this.SetDestructionByAge(this.m_def.destroyByAge)
  }
  Module_39.a(t, [
    {
      key: "Drop",
      value: function () {
        for (; this.m_groupList;) {
          this.DestroyParticleGroup(this.m_groupList)
        }
        this.FreeUserOverridableBuffer(this.m_handleIndexBuffer)
        this.FreeUserOverridableBuffer(this.m_flagsBuffer)
        this.FreeUserOverridableBuffer(this.m_lastBodyContactStepBuffer)
        this.FreeUserOverridableBuffer(this.m_bodyContactCountBuffer)
        this.FreeUserOverridableBuffer(this.m_consecutiveContactStepsBuffer)
        this.FreeUserOverridableBuffer(this.m_positionBuffer)
        this.FreeUserOverridableBuffer(this.m_velocityBuffer)
        this.FreeUserOverridableBuffer(this.m_colorBuffer)
        this.FreeUserOverridableBuffer(this.m_userDataBuffer)
        this.FreeUserOverridableBuffer(this.m_expirationTimeBuffer)
        this.FreeUserOverridableBuffer(this.m_indexByExpirationTimeBuffer)
        this.FreeBuffer(this.m_forceBuffer, this.m_internalAllocatedCapacity)
        this.FreeBuffer(this.m_weightBuffer, this.m_internalAllocatedCapacity)
        this.FreeBuffer(this.m_staticPressureBuffer, this.m_internalAllocatedCapacity)
        this.FreeBuffer(this.m_accumulationBuffer, this.m_internalAllocatedCapacity)
        this.FreeBuffer(this.m_accumulation2Buffer, this.m_internalAllocatedCapacity)
        this.FreeBuffer(this.m_depthBuffer, this.m_internalAllocatedCapacity)
        this.FreeBuffer(this.m_groupBuffer, this.m_internalAllocatedCapacity)
      }
    }, {
      key: "CreateParticle",
      value: function (t) {
        if (this.m_world.IsLocked()) {
          throw new Error()
        }
        if (this.m_count >= this.m_internalAllocatedCapacity) {
          var e = this.m_count ? 2 * this.m_count : N
          this.ReallocateInternalAllocatedBuffers(e)
        }
        if (this.m_count >= this.m_internalAllocatedCapacity) {
          if (!this.m_def.destroyByAge) {
            return L
          }
          this.DestroyOldestParticle(0, false)
          this.SolveZombie()
        }
        var i = this.m_count++
        this.m_flagsBuffer.data[i] = 0
        if (this.m_lastBodyContactStepBuffer.data) {
          this.m_lastBodyContactStepBuffer.data[i] = 0
        }
        if (this.m_bodyContactCountBuffer.data) {
          this.m_bodyContactCountBuffer.data[i] = 0
        }
        if (this.m_consecutiveContactStepsBuffer.data) {
          this.m_consecutiveContactStepsBuffer.data[i] = 0
        }
        this.m_positionBuffer.data[i] = (this.m_positionBuffer.data[i] || new It()).Copy(m(t.position, It.ZERO))
        this.m_velocityBuffer.data[i] = (this.m_velocityBuffer.data[i] || new It()).Copy(m(t.velocity, It.ZERO))
        this.m_weightBuffer[i] = 0
        this.m_forceBuffer[i] = (this.m_forceBuffer[i] || new It()).SetZero()
        if (this.m_staticPressureBuffer) {
          this.m_staticPressureBuffer[i] = 0
        }
        if (this.m_depthBuffer) {
          this.m_depthBuffer[i] = 0
        }
        var n = new o().Copy(m(t.color, o.ZERO))
        if (!(!this.m_colorBuffer.data && n.IsZero())) {
          this.m_colorBuffer.data = this.RequestBuffer(this.m_colorBuffer.data)
          this.m_colorBuffer.data[i] = (this.m_colorBuffer.data[i] || new o()).Copy(n)
        }
        if (this.m_userDataBuffer.data || t.userData) {
          this.m_userDataBuffer.data = this.RequestBuffer(this.m_userDataBuffer.data)
          this.m_userDataBuffer.data[i] = t.userData
        }
        if (this.m_handleIndexBuffer.data) {
          this.m_handleIndexBuffer.data[i] = null
        }
        var s = this.m_proxyBuffer.data[this.m_proxyBuffer.Append()]
        var r = m(t.lifetime, 0)
        var a = r > 0
        if (this.m_expirationTimeBuffer.data || a) {
          this.SetParticleLifetime(i, a ? r : this.ExpirationTimeToLifetime(-this.GetQuantizedTimeElapsed()))
          this.m_indexByExpirationTimeBuffer.data[i] = i
        }
        s.index = i
        var u = m(t.group, null)
        this.m_groupBuffer[i] = u
        if (u) {
          if (u.m_firstIndex < u.m_lastIndex) {
            this.RotateBuffer(u.m_firstIndex, u.m_lastIndex, i)
            u.m_lastIndex = i + 1
          } else {
            u.m_firstIndex = i
            u.m_lastIndex = i + 1
          }
          u.UpdateAnchor()
        }
        this.SetParticleFlags(i, m(t.flags, 0))
        return i
      }
    }, {
      key: "GetParticleHandleFromIndex",
      value: function (t) {
        this.m_handleIndexBuffer.data = this.RequestBuffer(this.m_handleIndexBuffer.data)
        var e = this.m_handleIndexBuffer.data[t]
        return e || ((e = new ir()).SetIndex(t), this.m_handleIndexBuffer.data[t] = e, e)
      }
    }, {
      key: "DestroyParticle",
      value: function (t) {
        var e = arguments.length > 1 && undefined !== arguments[1] && arguments[1]
        var /* [auto-meaningful-name] */Ys$b2_zombieParticle = Ys.b2_zombieParticle
        if (e) {
          Ys$b2_zombieParticle |= Ys.b2_destructionListenerParticle
        }
        this.SetParticleFlags(t, this.m_flagsBuffer.data[t] | Ys$b2_zombieParticle)
      }
    }, {
      key: "DestroyOldestParticle",
      value: function (t) {
        var e = arguments.length > 1 && undefined !== arguments[1] && arguments[1]
        var i = this.GetParticleCount()
        var n = this.m_indexByExpirationTimeBuffer.data[i - (t + 1)]
        var s = this.m_indexByExpirationTimeBuffer.data[t]
        this.DestroyParticle(this.m_expirationTimeBuffer.data[n] > 0 ? n : s, e)
      }
    }, {
      key: "DestroyParticlesInShape",
      value: function (e, i) {
        var n = arguments.length > 2 && undefined !== arguments[2] && arguments[2]
        var /* [auto-meaningful-name] */t$DestroyParticlesInShape_s_aabb = t.DestroyParticlesInShape_s_aabb
        if (this.m_world.IsLocked()) {
          throw new Error()
        }
        var r = new Lr(this, e, i, n)
        var o = t$DestroyParticlesInShape_s_aabb
        e.ComputeAABB(o, i, 0)
        this.m_world.QueryAABB(r, o)
        return r.Destroyed()
      }
    }, {
      key: "CreateParticleGroup",
      value: function (e) {
        if (this.m_world.IsLocked()) {
          throw new Error()
        }
        var /* [auto-meaningful-name] */t$CreateParticleGroup_s_transform = t.CreateParticleGroup_s_transform
        t$CreateParticleGroup_s_transform.SetPositionAngle(m(e.position, It.ZERO), m(e.angle, 0))
        var /* [auto-meaningful-name] */this$m_count = this.m_count
        if (e.shape) {
          this.CreateParticlesWithShapeForGroup(e.shape, e, t$CreateParticleGroup_s_transform)
        }
        if (e.shapes) {
          this.CreateParticlesWithShapesForGroup(e.shapes, m(e.shapeCount, e.shapes.length), e, t$CreateParticleGroup_s_transform)
        }
        if (e.positionData) {
          for (var s = m(e.particleCount, e.positionData.length), r = 0; r < s; r++) {
            var o = e.positionData[r]
            this.CreateParticleForGroup(e, t$CreateParticleGroup_s_transform, o)
          }
        }
        var /* [auto-meaningful-name] */this$m_count1 = this.m_count
        var u = new sr(this, e.id)
        u.m_firstIndex = this$m_count
        u.m_lastIndex = this$m_count1
        u.m_strength = m(e.strength, 1)
        u.m_userData = e.userData
        u.m_transform.Copy(t$CreateParticleGroup_s_transform)
        u.m_prev = null
        u.m_next = this.m_groupList
        if (this.m_groupList) {
          this.m_groupList.m_prev = u
        }
        this.m_groupList = u
        ++this.m_groupCount
        for (var l = this$m_count; l < this$m_count1; l++) {
          this.m_groupBuffer[l] = u
        }
        this.SetGroupFlags(u, m(e.groupFlags, 0))
        var h = new Fr()
        this.UpdateContacts(true)
        this.UpdatePairsAndTriads(this$m_count, this$m_count1, h)
        if (e.group) {
          this.JoinParticleGroups(e.group, u)
          u = e.group
        }
        u.UpdateAnchor()
        return u
      }
    }, {
      key: "JoinParticleGroups",
      value: function (t, e) {
        if (this.m_world.IsLocked()) {
          throw new Error()
        }
        this.RotateBuffer(e.m_firstIndex, e.m_lastIndex, this.m_count)
        this.RotateBuffer(t.m_firstIndex, t.m_lastIndex, e.m_firstIndex)
        var i = new Rr(e.m_firstIndex)
        this.UpdateContacts(true)
        this.UpdatePairsAndTriads(t.m_firstIndex, e.m_lastIndex, i)
        for (var /* [auto-meaningful-name] */e$m_firstIndex = e.m_firstIndex; e$m_firstIndex < e.m_lastIndex; e$m_firstIndex++) {
          this.m_groupBuffer[e$m_firstIndex] = t
        }
        var s = t.m_groupFlags | e.m_groupFlags
        this.SetGroupFlags(t, s)
        t.m_lastIndex = e.m_lastIndex
        e.m_firstIndex = e.m_lastIndex
        this.DestroyParticleGroup(e)
      }
    }, {
      key: "SplitParticleGroup",
      value: function (e) {
        this.UpdateContacts(true)
        var i = tt(e.GetParticleCount(), function (t) {
          return new kr()
        })
        t.InitializeParticleLists(e, i)
        this.MergeParticleListsInContact(e, i)
        var n = t.FindLongestParticleList(e, i)
        this.MergeZombieParticleListNodes(e, i, n)
        this.CreateParticleGroupsFromParticleList(e, i, n)
        this.UpdatePairsAndTriadsWithParticleList(e, i)
      }
    }, {
      key: "GetParticleGroupList",
      value: function () {
        return this.m_groupList
      }
    }, {
      key: "GetParticleGroupCount",
      value: function () {
        return this.m_groupCount
      }
    }, {
      key: "GetParticleCount",
      value: function () {
        return this.m_count
      }
    }, {
      key: "GetMaxParticleCount",
      value: function () {
        return this.m_def.maxCount
      }
    }, {
      key: "SetMaxParticleCount",
      value: function (t) {
        this.m_def.maxCount = t
      }
    }, {
      key: "GetAllParticleFlags",
      value: function () {
        return this.m_allParticleFlags
      }
    }, {
      key: "GetAllGroupFlags",
      value: function () {
        return this.m_allGroupFlags
      }
    }, {
      key: "SetPaused",
      value: function (t) {
        this.m_paused = t
      }
    }, {
      key: "GetPaused",
      value: function () {
        return this.m_paused
      }
    }, {
      key: "SetDensity",
      value: function (t) {
        this.m_def.density = t
        this.m_inverseDensity = 1 / this.m_def.density
      }
    }, {
      key: "GetDensity",
      value: function () {
        return this.m_def.density
      }
    }, {
      key: "SetGravityScale",
      value: function (t) {
        this.m_def.gravityScale = t
      }
    }, {
      key: "GetGravityScale",
      value: function () {
        return this.m_def.gravityScale
      }
    }, {
      key: "SetDamping",
      value: function (t) {
        this.m_def.dampingStrength = t
      }
    }, {
      key: "GetDamping",
      value: function () {
        return this.m_def.dampingStrength
      }
    }, {
      key: "SetStaticPressureIterations",
      value: function (t) {
        this.m_def.staticPressureIterations = t
      }
    }, {
      key: "GetStaticPressureIterations",
      value: function () {
        return this.m_def.staticPressureIterations
      }
    }, {
      key: "SetRadius",
      value: function (t) {
        this.m_particleDiameter = 2 * t
        this.m_squaredDiameter = this.m_particleDiameter * this.m_particleDiameter
        this.m_inverseDiameter = 1 / this.m_particleDiameter
      }
    }, {
      key: "GetRadius",
      value: function () {
        return this.m_particleDiameter / 2
      }
    }, {
      key: "GetPositionBuffer",
      value: function () {
        return this.m_positionBuffer.data
      }
    }, {
      key: "GetVelocityBuffer",
      value: function () {
        return this.m_velocityBuffer.data
      }
    }, {
      key: "GetColorBuffer",
      value: function () {
        this.m_colorBuffer.data = this.RequestBuffer(this.m_colorBuffer.data)
        return this.m_colorBuffer.data
      }
    }, {
      key: "GetGroupBuffer",
      value: function () {
        return this.m_groupBuffer
      }
    }, {
      key: "GetWeightBuffer",
      value: function () {
        return this.m_weightBuffer
      }
    }, {
      key: "GetUserDataBuffer",
      value: function () {
        this.m_userDataBuffer.data = this.RequestBuffer(this.m_userDataBuffer.data)
        return this.m_userDataBuffer.data
      }
    }, {
      key: "GetFlagsBuffer",
      value: function () {
        return this.m_flagsBuffer.data
      }
    }, {
      key: "SetParticleFlags",
      value: function (t, e) {
        if (this.m_flagsBuffer.data[t] & ~e) {
          this.m_needsUpdateAllParticleFlags = true
        }
        if (~this.m_allParticleFlags & e) {
          if (e & Ys.b2_tensileParticle) {
            this.m_accumulation2Buffer = this.RequestBuffer(this.m_accumulation2Buffer)
          }
          if (e & Ys.b2_colorMixingParticle) {
            this.m_colorBuffer.data = this.RequestBuffer(this.m_colorBuffer.data)
          }
          this.m_allParticleFlags |= e
        }
        this.m_flagsBuffer.data[t] = e
      }
    }, {
      key: "GetParticleFlags",
      value: function (t) {
        return this.m_flagsBuffer.data[t]
      }
    }, {
      key: "SetFlagsBuffer",
      value: function (t) {
        this.SetUserOverridableBuffer(this.m_flagsBuffer, t)
      }
    }, {
      key: "SetPositionBuffer",
      value: function (t) {
        if (t instanceof Float32Array) {
          if (t.length % 2 !== 0) {
            throw new Error()
          }
          for (var e = t.length / 2, i = new Array(e), n = 0; n < e; ++n) {
            i[n] = new Dt(t.subarray(2 * n, 2 * n + 2))
          }
          t = i
        }
        this.SetUserOverridableBuffer(this.m_positionBuffer, t)
      }
    }, {
      key: "SetVelocityBuffer",
      value: function (t) {
        if (t instanceof Float32Array) {
          if (t.length % 2 !== 0) {
            throw new Error()
          }
          for (var e = t.length / 2, i = new Array(e), n = 0; n < e; ++n) {
            i[n] = new Dt(t.subarray(2 * n, 2 * n + 2))
          }
          t = i
        }
        this.SetUserOverridableBuffer(this.m_velocityBuffer, t)
      }
    }, {
      key: "SetColorBuffer",
      value: function (t) {
        if (t instanceof Float32Array) {
          if (t.length % 4 !== 0) {
            throw new Error()
          }
          for (var e = t.length / 4, i = new Array(e), n = 0; n < e; ++n) {
            i[n] = new u(t.subarray(4 * n, 4 * n + 4))
          }
          t = i
        }
        this.SetUserOverridableBuffer(this.m_colorBuffer, t)
      }
    }, {
      key: "SetUserDataBuffer",
      value: function (t) {
        this.SetUserOverridableBuffer(this.m_userDataBuffer, t)
      }
    }, {
      key: "GetContacts",
      value: function () {
        return this.m_contactBuffer.data
      }
    }, {
      key: "GetContactCount",
      value: function () {
        return this.m_contactBuffer.count
      }
    }, {
      key: "GetBodyContacts",
      value: function () {
        return this.m_bodyContactBuffer.data
      }
    }, {
      key: "GetBodyContactCount",
      value: function () {
        return this.m_bodyContactBuffer.count
      }
    }, {
      key: "GetPairs",
      value: function () {
        return this.m_pairBuffer.data
      }
    }, {
      key: "GetPairCount",
      value: function () {
        return this.m_pairBuffer.count
      }
    }, {
      key: "GetTriads",
      value: function () {
        return this.m_triadBuffer.data
      }
    }, {
      key: "GetTriadCount",
      value: function () {
        return this.m_triadBuffer.count
      }
    }, {
      key: "SetStuckThreshold",
      value: function (t) {
        this.m_stuckThreshold = t
        if (t > 0) {
          this.m_lastBodyContactStepBuffer.data = this.RequestBuffer(this.m_lastBodyContactStepBuffer.data)
          this.m_bodyContactCountBuffer.data = this.RequestBuffer(this.m_bodyContactCountBuffer.data)
          this.m_consecutiveContactStepsBuffer.data = this.RequestBuffer(this.m_consecutiveContactStepsBuffer.data)
        }
      }
    }, {
      key: "GetStuckCandidates",
      value: function () {
        return this.m_stuckParticleBuffer.Data()
      }
    }, {
      key: "GetStuckCandidateCount",
      value: function () {
        return this.m_stuckParticleBuffer.GetCount()
      }
    }, {
      key: "ComputeCollisionEnergy",
      value: function () {
        for (var /* [auto-meaningful-name] */t$ComputeCollisionEnergy_s_v = t.ComputeCollisionEnergy_s_v, /* [auto-meaningful-name] */this$m_velocityBuffer$data = this.m_velocityBuffer.data, n = 0, s = 0; s < this.m_contactBuffer.count; s++) {
          var r = this.m_contactBuffer.data[s]
          var /* [auto-meaningful-name] */r$indexA = r.indexA
          var /* [auto-meaningful-name] */r$indexB = r.indexB
          var /* [auto-meaningful-name] */r$normal = r.normal
          var l = It.SubVV(this$m_velocityBuffer$data[r$indexB], this$m_velocityBuffer$data[r$indexA], t$ComputeCollisionEnergy_s_v)
          var h = It.DotVV(l, r$normal)
          if (h < 0) {
            n += h * h
          }
        }
        return .5 * this.GetParticleMass() * n
      }
    }, {
      key: "SetStrictContactCheck",
      value: function (t) {
        this.m_def.strictContactCheck = t
      }
    }, {
      key: "GetStrictContactCheck",
      value: function () {
        return this.m_def.strictContactCheck
      }
    }, {
      key: "SetParticleLifetime",
      value: function (t, e) {
        var i = null === this.m_indexByExpirationTimeBuffer.data
        this.m_expirationTimeBuffer.data = this.RequestBuffer(this.m_expirationTimeBuffer.data)
        this.m_indexByExpirationTimeBuffer.data = this.RequestBuffer(this.m_indexByExpirationTimeBuffer.data)
        if (i) {
          for (var n = this.GetParticleCount(), s = 0; s < n; ++s) {
            this.m_indexByExpirationTimeBuffer.data[s] = s
          }
        }
        var r = e / this.m_def.lifetimeGranularity
        var o = r > 0 ? this.GetQuantizedTimeElapsed() + r : r
        if (o !== this.m_expirationTimeBuffer.data[t]) {
          this.m_expirationTimeBuffer.data[t] = o
          this.m_expirationTimeBufferRequiresSorting = true
        }
      }
    }, {
      key: "GetParticleLifetime",
      value: function (t) {
        return this.ExpirationTimeToLifetime(this.GetExpirationTimeBuffer()[t])
      }
    }, {
      key: "SetDestructionByAge",
      value: function (t) {
        if (t) {
          this.GetExpirationTimeBuffer()
        }
        this.m_def.destroyByAge = t
      }
    }, {
      key: "GetDestructionByAge",
      value: function () {
        return this.m_def.destroyByAge
      }
    }, {
      key: "GetExpirationTimeBuffer",
      value: function () {
        this.m_expirationTimeBuffer.data = this.RequestBuffer(this.m_expirationTimeBuffer.data)
        return this.m_expirationTimeBuffer.data
      }
    }, {
      key: "ExpirationTimeToLifetime",
      value: function (t) {
        return (t > 0 ? t - this.GetQuantizedTimeElapsed() : t) * this.m_def.lifetimeGranularity
      }
    }, {
      key: "GetIndexByExpirationTimeBuffer",
      value: function () {
        if (this.GetParticleCount()) {
          this.SetParticleLifetime(0, this.GetParticleLifetime(0))
        } else {
          this.m_indexByExpirationTimeBuffer.data = this.RequestBuffer(this.m_indexByExpirationTimeBuffer.data)
        }
        return this.m_indexByExpirationTimeBuffer.data
      }
    }, {
      key: "ParticleApplyLinearImpulse",
      value: function (t, e) {
        this.ApplyLinearImpulse(t, t + 1, e)
      }
    }, {
      key: "ApplyLinearImpulse",
      value: function (t, e, i) {
        for (var /* [auto-meaningful-name] */this$m_velocityBuffer$data = this.m_velocityBuffer.data, s = (e - t) * this.GetParticleMass(), r = new It().Copy(i).SelfMul(1 / s), o = t; o < e; o++) {
          this$m_velocityBuffer$data[o].SelfAdd(r)
        }
      }
    }, {
      key: "ParticleApplyForce",
      value: function (e, i) {
        if (t.IsSignificantForce(i) && this.ForceCanBeApplied(this.m_flagsBuffer.data[e])) {
          this.PrepareForceBuffer()
          this.m_forceBuffer[e].SelfAdd(i)
        }
      }
    }, {
      key: "ApplyForce",
      value: function (e, i, n) {
        var s = new It().Copy(n).SelfMul(1 / (i - e))
        if (t.IsSignificantForce(s)) {
          this.PrepareForceBuffer()
          for (var r = e; r < i; r++) {
            this.m_forceBuffer[r].SelfAdd(s)
          }
        }
      }
    }, {
      key: "GetNext",
      value: function () {
        return this.m_next
      }
    }, {
      key: "QueryAABB",
      value: function (e, i) {
        if (0 !== this.m_proxyBuffer.count) {
          for (var /* [auto-meaningful-name] */this$m_proxyBuffer$count = this.m_proxyBuffer.count, s = fr(this.m_proxyBuffer.data, 0, this$m_proxyBuffer$count, t.computeTag(this.m_inverseDiameter * i.lowerBound.x, this.m_inverseDiameter * i.lowerBound.y), Vr.CompareProxyTag), r = dr(this.m_proxyBuffer.data, s, this$m_proxyBuffer$count, t.computeTag(this.m_inverseDiameter * i.upperBound.x, this.m_inverseDiameter * i.upperBound.y), Vr.CompareTagProxy), /* [auto-meaningful-name] */this$m_positionBuffer$data = this.m_positionBuffer.data, a = s; a < r; ++a) {
            var /* [auto-meaningful-name] */this$m_proxyBuffer$dataA$index = this.m_proxyBuffer.data[a].index
            var l = this$m_positionBuffer$data[this$m_proxyBuffer$dataA$index]
            if (i.lowerBound.x < l.x && l.x < i.upperBound.x && i.lowerBound.y < l.y && l.y < i.upperBound.y && !e.ReportParticle(this, this$m_proxyBuffer$dataA$index)) {
              break
            }
          }
        }
      }
    }, {
      key: "QueryShapeAABB",
      value: function (e, i, n) {
        var s = arguments.length > 3 && undefined !== arguments[3] ? arguments[3] : 0
        var /* [auto-meaningful-name] */t$QueryShapeAABB_s_aabb = t.QueryShapeAABB_s_aabb
        var o = t$QueryShapeAABB_s_aabb
        i.ComputeAABB(o, n, s)
        this.QueryAABB(e, o)
      }
    }, {
      key: "QueryPointAABB",
      value: function (e, i) {
        var n = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : A
        var /* [auto-meaningful-name] */t$QueryPointAABB_s_aabb = t.QueryPointAABB_s_aabb
        var r = t$QueryPointAABB_s_aabb
        r.lowerBound.Set(i.x - n, i.y - n)
        r.upperBound.Set(i.x + n, i.y + n)
        this.QueryAABB(e, r)
      }
    }, {
      key: "RayCast",
      value: function (e, i, n) {
        var /* [auto-meaningful-name] */t$RayCast_s_aabb = t.RayCast_s_aabb
        var /* [auto-meaningful-name] */t$RayCast_s_p = t.RayCast_s_p
        var /* [auto-meaningful-name] */t$RayCast_s_v = t.RayCast_s_v
        var /* [auto-meaningful-name] */t$RayCast_s_n = t.RayCast_s_n
        var /* [auto-meaningful-name] */t$RayCast_s_point = t.RayCast_s_point
        if (0 !== this.m_proxyBuffer.count) {
          var /* [auto-meaningful-name] */this$m_positionBuffer$data = this.m_positionBuffer.data
          var h = t$RayCast_s_aabb
          It.MinV(i, n, h.lowerBound)
          It.MaxV(i, n, h.upperBound)
          for (var _, m = 1, c = It.SubVV(n, i, t$RayCast_s_v), f = It.DotVV(c, c), d = this.GetInsideBoundsEnumerator(h); (_ = d.GetNext()) >= 0;) {
            var v = It.SubVV(i, this$m_positionBuffer$data[_], t$RayCast_s_p)
            var y = It.DotVV(v, c)
            var p = y * y - f * (It.DotVV(v, v) - this.m_squaredDiameter)
            if (p >= 0) {
              var x = pt(p)
              var B = (-y - x) / f
              if (B > m) {
                continue
              }
              if (B < 0 && ((B = (-y + x) / f) < 0 || B > m)) {
                continue
              }
              var S = It.AddVMulSV(v, B, c, t$RayCast_s_n)
              S.Normalize()
              if ((m = _t(m, e.ReportParticle(this, _, It.AddVMulSV(i, B, c, t$RayCast_s_point), S, B))) <= 0) {
                break
              }
            }
          }
        }
      }
    }, {
      key: "ComputeAABB",
      value: function (t) {
        var e = this.GetParticleCount()
        t.lowerBound.x = +c
        t.lowerBound.y = +c
        t.upperBound.x = -c
        t.upperBound.y = -c
        for (var /* [auto-meaningful-name] */this$m_positionBuffer$data = this.m_positionBuffer.data, n = 0; n < e; n++) {
          var s = this$m_positionBuffer$data[n]
          It.MinV(t.lowerBound, s, t.lowerBound)
          It.MaxV(t.upperBound, s, t.upperBound)
        }
        t.lowerBound.x -= this.m_particleDiameter
        t.lowerBound.y -= this.m_particleDiameter
        t.upperBound.x += this.m_particleDiameter
        t.upperBound.y += this.m_particleDiameter
      }
    }, {
      key: "FreeBuffer",
      value: function (t, e) {
        if (null !== t) {
          t.length = 0
        }
      }
    }, {
      key: "FreeUserOverridableBuffer",
      value: function (t) {
        if (0 === t.userSuppliedCapacity) {
          this.FreeBuffer(t.data, this.m_internalAllocatedCapacity)
        }
      }
    }, {
      key: "ReallocateBuffer3",
      value: function (t, e, i) {
        if (i <= e) {
          throw new Error()
        }
        var n = t ? t.slice() : []
        n.length = i
        return n
      }
    }, {
      key: "ReallocateBuffer5",
      value: function (t, e, i, n, s) {
        if (n <= i) {
          throw new Error()
        }
        if (e && !(n <= e)) {
          throw new Error()
        }
        if (!(s && !t || e)) {
          t = this.ReallocateBuffer3(t, i, n)
        }
        return t
      }
    }, {
      key: "ReallocateBuffer4",
      value: function (t, e, i, n) {
        return this.ReallocateBuffer5(t.data, t.userSuppliedCapacity, e, i, n)
      }
    }, {
      key: "RequestBuffer",
      value: function (t) {
        if (!t) {
          if (0 === this.m_internalAllocatedCapacity) {
            this.ReallocateInternalAllocatedBuffers(N)
          }
          (t = []).length = this.m_internalAllocatedCapacity
        }
        return t
      }
    }, {
      key: "ReallocateHandleBuffers",
      value: function (t) {
        this.m_handleIndexBuffer.data = this.ReallocateBuffer4(this.m_handleIndexBuffer, this.m_internalAllocatedCapacity, t, true)
      }
    }, {
      key: "ReallocateInternalAllocatedBuffers",
      value: function (t) {
        function e(t, e) {
          return e && t > e ? e : t
        }
        t = e(t, this.m_def.maxCount)
        t = e(t, this.m_flagsBuffer.userSuppliedCapacity)
        t = e(t, this.m_positionBuffer.userSuppliedCapacity)
        t = e(t, this.m_velocityBuffer.userSuppliedCapacity)
        t = e(t, this.m_colorBuffer.userSuppliedCapacity)
        t = e(t, this.m_userDataBuffer.userSuppliedCapacity)
        if (this.m_internalAllocatedCapacity < t) {
          this.ReallocateHandleBuffers(t)
          this.m_flagsBuffer.data = this.ReallocateBuffer4(this.m_flagsBuffer, this.m_internalAllocatedCapacity, t, false)
          var i = this.m_stuckThreshold > 0
          this.m_lastBodyContactStepBuffer.data = this.ReallocateBuffer4(this.m_lastBodyContactStepBuffer, this.m_internalAllocatedCapacity, t, i)
          this.m_bodyContactCountBuffer.data = this.ReallocateBuffer4(this.m_bodyContactCountBuffer, this.m_internalAllocatedCapacity, t, i)
          this.m_consecutiveContactStepsBuffer.data = this.ReallocateBuffer4(this.m_consecutiveContactStepsBuffer, this.m_internalAllocatedCapacity, t, i)
          this.m_positionBuffer.data = this.ReallocateBuffer4(this.m_positionBuffer, this.m_internalAllocatedCapacity, t, false)
          this.m_velocityBuffer.data = this.ReallocateBuffer4(this.m_velocityBuffer, this.m_internalAllocatedCapacity, t, false)
          this.m_forceBuffer = this.ReallocateBuffer5(this.m_forceBuffer, 0, this.m_internalAllocatedCapacity, t, false)
          this.m_weightBuffer = this.ReallocateBuffer5(this.m_weightBuffer, 0, this.m_internalAllocatedCapacity, t, false)
          this.m_staticPressureBuffer = this.ReallocateBuffer5(this.m_staticPressureBuffer, 0, this.m_internalAllocatedCapacity, t, true)
          this.m_accumulationBuffer = this.ReallocateBuffer5(this.m_accumulationBuffer, 0, this.m_internalAllocatedCapacity, t, false)
          this.m_accumulation2Buffer = this.ReallocateBuffer5(this.m_accumulation2Buffer, 0, this.m_internalAllocatedCapacity, t, true)
          this.m_depthBuffer = this.ReallocateBuffer5(this.m_depthBuffer, 0, this.m_internalAllocatedCapacity, t, true)
          this.m_colorBuffer.data = this.ReallocateBuffer4(this.m_colorBuffer, this.m_internalAllocatedCapacity, t, true)
          this.m_groupBuffer = this.ReallocateBuffer5(this.m_groupBuffer, 0, this.m_internalAllocatedCapacity, t, false)
          this.m_userDataBuffer.data = this.ReallocateBuffer4(this.m_userDataBuffer, this.m_internalAllocatedCapacity, t, true)
          this.m_expirationTimeBuffer.data = this.ReallocateBuffer4(this.m_expirationTimeBuffer, this.m_internalAllocatedCapacity, t, true)
          this.m_indexByExpirationTimeBuffer.data = this.ReallocateBuffer4(this.m_indexByExpirationTimeBuffer, this.m_internalAllocatedCapacity, t, false)
          this.m_internalAllocatedCapacity = t
        }
      }
    }, {
      key: "CreateParticleForGroup",
      value: function (t, e, i) {
        var n = new $s()
        n.flags = m(t.flags, 0)
        Tt.MulXV(e, i, n.position)
        It.AddVV(m(t.linearVelocity, It.ZERO), It.CrossSV(m(t.angularVelocity, 0), It.SubVV(n.position, m(t.position, It.ZERO), It.s_t0), It.s_t0), n.velocity)
        n.color.Copy(m(t.color, o.ZERO))
        n.lifetime = m(t.lifetime, 0)
        n.userData = t.userData
        this.CreateParticle(n)
      }
    }, {
      key: "CreateParticlesStrokeShapeForGroup",
      value: function (e, i, n) {
        var /* [auto-meaningful-name] */t$CreateParticlesStrokeShapeForGroup_s_edge = t.CreateParticlesStrokeShapeForGroup_s_edge
        var /* [auto-meaningful-name] */t$CreateParticlesStrokeShapeForGroup_s_d = t.CreateParticlesStrokeShapeForGroup_s_d
        var /* [auto-meaningful-name] */t$CreateParticlesStrokeShapeForGroup_s_p = t.CreateParticlesStrokeShapeForGroup_s_p
        var a = m(i.stride, 0)
        if (0 === a) {
          a = this.GetParticleStride()
        }
        for (var u = 0, l = e.GetChildCount(), h = 0; h < l; h++) {
          var _ = null
          if (e.GetType() === ze.e_edgeShape) {
            _ = e
          } else {
            _ = t$CreateParticlesStrokeShapeForGroup_s_edge
            e.GetChildEdge(_, h)
          }
          for (var c = It.SubVV(_.m_vertex2, _.m_vertex1, t$CreateParticlesStrokeShapeForGroup_s_d), f = c.Length(); u < f;) {
            var d = It.AddVMulSV(_.m_vertex1, u / f, c, t$CreateParticlesStrokeShapeForGroup_s_p)
            this.CreateParticleForGroup(i, n, d)
            u += a
          }
          u -= f
        }
      }
    }, {
      key: "CreateParticlesFillShapeForGroup",
      value: function (e, i, n) {
        var /* [auto-meaningful-name] */t$CreateParticlesFillShapeForGroup_s_aabb = t.CreateParticlesFillShapeForGroup_s_aabb
        var /* [auto-meaningful-name] */t$CreateParticlesFillShapeForGroup_s_p = t.CreateParticlesFillShapeForGroup_s_p
        var o = m(i.stride, 0)
        if (0 === o) {
          o = this.GetParticleStride()
        }
        var /* [auto-meaningful-name] */Tt$IDENTITY = Tt.IDENTITY
        var u = t$CreateParticlesFillShapeForGroup_s_aabb
        e.ComputeAABB(u, Tt$IDENTITY, 0)
        for (var l = Math.floor(u.lowerBound.y / o) * o; l < u.upperBound.y; l += o) {
          for (var h = Math.floor(u.lowerBound.x / o) * o; h < u.upperBound.x; h += o) {
            var _ = t$CreateParticlesFillShapeForGroup_s_p.Set(h, l)
            if (e.TestPoint(Tt$IDENTITY, _)) {
              this.CreateParticleForGroup(i, n, _)
            }
          }
        }
      }
    }, {
      key: "CreateParticlesWithShapeForGroup",
      value: function (t, e, i) {
        switch (t.GetType()) {
          case ze.e_edgeShape:
          case ze.e_chainShape:
            this.CreateParticlesStrokeShapeForGroup(t, e, i)
            break
          case ze.e_polygonShape:
          case ze.e_circleShape:
            this.CreateParticlesFillShapeForGroup(t, e, i)
        }
      }
    }, {
      key: "CreateParticlesWithShapesForGroup",
      value: function (t, e, i, n) {
        var s = new jr(t, e)
        this.CreateParticlesFillShapeForGroup(s, i, n)
      }
    }, {
      key: "CloneParticle",
      value: function (t, e) {
        var i = new $s()
        i.flags = this.m_flagsBuffer.data[t]
        i.position.Copy(this.m_positionBuffer.data[t])
        i.velocity.Copy(this.m_velocityBuffer.data[t])
        if (this.m_colorBuffer.data) {
          i.color.Copy(this.m_colorBuffer.data[t])
        }
        if (this.m_userDataBuffer.data) {
          i.userData = this.m_userDataBuffer.data[t]
        }
        i.group = e
        var n = this.CreateParticle(i)
        if (this.m_handleIndexBuffer.data) {
          var s = this.m_handleIndexBuffer.data[t]
          if (s) {
            s.SetIndex(n)
          }
          this.m_handleIndexBuffer.data[n] = s
          this.m_handleIndexBuffer.data[t] = null
        }
        if (this.m_lastBodyContactStepBuffer.data) {
          this.m_lastBodyContactStepBuffer.data[n] = this.m_lastBodyContactStepBuffer.data[t]
        }
        if (this.m_bodyContactCountBuffer.data) {
          this.m_bodyContactCountBuffer.data[n] = this.m_bodyContactCountBuffer.data[t]
        }
        if (this.m_consecutiveContactStepsBuffer.data) {
          this.m_consecutiveContactStepsBuffer.data[n] = this.m_consecutiveContactStepsBuffer.data[t]
        }
        if (this.m_hasForce) {
          this.m_forceBuffer[n].Copy(this.m_forceBuffer[t])
        }
        if (this.m_staticPressureBuffer) {
          this.m_staticPressureBuffer[n] = this.m_staticPressureBuffer[t]
        }
        if (this.m_depthBuffer) {
          this.m_depthBuffer[n] = this.m_depthBuffer[t]
        }
        if (this.m_expirationTimeBuffer.data) {
          this.m_expirationTimeBuffer.data[n] = this.m_expirationTimeBuffer.data[t]
        }
        return n
      }
    }, {
      key: "DestroyParticlesInGroup",
      value: function (t) {
        for (var e = arguments.length > 1 && undefined !== arguments[1] && arguments[1], /* [auto-meaningful-name] */t$m_firstIndex = t.m_firstIndex; t$m_firstIndex < t.m_lastIndex; t$m_firstIndex++) {
          this.DestroyParticle(t$m_firstIndex, e)
        }
      }
    }, {
      key: "DestroyParticleGroup",
      value: function (t) {
        if (this.m_world.m_destructionListener) {
          this.m_world.m_destructionListener.SayGoodbyeParticleGroup(t)
        }
        this.SetGroupFlags(t, 0)
        for (var /* [auto-meaningful-name] */t$m_firstIndex = t.m_firstIndex; t$m_firstIndex < t.m_lastIndex; t$m_firstIndex++) {
          this.m_groupBuffer[t$m_firstIndex] = null
        }
        if (t.m_prev) {
          t.m_prev.m_next = t.m_next
        }
        if (t.m_next) {
          t.m_next.m_prev = t.m_prev
        }
        if (t === this.m_groupList) {
          this.m_groupList = t.m_next
        }
        --this.m_groupCount
      }
    }, {
      key: "UpdatePairsAndTriads",
      value: function (e, i, n) {
        for (var /* [auto-meaningful-name] */t$UpdatePairsAndTriads_s_dab = t.UpdatePairsAndTriads_s_dab, /* [auto-meaningful-name] */t$UpdatePairsAndTriads_s_dbc = t.UpdatePairsAndTriads_s_dbc, /* [auto-meaningful-name] */t$UpdatePairsAndTriads_s_dca = t.UpdatePairsAndTriads_s_dca, /* [auto-meaningful-name] */this$m_positionBuffer$data = this.m_positionBuffer.data, u = 0, l = e; l < i; l++) {
          u |= this.m_flagsBuffer.data[l]
        }
        if (u & t.k_pairFlags) {
          for (var h = 0; h < this.m_contactBuffer.count; h++) {
            var _ = this.m_contactBuffer.data[h]
            var /* [auto-meaningful-name] */_$indexA = _.indexA
            var /* [auto-meaningful-name] */_$indexB = _.indexB
            var f = this.m_flagsBuffer.data[_$indexA]
            var d = this.m_flagsBuffer.data[_$indexB]
            var v = this.m_groupBuffer[_$indexA]
            var y = this.m_groupBuffer[_$indexB]
            if (_$indexA >= e && _$indexA < i && _$indexB >= e && _$indexB < i && !((f | d) & Ys.b2_zombieParticle) && (f | d) & t.k_pairFlags && (n.IsNecessary(_$indexA) || n.IsNecessary(_$indexB)) && t.ParticleCanBeConnected(f, v) && t.ParticleCanBeConnected(d, y) && n.ShouldCreatePair(_$indexA, _$indexB)) {
              var p = this.m_pairBuffer.data[this.m_pairBuffer.Append()]
              p.indexA = _$indexA
              p.indexB = _$indexB
              p.flags = _.flags
              p.strength = _t(v ? v.m_strength : 1, y ? y.m_strength : 1)
              p.distance = It.DistanceVV(this$m_positionBuffer$data[_$indexA], this$m_positionBuffer$data[_$indexB])
            }
            mr(this.m_pairBuffer.data, 0, this.m_pairBuffer.count, t.ComparePairIndices)
            this.m_pairBuffer.Unique(t.MatchPairIndices)
          }
        }
        if (u & t.k_triadFlags) {
          for (var x = new or(i - e), B = e; B < i; B++) {
            var S = this.m_flagsBuffer.data[B]
            var A = this.m_groupBuffer[B]
            if (!(S & Ys.b2_zombieParticle || !t.ParticleCanBeConnected(S, A))) {
              x.AddGenerator(this$m_positionBuffer$data[B], B, n.IsNecessary(B))
            }
          }
          var C = this.GetParticleStride()
          x.Generate(C / 2, 2 * C)
          var b = this
          x.GetNodes(function (e, i, u) {
            var l = b.m_flagsBuffer.data[e]
            var h = b.m_flagsBuffer.data[i]
            var _ = b.m_flagsBuffer.data[u]
            if ((l | h | _) & t.k_triadFlags && n.ShouldCreateTriad(e, i, u)) {
              var m = this$m_positionBuffer$data[e]
              var c = this$m_positionBuffer$data[i]
              var f = this$m_positionBuffer$data[u]
              var d = It.SubVV(m, c, t$UpdatePairsAndTriads_s_dab)
              var v = It.SubVV(c, f, t$UpdatePairsAndTriads_s_dbc)
              var y = It.SubVV(f, m, t$UpdatePairsAndTriads_s_dca)
              var p = E * b.m_squaredDiameter
              if (It.DotVV(d, d) > p || It.DotVV(v, v) > p || It.DotVV(y, y) > p) {
                return
              }
              var x = b.m_groupBuffer[e]
              var B = b.m_groupBuffer[i]
              var S = b.m_groupBuffer[u]
              var A = b.m_triadBuffer.data[b.m_triadBuffer.Append()]
              A.indexA = e
              A.indexB = i
              A.indexC = u
              A.flags = l | h | _
              A.strength = function () {
                return _t(_t(x ? x.m_strength : 1, B ? B.m_strength : 1), S ? S.m_strength : 1)
              }
              var C = (m.x + c.x + f.x) / 3
              var g = (m.y + c.y + f.y) / 3
              A.pa.x = m.x - C
              A.pa.y = m.y - g
              A.pb.x = c.x - C
              A.pb.y = c.y - g
              A.pc.x = f.x - C
              A.pc.y = f.y - g
              A.ka = -It.DotVV(y, d)
              A.kb = -It.DotVV(d, v)
              A.kc = -It.DotVV(v, y)
              A.s = It.CrossVV(m, c) + It.CrossVV(c, f) + It.CrossVV(f, m)
            }
          })
          mr(this.m_triadBuffer.data, 0, this.m_triadBuffer.count, t.CompareTriadIndices)
          this.m_triadBuffer.Unique(t.MatchTriadIndices)
        }
      }
    }, {
      key: "UpdatePairsAndTriadsWithReactiveParticles",
      value: function () {
        var t = new Tr(this.m_flagsBuffer)
        this.UpdatePairsAndTriads(0, this.m_count, t)
        for (var e = 0; e < this.m_count; e++) {
          this.m_flagsBuffer.data[e] &= ~Ys.b2_reactiveParticle
        }
        this.m_allParticleFlags &= ~Ys.b2_reactiveParticle
      }
    }, {
      key: "MergeParticleListsInContact",
      value: function (e, i) {
        for (var n = e.GetBufferIndex(), s = 0; s < this.m_contactBuffer.count; s++) {
          var r = this.m_contactBuffer.data[s]
          var /* [auto-meaningful-name] */r$indexA = r.indexA
          var /* [auto-meaningful-name] */r$indexB = r.indexB
          if (e.ContainsParticle(r$indexA) && e.ContainsParticle(r$indexB)) {
            var /* [auto-meaningful-name] */iR$indexAN$list = i[r$indexA - n].list
            var /* [auto-meaningful-name] */iR$indexBN$list = i[r$indexB - n].list
            if (iR$indexAN$list !== iR$indexBN$list) {
              if (iR$indexAN$list.count < iR$indexBN$list.count) {
                var h = iR$indexAN$list
                iR$indexAN$list = iR$indexBN$list
                iR$indexBN$list = h
              }
              t.MergeParticleLists(iR$indexAN$list, iR$indexBN$list)
            }
          }
        }
      }
    }, {
      key: "MergeZombieParticleListNodes",
      value: function (e, i, n) {
        for (var s = e.GetParticleCount(), r = 0; r < s; r++) {
          var o = i[r]
          if (o !== n && this.m_flagsBuffer.data[o.index] & Ys.b2_zombieParticle) {
            t.MergeParticleListAndNode(n, o)
          }
        }
      }
    }, {
      key: "CreateParticleGroupsFromParticleList",
      value: function (t, e, i) {
        var n = t.GetParticleCount()
        var s = new nr()
        s.groupFlags = t.GetGroupFlags()
        s.userData = t.GetUserData()
        for (var r = 0; r < n; r++) {
          var o = e[r]
          if (o.count && o !== i) {
            for (var a = this.CreateParticleGroup(s), u = o; u; u = u.next) {
              var /* [auto-meaningful-name] */u$index = u.index
              var h = this.CloneParticle(u$index, a)
              this.m_flagsBuffer.data[u$index] |= Ys.b2_zombieParticle
              u.index = h
            }
          }
        }
      }
    }, {
      key: "UpdatePairsAndTriadsWithParticleList",
      value: function (t, e) {
        for (var i = t.GetBufferIndex(), n = 0; n < this.m_pairBuffer.count; n++) {
          var s = this.m_pairBuffer.data[n]
          var /* [auto-meaningful-name] */s$indexA = s.indexA
          var /* [auto-meaningful-name] */s$indexB = s.indexB
          if (t.ContainsParticle(s$indexA)) {
            s.indexA = e[s$indexA - i].index
          }
          if (t.ContainsParticle(s$indexB)) {
            s.indexB = e[s$indexB - i].index
          }
        }
        for (var a = 0; a < this.m_triadBuffer.count; a++) {
          var u = this.m_triadBuffer.data[a]
          var /* [auto-meaningful-name] */u$indexA = u.indexA
          var /* [auto-meaningful-name] */u$indexB = u.indexB
          var /* [auto-meaningful-name] */u$indexC = u.indexC
          if (t.ContainsParticle(u$indexA)) {
            u.indexA = e[u$indexA - i].index
          }
          if (t.ContainsParticle(u$indexB)) {
            u.indexB = e[u$indexB - i].index
          }
          if (t.ContainsParticle(u$indexC)) {
            u.indexC = e[u$indexC - i].index
          }
        }
      }
    }, {
      key: "ComputeDepth",
      value: function () {
        for (var t = [], e = 0, i = 0; i < this.m_contactBuffer.count; i++) {
          var n = this.m_contactBuffer.data[i]
          var /* [auto-meaningful-name] */n$indexA = n.indexA
          var /* [auto-meaningful-name] */n$indexB = n.indexB
          var o = this.m_groupBuffer[n$indexA]
          var a = this.m_groupBuffer[n$indexB]
          if (o && o === a && o.m_groupFlags & er.b2_particleGroupNeedsUpdateDepth) {
            t[e++] = n
          }
        }
        for (var u = [], l = 0, /* [auto-meaningful-name] */this$m_groupList = this.m_groupList; this$m_groupList; this$m_groupList = this$m_groupList.GetNext()) {
          if (this$m_groupList.m_groupFlags & er.b2_particleGroupNeedsUpdateDepth) {
            u[l++] = this$m_groupList
            this.SetGroupFlags(this$m_groupList, this$m_groupList.m_groupFlags & ~er.b2_particleGroupNeedsUpdateDepth)
            for (var /* [auto-meaningful-name] */this$m_groupList$m_firstIndex = this$m_groupList.m_firstIndex; this$m_groupList$m_firstIndex < this$m_groupList.m_lastIndex; this$m_groupList$m_firstIndex++) {
              this.m_accumulationBuffer[this$m_groupList$m_firstIndex] = 0
            }
          }
        }
        for (var m = 0; m < e; m++) {
          var f = t[m]
          var /* [auto-meaningful-name] */f$indexA = f.indexA
          var /* [auto-meaningful-name] */f$indexB = f.indexB
          var /* [auto-meaningful-name] */f$weight = f.weight
          this.m_accumulationBuffer[f$indexA] += f$weight
          this.m_accumulationBuffer[f$indexB] += f$weight
        }
        for (var p = 0; p < l; p++) {
          for (var x = u[p], /* [auto-meaningful-name] */x$m_firstIndex = x.m_firstIndex; x$m_firstIndex < x.m_lastIndex; x$m_firstIndex++) {
            var S = this.m_accumulationBuffer[x$m_firstIndex]
            this.m_depthBuffer[x$m_firstIndex] = S < .8 ? 0 : c
          }
        }
        for (var A = pt(this.m_count) >> 0, C = 0; C < A; C++) {
          for (var b = false, g = 0; g < e; g++) {
            var V = t[g]
            var /* [auto-meaningful-name] */V$indexA = V.indexA
            var /* [auto-meaningful-name] */V$indexB = V.indexB
            var M = 1 - V.weight
            var P = this.m_depthBuffer[V$indexA]
            var I = this.m_depthBuffer[V$indexB]
            var G = I + M
            var D = P + M
            if (P > G) {
              this.m_depthBuffer[V$indexA] = G
              b = true
            }
            if (I > D) {
              this.m_depthBuffer[V$indexB] = D
              b = true
            }
          }
          if (!b) {
            break
          }
        }
        for (var F = 0; F < l; F++) {
          for (var L = u[F], /* [auto-meaningful-name] */L$m_firstIndex = L.m_firstIndex; L$m_firstIndex < L.m_lastIndex; L$m_firstIndex++) {
            if (this.m_depthBuffer[L$m_firstIndex] < c) {
              this.m_depthBuffer[L$m_firstIndex] *= this.m_particleDiameter
            } else {
              this.m_depthBuffer[L$m_firstIndex] = 0
            }
          }
        }
      }
    }, {
      key: "GetInsideBoundsEnumerator",
      value: function (e) {
        var i = t.computeTag(this.m_inverseDiameter * e.lowerBound.x - 1, this.m_inverseDiameter * e.lowerBound.y - 1)
        var n = t.computeTag(this.m_inverseDiameter * e.upperBound.x + 1, this.m_inverseDiameter * e.upperBound.y + 1)
        var /* [auto-meaningful-name] */this$m_proxyBuffer$count = this.m_proxyBuffer.count
        var r = fr(this.m_proxyBuffer.data, 0, this$m_proxyBuffer$count, i, Vr.CompareProxyTag)
        var o = dr(this.m_proxyBuffer.data, 0, this$m_proxyBuffer$count, n, Vr.CompareTagProxy)
        return new wr(this, i, n, r, o)
      }
    }, {
      key: "UpdateAllParticleFlags",
      value: function () {
        this.m_allParticleFlags = 0
        for (var t = 0; t < this.m_count; t++) {
          this.m_allParticleFlags |= this.m_flagsBuffer.data[t]
        }
        this.m_needsUpdateAllParticleFlags = false
      }
    }, {
      key: "UpdateAllGroupFlags",
      value: function () {
        this.m_allGroupFlags = 0
        for (var /* [auto-meaningful-name] */this$m_groupList = this.m_groupList; this$m_groupList; this$m_groupList = this$m_groupList.GetNext()) {
          this.m_allGroupFlags |= this$m_groupList.m_groupFlags
        }
        this.m_needsUpdateAllGroupFlags = false
      }
    }, {
      key: "AddContact",
      value: function (e, i, n) {
        var /* [auto-meaningful-name] */this$m_flagsBuffer$data = this.m_flagsBuffer.data
        var /* [auto-meaningful-name] */this$m_positionBuffer$data = this.m_positionBuffer.data
        var o = It.SubVV(this$m_positionBuffer$data[i], this$m_positionBuffer$data[e], t.AddContact_s_d)
        var a = It.DotVV(o, o)
        if (0 < a && a < this.m_squaredDiameter) {
          var u = yt(a)
          var l = this.m_contactBuffer.data[this.m_contactBuffer.Append()]
          l.indexA = e
          l.indexB = i
          l.flags = this$m_flagsBuffer$data[e] | this$m_flagsBuffer$data[i]
          l.weight = 1 - a * u * this.m_inverseDiameter
          l.normal.x = u * o.x
          l.normal.y = u * o.y
        }
      }
    }, {
      key: "FindContacts",
      value: function () {
        var /* [auto-meaningful-name] */this$m_proxyBuffer$count = this.m_proxyBuffer.count
        this.m_contactBuffer.count = 0
        for (var i = 0, n = 0; i < this$m_proxyBuffer$count; i++) {
          for (var s = t.computeRelativeTag(this.m_proxyBuffer.data[i].tag, 1, 0), r = i + 1; r < this$m_proxyBuffer$count && !(s < this.m_proxyBuffer.data[r].tag); r++) {
            this.AddContact(this.m_proxyBuffer.data[i].index, this.m_proxyBuffer.data[r].index, this.m_contactBuffer)
          }
          for (var o = t.computeRelativeTag(this.m_proxyBuffer.data[i].tag, -1, 1); n < this$m_proxyBuffer$count && !(o <= this.m_proxyBuffer.data[n].tag); n++) {
            ;
          }
          for (var a = t.computeRelativeTag(this.m_proxyBuffer.data[i].tag, 1, 1), u = n; u < this$m_proxyBuffer$count && !(a < this.m_proxyBuffer.data[u].tag); u++) {
            this.AddContact(this.m_proxyBuffer.data[i].index, this.m_proxyBuffer.data[u].index, this.m_contactBuffer)
          }
        }
      }
    }, {
      key: "UpdateProxies",
      value: function () {
        for (var /* [auto-meaningful-name] */this$m_positionBuffer$data = this.m_positionBuffer.data, /* [auto-meaningful-name] */this$m_inverseDiameter = this.m_inverseDiameter, n = 0; n < this.m_proxyBuffer.count; ++n) {
          var s = this.m_proxyBuffer.data[n]
          var r = this$m_positionBuffer$data[s.index]
          s.tag = t.computeTag(this$m_inverseDiameter * r.x, this$m_inverseDiameter * r.y)
        }
      }
    }, {
      key: "SortProxies",
      value: function () {
        _r(this.m_proxyBuffer.data, 0, this.m_proxyBuffer.count, Vr.CompareProxyProxy)
      }
    }, {
      key: "FilterContacts",
      value: function () {
        var t = this.GetParticleContactFilter()
        if (null !== t) {
          var e = this
          this.m_contactBuffer.RemoveIf(function (i) {
            return 0 !== (i.flags & Ys.b2_particleContactFilterParticle) && !t.ShouldCollideParticleParticle(e, i.indexA, i.indexB)
          })
        }
      }
    }, {
      key: "NotifyContactListenerPreContact",
      value: function (t, e) {
        if (null !== this.GetParticleContactListener()) {
          t.Initialize(this.m_contactBuffer, this.m_flagsBuffer)
          e.Initialize(this.m_contactBuffer, this.m_flagsBuffer)
        }
      }
    }, {
      key: "NotifyContactListenerPostContact",
      value: function (t, e) {
        var i = this.GetParticleContactListener()
        if (null !== i) {
          for (var n = 0; n < this.m_contactBuffer.count; ++n) {
            var s = this.m_contactBuffer.data[n]
            var r = t.Find(s)
            if (r >= 0) {
              t.Invalidate(r)
            } else {
              i.BeginContactParticleParticle(this, s)
            }
          }
          for (var o = 0; o < t.GetCount(); o++) {
            if (t.GetValidBuffer()[o]) {
              i.EndContactParticleParticle(this, t.GetBuffer()[o])
            }
          }
          var a = new Dr(this)
          a.Initialize(this.m_contactBuffer, this.m_flagsBuffer)
          for (var u = 0; u < a.GetCount(); u++) {
            var l = a.GetBuffer()[u]
            var h = e.Find(l)
            if (h >= 0) {
              e.Invalidate(h)
            } else {
              i.BeginContactParticleGroupParticleGroup(this, l)
            }
          }
          for (var _ = 0; _ < e.GetCount(); _++) {
            if (e.GetValidBuffer()[_]) {
              i.EndContactParticleGroupParticleGroup(this, e.GetBuffer()[_])
            }
          }
        }
      }
    }, {
      key: "UpdateContacts",
      value: function (e) {
        this.UpdateProxies()
        this.SortProxies()
        var i = new Gr()
        var n = new Dr(this)
        this.NotifyContactListenerPreContact(i, n)
        this.FindContacts()
        this.FilterContacts()
        this.NotifyContactListenerPostContact(i, n)
        if (e) {
          this.m_contactBuffer.RemoveIf(t.b2ParticleContactIsZombie)
        }
      }
    }, {
      key: "NotifyBodyContactListenerPreContact",
      value: function (t, e) {
        if (null !== this.GetFixtureContactListener()) {
          t.Initialize(this.m_bodyContactBuffer, this.m_flagsBuffer)
          e.Initialize(this.m_bodyContactBuffer, this.m_flagsBuffer)
        }
      }
    }, {
      key: "NotifyBodyContactListenerPostContact",
      value: function (t, e) {
        var i = this.GetFixtureContactListener()
        if (null !== i) {
          for (var n = 0; n < this.m_bodyContactBuffer.count; n++) {
            var s = this.m_bodyContactBuffer.data[n]
            var r = t.Find(s)
            if (r >= 0) {
              t.Invalidate(r)
            } else {
              i.BeginContactFixtureParticle(this, s)
            }
          }
          for (var o = 0; o < t.GetCount(); o++) {
            if (t.GetValidBuffer()[o]) {
              i.EndContactFixtureParticle(this, t.GetBuffer()[o])
            }
          }
          var a = new Ir(this)
          a.Initialize(this.m_bodyContactBuffer, this.m_flagsBuffer)
          for (var u = 0; u < a.GetCount(); u++) {
            var l = a.GetBuffer()[u]
            var h = e.Find(l)
            if (h >= 0) {
              e.Invalidate(h)
            } else {
              i.BeginContactBodyParticleGroup(this, l)
            }
          }
          for (var _ = 0; _ < e.GetCount(); _++) {
            if (e.GetValidBuffer()[_]) {
              i.EndContactBodyParticleGroup(this, e.GetBuffer()[_])
            }
          }
        }
      }
    }, {
      key: "UpdateBodyContacts",
      value: function () {
        var e = new Pr()
        var i = new Ir(this)
        this.NotifyBodyContactListenerPreContact(e, i)
        if (this.m_stuckThreshold > 0) {
          for (var n = this.GetParticleCount(), s = 0; s < n; s++) {
            this.m_bodyContactCountBuffer.data[s] = 0
            if (this.m_timestamp > this.m_lastBodyContactStepBuffer.data[s] + 1) {
              this.m_consecutiveContactStepsBuffer.data[s] = 0
            }
          }
        }
        this.m_bodyContactBuffer.SetCount(0)
        this.m_stuckParticleBuffer.SetCount(0)
        var /* [auto-meaningful-name] */t$UpdateBodyContacts_s_aabb = t.UpdateBodyContacts_s_aabb
        this.ComputeAABB(t$UpdateBodyContacts_s_aabb)
        if (null === this.UpdateBodyContacts_callback) {
          this.UpdateBodyContacts_callback = new Or(this)
        }
        var /* [auto-meaningful-name] */this$UpdateBodyContacts_callback = this.UpdateBodyContacts_callback
        this.m_world.QueryAABB(this$UpdateBodyContacts_callback, t$UpdateBodyContacts_s_aabb)
        if (this.m_def.strictContactCheck) {
          this.RemoveSpuriousBodyContacts()
        }
        this.NotifyBodyContactListenerPostContact(e, i)
      }
    }, {
      key: "Solve",
      value: function (e) {
        if (0 !== this.m_count && (this.m_expirationTimeBuffer.data && this.SolveLifetimes(e), this.m_allParticleFlags & Ys.b2_zombieParticle && this.SolveZombie(), this.m_needsUpdateAllParticleFlags && this.UpdateAllParticleFlags(), this.m_needsUpdateAllGroupFlags && this.UpdateAllGroupFlags(), !this.m_paused)) {
          for (this.m_iterationIndex = 0; this.m_iterationIndex < e.particleIterations; this.m_iterationIndex++) {
            ++this.m_timestamp
            var i = t.Solve_s_subStep.Copy(e)
            i.dt /= e.particleIterations
            i.inv_dt *= e.particleIterations
            this.UpdateContacts(false)
            this.UpdateBodyContacts()
            this.ComputeWeight()
            if (this.m_allGroupFlags & er.b2_particleGroupNeedsUpdateDepth) {
              this.ComputeDepth()
            }
            if (this.m_allParticleFlags & Ys.b2_reactiveParticle) {
              this.UpdatePairsAndTriadsWithReactiveParticles()
            }
            if (this.m_hasForce) {
              this.SolveForce(i)
            }
            if (this.m_allParticleFlags & Ys.b2_viscousParticle) {
              this.SolveViscous()
            }
            if (this.m_allParticleFlags & Ys.b2_repulsiveParticle) {
              this.SolveRepulsive(i)
            }
            if (this.m_allParticleFlags & Ys.b2_powderParticle) {
              this.SolvePowder(i)
            }
            if (this.m_allParticleFlags & Ys.b2_tensileParticle) {
              this.SolveTensile(i)
            }
            if (this.m_allGroupFlags & er.b2_solidParticleGroup) {
              this.SolveSolid(i)
            }
            if (this.m_allParticleFlags & Ys.b2_colorMixingParticle) {
              this.SolveColorMixing()
            }
            this.SolveGravity(i)
            if (this.m_allParticleFlags & Ys.b2_staticPressureParticle) {
              this.SolveStaticPressure(i)
            }
            this.SolvePressure(i)
            this.SolveDamping(i)
            if (this.m_allParticleFlags & t.k_extraDampingFlags) {
              this.SolveExtraDamping()
            }
            if (this.m_allParticleFlags & Ys.b2_elasticParticle) {
              this.SolveElastic(i)
            }
            if (this.m_allParticleFlags & Ys.b2_springParticle) {
              this.SolveSpring(i)
            }
            this.LimitVelocity(i)
            if (this.m_allGroupFlags & er.b2_rigidParticleGroup) {
              this.SolveRigidDamping()
            }
            if (this.m_allParticleFlags & Ys.b2_barrierParticle) {
              this.SolveBarrier(i)
            }
            this.SolveCollision(i)
            if (this.m_allGroupFlags & er.b2_rigidParticleGroup) {
              this.SolveRigid(i)
            }
            if (this.m_allParticleFlags & Ys.b2_wallParticle) {
              this.SolveWall()
            }
            for (var n = 0; n < this.m_count; n++) {
              var s = this.m_positionBuffer.data[n]
              s.SelfMulAdd(i.dt, this.m_velocityBuffer.data[n])
              var r = this.m_positionConstraintBuffer[n]
              if (r) {
                It.ClampV(s, r[0], r[1], s)
              }
            }
            this.m_positionConstraintBuffer.length = 0
          }
        }
      }
    }, {
      key: "SolveCollision",
      value: function (e) {
        var /* [auto-meaningful-name] */t$SolveCollision_s_aabb = t.SolveCollision_s_aabb
        var /* [auto-meaningful-name] */this$m_positionBuffer$data = this.m_positionBuffer.data
        var /* [auto-meaningful-name] */this$m_velocityBuffer$data = this.m_velocityBuffer.data
        var r = t$SolveCollision_s_aabb
        r.lowerBound.x = +c
        r.lowerBound.y = +c
        r.upperBound.x = -c
        r.upperBound.y = -c
        for (var o = 0; o < this.m_count; o++) {
          var a = this$m_velocityBuffer$data[o]
          var u = this$m_positionBuffer$data[o]
          var l = u.x + e.dt * a.x
          var h = u.y + e.dt * a.y
          r.lowerBound.x = _t(r.lowerBound.x, _t(u.x, l))
          r.lowerBound.y = _t(r.lowerBound.y, _t(u.y, h))
          r.upperBound.x = mt(r.upperBound.x, mt(u.x, l))
          r.upperBound.y = mt(r.upperBound.y, mt(u.y, h))
        }
        if (null === this.SolveCollision_callback) {
          this.SolveCollision_callback = new qr(this, e)
        }
        var /* [auto-meaningful-name] */this$SolveCollision_callback = this.SolveCollision_callback
        this$SolveCollision_callback.m_step = e
        this.m_world.QueryAABB(this$SolveCollision_callback, r)
      }
    }, {
      key: "LimitVelocity",
      value: function (t) {
        for (var /* [auto-meaningful-name] */this$m_velocityBuffer$data = this.m_velocityBuffer.data, i = this.GetCriticalVelocitySquared(t), n = 0; n < this.m_count; n++) {
          var s = this$m_velocityBuffer$data[n]
          var r = It.DotVV(s, s)
          if (r > i) {
            s.SelfMul(pt(i / r))
          }
        }
      }
    }, {
      key: "SolveGravity",
      value: function (e) {
        for (var /* [auto-meaningful-name] */t$SolveGravity_s_gravity = t.SolveGravity_s_gravity, /* [auto-meaningful-name] */this$m_velocityBuffer$data = this.m_velocityBuffer.data, s = It.MulSV(e.dt * this.m_def.gravityScale, this.m_world.GetGravity(), t$SolveGravity_s_gravity), r = 0; r < this.m_count; r++) {
          this$m_velocityBuffer$data[r].SelfAdd(s)
        }
      }
    }, {
      key: "SolveBarrier",
      value: function (e) {
        for (var /* [auto-meaningful-name] */t$SolveBarrier_s_aabb = t.SolveBarrier_s_aabb, /* [auto-meaningful-name] */t$SolveBarrier_s_va = t.SolveBarrier_s_va, /* [auto-meaningful-name] */t$SolveBarrier_s_vb = t.SolveBarrier_s_vb, /* [auto-meaningful-name] */t$SolveBarrier_s_pba = t.SolveBarrier_s_pba, /* [auto-meaningful-name] */t$SolveBarrier_s_vba = t.SolveBarrier_s_vba, /* [auto-meaningful-name] */t$SolveBarrier_s_vc = t.SolveBarrier_s_vc, /* [auto-meaningful-name] */t$SolveBarrier_s_pca = t.SolveBarrier_s_pca, /* [auto-meaningful-name] */t$SolveBarrier_s_vca = t.SolveBarrier_s_vca, /* [auto-meaningful-name] */t$SolveBarrier_s_qba = t.SolveBarrier_s_qba, /* [auto-meaningful-name] */t$SolveBarrier_s_qca = t.SolveBarrier_s_qca, /* [auto-meaningful-name] */t$SolveBarrier_s_dv = t.SolveBarrier_s_dv, /* [auto-meaningful-name] */t$SolveBarrier_s_f = t.SolveBarrier_s_f, /* [auto-meaningful-name] */this$m_positionBuffer$data = this.m_positionBuffer.data, /* [auto-meaningful-name] */this$m_velocityBuffer$data = this.m_velocityBuffer.data, v = 0; v < this.m_count; v++) {
          if (0 !== (this.m_flagsBuffer.data[v] & t.k_barrierWallFlags)) {
            this$m_velocityBuffer$data[v].SetZero()
          }
        }
        for (var y = J * e.dt, p = this.GetParticleMass(), x = 0; x < this.m_pairBuffer.count; x++) {
          var B = this.m_pairBuffer.data[x]
          if (B.flags & Ys.b2_barrierParticle) {
            var /* [auto-meaningful-name] */B$indexA = B.indexA
            var /* [auto-meaningful-name] */B$indexB = B.indexB
            var C = this$m_positionBuffer$data[B$indexA]
            var b = this$m_positionBuffer$data[B$indexB]
            var g = t$SolveBarrier_s_aabb
            It.MinV(C, b, g.lowerBound)
            It.MaxV(C, b, g.upperBound)
            for (var V = this.m_groupBuffer[B$indexA], w = this.m_groupBuffer[B$indexB], k = this.GetLinearVelocity(V, B$indexA, C, t$SolveBarrier_s_va), M = this.GetLinearVelocity(w, B$indexB, b, t$SolveBarrier_s_vb), P = It.SubVV(b, C, t$SolveBarrier_s_pba), I = It.SubVV(M, k, t$SolveBarrier_s_vba), G = this.GetInsideBoundsEnumerator(g), D = undefined; (D = G.GetNext()) >= 0;) {
              var F = this$m_positionBuffer$data[D]
              var L = this.m_groupBuffer[D]
              if (V !== L && w !== L) {
                var R = this.GetLinearVelocity(L, D, F, t$SolveBarrier_s_vc)
                var j = It.SubVV(F, C, t$SolveBarrier_s_pca)
                var T = It.SubVV(R, k, t$SolveBarrier_s_vca)
                var O = It.CrossVV(I, T)
                var q = It.CrossVV(P, T) - It.CrossVV(j, I)
                var z = It.CrossVV(P, j)
                var E = undefined
                var N = undefined
                var X = t$SolveBarrier_s_qba
                var Z = t$SolveBarrier_s_qca
                if (0 === O) {
                  if (0 === q) {
                    continue
                  }
                  if (!((N = -z / q) >= 0 && N < y)) {
                    continue
                  }
                  It.AddVMulSV(P, N, I, X)
                  It.AddVMulSV(j, N, T, Z)
                  if (!((E = It.DotVV(X, Z) / It.DotVV(X, X)) >= 0 && E <= 1)) {
                    continue
                  }
                } else {
                  var U = q * q - 4 * z * O
                  if (U < 0) {
                    continue
                  }
                  var W = pt(U)
                  var Q = (-q - W) / (2 * O)
                  var Y = (-q + W) / (2 * O)
                  if (Q > Y) {
                    var K = Q
                    Q = Y
                    Y = K
                  }
                  N = Q
                  It.AddVMulSV(P, N, I, X)
                  It.AddVMulSV(j, N, T, Z)
                  E = It.DotVV(X, Z) / It.DotVV(X, X)
                  if (!(N >= 0 && N < y && E >= 0 && E <= 1)) {
                    if (!((N = Y) >= 0 && N < y)) {
                      continue
                    }
                    It.AddVMulSV(P, N, I, X)
                    It.AddVMulSV(j, N, T, Z)
                    if (!((E = It.DotVV(X, Z) / It.DotVV(X, X)) >= 0 && E <= 1)) {
                      continue
                    }
                  }
                }
                var H = t$SolveBarrier_s_dv
                H.x = k.x + E * I.x - R.x
                H.y = k.y + E * I.y - R.y
                var $ = It.MulSV(p, H, t$SolveBarrier_s_f)
                if (L && this.IsRigidGroup(L)) {
                  var tt = L.GetMass()
                  var et = L.GetInertia()
                  if (tt > 0) {
                    L.m_linearVelocity.SelfMulAdd(1 / tt, $)
                  }
                  if (et > 0) {
                    L.m_angularVelocity += It.CrossVV(It.SubVV(F, L.GetCenter(), It.s_t0), $) / et
                  }
                } else {
                  this$m_velocityBuffer$data[D].SelfAdd(H)
                }
                this.ParticleApplyForce(D, $.SelfMul(-e.inv_dt))
              }
            }
          }
        }
      }
    }, {
      key: "SolveStaticPressure",
      value: function (t) {
        this.m_staticPressureBuffer = this.RequestBuffer(this.m_staticPressureBuffer)
        for (var e = this.GetCriticalPressure(t), i = this.m_def.staticPressureStrength * e, n = O * e, /* [auto-meaningful-name] */this$m_def$staticPressureRelaxation = this.m_def.staticPressureRelaxation, r = 0; r < this.m_def.staticPressureIterations; r++) {
          for (var o = 0; o < this.m_count; o++) {
            this.m_accumulationBuffer[o] = 0
          }
          for (var a = 0; a < this.m_contactBuffer.count; a++) {
            var u = this.m_contactBuffer.data[a]
            if (u.flags & Ys.b2_staticPressureParticle) {
              var /* [auto-meaningful-name] */u$indexA = u.indexA
              var /* [auto-meaningful-name] */u$indexB = u.indexB
              var /* [auto-meaningful-name] */u$weight = u.weight
              this.m_accumulationBuffer[u$indexA] += u$weight * this.m_staticPressureBuffer[u$indexB]
              this.m_accumulationBuffer[u$indexB] += u$weight * this.m_staticPressureBuffer[u$indexA]
            }
          }
          for (var m = 0; m < this.m_count; m++) {
            var c = this.m_weightBuffer[m]
            if (this.m_flagsBuffer.data[m] & Ys.b2_staticPressureParticle) {
              var f = (this.m_accumulationBuffer[m] + i * (c - T)) / (c + this$m_def$staticPressureRelaxation)
              this.m_staticPressureBuffer[m] = ct(f, 0, n)
            } else {
              this.m_staticPressureBuffer[m] = 0
            }
          }
        }
      }
    }, {
      key: "ComputeWeight",
      value: function () {
        for (var t = 0; t < this.m_count; t++) {
          this.m_weightBuffer[t] = 0
        }
        for (var e = 0; e < this.m_bodyContactBuffer.count; e++) {
          var i = this.m_bodyContactBuffer.data[e]
          var /* [auto-meaningful-name] */i$index = i.index
          var /* [auto-meaningful-name] */i$weight = i.weight
          this.m_weightBuffer[i$index] += i$weight
        }
        for (var r = 0; r < this.m_contactBuffer.count; r++) {
          var o = this.m_contactBuffer.data[r]
          var /* [auto-meaningful-name] */o$indexA = o.indexA
          var /* [auto-meaningful-name] */o$indexB = o.indexB
          var /* [auto-meaningful-name] */o$weight = o.weight
          this.m_weightBuffer[o$indexA] += o$weight
          this.m_weightBuffer[o$indexB] += o$weight
        }
      }
    }, {
      key: "SolvePressure",
      value: function (e) {
        for (var /* [auto-meaningful-name] */t$SolvePressure_s_f = t.SolvePressure_s_f, /* [auto-meaningful-name] */this$m_positionBuffer$data = this.m_positionBuffer.data, /* [auto-meaningful-name] */this$m_velocityBuffer$data = this.m_velocityBuffer.data, r = this.GetCriticalPressure(e), o = this.m_def.pressureStrength * r, a = O * r, u = 0; u < this.m_count; u++) {
          var l = o * mt(0, this.m_weightBuffer[u] - T)
          this.m_accumulationBuffer[u] = _t(l, a)
        }
        if (this.m_allParticleFlags & t.k_noPressureFlags) {
          for (var h = 0; h < this.m_count; h++) {
            if (this.m_flagsBuffer.data[h] & t.k_noPressureFlags) {
              this.m_accumulationBuffer[h] = 0
            }
          }
        }
        if (this.m_allParticleFlags & Ys.b2_staticPressureParticle) {
          for (var _ = 0; _ < this.m_count; _++) {
            if (this.m_flagsBuffer.data[_] & Ys.b2_staticPressureParticle) {
              this.m_accumulationBuffer[_] += this.m_staticPressureBuffer[_]
            }
          }
        }
        for (var m = e.dt / (this.m_def.density * this.m_particleDiameter), c = this.GetParticleInvMass(), f = 0; f < this.m_bodyContactBuffer.count; f++) {
          var d = this.m_bodyContactBuffer.data[f]
          var /* [auto-meaningful-name] */d$index = d.index
          var /* [auto-meaningful-name] */d$body = d.body
          var /* [auto-meaningful-name] */d$weight = d.weight
          var /* [auto-meaningful-name] */d$mass = d.mass
          var /* [auto-meaningful-name] */d$normal = d.normal
          var S = this$m_positionBuffer$data[d$index]
          var A = this.m_accumulationBuffer[d$index] + o * d$weight
          var C = It.MulSV(m * d$weight * d$mass * A, d$normal, t$SolvePressure_s_f)
          this$m_velocityBuffer$data[d$index].SelfMulSub(c, C)
          d$body.ApplyLinearImpulse(C, S, true)
        }
        for (var b = 0; b < this.m_contactBuffer.count; b++) {
          var g = this.m_contactBuffer.data[b]
          var /* [auto-meaningful-name] */g$indexA = g.indexA
          var /* [auto-meaningful-name] */g$indexB = g.indexB
          var /* [auto-meaningful-name] */g$weight = g.weight
          var /* [auto-meaningful-name] */g$normal = g.normal
          var P = this.m_accumulationBuffer[g$indexA] + this.m_accumulationBuffer[g$indexB]
          var I = It.MulSV(m * g$weight * P, g$normal, t$SolvePressure_s_f)
          this$m_velocityBuffer$data[g$indexA].SelfSub(I)
          this$m_velocityBuffer$data[g$indexB].SelfAdd(I)
        }
      }
    }, {
      key: "SolveDamping",
      value: function (e) {
        for (var /* [auto-meaningful-name] */t$SolveDamping_s_v = t.SolveDamping_s_v, /* [auto-meaningful-name] */t$SolveDamping_s_f = t.SolveDamping_s_f, /* [auto-meaningful-name] */this$m_positionBuffer$data = this.m_positionBuffer.data, /* [auto-meaningful-name] */this$m_velocityBuffer$data = this.m_velocityBuffer.data, /* [auto-meaningful-name] */this$m_def$dampingStrength = this.m_def.dampingStrength, a = 1 / this.GetCriticalVelocity(e), u = this.GetParticleInvMass(), l = 0; l < this.m_bodyContactBuffer.count; l++) {
          var h = this.m_bodyContactBuffer.data[l]
          var /* [auto-meaningful-name] */h$index = h.index
          var /* [auto-meaningful-name] */h$body = h.body
          var /* [auto-meaningful-name] */h$weight = h.weight
          var /* [auto-meaningful-name] */h$mass = h.mass
          var /* [auto-meaningful-name] */h$normal = h.normal
          var v = this$m_positionBuffer$data[h$index]
          var y = It.SubVV(h$body.GetLinearVelocityFromWorldPoint(v, It.s_t0), this$m_velocityBuffer$data[h$index], t$SolveDamping_s_v)
          var p = It.DotVV(y, h$normal)
          if (p < 0) {
            var x = mt(this$m_def$dampingStrength * h$weight, _t(-a * p, .5))
            var B = It.MulSV(x * h$mass * p, h$normal, t$SolveDamping_s_f)
            this$m_velocityBuffer$data[h$index].SelfMulAdd(u, B)
            h$body.ApplyForce(B.SelfNeg(), v, true)
          }
        }
        for (var S = 0; S < this.m_contactBuffer.count; S++) {
          var A = this.m_contactBuffer.data[S]
          var /* [auto-meaningful-name] */A$indexA = A.indexA
          var /* [auto-meaningful-name] */A$indexB = A.indexB
          var /* [auto-meaningful-name] */A$weight = A.weight
          var /* [auto-meaningful-name] */A$normal = A.normal
          var w = It.SubVV(this$m_velocityBuffer$data[A$indexB], this$m_velocityBuffer$data[A$indexA], t$SolveDamping_s_v)
          var k = It.DotVV(w, A$normal)
          if (k < 0) {
            var M = mt(this$m_def$dampingStrength * A$weight, _t(-a * k, .5))
            var P = It.MulSV(M * k, A$normal, t$SolveDamping_s_f)
            this$m_velocityBuffer$data[A$indexA].SelfAdd(P)
            this$m_velocityBuffer$data[A$indexB].SelfSub(P)
          }
        }
      }
    }, {
      key: "SolveRigidDamping",
      value: function () {
        for (var /* [auto-meaningful-name] */t$SolveRigidDamping_s_t0 = t.SolveRigidDamping_s_t0, /* [auto-meaningful-name] */t$SolveRigidDamping_s_t1 = t.SolveRigidDamping_s_t1, /* [auto-meaningful-name] */t$SolveRigidDamping_s_p = t.SolveRigidDamping_s_p, /* [auto-meaningful-name] */t$SolveRigidDamping_s_v = t.SolveRigidDamping_s_v, r = [0], o = [0], a = [0], u = [0], l = [0], h = [0], /* [auto-meaningful-name] */this$m_positionBuffer$data = this.m_positionBuffer.data, /* [auto-meaningful-name] */this$m_def$dampingStrength = this.m_def.dampingStrength, c = 0; c < this.m_bodyContactBuffer.count; c++) {
          var f = this.m_bodyContactBuffer.data[c]
          var /* [auto-meaningful-name] */f$index = f.index
          var v = this.m_groupBuffer[f$index]
          if (v && this.IsRigidGroup(v)) {
            var /* [auto-meaningful-name] */f$body = f.body
            var /* [auto-meaningful-name] */f$normal = f.normal
            var /* [auto-meaningful-name] */f$weight = f.weight
            var B = this$m_positionBuffer$data[f$index]
            var S = It.SubVV(f$body.GetLinearVelocityFromWorldPoint(B, t$SolveRigidDamping_s_t0), v.GetLinearVelocityFromWorldPoint(B, t$SolveRigidDamping_s_t1), t$SolveRigidDamping_s_v)
            var A = It.DotVV(S, f$normal)
            if (A < 0) {
              this.InitDampingParameterWithRigidGroupOrParticle(r, o, a, true, v, f$index, B, f$normal)
              this.InitDampingParameter(u, l, h, f$body.GetMass(), f$body.GetInertia() - f$body.GetMass() * f$body.GetLocalCenter().LengthSquared(), f$body.GetWorldCenter(), B, f$normal)
              var C = this$m_def$dampingStrength * _t(f$weight, 1) * this.ComputeDampingImpulse(r[0], o[0], a[0], u[0], l[0], h[0], A)
              this.ApplyDamping(r[0], o[0], a[0], true, v, f$index, C, f$normal)
              f$body.ApplyLinearImpulse(It.MulSV(-C, f$normal, It.s_t0), B, true)
            }
          }
        }
        for (var b = 0; b < this.m_contactBuffer.count; b++) {
          var g = this.m_contactBuffer.data[b]
          var /* [auto-meaningful-name] */g$indexA = g.indexA
          var /* [auto-meaningful-name] */g$indexB = g.indexB
          var /* [auto-meaningful-name] */g$normal = g.normal
          var /* [auto-meaningful-name] */g$weight = g.weight
          var P = this.m_groupBuffer[g$indexA]
          var I = this.m_groupBuffer[g$indexB]
          var G = this.IsRigidGroup(P)
          var D = this.IsRigidGroup(I)
          if (P !== I && (G || D)) {
            var F = It.MidVV(this$m_positionBuffer$data[g$indexA], this$m_positionBuffer$data[g$indexB], t$SolveRigidDamping_s_p)
            var L = It.SubVV(this.GetLinearVelocity(I, g$indexB, F, t$SolveRigidDamping_s_t0), this.GetLinearVelocity(P, g$indexA, F, t$SolveRigidDamping_s_t1), t$SolveRigidDamping_s_v)
            var R = It.DotVV(L, g$normal)
            if (R < 0) {
              this.InitDampingParameterWithRigidGroupOrParticle(r, o, a, G, P, g$indexA, F, g$normal)
              this.InitDampingParameterWithRigidGroupOrParticle(u, l, h, D, I, g$indexB, F, g$normal)
              var j = this$m_def$dampingStrength * g$weight * this.ComputeDampingImpulse(r[0], o[0], a[0], u[0], l[0], h[0], R)
              this.ApplyDamping(r[0], o[0], a[0], G, P, g$indexA, j, g$normal)
              this.ApplyDamping(u[0], l[0], h[0], D, I, g$indexB, -j, g$normal)
            }
          }
        }
      }
    }, {
      key: "SolveExtraDamping",
      value: function () {
        for (var /* [auto-meaningful-name] */t$SolveExtraDamping_s_v = t.SolveExtraDamping_s_v, /* [auto-meaningful-name] */t$SolveExtraDamping_s_f = t.SolveExtraDamping_s_f, /* [auto-meaningful-name] */this$m_velocityBuffer$data = this.m_velocityBuffer.data, /* [auto-meaningful-name] */this$m_positionBuffer$data = this.m_positionBuffer.data, r = this.GetParticleInvMass(), o = 0; o < this.m_bodyContactBuffer.count; o++) {
          var a = this.m_bodyContactBuffer.data[o]
          var /* [auto-meaningful-name] */a$index = a.index
          if (this.m_flagsBuffer.data[a$index] & t.k_extraDampingFlags) {
            var /* [auto-meaningful-name] */a$body = a.body
            var /* [auto-meaningful-name] */a$mass = a.mass
            var /* [auto-meaningful-name] */a$normal = a.normal
            var m = this$m_positionBuffer$data[a$index]
            var c = It.SubVV(a$body.GetLinearVelocityFromWorldPoint(m, It.s_t0), this$m_velocityBuffer$data[a$index], t$SolveExtraDamping_s_v)
            var f = It.DotVV(c, a$normal)
            if (f < 0) {
              var d = It.MulSV(.5 * a$mass * f, a$normal, t$SolveExtraDamping_s_f)
              this$m_velocityBuffer$data[a$index].SelfMulAdd(r, d)
              a$body.ApplyLinearImpulse(d.SelfNeg(), m, true)
            }
          }
        }
      }
    }, {
      key: "SolveWall",
      value: function () {
        for (var /* [auto-meaningful-name] */this$m_velocityBuffer$data = this.m_velocityBuffer.data, e = 0; e < this.m_count; e++) {
          if (this.m_flagsBuffer.data[e] & Ys.b2_wallParticle) {
            this$m_velocityBuffer$data[e].SetZero()
          }
        }
      }
    }, {
      key: "SolveRigid",
      value: function (e) {
        for (var /* [auto-meaningful-name] */t$SolveRigid_s_position = t.SolveRigid_s_position, /* [auto-meaningful-name] */t$SolveRigid_s_rotation = t.SolveRigid_s_rotation, /* [auto-meaningful-name] */t$SolveRigid_s_transform = t.SolveRigid_s_transform, /* [auto-meaningful-name] */t$SolveRigid_s_velocityTransform = t.SolveRigid_s_velocityTransform, /* [auto-meaningful-name] */this$m_positionBuffer$data = this.m_positionBuffer.data, /* [auto-meaningful-name] */this$m_velocityBuffer$data = this.m_velocityBuffer.data, /* [auto-meaningful-name] */this$m_groupList = this.m_groupList; this$m_groupList; this$m_groupList = this$m_groupList.GetNext()) {
          if (this$m_groupList.m_groupFlags & er.b2_rigidParticleGroup) {
            this$m_groupList.UpdateStatistics()
            var l = t$SolveRigid_s_rotation
            l.SetAngle(e.dt * this$m_groupList.m_angularVelocity)
            var h = It.AddVV(this$m_groupList.m_center, It.SubVV(It.MulSV(e.dt, this$m_groupList.m_linearVelocity, It.s_t0), jt.MulRV(l, this$m_groupList.m_center, It.s_t1), It.s_t0), t$SolveRigid_s_position)
            var _ = t$SolveRigid_s_transform
            _.SetPositionRotation(h, l)
            Tt.MulXX(_, this$m_groupList.m_transform, this$m_groupList.m_transform)
            var m = t$SolveRigid_s_velocityTransform
            m.p.x = e.inv_dt * _.p.x
            m.p.y = e.inv_dt * _.p.y
            m.q.s = e.inv_dt * _.q.s
            m.q.c = e.inv_dt * (_.q.c - 1)
            for (var /* [auto-meaningful-name] */this$m_groupList$m_firstIndex = this$m_groupList.m_firstIndex; this$m_groupList$m_firstIndex < this$m_groupList.m_lastIndex; this$m_groupList$m_firstIndex++) {
              Tt.MulXV(m, this$m_positionBuffer$data[this$m_groupList$m_firstIndex], this$m_velocityBuffer$data[this$m_groupList$m_firstIndex])
            }
          }
        }
      }
    }, {
      key: "SolveElastic",
      value: function (e) {
        for (var /* [auto-meaningful-name] */t$SolveElastic_s_pa = t.SolveElastic_s_pa, /* [auto-meaningful-name] */t$SolveElastic_s_pb = t.SolveElastic_s_pb, /* [auto-meaningful-name] */t$SolveElastic_s_pc = t.SolveElastic_s_pc, /* [auto-meaningful-name] */t$SolveElastic_s_r = t.SolveElastic_s_r, /* [auto-meaningful-name] */t$SolveElastic_s_t0 = t.SolveElastic_s_t0, /* [auto-meaningful-name] */this$m_positionBuffer$data = this.m_positionBuffer.data, /* [auto-meaningful-name] */this$m_velocityBuffer$data = this.m_velocityBuffer.data, l = e.inv_dt * this.m_def.elasticStrength, h = 0; h < this.m_triadBuffer.count; h++) {
          var _ = this.m_triadBuffer.data[h]
          if (_.flags & Ys.b2_elasticParticle) {
            var /* [auto-meaningful-name] */_$indexA = _.indexA
            var /* [auto-meaningful-name] */_$indexB = _.indexB
            var /* [auto-meaningful-name] */_$indexC = _.indexC
            var d = t$SolveElastic_s_pa.Copy(this$m_positionBuffer$data[_$indexA])
            var v = t$SolveElastic_s_pb.Copy(this$m_positionBuffer$data[_$indexB])
            var y = t$SolveElastic_s_pc.Copy(this$m_positionBuffer$data[_$indexC])
            var p = this$m_velocityBuffer$data[_$indexA]
            var x = this$m_velocityBuffer$data[_$indexB]
            var B = this$m_velocityBuffer$data[_$indexC]
            d.SelfMulAdd(e.dt, p)
            v.SelfMulAdd(e.dt, x)
            y.SelfMulAdd(e.dt, B)
            var S = (d.x + v.x + y.x) / 3
            var A = (d.y + v.y + y.y) / 3
            d.x -= S
            d.y -= A
            v.x -= S
            v.y -= A
            y.x -= S
            y.y -= A
            var C = _.pa
            var b = _.pb
            var g = _.pc
            var V = t$SolveElastic_s_r
            V.s = It.CrossVV(C, d) + It.CrossVV(b, v) + It.CrossVV(g, y)
            V.c = It.DotVV(C, d) + It.DotVV(b, v) + It.DotVV(g, y)
            var w = yt(V.s * V.s + V.c * V.c)
            if (!isFinite(w)) {
              w = 198177537e11
            }
            V.s *= w
            V.c *= w
            var k = l * ("number" === typeof _.strength ? _.strength : _.strength())
            jt.MulRV(V, C, t$SolveElastic_s_t0)
            It.SubVV(t$SolveElastic_s_t0, d, t$SolveElastic_s_t0)
            It.MulSV(k, t$SolveElastic_s_t0, t$SolveElastic_s_t0)
            p.SelfAdd(t$SolveElastic_s_t0)
            jt.MulRV(V, b, t$SolveElastic_s_t0)
            It.SubVV(t$SolveElastic_s_t0, v, t$SolveElastic_s_t0)
            It.MulSV(k, t$SolveElastic_s_t0, t$SolveElastic_s_t0)
            x.SelfAdd(t$SolveElastic_s_t0)
            jt.MulRV(V, g, t$SolveElastic_s_t0)
            It.SubVV(t$SolveElastic_s_t0, y, t$SolveElastic_s_t0)
            It.MulSV(k, t$SolveElastic_s_t0, t$SolveElastic_s_t0)
            B.SelfAdd(t$SolveElastic_s_t0)
          }
        }
      }
    }, {
      key: "SolveSpring",
      value: function (e) {
        for (var /* [auto-meaningful-name] */t$SolveSpring_s_pa = t.SolveSpring_s_pa, /* [auto-meaningful-name] */t$SolveSpring_s_pb = t.SolveSpring_s_pb, /* [auto-meaningful-name] */t$SolveSpring_s_d = t.SolveSpring_s_d, /* [auto-meaningful-name] */t$SolveSpring_s_f = t.SolveSpring_s_f, /* [auto-meaningful-name] */this$m_positionBuffer$data = this.m_positionBuffer.data, /* [auto-meaningful-name] */this$m_velocityBuffer$data = this.m_velocityBuffer.data, u = e.inv_dt * this.m_def.springStrength, l = 0; l < this.m_pairBuffer.count; l++) {
          var h = this.m_pairBuffer.data[l]
          if (h.flags & Ys.b2_springParticle) {
            var /* [auto-meaningful-name] */h$indexA = h.indexA
            var /* [auto-meaningful-name] */h$indexB = h.indexB
            var c = t$SolveSpring_s_pa.Copy(this$m_positionBuffer$data[h$indexA])
            var f = t$SolveSpring_s_pb.Copy(this$m_positionBuffer$data[h$indexB])
            var d = this$m_velocityBuffer$data[h$indexA]
            var v = this$m_velocityBuffer$data[h$indexB]
            c.SelfMulAdd(e.dt, d)
            f.SelfMulAdd(e.dt, v)
            var y = It.SubVV(f, c, t$SolveSpring_s_d)
            var /* [auto-meaningful-name] */h$distance = h.distance
            var x = y.Length()
            var B = u * h.strength
            var S = It.MulSV(B * (h$distance - x) / x, y, t$SolveSpring_s_f)
            d.SelfSub(S)
            v.SelfAdd(S)
          }
        }
      }
    }, {
      key: "SolveTensile",
      value: function (e) {
        for (var /* [auto-meaningful-name] */t$SolveTensile_s_weightedNormal = t.SolveTensile_s_weightedNormal, /* [auto-meaningful-name] */t$SolveTensile_s_s = t.SolveTensile_s_s, /* [auto-meaningful-name] */t$SolveTensile_s_f = t.SolveTensile_s_f, /* [auto-meaningful-name] */this$m_velocityBuffer$data = this.m_velocityBuffer.data, o = 0; o < this.m_count; o++) {
          this.m_accumulation2Buffer[o] = new It()
          this.m_accumulation2Buffer[o].SetZero()
        }
        for (var a = 0; a < this.m_contactBuffer.count; a++) {
          var u = this.m_contactBuffer.data[a]
          if (u.flags & Ys.b2_tensileParticle) {
            var /* [auto-meaningful-name] */u$indexA = u.indexA
            var /* [auto-meaningful-name] */u$indexB = u.indexB
            var /* [auto-meaningful-name] */u$weight = u.weight
            var /* [auto-meaningful-name] */u$normal = u.normal
            var c = It.MulSV((1 - u$weight) * u$weight, u$normal, t$SolveTensile_s_weightedNormal)
            this.m_accumulation2Buffer[u$indexA].SelfSub(c)
            this.m_accumulation2Buffer[u$indexB].SelfAdd(c)
          }
        }
        for (var f = this.GetCriticalVelocity(e), d = this.m_def.surfaceTensionPressureStrength * f, v = this.m_def.surfaceTensionNormalStrength * f, y = q * f, p = 0; p < this.m_contactBuffer.count; p++) {
          var x = this.m_contactBuffer.data[p]
          if (x.flags & Ys.b2_tensileParticle) {
            var /* [auto-meaningful-name] */x$indexA = x.indexA
            var /* [auto-meaningful-name] */x$indexB = x.indexB
            var /* [auto-meaningful-name] */x$weight = x.weight
            var /* [auto-meaningful-name] */x$normal = x.normal
            var b = this.m_weightBuffer[x$indexA] + this.m_weightBuffer[x$indexB]
            var g = It.SubVV(this.m_accumulation2Buffer[x$indexB], this.m_accumulation2Buffer[x$indexA], t$SolveTensile_s_s)
            var V = _t(d * (b - 2) + v * It.DotVV(g, x$normal), y) * x$weight
            var w = It.MulSV(V, x$normal, t$SolveTensile_s_f)
            this$m_velocityBuffer$data[x$indexA].SelfSub(w)
            this$m_velocityBuffer$data[x$indexB].SelfAdd(w)
          }
        }
      }
    }, {
      key: "SolveViscous",
      value: function () {
        for (var /* [auto-meaningful-name] */t$SolveViscous_s_v = t.SolveViscous_s_v, /* [auto-meaningful-name] */t$SolveViscous_s_f = t.SolveViscous_s_f, /* [auto-meaningful-name] */this$m_positionBuffer$data = this.m_positionBuffer.data, /* [auto-meaningful-name] */this$m_velocityBuffer$data = this.m_velocityBuffer.data, /* [auto-meaningful-name] */this$m_def$viscousStrength = this.m_def.viscousStrength, o = this.GetParticleInvMass(), a = 0; a < this.m_bodyContactBuffer.count; a++) {
          var u = this.m_bodyContactBuffer.data[a]
          var /* [auto-meaningful-name] */u$index = u.index
          if (this.m_flagsBuffer.data[u$index] & Ys.b2_viscousParticle) {
            var /* [auto-meaningful-name] */u$body = u.body
            var /* [auto-meaningful-name] */u$weight = u.weight
            var /* [auto-meaningful-name] */u$mass = u.mass
            var c = this$m_positionBuffer$data[u$index]
            var f = It.SubVV(u$body.GetLinearVelocityFromWorldPoint(c, It.s_t0), this$m_velocityBuffer$data[u$index], t$SolveViscous_s_v)
            var d = It.MulSV(this$m_def$viscousStrength * u$mass * u$weight, f, t$SolveViscous_s_f)
            this$m_velocityBuffer$data[u$index].SelfMulAdd(o, d)
            u$body.ApplyLinearImpulse(d.SelfNeg(), c, true)
          }
        }
        for (var v = 0; v < this.m_contactBuffer.count; v++) {
          var y = this.m_contactBuffer.data[v]
          if (y.flags & Ys.b2_viscousParticle) {
            var /* [auto-meaningful-name] */y$indexA = y.indexA
            var /* [auto-meaningful-name] */y$indexB = y.indexB
            var /* [auto-meaningful-name] */y$weight = y.weight
            var S = It.SubVV(this$m_velocityBuffer$data[y$indexB], this$m_velocityBuffer$data[y$indexA], t$SolveViscous_s_v)
            var A = It.MulSV(this$m_def$viscousStrength * y$weight, S, t$SolveViscous_s_f)
            this$m_velocityBuffer$data[y$indexA].SelfAdd(A)
            this$m_velocityBuffer$data[y$indexB].SelfSub(A)
          }
        }
      }
    }, {
      key: "SolveRepulsive",
      value: function (e) {
        for (var /* [auto-meaningful-name] */t$SolveRepulsive_s_f = t.SolveRepulsive_s_f, /* [auto-meaningful-name] */this$m_velocityBuffer$data = this.m_velocityBuffer.data, s = this.m_def.repulsiveStrength * this.GetCriticalVelocity(e), r = 0; r < this.m_contactBuffer.count; r++) {
          var o = this.m_contactBuffer.data[r]
          if (o.flags & Ys.b2_repulsiveParticle) {
            var /* [auto-meaningful-name] */o$indexA = o.indexA
            var /* [auto-meaningful-name] */o$indexB = o.indexB
            if (this.m_groupBuffer[o$indexA] !== this.m_groupBuffer[o$indexB]) {
              var /* [auto-meaningful-name] */o$weight = o.weight
              var /* [auto-meaningful-name] */o$normal = o.normal
              var _ = It.MulSV(s * o$weight, o$normal, t$SolveRepulsive_s_f)
              this$m_velocityBuffer$data[o$indexA].SelfSub(_)
              this$m_velocityBuffer$data[o$indexB].SelfAdd(_)
            }
          }
        }
      }
    }, {
      key: "SolvePowder",
      value: function (e) {
        for (var /* [auto-meaningful-name] */t$SolvePowder_s_f = t.SolvePowder_s_f, /* [auto-meaningful-name] */this$m_positionBuffer$data = this.m_positionBuffer.data, /* [auto-meaningful-name] */this$m_velocityBuffer$data = this.m_velocityBuffer.data, r = this.m_def.powderStrength * this.GetCriticalVelocity(e), o = 1 - j, a = this.GetParticleInvMass(), u = 0; u < this.m_bodyContactBuffer.count; u++) {
          var l = this.m_bodyContactBuffer.data[u]
          var /* [auto-meaningful-name] */l$index = l.index
          if (this.m_flagsBuffer.data[l$index] & Ys.b2_powderParticle) {
            var /* [auto-meaningful-name] */l$weight = l.weight
            if (l$weight > o) {
              var /* [auto-meaningful-name] */l$body = l.body
              var /* [auto-meaningful-name] */l$mass = l.mass
              var f = this$m_positionBuffer$data[l$index]
              var /* [auto-meaningful-name] */l$normal = l.normal
              var v = It.MulSV(r * l$mass * (l$weight - o), l$normal, t$SolvePowder_s_f)
              this$m_velocityBuffer$data[l$index].SelfMulSub(a, v)
              l$body.ApplyLinearImpulse(v, f, true)
            }
          }
        }
        for (var y = 0; y < this.m_contactBuffer.count; y++) {
          var p = this.m_contactBuffer.data[y]
          if (p.flags & Ys.b2_powderParticle) {
            var /* [auto-meaningful-name] */p$weight = p.weight
            if (p$weight > o) {
              var /* [auto-meaningful-name] */p$indexA = p.indexA
              var /* [auto-meaningful-name] */p$indexB = p.indexB
              var /* [auto-meaningful-name] */p$normal = p.normal
              var C = It.MulSV(r * (p$weight - o), p$normal, t$SolvePowder_s_f)
              this$m_velocityBuffer$data[p$indexA].SelfSub(C)
              this$m_velocityBuffer$data[p$indexB].SelfAdd(C)
            }
          }
        }
      }
    }, {
      key: "SolveSolid",
      value: function (e) {
        var /* [auto-meaningful-name] */t$SolveSolid_s_f = t.SolveSolid_s_f
        var /* [auto-meaningful-name] */this$m_velocityBuffer$data = this.m_velocityBuffer.data
        this.m_depthBuffer = this.RequestBuffer(this.m_depthBuffer)
        for (var s = e.inv_dt * this.m_def.ejectionStrength, r = 0; r < this.m_contactBuffer.count; r++) {
          var o = this.m_contactBuffer.data[r]
          var /* [auto-meaningful-name] */o$indexA = o.indexA
          var /* [auto-meaningful-name] */o$indexB = o.indexB
          if (this.m_groupBuffer[o$indexA] !== this.m_groupBuffer[o$indexB]) {
            var /* [auto-meaningful-name] */o$weight = o.weight
            var /* [auto-meaningful-name] */o$normal = o.normal
            var _ = this.m_depthBuffer[o$indexA] + this.m_depthBuffer[o$indexB]
            var m = It.MulSV(s * _ * o$weight, o$normal, t$SolveSolid_s_f)
            this$m_velocityBuffer$data[o$indexA].SelfSub(m)
            this$m_velocityBuffer$data[o$indexB].SelfAdd(m)
          }
        }
      }
    }, {
      key: "SolveForce",
      value: function (t) {
        for (var /* [auto-meaningful-name] */this$m_velocityBuffer$data = this.m_velocityBuffer.data, i = t.dt * this.GetParticleInvMass(), n = 0; n < this.m_count; n++) {
          this$m_velocityBuffer$data[n].SelfMulAdd(i, this.m_forceBuffer[n])
        }
        this.m_hasForce = false
      }
    }, {
      key: "SolveColorMixing",
      value: function () {
        var t = .5 * this.m_def.colorMixingStrength
        if (t) {
          for (var e = 0; e < this.m_contactBuffer.count; e++) {
            var i = this.m_contactBuffer.data[e]
            var /* [auto-meaningful-name] */i$indexA = i.indexA
            var /* [auto-meaningful-name] */i$indexB = i.indexB
            if (this.m_flagsBuffer.data[i$indexA] & this.m_flagsBuffer.data[i$indexB] & Ys.b2_colorMixingParticle) {
              var r = this.m_colorBuffer.data[i$indexA]
              var a = this.m_colorBuffer.data[i$indexB]
              o.MixColors(r, a, t)
            }
          }
        }
      }
    }, {
      key: "SolveZombie",
      value: function () {
        for (var t = 0, e = [], i = 0; i < this.m_count; i++) {
          e[i] = L
        }
        for (var n = 0, s = 0; s < this.m_count; s++) {
          var r = this.m_flagsBuffer.data[s]
          if (r & Ys.b2_zombieParticle) {
            var /* [auto-meaningful-name] */this$m_world$m_destructionListener = this.m_world.m_destructionListener
            if (r & Ys.b2_destructionListenerParticle && this$m_world$m_destructionListener) {
              this$m_world$m_destructionListener.SayGoodbyeParticle(this, s)
            }
            if (this.m_handleIndexBuffer.data) {
              var a = this.m_handleIndexBuffer.data[s]
              if (a) {
                a.SetIndex(L)
                this.m_handleIndexBuffer.data[s] = null
              }
            }
            e[s] = L
          } else {
            e[s] = t
            if (s !== t) {
              if (this.m_handleIndexBuffer.data) {
                var u = this.m_handleIndexBuffer.data[s]
                if (u) {
                  u.SetIndex(t)
                }
                this.m_handleIndexBuffer.data[t] = u
              }
              this.m_flagsBuffer.data[t] = this.m_flagsBuffer.data[s]
              if (this.m_lastBodyContactStepBuffer.data) {
                this.m_lastBodyContactStepBuffer.data[t] = this.m_lastBodyContactStepBuffer.data[s]
              }
              if (this.m_bodyContactCountBuffer.data) {
                this.m_bodyContactCountBuffer.data[t] = this.m_bodyContactCountBuffer.data[s]
              }
              if (this.m_consecutiveContactStepsBuffer.data) {
                this.m_consecutiveContactStepsBuffer.data[t] = this.m_consecutiveContactStepsBuffer.data[s]
              }
              this.m_positionBuffer.data[t].Copy(this.m_positionBuffer.data[s])
              this.m_velocityBuffer.data[t].Copy(this.m_velocityBuffer.data[s])
              this.m_groupBuffer[t] = this.m_groupBuffer[s]
              if (this.m_hasForce) {
                this.m_forceBuffer[t].Copy(this.m_forceBuffer[s])
              }
              if (this.m_staticPressureBuffer) {
                this.m_staticPressureBuffer[t] = this.m_staticPressureBuffer[s]
              }
              if (this.m_depthBuffer) {
                this.m_depthBuffer[t] = this.m_depthBuffer[s]
              }
              if (this.m_colorBuffer.data) {
                this.m_colorBuffer.data[t].Copy(this.m_colorBuffer.data[s])
              }
              if (this.m_userDataBuffer.data) {
                this.m_userDataBuffer.data[t] = this.m_userDataBuffer.data[s]
              }
              if (this.m_expirationTimeBuffer.data) {
                this.m_expirationTimeBuffer.data[t] = this.m_expirationTimeBuffer.data[s]
              }
            }
            t++
            n |= r
          }
        }
        for (var l = function (t) {
            return t.index < 0
          }, h = function (t) {
            return t.indexA < 0 || t.indexB < 0
          }, _ = function (t) {
            return t.index < 0
          }, m = function (t) {
            return t.indexA < 0 || t.indexB < 0
          }, c = function (t) {
            return t.indexA < 0 || t.indexB < 0 || t.indexC < 0
          }, f = 0; f < this.m_proxyBuffer.count; f++) {
          var d = this.m_proxyBuffer.data[f]
          d.index = e[d.index]
        }
        this.m_proxyBuffer.RemoveIf(l)
        for (var v = 0; v < this.m_contactBuffer.count; v++) {
          var y = this.m_contactBuffer.data[v]
          y.indexA = e[y.indexA]
          y.indexB = e[y.indexB]
        }
        this.m_contactBuffer.RemoveIf(h)
        for (var p = 0; p < this.m_bodyContactBuffer.count; p++) {
          var x = this.m_bodyContactBuffer.data[p]
          x.index = e[x.index]
        }
        this.m_bodyContactBuffer.RemoveIf(_)
        for (var B = 0; B < this.m_pairBuffer.count; B++) {
          var S = this.m_pairBuffer.data[B]
          S.indexA = e[S.indexA]
          S.indexB = e[S.indexB]
        }
        this.m_pairBuffer.RemoveIf(m)
        for (var A = 0; A < this.m_triadBuffer.count; A++) {
          var C = this.m_triadBuffer.data[A]
          C.indexA = e[C.indexA]
          C.indexB = e[C.indexB]
          C.indexC = e[C.indexC]
        }
        this.m_triadBuffer.RemoveIf(c)
        if (this.m_indexByExpirationTimeBuffer.data) {
          for (var b = 0, g = 0; g < this.m_count; g++) {
            var V = e[this.m_indexByExpirationTimeBuffer.data[g]]
            if (V !== L) {
              this.m_indexByExpirationTimeBuffer.data[b++] = V
            }
          }
        }
        for (var /* [auto-meaningful-name] */this$m_groupList = this.m_groupList; this$m_groupList; this$m_groupList = this$m_groupList.GetNext()) {
          for (var k = t, M = 0, P = false, /* [auto-meaningful-name] */this$m_groupList$m_firstIndex = this$m_groupList.m_firstIndex; this$m_groupList$m_firstIndex < this$m_groupList.m_lastIndex; this$m_groupList$m_firstIndex++) {
            var G = e[this$m_groupList$m_firstIndex]
            if (G >= 0) {
              k = _t(k, G)
              M = mt(M, G + 1)
            } else {
              P = true
            }
          }
          if (k < M) {
            this$m_groupList.m_firstIndex = k
            this$m_groupList.m_lastIndex = M
            if (P && this$m_groupList.m_groupFlags & er.b2_solidParticleGroup) {
              this.SetGroupFlags(this$m_groupList, this$m_groupList.m_groupFlags | er.b2_particleGroupNeedsUpdateDepth)
            }
          } else {
            this$m_groupList.m_firstIndex = 0
            this$m_groupList.m_lastIndex = 0
            if (!(this$m_groupList.m_groupFlags & er.b2_particleGroupCanBeEmpty)) {
              this.SetGroupFlags(this$m_groupList, this$m_groupList.m_groupFlags | er.b2_particleGroupWillBeDestroyed)
            }
          }
        }
        this.m_count = t
        this.m_allParticleFlags = n
        this.m_needsUpdateAllParticleFlags = false
        for (var /* [auto-meaningful-name] */this$m_groupList1 = this.m_groupList; this$m_groupList1;) {
          var F = this$m_groupList1.GetNext()
          if (this$m_groupList1.m_groupFlags & er.b2_particleGroupWillBeDestroyed) {
            this.DestroyParticleGroup(this$m_groupList1)
          }
          this$m_groupList1 = F
        }
      }
    }, {
      key: "SolveLifetimes",
      value: function (t) {
        this.m_timeElapsed = this.LifetimeToExpirationTime(t.dt)
        var e = this.GetQuantizedTimeElapsed()
        var /* [auto-meaningful-name] */this$m_expirationTimeBuffer$data = this.m_expirationTimeBuffer.data
        var /* [auto-meaningful-name] */this$m_indexByExpirationTimeBuffer$data = this.m_indexByExpirationTimeBuffer.data
        var s = this.GetParticleCount()
        if (this.m_expirationTimeBufferRequiresSorting) {
          _r(this$m_indexByExpirationTimeBuffer$data, 0, s, function (t, e) {
            var n = this$m_expirationTimeBuffer$data[t]
            var s = this$m_expirationTimeBuffer$data[e]
            var r = n <= 0
            return r === s <= 0 ? n > s : r
          })
          this.m_expirationTimeBufferRequiresSorting = false
        }
        for (var r = s - 1; r >= 0; --r) {
          var o = this$m_indexByExpirationTimeBuffer$data[r]
          var a = this$m_expirationTimeBuffer$data[o]
          if (e < a || a <= 0) {
            break
          }
          this.DestroyParticle(o)
        }
      }
    }, {
      key: "RotateBuffer",
      value: function (t, e, i) {
        if (t !== e && e !== i) {
          vr(this.m_flagsBuffer.data, t, e, i)
          if (this.m_lastBodyContactStepBuffer.data) {
            vr(this.m_lastBodyContactStepBuffer.data, t, e, i)
          }
          if (this.m_bodyContactCountBuffer.data) {
            vr(this.m_bodyContactCountBuffer.data, t, e, i)
          }
          if (this.m_consecutiveContactStepsBuffer.data) {
            vr(this.m_consecutiveContactStepsBuffer.data, t, e, i)
          }
          vr(this.m_positionBuffer.data, t, e, i)
          vr(this.m_velocityBuffer.data, t, e, i)
          vr(this.m_groupBuffer, t, e, i)
          if (this.m_hasForce) {
            vr(this.m_forceBuffer, t, e, i)
          }
          if (this.m_staticPressureBuffer) {
            vr(this.m_staticPressureBuffer, t, e, i)
          }
          if (this.m_depthBuffer) {
            vr(this.m_depthBuffer, t, e, i)
          }
          if (this.m_colorBuffer.data) {
            vr(this.m_colorBuffer.data, t, e, i)
          }
          if (this.m_userDataBuffer.data) {
            vr(this.m_userDataBuffer.data, t, e, i)
          }
          if (this.m_handleIndexBuffer.data) {
            vr(this.m_handleIndexBuffer.data, t, e, i)
            for (var n = t; n < i; ++n) {
              var s = this.m_handleIndexBuffer.data[n]
              if (s) {
                s.SetIndex(x(s.GetIndex()))
              }
            }
          }
          if (this.m_expirationTimeBuffer.data) {
            vr(this.m_expirationTimeBuffer.data, t, e, i)
            for (var r = this.GetParticleCount(), /* [auto-meaningful-name] */this$m_indexByExpirationTimeBuffer$data = this.m_indexByExpirationTimeBuffer.data, a = 0; a < r; ++a) {
              this$m_indexByExpirationTimeBuffer$data[a] = x(this$m_indexByExpirationTimeBuffer$data[a])
            }
          }
          for (var u = 0; u < this.m_proxyBuffer.count; u++) {
            var l = this.m_proxyBuffer.data[u]
            l.index = x(l.index)
          }
          for (var h = 0; h < this.m_contactBuffer.count; h++) {
            var _ = this.m_contactBuffer.data[h]
            _.indexA = x(_.indexA)
            _.indexB = x(_.indexB)
          }
          for (var m = 0; m < this.m_bodyContactBuffer.count; m++) {
            var c = this.m_bodyContactBuffer.data[m]
            c.index = x(c.index)
          }
          for (var f = 0; f < this.m_pairBuffer.count; f++) {
            var d = this.m_pairBuffer.data[f]
            d.indexA = x(d.indexA)
            d.indexB = x(d.indexB)
          }
          for (var v = 0; v < this.m_triadBuffer.count; v++) {
            var y = this.m_triadBuffer.data[v]
            y.indexA = x(y.indexA)
            y.indexB = x(y.indexB)
            y.indexC = x(y.indexC)
          }
          for (var /* [auto-meaningful-name] */this$m_groupList = this.m_groupList; this$m_groupList; this$m_groupList = this$m_groupList.GetNext()) {
            this$m_groupList.m_firstIndex = x(this$m_groupList.m_firstIndex)
            this$m_groupList.m_lastIndex = x(this$m_groupList.m_lastIndex - 1) + 1
          }
        }
        function x(n) {
          return n < t ? n : n < e ? n + i - e : n < i ? n + t - e : n
        }
      }
    }, {
      key: "GetCriticalVelocity",
      value: function (t) {
        return this.m_particleDiameter * t.inv_dt
      }
    }, {
      key: "GetCriticalVelocitySquared",
      value: function (t) {
        var e = this.GetCriticalVelocity(t)
        return e * e
      }
    }, {
      key: "GetCriticalPressure",
      value: function (t) {
        return this.m_def.density * this.GetCriticalVelocitySquared(t)
      }
    }, {
      key: "GetParticleStride",
      value: function () {
        return j * this.m_particleDiameter
      }
    }, {
      key: "GetParticleMass",
      value: function () {
        var t = this.GetParticleStride()
        return this.m_def.density * t * t
      }
    }, {
      key: "GetParticleInvMass",
      value: function () {
        var t = this.m_inverseDiameter * (1 / j)
        return this.m_inverseDensity * t * t
      }
    }, {
      key: "GetFixtureContactFilter",
      value: function () {
        return this.m_allParticleFlags & Ys.b2_fixtureContactFilterParticle ? this.m_world.m_contactManager.m_contactFilter : null
      }
    }, {
      key: "GetParticleContactFilter",
      value: function () {
        return this.m_allParticleFlags & Ys.b2_particleContactFilterParticle ? this.m_world.m_contactManager.m_contactFilter : null
      }
    }, {
      key: "GetFixtureContactListener",
      value: function () {
        return this.m_allParticleFlags & Ys.b2_fixtureContactListenerParticle ? this.m_world.m_contactManager.m_contactListener : null
      }
    }, {
      key: "GetParticleContactListener",
      value: function () {
        return this.m_allParticleFlags & Ys.b2_particleContactListenerParticle ? this.m_world.m_contactManager.m_contactListener : null
      }
    }, {
      key: "SetUserOverridableBuffer",
      value: function (t, e) {
        t.data = e
        t.userSuppliedCapacity = e.length
      }
    }, {
      key: "SetGroupFlags",
      value: function (t, e) {
        var /* [auto-meaningful-name] */t$m_groupFlags = t.m_groupFlags
        if ((t$m_groupFlags ^ e) & er.b2_solidParticleGroup) {
          e |= er.b2_particleGroupNeedsUpdateDepth
        }
        if (t$m_groupFlags & ~e) {
          this.m_needsUpdateAllGroupFlags = true
        }
        if (~this.m_allGroupFlags & e) {
          if (e & er.b2_solidParticleGroup) {
            this.m_depthBuffer = this.RequestBuffer(this.m_depthBuffer)
          }
          this.m_allGroupFlags |= e
        }
        t.m_groupFlags = e
      }
    }, {
      key: "RemoveSpuriousBodyContacts",
      value: function () {
        _r(this.m_bodyContactBuffer.data, 0, this.m_bodyContactBuffer.count, t.BodyContactCompare)
        var /* [auto-meaningful-name] */t$RemoveSpuriousBodyContacts_s_n = t.RemoveSpuriousBodyContacts_s_n
        var /* [auto-meaningful-name] */t$RemoveSpuriousBodyContacts_s_pos = t.RemoveSpuriousBodyContacts_s_pos
        var /* [auto-meaningful-name] */t$RemoveSpuriousBodyContacts_s_normal = t.RemoveSpuriousBodyContacts_s_normal
        var s = this
        var r = -1
        var o = 0
        this.m_bodyContactBuffer.count = cr(this.m_bodyContactBuffer.data, function (t) {
          if (t.index !== r) {
            o = 0
            r = t.index
          }
          if (o++ > 3) {
            return true
          }
          var a = t$RemoveSpuriousBodyContacts_s_n.Copy(t.normal)
          a.SelfMul(s.m_particleDiameter * (1 - t.weight))
          var u = It.AddVV(s.m_positionBuffer.data[t.index], a, t$RemoveSpuriousBodyContacts_s_pos)
          if (!t.fixture.TestPoint(u)) {
            for (var l = t.fixture.GetShape().GetChildCount(), h = 0; h < l; h++) {
              var _ = t$RemoveSpuriousBodyContacts_s_normal
              if (t.fixture.ComputeDistance(u, _, h) < A) {
                return false
              }
            }
            return true
          }
          return false
        }, this.m_bodyContactBuffer.count)
      }
    }, {
      key: "DetectStuckParticle",
      value: function (t) {
        if (!(this.m_stuckThreshold <= 0)) {
          ++this.m_bodyContactCountBuffer.data[t]
          if (2 === this.m_bodyContactCountBuffer.data[t]) {
            ++this.m_consecutiveContactStepsBuffer.data[t]
            if (this.m_consecutiveContactStepsBuffer.data[t] > this.m_stuckThreshold) {
              this.m_stuckParticleBuffer.data[this.m_stuckParticleBuffer.Append()] = t
            }
          }
          this.m_lastBodyContactStepBuffer.data[t] = this.m_timestamp
        }
      }
    }, {
      key: "ValidateParticleIndex",
      value: function (t) {
        return t >= 0 && t < this.GetParticleCount() && t !== L
      }
    }, {
      key: "GetQuantizedTimeElapsed",
      value: function () {
        return Math.floor(this.m_timeElapsed / 4294967296)
      }
    }, {
      key: "LifetimeToExpirationTime",
      value: function (t) {
        return this.m_timeElapsed + Math.floor(t / this.m_def.lifetimeGranularity * 4294967296)
      }
    }, {
      key: "ForceCanBeApplied",
      value: function (t) {
        return !(t & Ys.b2_wallParticle)
      }
    }, {
      key: "PrepareForceBuffer",
      value: function () {
        if (!this.m_hasForce) {
          for (var t = 0; t < this.m_count; t++) {
            this.m_forceBuffer[t].SetZero()
          }
          this.m_hasForce = true
        }
      }
    }, {
      key: "IsRigidGroup",
      value: function (t) {
        return null !== t && 0 !== (t.m_groupFlags & er.b2_rigidParticleGroup)
      }
    }, {
      key: "GetLinearVelocity",
      value: function (t, e, i, n) {
        return t && this.IsRigidGroup(t) ? t.GetLinearVelocityFromWorldPoint(i, n) : n.Copy(this.m_velocityBuffer.data[e])
      }
    }, {
      key: "InitDampingParameter",
      value: function (t, e, i, n, s, r, o, a) {
        t[0] = n > 0 ? 1 / n : 0
        e[0] = s > 0 ? 1 / s : 0
        i[0] = It.CrossVV(It.SubVV(o, r, It.s_t0), a)
      }
    }, {
      key: "InitDampingParameterWithRigidGroupOrParticle",
      value: function (t, e, i, n, s, r, o, a) {
        if (s && n) {
          this.InitDampingParameter(t, e, i, s.GetMass(), s.GetInertia(), s.GetCenter(), o, a)
        } else {
          var u = this.m_flagsBuffer.data[r]
          this.InitDampingParameter(t, e, i, u & Ys.b2_wallParticle ? 0 : this.GetParticleMass(), 0, o, o, a)
        }
      }
    }, {
      key: "ComputeDampingImpulse",
      value: function (t, e, i, n, s, r, o) {
        var a = t + e * i * i + n + s * r * r
        return a > 0 ? o / a : 0
      }
    }, {
      key: "ApplyDamping",
      value: function (t, e, i, n, s, r, o, a) {
        if (s && n) {
          s.m_linearVelocity.SelfMulAdd(o * t, a)
          s.m_angularVelocity += o * i * e
        } else {
          this.m_velocityBuffer.data[r].SelfMulAdd(o * t, a)
        }
      }
    }
  ], [
    {
      key: "computeTag",
      value: function (e, i) {
        return (i + t.yOffset >>> 0 << t.yShift) + (t.xScale * e + t.xOffset >>> 0) >>> 0
      }
    }, {
      key: "computeRelativeTag",
      value: function (e, i, n) {
        return e + (n << t.yShift) + (i << t.xShift) >>> 0
      }
    }, {
      key: "IsSignificantForce",
      value: function (t) {
        return 0 !== t.x || 0 !== t.y
      }
    }, {
      key: "ParticleCanBeConnected",
      value: function (t, e) {
        return 0 !== (t & (Ys.b2_wallParticle | Ys.b2_springParticle | Ys.b2_elasticParticle)) || null !== e && 0 !== (e.GetGroupFlags() & er.b2_rigidParticleGroup)
      }
    }, {
      key: "ComparePairIndices",
      value: function (t, e) {
        var i = t.indexA - e.indexA
        return 0 !== i ? i < 0 : t.indexB < e.indexB
      }
    }, {
      key: "MatchPairIndices",
      value: function (t, e) {
        return t.indexA === e.indexA && t.indexB === e.indexB
      }
    }, {
      key: "CompareTriadIndices",
      value: function (t, e) {
        var i = t.indexA - e.indexA
        if (0 !== i) {
          return i < 0
        }
        var n = t.indexB - e.indexB
        return 0 !== n ? n < 0 : t.indexC < e.indexC
      }
    }, {
      key: "MatchTriadIndices",
      value: function (t, e) {
        return t.indexA === e.indexA && t.indexB === e.indexB && t.indexC === e.indexC
      }
    }, {
      key: "InitializeParticleLists",
      value: function (t, e) {
        for (var i = t.GetBufferIndex(), n = t.GetParticleCount(), s = 0; s < n; s++) {
          var r = e[s]
          r.list = r
          r.next = null
          r.count = 1
          r.index = s + i
        }
      }
    }, {
      key: "MergeParticleLists",
      value: function (t, e) {
        for (var i = e;;) {
          i.list = t
          var /* [auto-meaningful-name] */i$next = i.next
          if (!i$next) {
            i.next = t.next
            break
          }
          i = i$next
        }
        t.next = e
        t.count += e.count
        e.count = 0
      }
    }, {
      key: "FindLongestParticleList",
      value: function (t, e) {
        for (var i = t.GetParticleCount(), n = e[0], s = 0; s < i; s++) {
          var r = e[s]
          if (n.count < r.count) {
            n = r
          }
        }
        return n
      }
    }, {
      key: "MergeParticleListAndNode",
      value: function (t, e) {
        e.list = t
        e.next = t.next
        t.next = e
        t.count++
        e.count = 0
      }
    }, {
      key: "b2ParticleContactIsZombie",
      value: function (t) {
        return (t.flags & Ys.b2_zombieParticle) === Ys.b2_zombieParticle
      }
    }, {
      key: "BodyContactCompare",
      value: function (t, e) {
        return t.index === e.index ? t.weight > e.weight : t.index < e.index
      }
    }
  ])
  return t
}()
br.xTruncBits = 12
br.yTruncBits = 12
br.tagBits = 32
br.yOffset = 1 << br.yTruncBits - 1
br.yShift = br.tagBits - br.yTruncBits
br.xShift = br.tagBits - br.yTruncBits - br.xTruncBits
br.xScale = 1 << br.xShift
br.xOffset = br.xScale * (1 << br.xTruncBits - 1)
br.yMask = (1 << br.yTruncBits) - 1 << br.yShift
br.xMask = ~br.yMask
br.DestroyParticlesInShape_s_aabb = new Ie()
br.CreateParticleGroup_s_transform = new Tt()
br.ComputeCollisionEnergy_s_v = new It()
br.QueryShapeAABB_s_aabb = new Ie()
br.QueryPointAABB_s_aabb = new Ie()
br.RayCast_s_aabb = new Ie()
br.RayCast_s_p = new It()
br.RayCast_s_v = new It()
br.RayCast_s_n = new It()
br.RayCast_s_point = new It()
br.k_pairFlags = Ys.b2_springParticle
br.k_triadFlags = Ys.b2_elasticParticle
br.k_noPressureFlags = Ys.b2_powderParticle | Ys.b2_tensileParticle
br.k_extraDampingFlags = Ys.b2_staticPressureParticle
br.k_barrierWallFlags = Ys.b2_barrierParticle | Ys.b2_wallParticle
br.CreateParticlesStrokeShapeForGroup_s_edge = new Ye()
br.CreateParticlesStrokeShapeForGroup_s_d = new It()
br.CreateParticlesStrokeShapeForGroup_s_p = new It()
br.CreateParticlesFillShapeForGroup_s_aabb = new Ie()
br.CreateParticlesFillShapeForGroup_s_p = new It()
br.UpdatePairsAndTriads_s_dab = new It()
br.UpdatePairsAndTriads_s_dbc = new It()
br.UpdatePairsAndTriads_s_dca = new It()
br.AddContact_s_d = new It()
br.UpdateBodyContacts_s_aabb = new Ie()
br.Solve_s_subStep = new xs()
br.SolveCollision_s_aabb = new Ie()
br.SolveGravity_s_gravity = new It()
br.SolveBarrier_s_aabb = new Ie()
br.SolveBarrier_s_va = new It()
br.SolveBarrier_s_vb = new It()
br.SolveBarrier_s_pba = new It()
br.SolveBarrier_s_vba = new It()
br.SolveBarrier_s_vc = new It()
br.SolveBarrier_s_pca = new It()
br.SolveBarrier_s_vca = new It()
br.SolveBarrier_s_qba = new It()
br.SolveBarrier_s_qca = new It()
br.SolveBarrier_s_dv = new It()
br.SolveBarrier_s_f = new It()
br.SolvePressure_s_f = new It()
br.SolveDamping_s_v = new It()
br.SolveDamping_s_f = new It()
br.SolveRigidDamping_s_t0 = new It()
br.SolveRigidDamping_s_t1 = new It()
br.SolveRigidDamping_s_p = new It()
br.SolveRigidDamping_s_v = new It()
br.SolveExtraDamping_s_v = new It()
br.SolveExtraDamping_s_f = new It()
br.SolveRigid_s_position = new It()
br.SolveRigid_s_rotation = new jt()
br.SolveRigid_s_transform = new Tt()
br.SolveRigid_s_velocityTransform = new Tt()
br.SolveElastic_s_pa = new It()
br.SolveElastic_s_pb = new It()
br.SolveElastic_s_pc = new It()
br.SolveElastic_s_r = new jt()
br.SolveElastic_s_t0 = new It()
br.SolveSpring_s_pa = new It()
br.SolveSpring_s_pb = new It()
br.SolveSpring_s_d = new It()
br.SolveSpring_s_f = new It()
br.SolveTensile_s_weightedNormal = new It()
br.SolveTensile_s_s = new It()
br.SolveTensile_s_f = new It()
br.SolveViscous_s_v = new It()
br.SolveViscous_s_f = new It()
br.SolveRepulsive_s_f = new It()
br.SolvePowder_s_f = new It()
br.SolveSolid_s_f = new It()
br.RemoveSpuriousBodyContacts_s_n = new It()
br.RemoveSpuriousBodyContacts_s_pos = new It()
br.RemoveSpuriousBodyContacts_s_normal = new It()
var gr = function () {
  function t() {
    Module_27.a(this, t)
    this._data = null
    this.userSuppliedCapacity = 0
  }
  Module_39.a(t, [
    {
      key: "data",
      get: function () {
        return this._data
      },
      set: function (t) {
        this._data = t
      }
    }
  ])
  return t
}()
var Vr = function () {
  function t() {
    Module_27.a(this, t)
    this.index = L
    this.tag = 0
  }
  Module_39.a(t, null, [
    {
      key: "CompareProxyProxy",
      value: function (t, e) {
        return t.tag < e.tag
      }
    }, {
      key: "CompareTagProxy",
      value: function (t, e) {
        return t < e.tag
      }
    }, {
      key: "CompareProxyTag",
      value: function (t, e) {
        return t.tag < e
      }
    }
  ])
  return t
}()
var wr = function () {
  function t(e, i, s, r, o) {
    Module_27.a(this, t)
    this.m_system = e
    this.m_xLower = (i & br.xMask) >>> 0
    this.m_xUpper = (s & br.xMask) >>> 0
    this.m_yLower = (i & br.yMask) >>> 0
    this.m_yUpper = (s & br.yMask) >>> 0
    this.m_first = r
    this.m_last = o
  }
  Module_39.a(t, [
    {
      key: "GetNext",
      value: function () {
        for (; this.m_first < this.m_last;) {
          var t = (this.m_system.m_proxyBuffer.data[this.m_first].tag & br.xMask) >>> 0
          if (t >= this.m_xLower && t <= this.m_xUpper) {
            return this.m_system.m_proxyBuffer.data[this.m_first++].index
          }
          this.m_first++
        }
        return L
      }
    }
  ])
  return t
}()
var kr = function t() {
  Module_27.a(this, t)
  this.next = null
  this.count = 0
  this.index = 0
}
var Mr = function () {
  function t() {
    Module_27.a(this, t)
    this.data = []
    this.valid = []
    this.count = 0
  }
  Module_39.a(t, [
    {
      key: "Clear",
      value: function () {
        this.data.length = 0
        this.valid.length = 0
        this.count = 0
      }
    }, {
      key: "GetCount",
      value: function () {
        return this.count
      }
    }, {
      key: "Invalidate",
      value: function (t) {
        this.valid[t] = false
      }
    }, {
      key: "GetValidBuffer",
      value: function () {
        return this.valid
      }
    }, {
      key: "GetBuffer",
      value: function () {
        return this.data
      }
    }, {
      key: "SetCount",
      value: function (t) {
        this.count = t
      }
    }, {
      key: "Append",
      value: function (t) {
        this.data[this.count] = t
        this.valid[this.count] = true
        this.count++
      }
    }
  ])
  return t
}()
var Pr = function (t) {
  Module_58.a(i, t)
  var e = Module_59.a(i)
  function i() {
    Module_27.a(this, i)
    return e.apply(this, arguments)
  }
  Module_39.a(i, [
    {
      key: "Initialize",
      value: function (t, e) {
        this.Clear()
        for (var i = 0; i < t.count; i++) {
          var n = t.data[i]
          if (e.data[n.index] & Ys.b2_fixtureContactListenerParticle) {
            this.Append(n.Clone())
          }
        }
      }
    }, {
      key: "Find",
      value: function (t) {
        for (var e = 0; e < this.GetCount(); e++) {
          if (this.data[e].fixture === t.fixture && this.data[e].index === t.index) {
            return e
          }
        }
        return L
      }
    }
  ])
  return i
}(Mr)
var Ir = function (t) {
  Module_58.a(i, t)
  var e = Module_59.a(i)
  function i(t) {
    var s
    Module_27.a(this, i);
    (s = e.call(this)).particleSystem = t
    return s
  }
  Module_39.a(i, [
    {
      key: "Initialize",
      value: function (t, e) {
        this.Clear()
        for (var i = 0; i < t.count; i++) {
          var n = t.data[i]
          if (e.data[n.index] & Ys.b2_fixtureContactListenerParticle) {
            if (this.particleSystem.m_groupBuffer[n.index] && this.Find(n) === L) {
              this.Append(n.Clone())
            }
          }
        }
      }
    }, {
      key: "Find",
      value: function (t) {
        if (!this.data.length) {
          return L
        }
        for (var e = this.particleSystem.m_groupBuffer[t.index], i = 0; i < this.data.length; i++) {
          var n = this.particleSystem.m_groupBuffer[this.data[i].index]
          if (this.data[i].body.m_id === t.body.m_id && (null === e || undefined === e ? undefined : e.id) === (null === n || undefined === n ? undefined : n.id)) {
            return i
          }
        }
        return L
      }
    }
  ])
  return i
}(Mr)
var Gr = function (t) {
  Module_58.a(i, t)
  var e = Module_59.a(i)
  function i() {
    Module_27.a(this, i)
    return e.apply(this, arguments)
  }
  Module_39.a(i, [
    {
      key: "Initialize",
      value: function (t, e) {
        this.Clear()
        for (var i = 0; i < t.count; i++) {
          var n = t.data[i]
          if (e.data[n.indexA] & Ys.b2_particleContactListenerParticle || e.data[n.indexB] & Ys.b2_particleContactListenerParticle) {
            if (!this.Find(n)) {
              this.Append(n.Clone())
            }
          }
        }
      }
    }, {
      key: "Find",
      value: function (t) {
        for (var e = 0; e < this.GetCount(); e++) {
          if (this.data[e].indexA === t.indexA && this.data[e].indexB === t.indexB) {
            return e
          }
        }
        return L
      }
    }
  ])
  return i
}(Mr)
var Dr = function (t) {
  Module_58.a(i, t)
  var e = Module_59.a(i)
  function i(t) {
    var s
    Module_27.a(this, i);
    (s = e.call(this)).particleSystem = t
    return s
  }
  Module_39.a(i, [
    {
      key: "Initialize",
      value: function (t, e) {
        this.Clear()
        for (var i = 0; i < t.count; i++) {
          var n = t.data[i]
          if (e.data[n.indexA] & Ys.b2_particleContactListenerParticle || e.data[n.indexB] & Ys.b2_particleContactListenerParticle) {
            var s = this.particleSystem.m_groupBuffer[n.indexA]
            var r = this.particleSystem.m_groupBuffer[n.indexB]
            if (s && r && s !== r && this.Find(n) === L) {
              this.Append(n.Clone())
            }
          }
        }
      }
    }, {
      key: "Find",
      value: function (t) {
        for (var e = this.particleSystem.m_groupBuffer[t.indexA], i = this.particleSystem.m_groupBuffer[t.indexB], n = 0; n < this.data.length; n++) {
          var s = this.particleSystem.m_groupBuffer[this.data[n].indexA]
          var r = this.particleSystem.m_groupBuffer[this.data[n].indexB]
          if (e === s && i === r || e === r && i === s) {
            return n
          }
        }
        return L
      }
    }
  ])
  return i
}(Mr)
var Fr = function () {
  function t() {
    Module_27.a(this, t)
  }
  Module_39.a(t, [
    {
      key: "IsNecessary",
      value: function (t) {
        return true
      }
    }, {
      key: "ShouldCreatePair",
      value: function (t, e) {
        return true
      }
    }, {
      key: "ShouldCreateTriad",
      value: function (t, e, i) {
        return true
      }
    }
  ])
  return t
}()
var Lr = function (t) {
  Module_58.a(i, t)
  var e = Module_59.a(i)
  function i(t, s, r, o) {
    var a
    Module_27.a(this, i);
    (a = e.call(this)).m_callDestructionListener = false
    a.m_destroyed = 0
    a.m_system = t
    a.m_shape = s
    a.m_xf = r
    a.m_callDestructionListener = o
    a.m_destroyed = 0
    return a
  }
  Module_39.a(i, [
    {
      key: "ReportFixture",
      value: function (t) {
        return false
      }
    }, {
      key: "ReportParticle",
      value: function (t, e) {
        return t === this.m_system && (this.m_shape.TestPoint(this.m_xf, this.m_system.m_positionBuffer.data[e]) && (this.m_system.DestroyParticle(e, this.m_callDestructionListener), this.m_destroyed++), true)
      }
    }, {
      key: "Destroyed",
      value: function () {
        return this.m_destroyed
      }
    }
  ])
  return i
}(ds)
var Rr = function (t) {
  Module_58.a(i, t)
  var e = Module_59.a(i)
  function i(t) {
    var s
    Module_27.a(this, i);
    (s = e.call(this)).m_threshold = 0
    s.m_threshold = t
    return s
  }
  Module_39.a(i, [
    {
      key: "ShouldCreatePair",
      value: function (t, e) {
        return t < this.m_threshold && this.m_threshold <= e || e < this.m_threshold && this.m_threshold <= t
      }
    }, {
      key: "ShouldCreateTriad",
      value: function (t, e, i) {
        return (t < this.m_threshold || e < this.m_threshold || i < this.m_threshold) && (this.m_threshold <= t || this.m_threshold <= e || this.m_threshold <= i)
      }
    }
  ])
  return i
}(Fr)
var jr = function (t) {
  Module_58.a(i, t)
  var e = Module_59.a(i)
  function i(t) {
    var s
    var r = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : t.length
    Module_27.a(this, i);
    (s = e.call(this, ze.e_unknown, 0)).m_shapeCount = 0
    s.m_shapes = t
    s.m_shapeCount = r
    return s
  }
  Module_39.a(i, [
    {
      key: "Clone",
      value: function () {
        throw new Error()
      }
    }, {
      key: "GetChildCount",
      value: function () {
        return 1
      }
    }, {
      key: "TestPoint",
      value: function (t, e) {
        for (var i = 0; i < this.m_shapeCount; i++) {
          if (this.m_shapes[i].TestPoint(t, e)) {
            return true
          }
        }
        return false
      }
    }, {
      key: "ComputeDistance",
      value: function (t, e, i, n) {
        return 0
      }
    }, {
      key: "RayCast",
      value: function (t, e, i, n) {
        return false
      }
    }, {
      key: "ComputeAABB",
      value: function (t, e, i) {
        var n = new Ie()
        t.lowerBound.x = +c
        t.lowerBound.y = +c
        t.upperBound.x = -c
        t.upperBound.y = -c
        for (var s = 0; s < this.m_shapeCount; s++) {
          for (var r = this.m_shapes[s].GetChildCount(), o = 0; o < r; o++) {
            var a = n
            this.m_shapes[s].ComputeAABB(a, e, o)
            t.Combine1(a)
          }
        }
      }
    }, {
      key: "ComputeMass",
      value: function (t, e) {}
    }, {
      key: "SetupDistanceProxy",
      value: function (t, e) {}
    }, {
      key: "ComputeSubmergedArea",
      value: function (t, e, i, n) {
        return 0
      }
    }, {
      key: "Dump",
      value: function (t) {}
    }
  ])
  return i
}(Qe)
var Tr = function (t) {
  Module_58.a(i, t)
  var e = Module_59.a(i)
  function i(t) {
    var s
    Module_27.a(this, i);
    (s = e.call(this)).m_flagsBuffer = t
    return s
  }
  Module_39.a(i, [
    {
      key: "IsNecessary",
      value: function (t) {
        return 0 !== (this.m_flagsBuffer.data[t] & Ys.b2_reactiveParticle)
      }
    }
  ])
  return i
}(Fr)
var Or = function (t) {
  Module_58.a(i, t)
  var e = Module_59.a(i)
  function i(t) {
    Module_27.a(this, i)
    return e.call(this, t)
  }
  Module_39.a(i, [
    {
      key: "ReportFixtureAndParticle",
      value: function (t, e, n) {
        var /* [auto-meaningful-name] */i$ReportFixtureAndParticle_s_n = i.ReportFixtureAndParticle_s_n
        var /* [auto-meaningful-name] */i$ReportFixtureAndParticle_s_rp = i.ReportFixtureAndParticle_s_rp
        var o = this.m_system.m_positionBuffer.data[n]
        var a = i$ReportFixtureAndParticle_s_n
        var u = t.ComputeDistance(o, a, e)
        if (u < this.m_system.m_particleDiameter && this.ShouldCollideFixtureParticle(t, n)) {
          var l = t.GetBody()
          var h = l.GetWorldCenter()
          var _ = l.GetMass()
          var m = l.GetInertia() - _ * l.GetLocalCenter().LengthSquared()
          var c = _ > 0 ? 1 / _ : 0
          var f = m > 0 ? 1 / m : 0
          var d = this.m_system.m_flagsBuffer.data[n] & Ys.b2_wallParticle ? 0 : this.m_system.GetParticleInvMass()
          var v = It.SubVV(o, h, i$ReportFixtureAndParticle_s_rp)
          var y = It.CrossVV(v, a)
          var p = d + c + f * y * y
          var x = this.m_system.m_bodyContactBuffer.data[this.m_system.m_bodyContactBuffer.Append()]
          x.index = n
          x.body = l
          x.fixture = t
          x.weight = 1 - u * this.m_system.m_inverseDiameter
          x.normal.Copy(a.SelfNeg())
          x.mass = p > 0 ? 1 / p : 0
          this.m_system.DetectStuckParticle(n)
        }
      }
    }
  ])
  return i
}(pr)
Or.ReportFixtureAndParticle_s_n = new It()
Or.ReportFixtureAndParticle_s_rp = new It()
var qr = function (t) {
  Module_58.a(i, t)
  var e = Module_59.a(i)
  function i(t, s) {
    var r
    Module_27.a(this, i);
    (r = e.call(this, t)).m_step = s
    return r
  }
  Module_39.a(i, [
    {
      key: "ReportFixtureAndParticle",
      value: function (t, e, n) {
        var /* [auto-meaningful-name] */i$ReportFixtureAndParticle_s_p1 = i.ReportFixtureAndParticle_s_p1
        var /* [auto-meaningful-name] */i$ReportFixtureAndParticle_s_output = i.ReportFixtureAndParticle_s_output
        var /* [auto-meaningful-name] */i$ReportFixtureAndParticle_s_input = i.ReportFixtureAndParticle_s_input
        var /* [auto-meaningful-name] */i$ReportFixtureAndParticle_s_p = i.ReportFixtureAndParticle_s_p
        var /* [auto-meaningful-name] */i$ReportFixtureAndParticle_s_v = i.ReportFixtureAndParticle_s_v
        var /* [auto-meaningful-name] */i$ReportFixtureAndParticle_s_f = i.ReportFixtureAndParticle_s_f
        var h = t.GetBody()
        var _ = this.m_system.m_positionBuffer.data[n]
        var m = this.m_system.m_velocityBuffer.data[n]
        var c = i$ReportFixtureAndParticle_s_output
        var f = i$ReportFixtureAndParticle_s_input
        if (0 === this.m_system.m_iterationIndex) {
          var d = Tt.MulTXV(h.m_xf0, _, i$ReportFixtureAndParticle_s_p1)
          if (t.GetShape().GetType() === ze.e_circleShape) {
            d.SelfSub(h.GetLocalCenter())
            jt.MulRV(h.m_xf0.q, d, d)
            jt.MulTRV(h.m_xf.q, d, d)
            d.SelfAdd(h.GetLocalCenter())
          }
          Tt.MulXV(h.m_xf, d, f.p1)
        } else {
          f.p1.Copy(_)
        }
        It.AddVMulSV(_, this.m_step.dt, m, f.p2)
        f.maxFraction = 1
        if (this.ShouldCollideFixtureParticle(t, e) && t.RayCast(c, f, e)) {
          var /* [auto-meaningful-name] */c$normal = c.normal
          var y = i$ReportFixtureAndParticle_s_p
          y.x = (1 - c.fraction) * f.p1.x + c.fraction * f.p2.x + A * c$normal.x
          y.y = (1 - c.fraction) * f.p1.y + c.fraction * f.p2.y + A * c$normal.y
          var p = i$ReportFixtureAndParticle_s_v
          p.x = this.m_step.inv_dt * (y.x - _.x)
          p.y = this.m_step.inv_dt * (y.y - _.y)
          this.m_system.m_velocityBuffer.data[n].Copy(p)
          var x = i$ReportFixtureAndParticle_s_f
          x.x = this.m_step.inv_dt * this.m_system.GetParticleMass() * (m.x - p.x)
          x.y = this.m_step.inv_dt * this.m_system.GetParticleMass() * (m.y - p.y)
          this.m_system.ParticleApplyForce(n, x)
        }
      }
    }, {
      key: "ReportParticle",
      value: function (t, e) {
        return false
      }
    }
  ])
  return i
}(pr)
qr.ReportFixtureAndParticle_s_p1 = new It()
qr.ReportFixtureAndParticle_s_output = new Pe()
qr.ReportFixtureAndParticle_s_input = new Me()
qr.ReportFixtureAndParticle_s_p = new It()
qr.ReportFixtureAndParticle_s_v = new It()
qr.ReportFixtureAndParticle_s_f = new It()
var zr
var Er
var Nr = function () {
  function t(e) {
    Module_27.a(this, t)
    this.m_contactManager = new ys()
    this.m_bodyList = null
    this.m_jointList = null
    this.m_particleSystemList = null
    this.m_bodyCount = 0
    this.m_jointCount = 0
    this.m_gravity = new It()
    this.m_allowSleep = true
    this.m_destructionListener = null
    this.m_debugDraw = null
    this.m_inv_dt0 = 0
    this.m_newContacts = false
    this.m_locked = false
    this.m_clearForces = true
    this.m_warmStarting = true
    this.m_continuousPhysics = true
    this.m_subStepping = false
    this.m_stepComplete = true
    this.m_profile = new ps()
    this.m_island = new Rs()
    this.s_stack = []
    this.m_controllerList = null
    this.m_controllerCount = 0
    this.m_gravity.Copy(e)
  }
  Module_39.a(t, [
    {
      key: "SetDestructionListener",
      value: function (t) {
        this.m_destructionListener = t
      }
    }, {
      key: "SetContactFilter",
      value: function (t) {
        this.m_contactManager.m_contactFilter = t
      }
    }, {
      key: "SetContactListener",
      value: function (t) {
        this.m_contactManager.m_contactListener = t
      }
    }, {
      key: "SetDebugDraw",
      value: function (t) {
        this.m_debugDraw = t
      }
    }, {
      key: "CreateBody",
      value: function () {
        var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : new Qn()
        if (this.IsLocked()) {
          throw new Error()
        }
        var e = new Yn(t, this)
        e.m_prev = null
        e.m_next = this.m_bodyList
        if (this.m_bodyList) {
          this.m_bodyList.m_prev = e
        }
        this.m_bodyList = e
        ++this.m_bodyCount
        return e
      }
    }, {
      key: "DestroyBody",
      value: function (t) {
        if (this.IsLocked()) {
          throw new Error()
        }
        for (var /* [auto-meaningful-name] */t$m_jointList = t.m_jointList; t$m_jointList;) {
          var i = t$m_jointList
          t$m_jointList = t$m_jointList.next
          if (this.m_destructionListener) {
            this.m_destructionListener.SayGoodbyeJoint(i.joint)
          }
          this.DestroyJoint(i.joint)
          t.m_jointList = t$m_jointList
        }
        t.m_jointList = null
        for (var /* [auto-meaningful-name] */t$m_controllerList = t.m_controllerList; t$m_controllerList;) {
          var s = t$m_controllerList
          t$m_controllerList = t$m_controllerList.nextController
          s.controller.RemoveBody(t)
        }
        for (var /* [auto-meaningful-name] */t$m_contactList = t.m_contactList; t$m_contactList;) {
          var o = t$m_contactList
          t$m_contactList = t$m_contactList.next
          this.m_contactManager.Destroy(o.contact)
        }
        t.m_contactList = null
        for (var /* [auto-meaningful-name] */t$m_fixtureList = t.m_fixtureList; t$m_fixtureList;) {
          var u = t$m_fixtureList
          t$m_fixtureList = t$m_fixtureList.m_next
          if (this.m_destructionListener) {
            this.m_destructionListener.SayGoodbyeFixture(u)
          }
          u.DestroyProxies()
          u.Reset()
          t.m_fixtureList = t$m_fixtureList
          t.m_fixtureCount -= 1
        }
        t.m_fixtureList = null
        t.m_fixtureCount = 0
        if (t.m_prev) {
          t.m_prev.m_next = t.m_next
        }
        if (t.m_next) {
          t.m_next.m_prev = t.m_prev
        }
        if (t === this.m_bodyList) {
          this.m_bodyList = t.m_next
        }
        --this.m_bodyCount
      }
    }, {
      key: "CreateJoint",
      value: function (e) {
        if (this.IsLocked()) {
          throw new Error()
        }
        var i = t._Joint_Create(e)
        i.m_prev = null
        i.m_next = this.m_jointList
        if (this.m_jointList) {
          this.m_jointList.m_prev = i
        }
        this.m_jointList = i
        ++this.m_jointCount
        i.m_edgeA.prev = null
        i.m_edgeA.next = i.m_bodyA.m_jointList
        if (i.m_bodyA.m_jointList) {
          i.m_bodyA.m_jointList.prev = i.m_edgeA
        }
        i.m_bodyA.m_jointList = i.m_edgeA
        i.m_edgeB.prev = null
        i.m_edgeB.next = i.m_bodyB.m_jointList
        if (i.m_bodyB.m_jointList) {
          i.m_bodyB.m_jointList.prev = i.m_edgeB
        }
        i.m_bodyB.m_jointList = i.m_edgeB
        var /* [auto-meaningful-name] */i$m_bodyA = i.m_bodyA
        var /* [auto-meaningful-name] */i$m_bodyB = i.m_bodyB
        if (!i.m_collideConnected) {
          for (var r = i$m_bodyB.GetContactList(); r;) {
            if (r.other === i$m_bodyA) {
              r.contact.FlagForFiltering()
            }
            r = r.next
          }
        }
        return i
      }
    }, {
      key: "DestroyJoint",
      value: function (e) {
        if (this.IsLocked()) {
          throw new Error()
        }
        if (e.m_prev) {
          e.m_prev.m_next = e.m_next
        }
        if (e.m_next) {
          e.m_next.m_prev = e.m_prev
        }
        if (e === this.m_jointList) {
          this.m_jointList = e.m_next
        }
        var /* [auto-meaningful-name] */e$m_bodyA = e.m_bodyA
        var /* [auto-meaningful-name] */e$m_bodyB = e.m_bodyB
        var /* [auto-meaningful-name] */e$m_collideConnected = e.m_collideConnected
        e$m_bodyA.SetAwake(true)
        e$m_bodyB.SetAwake(true)
        if (e.m_edgeA.prev) {
          e.m_edgeA.prev.next = e.m_edgeA.next
        }
        if (e.m_edgeA.next) {
          e.m_edgeA.next.prev = e.m_edgeA.prev
        }
        if (e.m_edgeA === e$m_bodyA.m_jointList) {
          e$m_bodyA.m_jointList = e.m_edgeA.next
        }
        e.m_edgeA.Reset()
        if (e.m_edgeB.prev) {
          e.m_edgeB.prev.next = e.m_edgeB.next
        }
        if (e.m_edgeB.next) {
          e.m_edgeB.next.prev = e.m_edgeB.prev
        }
        if (e.m_edgeB === e$m_bodyB.m_jointList) {
          e$m_bodyB.m_jointList = e.m_edgeB.next
        }
        e.m_edgeB.Reset()
        t._Joint_Destroy(e)
        --this.m_jointCount
        if (!e$m_collideConnected) {
          for (var r = e$m_bodyB.GetContactList(); r;) {
            if (r.other === e$m_bodyA) {
              r.contact.FlagForFiltering()
            }
            r = r.next
          }
        }
      }
    }, {
      key: "CreateParticleSystem",
      value: function (t) {
        if (this.IsLocked()) {
          throw new Error()
        }
        var e = new br(t, this)
        e.m_prev = null
        e.m_next = this.m_particleSystemList
        if (this.m_particleSystemList) {
          this.m_particleSystemList.m_prev = e
        }
        this.m_particleSystemList = e
        return e
      }
    }, {
      key: "DestroyParticleSystem",
      value: function (t) {
        if (this.IsLocked()) {
          throw new Error()
        }
        if (t.m_prev) {
          t.m_prev.m_next = t.m_next
        }
        if (t.m_next) {
          t.m_next.m_prev = t.m_prev
        }
        if (t === this.m_particleSystemList) {
          this.m_particleSystemList = t.m_next
        }
      }
    }, {
      key: "CalculateReasonableParticleIterations",
      value: function (t) {
        if (null === this.m_particleSystemList) {
          return 1
        }
        return tr(this.m_gravity.Length(), function (t) {
          for (var e = c, i = t.GetParticleSystemList(); null !== i; i = i.m_next) {
            e = _t(e, i.GetRadius())
          }
          return e
        }(this), t)
      }
    }, {
      key: "Step",
      value: function (e, i, n) {
        var s = arguments.length > 3 && undefined !== arguments[3] ? arguments[3] : this.CalculateReasonableParticleIterations(e)
        var r = t.Step_s_stepTimer.Reset()
        if (this.m_newContacts) {
          this.m_contactManager.FindNewContacts()
          this.m_newContacts = false
        }
        this.m_locked = true
        var /* [auto-meaningful-name] */t$Step_s_step = t.Step_s_step
        t$Step_s_step.dt = e
        t$Step_s_step.velocityIterations = i
        t$Step_s_step.positionIterations = n
        t$Step_s_step.particleIterations = s
        t$Step_s_step.inv_dt = e > 0 ? 1 / e : 0
        t$Step_s_step.dtRatio = this.m_inv_dt0 * e
        t$Step_s_step.warmStarting = this.m_warmStarting
        var a = t.Step_s_timer.Reset()
        this.m_contactManager.Collide()
        this.m_profile.collide = a.GetMilliseconds()
        if (this.m_stepComplete && t$Step_s_step.dt > 0) {
          for (var u = t.Step_s_timer.Reset(), /* [auto-meaningful-name] */this$m_particleSystemList = this.m_particleSystemList; this$m_particleSystemList; this$m_particleSystemList = this$m_particleSystemList.m_next) {
            this$m_particleSystemList.Solve(t$Step_s_step)
          }
          this.Solve(t$Step_s_step)
          this.m_profile.solve = u.GetMilliseconds()
        }
        if (this.m_continuousPhysics && t$Step_s_step.dt > 0) {
          var h = t.Step_s_timer.Reset()
          this.SolveTOI(t$Step_s_step)
          this.m_profile.solveTOI = h.GetMilliseconds()
        }
        if (t$Step_s_step.dt > 0) {
          this.m_inv_dt0 = t$Step_s_step.inv_dt
        }
        if (this.m_clearForces) {
          this.ClearForces()
        }
        this.m_locked = false
        this.m_profile.step = r.GetMilliseconds()
      }
    }, {
      key: "ClearForces",
      value: function () {
        for (var /* [auto-meaningful-name] */this$m_bodyList = this.m_bodyList; this$m_bodyList; this$m_bodyList = this$m_bodyList.m_next) {
          this$m_bodyList.m_force.SetZero()
          this$m_bodyList.m_torque = 0
        }
      }
    }, {
      key: "DrawParticleSystem",
      value: function (t) {
        if (null !== this.m_debugDraw) {
          var e = t.GetParticleCount()
          if (e) {
            var i = t.GetRadius()
            var n = t.GetPositionBuffer()
            var s = null
            if (t.m_colorBuffer.data) {
              s = t.GetColorBuffer()
            }
            var r = t.GetTriads().map(function (t) {
              return [t.indexA, t.indexB, t.indexC]
            })
            var o = this.m_debugDraw.GetFlags()
            if (o & a.e_particleBit) {
              this.m_debugDraw.DrawParticles(n, i, s, e)
            }
            if (o & a.e_particleTriadBit) {
              this.m_debugDraw.DrawParticleTriads(n, r, null)
            }
          }
        }
      }
    }, {
      key: "DebugDraw",
      value: function () {
        if (null !== this.m_debugDraw) {
          var e = this.m_debugDraw.GetFlags()
          var i = t.DebugDraw_s_color.SetRGB(0, 0, 0)
          if (e & a.e_shapeBit) {
            for (var /* [auto-meaningful-name] */this$m_bodyList = this.m_bodyList; this$m_bodyList; this$m_bodyList = this$m_bodyList.m_next) {
              var /* [auto-meaningful-name] */this$m_bodyList$m_xf = this$m_bodyList.m_xf
              this.m_debugDraw.PushTransform(this$m_bodyList$m_xf)
              for (var r = this$m_bodyList.GetFixtureList(); r; r = r.m_next) {
                if (this$m_bodyList.GetType() === Un.b2_dynamicBody && 0 === this$m_bodyList.m_mass) {
                  this.DrawShape(r, new o(1, 0, 0))
                } else {
                  if (this$m_bodyList.IsEnabled()) {
                    if (this$m_bodyList.GetType() === Un.b2_staticBody) {
                      i.SetRGB(.5, .9, .5)
                      this.DrawShape(r, i)
                    } else {
                      if (this$m_bodyList.GetType() === Un.b2_kinematicBody) {
                        i.SetRGB(.5, .5, .9)
                        this.DrawShape(r, i)
                      } else {
                        if (this$m_bodyList.IsAwake()) {
                          i.SetRGB(.9, .7, .7)
                          this.DrawShape(r, i)
                        } else {
                          i.SetRGB(.6, .6, .6)
                          this.DrawShape(r, i)
                        }
                      }
                    }
                  } else {
                    i.SetRGB(.5, .5, .3)
                    this.DrawShape(r, i)
                  }
                }
              }
              this.m_debugDraw.PopTransform(this$m_bodyList$m_xf)
            }
          }
          if (e & a.e_particleBit || e & a.e_particleTriadBit) {
            this.m_debugDraw.PushTransform(Tt.IDENTITY)
            for (var /* [auto-meaningful-name] */this$m_particleSystemList = this.m_particleSystemList; this$m_particleSystemList; this$m_particleSystemList = this$m_particleSystemList.m_next) {
              this.DrawParticleSystem(this$m_particleSystemList)
            }
            this.m_debugDraw.PopTransform(Tt.IDENTITY)
          }
          if (e & a.e_jointBit) {
            for (var /* [auto-meaningful-name] */this$m_jointList = this.m_jointList; this$m_jointList; this$m_jointList = this$m_jointList.m_next) {
              this$m_jointList.Draw(this.m_debugDraw)
            }
          }
          if (e & a.e_pairBit) {
            i.SetRGB(.3, .9, .9)
            for (var /* [auto-meaningful-name] */this$m_contactManager$m_contactList = this.m_contactManager.m_contactList; this$m_contactManager$m_contactList; this$m_contactManager$m_contactList = this$m_contactManager$m_contactList.m_next) {
              var _ = this$m_contactManager$m_contactList.GetFixtureA()
              var m = this$m_contactManager$m_contactList.GetFixtureB()
              var c = this$m_contactManager$m_contactList.GetChildIndexA()
              var f = this$m_contactManager$m_contactList.GetChildIndexB()
              var d = _.GetAABB(c).GetCenter()
              var v = m.GetAABB(f).GetCenter()
              this.m_debugDraw.DrawSegment(d, v, i)
            }
          }
          if (e & a.e_aabbBit) {
            i.SetRGB(.9, .3, .9)
            for (var /* [auto-meaningful-name] */t$DebugDraw_s_vs = t.DebugDraw_s_vs, /* [auto-meaningful-name] */this$m_bodyList1 = this.m_bodyList; this$m_bodyList1; this$m_bodyList1 = this$m_bodyList1.m_next) {
              if (this$m_bodyList1.IsEnabled()) {
                for (var x = this$m_bodyList1.GetFixtureList(); x; x = x.m_next) {
                  for (var B = 0; B < x.m_proxyCount; ++B) {
                    var /* [auto-meaningful-name] */x$m_proxiesB$treeNode$aabb = x.m_proxies[B].treeNode.aabb
                    t$DebugDraw_s_vs[0].Set(x$m_proxiesB$treeNode$aabb.lowerBound.x, x$m_proxiesB$treeNode$aabb.lowerBound.y)
                    t$DebugDraw_s_vs[1].Set(x$m_proxiesB$treeNode$aabb.upperBound.x, x$m_proxiesB$treeNode$aabb.lowerBound.y)
                    t$DebugDraw_s_vs[2].Set(x$m_proxiesB$treeNode$aabb.upperBound.x, x$m_proxiesB$treeNode$aabb.upperBound.y)
                    t$DebugDraw_s_vs[3].Set(x$m_proxiesB$treeNode$aabb.lowerBound.x, x$m_proxiesB$treeNode$aabb.upperBound.y)
                    this.m_debugDraw.DrawPolygon(t$DebugDraw_s_vs, 4, i)
                  }
                }
              }
            }
          }
          if (e & a.e_centerOfMassBit) {
            for (var /* [auto-meaningful-name] */this$m_bodyList2 = this.m_bodyList; this$m_bodyList2; this$m_bodyList2 = this$m_bodyList2.m_next) {
              var /* [auto-meaningful-name] */t$DebugDraw_s_xf = t.DebugDraw_s_xf
              t$DebugDraw_s_xf.q.Copy(this$m_bodyList2.m_xf.q)
              t$DebugDraw_s_xf.p.Copy(this$m_bodyList2.GetWorldCenter())
              this.m_debugDraw.DrawTransform(t$DebugDraw_s_xf)
            }
          }
          if (e & a.e_controllerBit) {
            for (var /* [auto-meaningful-name] */this$m_controllerList = this.m_controllerList; this$m_controllerList; this$m_controllerList = this$m_controllerList.m_next) {
              this$m_controllerList.Draw(this.m_debugDraw)
            }
          }
        }
      }
    }, {
      key: "QueryAABB",
      value: function () {
        if ((arguments.length <= 0 ? undefined : arguments[0]) instanceof ds) {
          this._QueryAABB(arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1])
        } else {
          this._QueryAABB(null, arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1])
        }
      }
    }, {
      key: "_QueryAABB",
      value: function (t, e, i) {
        this.m_contactManager.m_broadPhase.Query(e, function (e) {
          var /* [auto-meaningful-name] */e$userData$fixture = e.userData.fixture
          return t ? t.ReportFixture(e$userData$fixture) : !i || i(e$userData$fixture)
        })
        if (t instanceof ds) {
          for (var /* [auto-meaningful-name] */this$m_particleSystemList = this.m_particleSystemList; this$m_particleSystemList; this$m_particleSystemList = this$m_particleSystemList.m_next) {
            if (t.ShouldQueryParticleSystem(this$m_particleSystemList)) {
              this$m_particleSystemList.QueryAABB(t, e)
            }
          }
        }
      }
    }, {
      key: "QueryAllAABB",
      value: function (t) {
        var e = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : []
        this.QueryAABB(t, function (t) {
          e.push(t)
          return true
        })
        return e
      }
    }, {
      key: "QueryPointAABB",
      value: function () {
        if ((arguments.length <= 0 ? undefined : arguments[0]) instanceof ds) {
          this._QueryPointAABB(arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1])
        } else {
          this._QueryPointAABB(null, arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1])
        }
      }
    }, {
      key: "_QueryPointAABB",
      value: function (t, e, i) {
        this.m_contactManager.m_broadPhase.QueryPoint(e, function (e) {
          var /* [auto-meaningful-name] */e$userData$fixture = e.userData.fixture
          return t ? t.ReportFixture(e$userData$fixture) : !i || i(e$userData$fixture)
        })
        if (t instanceof ds) {
          for (var /* [auto-meaningful-name] */this$m_particleSystemList = this.m_particleSystemList; this$m_particleSystemList; this$m_particleSystemList = this$m_particleSystemList.m_next) {
            if (t.ShouldQueryParticleSystem(this$m_particleSystemList)) {
              this$m_particleSystemList.QueryPointAABB(t, e)
            }
          }
        }
      }
    }, {
      key: "QueryAllPointAABB",
      value: function (t) {
        var e = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : []
        this.QueryPointAABB(t, function (t) {
          e.push(t)
          return true
        })
        return e
      }
    }, {
      key: "QueryFixtureShape",
      value: function () {
        if ((arguments.length <= 0 ? undefined : arguments[0]) instanceof ds) {
          this._QueryFixtureShape(arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1], arguments.length <= 2 ? undefined : arguments[2], arguments.length <= 3 ? undefined : arguments[3])
        } else {
          this._QueryFixtureShape(null, arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1], arguments.length <= 2 ? undefined : arguments[2], arguments.length <= 3 ? undefined : arguments[3])
        }
      }
    }, {
      key: "_QueryFixtureShape",
      value: function (e, i, n, s, r) {
        var /* [auto-meaningful-name] */t$QueryFixtureShape_s_aabb = t.QueryFixtureShape_s_aabb
        i.ComputeAABB(t$QueryFixtureShape_s_aabb, s, n)
        this.m_contactManager.m_broadPhase.Query(t$QueryFixtureShape_s_aabb, function (t) {
          var /* [auto-meaningful-name] */t$userData = t.userData
          var /* [auto-meaningful-name] */t$userData$fixture = t$userData.fixture
          if (je(i, n, t$userData$fixture.GetShape(), t$userData.childIndex, s, t$userData$fixture.GetBody().GetTransform())) {
            if (e) {
              return e.ReportFixture(t$userData$fixture)
            }
            if (r) {
              return r(t$userData$fixture)
            }
          }
          return true
        })
        if (e instanceof ds) {
          for (var /* [auto-meaningful-name] */this$m_particleSystemList = this.m_particleSystemList; this$m_particleSystemList; this$m_particleSystemList = this$m_particleSystemList.m_next) {
            if (e.ShouldQueryParticleSystem(this$m_particleSystemList)) {
              this$m_particleSystemList.QueryAABB(e, t$QueryFixtureShape_s_aabb)
            }
          }
        }
      }
    }, {
      key: "QueryAllFixtureShape",
      value: function (t, e, i) {
        var n = arguments.length > 3 && undefined !== arguments[3] ? arguments[3] : []
        this.QueryFixtureShape(t, e, i, function (t) {
          n.push(t)
          return true
        })
        return n
      }
    }, {
      key: "QueryFixturePoint",
      value: function () {
        if ((arguments.length <= 0 ? undefined : arguments[0]) instanceof ds) {
          this._QueryFixturePoint(arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1])
        } else {
          this._QueryFixturePoint(null, arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1])
        }
      }
    }, {
      key: "_QueryFixturePoint",
      value: function (t, e, i) {
        this.m_contactManager.m_broadPhase.QueryPoint(e, function (n) {
          var /* [auto-meaningful-name] */n$userData$fixture = n.userData.fixture
          if (n$userData$fixture.TestPoint(e)) {
            if (t) {
              return t.ReportFixture(n$userData$fixture)
            }
            if (i) {
              return i(n$userData$fixture)
            }
          }
          return true
        })
        if (t) {
          for (var /* [auto-meaningful-name] */this$m_particleSystemList = this.m_particleSystemList; this$m_particleSystemList; this$m_particleSystemList = this$m_particleSystemList.m_next) {
            if (t.ShouldQueryParticleSystem(this$m_particleSystemList)) {
              this$m_particleSystemList.QueryPointAABB(t, e)
            }
          }
        }
      }
    }, {
      key: "QueryAllFixturePoint",
      value: function (t) {
        var e = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : []
        this.QueryFixturePoint(t, function (t) {
          e.push(t)
          return true
        })
        return e
      }
    }, {
      key: "RayCast",
      value: function () {
        if ((arguments.length <= 0 ? undefined : arguments[0]) instanceof vs) {
          this._RayCast(arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1], arguments.length <= 2 ? undefined : arguments[2])
        } else {
          this._RayCast(null, arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1], arguments.length <= 2 ? undefined : arguments[2])
        }
      }
    }, {
      key: "_RayCast",
      value: function (e, i, n, s) {
        var /* [auto-meaningful-name] */t$RayCast_s_input = t.RayCast_s_input
        t$RayCast_s_input.maxFraction = 1
        t$RayCast_s_input.p1.Copy(i)
        t$RayCast_s_input.p2.Copy(n)
        this.m_contactManager.m_broadPhase.RayCast(t$RayCast_s_input, function (r, o) {
          var /* [auto-meaningful-name] */o$userData = o.userData
          var /* [auto-meaningful-name] */o$userData$fixture = o$userData.fixture
          var /* [auto-meaningful-name] */o$userData$childIndex = o$userData.childIndex
          var /* [auto-meaningful-name] */t$RayCast_s_output = t.RayCast_s_output
          if (o$userData$fixture.RayCast(t$RayCast_s_output, r, o$userData$childIndex)) {
            var /* [auto-meaningful-name] */t$RayCast_s_output$fraction = t$RayCast_s_output.fraction
            var /* [auto-meaningful-name] */t$RayCast_s_point = t.RayCast_s_point
            t$RayCast_s_point.Set((1 - t$RayCast_s_output$fraction) * i.x + t$RayCast_s_output$fraction * n.x, (1 - t$RayCast_s_output$fraction) * i.y + t$RayCast_s_output$fraction * n.y)
            if (e) {
              return e.ReportFixture(o$userData$fixture, t$RayCast_s_point, t$RayCast_s_output.normal, t$RayCast_s_output$fraction)
            }
            if (s) {
              return s(o$userData$fixture, t$RayCast_s_point, t$RayCast_s_output.normal, t$RayCast_s_output$fraction)
            }
          }
          return r.maxFraction
        })
        if (e) {
          for (var /* [auto-meaningful-name] */this$m_particleSystemList = this.m_particleSystemList; this$m_particleSystemList; this$m_particleSystemList = this$m_particleSystemList.m_next) {
            if (e.ShouldQueryParticleSystem(this$m_particleSystemList)) {
              this$m_particleSystemList.RayCast(e, i, n)
            }
          }
        }
      }
    }, {
      key: "RayCastOne",
      value: function (t, e) {
        var i = null
        var n = 1
        this.RayCast(t, e, function (t, e, s, r) {
          if (r < n) {
            n = r
            i = t
          }
          return n
        })
        return i
      }
    }, {
      key: "RayCastAll",
      value: function (t, e) {
        var i = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : []
        this.RayCast(t, e, function (t, e, n, s) {
          i.push(t)
          return 1
        })
        return i
      }
    }, {
      key: "GetBodyList",
      value: function () {
        return this.m_bodyList
      }
    }, {
      key: "GetJointList",
      value: function () {
        return this.m_jointList
      }
    }, {
      key: "GetParticleSystemList",
      value: function () {
        return this.m_particleSystemList
      }
    }, {
      key: "GetContactList",
      value: function () {
        return this.m_contactManager.m_contactList
      }
    }, {
      key: "SetAllowSleeping",
      value: function (t) {
        if (t !== this.m_allowSleep && (this.m_allowSleep = t, !this.m_allowSleep)) {
          for (var /* [auto-meaningful-name] */this$m_bodyList = this.m_bodyList; this$m_bodyList; this$m_bodyList = this$m_bodyList.m_next) {
            this$m_bodyList.SetAwake(true)
          }
        }
      }
    }, {
      key: "GetAllowSleeping",
      value: function () {
        return this.m_allowSleep
      }
    }, {
      key: "SetWarmStarting",
      value: function (t) {
        this.m_warmStarting = t
      }
    }, {
      key: "GetWarmStarting",
      value: function () {
        return this.m_warmStarting
      }
    }, {
      key: "SetContinuousPhysics",
      value: function (t) {
        this.m_continuousPhysics = t
      }
    }, {
      key: "GetContinuousPhysics",
      value: function () {
        return this.m_continuousPhysics
      }
    }, {
      key: "SetSubStepping",
      value: function (t) {
        this.m_subStepping = t
      }
    }, {
      key: "GetSubStepping",
      value: function () {
        return this.m_subStepping
      }
    }, {
      key: "GetProxyCount",
      value: function () {
        return this.m_contactManager.m_broadPhase.GetProxyCount()
      }
    }, {
      key: "GetBodyCount",
      value: function () {
        return this.m_bodyCount
      }
    }, {
      key: "GetJointCount",
      value: function () {
        return this.m_jointCount
      }
    }, {
      key: "GetContactCount",
      value: function () {
        return this.m_contactManager.m_contactCount
      }
    }, {
      key: "GetTreeHeight",
      value: function () {
        return this.m_contactManager.m_broadPhase.GetTreeHeight()
      }
    }, {
      key: "GetTreeBalance",
      value: function () {
        return this.m_contactManager.m_broadPhase.GetTreeBalance()
      }
    }, {
      key: "GetTreeQuality",
      value: function () {
        return this.m_contactManager.m_broadPhase.GetTreeQuality()
      }
    }, {
      key: "SetGravity",
      value: function (t) {
        var e = !(arguments.length > 1 && undefined !== arguments[1]) || arguments[1]
        if (!It.IsEqualToV(this.m_gravity, t) && (this.m_gravity.Copy(t), e)) {
          for (var /* [auto-meaningful-name] */this$m_bodyList = this.m_bodyList; this$m_bodyList; this$m_bodyList = this$m_bodyList.m_next) {
            this$m_bodyList.SetAwake(true)
          }
        }
      }
    }, {
      key: "GetGravity",
      value: function () {
        return this.m_gravity
      }
    }, {
      key: "IsLocked",
      value: function () {
        return this.m_locked
      }
    }, {
      key: "SetAutoClearForces",
      value: function (t) {
        this.m_clearForces = t
      }
    }, {
      key: "GetAutoClearForces",
      value: function () {
        return this.m_clearForces
      }
    }, {
      key: "ShiftOrigin",
      value: function (t) {
        if (this.IsLocked()) {
          throw new Error()
        }
        for (var /* [auto-meaningful-name] */this$m_bodyList = this.m_bodyList; this$m_bodyList; this$m_bodyList = this$m_bodyList.m_next) {
          this$m_bodyList.m_xf.p.SelfSub(t)
          this$m_bodyList.m_sweep.c0.SelfSub(t)
          this$m_bodyList.m_sweep.c.SelfSub(t)
        }
        for (var /* [auto-meaningful-name] */this$m_jointList = this.m_jointList; this$m_jointList; this$m_jointList = this$m_jointList.m_next) {
          this$m_jointList.ShiftOrigin(t)
        }
        this.m_contactManager.m_broadPhase.ShiftOrigin(t)
      }
    }, {
      key: "GetContactManager",
      value: function () {
        return this.m_contactManager
      }
    }, {
      key: "GetProfile",
      value: function () {
        return this.m_profile
      }
    }, {
      key: "Dump",
      value: function (t) {
        if (!this.m_locked) {
          t("const g: b2Vec2 = new b2Vec2(%.15f, %.15f);\n", this.m_gravity.x, this.m_gravity.y)
          t("this.m_world.SetGravity(g);\n")
          t("const bodies: b2Body[] = [];\n")
          t("const joints: b2Joint[] = [];\n")
          for (var e = 0, /* [auto-meaningful-name] */this$m_bodyList = this.m_bodyList; this$m_bodyList; this$m_bodyList = this$m_bodyList.m_next) {
            this$m_bodyList.m_islandIndex = e
            this$m_bodyList.Dump(t)
            ++e
          }
          e = 0
          for (var /* [auto-meaningful-name] */this$m_jointList = this.m_jointList; this$m_jointList; this$m_jointList = this$m_jointList.m_next) {
            this$m_jointList.m_index = e
            ++e
          }
          for (var /* [auto-meaningful-name] */this$m_jointList1 = this.m_jointList; this$m_jointList1; this$m_jointList1 = this$m_jointList1.m_next) {
            if (this$m_jointList1.m_type !== Sn.e_gearJoint) {
              t("{\n")
              this$m_jointList1.Dump(t)
              t("}\n")
            }
          }
          for (var /* [auto-meaningful-name] */this$m_jointList2 = this.m_jointList; this$m_jointList2; this$m_jointList2 = this$m_jointList2.m_next) {
            if (this$m_jointList2.m_type === Sn.e_gearJoint) {
              t("{\n")
              this$m_jointList2.Dump(t)
              t("}\n")
            }
          }
        }
      }
    }, {
      key: "DrawShape",
      value: function (t, e) {
        if (null !== this.m_debugDraw) {
          var i = t.GetShape()
          switch (i.m_type) {
            case ze.e_circleShape:
              var n = i,
                /* [auto-meaningful-name] */n$m_p = n.m_p,
                /* [auto-meaningful-name] */n$m_radius = n.m_radius,
                /* [auto-meaningful-name] */It$UNITX = It.UNITX
              this.m_debugDraw.DrawSolidCircle(n$m_p, n$m_radius, It$UNITX, e)
              break
            case ze.e_edgeShape:
              var a = i,
                /* [auto-meaningful-name] */a$m_vertex1 = a.m_vertex1,
                /* [auto-meaningful-name] */a$m_vertex2 = a.m_vertex2
              this.m_debugDraw.DrawSegment(a$m_vertex1, a$m_vertex2, e)
              if (false === a.m_oneSided) {
                this.m_debugDraw.DrawPoint(a$m_vertex1, 4, e)
                this.m_debugDraw.DrawPoint(a$m_vertex2, 4, e)
              }
              break
            case ze.e_chainShape:
              for (var h = i, /* [auto-meaningful-name] */h$m_count = h.m_count, /* [auto-meaningful-name] */h$m_vertices = h.m_vertices, c = h$m_vertices[0], f = 1; f < h$m_count; ++f) {
                var d = h$m_vertices[f]
                this.m_debugDraw.DrawSegment(c, d, e)
                c = d
              }
              break
            case ze.e_polygonShape:
              var v = i,
                /* [auto-meaningful-name] */v$m_count = v.m_count,
                /* [auto-meaningful-name] */v$m_vertices = v.m_vertices
              this.m_debugDraw.DrawSolidPolygon(v$m_vertices, v$m_count, e)
          }
        }
      }
    }, {
      key: "Solve",
      value: function (t) {
        for (var /* [auto-meaningful-name] */this$m_bodyList = this.m_bodyList; this$m_bodyList; this$m_bodyList = this$m_bodyList.m_next) {
          this$m_bodyList.m_xf0.Copy(this$m_bodyList.m_xf)
        }
        for (var /* [auto-meaningful-name] */this$m_controllerList = this.m_controllerList; this$m_controllerList; this$m_controllerList = this$m_controllerList.m_next) {
          this$m_controllerList.Step(t)
        }
        this.m_profile.solveInit = 0
        this.m_profile.solveVelocity = 0
        this.m_profile.solvePosition = 0
        var /* [auto-meaningful-name] */this$m_island = this.m_island
        this$m_island.Initialize(this.m_bodyCount, this.m_contactManager.m_contactCount, this.m_jointCount, this.m_contactManager.m_contactListener)
        for (var /* [auto-meaningful-name] */this$m_bodyList1 = this.m_bodyList; this$m_bodyList1; this$m_bodyList1 = this$m_bodyList1.m_next) {
          this$m_bodyList1.m_islandFlag = false
        }
        for (var /* [auto-meaningful-name] */this$m_contactManager$m_contactList = this.m_contactManager.m_contactList; this$m_contactManager$m_contactList; this$m_contactManager$m_contactList = this$m_contactManager$m_contactList.m_next) {
          this$m_contactManager$m_contactList.m_islandFlag = false
        }
        for (var /* [auto-meaningful-name] */this$m_jointList = this.m_jointList; this$m_jointList; this$m_jointList = this$m_jointList.m_next) {
          this$m_jointList.m_islandFlag = false
        }
        for (var /* [auto-meaningful-name] */this$s_stack = this.s_stack, /* [auto-meaningful-name] */this$m_bodyList2 = this.m_bodyList; this$m_bodyList2; this$m_bodyList2 = this$m_bodyList2.m_next) {
          if (!this$m_bodyList2.m_islandFlag && this$m_bodyList2.IsAwake() && this$m_bodyList2.IsEnabled() && this$m_bodyList2.GetType() !== Un.b2_staticBody) {
            this$m_island.Clear()
            var l = 0
            for (this$s_stack[l++] = this$m_bodyList2, this$m_bodyList2.m_islandFlag = true; l > 0;) {
              var h = this$s_stack[--l]
              if (!h) {
                throw new Error()
              }
              this$m_island.AddBody(h)
              if (h.GetType() !== Un.b2_staticBody) {
                h.m_awakeFlag = true
                for (var /* [auto-meaningful-name] */h$m_contactList = h.m_contactList; h$m_contactList; h$m_contactList = h$m_contactList.next) {
                  var /* [auto-meaningful-name] */h$m_contactList$contact = h$m_contactList.contact
                  if (!h$m_contactList$contact.m_islandFlag && h$m_contactList$contact.IsEnabled() && h$m_contactList$contact.IsTouching()) {
                    var /* [auto-meaningful-name] */h$m_contactList$contact$m_fixtureA$m_isSensor = h$m_contactList$contact.m_fixtureA.m_isSensor
                    var /* [auto-meaningful-name] */h$m_contactList$contact$m_fixtureB$m_isSensor = h$m_contactList$contact.m_fixtureB.m_isSensor
                    if (!h$m_contactList$contact$m_fixtureA$m_isSensor && !h$m_contactList$contact$m_fixtureB$m_isSensor) {
                      this$m_island.AddContact(h$m_contactList$contact)
                      h$m_contactList$contact.m_islandFlag = true
                      var /* [auto-meaningful-name] */h$m_contactList$other = h$m_contactList.other
                      if (!h$m_contactList$other.m_islandFlag) {
                        this$s_stack[l++] = h$m_contactList$other
                        h$m_contactList$other.m_islandFlag = true
                      }
                    }
                  }
                }
                for (var /* [auto-meaningful-name] */h$m_jointList = h.m_jointList; h$m_jointList; h$m_jointList = h$m_jointList.next) {
                  if (!h$m_jointList.joint.m_islandFlag) {
                    var /* [auto-meaningful-name] */h$m_jointList$other = h$m_jointList.other
                    if (h$m_jointList$other.IsEnabled()) {
                      this$m_island.AddJoint(h$m_jointList.joint)
                      h$m_jointList.joint.m_islandFlag = true
                      if (!h$m_jointList$other.m_islandFlag) {
                        this$s_stack[l++] = h$m_jointList$other
                        h$m_jointList$other.m_islandFlag = true
                      }
                    }
                  }
                }
              }
            }
            var p = new ps()
            this$m_island.Solve(p, t, this.m_gravity, this.m_allowSleep)
            this.m_profile.solveInit += p.solveInit
            this.m_profile.solveVelocity += p.solveVelocity
            this.m_profile.solvePosition += p.solvePosition
            for (var x = 0; x < this$m_island.m_bodyCount; ++x) {
              var B = this$m_island.m_bodies[x]
              if (B.GetType() === Un.b2_staticBody) {
                B.m_islandFlag = false
              }
            }
          }
        }
        for (var S = 0; S < this$s_stack.length && this$s_stack[S]; ++S) {
          this$s_stack[S] = null
        }
        for (var A = new zt(), /* [auto-meaningful-name] */this$m_bodyList3 = this.m_bodyList; this$m_bodyList3; this$m_bodyList3 = this$m_bodyList3.m_next) {
          if (this$m_bodyList3.m_islandFlag && this$m_bodyList3.GetType() !== Un.b2_staticBody) {
            this$m_bodyList3.SynchronizeFixtures()
          }
        }
        this.m_contactManager.FindNewContacts()
        this.m_profile.broadphase = A.GetMilliseconds()
      }
    }, {
      key: "SolveTOI",
      value: function (e) {
        var /* [auto-meaningful-name] */this$m_island = this.m_island
        this$m_island.Initialize(2 * V, V, 0, this.m_contactManager.m_contactListener)
        if (this.m_stepComplete) {
          for (var /* [auto-meaningful-name] */this$m_bodyList = this.m_bodyList; this$m_bodyList; this$m_bodyList = this$m_bodyList.m_next) {
            this$m_bodyList.m_islandFlag = false
            this$m_bodyList.m_sweep.alpha0 = 0
          }
          for (var /* [auto-meaningful-name] */this$m_contactManager$m_contactList = this.m_contactManager.m_contactList; this$m_contactManager$m_contactList; this$m_contactManager$m_contactList = this$m_contactManager$m_contactList.m_next) {
            this$m_contactManager$m_contactList.m_toiFlag = false
            this$m_contactManager$m_contactList.m_islandFlag = false
            this$m_contactManager$m_contactList.m_toiCount = 0
            this$m_contactManager$m_contactList.m_toi = 1
          }
        }
        for (;;) {
          for (var r = null, o = 1, /* [auto-meaningful-name] */this$m_contactManager$m_contactList1 = this.m_contactManager.m_contactList; this$m_contactManager$m_contactList1; this$m_contactManager$m_contactList1 = this$m_contactManager$m_contactList1.m_next) {
            if (this$m_contactManager$m_contactList1.IsEnabled() && !(this$m_contactManager$m_contactList1.m_toiCount > g)) {
              var u = 1
              if (this$m_contactManager$m_contactList1.m_toiFlag) {
                u = this$m_contactManager$m_contactList1.m_toi
              } else {
                var l = this$m_contactManager$m_contactList1.GetFixtureA()
                var h = this$m_contactManager$m_contactList1.GetFixtureB()
                if (l.IsSensor() || h.IsSensor()) {
                  continue
                }
                var _ = l.GetBody()
                var m = h.GetBody()
                var /* [auto-meaningful-name] */_$m_type = _.m_type
                var /* [auto-meaningful-name] */m$m_type = m.m_type
                var v = _.IsAwake() && _$m_type !== Un.b2_staticBody
                var y = m.IsAwake() && m$m_type !== Un.b2_staticBody
                if (!v && !y) {
                  continue
                }
                var p = _.IsBullet() || _$m_type !== Un.b2_dynamicBody
                var x = m.IsBullet() || m$m_type !== Un.b2_dynamicBody
                if (!p && !x) {
                  continue
                }
                var /* [auto-meaningful-name] */_$m_sweep$alpha0 = _.m_sweep.alpha0
                if (_.m_sweep.alpha0 < m.m_sweep.alpha0) {
                  _$m_sweep$alpha0 = m.m_sweep.alpha0
                  _.m_sweep.Advance(_$m_sweep$alpha0)
                } else {
                  if (m.m_sweep.alpha0 < _.m_sweep.alpha0) {
                    _$m_sweep$alpha0 = _.m_sweep.alpha0
                    m.m_sweep.Advance(_$m_sweep$alpha0)
                  }
                }
                var S = this$m_contactManager$m_contactList1.GetChildIndexA()
                var A = this$m_contactManager$m_contactList1.GetChildIndexB()
                var /* [auto-meaningful-name] */t$SolveTOI_s_toi_input = t.SolveTOI_s_toi_input
                t$SolveTOI_s_toi_input.proxyA.SetShape(l.GetShape(), S)
                t$SolveTOI_s_toi_input.proxyB.SetShape(h.GetShape(), A)
                t$SolveTOI_s_toi_input.sweepA.Copy(_.m_sweep)
                t$SolveTOI_s_toi_input.sweepB.Copy(m.m_sweep)
                t$SolveTOI_s_toi_input.tMax = 1
                var /* [auto-meaningful-name] */t$SolveTOI_s_toi_output = t.SolveTOI_s_toi_output
                Gn(t$SolveTOI_s_toi_output, t$SolveTOI_s_toi_input)
                var /* [auto-meaningful-name] */t$SolveTOI_s_toi_output$t = t$SolveTOI_s_toi_output.t
                u = t$SolveTOI_s_toi_output.state === hn.e_touching ? _t(_$m_sweep$alpha0 + (1 - _$m_sweep$alpha0) * t$SolveTOI_s_toi_output$t, 1) : 1
                this$m_contactManager$m_contactList1.m_toi = u
                this$m_contactManager$m_contactList1.m_toiFlag = true
              }
              if (u < o) {
                r = this$m_contactManager$m_contactList1
                o = u
              }
            }
          }
          if (null === r || 1 - 10 * f < o) {
            this.m_stepComplete = true
            break
          }
          var k = r.GetFixtureA()
          var M = r.GetFixtureB()
          var P = k.GetBody()
          var I = M.GetBody()
          var G = t.SolveTOI_s_backup1.Copy(P.m_sweep)
          var D = t.SolveTOI_s_backup2.Copy(I.m_sweep)
          P.Advance(o)
          I.Advance(o)
          r.Update(this.m_contactManager.m_contactListener)
          r.m_toiFlag = false
          ++r.m_toiCount
          if (r.IsEnabled() && r.IsTouching()) {
            P.SetAwake(true)
            I.SetAwake(true)
            this$m_island.Clear()
            this$m_island.AddBody(P)
            this$m_island.AddBody(I)
            this$m_island.AddContact(r)
            P.m_islandFlag = true
            I.m_islandFlag = true
            r.m_islandFlag = true
            for (var F = 0; F < 2; ++F) {
              var L = 0 === F ? P : I
              if (L.m_type === Un.b2_dynamicBody) {
                for (var /* [auto-meaningful-name] */L$m_contactList = L.m_contactList; L$m_contactList && this$m_island.m_bodyCount !== this$m_island.m_bodyCapacity && this$m_island.m_contactCount !== this$m_island.m_contactCapacity; L$m_contactList = L$m_contactList.next) {
                  var /* [auto-meaningful-name] */L$m_contactList$contact = L$m_contactList.contact
                  if (!L$m_contactList$contact.m_islandFlag) {
                    var /* [auto-meaningful-name] */L$m_contactList$other = L$m_contactList.other
                    if (L$m_contactList$other.m_type !== Un.b2_dynamicBody || L.IsBullet() || L$m_contactList$other.IsBullet()) {
                      var /* [auto-meaningful-name] */L$m_contactList$contact$m_fixtureA$m_isSensor = L$m_contactList$contact.m_fixtureA.m_isSensor
                      var /* [auto-meaningful-name] */L$m_contactList$contact$m_fixtureB$m_isSensor = L$m_contactList$contact.m_fixtureB.m_isSensor
                      if (!L$m_contactList$contact$m_fixtureA$m_isSensor && !L$m_contactList$contact$m_fixtureB$m_isSensor) {
                        var z = t.SolveTOI_s_backup.Copy(L$m_contactList$other.m_sweep)
                        if (!L$m_contactList$other.m_islandFlag) {
                          L$m_contactList$other.Advance(o)
                        }
                        L$m_contactList$contact.Update(this.m_contactManager.m_contactListener)
                        if (L$m_contactList$contact.IsEnabled() && L$m_contactList$contact.IsTouching()) {
                          L$m_contactList$contact.m_islandFlag = true
                          this$m_island.AddContact(L$m_contactList$contact)
                          if (!L$m_contactList$other.m_islandFlag) {
                            L$m_contactList$other.m_islandFlag = true
                            if (L$m_contactList$other.m_type !== Un.b2_staticBody) {
                              L$m_contactList$other.SetAwake(true)
                            }
                            this$m_island.AddBody(L$m_contactList$other)
                          }
                        } else {
                          L$m_contactList$other.m_sweep.Copy(z)
                          L$m_contactList$other.SynchronizeTransform()
                        }
                      }
                    }
                  }
                }
              }
            }
            var /* [auto-meaningful-name] */t$SolveTOI_s_subStep = t.SolveTOI_s_subStep
            t$SolveTOI_s_subStep.dt = (1 - o) * e.dt
            t$SolveTOI_s_subStep.inv_dt = 1 / t$SolveTOI_s_subStep.dt
            t$SolveTOI_s_subStep.dtRatio = 1
            t$SolveTOI_s_subStep.positionIterations = 20
            t$SolveTOI_s_subStep.velocityIterations = e.velocityIterations
            t$SolveTOI_s_subStep.particleIterations = e.particleIterations
            t$SolveTOI_s_subStep.warmStarting = false
            this$m_island.SolveTOI(t$SolveTOI_s_subStep, P.m_islandIndex, I.m_islandIndex)
            for (var N = 0; N < this$m_island.m_bodyCount; ++N) {
              var J = this$m_island.m_bodies[N]
              J.m_islandFlag = false
              if (J.m_type === Un.b2_dynamicBody) {
                J.SynchronizeFixtures()
                for (var /* [auto-meaningful-name] */J$m_contactList = J.m_contactList; J$m_contactList; J$m_contactList = J$m_contactList.next) {
                  J$m_contactList.contact.m_toiFlag = false
                  J$m_contactList.contact.m_islandFlag = false
                }
              }
            }
            this.m_contactManager.FindNewContacts()
            if (this.m_subStepping) {
              this.m_stepComplete = false
              break
            }
          } else {
            r.SetEnabled(false)
            P.m_sweep.Copy(G)
            I.m_sweep.Copy(D)
            P.SynchronizeTransform()
            I.SynchronizeTransform()
          }
        }
      }
    }, {
      key: "AddController",
      value: function (t) {
        t.m_next = this.m_controllerList
        t.m_prev = null
        if (this.m_controllerList) {
          this.m_controllerList.m_prev = t
        }
        this.m_controllerList = t
        ++this.m_controllerCount
        return t
      }
    }, {
      key: "RemoveController",
      value: function (t) {
        if (t.m_prev) {
          t.m_prev.m_next = t.m_next
        }
        if (t.m_next) {
          t.m_next.m_prev = t.m_prev
        }
        if (this.m_controllerList === t) {
          this.m_controllerList = t.m_next
        }
        --this.m_controllerCount
        t.m_prev = null
        t.m_next = null
        return t
      }
    }
  ], [
    {
      key: "_Joint_Create",
      value: function (t) {
        switch (t.type) {
          case Sn.e_distanceJoint:
            return new qn(t)
          case Sn.e_mouseJoint:
            return new qs(t)
          case Sn.e_prismaticJoint:
            return new Es(t)
          case Sn.e_revoluteJoint:
            return new Us(t)
          case Sn.e_pulleyJoint:
            return new Xs(t)
          case Sn.e_gearJoint:
            return new Ls(t)
          case Sn.e_wheelJoint:
            return new Hs(t)
          case Sn.e_weldJoint:
            return new Qs(t)
          case Sn.e_frictionJoint:
            return new Ds(t)
          case Sn.e_motorJoint:
            return new Ts(t)
          case Sn.e_areaJoint:
            return new En(t)
        }
        throw new Error()
      }
    }, {
      key: "_Joint_Destroy",
      value: function (t) {}
    }
  ])
  return t
}()
Nr.Step_s_step = new xs()
Nr.Step_s_stepTimer = new zt()
Nr.Step_s_timer = new zt()
Nr.DebugDraw_s_color = new o(0, 0, 0)
Nr.DebugDraw_s_vs = It.MakeArray(4)
Nr.DebugDraw_s_xf = new Tt()
Nr.QueryFixtureShape_s_aabb = new Ie()
Nr.RayCast_s_input = new Me()
Nr.RayCast_s_output = new Pe()
Nr.RayCast_s_point = new It()
Nr.SolveTOI_s_subStep = new xs()
Nr.SolveTOI_s_backup = new Ot()
Nr.SolveTOI_s_backup1 = new Ot()
Nr.SolveTOI_s_backup2 = new Ot()
Nr.SolveTOI_s_toi_input = new pn()
Nr.SolveTOI_s_toi_output = new Bn();
(function (t) {
  t[t.b2_pbdStretchingModel = 0] = "b2_pbdStretchingModel"
  t[t.b2_xpbdStretchingModel = 1] = "b2_xpbdStretchingModel"
})(zr || (zr = {}));
(function (t) {
  t[t.b2_springAngleBendingModel = 0] = "b2_springAngleBendingModel"
  t[t.b2_pbdAngleBendingModel = 1] = "b2_pbdAngleBendingModel"
  t[t.b2_xpbdAngleBendingModel = 2] = "b2_xpbdAngleBendingModel"
  t[t.b2_pbdDistanceBendingModel = 3] = "b2_pbdDistanceBendingModel"
  t[t.b2_pbdHeightBendingModel = 4] = "b2_pbdHeightBendingModel"
  t[t.b2_pbdTriangleBendingModel = 5] = "b2_pbdTriangleBendingModel"
})(Er || (Er = {}))
var Jr = function () {
  function t() {
    Module_27.a(this, t)
    this.stretchingModel = zr.b2_pbdStretchingModel
    this.bendingModel = Er.b2_pbdAngleBendingModel
    this.damping = 0
    this.stretchStiffness = 1
    this.stretchHertz = 0
    this.stretchDamping = 0
    this.bendStiffness = .5
    this.bendHertz = 1
    this.bendDamping = 0
    this.isometric = false
    this.fixedEffectiveMass = false
    this.warmStart = false
  }
  Module_39.a(t, [
    {
      key: "Copy",
      value: function (t) {
        this.stretchingModel = t.stretchingModel
        this.bendingModel = t.bendingModel
        this.damping = t.damping
        this.stretchStiffness = t.stretchStiffness
        this.stretchHertz = t.stretchHertz
        this.stretchDamping = t.stretchDamping
        this.bendStiffness = t.bendStiffness
        this.bendHertz = t.bendHertz
        this.bendDamping = t.bendDamping
        this.isometric = t.isometric
        this.fixedEffectiveMass = t.fixedEffectiveMass
        this.warmStart = t.warmStart
        return this
      }
    }
  ])
  return t
}()
var Xr = function t() {
  Module_27.a(this, t)
  this.position = new It()
  this.vertices = []
  this.count = 0
  this.masses = []
  this.gravity = new It()
  this.tuning = new Jr()
}
var Zr = function t() {
  Module_27.a(this, t)
  this.i1 = 0
  this.i2 = 0
  this.invMass1 = 0
  this.invMass2 = 0
  this.L = 0
  this.lambda = 0
  this.spring = 0
  this.damper = 0
}
var Ur = function t() {
  Module_27.a(this, t)
  this.i1 = 0
  this.i2 = 0
  this.i3 = 0
  this.invMass1 = 0
  this.invMass2 = 0
  this.invMass3 = 0
  this.invEffectiveMass = 0
  this.lambda = 0
  this.L1 = 0
  this.L2 = 0
  this.alpha1 = 0
  this.alpha2 = 0
  this.spring = 0
  this.damper = 0
}
var Wr = function () {
  function t() {
    Module_27.a(this, t)
    this.m_position = new It()
    this.m_count = 0
    this.m_stretchCount = 0
    this.m_bendCount = 0
    this.m_stretchConstraints = []
    this.m_bendConstraints = []
    this.m_bindPositions = []
    this.m_ps = []
    this.m_p0s = []
    this.m_vs = []
    this.m_invMasses = []
    this.m_gravity = new It()
    this.m_tuning = new Jr()
  }
  Module_39.a(t, [
    {
      key: "Create",
      value: function (t) {
        function e(t, e, i) {
          for (var n = 0; n < e; ++n) {
            t[n] = i(n)
          }
        }
        this.m_position.Copy(t.position)
        this.m_count = t.count
        e(this.m_bindPositions, this.m_count, function () {
          return new It()
        })
        e(this.m_ps, this.m_count, function () {
          return new It()
        })
        e(this.m_p0s, this.m_count, function () {
          return new It()
        })
        e(this.m_vs, this.m_count, function () {
          return new It()
        })
        e(this.m_invMasses, this.m_count, function () {
          return 0
        })
        for (var i = 0; i < this.m_count; ++i) {
          this.m_bindPositions[i].Copy(t.vertices[i])
          this.m_ps[i].Copy(t.vertices[i]).SelfAdd(this.m_position)
          this.m_p0s[i].Copy(t.vertices[i]).SelfAdd(this.m_position)
          this.m_vs[i].SetZero()
          var n = t.masses[i]
          this.m_invMasses[i] = n > 0 ? 1 / n : 0
        }
        this.m_stretchCount = this.m_count - 1
        this.m_bendCount = this.m_count - 2
        e(this.m_stretchConstraints, this.m_stretchCount, function () {
          return new Zr()
        })
        e(this.m_bendConstraints, this.m_bendCount, function () {
          return new Ur()
        })
        for (var s = 0; s < this.m_stretchCount; ++s) {
          var r = this.m_stretchConstraints[s]
          var o = this.m_ps[s]
          var a = this.m_ps[s + 1]
          r.i1 = s
          r.i2 = s + 1
          r.L = It.DistanceVV(o, a)
          r.invMass1 = this.m_invMasses[s]
          r.invMass2 = this.m_invMasses[s + 1]
          r.lambda = 0
          r.damper = 0
          r.spring = 0
        }
        for (var u = 0; u < this.m_bendCount; ++u) {
          var l = this.m_bendConstraints[u]
          var h = this.m_ps[u]
          var _ = this.m_ps[u + 1]
          var m = this.m_ps[u + 2]
          l.i1 = u
          l.i2 = u + 1
          l.i3 = u + 2
          l.invMass1 = this.m_invMasses[u]
          l.invMass2 = this.m_invMasses[u + 1]
          l.invMass3 = this.m_invMasses[u + 2]
          l.invEffectiveMass = 0
          l.L1 = It.DistanceVV(h, _)
          l.L2 = It.DistanceVV(_, m)
          l.lambda = 0
          var c = It.SubVV(_, h, new It())
          var f = It.SubVV(m, _, new It())
          var d = c.LengthSquared()
          var v = f.LengthSquared()
          if (d * v !== 0) {
            var y = new It().Copy(c).SelfSkew().SelfMul(-1 / d)
            var p = new It().Copy(f).SelfSkew().SelfMul(1 / v)
            var x = y.Clone().SelfNeg()
            var B = y.Clone().SelfSub(p)
            var S = p.Clone()
            l.invEffectiveMass = l.invMass1 * It.DotVV(x, x) + l.invMass2 * It.DotVV(B, B) + l.invMass3 * It.DotVV(S, S)
            var A = It.SubVV(m, h, new It())
            var C = A.LengthSquared()
            if (0 !== C) {
              l.alpha1 = It.DotVV(f, A) / C
              l.alpha2 = It.DotVV(c, A) / C
            }
          }
        }
        this.m_gravity.Copy(t.gravity)
        this.SetTuning(t.tuning)
      }
    }, {
      key: "SetTuning",
      value: function (t) {
        this.m_tuning.Copy(t)
        for (var e = 2 * v * this.m_tuning.bendHertz, i = 0; i < this.m_bendCount; ++i) {
          var n = this.m_bendConstraints[i]
          var s = n.L1 * n.L1
          var r = n.L2 * n.L2
          if (s * r !== 0) {
            var o = 1 / n.L1 + 1 / n.L2
            var a = n.invMass1 / s + n.invMass2 * o * o + n.invMass3 / r
            if (0 !== a) {
              var u = 1 / a
              n.spring = u * e * e
              n.damper = 2 * u * this.m_tuning.bendDamping * e
            } else {
              n.spring = 0
              n.damper = 0
            }
          } else {
            n.spring = 0
            n.damper = 0
          }
        }
        for (var l = 2 * v * this.m_tuning.stretchHertz, h = 0; h < this.m_stretchCount; ++h) {
          var _ = this.m_stretchConstraints[h]
          var m = _.invMass1 + _.invMass2
          if (0 !== m) {
            var c = 1 / m
            _.spring = c * l * l
            _.damper = 2 * c * this.m_tuning.stretchDamping * l
          }
        }
      }
    }, {
      key: "Step",
      value: function (t, e, i) {
        if (0 !== t) {
          for (var n = 1 / t, s = Math.exp(-t * this.m_tuning.damping), r = 0; r < this.m_count; ++r) {
            if (this.m_invMasses[r] > 0) {
              this.m_vs[r].x *= s
              this.m_vs[r].y *= s
              this.m_vs[r].x += t * this.m_gravity.x
              this.m_vs[r].y += t * this.m_gravity.y
            } else {
              this.m_vs[r].x = n * (this.m_bindPositions[r].x + i.x - this.m_p0s[r].x)
              this.m_vs[r].y = n * (this.m_bindPositions[r].y + i.y - this.m_p0s[r].y)
            }
          }
          if (this.m_tuning.bendingModel === Er.b2_springAngleBendingModel) {
            this.ApplyBendForces(t)
          }
          for (var o = 0; o < this.m_bendCount; ++o) {
            this.m_bendConstraints[o].lambda = 0
          }
          for (var a = 0; a < this.m_stretchCount; ++a) {
            this.m_stretchConstraints[a].lambda = 0
          }
          for (var u = 0; u < this.m_count; ++u) {
            this.m_ps[u].x += t * this.m_vs[u].x
            this.m_ps[u].y += t * this.m_vs[u].y
          }
          for (var l = 0; l < e; ++l) {
            if (this.m_tuning.bendingModel === Er.b2_pbdAngleBendingModel) {
              this.SolveBend_PBD_Angle()
            } else {
              if (this.m_tuning.bendingModel === Er.b2_xpbdAngleBendingModel) {
                this.SolveBend_XPBD_Angle(t)
              } else {
                if (this.m_tuning.bendingModel === Er.b2_pbdDistanceBendingModel) {
                  this.SolveBend_PBD_Distance()
                } else {
                  if (this.m_tuning.bendingModel === Er.b2_pbdHeightBendingModel) {
                    this.SolveBend_PBD_Height()
                  } else {
                    if (this.m_tuning.bendingModel === Er.b2_pbdTriangleBendingModel) {
                      this.SolveBend_PBD_Triangle()
                    }
                  }
                }
              }
            }
            if (this.m_tuning.stretchingModel === zr.b2_pbdStretchingModel) {
              this.SolveStretch_PBD()
            } else {
              if (this.m_tuning.stretchingModel === zr.b2_xpbdStretchingModel) {
                this.SolveStretch_XPBD(t)
              }
            }
          }
          for (var h = 0; h < this.m_count; ++h) {
            this.m_vs[h].x = n * (this.m_ps[h].x - this.m_p0s[h].x)
            this.m_vs[h].y = n * (this.m_ps[h].y - this.m_p0s[h].y)
            this.m_p0s[h].Copy(this.m_ps[h])
          }
        }
      }
    }, {
      key: "Reset",
      value: function (t) {
        this.m_position.Copy(t)
        for (var e = 0; e < this.m_count; ++e) {
          this.m_ps[e].x = this.m_bindPositions[e].x + this.m_position.x
          this.m_ps[e].y = this.m_bindPositions[e].y + this.m_position.y
          this.m_p0s[e].x = this.m_bindPositions[e].x + this.m_position.x
          this.m_p0s[e].y = this.m_bindPositions[e].y + this.m_position.y
          this.m_vs[e].SetZero()
        }
        for (var i = 0; i < this.m_bendCount; ++i) {
          this.m_bendConstraints[i].lambda = 0
        }
        for (var n = 0; n < this.m_stretchCount; ++n) {
          this.m_stretchConstraints[n].lambda = 0
        }
      }
    }, {
      key: "Draw",
      value: function (t) {
        for (var e = new o(.4, .5, .7), i = new o(.1, .8, .1), n = new o(.7, .2, .4), s = 0; s < this.m_count - 1; ++s) {
          t.DrawSegment(this.m_ps[s], this.m_ps[s + 1], e)
          var r = this.m_invMasses[s] > 0 ? n : i
          t.DrawPoint(this.m_ps[s], 5, r)
        }
        var a = this.m_invMasses[this.m_count - 1] > 0 ? n : i
        t.DrawPoint(this.m_ps[this.m_count - 1], 5, a)
      }
    }, {
      key: "SolveStretch_PBD",
      value: function () {
        for (var /* [auto-meaningful-name] */this$m_tuning$stretchStiffness = this.m_tuning.stretchStiffness, e = 0; e < this.m_stretchCount; ++e) {
          var i = this.m_stretchConstraints[e]
          var n = this.m_ps[i.i1].Clone()
          var s = this.m_ps[i.i2].Clone()
          var r = s.Clone().SelfSub(n)
          var o = r.Normalize()
          var a = i.invMass1 + i.invMass2
          if (0 !== a) {
            var u = i.invMass1 / a
            var l = i.invMass2 / a
            n.x -= this$m_tuning$stretchStiffness * u * (i.L - o) * r.x
            n.y -= this$m_tuning$stretchStiffness * u * (i.L - o) * r.y
            s.x += this$m_tuning$stretchStiffness * l * (i.L - o) * r.x
            s.y += this$m_tuning$stretchStiffness * l * (i.L - o) * r.y
            this.m_ps[i.i1].Copy(n)
            this.m_ps[i.i2].Copy(s)
          }
        }
      }
    }, {
      key: "SolveStretch_XPBD",
      value: function (t) {
        for (var e = 0; e < this.m_stretchCount; ++e) {
          var i = this.m_stretchConstraints[e]
          var n = this.m_ps[i.i1].Clone()
          var s = this.m_ps[i.i2].Clone()
          var r = n.Clone().SelfSub(this.m_p0s[i.i1])
          var o = s.Clone().SelfSub(this.m_p0s[i.i2])
          var a = s.Clone().SelfSub(n)
          var u = a.Normalize()
          var l = a.Clone().SelfNeg()
          var h = a
          var _ = i.invMass1 + i.invMass2
          if (0 !== _) {
            var m = 1 / (i.spring * t * t)
            var c = m * (t * t * i.damper) / t
            var f = u - i.L
            var d = It.DotVV(l, r) + It.DotVV(h, o)
            var v = -(f + m * i.lambda + c * d) / ((1 + c) * _ + m)
            n.x += i.invMass1 * v * l.x
            n.y += i.invMass1 * v * l.y
            s.x += i.invMass2 * v * h.x
            s.y += i.invMass2 * v * h.y
            this.m_ps[i.i1].Copy(n)
            this.m_ps[i.i2].Copy(s)
            i.lambda += v
          }
        }
      }
    }, {
      key: "SolveBend_PBD_Angle",
      value: function () {
        for (var /* [auto-meaningful-name] */this$m_tuning$bendStiffness = this.m_tuning.bendStiffness, e = 0; e < this.m_bendCount; ++e) {
          var i = this.m_bendConstraints[e]
          var n = this.m_ps[i.i1]
          var s = this.m_ps[i.i2]
          var r = this.m_ps[i.i3]
          var o = s.Clone().SelfSub(n)
          var a = r.Clone().SelfSub(s)
          var u = It.CrossVV(o, a)
          var l = It.DotVV(o, a)
          var h = Vt(u, l)
          var _ = 0
          var m = 0
          if (this.m_tuning.isometric) {
            _ = i.L1 * i.L1
            m = i.L2 * i.L2
          } else {
            _ = o.LengthSquared()
            m = a.LengthSquared()
          }
          if (_ * m !== 0) {
            var c = new It().Copy(o).SelfSkew().SelfMul(-1 / _)
            var f = new It().Copy(a).SelfSkew().SelfMul(1 / m)
            var d = c.Clone().SelfNeg()
            var v = c.Clone().SelfSub(f)
            var y = f
            var p = 0
            if (0 === (p = this.m_tuning.fixedEffectiveMass ? i.invEffectiveMass : i.invMass1 * It.DotVV(d, d) + i.invMass2 * It.DotVV(v, v) + i.invMass3 * It.DotVV(y, y))) {
              p = i.invEffectiveMass
            }
            var x = -this$m_tuning$bendStiffness * h / p
            n.x += i.invMass1 * x * d.x
            n.y += i.invMass1 * x * d.y
            s.x += i.invMass2 * x * v.x
            s.y += i.invMass2 * x * v.y
            r.x += i.invMass3 * x * y.x
            r.y += i.invMass3 * x * y.y
            this.m_ps[i.i1].Copy(n)
            this.m_ps[i.i2].Copy(s)
            this.m_ps[i.i3].Copy(r)
          }
        }
      }
    }, {
      key: "SolveBend_XPBD_Angle",
      value: function (t) {
        for (var e = 0; e < this.m_bendCount; ++e) {
          var i = this.m_bendConstraints[e]
          var n = this.m_ps[i.i1]
          var s = this.m_ps[i.i2]
          var r = this.m_ps[i.i3]
          var o = n.Clone().SelfSub(this.m_p0s[i.i1])
          var a = s.Clone().SelfSub(this.m_p0s[i.i2])
          var u = r.Clone().SelfSub(this.m_p0s[i.i3])
          var l = s.Clone().SelfSub(n)
          var h = r.Clone().SelfSub(s)
          var _ = undefined
          var m = undefined
          if (this.m_tuning.isometric) {
            _ = i.L1 * i.L1
            m = i.L2 * i.L2
          } else {
            _ = l.LengthSquared()
            m = h.LengthSquared()
          }
          if (_ * m !== 0) {
            var c = It.CrossVV(l, h)
            var f = It.DotVV(l, h)
            var d = Vt(c, f)
            var v = new It().Copy(l).SelfSkew().SelfMul(-1 / _)
            var y = new It().Copy(h).SelfSkew().SelfMul(1 / m)
            var p = v.Clone().SelfNeg()
            var x = v.Clone().SelfSub(y)
            var B = y
            var S = undefined
            if (0 !== (S = this.m_tuning.fixedEffectiveMass ? i.invEffectiveMass : i.invMass1 * It.DotVV(p, p) + i.invMass2 * It.DotVV(x, x) + i.invMass3 * It.DotVV(B, B))) {
              var A = 1 / (i.spring * t * t)
              var C = A * (t * t * i.damper) / t
              var b = d
              var g = It.DotVV(p, o) + It.DotVV(x, a) + It.DotVV(B, u)
              var V = -(b + A * i.lambda + C * g) / ((1 + C) * S + A)
              n.x += i.invMass1 * V * p.x
              n.y += i.invMass1 * V * p.y
              s.x += i.invMass2 * V * x.x
              s.y += i.invMass2 * V * x.y
              r.x += i.invMass3 * V * B.x
              r.y += i.invMass3 * V * B.y
              this.m_ps[i.i1].Copy(n)
              this.m_ps[i.i2].Copy(s)
              this.m_ps[i.i3].Copy(r)
              i.lambda += V
            }
          }
        }
      }
    }, {
      key: "SolveBend_PBD_Distance",
      value: function () {
        for (var /* [auto-meaningful-name] */this$m_tuning$bendStiffness = this.m_tuning.bendStiffness, e = 0; e < this.m_bendCount; ++e) {
          var i = this.m_bendConstraints[e]
          var n = i.i1
          var s = i.i3
          var r = this.m_ps[n].Clone()
          var o = this.m_ps[s].Clone()
          var a = o.Clone().SelfSub(r)
          var u = a.Normalize()
          var l = i.invMass1 + i.invMass3
          if (0 !== l) {
            var h = i.invMass1 / l
            var _ = i.invMass3 / l
            r.x -= this$m_tuning$bendStiffness * h * (i.L1 + i.L2 - u) * a.x
            r.y -= this$m_tuning$bendStiffness * h * (i.L1 + i.L2 - u) * a.y
            o.x += this$m_tuning$bendStiffness * _ * (i.L1 + i.L2 - u) * a.x
            o.y += this$m_tuning$bendStiffness * _ * (i.L1 + i.L2 - u) * a.y
            this.m_ps[n].Copy(r)
            this.m_ps[s].Copy(o)
          }
        }
      }
    }, {
      key: "SolveBend_PBD_Height",
      value: function () {
        for (var /* [auto-meaningful-name] */this$m_tuning$bendStiffness = this.m_tuning.bendStiffness, e = 0; e < this.m_bendCount; ++e) {
          var i = this.m_bendConstraints[e]
          var n = this.m_ps[i.i1].Clone()
          var s = this.m_ps[i.i2].Clone()
          var r = this.m_ps[i.i3].Clone()
          var o = new It()
          o.x = i.alpha1 * n.x + i.alpha2 * r.x - s.x
          o.y = i.alpha1 * n.y + i.alpha2 * r.y - s.y
          var a = o.Length()
          if (0 !== a) {
            var u = o.Clone().SelfMul(1 / a)
            var l = u.Clone().SelfMul(i.alpha1)
            var h = u.Clone().SelfNeg()
            var _ = u.Clone().SelfMul(i.alpha2)
            var m = i.invMass1 * i.alpha1 * i.alpha1 + i.invMass2 + i.invMass3 * i.alpha2 * i.alpha2
            if (0 !== m) {
              var c = -this$m_tuning$bendStiffness * (1 / m) * a
              n.x += i.invMass1 * c * l.x
              n.y += i.invMass1 * c * l.y
              s.x += i.invMass2 * c * h.x
              s.y += i.invMass2 * c * h.y
              r.x += i.invMass3 * c * _.x
              r.y += i.invMass3 * c * _.y
              this.m_ps[i.i1].Copy(n)
              this.m_ps[i.i2].Copy(s)
              this.m_ps[i.i3].Copy(r)
            }
          }
        }
      }
    }, {
      key: "SolveBend_PBD_Triangle",
      value: function () {
        for (var /* [auto-meaningful-name] */this$m_tuning$bendStiffness = this.m_tuning.bendStiffness, e = 0; e < this.m_bendCount; ++e) {
          var i = this.m_bendConstraints[e]
          var n = this.m_ps[i.i1].Clone()
          var s = this.m_ps[i.i2].Clone()
          var r = this.m_ps[i.i3].Clone()
          var /* [auto-meaningful-name] */i$invMass1 = i.invMass1
          var /* [auto-meaningful-name] */i$invMass2 = i.invMass2
          var /* [auto-meaningful-name] */i$invMass3 = i.invMass3
          var l = this$m_tuning$bendStiffness / (i$invMass1 + i$invMass3 + 2 * i$invMass2)
          var h = new It()
          h.x = s.x - 1 / 3 * (n.x + s.x + r.x)
          h.y = s.y - 1 / 3 * (n.y + s.y + r.y)
          var _ = new It()
          _.x = 2 * i$invMass1 * l * h.x
          _.y = 2 * i$invMass1 * l * h.y
          var m = new It()
          m.x = -4 * i$invMass2 * l * h.x
          m.y = -4 * i$invMass2 * l * h.y
          var c = new It()
          c.x = 2 * i$invMass3 * l * h.x
          c.y = 2 * i$invMass3 * l * h.y
          n.SelfAdd(_)
          s.SelfAdd(m)
          r.SelfAdd(c)
          this.m_ps[i.i1].Copy(n)
          this.m_ps[i.i2].Copy(s)
          this.m_ps[i.i3].Copy(r)
        }
      }
    }, {
      key: "ApplyBendForces",
      value: function (t) {
        for (var e = 2 * v * this.m_tuning.bendHertz, i = 0; i < this.m_bendCount; ++i) {
          var n = this.m_bendConstraints[i]
          var s = this.m_ps[n.i1].Clone()
          var r = this.m_ps[n.i2].Clone()
          var o = this.m_ps[n.i3].Clone()
          var a = this.m_vs[n.i1]
          var u = this.m_vs[n.i2]
          var l = this.m_vs[n.i3]
          var h = s.Clone().SelfSub(s)
          var _ = o.Clone().SelfSub(r)
          var m = undefined
          var c = undefined
          if (this.m_tuning.isometric) {
            m = n.L1 * n.L1
            c = n.L2 * n.L2
          } else {
            m = h.LengthSquared()
            c = _.LengthSquared()
          }
          if (m * c !== 0) {
            var f = It.CrossVV(h, _)
            var d = It.DotVV(h, _)
            var y = Vt(f, d)
            var p = new It().Copy(h).SelfSkew().SelfMul(-1 / m)
            var x = new It().Copy(_).SelfSkew().SelfMul(1 / c)
            var B = p.Clone().SelfNeg()
            var S = p.Clone().SelfSub(x)
            var A = x
            var C = 0
            if (0 !== (C = this.m_tuning.fixedEffectiveMass ? n.invEffectiveMass : n.invMass1 * It.DotVV(B, B) + n.invMass2 * It.DotVV(S, S) + n.invMass3 * It.DotVV(A, A))) {
              var b = 1 / C
              var g = -t * (b * e * e * y + 2 * b * this.m_tuning.bendDamping * e * (It.DotVV(B, a) + It.DotVV(S, u) + It.DotVV(A, l)))
              this.m_vs[n.i1].x += n.invMass1 * g * B.x
              this.m_vs[n.i1].y += n.invMass1 * g * B.y
              this.m_vs[n.i2].x += n.invMass2 * g * S.x
              this.m_vs[n.i2].y += n.invMass2 * g * S.y
              this.m_vs[n.i3].x += n.invMass3 * g * A.x
              this.m_vs[n.i3].y += n.invMass3 * g * A.y
            }
          }
        }
      }
    }
  ])
  return t
}()
var Qr = function t(e, i) {
  Module_27.a(this, t)
  this.prevBody = null
  this.nextBody = null
  this.prevController = null
  this.nextController = null
  this.controller = e
  this.body = i
}
var Yr = function () {
  function t() {
    Module_27.a(this, t)
    this.m_bodyList = null
    this.m_bodyCount = 0
    this.m_prev = null
    this.m_next = null
  }
  Module_39.a(t, [
    {
      key: "GetNext",
      value: function () {
        return this.m_next
      }
    }, {
      key: "GetPrev",
      value: function () {
        return this.m_prev
      }
    }, {
      key: "GetBodyList",
      value: function () {
        return this.m_bodyList
      }
    }, {
      key: "AddBody",
      value: function (t) {
        var e = new Qr(this, t)
        e.nextBody = this.m_bodyList
        e.prevBody = null
        if (this.m_bodyList) {
          this.m_bodyList.prevBody = e
        }
        this.m_bodyList = e
        ++this.m_bodyCount
        e.nextController = t.m_controllerList
        e.prevController = null
        if (t.m_controllerList) {
          t.m_controllerList.prevController = e
        }
        t.m_controllerList = e
        ++t.m_controllerCount
      }
    }, {
      key: "RemoveBody",
      value: function (t) {
        if (this.m_bodyCount <= 0) {
          throw new Error()
        }
        for (var /* [auto-meaningful-name] */this$m_bodyList = this.m_bodyList; this$m_bodyList && this$m_bodyList.body !== t;) {
          this$m_bodyList = this$m_bodyList.nextBody
        }
        if (null === this$m_bodyList) {
          throw new Error()
        }
        if (this$m_bodyList.prevBody) {
          this$m_bodyList.prevBody.nextBody = this$m_bodyList.nextBody
        }
        if (this$m_bodyList.nextBody) {
          this$m_bodyList.nextBody.prevBody = this$m_bodyList.prevBody
        }
        if (this.m_bodyList === this$m_bodyList) {
          this.m_bodyList = this$m_bodyList.nextBody
        }
        --this.m_bodyCount
        if (this$m_bodyList.nextController) {
          this$m_bodyList.nextController.prevController = this$m_bodyList.prevController
        }
        if (this$m_bodyList.prevController) {
          this$m_bodyList.prevController.nextController = this$m_bodyList.nextController
        }
        if (t.m_controllerList === this$m_bodyList) {
          t.m_controllerList = this$m_bodyList.nextController
        }
        --t.m_controllerCount
      }
    }, {
      key: "Clear",
      value: function () {
        for (; this.m_bodyList;) {
          this.RemoveBody(this.m_bodyList.body)
        }
        this.m_bodyCount = 0
      }
    }
  ])
  return t
}()
var Kr = function (t) {
  Module_58.a(i, t)
  var e = Module_59.a(i)
  function i() {
    var t
    Module_27.a(this, i);
    (t = e.apply(this, arguments)).normal = new It(0, 1)
    t.offset = 0
    t.density = 0
    t.velocity = new It(0, 0)
    t.linearDrag = 0
    t.angularDrag = 0
    t.useDensity = false
    t.useWorldGravity = true
    t.gravity = new It(0, 0)
    return t
  }
  Module_39.a(i, [
    {
      key: "Step",
      value: function (t) {
        if (this.m_bodyList) {
          if (this.useWorldGravity) {
            this.gravity.Copy(this.m_bodyList.body.GetWorld().GetGravity())
          }
          for (var /* [auto-meaningful-name] */this$m_bodyList = this.m_bodyList; this$m_bodyList; this$m_bodyList = this$m_bodyList.nextBody) {
            var /* [auto-meaningful-name] */this$m_bodyList$body = this$m_bodyList.body
            if (this$m_bodyList$body.IsAwake()) {
              for (var n = new It(), s = new It(), r = 0, o = 0, a = this$m_bodyList$body.GetFixtureList(); a; a = a.m_next) {
                var u = new It()
                var l = a.GetShape().ComputeSubmergedArea(this.normal, this.offset, this$m_bodyList$body.GetTransform(), u)
                r += l
                n.x += l * u.x
                n.y += l * u.y
                var h = 0
                o += l * (h = this.useDensity ? a.GetDensity() : 1)
                s.x += l * u.x * h
                s.y += l * u.y * h
              }
              n.x /= r
              n.y /= r
              s.x /= o
              s.y /= o
              if (!(r < f)) {
                var _ = this.gravity.Clone().SelfNeg()
                _.SelfMul(this.density * r)
                this$m_bodyList$body.ApplyForce(_, s)
                var m = this$m_bodyList$body.GetLinearVelocityFromWorldPoint(n, new It())
                m.SelfSub(this.velocity)
                m.SelfMul(-this.linearDrag * r)
                this$m_bodyList$body.ApplyForce(m, n)
                this$m_bodyList$body.ApplyTorque(-this$m_bodyList$body.GetInertia() / this$m_bodyList$body.GetMass() * r * this$m_bodyList$body.GetAngularVelocity() * this.angularDrag)
              }
            }
          }
        }
      }
    }, {
      key: "Draw",
      value: function (t) {
        var e = 100
        var i = new It()
        var n = new It()
        i.x = this.normal.x * this.offset + this.normal.y * e
        i.y = this.normal.y * this.offset - this.normal.x * e
        n.x = this.normal.x * this.offset - this.normal.y * e
        n.y = this.normal.y * this.offset + this.normal.x * e
        var s = new o(0, 0, .8)
        t.DrawSegment(i, n, s)
      }
    }
  ])
  return i
}(Yr)
var Hr = function (t) {
  Module_58.a(i, t)
  var e = Module_59.a(i)
  function i() {
    var t
    Module_27.a(this, i);
    (t = e.apply(this, arguments)).A = new It(0, 0)
    return t
  }
  Module_39.a(i, [
    {
      key: "Step",
      value: function (t) {
        for (var e = It.MulSV(t.dt, this.A, i.Step_s_dtA), /* [auto-meaningful-name] */this$m_bodyList = this.m_bodyList; this$m_bodyList; this$m_bodyList = this$m_bodyList.nextBody) {
          var /* [auto-meaningful-name] */this$m_bodyList$body = this$m_bodyList.body
          if (this$m_bodyList$body.IsAwake()) {
            this$m_bodyList$body.SetLinearVelocity(It.AddVV(this$m_bodyList$body.GetLinearVelocity(), e, It.s_t0))
          }
        }
      }
    }, {
      key: "Draw",
      value: function (t) {}
    }
  ])
  return i
}(Yr)
Hr.Step_s_dtA = new It()
var $r = function (t) {
  Module_58.a(i, t)
  var e = Module_59.a(i)
  function i() {
    var t
    Module_27.a(this, i);
    (t = e.apply(this, arguments)).F = new It(0, 0)
    return t
  }
  Module_39.a(i, [
    {
      key: "Step",
      value: function (t) {
        for (var /* [auto-meaningful-name] */this$m_bodyList = this.m_bodyList; this$m_bodyList; this$m_bodyList = this$m_bodyList.nextBody) {
          var /* [auto-meaningful-name] */this$m_bodyList$body = this$m_bodyList.body
          if (this$m_bodyList$body.IsAwake()) {
            this$m_bodyList$body.ApplyForce(this.F, this$m_bodyList$body.GetWorldCenter())
          }
        }
      }
    }, {
      key: "Draw",
      value: function (t) {}
    }
  ])
  return i
}(Yr)
var to = function (t) {
  Module_58.a(i, t)
  var e = Module_59.a(i)
  function i() {
    var t
    Module_27.a(this, i);
    (t = e.apply(this, arguments)).G = 1
    t.invSqr = true
    return t
  }
  Module_39.a(i, [
    {
      key: "Step",
      value: function (t) {
        if (this.invSqr) {
          for (var /* [auto-meaningful-name] */this$m_bodyList = this.m_bodyList; this$m_bodyList; this$m_bodyList = this$m_bodyList.nextBody) {
            for (var /* [auto-meaningful-name] */this$m_bodyList$body = this$m_bodyList.body, s = this$m_bodyList$body.GetWorldCenter(), r = this$m_bodyList$body.GetMass(), /* [auto-meaningful-name] */this$m_bodyList1 = this.m_bodyList; this$m_bodyList1 && this$m_bodyList1 !== this$m_bodyList; this$m_bodyList1 = this$m_bodyList1.nextBody) {
              var /* [auto-meaningful-name] */this$m_bodyList1$body = this$m_bodyList1.body
              var u = this$m_bodyList1$body.GetWorldCenter()
              var l = this$m_bodyList1$body.GetMass()
              var h = u.x - s.x
              var _ = u.y - s.y
              var m = h * h + _ * _
              if (!(m < f)) {
                var c = i.Step_s_f.Set(h, _)
                c.SelfMul(this.G / m / pt(m) * r * l)
                if (this$m_bodyList$body.IsAwake()) {
                  this$m_bodyList$body.ApplyForce(c, s)
                }
                if (this$m_bodyList1$body.IsAwake()) {
                  this$m_bodyList1$body.ApplyForce(c.SelfMul(-1), u)
                }
              }
            }
          }
        } else {
          for (var /* [auto-meaningful-name] */this$m_bodyList2 = this.m_bodyList; this$m_bodyList2; this$m_bodyList2 = this$m_bodyList2.nextBody) {
            for (var /* [auto-meaningful-name] */this$m_bodyList2$body = this$m_bodyList2.body, y = this$m_bodyList2$body.GetWorldCenter(), p = this$m_bodyList2$body.GetMass(), /* [auto-meaningful-name] */this$m_bodyList3 = this.m_bodyList; this$m_bodyList3 && this$m_bodyList3 !== this$m_bodyList2; this$m_bodyList3 = this$m_bodyList3.nextBody) {
              var /* [auto-meaningful-name] */this$m_bodyList3$body = this$m_bodyList3.body
              var S = this$m_bodyList3$body.GetWorldCenter()
              var A = this$m_bodyList3$body.GetMass()
              var C = S.x - y.x
              var b = S.y - y.y
              var g = C * C + b * b
              if (!(g < f)) {
                var V = i.Step_s_f.Set(C, b)
                V.SelfMul(this.G / g * p * A)
                if (this$m_bodyList2$body.IsAwake()) {
                  this$m_bodyList2$body.ApplyForce(V, y)
                }
                if (this$m_bodyList3$body.IsAwake()) {
                  this$m_bodyList3$body.ApplyForce(V.SelfMul(-1), S)
                }
              }
            }
          }
        }
      }
    }, {
      key: "Draw",
      value: function (t) {}
    }
  ])
  return i
}(Yr)
to.Step_s_f = new It()
var eo = function (t) {
  Module_58.a(i, t)
  var e = Module_59.a(i)
  function i() {
    var t
    Module_27.a(this, i);
    (t = e.apply(this, arguments)).T = new Lt()
    t.maxTimestep = 0
    return t
  }
  Module_39.a(i, [
    {
      key: "Step",
      value: function (t) {
        var e = t.dt
        if (!(e <= f)) {
          if (e > this.maxTimestep && this.maxTimestep > 0) {
            e = this.maxTimestep
          }
          for (var /* [auto-meaningful-name] */this$m_bodyList = this.m_bodyList; this$m_bodyList; this$m_bodyList = this$m_bodyList.nextBody) {
            var /* [auto-meaningful-name] */this$m_bodyList$body = this$m_bodyList.body
            if (this$m_bodyList$body.IsAwake()) {
              var r = this$m_bodyList$body.GetWorldVector(Lt.MulMV(this.T, this$m_bodyList$body.GetLocalVector(this$m_bodyList$body.GetLinearVelocity(), It.s_t0), It.s_t1), i.Step_s_damping)
              this$m_bodyList$body.SetLinearVelocity(It.AddVV(this$m_bodyList$body.GetLinearVelocity(), It.MulSV(e, r, It.s_t0), It.s_t1))
            }
          }
        }
      }
    }, {
      key: "Draw",
      value: function (t) {}
    }, {
      key: "SetAxisAligned",
      value: function (t, e) {
        this.T.ex.x = -t
        this.T.ex.y = 0
        this.T.ey.x = 0
        this.T.ey.y = -e
        this.maxTimestep = t > 0 || e > 0 ? 1 / mt(t, e) : 0
      }
    }
  ])
  return i
}(Yr)
eo.Step_s_damping = new It()
var /* [auto-meaningful-name] */Un$b2_staticBody = Un.b2_staticBody
var /* [auto-meaningful-name] */Un$b2_kinematicBody = Un.b2_kinematicBody
var /* [auto-meaningful-name] */Un$b2_dynamicBody = Un.b2_dynamicBody
var /* [auto-meaningful-name] */Er$b2_springAngleBendingModel = Er.b2_springAngleBendingModel
var /* [auto-meaningful-name] */Er$b2_pbdAngleBendingModel = Er.b2_pbdAngleBendingModel
var /* [auto-meaningful-name] */Er$b2_xpbdAngleBendingModel = Er.b2_xpbdAngleBendingModel
var /* [auto-meaningful-name] */Er$b2_pbdDistanceBendingModel = Er.b2_pbdDistanceBendingModel
var /* [auto-meaningful-name] */Er$b2_pbdHeightBendingModel = Er.b2_pbdHeightBendingModel
var /* [auto-meaningful-name] */Er$b2_pbdTriangleBendingModel = Er.b2_pbdTriangleBendingModel
var /* [auto-meaningful-name] */zr$b2_pbdStretchingModel = zr.b2_pbdStretchingModel
var /* [auto-meaningful-name] */zr$b2_xpbdStretchingModel = zr.b2_xpbdStretchingModel
export { Jn }
export { Xn }
export { Zn }
export { Un }
export { Wn }
export { Qn }
export { Yn }
export { Kn }
export { Hn }
export { $n }
export { ts }
export { es }
export { is }
export { ns }
export { ss }
export { rs }
export { os }
export { as }
export { us }
export { ls }
export { hs }
export { _s }
export { ms }
export { cs }
export { fs }
export { ds }
export { vs }
export { ys }
export { ps }
export { xs }
export { Bs }
export { Ss }
export { As }
export { Cs }
export { bs }
export { gs }
export { Vs }
export { ws }
export { ks }
export { Ms }
export { Ps }
export { Is }
export { Gs }
export { Ds }
export { Fs }
export { Ls }
export { Rs }
export { js }
export { Ts }
export { Os }
export { qs }
export { zs }
export { Es }
export { Ns }
export { Js }
export { Xs }
export { Zs }
export { Us }
export { Ws }
export { Qs }
export { Ys }
export { Ks }
export { Hs }
export { $s }
export { tr }
export { er }
export { ir }
export { nr }
export { sr }
export { rr }
export { or }
export { ar }
export { ur }
export { yr }
export { pr }
export { xr }
export { Br }
export { Sr }
export { Ar }
export { Cr }
export { br }
export { gr }
export { Vr }
export { wr }
export { kr }
export { Mr }
export { Pr }
export { Gr }
export { Fr }
export { Lr }
export { Rr }
export { jr }
export { Tr }
export { Or }
export { qr }
export { zr }
export { Er }
export { Nr }
export { Jr }
export { Xr }
export { Wr }
export { Qr }
export { Yr }
export { Kr }
export { Hr }
export { $r }
export { to }
export { eo }
export { Un$b2_staticBody as io }
export { Un$b2_kinematicBody as no }
export { Un$b2_dynamicBody as so }
export { Er$b2_springAngleBendingModel as ro }
export { Er$b2_pbdAngleBendingModel as oo }
export { Er$b2_xpbdAngleBendingModel as ao }
export { Er$b2_pbdDistanceBendingModel as uo }
export { Er$b2_pbdHeightBendingModel as lo }
export { Er$b2_pbdTriangleBendingModel as ho }
export { zr$b2_pbdStretchingModel as _o }
export { zr$b2_xpbdStretchingModel as mo }
