import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  background: {
  flex: 1,
  width: '100%',
  height: '100%',
},

  container: {
    flex: 1,
    backgroundColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
  },
   backButton:{
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
  },

  header: {
    width: '100%',
    height: 109,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '',
    paddingTop: 65,
  },

  logo:{
  width: 150,
  height: 210,
  alignSelf: 'center',   
  paddingTop: 10,
  },
  
  textRecepcao:{
    fontSize:15,
    fontWeight: 'bold',
    color: '585857',
    textAlign: 'center'
  },
  text:{
    fontSize:15,
    fontWeight:'bold',
    color:'#A1A4B2',
    textAlign: 'center'
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 19,
    marginTop: 150,
  },

 cardP: {
  width: '48%',
  height: 200,
  backgroundColor: '#5C8F84',
  paddingLeft: 5,
  borderRadius: 8,
  alignItems: 'flex-start',
  marginVertical: 30,
  position: 'relative',
},

startButton: {
  paddingVertical: 6,
  paddingHorizontal: 12,
  marginTop: 30,

  borderRadius: 10,
},

  homeGirl: {
      width: 150,
      height: 210,
      position: 'absolute',
      bottom: 55,
      left: 80,
  },

  textJourneyPortuguese: {
    fontSize: 20,
    textAlign: 'left',
    marginTop: 50, 
    fontWeight: 'bold',
    color: '#000000',
    lineHeight: 20
  }, 

  textPort: {
    fontSize: 20,
    textAlign: 'left',
    marginTop: 0, 
    fontWeight: 'bold',
    color: '#000000',
    lineHeight: 20
  },

  textTempP: {
    fontSize: 15,
    color: '#ffffff',
    lineHeight: 30
  },

  cardM: {
    width: '48%',
    height: 200,
    backgroundColor: '#F2E3B5',
    paddingLeft: 5,
    borderRadius: 8,
    alignItems: 'flex-start',
    marginVertical: 30, 

  },
  
    homeMan: {
      width: 150,
      height: 210,
      position: 'absolute',
      bottom: 55,
      left: 40,
  },


  textJourneyMath: {
    fontSize: 20, 
    textAlign: 'left',
    marginTop: 50, 
    fontWeight: 'bold',
    color: '#ffffff',
    lineHeight: 20

  },
  textMath: {
    fontSize: 20, 
    textAlign: 'left',
    marginTop: 0, 
    fontWeight: 'bold',
    color: '#ffffff',
    lineHeight: 20

  },
  textTempM: {
    fontSize: 15,
    lineHeight: 30
  }
  

});