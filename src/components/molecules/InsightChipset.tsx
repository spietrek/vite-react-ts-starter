import type { PropsWithChildren } from 'react'
import InsightChip from '../atoms/InsightChip'
import type { IChip } from '../../types/common/chip.type'

interface IProps {
  chips: IChip[]
  onClose?: (id: number | string) => void
  onOpen?: (id: number | string) => void
}

const InsightChipset = ({
  chips,
  onClose,
  onOpen,
}: PropsWithChildren<IProps>): JSX.Element => (
  <div className="flex">
    {chips.map(chip => (
      <div key={chip.id} className="mr-2" data-testid="insightChipset">
        <InsightChip
          id={chip.id}
          label={chip.label}
          variant={chip.variant}
          onOpen={onOpen}
          onClose={onClose}
        />
      </div>
    ))}
  </div>
)

export default InsightChipset
