import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get('window')

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

  logo:{
    width: 170,
    height: 100,
    resizeMode: 'contain',
    marginTop: 9, 
    marginLeft: 125,
  },
  
  Confetti:{
    position: 'absolute',
    width: width * 0.9,
    height: height * 0.5,
    top: height * 0.3,
    alignSelf: 'center',
  },

  card:{
    marginTop: '10%',
    alignItems: 'center',
  },
  Congratulations: {
    color: "#5C8F84",
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  Text:{
    color: "#333",
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 26,
  },

  button:{
    position: 'absolute',
    top: height * 0.4,
    backgroundColor: "#5C8F84",
    borderRadius: 30,
    alignSelf: 'center',  
    width: '85%', //alinha com o restante dos cards
  },

  buttonText:{
    color: "#FFFF",
    padding: 15,
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'center',  
  }

});