import { Pressable, Text, StyleSheet } from "react-native";

function Button({ children, onPress }) {

  const buttonWidth = children === 'SIGN UP' ? 120 : 210;


  return (
    <Pressable onPress={onPress} style={[styles.button, { width: buttonWidth }]} android_ripple={{ color: 'grey' }}>
      <Text style={styles.btnText}>{children}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 210,
    padding: 5,
    borderRadius: 10,
    backgroundColor: 'blue',
    marginTop: 15,
  },
  btnText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 700
  }
})

export default Button;