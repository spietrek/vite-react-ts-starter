import type { PropsWithChildren } from 'react'
import clsx from 'clsx'
import { isHeadingTypography } from '../../constants/common/typography'
import type {
  TEXT_ALIGNMENT,
  TYPOGRAPHY,
} from '../../constants/common/typography'

interface IProps {
  align?: typeof TEXT_ALIGNMENT[number]
  bold?: boolean
  className?: string
  children?: React.ReactNode
  level?: typeof TYPOGRAPHY[number]
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
  const isHeadingLevel = isHeadingTypography(level)

  if (isHeadingLevel) {
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
