import { combineReducers, configureStore } from '@reduxjs/toolkit'
import alertsReducer from './slices/alertsSlice'
import todosReducer from './slices/todosSlice'
import type { PreloadedState } from '@reduxjs/toolkit'

export const storeReducers = combineReducers({
  storeAlerts: alertsReducer,
  storeTodos: todosReducer,
})

export type RootState = ReturnType<typeof storeReducers>

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: storeReducers,
    preloadedState,
    devTools: true,
  })
}

export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
