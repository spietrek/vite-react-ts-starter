import type { PropsWithChildren } from 'react'
import InsightSpinner from '../atoms/InsightSpinner'

interface IProps {
  isLoading: boolean
  children?: React.ReactNode
}

const InsightIndicator = ({
  isLoading,
  children,
}: PropsWithChildren<IProps>): JSX.Element => {
  if (isLoading) {
    return (
      <div
        className="flex items-center justify-center p-4"
        data-testid="insightIndicator"
      >
        <InsightSpinner />
      </div>
    )
  }

  return <div data-testid="insightIndicator-children">{children}</div>
}

export default InsightIndicator
