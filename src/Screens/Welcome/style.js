import { StyleSheet } from "react-native";
import { hp, rfs, wp } from "../../Theme/utiles";
import { COLORS, TYPOGRAPHY } from "../../Theme";

export const style =  StyleSheet.create({
    line :{
        width : wp(32),
        resizeMode : 'contain',
    },
    orText:{
        color : COLORS.GRAY,
        fontSize : rfs(12),
        fontFamily : TYPOGRAPHY.Font_MEDIUM,
        paddingHorizontal : wp(3)
    },
    footerView:{
        justifyContent : 'center',
        marginBottom : hp(5),
      },
      footerText:{
        color : COLORS.WHITE,
        fontSize : rfs(10),
        fontFamily  :TYPOGRAPHY.Font_REGULAR,
        maxWidth : wp(80),
        textAlign : 'center'

      },
      footerHeading:{
        color : COLORS.Pink,
        fontSize : rfs(11),
        fontFamily  :TYPOGRAPHY.Font_SEMIBOLD,
        textAlign : 'center'
      }
})