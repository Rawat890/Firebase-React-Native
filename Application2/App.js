import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { FirebaseProvider } from './context/firebase';
import Form from './components/Form.js';

export default function App() {
  return (
    <View style={styles.container}>
      <FirebaseProvider>
        <Form />
      </FirebaseProvider>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
