import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#rgbrgba(255, 193, 35, 0.29)",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "90%",
    height: "50%",
    backgroundColor: "#fff",
    elevation: 8,
    borderRadius: 12,
    alignItems: "center",
  },


  cadastroText: {
    padding: 30,
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFC123",
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
    color: "#FFC123",
    fontSize: 13,
    fontWeight:'bold'
  },
});