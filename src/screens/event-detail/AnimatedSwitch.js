import React, {useState} from 'react'
import {View, Switch} from 'react-native'
import { styles } from './AnimatedSwitch.styles'

export const AnimatedSwitch = () => {
  const [isEnabled, setIsEnabled] = useState(false)
  const toggleSwitch = () => setIsEnabled(previousState => !previousState)

  return (
    <View style={styles.container}>
      <Switch style={styles.buttonSwitch}
        trackColor={{false: '#757673', true: '#630b57'}}
        thumbColor={isEnabled ? '#B57EDC' : '#F1F1F1'}
        ios_backgroundColor='#630b57'
        onValueChange={toggleSwitch}
        value={isEnabled}
        
      />
    </View>
  )
}


