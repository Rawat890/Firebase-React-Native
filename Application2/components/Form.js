import { useFirebaseContext } from "../context/firebase";
import Button from "./Button";
import Input from "./Input";
import { View, Text } from "react-native";

function Form(params) {
  const firebase = useFirebaseContext();
  console.log(firebase)

  return (
    <View>
      <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 700, marginBottom: 20 }}>Firebase Application</Text>
      <Input placeholder="Enter email...." label="Email-add" />
      <Input placeholder="Enter password..." label="Password" />
      <Button children="Sign Up" />
    </View>
  )
}

export default Form;