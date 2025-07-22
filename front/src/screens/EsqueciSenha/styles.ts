import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
  },
  card: {
    width: '90%',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,

  },
  title: {
    padding: 30,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#84DBC7',
  },
  input: {
    width: '70%',
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
    margin: 5,
    padding: 10,
  },
  button: {
    padding: 50,
  },
  infoText: {
    color: '#000',
    fontSize: 13,
    marginTop: 10,
    textAlign: 'center',
  },
});
