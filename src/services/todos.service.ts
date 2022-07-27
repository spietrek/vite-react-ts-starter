import { AxiosResponse } from 'axios'
import http from './http.service'

export interface ITodosData {
  userId: number
  id: number
  title: string
  completed: boolean
}

class TodosDataService {
  async getAll(): Promise<AxiosResponse<ITodosData[]>> {
    return await http.get('https://jsonplaceholder.typicode.com/todos')
  }
}

export default new TodosDataService()
