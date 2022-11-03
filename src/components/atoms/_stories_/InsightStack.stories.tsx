import InsightStack from '../InsightStack'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Atoms/InsightStack',
  component: InsightStack,
  argTypes: {},
} as ComponentMeta<typeof InsightStack>

const Template: ComponentStory<typeof InsightStack> = args => (
  <InsightStack {...args}>
    <div className="w-[150px] bg-gray-200 p-2 text-black">ITEM 1</div>
    <div className="w-[150px] bg-gray-200 p-2 text-black">ITEM 2</div>
    <div className="w-[150px] bg-gray-200 p-2 text-black">ITEM 3</div>
    <div className="w-[150px] bg-gray-200 p-2 text-black">ITEM 4</div>
    <div className="w-[150px] bg-gray-200 p-2 text-black">ITEM 5</div>
  </InsightStack>
)

export const Row = Template.bind({})
Row.args = {
  direction: 'row',
  divider: true,
}

export const RowReverse = Template.bind({})
RowReverse.args = {
  direction: 'row-reverse',
  divider: true,
}

export const Column = Template.bind({})
Column.args = {
  direction: 'column',
  divider: true,
}

export const ColumnReverse = Template.bind({})
ColumnReverse.args = {
  direction: 'column-reverse',
  divider: true,
}
