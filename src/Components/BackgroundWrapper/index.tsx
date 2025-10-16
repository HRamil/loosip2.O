// components/BackgroundWrapper.tsx
import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { BgImage } from '../../Theme/Images';

interface Props {
  children?: React.ReactNode;
}

const BackgroundWrapper: React.FC<Props> = ({ children }) => {
  return (
    <View style={styles.container}>

    <ImageBackground
      source={BgImage}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>{children}</View>
    </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BackgroundWrapper;
