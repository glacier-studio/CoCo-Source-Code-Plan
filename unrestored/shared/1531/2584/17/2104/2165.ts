"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.MutationRemoveButton = exports.MutationAddButton = void 0;
var r = require("../../1001/93");
var i = require("../../1001/134/index");
var o = require("../../125/index");
var a = function (e) {
  function t(t, n, r) {
    if (void 0 === r) {
      r = 20;
    }
    var i = e.call(this, {
      src: "",
      width: r,
      height: r
    }) || this;
    i.is_add = t;
    i.index_ = n;
    i.field_type = "FieldMutation";
    return i;
  }
  (0, r.__extends)(t, e);
  t.prototype.init = function () {
    var e;
    var t = this;
    if (!this.field_group) {
      this.field_group = (0, o.create_svg_element)("g", {}, void 0);
      if (!this.visible_) {
        this.field_group.style.display = "none";
      }
      this.image_element = (0, o.create_svg_element)("g", {
        width: this.width_,
        height: this.height_,
        class: "fieldButton"
      }, this.field_group);
      this.rect_element = (0, o.create_svg_element)("rect", {
        width: this.width_,
        height: this.height_,
        rx: this.width_ / 2,
        ry: this.width_ / 2,
        stroke: "rgba(0, 0, 0, .15)",
        fill: "rgba(255, 255, 255, .15)"
      }, this.image_element);
      (0, o.create_svg_element)("line", {
        stroke: "#fff",
        "stroke-width": 2,
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-miterlimit": 10,
        x1: this.width_ / 3,
        y1: this.height_ / 2,
        x2: 2 * this.width_ / 3,
        y2: this.height_ / 2
      }, this.image_element);
      if (this.is_add) {
        (0, o.create_svg_element)("line", {
          stroke: "#fff",
          "stroke-width": 2,
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          "stroke-miterlimit": 10,
          x1: this.width_ / 2,
          y1: this.height_ / 3,
          x2: this.width_ / 2,
          y2: 2 * this.height_ / 3
        }, this.image_element);
      }
      this.events.bind_event_with_checks(this.field_group, "mousedown", this, function () {
        if (t.rect_element) {
          t.rect_element.style.fill = "rgba(0, 0, 0, .15)";
        }
      });
      var n = null === (e = this.source_block) || void 0 === e ? void 0 : e.get_svg_root();
      if (void 0 == n) {
        throw new ReferenceError("Field should have svg root when init.");
      }
      n.appendChild(this.field_group);
      this.events.bind_event_with_checks(this.field_group, "mouseup", this, this.on_click);
      this.mouse_down_wrapper = this.events.bind_event_with_checks(this.field_group, "mousedown", this, this.on_mouse_down);
    }
  };
  t.prototype.get_img_scale = function () {
    return 1;
  };
  t.prototype.on_click = function (e) {
    var t;
    var n;
    if (this.source_block) {
      if (this.rect_element) {
        this.rect_element.style.fill = "rgba(255, 255, 255, .15)";
      }
      var r = this.source_block.get_workspace().get_gesture(e);
      if (r && r.is_dragging_block) {
        r.handle_up(e);
      } else if (!this.source_block.is_in_flyout && !this.utils.is_right_button(e)) {
        if (r) {
          r.update_is_mutation_click(!0);
          r.handle_up(e);
        }
        if (!this.events.is_enabled()) {
          return;
        }
        var i = this.events.get_group();
        this.events.set_group(i || !0);
        var o = this.source_block;
        if (this.is_add) {
          if (!(null === (t = o.addMutation) || void 0 === t)) {
            t.call(o, this.index_, this.name);
          }
        } else {
          if (!(null === (n = o.removeMutation) || void 0 === n)) {
            n.call(o, this.index_, this.name);
          }
        }
        o.bump_neighbours();
        this.events.set_group(i);
      }
    }
  };
  t.prototype.set_index = function (e) {
    this.index_ = e;
  };
  return t;
}(require("../../301/541").FieldImage);
var s = function (e) {
  function t() {
    return e.call(this, !0) || this;
  }
  (0, r.__extends)(t, e);
  return t = (0, r.__decorate)([(0, i.injectable)()], t);
}(a);
exports.MutationAddButton = s;
var c = function (e) {
  function t(t) {
    if (void 0 === t) {
      t = void 0;
    }
    return e.call(this, !1, t) || this;
  }
  (0, r.__extends)(t, e);
  return t = (0, r.__decorate)([(0, i.injectable)()], t);
}(a);
exports.MutationRemoveButton = c;