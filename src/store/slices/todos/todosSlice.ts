import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit'
import { timeout } from '../../../helpers'
import TodosDataService, { ITodosData } from '../../../services/todos.service'
import type { RootState } from '../../../store'

interface TodosState {
  isError: boolean
  isLoading: boolean
  count: number
  todos: ITodosData[]
}

export const retrieveTodos = createAsyncThunk('todos/retrieve', async () => {
  await timeout(1500)
  const res = await TodosDataService.getAll()
  return res.data
})

const initialState = {
  isError: false,
  isLoading: false,
  count: 0,
  completedCount: 0,
  todos: [],
} as TodosState

export const todosSlice = createSlice({
  name: 'todosSlice',

  initialState,

  reducers: {
    reset: state => {
      state.isError = false
      state.isLoading = false
      state.count = 0
      state.todos = []
    },
  },

  extraReducers: builder => {
    builder.addCase(retrieveTodos.pending, state => {
      state.isError = false
      state.isLoading = true
    })

    builder.addCase(retrieveTodos.fulfilled, (state, action) => {
      state.count = action.payload.length
      state.todos = action.payload
      state.isLoading = false
    })

    builder.addCase(retrieveTodos.rejected, state => {
      state.isError = true
      state.isLoading = false
    })
  },
})

export const { reset } = todosSlice.actions

const selectTodos = (state: RootState): ITodosData[] =>
  state?.storeTodos?.todos ?? []

export const completedTodosSelector = createSelector([selectTodos], todos =>
  todos.filter((todo: ITodosData) => todo.completed),
)

export const completedTodosCountSelector = createSelector(
  [selectTodos],
  todos => todos.filter((todo: ITodosData) => todo.completed).length,
)

const { reducer } = todosSlice
export default reducer
