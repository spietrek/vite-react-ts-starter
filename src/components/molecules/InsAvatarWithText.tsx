import InsAvatar from '../atoms/InsAvatar'
import InsBodyText from '../atoms/InsBodyText'

interface IProps {
  title: string
  avatar: string
  subtitle?: string
}

const InsAvatarWithText = ({
  title,
  avatar,
  subtitle,
}: IProps): JSX.Element => {
  return (
    <>
      <div className="tw-flex">
        <InsAvatar src={avatar} />
        <div className="tw-ml-2">
          <InsBodyText className="tw-text-base tw-font-bold">
            {title}
          </InsBodyText>
          <InsBodyText className="tw-text-sm">{subtitle}</InsBodyText>
        </div>
      </div>
    </>
  )
}

export default InsAvatarWithText
