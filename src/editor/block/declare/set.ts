/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：46__part-1
 */

import { BlockProfileManager } from "./manager/profile"
import { BlockSnippetManager } from "./manager//snippet"
import { BlockXMLManager } from "./manager/xml"
import type { IBlockDeclareGroup } from "./group"
import type { Blink  as Blink_0 } from "../../../shared/packages/@crc/blink/src"

let blockResources = {
  getWidgetListByType: function (e, t) {
    return []
  },
  getButtonTypeById: function (e) {
    return ""
  },
  getPrimitiveVariableList: function (e) {
    return []
  },
  getArrayVariableList: function (e) {
    return []
  },
  getObjectVariableList: function (e) {
    return []
  },
  getBroadcastList: function (e) {
    return []
  },
  getCloudDocumentList: function () {
    return []
  },
  getLocalDocumentList: function () {
    return []
  },
  getImageFiles: function () {
    return []
  },
  getIconFiles: function () {
    return []
  },
  getCloudDocumentFieldList: function (e, t) {
    return []
  },
  getLocalDocumentFieldList: function (e, t) {
    return []
  },
  getCloudDBList: function () {
    return []
  },
  getCloudDBColumnList: function (e, t) {
    return []
  },
  getCloudDictKeyList: function (e, t) {
    return []
  },
  getScreenList: function () {
    return []
  },
  dispatchAction: function () {},
  getActorActionList: function (e) {
    return []
  },
  getActorStyleList: function (e, t) {
    return []
  },
  getSoundFiles: function () {
    return []
  },
  getSliderVisible: function () {
    return false
  },
  getListViewerChildWidgetList: function (e, t) {
    return []
  },
  getGlobalGridList: function (e) {
    return []
  },
  getTableDataColumnList: function (e) {
    return []
  },
  getCloudTableColumnList: function (e, t) {
    return []
  }
}

export function getBlockResources() {
  return blockResources
}

export function setBlockResources(newBlockResources) {
  blockResources = newBlockResources
}

let profileManager = new BlockProfileManager()
let snippetManager = new BlockSnippetManager()
let XMLManager = new BlockXMLManager()

function setBlockGroup(Blink: typeof Blink_0, dropdownField, declare: IBlockDeclareGroup) {
  declare.setBlockGroupProfile(profileManager, Blink, dropdownField)
  if (declare.setBlockGroupSnippet) {
    declare.setBlockGroupSnippet(snippetManager)
  }
  if (declare.setBlockGroupXML) {
    declare.setBlockGroupXML(XMLManager, Blink)
  }
  if (declare.setBlockGroupExtra) {
    declare.setBlockGroupExtra(Blink, dropdownField)
  }
}

export function setBlockGroups(Blink: typeof Blink_0, dropdownField, ...declares: IBlockDeclareGroup[]) {
  declares.forEach(setBlockGroup.bind(undefined, Blink, dropdownField))
}

export function getBlockProfileList() {
  return profileManager.getBlockProfileList()
}

export function getBlockXMLRecord() {
  return XMLManager.getBlockXMLRecord()
}

export function getBlockSnippetManager() {
  return snippetManager
}
