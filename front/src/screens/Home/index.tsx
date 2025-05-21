import {Text, View} from "react-native";
import {styles} from "./styles";
import { Button } from "@/src/components/Button";


export function Home() {

 function handleEntrar ()  {

  console.log('O botão entrar foi clicado!!');

  }

    
  return (
<>
 
        <View style={styles.container}>

        <Text style={styles.text}> Omega Ω </Text>

          <View style={styles.button}>
            <Button 
             title="Entrar"
            onPreess={handleEntrar}
            />
          </View>



        </View>    
        </>

  )

};