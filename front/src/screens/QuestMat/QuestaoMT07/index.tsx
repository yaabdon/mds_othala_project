import { View, Text, Image, TouchableOpacity, Linking, Alert} from 'react-native';
import {styles} from "./styles";
import { BackButton } from '../../../components/BackButton';
import { Button } from '../../../components/Button';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import {NumeroDstrikes, Resetastrikes} from "../contadorErros";

export  function QuestaoMT07() {
  const navigation = useNavigation<any>();

  const abrirDocs = () => {
      const url = 'https://docs.google.com/document/d/1QUDFzqUPuiYLln540dczNVMPKO5sk_XokOs70pTy0y0/edit?tab=t.0#heading=h.innx5uq2u0lc'
      Linking.openURL(url).catch(err => {
        console.error("Erro ao abrir o link:", err);
      });
    }
    const [SelectAlternative, setSelectAlternative] = useState<number | null>(null);
  const RightAlternative = 2;

  const Alternatives = [
    "a) 9",
    "b) 7",
    "c) 8",
    "d) 10",
  ]

  const handlePress = (index: number) => {

    Resetastrikes();
    if(SelectAlternative === null){
      setSelectAlternative(index);
    }
    
    //depois vou inserir a rota do Retry aqui
    if(index!= RightAlternative) {
      NumeroDstrikes();
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
             Nível 1: Soma simples
           </Text>

           <View>
              <Image
                source={require('../../../assets/Q7_mat.png')}
                style={styles.MatImage}
                resizeMode="contain"
                />
          </View>
           
          <Text style={styles.AlternativeParagraph}>
          Carlos juntou 3 figurinhas pela manhã e{"\n"}
          mais 5 à tarde.
          Com quantas figurinhas{"\n"}ele ficou no total?
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
           
                
          <View style={styles.buttonContinue}>
          <Button title="Próxima" onPress={() => navigation.navigate('QuestaoMT08')}/>
        </View>
    </View>
  );
}

