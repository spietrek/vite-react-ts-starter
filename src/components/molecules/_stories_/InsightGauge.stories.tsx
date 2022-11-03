import InsightGauge from '../InsightGauge'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Molecules/InsightGauge',
  component: InsightGauge,
  argTypes: {},
} as ComponentMeta<typeof InsightGauge>

const Template: ComponentStory<typeof InsightGauge> = args => (
  <InsightGauge {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
  size: '160px',
  value: 75,
  label: 'Label',
  color: '#00dea9',
  opacity: 1,
}
