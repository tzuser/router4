import React,{Component} from 'react'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {BrowserRouter as Router,Route,Link,Redirect,Switch} from 'react-router-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TzTheme from '../style/TzTheme.js';
import Search from './Search.jsx';

import Tab from './Tab.jsx';

import UpStyle from '../style/up.css';


class App extends Component{

	render() {

		return (
		<Router>
			<Route render={({location})=>(
				  <MuiThemeProvider muiTheme={getMuiTheme(TzTheme)}>
				  	<div>
				  		<Route exact path="/" render={() => ( <Redirect to="/tab/home" /> )}/>
 						<CSSTransitionGroup
							component="div"
							className={UpStyle.page}
							transitionName={UpStyle}
							transitionEnterTimeout={500}
				        	transitionLeaveTimeout={500}
					  	>
				  		<Switch location={location} key={location.pathname=='/search' && location.key} >
				  			<Route path="/tab" component={Tab} />
				    		<Route path="/search" component={Search} />
				    	</Switch>
				    	</CSSTransitionGroup>
				  	</div>
					   
				  </MuiThemeProvider>

				)} />
		</Router>
		)
	}
}

export default App
