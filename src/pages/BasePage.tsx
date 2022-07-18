import { useEffect, useState } from 'react'
import ReactGA from 'react-ga'
import { Outlet, useLocation } from 'react-router-dom'
import InsDrawer from '../components/molecules/InsDrawer'
import InsFooter from '../components/organisms/InsFooter'
import InsHeader from '../components/organisms/InsHeader'
import InsSideNav from '../components/organisms/InsSideNav'
import { useOnline } from '../hooks/useOnline'
import { useStore } from '../providers/withThemeProvider'

const TRACKING_ID = 'UA-43288618-2'
ReactGA.initialize(TRACKING_ID)

const BasePage = (): JSX.Element => {
  const location = useLocation()
  const online = useOnline()
  const { darkMode, setDarkMode } = useStore()

  useEffect(() => {
    if (online) {
      ReactGA.pageview(window.location.pathname + window.location.search)
    }
  }, [online, location])

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

  const handleToggleDarkMode = (): void => {
    const value = !darkMode
    setDarkMode(value)
  }

  const handleToggleDrawer = (): void => {
    setAnchorOpen(!anchorOpen)
  }

  return (
    <main className="min-w-[600px] overflow-x-auto">
      <InsHeader
        darkMode={darkMode}
        onToggleDarkMode={handleToggleDarkMode}
        onToggleDrawer={handleToggleDrawer}
      />

      <div style={{ padding: '12px 16px' }}>
        <Outlet />
      </div>

      <InsDrawer anchor="left" open={anchorOpen} onClose={toggleDrawer(false)}>
        <InsSideNav onMenuClick={handleToggleDrawer} />
      </InsDrawer>

      <InsFooter />
    </main>
  )
}

export default BasePage
