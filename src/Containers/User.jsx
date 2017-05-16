import React from 'react';
import RestoredScroll from '../Components/RestoredScroll.jsx';
import Content from '../Components/Content.jsx';

import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';

import {FontIcon,IconButton,FlatButton,Avatar,Paper} from 'material-ui';
import AttrIcon from '../Components/AttrIcon.jsx';
const User=({history})=>(
	<RestoredScroll id='user'>
		<Content style={{top:46,bottom:50}}>
		 	<div style={{height:80,padding:15,display:'flex', alignItems:'center',justifyContent:'space-between'}} >
				<div style={{display:'flex',alignItems:'center'}}>
					<Avatar size={50} src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1494621918203&di=6cd4437216ed0589a20e7c18f026685a&imgtype=0&src=http%3A%2F%2Fpic.uzzf.com%2Fup%2F2017-3%2F20173231352342415.png"  />
					<div style={{marginLeft:10}} ><div>tzuser</div><small>lv5</small></div>
				</div>
				<IconButton onTouchTap={(item)=>{history.push('/login')}}>
				     <AttrIcon icon='i-shezhi1' />
				</IconButton>
			</div>
			<Divider />
			<List>
		     <ListItem primaryText="我的消息" leftIcon={<AttrIcon icon='i-icon066' />} />
		     <ListItem primaryText="会员中心" leftIcon={<AttrIcon icon='i-huiyuan1' />} />
		     <ListItem primaryText="商城" leftIcon={<AttrIcon icon='i-cart_icon' />} />
		     <ListItem primaryText="免费试看" leftIcon={<AttrIcon icon='i-mianfeiquan' />} />
		   </List>
		   <Divider />
		   <List>
		     <ListItem primaryText="个性换肤" leftIcon={<AttrIcon icon='i-skin' />} />
		     <ListItem primaryText="推荐" leftIcon={<AttrIcon icon='i-tuijian' />} />
		   </List>
		   <Divider />
		   <List>
		     <ListItem primaryText="如何充值" rightIcon={<ActionInfo />} />
		     <ListItem primaryText="观看教程" rightIcon={<ActionInfo />} />
		   </List>
		</Content>
	</RestoredScroll>
)


export default User;