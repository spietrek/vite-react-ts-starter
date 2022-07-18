import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit'
import TodosDataService from '../../../services/todos.service'
import type { RootState } from '../../../store'
import { timeout } from '../../../utilities'

interface TodoItemState {
  id: number
  title: string
  completed: boolean
  userId: number
}

interface TodosState {
  isError: boolean
  isLoading: boolean
  count: number
  todos: TodoItemState[]
}

export const retrieveTodos = createAsyncThunk('todos/retrieve', async () => {
  await timeout(1500)
  const res = await TodosDataService.getAll()
  return res.data as TodoItemState[]
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

const selectTodos = (state: RootState): TodoItemState[] =>
  state?.storeTodos?.todos ?? []

export const completedTodosSelector = createSelector([selectTodos], todos =>
  todos.filter((todo: TodoItemState) => todo.completed),
)

export const completedTodosCountSelector = createSelector(
  [selectTodos],
  todos => todos.filter((todo: TodoItemState) => todo.completed).length,
)

const { reducer } = todosSlice
export default reducer
