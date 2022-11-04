import InsightChip from './InsightChip'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Atoms/InsightChip',
  component: InsightChip,
  argTypes: {},
} as ComponentMeta<typeof InsightChip>

const Template: ComponentStory<typeof InsightChip> = args => (
  <InsightChip {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
  id: 1,
  label: 'Attachment_title.doc',
  variant: 'ghost',
}
