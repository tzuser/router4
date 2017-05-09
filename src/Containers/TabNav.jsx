import React from 'react'
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';

import FontIcon from 'material-ui/FontIcon';
import TzTheme from '../style/TzTheme.js';
let TabStyle=TzTheme.bottomNavigation;

const TabNav = () => (
      <Paper zDepth={1}>
        <BottomNavigation selectedIndex={0}>
          <BottomNavigationItem
            icon={<FontIcon style={{fontSize:TabStyle.iconFontSize}} className={'icon i-x-mpg'}></FontIcon>}
            onTouchTap={() =>{console.log('tz')}}
          />
          <BottomNavigationItem
            icon={<FontIcon style={{fontSize:TabStyle.iconFontSize}} className={'icon i-icon2'}></FontIcon>}
            onTouchTap={() =>{console.log('tz')}}
          />
          <BottomNavigationItem
            icon={<FontIcon style={{fontSize:TabStyle.iconFontSize}} className={'icon i-geren'}></FontIcon>}
            onTouchTap={() =>{console.log('tz')}}
          />
        </BottomNavigation>
      </Paper>
)
export default TabNav