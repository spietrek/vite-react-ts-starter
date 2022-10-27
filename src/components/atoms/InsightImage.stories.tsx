import InsightImage from './InsightImage'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Atoms/InsightImage',
  component: InsightImage,
  argTypes: {},
} as ComponentMeta<typeof InsightImage>

const Template: ComponentStory<typeof InsightImage> = args => (
  <InsightImage {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
  src: 'https://source.unsplash.com/random/200x100',
  altText: 'Random Image',
}
