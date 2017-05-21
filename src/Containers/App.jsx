import React,{Component} from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {BrowserRouter as Router,Route,Link,Redirect,Switch} from 'react-router-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import DayTheme from '../style/DayTheme.js';
import NightTheme from '../style/NightTheme.js';

import Search from './Search.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';
import Theme from './Theme.jsx';
import Tab from './Tab.jsx';
//动画样式
import UpStyle from '../style/animation/up.css';
import UpBackStyle from '../style/animation/up_back.css';
import LeftStyle from '../style/animation/left.css';
import LeftBackStyle from '../style/animation/left_back.css';

import PageAnimation from '../Components/PageAnimation.jsx';
import PageStyle from '../style/public.css';

import ColorToTheme from '../style/ColorToTheme';
class App extends Component{
	render() {
		let {night_mode,theme_color}=this.props;
		let data = [{path:'/tab',exact:false , component:Tab},
					{path:'/search',exact:false , component:Search, POP:UpBackStyle, PUSH:UpStyle},
					{path:'/login',exact:false , component:Login, POP:LeftBackStyle, PUSH:LeftStyle},
					{path:'/register',exact:false , component:Register, POP:LeftBackStyle, PUSH:LeftStyle},
					{path:'/theme',exact:false , component:Theme, POP:LeftBackStyle, PUSH:LeftStyle},];//动画数据
		let theme=theme_color?ColorToTheme(theme_color):DayTheme;
		theme=night_mode?NightTheme:theme;
		return (
		<Router>
		  <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
		  	<div>
		  		<Route exact path="/" render={() => ( <Redirect to="/tab/home" /> )}/>
				<PageAnimation className={PageStyle.page} data={data} />
		  	</div>
		  </MuiThemeProvider>
		</Router>
		)
	}
}


const mapStateToProps=({config})=>{
    return {
    	night_mode:config.night_mode,
    	theme_color:config.theme_color
    }
}
const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({
    	
    },dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(App)

