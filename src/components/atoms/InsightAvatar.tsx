import type { PropsWithChildren } from 'react'
import clsx from 'clsx'

type AvatarVariants = 'square' | 'circle'

interface IProps {
  alt?: string
  src?: string
  variant?: AvatarVariants
}

const InsightAvatar = ({
  alt = '',
  src = '',
  variant = 'circle',
}: PropsWithChildren<IProps>): JSX.Element => {
  const classNames = clsx(
    'w-10',
    variant === 'square' ? 'rounded' : 'rounded-full',
  )

  return (
    <div className="avatar">
      <div className={classNames} data-testid="insightAvatar">
        <img alt={alt} src={src} />
      </div>
    </div>
  )
}

export default InsightAvatar
