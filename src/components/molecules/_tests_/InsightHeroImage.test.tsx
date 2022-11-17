import { render, screen } from '@testing-library/react'
import InsightHeroImage from '../InsightHeroImage'

describe('InsightHreoImage component', () => {
  const args = {
    image: 'https://source.unsplash.com/random/680x340',
    altText: 'Hero Alt Text',
    title: 'Hero Title',
    buttonText: 'Button Text',
    onClick: jest.fn(),
  }
  test('should render hero image', () => {
    render(<InsightHeroImage {...args} />)
    expect(screen.getByTestId('insightHeroImage')).toBeInTheDocument()
  })
})
