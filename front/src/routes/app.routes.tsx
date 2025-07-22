import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home';
import { PreLogin } from '../screens/PreLogin';
import { Login } from '../screens/Login';
import { Cadastro } from '../screens/Cadastro';
import { Regras } from '../screens/Regras';
import { QuestaoPT01 } from '../screens/QuestPort/QuestaoPT01';
import { QuestaoPT02 } from '../screens/QuestPort/QuestaoPT02';
import { QuestaoPT03 } from '../screens/QuestPort/QuestaoPT03';
import { QuestaoPT04 } from '../screens/QuestPort/QuestaoPT04';
import { QuestaoPT05 } from '../screens/QuestPort/QuestaoPT05';
import { QuestaoPT06 } from '../screens/QuestPort/QuestaoPT06';
import { QuestaoPT07 } from '../screens/QuestPort/QuestaoPT07';
import { QuestaoPT08 } from '../screens/QuestPort/QuestaoPT08';
import { QuestaoPT09 } from '../screens/QuestPort/QuestaoPT09';
import { QuestaoMT01 } from '../screens/QuestMat/QuestaoMT01';
import { QuestaoMT02 } from '../screens/QuestMat/QuestaoMT02';
import { QuestaoMT03 } from '../screens/QuestMat/QuestaoMT03';
import { QuestaoMT04 } from '../screens/QuestMat/QuestaoMT04';
import { QuestaoMT05 } from '../screens/QuestMat/QuestaoMT05';
import { QuestaoMT06 } from '../screens/QuestMat/QuestaoMT06';
import { QuestaoMT07 } from '../screens/QuestMat/QuestaoMT07';
import { QuestaoMT08 } from '../screens/QuestMat/QuestaoMT08';
import { QuestaoMT09 } from '../screens/QuestMat/QuestaoMT09';
import { Parabens } from '../screens/Parabens';
import { EsqueciSenha } from '../screens/EsqueciSenha';

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
      
      
      <Stack.Screen name="PreLogin"   component={PreLogin}  />  
      <Stack.Screen name="Login"      component={Login}     />  
      <Stack.Screen name="Cadastro"   component={Cadastro}  />
      <Stack.Screen name="Regras"     component={Regras}    />
      <Stack.Screen name="Home"       component={Home}      />
      <Stack.Screen name="Parabens"  component={Parabens} />
      <Stack.Screen name="QuestaoPT01"  component={QuestaoPT01} />
      <Stack.Screen name="QuestaoPT02"  component={QuestaoPT02} />
      <Stack.Screen name="QuestaoPT03"  component={QuestaoPT03} />
      <Stack.Screen name="QuestaoPT04"  component={QuestaoPT04} />
      <Stack.Screen name="QuestaoPT05"  component={QuestaoPT05} />
      <Stack.Screen name="QuestaoPT06"  component={QuestaoPT06} />
      <Stack.Screen name="QuestaoPT07"  component={QuestaoPT07} />
      <Stack.Screen name="QuestaoPT08"  component={QuestaoPT08} />
      <Stack.Screen name="QuestaoPT09"  component={QuestaoPT09} />
     
      
      <Stack.Screen name="QuestaoMT01"  component={QuestaoMT01} />
      <Stack.Screen name="QuestaoMT02"  component={QuestaoMT02} />
      <Stack.Screen name="QuestaoMT03"  component={QuestaoMT03} />
      <Stack.Screen name="QuestaoMT04"  component={QuestaoMT04} />
      <Stack.Screen name="QuestaoMT05"  component={QuestaoMT05} />
      <Stack.Screen name="QuestaoMT06"  component={QuestaoMT06} />
      <Stack.Screen name="QuestaoMT07"  component={QuestaoMT07} />
      <Stack.Screen name="QuestaoMT08"  component={QuestaoMT08} />
      <Stack.Screen name="QuestaoMT09"  component={QuestaoMT09} />
      <Stack.Screen name="EsqueciSenha" component={EsqueciSenha} />
      
      

      

      
    </Stack.Navigator>
  );
}