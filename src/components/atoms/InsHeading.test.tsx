import React from 'react'
import { render, screen } from '@testing-library/react'
import InsHeading from './InsHeading'

test('Renders the InsHeading component', () => {
  render(<InsHeading>Hello World</InsHeading>)
})

test('Show App Component', () => {
  render(<InsHeading>Hello World</InsHeading>)
  expect(screen.getByText('Hello World')).toBeInTheDocument()
})

// test('Working Counter', async () => {
//   const user = userEvent.setup()
//   const { getByText } = render(<App />)
//   expect(getByText('count is: 0')).toBeInTheDocument()

//   const button = getByText(/count is: \d/)

//   await user.click(button)
//   expect(getByText('count is: 1')).toBeInTheDocument()

//   await user.click(button)
//   expect(getByText('count is: 2')).toBeInTheDocument()

//   await user.click(button)
//   expect(getByText('count is: 3')).toBeInTheDocument()
// })

// test('working with msw', async () => {
//   render(<App />)
//   await waitFor(() => {
//     expect(screen.getByText('MSW')).toBeInTheDocument()
//     expect(screen.getByText('Tailwind CSS')).toBeInTheDocument()
//   })
// })

test('that jest is working', () => {
  expect(true).toBe(true)
})
