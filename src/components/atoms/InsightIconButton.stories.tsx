import { SwatchIcon } from '@heroicons/react/24/outline'
import InsightIconButton from './InsightIconButton'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Atoms/InsightIconButton',
  component: InsightIconButton,
  argTypes: {},
} as ComponentMeta<typeof InsightIconButton>

const Template: ComponentStory<typeof InsightIconButton> = args => (
  <InsightIconButton {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
  children: <SwatchIcon className="h-6 w-6" />,
  disabled: false,
  size: 'medium',
  variant: 'primary',
}
