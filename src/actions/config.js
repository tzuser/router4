import {NIGHT_MODE} from './constants.js';
export const setNightMode=(boole)=>({//夜间模式
	type:NIGHT_MODE,
	night_mode:boole,
})
