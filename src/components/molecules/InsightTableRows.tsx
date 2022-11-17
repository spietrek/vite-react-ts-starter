import InsightTableRowCell from './InsightTableRowCell'
import type { ITableRowsProps } from '../../types/common/table.type'

const InsightTableRows = <T, K extends keyof T>({
  data,
  columns,
}: ITableRowsProps<T, K>): JSX.Element => {
  const rows = data.map((row, index) => (
    <tr key={`bodyCell-${index}`}>
      {columns
        .filter(column => !!(column.visible ?? true))
        .map(column => {
          const key = column.key as string

          return <InsightTableRowCell key={key} column={column} item={row} />
        })}
    </tr>
  ))

  return <tbody>{rows}</tbody>
}

export default InsightTableRows
