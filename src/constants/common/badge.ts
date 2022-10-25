export const BADGE_VARIANT = [
  'neutral',
  'outline',
  'primary',
  'secondary',
  'accent',
  'ghost',
  'info',
  'success',
  'warning',
  'error',
] as const

export const BADGE_SIZE = ['xs', 'sm', 'md', 'lg'] as const

export const BADGE_VARIANT_CONFIG = {
  neutral: '',
  outline: 'badge-outline',
  primary: 'badge-primary',
  secondary: 'badge-secondary',
  accent: 'badge-accent',
  ghost: 'badge-ghost',
  info: 'badge-info',
  success: 'badge-success',
  warning: 'badge-warning',
  error: 'badge-error',
}

export const BADGE_SIZE_CONFIG = {
  xs: 'badge-xs',
  sm: 'badge-sm',
  md: 'badge-md',
  lg: 'badge-lg',
}
