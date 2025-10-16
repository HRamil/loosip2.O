import React, {useRef} from 'react';
import {
  Animated,
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { wp } from '../../Theme/utiles';


interface CustomRatingProps {
  totalStars?: number;
  rating: number;
  activeImage: ImageSourcePropType;
  inactiveImage: ImageSourcePropType;
  halfStarImage?: ImageSourcePropType;
  imageSize?: number;
  onPress?: (rating: number) => void;
  isViewOnly?: boolean;
}

const CustomRating: React.FC<CustomRatingProps> = ({
  totalStars = 5,
  rating,
  activeImage,
  inactiveImage,
  halfStarImage,
  imageSize = 30,
  onPress,
  isViewOnly = false,
}) => {
  const animationValues = useRef(
    Array(totalStars)
      .fill(0)
      .map(() => new Animated.Value(1)),
  ).current;

  const animateStar = (index: number) => {
    Animated.sequence([
      Animated.timing(animationValues[index], {
        toValue: 1.5, // Scale up
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(animationValues[index], {
        toValue: 1, // Scale down to original size
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  };
  const handlePress = (index: number) => {
    if (onPress) {
      onPress(index + 1);
    }
    animateStar(index);
  };

  return (
    <View style={styles.container}>
      {Array(totalStars)
        .fill(0)
        .map((_, index) => {
          const isHalfStar = rating > index && rating < index + 1;
          const scaleStyle = {transform: [{scale: animationValues[index]}]};

          return isViewOnly ? (
            <Animated.View key={index} style={scaleStyle}>
              <Image
                source={
                  isHalfStar && halfStarImage
                    ? halfStarImage
                    : index < rating
                    ? activeImage
                    : inactiveImage
                }
                style={{
                  width: imageSize,
                  height: imageSize,
                  marginHorizontal: wp(3),
                  resizeMode : 'contain',
                }}
              />
            </Animated.View>
          ) : (
            <TouchableOpacity key={index} onPress={() => handlePress(index)}>
              <Animated.View style={scaleStyle}>
                <Image
                  tintColor={'#246BFD'}
                  source={
                    isHalfStar && halfStarImage
                      ? halfStarImage
                      : index < rating
                      ? activeImage
                      : inactiveImage
                  }
                  style={{
                    width: imageSize,
                    height: imageSize,
                    marginHorizontal: wp(3),
                  resizeMode : 'contain',

                  }}
                />
              </Animated.View>
            </TouchableOpacity>
          );
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default CustomRating;
