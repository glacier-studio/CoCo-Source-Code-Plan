/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：46__part-1
 */

import * as /* [auto-meaningful-name] */Module_613 from /* 613 */"../../../../../unrestored/shared/1571/2636/46/613/index"
import * as /* [auto-meaningful-name] */Module_4 from /* 4 */"../../../../../unrestored/shared/1571/2636/4"

export class BlockSnippetManager {

  private readonly dynamicValueMap: Map<string, (/** TODO */any)>

  generator

  public readonly getFieldValue: (block, filedID: string) => string | undefined
  quote
  registerDelegate
  public readonly insertBlockSnippetGenerator: (type: string, generator: (workspaceJson: { blocks, comments, connections }, id: string) => string | [string, number]) => void
  public readonly statementToCode: (workspaceJson, id: string, statementID: string) => string
  public readonly valueToCode: (workspaceJson, id: string, valueID: string, older:number) => string
  public workspaceToCode

  public readonly ORDER_ATOMIC: number
  public readonly ORDER_NEW: number
  public readonly ORDER_MEMBER: number
  public readonly ORDER_FUNCTION_CALL: number
  public readonly ORDER_INCREMENT: number
  public readonly ORDER_DECREMENT: number
  public readonly ORDER_BITWISE_NOT: number
  public readonly ORDER_UNARY_PLUS: number
  public readonly ORDER_UNARY_NEGATION: number
  public readonly ORDER_LOGICAL_NOT: number
  public readonly ORDER_TYPEOF: number
  public readonly ORDER_VOID: number
  public readonly ORDER_DELETE: number
  public readonly ORDER_DIVISION: number
  public readonly ORDER_MULTIPLICATION: number
  public readonly ORDER_MODULUS: number
  public readonly ORDER_SUBTRACTION: number
  public readonly ORDER_ADDITION: number
  public readonly ORDER_BITWISE_SHIFT: number
  public readonly ORDER_RELATIONAL: number
  public readonly ORDER_IN: number
  public readonly ORDER_INSTANCEOF: number
  public readonly ORDER_EQUALITY: number
  public readonly ORDER_BITWISE_AND: number
  public readonly ORDER_BITWISE_XOR: number
  public readonly ORDER_BITWISE_OR: number
  public readonly ORDER_LOGICAL_AND: number
  public readonly ORDER_LOGICAL_OR: number
  public readonly ORDER_CONDITIONAL: number
  public readonly ORDER_ASSIGNMENT: number
  public readonly ORDER_COMMA: number
  public readonly ORDER_NONE: number

  constructor() {
    this.dynamicValueMap = new Map()
    this.generator = new Module_613.JsonJavaScriptGenerator()
    this.getFieldValue = this.generator.get_field_value.bind(this.generator)
    this.quote = this.generator.quote.bind(this.generator)
    this.registerDelegate = this.generator.register.bind(this.generator)
    this.insertBlockSnippetGenerator = (e, n) => {
      this.registerDelegate(e, (e, r) => {
        var o = n(e, r)
        if ("string" === typeof o && o.trim().length > 0) {
          var i = e.blocks[r]
          var a = this.getFieldValue(i, "WIDGET_ID")
          var c = {
            blockId: i.id,
            blockType: i.type
          }
          if (a) {
            c.widgetId = a
          }
          return Module_4.h(o, c)
        }
        return o
      })
    }
    this.statementToCode = this.generator.statement_to_code.bind(this.generator)
    this.valueToCode = this.generator.value_to_code.bind(this.generator)
    this.workspaceToCode = this.generator.workspace_to_code.bind(this.generator)

    this.ORDER_ATOMIC = this.generator.ORDER_ATOMIC
    this.ORDER_NEW = this.generator.ORDER_NEW
    this.ORDER_MEMBER = this.generator.ORDER_MEMBER
    this.ORDER_FUNCTION_CALL = this.generator.ORDER_FUNCTION_CALL
    this.ORDER_INCREMENT = this.generator.ORDER_INCREMENT
    this.ORDER_DECREMENT = this.generator.ORDER_DECREMENT
    this.ORDER_BITWISE_NOT = this.generator.ORDER_BITWISE_NOT
    this.ORDER_UNARY_PLUS = this.generator.ORDER_UNARY_PLUS
    this.ORDER_UNARY_NEGATION = this.generator.ORDER_UNARY_NEGATION
    this.ORDER_LOGICAL_NOT = this.generator.ORDER_LOGICAL_NOT
    this.ORDER_TYPEOF = this.generator.ORDER_TYPEOF
    this.ORDER_VOID = this.generator.ORDER_VOID
    this.ORDER_DELETE = this.generator.ORDER_DELETE
    this.ORDER_DIVISION = this.generator.ORDER_DIVISION
    this.ORDER_MULTIPLICATION = this.generator.ORDER_MULTIPLICATION
    this.ORDER_MODULUS = this.generator.ORDER_MODULUS
    this.ORDER_SUBTRACTION = this.generator.ORDER_SUBTRACTION
    this.ORDER_ADDITION = this.generator.ORDER_ADDITION
    this.ORDER_BITWISE_SHIFT = this.generator.ORDER_BITWISE_SHIFT
    this.ORDER_RELATIONAL = this.generator.ORDER_RELATIONAL
    this.ORDER_IN = this.generator.ORDER_IN
    this.ORDER_INSTANCEOF = this.generator.ORDER_INSTANCEOF
    this.ORDER_EQUALITY = this.generator.ORDER_EQUALITY
    this.ORDER_BITWISE_AND = this.generator.ORDER_BITWISE_AND
    this.ORDER_BITWISE_XOR = this.generator.ORDER_BITWISE_XOR
    this.ORDER_BITWISE_OR = this.generator.ORDER_BITWISE_OR
    this.ORDER_LOGICAL_AND = this.generator.ORDER_LOGICAL_AND
    this.ORDER_LOGICAL_OR = this.generator.ORDER_LOGICAL_OR
    this.ORDER_CONDITIONAL = this.generator.ORDER_CONDITIONAL
    this.ORDER_ASSIGNMENT = this.generator.ORDER_ASSIGNMENT
    this.ORDER_COMMA = this.generator.ORDER_COMMA
    this.ORDER_NONE = this.generator.ORDER_NONE

    Module_613.load_basic_blocks_json_js_generators(this.generator)
  }

  public getDynamicValue(key: string, fallbackToEmpty = false) {
    const value = this.dynamicValueMap.get(key)
    return fallbackToEmpty ? value || "" : value || key
  }

  public setDynamicValue(key: string, value) {
    this.dynamicValueMap.set(key, value)
  }

  public deleteDynamicValue(key: string) {
    this.dynamicValueMap.delete(key)
  }

  public clearAllDynamicValues() {
    this.dynamicValueMap.clear()
  }
}