import { Outlet } from 'react-router'
import InsightSideNav from '../components/molecules/InsightSideNav'

const ThreeColumnPage = (): JSX.Element => {
  return (
    <div className="flex w-full flex-grow flex-col flex-wrap sm:flex-row sm:flex-nowrap">
      <div className="w-fixed mr-4 hidden w-1/4 !max-w-[300px] flex-shrink flex-grow-0  dark:bg-gray-900 lg:block">
        <InsightSideNav />
      </div>

      <div className="flex-grow bg-white dark:bg-gray-900 dark:text-white sm:w-2/3 lg:w-1/2">
        <Outlet />
      </div>

      <div className="w-fixed ml-4 !max-w-[300px] flex-shrink flex-grow-0 sm:w-1/3 lg:w-1/4">
        <div className="mb-4 bg-white dark:bg-gray-900 dark:text-white">
        </div>
        <div className="bg-white">
        </div>
      </div>
    </div>
  )
}

export default ThreeColumnPage
