import React from "react";
import { View, TouchableOpacity, Text, TextInput } from "react-native";

import styles from "./styles"

const AddTodo = ({ setTodos, setNewTodo, todos, newTodo }) => {
  return (
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
  );
};

export default AddTodo;
