import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import InsightSpinner from '../components/atoms/InsightSpinner'
import InsightAuth from '../components/organisms/InsightAuth'
import { USER_ROLE as UR } from '../constants/insight/user'
import BasePage from '../pages/BasePage'
import HomePage from '../pages/HomePage'
import OneColumnPage from '../pages/OneColumnPage'
import ReportsPage from '../pages/ReportsPage'
import ThreeColumnPage from '../pages/ThreeColumnPage'
import TwoColumnPage from '../pages/TwoColumnPage'

const HelpPage = lazy(() => import('../pages/HelpPage'))
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'))
const SettingsPage = lazy(() => import('../pages/SettingsPage'))
const UnauthorizedPage = lazy(() => import('../pages/UnauthorizedPage'))

const AppRoutes = (): JSX.Element => (
  <Suspense fallback={<InsightSpinner />}>
    <Routes>
      <Route path="/" element={<BasePage />}>
        <Route element={<OneColumnPage />}>
          {/* Public Routes */}
          <Route path="/unauthorized" element={<UnauthorizedPage />} />
          {/* Admin Routes */}
          <Route element={<InsightAuth allowedRoles={[UR.Admin]} />}>
            <Route path="/settings" element={<SettingsPage />} />
          </Route>
        </Route>
        <Route element={<ThreeColumnPage />}>{/* Public Routes */}</Route>
        <Route element={<TwoColumnPage />}>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/help" element={<HelpPage />} />
          {/* Catch all route */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Route>
    </Routes>
  </Suspense>
)

export default AppRoutes
