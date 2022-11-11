import { HomeIcon } from '@heroicons/react/24/outline'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import InsightIconButton from '../InsightIconButton'

describe('InsightIconButton component', () => {
  const icon = <HomeIcon className="h-5 w-5" />

  test('should render an icon button', () => {
    render(<InsightIconButton>{icon}</InsightIconButton>)
    expect(screen.getByTestId('insightIconButton')).toBeInTheDocument()
  })

  describe('when disabled', () => {
    test('should display a disabled button', () => {
      render(<InsightIconButton disabled>{icon}</InsightIconButton>)
      expect(screen.getByTestId('insightIconButton')).toBeDisabled()
    })

    test('should not be able to click on button', async () => {
      const onClickMock = jest.fn()
      render(
        <InsightIconButton onClick={onClickMock} disabled>
          {icon}
        </InsightIconButton>,
      )
      const testButton = screen.getByTestId('insightIconButton')
      expect(testButton).toBeDisabled()
      fireEvent.click(testButton)

      await waitFor(
        () => {
          expect(onClickMock).toHaveBeenCalledTimes(0)
        },
        { timeout: 500 },
      )
    })
  })

  describe('when enabled', () => {
    test('should display an enabled button', () => {
      render(<InsightIconButton>{icon}</InsightIconButton>)
      expect(screen.getByTestId('insightIconButton')).toBeEnabled()
    })

    test('should be able to click on button', async () => {
      const onClickMock = jest.fn()
      render(
        <InsightIconButton onClick={onClickMock}>{icon}</InsightIconButton>,
      )
      const testButton = screen.getByTestId('insightIconButton')
      expect(testButton).toBeEnabled()
      fireEvent.click(testButton)

      await waitFor(() => {
        expect(onClickMock).toHaveBeenCalledTimes(1)
      })
    })
  })
})
