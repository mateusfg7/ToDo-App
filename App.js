import React, { useState } from "react";
import { SafeAreaView, StatusBar } from "react-native";

import styles from "./src/styles/global";

import TodoList from "./src/components/TodoList";
import Header from "./src/components/Header"
import AddTodo from "./src/components/AddTodo"

export default function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor='#333' />

      <Header />

      <TodoList todos={todos} setTodos={setTodos} />

      <AddTodo
        setTodos={setTodos}
        setNewTodo={setNewTodo}
        todos={todos}
        newTodo={newTodo}
      />
    </SafeAreaView>
  );
}
