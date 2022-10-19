import { Outlet } from 'react-router'
import InsightSideNav from '../components/molecules/InsightSideNav'

const TwoColumnPage = (): JSX.Element => (
  <div className="flex w-full flex-grow flex-col flex-wrap sm:flex-row sm:flex-nowrap">
    <div className="w-fixed mr-4 hidden w-1/3 !max-w-[300px] flex-shrink flex-grow-0 bg-white dark:bg-gray-900 lg:block">
      <InsightSideNav />
    </div>

    <div className="flex-grow bg-white dark:bg-gray-900 dark:text-white">
      <Outlet />
    </div>
  </div>
)

export default TwoColumnPage
