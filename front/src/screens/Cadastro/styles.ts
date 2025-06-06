import { BackButton } from "@/src/components/BackButton";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height:'100%',
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom:150,
  },
  backButton:{
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
  },
  card: {
    width: "90%",
    height: "50%",
    alignItems: "center",
  },


  cadastroText: {
    padding: 30,
    fontSize: 30,
    fontWeight: "bold",
    color: '#84DBC7',
  },
  cadastroInput: {
    width: "70%",
    borderRadius: 10,
    backgroundColor: "#f0f0f0",
    margin: 5,
  },

  jatemConta: {
    color: "#000",
    fontSize: 13,
  },
  entrar: {
    color: '#84DBC7',
    fontSize: 13,
    fontWeight:'bold'
  },

    button:{
    padding:50

  },
});