import type { PropsWithChildren } from 'react'
import InsightButton from '../atoms/InsightButton'
import InsightImage from '../atoms/InsightImage'
import InsightTypography from '../atoms/InsightTypography'
import InsightTextOverlay from './InsightTextOverlay'

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
    <InsightTextOverlay
      renderText={() => (
        <div className="text-center">
          <InsightTypography level="h2" bold uppercase className="text-white">
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
      )}
    >
      <InsightImage src={image} altText={altText} width="100%" />
    </InsightTextOverlay>
  )
}

export default InsightHeroImage
