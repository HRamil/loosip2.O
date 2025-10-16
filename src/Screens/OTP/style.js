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
    footerText:{
        fontSize : rfs(12),
        color :COLORS.GRAY,
        fontFamily : TYPOGRAPHY.Font_REGULAR,
        paddingLeft : wp(3),
        
    },
    otpInput: {
        borderBottomWidth: 1.3,
        borderBottomColor: COLORS.Dark3,
        borderRadius: hp(1.4),
        width: wp('17%'),
        height: wp('17%'),
    
        padding: 0,
        fontSize: rfs(17),
        fontFamily: TYPOGRAPHY.Font_REGULAR,
        borderWidth: 1.3,
        borderColor: COLORS.Dark3,
        backgroundColor: 'transparent',
        color: COLORS.GRAY,
        marginHorizontal: wp(2),
      },
      otpBox: {
        width: wp(17),
        height: hp(7),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1.5,
        marginHorizontal: wp(1.5),
        backgroundColor: COLORS.WHITE,
      },
      
      otpText: {
        fontSize: rfs(13),
        color: COLORS.BLACK,
        textAlign: 'center',
      },
})