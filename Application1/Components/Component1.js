//RealTime Database service to the database

import { Button, StyleSheet, Text, View } from 'react-native';
import { getDatabase, ref, set } from 'firebase/database'
import { app } from '../firebaseConfig';
const db = getDatabase(app);

function Component1() {
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Component1;