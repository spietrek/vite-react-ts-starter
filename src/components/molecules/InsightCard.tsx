import type { PropsWithChildren } from 'react'
import { Children } from 'react'

interface IProps {
  children: React.ReactNode
}

interface IChild {
  type: {
    name: string
  }
}

const InsightCard = ({ children }: PropsWithChildren<IProps>): JSX.Element => {
  const subComponentList = Object.keys(InsightCard)

  const subComponents = subComponentList.map(key => {
    return Children.map(children, child => {
      const childName = (child as IChild).type?.name ?? ''

      if (childName === key) {
        return child
      }
      return null
    })
  })

  return (
    <div className="min-h-[250px] max-w-sm overflow-hidden rounded bg-gray-300 shadow-lg">
      {subComponents.map(component => component)}
    </div>
  )
}

const Media = (props: PropsWithChildren<IProps>): JSX.Element => (
  <div>{props.children}</div>
)
InsightCard.Media = Media

const Body = (props: PropsWithChildren<IProps>): JSX.Element => (
  <div className="p-4">{props.children}</div>
)
InsightCard.Body = Body

const Footer = (props: PropsWithChildren<IProps>): JSX.Element => (
  <div className="border-t-2 p-2">{props.children}</div>
)
InsightCard.Footer = Footer

export default InsightCard
