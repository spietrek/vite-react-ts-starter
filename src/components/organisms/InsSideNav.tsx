import {
  HomeOutlined,
  CalendarMonthOutlined,
  MonetizationOnOutlined,
  AssignmentOutlined,
  PostAddOutlined,
  GroupWorkOutlined,
  HelpOutlineOutlined,
} from '@mui/icons-material'
import { ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'

interface ISideNavMenuProps {
  label: React.ReactNode
  key: React.Key
  icon?: React.ReactNode
}

const menuItems: ISideNavMenuProps[] = [
  {
    label: 'Home',
    key: '/',
    icon: <HomeOutlined />,
  },
  {
    label: 'My Scholarship Funds',
    key: '/financials',
    icon: <MonetizationOnOutlined />,
  },
  {
    label: 'My Documents',
    key: '/documents',
    icon: <AssignmentOutlined />,
  },
  {
    label: 'Progress Reports',
    key: '/updates',
    icon: <PostAddOutlined />,
  },
  {
    label: 'Events Calendar',
    key: '/events',
    icon: <CalendarMonthOutlined />,
  },
  {
    label: 'My Network',
    key: '/network',
    icon: <GroupWorkOutlined />,
  },
  {
    label: 'Help',
    key: '/help',
    icon: <HelpOutlineOutlined />,
  },
]

interface IProps {
  onMenuClick?: (key: React.Key) => void
}

const InsSideNav = ({ onMenuClick }: IProps): JSX.Element => {
  const location = useLocation()
  const navigate = useNavigate()

  const handleLinkClick = (key: React.Key): void => {
    navigate(key.toString(), { replace: true })
    if (onMenuClick != null) {
      onMenuClick(key)
    }
  }

  return (
    <div className="bg-white py-4 shadow-sm dark:bg-black">
      <div id="ins_sidenav">
        {menuItems.map(item => {
          const isSelected = location.pathname === item.key

          return (
            <ListItem
              key={item.key}
              selected={isSelected}
              style={{ height: '50px' }}
              onClick={() => handleLinkClick(item.key)}
            >
              <ListItemIcon color="primary">{item.icon}</ListItemIcon>
              <ListItemText color="primary" primary={item.label} />
            </ListItem>
          )
        })}
      </div>
    </div>
  )
}

export default InsSideNav
