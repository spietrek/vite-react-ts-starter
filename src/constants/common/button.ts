export const BUTTON_VARIANT = [
  'primary',
  'secondary',
  'accent',
  'info',
  'success',
  'warning',
  'error',
  'ghost',
  'outline',
  'link',
] as const

export const BUTTON_TYPE = ['button', 'submit', 'reset'] as const

export const BUTTON_SIZE = ['tiny', 'small', 'medium', 'large'] as const

export const BUTTON_VARIANT_CONFIG = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  accent: 'btn-accent',
  info: 'btn-info',
  success: 'btn-success',
  warning: 'btn-warning',
  error: 'btn-error',
  ghost: 'btn-ghost',
  link: 'btn-link',
  outline: 'btn-outline',
}

export const BUTTON_SIZE_CONFIG = {
  tiny: 'btn-xs',
  small: 'btn-sm',
  medium: '',
  large: 'btn-lg',
}
