import React from 'react';
import RestoredScroll from '../Components/RestoredScroll.jsx';
import Content from '../Components/Content.jsx';

import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';

import {FontIcon} from 'material-ui';
const User=()=>(
	<RestoredScroll id='user'>
		<Content style={{top:46,bottom:50}}>

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
		     <ListItem primaryText="如何充值" rightIcon={<AttrIcon icon='' />} />
		     <ListItem primaryText="观看教程" rightIcon={<AttrIcon icon='' />} />
		   </List>
		</Content>
	</RestoredScroll>
)
const AttrIcon=(props)=>{
	console.log(props.style)
	let style=Object.assign({},props.style,{lineHeight:'24px'})
	return (<FontIcon {...props} style={style} className={`icon ${props.icon}`} ></FontIcon>)
}
export default User;