import React from 'react'
import PropTypes from 'prop-types'; 
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';

import FontIcon from 'material-ui/FontIcon';

const TabNav = (props,{muiTheme}) => {
  let {data}=props;
  return (
      <Paper zDepth={1}>
        <BottomNavigation selectedIndex={props.index}>
          {data.map((item,key)=>(
            <BottomNavigationItem key={key}
              icon={<FontIcon style={{fontSize:muiTheme.bottomNavigation.iconFontSize}}  className={'icon '+item.icon}></FontIcon>}
              onTouchTap={() =>{props.onTouchTap(item)}}
            />
          ))}
        </BottomNavigation>
      </Paper>
      )
}
TabNav.contextTypes={
  muiTheme:PropTypes.object.isRequired
}
export default TabNav