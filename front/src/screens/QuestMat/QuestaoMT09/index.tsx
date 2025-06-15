import { View, Text , Image,TouchableOpacity,ScrollView,Linking,} from 'react-native';
import {styles} from "./styles";
import React, { useState } from 'react';
import { BackButton } from '../../../components/BackButton';
import { Button } from '../../../components/Button';
import { useNavigation } from '@react-navigation/native';

export  function QuestaoMT09() {
  const navigation = useNavigation<any>();
    const [selected, serSelected] = useState<string | null>(null);


    const correctKey = 'b';
    const options = [
      {key: 'a',label: '20'},
      {key: 'b',label: '16'},
      {key: 'c',label:  '14'},
      {key: 'd',label: '12'},
    ];

    function handleSelect(key: string) {
      if (selected) return;
      serSelected(key);
    }

    function handleNext(){
      navigation.navigate('QuestaoMT05');

    }

      function handleOpenDoc() {
        Linking.openURL('https://seus-docs-aqui.doc');
      }

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.leftContainer}>
          <BackButton />
        </View>

        <View style={styles.centerContainer}>
          <Text style={styles.headerTitle}>Expressões numéricas</Text>
        </View>

        <View style={styles.rightContainer}>
          <TouchableOpacity onPress={handleOpenDoc}>
            <Image
              source={require('../../../assets/logo_img.png')}
              style={styles.omega}
              resizeMode="contain"
              />
          </TouchableOpacity>
        </View>
        </View>

        {/* professor + barra */}
        <View style={styles.professorBarContainer}>
          <Image
            source={require('../../../assets/Home_man.png')}
            style={styles.teacherAvatar}
            />
            <View style={styles.decorativeBar}  />
          </View>

        <ScrollView contentContainerStyle={styles.content}>
        {/* Questao */}
        <View style={styles.levelContainer}>
          <View style={styles.levelDot} />
          <Text style={styles.levelText}> Nível 3: Múltiplas operações </Text>
        </View>

        {/*desenho*/}
        <Image
          source={require('../../../assets/Q9_mat.png')}
          style={styles.sceneImage}
          resizeMode="contain"
        
          />

        {/*pergunta*/}
        <Text style={styles.questionText}>
          Eduardo juntou 4 figurinhas e depois ganhou o dobro de 6 de um amigo. Quantas figurinhas ele tem agora?
        </Text>

        {/* opçoes */}
        {options.map(opt => {
          const isSelected = selected === opt.key;
          const bgColor = isSelected
            ? opt.key === correctKey
              ? styles.optionCorrect.backgroundColor
              : styles.optionIncorrect.backgroundColor
            : styles.optionButton.backgroundColor;
          
          return (
            <TouchableOpacity
            key={opt.key}
            style={[styles.optionButton, {backgroundColor : bgColor}]}
            onPress={() => handleSelect(opt.key)}
            disabled={!!selected}
            >
              <Text style={styles.optionText}>
                {opt.key}) {opt.label}
              </Text>
            </TouchableOpacity>
          );
        })}


        {selected && (
          <Button
            title = "Próxima"
            onPress = {handleNext}
          />
        )}
        </ScrollView>
      </View>
  );
}

