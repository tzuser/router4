import React from 'react';
import ReactDOM from 'react-dom';
import App from './Containers/App';

import createHistory from 'history/createBrowserHistory'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/reducers.js' // Or wherever you keep your reducers

import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware))
)

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))


ReactDOM.render(
  <Provider store={store}>
    { /* ConnectedRouter will use the store from Provider automatically */ }
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
