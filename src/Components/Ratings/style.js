import {StyleSheet} from 'react-native';
import { COLORS, hp, rfs, TYPOGRAPHY, wp } from '../../theme';


export const style = StyleSheet.create({
  Primary_Parent: {
    flex: 1,
    backgroundColor: COLORS.BG_COLOR,
    paddingHorizontal: wp(5),
  },
  title: {
    color: COLORS.BLACK,
    fontFamily: TYPOGRAPHY.Font_BOLD,
    fontSize: rfs(18),
    textAlign: 'center',
    marginBottom: wp(3),
  },
  title2: {
    color: COLORS.BLACK,
    fontFamily: TYPOGRAPHY.Font_BOLD,
    fontSize: rfs(18),
    marginBottom: wp(4),
    marginTop: wp(3),
  },
  line: {
    height: 1,
    backgroundColor: '#E7E7E7',
    marginVertical: wp(5),
  },
  input: {
    backgroundColor: '#FAFAFA',
    height: 150,
    paddingTop: wp(3),
  },
   backBtn: {
        padding: wp(4),
        backgroundColor: COLORS.WHITE,
        alignSelf: 'flex-start',
      },
});
