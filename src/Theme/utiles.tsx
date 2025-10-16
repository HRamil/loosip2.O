import { Dimensions, PixelRatio, Platform } from 'react-native';


const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;
const _height = Dimensions.get('window').height;
const _width = Dimensions.get('window').width;
const IS_IPHONE_X = !!(
  Platform.OS === 'ios' &&
  (_height > 800 || _width > 800)
);
const IS_IPHONE = !!(Platform.OS === 'ios');
const widthPercentageToDP = (widthPercent: any) => {
  const elemWidth =
    typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel((WINDOW_WIDTH * elemWidth) / 100);
};
const heightPercentageToDP = (heightPercent: any) => {
  const elemHeight =
    typeof heightPercent === 'number'
      ? heightPercent
      : parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel((WINDOW_HEIGHT * elemHeight) / 100);
};
const DesignWidth = 375;
const DesignHeight = 677;
const DeviceWidth = Dimensions.get('window').width;
const DeviceHeight = Dimensions.get('window').height;
const DeviceWidthRatioDesignWidth = DeviceWidth / DesignWidth;
const DeviceHeightRatioDesignHeight = DeviceHeight / DesignHeight;
const ResponsiveWidth = (width: any) => {
  return PixelRatio.roundToNearestPixel(width * DeviceWidthRatioDesignWidth);
};
const ResponsiveHeight = (height: any) => {
  return PixelRatio.roundToNearestPixel(height * DeviceHeightRatioDesignHeight);
};
const ResponsiveFontSize = (fontSize: any) => {
  return PixelRatio.roundToNearestPixel(
    fontSize * DeviceHeightRatioDesignHeight,
  );
};

const validateEmail = (email: any) => {
  return email
    .toLowerCase()
    .match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/);
};

const validateOtp = (otp: any) => {
  return /^\d{6}$/.test(otp); // Checks if OTP consists of 4 digits
};

const makeImageObj = (image: any) => {
  console.log(
    'image ---------------------------------------------------------------',
  );
  let obj: any = {};
  if (image) {
    obj.uri = image?.sourceURL ? image?.sourceURL : image?.path;
    obj.name = image?.filename
      ? image?.filename
      : image?.path
        ? image?.path?.split('/')[image?.path?.split('/')?.length - 1]
        : image?.sourceURL?.split('/')[image?.sourceURL?.split('/')?.length - 1];
    obj.type = image?.mime;
  }
  return obj;
};
const calculateDaysBetween = (startDate: any, endDate: any) => {
  const start: any = new Date(startDate);
  const end: any = new Date(endDate);

  // Calculate the time difference in milliseconds
  const differenceInTime = end - start;

  // Convert time difference from milliseconds to days
  const differenceInDays = differenceInTime / (1000 * 3600 * 24);

  return Math.ceil(differenceInDays); // Use Math.ceil to round up to full days
};






export {
  WINDOW_HEIGHT,
  WINDOW_WIDTH,
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  ResponsiveWidth as rwp,
  ResponsiveHeight as rhp,
  ResponsiveFontSize as rfs,
  _height as height,
  _width as width,
  IS_IPHONE_X,
  IS_IPHONE,
  validateEmail,
  validateOtp,
  makeImageObj,
  calculateDaysBetween,
};



