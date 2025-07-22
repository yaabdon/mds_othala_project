import { StyleSheet,Dimensions } from "react-native";
const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({



    container: {
    flex: 1,
    position: 'relative',
    justifyContent: 'flex-start',
    backgroundColor: "#fff",
  },


    MensagemContainer:{
        backgroundColor: '#5C8F84',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginHorizontal: 30,
    },

    TextoDamen:{
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',


    },

 logo:{
   width: 155,
   height: 100,
   paddingTop: 21,
   left: 134
  },

    Btentenovam:{
        backgroundColor: '#F2E3B5',
        height : 35,
       
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 45,
        marginHorizontal: 60,
    },

    Btext:{
        color: '#00000',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    
    modalContent: {
        backgroundColor: '#FFFFFF',
        padding: 20,
        borderRadius: 10,
        width: '80%',
    },

    closeButton: {
        marginTop: 10,
        padding: 10,
        alignItems: 'center',
    }
});
