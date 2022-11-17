import InsightTableHeader from './InsightTableHeader'
import InsightTableRows from './InsightTableRows'
import type { ITableProps } from '../../types/common/table.type'

const style = {
  borderCollapse: 'collapse',
} as const

const InsightTable = <T, K extends keyof T>({
  data,
  columns,
}: ITableProps<T, K>): JSX.Element => {
  return (
    <table
      className="w-full table-auto bg-white dark:bg-black"
      style={style}
      data-testid="insightTable"
    >
      <InsightTableHeader columns={columns} />
      <InsightTableRows data={data} columns={columns} />
    </table>
  )
}

export default InsightTable
