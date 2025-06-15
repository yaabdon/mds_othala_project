import { StyleSheet,Dimensions } from "react-native";
const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    height:'100%'
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
    marginRight: -60,  // Se quiser "empurrar" mais pra direita
    marginTop: 10,     
  },

  // PROFESSOR + BARRA
  professorBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:-45,
    marginBottom: 12,
    paddingHorizontal: 16,
  },
  teacherAvatar: {
    width: 70,
    height: 70,
    borderRadius: 30,
    marginRight: 6,
  },
  decorativeBar: {
    flex: 1,
    height: 12,
    backgroundColor: '#F2E3B5',
    borderRadius: 6,
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

  // CENA
  sceneImage: {
    width: width * 0.9,
    height: width * 0.5,
    marginBottom: 16,
  },

  // PERGUNTA
  questionText: {
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'center',
    marginBottom: 24,
  },

  // OPÇÕES
  optionButton: {
    width: '100%',
    backgroundColor: '#F2E3B5',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  optionText: {
    fontSize: 16,
  },
  optionCorrect: {
    backgroundColor: '#CFFCDB',
  },
  optionIncorrect: {
    backgroundColor: '#FF4545',
  },
  

});