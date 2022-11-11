import { render, screen } from '@testing-library/react'
import InsightAvatarWithText from '../InsightAvatarWithText'

describe('InsightAvatarWithText component', () => {
  const args = {
    title: 'Title',
    subtitle: 'Subtitle',
  }

  test('should render avatar image with appropriate text', () => {
    render(<InsightAvatarWithText avatar="assets/images/user.webp" {...args} />)
    expect(screen.getByText(args.title)).toBeInTheDocument()
    expect(screen.getByText(args.subtitle)).toBeInTheDocument()
  })
})
