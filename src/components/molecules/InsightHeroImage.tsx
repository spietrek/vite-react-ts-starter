import type { PropsWithChildren } from 'react'
import InsightButton from '../atoms/InsightButton'
import InsightTypography from '../atoms/InsightTypography'

interface IProps {
  image: string
  altText: string
  title: string
  buttonText: string
  onClick: () => void
}

const InsightHeroImage = ({
  image,
  altText,
  title,
  buttonText,
  onClick,
}: PropsWithChildren<IProps>): JSX.Element => {
  return (
    <div
      className="h-[32rem] w-full bg-cover bg-center"
      aria-label={altText}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="flex h-full w-full items-center justify-center bg-gray-900 bg-opacity-50">
        <div className="text-center">
          <InsightTypography level="h2" bold uppercase>
            {title}
          </InsightTypography>
          <InsightButton
            className="mt-6"
            variant="primary"
            size="small"
            onClick={onClick}
          >
            {buttonText}
          </InsightButton>
        </div>
      </div>
    </div>
  )
}

export default InsightHeroImage
