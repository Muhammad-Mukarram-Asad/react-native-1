import React from "react";
import { useState } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Button,
  ScrollView,
  TouchableOpacity
} from "react-native";
import App from "./App";

export default function Todo() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  function addItem() {
    let temp_list = [...list];
    temp_list.push(text);
    setList(temp_list);
    // After adding an element, empty the input.
    // setText("");
  }
  function deleteItem(index) {
    let templist = [...list];
    templist.splice(index, 1);
    setList(templist);
  }
//   function onInputChange(e) {
//     setText(e.target.value);
//   }
  const onInputChange = (e) =>{
    setText(e.target.value);
  }
  
  // In order to make custom buttons in react-native:

  const AppButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );

  const AppBtn2 = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.appBtnContainer}>
      <Text style={styles.appBtnText}>{title}</Text>
    </TouchableOpacity>
  );
  

  return (
    <View style={styles.container}>
      {/* {Controlling an element via state hooks} */}
      <TextInput
        placeholder="Enter a Todo item Here:"
        value={text}
        onChangeText={newText => setText(newText)}
        style={styles.input1}
      />
      <AppButton onPress={addItem} title={"Add Element"} />
      {/* <Button style={styles.btn} onPress={addItem} title="Add Item" /> */}

      <ScrollView>
        {list.map((item, index) => {
          return (
            <View>
              <Text style={styles.item}>
                {item}
              </Text>
              <AppBtn2 onPress={() => deleteItem(index)} title={"Delete Element"} />
              <AppBtn2 onPress={() => editItem(index)} title={"Edit Element"} />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    // width: "100%",
    // height: "100%",
    marginTop: 60
  },
  item: {
    padding: 20,
    fontSize: 15,
    marginTop: 5,
    color:"black"
  },
  input1: {
    width: 300,
    height: 40,
    fontSize: 20,
    textAlign: "center",
    color: "black",
    borderColor: "white",
    borderWidth: 2,
    borderStyle: "solid",
    padding: 5,
  },

  appBtnContainer: {
    elevation: 8,
    backgroundColor: "black",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    color:"white",
    marginTop: 10,
  },

  appBtnText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
    backgroundColor:"black",
  },

  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
});
