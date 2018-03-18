import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import Store from './store/store';
import { defaultState } from './store/defaults'

import './reset200802.css';
import './index.css';

let initialState = defaultState;
try {
  const storedState = JSON.parse(window.localStorage.getItem("ticket-grid"));
  if(storedState) {
      initialState = storedState;
  }
} catch(e) {}

const store = Store(initialState);

ReactDOM.render(
 <Provider store={store}>
   <App />
 </Provider>,
 document.getElementById('root')
);