import type { PropsWithChildren } from 'react'

interface IProps {
  value: number
}

const InsightProgress = ({ value }: PropsWithChildren<IProps>): JSX.Element => {
  const handledValue = isNaN(value) ? 0 : value

  return (
    <div data-testid="insightProgress">
      <progress
        className="bg-neutral-100 progress progress-accent h-[40px] w-full"
        value={handledValue}
        max="100"
      />
    </div>
  )
}

export default InsightProgress
