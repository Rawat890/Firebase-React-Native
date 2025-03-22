import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Component1 from './Components/Component1.js';
import Component2 from './Components/Component2.js';
import Component3 from './Components/Component3.js';
import Component5 from './Components/Component5.js';

export default function App() {

  return (
    <View style={styles.container}>
      <Component2 />
      <Component5 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lavender',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
