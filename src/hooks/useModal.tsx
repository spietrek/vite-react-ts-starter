import { useState } from 'react'

interface IModalResponse {
  isShowing: boolean
  setIsShowing: (value: boolean) => void
  toggle: () => void
}

const useModal = (): IModalResponse => {
  const [isShowing, setIsShowing] = useState(false)

  const toggle = (): void => {
    setIsShowing(!isShowing)
  }

  return {
    isShowing,
    setIsShowing,
    toggle,
  }
}

export default useModal
