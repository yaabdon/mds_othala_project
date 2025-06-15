import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    justifyContent: 'flex-start',
    backgroundColor: "#fff",
  },

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
    left: 134,
    right: 80,
    color: "#598E9C",
    fontSize: 25,
    fontWeight: 'bold'
  },

    homeMan: {
    position: 'absolute',
    width: 116,
    height: 65,
    top: -20,
    left: 17,
    transform: [{ translateX: -20 }],
  },


  logo:{
   width: 155,
   height: 100,
   paddingTop: 21,
   left: 134
  },

 levelScore:{
    position: 'absolute',
    top: 110,
    left: 100,
    width: 220,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#F2E3B5"
  },

    levelCircle: {
    position: 'absolute',
    top: 158,
    left: 96,
    width: 18,
    height: 18,
    borderRadius: 10,
    backgroundColor: "#73D7C0",

  },

  
   levelQuiz: {
    position: 'absolute',
    top: 156,
    left: 120,
    right: 80,
    color: "#00000",
    fontSize: 16,
    fontWeight: '500'
  },

  //ImagemDeMatemática
  MatImage:{
    position: 'absolute',
    width: width * 0.9,
    height: width * 0.5,
    marginBottom: 16,
    left: 20,
    top: 90

  },

  AlternativeParagraph: {
    position: 'absolute',
    fontSize: 16,
    lineHeight: 22,
    top: 400,
    left: 49,
    textAlign: 'center'
  },

  alternativeButton: {
    padding: 14,
    borderRadius: 8,
    marginVertical: 5,
    top: 400,
    marginLeft: 20,
    marginRight: 20,
  },

  alternativeText: {
    fontSize:16,

  },

  buttonContinue: {
   top: 411,
   left: 0,
   right: 0,
   alignItems: 'center',
}



});