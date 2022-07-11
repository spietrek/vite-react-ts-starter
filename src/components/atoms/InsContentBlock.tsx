import clsx from 'clsx'

interface IProps {
  children: React.ReactNode
  className?: string
}
const InsContentBlock = ({ children, className = '' }: IProps): JSX.Element => {
  return (
    <div
      className={clsx('tw-w-full', 'tw-bg-white', 'tw-shadow-sm', className)}
    >
      {children}
    </div>
  )
}

export default InsContentBlock
