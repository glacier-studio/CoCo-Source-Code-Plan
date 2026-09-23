/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：644
 */

import { Container } from "inversify"
import decorators from "inversify-inject-decorators"

const cont = new Container()

export function get_instance() {
  return cont
}

export function bind_singleton(name, target) {
  cont.rebind(name).to(target).inSingletonScope()
}

export const lazy_inject = decorators(cont).lazyInject
