import { useNavigate } from 'react-router-dom'

const UnauthorizedPage = (): JSX.Element => {
  const navigate = useNavigate()

  const goBack = (): void => navigate(-1)

  return (
    <div className="w-full">
      <h1>UNAUTHORIZED</h1>
      <br />
      <p>You do not have access to the requested page.</p>
      <div>
        <button className="btn btn-sm mt-4" onClick={goBack}>
          Go Back
        </button>
      </div>
    </div>
  )
}

export default UnauthorizedPage
