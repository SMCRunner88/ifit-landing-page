import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0069d2"
    }
  },
  typography: {
    fontFamily: ['Open Sans', 'Helvetica', 'Arial', 'sans-serif']
  }
});

export default theme;