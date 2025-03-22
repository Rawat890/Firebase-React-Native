import { Pressable, Text, StyleSheet } from "react-native";

function Button({ children, onPress }) {
  return (
    <Pressable onPress={onPress} style={styles.button} android_ripple={{ color: 'grey' }}>
      <Text style={styles.btnText}>{children}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    margin: 7,
    borderRadius: 15,
    marginTop: 20,
    width: 150,
    marginLeft: 80,
    backgroundColor: 'blue'
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 800
  }
})

export default Button;