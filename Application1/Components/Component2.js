//authentication service of firebase
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { app } from '../firebaseConfig';
import { Button, View, Text, StyleSheet } from 'react-native';

//create instance of auth
const auth = getAuth(app)

function Component2(params) {

  const signUpUser = () => {
    //returns a promise
    createUserWithEmailAndPassword(auth, 'rohanrawat567@gmail.com', 'Rawat@345/').then((value) => console.log(value))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign Up user</Text>
      <Button onPress={signUpUser} title='Sign Up' />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 10
  }
})
export default Component2;