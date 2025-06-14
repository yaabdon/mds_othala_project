import { View, Text , Image} from 'react-native';
import {styles} from "./styles";
import { useNavigation } from '@react-navigation/native';
import { BackButton } from '../../../components/BackButton';

export  function QuestaoPT09() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <BackButton />
      <Text> Portugues9 </Text>
    </View>
  );
}

