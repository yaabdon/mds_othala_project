import { View, Image, Text } from "react-native";
import {styles} from "./styles";
import { Button } from "@/src/components/Button";
import { useNavigation } from '@react-navigation/native';
import { BackButton } from '@/src/components/BackButton';


export function Home() {
  const navigation = useNavigation<any>();

  return (
    <>
      <View style={styles.backButton}> 
        <BackButton />

      </View>
          
          <View style = {styles.header}>
              <View style={styles.logo}>
              <Image
              source={require('../../assets/logo_img.png')}
              style={styles.logo}
              resizeMode="contain"
            />
            </View> 
      </View>
      
      <View>
       <Text style={styles.textRecepcao}>Seja Bem-Vindo</Text>
            <Text style={styles.text}>Escolha sua jornada e bons estudos</Text>
      </View>
            <View style={styles.cardContainer}>
                <View style={styles.cardP}>
                  <Image
                  source={require('../../assets/Home_girl.png')}
                  style={styles.homeGirl}
                  resizeMode="contain"
                  />
                  <Text style={styles.textJourneyPortuguese}>Jornada</Text>
                  <Text style={styles.textPort}>de</Text>
                    <Text style={styles.textPort}>Português</Text>
                    <Text style={styles.textTempP}>3-10 min</Text>
                </View>
                <View style={styles.cardM}>
                  <Image
                  source={require('../../assets/Home_man.png')}
                  style={styles.homeMan}
                  resizeMode="contain"
                  />
                  <Text style={styles.textJourneyMath}>Jornada</Text>
                  <Text style={styles.textMath}>de</Text>
                  <Text style={styles.textMath}>Matemática</Text>
                  <Text style={styles.textTempM}>3-10 min</Text>
                </View>
             </View>
      <View>
        
      </View>
    </>
  );
}
