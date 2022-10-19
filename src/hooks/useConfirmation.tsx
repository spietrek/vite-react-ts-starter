/* eslint-disable @typescript-eslint/explicit-function-return-type */
import type { PropsWithChildren } from 'react'
import { useContext, useState, createContext } from 'react'
import InsightTypography from '../components/atoms/InsightTypography'
import InsightModal from '../components/molecules/InsightModal'

interface IProps {
  open: boolean
  title: string
  message: string
  onConfirm: () => void
  onDismiss: () => void
}

const ConfirmationDialog = ({
  open,
  title,
  message,
  onConfirm,
  onDismiss,
}: PropsWithChildren<IProps>): JSX.Element | null => {
  if (!open) return null

  return (
    <InsightModal visible={open}>
      <InsightModal.Title>
        <div className="flex items-center">
          <svg
            className="h-6 w-6 text-red-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
            />
          </svg>
          <InsightTypography level="h4" className="ml-2" bold>
            {title}
          </InsightTypography>
        </div>
      </InsightModal.Title>
      <InsightModal.Content>{message}</InsightModal.Content>
      <InsightModal.Actions>
        <button
          type="button"
          onClick={onConfirm}
          className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
        >
          Confirm
        </button>
        <button
          type="button"
          onClick={onDismiss}
          className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        >
          Cancel
        </button>
      </InsightModal.Actions>
    </InsightModal>
  )
}

interface IOptions {
  title: string
  message: string
}

const defaultOptions = {
  title: 'Are you sure?',
  message: 'This action cannot be undone.',
  callback: () => {
    throw new Error('callback() not implemented')
  },
}

interface IOptionsWithCallback extends IOptions {
  callback: (result: boolean) => void
}

export interface IContextData {
  openDialog: (options: IOptionsWithCallback) => void
}

const defaultContextData: IContextData = {
  openDialog: () => {
    throw new Error('openDialog() not implemented')
  },
}

const ConfirmationContext = createContext(defaultContextData)

interface IProviderProps {
  children: React.ReactNode
}

const InsightConfirmationProvider = ({ children }: IProviderProps) => {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [dialogConfig, setDialogConfig] =
    useState<IOptionsWithCallback>(defaultOptions)

  const openDialog = ({ title, message, callback }: IOptionsWithCallback) => {
    console.log('openDialog -> setDialogOpen', setDialogOpen)
    console.log('openDialog -> dialogOpen', dialogOpen)
    setDialogOpen(true)
    setDialogConfig({ title, message, callback })
  }

  const resetDialog = () => {
    setDialogOpen(false)
    setDialogConfig(defaultOptions)
  }

  const onConfirm = () => {
    resetDialog()
    dialogConfig?.callback(true)
  }

  const onDismiss = () => {
    resetDialog()
    dialogConfig?.callback(false)
  }

  return (
    <ConfirmationContext.Provider value={{ openDialog }}>
      <ConfirmationDialog
        open={dialogOpen}
        title={dialogConfig?.title}
        message={dialogConfig?.message}
        onConfirm={onConfirm}
        onDismiss={onDismiss}
      />
      {children}
    </ConfirmationContext.Provider>
  )
}

const useConfirmation = () => {
  const { openDialog } = useContext(ConfirmationContext)

  const getConfirmation = ({ ...options }: IOptions): Promise<boolean> =>
    new Promise(resolve => {
      openDialog({ callback: resolve, ...options })
    })

  return { getConfirmation }
}

export { InsightConfirmationProvider, useConfirmation }
