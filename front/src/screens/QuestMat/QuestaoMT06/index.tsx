import { View, Text , Image} from 'react-native';
import {styles} from "./styles";
import { BackButton } from '../../../components/BackButton';
import { Button } from '../../../components/Button';
import { useNavigation } from '@react-navigation/native';

export  function QuestaoMT06() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <BackButton />
      <Text> Portugues </Text>
      <Button title="Próxima" onPress={() => navigation.navigate('QuestaoMT07')} />
    </View>
  );
}

