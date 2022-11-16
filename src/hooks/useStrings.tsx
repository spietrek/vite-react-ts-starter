import { useCallback, useEffect, useMemo, useState } from 'react'
import { removeHtmlTags } from '../helpers/strings'

interface Handlers {
  update: (newValue: string) => void
  reset: () => void
  empty: () => void
}

interface TUseStringReturn {
  state: string
  characterCount: number
  wordCount: number
  handlers: Handlers
}

interface IUseStringsProps {
  initialState?: string
  handleHtmlTags?: boolean
}

export const useStrings = ({
  initialState = '',
  handleHtmlTags = true,
}: IUseStringsProps): TUseStringReturn => {
  const [state, setState] = useState<string>(initialState)
  const [wordCount, setWordCount] = useState<number>(0)
  const [characterCount, setCharacterCount] = useState<number>(0)

  const updateStringMetrics = useCallback((): void => {
    const simpleString = handleHtmlTags ? removeHtmlTags(state).trim() : state
    setCharacterCount(simpleString.length)
    setWordCount(simpleString.split(' ').length)
  }, [handleHtmlTags, state])

  useEffect(() => {
    updateStringMetrics()
  }, [state, updateStringMetrics])

  const handlers = useMemo(
    () => ({
      update: (newValue: string) => {
        setState(newValue)
      },
      reset: () => {
        setState(initialState)
      },
      empty: () => {
        setState('')
      },
    }),
    [initialState],
  )

  return { state, characterCount, wordCount, handlers }
}
