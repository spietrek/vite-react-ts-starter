import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { USER_ROLE as UR } from '@/constants'
import InsSpinner from '@/components/atoms/InsSpinner'
import BasePage from '@/pages/BasePage'
import InsAuth from '@/components/organisms/InsAuth'

const HomePage = lazy(() => import('@/pages/HomePage'))
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'))
const SettingsPage = lazy(() => import('@/pages/SettingsPage'))
const UnauthorizedPage = lazy(() => import('@/pages/UnauthorizedPage'))

const AppRoutes = (): JSX.Element => {
  return (
    <Suspense fallback={<InsSpinner />}>
      <Routes>
        <Route path="/" element={<BasePage />}>
          {/* Public Routes */}
          <Route path="unauthorized" element={<UnauthorizedPage />} />
          <Route path="/" element={<HomePage />} />

          {/* Admin Protected Routes */}
          <Route element={<InsAuth allowedRoles={[UR.Admin]} />}>
            <Route path="settings" element={<SettingsPage />} />
          </Route>

          {/* Admin/User/Editor Protected Routes */}
          <Route
            element={<InsAuth allowedRoles={[UR.Admin, UR.User]} />}
          ></Route>

          {/* Catch all route */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default AppRoutes
