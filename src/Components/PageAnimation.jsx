import React,{Component} from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import {Route,Switch} from 'react-router-dom';
class PageAnimation extends Component{
	constructor(props) {
		super(props);
		this.paths=[];
		this.prePath=null;
	}
	/*getAnimation(pathname,action){
		let aniPaths=this.props.data;
		let res={style:'defalut',isAni:false};
		if(action=="PUSH" || action=="REPLACE"){
			let aniItem=aniPaths.find((item)=>{
				return item.path==pathname;
			})
			if(aniItem){
				if(action=="PUSH" && this.prePath!=pathname){
					this.paths.push(aniItem);//新路径时追加
				}
				if(aniItem.PUSH){
					res={style:aniItem.PUSH,isAni:true};
				}
			}
		}else if(action=="POP" && this.paths.length>0){
			let isAni=this.paths.length>1?true:false;
			let aniItem=this.paths.pop();
			if(aniItem.POP){
				res={style:aniItem.POP,isAni};
			}
		}
		this.prePath=pathname;
		return res;
	}*/
	getAnimation(pathname,action){
		let aniPaths=this.props.data;
		let res={style:'defalut',isAni:false};
		if(action=="PUSH" || action=="REPLACE"){
			let aniItem=aniPaths.find((item)=>{
				return item.path==pathname;
			})
			if(aniItem && aniItem.PUSH){
				res={style:aniItem.PUSH,isAni:true};
			}
		}else if(action=="POP"){
			let aniItem=aniPaths.find((item)=>{
				return item.path==this.prePath;
			})
			if(aniItem && aniItem.POP){
				res={style:aniItem.POP,isAni:false};
			}
		}
		this.prePath=pathname;
		return res;
	}
	render() {
		return (
			<div>
			<Route render={({location,history,match})=>{
				let data=this.props.data;
				let ani=this.getAnimation(location.pathname,history.action);//获取动画方式 {style:动画样式,isAni:是否有动画}
				console.log(ani)
				return (<CSSTransitionGroup
					component="div"
					className={this.props.className}
					transitionName={ani.style}
					transitionEnterTimeout={400}
		        	transitionLeaveTimeout={400}
			  	>
			  		<Switch location={location} key={ani.isAni && location.key} >
			  			{data.map((item,key)=>(
			  				<Route exact={item.exact} key={key} path={item.path} component={item.component} />
			  				)
			  			)}
			    	</Switch>
				</CSSTransitionGroup>)
			}} />
			</div>
		)
	}
}
export default PageAnimation;