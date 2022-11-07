import InsightSpinner from '../InsightSpinner'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Atoms/InsightSpinner',
  component: InsightSpinner,
  argTypes: {},
} as ComponentMeta<typeof InsightSpinner>

const Template: ComponentStory<typeof InsightSpinner> = () => (
  <div style={{ height: '50px', width: '50px' }}>
    <InsightSpinner />
  </div>
)

export const Basic = Template.bind({})
Basic.args = {}
