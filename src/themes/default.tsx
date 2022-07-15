import { blueGrey } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: blueGrey[500],
    },
  },
})

export default theme
