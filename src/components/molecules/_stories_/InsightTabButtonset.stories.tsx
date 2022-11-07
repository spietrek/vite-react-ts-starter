import InsightTabButtonset from '../InsightTabButtonset'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Molecules/InsightTabButtonset',
  component: InsightTabButtonset,
  argTypes: {},
} as ComponentMeta<typeof InsightTabButtonset>

const Template: ComponentStory<typeof InsightTabButtonset> = args => (
  <InsightTabButtonset {...args} />
)

const items = [
  {
    currentTab: true,
    label: 'Tab One',
  },
  {
    currentTab: false,
    label: 'Tab Two',
  },
  {
    currentTab: false,
    label: 'Tab Three',
  },
]

export const Basic = Template.bind({})
Basic.args = {
  items,
}
