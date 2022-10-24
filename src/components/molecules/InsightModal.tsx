import type { PropsWithChildren } from 'react'
import { Children } from 'react'

interface IVisibleProps {
  visible: boolean
}

interface IChildrenProps {
  children: React.ReactNode
}

interface IProps extends IVisibleProps, IChildrenProps {}

interface IChild {
  type: {
    name: string
  }
}

const getChildrenGivenKey = (
  subComponentList: string[],
  children: React.ReactNode,
  objectKey: string,
): React.ReactNode => {
  return subComponentList
    .filter(key => key === objectKey)
    .map(key => {
      return Children.map(children, child => {
        const childName = (child as IChild).type?.name ?? ''

        if (childName === key) {
          return child
        }
        return null
      })
    })
}

const InsightModal = ({
  visible = false,
  children,
}: PropsWithChildren<IProps>): JSX.Element | null => {
  if (!visible) return null

  const subComponentList = Object.keys(InsightModal)

  const titleSubComponents =
    getChildrenGivenKey(subComponentList, children, 'Title') ?? []
  const contentSubComponents =
    getChildrenGivenKey(subComponentList, children, 'Content') ?? []
  const actionsSubComponents =
    getChildrenGivenKey(subComponentList, children, 'Actions') ?? []

  const titleJsx = titleSubComponents
  const contentJsx = contentSubComponents
  const actionsJsx = actionsSubComponents

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pt-5 pb-4 dark:bg-gray-700 sm:p-6 sm:pb-4">
              <div className="flex items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-2 sm:text-left">
                  <div className="leading-6">{titleJsx}</div>
                  <div className="mt-2">{contentJsx}</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              {actionsJsx}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Title = (props: IChildrenProps): JSX.Element => (
  <div>{props.children}</div>
)
InsightModal.Title = Title

const Content = (props: IChildrenProps): JSX.Element => (
  <div>{props.children}</div>
)
InsightModal.Content = Content

const Actions = (props: IChildrenProps): JSX.Element => (
  <div>{props.children}</div>
)
InsightModal.Actions = Actions

export default InsightModal
