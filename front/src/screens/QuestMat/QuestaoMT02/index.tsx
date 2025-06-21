import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Linking,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BackButton } from '../../../components/BackButton';
import { HomeButton } from '../../../components/HomeButton';
import { Button } from '../../../components/Button';
import ProgressBar from '../../../components/ProgressBar';
import { styles } from './styles';
import { NumeroDstrikes, Resetastrikes } from '../contadorErros';

export function QuestaoMT02() {
  const navigation = useNavigation<any>();
  const [selected, setSelected] = useState<string | null>(null);
  const [message, setMessage] = useState<string>('');
  const totalQuestions = 9;
  const [currentQuestion, setCurrentQuestion] = useState(2);

  const correctKey = 'c';
  const options = [
    { key: 'a', label: '9' },
    { key: 'b', label: '15' },
    { key: 'c', label: '42' },
    { key: 'd', label: '25' },
  ];

  function handleSelect(key: string) {
    if (selected) return;
    setSelected(key);
    Resetastrikes();
    if (key === correctKey) {
      setMessage('Parabéns, você acertou!');
    } else {
      setMessage('Que pena, não foi dessa vez.');
      NumeroDstrikes();
    }
  }

  function handleNext() {
    setCurrentQuestion((prev) => (prev < totalQuestions ? prev + 1 : prev));
    navigation.navigate('QuestaoMT03');
  }

  function handleOpenDoc() {
    Linking.openURL('https://seus-docs-aqui.doc');
  }

  return (
    <View style={styles.container} testID="questao-mt02-screen">
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.leftContainer}>
          <BackButton />
        </View>
        <View style={styles.centerContainer}>
          <Text style={styles.headerTitle}>Tabuada</Text>
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
      <HomeButton />
      {/* Professor + Barra */}
      <View style={styles.professorBarContainer}>
        <ProgressBar currentQuestion={currentQuestion} totalQuestions={totalQuestions} />
         </View>
      {/* Conteúdo */}
      <View style={styles.content}>
        {/* Nível */}
        <View style={styles.levelContainer}>
          <View style={styles.levelDot} />
          <Text style={styles.levelText}>Nível 2: Tabuada com objetos</Text>
        </View>
        {/* Cena */}
        <Image
          source={require('../../../assets/Q2_mat.png')}
          style={styles.sceneImage}
          resizeMode="contain"
        />
        {/* Pergunta */}
        <Text style={styles.questionText}>
          Marina comprou 6 pacotes de bala para distribuir na festa de aniversário.
          Cada pacote tem 7 balas dentro. Quantas balas ela terá ao todo para 
          compartilhar com os amigos?
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
