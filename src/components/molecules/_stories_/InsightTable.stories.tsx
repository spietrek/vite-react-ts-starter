/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { academicsData, academicColumns } from '../../../stories/data/academics'
import InsightTable from '../InsightTable'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Molecules/InsightTable',
  component: InsightTable,
  argTypes: {},
} as ComponentMeta<typeof InsightTable>

const Template: ComponentStory<typeof InsightTable> = args => (
  <InsightTable {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
  data: academicsData,
  columns: academicColumns,
}
