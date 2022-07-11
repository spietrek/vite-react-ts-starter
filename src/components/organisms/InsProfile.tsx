import { useState } from 'react'
import { KeyboardArrowDown } from '@mui/icons-material'
import { Menu, MenuItem } from '@mui/material'
import clsx from 'clsx'
import InsAvatar from '../atoms/InsAvatar'
import InsBodyText from '../atoms/InsBodyText'
import InsButton from '../atoms/InsButton'

interface IProps {
  className?: string
}

const InsProfile = ({ className = '' }: IProps): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = (): void => {
    setAnchorEl(null)
  }

  return (
    <div
      className={clsx(
        'tw-flex',
        'tw-items-center',
        'tw-justify-start',
        className,
      )}
    >
      <InsAvatar variant="square" src="assets/images/me.jpg" />

      <InsButton
        ariaControls={open ? 'basic-menu' : undefined}
        ariaHasPopup="true"
        ariaExpanded={open ? true : undefined}
        onClick={handleClick}
        endIcon={<KeyboardArrowDown style={{ color: '#000' }} />}
      >
        <InsBodyText className="tw-pt1 tw-font-bold tw-text-black" inline>
          Steve Pietrek
        </InsBodyText>
      </InsButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  )
}

export default InsProfile
