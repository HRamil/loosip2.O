import { View, Text, Alert, TouchableOpacity, Platform } from 'react-native'
import React, { useState } from 'react'
import BackgroundWrapper from '../../Components/BackgroundWrapper'
import AuthHeader from '../../Components/AuthHeader'
import { hp, rfs, wp } from '../../Theme/utiles'
import { useNavigation } from '@react-navigation/native'
import Reuse_TextInput from '../../Components/ReuseTextInput'
import { style } from './style'
import { ICONS } from '../../../Assets'
import PrimaryButton from '../../Components/PrimaryButton'
import { COLORS } from '../../Theme'
import AuthTextFooter from '../../Components/AuthFooter'
import RadioButton from '../../Components/RadioButton'
import { MainStyle } from '../../Theme/AppStyles'
import ErrorToast from '../../Components/Errortoast'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const SuccessMessage = () => {
    const navigation = useNavigation<any>()
    const [email, setEmail] = useState('')
    const [isFocused, setIsFocused] = useState(false)
    const [isPassFocused, setIsPassFocused] = useState(false)

    const [password, setPassword] = useState('');
    const [isPassVisible, setPassVisible] = useState(true);
    const [rememberMe, setRememberMe] = useState(false)
    const [isErrorShow, setIsErrorShow] = useState(false)

    const handleLogin = ()=>{
       if(email !== '123@gmail.com' || password !== '123456'){
         setIsErrorShow(true)
       }
    }
  return (
    <BackgroundWrapper>
        <View style={{
             flex :1,
             marginTop : hp(5.2),
             justifyContent : 'space-between',
             alignItems : 'center'
        }}>
        
      
         <ICONS.logo width={wp(24)} height={hp(9)}/>
        <View style={{alignItems : 'center'}}>
            <View style={{
                marginBottom : hp(2)
            }}>
            <ICONS.check />
            </View>
          <AuthHeader
       icon={false}
       heading='Mükemmel!'
       title='Şifren başarıyla güncellendi! Artık yeni şifrenle giriş yapabilirsin '
       backArrow={false}
       navigation={()=> navigation.goBack()}
       />
       
       
        <PrimaryButton
       title={'Giriş Yap'}
       onPress={()=> handleLogin()}
       isContinue={true}
       style={{
        width : wp(90),
        marginTop : hp(2)
       }}
       />
        
     
        </View>
         <TouchableOpacity style={[MainStyle.flex_center,{marginVertical : hp(4)}]}>
                       <ICONS.arrow/>
                       <Text style={style.footerText}>Giriş Ekranına Dön</Text>
                      </TouchableOpacity>
        
    
        </View>
    </BackgroundWrapper>
  )
}

export default SuccessMessage