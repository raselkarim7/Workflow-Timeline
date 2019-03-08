import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, BrowserRouter } from 'react-router-dom';
//import MainRoute from './routes/MainRoute';

//import 'react-widgets/dist/css/react-widgets.css';
import styles from './style.css';

import App from './components/App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,

  document.getElementById('app')
);
