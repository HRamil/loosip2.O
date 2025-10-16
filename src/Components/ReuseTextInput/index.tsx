import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';
import { COLORS, TYPOGRAPHY } from '../../Theme';
import { hp, rfs, wp } from '../../Theme/utiles';
import { Types } from './Types';


const Reuse_TextInput: React.FC<Types> = props => {
  return (
    <View
      style={{
        borderColor: props.isFocus ? COLORS.Dark3 : 'transparent',
        backgroundColor:  COLORS.Dark2,

        ...styles.InputStyle,
        ...props.CustomInputStyle,
      }}>
      <View style={{
        marginRight : props.addLeft ? wp(2) : 0,
      }}>
      {props.addLeft}

      </View>
      <TextInput

        style={{
          flex: 1,
          includeFontPadding:false,
          color: COLORS.WHITE,
          fontFamily: TYPOGRAPHY.Font_REGULAR,
          height: '100%',
          marginHorizontal: '1.2%',
          marginLeft: props.addLeft ?  wp(2) : 0,
          width : wp(65),
          ...props.CustomTextInput,
        }}
        defaultValue={props.defaultValue}
        placeholder={props.placeholder}
        placeholderTextColor={
          props.placeholderTextColor ? props.placeholderTextColor : COLORS.WHITE
        }
        keyboardType={props.keyboardType}
        onChangeText={props.onChangeText}
        autoCapitalize={props.autoCapitalize}
        multiline={props.multiline}
        editable={props.editable}
        value={props.value}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        numberOfLines={props.numberOfLines}
        secureTextEntry={props.secureTextEntry}
        textAlignVertical={props.textAlign}
        autoComplete="off"
        scrollEnabled={false}
        onSubmitEditing={props.onSubmitEditing}
        returnKeyType={props.returnKeyType}
        maxLength={props.maxLength}
      />
      <TouchableOpacity style={{
        marginRight : wp(2),
        ...props.rightViewStyle,
      }} onPress={props.onPress}>
        {props.addRight}
      </TouchableOpacity>
    </View>
  );
};

export default Reuse_TextInput;

const styles = StyleSheet.create({
  InputStyle: {
    width: wp(90),
    height: 53,
    borderRadius: 17,
    borderWidth: 1,
    alignSelf: 'center',
    paddingHorizontal: '5%',
    paddingRight: wp(2),
    marginBottom: '4.5%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    includeFontPadding : false,
    paddingBottom : 0,
  },
});


