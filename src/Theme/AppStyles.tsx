import {StyleSheet} from 'react-native';
import {COLORS} from '.';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

export const MainStyle = StyleSheet.create({
  first_Container: {
    flex: 1,
    backgroundColor: COLORS.BG_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flex_parent: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: widthPercentageToDP(4.5),
  },
  Primary_Parent: {
    flex: 1,
    backgroundColor: COLORS.BG_COLOR,
    alignItems: 'center',
  },
  default_style: {
    flex: 1,
    backgroundColor: COLORS.BG_COLOR,
    alignItems: 'center',
    paddingHorizontal: widthPercentageToDP(3),
    paddingTop: heightPercentageToDP(4),
  },
  flex_center: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

  },
  between: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  around: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  flex_between: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flex_align: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  main_flex: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    // paddingVertical: heightPercentageToDP(5),
    backgroundColor: COLORS.BG_COLOR,
  },
  main_flex_one: {
    alignItems: 'center',
    flex: 1,
    paddingVertical: heightPercentageToDP(3),
    backgroundColor: COLORS.BG_COLOR,
  },
  main_flex_grow: {
    alignItems: 'center',
    flexGrow: 1,
    paddingVertical: heightPercentageToDP(3),
    backgroundColor: COLORS.BG_COLOR,
  },



});
