import { AxiosResponse } from 'axios'
import http from './http.service'

class TodosDataService {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async getAll(): Promise<AxiosResponse<any, any>> {
    return await http.get('https://jsonplaceholder.typicode.com/todos')
  }
}

export default new TodosDataService()
