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
import { Button } from '../../../components/Button';
import ProgressBar from '../../../components/ProgressBar';
import { styles } from './styles';
import { Strikes,NumeroDstrikes,Resetastrikes } from '../../QuestMat/contadorErros';
import { HomeButton } from '../../../components/HomeButton';


export function QuestaoPT03() {
  const navigation = useNavigation<any>();
  const [selected, setSelected] = useState<string | null>(null);
  const [message, setMessage] = useState<string>('');
  const totalQuestions = 9;
  const [currentQuestion, setCurrentQuestion] = useState(3);

  const correctKey = 'c)';

  const options = [
    { key: 'a)', label: 'Alguém desconhecido' },
    { key: 'b)', label: 'Está na frase, é "mercado"' },
    { key: 'c)', label: 'Está escondido no verbo, é "eu"' },
    { key: 'd)', label: 'É “frutas, legumes e arroz”' },
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
    navigation.navigate('QuestaoPT04');
  }

  function handleRetry() {
    Resetastrikes();
    setSelected(null);
    setMessage('');
  }

  function handleOpenDoc() {
    Linking.openURL('https://www.canva.com/design/DAGqij-rjCE/Hr0lKnr4Wya1lrFSckc4bQ/edit?utm_content=DAGqij-rjCE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton');
  }

  return (
    
    <View style={styles.container} testID="questao-pt03-screen">
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
          <Text style={styles.levelText}>Nível 3 – Tipo de sujeito (Oculto)
</Text>
        </View>
        {/* Cena */}
        <Image
          source={require('../../../assets/Q3_por.png')}
          style={styles.sceneImage}
          resizeMode="contain"
        />
        <Text style={styles.sceneText}>
  Leia:
    {'\n'}
        Leia atentamente:
“Fui ao mercado ontem. Comprei frutas, legumes e arroz.”

  </Text>
  
          {/* Pergunta */}
          <Text style={styles.questionText}>
             Quem fez essas ações? Onde está o sujeito?
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
      </View>
      
    </View>
  );
}


