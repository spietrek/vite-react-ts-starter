const AllVariants = {
  Default: 'default',
  Filled: 'filled',
  Outlined: 'outlined',
} as const

export type Variants = typeof AllVariants[keyof typeof AllVariants]

const AllSeverities = {
  Info: 'info',
  Success: 'success',
  Warning: 'warning',
  Error: 'error',
} as const

export type Severities = typeof AllSeverities[keyof typeof AllSeverities]

export type IconStatusType = 'inReview' | 'approved' | 'warning'

export type ButtonColors =
  | 'inherit'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'info'
  | 'warning'

export type ButtonSizes = 'small' | 'medium' | 'large'

export type ButtonVariants = 'text' | 'outlined' | 'contained'

export type ButtonAriaPopus =
  | boolean
  | 'dialog'
  | 'menu'
  | 'true'
  | 'false'
  | 'grid'
  | 'listbox'
  | 'tree'
  | undefined
