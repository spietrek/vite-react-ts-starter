import { IntlProvider } from 'react-intl'
import { addDecorator } from '@storybook/react'
import '../app/styles/index.css'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import enUsMessages from '../src/lang/en-US.json'
// import frFrMessages from '../src/lang/fr-FR.json'

const withProvider = story => (
  <IntlProvider locale="en-US" messages={enUsMessages}>
    {story()}
  </IntlProvider>
)

addDecorator(withProvider)

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
}
