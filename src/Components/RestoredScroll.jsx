import React,{Component} from 'react';
//记录子组件滚动条位置及恢复
class RestoredScroll extends Component{
  componentDidMount() {
    let positons=window[this.props.id];
    if(positons){
      let obj=this.refs.box.firstChild;
      obj.scrollTop=positons[0];
      obj.scrollLeft=positons[1];
    }
  }
  componentWillUnmount() {
    let obj=this.refs.box.firstChild;
    window[this.props.id]=[obj.scrollTop,obj.scrollLeft];
  }
  render(){
    return (<div ref="box">{this.props.children}</div>)
  }
}

export default RestoredScroll