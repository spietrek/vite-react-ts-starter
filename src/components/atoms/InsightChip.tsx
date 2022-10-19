import type { PropsWithChildren } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { clsx } from 'clsx'
import {
  CHIP_BGCOLOR_CONFIG,
  CHIP_HOVER_BGCOLOR_CONFIG,
} from '../../constants/chip'
import type { ChipVariants } from '../../types/common/chip.type'

interface IProps {
  id: number | string
  label: string
  onClose?: (id: number | string) => void
  onOpen?: (id: number | string) => void
  variant: ChipVariants
}

const InsightChip = ({
  id,
  label = '',
  onClose,
  onOpen,
  variant = 'ghost',
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
    <div className={classNames}>
      <div className="max-w-full text-sm leading-none" onClick={handleOpen}>
        {label}
      </div>
      <div className="flex flex-auto flex-row-reverse" onClick={handleClose}>
        <XMarkIcon className="ml-2 h-4 w-4 cursor-pointer rounded-full hover:text-red-500" />
      </div>
    </div>
  )
}

export default InsightChip
