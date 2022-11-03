import InsightTabButton from '../InsightTabButton'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Molecules/InsightTabButton',
  component: InsightTabButton,
  argTypes: {},
} as ComponentMeta<typeof InsightTabButton>

const Template: ComponentStory<typeof InsightTabButton> = args => (
  <InsightTabButton {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
  currentTab: false,
  label: 'Label',
}
