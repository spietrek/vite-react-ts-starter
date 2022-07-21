import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import InsButton from './InsButton'

test('should render a button with text', () => {
  render(<InsButton>Hello World</InsButton>)
  expect(screen.getByText('Hello World')).toBeInTheDocument()
})

test('should display a disabled button', () => {
  render(<InsButton disabled>Hello World</InsButton>)
  expect(screen.getByRole('button', { name: 'Hello World' })).toBeDisabled()
})

test('should be able to click on a button', () => {
  render(<InsButton>Hello World</InsButton>)
  const testButton = screen.getByRole('button', { name: 'Hello World' })
  expect(testButton).not.toBeDisabled()
  userEvent.click(testButton)
})
