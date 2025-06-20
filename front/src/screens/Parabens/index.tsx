import { View, Text, TouchableOpacity, Linking , Image} from "react-native";
import { styles } from "./style";
import { useNavigation } from '@react-navigation/native';
import { BackButton } from '@/src/components/BackButton';
import LottieView from 'lottie-react-native';
import { Button } from '@/src/components/Button'; // Corrigir importação conforme necessário

export function Parabens() {
  const navigation = useNavigation<any>();
  function handleOpenDoc() {
    Linking.openURL('https://seus-docs-aqui.doc');
  }


  return (
    <View style={styles.container}> 
      <View style={styles.backButton}>
        <BackButton />
      </View>

        <TouchableOpacity onPress={handleOpenDoc}>
                <View style={styles.logo}>
                    <Image
                      source={require('../../assets/logo_img.png')}
                        style={styles.logo}
                        resizeMode="cover"
                        />
                  </View>
             </TouchableOpacity>

      <LottieView
        source={require('../../assets/confetti_animation.json')}
        autoPlay
        loop
        style={styles.Confetti} // Adicione um tamanho se necessário
      />

      <View style={styles.card}>
        <Text style={styles.Congratulations}>Parabéns!</Text>
        <Text style={styles.Text}>Você chegou ao fim da jornada!</Text>
      </View>

      <View style={styles.button}> 
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Começar de Novo!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
