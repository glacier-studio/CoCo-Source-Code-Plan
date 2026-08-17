/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-186
 */

"use strict"

import { bj } from "./index__part-182"
import { Tj } from "./index__part-183"
import { Dj } from "./index__part-185"
import * as /* [auto-meaningful-name] */Module_135 from /* 135 */"./135"
import * as /* [auto-meaningful-name] */Lodash from /* 30 */"lodash"
import * as /* [auto-meaningful-name] */Module_68 from /* 68 */"./68"
import * as /* [auto-meaningful-name] */Module_133 from /* 133 */"./133/index"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"./9"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import * as /* [auto-meaningful-name] */Module_25 from /* 25 */"./25/index"
import { useIntl } from /* 710 */"react-intl"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"./10/index"
import { useDispatch, useSelector } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo, useState } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_164 from /* 164 */"./164"
import /* [auto-meaningful-name] */Module_1641 from /* 164 */"./164"
var Pj = memo(function (e) {
  var /* [auto-meaningful-name] */e$mode = e.mode
  var /* [auto-meaningful-name] */e$searchName = e.searchName
  var /* [auto-meaningful-name] */e$selectedIds = e.selectedIds
  var /* [auto-meaningful-name] */e$canShowMultiply = e.canShowMultiply
  var /* [auto-meaningful-name] */e$selectHandler = e.selectHandler
  var /* [auto-meaningful-name] */useIntl$formatMessage = useIntl().formatMessage
  var s = useDispatch()
  var c = React.useState({})
  var l = Module_10.a(c, 2)[1]
  var u = React.useCallback(function () {
    return l({})
  }, [])
  var d = useState("")
  var p = Module_10.a(d, 2)
  var m = p[0]
  var g = p[1]
  var v = Module_25.a(Module_9.jb()).reverse()
  var b = useSelector(function (e) {
    return e.resource.iconFileList.reverse()
  })
  var y = useSelector(function (e) {
    return e.resource.soundFileList.reverse()
  })
  var E = function (e) {
    g(e)
  }
  return React.createElement("div", {
    className: Module_1641.LibraryMain
  }, React.createElement(Src_shared_ui_components_index.B, {
    className: Module_1641.uploadBtn,
    onChange: function (e) {
      if (e) {
        if (e$mode !== Module_68.c.ImageLibrary) {
          if (e$mode !== Module_68.c.SoundLibrary) {
            if (!(e$mode !== Module_68.c.IconLibrary)) {
              s(Src_editor_redux_common_actions.rf(e))
            }
          } else {
            s(Src_editor_redux_common_actions.wf(e))
          }
        } else {
          s(Src_editor_redux_common_actions.Zf(e, function () {
            u()
          }, true))
        }
      }
    },
    multiple: true,
    accept: e$mode === Module_68.c.ImageLibrary ? Module_133.f : e$mode === Module_68.c.SoundLibrary ? Module_135.h : e$mode === Module_68.c.IconLibrary ? "image/svg+xml" : ""
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-add2"
  }), React.createElement("span", null, useIntl$formatMessage({
    id: "Resource.upload"
  }))), function () {
    if (e$mode === Module_68.c.ImageLibrary) {
      var e = Lodash.cloneDeep(v)
      if (e$searchName) {
        e = e.filter(function (e) {
          return e.id.includes(e$searchName)
        })
      }
      return (e = e.filter(function (e) {
        return !e.groupId
      })).map(function (e) {
        return React.createElement(Dj, {
          key: e.id,
          id: e.id,
          cdnUrl: e.cdnUrl,
          source: e.source,
          extension: e.extension,
          md5: e.md5,
          urls: e.urls,
          canShowMultiply: e$canShowMultiply,
          isSelect: e$selectedIds.includes(e.id),
          selectHandler: e$selectHandler
        })
      })
    }
    if (e$mode === Module_68.c.SoundLibrary) {
      var a = Lodash.cloneDeep(y)
      if (e$searchName) {
        a = a.filter(function (e) {
          return e.name.includes(e$searchName)
        })
      }
      return a.map(function (e) {
        return React.createElement(Tj, {
          key: e.id,
          id: e.id,
          name: e.name,
          cdnUrl: e.cdnUrl,
          source: e.source,
          duration: e.duration,
          isSelect: e$selectedIds.includes(e.id),
          isPlaying: e.id === m,
          selectHandler: e$selectHandler,
          setSoundPlayingId: E
        })
      })
    }
    if (e$mode === Module_68.c.IconLibrary) {
      var s = Lodash.cloneDeep(b)
      if (e$searchName) {
        s = s.filter(function (e) {
          return e.name.includes(e$searchName)
        })
      }
      return s.map(function (e) {
        return React.createElement(bj, {
          key: e.id,
          id: e.id,
          md5: e.md5,
          name: e.name,
          source: e.source,
          cdnUrl: e.cdnUrl,
          isSelect: e$selectedIds.includes(e.id),
          selectHandler: e$selectHandler
        })
      })
    }
    return ""
  }())
})
export { Pj }
