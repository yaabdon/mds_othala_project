import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home';
import { PreLogin } from '../screens/PreLogin';
import { Login } from '../screens/Login';
import { Cadastro } from '../screens/Cadastro';



const Stack = createNativeStackNavigator();



export function AppRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >

      <Stack.Screen name="PreLogin"    component={PreLogin}    />  
      <Stack.Screen name="Login"    component={Login}    />  
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Home"     component={Home}     />


    </Stack.Navigator>
  );
}