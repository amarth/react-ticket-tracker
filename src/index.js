import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import Store from './store/store';
import { LAST_ID } from './store/properties';
import { defaultState } from './store/defaults'

import './reset200802.css';
import './index.css';

let initialState = defaultState;
try {
  const storedState = JSON.parse(window.localStorage.getItem("ticket-grid"));
  console.log('storedState');
  console.dir(storedState);
  if(storedState) {
      initialState = {
        ...storedState,
        [LAST_ID]: storedState[LAST_ID] || 0
      };
  }
} catch(e) {}

const store = Store(initialState);

ReactDOM.render(
 <Provider store={store}>
   <App />
 </Provider>,
 document.getElementById('root')
);