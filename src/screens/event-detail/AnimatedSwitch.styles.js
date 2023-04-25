import { StyleSheet, StatusBar, Dimensions } from 'react-native'
import { COLORS, FONT_SIZE } from '../../utils/theme'
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height:100
  },
  buttonSwitch: {
 width: 50,
 height: 80,
 colorFalse: '#F1F1F1',
 colorTrue: '#630b57',
 colorEnabled: '#B57EDC',
 colorDisabled: '#630b57',
 
 }

})