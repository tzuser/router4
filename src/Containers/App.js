import React,{Component} from 'react'
import {BrowserRouter as Router,Route,Link,IndexRoute} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TzTheme from '../style/TzTheme.js';
import AppBar from 'material-ui/AppBar';

import TabNav from './TabNav.jsx';
class Tab extends Component{
  render() {
    let match=this.props.match;
    console.log(this.props.match.url);
    return (<div>
              <AppBar title="Title" />
              <TabNav />
              <Route path='/user' component={User} />
              <h2>Home</h2>
              <Link to={`/user`}>
              User
              </Link>
            </div>)
  }
  
}
const User = () => (
  <div> this is User </div>
)

const BasicExample = () => (
  <Router>
    <MuiThemeProvider muiTheme={getMuiTheme(TzTheme)}>
      <div>
        <Route path="/tab" component={Tab}/>
      </div>
    </MuiThemeProvider>
  </Router>
)

export default BasicExample