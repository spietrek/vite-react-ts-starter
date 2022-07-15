/* eslint-disable @typescript-eslint/indent */

import InsSideNav from '../components/organisms/InsSideNav'

interface IProps {
  children: JSX.Element
}

const ColumnThreePage = ({ children }: IProps): JSX.Element => {
  return (
    <div className="flex w-full flex-grow flex-col flex-wrap sm:flex-row sm:flex-nowrap">
      <div className="w-fixed w-1/4 flex-shrink flex-grow-0 pr-4 sm:hidden lg:block">
        <InsSideNav />
      </div>

      <div className="flex-grow sm:w-2/3 lg:w-1/2">{children}</div>

      <div className="w-fixed flex-shrink flex-grow-0 pl-4 sm:w-1/3 lg:w-1/4">
        Third Column Information
      </div>
    </div>
  )
}

export default ColumnThreePage
