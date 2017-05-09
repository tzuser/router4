import {combineReducers} from 'redux';
import {SET_MONEY,GET_POST_LIST} from '../actions/constants.js';

const user = (state = {}, action) => {
	switch (action.type) {
		case SET_MONEY:
		  return Object.assign({},state,{balance: action.balance});
		default:
	}		return state;

};
const post = (state = {list:[],len:20,start:0,count:null},action)=>{
	switch(action.type){
		case GET_POST_LIST:
			return Object.assign({},state,{list:action.list,len:action.len,start:action.start,count:action.count})
		default:
			return state;
	}
}

export default combineReducers({user,post})
