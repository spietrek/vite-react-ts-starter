import type { PropsWithChildren } from 'react'
import InsightAvatar from '../atoms/InsightAvatar'
import InsightTypography from '../atoms/InsightTypography'

interface IProps {
  title: string
  avatar: string
  subtitle?: string
}

const InsightAvatarWithText = ({
  title,
  avatar,
  subtitle,
}: PropsWithChildren<IProps>): JSX.Element => (
  <div className="flex">
    <div className="mt-1">
      <InsightAvatar src={avatar} />
    </div>
    <div className="ml-2">
      <InsightTypography level="body1" bold>
        {title}
      </InsightTypography>
      <InsightTypography level="body1">{subtitle}</InsightTypography>
    </div>
  </div>
)

export default InsightAvatarWithText
