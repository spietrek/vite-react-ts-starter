import type { PropsWithChildren } from 'react'

interface IProps {
  header?: React.ReactNode
  children?: React.ReactNode
  sideNav?: React.ReactNode
}

const InsightDrawer = ({
  header = null,
  children = null,
  sideNav = null,
}: PropsWithChildren<IProps>): JSX.Element => (
  <div className="drawer" data-testid="insightDrawer">
    <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content flex flex-col">
      {header}
      {children}
    </div>
    <div className="drawer-side">
      <label htmlFor="my-drawer-3" className="drawer-overlay" />
      <div className="max-w-[265px] bg-white">{sideNav}</div>
    </div>
  </div>
)

export default InsightDrawer
