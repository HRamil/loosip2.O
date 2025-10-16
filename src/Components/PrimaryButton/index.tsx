import React from 'react';
import {
  ActivityIndicator,
  Text,
  Pressable,
  TouchableOpacity,
  View,
} from 'react-native';
import {Props} from './Types';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {style} from './style';

const PrimaryButton: React.FC<
  Props & {loading?: boolean; disabled?: boolean}
> = props => {
  const isDisabled = props.loading || props.disabled;


  return (
    <>
      {props?.isContinue ? (
        <TouchableOpacity
          onPress={!isDisabled ? props.onPress : undefined}
          style={[style.nextBtn, props.style, isDisabled && {opacity: 0.5}]}
          disabled={isDisabled}>
          {props.loading ? (
            <ActivityIndicator color={props.loadingColor || 'white'} size="small" />
          ) : (
            <>
              {props.ICON && (
                <View style={{marginRight: heightPercentageToDP(1)}}>
                  {props.ICON}
                </View>
              )}
              <Text style={[style.nextBtnText, props.textStyle]}>
                {props.title}
              </Text>
            </>
          )}
        </TouchableOpacity>
      ) : (
        <Pressable
          style={[style.nextBtn, props.style, {opacity: 0.3}]}
          disabled>
          {props.ICON && (
            <View style={{marginRight: heightPercentageToDP(1)}}>
              {props.ICON}
            </View>
          )}
          <Text style={[style.nextBtnText, props.textStyle]}>
            {props.title}
          </Text>
        </Pressable>
      )}
    </>
  );
};

export default PrimaryButton;
