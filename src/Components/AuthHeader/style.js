import {StyleSheet} from 'react-native';
import { COLORS, TYPOGRAPHY } from '../../Theme';
import { hp, rfs, wp } from '../../Theme/utiles';

export const style = StyleSheet.create({
  logo: {
    width: wp(37),
    height: hp(10),
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  heading: {
    color: COLORS.WHITE,
    fontSize: rfs(18),
    fontFamily: TYPOGRAPHY.Font_MEDIUM,
     textAlign : 'center',
    paddingVertical: hp(1.5),

  },
  mainHeading: {
    color: 'red',
    fontSize: rfs(20),
    fontFamily: TYPOGRAPHY.Font_BOLD,
    textAlign: 'center',
    paddingVertical: hp(2),
  },
  title: {
    color: COLORS.GRAY,
    fontSize: rfs(12),
    fontFamily: TYPOGRAPHY.Font_REGULAR,
    maxWidth : wp(90),
    textAlign : 'center'
  },
  para: {
    fontSize: hp(1.8),
    fontFamily: TYPOGRAPHY.Font_REGULAR,
    color: COLORS.BLACK,
    width: wp(90),
    textAlign: 'center',
    alignSelf: 'center',
    paddingTop: hp(0.7),
  },
});
