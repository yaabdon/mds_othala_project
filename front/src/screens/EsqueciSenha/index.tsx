import { View, Text, TextInput, Alert } from 'react-native';
import { useState } from 'react';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { api } from '../../services/api';

export function EsqueciSenha() {
  const [email, setEmail] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [info, setInfo] = useState('');
  const navigation = useNavigation<any>();


  const handleRecuperar = async () => {
    if (!email || !novaSenha) {
      Alert.alert('Erro', 'Preencha o e-mail e a nova senha.');
      return;
    }
    try {
      const response = await api.get('/allusers');
      const users = response.data;
      const user = users.find((u: any) => u.email === email);
      if (!user) {
        setInfo('E-mail não encontrado.');
        return;
      }
      await api.put(`/users/${user.id}`, {
        name: user.name,
        email: user.email,
        password: novaSenha,
      });
      setInfo('Senha redefinida com sucesso!');
      setTimeout(() => {
        navigation.navigate('Login');
      }, 2000);
    } catch (e) {
      setInfo('Erro ao redefinir senha.');
    }
  };

  return (
    <>
      <View style={styles.backButton} testID="esqueci-senha">
        <BackButton />
      </View>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>Nova Senha</Text>
          <TextInput
            placeholder='Digite seu e-mail'
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            autoCapitalize='none'
            keyboardType='email-address'
          />
          <TextInput
            placeholder='Digite sua nova senha'
            style={styles.input}
            value={novaSenha}
            onChangeText={setNovaSenha}
            secureTextEntry
          />
          <View style={styles.button}>
            <Button title='Recuperar' onPress={handleRecuperar} />
          </View>
          {!!info && <Text style={styles.infoText}>{info}</Text>}
        </View>
      </View>
    </>
  );
}
