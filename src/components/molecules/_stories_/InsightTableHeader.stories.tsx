import InsightTableHeader from '../InsightTableHeader'
import type { IColumnDefinition } from '../../../types/common/table.type'
import type { ICourse } from '../../../types/wise/course.type'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Molecules/InsightTableHeader',
  component: InsightTableHeader,
  argTypes: {},
} as ComponentMeta<typeof InsightTableHeader>

const Template: ComponentStory<typeof InsightTableHeader> = args => (
  <InsightTableHeader {...args} />
)

const columns: Array<IColumnDefinition<ICourse, keyof ICourse>> = [
  {
    key: 'course',
    header: 'Course',
    align: 'center',
  },
  {
    key: 'grade',
    header: 'Grade',
    align: 'center',
  },
  {
    key: 'term',
    header: 'Term',
    align: 'center',
  },
  {
    key: 'year',
    header: 'Year',
    align: 'center',
  },
  {
    key: 'gradeLevel',
    header: 'Grade Level',
    align: 'center',
  },
]

export const Basic = Template.bind({})
Basic.args = {
  columns,
}
