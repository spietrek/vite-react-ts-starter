import { withRouter } from 'storybook-addon-react-router-v6'
import InsHeader from '../InsHeader'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Organisms/InsHeader',
  component: InsHeader,
  decorators: [withRouter],
  argTypes: {},
} as ComponentMeta<typeof InsHeader>

const Template: ComponentStory<typeof InsHeader> = args => <InsHeader />

export const Basic = Template.bind({})
Basic.args = {
  darkMode: true,
  onToggleDarkMode: () => {
    return false
  },
}
