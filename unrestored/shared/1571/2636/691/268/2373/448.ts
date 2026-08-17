/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：448
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.DUPLICATED_INJECTABLE_DECORATOR = "Cannot apply @injectable decorator multiple times."
exports.DUPLICATED_METADATA = "Metadata key was used more than once in a parameter:"
exports.NULL_ARGUMENT = "NULL argument"
exports.KEY_NOT_FOUND = "Key Not Found"
exports.AMBIGUOUS_MATCH = "Ambiguous match found for serviceIdentifier:"
exports.CANNOT_UNBIND = "Could not unbind serviceIdentifier:"
exports.NOT_REGISTERED = "No matching bindings found for serviceIdentifier:"
exports.MISSING_INJECTABLE_ANNOTATION = "Missing required @injectable annotation in:"
exports.MISSING_INJECT_ANNOTATION = "Missing required @inject or @multiInject annotation in:"
exports.UNDEFINED_INJECT_ANNOTATION = function (e) {
  return "@inject called with undefined this could mean that the class " + e + " has a circular dependency problem. You can use a LazyServiceIdentifer to  overcome this limitation."
}
exports.CIRCULAR_DEPENDENCY = "Circular dependency found:"
exports.NOT_IMPLEMENTED = "Sorry, this feature is not fully implemented yet."
exports.INVALID_BINDING_TYPE = "Invalid binding type:"
exports.NO_MORE_SNAPSHOTS_AVAILABLE = "No snapshot available to restore."
exports.INVALID_MIDDLEWARE_RETURN = "Invalid return type in middleware. Middleware must return!"
exports.INVALID_FUNCTION_BINDING = "Value provided to function binding must be a function!"
exports.INVALID_TO_SELF_VALUE = "The toSelf function can only be applied when a constructor is used as service identifier"
exports.INVALID_DECORATOR_OPERATION = "The @inject @multiInject @tagged and @named decorators must be applied to the parameters of a class constructor or a class property."
exports.ARGUMENTS_LENGTH_MISMATCH = function () {
  for (var e = [], t = 0; t < arguments.length; t++) {
    e[t] = arguments[t]
  }
  return "The number of constructor arguments in the derived class " + e[0] + " must be >= than the number of constructor arguments of its base class."
}
exports.CONTAINER_OPTIONS_MUST_BE_AN_OBJECT = "Invalid Container constructor argument. Container options must be an object."
exports.CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE = "Invalid Container option. Default scope must be a string ('singleton' or 'transient')."
exports.CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE = "Invalid Container option. Auto bind injectable must be a boolean"
exports.CONTAINER_OPTIONS_INVALID_SKIP_BASE_CHECK = "Invalid Container option. Skip base check must be a boolean"
exports.MULTIPLE_POST_CONSTRUCT_METHODS = "Cannot apply @postConstruct decorator multiple times in the same class"
exports.POST_CONSTRUCT_ERROR = function () {
  for (var e = [], t = 0; t < arguments.length; t++) {
    e[t] = arguments[t]
  }
  return "@postConstruct error in class " + e[0] + ": " + e[1]
}
exports.CIRCULAR_DEPENDENCY_IN_FACTORY = function () {
  for (var e = [], t = 0; t < arguments.length; t++) {
    e[t] = arguments[t]
  }
  return "It looks like there is a circular dependency in one of the '" + e[0] + "' bindings. Please investigate bindings withservice identifier '" + e[1] + "'."
}
exports.STACK_OVERFLOW = "Maximum call stack size exceeded"
