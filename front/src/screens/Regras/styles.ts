import { StyleSheet } from "react-native";

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

  textTitle: {
    position: 'absolute',
    bottom: 10,
    left: 72,
    color: "#585857",
    fontSize: 16,
    fontWeight: 'bold'

  },

  logo:{
  width: 900,
  height: 355,
  justifyContent: 'center',
  alignSelf: 'center',   
  paddingTop: 80,
  paddingRight: 40,
  },

  card:{
    backgroundColor: "#84DBC7",
    borderRadius: 30,
    paddingTop: 1,
    paddingVertical: 15,
    marginVertical: 8,
    marginHorizontal: 58,
    alignItems: 'center',
    
  },

  cardText:{
    color: "#FFFF",
    fontSize: 14,
    fontWeight: 'bold',
    paddingTop: 15
  },

  button:{
    position: 'absolute',
    bottom: 8,
    backgroundColor: "#5C8F84",
    borderRadius: 30,
    alignSelf: 'center',  
    width: 273, //alinha com o restante dos cards
  },

  buttonText:{
    color: "#FFFF",
    padding: 15,
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'center',  
  }

});