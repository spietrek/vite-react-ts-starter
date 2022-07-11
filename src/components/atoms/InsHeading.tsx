interface IProps {
  className?: string
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  children?: React.ReactNode
}

const InsHeading = ({
  className,
  level = 'h3',
  children = 'Not Provided',
}: IProps): JSX.Element => {
  const Heading = level

  return <Heading className={className}>{children}</Heading>
}

export default InsHeading
