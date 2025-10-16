import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Animated,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { MainStyle } from '../../Theme/AppStyles';
import { COLORS } from '../../Theme';
import { ICONS } from '../../../Assets';
import { hp, wp } from '../../Theme/utiles';
import PrimaryButton from '../../Components/PrimaryButton';
import { style } from './style';
import { onboarding } from '../../Theme/Images';

const OnBoarding = () => {
  const navigation = useNavigation<any>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const onBoardingData = [
    {
      id: 1,
      heading: 'Keşfet, Paylaş ve Bağlantı Kur',
      title: 'İster keşfet, ister video yükle; istersen görüntülü görüşme başlat. Loosip ile yeni birini tanı!',
    },
    {
      id: 2,
      heading: 'Paylaş ve Bağlantı Kur',
      title: 'Keşfet, ister video yükle; istersen görüntülü görüşme başlat. Loosip ile yeni birini tanı!',
    },
    {
      id: 3,
      heading: 'Keşfet, Paylaş ve Bağlantı Kur',
      title: 'İster keşfet, ister video yükle; istersen görüntülü görüşme başlat. Loosip ile yeni birini tanı!',
    },
    {
      id: 4,
      heading: 'Keşfet, Paylaş ve Bağlantı Kur',
      title: 'İster keşfet, ister video yükle; istersen görüntülü görüşme başlat. Loosip ile yeni birini tanı!',
    },
    {
      id: 5,
      heading: 'Keşfet, Paylaş ve Bağlantı Kur',
      title: 'İster keşfet, ister video yükle; istersen görüntülü görüşme başlat. Loosip ile yeni birini tanı!',
    },
  ];

  // Detect current index while scrolling
  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / widthPercentageToDP(100));
    setCurrentIndex(index);
  };

  const handleNext = () => {
    if (currentIndex < onBoardingData.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1, animated: true });
    } else {
      navigation.replace('Welcome');
    }
  };

  return (
    <View style={MainStyle.main_flex}>
      <Image style={style.bgImage} source={onboarding}/>
      <View style={{ alignItems: 'center', paddingTop: hp(12) }}>

        <ICONS.logo />

        <View style={{ height: heightPercentageToDP(20), marginTop: hp(5), }}>
          <FlatList
            ref={flatListRef}
            data={onBoardingData}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            onScroll={onScroll}
            scrollEventThrottle={16}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={[style.view, { width: widthPercentageToDP(100), alignItems: 'center', paddingHorizontal: wp(5) }]}>
                <Text style={style.simpleText}>{item.heading}</Text>
                <Text style={style.text}>{item.title}</Text>
              </View>
            )}
          />
        </View>

        {/* Pagination Dots */}
        <View style={[MainStyle.flex_between, { alignSelf: 'center', marginTop: hp(2) }]}>
          <View style={style.dotsView}>
            {onBoardingData.map((_, index) => (
              <View
                key={index}
                style={[
                  style.paginationDots,
                  {
                    backgroundColor:
                      index === currentIndex ? COLORS.PRIMARY : COLORS.Dark,
                   
                  },
                ]}
              />
            ))}
          </View>
        </View>
      </View>

      {/* Footer Buttons */}
      <View>
        <PrimaryButton
          title={'Carete an account'}
          onPress={()=> navigation.navigate('Welcome')}
          isContinue={true}
          style={{
            width: wp(90),
            marginBottom: hp(3),
          }}
        />

        <View style={[MainStyle.flex_align, style.footerView]}>
          <Text style={style.footerText}>Hesabın var mı? </Text>
          <Text style={style.footerHeading}>Kayit Ol</Text>
        </View>
      </View>
    </View>
  );
};

export default OnBoarding;
