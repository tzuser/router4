import React,{Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {BrowserRouter as Router,Route,Link,Redirect,Switch} from 'react-router-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import TzTheme from '../style/TzTheme.js';

import Search from './Search.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';
import Tab from './Tab.jsx';
//动画样式
import UpStyle from '../style/animation/up.css';
import UpBackStyle from '../style/animation/up_back.css';
import LeftStyle from '../style/animation/left.css';
import LeftBackStyle from '../style/animation/left_back.css';

import PageAnimation from '../Components/PageAnimation.jsx';
import PageStyle from '../style/public.css';
class App extends Component{
	render() {
		let data = [{path:'/tab',exact:false , component:Tab},
					{path:'/search',exact:false , component:Search, POP:UpBackStyle, PUSH:UpStyle},
					{path:'/login',exact:false , component:Login, POP:LeftBackStyle, PUSH:LeftStyle},
					{path:'/register',exact:false , component:Register, POP:UpBackStyle, PUSH:LeftStyle},];//动画数据
		return (
		<Router>
		  <MuiThemeProvider muiTheme={getMuiTheme(TzTheme)}>
		  	<div>
		  		<Route exact path="/" render={() => ( <Redirect to="/tab/home" /> )}/>
				<PageAnimation className={PageStyle.page} data={data} />
		  	</div>
		  </MuiThemeProvider>
		</Router>
		)
	}
} 
export default App
