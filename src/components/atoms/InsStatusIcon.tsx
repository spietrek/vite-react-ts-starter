import {
  CheckCircleOutlined,
  VisibilityOutlined,
  WarningOutlined,
} from '@mui/icons-material'
import { IconStatusType } from '../../types/iconStatus.type'

interface IProps {
  style?: React.CSSProperties
  status?: IconStatusType
}

const InsStatusIcon = ({
  style = {},
  status = 'inReview',
}: IProps): JSX.Element => {
  if (status === 'inReview') {
    return <VisibilityOutlined style={style} />
  }

  if (status === 'warning') {
    return <WarningOutlined style={style} />
  }

  return <CheckCircleOutlined style={style} />
}

export default InsStatusIcon
