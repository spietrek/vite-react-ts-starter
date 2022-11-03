import InsightAvatarWithText from '../InsightAvatarWithText'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Molecules/InsightAvatarWithText',
  component: InsightAvatarWithText,
  argTypes: {},
} as ComponentMeta<typeof InsightAvatarWithText>

const Template: ComponentStory<typeof InsightAvatarWithText> = args => (
  <InsightAvatarWithText {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
  title: 'Title Text',
  avatar:
    'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
  subtitle: 'Subtitle Text',
}
