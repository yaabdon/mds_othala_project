import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Linking,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BackButton } from '../../../components/BackButton';
import { Button } from '../../../components/Button';
import { useState } from 'react';
import { styles } from './styles';

export function QuestaoPT08() {
  const navigation = useNavigation<any>();
  const [selected, setSelected] = useState<string | null>(null);
  const [message, setMessage] = useState('');

  const correctKey = 'c)';

  const alternativas = [
    { key: 'a)', texto: 'Para a escola' },
    { key: 'b)', texto: 'Para o cinema' },
    { key: 'c)', texto: 'Para o mercado' },
    { key: 'd)', texto: 'Para a casa da avó' },
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
    navigation.navigate('QuestaoPT09');
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

      {/* Avatar + Barra */}
      <View style={styles.professorBarContainer}>
        <Image
          source={require('../../../assets/Home_girl.png')}
          style={styles.teacherAvatar}
        />
        <View style={styles.decorativeBar} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Nível */}
        <View style={styles.levelContainer}>
          <View style={styles.levelDot} />
          <Text style={styles.levelText}>Nível 2: Interpretação de texto</Text>
        </View>

        {/* Imagem da cena */}
        <Image
          source={require('../../../assets/Q9_por.png')}
          style={styles.sceneImage}
        />

        {/* Cena textual */}
        <Text style={styles.sceneText}>
          Ana foi ao mercado com a mãe. Comprou frutas e verduras. Depois, voltaram para casa.
        </Text>

        {/* Pergunta */}
        <Text style={styles.questionText}>Onde Ana foi?</Text>

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

        {/* Feedback */}
        {selected && <Text style={styles.feedbackMessage}>{message}</Text>}
        {selected && <Button title="Próxima" onPress={handleNext} />}
      </ScrollView>
    </View>
  );
}
