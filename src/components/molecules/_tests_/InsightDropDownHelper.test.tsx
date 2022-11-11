import { render, screen } from '@testing-library/react'
import InsightDropDownHelper from '../InsightDropDownHelper'

describe('InsightDropDownHelper component', () => {
  test('should render helper with text', () => {
    render(<InsightDropDownHelper>Some Text</InsightDropDownHelper>)
    expect(screen.getByTestId('insightDropDownHelper')).toBeInTheDocument()
    expect(
      screen.getByTestId('insightDrowDownHelper-title'),
    ).toBeInTheDocument()
    expect(
      screen.getByTestId('insightDrowDownHelper-description'),
    ).toBeInTheDocument()
  })
})
