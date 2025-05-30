import { View, Text, TextInput, TouchableOpacity, StyleSheet, CheckBox } from 'react-native';
import { useState } from 'react';
import { Link } from 'expo-router';

export default function Cadastro() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    remember: false,
  });

  const handleChange = (field: string, value: string | boolean) => {
    setForm({ ...form, [field]: value });
  };

  const handleSignup = () => {
    // futuramente usar axios para enviar os dados do form
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Omega(Ω)</Text>
      <Text style={styles.title}>Create an account</Text>

      <TextInput placeholder="Name" style={styles.input} onChangeText={val => handleChange('name', val)} />
      <TextInput placeholder="Email" style={styles.input} onChangeText={val => handleChange('email', val)} />
      <TextInput placeholder="Password" secureTextEntry style={styles.input} onChangeText={val => handleChange('password', val)} />
      <TextInput placeholder="Confirm Password" secureTextEntry style={styles.input} onChangeText={val => handleChange('confirmPassword', val)} />

      <View style={styles.row}>
        <CheckBox value={form.remember} onValueChange={val => handleChange('remember', val)} />
        <Text style={styles.label}>Remember me</Text>
        <TouchableOpacity style={styles.forgot}>
          <Text style={styles.forgotText}>Forgot password?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>SIGN UP</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>
        Already have an account? <Link href="/Login"><Text style={styles.link}>Login</Text></Link>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({ /* estilos semelhantes ao da imagem */ });
