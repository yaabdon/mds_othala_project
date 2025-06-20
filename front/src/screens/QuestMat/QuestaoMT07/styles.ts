import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    justifyContent: 'flex-start',
    backgroundColor: "#fff",
  },

  //HEADER

  backButton:{
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
  },

  //Expressoes Numericas
  quizTitle: {
    position: 'absolute',
    top: 24,
    left: 128,
    right: 80,
    color: "#598E9C",
    fontSize: 25,
    fontWeight: 'bold'
  },
  
  // "PROFESSOR + BARRA"
    homeMan: {
    position: 'absolute',
    width: 116,
    height: 65,
    top: -25,
    left: 17,
    transform: [{ translateX: -20 }],
  },

//"omega"
  logo:{
   width: 155,
   height: 100,
   paddingTop: 21,
   left: 123

  },

//Nível 
 levelScore:{
    position: 'absolute',
    top: 105,
    left: 100,
    width: 220,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#F2E3B5"
  },

//"levelDot"
  levelCircle: {
    position: 'absolute',
    top: 140,
    left: 96,
    width: 18,
    height: 18,
    borderRadius: 10,
    backgroundColor: "#73D7C0",

  },

//"levelText"
   levelQuiz: {
    position: 'absolute',
    top: 138,
    left: 120,
    right: 80,
    color: "#00000",
    fontSize: 16,
    fontWeight: '500'
  },

  //ImagemDeMatemática -> "sceneImage"
  MatImage:{
    position: 'absolute',
    width: width * 0.9,
    height: width * 0.48,
    marginBottom: 16,
    left: 20,
    top: 65

  },

//"questionText"
  AlternativeParagraph: {
    position: 'absolute',
    fontSize: 16,
    lineHeight: 22,
    top: 350,
    left: 49,
    textAlign: 'center'
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
  // MENSAGEM DE FEEDBACK
  feedbackMessage: {
  fontSize: 18,
  fontWeight: 'bold',
  textAlign: 'center',
  marginTop: -11, //NOVA PROPRIEDADE MODIFICADA AQUI
  color: '#000000',  
},


});