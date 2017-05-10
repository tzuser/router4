import React from 'react';
import {Route,Link,Redirect} from 'react-router-dom';
const Home=({match})=>{
return(

	<div>
	Home
	<Route path={`${match.url}/test`} component={Test} />
	<Link to={`${match.url}/test`}>test</Link>
	</div>
)
}

const Test=()=>(
	<div>test</div>)
export default Home;