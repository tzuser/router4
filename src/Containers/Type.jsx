import React,{Component} from 'react';
import {Route,Link,Redirect} from 'react-router-dom';
import RestoredScroll from '../Components/RestoredScroll.jsx';
import Content from '../Components/Content.jsx';
import SwipeableViews from 'react-swipeable-views';
import ColumnView from '../Components/ColumnView.jsx';

import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import UpStyle from '../style/up.css';
class Type extends Component{
	render() {
		let match=this.props.match;
		  const tilesData = [
		  {
		    img: 'data:image/jpeg;base64,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',
		    title: 'Breakfast',
		    author: 'jill111',
		  },
		  {
		    img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1991005007,543133750&fm=11&gp=0.jpg',
		    title: 'Tasty burger',
		    author: 'pashminu',
		  },
		  {
		    img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4035054390,669414027&fm=23&gp=0.jpg',
		    title: 'Camera',
		    author: 'Danson67',
		  },
		  {
		    img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3475395460,2568536530&fm=23&gp=0.jpg',
		    title: 'Morning',
		    author: 'fancycrave1',
		  },
		  {
		    img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=139409631,3723020689&fm=23&gp=0.jpg',
		    title: 'Hats',
		    author: 'Hans',
		  },
		  {
		    img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=86169535,2819750143&fm=23&gp=0.jpg',
		    title: 'Honey',
		    author: 'fancycravel',
		  },
		  {
		    img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2881841851,3368612937&fm=11&gp=0.jpg',
		    title: 'Vegetables',
		    author: 'jill111',
		  },
		  {
		    img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=377146690,3137136263&fm=11&gp=0.jpg',
		    title: 'Water plant',
		    author: 'BkrmadtyaKarki',
		  },
		];
		return(
			<RestoredScroll id='type'>
				<Content style={{top:46,bottom:50}}>
				    <RestoredScroll id='typeList'>
				      <div style={styles.types}>
				      {tilesData.map((item,key)=>{
				        let style=Object.assign({},styles.item,{backgroundImage:`url(${item.img})`})
				        return (<a key={key} style={style} >test</a>)
				        }
				      )}
				      </div>
				   
				    </RestoredScroll>

				</Content>
			</RestoredScroll>
		)
	}
}

const styles = {
  types:{
    overflowY:'scroll',
    height:80,
    display: '-webkit-box', /* Chrome 4+, Safari 3.1, iOS Safari 3.2+ */
	display: '-moz-box', /* Firefox 17- */
	display: '-webkit-flex', /* Chrome 21+, Safari 6.1+, iOS Safari 7+, Opera 15/16 */
	display: '-moz-flex', /* Firefox 18+ */
	display: '-ms-flexbox', /* IE 10 */
    display: 'flex',
  },
  item:{
    flexShrink:0,
    display:'inline-block',
    width:120,
    lineHeight: '70px',
    textAlign: 'center',
    color:'#ffffff',
    borderRadius:10,
    margin:'5px 5px',
  }
};
export default Type;