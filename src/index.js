import React from 'react';
import ReactDOM from 'react-dom';

// Theming
import './index.css';
import './theming/opensans.css';
import theme from './theming/ifit-theme';
import { ThemeProvider } from '@material-ui/core/styles';

import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


