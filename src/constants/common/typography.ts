export const HEADING_TYPOGRAPHY = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const

export const TEXT_TYPOGRAPHY = ['body1', 'body2'] as const

export const TYPOGRAPHY = [...HEADING_TYPOGRAPHY, ...TEXT_TYPOGRAPHY] as const

export const TEXT_ALIGNMENT = [
  'inherit',
  'left',
  'center',
  'right',
  'justify',
] as const

type Heading = typeof HEADING_TYPOGRAPHY[number]

export const isHeadingTypography = (
  typography: typeof TYPOGRAPHY[number],
): typography is Heading => HEADING_TYPOGRAPHY.includes(typography as Heading)
