import { View, Text, Image, Alert, ScrollView } from 'react-native'
import React from 'react'
import BackgroundWrapper from '../../Components/BackgroundWrapper'
import AuthHeader from '../../Components/AuthHeader'
import { hp, wp } from '../../Theme/utiles'
import PrimaryButton from '../../Components/PrimaryButton'
import { Line1, Line2 } from '../../Theme/Images'
import { MainStyle } from '../../Theme/AppStyles'
import { style } from './style'
import { ICONS } from '../../../Assets'
import { COLORS } from '../../Theme'
import { useNavigation } from '@react-navigation/native'

const Welcome = () => {
    const navigation = useNavigation<any>()
  return (
   <BackgroundWrapper>
    <ScrollView 
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{
        flex :1,
        marginTop : hp(5.2),
        justifyContent : 'space-between',
    }}>
        <View>
        <AuthHeader
       icon={true}
       heading='Hesabınıza giriş yapın.'
       title='Hoş geldiniz! Eğlenmeye devam edelim.'
       />
       <PrimaryButton
       title={'E-Mail ile Giriş Yap'}
       onPress={()=> navigation.navigate('Login')}
       isContinue={true}
       style={{
        width : wp(90),
        marginTop : hp(3)
       }}
       />
       <View style={[MainStyle.flex_center,{marginVertical : hp(4)}]}>
        <Image style={style.line} source={Line1}/>
        <Text style={style.orText}>ya da</Text>
        <Image style={style.line} source={Line2}/>

       </View>
      
         <PrimaryButton
       title={'Continue with apple'}
       onPress={()=> Alert.alert('This functionality is under process')}
       isContinue={true}
       ICON={<ICONS.apple/>}
       style={{
        backgroundColor : COLORS.GRAY1,
        width : wp(90),

       }}
       />
        <PrimaryButton
       title={'Continue with google'}
       onPress={()=> Alert.alert('This functionality is under process')}
       isContinue={true}
       ICON={<ICONS.Google/>}
       style={{
        backgroundColor : COLORS.GRAY1,
        width : wp(90),
        marginTop : hp(2)
       }}
       />
        </View>
        <View style={[MainStyle.flex_align, style.footerView]}>
                 {/* <Text style={style.footerText}>    </Text> */}
                
                 <Text style={style.footerText}>
                 Devam ederek {' '}
                    <Text style={style.footerHeading}>Kullanıcı Anlaşması, Gizlilik Politikası</Text>
                   {' '} ve {' '}
                    <Text style={style.footerHeading}>Çerez Politikasını</Text>
                 <Text style={style.footerHeading}>Kayit Ol</Text>
                 {' '} kabul etmiş olursunuz.
                 </Text>
               </View>
      </ScrollView>
   </BackgroundWrapper>
  )
}

export default Welcome