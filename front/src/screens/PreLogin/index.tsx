import { View, Text , Image} from 'react-native';
import { Button } from '../../components/Button';
import {styles} from "./styles";
import { useNavigation } from '@react-navigation/native';

export  function PreLogin() {

  const navigation = useNavigation<any>();



  return (
    <View style={styles.container} testID="prelogin-screen">

    <View style={styles.logo}>
    <Image
      source={require('../../assets/preLogin.png')}
      style={{ width: 300, height: 300 }}
      resizeMode="contain"
    />
     </View> 

     <Text style={styles.text}>Sua jornada de estudos começa aqui  </Text>
     <Text style={styles.textOmega}> Omega Ω</Text>

    <View style={styles.button}> 
     <Button title='Entrar' onPress={() => navigation.navigate('Login')}/>
    </View>    


    </View>
  );
}

