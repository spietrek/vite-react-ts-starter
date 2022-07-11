import InsContentBlock from '../components/atoms/InsContentBlock'
import InsFooter from '../components/organisms/InsFooter'

interface IProps {
  children: JSX.Element
}

const ColumnOnePage = ({ children }: IProps): JSX.Element => {
  return (
    <InsContentBlock>
      {children}
      <InsFooter />
    </InsContentBlock>
  )
}

export default ColumnOnePage
