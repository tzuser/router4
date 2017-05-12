import React from 'react';
import {Route,Link,Redirect} from 'react-router-dom';
import RestoredScroll from '../Components/RestoredScroll.jsx';
import Content from '../Components/Content.jsx';
import SwipeableViews from 'react-swipeable-views';
const Home=({match})=>{
return(
	<RestoredScroll id='home'>
		<Content style={{top:46,bottom:50}}>
			<SwipeableViews ignoreNativeScroll={true} hysteresis={0.1} >
			    <img style={styles.slide} src="http://p4.music.126.net/D12gc7bd8AnOcSAdbT8z6A==/19117208672269975.jpg"/>
			    <img style={styles.slide} src="http://p3.music.126.net/09hujI6_LSJD6DWK02qXwQ==/18964376555989719.jpg"/>
			    <img style={styles.slide} src="http://p3.music.126.net/_Zv6icjo_63usNOlmvXA5w==/19062233090873279.jpg"/>
			</SwipeableViews>
			<h2>test1</h2><h2>test2</h2><h2>test3</h2><h2>test4</h2><h2>test5</h2><h2>test6</h2><h2>test7</h2><h2>test8</h2><h2>test9</h2><h2>test10</h2><h2>test11</h2><h2>test12</h2><h2>test13</h2><h2>test14</h2><h2>test15</h2><h2>test16</h2><h2>test17</h2>
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