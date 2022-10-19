export type AlertVariants = 'info' | 'success' | 'warning' | 'error'

export interface IAlert {
  id: number
  label: string
  variant: AlertVariants
  enabled: boolean
}
