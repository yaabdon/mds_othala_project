import { View, Text , Image} from 'react-native';
import {styles} from "./styles";
import { BackButton } from '../../../components/BackButton';
import { Button } from '../../../components/Button';
import { useNavigation } from '@react-navigation/native';

export  function QuestaoMT01() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <BackButton />
      <Text> Matematica1 </Text>
      <Button title="Próxima" onPress={() => navigation.navigate('QuestaoMT02')} />
    </View>
  );
}

