import React, { useState } from "react";
import { SafeAreaView, StatusBar } from "react-native";

import styles from "./src/styles";

import Header from "./src/components/HeaderComponent";
import TodoList from "./src/components/TodoListComponent";
import AddTodo from "./src/components/AddTodoComponent";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor='#0085FF' />

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
