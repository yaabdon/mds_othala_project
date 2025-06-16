import { View, Text , Image} from 'react-native';
import {styles} from "./styles";
import { useNavigation } from '@react-navigation/native';
import { BackButton } from '../../../components/BackButton';
import { Button } from '../../../components/Button';

export  function QuestaoPT03() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container} testID="questao-pt03-screen">
      <BackButton />
      <Text> Portugues3 </Text>
      <Button title="Próxima" onPress={() => navigation.navigate('QuestaoPT04')} />
    </View>
  );
}

