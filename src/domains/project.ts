export enum ProjectGroupType {
  ungroup = 0,
  group = 1
}

export interface Project {
  id: number
  name: string
  share: string
  thumbnail: string
  groupId: number
  createAt: string
  updateAt: string
  config?: any
}

export class ProjectGroup {
  id: number
  name: string
  children: Project[]
  editing?: boolean

  constructor(id = 0, name = '', children: Project[] = []) {
    this.id = id
    this.name = name
    this.children = children
  }
}

export interface ProjectTemplate {
  id: number
  name: string
  description: string
  size: String[]
  snapshot: string
  thumbnail: string
  config: any
}
