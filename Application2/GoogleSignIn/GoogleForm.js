import { useState } from "react";
import { useFirebaseContext } from "../context/firebase.js";
import Button from "../components/Button.js";
import { View, Text, StyleSheet } from "react-native";

function GoogleForm(params) {
  const firebaseHook = useFirebaseContext();
  // console.log(firebaseHook)  
  // gives the utility functions we created

  return (
    <View style={styles.container}>
      <Button children="SIGN IN WITH GOOGLE" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  }
})

export default GoogleForm;