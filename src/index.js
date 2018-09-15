import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'npm-font-open-sans';

import 'jquery';
import 'popper.js';
import 'bootstrap';



import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ), document.getElementById('root'))

registerServiceWorker();
