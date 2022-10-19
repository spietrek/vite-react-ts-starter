import { Children } from 'react'

interface IProps {
  children: React.ReactNode
}

interface IChild {
  type: {
    name: string
  }
}

const InsightCard = ({ children }: IProps): JSX.Element => {
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
    <div className="min-h-[250px] max-w-sm overflow-hidden rounded bg-white shadow-lg">
      {subComponents.map(component => component)}
    </div>
  )
}

const Media = (props: IProps): JSX.Element => <div>{props.children}</div>
InsightCard.Media = Media

const Body = (props: IProps): JSX.Element => (
  <div className="px-6 py-4">{props.children}</div>
)
InsightCard.Body = Body

const Footer = (props: IProps): JSX.Element => (
  <div className="border-t-2 px-6 pt-4 pb-2">{props.children}</div>
)
InsightCard.Footer = Footer

export default InsightCard
