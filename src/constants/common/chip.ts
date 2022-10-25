export const CHIP_VARIANT = [
  'ghost',
  'info',
  'success',
  'warning',
  'error',
] as const

export const CHIP_BGCOLOR_CONFIG = {
  ghost: 'bg-transparent',
  info: 'bg-info',
  success: 'bg-success',
  warning: 'bg-warning',
  error: 'bg-error',
}

export const CHIP_HOVER_BGCOLOR_CONFIG = {
  ghost: 'hover:bg-gray-200 hover:dark:bg-gray-700',
  info: 'hover:brightness-110',
  success: 'hover:brightness-110',
  warning: 'hover:brightness-110',
  error: 'hover:brightness-110',
}
