import React,{Component} from 'react'
import {BrowserRouter as Router,Route,Link,Redirect} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {FontIcon,IconButton} from 'material-ui';

import Header from '../Components/Header.jsx';
import TabNav from '../Components/TabNav.jsx';
import Home from './Home.jsx';
import User from './User.jsx';
import Type from './Type.jsx';
import Fixed from '../Components/Fixed.jsx';
import Content from '../Components/Content.jsx';
const Tab=(props)=>{
  let tabData=[{title:'影院',icon:'i-x-mpg',path:'/tab/home'},{title:'分类',icon:'i-icon2',path:'/tab/type'},{title:'我的',icon:'i-geren',path:'/tab/user'}];
  let {match,location,history}=props;
  //估计路径计算索引
  let path=location.pathname;
  let index=tabData.findIndex((item,key)=>{
    return path.indexOf(item.path)!=-1;
  })
  let title=tabData[index].title;
  return (
  <div>
    <Fixed style={{top:0}}>
      <Header title={title} 
      iconElementRight={<IconButton onTouchTap={(item)=>{history.push('/search')}} iconStyle={{fontSize:20}}  >
      <i className={'icon i-sousuo_sousuo'} ></i></IconButton>} />
    </Fixed>
      <Route path="/tab/home" component={Home} />
      <Route path="/tab/type" component={Type} />
      <Route path="/tab/user" component={User} />
    <Fixed style={{bottom:0}}>
      <TabNav data={tabData} index={index} onTouchTap={(item)=>{history.push(item.path)}} />
    </Fixed>
  </div>
  )
}

export default Tab