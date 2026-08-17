/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：285__part-1
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_216 from /* 216 */"../../627/216"
import /* [auto-meaningful-name] */Module_2161 from /* 216 */"../../627/216"
import * as /* [auto-meaningful-name] */Module_326 from /* 326 */"../../627/326"
import * as /* [auto-meaningful-name] */Module_1019 from /* 1019 */"./1019"
var /* [auto-meaningful-name] */$NameIsNotAValid$Type = "'${name}' is not a valid ${type}"
var B = {
  default: "Validation error on field '${name}'",
  required: "'${name}' is required",
  enum: "'${name}' must be one of [${enum}]",
  whitespace: "'${name}' cannot be empty",
  date: {
    format: "'${name}' is invalid for format date",
    parse: "'${name}' could not be parsed as date",
    invalid: "'${name}' is invalid date"
  },
  types: {
    string: $NameIsNotAValid$Type,
    method: $NameIsNotAValid$Type,
    array: $NameIsNotAValid$Type,
    object: $NameIsNotAValid$Type,
    number: $NameIsNotAValid$Type,
    date: $NameIsNotAValid$Type,
    boolean: $NameIsNotAValid$Type,
    integer: $NameIsNotAValid$Type,
    float: $NameIsNotAValid$Type,
    regexp: $NameIsNotAValid$Type,
    email: $NameIsNotAValid$Type,
    url: $NameIsNotAValid$Type,
    hex: $NameIsNotAValid$Type
  },
  string: {
    len: "'${name}' must be exactly ${len} characters",
    min: "'${name}' must be at least ${min} characters",
    max: "'${name}' cannot be longer than ${max} characters",
    range: "'${name}' must be between ${min} and ${max} characters"
  },
  number: {
    len: "'${name}' must equal ${len}",
    min: "'${name}' cannot be less than ${min}",
    max: "'${name}' cannot be greater than ${max}",
    range: "'${name}' must be between ${min} and ${max}"
  },
  array: {
    len: "'${name}' must be exactly ${len} in length",
    min: "'${name}' cannot be less than ${min} in length",
    max: "'${name}' cannot be greater than ${max} in length",
    range: "'${name}' must be between ${min} and ${max} in length"
  },
  pattern: {
    mismatch: "'${name}' does not match pattern ${pattern}"
  }
}
export { B }
