import { StyleSheet } from "react-native";
import { COLORS, TYPOGRAPHY } from "../../Theme";
import { hp, rfs, wp } from "../../Theme/utiles";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";

export const style = StyleSheet.create({
    screenWrapper:{
        flex : 1,
        backgroundColor : COLORS.BG_COLOR
    },
    bgImage:{
        width : wp(100),
        height : hp(110),
        zIndex : -1,
        position : 'absolute',
        
    },
    heading: {
        color: COLORS.WHITE,
        fontSize: heightPercentageToDP(9),
        fontFamily: TYPOGRAPHY.Saira_BOLD,
        letterSpacing: widthPercentageToDP(2),
      },
      indicatorWrap: {
        position: 'absolute',
        bottom: heightPercentageToDP(8),
      },
      images: {
        width: widthPercentageToDP(90),
        height: heightPercentageToDP(47),
        resizeMode: 'cover',
        marginHorizontal: widthPercentageToDP(1),
        borderRadius: heightPercentageToDP(2),
      },
      simpleText: {
        color: COLORS.WHITE,
        fontSize: rfs(24),
        fontFamily: TYPOGRAPHY.Font_SEMIBOLD,
        textAlign: 'center',
        maxWidth : wp(70),
      },
      text:{
        color: COLORS.GRAY,
        fontSize: rfs(13),
        fontFamily: TYPOGRAPHY.Font_REGULAR,
        textAlign: 'center',
        maxWidth : wp(90),
        marginTop : hp(2.2)
      },
      mainHeading: {
        color: COLORS.BLACK,
        fontSize: heightPercentageToDP(5),
        fontFamily: TYPOGRAPHY.Saira_MEDIUM,
        textAlign: 'center',
        lineHeight: heightPercentageToDP(6.2),
        textTransform: 'uppercase',
      },
      title: {
        color: COLORS.BLACK,
        fontSize: heightPercentageToDP(2.3),
        fontFamily: TYPOGRAPHY.Saira_MEDIUM,
        textAlign: 'center',
        lineHeight: heightPercentageToDP(2.85),
        paddingTop: heightPercentageToDP(1.5),
      },
      circleBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        width: widthPercentageToDP(12.5),
        height: widthPercentageToDP(12),
        borderRadius: heightPercentageToDP(10),
        backgroundColor: COLORS.PRIMARY,
      },
      paginationDots: {
        height: heightPercentageToDP(1),
        width: heightPercentageToDP(1),
        backgroundColor: COLORS.BLUE,
        margin: 2,
        borderRadius: heightPercentageToDP(10),
    
        backgroundColor: COLORS.GRAY_TWO,
      },
      dotsView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor : COLORS.Dark1,
        paddingVertical : hp(1),
        paddingHorizontal : hp(2),
        borderRadius : hp(10)
      },
      skipBtnText: {
        color: COLORS.BLACK,
        fontSize: heightPercentageToDP(2),
        fontFamily: TYPOGRAPHY.Font_LIGHT,
        paddingTop: heightPercentageToDP(1.6),
      },
      shape: {
        zIndex: -10,
        position: 'absolute',
      },
      view:{
        width : wp(100),
        alignItems : 'center'

      },
      footerView:{
        justifyContent : 'center',
        marginBottom : hp(5),
      },
      footerText:{
        color : COLORS.WHITE,
        fontSize : rfs(12),
        fontFamily  :TYPOGRAPHY.Font_REGULAR,
      },
      footerHeading:{
        color : COLORS.Pink,
        fontSize : rfs(14),
        fontFamily  :TYPOGRAPHY.Font_SEMIBOLD,
      }

})


