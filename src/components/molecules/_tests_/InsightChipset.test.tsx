import { render, screen } from '@testing-library/react'
import { CHIP_VARIANT } from '../../../constants/common/chip'
import InsightChipset from '../InsightChipset'

describe('InsightChipSet component', () => {
  const args = {
    chips: [
      {
        id: 1,
        label: 'Chip Label',
        variant: CHIP_VARIANT[0],
      },
    ],
  }

  test('should render attachment chips', () => {
    render(<InsightChipset {...args} />)
    expect(screen.getByTestId('insightChipContainer')).toBeInTheDocument()
  })
})
