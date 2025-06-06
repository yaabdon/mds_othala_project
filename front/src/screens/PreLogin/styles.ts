import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    height:'100%'
  },

  logo:{
    paddingTop:'30%',

  },
  text:{
    fontSize:15,
    fontWeight:'bold',
    color:'#A1A4B2',
  },
  textOmega:{
    fontSize:20,
    fontWeight:'bold',
    color:'#84DBC7',
  },

  card:{
    width:'90%',
    height:'50%',
    backgroundColor: "#fff",
    elevation:8,
    borderRadius:12,
    alignItems:'center',

  },
  loginText:{
    padding:30,
    fontSize:30,
    fontWeight:'bold',
    color:"#FFC123"
  },
  loginInput:{
    width:'70%',
    borderRadius:10,
    backgroundColor: '#f0f0f0',
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
    padding:150

  },
  criarContaText: {
    color: '#FFC123', 
    fontSize: 13,
    fontWeight: 'bold',
    marginLeft: 5,
  },

});