import InsContentBlock from '../components/atoms/InsContentBlock'

interface IProps {
  children: JSX.Element
}

const ColumnOnePage = ({ children }: IProps): JSX.Element => {
  return <InsContentBlock>{children}</InsContentBlock>
}

export default ColumnOnePage
