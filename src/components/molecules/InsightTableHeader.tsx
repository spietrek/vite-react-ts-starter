import type { ITableHeaderProps } from '../../types/common/table.type'

const InsightTableHeader = <T, K extends keyof T>({
  columns,
}: ITableHeaderProps<T, K>): JSX.Element => {
  const headers = columns.map((column, index) => {
    const style = {
      border: '1px solid #ccc',
      width: column.width ?? 'auto',
    }

    return (
      <th key={`headCell-${index}`} style={style}>
        {column.header}
      </th>
    )
  })

  return (
    <thead>
      <tr>{headers}</tr>
    </thead>
  )
}

export default InsightTableHeader
