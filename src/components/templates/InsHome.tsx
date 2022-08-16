import InsBodyText from '../atoms/InsBodyText'
import InsHeading from '../atoms/InsHeading'
import InsImage from '../atoms/InsImage'
import InsPill from '../atoms/InsPill'
import InsCard from '../molecules/InsCard'
import InsFlexCard from '../molecules/InsFlexCard'
import InsIndicator from '../molecules/InsIndicator'

const InsHome = (): JSX.Element => {
  const loading = false

  return (
    <InsIndicator isLoading={loading}>
      <InsFlexCard />
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
      </InsCard>
    </InsIndicator>
  )
}

export default InsHome
