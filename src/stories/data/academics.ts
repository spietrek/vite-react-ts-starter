/* eslint-disable @typescript-eslint/indent */
import type { IColumnDefinition } from '../../types/common/table.type'
import type { IAcademic } from '../../types/insight/academic.type'

export const academicsData: IAcademic[] = [
  {
    id: 1,
    course: 'Math',
    score: 78,
    term: 'Fall',
    year: 2018,
    gradeLevel: 12,
  },
  {
    id: 2,
    course: 'English',
    score: 92,
    term: 'Fall',
    year: 2018,
    gradeLevel: 12,
  },
  {
    id: 3,
    course: 'Biology',
    score: 77,
    term: 'Fall',
    year: 2018,
    gradeLevel: 12,
  },
  {
    id: 4,
    course: 'Physics',
    score: 91,
    term: 'Fall',
    year: 2018,
    gradeLevel: 12,
  },
  {
    id: 5,
    course: 'Economics',
    score: 86,
    term: 'Fall',
    year: 2018,
    gradeLevel: 12,
  },
  {
    id: 6,
    course: 'Chemistry',
    score: 88,
    term: 'Fall',
    year: 2017,
    gradeLevel: 11,
  },
]

export const academicColumns: Array<
  IColumnDefinition<IAcademic, keyof IAcademic>
> = [
  {
    key: 'course',
    header: 'Course',
    align: 'center',
  },
  {
    key: 'score',
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
