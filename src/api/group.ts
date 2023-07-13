import request from '@/utils/request'

export function getProjectGroups() {
  return request.get('/group')
}

export function createProjectGroup(data: any) {
  return request.post('/group', data)
}

export function deleteProjectGroup(id: number) {
  return request.delete(`/group/${id}`)
}

export function updateProjectGroupName(id: number, name: string) {
  return request.put(`/group/${id}/name`, { name })
}

export function getModules() {
  return request.post(`/group/modules`)
}
