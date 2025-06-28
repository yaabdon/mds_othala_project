import { View, Text , TextInput, TouchableOpacity, Alert} from 'react-native';
import { Button } from '../../components/Button';
import { useState } from 'react';
import {styles} from "./styles";
import { useNavigation } from '@react-navigation/native';
import { BackButton } from '@/src/components/BackButton';
import { api } from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Loading } from '@/src/components/Loading';


export  function Login() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(true); 
  const navigation = useNavigation<any>();

  //Basicamente vou na rota all users procuro o usuário digitado e senha digitado e comparo , se for  igual a libero a Home
  const handleLogin = async () => {
    setIsLoading(true); // começa o loading
    try {
      const response = await api.get('/allusers');
      const users = response.data;
      const found = users.find((u: any) => u.name === user && u.password === password);
      if (found) {
        await AsyncStorage.setItem('auth', 'true');
        navigation.navigate('Regras');
      } else {
        Alert.alert('Erro', 'Usuário ou senha inválidos');
      }
    } catch (e) {
      Alert.alert('Erro', 'Erro !!!');
    } finally {
      setIsLoading(false); // termina o loading
    }
  };

  return (

        <> 
         <View style={styles.backButton} testID="login-screen"> 
              <BackButton />
                   </View>
    <View style={styles.container}>
        <View style={styles.card}>
            <Text style={styles.loginText}>Login</Text>
            <TextInput 
            placeholder='Usuário'
            style={styles.loginInput}
            value={user}
            onChangeText={setUser}
            />
            <TextInput 
            placeholder='Senha'
            style={styles.loginInput}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            />
            <View>
            <TouchableOpacity style={styles.esqueciSenha} onPress={() => navigation.navigate('EsqueciSenha')}>
            <Text style={styles.esqueciSenhaText}>Esqueci minha senha</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.button}> 
            <Button 
              title='Login'
              onPress={handleLogin}
            />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
              <Text style={styles.esqueciSenhaText}>Não tem conta ainda?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                <Text style={styles.criarContaText}>Criar Conta</Text>
              </TouchableOpacity>
            </View>
        </View>
    </View>
    </>
  );
}

