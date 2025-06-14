import { View, Text , Image} from 'react-native';
import {styles} from "./styles";
import { useNavigation } from '@react-navigation/native';
import { BackButton } from '../../../components/BackButton';
import { Button } from '../../../components/Button';

export  function QuestaoPT08() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <BackButton />
      <Text> Portugues8 </Text>
      <Button title="Próxima" onPress={() => navigation.navigate('QuestaoPT09')} />
    </View>
  );
}

