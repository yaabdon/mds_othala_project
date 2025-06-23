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
import {NumeroDstrikes, Resetastrikes} from "../contadorErros";


export  function QuestaoMT04() {
const navigation = useNavigation<any>();
  const [selected, setSelected] = useState<string | null>(null);
  const [message, setMessage] = useState<string>('');
  const totalQuestions = 9;
  const [currentQuestion, setCurrentQuestion] = useState(4);

  const correctKey = 'b';
  const options = [
    { key: 'a', label: '4' },
    { key: 'b', label: '2' },
    { key: 'c', label: '3' },
    { key: 'd', label: '1' },
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
    navigation.navigate('QuestaoMT05');
  }

  function handleOpenDoc() {
    Linking.openURL('https://seus-docs-aqui.doc');
  }

  return (
    <View style={styles.container} testID="questao-mt04-screen">
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.leftContainer}>
          <BackButton />
        </View>

        <View style={styles.centerContainer}>
          <Text style={styles.headerTitle}>Fração e Divisão</Text>
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
      {/* CONTEÚDO */}
      <View style={styles.content}>
        {/* Nível */}
        <View style={styles.levelContainer}>
          <View style={styles.levelDot} />
          <Text style={styles.levelText}>Nível 1: Metades</Text>
        </View>

        {/* Cena */}
        <Image
          source={require('../../../assets/Q4_mat.png')}
          style={styles.sceneImage}
          resizeMode="contain"
        />

        {/* Pergunta */}
        <Text style={styles.questionText}>
          Ana preparou um bolo delicioso e decidiu dividir com seu irmão. Ela cortou o bolo em duas partes iguais. Em quantas partes o bolo ficou?
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


