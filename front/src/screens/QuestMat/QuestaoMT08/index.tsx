import { View, Text, Image, TouchableOpacity, Linking, Alert} from 'react-native';
import {styles} from "./styles";
import { BackButton } from '../../../components/BackButton';
import { Button } from '../../../components/Button';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

export  function QuestaoMT08() {
  const navigation = useNavigation<any>();

  const abrirDocs = () => {
    const url = 'https://docs.google.com/document/d/1QUDFzqUPuiYLln540dczNVMPKO5sk_XokOs70pTy0y0/edit?tab=t.0#heading=h.innx5uq2u0lc'
    Linking.openURL(url).catch(err => {
      console.error("Erro ao abrir o link:", err);
    });
  }

  //lógica das alternativas
  const [SelectAlternative, setSelectAlternative] = useState<number | null>(null);
  const RightAlternative = 0;

  const Alternatives = [
    "a) 10",
    "b) 8",
    "c) 6",
    "d) 12",
  ]

  //lógica para acerto ou erro das alternativas
  const handlePress = (index: number) => {
    if(SelectAlternative === null){
      setSelectAlternative(index);
    }
    
    //depois vou inserir a rota do Retry aqui
    if(index!= RightAlternative) {
      Alert.alert(
        "Você errou! :(",
        "Vamos tentar novamente?",
        [{text: "Sim", onPress: () => {setSelectAlternative(null)}}]
      )
    }
  };


  return (
   <View style={styles.container}>
      <View style={styles.backButton}>
        <BackButton />
      </View>

        <View style={styles.logo}>
        <TouchableOpacity onPress={abrirDocs}>
            <Image
              source={require('../../../assets/logo_img.png')}
              style={styles.logo}
              resizeMode="cover"
            />
        </TouchableOpacity>
        </View>

      <Text style={styles.quizTitle}>
        Expressões{"\n"}numéricas
      </Text>

        <View>
          <Image 
            source={require('../../../assets/Home_man.png')}
            style={styles.homeMan}
            resizeMode="cover"
          />
        </View>

        <View style={styles.levelScore}></View>

        <View style={styles.levelCircle}></View>

        <Text style={styles.levelQuiz}>
          Nível 2: Parênteses
        </Text>

        <View>
          <Image
            source={require('../../../assets/Q8_mat.png')}
            style={styles.MatImage}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.AlternativeParagraph}>
        Paula resolveu comprar 2 brinquedos
        {"\n"}que custam R$2 e R$3 cada. Depois, ela
        {"\n"}decidiu dobrar a quantidade de brinquedos.
        {"\n"}Quanto ela gastou no total? (2 + 3) × 2
        </Text>

        <View>
        {Alternatives.map((texto, index) => {
          let backgroundColor = '#F2E3B5';

          if (SelectAlternative !== null) {
            if (index === SelectAlternative) {
              backgroundColor = index === RightAlternative ? '#CFFCDB' : '#FF4545';
            }
          }

          return (
            <TouchableOpacity
              key={index}
              style={[styles.alternativeButton, { backgroundColor }]}
              onPress={() => handlePress(index)}
              disabled={SelectAlternative !== null} 
            >
              <Text style={styles.alternativeText}>{texto}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

        {
        /* //esse logica fui implementada antes da tela pop-up
        {SelectAlternative !== null && SelectAlternative !== RightAlternative && (
          <Text style={styles.ErrorMessage}>
            Você errou! Tente novamente!
          </Text>
        )}
        */
        }

        {SelectAlternative === RightAlternative && (
          <View style={styles.buttonContinue}>
          <Button title="Próxima" onPress={() => navigation.navigate('QuestaoMT09')}/>
        </View>
        )}
  
    </View>
  );
}

