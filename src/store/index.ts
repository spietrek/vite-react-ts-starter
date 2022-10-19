import { configureStore } from '@reduxjs/toolkit'
import alertsReducer from './slices/alertsSlice'
import todosReducer from './slices/todosSlice'

const reducers = {
  storeAlerts: alertsReducer,
  storeTodos: todosReducer,
}

export const store = configureStore({
  reducer: reducers,
  devTools: true,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
