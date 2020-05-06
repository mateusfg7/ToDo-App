import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Constants from "expo-constants";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  return (
    <View style={styles.container}>
      <Text>TO DO</Text>
      <FlatList
        data={todos}
        renderItem={({ item: todo }) => (
          <View>
            <Text>{todo}</Text>
            <TouchableOpacity
              onPress={(_) => {
                const keepedTodos = [];
                todos.map((uniqueTodo) => {
                  if (uniqueTodo != todo) {
                    keepedTodos.push(uniqueTodo);
                  }
                });
                setTodos(keepedTodos);
              }}
            >
              <Text>REMOVE</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <TouchableOpacity onPress={(_) => setTodos([...todos, newTodo])}>
        <Text>Add</Text>
      </TouchableOpacity>
      <TextInput
        placeholder='add new todo...'
        value={newTodo}
        onChangeText={(text) => setNewTodo(text)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    paddingTop: Constants.statusBarHeight + 10,
  },
});
