import { StyleSheet, StatusBar, Dimensions } from 'react-native'
import { COLORS, FONT_SIZE } from '../../utils/theme'
import { BottomTabBar } from '@react-navigation/bottom-tabs'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginTop: StatusBar.currentHeight
  },
  imageContainer: {
    height: 300
  },
  image: {
    width: Dimensions.get('screen').width,
    height: 300
  },
  textContainer: {
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  location: {
    fontSize: 18,
    color: '#666',
    marginBottom: 5
  },
  date: {
    marginTop: 250, 
    marginLeft:0,
     height: 50,
     width: '55%',
      borderColor: COLORS.inactive,
      borderWidth: 1,
      borderRadius: 8,
      
      fontSize: FONT_SIZE.lg,
     
      color: COLORS.white,
      backgroundColor: COLORS.secondaty,
      paddingLeft:2,
      paddingTop: 8,
      textAlign: 'center'
      
      


  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  rating: {
    marginLeft: 8,
    color: COLORS.text,
    fontSize: FONT_SIZE.md
  },
  description: {
    fontSize: 18,
    lineHeight: 26,
    marginTop: 10
  },
  map: {
    height: 250,
    marginVertical: 20,
    borderRadius: 10
  }, 
  

  assistantsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 5

  },
  imageAssistants1: {
    width: 40, 
    height: 40, 
    borderRadius: 40/ 2,
    },
  imageAssistants2: {
    width: 40, 
    height: 40, 
    borderRadius: 40/ 2,
    left: -15
  },
  imageAssistants3: {
    width: 40, 
    height: 40, 
    borderRadius: 40/ 2,
    left: -30
  },
  imageAssistants4: {
    width: 40, 
    height: 40, 
    borderRadius: 40/ 2,
    left: -45
  },
  imageAssistants5: {
    width: 40, 
    height: 40, 
    borderRadius: 40/ 2,
    left: -60
  }

})
