interface IProps {
  className?: string
  children?: React.ReactNode
  inline?: boolean
}

const InsBodyText = ({
  className,
  children = 'Not Provided',
  inline = false,
}: IProps): JSX.Element => {
  if (inline) {
    return <span className={className}>{children}</span>
  }

  return <p className={className}>{children}</p>
}

export default InsBodyText
