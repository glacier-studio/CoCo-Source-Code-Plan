export class BlockXMLManager {

  private readonly xmlMap: Map<string, { xml: string | string[], notCached: boolean }>

  public constructor() {
    this.xmlMap = new Map()
  }

  public insertBlockXML(type: string, xml: string | string[] = "", notCached = false) {
    this.xmlMap.set(type, { xml, notCached })
  }

  public getBlockXMLRecord() {
    const XMRecord: Record<string, string> = {}
    this.xmlMap.forEach((item, type) => {
      const { xml, notCached } = item
      let block = ""
      if (typeof xml === "string") {
        block = `<block type="${type}" uncache="${notCached}">${xml}</block>`
      } else {
        xml.forEach((line) => {
          block += `<block type="${type}">${line}</block> <sep gap="15"></sep>`
        })
      }
      XMRecord[type] = block
    })
    return XMRecord
  }
}
