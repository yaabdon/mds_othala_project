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
import { styles } from './styles';
import ProgressBar from '../../../components/ProgressBar';
import { Retry } from '../../../components/Retry-mat';
import { Resetastrikes, NumeroDstrikes, Strikes } from '../../QuestMat/contadorErros';

export function QuestaoPT02() {
  const navigation = useNavigation<any>();
  const [selected, setSelected] = useState<string | null>(null);
  const [message, setMessage] = useState<string>('');
  const [showRetryModal, setShowRetryModal] = useState(false);
  const totalQuestions = 9;
  const [currentQuestion, setCurrentQuestion] = useState(2);
  const correctKey = 'b)';

  const options = [
    { key: 'a)', label: 'Matemática' },
    { key: 'b)', label: 'Explicou a lição com paciência' },
    { key: 'c)', label: 'A professora' },
    { key: 'd)', label: 'Com paciência' },
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
    navigation.navigate('QuestaoPT03');
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
    <View style={styles.container} testID="questao-pt02-screen">
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
      {/* Professor + Barra */}
      <View style={styles.professorBarContainer}>
        <ProgressBar currentQuestion={currentQuestion} totalQuestions={totalQuestions} />
      </View>

      <View style={styles.content}>
        {/* Nível */}
        <View style={styles.levelContainer}>
          <View style={styles.levelDot} />
          <Text style={styles.levelText}>Nível 2:  Predicado
</Text>
        </View>
        {/* Cena */}
        <Image
          source={require('../../../assets/Q2_port.png')}
          style={styles.sceneImage}
          resizeMode="contain"
        />
        <Text style={styles.sceneText}>
  Leia:
  {'\n'}
     Leia esta frase:
“A professora de matemática explicou a lição com paciência.”
</Text>

        {/* Pergunta */}
        <Text style={styles.questionText}>
          O que foi dito sobre a professora?
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


