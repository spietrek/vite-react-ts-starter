import InsightAlertset from '../InsightAlertset'
import type { ComponentStory, ComponentMeta } from '@storybook/react'
import type { IAlert } from 'src/types/common/alert.type'

export default {
  title: 'Molecules/InsightAlertset',
  component: InsightAlertset,
  argTypes: {},
} as ComponentMeta<typeof InsightAlertset>

const Template: ComponentStory<typeof InsightAlertset> = args => (
  <InsightAlertset {...args} />
)

const alerts: IAlert[] = [
  {
    id: 1,
    label: 'Alert number 1 text',
    variant: 'info',
    visible: true,
  },
  {
    id: 2,
    label: 'Alert number 2 text',
    variant: 'success',
    visible: true,
  },
  {
    id: 3,
    label: 'Alert number 3 text',
    variant: 'warning',
    visible: true,
  },
  {
    id: 4,
    label: 'Alert number 4 text',
    variant: 'error',
    visible: true,
  },
]

export const Basic = Template.bind({})
Basic.args = {
  alerts,
}
