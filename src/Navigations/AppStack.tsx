import {  SafeAreaView, Linking, Alert, StatusBar } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { COLORS } from '../Theme';
import Stack from './stack';

const AppStack = () => {



    return (
        <NavigationContainer >
            <SafeAreaView
                style={{backgroundColor: COLORS.WHITE}}/>
                 <StatusBar
                    translucent={true}
                    barStyle={'light-content'}
                    backgroundColor={'transparent'}
                  />
            <Stack />
        </NavigationContainer>
    );
};

export default AppStack;
