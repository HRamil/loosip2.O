import {ImageProps} from 'react-native';

export interface Props {
  title?: any;
  onPress: () => void;
  isContinue: boolean;
  ICON?: any;
  style?: any;
  textStyle?: any;
  loadingColor?: string;
}
