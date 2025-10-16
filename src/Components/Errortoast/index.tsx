import React, { useEffect, useRef } from "react";
import { Animated, View, Text, TouchableOpacity, StyleSheet, Easing } from "react-native";
import { ICONS } from "../../../Assets";
import { hp, rfs, wp } from "../../Theme/utiles";
import { COLORS } from "../../Theme";


const ErrorToast = ({ message, visible, onClose }:any) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      // Fade in
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 100,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }).start();

      // Auto hide after 3 seconds
    //   const timer = setTimeout(() => {
    //     hideToast();
    //   }, 6000);

    //   return () => clearTimeout(timer);
    } else {
      hideToast();
    }
  }, [visible]);

  const hideToast = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 250,
      easing: Easing.in(Easing.ease),
      useNativeDriver: true,
    }).start(() => {
      onClose && onClose();
    });
  };

  if (!visible) return null;

  return (
    <Animated.View
      style={[
        styles.toastContainer,
        {
          opacity: fadeAnim,
          transform: [
            {
              translateY: fadeAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [20, 0],
              }),
            },
          ],
        },
      ]}
    >
      <Text style={styles.toastText}>{message}</Text>
      <TouchableOpacity onPress={hideToast}>
        <ICONS.cross/>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  toastContainer: {
    backgroundColor: COLORS.REDLIGHT, // dark purple like your image
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop : hp(2),
    // marginHorizontal: 20,
    // position: "absolute",
    // bottom: 50,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 6,
    width : wp(90)
  },
  toastText: {
    color: COLORS.RED, // red text
    fontSize: rfs(12),
    fontWeight: "500",
    flex: 1,
    marginRight: 10,
    maxWidth : wp(70)
  },
});

export default ErrorToast;
