
  /*const Alternatives = [
    "a) 9",
    "b) 7",
    "c) 8",
    "d) 10",
  ]*/

/*<Text style={styles.AlternativeParagraph}>
Carlos juntou 3 figurinhas pela manhã e{"\n"}
  mais 5 à tarde.
Com quantas figurinhas{"\n"}ele ficou no total?
 </Text>*/

 /*<Text style={styles.levelQuiz}>
             Nível 1: Soma simples
           </Text>*/

 //refatorando a questao 07 com a lógica das outras questões

import { View, Text, Image, TouchableOpacity, Linking} from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { BackButton } from '../../../components/BackButton';
import { Button } from '../../../components/Button';
import { styles } from './styles';

export function QuestaoMT07() {
  const navigation = useNavigation<any>();
  const [selected, setSelected] = useState<string | null>(null);
  const [message, setMessage] = useState<string>('');


  const correctKey = 'a';
  const options = [
    { key: 'a', label: '9' },
    { key: 'b', label: '7' },
    { key: 'c', label: '8' },
    { key: 'd', label: '10' },
  ];

  function handleSelect(key: string) {
    if (selected) return;
    setSelected(key);
      if (key === correctKey) {
      setMessage('Parabéns, você acertou!');
    } else {
      setMessage('Que pena, não foi dessa vez.');
    }
  }

  function handleNext() {
    navigation.navigate('QuestaoMT08');
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
          <Text style={styles.headerTitle}>Expressões Numéricas</Text>
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

      {/* Professor + Barra */}
      <View style={styles.professorBarContainer}>
        <Image
          source={require('../../../assets/Home_man.png')}
          style={styles.teacherAvatar}
        />
        <View style={styles.decorativeBar} />
      </View>

      <View style={styles.content}>
        {/* Nível */}
        <View style={styles.levelContainer}>
          <View style={styles.levelDot} />
          <Text style={styles.levelText}>Nível 1: Soma simples</Text>
        </View>

        {/* Cena */}
        <Image
          source={require('../../../assets/Q7_mat.png')}
          style={styles.sceneImage}
          resizeMode="contain"
        />

        {/* Pergunta */}
        <Text style={styles.questionText}>
          Carlos juntou 3 figurinhas pela manhã e{"\n"} mais 5 à tarde. Com quantas figurinhas{"\n"}ele ficou no total?
        </Text>

        {/* Opções */}
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
              style={[styles.optionButton, { backgroundColor: bgColor }]}
              onPress={() => handleSelect(opt.key)}
              disabled={!!selected}
            >
              <Text style={styles.optionText}>
                {opt.key}) {opt.label}
              </Text>
            </TouchableOpacity>
          );
        })}

        {/* Mensagem de feedback */}
          {selected && <Text style={styles.feedbackMessage}>{message}</Text>}


        {selected && (
          <Button
            title="Próxima"
            onPress={handleNext}
          />
        )}
      </View>
    </View>
  );
}




