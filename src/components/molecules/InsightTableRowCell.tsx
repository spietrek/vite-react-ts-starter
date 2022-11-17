import clsx from 'clsx'
import type { ITableRowCell } from '../../types/common/table.type'

const style = {
  border: '1px solid #ccc',
}

const InsightTableRows = <T, K extends keyof T>({
  column,
  item,
}: ITableRowCell<T, K>): JSX.Element => {
  const value = item[column.key] as string
  const alignValue = column.align ?? ''
  const alignClass = alignValue !== '' ? `text-${alignValue}` : ''
  const classNames = clsx('p-1', alignClass)

  if (column.renderCell !== undefined) {
    return <td style={style}>{column.renderCell(column, item)}</td>
  }

  return (
    <td className={classNames} style={style}>
      {value}
    </td>
  )
}

export default InsightTableRows
