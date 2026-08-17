/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：37__part-1
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_18 from /* 18 */"../18"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Immutable from /* 66 */"immutable"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"../6"
import * as /* [auto-meaningful-name] */Module_25 from /* 25 */"../25/index"
import * as /* [auto-meaningful-name] */Lodash from /* 30 */"lodash"
import * as /* [auto-meaningful-name] */Module_60 from /* 60 */"../60"
import * as /* [auto-meaningful-name] */Module_53 from /* 53 */"../53"
var H = Immutable.Record({
  position: {
    x: 0,
    y: 0
  },
  visible: false,
  widgetId: ""
})()
var V = {
  visible: false,
  actorId: "",
  onSelect: undefined
}
var z = Immutable.Record({
  currentScreenIndex: -1,
  id: Module_60.v,
  bcmUrl: "",
  jsonFrom: Module_18.d.OTHER,
  title: "新的作品",
  version: Module_53.e,
  playing: false,
  playedAt: 0,
  screens: Immutable.List([]),
  selectedWidgetId: undefined,
  contextMenuInfo: H,
  styleDialog: V,
  apiToken: null,
  focusedWorkspaceArea: null,
  globalVariableList: [],
  globalArrayList: [],
  globalObjectList: [],
  isPackaging: false,
  packageProgress: 0,
  packageTaskLabel: null,
  packageUrl: null,
  packageProgressVisible: false,
  packageDialogVisible: false,
  packageQrCodeVisible: false,
  packageCompleteVisible: true,
  packageInfo: {
    apkName: "",
    apkIcon: "",
    apkSplash: "",
    packLabel: "",
    isCancel: false
  },
  projectShareInfo: {
    title: "",
    desc: "",
    img: ""
  },
  projectSource: {
    tag: Module_18.g.FREEDOM,
    id: ""
  },
  globalWidgetIds: []
})()
function Y(e) {
  return z
}
function K(e, t) {
  var /* [auto-meaningful-name] */t$payload$project = t.payload.project
  var /* [auto-meaningful-name] */t$payload$project$screens = t$payload$project.screens
  var /* [auto-meaningful-name] */t$payload$project$title = t$payload$project.title
  var /* [auto-meaningful-name] */t$payload$project$globalVariableList = t$payload$project.globalVariableList
  var /* [auto-meaningful-name] */t$payload$project$globalArrayList = t$payload$project.globalArrayList
  var /* [auto-meaningful-name] */t$payload$project$globalWidgetIds = t$payload$project.globalWidgetIds
  var /* [auto-meaningful-name] */t$payload$project$globalObjectList = t$payload$project.globalObjectList
  var u = t$payload$project$screens.map(function (e) {
    return Immutable.Record(e)()
  })
  return e.set("screens", Immutable.List(u)).set("title", t$payload$project$title).set("selectedWidgetId", undefined).set("currentScreenIndex", -1).set("playing", false).set("globalVariableList", Lodash.cloneDeep(t$payload$project$globalVariableList)).set("globalArrayList", Lodash.cloneDeep(t$payload$project$globalArrayList)).set("globalWidgetIds", Lodash.cloneDeep(t$payload$project$globalWidgetIds)).set("globalObjectList", Lodash.cloneDeep(t$payload$project$globalObjectList))
}
function q(e, t) {
  return e.set("id", t.payload.projectId)
}
function X(e, t) {
  var /* [auto-meaningful-name] */t$payload = t.payload
  var /* [auto-meaningful-name] */t$payload$screen = t$payload.screen
  var /* [auto-meaningful-name] */t$payload$index = t$payload.index
  var i = Immutable.Record(t$payload$screen)()
  var a = t$payload$index || e.screens.size
  return e.update("screens", function (e) {
    return e.splice(a, 0, i)
  })
}
function Q(e, t) {
  var /* [auto-meaningful-name] */t$payload = t.payload
  var /* [auto-meaningful-name] */t$payload$screenId = t$payload.screenId
  var /* [auto-meaningful-name] */t$payload$title = t$payload.title
  var i = e.screens.findIndex(function (e) {
    return e.id === t$payload$screenId
  })
  return e.updateIn(["screens", i], function (e) {
    return e.set("title", t$payload$title)
  })
}
function Z(e, t) {
  var /* [auto-meaningful-name] */t$payload = t.payload
  var /* [auto-meaningful-name] */t$payload$screenId = t$payload.screenId
  var /* [auto-meaningful-name] */t$payload$key = t$payload.key
  var /* [auto-meaningful-name] */t$payload$value = t$payload.value
  var a = e.screens.findIndex(function (e) {
    return e.id === t$payload$screenId
  })
  return e.updateIn(["screens", a], function (e) {
    return e.set(t$payload$key, t$payload$value)
  })
}
function J(e, t) {
  var /* [auto-meaningful-name] */t$payload = t.payload
  var /* [auto-meaningful-name] */t$payload$screenId = t$payload.screenId
  var /* [auto-meaningful-name] */t$payload$snapshot = t$payload.snapshot
  var i = e.screens.findIndex(function (e) {
    return e.id === t$payload$screenId
  })
  return e.updateIn(["screens", i], function (e) {
    return e.set("snapshot", t$payload$snapshot)
  })
}
function $(e, t) {
  var /* [auto-meaningful-name] */t$payload$screenId = t.payload.screenId
  var r = e.screens.findIndex(function (e) {
    return e.id === t$payload$screenId
  })
  return r > -1 ? e.update("screens", function (e) {
    return e.delete(r)
  }) : e
}
function ee(e, t) {
  var /* [auto-meaningful-name] */t$payload = t.payload
  var /* [auto-meaningful-name] */t$payload$screenId = t$payload.screenId
  var /* [auto-meaningful-name] */t$payload$widgetId = t$payload.widgetId
  var /* [auto-meaningful-name] */t$payload$isInvisibleWidget = t$payload.isInvisibleWidget
  var a = e.screens.findIndex(function (e) {
    return e.id === t$payload$screenId
  })
  return a > -1 ? t$payload$isInvisibleWidget ? e.updateIn(["screens", a, "invisibleWidgetIds"], function (e) {
    return (e || []).concat(t$payload$widgetId)
  }) : e.updateIn(["screens", a, "widgetIds"], function (e) {
    return e.concat(t$payload$widgetId)
  }) : e
}
function te(e, t) {
  var /* [auto-meaningful-name] */t$payload = t.payload
  var /* [auto-meaningful-name] */t$payload$screenId = t$payload.screenId
  var /* [auto-meaningful-name] */t$payload$widgetIds = t$payload.widgetIds
  var /* [auto-meaningful-name] */t$payload$isInvisibleWidget = t$payload.isInvisibleWidget
  var s = e.screens.findIndex(function (e) {
    return e.id === t$payload$screenId
  })
  return t$payload$isInvisibleWidget ? e.updateIn(["screens", s, "invisibleWidgetIds"], function () {
    return Module_25.a(t$payload$widgetIds)
  }) : e.updateIn(["screens", s, "widgetIds"], function () {
    return Module_25.a(t$payload$widgetIds)
  })
}
function ne(e, t) {
  var /* [auto-meaningful-name] */t$payload = t.payload
  var /* [auto-meaningful-name] */t$payload$screenId = t$payload.screenId
  var /* [auto-meaningful-name] */t$payload$widgetId = t$payload.widgetId
  var /* [auto-meaningful-name] */t$payload$isInvisibleWidget = t$payload.isInvisibleWidget
  var a = e.screens.findIndex(function (e) {
    return e.id === t$payload$screenId
  })
  return a > -1 ? (t$payload$widgetId === e.selectedWidgetId && (e = e.set("selectedWidgetId", undefined)), t$payload$isInvisibleWidget ? e.updateIn(["screens", a, "invisibleWidgetIds"], function (e) {
    return e.filter(function (e) {
      return e !== t$payload$widgetId
    })
  }) : e.updateIn(["screens", a, "widgetIds"], function (e) {
    return e.filter(function (e) {
      return e !== t$payload$widgetId
    })
  })) : e
}
function re(e, t) {
  var /* [auto-meaningful-name] */t$payload$widgetId = t.payload.widgetId
  if (t$payload$widgetId === e.selectedWidgetId) {
    e = e.set("selectedWidgetId", undefined)
  }
  return e.update("globalWidgetIds", function (e) {
    return e.filter(function (e) {
      return e !== t$payload$widgetId
    })
  })
}
function oe(e, t) {
  var /* [auto-meaningful-name] */t$payload = t.payload
  var /* [auto-meaningful-name] */t$payload$variableType = t$payload.variableType
  var /* [auto-meaningful-name] */t$payload$id = t$payload.id
  var /* [auto-meaningful-name] */t$payload$name = t$payload.name
  var /* [auto-meaningful-name] */t$payload$defaultValue = t$payload.defaultValue
  var /* [auto-meaningful-name] */t$payload$screenId = t$payload.screenId
  var /* [auto-meaningful-name] */t$payload$index = t$payload.index
  if (t$payload$variableType === Module_18.i.GLOBAL) {
    return e.updateIn(["globalVariableList"], function (e) {
      e.splice(t$payload$index, 0, {
        id: t$payload$id,
        name: t$payload$name,
        defaultValue: t$payload$defaultValue,
        value: t$payload$defaultValue
      })
      return Module_25.a(e)
    })
  }
  var d = e.screens.findIndex(function (e) {
    return e.id === t$payload$screenId
  })
  return d > -1 ? e.updateIn(["screens", d, "primitiveVariables"], function (e) {
    e.splice(t$payload$index, 0, {
      id: t$payload$id,
      name: t$payload$name,
      defaultValue: t$payload$defaultValue,
      value: t$payload$defaultValue
    })
    return Module_25.a(e)
  }) : e
}
function ie(e, t) {
  var /* [auto-meaningful-name] */t$payload = t.payload
  var /* [auto-meaningful-name] */t$payload$variableType = t$payload.variableType
  var /* [auto-meaningful-name] */t$payload$id = t$payload.id
  var /* [auto-meaningful-name] */t$payload$name = t$payload.name
  var /* [auto-meaningful-name] */t$payload$screenId = t$payload.screenId
  if (t$payload$variableType === Module_18.i.GLOBAL) {
    var s = e.getIn(["globalVariableList"]).findIndex(function (e) {
      return e.id === t$payload$id
    })
    if (s > -1) {
      return e.setIn(["globalVariableList", s, "name"], t$payload$name)
    }
  }
  var c = e.screens.findIndex(function (e) {
    return e.id === t$payload$screenId
  })
  var u = e.getIn(["screens", c, "primitiveVariables"]).findIndex(function (e) {
    return e.id === t$payload$id
  })
  return c > -1 ? e.setIn(["screens", c, "primitiveVariables", u, "name"], t$payload$name) : e
}
function ae(e, t) {
  var /* [auto-meaningful-name] */t$payload = t.payload
  var /* [auto-meaningful-name] */t$payload$scopeType = t$payload.scopeType
  var /* [auto-meaningful-name] */t$payload$id = t$payload.id
  var /* [auto-meaningful-name] */t$payload$name = t$payload.name
  var /* [auto-meaningful-name] */t$payload$screenId = t$payload.screenId
  if (t$payload$scopeType === Module_18.i.GLOBAL) {
    var s = e.getIn(["globalObjectList"]).findIndex(function (e) {
      return e.id === t$payload$id
    })
    if (s > -1) {
      return e.setIn(["globalObjectList", s, "name"], t$payload$name)
    }
  }
  var c = e.screens.findIndex(function (e) {
    return e.id === t$payload$screenId
  })
  var u = e.getIn(["screens", c, "objectVariables"]).findIndex(function (e) {
    return e.id === t$payload$id
  })
  return c > -1 ? e.setIn(["screens", c, "objectVariables", u, "name"], t$payload$name) : e
}
function se(e, t) {
  var /* [auto-meaningful-name] */t$payload = t.payload
  var /* [auto-meaningful-name] */t$payload$variableType = t$payload.variableType
  var /* [auto-meaningful-name] */t$payload$id = t$payload.id
  var /* [auto-meaningful-name] */t$payload$defaultValue = t$payload.defaultValue
  var /* [auto-meaningful-name] */t$payload$screenId = t$payload.screenId
  if (t$payload$variableType === Module_18.i.GLOBAL) {
    var s = e.getIn(["globalVariableList"]).findIndex(function (e) {
      return e.id === t$payload$id
    })
    if (s > -1) {
      return e.setIn(["globalVariableList", s, "defaultValue"], t$payload$defaultValue).setIn(["globalVariableList", s, "value"], t$payload$defaultValue)
    }
  }
  var c = e.screens.findIndex(function (e) {
    return e.id === t$payload$screenId
  })
  var u = e.getIn(["screens", c, "primitiveVariables"]).findIndex(function (e) {
    return e.id === t$payload$id
  })
  return c > -1 ? e.setIn(["screens", c, "primitiveVariables", u, "defaultValue"], t$payload$defaultValue).setIn(["screens", c, "primitiveVariables", u, "value"], t$payload$defaultValue) : e
}
function ce(e, t) {
  var /* [auto-meaningful-name] */t$payload = t.payload
  var /* [auto-meaningful-name] */t$payload$scopeType = t$payload.scopeType
  var /* [auto-meaningful-name] */t$payload$id = t$payload.id
  var /* [auto-meaningful-name] */t$payload$defaultValue = t$payload.defaultValue
  var /* [auto-meaningful-name] */t$payload$screenId = t$payload.screenId
  if (t$payload$scopeType === Module_18.i.GLOBAL) {
    var s = e.getIn(["globalObjectList"]).findIndex(function (e) {
      return e.id === t$payload$id
    })
    if (s > -1) {
      return e.setIn(["globalObjectList", s, "defaultValue"], t$payload$defaultValue).setIn(["globalObjectList", s, "value"], t$payload$defaultValue)
    }
  }
  var c = e.screens.findIndex(function (e) {
    return e.id === t$payload$screenId
  })
  var u = e.getIn(["screens", c, "objectVariables"]).findIndex(function (e) {
    return e.id === t$payload$id
  })
  return c > -1 ? e.setIn(["screens", c, "objectVariables", u, "defaultValue"], t$payload$defaultValue).setIn(["screens", c, "objectVariables", u, "value"], t$payload$defaultValue) : e
}
function le(e, t) {
  var /* [auto-meaningful-name] */t$payload = t.payload
  var /* [auto-meaningful-name] */t$payload$variableType = t$payload.variableType
  var /* [auto-meaningful-name] */t$payload$id = t$payload.id
  var /* [auto-meaningful-name] */t$payload$screenId = t$payload.screenId
  if (t$payload$variableType === Module_18.i.GLOBAL) {
    return e.updateIn(["globalVariableList"], function (e) {
      return e.filter(function (e) {
        return e.id !== t$payload$id
      })
    })
  }
  var a = e.screens.findIndex(function (e) {
    return e.id === t$payload$screenId
  })
  return a > -1 ? e.updateIn(["screens", a, "primitiveVariables"], function (e) {
    return e.filter(function (e) {
      return e.id !== t$payload$id
    })
  }) : e
}
function ue(e, t) {
  var /* [auto-meaningful-name] */t$payload = t.payload
  var /* [auto-meaningful-name] */t$payload$arrayType = t$payload.arrayType
  var /* [auto-meaningful-name] */t$payload$id = t$payload.id
  var /* [auto-meaningful-name] */t$payload$name = t$payload.name
  var /* [auto-meaningful-name] */t$payload$defaultValue = t$payload.defaultValue
  var /* [auto-meaningful-name] */t$payload$screenId = t$payload.screenId
  var /* [auto-meaningful-name] */t$payload$index = t$payload.index
  if (t$payload$arrayType === Module_18.i.GLOBAL) {
    return e.updateIn(["globalArrayList"], function (e) {
      e.splice(t$payload$index, 0, {
        id: t$payload$id,
        name: t$payload$name,
        defaultValue: t$payload$defaultValue,
        value: t$payload$defaultValue
      })
      return Module_25.a(e)
    })
  }
  var d = e.screens.findIndex(function (e) {
    return e.id === t$payload$screenId
  })
  return d > -1 ? e.updateIn(["screens", d, "arrayVariables"], function (e) {
    e.splice(t$payload$index, 0, {
      id: t$payload$id,
      name: t$payload$name,
      defaultValue: t$payload$defaultValue,
      value: t$payload$defaultValue
    })
    return Module_25.a(e)
  }) : e
}
function de(e, t) {
  var /* [auto-meaningful-name] */t$payload = t.payload
  var /* [auto-meaningful-name] */t$payload$scopeType = t$payload.scopeType
  var /* [auto-meaningful-name] */t$payload$screenId = t$payload.screenId
  var /* [auto-meaningful-name] */t$payload$index = t$payload.index
  var /* [auto-meaningful-name] */t$payload$id = t$payload.id
  var /* [auto-meaningful-name] */t$payload$name = t$payload.name
  var /* [auto-meaningful-name] */t$payload$defaultValue = t$payload.defaultValue
  if (t$payload$scopeType === Module_18.i.GLOBAL) {
    return e.updateIn(["globalObjectList"], function (e) {
      e.splice(t$payload$index, 0, {
        id: t$payload$id,
        name: t$payload$name,
        defaultValue: t$payload$defaultValue,
        value: t$payload$defaultValue
      })
      return Module_25.a(e)
    })
  }
  var d = e.screens.findIndex(function (e) {
    return e.id === t$payload$screenId
  })
  return d > -1 ? e.updateIn(["screens", d, "objectVariables"], function (e) {
    e.splice(t$payload$index, 0, {
      id: t$payload$id,
      name: t$payload$name,
      defaultValue: t$payload$defaultValue,
      value: t$payload$defaultValue
    })
    return Module_25.a(e)
  }) : e
}
function pe(e, t) {
  var /* [auto-meaningful-name] */t$payload = t.payload
  var /* [auto-meaningful-name] */t$payload$arrayType = t$payload.arrayType
  var /* [auto-meaningful-name] */t$payload$id = t$payload.id
  var /* [auto-meaningful-name] */t$payload$screenId = t$payload.screenId
  if (t$payload$arrayType === Module_18.i.GLOBAL) {
    return e.updateIn(["globalArrayList"], function (e) {
      return e.filter(function (e) {
        return e.id !== t$payload$id
      })
    })
  }
  var a = e.screens.findIndex(function (e) {
    return e.id === t$payload$screenId
  })
  return a > -1 ? e.updateIn(["screens", a, "arrayVariables"], function (e) {
    return e.filter(function (e) {
      return e.id !== t$payload$id
    })
  }) : e
}
function fe(e, t) {
  var /* [auto-meaningful-name] */t$payload = t.payload
  var /* [auto-meaningful-name] */t$payload$scopeType = t$payload.scopeType
  var /* [auto-meaningful-name] */t$payload$id = t$payload.id
  var /* [auto-meaningful-name] */t$payload$screenId = t$payload.screenId
  if (t$payload$scopeType === Module_18.i.GLOBAL) {
    return e.updateIn(["globalObjectList"], function (e) {
      return e.filter(function (e) {
        return e.id !== t$payload$id
      })
    })
  }
  var a = e.screens.findIndex(function (e) {
    return e.id === t$payload$screenId
  })
  return a > -1 ? e.updateIn(["screens", a, "objectVariables"], function (e) {
    return e.filter(function (e) {
      return e.id !== t$payload$id
    })
  }) : e
}
function he(e, t) {
  var /* [auto-meaningful-name] */t$payload = t.payload
  var /* [auto-meaningful-name] */t$payload$arrayType = t$payload.arrayType
  var /* [auto-meaningful-name] */t$payload$id = t$payload.id
  var /* [auto-meaningful-name] */t$payload$name = t$payload.name
  var /* [auto-meaningful-name] */t$payload$screenId = t$payload.screenId
  if (t$payload$arrayType === Module_18.i.GLOBAL) {
    var s = e.getIn(["globalArrayList"]).findIndex(function (e) {
      return e.id === t$payload$id
    })
    if (s > -1) {
      return e.setIn(["globalArrayList", s, "name"], t$payload$name)
    }
  }
  var c = e.screens.findIndex(function (e) {
    return e.id === t$payload$screenId
  })
  var u = e.getIn(["screens", c, "arrayVariables"]).findIndex(function (e) {
    return e.id === t$payload$id
  })
  return c > -1 ? e.setIn(["screens", c, "arrayVariables", u, "name"], t$payload$name) : e
}
function me(e, t) {
  var /* [auto-meaningful-name] */t$payload = t.payload
  var /* [auto-meaningful-name] */t$payload$arrayType = t$payload.arrayType
  var /* [auto-meaningful-name] */t$payload$id = t$payload.id
  var /* [auto-meaningful-name] */t$payload$defaultValue = t$payload.defaultValue
  var /* [auto-meaningful-name] */t$payload$screenId = t$payload.screenId
  if (t$payload$arrayType === Module_18.i.GLOBAL) {
    var s = e.getIn(["globalArrayList"]).findIndex(function (e) {
      return e.id === t$payload$id
    })
    if (s > -1) {
      return e.setIn(["globalArrayList", s, "defaultValue"], t$payload$defaultValue).setIn(["globalArrayList", s, "value"], t$payload$defaultValue)
    }
  }
  var c = e.screens.findIndex(function (e) {
    return e.id === t$payload$screenId
  })
  var u = e.getIn(["screens", c, "arrayVariables"]).findIndex(function (e) {
    return e.id === t$payload$id
  })
  return c > -1 ? e.setIn(["screens", c, "arrayVariables", u, "defaultValue"], t$payload$defaultValue).setIn(["screens", c, "arrayVariables", u, "value"], t$payload$defaultValue) : e
}
function ge(e, t) {
  var /* [auto-meaningful-name] */t$payload = t.payload
  var /* [auto-meaningful-name] */t$payload$from = t$payload.from
  var /* [auto-meaningful-name] */t$payload$to = t$payload.to
  var i = e.get("screens")
  var a = i.get(t$payload$from)
  var s = i.get(e.get("currentScreenIndex"))
  if (a && s) {
    var c = i.splice(t$payload$from, 1).splice(t$payload$to, 0, a)
    var l = c.indexOf(s)
    return e.set("screens", c).set("currentScreenIndex", l)
  }
  return e
}
function _e(e, t) {
  var /* [auto-meaningful-name] */t$payload = t.payload
  var /* [auto-meaningful-name] */t$payload$name = t$payload.name
  var /* [auto-meaningful-name] */t$payload$screenId = t$payload.screenId
  var /* [auto-meaningful-name] */t$payload$index = t$payload.index
  var s = e.screens.findIndex(function (e) {
    return e.id === t$payload$screenId
  })
  return s > -1 ? e.updateIn(["screens", s, "broadcasts"], function (e) {
    e.splice(t$payload$index, 0, t$payload$name)
    return Module_25.a(e)
  }) : e
}
function ve(e, t) {
  var /* [auto-meaningful-name] */t$payload = t.payload
  var /* [auto-meaningful-name] */t$payload$name = t$payload.name
  var /* [auto-meaningful-name] */t$payload$screenId = t$payload.screenId
  var i = e.screens.findIndex(function (e) {
    return e.id === t$payload$screenId
  })
  return i > -1 ? e.updateIn(["screens", i, "broadcasts"], function (e) {
    return e.filter(function (e) {
      return e !== t$payload$name
    })
  }) : e
}
function be(e, t) {
  var /* [auto-meaningful-name] */t$payload = t.payload
  return e.set("contextMenuInfo", Immutable.Record(t$payload)())
}
function ye(e) {
  return e.set("contextMenuInfo", H)
}
function Ee(e, t) {
  return e.set("styleDialog", Module_6.a({
    visible: true
  }, t.payload))
}
function Oe(e) {
  return e.set("styleDialog", Module_6.a({}, V))
}
function we(e, t) {
  return e.set("selectedWidgetId", t.payload.widgetId)
}
var Ce = function () {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : z
  var t = arguments.length > 1 ? arguments[1] : undefined
  switch (t.type) {
    case Src_editor_redux_common_actions.Te:
      return e.set("bcmUrl", t.payload.bcmUrl)
    case Src_editor_redux_common_actions.Rb:
      return e.set("title", t.payload.title)
    case Src_editor_redux_common_actions.Xc:
      return K(e, t)
    case Src_editor_redux_common_actions.Yc:
      return q(e, t)
    case Src_editor_redux_common_actions.Ve:
      return J(e, t)
    case Src_editor_redux_common_actions.Dc:
      return ge(e, t)
    case Src_editor_redux_common_actions.Ue:
      return Z(e, t)
    case Src_editor_redux_common_actions.We:
      return Q(e, t)
    case Src_editor_redux_common_actions.k:
      return X(e, t)
    case Src_editor_redux_common_actions.kc:
      return $(e, t)
    case Src_editor_redux_common_actions.j:
      return e.set("globalWidgetIds", e.globalWidgetIds.concat(t.payload.widgetId))
    case Src_editor_redux_common_actions.l:
      return ee(e, t)
    case Src_editor_redux_common_actions.Fe:
      return e.set("globalWidgetIds", t.payload.widgetIds)
    case Src_editor_redux_common_actions.He:
      return te(e, t)
    case Src_editor_redux_common_actions.Pc:
      return re(e, t)
    case Src_editor_redux_common_actions.Qc:
      return ne(e, t)
    case Src_editor_redux_common_actions.bd:
      return we(e, t)
    case Src_editor_redux_common_actions.Nd:
      return e.set("currentScreenIndex", t.payload)
    case Src_editor_redux_common_actions.Ie:
      return e.set("playing", true).set("playedAt", Date.now())
    case Src_editor_redux_common_actions.Je:
      return e.set("playing", false)
    case Src_editor_redux_common_actions.i:
      return oe(e, t)
    case Src_editor_redux_common_actions.jc:
      return le(e, t)
    case Src_editor_redux_common_actions.Ld:
      return ie(e, t)
    case Src_editor_redux_common_actions.Kd:
      return se(e, t)
    case Src_editor_redux_common_actions.a:
      return ue(e, t)
    case Src_editor_redux_common_actions.h:
      return de(e, t)
    case Src_editor_redux_common_actions.ic:
      return fe(e, t)
    case Src_editor_redux_common_actions.Dd:
      return ae(e, t)
    case Src_editor_redux_common_actions.Cd:
      return ce(e, t)
    case Src_editor_redux_common_actions.ec:
      return pe(e, t)
    case Src_editor_redux_common_actions.fd:
      return he(e, t)
    case Src_editor_redux_common_actions.ed:
      return me(e, t)
    case Src_editor_redux_common_actions.b:
      return _e(e, t)
    case Src_editor_redux_common_actions.fc:
      return ve(e, t)
    case Src_editor_redux_common_actions.Pb:
      return be(e, t)
    case Src_editor_redux_common_actions.Xb:
      return ye(e)
    case Src_editor_redux_common_actions.Vb:
      return Y()
    case Src_editor_redux_common_actions.Ge:
      return e.set("screens", t.payload.screens)
    case Src_editor_redux_common_actions.Jc:
      return Ee(e, t)
    case Src_editor_redux_common_actions.cc:
      return Oe(e)
    case Src_editor_redux_common_actions.Md:
      return e.set("apiToken", t.payload.token)
    case Src_editor_redux_common_actions.Td:
      return e.set("packageTaskLabel", t.payload.label)
    case Src_editor_redux_common_actions.Gd:
      return e.set("packageProgress", t.payload.packageProgress)
    case Src_editor_redux_common_actions.Jd:
      return e.set("isPackaging", t.payload.isPackaging).set("packageUrl", t.payload.packageUrl || null)
    case Src_editor_redux_common_actions.Hd:
      return e.set("packageProgressVisible", t.payload.packageProgressVisible)
    case Src_editor_redux_common_actions.Fd:
      return e.set("packageDialogVisible", t.payload.packageDialogVisible)
    case Src_editor_redux_common_actions.Id:
      return e.set("packageQrCodeVisible", t.payload.packageQrCodeVisible)
    case Src_editor_redux_common_actions.jd:
      return e.set("packageCompleteVisible", t.payload.packageCompleteVisible)
    case Src_editor_redux_common_actions.Ed:
      return e.update("packageInfo", function (e) {
        return Module_6.a(Module_6.a({}, e), t.payload)
      })
    case Src_editor_redux_common_actions.Yd:
      return e.update("projectShareInfo", function (e) {
        return Module_6.a(Module_6.a({}, e), t.payload)
      })
    case Src_editor_redux_common_actions.qd:
      return e.set("focusedWorkspaceArea", t.payload.area)
    case Src_editor_redux_common_actions.Pd:
      return e.set("jsonFrom", t.payload)
    case Src_editor_redux_common_actions.Zd:
      return e.set("projectSource", t.payload)
    default:
      return e
  }
}
var Te = {
  visible: false,
  data: [],
  title: "",
  widget: null,
  dbName: ""
}
var Se = Immutable.Record({
  dropdown: {
    type: Module_18.a.DYNAMIC_DROPDOWN,
    visible: false,
    options: [["", ""]],
    value: "",
    setValue: function (e) {},
    position: {
      left: -1e3,
      top: 0
    },
    blockInfo: {
      fieldWidth: 0,
      scale: 1,
      blockHeight: 0,
      sourceBlockId: "",
      fieldName: ""
    },
    onHide: function () {}
  },
  slider: {
    visible: false,
    value: "100",
    left: -1e3,
    top: 0,
    min: 0,
    max: 100,
    minText: "",
    maxText: "",
    setValue: function (e) {}
  },
  createVariableDialog: {
    visible: false,
    title: ""
  },
  commonInputDialog: {
    visible: false
  },
  editArrayDialog: {
    visible: false
  },
  editObjectDialog: {
    visible: false
  },
  storageDialogInfo: Module_6.a({}, Te),
  palette: {
    visible: false,
    value: "#000000ff",
    top: 0,
    left: 0,
    selectValue: function (e) {},
    setValue: function (e) {}
  },
  flyoutVisible: false,
  isBlockDragDeleteArea: false
})()
function Ae(e) {
  e.get("dropdown").onHide()
  return e.set("dropdown", Module_6.a({}, Se.dropdown))
}
var Ie = function () {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : Se
  var t = arguments.length > 1 ? arguments[1] : undefined
  switch (t.type) {
    case Src_editor_redux_common_actions.ke:
      return e.set("dropdown", Module_6.a({
        visible: true
      }, t.payload))
    case Src_editor_redux_common_actions.lc:
      return Ae(e)
    case Src_editor_redux_common_actions.se:
      return e.set("createVariableDialog", Module_6.a({
        visible: true
      }, t.payload))
    case Src_editor_redux_common_actions.qc:
      return e.set("createVariableDialog", Module_6.a({}, Se.createVariableDialog))
    case Src_editor_redux_common_actions.qe:
      return e.set("commonInputDialog", Module_6.a({
        visible: true
      }, t.payload))
    case Src_editor_redux_common_actions.oc:
      return e.set("commonInputDialog", Module_6.a({}, Se.createVariableDialog))
    case Src_editor_redux_common_actions.we:
      return e.set("editArrayDialog", Module_6.a({
        visible: true
      }, t.payload))
    case Src_editor_redux_common_actions.uc:
      return e.set("editArrayDialog", Module_6.a({}, Se.editArrayDialog))
    case Src_editor_redux_common_actions.xe:
      return e.set("editObjectDialog", Module_6.a({
        visible: true
      }, t.payload))
    case Src_editor_redux_common_actions.vc:
      return e.set("editObjectDialog", Module_6.a({}, Se.editObjectDialog))
    case Src_editor_redux_common_actions.ve:
      return e.set("storageDialogInfo", Module_6.a({
        visible: true
      }, t.payload))
    case Src_editor_redux_common_actions.tc:
      return e.set("storageDialogInfo", Module_6.a({}, Te))
    case Src_editor_redux_common_actions.le:
      return e.set("slider", Module_6.a({
        visible: true
      }, t.payload))
    case Src_editor_redux_common_actions.mc:
      return e.set("slider", Module_6.a({}, Se.slider))
    case Src_editor_redux_common_actions.Oe:
      return e.setIn(["slider", "value"], t.payload.value)
    case Src_editor_redux_common_actions.me:
      return e.set("palette", Module_6.a({
        visible: true
      }, t.payload))
    case Src_editor_redux_common_actions.nc:
      return e.set("palette", {
        colorList: undefined,
        visible: false,
        value: "#000000ff",
        top: 0,
        left: 0,
        selectValue: function (e) {},
        setValue: function (e) {}
      })
    case Src_editor_redux_common_actions.pd:
      return e.set("flyoutVisible", t.payload)
    case Src_editor_redux_common_actions.zd:
      return e.set("isBlockDragDeleteArea", t.payload)
    default:
      return e
  }
}
export { Ce }
export { Ie }
