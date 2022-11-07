import { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './hooks/useAuth'
import { InsightConfirmationProvider } from './hooks/useConfirmation'
import {
  getMessages,
  InsightIntlProvider,
} from './providers/InsightIntlProvider'
import AppRoutes from './routes'
import { store } from './store'
import type { ILocaleMessages } from './providers/InsightIntlProvider'
import './styles/index.css'

const locale = navigator.language
// const locale = 'fr-FR'

const App = (): JSX.Element => {
  const [loaded, setLoaded] = useState(false)
  const [messages, setMessages] = useState<ILocaleMessages>({})

  useEffect(() => {
    const messages = getMessages(locale)
    setMessages(messages)
    setLoaded(true)
  }, [])

  if (!loaded) {
    return <div>Loading...</div>
  }

  return (
    <InsightIntlProvider
      defaultLocale="en-US"
      locale={locale}
      messages={messages}
    >
      <InsightConfirmationProvider>
        <Provider store={store}>
          <BrowserRouter>
            <AuthProvider>
              <AppRoutes />
            </AuthProvider>
          </BrowserRouter>
        </Provider>
      </InsightConfirmationProvider>
    </InsightIntlProvider>
  )
}

export default App
