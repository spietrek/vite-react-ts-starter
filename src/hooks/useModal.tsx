import { useCallback, useState } from 'react'

export interface IUseModalReturnType {
  visible: boolean
  show: () => void
  close: () => void
}

export interface IUseModalProps {
  defaultVisible?: boolean
}

export const useModal = ({
  defaultVisible = false,
}: IUseModalProps = {}): IUseModalReturnType => {
  const [visible, setVisible] = useState(defaultVisible)

  const show = useCallback(() => setVisible(true), [])
  const close = useCallback(() => setVisible(false), [])

  return {
    visible,
    show,
    close,
  }
}
