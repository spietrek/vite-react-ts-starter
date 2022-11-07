import InsightHome from '../InsightHome'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Templates/InsightHome',
  component: InsightHome,
  argTypes: {},
} as ComponentMeta<typeof InsightHome>

const Template: ComponentStory<typeof InsightHome> = () => <InsightHome />

export const Basic = Template.bind({})
Basic.args = {}
