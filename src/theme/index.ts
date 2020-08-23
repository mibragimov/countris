import { createMuiTheme } from '@material-ui/core/styles';

export const light = createMuiTheme({
  typography: {
    fontFamily: 'Nunito Sans, sans-serif',
  },
  overrides: {
    MuiTypography: {
      body1: {
        fontSize: '14px',
        fontWeight: 600,
      },
      body2: {
        fontWeight: 300,
      },
      h5: {
        fontWeight: 600,
      },
      h6: {
        fontWeight: 600,
      },
    },
  },
  palette: {
    primary: {
      main: 'hsl(0, 0%, 98%)',
    },
    secondary: {
      main: 'hsl(0, 0%, 100%)',
    },
    grey: {
      A100: '#eee',
    },
    text: {
      primary: 'hsl(200, 15%, 8%)',
    },
  },
});
export const dark = createMuiTheme({
  typography: {
    fontFamily: 'Nunito Sans, sans-serif',
  },
  overrides: {
    MuiMenu: {
      list: {
        backgroundColor: 'hsl(209, 23%, 22%)',
      },
    },
    MuiTypography: {
      paragraph: {
        color: 'hsl(0, 0%, 100%)',
      },
      body1: {
        color: 'hsl(0, 0%, 100%)',
        fontSize: '14px',
        fontWeight: 600,
      },
      body2: {
        color: 'hsl(0, 0%, 100%)',
        fontWeight: 300,
      },
      h5: {
        fontWeight: 600,
      },
      h6: {
        color: 'hsl(0, 0%, 100%)',
        fontWeight: 600,
      },
    },
  },
  palette: {
    type: 'dark',
    background: {
      default: 'hsl(207, 26%, 17%)',
    },
    primary: {
      main: 'hsl(207, 26%, 17%)',
    },
    secondary: {
      main: 'hsl(209, 23%, 22%)',
    },
    grey: {
      A100: 'hsl(209, 23%, 22%)',
    },
    text: {
      primary: 'hsl(0, 0%, 100%)',
    },
  },
});
