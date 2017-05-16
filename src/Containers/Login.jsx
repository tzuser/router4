import React,{Component} from 'react';
import {Route,Link,Redirect} from 'react-router-dom';
import RestoredScroll from '../Components/RestoredScroll.jsx';
import Content from '../Components/Content.jsx';
import {AppBar,IconButton,TextField,Divider,Subheader,FlatButton,RaisedButton} from 'material-ui';
import TzTheme from '../style/TzTheme.js';
import Fixed from '../Components/Fixed.jsx';
import {red700,red200,red500,red100,red50} from 'material-ui/styles/colors';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';

class Login extends Component{
	render() {
	let {match,history}=this.props;
	return(
		<RestoredScroll id='type'>
			<Fixed style={{top:0}}>
		      <AppBar title="登录"   
		      iconElementLeft={<IconButton onTouchTap={()=>{history.goBack()}} ><ArrowBack /></IconButton>} 
		      iconElementRight={<FlatButton onTouchTap={(item)=>{history.replace('/register')}} label="注册" />} 
		      titleStyle={{fontSize:TzTheme.appBar.fontSize}} />
		    </Fixed>
			<Content style={{top:46,bottom:0}}>
				<div style={styles.page}>
					<TextField style={{marginBottom:10}} hintText="用户名" fullWidth={true} />
					<TextField style={{marginBottom:20}} hintText="密码" type="password" fullWidth={true} />
					<a style={TzTheme.ellipseButton}>登 录</a>
				</div>
			</Content>
		</RestoredScroll>
	)
	}
}

const styles = {
	page:{
		padding:20,
		paddingTop:15,
	},
};
export default Login;