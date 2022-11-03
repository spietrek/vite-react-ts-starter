import InsightProgress from '../InsightProgress'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Molecules/InsightProgress',
  component: InsightProgress,
  argTypes: {},
} as ComponentMeta<typeof InsightProgress>

const Template: ComponentStory<typeof InsightProgress> = args => (
  <InsightProgress {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
  value: 50,
}
