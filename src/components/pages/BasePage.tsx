import { useEffect, useState } from 'react'
import ReactGA from 'react-ga'
import { Outlet, useLocation } from 'react-router-dom'
import { useOnline } from '../../hooks/useOnline'
import { useDarkMode } from '../../providers/withThemeProvider'
import InsDrawer from '../molecules/InsDrawer'
import InsFooter from '../organisms/InsFooter'
import InsHeader from '../organisms/InsHeader'
import InsSideNav from '../organisms/InsSideNav'

const TRACKING_ID = 'UA-43288618-2'
ReactGA.initialize(TRACKING_ID)

const BasePage = (): JSX.Element => {
  const location = useLocation()
  const online = useOnline()
  const { darkMode, setDarkMode } = useDarkMode()

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
