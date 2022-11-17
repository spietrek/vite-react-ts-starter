import type { PropsWithChildren } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { clsx } from 'clsx'
import {
  CHIP_BGCOLOR_CONFIG,
  CHIP_HOVER_BGCOLOR_CONFIG,
} from '../../constants/common/chip'
import type { CHIP_VARIANT } from '../../constants/common/chip'

interface IProps {
  id: number | string
  label: string
  variant: typeof CHIP_VARIANT[number]
  onOpen?: (id: number | string) => void
  onClose?: (id: number | string) => void
}

const InsightChip = ({
  id,
  label,
  variant,
  onOpen,
  onClose,
}: PropsWithChildren<IProps>): JSX.Element => {
  const variantClass = CHIP_BGCOLOR_CONFIG[variant]
  const hoverClass = CHIP_HOVER_BGCOLOR_CONFIG[variant]
  const borderClass = variant === 'ghost' ? 'border' : 'border-0'
  const classNames = clsx(
    'm-1 flex items-center rounded-full py-1 px-2 hover:cursor-pointer',
    variantClass,
    hoverClass,
    borderClass,
  )

  const handleOpen = (): void => {
    if (onOpen !== undefined) {
      onOpen(id)
    }
  }

  const handleClose = (): void => {
    if (onClose !== undefined) {
      onClose(id)
    }
  }

  return (
    <div className={classNames} data-testid="insightChip">
      <div
        className="max-w-full text-sm leading-none"
        onClick={handleOpen}
        data-testid="insightChip-text"
      >
        {label}
      </div>
      <div
        className="flex flex-auto flex-row-reverse"
        onClick={handleClose}
        data-testid="insightChip-closeButton"
      >
        <XMarkIcon className="hover:text-fail ml-2 h-4 w-4 cursor-pointer rounded-full" />
      </div>
    </div>
  )
}

export default InsightChip
