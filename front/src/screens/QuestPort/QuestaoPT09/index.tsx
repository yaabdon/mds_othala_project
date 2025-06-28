import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Linking,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BackButton } from '../../../components/BackButton';
import { Button } from '../../../components/Button';
import ProgressBar from '../../../components/ProgressBar';
import { styles } from './styles';
import { Strikes,NumeroDstrikes,Resetastrikes } from '../../QuestMat/contadorErros';
import { HomeButton } from '../../../components/HomeButton';

export function QuestaoPT09() {
  const navigation = useNavigation<any>();
  const [selected, setSelected] = useState<string | null>(null);
  const [message, setMessage] = useState<string>('');
  const totalQuestions = 9;
  const [currentQuestion, setCurrentQuestion] = useState(9);

  const correctKey = 'b)';

  const options = [
    { key: 'a)', label: 'Um fato' },
    { key: 'b)', label: 'Uma opinião' },
    { key: 'c)', label: 'Uma dúvida' },
    { key: 'd)', label: 'Uma pergunta' },
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
    navigation.navigate('Parabens');
  }

  function handleOpenDoc() {
    Linking.openURL('https://www.canva.com/design/DAGqij-rjCE/Hr0lKnr4Wya1lrFSckc4bQ/edit?utm_content=DAGqij-rjCE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton');
  }

  return (
    <View style={styles.container} testID="questao-pt09-screen">
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.leftContainer}>
          <BackButton />
        </View>

        <View style={styles.centerContainer}>
          <Text style={styles.headerTitle}>Pontuação</Text>
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

      <ScrollView contentContainerStyle={styles.content}>
        {/* Nível */}
        <View style={styles.levelContainer}>
          <View style={styles.levelDot} />
          <Text style={styles.levelText}>Nível 3: Interpretação: opinião x fato</Text>
        </View>

        {/* Imagem da cena */}
        <Image
          source={require('../../../assets/Q8_por.png')}
          style={styles.sceneImage}
        />

        {/* Cena textual */}
        <Text style={styles.sceneText}>
          O cachorro é o melhor amigo do homem.{"\n"}
          Ele é fiel e ajuda em casa.
        </Text>

        {/* Pergunta */}
        <Text style={styles.questionText}>
          A frase “O cachorro é o melhor amigo do homem” é:
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

        {/* Botão de próxima */}
        {selected && (
          <Button
            title="Próxima"
            onPress={handleNext}
          />
        )}
      </ScrollView>

    </View>
  );
}
