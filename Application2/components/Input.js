import { TextInput, View, StyleSheet, Text } from "react-native"


function Input({ label, placeholder, style, keyboard }) {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.labelText}>{label}</Text>
      <TextInput placeholder={placeholder} keyboardType={keyboard} style={styles.input} />
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: 20
  },
  labelText: {
    fontSize: 16,
    fontWeight: 500,
  },
  input: {
    padding: 3,
    width: 160,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    borderRadius: 10,
    borderColor: 'transparent'
  }
})

export default Input