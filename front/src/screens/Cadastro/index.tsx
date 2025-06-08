import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';
import { styles } from "./styles";
import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import { BackButton } from '../../components/BackButton';
import { api } from '../../services/api';

export function Cadastro() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation<any>();

  
  const handleRegister = async () => {
  if (!name || !email || !password || !confirmPassword) {
    Alert.alert('Erro', 'Preencha todos os campos.');
    return;
  }
  if (password !== confirmPassword) {
    Alert.alert('Erro', 'As senhas não coincidem.');
    return;
  }
  try {
    await api.post('/users', { name, email, password });
    Alert.alert('Sucesso', 'Usuário cadastrado com sucesso!', [
      {
        text: 'OK',
        onPress: () => navigation.navigate('Login'),
      },
    ]);
  } catch (e) {
    Alert.alert('Erro', 'Não foi possível cadastrar. Tente novamente.');
  }
};

  return (
    <>
     <View style={styles.backButton}> 
          <BackButton />
               </View>
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cadastroText}>Cadastro</Text>
        <TextInput
          placeholder='Nome'
          style={styles.cadastroInput}
          value={name}
          onChangeText={setName}
        />
        <TextInput
          placeholder='Email'
          style={styles.cadastroInput}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder='Senha'
          style={styles.cadastroInput}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          placeholder='Confirmar Senha'
          style={styles.cadastroInput}
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
          
          <View style={styles.button}> 
          <Button
            title='Cadastrar'
            onPress={handleRegister}
          />
           </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
          <Text style={styles.jatemConta}>Já tem conta?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.entrar}>  Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </>
  );
}

