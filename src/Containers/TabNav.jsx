import React from 'react'
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';

import FontIcon from 'material-ui/FontIcon';
import TzTheme from '../style/TzTheme.js';
let TabStyle=TzTheme.bottomNavigation;

const TabNav = (props) => {
  let {data}=props;
  return (
      <Paper zDepth={1}>
        <BottomNavigation selectedIndex={props.index}>
          {data.map((item,key)=>(
            <BottomNavigationItem key={key}
              icon={<FontIcon style={{fontSize:TabStyle.iconFontSize}}  className={'icon '+item.icon}></FontIcon>}
              onTouchTap={() =>{props.onTouchTap(item)}}
            />
          ))}
        </BottomNavigation>
      </Paper>
      )
}
export default TabNav