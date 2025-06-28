import { View, Text , Image,TouchableOpacity,Modal} from 'react-native';
import {styles} from "./styles";


interface RetryProps {
  visible: boolean;
  onRetry: () => void;
  onClose?: () => void;
}

export function Retry({ visible, onRetry, onClose }: RetryProps) {
  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.TextoDamen}>
            Você errou mais de duas questões desse módulo! Gostaria de tentar novamente?
          </Text>

          <TouchableOpacity style={styles.Btentenovam} onPress={onRetry}>
            <Text style={styles.Btext}>Tentar novamente</Text>
          </TouchableOpacity>

          {onClose && (
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Text>Fechar</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </Modal>
  );
}