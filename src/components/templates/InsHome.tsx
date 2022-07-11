import InsHeading from '../atoms/InsHeading'
import InsIndicator from '../molecules/InsIndicator'

const InsHome = (): JSX.Element => {
  const loading = false
  return (
    <InsIndicator isLoading={loading}>
      <InsHeading>HOME PAGE</InsHeading>
    </InsIndicator>
  )
}

export default InsHome
