import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { ALERT_VARIANT } from '../../../constants/common/alert'
import InsightAlert from '../InsightAlert'

describe('InsightAlert component', () => {
  const alertText = 'Hello World'
  const args = {
    id: 1,
    label: alertText,
    variant: ALERT_VARIANT[0],
    onClose: jest.fn(),
  }

  test('should render an alert', () => {
    render(<InsightAlert {...args} />)
    expect(screen.getByText(alertText)).toBeInTheDocument()
    expect(screen.getByTestId('insightAlert-icon')).toBeInTheDocument()
    expect(screen.getByTestId('insightAlert-closeButton')).toBeInTheDocument()
  })

  describe('when clicking the close button', () => {
    test('should call the onClose function', async () => {
      const onCloseMock = jest.fn()
      render(<InsightAlert {...args} onClose={onCloseMock} />)
      const closeButton = screen.getByTestId('insightAlert-closeButton')
      expect(closeButton).toBeEnabled()
      fireEvent.click(closeButton)

      await waitFor(() => {
        expect(onCloseMock).toHaveBeenCalledTimes(1)
      })
    })
  })

  describe('when the variant is "info"', () => {
    const moddedArgs = { ...args, variant: ALERT_VARIANT[0] }

    test('should have a class of "alert-info"', () => {
      render(<InsightAlert {...moddedArgs} />)
      expect(screen.getByTestId('insightAlert')).toHaveClass('alert-info')
    })
  })

  describe('when the variant is "success"', () => {
    const moddedArgs = { ...args, variant: ALERT_VARIANT[1] }

    test('should have a class of "alert-success"', () => {
      render(<InsightAlert {...moddedArgs} />)
      expect(screen.getByTestId('insightAlert')).toHaveClass('alert-success')
    })
  })

  describe('when the variant is "warning"', () => {
    const moddedArgs = { ...args, variant: ALERT_VARIANT[2] }

    test('should have a class of "alert-warning"', () => {
      render(<InsightAlert {...moddedArgs} />)
      expect(screen.getByTestId('insightAlert')).toHaveClass('alert-warning')
    })
  })

  describe('when the variant is "error"', () => {
    const moddedArgs = { ...args, variant: ALERT_VARIANT[3] }

    test('should have a class of "alert-error"', () => {
      render(<InsightAlert {...moddedArgs} />)
      expect(screen.getByTestId('insightAlert')).toHaveClass('alert-error')
    })
  })
})
