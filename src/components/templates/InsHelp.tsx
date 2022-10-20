import InsightHeroImage from '../molecules/InsightHeroImage'

const InsHelp = (): JSX.Element => (
  <div className="p-4">
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
