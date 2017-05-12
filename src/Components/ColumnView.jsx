import React,{Component} from 'react';
import {IconButton,Paper,FlatButton } from 'material-ui';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import {GridList, GridTile} from 'material-ui/GridList';
class ColumnView extends Component{
	render() {
		let {title,data}=this.props;
		return (
		<Paper style={styles.paperList} zDepth={1} >
			<div style={styles.listTitle}>{title}</div>
			<GridList
			    cols={2}
			    cellHeight={120}
			    padding={8}
			    style={styles.gridList}
			  >
			    {data.map((tile) => (
				      <GridTile
				        key={tile.img}
				        title={tile.title}
				        actionPosition="left"
				        titlePosition="bottom"
				        titleStyle={styles.gridTitle}
				        cols={tile.featured ? 2 : 1}
				        rows={tile.featured ? 2 : 1}
				        titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
				      >
				        <img src={tile.img} />
				      </GridTile>
			    ))}
			</GridList>
		</Paper>
				)
	}
}
const styles={
  listTitle:{
  	fontSize:16,
  	lineHeight:'35px'
  },
  paperList:{
  	height:'auto',
  	padding:8,
  	paddingRight:0,
  	marginBottom:10,
  },

  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '100%',
    height: 'auto',
    overflowY: 'auto',
  },
  gridTitle:{
  	fontSize:12,
  }
}


export default ColumnView;