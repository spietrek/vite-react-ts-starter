import type { PropsWithChildren } from 'react'
import clsx from 'clsx'
import {
  BADGE_VARIANT_CONFIG,
  BADGE_SIZE_CONFIG,
} from '../../constants/common/badge'
import type { BADGE_VARIANT, BADGE_SIZE } from '../../constants/common/badge'

interface IProps {
  children: React.ReactNode
  variant?: typeof BADGE_VARIANT[number]
  size?: typeof BADGE_SIZE[number]
}

const InsightBadge = ({
  variant = 'primary',
  size = 'md',
  children = '',
}: PropsWithChildren<IProps>): JSX.Element => {
  const variantClass = BADGE_VARIANT_CONFIG[variant]
  const sizeClass = BADGE_SIZE_CONFIG[size]
  const classNames = clsx('badge', variantClass, sizeClass)

  return (
    <div className={classNames} data-testid="insightBadge">
      {children}
    </div>
  )
}

export default InsightBadge
