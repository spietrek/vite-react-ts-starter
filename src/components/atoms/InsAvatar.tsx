import { Avatar } from '@mui/material'

type AvatarVariants = 'square' | 'rounded'

interface IProps {
  alt?: string
  icon?: React.ReactNode
  src?: string
  variant?: AvatarVariants
}

const InsAvatar = ({
  alt = '',
  icon = null,
  src = '',
  variant = 'rounded',
}: IProps): JSX.Element => {
  return (
    <Avatar alt={alt} src={src} variant={variant}>
      {icon}
    </Avatar>
  )
}

export default InsAvatar
