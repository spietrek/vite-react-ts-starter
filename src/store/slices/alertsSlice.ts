import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { timeout } from '../../helpers/timeout'
import AlertsDataService from '../../services/alerts.service'
import type { IAlert } from '../../types/common/alert.type'

interface IAlertsState {
  isError: boolean
  isLoading: boolean
  count: number
  alerts: IAlert[]
}

export const retrieveAlerts = createAsyncThunk('alerts/retrieve', async () => {
  await timeout(200)
  const res = await AlertsDataService.getAll()
  return res.data
})

const initialState = {
  isError: false,
  isLoading: false,
  count: 0,
  alerts: [],
} as IAlertsState

export const alertsSlice = createSlice({
  name: 'alertsSlice',

  initialState,

  reducers: {
    clear: state => {
      state.isError = false
      state.isLoading = false
      state.count = 0
      state.alerts = []
    },
  },

  extraReducers: builder => {
    builder.addCase(retrieveAlerts.pending, state => {
      state.isError = false
      state.isLoading = true
    })

    builder.addCase(retrieveAlerts.fulfilled, (state, action) => {
      state.count = action.payload.length
      state.alerts = action.payload
      state.isLoading = false
    })

    builder.addCase(retrieveAlerts.rejected, state => {
      state.isError = true
      state.isLoading = false
    })
  },
})

export const { clear } = alertsSlice.actions

const { reducer } = alertsSlice

export default reducer
