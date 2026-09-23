/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2166
 */

import * as inversify from "inversify"
import * as shadows from /* 1349 */"../../../../../../../../unrestored/shared/1571/2636/1205/1349"
import * as zh_hans from /* 1350 */"../../../../../../../../unrestored/shared/1571/2636/17/2142/2181/1350"
import * as inject from /* 2167 */"../../../../../../../../unrestored/shared/1571/2636/17/2142/2166/2167/index"
import * as container from "../di/container"
import * as di from "../di"
import { version } from "../../../package.json"

@inversify.injectable()
export class Blink {

  get mainWorkspace() {
    return this.workspace_db.current
  }
  set mainWorkspace(workspace) {
    this.workspace_db.current = workspace
  }

  public get di_container() {
    return container.get_instance()
  }

  @di.lazy_inject(di.BINDING.context_menu)
  context_menu

  @di.lazy_inject(di.BINDING.events)
  events

  @di.lazy_inject(di.BINDING.extensions)
  extensions

  @di.lazy_inject(di.BINDING.Msg)
  Msg

  @di.lazy_inject(di.BINDING.registry)
  registry

  @di.lazy_inject(di.BINDING.runtime_data)
  runtime_data

  @di.lazy_inject(di.BINDING.theme)
  theme

  @di.lazy_inject(di.BINDING.tooltip)
  tooltip

  @di.lazy_inject(di.BINDING.widget_div)
  widget_div

  @di.lazy_inject(di.BINDING.workspace_db)
  workspace_db

  @di.lazy_inject(di.BINDING.xml)
  xml

  @di.lazy_inject(di.BINDING.json)
  json

  @di.lazy_inject(di.BINDING.utils)
  utils

  Blocks
  blocks_xml
  version: string
  inject

  public constructor() {
    this.Blocks = Object.create(null)
    this.blocks_xml = {}
    this.version = version
    this.inject = inject.Inject.bind(this)
    Object.assign(this.Msg, zh_hans.zh_hans);
    shadows.init_shadows(this)
  }

  public define_blocks_with_json_array(jsonArray) {
    for (var i = 0; i < jsonArray.length; i++) {
      var elem = jsonArray[i]
      if (!elem) {
        console.warn("Block definition #" + i + " in JSON array not exist. Skipping.")
        continue
      }
      var typename = elem.type
      if (!typename) {
        console.warn("Block definition #" + i + " in JSON array is missing a type attribute. Skipping.")
        continue
      }
      if (this.Blocks[typename]) {
        console.warn("Block definition #" + i + " in JSON array overwrites prior definition of \"" + typename + "\".")
      }
      this.Blocks[typename] = {
        init: function (json_def) {
          return function () {
            this.jsonInit(json_def)
          }
        }(elem)
      }
    }
  }

  public define_block_with_object(type, block_obj) {
    if (this.Blocks[type]) {
      console.warn("Block definition overwrites prior definition of \"" + type + "\".")
    }
    this.Blocks[type] = block_obj
  }
}
