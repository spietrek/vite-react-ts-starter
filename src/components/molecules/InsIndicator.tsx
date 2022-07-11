import { CircularProgress } from '@mui/material'

interface IProps {
  isLoading: boolean
  children?: React.ReactNode
}

const InsIndicator = ({ isLoading, children }: IProps): JSX.Element => {
  return (
    <>
      {isLoading ? (
        <div className="tw-flex tw-justify-center">
          <CircularProgress />
        </div>
      ) : (
        children
      )}
    </>
  )
}

export default InsIndicator
