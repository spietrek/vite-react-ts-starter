import InsightImage from '../atoms/InsightImage'
import InsightTypography from '../atoms/InsightTypography'
import InsightTextOverlay from './InsightTextOverlay'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Molecules/InsightTextOverlay',
  component: InsightTextOverlay,
  argTypes: {},
} as ComponentMeta<typeof InsightTextOverlay>

const Template: ComponentStory<typeof InsightTextOverlay> = args => (
  <InsightTextOverlay {...args} />
)

const renderText = (): JSX.Element => (
  <InsightTypography>This is the overlay text</InsightTypography>
)

export const Basic = Template.bind({})
Basic.args = {
  renderText,
  children: (
    <InsightImage
      src="https://source.unsplash.com/random/680x340"
      width="100%"
      altText=""
    />
  ),
}
