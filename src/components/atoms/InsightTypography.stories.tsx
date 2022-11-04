import InsightTypography from './InsightTypography'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Atoms/InsightTypography',
  component: InsightTypography,
  argTypes: {},
} as ComponentMeta<typeof InsightTypography>

const Template: ComponentStory<typeof InsightTypography> = args => (
  <InsightTypography {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
  align: 'left',
  bold: false,
  children: 'Typography text',
  level: 'h1',
  uppercase: false,
}
