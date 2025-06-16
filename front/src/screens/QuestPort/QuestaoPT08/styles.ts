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

  // PROFESSORA + BARRA
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
    marginLeft: -50,
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
    backgroundColor: '#73D7C0',
    borderRadius: 8,
    marginRight: 8,
  },
  levelText: {
    fontSize: 16,
    fontWeight: '500',
  },

  // TEXTO DA CENA
  paragraph: {
    fontSize: 16,
    color: '#444',
    marginBottom: 20,
    lineHeight: 22,
    textAlign: 'center',
  },

  // PERGUNTA
  questionText: {
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'center',
    marginBottom: 14,
  },

  // BOTÕES DE OPÇÃO
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
    backgroundColor: '#EF6B6B',
  },

  // FEEDBACK
  feedbackMessage: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    color: '#000',
  },
  sceneText: {
  color: '#808080',
  marginTop: 6,
  marginBottom: 26,
  textAlign: 'center',
},

});
