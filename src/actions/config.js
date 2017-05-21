import {NIGHT_MODE,THEME_COLOR} from './constants.js';
export const setNightMode=(boole)=>(
{//夜间模式
	type:NIGHT_MODE,
	night_mode:boole,
})

export const setThemeColor=(color)=>({//夜间模式
	type:THEME_COLOR,
	theme_color:color,
})
