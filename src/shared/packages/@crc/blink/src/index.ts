/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：17
 */

export * as I from "../../../../../../unrestored/shared/1571/2636/17/536"
import * as container from "./core/di/container"
import * as di_symbols from "./core/di/di_symbols"
import * as di_bind from "../../../../../../unrestored/shared/1571/2636/17/2142/index"
import type { Blink as BlinkSingleton } from "./core/singletons/blink"

const __BLINK_VERSION__ = require("../package.json").version
console.log("%c⭐️ Codemao Blink - v" + __BLINK_VERSION__ + " ⭐️", `
  color: #FFDB29;
  text-shadow: 0 1px 0 #BF7000;
  padding: 140px 10px 20px 35px;
  background: no-repeat left / 150px 150px url("http://kn-cdn.codemao.cn/blink/blink-main-compressed.jpeg");
`)
const cont = container.get_instance()
di_bind.bind_di_modules(cont)

export const Blink = window.Blockly = cont.get<BlinkSingleton>(di_symbols.BINDING.Blink)
export * as BU from "../../../../../../unrestored/shared/1571/2636/17/499/index"
export { vec2 } from "@kitten-team/gl-matrix"
