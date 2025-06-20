import { View, Text, Image, TouchableOpacity, Linking} from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { BackButton } from '../../../components/BackButton';
import { Button } from '../../../components/Button';
import { styles } from './styles';

export function QuestaoMT08() {
  const navigation = useNavigation<any>();
  const [selected, setSelected] = useState<string | null>(null);
  const [message, setMessage] = useState<string>('');


  const correctKey = 'a';
  const options = [
    { key: 'a', label: '10' },
    { key: 'b', label: '8' },
    { key: 'c', label: '6' },
    { key: 'd', label: '12' },
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
    navigation.navigate('QuestaoMT09');
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
          <Text style={styles.headerTitle}>Expressões{"\n"}Numéricas</Text>
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
          <Text style={styles.levelText}>Nível 2: Parênteses</Text>
        </View>

        {/* Cena */}
        <Image
          source={require('../../../assets/Q8_mat.png')}
          style={styles.sceneImage}
          resizeMode="contain"
        />

        {/* Pergunta */}
        <Text style={styles.questionText}>
          Paula resolveu comprar 2 brinquedos
        {"\n"}que custam R$2 e R$3 cada. Depois, ela
        {"\n"}decidiu dobrar a quantidade de brinquedos.
        {"\n"}Quanto ela gastou no total? (2 + 3) × 2
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

