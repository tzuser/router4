import React from 'react'
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';

import FontIcon from 'material-ui/FontIcon';
import TzTheme from '../style/TzTheme.js';
let TabStyle=TzTheme.bottomNavigation;

const TabNav = (props) => {
  let {data,path,history}=props;
  let index=data.findIndex((item,key)=>{
    return item.path==path;
  })
  console.log(index)
  return (
      <Paper zDepth={1}>
        <BottomNavigation selectedIndex={index}>
          {data.map((item,key)=>(
            <BottomNavigationItem key={key}
              icon={<FontIcon style={{fontSize:TabStyle.iconFontSize}}  className={'icon '+item.icon}></FontIcon>}
              onTouchTap={() =>{history.push(item.path)}}
            />
          ))}
        </BottomNavigation>
      </Paper>
      )
}
export default TabNav