import React from 'react';
import {Route,Link,Redirect} from 'react-router-dom';
import RestoredScroll from '../Components/RestoredScroll.jsx';
import Content from '../Components/Content.jsx';
import SwipeableViews from 'react-swipeable-views';
import ColumnView from '../Components/ColumnView.jsx';


const Home=({match})=>{

const tilesData = [
{
    img: 'http://puui.qpic.cn/tv/0/10076887_1080607/0',
    title: '约吧大明星2·李晨爆笑喊麦挑战天佑',
    author: 'bb',
  },
  {
    img: 'http://puui.qpic.cn/tv/0/10076540_1080607/0',
    title: 'cc',
    author: 'cc',
  },
  {
    img: 'http://puui.qpic.cn/tv/0/10053888_1080607/0',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'http://puui.qpic.cn/tv/0/10063024_1080607/0',
    title: 'Camera',
    author: 'Danson67',
  },
];
const data2=[
  {
    img: 'http://puui.qpic.cn/tv/0/10073228_498280/0',
    title: 'Morning',
    author: 'fancycrave1',
    featured: true,
  },
  {
    img: 'http://puui.qpic.cn/tv/0/10072934_220123/0',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: 'http://puui.qpic.cn/tv/0/10089160_220123/0',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: 'http://puui.qpic.cn/tv/0/10067968_220123/0',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: 'http://puui.qpic.cn/tv/0/10068032_220123/0',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
 ]

return(
	<RestoredScroll id='home'>
		<Content style={{top:46,bottom:50}}>
			<SwipeableViews ignoreNativeScroll={true} hysteresis={0.1} >
			    <img style={styles.slide} src="http://p4.music.126.net/D12gc7bd8AnOcSAdbT8z6A==/19117208672269975.jpg"/>
			    <img style={styles.slide} src="http://p3.music.126.net/09hujI6_LSJD6DWK02qXwQ==/18964376555989719.jpg"/>
			    <img style={styles.slide} src="http://p3.music.126.net/_Zv6icjo_63usNOlmvXA5w==/19062233090873279.jpg"/>
			</SwipeableViews>
			<ColumnView title='推荐' data={tilesData}/>
			<ColumnView title='测试' data={data2}/>
		</Content>
	</RestoredScroll>
)
}

const styles = {
  slideContainer: {
    height: 100,
  },
  slide: {
    width:'100%',
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
};
export default Home;