import { View, Text, Image, TouchableOpacity, Linking} from 'react-native';
import {styles} from "./styles";
import { BackButton } from '../../../components/BackButton';
import { Button } from '../../../components/Button';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

export  function QuestaoMT07() {
const navigation = useNavigation<any>();

  function handleNext(){
    navigation.navigate('QuestaoMT08');
  }

  const abrirDocs = () => {
      const url = 'https://docs.google.com/document/d/1QUDFzqUPuiYLln540dczNVMPKO5sk_XokOs70pTy0y0/edit?tab=t.0#heading=h.innx5uq2u0lc'
      Linking.openURL(url).catch(err => {
        console.error("Erro ao abrir o link:", err);
      });
    }


  //aplicando a lógica das questões anteriores -> refatorando 
  const [selected, setSelected] = useState<string | null>(null);
  const [message, setMessage] = useState<string>('');
  const correctKey = 'c';
  const Alternatives = [
    {key: 'a', label: '9'},
    {key: 'b', label: '7'},
    {key: 'c', label: '8'},
    {key: 'd', label: '10'}
  ];

  
  function handleSelect(key: string){
    if(selected) return;
    setSelected(key);
      if (key === correctKey){
        setMessage('Parabéns, você acertou!');
      }
      else {
        setMessage('Que pena, não foi dessa vez.');
      }
  }


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
          {Alternatives.map(opt => {
            const isSelected = selected === opt.key;
            const bgColor = isSelected
              ? opt.key === correctKey
                ? styles.optionCorrect.backgroundColor
                : styles.optionIncorrect.backgroundColor
              : styles.optionButton.backgroundColor;
          
         return (
            <TouchableOpacity
                key={opt.key}
                style={[styles.optionButton, { backgroundColor: bgColor }]}
                onPress={() => handleSelect(opt.key)}
                disabled={!!selected}
                >
                <Text style={styles.optionText}>
                {opt.key} {opt.label}
                  </Text>
                </TouchableOpacity>
              );
          })}
          </View>
           
         {selected && <Text style={styles.feedbackMessage}>{message}</Text>}
           
        {selected && (
          <Button
          title="Próxima"
          onPress={handleNext}
          />
        )}
    </View>
  );
}

