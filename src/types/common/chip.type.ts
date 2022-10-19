export type ChipVariants = 'ghost' | 'info' | 'success' | 'warning' | 'error'

export interface IChip {
  id: number | string
  label: string
  url?: string
  variant: ChipVariants
}
