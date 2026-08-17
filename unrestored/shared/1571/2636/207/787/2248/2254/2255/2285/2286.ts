/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2286
 */

"use strict"

module.exports = function (e, t, n) {
  var /* [auto-meaningful-name] */this$keyword
  var i
  var o = " "
  var /* [auto-meaningful-name] */e$level = e.level
  var /* [auto-meaningful-name] */e$dataLevel = e.dataLevel
  var c = e.schema[t]
  var u = e.schemaPath + e.util.getProperty(t)
  var l = e.errSchemaPath + "/" + t
  var f = !e.opts.allErrors
  var d = "data" + (e$dataLevel || "")
  var h = "valid" + e$level
  var p = "errs__" + e$level
  var _ = e.opts.$data && c && c.$data
  if (_) {
    o += " var schema" + e$level + " = " + e.util.getData(c.$data, e$dataLevel, e.dataPathArr) + "; "
    i = "schema" + e$level
  } else {
    i = c
  }
  var /* [auto-meaningful-name] */this$definition$compile
  var /* [auto-meaningful-name] */this$definition$inline
  var /* [auto-meaningful-name] */this$definition$macro
  var m
  var y
  var b = "definition" + e$level
  var /* [auto-meaningful-name] */this$definition = this.definition
  var E = ""
  if (_ && this$definition.$data) {
    y = "keywordValidate" + e$level
    var /* [auto-meaningful-name] */this$definition$validateSchema = this$definition.validateSchema
    o += " var " + b + " = RULES.custom['" + t + "'].definition; var " + y + " = " + b + ".validate;"
  } else {
    if (!(m = e.useCustomRule(this, c, e.schema, e))) {
      return
    }
    i = "validate.schema" + u
    y = m.code
    this$definition$compile = this$definition.compile
    this$definition$inline = this$definition.inline
    this$definition$macro = this$definition.macro
  }
  var C = y + ".errors"
  var O = "i" + e$level
  var k = "ruleErr" + e$level
  var /* [auto-meaningful-name] */this$definition$async = this$definition.async
  if (this$definition$async && !e.async) {
    throw new Error("async keyword in sync schema")
  }
  if (!(this$definition$inline || this$definition$macro)) {
    o += C + " = null;"
  }
  o += "var " + p + " = errors;var " + h + ";"
  if (_ && this$definition.$data) {
    E += "}"
    o += " if (" + i + " === undefined) { " + h + " = true; } else { "
    if (this$definition$validateSchema) {
      E += "}"
      o += " " + h + " = " + b + ".validateSchema(" + i + "); if (" + h + ") { "
    }
  }
  if (this$definition$inline) {
    if (this$definition.statements) {
      o += " " + m.validate + " "
    } else {
      o += " " + h + " = " + m.validate + "; "
    }
  } else if (this$definition$macro) {
    var T = e.util.copy(e)
    E = ""
    T.level++
    var B = "valid" + T.level
    T.schema = m.validate
    T.schemaPath = ""
    var /* [auto-meaningful-name] */e$compositeRule = e.compositeRule
    e.compositeRule = T.compositeRule = true
    var I = e.validate(T).replace(/validate\.schema/g, y)
    e.compositeRule = T.compositeRule = e$compositeRule
    o += " " + I
  } else {
    (N = N || []).push(o)
    o = ""
    o += "  " + y + ".call( "
    if (e.opts.passContext) {
      o += "this"
    } else {
      o += "self"
    }
    if (this$definition$compile || false === this$definition.schema) {
      o += " , " + d + " "
    } else {
      o += " , " + i + " , " + d + " , validate.schema" + e.schemaPath + " "
    }
    o += " , (dataPath || '')"
    if ("\"\"" != e.errorPath) {
      o += " + " + e.errorPath
    }
    var R = e$dataLevel ? "data" + (e$dataLevel - 1 || "") : "parentData"
    var F = e$dataLevel ? e.dataPathArr[e$dataLevel] : "parentDataProperty"
    var P = o += " , " + R + " , " + F + " , rootData )  "
    o = N.pop()
    if (false === this$definition.errors) {
      o += " " + h + " = "
      if (this$definition$async) {
        o += "await "
      }
      o += P + "; "
    } else {
      o += this$definition$async ? " var " + (C = "customErrors" + e$level) + " = null; try { " + h + " = await " + P + "; } catch (e) { " + h + " = false; if (e instanceof ValidationError) " + C + " = e.errors; else throw e; } " : " " + C + " = null; " + h + " = " + P + "; "
    }
  }
  if (this$definition.modifying) {
    o += " if (" + R + ") " + d + " = " + R + "[" + F + "];"
  }
  o += "" + E
  if (this$definition.valid) {
    if (f) {
      o += " if (true) { "
    }
  } else {
    var N
    o += " if ( "
    if (undefined === this$definition.valid) {
      o += " !"
      o += this$definition$macro ? "" + B : "" + h
    } else {
      o += " " + !this$definition.valid + " "
    }
    o += ") { "
    this$keyword = this.keyword;
    (N = N || []).push(o)
    o = "";
    (N = N || []).push(o)
    o = ""
    if (false !== e.createErrors) {
      o += " { keyword: '" + (this$keyword || "custom") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: { keyword: '" + this.keyword + "' } "
      if (false !== e.opts.messages) {
        o += " , message: 'should pass \"" + this.keyword + "\" keyword validation' "
      }
      if (e.opts.verbose) {
        o += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + d + " "
      }
      o += " } "
    } else {
      o += " {} "
    }
    var M = o
    o = N.pop()
    if (!e.compositeRule && f) {
      if (e.async) {
        o += " throw new ValidationError([" + M + "]); "
      } else {
        o += " validate.errors = [" + M + "]; return false; "
      }
    } else {
      o += " var err = " + M + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "
    }
    var L = o
    o = N.pop()
    if (this$definition$inline) {
      if (this$definition.errors) {
        if ("full" != this$definition.errors) {
          o += "  for (var " + O + "=" + p + "; " + O + "<errors; " + O + "++) { var " + k + " = vErrors[" + O + "]; if (" + k + ".dataPath === undefined) " + k + ".dataPath = (dataPath || '') + " + e.errorPath + "; if (" + k + ".schemaPath === undefined) { " + k + ".schemaPath = \"" + l + "\"; } "
          if (e.opts.verbose) {
            o += " " + k + ".schema = " + i + "; " + k + ".data = " + d + "; "
          }
          o += " } "
        }
      } else {
        if (false === this$definition.errors) {
          o += " " + L + " "
        } else {
          o += " if (" + p + " == errors) { " + L + " } else {  for (var " + O + "=" + p + "; " + O + "<errors; " + O + "++) { var " + k + " = vErrors[" + O + "]; if (" + k + ".dataPath === undefined) " + k + ".dataPath = (dataPath || '') + " + e.errorPath + "; if (" + k + ".schemaPath === undefined) { " + k + ".schemaPath = \"" + l + "\"; } "
          if (e.opts.verbose) {
            o += " " + k + ".schema = " + i + "; " + k + ".data = " + d + "; "
          }
          o += " } } "
        }
      }
    } else {
      if (this$definition$macro) {
        o += "   var err =   "
        if (false !== e.createErrors) {
          o += " { keyword: '" + (this$keyword || "custom") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: { keyword: '" + this.keyword + "' } "
          if (false !== e.opts.messages) {
            o += " , message: 'should pass \"" + this.keyword + "\" keyword validation' "
          }
          if (e.opts.verbose) {
            o += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + d + " "
          }
          o += " } "
        } else {
          o += " {} "
        }
        o += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "
        if (!e.compositeRule && f) {
          if (e.async) {
            o += " throw new ValidationError(vErrors); "
          } else {
            o += " validate.errors = vErrors; return false; "
          }
        }
      } else {
        if (false === this$definition.errors) {
          o += " " + L + " "
        } else {
          o += " if (Array.isArray(" + C + ")) { if (vErrors === null) vErrors = " + C + "; else vErrors = vErrors.concat(" + C + "); errors = vErrors.length;  for (var " + O + "=" + p + "; " + O + "<errors; " + O + "++) { var " + k + " = vErrors[" + O + "]; if (" + k + ".dataPath === undefined) " + k + ".dataPath = (dataPath || '') + " + e.errorPath + ";  " + k + ".schemaPath = \"" + l + "\";  "
          if (e.opts.verbose) {
            o += " " + k + ".schema = " + i + "; " + k + ".data = " + d + "; "
          }
          o += " } } else { " + L + " } "
        }
      }
    }
    o += " } "
    if (f) {
      o += " else { "
    }
  }
  return o
}
