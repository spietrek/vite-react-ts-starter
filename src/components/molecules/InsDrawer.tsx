import { Drawer } from '@mui/material'

interface IProps {
  anchor?: 'left' | 'right'
  open?: boolean
  onClose?: (event: React.KeyboardEvent | React.MouseEvent) => void
  children?: React.ReactNode
}

const InsDrawer = ({
  anchor = 'left',
  open = false,
  onClose,
  children = null,
}: IProps): JSX.Element => (
  <Drawer anchor={anchor} open={open} onClose={onClose}>
    {children}
  </Drawer>
)

export default InsDrawer
