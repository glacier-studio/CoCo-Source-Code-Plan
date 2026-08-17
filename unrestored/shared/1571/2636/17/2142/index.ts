/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2142
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.bind_di_modules = undefined
var r = require(/* 2143 */"./2143/index")
var i = require(/* 2155 */"./2155/index")
var o = require(/* 2159 */"./2159")
var a = require(/* 2160 */"../../../../../../src/shared/packages/@crc/blink/src/core/flyout/flyout_vertical")
var s = require(/* 2162 */"./2162")
var c = require(/* 2163 */"./2163")
var u = require(/* 2164 */"../../../../../../src/shared/packages/@crc/blink/src/core/gesture/gesture")
var l = require(/* 2165 */"./2165/index")
var f = require(/* 1348 */"./1348")
var d = require(/* 2166 */"./2166/index")
var h = require(/* 2169 */"./2169/index")
var p = require(/* 2170 */"./2170")
var _ = require(/* 2171 */"./2171")
var A = require(/* 2172 */"./2172")
var g = require(/* 2173 */"./2173")
var v = require(/* 2174 */"../../../../../../src/shared/packages/@crc/blink/src/core/singletons/events")
var m = require(/* 2175 */"./2175")
var y = require(/* 2176 */"./2176")
var b = require(/* 2177 */"./2177")
var w = require(/* 2178 */"./2178")
var E = require(/* 1022 */"../../1022/index")
var x = require(/* 2179 */"./2179")
var C = require(/* 2180 */"./2180")
var O = require(/* 2181 */"./2181/index")
var k = require(/* 2184 */"./2184")
var S = require(/* 2185 */"./2185")
var T = require(/* 2186 */"./2186")
var B = require(/* 2187 */"./2187/index")
var D = require(/* 2188 */"./2188/index")
var I = require(/* 2189 */"./2189")
var R = require(/* 2190 */"./2190")
var F = require(/* 2191 */"./2191/index")
var P = require(/* 2193 */"./2193")
var N = require(/* 2194 */"./2194")
var M = require(/* 2195 */"./2195")
var L = require(/* 2196 */"./2196")
var j = require(/* 2197 */"./2197")
var U = require(/* 2198 */"./2198")
var H = require(/* 977 */"./977")
var V = require(/* 2199 */"./2199")
var G = require(/* 735 */"../../301/735")
var z = require(/* 736 */"../../118/736")
var Q = require(/* 2200 */"./2200")
var W = require(/* 544 */"../../301/544")
var K = require(/* 2201 */"./2201")
var X = require(/* 658 */"../../301/658")
var Y = require(/* 2202 */"./2202")
var q = require(/* 2203 */"./2203")
var $ = require(/* 327 */"../../301/327")
var J = require(/* 2204 */"./2204")
var Z = require(/* 374 */"../../301/374")
var ee = require(/* 2205 */"./2205")
var te = require(/* 2206 */"./2206")
var ne = require(/* 2207 */"./2207/index")
var re = require(/* 2210 */"./2210")
var ie = require(/* 1355 */"./1355")
var oe = require(/* 2211 */"./2211")
var ae = require(/* 2212 */"./2212")
var se = require(/* 2213 */"./2213")
var ce = require(/* 2214 */"./2214")
var ue = require(/* 2215 */"./2215")
var le = require(/* 2216 */"./2216")
var fe = require(/* 2217 */"./2217")
var de = require(/* 214 */"../../1022/214")
var he = require(/* 646 */"../646")
exports.bind_di_modules = function (e) {
  e.bind(he.BINDING.ChangeEvent).toFunction(function (e, t) {
    if (!function (e) {
      return e.block instanceof H.WorkspaceElement
    }(t) || "string" !== typeof e) {
      throw new Error("\n        Trying to create invalid change event with event " + e + " and param " + t + ".\n        It may caused by wrong custom change event subtype registry.\n        Note that options of any change event should include [block], [old_value] and [new_value].\n        Check https://codemao.yuque.com/milktea/blink/zy9tlg for more information.\n      ")
    }
    return new r.ChangeEvent(e, t)
  })
  e.bind(he.BINDING.CreateEvent).toFunction(function (e) {
    return new r.CreateEvent(e)
  })
  e.bind(he.BINDING.DeleteEvent).toFunction(function (e) {
    return new r.DeleteEvent(e)
  })
  e.bind(he.BINDING.DragAreaChangeEvent).toFunction(function (e) {
    return new r.DragAreaChangeEvent(e)
  })
  e.bind(he.BINDING.EndDragEvent).toFunction(function (e) {
    return new r.EndDragEvent(e)
  })
  e.bind(he.BINDING.MoveEvent).toFunction(function (e) {
    return new r.MoveEvent(e)
  })
  e.bind(he.BINDING.StartDragEvent).toFunction(function (e) {
    return new r.StartDragEvent(e)
  })
  e.bind(he.BINDING.ContextMenuOptionEvent).toFunction(function (e) {
    return new i.ContextMenuOptionEvent(e)
  })
  e.bind(he.BINDING.GroupEvent).toFunction(function (e) {
    return new i.GroupEvent(e)
  })
  e.bind(he.BINDING.UIEvent).toFunction(function (e) {
    return new i.UIEvent(e)
  })
  e.bind(he.BINDING.FlyoutButton).toFunction(function (e) {
    return new o.FlyoutButton(e)
  })
  e.bind(he.BINDING.VerticalFlyout).toFunction(function (e) {
    return new a.VerticalFlyout(e)
  })
  e.bind(he.BINDING.WorkspaceElementDragger).toFunction(function (e) {
    if ((0, de.is_block_svg)(e.target)) {
      return new s.BlockDragger({
        target: e.target,
        workspace: e.workspace
      })
    }
    if ((0, de.is_workspace_comment)(e.target)) {
      return new l.WorkspaceCommentDragger({
        target: e.target,
        workspace: e.workspace
      })
    }
    throw Error("Trying to drag invalid element")
  })
  e.bind(he.BINDING.WorkspaceDragger).toFunction(function (e) {
    return (0, de.is_workspace)(e) ? new f.WorkspaceDragger(e) : new c.FlyoutDragger(e)
  })
  e.bind(he.BINDING.Gesture).toFunction(function (e) {
    return new u.Gesture(e)
  })
  e.bind(he.BINDING.Blink).to(d.Blink).inSingletonScope()
  e.bind(he.BINDING.block_animations).to(h.BlockAnimations).inSingletonScope()
  e.bind(he.BINDING.context_menu).to(p.ContextMenu).inSingletonScope()
  e.bind(he.BINDING.css).to(_.Css).inSingletonScope()
  e.bind(he.BINDING.dragged_connection_manager).to(A.DraggedConnectionManager).inSingletonScope()
  e.bind(he.BINDING.insertion_marker_manager).to(g.InsertionMarkerManager).inSingletonScope()
  e.bind(he.BINDING.events).to(v.Events).inSingletonScope()
  e.bind(he.BINDING.extensions).to(m.Extensions).inSingletonScope()
  e.bind(he.BINDING.json).to(y.Json).inSingletonScope()
  e.bind(he.BINDING.registry).to(b.Registry).inSingletonScope()
  e.bind(he.BINDING.runtime_data).to(w.RuntimeData).inSingletonScope()
  e.bind(he.BINDING.theme).to(E.Theme).inSingletonScope()
  e.bind(he.BINDING.tooltip).to(x.Tooltip).inSingletonScope()
  e.bind(he.BINDING.touch_manager).to(C.TouchManager).inSingletonScope()
  e.bind(he.BINDING.utils).to(O.Utils).inSingletonScope()
  e.bind(he.BINDING.widget_div).to(k.WidgetDiv).inSingletonScope()
  e.bind(he.BINDING.workspace_db).to(S.WorkspaceDB).inSingletonScope()
  e.bind(he.BINDING.xml).to(T.Xml).inSingletonScope()
  e.bind(he.BINDING.slider_controller).to(B.SliderController).inSingletonScope()
  e.bind(he.BINDING.angle_controller).to(D.AngleController).inSingletonScope()
  e.bind(he.BINDING.color_controller).to(R.ColorController).inSingletonScope()
  e.bind(he.BINDING.Toolbox).toFunction(function (e) {
    return new F.Toolbox(e)
  })
  e.bind(he.BINDING.BlockDragSurfaceSvg).toFunction(function (e) {
    return new P.BlockDragSurfaceSvg(e)
  })
  e.bind(he.BINDING.ConnectionDB).toFunction(function () {
    return new N.ConnectionDB()
  })
  e.bind(he.BINDING.Grid).toFunction(function (e) {
    return new M.Grid(e)
  })
  e.bind(he.BINDING.WorkspaceAudio).toFunction(function (e) {
    return new L.WorkspaceAudio(e)
  })
  e.bind(he.BINDING.WorkspaceDragSurfaceSvg).toFunction(function (e, t) {
    return new j.WorkspaceDragSurfaceSvg(e, t)
  })
  e.bind(he.BINDING.WorkspaceSvg).toFunction(function (e, t, n, r) {
    return new U.WorkspaceSvg(e, t, n, r)
  })
  e.bind(he.BINDING.FieldButton).toFunction(function (e) {
    return new V.FieldButton(e)
  })
  e.bind(he.BINDING.FieldColour).toFunction(function (e) {
    return new G.FieldColour(e)
  })
  e.bind(he.BINDING.FieldDropdown).toFunction(function (e) {
    return new z.FieldDropdown(e)
  })
  e.bind(he.BINDING.FieldIcon).toFunction(function (e) {
    return new Q.FieldIcon(e)
  })
  e.bind(he.BINDING.FieldImage).toFunction(function (e) {
    return new W.FieldImage(e)
  })
  e.bind(he.BINDING.FieldLabel).toFunction(function (e) {
    return new X.FieldLabel(e)
  })
  e.bind(he.BINDING.FieldLabelSerializable).toFunction(function (e) {
    return new K.FieldLabelSerializable(e)
  })
  e.bind(he.BINDING.FieldMultilineInput).toFunction(function (e) {
    return new Y.FieldMultilineInput(e)
  })
  e.bind(he.BINDING.MutationAddButton).toFunction(function () {
    return new q.MutationAddButton()
  })
  e.bind(he.BINDING.MutationRemoveButton).toFunction(function (e) {
    return new q.MutationRemoveButton(e)
  })
  e.bind(he.BINDING.FieldNumber).toFunction(function (e) {
    return new $.FieldNumber(e)
  })
  e.bind(he.BINDING.FieldTextDropdown).toFunction(function (e) {
    return new J.FieldTextDropdown(e)
  })
  e.bind(he.BINDING.FieldTextInput).toFunction(function (e) {
    return new Z.FieldTextInput(e)
  })
  e.bind(he.BINDING.FieldDefaultValue).toFunction(function (e) {
    return new ee.FieldDefaultValue(e)
  })
  e.bind(he.BINDING.Input).toFunction(function (e) {
    return new te.Input(e)
  })
  e.bind(he.BINDING.RenderedConnection).toFunction(function (e) {
    return new oe.RenderedConnection(e)
  })
  e.bind(he.BINDING.BlockSvg).toFunction(function (e) {
    return new ((0, ne.block_render_svg)(ie.BlockSvg))(e)
  })
  e.bind(he.BINDING.BlockGroup).toFunction(function (e) {
    return new ((0, ne.block_render_svg)(re.BlockGroup))(e)
  })
  e.bind(he.BINDING.SimplifiedCommentBubble).to(I.SimplifiedCommentBubble).inSingletonScope()
  e.bind(he.BINDING.WorkspaceComment).toFunction(function (e) {
    return "simplified" === e.type ? new se.SimplifiedWorkspaceComment(e.workspace, e.parent_block, e.position, e.opt_id) : new ae.WorkspaceComment(e.workspace, e.parent_block, e.position, e.opt_id)
  })
  e.bind(he.BINDING.Options).toFunction(function (e) {
    return new ce.Options(e)
  })
  e.bind(he.BINDING.Scrollbar).toFunction(function (e, t, n, r, i) {
    return new ue.Scrollbar(e, t, n, r, i)
  })
  e.bind(he.BINDING.ScrollbarPair).toFunction(function (e, t) {
    return new ue.ScrollbarPair(e, t)
  })
  e.bind(he.BINDING.Msg).toConstantValue(fe.Msg)
  e.bind(he.BINDING.css_content).toConstantValue(le.BLINK_CSS_CONTENT)
}
