import React from 'react';
import ReactDOM from 'react-dom';
import App from './Containers/App.jsx';

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/reducers.js' // Or wherever you keep your reducers
import thunk from 'redux-thunk';

import 'babel-polyfill';//兼容IE 和苹果浏览器 Array.from等


import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

// Create a history of your choosing (we're using a browser history in this case)


// Build the middleware for intercepting and dispatching navigation actions
const middleware = [thunk]

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware))
)

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);
