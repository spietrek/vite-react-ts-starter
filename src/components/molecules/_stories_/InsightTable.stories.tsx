import InsightTable from '../InsightTable'
import type { IColumnDefinition } from '../../../types/common/table.type'
import type { ICourse } from '../../../types/wise/course.type'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Molecules/InsightTable',
  component: InsightTable,
  argTypes: {},
} as ComponentMeta<typeof InsightTable>

const Template: ComponentStory<typeof InsightTable> = args => (
  <InsightTable {...args} />
)

const data: ICourse[] = [
  {
    id: 1,
    course: 'Math',
    grade: 78,
    term: 'Fall',
    year: 2018,
    gradeLevel: 12,
  },
  {
    id: 2,
    course: 'English',
    grade: 92,
    term: 'Fall',
    year: 2018,
    gradeLevel: 12,
  },
  {
    id: 3,
    course: 'Biology',
    grade: 77,
    term: 'Fall',
    year: 2018,
    gradeLevel: 12,
  },
  {
    id: 4,
    course: 'Physics',
    grade: 91,
    term: 'Fall',
    year: 2018,
    gradeLevel: 12,
  },
  {
    id: 5,
    course: 'Economics',
    grade: 86,
    term: 'Fall',
    year: 2018,
    gradeLevel: 12,
  },
  {
    id: 6,
    course: 'Chemistry',
    grade: 88,
    term: 'Fall',
    year: 2017,
    gradeLevel: 11,
  },
]

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
  data,
  columns,
}
