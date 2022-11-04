import { render, screen } from '@testing-library/react'
import InsightTypography from './InsightTypography'

test('Show App Component', () => {
  render(<InsightTypography>Hello World</InsightTypography>)
  expect(screen.getByText('Hello World')).toBeInTheDocument()
})

test('that jest is working', () => {
  expect(true).toBe(true)
})
