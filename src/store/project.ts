import { defineStore } from 'pinia'
import { cloneDeep } from 'lodash-es'
import { ProjectGroupType, ProjectGroup, Project } from '@/domains/project'
import * as api from '@/api/project'
import * as group from '@/api/group'

export interface IProjectState {
  allGroups: ProjectGroup[]
}

export const useProjectStore = defineStore('project', {
  state: (): IProjectState => ({
    allGroups: [],
  }),
  getters: {
    group(state) {
      const list = state.allGroups.flatMap(m => m.children)
      return new ProjectGroup(-1, '全部应用', list)
    },
    ungroup(state) {
      const g = state.allGroups.find(m => !m.id)
      return g ? g : new ProjectGroup(0, '未分组', [])
    },
    groups(state) {
      const g = state.allGroups.filter(m => !!m.id)
      return g
    },
  },
  actions: {
    async request() {
      try {
        // 展示全部组件示例
        const projectsRes = await api.getProjects()
        const groupsRes = await group.getProjectGroups()
        if (projectsRes.data.code === 200 && groupsRes.data.code === 200) {
          const projectList: Project[] = projectsRes.data.data || []
          const groupList: ProjectGroup[] = groupsRes.data.data || []
          groupList.forEach(groupItem => {
            groupItem.children = groupItem.children ||[]
          })
          // TODO: 如果用关系数据库就不用赋值 groupId
          const ungroup = new ProjectGroup(0, '未分组', [])
          projectList.forEach(projectItem => {
            let belongToGroup = false
            groupList.forEach(groupItem => {
              if(groupItem.id === projectItem.groupId){
                belongToGroup= true
                groupItem.children.push(projectItem)
              }
            })
            if( !belongToGroup ) {
              ungroup.children.push(projectItem)
            }
          })
          this.allGroups = [ungroup, ...groupList]
        } else {
          throw Error(projectsRes.data.message)
        }
      } catch (error) {
        throw error
      }
    },
    async delete(pid: number, gid: number) {
      try {
        const res = await api.deleteProject(pid)
        if (res.data.code === 200) {
          const g = this.allGroups.find(m => m.id === gid)
          if (g) {
            g.children = g.children.filter(m => m.id !== pid)
          }
        } else {
          throw Error(res.data.message)
        }
      } catch (error) {
        throw error
      }
    },
    async updateName(id: number, newName: string) {
      try {
        const res = await api.updateProject(id, { name: newName })
        if (res.data.code !== 0) {
          throw Error(res.data.message)
        }
      } catch (error) {
        throw error
      }
    },
    async move(pid: number, fromId: number, toId: number) {
      try {
        const res = await api.moveProject(pid, fromId, toId)
        if (res.data.code === 200) {
          const formG = this.allGroups.find(m => m.id === fromId)
          const toG = this.allGroups.find(m => m.id === toId)
          if (formG && toG) {
            const idx = formG.children.findIndex(m => m.id === pid)
            const p = formG.children.splice(idx, 1)[0]
            p.groupId = toId
            toG.children.push(p)
          }
        } else {
          throw Error(res.data.message)
        }
      } catch (error) {
        throw error
      }
    },
    async copy(pid: number, gid: number) {
      try {
        const res = await api.copyProject(pid)
        if (res.data.code === 200) {
          const g = this.allGroups.find(m => m.id === gid)
          if (g) {
            // TODO: 这里只是简单 cloneDeep，实际应该在后端完成
            const p = g.children.find(m => m.id === pid)
            const copy_p = cloneDeep(p)
            copy_p.id = Math.round(Math.random() * 1000)
            copy_p.name += '_copy'
            g.children.push(copy_p)
          }
        } else {
          throw Error(res.data.message)
        }
      } catch (error) {
        throw error
      }
    },
    async createGroup(name: string) {
      try {
        const { data } = await api.createProjectGroup({ name })
        if (data.code === 200) {
          const newGroup = new ProjectGroup(data.data, name, [])
          this.allGroups.unshift(newGroup)
        } else {
          throw Error(data.message)
        }
      } catch (error) {
        throw error
      }
    },
    async deleteGroup(id: number) {
      try {
        const res = await api.deleteProjectGroup(id)
        if (res.data.code === 200) {
          const idx = this.allGroups.findIndex(m => m.id === id)
          const ungroup = this.allGroups.find(m => !m.id)
          if (idx && ungroup) {
            const [group] = this.allGroups.splice(idx, 1)
            group.children.forEach(item => {
              item.groupId = ungroup.id
              ungroup.children.push(item)
            })
          }
        } else {
          throw Error(res.data.message)
        }
      } catch (error) {
        throw error
      }
    },
    async updateGroupName(id: number, newName: string) {
      try {
        const res = await api.updateProjectGroupName(id, newName)
        if (res.data.code !== 0) {
          throw Error(res.data.message)
        }
      } catch (error) {
        throw error
      }
    },
  },
})
