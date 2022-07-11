import { ComponentStory, ComponentMeta } from '@storybook/react'
import InsBodyText from './InsBodyText'

export default {
  title: 'Atoms/InsBodyText',
  component: InsBodyText,
} as ComponentMeta<typeof InsBodyText>

const Template: ComponentStory<typeof InsBodyText> = args => (
  <InsBodyText {...args} />
)

export const xs = Template.bind({})
xs.args = {
  className: 'tw-text-xs',
  children: 'Hello World',
}

export const xl3 = Template.bind({})
xl3.args = {
  className: 'tw-text-3xl',
  children: 'Hello World',
}
