 import React from 'react'
 import PropTypes from 'prop-types'; 
 import {AppBar} from 'material-ui';
 const Header=(props,{muiTheme})=>{
 	let pushStyle={

 	}
 	let newStyle=Object.assign({},props.style,pushStyle)
 	return (
 	  <AppBar titleStyle={muiTheme.appBarTitle} iconStyleLeft={{fontColor:'#fff'}} style={newStyle} {...props} />
	)
}
Header.contextTypes={
	muiTheme: PropTypes.object.isRequired
}

export default Header;