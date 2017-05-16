import {red700,red200,red500,red50,grey50,grey900} from 'material-ui/styles/colors';
export default {
  content:{
    backgroundColor:grey50,
  },
	appBar:{
		color:red700,
		height:45,
		fontSize:18
	}, 
	bottomNavigation:{
		/*backgroundColor: red700,*/
    /*unselectedColor: red200,*/
    selectedColor: red700,
		height:50,
		unselectedFontSize: 11,
    selectedFontSize: 13,
    iconFontSize:24,
  },
  spacing:{
		desktopGutterLess:8
	},
	textField: {
   /* textColor: palette.textColor,
    hintColor: palette.disabledColor,
    floatingLabelColor: palette.disabledColor,
    disabledTextColor: palette.disabledColor,
    errorColor: red500,
    focusColor: palette.primary1Color,
    backgroundColor: 'transparent',
    borderColor: palette.borderColor,*/
    /*borderColor: palette.borderColor,*/
    focusColor: red500
  },
  raisedButton:{
    primaryColor: red700,
  },
  ellipseButton:{
    background:red700, 
    display: 'inline-block', 
    width: '100%', 
    color:red50, 
    textAlign: 'center', 
    lineHeight: '40px', 
    borderRadius: 20,
  }
}