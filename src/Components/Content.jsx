import React,{Component} from 'react';
//内容
class Content extends Component{
  render(){
    let {style}=this.props;
    let boxStyle=Object.assign({},styles.con,style);
    return (<div style={boxStyle}>{this.props.children}</div>)
  }
}
const styles={
  con:{
    width:'100%',
    position:'absolute',
    overflow:'auto',
    top:0,
    bottom:0,
    left:0,
    right:0,
    zIndex:1
  }
}
export default Content