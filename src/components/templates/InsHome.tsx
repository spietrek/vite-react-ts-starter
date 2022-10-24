import InsightImage from '../atoms/InsightImage'
import InsightPill from '../atoms/InsightPill'
import InsightTypography from '../atoms/InsightTypography'
import InsightCardset from '../molecules/InsightCardset'
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

      <div className="mt-4" />

      <InsightCardset
        cards={[
          {
            id: '1',
            media: (
              <div className="h-full min-w-[250px]">
                <InsightImage
                  src="https://v1.tailwindcss.com/img/card-top.jpg"
                  alt="mountain"
                />
              </div>
            ),
            body: (
              <>
                <InsightTypography level="h4" bold className="mb-2">
                  Mountain View
                </InsightTypography>
                <InsightTypography level="body1">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil. Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Voluptatibus quia, nulla!
                  Maiores et perferendis eaque, exercitationem praesentium
                  nihil. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium
                </InsightTypography>
              </>
            ),
            footer: (
              <div className="flex flex-wrap px-2 pt-2">
                <InsightPill label="#photography" />
                <InsightPill label="#travel" />
                <InsightPill label="#winter" />
                <InsightPill label="#mountain" />
              </div>
            ),
          },
          {
            id: '2',
            media: (
              <div className="h-full min-w-[250px]">
                <InsightImage
                  src="https://v1.tailwindcss.com/img/card-top.jpg"
                  alt="mountain"
                />
              </div>
            ),
            footer: (
              <div className="flex flex-wrap px-2 pt-2">
                <InsightPill label="#photography" />
                <InsightPill label="#travel" />
                <InsightPill label="#winter" />
                <InsightPill label="#mountain" />
              </div>
            ),
          },
          {
            id: '3',
            media: (
              <div className="h-full min-w-[250px]">
                <InsightImage
                  src="https://v1.tailwindcss.com/img/card-top.jpg"
                  alt="mountain"
                />
              </div>
            ),
            footer: (
              <div className="flex flex-wrap px-2 pt-2">
                <InsightPill label="#photography" />
                <InsightPill label="#travel" />
                <InsightPill label="#winter" />
                <InsightPill label="#mountain" />
              </div>
            ),
          },
        ]}
      />
      {/* <InsCard>
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
