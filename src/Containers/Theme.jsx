import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as configAct from '../actions/config.js';

import {Route,Link,Redirect} from 'react-router-dom';
import RestoredScroll from '../Components/RestoredScroll.jsx';
import Content from '../Components/Content.jsx';
import {IconButton,TextField,Chip,Divider,Subheader} from 'material-ui';
import Fixed from '../Components/Fixed.jsx';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import Header from '../Components/Header.jsx';
import {white,red700,pink900,purple900,deepPurple900,indigo900,blue900,lightBlue900,cyan900
,teal900,green900,lightGreen900,lime900,yellow900,amber900,orange900,deepOrange900,
brown900,blueGrey900,grey900} from 'material-ui/styles/colors';

class Theme extends Component{
	setColor(color){
		this.props.setThemeColor(color);
	}
	render() {
	let {match,history}=this.props;
	let {muiTheme}=this.context;
	return(
		<RestoredScroll id='type'>
			<Fixed style={{top:0}}>
		      <Header title="换肤"  
		     iconElementLeft={<IconButton onTouchTap={()=>{history.goBack()}} ><ArrowBack /></IconButton>} 
		       />
		    </Fixed>
			<Content style={{top:46,bottom:0}}>
				<Subheader>主色调</Subheader>
				<div style={styles.wrapper}>
					<Chip labelColor={white} backgroundColor={red700} onTouchTap={()=>{this.setColor(red700)}}  style={styles.chip} >Red</Chip>
					<Chip labelColor={white} backgroundColor={pink900} onTouchTap={()=>{this.setColor(pink900)}} style={styles.chip} >Pink</Chip>
					<Chip labelColor={white} backgroundColor={purple900} onTouchTap={()=>{this.setColor(purple900)}} style={styles.chip} >Purple</Chip>
					<Chip labelColor={white} backgroundColor={deepPurple900} onTouchTap={()=>{this.setColor(deepPurple900)}} style={styles.chip} >Deep Purple</Chip>
					<Chip labelColor={white} backgroundColor={indigo900} onTouchTap={()=>{this.setColor(indigo900)}} style={styles.chip} >Indigo</Chip>
					<Chip labelColor={white} backgroundColor={blue900} onTouchTap={()=>{this.setColor(blue900)}} style={styles.chip} >Blue</Chip>
					<Chip labelColor={white} backgroundColor={lightBlue900} onTouchTap={()=>{this.setColor(lightBlue900)}} style={styles.chip} >Light Blue</Chip>
					<Chip labelColor={white} backgroundColor={cyan900} onTouchTap={()=>{this.setColor(cyan900)}} style={styles.chip} >Cyan</Chip>
					<Chip labelColor={white} backgroundColor={teal900} onTouchTap={()=>{this.setColor(teal900)}} style={styles.chip} >Teal</Chip>
					<Chip labelColor={white} backgroundColor={green900} onTouchTap={()=>{this.setColor(green900)}} style={styles.chip} >Green</Chip>
					<Chip labelColor={white} backgroundColor={lightGreen900} onTouchTap={()=>{this.setColor(lightGreen900)}} style={styles.chip} >Light Green</Chip>
					<Chip labelColor={white} backgroundColor={lime900} onTouchTap={()=>{this.setColor(lime900)}} style={styles.chip} >Lime</Chip>
					<Chip labelColor={white} backgroundColor={yellow900} onTouchTap={()=>{this.setColor(yellow900)}} style={styles.chip} >Yellow</Chip>
					<Chip labelColor={white} backgroundColor={amber900} onTouchTap={()=>{this.setColor(amber900)}} style={styles.chip} >Amber</Chip>
					<Chip labelColor={white} backgroundColor={orange900} onTouchTap={()=>{this.setColor(orange900)}} style={styles.chip} >Orange</Chip>
					<Chip labelColor={white} backgroundColor={deepOrange900} onTouchTap={()=>{this.setColor(deepOrange900)}} style={styles.chip} >Deep Orange</Chip>
					<Chip labelColor={white} backgroundColor={brown900} onTouchTap={()=>{this.setColor(brown900)}} style={styles.chip} >Brown</Chip>
					<Chip labelColor={white} backgroundColor={blueGrey900} onTouchTap={()=>{this.setColor(blueGrey900)}} style={styles.chip} >Blue Grey</Chip>
					<Chip labelColor={white} backgroundColor={grey900} onTouchTap={()=>{this.setColor(grey900)}} style={styles.chip} >Grey</Chip>
				</div>
			</Content>
		</RestoredScroll>
	)
	}
}

Theme.contextTypes={
	muiTheme:PropTypes.object.isRequired
}
const styles = {
	chip: {
	    margin: 4,
	},
	wrapper: {
	   display: 'flex',
	   flexWrap: 'wrap',
	   padding:5,
	   paddingTop:0,
  	},
};


const mapStateToProps=({config})=>{
    return {
    	night_mode:config.night_mode
    }
}
const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({
    	setThemeColor:configAct.setThemeColor,
    },dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Theme)
