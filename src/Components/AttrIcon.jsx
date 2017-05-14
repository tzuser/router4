import React from 'react';
import {FontIcon,Avatar,Paper} from 'material-ui';
const AttrIcon=(props)=>{
	let style=Object.assign({},props.style,{lineHeight:'24px'})
	return (<FontIcon {...props} style={style} className={`icon ${props.icon}`} ></FontIcon>)
}
export default AttrIcon;