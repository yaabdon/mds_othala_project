import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Linking,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BackButton } from '../../../components/BackButton';
import { Button } from '../../../components/Button';
import ProgressBar from '../../../components/ProgressBar';
import { useState } from 'react';
import { styles } from './styles';
import { Resetastrikes, NumeroDstrikes, Strikes } from '../../QuestMat/contadorErros';
import { HomeButton } from '../../../components/HomeButton';

export function QuestaoPT07() {
  const navigation = useNavigation<any>();
  const [selected, setSelected] = useState<string | null>(null);
  const [message, setMessage] = useState<string>('');
  const totalQuestions = 9;
  const [currentQuestion, setCurrentQuestion] = useState(7);

  const correctKey = 'b)';

  const alternativas = [
    { key: 'a)', texto: 'Dormiu' },
    { key: 'b)', texto: 'Foi brincar' }, // correta
    { key: 'c)', texto: 'Comeu' },
    { key: 'd)', texto: 'Foi à escola' },
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
    navigation.navigate('QuestaoPT08');
  }

  function handleOpenDoc() {
    Linking.openURL('https://www.canva.com/design/DAGqij-rjCE/Hr0lKnr4Wya1lrFSckc4bQ/edit?utm_content=DAGqij-rjCE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'); // ajuste se necessário
  }

  return (
    <View style={styles.container} testID="questao-pt07-screen">
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

      <View style={styles.content}>
        {/* Nível */}
        <View style={styles.levelContainer}>
          <View style={styles.levelDot} />
          <Text style={styles.levelText}>Nível 1: Interpretação de texto</Text>
        </View>

        {/* Imagem da cena */}
        <Image
          source={require('../../../assets/Q7_por.png')}
          style={styles.sceneImage}
        />

        {/* Cena textual */}
                <Text style={styles.sceneText}>
                  João saiu de casa e foi brincar com seus amigos.
                </Text>


        {/* Pergunta */}
        <Text style={styles.questionText}>O que João fez?</Text>

        {/* Alternativas */}
        {alternativas.map(item => {
          const isSelected = selected === item.key;
          const bgColor = isSelected
            ? item.key === correctKey
              ? styles.optionCorrect.backgroundColor
              : styles.optionIncorrect.backgroundColor
            : styles.optionButton.backgroundColor;

          return (
            <TouchableOpacity
              key={item.key}
              style={[styles.optionButton, { backgroundColor: bgColor }]}
              onPress={() => handleSelect(item.key)}
              disabled={!!selected}
            >
              <Text style={styles.optionText}>
                {item.key} {item.texto}
              </Text>
            </TouchableOpacity>
          );
        })}

        {/* Mensagem e botão */}
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
