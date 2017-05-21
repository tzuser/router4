import {
  cyan700,red700,red50,
  grey600,
  pinkA100, pinkA200, pinkA400,
  fullWhite,grey400,white,red200

} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';

export default {
  spacing: spacing,
  fontFamily: 'Roboto, sans-serif',
  borderRadius: 2,
  palette: {
    primary1Color: red700,
    primary2Color: cyan700,
    primary3Color: grey600,
    accent1Color: pinkA200,
    accent2Color: pinkA400,
    accent3Color: pinkA100,
    textColor: grey400,
    secondaryTextColor: fade(fullWhite, 0.7),
    alternateTextColor: '#303030',
    canvasColor: '#303030',
    borderColor: fade(fullWhite, 0.3),
    disabledColor: fade(fullWhite, 0.3),
    pickerHeaderColor: fade(fullWhite, 0.12),
    clockCircleColor: fade(fullWhite, 0.12),
  },
  appBar:{
    height:45,
  }, 
  appBarTitle:{
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
  ellipseButton:{
    background:red700, 
    display: 'inline-block', 
    width: '100%', 
    color:red50, 
    textAlign: 'center', 
    lineHeight: '40px', 
    borderRadius: 20,
  }
};