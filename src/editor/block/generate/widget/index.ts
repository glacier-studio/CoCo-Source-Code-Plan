/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：301__part-6
 */

import { getCustomWidgetBlockParamShadow, he } from "./utils"
import * as /* [auto-meaningful-name] */Module_85 from /* 85 */"../../../../../unrestored/shared/1571/2636/34/85"
import * as /* [auto-meaningful-name] */Module_118 from /* 118 */"../../../../../unrestored/shared/1571/2636/118/index"
import * as LoadCustomWidget from "../../../../shared/widget/custom/load"
import * as /* [auto-meaningful-name] */Module_46 from /* 46 */"../../../../../unrestored/shared/1571/2636/46/index"
import * as /* [auto-meaningful-name] */Module_4 from /* 4 */"../../../../../unrestored/shared/1571/2636/4"
import * as /* [auto-meaningful-name] */Shared_packages_Crc_blink_src_index from "../../../../shared/packages/@crc/blink/src/index"
import * as /* [auto-meaningful-name] */Module_544 from /* 544 */"../../../../../unrestored/shared/1571/2636/301/544"
import * as /* [auto-meaningful-name] */Module_658 from /* 658 */"../../../../../unrestored/shared/1571/2636/301/658"
function setBlockGroupProfile(e, Blink) {
  {
    const mutator = {
      event: "event",
      widgetType: "",
      updateShape_() {
        var this0 = this
        const types = LoadCustomWidget.getEventTypes(this.widgetType, this.event)
        if (!types) {
          console.error("WIDGET_EVENT_MUTATOR getWidgetEvent error", this.widgetType, this.event)
          this.append_statement_input("DO", undefined)
          this.set_disabled(true)
          this.set_field_value(Blink.Msg.INVALID_BLOCK, "EVENT")
          this.set_colour("#abafb6")
          return
        }
        this.set_disabled(false)
        const { label, params, subTypes, tooltip, blockOptions, key } = types
        const processedLabel = Module_85.a(this.widgetType, label)
        if (this.isAnyWidget) {
          const anyWidgetLabel = "任意" + LoadCustomWidget.getWidgetTitle(this.widgetType)
          this.get_input("WIDGET_ID_CONTAINER")?.append_field(anyWidgetLabel)
        } else {
          const idField = new Module_118.a({
            type: "field_coco_dropdown",
            name: "WIDGET_ID",
            custom: true,
            options() {
              return Module_46.c().getWidgetListByType(this0.widgetType)
            }
          })
          this.get_input("WIDGET_ID_CONTAINER")?.append_field(idField, "WIDGET_ID")
        }
        if (tooltip) {
          const processedTooltip = Module_85.a(this.widgetType, tooltip)
          this.set_tooltip(processedTooltip)
        }
        if (blockOptions?.icon) {
          const iconField = this.inputList[0].fieldRow[0]
          if (!iconField || iconField.field_type !== "FieldIcon") {
            return
          }
          iconField.set_value(Blink.utils.replace_message_references(blockOptions.icon))
        }
        const processKey = LoadCustomWidget.processEventKey(this.widgetType, key)
        this.append_statement_input("DO", undefined, processKey)
        if (subTypes) {
          this.set_field_value(processedLabel, "EVENT")
          subTypes.forEach(({ key, dropdown }) => {
            const processedKey = "PARAM_".concat(key)
            const field = new Module_118.a({
              type: "field_coco_dropdown",
              name: processedKey,
              custom: true,
              options: he(this0.widgetType, dropdown)
            })
            this0.append_dummy_input("", "DO").append_field(field, processedKey)
          })
        } else {
          this.set_field_value(processedLabel + Blink.Msg.WIDGET_EVENT_SUFFIX, "EVENT")
        }
        params.forEach(({ key, label, dropdown }) => {
          const processedKey = "PARAM_".concat(key)
          const processedLabel = Module_85.a(this0.widgetType, label)
          if (dropdown) {
            const dropdownField = new Module_118.a({
              type: "field_coco_dropdown",
              name: processedKey,
              custom: true,
              options: he(this0.widgetType, dropdown)
            })
            const field = this0.append_dummy_input("", "DO")
            if (processedLabel) {
              field.append_field(processedLabel, "".concat(processedKey, "_LABEL"))
            }
            field.append_field(dropdownField, processedKey)
          } else {
            this0.append_shadow_input(processedKey, "<shadow type=\"widget_event_param\">\n              <field name=\"PARAM_NAME\">".concat(processedLabel, "</field>\n              <mutation widget_type=\"").concat(this0.widgetType, "\" event=\"").concat(this0.event, "\" param=\"").concat(key, "\"></mutation>\n            </shadow>"), "DO")
          }
        })
        if (this.isAnyWidget) {
          const ANY_WIDGET_KEY = LoadCustomWidget.ANY_WIDGET_KEY
          const processedKey = "PARAM_".concat(ANY_WIDGET_KEY)
          const ANY_WIDGET_LABEL = LoadCustomWidget.ANY_WIDGET_LABEL
          this.append_shadow_input(processedKey, "<shadow type=\"widget_event_param\">\n          <field name=\"PARAM_NAME\">".concat(ANY_WIDGET_LABEL, "</field>\n          <mutation widget_type=\"").concat(this.widgetType, "\" event=\"").concat(this.event, "\" param=\"").concat(ANY_WIDGET_KEY, "\"></mutation>\n        </shadow>"), "DO")
        }
      },
      domToMutation(element) {
        this.event = element.getAttribute("event") || this.event
        this.widgetType = element.getAttribute("widget_type") || this.widgetType
        this.isAnyWidget = "true" === element.getAttribute("is_any_widget")
        this.updateShape_()
      },
      mutationToDom() {
        var e = document.createElement("mutation")
        e.setAttribute("event", this.event)
        e.setAttribute("widget_type", this.widgetType)
        e.setAttribute("is_any_widget", String(this.isAnyWidget))
        return e
      }
    }
    const paramMutator = {
      param: "",
      event: "",
      widgetType: "",
      domToMutation(element) {
        const this0 = this
        this.param = element.getAttribute("param") || this.param
        this.event = element.getAttribute("event") || this.event
        this.widgetType = element.getAttribute("widget_type") || this.widgetType
        const types = LoadCustomWidget.getEventTypes(this.widgetType, this.event)
        if (this.widgetType || this.event) {
          if (!types) {
            console.error("WIDGET_EVENT_PARAM_MUTATOR getWidgetEvent error", this.widgetType, this.event, this.param)
            this.set_output(true)
            this.set_disabled(true)
            return
          }
          this.set_disabled(false)
          const processedKey = LoadCustomWidget.processEventKey(this.widgetType, this.event)
          if (this.param === LoadCustomWidget.ANY_WIDGET_KEY) {
            this.set_output(true, "string", processedKey)
          } else {
            const paramTypes = types.params.find((param) => param.key === this0.param)
            if (!paramTypes) {
              console.error("WIDGET_EVENT_PARAM_MUTATOR get param error", this.widgetType, this.event, this.param)
              return
            }
            const { valueType } = paramTypes
            const processedValueType = LoadCustomWidget.processValueType(valueType)
            this.set_output(true, processedValueType, processedKey)
          }
        } else {
          this.set_output(true)
        }
      },
      mutationToDom() {
        const element = document.createElement("mutation")
        element.setAttribute("param", this.param)
        element.setAttribute("event", this.event)
        element.setAttribute("widget_type", this.widgetType)
        return element
      }
    }
    Blink.extensions.register_mutator("widget_event_mutator", mutator)
    Blink.extensions.register_mutator("widget_event_param_mutator", paramMutator)
    Blink.define_blocks_with_json_array([
      {
        type: "widget_event",
        message0: "%{BKY_WIDGET_EVENT_MSG}",
        args0: [
          Module_4.e("%{BKY_BLOCK_TAB_ICON}", true), {
            type: "input_dummy",
            name: "WIDGET_ID_CONTAINER"
          }, {
            type: "field_label",
            name: "EVENT",
            text: ""
          }
        ],
        colour: "%{BKY_EVENTS_HUE}",
        inputsInline: true,
        mutator: "widget_event_mutator"
      }
    ])
    Blink.define_blocks_with_json_array([
      {
        type: "widget_event_param",
        message0: "%{BKY_WIDGET_EVENT_PARAM_MSG}",
        args0: [
          {
            type: "field_label_serializable",
            name: "PARAM_NAME",
            text: ""
          }
        ],
        inputsInline: true,
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        mutator: "widget_event_param_mutator",
        extensions: ["param_block"]
      }
    ])
  }
  {
    const mutator = {
      property: "",
      widgetType: "",
      updateShape_() {
        var e
        const this0 = this
        const types = LoadCustomWidget.getPropertyTypes(this.widgetType, this.property)
        if (!types) {
          console.error("WIDGET_GET_MUTATOR getWidgetProperty error", this.widgetType, this.property)
          this.set_disabled(true)
          this.set_output(true)
          this.set_field_value(Blink.Msg.INVALID_BLOCK, "PROPERTY")
          this.set_colour("#abafb6")
          return
        }
        this.set_disabled(false)
        const { label, valueType, tooltip, blockOptions = {} } = types
        const processedLabel = Module_85.a(this.widgetType, label)
        this.set_field_value(Blink.Msg.WIDGET_OF, "PROPERTY")
        if (this.isAnyWidget) {
          const title = LoadCustomWidget.getWidgetTitle(this.widgetType)
          this.get_input("WIDGET_ID_CONTAINER")?.append_field(title)
          this.append_shadow_input("WIDGET_ID", `<empty type="widget_any_id"></empty>`, "PROPERTY")
        } else {
          const field = new Module_118.a({
            type: "field_coco_dropdown",
            name: "WIDGET_ID",
            custom: true,
            options: function () {
              return Module_46.c().getWidgetListByType(this0.widgetType)
            }
          })
          this.get_input("WIDGET_ID_CONTAINER")?.append_field(field, "WIDGET_ID")
        }
        let keys
        if ("object" === typeof blockOptions.getter && (keys = blockOptions.getter.keys)?.length) {
          const options: [string, string][] = []
          keys.forEach((key) => {
            const types = LoadCustomWidget.getPropertyTypes(this0.widgetType, key)
            if (types) {
              const processedLabel = Module_85.a(this0.widgetType, types.label)
              options.push([processedLabel, key])
            } else {
              console.error("WIDGET_GET_MUTATOR getWidgetProperty error", this0.widgetType, key)
            }
          })
          this.append_dummy_input().append_field(new Module_118.a({
            type: "field_coco_dropdown",
            name: "PROPERTY_KEY",
            custom: true,
            options() {
              return options
            }
          }), "PROPERTY_KEY")
          if (processedLabel) {
            this.append_dummy_input().append_field("".concat(processedLabel))
          }
        }
        switch (types.key) {
          case "__position":
            this.append_dummy_input().append_field(new Module_118.a({
              type: "field_coco_dropdown",
              name: "POSITION_TYPE",
              custom: true,
              options: function () {
                return [[Blink.Msg.POSITION_X, "positionX"], [Blink.Msg.POSITION_Y, "positionY"]]
              }
            }), "POSITION_TYPE")
            break
          case "__opacity":
            this.set_field_value("".concat(Blink.Msg.WIDGET_OF, " ").concat(Blink.Msg.WIDGET_OPACITY), "PROPERTY")
            break
          case "__visible":
            this.set_field_value(Blink.Msg.WIDGET_VISIBLE, "PROPERTY")
            break
          case "__disabled":
            this.set_field_value(Blink.Msg.WIDGET_DISABLED, "PROPERTY")
            break
          default:
            if (!(null === (e = keys) || undefined === e ? undefined : e.length)) {
              this.set_field_value("".concat("boolean" === valueType ? "" : Blink.Msg.WIDGET_OF, " ").concat(processedLabel), "PROPERTY")
            }
        }
        const processedValueType = LoadCustomWidget.processValueType(valueType)
        this.set_output(true, processedValueType)
        if (tooltip) {
          const processedTooltip = Module_85.a(this.widgetType, tooltip)
          this.set_tooltip(processedTooltip)
        }
      },
      domToMutation(element) {
        this.property = element.getAttribute("property") || this.property
        this.widgetType = element.getAttribute("widget_type") || this.widgetType
        this.isAnyWidget = "true" === element.getAttribute("is_any_widget")
        this.updateShape_()
      },
      mutationToDom() {
        const element = document.createElement("mutation")
        element.setAttribute("property", this.property)
        element.setAttribute("widget_type", this.widgetType)
        element.setAttribute("is_any_widget", String(this.isAnyWidget))
        return element
      }
    }
    Blink.extensions.register_mutator("widget_get_mutator", mutator)
    Blink.define_blocks_with_json_array([
      {
        type: "widget_get",
        message0: "%{BKY_WIDGET_GET_MSG}",
        args0: [
          {
            type: "input_dummy",
            name: "WIDGET_ID_CONTAINER"
          }, {
            type: "field_label",
            name: "PROPERTY",
            text: "property"
          }
        ],
        output: ["String"],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true,
        mutator: "widget_get_mutator"
      }
    ])
  }
  {
    const mutator = {
      property: "property",
      widgetType: "",
      updateShape_() {
        const this0 = this
        const types = LoadCustomWidget.getPropertyTypes(this.widgetType, this.property)
        if (!types) {
          console.error("WIDGET_SET_MUTATOR getWidgetProperty error", this.widgetType, this.property)
          this.set_disabled(true)
          this.set_field_value(Blink.Msg.INVALID_BLOCK, "PROPERTY")
          return void this.set_colour("#abafb6")
        }
        this.set_disabled(false)
        let validatorsGreaterThanValue: number | undefined
        let validatorsLessThanValue: number | undefined
        const { valueType, defaultValue, label, tooltip, checkType, dropdown, validators, blockOptions = {} } = types
        const processedLabel = Module_85.a(this.widgetType, label)
        let validatorsIsInteger = false
        if (validators && valueType === "number") {
          const validators0 = validators
          const { isInteger } = validators0
          validatorsIsInteger = !!isInteger
          validatorsGreaterThanValue = LoadCustomWidget.getValidatorsGreaterThanValue(validators0)
          validatorsLessThanValue = LoadCustomWidget.getValidatorsLessThanValue(validators0)
        }
        if (!("__position" !== types.key && "__size" !== types.key)) {
          validatorsIsInteger = true
        }
        if ("__visible" !== types.key && "__disabled" !== types.key) {
          this.get_input("WIDGET_ID_CONTAINER")?.insert_field_at(0, Blink.Msg.WIDGET_SET)
        }
        if (this.isAnyWidget) {
          const title = LoadCustomWidget.getWidgetTitle(this.widgetType)
          this.get_input("WIDGET_ID_CONTAINER")?.append_field(title)
          this.append_shadow_input("WIDGET_ID", "<empty type=\"widget_any_id\"></empty>", "PROPERTY")
        } else {
          const idField = new Module_118.a({
            type: "field_coco_dropdown",
            name: "WIDGET_ID",
            custom: true,
            options: function () {
              return Module_46.c().getWidgetListByType(this0.widgetType)
            }
          })
          this.get_input("WIDGET_ID_CONTAINER")?.append_field(idField, "WIDGET_ID")
        }
        let keys
        if ("object" === typeof blockOptions.setter && (keys = blockOptions.setter.keys)?.length) {
          const options: [string, string][] = []
          keys.forEach((key, index) => {
            const types = LoadCustomWidget.getPropertyTypes(this0.widgetType, key)
            if (types) {
              if (0 === index && "number" === types.valueType) {
                if (types.validators) {
                  validatorsLessThanValue = LoadCustomWidget.getValidatorsLessThanValue(types.validators)
                  validatorsGreaterThanValue = LoadCustomWidget.getValidatorsGreaterThanValue(types.validators)
                }
                if (!(undefined !== validatorsGreaterThanValue || "__width" !== types.key && "__height" !== types.key)) {
                  validatorsGreaterThanValue = 0
                }
              }
              const processedLabel = Module_85.a(this0.widgetType, types.label)
              options.push([processedLabel, key])
            } else {
              console.error("WIDGET_GET_MUTATOR getWidgetProperty error", this0.widgetType, key)
            }
          })
          this.set_field_value(Blink.Msg.WIDGET_OF, "PROPERTY")
          this.append_dummy_input().append_field(new Module_118.a({
            type: "field_coco_dropdown",
            name: "PROPERTY_KEY",
            custom: true,
            options() {
              return options
            },
            optOnchange(e) {
              const types = LoadCustomWidget.getPropertyTypes(this0.widgetType, e)
              if (types) {
                let COLOR
                if ("color" === types.valueType) {
                  COLOR = "COLOR"
                }
                let validatorsGreaterThanValue
                let validatorsLessThanValue
                const field = this0.get_shadow_field("VALUE", COLOR)
                if (field) {
                  field.set_value(String(types.defaultValue))
                  if ("number" === types.valueType) {
                    if (types.validators) {
                      validatorsGreaterThanValue = LoadCustomWidget.getValidatorsGreaterThanValue(types.validators)
                      validatorsLessThanValue = LoadCustomWidget.getValidatorsLessThanValue(types.validators)
                    }
                    if (!(undefined !== validatorsGreaterThanValue || "__width" !== types.key && "__height" !== types.key)) {
                      validatorsGreaterThanValue = 0
                    }
                    field.set_constraints(validatorsGreaterThanValue, validatorsLessThanValue, validatorsIsInteger ? 1 : undefined)
                  }
                }
              }
            }
          }), "PROPERTY_KEY")
          const j = processedLabel ? "".concat(processedLabel, " ").concat(Blink.Msg.WIDGET_SET_TO) : Blink.Msg.WIDGET_SET_TO
          this.append_dummy_input().append_field(j)
        }
        switch (types.key) {
          case "__position":
            this.set_field_value(Blink.Msg.WIDGET_OF, "PROPERTY")
            this.append_dummy_input().append_field(new Module_118.a({
              type: "field_coco_dropdown",
              name: "POSITION_TYPE",
              custom: true,
              options: function () {
                return [[Blink.Msg.POSITION_X, "positionX"], [Blink.Msg.POSITION_Y, "positionY"]]
              }
            }), "POSITION_TYPE")
            this.append_dummy_input().append_field(Blink.Msg.WIDGET_SET_TO)
            break
          case "__opacity":
            this.set_field_value("".concat(Blink.Msg.WIDGET_OF, " ").concat(Blink.Msg.WIDGET_OPACITY, " ").concat(Blink.Msg.WIDGET_SET_TO), "PROPERTY")
            break
          case "__visible":
            this.append_dummy_input("", 0).append_field(new Module_118.a({
              type: "field_coco_dropdown",
              name: "VALUE",
              custom: true,
              options: function () {
                return [[Blink.Msg.SHOW, "show"], [Blink.Msg.HIDE, "hide"]]
              }
            }), "VALUE")
            this.inputList.forEach(function (e) {
              if (e.get_field("PROPERTY")) {
                e.remove_field("PROPERTY")
              }
            })
            break
          case "__disabled":
            this.append_dummy_input("", 0).append_field(new Module_118.a({
              type: "field_coco_dropdown",
              name: "VALUE",
              custom: true,
              options: function () {
                return [[Blink.Msg.ABLE, "able"], [Blink.Msg.DISABLED, "disabled"]]
              }
            }), "VALUE")
            this.inputList.forEach(function (e) {
              if (e.get_field("PROPERTY")) {
                e.remove_field("PROPERTY")
              }
            })
            break
          default:
            if (!keys?.length) {
              this.set_field_value("".concat(Blink.Msg.WIDGET_OF, " ").concat(processedLabel, " ").concat(Blink.Msg.WIDGET_SET_TO), "PROPERTY")
            }
        }
        const processedCheckType = LoadCustomWidget.processCheckType(valueType, checkType)
        if ("__visible" !== types.key && "__disabled" !== types.key) {
          if (dropdown) {
            const field = new Module_118.a({
              type: "field_coco_dropdown",
              name: "VALUE",
              custom: true,
              options: he(this.widgetType, dropdown)
            })
            field.set_value(String(defaultValue))
            this.append_dummy_input().append_field(field, "VALUE")
          } else {
            let processedLabel = ""
            if ("string" === valueType) {
              processedLabel = Module_85.a(this.widgetType, String(defaultValue))
            }
            var x = getCustomWidgetBlockParamShadow(valueType, processedLabel || defaultValue)
            this.append_shadow_input("VALUE", x).set_check(processedCheckType)
          }
        }
        if ("number" === valueType && (validators || "__position" === types.key || "__size" === types.key)) {
          const field = this.get_shadow_field("VALUE")
          field.set_constraints(validatorsGreaterThanValue, validatorsLessThanValue, validatorsIsInteger ? 1 : undefined)
          if ("__opacity" === types.key) {
            field.set_controller_option({
              type: Shared_packages_Crc_blink_src_index.I.ControllerType.SLIDER,
              left_text: Blink.Msg["opacity.invisible"],
              right_text: Blink.Msg["opacity.visible"]
            })
          }
        }
        if (tooltip) {
          const processedTooltip = Module_85.a(this.widgetType, tooltip)
          this.set_tooltip(processedTooltip)
        }
      },
      domToMutation(element) {
        this.property = element.getAttribute("property") || this.property
        this.widgetType = element.getAttribute("widget_type") || this.widgetType
        this.isAnyWidget = "true" === element.getAttribute("is_any_widget")
        this.updateShape_()
      },
      mutationToDom() {
        var element = document.createElement("mutation")
        element.setAttribute("property", this.property)
        element.setAttribute("widget_type", this.widgetType)
        element.setAttribute("is_any_widget", String(this.isAnyWidget))
        return element
      }
    }
    Blink.extensions.register_mutator("widget_set_mutator", mutator)
    Blink.define_blocks_with_json_array([
      {
        type: "widget_set",
        message0: "%{BKY_WIDGET_SET_MSG}",
        args0: [
          {
            type: "input_dummy",
            name: "WIDGET_ID_CONTAINER"
          }, {
            type: "field_label",
            name: "PROPERTY",
            text: "property"
          }
        ],
        previousStatement: true,
        nextStatement: true,
        inputsInline: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        mutator: "widget_set_mutator"
      }
    ])
  }
  {
    const n = {
      method: "method",
      widgetType: "",
      isAnyWidget: false,
      updateShape_() {
        const this0 = this
        const types = LoadCustomWidget.getMethodTypes(this.widgetType, this.method)
        if (!types) {
          console.error("WIDGET_METHOD_MUTATOR getWidgetMethod error", this.widgetType, this.method)
          this.set_disabled(true)
          this.append_dummy_input().append_field(Blink.Msg.INVALID_BLOCK, "METHOD")
          this.set_colour("#abafb6")
          return
        }
        this.set_disabled(false)
        const field = this.get_input("WIDGET_ID_CONTAINER")
        if (this.isAnyWidget) {
          const title = LoadCustomWidget.getWidgetTitle(this.widgetType)
          field?.append_field(title)
          this.append_shadow_input("WIDGET_ID", "<empty type=\"widget_any_id\"></empty>")
          if ("__setVisible" === types.key) {
            const field = new Module_118.a({
              type: "field_coco_dropdown",
              name: "DISPLAY",
              custom: true,
              options: function () {
                return [[Blink.Msg.SHOW, "show"], [Blink.Msg.HIDE, "hide"]]
              }
            })
            this.append_dummy_input().append_field(field, "DISPLAY")
          }
          if ("__setDisabled" === types.key) {
            const field = new Module_118.a({
              type: "field_coco_dropdown",
              name: "DISABLED",
              custom: true,
              options: function () {
                return [[Blink.Msg.ABLE, "able"], [Blink.Msg.DISABLED, "disabled"]]
              }
            })
            this.append_dummy_input().append_field(field, "DISABLED")
          }
        } else {
          const idField = new Module_118.a({
            type: "field_coco_dropdown",
            name: "WIDGET_ID",
            custom: true,
            options: function () {
              return Module_46.c().getWidgetListByType(this0.widgetType)
            }
          })
          field?.append_field(idField, "WIDGET_ID")
        }
        const { label, params, tooltip, blockOptions = {}, valueType } = types
        if (false !== blockOptions.callMethodLabel) {
          const callMethodLabel = (blockOptions.callMethodLabel?.toString()) || ""
          const processedCallMethodLabel = Module_85.a(this.widgetType, callMethodLabel) || Blink.Msg.WIDGET_METHOD_CALL_MSG
          const textField = new Module_658.FieldLabel({
            text: processedCallMethodLabel
          })
          field?.insert_field_at(0, textField)
        }
        let icon
        if (blockOptions.icon && (Blink.Msg[blockOptions.icon] ? icon = Blink.Msg[blockOptions.icon] : blockOptions.icon.startsWith("https://") && (icon = blockOptions.icon), icon)) {
          const field = new Module_544.FieldImage({
            src: icon
          })
          this.append_dummy_input("ICON_CONTAINER", "WIDGET_ID_CONTAINER").append_field(field)
        }
        if (blockOptions.color) {
          this.set_colour(blockOptions.color)
        }
        if (valueType) {
          this.set_next_statement(false)
          this.set_previous_statement(false)
          const processedValueType = LoadCustomWidget.processValueType(valueType)
          this.set_output(true, processedValueType)
        }
        const processedLabel = Module_85.a(this.widgetType, label)
        if (processedLabel) {
          this.append_dummy_input().append_field(processedLabel, "METHOD")
        }
        if (tooltip) {
          const processedTooltip = Module_85.a(this.widgetType, tooltip)
          this.set_tooltip(processedTooltip)
        }
        if (false === blockOptions.inputsInline) {
          this.set_inputs_inline(blockOptions.inputsInline)
        }
        params.forEach(({ label, labelAfter, valueType, checkType, defaultValue, key, dropdown, controller }) => {
          const processedLabel = Module_85.a(this0.widgetType, label)
          const processedKey = "PARAM_".concat(key)
          if (dropdown) {
            const field = new Module_118.a({
              type: "field_coco_dropdown",
              name: processedKey,
              custom: true,
              options: he(this0.widgetType, dropdown)
            })
            const inputField = this0.append_dummy_input()
            if (processedLabel) {
              inputField.append_field(processedLabel, "".concat(processedKey, "_LABEL"))
            }
            inputField.append_field(field, processedKey)
          } else {
            const shadow = getCustomWidgetBlockParamShadow(valueType, defaultValue)
            const field = this0.append_shadow_input(processedKey, shadow)
            const processedCheckType = LoadCustomWidget.processCheckType(valueType, checkType)
            field.set_check(processedCheckType)
            if (processedLabel) {
              field.insert_field_at(0, processedLabel, "".concat(processedKey, "_LABEL"))
            }
            if ("number" === valueType && controller) {
              const field = this0.get_shadow_field(processedKey)
              field?.set_constraints(controller.min, controller.max, 1)
              if (controller.leftText && controller.rightText) {
                field?.set_controller_option({
                  type: Shared_packages_Crc_blink_src_index.I.ControllerType.SLIDER,
                  left_text: controller.leftText,
                  right_text: controller.rightText
                })
              }
            }
          }
          if (labelAfter) {
            const processedLabelAfter = Module_85.a(this0.widgetType, labelAfter)
            this0.append_dummy_input("").append_field(processedLabelAfter, "".concat(processedKey, "_LABEL_AFTER"))
          }
        })
      },
      domToMutation(element) {
        this.method = element.getAttribute("method") || this.method
        this.widgetType = element.getAttribute("widget_type") || this.widgetType
        this.isAnyWidget = "true" === element.getAttribute("is_any_widget")
        this.updateShape_()
      },
      mutationToDom() {
        var element = document.createElement("mutation")
        element.setAttribute("method", this.method)
        element.setAttribute("widget_type", this.widgetType)
        element.setAttribute("is_any_widget", String(this.isAnyWidget))
        return element
      }
    }
    Blink.extensions.register_mutator("widget_method_mutator", n)
    Blink.define_blocks_with_json_array([
      {
        type: "widget_method",
        message0: "%{BKY_WIDGET_METHOD_MSG}",
        args0: [
          {
            type: "input_dummy",
            name: "WIDGET_ID_CONTAINER"
          }
        ],
        previousStatement: true,
        nextStatement: true,
        inputsInline: true,
        colour: "%{BKY_VARIABLES_HUE}",
        mutator: "widget_method_mutator"
      }
    ])
  }
  {
    const mutator = {
      property: "property",
      widgetType: "",
      updateShape_() {
        const this0 = this
        const types = LoadCustomWidget.getPropertyTypes(this.widgetType, this.property)
        if (types) {
          const { defaultValue, dropdown } = types
          if (dropdown) {
            this.set_shadow(true)
            const field = new Module_118.a({
              type: "field_coco_dropdown",
              name: "VALUE",
              custom: true,
              options: function () {
                return he(this0.widgetType, dropdown)
              }
            })
            if (!this.get_field("VALUE")) {
              this.append_dummy_input("").append_field(field, "VALUE")
              field.set_value(String(defaultValue))
            }
          } else {
            console.error("WIDGET_DROPDOWN_MUTATOR dropdown is invalid", dropdown)
          }
        } else {
          console.error("WIDGET_DROPDOWN_MUTATOR getWidgetProperty error", this.widgetType, this.property)
        }
      },
      domToMutation(element) {
        this.property = element.getAttribute("property") || this.property
        this.widgetType = element.getAttribute("widget_type") || this.widgetType
        this.updateShape_()
      },
      mutationToDom() {
        var element = document.createElement("mutation")
        element.setAttribute("property", this.property)
        element.setAttribute("widget_type", this.widgetType)
        return element
      }
    }
    Blink.extensions.register_mutator("widget_dropdown_mutator", mutator)
    Blink.define_blocks_with_json_array([
      {
        type: "widget_color",
        message0: "%{BKY_WIDGET_COLOR_MSG}",
        args0: [
          {
            type: "field_colour",
            name: "COLOR",
            colour: "#ffffff"
          }
        ],
        colour: "#ffffff",
        output: ["Color"]
      }
    ])
    Blink.define_blocks_with_json_array([
      {
        type: "widget_boolean",
        message0: "%{BKY_WIDGET_BOOLEAN_MSG}",
        args0: [
          {
            type: "field_coco_dropdown",
            name: "BOOL",
            custom: true,
            options: [["%{BKY_WIDGET_BOOLEAN_TRUE}", "TRUE"], ["%{BKY_WIDGET_BOOLEAN_FALSE}", "FALSE"]]
          }
        ],
        output: "Boolean",
        colour: "%{BKY_LOGIC_HUE}"
      }
    ])
    Blink.define_blocks_with_json_array([
      {
        type: "widget_dropdown",
        message0: "",
        args0: [],
        output: ["String", "Boolean", "Number"],
        colour: "%{BKY_APPEARANCE_HUE}",
        mutator: "widget_dropdown_mutator"
      }
    ])
    Blink.define_blocks_with_json_array([
      {
        type: "widget_any_id",
        message0: "",
        args0: [],
        output: "String"
      }
    ])
  }
}
function ve(e) {
  e.insertBlockSnippetGenerator("widget_get", function (t, n) {
    var /* [auto-meaningful-name] */h$getter
    var o = t.blocks[n]
    var /* [auto-meaningful-name] */o$mutation = o.mutation
    var a = Shared_packages_Crc_blink_src_index.Blink.xml.text_to_dom(o$mutation)
    var s = a.getAttribute("property")
    var c = a.getAttribute("widget_type")
    var l = "true" === a.getAttribute("is_any_widget")
    if (!s || !c) {
      return ""
    }
    var u = e.getFieldValue(o, "WIDGET_ID") || ""
    u = Module_4.o(u)
    if (l) {
      u = e.valueToCode(t, n, "WIDGET_ID", e.ORDER_FUNCTION_CALL)
    }
    var d = LoadCustomWidget.getPropertyTypes(c, s)
    if (!d) {
      return ""
    }
    var /* [auto-meaningful-name] */h$getter$keys
    var /* [auto-meaningful-name] */d$blockOptions = d.blockOptions
    var h = undefined === d$blockOptions ? {} : d$blockOptions
    if ("object" === typeof h.getter && (null === (h$getter$keys = h.getter.keys) || undefined === h$getter$keys ? undefined : h$getter$keys.length)) {
      s = e.getFieldValue(o, "PROPERTY_KEY") || ""
      var g = LoadCustomWidget.getPropertyTypes(c, s)
      if (!g) {
        return ""
      }
      h = g.blockOptions || {}
    }
    var v = e.getFieldValue(o, "POSITION_TYPE") || ""
    if ("__opacity" === s) {
      return Module_4.s("getWidgetOpacity", [u])
    }
    if ("__visible" === s) {
      return Module_4.s("getWidgetVisible", [u])
    }
    if ("__disabled" === s) {
      return Module_4.s("getWidgetDisabled", [u])
    }
    if ("__width" === s || "__height" === s) {
      var b = "__width" === s ? "getWidgetWidth" : "getWidgetHeight"
      return Module_4.s(b, [u])
    }
    if (v) {
      var y = "positionX" === v ? "getWidgetPositionX" : "getWidgetPositionY"
      return Module_4.s(y, [u])
    }
    return "string" === typeof (null === (h$getter = h.getter) || undefined === h$getter ? undefined : h$getter.func) ? Module_4.s(h.getter.func, [u, Module_4.o(s)]) : Module_4.s("getProperty", [u, Module_4.o(s)], LoadCustomWidget.q(c))
  })
  e.insertBlockSnippetGenerator("widget_set", function (t, n) {
    var /* [auto-meaningful-name] */h$setter
    var o = t.blocks[n]
    var /* [auto-meaningful-name] */o$mutation = o.mutation
    var a = Shared_packages_Crc_blink_src_index.Blink.xml.text_to_dom(o$mutation)
    var s = a.getAttribute("property")
    var c = a.getAttribute("widget_type")
    var l = "true" === a.getAttribute("is_any_widget")
    if (!s || !c) {
      return ""
    }
    var u = e.getFieldValue(o, "WIDGET_ID") || ""
    u = Module_4.o(u)
    if (l) {
      u = e.valueToCode(t, n, "WIDGET_ID", e.ORDER_FUNCTION_CALL)
    }
    var d = LoadCustomWidget.getPropertyTypes(c, s)
    if (!d) {
      return ""
    }
    var /* [auto-meaningful-name] */h$setter$keys
    var /* [auto-meaningful-name] */d$blockOptions = d.blockOptions
    var h = undefined === d$blockOptions ? {} : d$blockOptions
    if ("object" === typeof h.setter && (null === (h$setter$keys = h.setter.keys) || undefined === h$setter$keys ? undefined : h$setter$keys.length)) {
      s = e.getFieldValue(o, "PROPERTY_KEY") || ""
      var g = LoadCustomWidget.getPropertyTypes(c, s)
      if (!g) {
        return ""
      }
      h = g.blockOptions || {}
    }
    var v = e.valueToCode(t, n, "VALUE", e.ORDER_FUNCTION_CALL)
    if (d.dropdown) {
      v = Module_4.o(e.getFieldValue(o, "VALUE") || "")
    }
    var b = e.getFieldValue(o, "POSITION_TYPE") || ""
    if ("__opacity" === s) {
      return Module_4.l(Module_4.n("setWidgetOpacity", [u, v]), o, e)
    }
    if ("__visible" === s) {
      var y = "show" === e.getFieldValue(o, "VALUE")
      return Module_4.l(Module_4.n("setWidgetVisible", [u, y]), o, e)
    }
    if ("__disabled" === s) {
      var E = "disabled" === e.getFieldValue(o, "VALUE")
      return Module_4.l(Module_4.n("setWidgetAttribute", [u, Module_4.o("disabled"), E]), o, e)
    }
    if ("__width" === s || "__height" === s) {
      var O = "__width" === s ? "setWidgetWidth" : "setWidgetHeight"
      return Module_4.l(Module_4.n(O, [u, v]), o, e)
    }
    if (b) {
      var w = "positionX" === b ? "setWidgetPositionX" : "setWidgetPositionY"
      return Module_4.l(Module_4.n(w, [u, v]), o, e)
    }
    return "string" === typeof (null === (h$setter = h.setter) || undefined === h$setter ? undefined : h$setter.func) ? Module_4.l(Module_4.n(h.setter.func, [u, v]), o, e) : Module_4.l(Module_4.n("setProperty", [u, Module_4.o(s), v], undefined, undefined, LoadCustomWidget.q(c)), o, e)
  })
  e.insertBlockSnippetGenerator("widget_event", function (t, n) {
    var r = t.blocks[n]
    var o = e.getFieldValue(r, "WIDGET_ID") || ""
    var /* [auto-meaningful-name] */r$mutation = r.mutation
    var a = Shared_packages_Crc_blink_src_index.Blink.xml.text_to_dom(r$mutation)
    var s = a.getAttribute("event")
    var c = e.getDynamicValue("__CURRENT_SCREEN_ID__")
    var l = a.getAttribute("widget_type")
    var u = "true" === a.getAttribute("is_any_widget")
    if (!s || !l) {
      return ""
    }
    var d = LoadCustomWidget.getEventTypes(l, s)
    if (!d) {
      return ""
    }
    var /* [auto-meaningful-name] */d$params = d.params
    var /* [auto-meaningful-name] */d$subTypes = d.subTypes
    var h = []
    if (!(null === d$subTypes || undefined === d$subTypes)) {
      d$subTypes.forEach(function (t) {
        s += e.getFieldValue(r, "PARAM_".concat(t.key)) || ""
      })
    }
    d$params.forEach(function (e) {
      h.push("".concat(Module_4.a).concat(e.key))
    })
    if (u) {
      h.push("".concat(Module_4.a).concat(LoadCustomWidget.ANY_WIDGET_KEY))
    }
    var g = e.statementToCode(t, n, "DO")
    return g ? Module_4.n("onWidgetEvent", [Module_4.o(l), Module_4.o(s), u ? Module_4.o(c) : Module_4.o(o)], g, h, LoadCustomWidget.q(l)) : ""
  })
  e.insertBlockSnippetGenerator("widget_event_param", function (e, t) {
    var /* [auto-meaningful-name] */e$blocksT$mutation = e.blocks[t].mutation
    var r = Shared_packages_Crc_blink_src_index.Blink.xml.text_to_dom(e$blocksT$mutation).getAttribute("param")
    return "".concat(Module_4.a).concat(r)
  })
  e.insertBlockSnippetGenerator("widget_method", function (t, n) {
    var r = t.blocks[n]
    var /* [auto-meaningful-name] */r$mutation = r.mutation
    var i = Shared_packages_Crc_blink_src_index.Blink.xml.text_to_dom(r$mutation)
    var a = i.getAttribute("method")
    var s = i.getAttribute("widget_type")
    var c = "true" === i.getAttribute("is_any_widget")
    if (!a || !s) {
      return ""
    }
    var l = LoadCustomWidget.getMethodTypes(s, a)
    if (!l) {
      return ""
    }
    var u = []
    var d = e.getFieldValue(r, "WIDGET_ID") || ""
    if (c) {
      d = e.valueToCode(t, n, "WIDGET_ID", e.ORDER_FUNCTION_CALL)
      u.push(d)
    } else {
      u.push(Module_4.o(d))
    }
    u.push(Module_4.o(a))
    var /* [auto-meaningful-name] */l$params = l.params
    var /* [auto-meaningful-name] */l$valueType = l.valueType
    var h = []
    l$params.forEach(function (o) {
      var /* [auto-meaningful-name] */o$key = o.key
      var /* [auto-meaningful-name] */o$dropdown = o.dropdown
      var s = "PARAM_".concat(o$key)
      var c = "''"
      try {
        c = e.valueToCode(t, n, s, e.ORDER_FUNCTION_CALL) || "''"
      } catch (l) {
        console.error("widget_method valueToCode error", l)
      }
      if (o$dropdown) {
        c = Module_4.o(e.getFieldValue(r, s) || "")
      }
      u.push(c)
      h.push(c)
    })
    if ("__setVisible" === l.key) {
      var g = "show" === e.getFieldValue(r, "DISPLAY")
      return Module_4.l(Module_4.n("setWidgetVisible", [d, g]), r, e)
    }
    if ("__setDisabled" === l.key) {
      var v = "disabled" === e.getFieldValue(r, "DISABLED")
      return Module_4.l(Module_4.n("setWidgetAttribute", [d, Module_4.o("disabled"), v]), r, e)
    }
    return l$valueType ? Module_4.l(Module_4.r("callMethod", u), r, e, true, true) : Module_4.l(Module_4.j("callMethod", u, undefined, undefined, LoadCustomWidget.q(s)), r, e)
  })
  e.insertBlockSnippetGenerator("widget_color", function (t, n) {
    var r = t.blocks[n]
    var o = e.getFieldValue(r, "COLOR")
    return Module_4.o(o)
  })
  e.insertBlockSnippetGenerator("color_picker", function (t, n) {
    var r
    var o = t.blocks[n]
    var i = Shared_packages_Crc_blink_src_index.Blink.xml.text_to_dom(o.mutation)
    var a = function (r) {
      return e.valueToCode(t, n, r, e.ORDER_COMMA)
    }
    switch (Number(i.getAttribute("format"))) {
      case Shared_packages_Crc_blink_src_index.I.EColorFormat.ColorPalette:
        r = Module_4.s("getColorHex", [Module_4.o(i.getAttribute("color") || "")])
        break
      case Shared_packages_Crc_blink_src_index.I.EColorFormat.ColorString:
        r = Module_4.s("getColorHex", [a("COLOR_STRING")])
        break
      case Shared_packages_Crc_blink_src_index.I.EColorFormat.HSVA:
        r = Module_4.s("getColorHsva", [a("H"), a("S"), a("V"), a("A")])
        break
      case Shared_packages_Crc_blink_src_index.I.EColorFormat.RGBA:
        r = Module_4.s("getColorRgba", [a("R"), a("G"), a("B"), a("A")])
    }
    return r || ""
  })
  e.insertBlockSnippetGenerator("widget_boolean", function (t, n) {
    var r = t.blocks[n]
    return ["TRUE" === e.getFieldValue(r, "BOOL") ? "true" : "false", e.ORDER_ATOMIC]
  })
  e.insertBlockSnippetGenerator("widget_dropdown", function (t, n) {
    var r = t.blocks[n]
    var o = e.getFieldValue(r, "VALUE")
    return Module_4.o(o)
  })
  e.insertBlockSnippetGenerator("widget_any_id", function (e, t) {
    return Module_4.o("")
  })
}

