import { StatusBar } from "expo-status-bar";
import * as React from 'react';
import Todo from "./Todo";
// import SignupScreen from "./SignUp";
// import RoutesFunction from "./Routes";
import {
  ActivityIndicator,
  TextInput,
  Switch,
  FlatList,
  Image,
  Button,
  StyleSheet,
  Text,
  View,
} from "react-native";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

export default function App() {
  return (
    <View>
      <Todo />
    </View>
  );
  
// StyleSheet Below for styling the app.
const styles = StyleSheet.create({
  container: {
    display:"flex",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
  },
});
