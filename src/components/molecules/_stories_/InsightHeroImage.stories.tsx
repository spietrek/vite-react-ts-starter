import InsightHeroImage from '../InsightHeroImage'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Molecules/InsightHeroImage',
  component: InsightHeroImage,
  argTypes: {},
} as ComponentMeta<typeof InsightHeroImage>

const Template: ComponentStory<typeof InsightHeroImage> = args => (
  <InsightHeroImage {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
  image: 'https://source.unsplash.com/random/680x340',
  altText: 'Alt Text',
  title: 'Hero Img Title',
  buttonText: 'Button',
}
