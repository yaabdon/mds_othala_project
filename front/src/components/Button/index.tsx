import { View,  TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

type Props =  {
  title: string;
  onPreess: () => void;
}

export function Button({title, onPreess}:Props) {
  return (
    <View >
      <TouchableOpacity style={styles.button}onPress={onPreess} >
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
     
    </View>
  );
}


  