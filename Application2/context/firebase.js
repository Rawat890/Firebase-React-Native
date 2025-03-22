import { createContext, useContext } from 'react'
import { Text } from 'react-native'
import { initializeApp } from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { getDatabase, set, ref } from 'firebase/database'

//firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDvDv7yUZfLJkYu8S4Z7DLl-qa5PBjPIwI",
  authDomain: "react-native-course-97267.firebaseapp.com",
  databaseURL: "https://react-native-course-97267-default-rtdb.firebaseio.com",
  projectId: "react-native-course-97267",
  storageBucket: "react-native-course-97267.firebasestorage.app",
  messagingSenderId: "920389138562",
  appId: "1:920389138562:web:37d8aa643383eb0d589c9b",
  measurementId: "G-LCJHX45EC2"
};

//app
const firebaseApp = initializeApp(firebaseConfig)

//firebase auth
const firebaseAuth = getAuth(firebaseApp)

//database instance
const database = getDatabase(firebaseApp)

//Firebase context
const FirebaseContext = createContext(null)


//custom hook
export const useFirebaseContext = () => useContext(FirebaseContext)

export const FirebaseProvider = (props) => {

  //creates a user - utility function
  const signupUserWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password)
  }


  //utility function 2 
  const submitUserData = (key, data) => {
    set(ref(database, key), data)
  }


  return (
    <FirebaseContext.Provider value={{ signupUserWithEmailAndPassword, submitUserData }}>
      {props.children}
    </FirebaseContext.Provider>
  )
}