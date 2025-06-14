import { View, Text , Image} from 'react-native';
import {styles} from "./styles";
import { BackButton } from '../../../components/BackButton';
import { Button } from '../../../components/Button';
import { useNavigation } from '@react-navigation/native';

export  function QuestaoMT09() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <BackButton />
      <Text> Matematica9 </Text>
      {/* Última questão, pode customizar aqui se quiser */}
    </View>
  );
}

