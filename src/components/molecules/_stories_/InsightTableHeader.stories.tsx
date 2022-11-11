/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { academicColumns } from '../../../stories/data/academics'
import InsightTableHeader from '../InsightTableHeader'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Molecules/InsightTableHeader',
  component: InsightTableHeader,
  argTypes: {},
} as ComponentMeta<typeof InsightTableHeader>

const Template: ComponentStory<typeof InsightTableHeader> = args => (
  <InsightTableHeader {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
  columns: academicColumns,
}
