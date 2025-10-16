import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { hp, rfs, wp } from "../../Theme/utiles";
import { ICONS } from "../../../Assets";

const MainHeader = ({
  onPressHeart,
  onPressNotification,
  onPressMessage,
}: {
  onPressHeart?: () => void;
  onPressNotification?: () => void;
  onPressMessage?: () => void;
}) => {
  return (
    <LinearGradient
      colors={["rgba(13,13,32,1)", "rgba(21,21,52,1)"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.container}
    >
      {/* Left logo */}
      <ICONS.logo width={rfs(72)} height={rfs(24)} />

      {/* Center (spacer) */}
      <View style={{ flex: 1 }} />

      {/* Heart Count */}
      <TouchableOpacity onPress={onPressHeart} style={styles.likesBox}>
        <Text style={styles.likesText}>5590</Text>
        <ICONS.heart />
      </TouchableOpacity>

      {/* Notification */}
      <TouchableOpacity onPress={onPressNotification} style={styles.iconWrapper}>
        <ICONS.notification />
      </TouchableOpacity>

      {/* Message */}
      <TouchableOpacity onPress={onPressMessage} style={styles.iconWrapper}>
        <ICONS.message />
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default MainHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: wp(5),
    paddingTop: hp(6),
    paddingBottom: hp(2),
    borderBottomWidth: hp(0.1),
    borderBottomColor: "rgba(255,255,255,0.1)",
    borderBottomLeftRadius: hp(4),
    borderBottomRightRadius: hp(4),

  },
  likesBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
    borderRadius: wp(3),
    paddingHorizontal: wp(2.5),
    paddingVertical: hp(0.8),
    marginRight: wp(2),
  },
  likesText: {
    color: "#FF4D9E",
    fontSize: rfs(13),
    fontWeight: "700",
    marginRight: wp(1),
  },
  iconWrapper: {
    marginLeft: wp(3),
  },
});
