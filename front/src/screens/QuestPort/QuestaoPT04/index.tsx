import { View, Text , Image} from 'react-native';
import {styles} from "./styles";
import { useNavigation } from '@react-navigation/native';
import { BackButton } from '../../../components/BackButton';
import { Button } from '../../../components/Button';

export  function QuestaoPT04() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <BackButton />
      <Text> Portugues4 </Text>
      <Button title="Próxima" onPress={() => navigation.navigate('QuestaoPT05')} />
    </View>
  );
}