const MESSAGES = {
  "zh-CN": {
    PRESS: "点击",
    PRESS_IN: "按下",
    PRESS_OUT: "松开",
    PRESS_HOLD: "按住",
    SIZE: "尺寸大小",
    HUGE: "超大",
    LARGE: "大",
    MEDIUM: "中",
    SMALL: "小",
    TINY: "超小",
    INCREASE: "增加",
    DECREASE: "减少",
    SET: "设置",
    OF: "的",
    IMAGE: "图片",
    CONTENT: "文本内容",
    TEXT_CONTENT: "文本",
    TEXT_COLOR: "文本颜色",
    BACKGROUND_COLOR: "背景颜色",
    ALIGN: "对齐方式",
    LEFT_ALIGN: "居左",
    CENTER_ALIGN: "居中",
    RIGHT_ALIGN: "居右",
    TOP_ALIGN: "居上",
    BOTTOM_ALIGN: "居下",
    FONT_SIZE: "字号",
    HEIGHT: "高度",
    WIDTH: "宽度",
    POSITION_X: "X坐标",
    POSITION_Y: "Y坐标",
    TEXT: "文本",
    SHOW: "显示",
    HIDE: "隐藏",
    DISABLED: "禁用",
    ABLE: "启用",
    BRIGHTNESS: "亮度",
    ALPHA: "透明度",
    HUE: "色相",
    SATURATION: "饱和度",
    HORIZONTAL: "水平",
    HORIZONTAL_FLIPPED: "水平翻转",
    VERTICAL_FLIPPED: "垂直翻转",
    VERTICAL: "垂直",
    MOVE_TOP: "最上层",
    MOVE_BOTTOM: "最底层",
    MOVE_UP: "上一层",
    MOVE_DOWN: "下一层",
    "opacity.invisible": "透明",
    "opacity.visible": "不透明",
    INVALID_BLOCK: "无效积木：相关控件已被移除",
    COLOR: "颜色",
    MODE: "样式",
    ICON: "图标",
    SYSTEM: "系统",
    EVENT: "事件",
    CONTROL: "控制",
    PHONE: "功能",
    OPERATOR: "运算",
    PRIMITIVE: "变量",
    ARRAY: "列表",
    OBJECT: "字典",
    FUNCTION: "函数",
    STORAGE: "数据库",
    SENSE: "传感",
    COMPONENTS: "界面控件",
    INVISIBLE_COMPONENTS: "屏幕功能",
    GLOBAL_COMPONENTS: "全局功能",
    ANY_COMPONENTS: "任意控件",
    WHEN: "%1 当 %2 %3",
    REPEAT_FOREVER: "重复执行 %1 %2",
    REPEAT: "重复执行 %1 次 %2 %3",
    REPEAT_WHEN: "当 %1 重复执行 %2 %3",
    REPEAT_WHEN_TOOLTIP: "如果值为真(true)，则重复执行C口内的代码。\n如果值为假(false)，则结束重复执行。",
    BREAK: "退出循环",
    BREAK_TOOLTIP: "结束循环，执行重复执行下面的代码。",
    WAIT_SECS: "等待 %1 秒",
    SLEEP_UTIL: "保持等待直到%1",
    CONTINUE: "跳过此次循环，进入下次循环",
    CONSOLE_LOG: "在控制台打印 %1",
    NEW_CONSOLE_LOG: "在控制台 %1 %2",
    CONSOLE_ERROR: "在控制台报错 %1",
    TO_LOG: "打印",
    TO_ERROR: "报错",
    TO_WARNING: "预警",
    CONSOLE_LOG_DEFAULT_VALUE: "调试信息",
    CONSOLE_ERROR_DEFAULT_VALUE: "报错信息",
    CONTROLS_FOR: "重复执行 %1 从 %2 到 %3 前，间隔 %4",
    CONTROLS_FOR_TOOLTIP: "for循环积木。变量“数字”初始时为1，每次重复执行后增加1；直到“数字”等于10时，结束重复执行。",
    CONTROLS_FOR_CLOSED_RANGE: "重复执行 %1 从 %2 到 %3，间隔 %4",
    CONTROLS_FOR_CLOSED_RANGE_TOOLTIP: "for 循环积木。变量“数字”初始值为1，每次重复执行后增加1；当“数字”小于或者等于10时，执行开口里的语句",
    CONTROLS_NUMBER: "数字",
    VARIABLE: "变量",
    VARIABLES_GLOBAL: "全局变量 %1",
    VARIABLES_GET: "%1",
    VARIABLES_SET: "设置变量 %1 的值为 %2",
    CHANGE_VARIABLE: "将变量 %1 %2 %3",
    VARIABLES_CREATE: "创建变量 %1 为 %2",
    SHOW_HIDE_VARIABLE: "%1 变量 %2",
    LISTS_APPEND: "添加 %1 到 %2 末尾",
    INSERT_LISTS_ITEM_BY_INDEX: "插入 %3 到 %1 的第 %2 项",
    COPY_ARRAY: "复制 %1 到 %2",
    GET_ARRAY_LENGTH: "%1 的长度",
    GET_ARRAY_ITEM_INDEX: "%2 中第一个 %1 的位置",
    CHECK_ITEM_IN_ARRAY: "%1 中包含 %2",
    LIST: "列表",
    NTH: "第",
    LAST_ITEM: "最后一项",
    ALL_ITEM: "所有项",
    ITEM: "项",
    DELETE: "删除",
    REPLACE: "替换",
    IS: "为",
    REMOVE_ARRAY_ITEM: "删除 %1 %2",
    ARRAY_ITEM: "项",
    LISTS_REPLACE: "替换 %1 %2",
    ARRAY_CURRENT_ITEM: "当前项",
    ARRAY_FOREACH: "遍历 %1 取 %2，重复执行 %3 %4",
    OBJECT_GET_VALUE: "获取对象 %1 属性为 %2 的值",
    OBJECT_GET_VALUE_TOOLTIP: "获取对象中某个属性的值。比如对象A为：\n{\"province\":\"广东\",\"city\":\"深圳\",\"weather\":\"多云\"}\n那其属性为province的值为广东，属性为city的值为深圳，属性为weather的值为多云。",
    OBJECT_JSON_PARSE: "将文本 %1 解析为对象",
    OBJECT_JSON_PARSE_TOOLTIP: "将符合json结构的文本内容（比如HTTP客户端获得文本时的文本内容）转换成对象类型，嵌入到“获取对象？属性为（“”）的值”积木中，可以进一步获取对象中某个属性的值。",
    OBJECT_GET: "%1",
    OBJECT_SET_ITEM: "设置 %1 键 %2 的值为 %3",
    OBJECT_DELETE_ITEM: "删除 %1 中的键 %2",
    OBJECT_CLEAR: "清空 %1",
    OBJECT_LENGTH: "%1 键的总数",
    OBJECT_GET_ITEM: "%1 键 %2 的值",
    OBJECT_INCLUDE_KEY: "键 %2 存在于 %1",
    MATH_IS: "是",
    MATH_EVEN: "偶数",
    MATH_ODD: "奇数",
    MATH_PRIME: "质数",
    MATH_WHOLE: "整数",
    MATH_POSITIVE: "正数",
    MATH_NEGATIVE: "负数",
    MATH_ROUND_OPERATOR_ROUND: "四舍五入",
    MATH_ROUND_OPERATOR_CEIL: "向上舍入",
    MATH_ROUND_OPERATOR_FLOOR: "向下舍入",
    REMINDER_OPERATION: "%1 ÷ %2 的余数",
    RANDOM_NUM: "在 %1 到 %2 间随机整数",
    DIVISIBLE_BY: "%1 能被 %2 整除",
    CALCULATE: "数学运算 %1",
    TEXT_SELECT: "%1 的第 %2 到第 %3 个字符",
    TEXT_LENGTH: "%1 的长度",
    TEXT_CONTAIN: "%1 包含 %2",
    TEXT_SPLIT: "把 %1 按 %2 分开成列表",
    CONVERT_TYPE: "把 %1 转换为 %2 类型",
    NUMBER_TYPE: "数字",
    STRING_TYPE: "字符串",
    BOOLEAN_TYPE: "布尔值",
    TEXT_SLICE: "%1 的第 %2",
    OPERATORS_TEXT_SELECT_CHANGEABLE_TO: "到第",
    OPERATORS_TEXT_SELECT_CHANGEABLE_END: "个字符串",
    APP_ON_MOUNT: "%1 当打开应用时 %2 %3",
    APP_ON_SWITCH: "%1 当应用 %2 时 %3 %4",
    APP_ACTIVE: "返回前台",
    APP_BACKGROUND: "切到后台",
    BROADCAST_ON_RECEIVE: "%1 当 收到 广播 %2 时 %3 %4",
    BROADCAST_SEND: "发送广播 %1",
    BROADCAST_SEND_AND_WAIT: "发送广播 %1 并等待",
    BROADCAST_INPUT_TOOLTIP: "嵌入“字符串” ：按 “广播名称” 检索",
    SCREEN_ON_OPEN: "%1 当打开屏幕时",
    SCREEN_ON_OPEN_GET_PARAM: "%1 当打开屏幕时 %2 %3 %4",
    SCREEN_ON_PRESS: "%1 当屏幕被点击时 %2 %3 %4 %5",
    SCREEN_ON_PRESS_MSG0: "%1 当 屏幕 被 %2 时 %3 %4 %5 %6",
    SCREEN_UPDATE_BACKGROUND_COLOR: "设置 %1 的 背景颜色 为 %2",
    SCREEN_SET_BACKGROUND_IMAGE: "设置 %1 的 背景图片 为 %2",
    NEW_SCREEN_UPDATE_BACKGROUND_COLOR: "设置 屏幕 的 背景颜色 为 %1",
    NEW_SCREEN_SET_BACKGROUND_IMAGE: "设置 屏幕 的 背景图片 为 %1",
    SCREEN_GET_BACKGROUND_IMAGE: "%1 的 背景图片",
    SCREEN_NAVIGATE_TO: "切换到屏幕 %1",
    SCREEN_NAVIGATE_TO_BY_VALUE: "切换到屏幕 %1 并传值 %2",
    SCREEN_HEIGHT: "高度",
    SCREEN_WIDTH: "宽度",
    SCREEN_GET_COLOR: "%1 的 背景颜色",
    SCREEN_GET_SIZE: "%1 的 %2",
    NEW_SCREEN_GET_COLOR: "屏幕 的 背景颜色",
    NEW_SCREEN_GET_SIZE: "屏幕 的 %1",
    NEW_SCREEN_GET_BACKGROUND_IMAGE: "屏幕 的 背景图片",
    SCREEN_PREV: "上一屏",
    SCREEN_NEXT: "下一屏",
    SCREEN_PARAM: "参数",
    SCREEN_CHECK_IF_PRESSED: "屏幕 被 按住",
    SCREEN_INPUT_TOOLTIP: "嵌入“字符串”：按“屏幕名称”检索\n 嵌入“数字”：按“屏幕序号”检索",
    PHONE_VIBRATE: "手机振动 %1 秒",
    PHONE_BATTERY_LEVEL: "当前电量",
    BRIGHTNESS_SET_BRIGHTNESS: "设置屏幕亮度为 %1",
    BRIGHTNESS_GET_BRIGHTNESS: "当前屏幕亮度",
    BRIGHTNESS_SET_KEEP_SCREEN_ON: "设置屏幕是否保持常亮 %1",
    GYROSCOPE_ON_PHONE_SHAKE: "%1 当手机被摇晃时 %2 %3",
    GYROSCOPE_PHONE_GET_COMPASS: "指南针",
    GYROSCOPE_PHONE_GET_COMPASS_TOOLTIP: "手机设备顶部朝向。\n正北为 0\n正南为 180\n正西为 270\n正东为 90",
    GYROSCOPE_PHONE_GET_ORIENTATION_VALUE: "手机在 %1 方向的 %2",
    VOLUME_SENSOR_SET_DETECTION_STATE: "%1 环境音量传感器",
    VOLUME_SENSOR_GET_CURRENT_VALUE: "当前环境音量",
    ROTATION: "倾斜角度",
    GRAVITY: "加速度分量",
    TIME: "时间",
    YEAR: "年",
    MONTH: "月",
    DATE: "日",
    DAYS: "天数",
    DAY_NAME: "星期（文本）",
    DAY_NUM: "星期（数字）",
    HOUR: "小时",
    MINUTE: "分钟",
    SECOND: "秒",
    DATE_OBJECT: "日期",
    START: "开始",
    STOP: "停止",
    RESET: "重置",
    OPEN: "开启",
    CLOSE: "关闭",
    DATE_SET_TIMER_STATE: "%1 %2",
    DATE_TIMER: "%1",
    DATE_GET_CURRENT_DATE: "%1",
    DATE_GET_CURRENT_DATE_TOOLTIP: "电脑上运行时，获取的是电脑系统当前的时间。\n手机上运行时，获取的是手机系统当前的时间。",
    DATE_CURRENT_TIME: "当前 时间",
    DATE_CURRENT_YEAR: "当前 年",
    DATE_CURRENT_MONTH: "当前 月",
    DATE_CURRENT_DATE: "当前 日",
    DATE_CURRENT_DAY_NAME: "当前 星期（文本）",
    DATE_CURRENT_DAY_NUM: "当前 星期（数字）",
    DATE_CURRENT_HOUR: "当前 小时",
    DATE_CURRENT_MINUTE: "当前 分钟",
    DATE_CURRENT_SECOND: "当前 秒",
    DATE_CHECK_DATE_IS_EQUAL: "%1 与 %2 是否相等",
    DATE_GET_DATE_MINUS_OPERATION: "%1 减去 %2 的 %3",
    DATE_PICKER_ON_SELECT_DONE: "%1 当 %2 完成选择时 %3 %4 %5 %6 %7",
    DATE_PICKER_OPEN_SELECT_DIALOG: "调用 %1 进行选择",
    DATE_PICKER_GET_DATE: "%1 的日期",
    TIME_PICKER_ON_SELECT_DONE: "%1 当 %2 完成选择时 %3 %4 %5 %6 %7",
    TIME_PICKER_OPEN_SELECT_DIALOG: "调用 %1 进行选择",
    TIME_PICKER_GET_TIME: "%1 的时间",
    HTTP_CLIENT_ON_SUCCESS: "%1 当 %2 获得文本时 %3 %4 %5 %6",
    HTTP_CLIENT_ON_SUCCESS_TOOLTIP: "请求成功时触发该事件，返回内容存储在“文本内容”积木中。",
    HTTP_CLIENT_ON_ERROR: "%1 当 %2 出错时 %3 %4 %5 %6",
    HTTP_CLIENT_ON_ERROR_TOOLTIP: "请求失败时触发该事件，错误原因存储在“错误消息”积木中。",
    HTTP_CLIENT_SET_URL: "设置 %1 的网址为 %2",
    HTTP_CLIENT_SET_HEADER: "设置 %1 的请求头为 %2",
    HTTP_CLIENT_SEND_WITH_GET_REQUEST: "调用 %1 发送 GET 请求",
    HTTP_CLIENT_SEND_WITH_GET_REQUEST_TOOLTIP: "如果使用的api接口的调用方式为get，则设置好网址和请求参数后，使用该积木发送get请求。",
    HTTP_CLIENT_SEND_WITH_POST_REQUEST: "调用 %1 发送 POST 请求，文本为 %2",
    HTTP_CLIENT_SEND_WITH_POST_REQUEST_TOOLTIP: "如果使用的api接口的调用方式为post，则设置好网址和请求文本后，使用该积木发送post请求。",
    HTTP_CLIENT_GET_URL: "%1 的网址",
    HTTP_CLIENT_STATUS: "响应代码",
    HTTP_CLIENT_RESPONSE: "文本内容",
    HTTP_CLIENT_ERROR_STATUS: "错误代码",
    HTTP_CLIENT_ERROR_RESPONSE: "错误消息",
    HTTP_CLIENT_SEND_DELETE_REQUEST: "调用 %1 发送 DELETE 请求",
    HTTP_CLIENT_SEND_PUT_REQUEST: "调用 %1 发送 PUT 请求，文本为 %2",
    HTTP_CLIENT_SEND_PATCH_REQUEST: "调用 %1 发送 PATCH 请求，文本为 %2",
    SOUND_MAN: "男声",
    SOUND_WOMAN: "女声",
    SOUND_CHILD: "童声",
    SOUND_VOLUME: "音量",
    SOUND_RATE: "音速",
    AUDIO_PLAY_SOUND: "播放 %1",
    AUDIO_STOP_SOUND: "停止 %1",
    AUDIO_PAUSE_SOUND: "暂停 %1",
    AUDIO_SET_SOUND_FILE: "设置 %1 的音源为 %2",
    AUDIO_SET_VOLUME_OR_RATE: "设置 %1 %2 大小为 %3",
    AUDIO_CHANGE_VOLUME_OR_RATE: "设置 %1 %2 %3 %4",
    TEXT2SPEECH_SPEAK_TEXT: "%1 朗读 %2",
    TEXT2SPEECH_SPEAK_TEXT_AND_WAIT: "%1 朗读 %2 直到结束",
    TEXT2SPEECH_DEFAULT_TEXT: "你好",
    CAMERA_PHOTO: "照片",
    CAMERA_VIDEO: "视频",
    CAMERA_SET_CAMERA_DIRECTION: "设置相机为 %1 摄像头",
    CAMERA_GET_CAMERA_TAKE_PHOTO: "调用相机拍照，当完成时返回 %1 %2",
    CAMERA_GET_CAMERA_TAKE_VIDEO: "调用相机录像，当完成时返回 %1 %2",
    CAMERA_GET_CAMERA_CHOOSE_PHOTO: "打开相册进行选择，当完成时返回 %1 %2",
    TEXT_WIDGET_ON_PRESS: "%1 当 %2 被点击时 %3 %4",
    TEXT_WIDGET_GET_PROPERTY: "%1 的 %2",
    TEXT_WIDGET_GET_CONTENT: "%1 的 文本",
    TEXT_WIDGET_SET_PROPERTY: "设置 %1 的 %2 为 %3",
    TEXT_WIDGET_SET_ALIGN: "设置 %1 的 %2 为",
    TEXT_WIDGET_SET_CONTENT: "设置 %1 的 文本 为 %2",
    TEXT_WIDGET_SET_FONT_SIZE: "设置 %1 的 字号 为 %2",
    TEXT_WIDGET_GET_FONT_SIZE: "%1 的 字号",
    TEXT_WIDGET_HORIZONTAL_ALIGN: "水平对齐",
    TEXT_WIDGET_VERTICAL_ALIGN: "垂直对齐",
    BUTTON_ON_PRESS: "%1 当按钮 %2 被 %3 %4 %5",
    BUTTON_SET_CONTENT: "设置 %1 的文本为 %2",
    BUTTON_SET_COLOR: "设置 %1 的颜色为 %2",
    BUTTON_SET_SIZE_TYPE: "设置 %1 的尺寸大小为 %2",
    BUTTON_SET_MODE: "设置 %1 的样式为 %2",
    BUTTON_GET_COLOR: "%1 的颜色",
    BUTTON_GET_CONTENT: "%1 的文本",
    BUTTON_CONTAINED_TEXT: "底色白字",
    BUTTON_OUTLINED_TEXT: "白底彩字",
    BUTTON_CONTAINED_ICON: "底色图标",
    BUTTON_OUTLINED_ICON: "白底图标",
    BUTTON_DEFAULT_TEXT: "按钮",
    INPUT_ON_FOCUS: "%1 当输入框 %2 获取焦点时 %3 %4",
    INPUT_ON_BLUR: "%1 当输入框 %2 失去焦点时 %3 %4",
    INPUT_ON_CHANGE: "%1 当输入框 %2 的内容改变时 %3 %4",
    INPUT_SET_INPUT_CONTENT: "设置 %1 的 %2 为 %3",
    INPUT_SET_MODE: "设置 %1 的 样式为 %2",
    INPUT_SET_COLOR: "设置 %1 的 颜色 %2",
    INPUT_SET_POSITION: "设置 %1 的 %2 为",
    INPUT_SET_SIZE: "设置 %1 的 尺寸 %2",
    INPUT_GET_COLOR: " %1 的 颜色",
    INPUT_GET_CONTENT: "%1 的 %2",
    INPUT_GET_POSITION: "%1 的 %2",
    INPUT_ASSERT_STATE: "%1 是否 %2",
    INPUT_GET_HAS_ERROR_MESSAGE: "%1 是否 报错",
    INPUT_GET_PROPERTY: "%1 的 %2",
    INPUT_ERROR_TIPS: "%1 %2 报错提示",
    INPUT_OUTLINED_NORMAL: "线框",
    INPUT_CONTAINED_NORMAL: "底色",
    INPUT_CONTAINED_ROUND: "圆角",
    INPUT_OUTLINED_FLAT: "横线",
    INPUT_CONTENT: "输入文案",
    INPUT_PLACEHOLDER: "提示文案",
    INPUT_ERROR_MESSAGE: "报错文案",
    INPUT_REPORT_ERROR: "报错",
    INPUT_DEFAULT_ERROR_MESSAGE: "输入错误",
    INPUT_DEFAULT_VALUE: "输入框内容",
    INPUT_DEFAULT_PLACEHOLDER: "提示语内容",
    LOCAL_STORAGE_GET_ALL_FIELD_KEYS: "%1 的所有键",
    LOCAL_STORAGE_GET_KEY_VALUE_COUNT: "%1 键的总数",
    LOCAL_STORAGE_ASSERT_KEY_IN: "键 %1 存在于 %2",
    LOCAL_STORAGE_SET_VALUE_BY_KEY: "设置 %1 键 %2 的值为 %3",
    LOCAL_STORAGE_SET_VALUE_BY_KEY_TOOLTIP: "如果数据库中存在该键，则修改键的值。\n如果不存在，则新增一个键值对。",
    LOCAL_STORAGE_GET_VALUE_BY_KEY: "%1 键 %2 的值",
    LOCAL_STORAGE_CLEAR_ALL_DATA: "清空 %1",
    LOCAL_STORAGE_DELETE_ITEM: "删除 %1 的键 %2",
    NEW_LOCAL_STORAGE_GET_ALL_FIELD_KEYS: "%1%2 的所有键",
    CLOUD_STORAGE_ON_ERROR: "%1 当 %2 出错时 %3 %4 %5 %6",
    CLOUD_STORAGE_ON_ERROR_TOOLTIP: "当新增、修改、删除、获取数据库的键值对出现错误时，触发该事件，错误原因存储在“错误消息”积木中。",
    CLOUD_STORAGE_SET_VALUE_BY_KEY: "%1 设置 %2 %3 的值为 %4, 失败时返回 %5",
    CLOUD_STORAGE_SET_VALUE_BY_KEY_TOOLTIP: "如果云数据库中存在该键，则修改键的值。\n如果不存在，则新增一个键值对。",
    CLOUD_STORAGE_GET_ALL_FIELD_KEYS: "%1 %2  的所有键, 失败时返回 %3",
    CLOUD_STORAGE_GET_KEY_VALUE_COUNT: "%1 %2 的键值对个数, 失败时返回 %3",
    CLOUD_STORAGE_ASSERT_KEY_IN: "%1 键 %2 是否存在于 %3, 失败时返回 %4",
    CLOUD_STORAGE_GET_VALUE_BY_KEY: "%1 %2 中键为 %3 的值, 失败时返回 %4",
    CLOUD_STORAGE_CLEAR_ALL_DATA: "%1 清空 %2 所有键值对, 失败时返回 %3",
    CLOUD_STORAGE_DELETE_ITEM: "%1 删除 %2 的 %3 和值, 失败时返回 %4",
    CLOUD_STORAGE_CANNOT_REMOVED_ITEM: "无法删除键和值",
    CLOUD_STORAGE_CANNOT_SET_ITEM: "无法设置该值",
    CLOUD_STORAGE_CANNOT_CLEAR: "无法清空所有键值对",
    CLOUD_STORAGE_CANNOT_GET_ITEM: "无法获取值",
    CLOUD_STORAGE_CANNOT_GET_ITEM_COUNT: "无法获取键值对个数",
    CLOUD_STORAGE_CANNOT_GET_ALL_ITEM: "无法获取所有键",
    CLOUD_STORAGE_CANNOT_ASSERT_KEY: "无法判断键是否存在",
    CLOUD_STORAGE_PARAM_ERROR_TYPE: "错误类型",
    CLOUD_STORAGE_PARAM_ERROR_MESSAGE: "错误信息",
    IMAGE_ON_PRESS: "%1当 %2 被点击时 %3 %4",
    IMAGE_SET_PROPERTY: "设置 %1 的 %2 为 %3",
    IMAGE_GET_PROPERTY: "%1 的 %2",
    IMAGE_GET_FILE_ID: "%1 的 图片",
    IMAGE_SET_FIELD_ID: "设置 %1 图片为 %2",
    IMAGE_GET_FILE_ID_TOOLTIP: "返回图片名称或链接。",
    IMAGE_SET_FIELD_ID_TOOLTIP: "设置图片显示的图片，可以嵌入项目内图片资源的名称或网络图片的链接。",
    CANVAS_CLEAR_ALL_BRUSH: "清除 %1 的 笔迹",
    CANVAS_TO_DATA_URL: "保存 %1 为图片",
    CANVAS_SET_VISIBLE: "%2 %1",
    CANVAS_SET_PROPERTY: "设置 %1 的 %2 为 %3",
    CANVAS_SET_BACKGROUND_COLOR: "设置 %1 的 背景颜色 为 %2",
    CANVAS_SET_BACKGROUND_IMAGE: "设置 %1 的 背景图片 为 %2",
    CANVAS_GET_PROPERTY: "%1 的 %2",
    CANVAS_GET_BACKGROUND_COLOR: "%1 的 背景颜色",
    CANVAS_GET_BACKGROUND_IMAGE: "%1 的 背景图片",
    CANVAS_ON_CANVAS_PRESS_MSG0: "%1 当 %2 被 %3 时 %4 %5",
    CANVAS_ON_CANVAS_PRESS_MSG1: "%1",
    CANVAS_ON_CANVAS_SWIPE: "%1 当 %2 被 划过时",
    CANVAS_CHECK_IF_PRESSED: "%1 被 按住",
    PARAM_POSITION_X: "X坐标",
    PARAM_POSITION_Y: "Y坐标",
    BRUSH: "画笔",
    BRUSH_SET_PEN_UP: "%1 抬笔",
    BRUSH_SET_PEN_DOWN: "%1 落笔",
    PEN_UP: "抬笔",
    PEN_DOWN: "落笔",
    BRUSH_SET_PEN_UP_OR_DOWN: "%1 %2",
    BRUSH_DRAW_POINT: "%1 画点：x %2 y %3",
    BRUSH_DRAW_LINE: "%1 画线：x1 %2 y1 %3 x2 %4 y2 %5",
    BRUSH_DRAW_CIRCLE: "%1 画圆：半径 %2",
    BRUSH_DRAW_ARC: "%1 画弧：半径 %2 角度 %3",
    BRUSH_DRAW_POLYGON: "%1 画 %2 边形：边长 %3",
    BRUSH_SET_COLOR: "设置 %1 的 颜色 为 %2",
    BRUSH_SET_FILL_COLOR: "设置 %1 的 填充色 为 %2",
    BRUSH_SET_FILL_PATH: "设置 当前 为 %1 填充 %2",
    POINT_START: "起点",
    POINT_END: "终点",
    BRUSH_SET_PROPERTY: "设置 %1 的 %2 为 %3",
    BRUSH_SET_PEN_SIZE: "设置 %1 的 粗细 为 %2",
    BRUSH_CHANGE_PEN_SIZE: "将 %1 的 粗细 %2 %3",
    BRUSH_CHANGE_PROPERTY: "将 %1 的 %2 %3 %4",
    BRUSH_GET_PROPERTY: "%1 的 %2",
    BRUSH_GET_DRAW_PROCESS: "%1 是否开启 绘画过程",
    BRUSH_GET_COLOR: "%1 的 颜色",
    BRUSH_GET_PEN_SIZE: "%1 的 粗细",
    BRUSH_MOVE_FORWARD: "%1 移动 %2 步",
    BRUSH_MOVE_FORWARD_OR_BACKWARD: "%1 %2 移动 %3 像素",
    FORWARD: "向前",
    BACKWARD: "向后",
    BRUSH_ROTATE: "%1 旋转 %2 度",
    ROTATE_LEFT: "向左",
    ROTATE_RIGHT: "向右",
    BRUSH_ROTATE_LEFT_OR_RIGHT: "%1 %2 旋转 %3 度",
    BRUSH_SET_ROTATION: "设置 %1 的 方向 为 %2 度",
    BRUSH_GET_ROTATION: "%1 的 方向",
    BRUSH_FACE_TO: "%1 面向 %2",
    BRUSH_MOVE_TO_POSITION: "%1 移动到 x %2 y %3",
    BRUSH_MOVE_TO: "%1 移动到 %2",
    BRUSH_CHANGE_POSITION: "将 %1 的 %2 %3 %4",
    BRUSH_CHANGE_POSITION_IN_TIME: "在 %2 秒内，%1 移动到 x %3 y %4",
    BRUSH_CHANGE_POSITION_TYPE_IN_TIME: "在 %2 秒内，将 %1 的 %3 %4 %5",
    BRUSH_CHANGE_Z_INDEX: "将 %1 移至 %2",
    INDEX_UP: "上一层",
    INDEX_DOWN: "下一层",
    INDEX_TOP: "最上层",
    INDEX_BOTTOM: "最底层",
    ACTOR: "角色",
    TOUCH_POINT: "触碰点",
    BOUNDARY: "边缘",
    BOUNDARY_TOP: "上边缘",
    BOUNDARY_RIGHT: "右边缘",
    BOUNDARY_BOTTOM: "下边缘",
    BOUNDARY_LEFT: "左边缘",
    BOUNDARY_ANY: "画布边缘",
    SCALE_A: "比例大小",
    SCALE_X: "宽度比例",
    SCALE_Y: "高度比例",
    RANDOM: "随机",
    SCALE: "大小",
    DEGREE: "角度",
    FADE_IN: "逐渐显示",
    FADE_OUT: "逐渐隐藏",
    PLAY_CIRCULARLY: "循环",
    PLAY_INFINITELY: "无限循环",
    PLAY_TIME: "次",
    ACTOR_STOP_ACTION: "停止 %1 的 动作播放",
    ACTOR_PLAY_ACTION: "播放 %1 的 %2 间隔 %3 毫秒，%4",
    ACTOR_PLAY_ACTION_AND_WAIT: "播放 %1 的 %2 间隔 %3 毫秒，循环 %4 次， 直到结束",
    ACTOR_PLAY_COUNT: "%1",
    ACTOR_ON_ACTOR_BUMP_MSG0: "%1 当 %2 碰到 %3 时",
    ACTOR_ON_ACTOR_BUMP_MSG1: "%1",
    ACTOR_ON_ACTOR_LEAVE_MSG0: "%1 当 %2 离开 %3 时",
    ACTOR_ON_ACTOR_LEAVE_MSG1: "%1",
    ACTOR_ON_ACTOR_PRESS_MSG0: "%1 当 %2 被 %3 时 %4 %5",
    ACTOR_ON_ACTOR_PRESS_MSG1: "%1",
    ACTOR_ROTATE: "%1 旋转 %2 度",
    ACTOR_MOVE_FORWARD: "%1 移动 %2 像素",
    ACTOR_SET_PROPERTY: "设置 %1 的 %2 为 %3",
    ACTOR_SET_ROTATION: "设置 %1 的 方向 为 %2 度",
    ACTOR_FACE_TO: "%1 面向 %2",
    ACTOR_ROTATE_AROUND: "%1 绕 %2 旋转 %3 度",
    ACTOR_MOVE_TO_POSITION: "%1 移动到 x %2 y %3",
    ACTOR_MOVE_TO: "%1 移动到 %2",
    ACTOR_CHANGE_POSITION: "将 %1 的 %2 %3 %4",
    ACTOR_CHANGE_POSITION_TYPE_IN_TIME: "在 %2 秒内，将 %1 的 %3 %4 %5",
    ACTOR_CHANGE_POSITION_IN_TIME: "在 %2 秒内，%1 移动到 x %3 y %4",
    ACTOR_SET_VISIBLE: "%2 %1",
    ACTOR_SHOW_HIDE_IN_TIME: "在 %2 秒内，%3 %1",
    ACTOR_CHANGE_OPACITY: "将 %1 的 不透明度 %2 %3",
    ACTOR_SET_SCALE: "设置 %1 的 大小 为 %2",
    ACTOR_CHANGE_SCALE: "将 %1 的 大小 %2 %3",
    ACTOR_SET_SCALE_WITH_SECTION: "设置 %1 的 %2 为 %3",
    ACTOR_CHANGE_SCALE_WITH_SECTION: "将 %1 的 %2 %3 %4",
    ACTOR_GET_SCALE_WITH_SECTION: "%1 的 %2",
    ACTOR_SET_FLIPPED: "%1 %2",
    ACTOR_CHECK_IF_FLIPPED: "%1 是否 %2",
    ACTOR_GET_PROPERTY: "%1 的 %2",
    ACTOR_MOVE_Z_INDEX: "%1 移至 %2",
    ACTOR_PREVIOUS_NEXT_STYLE: "切换 %1 的 %2 造型",
    ACTOR_SET_CURRENT_STYLE: "设置 %1 的 造型 为 %2 %3",
    ACTOR_SET_CURRENT_ACTION_TOOLTIP: "嵌入为“字符串”类型：按“动作名称”检索。",
    ACTOR_SET_CURRENT_STYLE_TOOLTIP: "嵌入为“数字”类型：按“造型编号”检索。",
    ACTOR_TALK: "对话",
    ACTOR_THINK: "思考",
    ACTOR_SHOW_DIALOG: "%1 %2 %3",
    ACTOR_SHOW_DIALOG_IN_TIME: "%1 %2 %3 持续 %4 秒",
    ACTOR_STYLE: "造型编号",
    ACTOR_GET_STYLE_INDEX: "%1 的 造型编号",
    ACTOR_GET_ACTION_NAME: "%1 的 动作名称",
    ACTOR_GET_ROTATION: "%1 的 方向",
    ACTOR_NEXT_ONE: "下一个",
    ACTOR_PREVIOUS_ONE: "上一个",
    ACTOR_CHECK_IF_PRESSED: "%1 被 按住",
    ACTOR_CHECK_IF_BUMPED: "%1 碰到 %2",
    ACTOR_CHECK_IF_LEFT: "%1 离开 %2",
    RADIO_ON_SELECTED: "%1 当 %2 被选中时%3 %4 %5 %6",
    RADIO_ON_SELECTED_TOOLTIP: "选中项：被选中选项的序号，数字类型\n选中内容：被选中选项的文本内容，字符串类型",
    RADIO_SET_HEADLINE: "设置 %1 的题干内容为 %2",
    RADIO_SET_OPTION_COUNT: "设置 %1 的选项数量为 %2",
    RADIO_SET_OPTION_CONTENT: "设置 %1 第 %2 项的内容为 %3",
    RADIO_SET_OPTION_SELECTED_OR_DISABLED: "%1 %2 第 %3 项",
    RADIO_CLEAR_SELECTED: "清空 %1 所有选项状态",
    RADIO_CLEAR_SELECTED_TOOLTIP: "取消选中当前选中项。",
    RADIO_SET_OPTION_FEEDBACK: "设置 %1 第 %2 项的反馈为 %3",
    RADIO_SET_OPTION_FEEDBACK_TOOLTIP: "如果某一项为正确选项，则设置反馈为正确，当前选项会变为绿色，出现√。\n如果某一项为错误选项，则设置反馈为错误，当前选项会变为红色，出现×。",
    RADIO_CLEAR_FEEDBACK: "清空 %1 所有选项的反馈",
    RADIO_CLEAR_FEEDBACK_TOOLTIP: "清除所有选项正确和错误的样式反馈。",
    RADIO_DELETE_OPTION: "删除 %1 第 %2 项",
    RADIO_PUSH_OPTION: "添加选项 %1 到 %2 的末尾",
    RADIO_SET_WIDGET_POSITION: "设置 %1 的 %2 为 %3",
    RADIO_GET_SELECTED_OPTION_INDEX: "%1 的选中项",
    RADIO_GET_SELECTED_OPTION_INDEX_TOOLTIP: "返回被选中选项的序号",
    RADIO_GET_SELECTED_OPTION_CONTENT: "%1的选中项内容",
    RADIO_GET_SELECTED_OPTION_CONTENT_TOOLTIP: "返回被选中选项的文本内容",
    RADIO_GET_OPTION_CONTENT_BY_INDEX: "%1 第 %2 项的内容",
    RADIO_GET_HEADLINE: "%1 的题干内容 ",
    RADIO_GET_PROPERTY: "%1 的 %2",
    RADIO_PARAM_SELECTED_INDEX: "选中项",
    RADIO_PARAM_SELECTED_CONTENT: "选中项内容",
    SELECTED: "选中",
    OPTION_COUNT: "项数",
    CORRECT: "正确",
    INCORRECT: "错误",
    UNSELECTED: "取消选中",
    CHECKBOX_ON_SELECTED: "%1 当 %2 被 %3 时 %4 %5 %6 %7",
    CHECKBOX_ON_SELECTED_TOOLTIP: "选中项列表：被选中所有选项的序号，列表类型\n选中内容列表：被选中所有选项的文本内容，列表类型",
    CHECKBOX_ON_CHANGE: "%1 当 %2 选项状态发生改变时 %3 %4 %5 %6",
    CHECKBOX_ON_CHANGE_TOOLTIP: "某一项被选中或取消选中时都会触发该事件。\n改变项：被选中或被取消的选项序号\n改变结果：值为真(true)时表示该项被选中，值为假(false)时表示该项被取消选中",
    CHECKBOX_SET_HEADLINE: "设置 %1 的题干内容为 %2",
    CHECKBOX_SET_OPTION_COUNT: "设置 %1 的选项数量为 %2",
    CHECKBOX_SET_OPTION_CONTENT: "设置 %1 第 %2 项内容为 %3",
    CHECKBOX_SET_OPTION_STATE: "%1 %2 第 %3 项",
    CHECKBOX_CLEAR_SELECTED: "清空 %1 所有选项状态",
    CHECKBOX_CLEAR_SELECTED_TOOLTIP: "取消多选框所有选项的选中状态。",
    CHECKBOX_SET_OPTION_FEEDBACK: "设置 %1 第 %2 项的反馈为 %3",
    CHECKBOX_SET_OPTION_FEEDBACK_TOOLTIP: "如果某一项为正确选项，则设置反馈为正确，当前选项会变为绿色，出现√。\n如果某一项为错误选项，则设置反馈为错误，当前选项会变为红色，出现×。",
    CHECKBOX_CLEAR_FEEDBACK: "清空 %1 所有选项的反馈",
    CHECKBOX_CLEAR_FEEDBACK_TOOLTIP: "清除所有选项正确和错误的样式反馈。",
    CHECKBOX_DELETE_OPTION: "删除 %1 第 %2 项",
    CHECKBOX_PUSH_OPTION: "添加选项 %1 到 %2 的末尾",
    CHECKBOX_SET_WIDGET_POSITION: "设置 %1 的 %2 为 %3",
    CHECKBOX_GET_SELECTED_OPTION_INDEX: "%1 的选中项列表",
    CHECKBOX_GET_SELECTED_OPTION_INDEX_TOOLTIP: "返回被选中所有选项的序号，列表类型",
    CHECKBOX_GET_SELECTED_OPTION_CONTENT: "%1 的选中内容列表",
    CHECKBOX_GET_SELECTED_OPTION_CONTENT_TOOLTIP: "返回被选中所有选项的文本内容，列表类型",
    CHECKBOX_GET_OPTION_CONTENT_BY_INDEX: "%1 第 %2 项的内容",
    CHECKBOX_GET_HEADLINE: "%1 的题干内容 ",
    CHECKBOX_GET_PROPERTY: "%1 的 %2",
    CHECKBOX_PARAM_SELECTED_INDEX_LIST: "选中项列表",
    CHECKBOX_PARAM_SELECTED_CONTENT_LIST: "选中内容列表",
    CHECKBOX_PARAM_SELECTED_INDEX: "改变项",
    CHECKBOX_PARAM_SELECTED_RESULT: "改变结果",
    WEBVIEW_ON_START_LOAD: "%1 当 %2 开始加载时 %3 %4",
    WEBVIEW_ON_LOADED: "%1 当 %2 加载完成时 %3 %4",
    WEBVIEW_ON_LOAD_ERROR: "%1 当 %2 加载失败时 %3 %4",
    WEBVIEW_SET_URL: "设置 %1 的网址为 %2",
    WEBVIEW_REFRESH: "重新加载 %1",
    WEBVIEW_GET_URL: "%1 的网址",
    WEBVIEW_GET_PROPERTY: "%1 的 %2",
    SWITCH_ON_STATE_CHANGE: "%1 当 %2 状态发生改变时 %3 %4 %5",
    SWITCH_SET_STATE: "设置 %1 的状态为 %2",
    SWITCH_SET_POSITION: "设置 %1 的 %2 为 %3",
    SWITCH_GET_STATE: "%1 的状态",
    SWITCH_GET_POSITION: "%1 的 %2",
    SWITCH_PARAM_STATE: "状态",
    SLIDER_ON_CHANGE: "%1 当 %2 滑块位置改变时 %3 %4 %5",
    SLIDER_ON_SLIDE_START_AND_END: "%1 当 %2 %3 时 %4 %5 %6",
    SLIDER_SET_VALUE: "设置 %1 的 %2 为 %3",
    SLIDER_SET_SLIDE_VALUE: "设置 %1 的 滑块位置 为 %2",
    SLIDER_SET_PROPERTY: "设置 %1 的 %2 为 %3",
    SLIDER_GET_VALUE: "%1 的 滑块位置",
    SLIDER_GET_SLIDE_VALUE: "%1 的 滑块位置",
    SLIDER_GET_PROPERTY: "%1 的 %2",
    SLIDER_START_TO_SLIDE: "开始滑动",
    SLIDER_END_TO_SLIDE: "结束滑动",
    SLIDER_MAX_VALUE: "最大值",
    SLIDER_MIN_VALUE: "最小值",
    SLIDER_VALUE: "滑块位置",
    SLIDER_PARAM_VALUE: "滑块位置",
    ROOM_CREATE_ROOM: "创建房间 %1 房间人数 %2 %3 %4",
    ROOM_FAILED_TEXT: "失败则执行",
    ROOM_SUCCESS_TEXT: "成功则执行",
    ROOM_DEFAULT_ROOM_NAME: "房间名",
    ROOM_USERS: "房间人数",
    ROOM_LIST: "房间名称列表",
    ROOM_DEFAULT_CREATE_ERROR: "失败原因",
    ROOM_DEFAULT_NICKNAME: "昵称",
    ROOM_CREATE_NICKNAME: "设置我在房间的昵称 %1 %2 %3",
    ROOM_GET_ROOM_LIST: "获取房间列表 %1 %2 %3",
    ROOM_ENTER_ROOM: "进入房间 %1 %2 %3",
    ROOM_SEND_MESSAGE: "发送房间信息 %1",
    ROOM_RECEIVE_MESSAGE: "%1 当收到房间消息  %2 %3 %4",
    ROOM_ENTER: "进入房间",
    ROOM_EXIT: "退出房间",
    ROOM_RECEIVE_ROOM_INFO: "%1 当收到房间通知  %2 %3 %4 %5",
    ROOM_EXIT_ROOM: "退出房间",
    ROOM_NETWORK_ERROR: "%1 当发生错误%2 %3 %4",
    ROOM_GET_ONLINE_USERS: "房间人员列表",
    ROOM_NAME: "房间名",
    ROOM_USER_NAME: "用户名",
    ROOM_MESSAGE: "消息",
    ROOM_ERROR_INFO: "错误信息",
    ROOM_CURRENT_ROOM_NAME: "当前进入的房间名",
    ROOM_CURRENT_ROOM_USERS: "当前进入的房间人员列表",
    LIST_VIEWER_ON_PRESS: "%1 当 %2 被点击时 %3 %4 %5",
    LIST_VIEWER_SET_PROPERTY: "设置 %1 的 %2 为 %3",
    LIST_VIEWER_SET_DATA_SOURCE: "设置 %1 的数据源为 %2",
    LIST_VIEWER_GET_PROPERTY: "%1 的 %2",
    LIST_VIEWER_GET_DATA_SOURCE: "%1 的数据源",
    LIST_VIEWER_CHILD_WIDGET_ON_PRESS: "%1 当 %2 的 %3 被点击时 %4 %5 %6",
    LIST_VIEWER_CHILD_WIDGET_BIND_COLUMN: "将 %1 的 %2 绑定 %3",
    LIST_VIEWER_CHILD_WIDGET_SET_ATTRIBUTES: "设置 %1 第 %2 行 %3 的 %4 为 %5",
    LIST_VIEWER_CHILD_WIDGET_SET_FONT_SIZE: "设置 %1 第 %2 行 %3 的字号为 %4",
    LIST_VIEWER_CHILD_WIDGET_GET_ATTRIBUTES: "%1 第 %2 行 %3 的 %4",
    LIST_VIEWER_CHILD_WIDGET_GET_FONT_SIZE: "%1 第 %2 行 %3 的字号",
    LIST_VIEWER_ROW_INDEX: "行数",
    WIDGET_OF: "的",
    WIDGET_GET_MSG: "%1 %2",
    WIDGET_SET: "设置",
    WIDGET_SET_MSG: "%1 %2",
    WIDGET_SET_TO: "为",
    WIDGET_EVENT_MSG: "%1 当 %2 %3",
    WIDGET_EVENT_SUFFIX: "时",
    WIDGET_EVENT_PARAM_MSG: "%1",
    WIDGET_METHOD_MSG: "%1",
    WIDGET_METHOD_CALL_MSG: "调用",
    WIDGET_COLOR_MSG: "%1",
    WIDGET_BOOLEAN_MSG: "%1",
    WIDGET_BOOLEAN_TRUE: "是",
    WIDGET_BOOLEAN_FALSE: "否",
    WIDGET_OPACITY: "不透明度",
    WIDGET_VISIBLE: "是否 显示",
    WIDGET_DISABLED: "是否 启用",
    CLOUD_DB_QUERY_BY_COLUMN_RESULT: "查询结果",
    CLOUD_DB_QUERY_BY_COUNT_RESULT: "查询结果",
    CLOUD_DB_ERROR_NAME: "错误数据库名称",
    CLOUD_DB_ERROR_INFO: "错误信息",
    CLOUD_DB_ERROR: "%1 当 云数据库出错时 %2 %3 %4 %5",
    CLOUD_DB_INSERT: "新增行 %1 到 %2 %3 %4 %5",
    CLOUD_DB_DELETE: "删除 %1 中满足条件 %2 %3 %4 的行 %5 %6 %7",
    CLOUD_DB_UPDATE: "更新 %1 中满足条件 %2 %3 %4 的行 %5 为 %6 %7 %8",
    CLOUD_DB_QUERY_BY_COLUMN: "查询 %1 中满足条件 %2 %3 %4 的数据 %5 %6 %7",
    CLOUD_DB_ASC: "升序",
    CLOUD_DB_DESC: "降序",
    CLOUD_DB_QUERY_BY_COUNT: "查询 %1 的 %2 %3 %4 %5",
    CLOUD_DB_ROW: "行数",
    CLOUD_DB_COLUMN: "列数",
    CLOUD_DB_FAIL_RESULT: "失败原因",
    TABLE_DATA_ON_CHANGE: "%1 当 %2 数据发生变动时 %3 %4 ",
    TABLE_DATA_ON_ERROR: "%1 当 数据表出错时 %2 %3 %4 %5",
    TABLE_DATA_PARAM_ERROR_WIDGET_TITLE: "错误数据表名称",
    TABLE_DATA_PARAM_ERROR_MESSAGE: "错误信息",
    TABLE_DATA_SET_VALUE_BY_ROW_AND_COLUMN: "替换 %1 列:%2 行:%3 的值为 %4",
    TABLE_DATA_INSERT_ROW_DATA: "插入行 %1",
    TABLE_DATA_DELETE_ROW_DATA: "删除 %1 %2",
    TABLE_DATA_CLEAR_DATA: "清空 %1",
    TABLE_DATA_GET_VALUE_BY_ROW_AND_COLUMN: "%1 列:%2 行:%3 的值",
    TABLE_DATA_GET_ROW_LENGTH: "%1 的总行数",
    TABLE_DATA_GET_COLUMN_DATA: "%1 %2 的 %3",
    TABLE_DATA_GET_ROW_DATA: "%1 %2 的 %3",
    LAST_ROW: "最后一行",
    ALL_ROW: "所有行",
    ROW: "行",
    COLUMN: "列",
    EVENT_ADD: "新增",
    EVENT_SETTER: "设置",
    EVENT_DELETE: "删除",
    EVENT_QUERY: "查询",
    EVENT_CLEAR: "清空",
    ERROR_INFO: "错误信息",
    QUERY_RESULT: "查询结果",
    FAIL_RESULT: "失败原因",
    ALL_KEYS_RESULT: "%1 查询结果",
    CLOUD_SPACE_DICT_ON_ERROR: "%1 当 %2 %3 出错时 %4 %5 %6",
    CLOUD_SPACE_DICT_ON_ERROR_TOOLTIP: "捕获云字典积木执行时的错误信息。",
    CLOUD_SPACE_DICT_SET_KEY_VALUE: "设置 %1 键 %2 的值为 %3 %4 %5 %6",
    CLOUD_SPACE_DICT_SET_KEY_VALUE_TOOLTIP: "输入已有键名则修改其值，输入新的键名则直接新建一个键值对。",
    CLOUD_SPACE_DICT_DELETE_KEY: "删除 %1 的键 %2 %3 %4 %5",
    CLOUD_SPACE_DICT_DELETE_KEY_TOOLTIP: "删除云字典中某个键值对，不可撤销。",
    CLOUD_SPACE_DICT_GET_VALUE_BY_KEY: "查询 %1 中 键为 %2 的值 %3 %4 %5",
    CLOUD_SPACE_DICT_GET_VALUE_BY_KEY_TOOLTIP: "查询云字典某个键的值。",
    CLOUD_SPACE_DICT_GET_KEY_COUNT: "查询 %1 键的总数 %2 %3 %4",
    CLOUD_SPACE_DICT_GET_KEY_COUNT_TOOLTIP: "查询云字典键值对个数。",
    CLOUD_SPACE_DICT_GET_ALL_KEYS: "查询 %1 所有键名 %2 %3 %4",
    CLOUD_SPACE_DICT_GET_ALL_KEYS_TOOLTIP: "查询云字典所有键名，返回列表结构。",
    CLOUD_SPACE_DICT_CLEAR_DATA: "清空 %1 %2 %3 %4",
    CLOUD_SPACE_DICT_CLEAR_DATA_TOOLTIP: "清空云字典所有数据，不可撤销。",
    CLOUD_TABLE_EVENT_ADD: "新增",
    CLOUD_TABLE_EVENT_SETTER: "替换",
    CLOUD_TABLE_EVENT_DELETE: "删除",
    CLOUD_TABLE_EVENT_QUERY: "查询",
    CLOUD_TABLE_EVENT_CLEAR: "清空",
    CLOUT_TABLE_FAILED_TEXT: "失败则执行",
    CLOUD_TABLE_QUERY_BY_COLUMN_LIST_RESULT: "%1查询结果",
    CLOUD_TABLE_QUERY_BY_COLUMN_LINE_NUMBER_RESULT: "%1行号列表",
    CLOUD_TABLE_QUERY_BY_COLUMN_RESULT: "查询结果",
    CLOUD_TABLE_QUERY_BY_COUNT_RESULT: "查询结果",
    CLOUD_TABLE_ERROR_NAME: "错误云数据表名称",
    CLOUD_TABLE_ERROR_INFO: "错误信息",
    CLOUD_TABLE_ERROR: "%1 当 %2 %3出错时 %4 %5 %6",
    CLOUD_TABLE_ERROR_TOOLTIP: "捕获云数据表积木执行时的错误信息。",
    CLOUD_TABLE_INSERT: "新增行 %1 到 %2 %3 %4 %5",
    CLOUD_TABLE_INSERT_TOOLTIP: "在云数据表最后一行新增数据：支持嵌入字符或列表数据，均以逗号为分列标识。",
    CLOUD_TABLE_DELETE: "删除 %1 中 %2 %3 %4 的行 %5 %6 %7",
    CLOUD_TABLE_DELETE_TOOLTIP: "删除云数据表中满足条件的行，不可撤销。",
    CLOUD_TABLE_UPDATE: "更新 %1 中 %2 %3 %4 的行： %5 为 %6 %7 %8",
    CLOUD_TABLE_UPDATE_TOOLTIP: "更新云数据表中满足条件的行，不可撤销。",
    CLOUD_TABLE_QUERY_BY_COLUMN: "查询 %1 中 %2 %3 %4 的数据 %5 %6 %7",
    CLOUD_TABLE_QUERY_BY_COLUMN_TOOLTIP: "查询云数据表满足条件的数据：返回列表结构，若有多个数据则返回二维列表。",
    CLOUD_TABLE_ASC: "升序",
    CLOUD_TABLE_DESC: "降序",
    CLOUD_TABLE_QUERY_BY_COUNT: "查询 %1 的 %2 %3 %4 %5",
    CLOUD_TABLE_QUERY_BY_COUNT_TOOLTIP: "查询云数据表的行数或列数。",
    CLOUD_TABLE_ROW: "行数",
    CLOUD_TABLE_COLUMN: "列数",
    CLOUD_TABLE_FAIL_RESULT: "失败原因",
    CLOUD_TABLE_CLEAR_ALL: "清空 %1 %2 %3 %4",
    CLOUD_TABLE_CLEAR_ALL_TOOLTIP: "清空云数据表所有数据，不可撤销。"
  }
}

export { setBlockGroupProfile as _e }
export { ve }
export { MESSAGES as be }
