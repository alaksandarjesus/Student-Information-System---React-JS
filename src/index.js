import React from 'react';
import ReactDOM from 'react-dom';

import 'jquery-toast-plugin/dist/jquery.toast.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'npm-font-open-sans';

import 'jquery';
import 'popper.js';
import 'bootstrap';


import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
