import { render, screen } from '@testing-library/react'
import InsightStack from '../InsightStack'

describe('InsightStack component', () => {
  const args = {
    children: ['item1', 'item2'],
  }

  test('should render a list of items', () => {
    render(<InsightStack {...args} />)
    expect(screen.getByTestId('insightStack')).toBeInTheDocument()
    expect(screen.queryAllByTestId('insightStack-child')).toHaveLength(2)
  })

  describe('when divider prop is true', () => {
    test('should not include any alignment classes', () => {
      render(<InsightStack {...args} divider />)
      expect(screen.getByTestId('insightStack')).not.toHaveClass('items-start')
      expect(screen.getByTestId('insightStack')).not.toHaveClass('items-center')
      expect(screen.getByTestId('insightStack')).not.toHaveClass('items-end')
      expect(screen.getByTestId('insightStack')).not.toHaveClass(
        'items-stretch',
      )
      expect(screen.getByTestId('insightStack')).not.toHaveClass(
        'items-baseline',
      )
    })
  })

  describe('when direction prop is "row"', () => {
    test('should have a class of "flex-row"', () => {
      render(<InsightStack {...args} direction="row" />)
      expect(screen.getByTestId('insightStack')).toHaveClass('flex-row')
    })
  })

  describe('when direction prop is "row-reverse"', () => {
    test('should have a class of "flex-row-reverse"', () => {
      render(<InsightStack {...args} direction="row-reverse" />)
      expect(screen.getByTestId('insightStack')).toHaveClass('flex-row-reverse')
    })
  })

  describe('when direction prop is "column"', () => {
    test('should have a class of "flex-col"', () => {
      render(<InsightStack {...args} direction="column" />)
      expect(screen.getByTestId('insightStack')).toHaveClass('flex-col')
    })
  })

  describe('when direction prop is "column-reverse"', () => {
    test('should have a class of "flex-col-reverse"', () => {
      render(<InsightStack {...args} direction="column-reverse" />)
      expect(screen.getByTestId('insightStack')).toHaveClass('flex-col-reverse')
    })
  })

  // TODO: Fill in with remaining variations / tie directly to Storybook
})
