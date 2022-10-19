const InsightFlexCard = (): JSX.Element => {
  return (
    <div className="shadow-xl">
      <div className="w-full xl:flex xl:max-w-full">
        <div
          className="h-48 flex-none overflow-hidden rounded-t bg-cover text-center xl:h-auto xl:w-48 xl:rounded-t-none xl:rounded-l"
          style={{
            backgroundImage: 'url(https://v1.tailwindcss.com/img/card-top.jpg)',
          }}
          title="Mountain"
        />

        <div className="flex flex-col justify-between rounded-b bg-white leading-normal xl:rounded-b-none xl:rounded-r">
          <div className="p-4 ">
            <div className="mb-2 text-xl font-bold text-gray-900">
              Best Mountain Trails 2020
            </div>
            <p className="text-base text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
              perferendis eaque, exercitationem praesentium nihil. Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Voluptatibus quia,
              nulla! Maiores et perferendis eaque, exercitationem praesentium
            </p>
          </div>
          <div className="flex items-center border-t p-4">
            <img
              className="mr-4 h-10 w-10 rounded-full"
              src="/assets/images/me.jpg"
              alt="Avatar of Writer"
            />
            <div className="text-sm">
              <p className="leading-none text-gray-900">John Smith</p>
              <p className="text-gray-600">Aug 18</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InsightFlexCard
