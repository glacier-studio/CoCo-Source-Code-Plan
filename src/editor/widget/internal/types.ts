import type React from "react"

import type { IBlockDeclareGroup } from "../../block/declare/group"
import type * as CustomWidget from "../../../shared/widget/custom/types"

type FirstParam<T extends (param0: any, ...args: any[]) => any> = T extends (param0: infer T) => any ? T : never

export interface Widget {
  type: string
  icon: string
  title: string
  contentTextField?: string
  hasAnyWidget?: boolean
  previewAreaWidgetTitle: string
  /**
   * 控件组件。对内置控件而言是一个 React 组建，对自定义控件而言则是控件实体
   */
  component: FirstParam<typeof React.createElement> | CustomWidget.Widget
  widget: {
    size: Size
    isGlobalWidget: boolean
    attributes: Attributes
  }
  editConfig: (EditConfig | EditConfig[])[]
  childWidgetEditConfig?: (EditConfig | EditConfig[])[]
  isInvisibleWidget: boolean
  blockConfig: BlockConfig
}

export interface Size {
  width: number
  height: number
}

export type Attributes = Record<string, any>

export interface EditConfig {
  type: "Align" | "TextInput" | "InputNumber" | "Color" | "VisibleSwitch" | "DisabledSwitch" | "InputMode" | "InputSizeType" | "InputTextGroup" | "InputSettingGroup" | "InputBackground" | "Coordinate" | "Size" | "TextArea" | "FontFamily" | "BackgroundColor" | "HorizontalAlign" | "VerticalAlign" | "ButtonSizeType" | "ButtonTextGroup" | "ButtonIconGroup" | "ButtonBackground" | "ButtonMode" | "ChangeImage" | "WidgetTitle" | "Headline" | "Options" | "RadioMode" | "RadioSizeType" | "CheckboxSizeType" | "SliderDirection" | "SwitchMode" | "SwitchSizeType" | "SwitchBackground" | "SliderMode" | "SliderRange" | "NumberInputRow" | "DegreeInputRow" | "FlipInputRow" | "ScaleInputRow" | "StyleEditorSwitch" | "AudioChangeSoundFile" | "AudioVolume" | "AudioRate" | "LocalStorageFields" | "HttpBody" | "HttpHeader" | "HttpParams" | "ListNewDataSource" | "ListViewerDataSource" | "ListViewerStyleTemplate" | "OptionSwitch" | "PreviewImage" | "Select" | "HelpUrl" | "CloudDbList" | "AntSwitch" | "WidgetOpacity" | "TextWidgetTextGroup" | "TableData" | "RichTextEditor" | "NumberSlider" | "BrushDrawProcess" | "BrushPenColor" | "DictFields" | "TableFields" | "WarningFields" | "BluetoothConnect" | "AqaraAuth"
  key?: string
  label?: string
  addonAfter?: string
  sizeRange?: [[number, number], [number, number]]
  url?: string
  hasDisableOrVisible?: boolean
  dropdown?: {label: string,value: string}[]
}

export interface BlockConfig {
  type: string
  category: {
    iconId: string
    blocks: string
  }
  /**
   * 获取积木模板，即积木盒中的积木
   * @param widgetId 控件实例 sID
   */
  getTemplate(widgetId: string): string[]
  blockDeclareGroup: IBlockDeclareGroup
  renameBlocksInfo: {
    blocksList: string[]
    fieldName: string
  }
  /**
   * 事件类积木
   */
  topBlocks: string[]
  categoryClass: {
    text: string
    iconId: string
    blocks: (/** TODO */any)[]
  }
}
