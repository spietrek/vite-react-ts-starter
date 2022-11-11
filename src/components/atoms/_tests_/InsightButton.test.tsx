import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import InsightButton from '../InsightButton'

describe('InsightButton component', () => {
  test('should render a button with text', () => {
    render(<InsightButton>Hello World</InsightButton>)
    expect(screen.getByText('Hello World')).toBeInTheDocument()
  })

  describe('when disabled', () => {
    test('should display a disabled button', () => {
      render(<InsightButton disabled>Hello World</InsightButton>)
      expect(screen.getByRole('button', { name: 'Hello World' })).toBeDisabled()
    })

    test('should not be able to click on button', async () => {
      const onClickMock = jest.fn()
      render(
        <InsightButton disabled onClick={onClickMock}>
          Hello World
        </InsightButton>,
      )
      const testButton = screen.getByRole('button', { name: 'Hello World' })
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
      render(<InsightButton>Hello World</InsightButton>)
      expect(screen.getByRole('button', { name: 'Hello World' })).toBeEnabled()
    })

    test('should be able to click on button', async () => {
      const onClickMock = jest.fn()
      render(<InsightButton onClick={onClickMock}>Hello World</InsightButton>)
      const testButton = screen.getByRole('button', { name: 'Hello World' })
      expect(testButton).toBeEnabled()
      fireEvent.click(testButton)

      await waitFor(() => {
        expect(onClickMock).toHaveBeenCalledTimes(1)
      })
    })
  })

  describe('when button is full width', () => {
    test('should have "w-full" class', () => {
      render(<InsightButton fullWidth>Hello World</InsightButton>)
      expect(screen.getByRole('button', { name: 'Hello World' })).toHaveClass(
        'w-full',
      )
    })
  })

  describe('when button is not full width', () => {
    test('should not have "w-full" class', () => {
      render(<InsightButton>Hello World</InsightButton>)
      expect(
        screen.getByRole('button', { name: 'Hello World' }),
      ).not.toHaveClass('w-full')
    })
  })

  describe('when button is loading', () => {
    test('should have "btn-loading" class', () => {
      render(<InsightButton loading>Hello World</InsightButton>)
      expect(screen.getByRole('button', { name: 'Hello World' })).toHaveClass(
        'btn-loading',
      )
    })
  })

  describe('when button is not loading', () => {
    test('should not have "btn-loading" class', () => {
      render(<InsightButton>Hello World</InsightButton>)
      expect(
        screen.getByRole('button', { name: 'Hello World' }),
      ).not.toHaveClass('btn-loading')
    })
  })

  describe('when startIcon is defined', () => {
    test('should be displayed', () => {
      render(<InsightButton startIcon={<span />}>Hello World</InsightButton>)
      expect(screen.getByTestId('insightButton-startIcon')).toBeInTheDocument()
    })
  })

  describe('when startIcon is not defined', () => {
    test('should not be displayed', () => {
      render(<InsightButton>Hello World</InsightButton>)
      expect(
        screen.queryByTestId('insightButton-startIcon'),
      ).not.toBeInTheDocument()
    })
  })

  describe('when endIcon is defined', () => {
    test('should be displayed', () => {
      render(<InsightButton endIcon={<span />}>Hello World</InsightButton>)
      expect(screen.getByTestId('insightButton-endIcon')).toBeInTheDocument()
    })
  })

  describe('when endIcon is not defined', () => {
    test('should not be displayed', () => {
      render(<InsightButton>Hello World</InsightButton>)
      expect(
        screen.queryByTestId('insightButton-endIcon'),
      ).not.toBeInTheDocument()
    })
  })
})
