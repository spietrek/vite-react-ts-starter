import InsightDropDown from './InsightDropDown'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Atoms/InsightDropDown',
  component: InsightDropDown,
  argTypes: {},
} as ComponentMeta<typeof InsightDropDown>

const Template: ComponentStory<typeof InsightDropDown> = args => (
  <InsightDropDown {...args} />
)

const menuItems = (
  <>
    <li>Menu Item 1</li>
    <li>Menu Item 2</li>
    <li>Menu Item 3</li>
  </>
)

export const Basic = Template.bind({})
Basic.args = {
  children: 'Dropdown label',
  disabled: false,
  fullWidth: false,
  menuItems,
  size: 'medium',
  variant: 'primary',
}
