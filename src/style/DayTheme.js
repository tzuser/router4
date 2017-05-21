import {red700,red200,red500,red50,grey50,grey900,
cyan500,cyan700,grey400,pinkA200,grey100,grey500,grey300,  white, darkBlack, fullBlack,} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';

const Theme={
  spacing:spacing,
  palette: {
    primary1Color: red700,
    primary2Color: cyan700,
    primary3Color: grey400,
    accent1Color: pinkA200,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: red700,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  },
  appBar:{
    height:45,
  }, 
  appBarTitle:{//导航标题
    fontSize:18,
  },
  appBarInput:{//导航输入框
    inputStyle:{color:fade(white, 0.8)},
    hintStyle:{color:fade(white, 0.4)}
  },
  bottomNavigation:{
    height:50,
    unselectedFontSize: 11,
    selectedFontSize: 13,
    iconFontSize:24,
  },
  spacing:{
    desktopGutterLess:8
  },
  textField: {
  },
  raisedButton:{
  },
  ellipseButton:{//圆形按钮
    background:red700, 
    display: 'inline-block', 
    width: '100%', 
    color:red50, 
    textAlign: 'center', 
    lineHeight: '40px', 
    borderRadius: 20,
  }
}
export default Theme