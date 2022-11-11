import { render, screen } from '@testing-library/react'
import InsightTable from '../InsightTable'

describe('InsightTable component', () => {
  test('should render table', () => {
    render(<InsightTable data={[]} columns={[]} />)
    expect(screen.getByTestId('insightTable')).toBeInTheDocument()
  })
})
