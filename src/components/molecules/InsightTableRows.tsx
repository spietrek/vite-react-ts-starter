import clsx from 'clsx'
import type { ITableRowsProps } from '../../types/common/table.type'

const style = {
  border: '1px solid #ccc',
}

const InsightTableRows = <T, K extends keyof T>({
  data,
  columns,
}: ITableRowsProps<T, K>): JSX.Element => {
  const rows = data.map((row, index) => (
    <tr key={`bodyCell-${index}`}>
      {columns.map(column => {
        const key = column.key as string
        const data = row[column.key] as string
        const alignValue = column.align ?? ''
        const alignClass = alignValue !== '' ? `text-${alignValue}` : ''
        const classNames = clsx('p-1', alignClass)

        if (column.renderCell !== undefined) {
          return (
            <td key={key} style={style}>
              {column.renderCell(row)}
            </td>
          )
        }

        return (
          <td key={key} className={classNames} style={style}>
            {data}
          </td>
        )
      })}
    </tr>
  ))

  return <tbody>{rows}</tbody>
}

export default InsightTableRows
