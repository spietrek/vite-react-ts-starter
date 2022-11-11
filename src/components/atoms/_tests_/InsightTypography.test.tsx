import { render, screen } from '@testing-library/react'
import InsightTypography from '../InsightTypography'

describe('InsightTypography component', () => {
  const text = 'Hello World'

  test('should render some text', () => {
    render(<InsightTypography>{text}</InsightTypography>)
    expect(screen.getByText(text)).toBeInTheDocument()
  })

  describe('when text isnt provided', () => {
    test('should render "Not Provided"', () => {
      render(<InsightTypography />)
      expect(screen.getByText('Not Provided')).toBeInTheDocument()
    })
  })

  describe('when bold prop is true', () => {
    test('should have a class of "font-bold"', () => {
      render(<InsightTypography bold>{text}</InsightTypography>)
      expect(screen.getByText(text)).toHaveClass('font-bold')
      expect(screen.getByText(text)).not.toHaveClass('font-normal')
    })
  })

  describe('when bold prop is false', () => {
    test('should have a class of "font-normal"', () => {
      render(<InsightTypography>{text}</InsightTypography>)
      expect(screen.getByText(text)).not.toHaveClass('font-bold')
      expect(screen.getByText(text)).toHaveClass('font-normal')
    })
  })

  describe('when uppercase prop is true', () => {
    test('should have a class of "uppercase"', () => {
      render(<InsightTypography uppercase>{text}</InsightTypography>)
      expect(screen.getByText(text)).toHaveClass('uppercase')
    })
  })

  describe('when uppercase prop is false', () => {
    test('should not have a class of "uppercase"', () => {
      render(<InsightTypography>{text}</InsightTypography>)
      expect(screen.getByText(text)).not.toHaveClass('uppercase')
    })
  })

  describe('when align prop is "inherit"', () => {
    test('should not have any text alignment classes', () => {
      render(<InsightTypography align="inherit">{text}</InsightTypography>)
      expect(screen.getByText(text)).not.toHaveClass('text-left')
      expect(screen.getByText(text)).not.toHaveClass('text-center')
      expect(screen.getByText(text)).not.toHaveClass('text-right')
      expect(screen.getByText(text)).not.toHaveClass('text-justify')
    })
  })

  describe('when align prop is "left"', () => {
    test('should have a class of "text-left"', () => {
      render(<InsightTypography align="left">{text}</InsightTypography>)
      expect(screen.getByText(text)).toHaveClass('text-left')
    })
  })

  describe('when align prop is "center"', () => {
    test('should have a class of "text-center"', () => {
      render(<InsightTypography align="center">{text}</InsightTypography>)
      expect(screen.getByText(text)).toHaveClass('text-center')
    })
  })

  describe('when align prop is "right"', () => {
    test('should have a class of "text-right"', () => {
      render(<InsightTypography align="right">{text}</InsightTypography>)
      expect(screen.getByText(text)).toHaveClass('text-right')
    })
  })

  describe('when align prop is "justify"', () => {
    test('should have a class of "text-justify"', () => {
      render(<InsightTypography align="justify">{text}</InsightTypography>)
      expect(screen.getByText(text)).toHaveClass('text-justify')
    })
  })

  describe('when level prop is a header level', () => {
    test('should render a header element"', () => {
      render(<InsightTypography level="h1">{text}</InsightTypography>)
      render(<InsightTypography level="h2">{text}</InsightTypography>)
      render(<InsightTypography level="h3">{text}</InsightTypography>)
      render(<InsightTypography level="h4">{text}</InsightTypography>)
      render(<InsightTypography level="h5">{text}</InsightTypography>)
      render(<InsightTypography level="h6">{text}</InsightTypography>)
      expect(screen.queryAllByTestId('insightTypography-header')).toHaveLength(
        6,
      )
      expect(
        screen.queryByTestId('insightTypography-body'),
      ).not.toBeInTheDocument()
    })
  })

  describe('when level prop is a body level', () => {
    test('should render a paragraph element"', () => {
      render(<InsightTypography level="body1">{text}</InsightTypography>)
      render(<InsightTypography level="body2">{text}</InsightTypography>)
      expect(screen.queryAllByTestId('insightTypography-body')).toHaveLength(2)
      expect(
        screen.queryByTestId('insightTypography-header'),
      ).not.toBeInTheDocument()
    })
  })
})
