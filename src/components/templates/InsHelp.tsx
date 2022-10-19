import InsightTypography from '../atoms/InsightTypography'
import InsightHeroImage from '../molecules/InsightHeroImage'

const InsHelp = (): JSX.Element => (
  <div className="p-4">
    <InsightTypography level="h1" bold uppercase className="mb-8">
      Help
    </InsightTypography>
    <InsightHeroImage
      image="https://unsplash.com/photos/_UIVmIBB3JU/download?force=true&w=640"
      altText="Help Image"
      title="Help is available 24/7/365"
      buttonText="Request Help"
      onClick={() => console.log('Help requested')}
    />
  </div>
)

export default InsHelp
