import InsightEditor from '../InsightEditor'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Molecules/InsightEditor',
  component: InsightEditor,
  argTypes: {},
} as ComponentMeta<typeof InsightEditor>

const Template: ComponentStory<typeof InsightEditor> = () => <InsightEditor />

export const Basic = Template.bind({})
Basic.args = {}
