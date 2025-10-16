import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {style} from './style';
import {Props} from './Types';
import {useNavigation} from '@react-navigation/native';
import { hp, wp } from '../../Theme/utiles';
import { ICONS } from '../../../Assets';
import { MainStyle } from '../../Theme/AppStyles';


const AuthHeader: React.FC<Props> = props => {
  const navigation = useNavigation<any>();
  return (
    <View
      style={{
        marginBottom: props.mainHeading ? hp(2) : hp(3),
        width : wp(90),
      }}>

      {
        props.icon &&
        <View style={{alignItems : 'center',
        //   marginVertical : hp(2),
        }}>
            <ICONS.logo width={wp(30)} height={hp(10)}/>

        </View>

      }
           <View style={[props?.backArrow ?  MainStyle.flex_between : MainStyle.flex_center]}>
           {
            props.backArrow && (
                <>
                <TouchableOpacity onPress={props.navigation}>
                    <ICONS.backArrow/>
                </TouchableOpacity>
                </>
            )
           }
           {props.heading && (
             <>
               <Text style={style.heading}>{props.heading}</Text>
     
     
             </>
           )}
           {
           <View></View>
           }
           </View>
       {
        props.title &&   <Text style={style.title}>{props.title}</Text>
      }

    </View>
  );
};

export default AuthHeader;
