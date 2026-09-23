import type { Blink as Blink_0 } from "../../../../shared/packages/@crc/blink/src"
import type { BlockProfileManager } from "../manager/profile"
import type { BlockSnippetManager } from "../manager/snippet"
import type { BlockXMLManager } from "../manager/xml"

export interface IBlockDeclareGroup {
  setBlockGroupProfile(manager: BlockProfileManager, Blink: typeof Blink_0, dropdownField): void
  setBlockGroupSnippet?(manager: BlockSnippetManager): void
  setBlockGroupXML?(manager: BlockXMLManager, Blink: typeof Blink_0): void
  setBlockGroupExtra?(Blink: typeof Blink_0, dropdownField): void
}
