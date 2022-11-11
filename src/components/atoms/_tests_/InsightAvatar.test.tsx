import { render, screen } from '@testing-library/react'
import InsightAvatar from '../InsightAvatar'

describe('InsightAvatar component', () => {
  test('should render an avatar', () => {
    render(<InsightAvatar />)
    expect(screen.getByTestId('insightAvatar')).toBeInTheDocument()
  })

  describe('when variant prop is not passed', () => {
    test('should have a class of "rounded-full"', () => {
      render(<InsightAvatar />)
      expect(screen.getByTestId('insightAvatar')).toHaveClass('rounded-full')
    })

    test('should not have a class of "rounded"', () => {
      render(<InsightAvatar />)
      expect(screen.getByTestId('insightAvatar')).not.toHaveClass('rounded')
    })
  })

  describe('when variant is square', () => {
    test('should have a class of "rounded"', () => {
      render(<InsightAvatar variant="square" />)
      expect(screen.getByTestId('insightAvatar')).toHaveClass('rounded')
    })

    test('should not have a class of "rounded-full"', () => {
      render(<InsightAvatar variant="square" />)
      expect(screen.getByTestId('insightAvatar')).not.toHaveClass(
        'rounded-full',
      )
    })
  })

  describe('when variant is circle', () => {
    test('should have a class of "rounded-full"', () => {
      render(<InsightAvatar variant="circle" />)
      expect(screen.getByTestId('insightAvatar')).toHaveClass('rounded-full')
    })

    test('should not have a class of "rounded"', () => {
      render(<InsightAvatar variant="circle" />)
      expect(screen.getByTestId('insightAvatar')).not.toHaveClass('rounded')
    })
  })
})
