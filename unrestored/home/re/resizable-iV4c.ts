"use strict";

/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0_react__ from "react";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_0_react___default from "react";
var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) {
        descriptor.writable = true;
      }
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function (Constructor, protoProps, staticProps) {
    if (protoProps) {
      defineProperties(Constructor.prototype, protoProps);
    }
    if (staticProps) {
      defineProperties(Constructor, staticProps);
    }
    return Constructor;
  };
}();
var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(subClass, superClass);
    } else {
      subClass.__proto__ = superClass;
    }
  }
};
var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};
var styles = {
  base: {
    position: 'absolute',
    userSelect: 'none',
    MsUserSelect: 'none'
  },
  top: {
    width: '100%',
    height: '10px',
    top: '-5px',
    left: '0px',
    cursor: 'row-resize'
  },
  right: {
    width: '10px',
    height: '100%',
    top: '0px',
    right: '-5px',
    cursor: 'col-resize'
  },
  bottom: {
    width: '100%',
    height: '10px',
    bottom: '-5px',
    left: '0px',
    cursor: 'row-resize'
  },
  left: {
    width: '10px',
    height: '100%',
    top: '0px',
    left: '-5px',
    cursor: 'col-resize'
  },
  topRight: {
    width: '20px',
    height: '20px',
    position: 'absolute',
    right: '-10px',
    top: '-10px',
    cursor: 'ne-resize'
  },
  bottomRight: {
    width: '20px',
    height: '20px',
    position: 'absolute',
    right: '-10px',
    bottom: '-10px',
    cursor: 'se-resize'
  },
  bottomLeft: {
    width: '20px',
    height: '20px',
    position: 'absolute',
    left: '-10px',
    bottom: '-10px',
    cursor: 'sw-resize'
  },
  topLeft: {
    width: '20px',
    height: '20px',
    position: 'absolute',
    left: '-10px',
    top: '-10px',
    cursor: 'nw-resize'
  }
};
var Resizer = function (props) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_react__.createElement)('div', {
    className: props.className,
    style: _extends({}, styles.base, styles[props.direction], props.replaceStyles || {}),
    onMouseDown: function onMouseDown(e) {
      props.onResizeStart(e, props.direction);
    },
    onTouchStart: function onTouchStart(e) {
      props.onResizeStart(e, props.direction);
    }
  }, props.children);
};
var userSelectNone = {
  userSelect: 'none',
  MozUserSelect: 'none',
  WebkitUserSelect: 'none',
  MsUserSelect: 'none'
};
var userSelectAuto = {
  userSelect: 'auto',
  MozUserSelect: 'auto',
  WebkitUserSelect: 'auto',
  MsUserSelect: 'auto'
};
var clamp = function clamp(n, min, max) {
  return Math.max(Math.min(n, max), min);
};
var snap = function snap(n, size) {
  return Math.round(n / size) * size;
};
var findClosestSnap = function findClosestSnap(n, snapArray) {
  return snapArray.reduce(function (prev, curr) {
    return Math.abs(curr - n) < Math.abs(prev - n) ? curr : prev;
  });
};
var endsWith = function endsWith(str, searchStr) {
  return str.substr(str.length - searchStr.length, searchStr.length) === searchStr;
};
var getStringSize = function getStringSize(n) {
  if (n.toString() === 'auto') {
    return n.toString();
  }
  if (endsWith(n.toString(), 'px')) {
    return n.toString();
  }
  if (endsWith(n.toString(), '%')) {
    return n.toString();
  }
  if (endsWith(n.toString(), 'vh')) {
    return n.toString();
  }
  if (endsWith(n.toString(), 'vw')) {
    return n.toString();
  }
  if (endsWith(n.toString(), 'vmax')) {
    return n.toString();
  }
  if (endsWith(n.toString(), 'vmin')) {
    return n.toString();
  }
  return n + 'px';
};
var definedProps = ['style', 'className', 'grid', 'snap', 'bounds', 'size', 'defaultSize', 'minWidth', 'minHeight', 'maxWidth', 'maxHeight', 'lockAspectRatio', 'lockAspectRatioExtraWidth', 'lockAspectRatioExtraHeight', 'enable', 'handleStyles', 'handleClasses', 'handleWrapperStyle', 'handleWrapperClass', 'children', 'onResizeStart', 'onResize', 'onResizeStop', 'handleComponent', 'scale', 'resizeRatio'];
var baseClassName = '__resizable_base__';
var Resizable = function (_React$Component) {
  inherits(Resizable, _React$Component);
  function Resizable(props) {
    classCallCheck(this, Resizable);
    var _this = possibleConstructorReturn(this, (Resizable.__proto__ || Object.getPrototypeOf(Resizable)).call(this, props));
    _this.state = {
      isResizing: false,
      resizeCursor: 'auto',
      width: typeof (_this.propsSize && _this.propsSize.width) === 'undefined' ? 'auto' : _this.propsSize && _this.propsSize.width,
      height: typeof (_this.propsSize && _this.propsSize.height) === 'undefined' ? 'auto' : _this.propsSize && _this.propsSize.height,
      direction: 'right',
      original: {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      }
    };
    _this.updateExtendsProps(props);
    _this.onResizeStart = _this.onResizeStart.bind(_this);
    _this.onMouseMove = _this.onMouseMove.bind(_this);
    _this.onMouseUp = _this.onMouseUp.bind(_this);
    if (typeof window !== 'undefined') {
      window.addEventListener('mouseup', _this.onMouseUp);
      window.addEventListener('mousemove', _this.onMouseMove);
      window.addEventListener('mouseleave', _this.onMouseUp);
      window.addEventListener('touchmove', _this.onMouseMove);
      window.addEventListener('touchend', _this.onMouseUp);
    }
    return _this;
  }
  createClass(Resizable, [{
    key: 'updateExtendsProps',
    value: function updateExtendsProps(props) {
      this.extendsProps = Object.keys(props).reduce(function (acc, key) {
        if (definedProps.indexOf(key) !== -1) {
          return acc;
        }
        acc[key] = props[key];
        return acc;
      }, {});
    }
  }, {
    key: 'getParentSize',
    value: function getParentSize() {
      var base = this.base;
      if (!base) {
        return {
          width: window.innerWidth,
          height: window.innerHeight
        };
      }
      // INFO: To calculate parent width with flex layout
      var wrapChanged = false;
      var wrap = this.parentNode.style.flexWrap;
      var minWidth = base.style.minWidth;
      if (wrap !== 'wrap') {
        wrapChanged = true;
        this.parentNode.style.flexWrap = 'wrap';
        // HACK: Use relative to get parent padding size
      }
      base.style.position = 'relative';
      base.style.minWidth = '100%';
      var size = {
        width: base.offsetWidth,
        height: base.offsetHeight
      };
      base.style.position = 'absolute';
      if (wrapChanged) {
        this.parentNode.style.flexWrap = wrap;
      }
      base.style.minWidth = minWidth;
      return size;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var size = this.size;
      this.setState({
        width: this.state.width || size.width,
        height: this.state.height || size.height
      });
      var parent = this.parentNode;
      if (!(parent instanceof HTMLElement)) {
        return;
      }
      if (this.base) {
        return;
      }
      var element = document.createElement('div');
      element.style.width = '100%';
      element.style.height = '100%';
      element.style.position = 'absolute';
      element.style.transform = 'scale(0, 0)';
      element.style.left = '0';
      element.style.flex = '0';
      if (element.classList) {
        element.classList.add(baseClassName);
      } else {
        element.className += baseClassName;
      }
      parent.appendChild(element);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(next) {
      this.updateExtendsProps(next);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (typeof window !== 'undefined') {
        window.removeEventListener('mouseup', this.onMouseUp);
        window.removeEventListener('mousemove', this.onMouseMove);
        window.removeEventListener('mouseleave', this.onMouseUp);
        window.removeEventListener('touchmove', this.onMouseMove);
        window.removeEventListener('touchend', this.onMouseUp);
        var parent = this.parentNode;
        var base = this.base;
        if (!base || !parent) {
          return;
        }
        if (!(parent instanceof HTMLElement) || !(base instanceof Node)) {
          return;
        }
        parent.removeChild(base);
      }
    }
  }, {
    key: 'calculateNewSize',
    value: function calculateNewSize(newSize, kind) {
      var propsSize = this.propsSize && this.propsSize[kind];
      return this.state[kind] === 'auto' && this.state.original[kind] === newSize && (typeof propsSize === 'undefined' || propsSize === 'auto') ? 'auto' : newSize;
    }
  }, {
    key: 'onResizeStart',
    value: function onResizeStart(event, direction) {
      var clientX = 0;
      var clientY = 0;
      if (event.nativeEvent instanceof MouseEvent) {
        clientX = event.nativeEvent.clientX;
        clientY = event.nativeEvent.clientY;

        // When user click with right button the resize is stuck in resizing mode
        // until users clicks again, dont continue if right click is used.
        // HACK: MouseEvent does not have `which` from flow-bin v0.68.
        if (event.nativeEvent.which === 3) {
          return;
        }
      } else if (event.nativeEvent instanceof TouchEvent) {
        clientX = event.nativeEvent.touches[0].clientX;
        clientY = event.nativeEvent.touches[0].clientY;
      }
      if (this.props.onResizeStart) {
        this.props.onResizeStart(event, direction, this.resizable);
      }

      // Fix #168
      if (this.props.size) {
        if (typeof this.props.size.height !== 'undefined' && this.props.size.height !== this.state.height) {
          this.setState({
            height: this.props.size.height
          });
        }
        if (typeof this.props.size.width !== 'undefined' && this.props.size.width !== this.state.width) {
          this.setState({
            width: this.props.size.width
          });
        }
      }
      this.setState({
        original: {
          x: clientX,
          y: clientY,
          width: this.size.width,
          height: this.size.height
        },
        isResizing: true,
        resizeCursor: window.getComputedStyle(event.target).cursor,
        direction: direction
      });
    }
  }, {
    key: 'onMouseMove',
    value: function onMouseMove(event) {
      if (!this.state.isResizing) {
        return;
      }
      var clientX = event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
      var clientY = event instanceof MouseEvent ? event.clientY : event.touches[0].clientY;
      var _state = this.state;
      var direction = _state.direction;
      var original = _state.original;
      var width = _state.width;
      var height = _state.height;
      var _props = this.props;
      var lockAspectRatio = _props.lockAspectRatio;
      var lockAspectRatioExtraHeight = _props.lockAspectRatioExtraHeight;
      var lockAspectRatioExtraWidth = _props.lockAspectRatioExtraWidth;
      var scale = this.props.scale || 1;
      var _props2 = this.props;
      var maxWidth = _props2.maxWidth;
      var maxHeight = _props2.maxHeight;
      var minWidth = _props2.minWidth;
      var minHeight = _props2.minHeight;
      var resizeRatio = this.props.resizeRatio || 1;

      // TODO: refactor
      var parentSize = this.getParentSize();
      if (maxWidth && typeof maxWidth === 'string' && endsWith(maxWidth, '%')) {
        var _ratio = Number(maxWidth.replace('%', '')) / 100;
        maxWidth = parentSize.width * _ratio;
      }
      if (maxHeight && typeof maxHeight === 'string' && endsWith(maxHeight, '%')) {
        var _ratio2 = Number(maxHeight.replace('%', '')) / 100;
        maxHeight = parentSize.height * _ratio2;
      }
      if (minWidth && typeof minWidth === 'string' && endsWith(minWidth, '%')) {
        var _ratio3 = Number(minWidth.replace('%', '')) / 100;
        minWidth = parentSize.width * _ratio3;
      }
      if (minHeight && typeof minHeight === 'string' && endsWith(minHeight, '%')) {
        var _ratio4 = Number(minHeight.replace('%', '')) / 100;
        minHeight = parentSize.height * _ratio4;
      }
      maxWidth = typeof maxWidth === 'undefined' ? undefined : Number(maxWidth);
      maxHeight = typeof maxHeight === 'undefined' ? undefined : Number(maxHeight);
      minWidth = typeof minWidth === 'undefined' ? undefined : Number(minWidth);
      minHeight = typeof minHeight === 'undefined' ? undefined : Number(minHeight);
      var ratio = typeof lockAspectRatio === 'number' ? lockAspectRatio : original.width / original.height;
      var newWidth = original.width;
      var newHeight = original.height;
      if (/right/i.test(direction)) {
        newWidth = original.width + (clientX - original.x) * resizeRatio / scale;
        if (lockAspectRatio) {
          newHeight = (newWidth - lockAspectRatioExtraWidth) / ratio + lockAspectRatioExtraHeight;
        }
      }
      if (/left/i.test(direction)) {
        newWidth = original.width - (clientX - original.x) * resizeRatio / scale;
        if (lockAspectRatio) {
          newHeight = (newWidth - lockAspectRatioExtraWidth) / ratio + lockAspectRatioExtraHeight;
        }
      }
      if (/bottom/i.test(direction)) {
        newHeight = original.height + (clientY - original.y) * resizeRatio / scale;
        if (lockAspectRatio) {
          newWidth = (newHeight - lockAspectRatioExtraHeight) * ratio + lockAspectRatioExtraWidth;
        }
      }
      if (/top/i.test(direction)) {
        newHeight = original.height - (clientY - original.y) * resizeRatio / scale;
        if (lockAspectRatio) {
          newWidth = (newHeight - lockAspectRatioExtraHeight) * ratio + lockAspectRatioExtraWidth;
        }
      }
      if (this.props.bounds === 'parent') {
        var parent = this.parentNode;
        if (parent instanceof HTMLElement) {
          var parentRect = parent.getBoundingClientRect();
          var parentLeft = parentRect.left;
          var parentTop = parentRect.top;
          var _resizable$getBoundin = this.resizable.getBoundingClientRect();
          var _left = _resizable$getBoundin.left;
          var _top = _resizable$getBoundin.top;
          var boundWidth = parent.offsetWidth + (parentLeft - _left);
          var boundHeight = parent.offsetHeight + (parentTop - _top);
          maxWidth = maxWidth && maxWidth < boundWidth ? maxWidth : boundWidth;
          maxHeight = maxHeight && maxHeight < boundHeight ? maxHeight : boundHeight;
        }
      } else if (this.props.bounds === 'window') {
        if (typeof window !== 'undefined') {
          var _resizable$getBoundin2 = this.resizable.getBoundingClientRect();
          var _left2 = _resizable$getBoundin2.left;
          var _top2 = _resizable$getBoundin2.top;
          var _boundWidth = window.innerWidth - _left2;
          var _boundHeight = window.innerHeight - _top2;
          maxWidth = maxWidth && maxWidth < _boundWidth ? maxWidth : _boundWidth;
          maxHeight = maxHeight && maxHeight < _boundHeight ? maxHeight : _boundHeight;
        }
      } else if (this.props.bounds instanceof HTMLElement) {
        var targetRect = this.props.bounds.getBoundingClientRect();
        var targetLeft = targetRect.left;
        var targetTop = targetRect.top;
        var _resizable$getBoundin3 = this.resizable.getBoundingClientRect();
        var _left3 = _resizable$getBoundin3.left;
        var _top3 = _resizable$getBoundin3.top;
        if (!(this.props.bounds instanceof HTMLElement)) {
          return;
        }
        var _boundWidth2 = this.props.bounds.offsetWidth + (targetLeft - _left3);
        var _boundHeight2 = this.props.bounds.offsetHeight + (targetTop - _top3);
        maxWidth = maxWidth && maxWidth < _boundWidth2 ? maxWidth : _boundWidth2;
        maxHeight = maxHeight && maxHeight < _boundHeight2 ? maxHeight : _boundHeight2;
      }
      var computedMinWidth = typeof minWidth === 'undefined' ? 10 : minWidth;
      var computedMaxWidth = typeof maxWidth === 'undefined' || maxWidth < 0 ? newWidth : maxWidth;
      var computedMinHeight = typeof minHeight === 'undefined' ? 10 : minHeight;
      var computedMaxHeight = typeof maxHeight === 'undefined' || maxHeight < 0 ? newHeight : maxHeight;
      if (lockAspectRatio) {
        var extraMinWidth = (computedMinHeight - lockAspectRatioExtraHeight) * ratio + lockAspectRatioExtraWidth;
        var extraMaxWidth = (computedMaxHeight - lockAspectRatioExtraHeight) * ratio + lockAspectRatioExtraWidth;
        var extraMinHeight = (computedMinWidth - lockAspectRatioExtraWidth) / ratio + lockAspectRatioExtraHeight;
        var extraMaxHeight = (computedMaxWidth - lockAspectRatioExtraWidth) / ratio + lockAspectRatioExtraHeight;
        var lockedMinWidth = Math.max(computedMinWidth, extraMinWidth);
        var lockedMaxWidth = Math.min(computedMaxWidth, extraMaxWidth);
        var lockedMinHeight = Math.max(computedMinHeight, extraMinHeight);
        var lockedMaxHeight = Math.min(computedMaxHeight, extraMaxHeight);
        newWidth = clamp(newWidth, lockedMinWidth, lockedMaxWidth);
        newHeight = clamp(newHeight, lockedMinHeight, lockedMaxHeight);
      } else {
        newWidth = clamp(newWidth, computedMinWidth, computedMaxWidth);
        newHeight = clamp(newHeight, computedMinHeight, computedMaxHeight);
      }
      if (this.props.grid) {
        newWidth = snap(newWidth, this.props.grid[0]);
      }
      if (this.props.grid) {
        newHeight = snap(newHeight, this.props.grid[1]);
      }
      if (this.props.snap && this.props.snap.x) {
        newWidth = findClosestSnap(newWidth, this.props.snap.x);
      }
      if (this.props.snap && this.props.snap.y) {
        newHeight = findClosestSnap(newHeight, this.props.snap.y);
      }
      var delta = {
        width: newWidth - original.width,
        height: newHeight - original.height
      };
      if (width && typeof width === 'string' && endsWith(width, '%')) {
        var percent = newWidth / parentSize.width * 100;
        newWidth = percent + '%';
      }
      if (height && typeof height === 'string' && endsWith(height, '%')) {
        var _percent = newHeight / parentSize.height * 100;
        newHeight = _percent + '%';
      }
      this.setState({
        width: this.calculateNewSize(newWidth, 'width'),
        height: this.calculateNewSize(newHeight, 'height')
      });
      if (this.props.onResize) {
        this.props.onResize(event, direction, this.resizable, delta);
      }
    }
  }, {
    key: 'onMouseUp',
    value: function onMouseUp(event) {
      var _state2 = this.state;
      var isResizing = _state2.isResizing;
      var direction = _state2.direction;
      var original = _state2.original;
      if (!isResizing) {
        return;
      }
      var delta = {
        width: this.size.width - original.width,
        height: this.size.height - original.height
      };
      if (this.props.onResizeStop) {
        this.props.onResizeStop(event, direction, this.resizable, delta);
      }
      if (this.props.size) {
        this.setState(this.props.size);
      }
      this.setState({
        isResizing: false,
        resizeCursor: 'auto'
      });
    }
  }, {
    key: 'updateSize',
    value: function updateSize(size) {
      this.setState({
        width: size.width,
        height: size.height
      });
    }
  }, {
    key: 'renderResizer',
    value: function renderResizer() {
      var _this2 = this;
      var _props3 = this.props;
      var enable = _props3.enable;
      var handleStyles = _props3.handleStyles;
      var handleClasses = _props3.handleClasses;
      var handleWrapperStyle = _props3.handleWrapperStyle;
      var handleWrapperClass = _props3.handleWrapperClass;
      var handleComponent = _props3.handleComponent;
      if (!enable) {
        return null;
      }
      var resizers = Object.keys(enable).map(function (dir) {
        if (enable[dir] !== false) {
          return Object(__WEBPACK_IMPORTED_MODULE_0_react__.createElement)(Resizer, {
            key: dir,
            direction: dir,
            onResizeStart: _this2.onResizeStart,
            replaceStyles: handleStyles && handleStyles[dir],
            className: handleClasses && handleClasses[dir]
          }, handleComponent && handleComponent[dir] ? Object(__WEBPACK_IMPORTED_MODULE_0_react__.createElement)(handleComponent[dir]) : null);
        }
        return null;
      });
      // #93 Wrap the resize box in span (will not break 100% width/height)
      return Object(__WEBPACK_IMPORTED_MODULE_0_react__.createElement)('span', {
        className: handleWrapperClass,
        style: handleWrapperStyle
      }, resizers);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;
      var userSelect = this.state.isResizing ? userSelectNone : userSelectAuto;
      return Object(__WEBPACK_IMPORTED_MODULE_0_react__.createElement)('div', _extends({
        ref: function ref(c) {
          if (c) {
            _this3.resizable = c;
          }
        },
        style: _extends({
          position: 'relative'
        }, userSelect, this.props.style, this.sizeStyle, {
          maxWidth: this.props.maxWidth,
          maxHeight: this.props.maxHeight,
          minWidth: this.props.minWidth,
          minHeight: this.props.minHeight,
          boxSizing: 'border-box'
        }),
        className: this.props.className
      }, this.extendsProps), this.state.isResizing && Object(__WEBPACK_IMPORTED_MODULE_0_react__.createElement)('div', {
        style: {
          height: '100%',
          width: '100%',
          backgroundColor: 'rgba(0,0,0,0)',
          cursor: '' + (this.state.resizeCursor || 'auto'),
          opacity: '0',
          position: 'fixed',
          zIndex: '9999',
          top: '0',
          left: '0',
          bottom: '0',
          right: '0'
        }
      }), this.props.children, this.renderResizer());
    }
  }, {
    key: 'parentNode',
    get: function get$$1() {
      return this.resizable.parentNode;
    }
  }, {
    key: 'propsSize',
    get: function get$$1() {
      return this.props.size || this.props.defaultSize;
    }
  }, {
    key: 'base',
    get: function get$$1() {
      var parent = this.parentNode;
      if (!parent) {
        return undefined;
      }
      var children = [].slice.call(parent.children);
      for (var i = 0; i < children.length; i += 1) {
        var n = children[i];
        if (n instanceof HTMLElement) {
          if (n.classList.contains(baseClassName)) {
            return n;
          }
        }
      }
      return undefined;
    }
  }, {
    key: 'size',
    get: function get$$1() {
      var width = 0;
      var height = 0;
      if (typeof window !== 'undefined') {
        var orgWidth = this.resizable.offsetWidth;
        var orgHeight = this.resizable.offsetHeight;
        // HACK: Set position `relative` to get parent size.
        //       This is because when re-resizable set `absolute`, I can not get base width correctly.
        var orgPosition = this.resizable.style.position;
        if (orgPosition !== 'relative') {
          this.resizable.style.position = 'relative';
        }
        // INFO: Use original width or height if set auto.
        width = this.resizable.style.width !== 'auto' ? this.resizable.offsetWidth : orgWidth;
        height = this.resizable.style.height !== 'auto' ? this.resizable.offsetHeight : orgHeight;
        // Restore original position
        this.resizable.style.position = orgPosition;
      }
      return {
        width: width,
        height: height
      };
    }
  }, {
    key: 'sizeStyle',
    get: function get$$1() {
      var _this4 = this;
      var size = this.props.size;
      var getSize = function getSize(key) {
        if (typeof _this4.state[key] === 'undefined' || _this4.state[key] === 'auto') {
          return 'auto';
        }
        if (_this4.propsSize && _this4.propsSize[key] && endsWith(_this4.propsSize[key].toString(), '%')) {
          if (endsWith(_this4.state[key].toString(), '%')) {
            return _this4.state[key].toString();
          }
          var parentSize = _this4.getParentSize();
          var value = Number(_this4.state[key].toString().replace('px', ''));
          var percent = value / parentSize[key] * 100;
          return percent + '%';
        }
        return getStringSize(_this4.state[key]);
      };
      var width = size && typeof size.width !== 'undefined' && !this.state.isResizing ? getStringSize(size.width) : getSize('width');
      var height = size && typeof size.height !== 'undefined' && !this.state.isResizing ? getStringSize(size.height) : getSize('height');
      return {
        width: width,
        height: height
      };
    }
  }]);
  return Resizable;
}(__WEBPACK_IMPORTED_MODULE_0_react__.Component);
Resizable.defaultProps = {
  onResizeStart: function onResizeStart() {},
  onResize: function onResize() {},
  onResizeStop: function onResizeStop() {},
  enable: {
    top: true,
    right: true,
    bottom: true,
    left: true,
    topRight: true,
    bottomRight: true,
    bottomLeft: true,
    topLeft: true
  },
  style: {},
  grid: [1, 1],
  lockAspectRatio: false,
  lockAspectRatioExtraWidth: 0,
  lockAspectRatioExtraHeight: 0,
  scale: 1,
  resizeRatio: 1
};

/* harmony default export */
export default Resizable;
/***/