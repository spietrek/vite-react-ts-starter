/* eslint-disable react/jsx-pascal-case */
/* eslint-disable @typescript-eslint/indent */
import { IntlProvider as IntlProvider_ } from 'react-intl'
import intlMessagesEnUs from '../lang/en-US.json'
import intlMessagesFrFr from '../lang/fr-FR.json'

const defaultLocale = 'en-US'
type locales = 'en-US' | 'fr-FR'
const supportedLocales = ['en-US', 'fr-FR']

interface IMessage {
  [key: string]: string
}

export interface ILocaleMessages {
  [key: string]: string
}

const localeMessages = {
  'en-US': intlMessagesEnUs as IMessage,
  'fr-FR': intlMessagesFrFr as IMessage,
}

export const getMessages = (locale: string): IMessage => {
  if (supportedLocales.includes(locale)) {
    const selectedLocale = (supportedLocales.find(l => l === locale) ??
      defaultLocale) as locales
    const msgs = localeMessages[selectedLocale]
    return msgs
  }

  return localeMessages[defaultLocale]
}

export const InsightIntlProvider: React.FC<
  Omit<React.ComponentProps<typeof IntlProvider_>, 'messages'> & {
    messages: ILocaleMessages | {}
  }
> = props => <IntlProvider_ {...props} />
