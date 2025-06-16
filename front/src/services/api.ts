import axios from "axios";

export const api = axios.create({
  //Substitua aqui pelo o ip da sua Maquina, Vc descobre o ip quando dá um npm start no front
 baseURL: "http://192.168.1.5:8081",
});