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
import { styles } from './styles';

export function QuestaoPT04() {
  const navigation = useNavigation<any>();
  const [selected, setSelected] = useState<string | null>(null);
    const [message, setMessage] = useState<string>('');
  

  const correctKey = 'c)';

  const options = [
    { key: 'a)', label: 'Hoje é terça feira' },
    { key: 'b)', label: 'Hoje é terça-feira!' },
    { key: 'c)', label: 'Hoje é terça-feira.' },
    { key: 'd)', label: 'Hoje é terça-feira,' },
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
    navigation.navigate('QuestaoPT05');
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
      

      {/* Professor + Barra */}
      <View style={styles.professorBarContainer}>
        <Image
          source={require('../../../assets/Home_girl.png')}
          style={styles.teacherAvatar}
        />
        <View style={styles.decorativeBar} />
      </View>

      
      {/* CONTEÚDO */}
      <View style={styles.content}>
        {/* Nível */}
        <View style={styles.levelContainer}>
          <View style={styles.levelDot} />
          <Text style={styles.levelText}>Nível 1: Usando ponto final</Text>
        </View>
        {/* Cena */}
        <Image
          source={require('../../../assets/Q4_por.png')}
          style={styles.sceneImage}
          resizeMode="contain"
        />
        {/* Pergunta */}
        <Text style={styles.questionText}>
          Qual frase está com ponto final correto?
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
