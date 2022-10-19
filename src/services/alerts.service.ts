import http from './http.service'
import type { IAlert } from '../types/common/alert.type'
import type { AxiosResponse } from 'axios'

class AlertsDataService {
  async getAll(): Promise<AxiosResponse<IAlert[]>> {
    const result = await http.get('/db.json')
    const { alerts } = result.data as { alerts: IAlert[] }

    const alertsResult = {
      data: alerts ?? [],
      status: result.status,
      statusText: result.statusText,
      headers: result.headers,
      config: result.config,
    }

    return alerts !== null
      ? await Promise.resolve(alertsResult)
      : await Promise.reject(new Error('Alerts data not found'))
  }
}

export default new AlertsDataService()
