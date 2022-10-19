import {
  CalendarIcon,
  ChatBubbleBottomCenterIcon,
  CurrencyDollarIcon,
  DocumentDuplicateIcon,
  HomeIcon,
  LightBulbIcon,
  QuestionMarkCircleIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'
import type { ISideNavMenuItem } from '../types/common/sideNav.type'

export const SIDE_NAV_MENU_ITEMS: ISideNavMenuItem[] = [
  {
    active: true,
    label: 'Home',
    key: '/',
    icon: <HomeIcon className="h-5 w-5" />,
  },
  {
    active: true,
    label: 'Assessment',
    key: '/assessment',
    icon: <LightBulbIcon className="h-5 w-5" />,
  },
  {
    active: true,
    label: 'Progress Reports',
    key: '/progress-reports',
    icon: <ChatBubbleBottomCenterIcon className="h-5 w-5" />,
  },
  {
    active: false,
    label: 'My Scholarship Funds',
    key: '/financials',
    icon: <CurrencyDollarIcon className="h-5 w-5" />,
  },
  {
    active: false,
    label: 'My Documents',
    key: '/documents',
    icon: <DocumentDuplicateIcon className="h-5 w-5" />,
  },
  {
    active: false,
    label: 'Events Calendar',
    key: '/events',
    icon: <CalendarIcon className="h-5 w-5" />,
  },
  {
    active: false,
    label: 'My Network',
    key: '/network',
    icon: <UserGroupIcon className="h-5 w-5" />,
  },
  {
    active: true,
    label: 'Help',
    key: '/help',
    icon: <QuestionMarkCircleIcon className="h-5 w-5" />,
  },
]
