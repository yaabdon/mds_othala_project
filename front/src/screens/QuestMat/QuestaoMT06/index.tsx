import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Linking,
  Modal,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BackButton } from '../../../components/BackButton';
import { Button } from '../../../components/Button';
import { styles } from './styles';
import {Strikes,NumeroDstrikes, Resetastrikes} from "../contadorErros";

export function QuestaoMT06() {
  const navigation = useNavigation<any>();
  const [selected, setSelected] = useState<string | null>(null);
  const [message, setMessage] = useState<string>('');
  const [showRetryModal, setShowRetryModal] = useState(false);


  const correctKey = 'b';
  const options = [
    { key: 'a', label: '4' },
    { key: 'b', label: '3' },
    { key: 'c', label: '2' },
    { key: 'd', label: '6' },
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
    navigation.navigate('QuestaoMT07');
  }

function handleRetry() {
    Resetastrikes();
    setShowRetryModal(false); // Fecha o modal
    navigation.navigate('QuestaoMT04'); // Navega para Questão 4
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
          <Text style={styles.headerTitle}>Fração e Divisão</Text>
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
          <Text style={styles.levelText}>Nível 3: Divisão prática</Text>
        </View>

        {/* Cena */}
        <Image
          source={require('../../../assets/Q6_mat.png')}
          style={styles.sceneImage}
          resizeMode="contain"
        />

        {/* Pergunta */}
        <Text style={styles.questionText}>
          Em uma tarde quente, Joana comprou uma caixa com 12 bombons para dividir entre ela e mais 3 amigos igualmente. Com quantos bombons ficará cada um?
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




