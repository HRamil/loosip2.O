import { StyleSheet } from "react-native";
import { COLORS, TYPOGRAPHY } from "../../Theme";
import { hp, rfs, wp } from "../../Theme/utiles";

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
    progressBarWrapper:{
        marginVertical : hp(3)
    },
    footerText:{
        fontSize : rfs(12),
        color :COLORS.GRAY,
        fontFamily : TYPOGRAPHY.Font_REGULAR,
        paddingLeft : wp(3),
        
    }
})