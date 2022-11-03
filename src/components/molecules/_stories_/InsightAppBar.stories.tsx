import clsx from 'clsx'
import InsightAvatar from '../../atoms/InsightAvatar'
import InsightDropDown from '../../atoms/InsightDropDown'
import InsightImage from '../../atoms/InsightImage'
import InsightTypography from '../../atoms/InsightTypography'
import InsightAppBar from '../InsightAppBar'
import InsightDarkModeToggle from '../InsightDarkModeToggle'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Molecules/InsightAppBar',
  component: InsightAppBar,
  argTypes: {},
} as ComponentMeta<typeof InsightAppBar>

const Template: ComponentStory<typeof InsightAppBar> = args => (
  <InsightAppBar {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
  children: (
    <>
      <div className="mx-2 flex-1 px-2">
        <InsightImage
          src="assets/images/sos_logo.webp"
          altText="Wise"
          width="270"
        />
      </div>
      <div className="flex-none">
        <div className="mr-1">
          <InsightDarkModeToggle
            darkMode
            onToggle={() => {
              return false
            }}
          />
        </div>
        <div className={clsx('flex', 'items-center', 'justify-start')}>
          <InsightAvatar variant="square" src="assets/images/user.webp" />
          <InsightDropDown
            size="small"
            variant="ghost"
            className="dark:black dark:text-white"
          >
            <InsightTypography level="body1" bold>
              Steve Pietrek
            </InsightTypography>
          </InsightDropDown>
        </div>
      </div>
    </>
  ),
}
