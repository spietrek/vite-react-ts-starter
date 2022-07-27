import { formatNumber } from '.'

test('should display number with m', () => {
  expect(formatNumber(123456789.01)).toBe('123.46M')
})

test('should display number with k', () => {
  expect(formatNumber(123456.78)).toBe('123.46K')
})

test('should display number', () => {
  expect(formatNumber(1234)).toBe('1234')
})

test('should display number with 1 decimal', () => {
  expect(formatNumber(1234.5)).toBe('1234.50')
})

test('should display number with 2 decimals', () => {
  expect(formatNumber(1234.56)).toBe('1234.56')
})

test('should display number with 2 decimals', () => {
  expect(formatNumber(1234.5678)).toBe('1234.57')
})
