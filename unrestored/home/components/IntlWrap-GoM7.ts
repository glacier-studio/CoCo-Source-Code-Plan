/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：GoM7
 */

"use strict"

/* harmony export (binding) */
/* harmony import */
export { IntlWrapperComponent }
import * as __WEBPACK_IMPORTED_MODULE_0_intl__ from /* 3a5k */"intl"
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_0_intl___default from /* 3a5k */"intl"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1_react__ from /* GiK3 */"react"
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_1_react___default from /* GiK3 */"react"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2_react_redux__ from /* RH2O */"react-redux"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3_redux__ from /* 2KeS */"redux"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_4_react_intl__ from /* Pq8k */"react-intl"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_5__i18n__ from /* 4Hmg */"../../../src/home/ui/i18n/i18n"
var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i]
      descriptor.enumerable = descriptor.enumerable || false
      descriptor.configurable = true
      if ("value" in descriptor) {
        descriptor.writable = true
      }
      Object.defineProperty(target, descriptor.key, descriptor)
    }
  }
  return function (Constructor, protoProps, staticProps) {
    if (protoProps) {
      defineProperties(Constructor.prototype, protoProps)
    }
    if (staticProps) {
      defineProperties(Constructor, staticProps)
    }
    return Constructor
  }
}()
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function")
  }
}
function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass)
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  })
  if (superClass) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(subClass, superClass)
    } else {
      subClass.__proto__ = superClass
    }
  }
}
var IntlWrapper = function (_React$Component) {
  _inherits(IntlWrapper, _React$Component)
  function IntlWrapper(props) {
    _classCallCheck(this, IntlWrapper)

    // Codemao: use zh as the default language.
    var _this = _possibleConstructorReturn(this, (IntlWrapper.__proto__ || Object.getPrototypeOf(IntlWrapper)).call(this, props))
    var system_lang = "zh"
    var init_language = system_lang
    var init_locale = __WEBPACK_IMPORTED_MODULE_5__i18n__.language_list[init_language].intl_lang_name
    var init_messages = __WEBPACK_IMPORTED_MODULE_5__i18n__.language_list[init_language].language
    _this.state = {
      locale: init_locale,
      messages: init_messages
    }
    return _this
  }
  _createClass(IntlWrapper, [
    {
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        if (nextProps.language == this.props.language) {
          return
        }
        var locale = __WEBPACK_IMPORTED_MODULE_5__i18n__.language_list[nextProps.language].intl_lang_name
        var messages = __WEBPACK_IMPORTED_MODULE_5__i18n__.language_list[nextProps.language].language
        this.setState({
          locale: locale,
          messages: messages
        })
      }
    }, {
      key: "render",
      value: function render() {
        return __WEBPACK_IMPORTED_MODULE_1_react__.createElement(__WEBPACK_IMPORTED_MODULE_4_react_intl__.IntlProvider, {
          locale: this.state.locale,
          messages: this.state.messages
        }, this.props.children)
      }
    }
  ])
  return IntlWrapper
}(__WEBPACK_IMPORTED_MODULE_1_react__.Component)
function mapStateToProps(state) {
  return {
    language: state.main_reducer.language
  }
}
function mapDispatchToProps(dispatch) {
  return __WEBPACK_IMPORTED_MODULE_3_redux__.bindActionCreators({}, dispatch)
}
var IntlWrapperComponent = __WEBPACK_IMPORTED_MODULE_2_react_redux__.connect(mapStateToProps, mapDispatchToProps)(IntlWrapper)

/***/
