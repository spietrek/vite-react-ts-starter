import { useNavigate } from 'react-router-dom'

const UnauthorizedPage = (): JSX.Element => {
  const navigate = useNavigate()

  const goBack = (): void => navigate(-1)

  return (
    <div className="tw-w-full">
      <h1>UNAUTHORIZED</h1>
      <br />
      <p>You do not have access to the requested page.</p>
      <div>
        <button className="tw-btn tw-btn-sm tw-mt-4" onClick={goBack}>
          Go Back
        </button>
      </div>
    </div>
  )
}

export default UnauthorizedPage
