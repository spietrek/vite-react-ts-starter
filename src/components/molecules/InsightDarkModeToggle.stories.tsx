import InsightDarkModeToggle from './InsightDarkModeToggle'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Molecules/InsightDarkModeToggle',
  component: InsightDarkModeToggle,
  argTypes: {},
} as ComponentMeta<typeof InsightDarkModeToggle>

const Template: ComponentStory<typeof InsightDarkModeToggle> = args => (
  <InsightDarkModeToggle {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
  darkMode: true,
}
