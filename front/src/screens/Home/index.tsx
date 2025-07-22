import { View, Image, Text } from "react-native";
import { styles } from "./styles";
import { useNavigation } from '@react-navigation/native';
import { BackButton } from '@/src/components/BackButton';
import { StartButton } from "@/src/components/StartButton";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';

export function Home() {
  const navigation = useNavigation<any>();

  useEffect(() => {
    const checkAuth = async () => {
      const auth = await AsyncStorage.getItem('auth');
      if (auth !== 'true') {
        navigation.replace('Login');
      }
    };
    checkAuth();
  }, []);

  return (
      <View style={styles.container} testID="home-screen">
      <View style={styles.backButton}> 
        <BackButton />
           </View>
          
      <View style={styles.header}>
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

          <StartButton
            onPress={() => navigation.navigate('QuestaoPT01')}
            color='#73D7C0'
            style={styles.startButton}
          />
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

          <StartButton
            onPress={() => navigation.navigate('QuestaoMT01')}
            color='#3F414E'
            style={styles.startButton}
          />
        </View>

      </View>
   </View>
  );
}