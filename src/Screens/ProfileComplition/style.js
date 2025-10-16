import { StyleSheet } from "react-native";
import { COLORS, TYPOGRAPHY } from "../../Theme";
import { hp, rfs } from "../../Theme/utiles";

export const style = StyleSheet.create({
    label:{
        color :COLORS.WHITE,
        fontSize : rfs(12),
        fontFamily : TYPOGRAPHY.Font_REGULAR,
        marginBottom : hp(1.5)
    },
    linkText:{
        color :COLORS.GRAY,
        fontSize : rfs(12),
        fontFamily : TYPOGRAPHY.Font_REGULAR,
    },
    linkText:{
        color : COLORS.PRIMARY,
        fontSize :  rfs(14),
        fontFamily : TYPOGRAPHY.Font_MEDIUM,
        textDecorationLine : 'underline',
      }
})