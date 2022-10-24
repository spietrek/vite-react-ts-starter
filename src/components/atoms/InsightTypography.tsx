import type { PropsWithChildren } from 'react'
import clsx from 'clsx'
import { isHeadingTypography } from '../../types/common/typography.type'
import type {
  Alignments,
  Typographies,
} from '../../types/common/typography.type'

interface IProps {
  align?: Alignments
  bold?: boolean
  className?: string
  children?: React.ReactNode
  level?: Typographies
  uppercase?: boolean
}

const InsightTypography = ({
  align = 'inherit',
  bold = false,
  children = 'Not Provided',
  className = '',
  level = 'h3',
  uppercase = false,
}: PropsWithChildren<IProps>): JSX.Element => {
  const boldClass = bold ? 'font-bold' : 'font-normal'
  const uppercaseClass = uppercase ? 'uppercase' : ''
  const textAlignClass = align === 'inherit' ? '' : `text-${align}`

  if (isHeadingTypography(level)) {
    const Heading = level

    return (
      <Heading
        className={clsx(className, boldClass, textAlignClass, uppercaseClass)}
      >
        {children}
      </Heading>
    )
  }

  const fontSizeClass = level === 'body1' ? 'text-base' : 'text-sm'

  return (
    <p
      className={clsx(
        className,
        boldClass,
        fontSizeClass,
        textAlignClass,
        uppercaseClass,
      )}
    >
      {children}
    </p>
  )
}

export default InsightTypography
