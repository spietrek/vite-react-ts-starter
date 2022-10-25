import type { CHIP_VARIANT } from '../../constants/common/chip'
export interface IChip {
  id: number | string
  label: string
  url?: string
  variant: typeof CHIP_VARIANT[number]
}
