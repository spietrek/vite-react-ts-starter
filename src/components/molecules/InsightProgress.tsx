import type { PropsWithChildren } from 'react'

interface IProps {
  value: number
}

const InsightProgress = ({
  value = 0,
}: PropsWithChildren<IProps>): JSX.Element => {
  const handledValue = isNaN(value) ? 0 : value

  return (
    <progress
      className="progress progress-accent h-[40px] w-full bg-gray-100"
      value={handledValue}
      max="100"
    />
  )
}

export default InsightProgress
