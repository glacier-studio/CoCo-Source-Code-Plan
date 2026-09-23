/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：732
 */

import * as tslib_1 from "tslib"
import * as asserts_1 from "../../../../../../../unrestored/shared/1571/2636/207/734/387"
import * as di_1 from "../core/di"
import * as base_1 from "../../../../../../../unrestored/shared/1571/2636/1022/214"
import * as util_1 from "../../../../../../../unrestored/shared/1571/2636/1058/762"
import * as constants_1 from "../../../../../../../unrestored/shared/1571/2636/1058/173"

export const icon_procedure = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xOCAzNkM4LjA1OSAzNiAwIDI3Ljk0MSAwIDE4UzguMDU5IDAgMTggMHMxOCA4LjA1OSAxOCAxOC04LjA1OSAxOC0xOCAxOHptMC0xYzkuMzg5IDAgMTctNy42MTEgMTctMTdTMjcuMzg5IDEgMTggMSAxIDguNjExIDEgMThzNy42MTEgMTcgMTcgMTd6IiBmaWxsPSIjRDc4MDU4IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48Y2lyY2xlIGZpbGw9IiNGRkYiIGN4PSIxOCIgY3k9IjE4IiByPSIxNyIvPjxwYXRoIGQ9Ik0yNy4xNTcgMjIuOTM1Yy0uMDQzLjE1LS4yMzUuMjUzLS40OS4zOWEuOTEyLjkxMiAwIDAgMS0uNjg1LjA4NC44Ni44NiAwIDAgMS0uNDQtLjMyNWwtMi4yOTItMy4wMzItMi43OCAzLjAxN2MtLjMzMi4zNi0uNzA4LjQxMy0xLjEzOC4xNTgtLjE3Ny0uMTAzLS41LS40ODctLjUzOC0uNjYtLjAzNi0uMTczLjAzMi0uMzU0LjIxLS41NDhsMy4wNzMtMy4zNDUtMi4yNC0yLjk2M2MtLjA5Mi0uMTM2LS4xMDEtLjI5NC0uMDI4LS40NzQuMDctLjE4LjIzNi0uMjg3LjQxMy0uMzkyLjI1NC0uMTQzLjQ4Ny0uMTQ3LjY2LS4xMzQuMTczLjAxLjMzLjExLjQ3NS4yOTNsMS44NjEgMi40MjcgMi4yNTQtMi40NTVjLjE5NS0uMjE2LjQxNi0uMjkyLjYyOS0uMzUzLjIxMi0uMDYxLjYzLjE1OC44Ni4yODYuMjM0LjEyNy4zNTYuMjczLjM3LjQzOC4wMTUuMTY0LS4wNS4zMjYtLjE5Ni40ODZsLTIuNzUzIDIuOTg1IDIuNzE3IDMuNzI1YS40MDUuNDA1IDAgMCAxIC4wNTguMzkyem0tNy4wNzUtMTQuODVjLS45NTYtLjEwNy0yLjk1Ni0uMjUtNC4xNjkuNTM0LTEuMjE1Ljc4OC0xLjkxMyAyLjE0LTIuMjUxIDMuNzVsLS40NzcgMi4yNzJIOS43NjJjLS4zOTggMC0uNzE1LjExNC0uNzQ4LjgyNy4wMzMuMzg5LjM1LjY5Ny43NDguNjk3aDMuMDk1bC0yLjA0IDkuOTY2cy0uNTIyIDEuNjI2LjYyIDEuNjk3Yy45OTguMDYzIDEuMTk2LTEuNTYxIDEuMTk2LTEuNTYxbDIuMDU3LTEwLjEwMmgyLjYxM2EuNzYyLjc2MiAwIDAgMCAwLTEuNTI0aC0yLjI4OGwuNDUyLTIuMjI3Yy45NjctMy41NSAyLjc3MS0yLjY4OCA0LjQzOC0yLjY4OC4yNzMgMCAxLjMwMS4wNzIgMS4zNzMtLjYzMi4wOTEtLjg4LS43OTQtLjk2My0xLjE5Ni0xLjAwOHpNOSAxNS41OGMwLS4wNDYuMDQ1LS4wNjkuMDU4LS4xMS0uMDEzLS4wMjMtLjA1OC0uMDQzLS4wNTgtLjA2N3YuMTc3eiIgZmlsbD0iI0YwOEY2MyIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9nPjwvc3ZnPgo="

