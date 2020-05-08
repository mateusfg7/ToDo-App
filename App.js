import React, { useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from "react-native";

import styles from "./src/styles";

import Header from "./src/components/HeaderComponent";
import TodoList from "./src/components/TodoListComponent";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor='#0085FF' />
      <Header />
      <TodoList todos={todos} setTodos={setTodos} />

      <View style={styles.addTodoContainer}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={(_) => {
            setTodos([...todos, newTodo]);
            setNewTodo("");
          }}
        >
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
        <View style={styles.inputNewTodoArea}>
          <TextInput
            placeholder='Add new todo...'
            value={newTodo}
            onChangeText={(text) => setNewTodo(text)}
            style={styles.inputNewTodo}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
