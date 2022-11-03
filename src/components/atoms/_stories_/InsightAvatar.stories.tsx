import InsightAvatar from '../InsightAvatar'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Atoms/InsightAvatar',
  component: InsightAvatar,
  argTypes: {},
} as ComponentMeta<typeof InsightAvatar>

const Template: ComponentStory<typeof InsightAvatar> = args => (
  <InsightAvatar {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
  src: 'https://gravatar.com/avatar/2a0f500bfa9921af27bdf7c26f4ac394?s=200&d=robohash&r=x',
  variant: 'circle',
}
