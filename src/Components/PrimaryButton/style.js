import {StyleSheet} from 'react-native';
import { COLORS, TYPOGRAPHY } from '../../Theme';
import { hp, rfs, wp } from '../../Theme/utiles';



export const style = StyleSheet.create({
  nextBtn: {
    width: '100%',
    height: hp(6.3),
    borderRadius: wp('3.4%'),
    backgroundColor: COLORS.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection : 'row',
  },
  nextBtnText: {
    color: COLORS.WHITE,
    fontSize: rfs('14'),
    padding: 0,
    margin: 0,
    fontFamily: TYPOGRAPHY.Font_SEMIBOLD,
  },
});
