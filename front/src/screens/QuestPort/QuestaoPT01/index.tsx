import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Linking,
  Modal
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BackButton } from '../../../components/BackButton';
import { HomeButton } from '../../../components/HomeButton';
import { Button } from '../../../components/Button';
import ProgressBar from '../../../components/ProgressBar';
import { styles } from './styles';
import { Strikes, NumeroDstrikes,Resetastrikes } from '../contadorErros';


export function QuestaoPT01() {
  const navigation = useNavigation<any>();
  const [selected, setSelected] = useState<string | null>(null);
  const [message, setMessage] = useState<string>('');
  const totalQuestions = 9;
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [showRetryModal, setShowRetryModal] = useState(false);

  
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
        if (key === correctKey) {
           if (Strikes >= 2){
                  setShowRetryModal(true)
                  Resetastrikes();
        }
        setMessage('Parabéns, você acertou!');  
      } else {
        setMessage('Que pena, não foi dessa vez.');
        NumeroDstrikes();
        if (Strikes >= 2){
                  setShowRetryModal(true)
                  Resetastrikes();
                  
         }
      }
    }

  function handleNext() {
    setCurrentQuestion((prev) => (prev < totalQuestions ? prev + 1 : prev));
    navigation.navigate('QuestaoPT02');
  }


  function handleOpenDoc() {
    Linking.openURL('https://www.canva.com/design/DAGqij-rjCE/Hr0lKnr4Wya1lrFSckc4bQ/edit?utm_content=DAGqij-rjCE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton');
  }

  function handleRetry() {
      Resetastrikes();
      setShowRetryModal(false); // Fecha o modal
      navigation.navigate('QuestaoMT04'); // Navega para Questão 4
    }


  return (
    <View style={styles.container} testID="questao-pt01-screen">
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
        <ProgressBar currentQuestion={currentQuestion} totalQuestions={totalQuestions} />
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
 
      </View>


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



    </View>
  );
}
