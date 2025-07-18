"use strict";

var r = this && this.__extends || function () {
  var e = function (t, n) {
    return (e = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var n in t) if (t.hasOwnProperty(n)) {
        e[n] = t[n];
      }
    })(t, n);
  };
  return function (t, n) {
    function r() {
      this.constructor = t;
    }
    e(t, n);
    t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
}();
var o = this && this.__assign || function () {
  return (o = Object.assign || function (e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      for (var o in t = arguments[n]) if (Object.prototype.hasOwnProperty.call(t, o)) {
        e[o] = t[o];
      }
    }
    return e;
  }).apply(this, arguments);
};
import * as i from "../../0/index";
import * as a from "../../75/index";
import * as s from "../1420/871";
import * as c from "./2549/1422/index";
import * as l from "./2549/1423";
import * as u from "./2549/1424/index";
var d = function (e) {
  function t(t, n, r) {
    var o = e.call(this, t, n, r) || this;
    o.oldPortal = null;
    o.key = l.default();
    o.portalKey = l.default();
    return o;
  }
  r(t, e);
  t.prototype.init = function (e) {
    var t = this;
    this.eParentElement = this.createParentElement(e);
    this.params = e;
    this.createOrUpdatePortal(e);
    return new s.AgPromise(function (e) {
      return t.createReactComponent(e);
    });
  };
  t.prototype.createOrUpdatePortal = function (e) {
    var t = this;
    if (!this.isStatelessComponent()) {
      e.ref = function (e) {
        t.componentInstance = e;
        t.addParentContainerStyleAndClasses();
      };
    }
    this.reactElement = i.createElement(this.reactComponent, o(o({}, e), {
      key: this.key
    }));
    this.portal = a.createPortal(this.reactElement, this.eParentElement, this.portalKey);
  };
  t.prototype.createReactComponent = function (e) {
    this.parentComponent.mountReactPortal(this.portal, this, function (t) {
      e(t);
    });
  };
  t.prototype.isNullValue = function () {
    return this.valueRenderedIsNull(this.params);
  };
  t.prototype.rendered = function () {
    return this.isStatelessComponent() && this.statelessComponentRendered() || !(this.isStatelessComponent() || !this.getFrameworkComponentInstance());
  };
  t.prototype.valueRenderedIsNull = function (e) {
    if (this.componentType.isCellRenderer && !this.componentType.isCellRenderer()) {
      return !1;
    }
    var t = console.error;
    try {
      console.error = function () {};
      return "" === u.renderToStaticMarkup(i.createElement(this.reactComponent, e));
    } catch (n) {} finally {
      console.error = t;
    }
    return !1;
  };
  t.prototype.refreshComponent = function (e) {
    this.oldPortal = this.portal;
    this.createOrUpdatePortal(e);
    this.parentComponent.updateReactPortal(this.oldPortal, this.portal);
  };
  t.prototype.fallbackMethod = function (e, t) {
    var n = this[e + "Component"];
    if (n) {
      return n.bind(this)(t);
    }
  };
  t.prototype.fallbackMethodAvailable = function (e) {
    return !!this[e + "Component"];
  };
  return t;
}(c.ReactComponent);
export { d as NewReactComponent };