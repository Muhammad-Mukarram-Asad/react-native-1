import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import Todo from "./Todo";
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

const PizzaTranslator = () => {
  const [text, setText] = useState('');
  return (
    <View style={{padding: 10}}>
      <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {text
          .split(' ')
          .map(word => word && '🍕')
          .join(' ')}
      </Text>
    </View>
  );
};

function GreetingFunction() {
  const [text, setText] = useState("");
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Enter Your Name Here:"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      <Text> Check the responsiveness below:</Text>
      <Text>{text}</Text>
    </View>
  );
}

export default function App() {
  return (
    <View>
      <Todo />
    </View>
  );
      {/* <PizzaTranslator />
      <GreetingFunction /> */}
      {/* <Text>Open up Saylani to start working on your app!</Text>
      <Image
        style={{ width: 300, height: 300 }}
        source={{ uri: "https://avatars.githubusercontent.com/u/76425569?v=4" }}
      /> */}

      {/* <Button
        style={styles.btn}
        // onPress={greetingFunction}
        title="Click Here"
        // color="#841584"
        accessibilityLabel="Learn more about this purple button"
      /> */}

      {/* <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        ios_backgroundColor="#3e3e3e"
        value={true}
      /> */}

      {/* <ActivityIndicator size="large" /> */}

      {/* <FlatList
        data={DATA}
        renderItem={({ item }) => {
          return (
            <View>
              <Text style={styles.text_id}>{item.id}</Text>
              <Text style={styles.text_title}>{item.title}</Text>
            </View>
          );
        }}
        keyExtractor={(item) => item.id}
      />
      <StatusBar style="dark" /> */}
}

const styles = StyleSheet.create({
  container: {
    display:"flex",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
  },
  input: {
    height: 40,
    width: 200,
    borderColor:"black",
    borderWidth : 1,
    borderStyle:"solid",
    margin: 12,
    padding: 10,
  },

  text_id: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
  },

  text_title: {
    color: "darkblue",
    fontWeight: "900",
    fontSize: 20,
  },
  btn: {
    color: "white",
    backgroundColor:"red",
    fontSize: 25,
    textAlign: "center",
  }
});
