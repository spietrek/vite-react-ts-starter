import { render, screen, fireEvent } from '@testing-library/react'
import InsightDarkModeToggle from '../InsightDarkModeToggle'

describe('InsightDarkModeToggle', () => {
  const args = {}

  test('should show dark mode', () => {
    render(<InsightDarkModeToggle {...args} />)
    expect(screen.getByTestId('insightLightMode')).toBeInTheDocument()
  })

  test('should show toggle button', () => {
    render(<InsightDarkModeToggle {...args} />)
    expect(screen.getByTestId('insightIconButton')).toBeInTheDocument()
  })

  describe('when light mode toggled', () => {
    test('should show light mode', () => {
      render(<InsightDarkModeToggle {...args} />)
      const testButton = screen.getByTestId('insightIconButton')
      fireEvent.click(testButton)
      expect(screen.getByTestId('insightDarkMode')).toBeInTheDocument()
    })
  })
})
