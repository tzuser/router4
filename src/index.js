import React from 'react';
import ReactDOM from 'react-dom';
import App from './Containers/App';
import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
