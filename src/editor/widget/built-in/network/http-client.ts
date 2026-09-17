import { Yh } from "../../../../../unrestored/shared/1571/2636/index__part-68"
import * as /* [auto-meaningful-name] */Module_61 from /* 61 */"../../../../../unrestored/shared/1571/2636/61"
import * as /* [auto-meaningful-name] */Module_46 from /* 46 */"../../../block/declare/index"
import * as /* [auto-meaningful-name] */Module_4 from /* 4 */"../../../../../unrestored/shared/1571/2636/4"
import * as Types from "../types"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"../../../../../unrestored/shared/1571/2636/6"
import * as Widget from "../../internal/types"

const editConfig: Widget.EditConfig[] = [
  {
    type: "WidgetTitle"
  }, {
    type: "TextInput",
    key: "url",
    label: "HttpClientWidget.url"
  }, {
    type: "HttpHeader"
  }, {
    type: "HttpParams"
  }, {
    type: "HttpBody"
  }, {
    type: "HelpUrl",
    url: "https://codemao-guide.yuque.com/bfiekm/sbo5kh/http-client"
  }
]

const blockConfig: Widget.BlockConfig = {
  type: Types.HTTP_CLIENT_WIDGET,
  category: {
    iconId: "icon-widget-http-client",
    blocks: Types.HTTP_CLIENT_WIDGET
  },
  getTemplate(widgetId) {
    const widgetIdField = `<field name="WIDGET_ID">${widgetId}</field>`
    return [
      `<block type="http_on_client_success" uncache="true">${widgetIdField}</block>`,
      `<block type="http_on_client_error" uncache="true">${widgetIdField}</block>`,
      Module_61.d,
      `<block type="http_set_client_url" uncache="true">
        ${widgetIdField}
        <value name="VALUE">
          <shadow type="text">
          <field name="TEXT"></field>
          </shadow>
        </value>
      </block>`,
      `<block type="http_set_client_header" uncache="true">
        ${widgetIdField}
        <value name="VALUE">
          <shadow type="text">
            <field name="TEXT"></field>
          </shadow>
        </value>
      </block>`,
      `<block type="http_send_get_request" uncache="true">${widgetIdField}</block>`,
      `<block type="http_send_post_request" uncache="true">
        ${widgetIdField}
        <value name="VALUE">
          <shadow type="text">
            <field name="TEXT"></field>
          </shadow>
        </value>
      </block>`,
      Module_61.d,
      `<block type="http_get_client_url" uncache="true">${widgetIdField}</block>`,
      Module_61.d,
      `<block type="object_json_parse" uncache="true">
        <value name="TEXT">
          <shadow type="text">
            <field name="TEXT"></field>
          </shadow>
        </value>
      </block>`
    ]
  },
  blockDeclareGroup: {
    setBlockGroupSnippet(manager) {
      function t(t, n, r, o) {
        var i = t.blocks[n]
        var a = manager.getFieldValue(i, "WIDGET_ID") || ""
        if (!a) {
          return ""
        }
        var s = ""
        if (o) {
          s = manager.valueToCode(t, n, "VALUE", manager.ORDER_FUNCTION_CALL) || ""
        }
        return Module_4.l(Module_4.n("httpClientSendRequest", [Module_4.o(a), Module_4.o(r), s]), i, manager)
      }
      manager.insertBlockSnippetGenerator("http_on_client_success", function (t, n) {
        var r = t.blocks[n]
        var o = manager.getFieldValue(r, "WIDGET_ID") || ""
        var i = manager.statementToCode(t, n, "DO")
        var a = manager.valueToCode(t, n, "HTTP_CODE", manager.ORDER_ATOMIC)
        var s = manager.valueToCode(t, n, "RESPONSE", manager.ORDER_ATOMIC)
        return i && o ? Module_4.n("argsOnHttpClientSuccess", [Module_4.o(o)], i, [a, s]) : ""
      })
      manager.insertBlockSnippetGenerator("http_on_client_success_code", function () {
        return "successCode"
      })
      manager.insertBlockSnippetGenerator("http_on_client_success_response", function () {
        return "successResponse"
      })
      manager.insertBlockSnippetGenerator("http_on_client_error_code", function () {
        return "errorCode"
      })
      manager.insertBlockSnippetGenerator("http_on_client_error_response", function () {
        return "errorResponse"
      })
      manager.insertBlockSnippetGenerator("http_on_client_error", function (t, n) {
        var r = t.blocks[n]
        var o = manager.getFieldValue(r, "WIDGET_ID") || ""
        var i = manager.statementToCode(t, n, "DO")
        var a = manager.valueToCode(t, n, "HTTP_CODE", manager.ORDER_ATOMIC)
        var s = manager.valueToCode(t, n, "MESSAGE", manager.ORDER_ATOMIC)
        return i && o ? Module_4.n("argsOnHttpClientError", [Module_4.o(o)], i, [a, s]) : ""
      })
      manager.insertBlockSnippetGenerator("room_create_room_name", function () {
        return "room_name"
      })
      manager.insertBlockSnippetGenerator("http_on_client_error_response", function () {
        return "response"
      })
      manager.insertBlockSnippetGenerator("http_set_client_url", function (t, n) {
        var r = t.blocks[n]
        var o = manager.getFieldValue(r, "WIDGET_ID") || ""
        var i = manager.valueToCode(t, n, "VALUE", manager.ORDER_FUNCTION_CALL) || ""
        return o ? Module_4.n("setHttpClientUrl", [Module_4.o(o), i]) : ""
      })
      manager.insertBlockSnippetGenerator("http_set_client_header", function (t, n) {
        var r = t.blocks[n]
        var o = manager.getFieldValue(r, "WIDGET_ID") || ""
        var i = manager.valueToCode(t, n, "VALUE", manager.ORDER_FUNCTION_CALL) || ""
        return o ? Module_4.n("setHttpClientHeader", [Module_4.o(o), i]) : ""
      })
      manager.insertBlockSnippetGenerator("http_send_get_request", function (e, n) {
        return t(e, n, "get", false)
      })
      manager.insertBlockSnippetGenerator("http_send_delete_request", function (e, n) {
        return t(e, n, "delete", false)
      })
      manager.insertBlockSnippetGenerator("http_send_post_request", function (e, n) {
        return t(e, n, "post", true)
      })
      manager.insertBlockSnippetGenerator("http_send_put_request", function (e, n) {
        return t(e, n, "put", true)
      })
      manager.insertBlockSnippetGenerator("http_send_patch_request", function (e, n) {
        return t(e, n, "patch", true)
      })
      manager.insertBlockSnippetGenerator("http_get_client_url", function (t, n) {
        var r = t.blocks[n]
        var o = manager.getFieldValue(r, "WIDGET_ID") || ""
        return o ? Module_4.s("getHttpClientUrl", [Module_4.o(o)]) : ""
      })
      manager.insertBlockSnippetGenerator("object_json_parse", function (t, n) {
        var r = manager.valueToCode(t, n, "TEXT", manager.ORDER_FUNCTION_CALL)
        return Module_4.s("jsonParseToObject", [r])
      })
      manager.insertBlockSnippetGenerator("object_get_value", function (t, n) {
        var r = manager.valueToCode(t, n, "OBJECT", manager.ORDER_FUNCTION_CALL)
        if (!r || r === Module_61.c) {
          return ""
        }
        var o = manager.valueToCode(t, n, "KEY", manager.ORDER_FUNCTION_CALL)
        return o ? Module_4.s("objectGetValue", [r, o]) : ""
      })
    },
    setBlockGroupProfile(manager, Blink) {
      var n = {
        type: "field_coco_dropdown",
        name: "WIDGET_ID",
        custom: true,
        options: function () {
          return Module_46.c().getWidgetListByType(Types.HTTP_CLIENT_WIDGET)
        }
      }
      manager.insertBlockProfile("http_on_client_success", {
        type: "http_on_client_success",
        message0: "%{BKY_HTTP_CLIENT_ON_SUCCESS}",
        args0: [
          Module_4.e("%{BKY_BLOCK_INTERNET_ICON}", true), Module_6.a({}, n), {
            type: "input_value",
            name: "HTTP_CODE",
            check: "Number",
            default_shadow: "<shadow type=\"http_on_client_success_code\" />"
          }, {
            type: "input_value",
            name: "RESPONSE",
            check: "String",
            default_shadow: "<shadow type=\"http_on_client_success_response\" />"
          }, {
            type: "input_dummy",
            align: "CENTRE"
          }, {
            type: "input_statement",
            name: "DO",
            provided_context: "http_on_client_success_DO"
          }
        ],
        colour: "%{BKY_EVENTS_HUE}",
        inputsInline: true,
        tooltip: "%{BKY_HTTP_CLIENT_ON_SUCCESS_TOOLTIP}"
      })
      manager.insertBlockProfile("http_on_client_success_code", {
        type: "http_on_client_success_code",
        message0: "".concat(Blink.Msg.HTTP_CLIENT_STATUS),
        output: "Number",
        required_context: "http_on_client_success_DO",
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      manager.insertBlockProfile("http_on_client_success_response", {
        type: "http_on_client_success_response",
        message0: "".concat(Blink.Msg.HTTP_CLIENT_RESPONSE),
        output: "String",
        required_context: "http_on_client_success_DO",
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      manager.insertBlockProfile("http_on_client_error", {
        type: "http_on_client_error",
        message0: "%{BKY_HTTP_CLIENT_ON_ERROR}",
        args0: [
          Module_4.e("%{BKY_BLOCK_INTERNET_ICON}", true), Module_6.a({}, n), {
            type: "input_value",
            name: "HTTP_CODE",
            check: "Number",
            default_shadow: "<shadow type=\"http_on_client_error_code\" />"
          }, {
            type: "input_value",
            name: "MESSAGE",
            check: "String",
            default_shadow: "<shadow type=\"http_on_client_error_response\" />"
          }, {
            type: "input_dummy",
            align: "CENTRE"
          }, {
            type: "input_statement",
            name: "DO",
            provided_context: "http_on_client_error_DO"
          }
        ],
        colour: "%{BKY_EVENTS_HUE}",
        inputsInline: true,
        tooltip: "%{BKY_HTTP_CLIENT_ON_ERROR_TOOLTIP}"
      })
      manager.insertBlockProfile("http_on_client_error_code", {
        type: "http_on_client_error_code",
        message0: "".concat(Blink.Msg.HTTP_CLIENT_ERROR_STATUS),
        output: "Number",
        required_context: "http_on_client_error_DO",
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      manager.insertBlockProfile("http_on_client_error_response", {
        type: "http_on_client_error_response",
        message0: "".concat(Blink.Msg.HTTP_CLIENT_ERROR_RESPONSE),
        output: "String",
        required_context: "http_on_client_error_DO",
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      manager.insertBlockProfile("http_set_client_url", {
        type: "http_set_client_url",
        message0: "%{BKY_HTTP_CLIENT_SET_URL}",
        args0: [
          Module_6.a({}, n), {
            type: "input_value",
            name: "VALUE",
            check: "String",
            align: "CENTRE"
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_CONTROL_HUE}",
        inputsInline: true
      })
      manager.insertBlockProfile("http_set_client_header", {
        type: "http_set_client_header",
        message0: "%{BKY_HTTP_CLIENT_SET_HEADER}",
        args0: [
          Module_6.a({}, n), {
            type: "input_value",
            name: "VALUE",
            check: "String",
            align: "CENTRE"
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_CONTROL_HUE}",
        inputsInline: true
      })
      manager.insertBlockProfile("http_send_get_request", {
        type: "http_send_get_request",
        message0: "%{BKY_HTTP_CLIENT_SEND_WITH_GET_REQUEST}",
        args0: [Module_6.a({}, n)],
        inputsInline: true,
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_CONTROL_HUE}",
        tooltip: "%{BKY_HTTP_CLIENT_SEND_WITH_GET_REQUEST_TOOLTIP}"
      })
      manager.insertBlockProfile("http_send_delete_request", {
        type: "http_send_delete_request",
        message0: "%{BKY_HTTP_CLIENT_SEND_DELETE_REQUEST}",
        args0: [Module_6.a({}, n)],
        inputsInline: true,
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_CONTROL_HUE}"
      })
      manager.insertBlockProfile("http_send_post_request", {
        type: "http_send_post_request",
        message0: "%{BKY_HTTP_CLIENT_SEND_WITH_POST_REQUEST}",
        args0: [
          Module_6.a({}, n), {
            type: "input_value",
            name: "VALUE",
            check: "String",
            align: "CENTRE"
          }
        ],
        inputsInline: true,
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_CONTROL_HUE}",
        tooltip: "%{BKY_HTTP_CLIENT_SEND_WITH_POST_REQUEST_TOOLTIP}"
      })
      manager.insertBlockProfile("http_send_put_request", {
        type: "http_send_put_request",
        message0: "%{BKY_HTTP_CLIENT_SEND_PUT_REQUEST}",
        args0: [
          Module_6.a({}, n), {
            type: "input_value",
            name: "VALUE",
            check: "String",
            align: "CENTRE"
          }
        ],
        inputsInline: true,
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_CONTROL_HUE}"
      })
      manager.insertBlockProfile("http_send_patch_request", {
        type: "http_send_patch_request",
        message0: "%{BKY_HTTP_CLIENT_SEND_PATCH_REQUEST}",
        args0: [
          Module_6.a({}, n), {
            type: "input_value",
            name: "VALUE",
            check: "String",
            align: "CENTRE"
          }
        ],
        inputsInline: true,
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_CONTROL_HUE}"
      })
      manager.insertBlockProfile("http_get_client_url", {
        type: "http_get_client_url",
        message0: "%{BKY_HTTP_CLIENT_GET_URL}",
        args0: [Module_6.a({}, n)],
        output: "String",
        colour: "%{BKY_CONTROL_HUE}",
        inputsInline: true
      })
      manager.insertBlockProfile("object_json_parse", {
        type: "object_json_parse",
        message0: "%{BKY_OBJECT_JSON_PARSE}",
        args0: [
          {
            type: "input_value",
            name: "TEXT",
            check: "String",
            align: "CENTRE"
          }
        ],
        output: "Object",
        colour: "%{BKY_CONTROL_HUE}",
        inputsInline: true,
        tooltip: "%{BKY_OBJECT_JSON_PARSE_TOOLTIP}"
      })
      manager.insertBlockProfile("object_get_value", {
        type: "object_get_value",
        message0: "%{BKY_OBJECT_GET_VALUE}",
        args0: [
          {
            type: "input_value",
            name: "OBJECT",
            check: ["Object"]
          }, {
            type: "input_value",
            name: "KEY",
            check: "String",
            align: "CENTRE"
          }
        ],
        output: ["String", "Object", "Number", "Array", "Boolean"],
        colour: "%{BKY_CONTROL_HUE}",
        inputsInline: true,
        tooltip: "%{BKY_OBJECT_GET_VALUE_TOOLTIP}"
      })
    }
  },
  categoryClass: {
    text: "",
    iconId: "icon-widget-http-client",
    blocks: []
  },
  renameBlocksInfo: {
    blocksList: [
      "http_on_client_success",
      "http_on_client_error",
      "http_set_client_url",
      "http_set_client_header",
      "http_send_get_request",
      "http_send_post_request",
      "http_get_client_url"
    ],
    fieldName: "WIDGET_ID"
  },
  topBlocks: ["http_on_client_success", "http_on_client_error"]
}

export const HTTPClientWidget: Widget.Widget = {
  icon: "icon-widget-http-client",
  title: "HttpClientWidget.widgetName",
  type: Types.HTTP_CLIENT_WIDGET,
  previewAreaWidgetTitle: "HttpClientWidget.widgetName",
  component: Yh,
  editConfig,
  blockConfig,
  isInvisibleWidget: true,
  widget: {
    isGlobalWidget: false,
    size: {
      width: 0,
      height: 0
    },
    attributes: {
      url: "https://restapi.amap.com/v3/weather/weatherInfo",
      header: [],
      params: [
        {
          key: "city",
          value: "440300"
        }, {
          key: "key",
          value: "4f9570617280f00607575cca7272841e"
        }
      ],
      body: ""
    }
  }
}
