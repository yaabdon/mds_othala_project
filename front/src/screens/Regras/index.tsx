import { View, Text } from 'react-native';
import { styles } from "./styles";
import { Button } from "@/src/components/Button";
import { useNavigation } from '@react-navigation/native';

export function Regras() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Text> Regras </Text>
      <Button title="Ir para Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

