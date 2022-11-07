import type { PropsWithChildren } from 'react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import InsightAvatar from '../atoms/InsightAvatar'
import InsightDropDown from '../atoms/InsightDropDown'
import InsightTypography from '../atoms/InsightTypography'

interface IProps {
  className?: string
}

const InsightProfile = ({
  className = '',
}: PropsWithChildren<IProps>): JSX.Element => {
  const menuItems = (
    <>
      <li>
        <Link to="/">Profile</Link>
      </li>
      <li>
        <Link to="/">My Account</Link>
      </li>
      <li>
        <Link to="/">Logout</Link>
      </li>
    </>
  )

  return (
    <div className={clsx('flex', 'items-center', 'justify-start', className)}>
      <InsightAvatar variant="square" src="assets/images/user.webp" />

      <InsightDropDown
        size="small"
        variant="ghost"
        menuItems={menuItems}
        className="dark:black dark:text-white"
      >
        <InsightTypography level="body1" bold>
          Steve Pietrek
        </InsightTypography>
      </InsightDropDown>
    </div>
  )
}

export default InsightProfile
