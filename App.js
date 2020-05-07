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

export default function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor='#0085FF' />
      <View style={styles.header}>
        <View style={styles.headerViewChild}>
          <Text style={styles.title}>TO DO</Text>
        </View>
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
              <Text style={styles.checkedButtonText}>check</Text>
            </TouchableOpacity>
            <Text style={styles.todoText}>{todo}</Text>
          </View>
        )}
      />

      <View style={styles.addTodoContainer}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={(_) => {
            setTodos([...todos, newTodo]);
            setNewTodo("");
          }}
        >
          <Text styel={styles.addButtonText}>Add</Text>
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
