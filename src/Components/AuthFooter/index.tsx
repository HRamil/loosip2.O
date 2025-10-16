import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { rfs } from '../../Theme/utiles';
import { COLORS, TYPOGRAPHY } from '../../Theme';
import { Props } from './Types';
const AuthTextFooter: React.FC<Props> = props => {
  const navigation = useNavigation<any>();

  return (
    <View style={{marginBottom: hp(1.5)}}>
      <View
        style={{
          width: '100%',
          marginVertical: hp('3.5%'),
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={styles.title}>{props.title} </Text>
          <Text onPress={props.navigation} style={styles.heading}>
            {props.screenName}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default AuthTextFooter;

const styles = StyleSheet.create({
  heading: {
    fontSize: rfs(14.5),
    fontFamily: TYPOGRAPHY.Font_SEMIBOLD,
    lineHeight: hp('3%'),
    color: COLORS.Pink,
    marginRight: wp('1%'),
    textDecorationLine : 'underline',
  },

  title: {
    fontSize: rfs(12),
    fontFamily: TYPOGRAPHY.Font_SEMIBOLD,
    lineHeight: hp('2.7%'),
    color: COLORS.GRAY2,
  },
  
});
