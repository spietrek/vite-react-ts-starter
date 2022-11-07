import {
  CalendarIcon,
  CurrencyDollarIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline'
import InsightImage from '../../atoms/InsightImage'
import InsightTypography from '../../atoms/InsightTypography'
import InsightAppBar from '../InsightAppBar'
import InsightDrawer from '../InsightDrawer'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Molecules/InsightDrawer',
  component: InsightDrawer,
  argTypes: {},
} as ComponentMeta<typeof InsightDrawer>

const Template: ComponentStory<typeof InsightDrawer> = args => (
  <InsightDrawer {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
  header: (
    <InsightAppBar>
      <div className="mx-2 flex-1 px-2">
        <InsightImage
          src="assets/images/sos_logo.webp"
          altText="Wise"
          width="270"
        />
      </div>
    </InsightAppBar>
  ),
  children: <InsightTypography>Page content</InsightTypography>,
  sideNav: (
    <div className="py-4">
      <div id="insight_sidenav">
        <ul className="menu m-0 w-full p-0">
          <li key={1}>
            <a>
              <CurrencyDollarIcon className="h-5 w-5" />
              Nav Link 1
            </a>
          </li>
          <li key={2}>
            <a>
              <DocumentDuplicateIcon className="h-5 w-5" />
              Nav Link 2
            </a>
          </li>
          <li key={3}>
            <a>
              <CalendarIcon className="h-5 w-5" />
              Nav Link 3
            </a>
          </li>
        </ul>
      </div>
    </div>
  ),
}
