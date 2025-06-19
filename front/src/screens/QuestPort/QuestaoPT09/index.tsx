import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Linking,
  Modal,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BackButton } from '../../../components/BackButton';
import { Button } from '../../../components/Button';
import { styles } from './styles';
import { Strikes,NumeroDstrikes,Resetastrikes } from '../../QuestMat/contadorErros';

export function QuestaoPT09() {
  const navigation = useNavigation<any>();
  const [selected, setSelected] = useState<string | null>(null);
  const [message, setMessage] = useState<string>('');
  const [showRetryModal, setShowRetryModal] = useState(false);

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

    if (key === correctKey) {
       NumeroDstrikes();
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
    navigation.navigate('QuestaoPT03');
  }

  function handleOpenDoc() {
    Linking.openURL('https://seu-link-aqui.com');
  }

  function handleRetry() {
        Resetastrikes();
        setShowRetryModal(false); // Fecha o modal
        navigation.navigate('QuestaoPT07'); // Navega para Questão 1
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
