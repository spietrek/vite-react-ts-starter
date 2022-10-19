// import InsBodyText from '../atoms/InsBodyText'
// import InsHeading from '../atoms/InsHeading'
// import InsImage from '../atoms/InsImage'
// import InsCard from '../molecules/InsCard'
// import InsFlexCard from '../molecules/InsFlexCard'
import InsightHeroImage from '../molecules/InsightHeroImage'
import InsightIndicator from '../molecules/InsightIndicator'

const InsHome = (): JSX.Element => {
  const loading = false

  return (
    <InsightIndicator isLoading={loading}>
      <InsightHeroImage
        altText="Workers in office"
        image="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        title="Welcome to Insight"
        buttonText="Get Started"
        onClick={() => console.log('Get Started')}
      />
      {/* <InsFlexCard />
      <div className="py-4" />
      <InsCard>
        <InsCard.Media>
          <div className="h-full min-w-[250px]">
            <InsImage
              src="https://v1.tailwindcss.com/img/card-top.jpg"
              alt="mountain"
            />
          </div>
        </InsCard.Media>

        <InsCard.Body>
          <InsHeading
            className="mb-2 text-xl font-bold text-gray-700"
            level="h1"
          >
            Mountain View
          </InsHeading>
          <InsBodyText className="text-base text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
            perferendis eaque, exercitationem praesentium nihil. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Voluptatibus quia,
            nulla! Maiores et perferendis eaque, exercitationem praesentium
          </InsBodyText>
        </InsCard.Body>

        <InsCard.Footer>
          <>
            <InsPill text="#photography" />
            <InsPill text="#travel" />
            <InsPill text="#winter" />
            <InsPill text="#mountain" />
          </>
        </InsCard.Footer>
      </InsCard> */}
    </InsightIndicator>
  )
}

export default InsHome
