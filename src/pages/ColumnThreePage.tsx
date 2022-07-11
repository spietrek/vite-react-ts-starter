/* eslint-disable @typescript-eslint/indent */

import InsSideNav from '../components/organisms/InsSideNav'

interface IProps {
  children: JSX.Element
}

const ColumnThreePage = ({ children }: IProps): JSX.Element => {
  return (
    <div className="tw-flex tw-w-full tw-flex-grow tw-flex-col tw-flex-wrap sm:tw-flex-row sm:tw-flex-nowrap">
      <div className="tw-w-fixed tw-w-1/4 tw-flex-shrink tw-flex-grow-0 tw-pr-4 sm:tw-hidden lg:tw-block">
        <InsSideNav />
      </div>

      <div className="tw-flex-grow sm:tw-w-2/3 lg:tw-w-1/2">{children}</div>

      <div className="tw-w-fixed tw-flex-shrink tw-flex-grow-0 tw-pl-4 sm:tw-w-1/3 lg:tw-w-1/4">
        Third Column Information
      </div>
    </div>
  )
}

export default ColumnThreePage
