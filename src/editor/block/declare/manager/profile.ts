/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：46__part-0
 */

export class BlockProfileManager {

  private readonly profileMap: Map<string, (/** TODO */any)>

  public constructor() {
    this.profileMap = new Map()
  }

  public insertBlockProfile(type: string, profile) {
    this.profileMap.set(type, profile)
  }

  public getBlockProfileList() {
    const profileList = []
    this.profileMap.forEach((profile)=> profileList.push(profile))
    return profileList
  }
}
