import { useEffect, useState } from 'react'
import ReactGA from 'react-ga'
import { Outlet, useLocation } from 'react-router-dom'
import InsDrawer from '../components/molecules/InsDrawer'
import InsSideNav from '../components/organisms/InsSideNav'
import InsHeader from '../components/organisms/InsHeader'
import { useOnline } from '../hooks/useOnline'

const TRACKING_ID = 'UA-43288618-2'
ReactGA.initialize(TRACKING_ID)

const BasePage = (): JSX.Element => {
  const location = useLocation()
  const online = useOnline()

  const [anchorOpen, setAnchorOpen] = useState<boolean>(false)

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }

      setAnchorOpen(open)
    }

  const handleToggleDrawer = (): void => {
    setAnchorOpen(!anchorOpen)
  }

  useEffect(() => {
    if (online) {
      ReactGA.pageview(window.location.pathname + window.location.search)
    }
  }, [online, location])

  return (
    <main>
      <InsHeader onToggleDrawer={handleToggleDrawer} />

      <div style={{ padding: '12px 16px' }}>
        <Outlet />
      </div>

      <InsDrawer anchor="left" open={anchorOpen} onClose={toggleDrawer(false)}>
        <InsSideNav onMenuClick={handleToggleDrawer} />
      </InsDrawer>
    </main>
  )
}

export default BasePage
