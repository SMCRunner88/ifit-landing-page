import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import App from './App';



const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0069d2"
    }
  },
  typography: {
    fontFamily: ['Open Sans', 'Helvetica', 'Arial', 'sans-serif']
  }
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


