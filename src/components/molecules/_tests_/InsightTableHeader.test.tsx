/* eslint-disable testing-library/no-node-access */
import { render, screen } from '@testing-library/react'
import InsightTableHeader from '../InsightTableHeader'
import { academicColumns } from '../../../stories/data/academics'

const columns = academicColumns

describe('InsightTableHeader component', () => {
  test('should render table headers', () => {
    render(<InsightTableHeader columns={columns} />)
    expect(screen.getByTestId('insightTableHeader')).toBeInTheDocument()
  })
})
