import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { styles } from './styles'
import { ICONS } from '../../../Assets'
import { useNavigation } from '@react-navigation/native'

const Splash = () => {
  const navigation = useNavigation<any>()
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('OnBoarding')  
    }, 2000);
  
    
  }, [])
  
  return (
    <View style={styles.mainWrapper}>
      <ICONS.logo/>
    </View>
  )
}

export default Splash