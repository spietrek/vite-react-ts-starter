/* eslint-disable @typescript-eslint/indent */

import InsSideNav from '../organisms/InsSideNav'

interface IProps {
  children: JSX.Element
}

const ColumnThreePage = ({ children }: IProps): JSX.Element => {
  return (
    <div className="flex w-full flex-grow flex-col flex-wrap sm:flex-row sm:flex-nowrap">
      <div className="w-fixed flex-shrink flex-grow-0 pr-4 xs:hidden lg:block lg:w-1/4">
        <InsSideNav />
      </div>

      <div className="flex-grow xs:w-2/3 lg:w-1/2">{children}</div>

      <div className="w-fixed flex-shrink flex-grow-0 xs:w-1/3 lg:w-1/4 lg:pl-4">
        THIRD COLUMN INFORMATION
      </div>
    </div>
  )
}

export default ColumnThreePage
