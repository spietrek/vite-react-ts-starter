import type { PropsWithChildren } from 'react'
import clsx from 'clsx'

interface IProps {
  renderText: () => JSX.Element
  children: React.ReactNode
}

const InsightTextOverlay = ({
  renderText,
  children,
}: PropsWithChildren<IProps>): JSX.Element => {
  return (
    <div className="relative h-[32rem] w-full overflow-hidden bg-cover bg-center">
      {children}
      <div
        className={clsx(
          'absolute top-0 bottom-0 left-0 right-0 flex h-full w-full items-center justify-center bg-gray-900 bg-opacity-50',
        )}
      >
        {renderText()}
      </div>
    </div>
  )
}

export default InsightTextOverlay
