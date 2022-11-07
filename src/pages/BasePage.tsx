import { useEffect } from 'react'
import ReactGA from 'react-ga'
import { Outlet, useLocation } from 'react-router-dom'
import InsightAlertset from '../components/molecules/InsightAlertset'
import InsightDrawer from '../components/molecules/InsightDrawer'
import InsightSideNav from '../components/molecules/InsightSideNav'
import InsightFooter from '../components/organisms/InsightFooter'
import InsightHeader from '../components/organisms/InsightHeader'
import { useOnline } from '../hooks/useOnline'
import { useAppDispatch, useAppSelector } from '../hooks/useReduxHooks'
import { retrieveAlerts } from '../store/slices/alertsSlice'
import type { RootState } from '../store/index'

const TRACKING_ID = 'UA-43288618-2'
ReactGA.initialize(TRACKING_ID)

const BasePage = (): JSX.Element => {
  const location = useLocation()
  const online = useOnline()
  const dispatch = useAppDispatch()
  const alertsData = useAppSelector(
    (state: RootState) => state.storeAlerts.alerts,
  )

  useEffect(() => {
    if (online) {
      void dispatch(retrieveAlerts())
    }
  }, [dispatch, online])

  useEffect(() => {
    if (online) {
      ReactGA.pageview(window.location.pathname + window.location.search)
    }
  }, [online, location])

  const handleAlertClose = (id: number): void => {
    console.log('handleAlertClose', id)
  }

  return (
    <main className="bg-[#f0f2f5] text-black dark:bg-black dark:text-white ">
      <InsightDrawer header={<InsightHeader />} sideNav={<InsightSideNav />}>
        <div style={{ padding: '12px 16px' }}>
          <div className="mb-4">
            <InsightAlertset
              alerts={alertsData}
              onAlertClose={handleAlertClose}
            />
          </div>

          <Outlet />
          <div className="mt-4">
            <InsightFooter />
          </div>
        </div>
      </InsightDrawer>
    </main>
  )
}

export default BasePage
