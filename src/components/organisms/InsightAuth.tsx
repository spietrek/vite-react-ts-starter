import type { PropsWithChildren } from 'react'
import { Navigate, useLocation, Outlet } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import type { USER_ROLE } from '../../constants/insight/user'

interface IProps {
  allowedRoles: USER_ROLE[]
}

const InsightAuth = ({
  allowedRoles,
}: PropsWithChildren<IProps>): JSX.Element => {
  const auth = useAuth()
  const location = useLocation()
  const roles = auth?.roles ?? []
  const isAuthenticated = auth?.authenticated ?? false
  const validRoles =
    roles.find(role => allowedRoles.includes(role)) !== undefined

  if (isAuthenticated && !validRoles) {
    return <Navigate to="/unauthorized" state={{ from: location }} replace />
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return <Outlet />
}

export default InsightAuth
