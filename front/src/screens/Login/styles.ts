import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'#fff',
  },
    backButton:{
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
  },


  card:{
    width:'90%',
    height:'60%',
    alignItems:'center',
  },
  loginText:{
    padding:30,
    fontSize:30,
    fontWeight:'bold',
    color:'#84DBC7'
  },
  loginInput:{
    width:'70%',
    borderRadius:10,
    borderColor:'#black',
    backgroundColor:'#F2F3F7',
    margin:5,
  
  },
  esqueciSenha:{
    margin:0,
    paddingLeft:130,

  },

  esqueciSenhaText:{
  color: "#black",
  fontSize: 13,
 
  },
  button:{
    padding:50

  },
  criarContaText: {
    color: '#84DBC7', 
    fontSize: 13,
    fontWeight: 'bold',
    marginLeft: 5,
  },

});