import InsBodyText from '../atoms/InsBodyText'
import InsAppBar from '../molecules/InsAppBar'

const InsFooter = (): JSX.Element => {
  return (
    <InsAppBar
      position="static"
      elevation={0}
      component="footer"
      color="default"
    >
      <div className="w-full items-center justify-center text-center">
        <InsBodyText className="mt-2 text-lg">
          Proudly created by Insight
        </InsBodyText>
      </div>
    </InsAppBar>
  )
}

export default InsFooter
