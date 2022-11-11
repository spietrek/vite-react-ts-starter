import { alertsData } from '../../../stories/data/alerts'
import InsightAlertset from '../InsightAlertset'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Molecules/InsightAlertset',
  component: InsightAlertset,
  argTypes: {},
} as ComponentMeta<typeof InsightAlertset>

const Template: ComponentStory<typeof InsightAlertset> = args => (
  <InsightAlertset {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
  alerts: alertsData,
}
