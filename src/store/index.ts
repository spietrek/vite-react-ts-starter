import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import todosReducer from './slices/todos/todosSlice'

const rootPersistConfig = {
  key: 'insight-root',
  storage,
  blacklist: [],
}

const todosPersistConfig = {
  key: 'insight-todos',
  storage,
  blacklist: [],
}

const rootReducers = combineReducers({
  storeTodos: persistReducer(todosPersistConfig, todosReducer),
})

const persistedReducer = persistReducer(rootPersistConfig, rootReducers)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
