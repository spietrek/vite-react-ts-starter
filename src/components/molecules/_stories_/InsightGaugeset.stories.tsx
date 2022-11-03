import InsightGaugeset from '../InsightGaugeset'
import type { IGauge } from '../../../types/common/gauge.type'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Molecules/InsightGaugeset',
  component: InsightGaugeset,
  argTypes: {},
} as ComponentMeta<typeof InsightGaugeset>

const Template: ComponentStory<typeof InsightGaugeset> = args => (
  <InsightGaugeset {...args} />
)

const items: IGauge[] = [
  {
    size: '160px',
    value: 25,
    label: 'Gauge One',
    color: '#008CB2',
    opacity: 1,
  },
  {
    size: '160px',
    value: 50,
    label: 'Gauge Two',
    color: '#DE7800',
    opacity: 1,
  },
  {
    size: '160px',
    value: 75,
    label: 'Gauge Three',
    color: '#00dea9',
    opacity: 1,
  },
]

export const Basic = Template.bind({})
Basic.args = {
  items,
}
