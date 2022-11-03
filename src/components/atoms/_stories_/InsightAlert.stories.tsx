import InsightAlert from '../InsightAlert'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Atoms/InsightAlert',
  component: InsightAlert,
  argTypes: {},
} as ComponentMeta<typeof InsightAlert>

const Template: ComponentStory<typeof InsightAlert> = args => (
  <InsightAlert {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
  id: 1,
  label: 'This is the alert text',
  variant: 'info',
}
