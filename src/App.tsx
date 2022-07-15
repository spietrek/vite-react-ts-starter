import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './hooks/useAuth'
import { withThemeProvider } from './providers/withThemeProvider'
import AppRoutes from './routes'
import { store } from './store'
import './styles/index.css'

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </BrowserRouter>
    </Provider>
  )
}

export default withThemeProvider(App)
