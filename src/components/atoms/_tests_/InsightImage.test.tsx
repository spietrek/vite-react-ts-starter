import { render, screen } from '@testing-library/react'
import InsightImage from '../InsightImage'

describe('InsightImage component', () => {
  const args = {
    src: '',
    altText: '',
  }

  test('should render an image', () => {
    render(<InsightImage {...args} />)
    expect(screen.getByTestId('insightImage')).toBeInTheDocument()
  })
})
