import type { PropsWithChildren } from 'react'

interface IProps {
  label: string
}

const InsightPill = ({ label }: PropsWithChildren<IProps>): JSX.Element => {
  return (
    <div className="mr-2 mb-2 rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
      {label}
    </div>
  )
}

export default InsightPill
