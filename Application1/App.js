import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Component1 from './Components/Component1.js';
import Component2 from './Components/Component2.js';
import Component3 from './Components/Component3.js';

export default function App() {

  return (
    <View style={styles.container}>
      <Component3 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
