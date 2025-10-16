import {
  View,
  StyleSheet,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import AppStack from './src/Navigations/AppStack';
import { BgImage } from './src/Theme/Images';
import { hp, wp } from './src/Theme/utiles';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';


const App = () => {
  return (
    <View style={{flex : 1}}>
      {/* <Image style={style.bgImage} source={BgImage}/> */}
      {/* <GestureHandlerRootView style={{flex: 1}}> */}
      <AppStack />

      {/* </GestureHandlerRootView> */}
    </View>
  );
};

export default App;

const style = StyleSheet.create({
 
    bgImage:{
          width : wp(100),
          height : hp(110),
          zIndex : -1,
          position : 'absolute',
          top : 0
          
      },
})