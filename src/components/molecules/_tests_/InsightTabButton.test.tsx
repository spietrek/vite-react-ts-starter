/* eslint-disable testing-library/no-node-access */
import { render, screen } from '@testing-library/react'
import InsightTabButton from '../InsightTabButton'

describe('InsightGaugeset component', () => {
  const args = {
    currentTab: true,
    label: 'Tab Label',
  }
  test('should render tab button', () => {
    render(<InsightTabButton {...args} />)
    expect(screen.getByTestId('tabButton')).toBeInTheDocument()
    expect(screen.getByText('Tab Label')).toBeInTheDocument()
  })

  describe('tab unselected', () => {
    test('should change variant of tab button', () => {
      render(<InsightTabButton {...args} currentTab={false} />)
      expect(screen.getByTestId('tabButton')).toBeInTheDocument()
      expect(screen.getByText('Tab Label')).toBeInTheDocument()
    })
  })
})
