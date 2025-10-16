import { StyleSheet } from 'react-native';
import { COLORS, TYPOGRAPHY } from '../../Theme';
import { rfs } from '../../Theme/utiles';

export const styles = StyleSheet.create({
    radioContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
      },
      outerCircle: {
        width: 17,
        height: 17,
        borderRadius: 12,
        borderWidth: 1.7,
        borderColor: COLORS.GRAY,
        alignItems: 'center',
        justifyContent: 'center',
      },
      selectedOuterCircle: {
        borderColor: COLORS.PRIMARY,
      },
      innerCircle: {
        width: 9,
        height: 9,
        borderRadius: 6,
        backgroundColor: COLORS.PRIMARY,
      },
      label: {
        marginLeft: 10,
        fontSize: rfs(12),
        color: COLORS.GRAY,
        fontFamily : TYPOGRAPHY.Font_SEMIBOLD,
      },
});
