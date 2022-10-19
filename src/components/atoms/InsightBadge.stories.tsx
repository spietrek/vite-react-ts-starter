import InsightBadge from './InsightBadge'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Atoms/InsightBadge',
  component: InsightBadge,
  argTypes: {},
} as ComponentMeta<typeof InsightBadge>

const Template: ComponentStory<typeof InsightBadge> = args => (
  <InsightBadge {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
  content: 'Badge',
  variant: 'primary',
  size: 'sm',
}
