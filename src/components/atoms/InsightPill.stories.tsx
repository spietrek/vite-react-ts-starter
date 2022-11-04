import InsightPill from './InsightPill'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Atoms/InsightPill',
  component: InsightPill,
  argTypes: {},
} as ComponentMeta<typeof InsightPill>

const Template: ComponentStory<typeof InsightPill> = args => (
  <InsightPill {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
  label: 'This is the pill text',
}
