export type HeadingTypographies = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export type TextTypographies = 'body1' | 'body2'

export type Typographies = HeadingTypographies | TextTypographies

export type Alignments = 'inherit' | 'left' | 'center' | 'right' | 'justify'

const validHeadingTypographies: HeadingTypographies[] = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
]

type Heading = typeof validHeadingTypographies[number]

export const isHeadingTypography = (
  typography: Typographies,
): typography is Heading =>
  validHeadingTypographies.includes(typography as Heading)
