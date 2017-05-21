import React,{Component} from 'react';
import PropTypes from 'prop-types'; 
import {Route,Link,Redirect} from 'react-router-dom';
import RestoredScroll from '../Components/RestoredScroll.jsx';
import Content from '../Components/Content.jsx';
import {IconButton,TextField,Chip,Divider,Subheader} from 'material-ui';
import Fixed from '../Components/Fixed.jsx';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Header from '../Components/Header.jsx';
class Search extends Component{
	render() {
	let {match,history}=this.props;
	let {muiTheme}=this.context;
	return(
		<RestoredScroll id='type'>
			<Fixed style={{top:0}}>
		      <Header title={<TextField {...muiTheme.appBarInput}  hintText="搜索" />}   
		      iconElementLeft={<IconButton onTouchTap={()=>{history.goBack()}} ><NavigationClose /></IconButton>} 
		      iconElementRight={<IconButton onTouchTap={(item)=>{console.log('搜索')}}
		      iconStyle={{fontSize:20}}  ><i className={'icon i-sousuo_sousuo'} ></i></IconButton>} 
		       />
		    </Fixed>
			<Content style={{top:46,bottom:0}}>
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
Search.contextTypes={
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
export default Search;