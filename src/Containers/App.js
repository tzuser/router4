import React,{Component} from 'react'
import {BrowserRouter as Router,Route,Link,IndexRoute} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TzTheme from '../style/TzTheme.js';
import AppBar from 'material-ui/AppBar';

import TabNav from './TabNav.jsx';
import Tab from './Tab.jsx';

const App = () => (
  <Router>
      <MuiThemeProvider muiTheme={getMuiTheme(TzTheme)}>
        <div>
          <Route exact path="/" component={Tab} />
          <Route path="/tab" component={Tab} />
        </div>
      </MuiThemeProvider>
  </Router>
)

export default App