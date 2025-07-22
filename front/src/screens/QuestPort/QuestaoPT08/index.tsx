import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Linking,
  Modal,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BackButton } from '../../../components/BackButton';
import { Button } from '../../../components/Button';
import { useState } from 'react';
import { styles } from './styles';
import { Strikes, NumeroDstrikes, Resetastrikes } from '../contadorErros';
import ProgressBar from '../../../components/ProgressBar';
import { HomeButton } from '../../../components/HomeButton';

export function QuestaoPT08() {
  const navigation = useNavigation<any>();
  const [selected, setSelected] = useState<string | null>(null);
  const [message, setMessage] = useState<string>('');
  const totalQuestions = 9;
  const [currentQuestion, setCurrentQuestion] = useState(8);
  const [showRetryModal, setShowRetryModal] = useState(false);

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
      if (Strikes >= 2) {
        setShowRetryModal(true);
        Resetastrikes();
      }
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
    navigation.navigate('QuestaoPT09');
  }

  function handleOpenDoc() {
    Linking.openURL('https://www.canva.com/design/DAGqij-rjCE/Hr0lKnr4Wya1lrFSckc4bQ/edit?utm_content=DAGqij-rjCE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton');
  }

  function handleRetry() {
    Resetastrikes();
    setShowRetryModal(false);
    navigation.navigate('QuestaoMT04');
  }

  return (
    <View style={styles.container} testID="questao-pt08-screen">
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
        {selected && (
          <Button
            title="Próxima"
            onPress={handleNext}
          />
        )}
        {/* Modal de Retry */}
        <Modal
          visible={showRetryModal}
          transparent={true}
          animationType="fade"
          onRequestClose={() => setShowRetryModal(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalText}>
                Você errou mais de duas questões desse módulo! Gostaria de tentar novamente?
              </Text>
              <TouchableOpacity
                style={styles.retryButton}
                onPress={handleRetry}
              >
                <Text style={styles.retryButtonText}>Tentar novamente</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setShowRetryModal(false)}
              >
                <Text style={styles.closeButtonText}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
}
