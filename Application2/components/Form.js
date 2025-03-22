import { useState } from "react";
import { useFirebaseContext } from "../context/firebase.js";
import Button from "./Button.js";
import Input from "./Input.js";
import { View, Text, StyleSheet } from "react-native";
import GoogleForm from "../GoogleSignIn/GoogleForm.js";

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
    firebaseHook.submitUserData('usersData/' + 'rohanAdmin', { email, password })
  }

  return (
    <View style={styles.container}>
      <Text style={{
        color: 'orange', fontWeight: 'bold', fontSize: 24, marginBottom: 20, marginTop: 10
      }}>Email-Google-App</Text>
      <Input placeholder="Enter email...." label="Email-add" onEnterText={emailHandler} value={email} />
      <Input placeholder="Enter password..." label="Password" onEnterText={passwordHandler} value={password} />
      <GoogleForm />
      <Button children="SIGN UP" onPress={signupUser} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    elevation: 5,
    borderRadius: 10,
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    borderWidth: 1,
    borderColor: 'white'
  }
})

export default Form;