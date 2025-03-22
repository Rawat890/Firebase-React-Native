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
    flexDirection: 'row',
    width: '70%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  labelText: {
    fontWeight: 600
  },
  input: {
    borderBottomWidth: 1,
    width: 160,
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 20,
    marginLeft: 20
  }

})

export default Input