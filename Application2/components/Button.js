import { Pressable, Text, StyleSheet } from "react-native";

function Button({ children, onPress }) {
  return (
    <Pressable onPress={onPress} style={styles.button} android_ripple={{ color: 'grey' }}>
      <Text style={styles.btnText}>{children}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
})

export default Button;