import { View,  TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

type Props =  {
  title: string;
  onPress: () => void;
  disabled?: boolean;
}

export function Button({title, onPress, disabled = false}:Props) {
  return (
    <View >
      <TouchableOpacity style={[styles.button, disabled && styles.buttonDisabled]}onPress={disabled ? undefined: onPress} testID={`button-${title.toLowerCase().replace(/\s+/g, '-')}`}>
        <Text style={[styles.buttonText, disabled && styles.buttonDisabledText]}>{title}</Text>
      </TouchableOpacity>
     
    </View>
  );
}


  