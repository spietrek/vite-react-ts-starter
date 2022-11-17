import type { ITableHeaderProps } from '../../types/common/table.type'

const InsightTableHeader = <T, K extends keyof T>({
  columns,
}: ITableHeaderProps<T, K>): JSX.Element => {
  const headers = columns
    .filter(column => !!(column.visible ?? true))
    .map((column, index) => {
      const style = {
        border: '1px solid #ccc',
        width: column.width ?? 'auto',
      }

      return (
        <th
          key={`headCell-${index}`}
          className="bg-[#f0f2f5] dark:bg-black"
          style={style}
        >
          {column.header}
        </th>
      )
    })

  return (
    <thead data-testid="insightTableHeader">
      <tr>{headers}</tr>
    </thead>
  )
}

export default InsightTableHeader
