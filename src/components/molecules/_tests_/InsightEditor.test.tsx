/* eslint-disable testing-library/no-debugging-utils */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils'
import InsightEditor from '../InsightEditor'

const getItemSpy = jest.spyOn(Storage.prototype, 'getItem')
const mockUser = userEvent.setup()

describe('InsightEditor component', () => {
  test('should render text editor', () => {
    render(<InsightEditor />)
    expect(screen.getByTestId('insightEditor')).toBeInTheDocument()
    expect(getItemSpy).toHaveBeenCalled()
  })

  describe('when retrieving localStorage with state', () => {
    test('should render editor with text', () => {
      getItemSpy.mockReturnValue('test')
      render(<InsightEditor />)
      expect(screen.getByText('test')).toBeInTheDocument()
    })
  })

  describe('when retrieving initial localStorage state', () => {
    test('should render editor without text', () => {
      getItemSpy.mockReturnValue(null)
      render(<InsightEditor />)
      expect(screen.queryByText('test')).not.toBeInTheDocument()
    })
  })

  describe('when the undo button is clicked', () => {
    const prevValue = 'Previous Text'
    const updatedValue = 'Previous Text Updated'
    test('should return text to prev value', async () => {
      getItemSpy.mockReturnValue(prevValue)
      const { container } = render(<InsightEditor />)
      const editorElement = screen.getByText(prevValue)
      await act(() => mockUser.type(editorElement, ' Updated'))
      expect(editorElement).toHaveTextContent(updatedValue)
      const undoButton = container.querySelector('.ql-undo')!.parentElement!
      console.log(undoButton.children)
      expect(undoButton).toBeInTheDocument()
      mockUser.click(undoButton)
      expect(editorElement).toHaveTextContent(updatedValue)
    })
  })
})
