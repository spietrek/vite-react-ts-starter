import type { PropsWithChildren } from 'react'
import { Bars3Icon } from '@heroicons/react/24/outline'

interface IProps {
  children?: React.ReactNode
}

const InsightAppBar = ({
  children,
}: PropsWithChildren<IProps>): JSX.Element => (
  <div className="navbar min-h-fit" data-testid="insightAppBar">
    <div className="flex-none lg:hidden">
      <label htmlFor="my-drawer-3" className="btn-ghost btn-square btn">
        <Bars3Icon className="h-6 w-6" data-testid="insightAppBar-icon" />
      </label>
    </div>
    {children}
  </div>
)

export default InsightAppBar
