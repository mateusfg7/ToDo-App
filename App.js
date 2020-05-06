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
      <View style={styles.header}>
        <Text style={styles.title}>TO DO</Text>
      </View>
      <FlatList
        style={styles.todoList}
        data={todos}
        renderItem={({ item: todo }) => (
          <View style={styles.todoListView}>
            <TouchableOpacity
              style={styles.checkedButton}
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
              <Text>check</Text>
            </TouchableOpacity>
            <Text style={styles.todoText}>{todo}</Text>
          </View>
        )}
      />
      <View style={styles.addTodoContainer}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={(_) => setTodos([...todos, newTodo])}
        >
          <Text styel={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
        <TextInput
          placeholder='add new todo...'
          value={newTodo}
          onChangeText={(text) => setNewTodo(text)}
          style={styles.inputNewTodo}
        />
      </View>
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
    paddingTop: 0,
    backgroundColor: "rgb(25,25,25)",
  },
  header: {
    backgroundColor: "#006fc4",
    width: 350,
    height: Constants.statusBarHeight + 40,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    color: "#fff",
  },
  todoList: {
    backgroundColor: "rgb(15,15,15)",
    margin: 20,
    padding: 30,
    borderRadius: 10,
  },
  todoListView: {
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 5,
  },
  todoText: {
    color: "#fff",
    fontSize: 25,
  },
  checkedButton: {
    backgroundColor: "#006fc4",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    borderRadius: 0,
    padding: 2,
  },
  addTodoContainer: {
    flexDirection: "row-reverse",
    borderRadius: 10,
    backgroundColor: "rgb(15,15,15)",
  },
  inputNewTodo: {
    marginLeft: 10,
    marginRight: 10,
    color: "#fff",
  },
  addButton: {
    backgroundColor: "#006fc4",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 30,
  },
});
