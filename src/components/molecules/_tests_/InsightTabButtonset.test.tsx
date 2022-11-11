import { render, screen } from '@testing-library/react'
import InsightTabButtonset from '../InsightTabButtonset'

describe('InsightTabButtonset component', () => {
  const args = {
    items: [
      {
        currentTab: true,
        label: 'Tab Label',
      },
    ],
  }
  test('should render set of tab buttons', () => {
    render(<InsightTabButtonset {...args} />)
    expect(screen.getByTestId('tabButtonSet')).toBeInTheDocument()
  })
})
