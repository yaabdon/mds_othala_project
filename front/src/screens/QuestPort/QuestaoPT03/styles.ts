import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },

  // HEADER
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
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

professorBarContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: -35,
  marginBottom: 12,
  paddingHorizontal: 16,
},

teacherAvatar: {
  width: 90, 
  height: 70,
  borderRadius: 30,
  marginRight: 10,
},

decorativeBar: {
  flex: 1,
  height: 12,
  backgroundColor: '#5C8F84',
  borderRadius: 6,
  marginLeft: -50, // 🔥 Empurra a barra para a direita
},

  // CONTEÚDO
  content: {
    paddingHorizontal: 16,
    alignItems: 'center',
  },

  // NÍVEL
  levelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  
  levelDot: {
    width: 15,
    height: 15,
    backgroundColor:  '#73D7C0',
    borderRadius: 8,
    marginRight: 8,
  },
   // CENA
  sceneImage: {
  width: width * 0.9,  
  height: width * 0.4, 
  marginBottom: 8,     
  resizeMode: 'contain',
},
sceneText: {
  color: '#808080',
marginTop: 6,
marginBottom: 26,
textAlign: 'center',

},

  levelText: {
    fontSize: 16,
    fontWeight: '500',
  },
  
  // PERGUNTA
  questionText: {
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'center',
    marginBottom: 14,
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
    fontSize: 16,
    color: '#FFF', 
  },
  optionCorrect: {
    backgroundColor: '#1ACF41',
  },
  optionIncorrect: {
    backgroundColor: 'EF6B6B',
  },
    // MENSAGEM DE FEEDBACK
  feedbackMessage: {
  fontSize: 18,
  fontWeight: 'bold',
  textAlign: 'center',
  marginTop: 20,
  color: '#000000',  
},
  
});
