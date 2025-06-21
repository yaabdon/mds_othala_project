import { View, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';

export function HomeButton() {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate('Home')} testID="home-button">
        <Ionicons name="home" size={24} color="#E6E6E6" />
      </TouchableOpacity>
    </View>
  );
}
