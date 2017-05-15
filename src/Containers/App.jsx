import React,{Component} from 'react'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {BrowserRouter as Router,Route,Link,Redirect,Switch} from 'react-router-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TzTheme from '../style/TzTheme.js';
import Search from './Search.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';
import Tab from './Tab.jsx';

import UpStyle from '../style/animation/up.css';
import UpBackStyle from '../style/animation/up_back.css';

import LeftStyle from '../style/animation/left.css';
import LeftBackStyle from '../style/animation/left_back.css';

import PageStyle from '../style/public.css';
class App extends Component{
	constructor(props) {
		super(props);
		this.paths=[];
	}

	getAnimation(pathname,action){
		let aniPaths=[{path:'/search',POP:UpBackStyle,PUSH:UpStyle},
					  {path:'/login',POP:LeftBackStyle,PUSH:LeftStyle},
					  {path:'/register',POP:LeftBackStyle,PUSH:LeftStyle},
					  ];//动画数据
		if(action=="PUSH"){
			let aniItem=aniPaths.find((item)=>{
				return item.path==pathname;
			})
			if(aniItem){
				this.paths.push(aniItem);
				return {style:aniItem.PUSH,isAni:true};
			}
		}else if(action=="POP" && this.paths.length>0){
			let isAni=this.paths.length>1?true:false;
			let aniItem=this.paths.pop();
			return {style:aniItem.POP,isAni};
		}else if(action=="REPLACE"){
			let aniItem=aniPaths.find((item)=>{
				return item.path==pathname;
			})
			return {style:aniItem.PUSH,isAni:true};
		}
		return {style:'defalut',isAni:false};
	}

	render() {

		return (
		<Router>
			<Route render={({location,history,match})=>{
				let ani=this.getAnimation(location.pathname,history.action);//获取动画方式 {style:动画样式,isAni:是否有动画}
				return(
				  <MuiThemeProvider muiTheme={getMuiTheme(TzTheme)}>
				  	<div>
				  		<Route exact path="/" render={() => ( <Redirect to="/tab/home" /> )}/>
 						<CSSTransitionGroup
							component="div"
							className={PageStyle.page}
							transitionName={ani.style}
							transitionEnterTimeout={400}
				        	transitionLeaveTimeout={400}
					  	>
					  		<Switch location={location} key={ani.isAni && location.key} >
					  			<Route path="/tab" component={Tab} />
					    		<Route path="/search" component={Search} />
					    		<Route path="/login" component={Login} />
					    		<Route path="/register" component={Register} />
					    	</Switch>
				    	</CSSTransitionGroup>
				  	</div>
				  </MuiThemeProvider>
				)}
			} />
		</Router>
		)
	}
} 
export default App
