import type { PropsWithChildren } from 'react'
import clsx from 'clsx'
import { BADGE_VARIANT_CONFIG, BADGE_SIZE_CONFIG } from '../../constants/badge'
import type { BadgeVariants, BadgeSizes } from '../../types/common/badge.type'

interface IProps {
  children: React.ReactNode
  variant?: BadgeVariants
  size?: BadgeSizes
}

const InsightBadge = ({
  variant = 'primary',
  size = 'md',
  children = '',
}: PropsWithChildren<IProps>): JSX.Element => {
  const variantClass = BADGE_VARIANT_CONFIG[variant]
  const sizeClass = BADGE_SIZE_CONFIG[size]
  const classNames = clsx('badge', variantClass, sizeClass)

  return <div className={classNames}>{children}</div>
}

export default InsightBadge
