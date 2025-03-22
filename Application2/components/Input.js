import { TextInput, View, StyleSheet, Text } from "react-native"


function Input({ label, placeholder, style, keyboard, onEnterText, value }) {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.labelText}>{label}</Text>
      <TextInput placeholder={placeholder} keyboardType={keyboard} style={styles.input} onChangeText={onEnterText} value={value} />
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Input