import type { ALERT_VARIANT } from '../../constants/common/alert'

export interface IAlert {
  id: number
  label: string
  variant: typeof ALERT_VARIANT[number]
  enabled: boolean
}
