export const STACK_DIRECTION = [
  'row',
  'row-reverse',
  'column',
  'column-reverse',
] as const

export const STACK_ALIGNMENT = [
  'flex-start',
  'center',
  'flex-end',
  'stretch',
  'baseline',
] as const

export const STACK_JUSTIFICATION = [
  'flex-start',
  'center',
  'flex-end',
  'space-between',
  'space-around',
  'space-evenly',
] as const

export const STACK_DIRECTION_CONFIG = {
  row: 'flex-row',
  'row-reverse': 'flex-row-reverse',
  column: 'flex-col',
  'column-reverse': 'flex-col-reverse',
}

export const STACK_ALIGNMENT_CONFIG = {
  'flex-start': 'items-start',
  center: 'items-center',
  'flex-end': 'items-end',
  stretch: 'items-stretch',
  baseline: 'items-baseline',
}

export const STACK_JUSTIFICATION_CONFIG = {
  'flex-start': 'justify-start',
  center: 'justify-center',
  'flex-end': 'justify-end',
  'space-between': 'justify-between',
  'space-around': 'justify-around',
  'space-evenly': 'justify-evenly',
}
