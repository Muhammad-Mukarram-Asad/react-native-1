import React from "react";
import { useState } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Button,
  ScrollView,
  TouchableOpacity,
} from "react-native";

// Import vector icons
import Icon from "react-native-vector-icons/FontAwesome";
import Icon_mci from "react-native-vector-icons/MaterialCommunityIcons";
import Icon_entypo from "react-native-vector-icons/Entypo";
import Icon_mi from "react-native-vector-icons/MaterialIcons";

export default function Todo() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState("");
  const [count, setCount] = useState(0);

  function addItem() {
    let temp_list = [...list];
    temp_list.push(text);
    setList(temp_list);
    // After adding an element, empty the input.
    setText("");
  }
  function deleteItem(index) {
    let templist = [...list];
    templist.splice(index, 1);
    setList(templist);
  }

  function editItem(index) {
    let target_item = list[index];
    setText(target_item);
    setEditMode(true);
    setEditIndex(index);
  }

  function updateItem() {
    setEditMode(false);
    setText("");
    // The above two lines are for going from update btn  to add button .
    const tempList = [...list];
    tempList[editIndex] = text;
    setList(tempList);
  }
  //   function onInputChange(e) {
  //     setText(e.target.value);
  //   }
  // const onInputChange = (event) =>{
  //   setText(event.target.value);
  // }

  // In order to make custom buttons in react-native:

  const AppButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );

  const UpdateButton = ({ onPress, title }) => (
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
      <Text
        style={{
          color: "white",
          backgroundColor: "black",
          fontSize: 20,
          margin: 10,
          textAlign: "center",
          padding:10
        }}
      >
        Developed By M.Mukarram Asad.
      </Text>
      <TextInput
        placeholder="Enter a Todo item Here:"
        value={text}
        onChangeText={(newText) => setText(newText)}
        style={styles.input1}
      />
      {editMode ? (
        // <UpdateButton onPress={updateItem} title={"Update Element"} />
        <Icon_mi
          name="published-with-changes"
          size={50}
          color="grey"
          onPress={updateItem}
        />
      ) : (
        //  <AppButton onPress={addItem} title={"Add Element"} />
        <Icon_entypo
          name="add-to-list"
          size={50}
          color="black"
          onPress={addItem}
        />
      )}

      {/* <AppButton onPress={addItem} title={"Add Element"} /> */}
      {/* <UpdateButton onPress={updateItem} title= {"Update Element"} /> */}

      <ScrollView>
        {list.map((item, index) => {
          return (
            <View style={styles.innerTodo}>
              <Text style={styles.item}> {`${index+1}) `} </Text>
              <Text style={styles.item}> {item} </Text>

              <Icon_mci
                name="delete"
                size={40}
                color="red"
                onPress={() => deleteItem(index)}
              />

              <Icon
                name="edit"
                size={40}
                color="blue"
                onPress={() => editItem(index)}
              />

              {/* <AppBtn2
                onPress={() => deleteItem(index)}
                title={"Delete Element"}
              /> */}
            </View>
          );
        })}
      </ScrollView>

      {/* <Icon.Button name="facebook" backgroundColor="#3b5998" size={30}>
        Login with Facebook
      </Icon.Button>

      <Icon.Button name="instagram" backgroundColor="purple" size={30}>
        Login with Instagram
      </Icon.Button> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
  },
  innerTodo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 10,
  },

  item: {
    padding: 20,
    fontSize: 20,
    marginTop: 5,
    color: "black",
  },
  input1: {
    width: 350,
    height: 40,
    fontSize: 20,
    textAlign: "center",
    color: "darkblue",
    borderColor: "black",
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
    color: "white",
    marginTop: 10,
    marginLeft: 5,
  },

  appBtnText: {
    fontSize: 10,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
    backgroundColor: "black",
  },

  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});
