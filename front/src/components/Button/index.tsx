import { View,  TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

type Props =  {
  title: string;
  onPress: () => void;
}

export function Button({title, onPress}:Props) {
  return (
    <View >
      <TouchableOpacity style={styles.button}onPress={onPress} >
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
     
    </View>
  );
}


  