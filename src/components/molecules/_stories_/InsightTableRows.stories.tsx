/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { academicsData, academicColumns } from '../../../stories/data/academics'
import InsightTableRows from '../InsightTableRows'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Molecules/InsightTableRows',
  component: InsightTableRows,
  argTypes: {},
} as ComponentMeta<typeof InsightTableRows>

const Template: ComponentStory<typeof InsightTableRows> = args => (
  <InsightTableRows {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
  data: academicsData,
  columns: academicColumns,
}
