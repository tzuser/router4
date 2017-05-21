import React,{Component} from 'react';
import PropTypes from 'prop-types'; 
import {Paper } from 'material-ui';

//内容
class Content extends Component{
  render(){
    let {style}=this.props;
    let boxStyle=Object.assign({},styles.con,style);
 
    return (<Paper style={boxStyle}>{this.props.children}</Paper>)
  }
}

Content.contextTypes={
  muiTheme: PropTypes.object.isRequired
}
const styles={
  con:{
    width:'100%',
    position:'fixed',
    overflow:'auto',
    top:0,
    bottom:0,
    left:0,
    right:0,
    zIndex:1
  }
}
export default Content