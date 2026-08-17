/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2781
 */

"use strict"

var a = require(/* 1068 */"../../../13/780/1068")
var r = require(/* 571 */"../../../13/780/571")
Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.default = undefined
var o = r(require(/* 1066 */"../../../13/780/1066"))
var i = r(require(/* 1067 */"../../../13/780/1067"))
var l = r(require(/* 1070 */"../../../13/780/1070/index"))
var u = r(require(/* 940 */"../../../13/780/940"))
var s = r(require(/* 1551 */"../../../13/780/1070/1551"))
var d = r(require(/* 1069 */"../../../13/780/1069/index"))
var c = r(require(/* 50 */"../../../50/index"))
var f = a(require(/* 0 */"react"))
var h = require(/* 80 */"react-dom")
var p = r(require(/* 8 */"classnames"))
var v = a(require(/* 2751 */"./2916/2751"))
var m = {
  className: c.default.string,
  onMouseDown: c.default.func,
  onMouseMove: c.default.func,
  stepForward: c.default.func,
  stepBack: c.default.func,
  sliderActive: c.default.func,
  sliderInactive: c.default.func,
  onMouseUp: c.default.func,
  onFocus: c.default.func,
  onBlur: c.default.func,
  onClick: c.default.func,
  getPercent: c.default.func,
  vertical: c.default.bool,
  children: c.default.node,
  label: c.default.string,
  valuenow: c.default.string,
  valuetext: c.default.string
}
var y = function (e) {
  function t(e, n) {
    var a;
    (0, o.default)(this, t);
    (a = (0, l.default)(this, (0, u.default)(t).call(this, e, n))).handleMouseDown = a.handleMouseDown.bind((0, s.default)(a))
    a.handleMouseMove = a.handleMouseMove.bind((0, s.default)(a))
    a.handleMouseUp = a.handleMouseUp.bind((0, s.default)(a))
    a.handleFocus = a.handleFocus.bind((0, s.default)(a))
    a.handleBlur = a.handleBlur.bind((0, s.default)(a))
    a.handleClick = a.handleClick.bind((0, s.default)(a))
    a.handleKeyPress = a.handleKeyPress.bind((0, s.default)(a))
    a.stepForward = a.stepForward.bind((0, s.default)(a))
    a.stepBack = a.stepBack.bind((0, s.default)(a))
    a.calculateDistance = a.calculateDistance.bind((0, s.default)(a))
    a.getProgress = a.getProgress.bind((0, s.default)(a))
    a.renderChildren = a.renderChildren.bind((0, s.default)(a))
    a.state = {
      active: false
    }
    return a
  }
  (0, d.default)(t, e);
  (0, i.default)(t, [
    {
      key: "componentWillUnmount",
      value: function () {
        document.removeEventListener("mousemove", this.handleMouseMove, true)
        document.removeEventListener("mouseup", this.handleMouseUp, true)
        document.removeEventListener("touchmove", this.handleMouseMove, true)
        document.removeEventListener("touchend", this.handleMouseUp, true)
        document.removeEventListener("keydown", this.handleKeyPress, true)
      }
    }, {
      key: "getProgress",
      value: function () {
        var /* [auto-meaningful-name] */this$props$getPercent = this.props.getPercent
        if (!this$props$getPercent) {
          return 0
        }
        var t = this$props$getPercent()
        if ("number" !== typeof t || t < 0 || t === 1 / 0) {
          t = 0
        }
        return t
      }
    }, {
      key: "handleMouseDown",
      value: function (e) {
        var /* [auto-meaningful-name] */this$props$onMouseDown = this.props.onMouseDown
        document.addEventListener("mousemove", this.handleMouseMove, true)
        document.addEventListener("mouseup", this.handleMouseUp, true)
        document.addEventListener("touchmove", this.handleMouseMove, true)
        document.addEventListener("touchend", this.handleMouseUp, true)
        this.setState({
          active: true
        })
        if (this.props.sliderActive) {
          this.props.sliderActive(e)
        }
        this.handleMouseMove(e)
        if (this$props$onMouseDown) {
          this$props$onMouseDown(e)
        }
      }
    }, {
      key: "handleMouseMove",
      value: function (e) {
        var /* [auto-meaningful-name] */this$props$onMouseMove = this.props.onMouseMove
        if (this$props$onMouseMove) {
          this$props$onMouseMove(e)
        }
      }
    }, {
      key: "handleMouseUp",
      value: function (e) {
        var /* [auto-meaningful-name] */this$props$onMouseUp = this.props.onMouseUp
        document.removeEventListener("mousemove", this.handleMouseMove, true)
        document.removeEventListener("mouseup", this.handleMouseUp, true)
        document.removeEventListener("touchmove", this.handleMouseMove, true)
        document.removeEventListener("touchend", this.handleMouseUp, true)
        this.setState({
          active: false
        })
        if (this.props.sliderInactive) {
          this.props.sliderInactive(e)
        }
        if (this$props$onMouseUp) {
          this$props$onMouseUp(e)
        }
      }
    }, {
      key: "handleFocus",
      value: function (e) {
        document.addEventListener("keydown", this.handleKeyPress, true)
        if (this.props.onFocus) {
          this.props.onFocus(e)
        }
      }
    }, {
      key: "handleBlur",
      value: function (e) {
        document.removeEventListener("keydown", this.handleKeyPress, true)
        if (this.props.onBlur) {
          this.props.onBlur(e)
        }
      }
    }, {
      key: "handleClick",
      value: function (e) {
        e.preventDefault()
        if (this.props.onClick) {
          this.props.onClick(e)
        }
      }
    }, {
      key: "handleKeyPress",
      value: function (e) {
        if (37 === e.which || 40 === e.which) {
          e.preventDefault()
          e.stopPropagation()
          this.stepBack()
        } else {
          if (!(38 !== e.which && 39 !== e.which)) {
            e.preventDefault()
            e.stopPropagation()
            this.stepForward()
          }
        }
      }
    }, {
      key: "stepForward",
      value: function () {
        if (this.props.stepForward) {
          this.props.stepForward()
        }
      }
    }, {
      key: "stepBack",
      value: function () {
        if (this.props.stepBack) {
          this.props.stepBack()
        }
      }
    }, {
      key: "calculateDistance",
      value: function (e) {
        var t = (0, h.findDOMNode)(this)
        var n = v.getPointerPosition(t, e)
        return this.props.vertical ? n.y : n.x
      }
    }, {
      key: "renderChildren",
      value: function () {
        var e = this.getProgress()
        var t = "".concat((100 * e).toFixed(2), "%")
        return f.default.Children.map(this.props.children, function (n) {
          return f.default.cloneElement(n, {
            progress: e,
            percentage: t
          })
        })
      }
    }, {
      key: "render",
      value: function () {
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$vertical = this$props.vertical
        var /* [auto-meaningful-name] */this$props$label = this$props.label
        var /* [auto-meaningful-name] */this$props$valuenow = this$props.valuenow
        var /* [auto-meaningful-name] */this$props$valuetext = this$props.valuetext
        return f.default.createElement("div", {
          className: (0, p.default)(this.props.className, {
            "video-react-slider-vertical": this$props$vertical,
            "video-react-slider-horizontal": !this$props$vertical,
            "video-react-sliding": this.state.active
          }, "video-react-slider"),
          tabIndex: "0",
          role: "slider",
          onMouseDown: this.handleMouseDown,
          onTouchStart: this.handleMouseDown,
          onFocus: this.handleFocus,
          onBlur: this.handleBlur,
          onClick: this.handleClick,
          "aria-label": this$props$label || "",
          "aria-valuenow": this$props$valuenow || "",
          "aria-valuetext": this$props$valuetext || "",
          "aria-valuemin": 0,
          "aria-valuemax": 100
        }, this.renderChildren())
      }
    }
  ])
  return t
}(f.Component)
exports.default = y
y.propTypes = m
y.displayName = "Slider"
