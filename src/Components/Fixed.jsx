import React,{Component} from 'react';

//组件悬浮
class Fixed extends Component{
	render() {
		let {style}=this.props;
		let fixedStyle=Object.assign({},styles.fixed,style);
		return (
			<div style={fixedStyle}>
				{this.props.children}
			</div>
		)
	}
}
const styles={
	fixed:{
		position:'fixed',
		width:"100%",
		zIndex:100
	},
}
export default Fixed;