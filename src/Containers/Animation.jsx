import React,{Component} from 'react';

import Search from './Search.jsx';
import Tab from './Tab.jsx';
import {BrowserRouter as Router,Route,Link,Redirect} from 'react-router-dom';
class Animation extends Component{
	render() {
		return (
			<div>
				<Route exact path="/" render={() => ( <Redirect to="/tab/home" /> )}/>
				<Route path="/tab" component={Tab} />
				<Route path="/search" component={Search} />
			</div>
			)
	}
}
export default Animation;