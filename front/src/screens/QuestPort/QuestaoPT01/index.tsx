import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Linking,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BackButton } from '../../../components/BackButton';
import { HomeButton } from '../../../components/HomeButton';
import { Button } from '../../../components/Button';
import ProgressBar from '../../../components/ProgressBar';
import { Retry } from '../../../components/Retry-mat';
import { styles } from './styles';
import { NumeroDstrikes,Resetastrikes, Strikes } from '../contadorErros';


export function QuestaoPT01() {
  const navigation = useNavigation<any>();
  const [selected, setSelected] = useState<string | null>(null);
  const [message, setMessage] = useState<string>('');
  const [showRetryModal, setShowRetryModal] = useState(false);
  const totalQuestions = 9;
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const correctKey = 'c)';

  const options = [
    { key: 'a)', label: 'Cedo' },
    { key: 'b)', label: 'Acordou' },
    { key: 'c)', label: 'O menino' },
    { key: 'd)', label: 'Foi para a escola' },
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
      if (Strikes >= 2) {
        setShowRetryModal(true);
        Resetastrikes();
      }
    }
  }
  

  function handleNext() {
    setCurrentQuestion((prev) => (prev < totalQuestions ? prev + 1 : prev));
    navigation.navigate('QuestaoPT02');
  }

  function handleRetry() {
    Resetastrikes();
    setShowRetryModal(false);
    setSelected(null);
    setMessage('');
  }

  function handleOpenDoc() {
    Linking.openURL('https://seu-link-aqui.com');
  }

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.leftContainer}>
          <BackButton />
        </View>

        <View style={styles.centerContainer}>
          <Text style={styles.headerTitle}>Gramática</Text>
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
      <View style={styles.professorBarContainer}>
        <ProgressBar currentQuestion={1} totalQuestions={9} />
      </View>
      <View style={styles.content}>
        {/* Nível */}
        <View style={styles.levelContainer}>
          <View style={styles.levelDot} />
          <Text style={styles.levelText}>Nível 2: Predicado</Text>
        </View>
        {/* Cena */}
        <Image
          source={require('../../../assets/Q1_por.png')}
          style={styles.sceneImage}
          resizeMode="contain"
        />
        <Text style={styles.sceneText}>
          Leia:
          {'\n'}
          Leia esta frase:
          “O menino acordou cedo e foi para a escola.”
        </Text>
        {/* Pergunta */}
        <Text style={styles.questionText}>
          Quem acordou cedo?
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
                {opt.key} {opt.label}
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
        <Retry visible={showRetryModal} onRetry={handleRetry} />
      </View>
    </View>
  );
}
