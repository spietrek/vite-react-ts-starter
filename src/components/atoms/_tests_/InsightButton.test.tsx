import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import InsightButton from '../InsightButton'

test('should render a button with text', () => {
  render(<InsightButton>Hello World</InsightButton>)
  expect(screen.getByText('Hello World')).toBeInTheDocument()
})

test('should display a disabled button', () => {
  render(<InsightButton disabled>Hello World</InsightButton>)
  expect(screen.getByRole('button', { name: 'Hello World' })).toBeDisabled()
})

test('should be able to click on a button', async () => {
  const onClickMock = jest.fn()
  render(<InsightButton onClick={onClickMock}>Hello World</InsightButton>)
  const testButton = screen.getByRole('button', { name: 'Hello World' })
  expect(testButton).toBeEnabled()
  fireEvent.click(testButton)

  await waitFor(() => {
    expect(onClickMock).toHaveBeenCalledTimes(1)
  })
})
