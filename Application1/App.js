import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { getDatabase, ref, set } from 'firebase/database'
import { app } from './firebaseConfig.js';

const db = getDatabase(app);
export default function App() {
  const putData = () => {
    set(ref(db, 'users/rohan'), {
      id: 1,
      name: 'Rohan Rawat',
      age: 24,
      profession: 'React and React Native Developer',
      company: 'Diligentic InfoTech Pvt. Ltd'
    })
  }
  return (
    <View style={styles.container}>
      <Text>Welcome to firebase</Text>
      <Button title='Put Data' onPress={putData} />
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
