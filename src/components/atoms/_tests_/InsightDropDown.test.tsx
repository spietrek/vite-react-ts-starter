import { render, screen } from '@testing-library/react'
import InsightDropDown from '../InsightDropDown'

describe('InsightDropDown component', () => {
  const dropdownText = 'Hello World'
  const menuItemText = 'Menu Item'
  const args = {
    menuItems: <li>{menuItemText}</li>,
  }

  test('should render a dropdown', () => {
    render(<InsightDropDown {...args}>{dropdownText}</InsightDropDown>)
    expect(screen.getByText(dropdownText)).toBeInTheDocument()
    expect(screen.getByTestId('insightDropDown-icon')).toBeInTheDocument()
    expect(screen.getByText(menuItemText)).toBeInTheDocument()
  })

  describe('when menuItems are not defined', () => {
    test('should not render a visible menu', () => {
      render(
        <InsightDropDown {...args} menuItems={undefined}>
          {dropdownText}
        </InsightDropDown>,
      )
      expect(
        screen.getByTestId('insightDropDown-menuItems'),
      ).toBeEmptyDOMElement()
    })
  })

  describe('when disabled', () => {
    test('should have a class of "btn-disabled"', () => {
      render(
        <InsightDropDown {...args} disabled>
          {dropdownText}
        </InsightDropDown>,
      )
      expect(screen.getByText(dropdownText)).toHaveClass('btn-disabled')
    })
  })

  describe('when enabled', () => {
    test('should not have a class of "btn-disabled"', () => {
      render(<InsightDropDown {...args}>{dropdownText}</InsightDropDown>)
      expect(screen.getByText(dropdownText)).not.toHaveClass('btn-disabled')
    })
  })

  describe('when full width', () => {
    test('should have a class of "w-full"', () => {
      render(
        <InsightDropDown {...args} fullWidth>
          {dropdownText}
        </InsightDropDown>,
      )
      expect(screen.getByText(dropdownText)).toHaveClass('w-full')
    })
  })

  describe('when not full width', () => {
    test('should not have a class of "w-full"', () => {
      render(<InsightDropDown {...args}>{dropdownText}</InsightDropDown>)
      expect(screen.getByText(dropdownText)).not.toHaveClass('w-full')
    })
  })
})
