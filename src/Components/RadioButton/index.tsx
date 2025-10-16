import { Pressable, View,Text } from 'react-native';
import { styles } from './style';

const RadioButton = ({ label, selected, onPress }: { label: string; selected: boolean; onPress: () => void }) => {


    return (
      <Pressable style={styles.radioContainer} onPress={onPress}>
        <View style={[styles.outerCircle, selected && styles.selectedOuterCircle]}>
          {selected && <View style={styles.innerCircle} />}
        </View>
        <Text style={styles.label}>{label}</Text>
      </Pressable>
    );
  };

  export default RadioButton;
