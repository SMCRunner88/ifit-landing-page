import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {  createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import App from './App';


const theme = createMuiTheme({
  palette: {
    main: {
      primary: '#'
    }
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


