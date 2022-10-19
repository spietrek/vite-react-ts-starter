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
    <table className="w-full table-auto" style={style}>
      <InsightTableHeader columns={columns} />
      <InsightTableRows data={data} columns={columns} />
    </table>
  )
}

export default InsightTable
