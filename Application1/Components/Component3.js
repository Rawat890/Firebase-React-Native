//Proper Sign Up page

import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"
import { TextInput, View, Text, Button, StyleSheet } from "react-native"
import { app } from "../firebaseConfig.js"
import { useState } from "react"

const auth = getAuth(app)

function Component3(params) {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function submitUserInfo() {
    createUserWithEmailAndPassword(auth, email, password).then(value => console.log("User Created"))
    setEmail('')
    setPassword('')
  }


  return (
    <View style={styles.container}>
      <Text style={[styles.text, { marginBottom: 20, marginTop: 10, fontSize: 20 }]}>Sign Up Form</Text>

      <View style={styles.inputContainer}>
        <View style={styles.inputView1}>
          <Text style={styles.textInput}>E-mail - </Text>
          <TextInput style={styles.input} placeholder="email ..." onChangeText={(email) => setEmail(email)} value={email} />
        </View>
        <View style={styles.inputView2}>
          <Text style={styles.textInput}>Password - </Text>
          <TextInput style={styles.input} placeholder="password ..." onChangeText={(password) => setPassword(password)} value={password} />
        </View>
      </View>
      <Button title="Sign Up" onPress={submitUserInfo} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'black',
    padding: 20, borderRadius: 8,
    width: '80%',
    elevation: 4,
    backgroundColor: 'lightgreen'

  },
  inputContainer: {
    width: '100%'
  },
  inputView1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around', marginTop: 15
  },
  inputView2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around', marginTop: 15, marginBottom: 16
  },
  input: {
    borderColor: 'grey',
    borderWidth: 2,
    height: 43,
    width: 155,
    padding: 10,
    borderRadius: 5
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold'
  },

})

export default Component3