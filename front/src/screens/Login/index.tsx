import { View, Text , TextInput, TouchableOpacity} from 'react-native';
import { Button } from '../../components/Button';
import { useState } from 'react';
import {styles} from "./styles";
import { useNavigation } from '@react-navigation/native';

export  function Login() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<any>();

  const handleLogin = () => {
    // logica de login
  };

  return (
    <View style={styles.container}>
        
        <View style={styles.card}>
            <Text style={styles.loginText}>Login</Text>
            <TextInput 
            placeholder='Usuário'
            style={styles.loginInput}>
            </TextInput>
            <TextInput 
            placeholder='Senha'
            style={styles.loginInput}></TextInput>
            <View>
            <TouchableOpacity style={styles.esqueciSenha}>
            <Text style={styles.esqueciSenhaText}>Esqueceu a senha?</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.button}> 
            <Button 
            title='Login'
            onPreess={handleLogin}
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
  );
}

