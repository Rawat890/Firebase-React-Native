import { useState } from "react";
import { useFirebaseContext } from "../context/firebase.js";
import Button from "./Button.js";
import Input from "./Input.js";
import { View, Text, StyleSheet } from "react-native";

function Form(params) {
  const firebaseHook = useFirebaseContext();
  // console.log(firebaseHook)  
  // gives the utility functions we created

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const emailHandler = (text) => {
    setEmail(text)

  }
  const passwordHandler = (text) => {
    setPassword(text)
  }

  const signupUser = () => {
    firebaseHook.signupUserWithEmailAndPassword(email, password)
    setEmail('');
    setPassword('')
  }

  return (
    <View style={styles.container}>
      <Text >Firebase Application</Text>
      <Input placeholder="Enter email...." label="Email-add" onEnterText={emailHandler} value={email} />
      <Input placeholder="Enter password..." label="Password" onEnterText={passwordHandler} value={password} />
      <Button children="Sign Up" onPress={signupUser} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow'
  }
})

export default Form;