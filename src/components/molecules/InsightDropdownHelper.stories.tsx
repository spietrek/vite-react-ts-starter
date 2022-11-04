import InsightDropDownHelper from './InsightDropDownHelper'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Molecules/InsightDropDownHelper',
  component: InsightDropDownHelper,
  argTypes: {},
} as ComponentMeta<typeof InsightDropDownHelper>

const Template: ComponentStory<typeof InsightDropDownHelper> = args => (
  <InsightDropDownHelper {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
  children: 'Something that needs a tooltip',
  title: 'Tooltip Title',
  description: 'Tooltip description text',
}
