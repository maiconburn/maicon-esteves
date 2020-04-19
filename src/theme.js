import { createMuiTheme } from '@material-ui/core/'
import red from '@material-ui/core/colors/red'

const defaultTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#FFF',
    },
    terciary: {
      main: '#2274A5',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
})

const { breakpoints, typography: { pxToRem } } = defaultTheme

const theme = {
  ...defaultTheme,
  overrides: {
    MuiTypography: {
      h1: {
        fontSize: "5rem",
        [breakpoints.down("xs")]: {
          fontSize: "3rem"
        }
      }
    }
  }
}

export default theme
