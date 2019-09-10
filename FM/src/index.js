import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App'

import {BrowserRouter as Router} from 'react-router-dom'

import './bootstrap-3.3.7-dist/css/bootstrap.css'
import { Provider } from 'react-redux'
import store from './store/store'
ReactDOM.render(
    <Provider store={store}>
    <Router>
<App />
    </Router>
    </Provider>
, document.getElementById('root'));