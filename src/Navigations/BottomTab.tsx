import {View, Text, Platform, Image} from 'react-native';
import React, { useEffect } from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import { CustomTabBar } from '../Components/CustomBottomTab';
import Kesfet from '../Screens/Kesfet';
import Gundem from '../Screens/Gundem';
import VideoCall from '../Screens/VideoCall';
import Profile from '../Screens/Profile';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
    screenOptions={{ headerShown: false }}
    tabBar={(props) => <CustomTabBar {...props} />}
  >
    <Tab.Screen name="Keşfet" component={Kesfet} />
    <Tab.Screen name="Gündem" component={Gundem} />
    <Tab.Screen name="Create" component={View} />
    <Tab.Screen name="VideoCall" component={VideoCall} />
    <Tab.Screen name="Profil" component={Profile} />
  </Tab.Navigator>
    // <Tab.Navigator
    //   sceneContainerStyle={{
    //     backgroundColor: COLORS.WHITE,
    //   }}
    //   initialRouteName="Dashboard"
    //   screenOptions={{
    //     headerShown: false,
    //     tabBarHideOnKeyboard: true,

    //     tabBarStyle: {
    //       elevation: 0,
    //       backgroundColor: COLORS.WHITE,
    //       height: Platform.OS == 'ios' ? hp(12) : hp(11),
    //       paddingTop: heightPercentageToDP(1.8),
    //       alignItems: 'center',
    //       justifyContent: 'center',
    //       paddingBottom: Platform.OS == 'ios' ? hp(3) : heightPercentageToDP(1.8),
    //       width: widthPercentageToDP(100),
    //       borderWidth: -1,
    //     },
    //     tabBarShowLabel: false,
    //   }}>
    // </Tab.Navigator>


  );
};

export default BottomTab;
