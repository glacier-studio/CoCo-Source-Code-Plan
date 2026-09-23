/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：301__part-6
 */

import { getCustomWidgetBlockParamShadow, he } from "./utils"
import * as /* [auto-meaningful-name] */Module_85 from /* 85 */"../../../../../../unrestored/shared/1571/2636/34/85"
import * as /* [auto-meaningful-name] */Module_118 from /* 118 */"../../../../../../unrestored/shared/1571/2636/118/index"
import * as LoadCustomWidget from "../../../../../shared/widget/custom/load"
import { getBlockResources } from "../.."
import * as /* [auto-meaningful-name] */Module_4 from /* 4 */"../../../../../../unrestored/shared/1571/2636/4"
import { Blink, I } from "../../../../../shared/packages/@crc/blink/src/index"
import type { Blink as Blink_0 } from "../../../../../shared/packages/@crc/blink/src/index"
import { FieldImage } from "../../../../../shared/packages/@crc/blink/src/core/workspace_element/block/input/field/field_image"
import { FieldLabel } from "../../../../../shared/packages/@crc/blink/src/core/workspace_element/block/input/field/field_label"
import type { BlockProfileManager } from "../../manager/profile"

export function setBlockGroupProfile(__manager: BlockProfileManager, Blink: typeof Blink_0) {
  {
    const mutator = {
      event: "event",
      widgetType: "",
      updateShape_() {
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
          const WidgetIDField = new Module_118.a({
            type: "field_coco_dropdown",
            name: "WIDGET_ID",
            custom: true,
            options: () => getBlockResources().getWidgetListByType(this.widgetType)
          })
          this.get_input("WIDGET_ID_CONTAINER")?.append_field(WidgetIDField, "WIDGET_ID")
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
            const processedKey = `PARAM_${key}`
            const subTypesDropdown = new Module_118.a({
              type: "field_coco_dropdown",
              name: processedKey,
              custom: true,
              options: he(this.widgetType, dropdown)
            })
            this.append_dummy_input("", "DO").append_field(subTypesDropdown, processedKey)
          })
        } else {
          this.set_field_value(processedLabel + Blink.Msg.WIDGET_EVENT_SUFFIX, "EVENT")
        }
        params.forEach(({ key, label, dropdown }) => {
          const processedKey = `PARAM_${key}`
          const processedLabel = Module_85.a(this.widgetType, label)
          if (dropdown) {
            const dropdownField = new Module_118.a({
              type: "field_coco_dropdown",
              name: processedKey,
              custom: true,
              options: he(this.widgetType, dropdown)
            })
            const field = this.append_dummy_input("", "DO")
            if (processedLabel) {
              field.append_field(processedLabel, `${processedKey}_LABEL`)
            }
            field.append_field(dropdownField, processedKey)
          } else {
            this.append_shadow_input(
              processedKey,
              `<shadow type="widget_event_param">
                <field name="PARAM_NAME">${processedLabel}</field>
                <mutation widget_type="${this.widgetType}" event="${this.event}" param="${key}"></mutation>
              </shadow>`,
              "DO"
            )
          }
        })
        if (this.isAnyWidget) {
          const ANY_WIDGET_KEY = LoadCustomWidget.ANY_WIDGET_KEY
          const processedKey = `PARAM_${ANY_WIDGET_KEY}`
          const ANY_WIDGET_LABEL = LoadCustomWidget.ANY_WIDGET_LABEL
          this.append_shadow_input(
            processedKey,
            `<shadow type="widget_event_param">
              <field name="PARAM_NAME">${ANY_WIDGET_LABEL}</field>
              <mutation widget_type="${this.widgetType}" event="${this.event}" param="${ANY_WIDGET_KEY}"></mutation>
            </shadow>`,
            "DO"
          )
        }
      },
      domToMutation(element) {
        this.event = element.getAttribute("event") || this.event
        this.widgetType = element.getAttribute("widget_type") || this.widgetType
        this.isAnyWidget = element.getAttribute("is_any_widget") === "true"
        this.updateShape_()
      },
      mutationToDom() {
        const mutationElement = document.createElement("mutation")
        mutationElement.setAttribute("event", this.event)
        mutationElement.setAttribute("widget_type", this.widgetType)
        mutationElement.setAttribute("is_any_widget", String(this.isAnyWidget))
        return mutationElement
      }
    }
    const paramMutator = {
      param: "",
      event: "",
      widgetType: "",
      domToMutation(element) {
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
            const paramTypes = types.params.find((param) => param.key === this.param)
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
        const mutationElement = document.createElement("mutation")
        mutationElement.setAttribute("param", this.param)
        mutationElement.setAttribute("event", this.event)
        mutationElement.setAttribute("widget_type", this.widgetType)
        return mutationElement
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
          const widgetIDField = new Module_118.a({
            type: "field_coco_dropdown",
            name: "WIDGET_ID",
            custom: true,
            options: () => getBlockResources().getWidgetListByType(this.widgetType)
          })
          this.get_input("WIDGET_ID_CONTAINER")?.append_field(widgetIDField, "WIDGET_ID")
        }
        let keys
        if (typeof blockOptions.getter === "object" && (keys = blockOptions.getter.keys)?.length) {
          const options: [string, string][] = []
          keys.forEach((key) => {
            const types = LoadCustomWidget.getPropertyTypes(this.widgetType, key)
            if (types) {
              const processedLabel = Module_85.a(this.widgetType, types.label)
              options.push([processedLabel, key])
            } else {
              console.error("WIDGET_GET_MUTATOR getWidgetProperty error", this.widgetType, key)
            }
          })
          this.append_dummy_input().append_field(new Module_118.a({
            type: "field_coco_dropdown",
            name: "PROPERTY_KEY",
            custom: true,
            options: () => options
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
              options: () => [[Blink.Msg.POSITION_X, "positionX"], [Blink.Msg.POSITION_Y, "positionY"]]
            }), "POSITION_TYPE")
            break
          case "__opacity":
            this.set_field_value(`${Blink.Msg.WIDGET_OF} ${Blink.Msg.WIDGET_OPACITY}`, "PROPERTY")
            break
          case "__visible":
            this.set_field_value(Blink.Msg.WIDGET_VISIBLE, "PROPERTY")
            break
          case "__disabled":
            this.set_field_value(Blink.Msg.WIDGET_DISABLED, "PROPERTY")
            break
          default:
            if (keys?.length) {
              this.set_field_value(`${valueType === "boolean" ? "" : Blink.Msg.WIDGET_OF} ${processedLabel}`, "PROPERTY")
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
        const mutationElement = document.createElement("mutation")
        mutationElement.setAttribute("property", this.property)
        mutationElement.setAttribute("widget_type", this.widgetType)
        mutationElement.setAttribute("is_any_widget", String(this.isAnyWidget))
        return mutationElement
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
        const types = LoadCustomWidget.getPropertyTypes(this.widgetType, this.property)
        if (!types) {
          console.error("WIDGET_SET_MUTATOR getWidgetProperty error", this.widgetType, this.property)
          this.set_disabled(true)
          this.set_field_value(Blink.Msg.INVALID_BLOCK, "PROPERTY")
          this.set_colour("#abafb6")
          return
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
        if (!(types.key !== "__position" && types.key !== "__size")) {
          validatorsIsInteger = true
        }
        if (types.key !== "__visible" && types.key !== "__disabled") {
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
            options: () => getBlockResources().getWidgetListByType(this.widgetType)
          })
          this.get_input("WIDGET_ID_CONTAINER")?.append_field(idField, "WIDGET_ID")
        }
        let keys
        if (typeof blockOptions.setter === "object" && (keys = blockOptions.setter.keys)?.length) {
          const options: [string, string][] = []
          keys.forEach((key, index) => {
            const types = LoadCustomWidget.getPropertyTypes(this.widgetType, key)
            if (types) {
              if (index === 0 && types.valueType === "number") {
                if (types.validators) {
                  validatorsLessThanValue = LoadCustomWidget.getValidatorsLessThanValue(types.validators)
                  validatorsGreaterThanValue = LoadCustomWidget.getValidatorsGreaterThanValue(types.validators)
                }
                if (!(undefined !== validatorsGreaterThanValue || types.key !== "__width" && types.key !== "__height")) {
                  validatorsGreaterThanValue = 0
                }
              }
              const processedLabel = Module_85.a(this.widgetType, types.label)
              options.push([processedLabel, key])
            } else {
              console.error("WIDGET_GET_MUTATOR getWidgetProperty error", this.widgetType, key)
            }
          })
          this.set_field_value(Blink.Msg.WIDGET_OF, "PROPERTY")
          this.append_dummy_input().append_field(new Module_118.a({
            type: "field_coco_dropdown",
            name: "PROPERTY_KEY",
            custom: true,
            options: () => options,
            optOnchange(e) {
              const types = LoadCustomWidget.getPropertyTypes(this.widgetType, e)
              if (types) {
                let COLOR
                if (types.valueType === "color") {
                  COLOR = "COLOR"
                }
                let validatorsGreaterThanValue
                let validatorsLessThanValue
                const field = this.get_shadow_field("VALUE", COLOR)
                if (field) {
                  field.set_value(String(types.defaultValue))
                  if (types.valueType === "number") {
                    if (types.validators) {
                      validatorsGreaterThanValue = LoadCustomWidget.getValidatorsGreaterThanValue(types.validators)
                      validatorsLessThanValue = LoadCustomWidget.getValidatorsLessThanValue(types.validators)
                    }
                    if (!(undefined !== validatorsGreaterThanValue || types.key !== "__width" && types.key !== "__height")) {
                      validatorsGreaterThanValue = 0
                    }
                    field.set_constraints(validatorsGreaterThanValue, validatorsLessThanValue, validatorsIsInteger ? 1 : undefined)
                  }
                }
              }
            }
          }), "PROPERTY_KEY")
          const setterLabel = processedLabel ? `${processedLabel} ${Blink.Msg.WIDGET_SET_TO}` : Blink.Msg.WIDGET_SET_TO
          this.append_dummy_input().append_field(setterLabel)
        }
        switch (types.key) {
          case "__position":
            this.set_field_value(Blink.Msg.WIDGET_OF, "PROPERTY")
            this.append_dummy_input().append_field(new Module_118.a({
              type: "field_coco_dropdown",
              name: "POSITION_TYPE",
              custom: true,
              options: () => [[Blink.Msg.POSITION_X, "positionX"], [Blink.Msg.POSITION_Y, "positionY"]]
            }), "POSITION_TYPE")
            this.append_dummy_input().append_field(Blink.Msg.WIDGET_SET_TO)
            break
          case "__opacity":
            this.set_field_value(`${Blink.Msg.WIDGET_OF} ${Blink.Msg.WIDGET_OPACITY} ${Blink.Msg.WIDGET_SET_TO}`, "PROPERTY")
            break
          case "__visible":
            this.append_dummy_input("", 0).append_field(new Module_118.a({
              type: "field_coco_dropdown",
              name: "VALUE",
              custom: true,
              options: () => [[Blink.Msg.SHOW, "show"], [Blink.Msg.HIDE, "hide"]]
            }), "VALUE")
            this.inputList.forEach((input) => {
              if (input.get_field("PROPERTY")) {
                input.remove_field("PROPERTY")
              }
            })
            break
          case "__disabled":
            this.append_dummy_input("", 0).append_field(new Module_118.a({
              type: "field_coco_dropdown",
              name: "VALUE",
              custom: true,
              options: () => [[Blink.Msg.ABLE, "able"], [Blink.Msg.DISABLED, "disabled"]]
            }), "VALUE")
            this.inputList.forEach((input) => {
              if (input.get_field("PROPERTY")) {
                input.remove_field("PROPERTY")
              }
            })
            break
          default:
            if (!keys?.length) {
              this.set_field_value(`${Blink.Msg.WIDGET_OF} ${processedLabel} ${Blink.Msg.WIDGET_SET_TO}`, "PROPERTY")
            }
        }
        const processedCheckType = LoadCustomWidget.processCheckType(valueType, checkType)
        if (types.key !== "__visible" && types.key !== "__disabled") {
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
            let processedDefaultValue = ""
            if (valueType === "string") {
              processedDefaultValue = Module_85.a(this.widgetType, String(defaultValue))
            }
            const shadow = getCustomWidgetBlockParamShadow(valueType, processedDefaultValue || defaultValue)
            this.append_shadow_input("VALUE", shadow).set_check(processedCheckType)
          }
        }
        if (valueType === "number" && (validators || types.key === "__position" || types.key === "__size")) {
          const field = this.get_shadow_field("VALUE")
          field.set_constraints(validatorsGreaterThanValue, validatorsLessThanValue, validatorsIsInteger ? 1 : undefined)
          if (types.key === "__opacity") {
            field.set_controller_option({
              type: I.ControllerType.SLIDER,
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
        const mutationElement = document.createElement("mutation")
        mutationElement.setAttribute("property", this.property)
        mutationElement.setAttribute("widget_type", this.widgetType)
        mutationElement.setAttribute("is_any_widget", String(this.isAnyWidget))
        return mutationElement
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
    const mutator = {
      method: "method",
      widgetType: "",
      isAnyWidget: false,
      updateShape_() {
        const types = LoadCustomWidget.getMethodTypes(this.widgetType, this.method)
        if (!types) {
          console.error("WIDGET_METHOD_MUTATOR getWidgetMethod error", this.widgetType, this.method)
          this.set_disabled(true)
          this.append_dummy_input().append_field(Blink.Msg.INVALID_BLOCK, "METHOD")
          this.set_colour("#abafb6")
          return
        }
        this.set_disabled(false)
        const IDContainer = this.get_input("WIDGET_ID_CONTAINER")
        if (this.isAnyWidget) {
          const title = LoadCustomWidget.getWidgetTitle(this.widgetType)
          IDContainer?.append_field(title)
          this.append_shadow_input("WIDGET_ID", `<empty type="widget_any_id"></empty>`)
          if (types.key === "__setVisible") {
            const field = new Module_118.a({
              type: "field_coco_dropdown",
              name: "DISPLAY",
              custom: true,
              options: () => [[Blink.Msg.SHOW, "show"], [Blink.Msg.HIDE, "hide"]]
            })
            this.append_dummy_input().append_field(field, "DISPLAY")
          }
          if (types.key === "__setDisabled") {
            const field = new Module_118.a({
              type: "field_coco_dropdown",
              name: "DISABLED",
              custom: true,
              options: () => [[Blink.Msg.ABLE, "able"], [Blink.Msg.DISABLED, "disabled"]]
            })
            this.append_dummy_input().append_field(field, "DISABLED")
          }
        } else {
          const idField = new Module_118.a({
            type: "field_coco_dropdown",
            name: "WIDGET_ID",
            custom: true,
            options: () => getBlockResources().getWidgetListByType(this.widgetType)
          })
          IDContainer?.append_field(idField, "WIDGET_ID")
        }
        const { label, params, tooltip, blockOptions = {}, valueType } = types
        if (blockOptions.callMethodLabel !== false) {
          const callMethodLabel = (blockOptions.callMethodLabel?.toString()) || ""
          const processedCallMethodLabel = Module_85.a(this.widgetType, callMethodLabel) || Blink.Msg.WIDGET_METHOD_CALL_MSG
          const textField = new FieldLabel({
            text: processedCallMethodLabel
          })
          IDContainer?.insert_field_at(0, textField)
        }
        let icon
        if (blockOptions.icon && (Blink.Msg[blockOptions.icon] ? icon = Blink.Msg[blockOptions.icon] : blockOptions.icon.startsWith("https://") && (icon = blockOptions.icon), icon)) {
          const field = new FieldImage({ src: icon })
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
          const processedLabel = Module_85.a(this.widgetType, label)
          const processedKey = `PARAM_${key}`
          if (dropdown) {
            const field = new Module_118.a({
              type: "field_coco_dropdown",
              name: processedKey,
              custom: true,
              options: he(this.widgetType, dropdown)
            })
            const input = this.append_dummy_input()
            if (processedLabel) {
              input.append_field(processedLabel, `${processedKey}_LABEL`)
            }
            input.append_field(field, processedKey)
          } else {
            const shadow = getCustomWidgetBlockParamShadow(valueType, defaultValue)
            const input = this.append_shadow_input(processedKey, shadow)
            const processedCheckType = LoadCustomWidget.processCheckType(valueType, checkType)
            input.set_check(processedCheckType)
            if (processedLabel) {
              input.insert_field_at(0, processedLabel, `${processedKey}_LABEL`)
            }
            if (valueType === "number" && controller) {
              const field = this.get_shadow_field(processedKey)
              field?.set_constraints(controller.min, controller.max, 1)
              if (controller.leftText && controller.rightText) {
                field?.set_controller_option({
                  type: I.ControllerType.SLIDER,
                  left_text: controller.leftText,
                  right_text: controller.rightText
                })
              }
            }
          }
          if (labelAfter) {
            const processedLabelAfter = Module_85.a(this.widgetType, labelAfter)
            this.append_dummy_input("").append_field(processedLabelAfter, `${processedKey}_LABEL_AFTER`)
          }
        })
      },
      domToMutation(element) {
        this.method = element.getAttribute("method") || this.method
        this.widgetType = element.getAttribute("widget_type") || this.widgetType
        this.isAnyWidget = element.getAttribute("is_any_widget") === "true"
        this.updateShape_()
      },
      mutationToDom() {
        const mutationElement = document.createElement("mutation")
        mutationElement.setAttribute("method", this.method)
        mutationElement.setAttribute("widget_type", this.widgetType)
        mutationElement.setAttribute("is_any_widget", String(this.isAnyWidget))
        return mutationElement
      }
    }
    Blink.extensions.register_mutator("widget_method_mutator", mutator)
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
        const types = LoadCustomWidget.getPropertyTypes(this.widgetType, this.property)
        if (types) {
          const { defaultValue, dropdown } = types
          if (dropdown) {
            this.set_shadow(true)
            const field = new Module_118.a({
              type: "field_coco_dropdown",
              name: "VALUE",
              custom: true,
              options: () => he(this.widgetType, dropdown)
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
        const mutationElement = document.createElement("mutation")
        mutationElement.setAttribute("property", this.property)
        mutationElement.setAttribute("widget_type", this.widgetType)
        return mutationElement
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
    var a = Blink.xml.text_to_dom(o$mutation)
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
    var a = Blink.xml.text_to_dom(o$mutation)
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
    var a = Blink.xml.text_to_dom(r$mutation)
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
    var r = Blink.xml.text_to_dom(e$blocksT$mutation).getAttribute("param")
    return "".concat(Module_4.a).concat(r)
  })
  e.insertBlockSnippetGenerator("widget_method", function (t, n) {
    var r = t.blocks[n]
    var /* [auto-meaningful-name] */r$mutation = r.mutation
    var i = Blink.xml.text_to_dom(r$mutation)
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
    var i = Blink.xml.text_to_dom(o.mutation)
    var a = function (r) {
      return e.valueToCode(t, n, r, e.ORDER_COMMA)
    }
    switch (Number(i.getAttribute("format"))) {
      case I.EColorFormat.ColorPalette:
        r = Module_4.s("getColorHex", [Module_4.o(i.getAttribute("color") || "")])
        break
      case I.EColorFormat.ColorString:
        r = Module_4.s("getColorHex", [a("COLOR_STRING")])
        break
      case I.EColorFormat.HSVA:
        r = Module_4.s("getColorHsva", [a("H"), a("S"), a("V"), a("A")])
        break
      case I.EColorFormat.RGBA:
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

export { setBlockGroupProfile as _e }
export { ve }
