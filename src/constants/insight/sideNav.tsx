import { HomeIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline'
import type { ISideNavMenuItem } from '../../types/common/sideNav.type'

export const SIDE_NAV_MENU_ITEMS: ISideNavMenuItem[] = [
  {
    active: true,
    label: 'Home',
    key: '/',
    icon: <HomeIcon className="h-5 w-5" />,
  },
  {
    active: true,
    label: 'Help',
    key: '/help',
    icon: <QuestionMarkCircleIcon className="h-5 w-5" />,
  },
]
