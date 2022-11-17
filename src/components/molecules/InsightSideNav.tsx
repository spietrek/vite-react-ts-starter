import type { PropsWithChildren } from 'react'
import clsx from 'clsx'
import { useLocation, useNavigate } from 'react-router-dom'
import { SIDE_NAV_MENU_ITEMS } from '../../constants/insight/sideNav'
import type { ISideNavMenuItem } from '../../types/common/sideNav.type'

interface IProps {
  onMenuClick?: (key: React.Key) => void
}

const InsightSideNav = ({
  onMenuClick,
}: PropsWithChildren<IProps>): JSX.Element => {
  const location = useLocation()
  const navigate = useNavigate()

  const handleLinkClick = (key: React.Key): void => {
    navigate(key.toString(), { replace: false })
    if (onMenuClick != null) {
      onMenuClick(key)
    }
  }

  return (
    <div
      id="insight_sidenav"
      data-testid="insightSideNav"
      className="flex h-full flex-col justify-between pb-6"
    >
      <ul className="menu m-0 w-full p-0">
        {SIDE_NAV_MENU_ITEMS.filter(
          (item: ISideNavMenuItem) => item.active,
        ).map((item: ISideNavMenuItem) => {
          const key = item !== null ? item.key : ''
          const isSelected = location.pathname === key
          const classNames = clsx(
            'h-[50px] mx-2',
            'bg-white text-black',
            'dark:text-white dark:bg-gray-900',
            'cursor-pointer',
            isSelected ? '!bg-[#dbf4fc] !text-black' : '',
          )

          return (
            <li key={key}>
              <a className={classNames} onClick={() => handleLinkClick(key)}>
                {item.icon}
                {item.label}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default InsightSideNav
