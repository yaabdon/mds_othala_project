 import { View, Text, TextInput, TouchableOpacity, StyleSheet, CheckBox } from 'react-native';
import { useState } from 'react';
import { Link } from 'expo-router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const handleLogin = () => {
    // futuramente usar axios para enviar { email, password }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Omega(Ω)</Text>
      <Text style={styles.title}>Login</Text>

      <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={setEmail} />
      <TextInput placeholder="Password" secureTextEntry style={styles.input} value={password} onChangeText={setPassword} />
      
      <View style={styles.row}>
        <CheckBox value={remember} onValueChange={setRemember} />
        <Text style={styles.label}>Remember me</Text>
        <TouchableOpacity style={styles.forgot}>
          <Text style={styles.forgotText}>Forgot password?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>
        Don’t have an account? <Link href="/Cadastro"><Text style={styles.link}>Sign Up</Text></Link>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({ /* estilos semelhantes ao da imagem */ });