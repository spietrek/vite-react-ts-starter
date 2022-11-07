import { withRouter } from 'storybook-addon-react-router-v6'
import InsightHeader from '../InsightHeader'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Organisms/InsightHeader',
  component: InsightHeader,
  decorators: [withRouter],
  argTypes: {},
} as ComponentMeta<typeof InsightHeader>

const Template: ComponentStory<typeof InsightHeader> = () => <InsightHeader />

export const Basic = Template.bind({})
Basic.args = {}
