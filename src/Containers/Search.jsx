import React,{Component} from 'react';
import {Route,Link,Redirect} from 'react-router-dom';
import RestoredScroll from '../Components/RestoredScroll.jsx';
import Content from '../Components/Content.jsx';
import {AppBar,IconButton,TextField,Chip,Divider,Subheader} from 'material-ui';
import TzTheme from '../style/TzTheme.js';
import Fixed from '../Components/Fixed.jsx';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import {red700,red200,red500,red100,red50} from 'material-ui/styles/colors';

class Search extends Component{
	render() {
	let {match,history}=this.props;
	return(
		<RestoredScroll id='type'>
			<Fixed style={{top:0}}>
		      <AppBar title={<TextField inputStyle={{color:red50}} hintStyle={{color:red100}} hintText="搜索" />}   
		      iconElementLeft={<IconButton onTouchTap={()=>{history.goBack()}} ><NavigationClose /></IconButton>} 
		      iconElementRight={<IconButton onTouchTap={(item)=>{console.log('搜索')}}
		      iconStyle={{fontSize:20}}  ><i className={'icon i-sousuo_sousuo'} ></i></IconButton>} 
		      titleStyle={{fontSize:TzTheme.appBar.fontSize}} />
		    </Fixed>
			<Content style={{top:46,bottom:50}}>
				
				<Subheader>搜索历史</Subheader>
				<div style={styles.wrapper}>
					<Chip onRequestDelete={()=>{console.log('删除')}} style={styles.chip} >React</Chip>
					<Chip onRequestDelete={()=>{console.log('删除')}} style={styles.chip} >Redux</Chip>
					<Chip onRequestDelete={()=>{console.log('删除')}} style={styles.chip} >Router</Chip>
					<Chip onRequestDelete={()=>{console.log('删除')}} style={styles.chip} >金刚岛</Chip>
					<Chip onRequestDelete={()=>{console.log('删除')}} style={styles.chip} >Tzuser</Chip>
				</div>
				<Divider />
				<Subheader>热门搜索</Subheader>
				
				<div style={styles.wrapper}>
					<Chip style={styles.chip} >React</Chip>
					<Chip style={styles.chip} >Redux</Chip>
					<Chip style={styles.chip} >Router</Chip>
					<Chip style={styles.chip} >金刚岛</Chip>
					<Chip style={styles.chip} >Tzuser</Chip>
				</div>
			</Content>
		</RestoredScroll>
	)
	}
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
export default Search;