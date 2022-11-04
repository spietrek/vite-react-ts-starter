import InsightIndicator from './InsightIndicator'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Molecules/InsightIndicator',
  component: InsightIndicator,
  argTypes: {},
} as ComponentMeta<typeof InsightIndicator>

const Template: ComponentStory<typeof InsightIndicator> = args => (
  <InsightIndicator {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
  children: 'Loaded',
  isLoading: true,
}
