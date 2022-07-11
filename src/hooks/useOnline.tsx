import { useState, useEffect } from 'react'

const useOnline = (): boolean => {
  const [online, changeOnline] = useState<boolean>(() => navigator.onLine)

  const setOffline = (): void => {
    changeOnline(false)
  }

  const setOnline = (): void => {
    changeOnline(true)
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('online', setOnline)
      window.addEventListener('offline', setOffline)

      return () => {
        window.removeEventListener('online', setOnline)
        window.removeEventListener('offline', setOffline)
      }
    } else {
      console.warn('useOnline: window is undefined.')
    }
  }, [])

  return online
}

export { useOnline }
