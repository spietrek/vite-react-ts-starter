import InsBodyText from '../atoms/InsBodyText'
import InsImage from '../atoms/InsImage'
import InsAppBar from '../molecules/InsAppBar'

const InsFooter = (): JSX.Element => {
  return (
    <InsAppBar
      position="static"
      elevation={0}
      component="footer"
      color="default"
      style={{ backgroundColor: '#fff' }}
    >
      <div className="w-full items-center justify-center text-center">
        <InsImage src="assets/images/wise_logo.png" alt="Wise" width="200" />
        <InsBodyText className="mt-2 text-lg">
          Proudly funded by The Steele Family Foundation
        </InsBodyText>
      </div>
    </InsAppBar>
  )
}

export default InsFooter
