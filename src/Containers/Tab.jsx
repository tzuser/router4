import React,{Component} from 'react'
import {BrowserRouter as Router,Route,Link,IndexRoute} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TzTheme from '../style/TzTheme.js';
import AppBar from 'material-ui/AppBar';

import TabNav from './TabNav.jsx';
import Home from './Home.jsx';
import User from './User.jsx';


const Tab=(props)=>{
  let tabData=[{title:'Home',icon:'i-x-mpg',path:'/tab/home'},{title:'Type',icon:'i-icon2',path:'/tab/type'},{title:'User',icon:'i-geren',path:'/tab/user'}];
  let {match,location,history}=props;
  console.log(props)
  return (
  <div>
    <AppBar title={'test'} />
    <TabNav data={tabData} path={location.pathname} history={history} />
    <Route exact path="/" component={Home} />
    <Route path="/tab/home" component={Home} />
    <Route path="/tab/user" component={User} />
  </div>
  )
}

export default Tab