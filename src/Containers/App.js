import React,{Component} from 'react'
import {BrowserRouter as Router,Route,Link,Redirect} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TzTheme from '../style/TzTheme.js';
import AppBar from 'material-ui/AppBar';

import Tab from './Tab.jsx';

const App = () => (
  <Router>
      <MuiThemeProvider muiTheme={getMuiTheme(TzTheme)}>
        <div>
        	<Route exact path="/" render={() => ( <Redirect to="/tab/home" /> )}/>
        	<Route path="/tab" component={Tab} />
        </div>
      </MuiThemeProvider>
  </Router>
)

export default App