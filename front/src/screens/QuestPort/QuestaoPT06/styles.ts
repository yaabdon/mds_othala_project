import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative', //NOVA PROPRIEDADE ADICIONADA AQUI
    backgroundColor: '#FFF',
    justifyContent: 'flex-start',
  },
  // HEADER
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,//AJUSTADO
    paddingVertical: 0,//AJUSTADO
  },
  leftContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  centerContainer: {
    flex: 2,
    alignItems: 'center',
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#598E9C',
  },
  omega: {
    width: 170,
    height: 100,
    resizeMode: 'contain',
    marginRight: -60,  
    marginTop: 10,     
  },
  // PROFESSOR + BARRA
  professorBarContainer: {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    marginBottom:30,
  },
  teacherAvatar: {
    width: 70,
    height: 70,
    borderRadius: 35,//AJUSTADO
    marginRight: -15, //AJUSTADO
    marginLeft: 20, 
  },
  decorativeBar: {
    flex: 1,
    height: 12,
    backgroundColor: '#5C8F84',
    borderRadius: 6,
  },
  // CONTEÚDO
  content: {
    paddingHorizontal: 15, //AJUSTADO
    alignItems: 'center',
    marginTop: -3, //NOVA PROPRIEDADE ADICIONADA AQUI               
  },
  // NÍVEL
  levelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,//AJUSTADO
  },
  levelDot: {
    width: 15,
    height: 15,
    backgroundColor: '#73D7C0',
    borderRadius: 8,
    marginRight: 8,
  },
  levelText: {
    fontSize: 16,
    fontWeight: '500',
  },
  // CENA
  sceneImage: {
    width: width * 0.65, //NOVO TAMANHO PARA IMAGEM
    height: width * 0.55, //NOVO TAMANHO PARA IMAGEM
    top: -25 //NOVA PROPRIEDADE AQUI
  },
  sceneText: {
    color: '#808080',
    marginTop:-40,
    marginBottom: 42,
    textAlign: 'center',
  },
  // PERGUNTA
  questionText: {
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'center',
    marginBottom: 12,
    marginTop: -40, //NOVA PROPRIEDADE ADICIONADA AQUI
  },
  // OPÇÕES
  optionButton: {
    width: '100%',
    backgroundColor: '#5C8F84',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  optionText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  optionCorrect: {
    backgroundColor: '#1ACF41',
  },
  optionIncorrect: {
    backgroundColor: '#FF4545',
  },
  // MENSAGEM DE FEEDBACK
  feedbackMessage: {
  fontSize: 18,
  fontWeight: 'bold',
  textAlign: 'center',
  marginTop: -11, //NOVA PROPRIEDADE MODIFICADA AQUI
  color: '#000000',  
},

  // MODAL DE RETRY
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  retryButton: {
    backgroundColor: '#F2E3B5',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  retryButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  closeButton: {
    padding: 10,
    width: '100%',
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#000000',
  }
});