export function register_procedure_blocks(blink, procedure_manager, on_procedure_name_click, on_add_param_click) {
  var field_icon_factory = blink.di_container.get(di_1.BINDING.FieldIcon)
  var field_textinput_factory = blink.di_container.get(di_1.BINDING.FieldTextInput)
  var mutation_add_factory = blink.di_container.get(di_1.BINDING.MutationAddButton)
  var mutation_remove_factory = blink.di_container.get(di_1.BINDING.MutationRemoveButton)
  var field_label_serializable_factory = blink.di_container.get(di_1.BINDING.FieldLabelSerializable)
  var create_event_factory = blink.di_container.get(di_1.BINDING.CreateEvent)
  var change_event_factory = blink.di_container.get(di_1.BINDING.ChangeEvent)
  blink.define_block_with_object(constants_1.PROCEDURE_BLOCK_TYPES.DEF, {
    init() {
      var _this = this
      var _procedure_manager = (0, base_1.is_func)(procedure_manager) ? procedure_manager() : procedure_manager
      var icon = field_icon_factory({
        src: icon_procedure,
        opt_is_head: true
      })
      var proc_prefix = blink.Msg.PROCEDURES_DEFNORETURN_PROCEDURE
      var proc_name = proc_prefix // 函数定义积木在flyout中时的名字
      var existing_procedure = _procedure_manager.get_procedure_by_def(this.id)
      if (existing_procedure) { // 函数记录存在，为撤销重做过程，保持被记录的名字
        proc_name = existing_procedure.name
      }
      // 函数积木的主动创建有两种路径，从flyout中拖出、复制粘贴。两者都是dom_to_workspace操作，会触发validator。
      // 名字的合法化处理都在下方field的validator中进行。
      var name_field = field_textinput_factory({
        text: proc_name,
        opt_validator(new_name) {
          var procedure = _procedure_manager.get_procedure_by_def(_this.id)
          // 从flyout拖出时，执行的并不是new_block操作，而是dom_to_workspace操作。复制粘贴时，同样是dom_to_workspace操作。
          // dom_to_workspace事件会把源积木xml中field的值赋给新积木，而函数的创建由create事件触发，在dom_to_workspace最后才会被创建。
          // procedure不存在说明此次是新函数创建，是在积木的create事件被发出前发生的赋值，
          // 需要阻止新函数的名字被改回拖出前/复制前的名字。
          if (!procedure) {
            var valid_name = (0, util_1.get_legal_procedure_name)(new_name, _procedure_manager.get_occupied_procedure_names().concat([proc_prefix]))
            return valid_name
          }
          // 撤销重做时，若原名被占用，函数名也可能发生改变(而procedure_manager中的名字一定正确)，
          // 需要将函数命名为procedure_manager中记录的名字。
          if (blink.events.is_undoing()) {
            return procedure.name
          }
          // 其他时候，不做限制。
          return new_name
        }
      })
      name_field.set_spell_check(false)
      if (!(this.is_in_flyout || this.is_insertion_marker())) {
        name_field.on_mouse_down = function () {
          return (0, tslib_1.__awaiter)(_this, undefined, undefined, function () {
            var block_id
            var new_name
            var block
            var ori_name
            var proc
            var old_name
            return (0, tslib_1.__generator)(this, function (_a) {
              switch (_a.label) {
                case 0:
                  block_id = this.id
                  return [4 /*yield*/, on_procedure_name_click.call(this, block_id)]
                case 1:
                  new_name = _a.sent()
                  if (!new_name) {
                    return [2 /*return*/]
                  }
                  block = blink.mainWorkspace.get_block_by_id(block_id);
                  (0, asserts_1.assert)(block)
                  // 对回调方法返回的新函数名再次进行检查
                  if (_procedure_manager.get_procedure_by_name(new_name)) {
                    ori_name = new_name
                    new_name = (0, util_1.get_legal_procedure_name)(new_name, _procedure_manager.get_occupied_procedure_names())
                    console.warn("Procedure " + ori_name + " def exists. Renaming block [" + block_id + "] to " + new_name)
                  }
                  proc = _procedure_manager.get_procedure_by_def(block_id);
                  (0, asserts_1.assert)(proc)
                  if (proc.disabled) {
                    console.warn("Trying to rename deleted procedure " + block_id)
                    return [2 /*return*/]
                  }
                  old_name = proc.name
                  blink.events.disable()
                  _procedure_manager.rename_procedure(old_name, new_name)
                  name_field.set_value(new_name)
                  blink.events.enable()
                  blink.events.fire(change_event_factory('procedure_rename', {
                    block: block,
                    old_value: old_name,
                    new_value: new_name,
                    name: constants_1.PROCEDURE_BLOCK_FIELD_NAMES.PROCEDURE_NAME,
                  }))
                  return [2 /*return*/]
              }
            })
          })
        }
      }
      this
        .append_dummy_input("PROCEDURES_2_DEFNORETURN_DEFINE")
        .append_field(icon).append_field(blink.Msg.PROCEDURES_DEFNORETURN_TITLE)
        .append_field(name_field, constants_1.PROCEDURE_BLOCK_FIELD_NAMES.PROCEDURE_NAME)
      var mutation_remove = mutation_remove_factory(undefined)
      mutation_remove.margin_left = 12
      this
        .append_dummy_input(constants_1.PROCEDURE_BLOCK_INPUT_NAMES.DEF_MUTATOR)
        .append_field(mutation_remove)
        .append_field(mutation_add_factory())
      this.append_statement_input("STACK", undefined, constants_1.PROCEDURE_CONTEXT)
      this.set_inputs_inline(true)
      this.set_colour(blink.theme.block_color.ORANGE_4.fill)
      this.set_tooltip(blink.Msg.PROCEDURES_DEFNORETURN_TOOLTIP)
    },
    addMutation(new_param_name) {
      return (0, tslib_1.__awaiter)(this, undefined, undefined, function () {
        var block_id
        var param_default_value
        var promise
        var block
        var _procedure_manager
        var proc
        var params
        var index
        var input
        var param_block
        var block_input
        var current_group
        return (0, tslib_1.__generator)(this, function (_a) {
          switch (_a.label) {
            case 0:
              block_id = this.id
              param_default_value = undefined
              if (!(typeof new_param_name !== 'string' || !new_param_name))
                return [3 /*break*/, 2]
              return [4 /*yield*/, on_add_param_click.call(this, block_id)]
            case 1:
              promise = _a.sent()
              new_param_name = null === promise || undefined === promise ? undefined : promise.param_name
              param_default_value = null === promise || undefined === promise ? undefined : promise.default_value
              _a.label = 2
            case 2:
              if (!new_param_name) {
                return [2 /*return*/]
              }
              block = blink.mainWorkspace.get_block_by_id(block_id);
              (0, asserts_1.assert)(block)
              _procedure_manager = (0, base_1.is_func)(procedure_manager) ? procedure_manager() : procedure_manager
              proc = _procedure_manager.get_procedure_by_def(block_id);
              (0, asserts_1.assert)(proc)
              if (proc.disabled) {
                console.warn("Trying to add param to deleted procedure " + block_id)
                return [2 /*return*/]
              }
              params = _procedure_manager.get_procedure_param_names(proc.name)
              if (params.includes(new_param_name)) {
                console.warn("Param " + new_param_name + " exists.")
                return [2 /*return*/]
              }
              index = params.length
              blink.events.disable()
              input = block.append_math_shadow("" + constants_1.PROCEDURE_BLOCK_INPUT_NAMES.PARAM_PREFIX + index, constants_1.PROCEDURE_BLOCK_INPUT_NAMES.DEF_MUTATOR)
              param_block = "<block type=\"" + constants_1.PROCEDURE_BLOCK_TYPES.PARAM_ON_BLOCK + "\"></block>"
              block_input = block.append_block_input(param_block, input)
              block_input.set_field_value(new_param_name, constants_1.PROCEDURE_BLOCK_FIELD_NAMES.PARAM_NAME)
              if (param_default_value !== undefined) {
                block_input.set_field_value("=" + param_default_value, constants_1.PROCEDURE_BLOCK_FIELD_NAMES.PARAM_DEFAULT_VALUE)
              }
              // TODO 修改了heart的compile后可以用这一套来做
              // this.append_shadow_input(
              //   `${PROCEDURE_BLOCK_INPUT_NAMES.PARAM_PREFIX}${index}`,
              //   `<shadow type="${PROCEDURE_BLOCK_TYPES.PARAM}">
              //     <field name="${PROCEDURE_BLOCK_FIELD_NAMES.PARAM_NAME}">${new_param_name}</field>
              //   </shadow>`,
              //   PROCEDURE_BLOCK_INPUT_NAMES.DEF_MUTATOR,
              // );
              // this.render();
              blink.events.enable()
              if (blink.events.is_enabled()) {
                current_group = blink.events.get_group()
                blink.events.set_group(current_group || true)
                blink.events.fire(change_event_factory('change_procedure_param', {
                  block: block,
                  old_value: undefined,
                  new_value: {
                    param_name: new_param_name,
                    default_value: param_default_value,
                  },
                }))
                blink.events.set_group(current_group)
              }
              return [2 /*return*/]
          }
        })
      })
    },
    removeMutation() {
      var _a
      var _procedure_manager = (0, base_1.is_func)(procedure_manager) ? procedure_manager() : procedure_manager
      var proc_name = _procedure_manager.get_procedure_name_by_def(this.id)
      var params = null === (_a = _procedure_manager.get_procedure_by_name(proc_name)) || undefined === _a ? undefined : _a.params
      if (!params || params.length === 0) {
        return
      }
      blink.events.disable()
      var param_input_name = "" + constants_1.PROCEDURE_BLOCK_INPUT_NAMES.PARAM_PREFIX + (params.length - 1)
      var input = this.get_input(param_input_name)
      var target_block = input && input.connection && input.connection.targetBlock()
      target_block && target_block.dispose(undefined, false)
      this.remove_input(param_input_name)
      blink.events.enable()
      var removed_param = params[params.length - 1]
      if (blink.events.is_enabled()) {
        blink.events.fire(change_event_factory("change_procedure_param", {
          block: this,
          old_value: removed_param,
          new_value: undefined
        }))
      }
    },
    domToMutation(xml) {
      if (!xml) {
        return
      }
      var len = xml.children.length
      for (var i = 0; i < len; i++) {
        var child = xml.children[i]
        if (child.nodeName.toLowerCase() === 'arg') {
          var param_name = child.getAttribute('name');
          (0, asserts_1.assert)(param_name)
          this.append_math_shadow("" + constants_1.PROCEDURE_BLOCK_INPUT_NAMES.PARAM_PREFIX + i, constants_1.PROCEDURE_BLOCK_INPUT_NAMES.DEF_MUTATOR)
        }
      }
    },
    mutationToDom() {
      var container = document.createElement('mutation')
      var param_inputs = this.inputList.filter(function (input) { return input.name.startsWith(constants_1.PROCEDURE_BLOCK_INPUT_NAMES.PARAM_PREFIX) })
      for (var i = 0; i < param_inputs.length; i++) {
        var parameter = document.createElement('arg')
        parameter.setAttribute('name', param_inputs[i].name)
        container.appendChild(parameter)
      }
      return container
    }
  })
  // TODO 修改了Heart的compile后可以删除这个积木
  blink.define_block_with_object(constants_1.PROCEDURE_BLOCK_TYPES.PARAM_ON_BLOCK, {
    init: function () {
      var _this = this
      var text = field_label_serializable_factory({ text: '' })
      text.on_mouse_down = function (e) {
        e.preventDefault()
      }
      this
        .append_dummy_input()
        .append_field(text, constants_1.PROCEDURE_BLOCK_FIELD_NAMES.PARAM_NAME)
      var default_value = field_label_serializable_factory({ text: '' })
      default_value.margin_left = 2
      this
        .append_dummy_input()
        .append_field(default_value, constants_1.PROCEDURE_BLOCK_FIELD_NAMES.PARAM_DEFAULT_VALUE)
      this.set_output(true)
      this.set_inputs_inline(true)
      this.set_colour(blink.theme.block_color.ORANGE_7.fill)
      // 生成新积木
      var get_new_param_block = function () {
        blink.events.disable()
        var name = _this.get_field_value(constants_1.PROCEDURE_BLOCK_FIELD_NAMES.PARAM_NAME) || ''
        var new_block = _this.workspace.new_block(constants_1.PROCEDURE_BLOCK_TYPES.PARAM)
        var xy = _this.get_relative_to_surface_xy()
        new_block.move_by(xy)
        new_block.set_field_value(name, constants_1.PROCEDURE_BLOCK_FIELD_NAMES.PARAM_NAME)
        new_block.init_svg()
        new_block.render()
        blink.events.enable()
        if (blink.events.is_enabled()) {
          blink.events.fire(create_event_factory({ block: new_block, source: 'other' }))
        }
        return new_block
      }
      this.on_mouse_down = function (e) {
        var current_group = blink.events.get_group()
        blink.events.set_group(current_group || true)
        // 阻止右键事件
        if (e.button !== 0) {
          return
        }
        var gesture = _this.workspace.get_gesture(e)
        if (gesture) {
          var handle_move_1 = gesture.handle_move.bind(gesture)
          var handle_up_1 = gesture.handle_up.bind(gesture)
          var times_1 = 0
          var generated_1 = false
          gesture.handle_move = function (event) {
            if (generated_1) {
              handle_move_1(event)
              return
            }
            if (times_1 < 10) {
              times_1++
              return
            }
            gesture.is_dragging_block = true
            var new_block = get_new_param_block()
            new_block.select()
            gesture.handle_block_start(e, new_block)
            gesture.target_block = new_block
            generated_1 = true
          }
          gesture.handle_up = function (up_e) {
            handle_up_1(up_e)
            blink.events.set_group(current_group)
          }
        }
      }
    }
  })
  // 定义函数【返回】积木
  blink.define_block_with_object(constants_1.PROCEDURE_BLOCK_TYPES.RETURN, {
    init: function () {
      this
        .append_dummy_input('PROCEDURES_2_DEFRETURN_RETURN')
        .append_field(blink.Msg.PROCEDURES_DEFRETURN_RETURN)
      this.append_math_shadow(constants_1.PROCEDURE_BLOCK_INPUT_NAMES.RETURN_VALUE)
      this
        .append_dummy_input(constants_1.PROCEDURE_BLOCK_INPUT_NAMES.RETURN_MUTATOR)
        .append_field(mutation_remove_factory(undefined), 'REMOVE_MUTATOR')
      this.set_previous_statement(true)
      this.set_next_statement(false)
      this.set_inputs_inline(true)
      this.set_colour(blink.theme.block_color.ORANGE_4.fill)
      this.itemCount_ = 1
    },
    addMutation(new_value) {
      var _a
      if (this.itemCount_ !== 0) {
        return
      }
      var mutator_input = this.get_input(constants_1.PROCEDURE_BLOCK_INPUT_NAMES.RETURN_MUTATOR);
      (0, asserts_1.assert)(mutator_input)
      mutator_input.remove_field('ADD_MUTATOR')
      mutator_input.append_field(mutation_remove_factory(undefined), 'REMOVE_MUTATOR')
      this.append_math_shadow(constants_1.PROCEDURE_BLOCK_INPUT_NAMES.RETURN_VALUE, constants_1.PROCEDURE_BLOCK_INPUT_NAMES.RETURN_MUTATOR)
      var new_input = this.get_input(constants_1.PROCEDURE_BLOCK_INPUT_NAMES.RETURN_VALUE)
      var new_shadow = new_input && ((_a = new_input.connection) === null || _a === void 0 ? void 0 : _a.targetBlock())
      if (new_value) {
        blink.events.disable()
        new_shadow === null || new_shadow === void 0 ? void 0 : new_shadow.set_field_value(new_value.toString(), 'NUM')
        blink.events.enable()
      }
      this.itemCount_ = 1
      this.render()
      if (blink.events.is_enabled()) {
        blink.events.fire(change_event_factory('mutation', {
          block: this,
          old_value: undefined,
          new_value: new_value || 1,
        }))
      }
    },
    removeMutation() {
      var _a, _b
      if (this.itemCount_ < 1) {
        return
      }
      var removed_input = this.get_input(constants_1.PROCEDURE_BLOCK_INPUT_NAMES.RETURN_VALUE)
      var removed_block = removed_input && ((_a = removed_input.connection) === null || _a === void 0 ? void 0 : _a.targetBlock())
      var removed_text = ''
      if (removed_block === null || removed_block === void 0 ? void 0 : removed_block.is_shadow()) {
        removed_text = removed_block.get_field_value('NUM') || ''
      }
      else {
        var shadow_dom = (_b = removed_input === null || removed_input === void 0 ? void 0 : removed_input.connection) === null || _b === void 0 ? void 0 : _b.get_shadow_dom()
        var field_dom = shadow_dom === null || shadow_dom === void 0 ? void 0 : shadow_dom.firstChild
        if (field_dom && field_dom.textContent !== null) {
          removed_text = field_dom.textContent
        }
      }
      this.remove_input(constants_1.PROCEDURE_BLOCK_INPUT_NAMES.RETURN_VALUE)
      var mutator_input = this.get_input(constants_1.PROCEDURE_BLOCK_INPUT_NAMES.RETURN_MUTATOR);
      (0, asserts_1.assert)(mutator_input)
      mutator_input.remove_field('REMOVE_MUTATOR')
      mutator_input.append_field(mutation_add_factory(), 'ADD_MUTATOR')
      this.itemCount_ = 0
      this.render()
      if (blink.events.is_enabled()) {
        blink.events.fire(change_event_factory('mutation', {
          block: this,
          old_value: removed_text,
          new_value: undefined,
        }))
      }
    },
    mutationToDom() {
      var container = document.createElement('mutation')
      container.setAttribute('items', String(this.itemCount_))
      return container
    },
    domToMutation: function (xml) {
      var _a
      if (!xml) {
        return
      }
      var item_count = parseInt(xml.getAttribute('items') || '0', 10)
      if (item_count === 0) {
        (_a = this.removeMutation) === null || _a === void 0 ? void 0 : _a.call(this)
      }
    }
  })
  var call_block_mutations = {
    // xml dom长这样
    /*
      <mutation name="函数2">
        <procedures_2_parameter_shadow name="x" value="default"></procedures_2_parameter_shadow>
      </mutation>
    */
    build_inputs() {
      var _this = this
      var _procedure_manager = (0, base_1.is_func)(procedure_manager) ? procedure_manager() : procedure_manager
      var name_field = this.append_dummy_input('NAME')
        .append_field(field_label_serializable_factory({ text: '' }), constants_1.PROCEDURE_BLOCK_FIELD_NAMES.PROCEDURE_NAME)
        .fieldRow[0]
      name_field.set_validator(function (new_name) {
        // text field 的默认值为''
        // 粘贴过程中，首次被设置值的调用来自于domToMutation，是经过验证的函数名
        // 第二次设置的值来自于xml的数据
        // 以首次设置为准
        if (blink.runtime_data.is_pasting()) {
          return name_field.get_value() || new_name
        }
        // 函数不存在时创建调用积木，应该是加载的过程中出现，以xml为准
        var procedure = _procedure_manager.get_procedure_by_caller_id(_this.id)
        if (!procedure) {
          return new_name
        }
        return procedure.name
      })
    },
    domToMutation(xml_element) {
      var _a
      var _procedure_manager = (0, base_1.is_func)(procedure_manager) ? procedure_manager() : procedure_manager
      // 一个特殊场景：复制函数A的调用积木 -> 重命名函数A或增减函数A的参数 -> 粘贴
      // 由于【函数调用与定义绑定】，此时被粘贴的调用积木应该显示新函数名，且参数数量正确
      var name = xml_element.getAttribute('name');
      (0, asserts_1.assert)(name)
      var def_id = xml_element.getAttribute('def_id')
      var procedure = def_id
        ? _procedure_manager.get_procedure_by_def(def_id)
        : _procedure_manager.get_procedure_by_name(name)
      // 确保函数名为最新
      name = procedure ? procedure.name : name
      blink.events.disable()
      this.set_field_value(name, constants_1.PROCEDURE_BLOCK_FIELD_NAMES.PROCEDURE_NAME)
      blink.events.enable()
      var len = procedure ? procedure.params.length : xml_element.childNodes.length
      for (var i = 0; i < len; i++) {
        var child_node = xml_element.childNodes[i]
        if (!child_node ||
                        child_node.nodeName.toLowerCase() === 'procedures_2_parameter_shadow') {
          var param_default_value = child_node.getAttribute('value')
          var input = this.append_default_value_shadow("" + constants_1.PROCEDURE_BLOCK_INPUT_NAMES.ARG_PREFIX + i)
          // 没有设置默认值的参数显示原有的默认值0
          var field_value = param_default_value || '0'
          var shadow = (_a = input === null || input === void 0 ? void 0 : input.connection) === null || _a === void 0 ? void 0 : _a.targetBlock()
          if (shadow === null || shadow === void 0 ? void 0 : shadow.is_shadow()) {
            var field = shadow.get_field('TEXT')
            if (field && (0, base_1.is_field_default_value)(field)) {
              field.set_value(field_value)
            }
          }
        }
      }
    },
    mutationToDom() {
      var _procedure_manager = (0, base_1.is_func)(procedure_manager) ? procedure_manager() : procedure_manager
      var container = document.createElement('mutation')
      var name = this.get_field_value(constants_1.PROCEDURE_BLOCK_FIELD_NAMES.PROCEDURE_NAME);
      (0, asserts_1.assert)(name)
      container.setAttribute('name', name)
      var procedure = _procedure_manager.get_procedure_by_name(name) ||
                    _procedure_manager.get_procedure_by_def(name);
      (0, asserts_1.assert)(procedure)
      container.setAttribute('def_id', procedure.def_id)
      var params = procedure.params
      for (var i = 0; i < params.length; i++) {
        var dom = document.createElement('procedures_2_parameter_shadow')
        var param = params[i]
        dom.setAttribute('name', param.param_name)
        dom.setAttribute('value', param.default_value || '0')
        container.appendChild(dom)
      }
      return container
    },
    addMutation(value) {
      var _a
      var args_len = this.inputList.filter(function (input) { return input.name.includes(constants_1.PROCEDURE_BLOCK_INPUT_NAMES.ARG_PREFIX) }).length
      var input = this.append_default_value_shadow("" + constants_1.PROCEDURE_BLOCK_INPUT_NAMES.ARG_PREFIX + args_len)
      // 没有设置默认值的参数显示原有的默认值0
      var field_value = value || '0'
      var shadow = (_a = input === null || input === void 0 ? void 0 : input.connection) === null || _a === void 0 ? void 0 : _a.targetBlock()
      if (shadow === null || shadow === void 0 ? void 0 : shadow.is_shadow()) {
        var field = shadow.get_field('TEXT')
        if (field && (0, base_1.is_field_default_value)(field)) {
          field.set_value(field_value)
        }
      }
      if (this.is_collapsed()) {
        this.update_collapsed(true)
      }
      else {
        this.render()
      }
    },
    removeMutation() {
      var args_len = this.inputList.filter(function (input) { return input.name.includes(constants_1.PROCEDURE_BLOCK_INPUT_NAMES.ARG_PREFIX) }).length
      if (!args_len) {
        throw Error('Trying to remove no-existent arg input on a call block')
      }
      // 调用积木的变形都是由定义积木的变化触发的，不计入撤销重做，也不触发事件监听
      // 如果被移除的input上连接了非shadow积木，撤销后不会进行重新连接，也不记录shadow field的值
      this.remove_input("" + constants_1.PROCEDURE_BLOCK_INPUT_NAMES.ARG_PREFIX + (args_len - 1))
      if (this.is_collapsed()) {
        this.update_collapsed(true)
      }
      else {
        this.render()
      }
    }
  }
  blink.define_block_with_object(constants_1.PROCEDURE_BLOCK_TYPES.CALL_RETURN, (0, tslib_1.__assign)((0, tslib_1.__assign)({}, call_block_mutations), {
    init() {
      call_block_mutations.build_inputs.call(this)
      this.set_output(true)
      this.set_inputs_inline(true)
      this.set_colour(blink.theme.block_color.ORANGE_4.fill)
    }
  }))
  blink.define_block_with_object(constants_1.PROCEDURE_BLOCK_TYPES.CALL_NORETURN, (0, tslib_1.__assign)((0, tslib_1.__assign)({}, call_block_mutations), {
    init() {
      call_block_mutations.build_inputs.call(this)
      this.set_previous_statement(true)
      this.set_next_statement(true)
      this.set_inputs_inline(true)
      this.set_colour(blink.theme.block_color.ORANGE_4.fill)
    }
  }))
  blink.define_blocks_with_json_array([
    {
      type: constants_1.PROCEDURE_BLOCK_TYPES.PARAM,
      message0: "%1",
      args0: [
        {
          type: "field_label_serializable",
          name: constants_1.PROCEDURE_BLOCK_FIELD_NAMES.PARAM_NAME,
          text: "x"
        }
      ],
      output: true,
      colour: "%{BKY_ORANGE_7}",
      required_context: constants_1.PROCEDURE_CONTEXT,
      extensions: ["param_block"]
    }
  ])
}
