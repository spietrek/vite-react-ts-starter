import { Children } from 'react'

interface IProps {
  children: React.ReactNode
}

interface IChild {
  type: {
    name: string
  }
}

const InsCard = ({ children }: IProps): JSX.Element => {
  const subComponentList = Object.keys(InsCard)

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
    <>
      <div className="min-h-[250px] max-w-sm overflow-hidden rounded bg-white shadow-lg">
        {subComponents.map(component => component)}
      </div>
    </>
  )
}

const Media = (props: IProps): JSX.Element => <div>{props.children}</div>
InsCard.Media = Media

const Body = (props: IProps): JSX.Element => (
  <div className="px-6 py-4">{props.children}</div>
)
InsCard.Body = Body

const Footer = (props: IProps): JSX.Element => (
  <div className="border-t-2 px-6 pt-4 pb-2">{props.children}</div>
)
InsCard.Footer = Footer

export default InsCard
