import { Outlet } from 'react-router'

const OneColumnPage = (): JSX.Element => (
  <div className="bg-white dark:bg-gray-900">
    <Outlet />
  </div>
)

export default OneColumnPage
