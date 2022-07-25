import { AxiosResponse } from 'axios'
import ITodosData from '@/types/todos.type'
import http from './http.service'

class TodosDataService {
  async getAll(): Promise<AxiosResponse<ITodosData[]>> {
    return await http.get('https://jsonplaceholder.typicode.com/todos')
  }
}

export default new TodosDataService()
