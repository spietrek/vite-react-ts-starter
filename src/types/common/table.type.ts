import type { CELL_ALIGNMENT } from '../../constants/common/cell'
export interface IColumnDefinition<T, K extends keyof T> {
  key: K
  header: string
  width?: number
  visible?: boolean
  align?: typeof CELL_ALIGNMENT[number] | null
  renderCell?: (column: IColumnDefinition<T, K>, row: T) => React.ReactNode
}

export interface ITableProps<T, K extends keyof T> {
  data: T[]
  columns: Array<IColumnDefinition<T, K>>
}

export interface ITableHeaderProps<T, K extends keyof T> {
  columns: Array<IColumnDefinition<T, K>>
}

export interface ITableRowsProps<T, K extends keyof T> {
  data: T[]
  columns: Array<IColumnDefinition<T, K>>
}

export interface ITableRowCell<T, K extends keyof T> {
  column: IColumnDefinition<T, K>
  item: T
}
