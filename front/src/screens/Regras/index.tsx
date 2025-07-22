import { View, Image, Text, TouchableOpacity, Linking } from "react-native";
import { styles } from "./styles";
import { useNavigation } from '@react-navigation/native';
import { BackButton } from '@/src/components/BackButton';

export  function Regras() {
  
const navigation = useNavigation<any>();

//logica para abrir o docs apertando o OMEGA
const abrirDocs = () => {
  const url = 'https://www.canva.com/design/DAGqij-rjCE/Hr0lKnr4Wya1lrFSckc4bQ/edit?utm_content=DAGqij-rjCE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton';
  Linking.openURL(url).catch(err => {
    console.error("Erro ao abrir o link:", err);
  });
}


  return (
    <View style={styles.container} testID="regras-screen"> 
      <View style={styles.backButton}>
        <BackButton/>
      </View>
      <TouchableOpacity onPress={abrirDocs}>
          <View style={styles.logo}>
              <Image
                source={require('../../assets/logo_img.png')}
                  style={styles.logo}
                  resizeMode="cover"
                  />
            </View>
       </TouchableOpacity>

      <View>
        <Text style= {styles.textTitle}>Ao clicar no símbolo ÔMEGA você:</Text>
      </View>

          <View style={styles.card}>
            <Text style={styles.cardText}>Acessa o conteúdo do quiz!</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardText}>Aprende com exemplos práticos!</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardText}>Recebe material gratuito de estudos!</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardText}>E muito mais!</Text>
          </View>

       <View style={styles.button}> 
              <TouchableOpacity style={styles.button} onPress ={() => navigation.navigate('Home')}>
                <Text style={styles.buttonText}>Continuar</Text>
              </TouchableOpacity>
      </View>

    </View>
  );
}

