import InsightButton from '../InsightButton'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Atoms/InsightButton',
  component: InsightButton,
  argTypes: {},
} as ComponentMeta<typeof InsightButton>

const Template: ComponentStory<typeof InsightButton> = args => (
  <InsightButton {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
  children: 'Button text',
  disabled: false,
  fullWidth: false,
  loading: false,
  size: 'medium',
  type: 'button',
  variant: 'primary',
}
