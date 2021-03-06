import {combineReducers} from 'redux';
import {NIGHT_MODE,
	THEME_COLOR,
	SET_MONEY,GET_POST_LIST} from '../actions/constants.js';

const config=(state={night_mode:false,theme_color:null},action)=>{
	switch (action.type) {
		case NIGHT_MODE:
		  return Object.assign({},state,{night_mode: action.night_mode});
		case THEME_COLOR:
			return Object.assign({},state,{theme_color: action.theme_color,night_mode:false});
		default:
			return state;
	}
}
const user = (state = {}, action) => {
	switch (action.type) {
		case SET_MONEY:
		  return Object.assign({},state,{balance: action.balance});
		default:
			return state;
	}		

};
const post = (state = {list:[],len:20,start:0,count:null},action)=>{
	switch(action.type){
		case GET_POST_LIST:
			return Object.assign({},state,{list:action.list,len:action.len,start:action.start,count:action.count})
		default:
			return state;
	}
}

export default combineReducers({config,user,post})
