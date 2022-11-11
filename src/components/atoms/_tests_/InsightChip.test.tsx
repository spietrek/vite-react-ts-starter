import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { CHIP_VARIANT } from '../../../constants/common/chip'
import InsightChip from '../InsightChip'

describe('InsightChip component', () => {
  const chipText = 'Hello World'
  const args = {
    id: 1,
    label: chipText,
    variant: CHIP_VARIANT[0],
    onOpen: jest.fn(),
    onClose: jest.fn(),
  }

  test('should render an alert', () => {
    render(<InsightChip {...args} />)
    expect(screen.getByText(chipText)).toBeInTheDocument()
    expect(screen.getByTestId('insightChip-closeButton')).toBeInTheDocument()
  })

  describe('when variant prop is "ghost"', () => {
    test('should display a border', () => {
      render(<InsightChip {...args} variant={CHIP_VARIANT[0]} />)
      expect(screen.getByTestId('insightChip')).toHaveClass('border')
    })
  })

  describe('when variant prop is not "ghost"', () => {
    test('should not display a border', () => {
      render(<InsightChip {...args} variant={CHIP_VARIANT[1]} />)
      expect(screen.getByTestId('insightChip')).toHaveClass('border-0')
    })
  })

  describe('when clicking the chip', () => {
    describe('when onOpen is defined', () => {
      test('should call the onOpen function', async () => {
        const onOpenMock = jest.fn()
        render(<InsightChip {...args} onOpen={onOpenMock} />)
        const testButton = screen.getByTestId('insightChip-text')
        fireEvent.click(testButton)

        await waitFor(() => {
          expect(onOpenMock).toHaveBeenCalledTimes(1)
        })
      })
    })

    describe('when onOpen is not defined', () => {
      test('should not call the onOpen function', async () => {
        const onOpenMock = jest.fn()
        render(<InsightChip {...args} onOpen={undefined} />)
        const testButton = screen.getByTestId('insightChip-text')
        fireEvent.click(testButton)

        await waitFor(
          () => {
            expect(onOpenMock).toHaveBeenCalledTimes(0)
          },
          { timeout: 500 },
        )
      })
    })
  })

  describe('when clicking the close button', () => {
    describe('when onClose is defined', () => {
      test('should call the onClose function', async () => {
        const onCloseMock = jest.fn()
        render(<InsightChip {...args} onClose={onCloseMock} />)
        const closeButton = screen.getByTestId('insightChip-closeButton')
        fireEvent.click(closeButton)

        await waitFor(() => {
          expect(onCloseMock).toHaveBeenCalledTimes(1)
        })
      })
    })

    describe('when onClose is not defined', () => {
      test('should call the onClose function', async () => {
        const onCloseMock = jest.fn()
        render(<InsightChip {...args} onClose={undefined} />)
        const closeButton = screen.getByTestId('insightChip-closeButton')
        fireEvent.click(closeButton)

        await waitFor(
          () => {
            expect(onCloseMock).toHaveBeenCalledTimes(0)
          },
          { timeout: 500 },
        )
      })
    })
  })
})
