import InsightChipset from './InsightChipset'
import type { ComponentStory, ComponentMeta } from '@storybook/react'
import type { IChip } from 'src/types/common/chip.type'

export default {
  title: 'Molecules/InsightChipset',
  component: InsightChipset,
  argTypes: {},
} as ComponentMeta<typeof InsightChipset>

const Template: ComponentStory<typeof InsightChipset> = args => (
  <InsightChipset {...args} />
)

const chips: IChip[] = [
  {
    id: 1,
    label: 'Chip 1.doc',
    variant: 'ghost',
  },
  {
    id: 2,
    label: 'Chip 2.doc',
    variant: 'info',
  },
  {
    id: 3,
    label: 'Chip 3.doc',
    variant: 'success',
  },
  {
    id: 4,
    label: 'Chip 4.doc',
    variant: 'warning',
  },
  {
    id: 5,
    label: 'Chip 5.doc',
    variant: 'error',
  },
]

export const Basic = Template.bind({})
Basic.args = {
  chips,
}
