import React,{Component} from 'react';
//内容
class Content extends Component{
  render(){
    let {style}=this.props;
    let boxStyle=Object.assign({},styles.con,style);
    boxStyle=Object.assign({},boxStyle,this.context.muiTheme.content);
    console.log(boxStyle)
    return (<div style={boxStyle}>{this.props.children}</div>)
  }
}

Content.contextTypes={
  muiTheme: React.PropTypes.object.isRequired
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