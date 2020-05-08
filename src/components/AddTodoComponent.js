import React from "react";
import { View, TouchableOpacity, Text, TextInput } from "react-native";

import addTodoStyles from "../styles/addTodoStyles";

const AddTodo = ({ setTodos, setNewTodo, todos, newTodo }) => {
  return (
    <View style={addTodoStyles.addTodoContainer}>
      <TouchableOpacity
        style={addTodoStyles.addButton}
        onPress={(_) => {
          setTodos([...todos, newTodo]);
          setNewTodo("");
        }}
      >
        <Text style={addTodoStyles.addButtonText}>Add</Text>
      </TouchableOpacity>
      <View style={addTodoStyles.inputNewTodoArea}>
        <TextInput
          placeholder='Add new todo...'
          value={newTodo}
          onChangeText={(text) => setNewTodo(text)}
          style={addTodoStyles.inputNewTodo}
        />
      </View>
    </View>
  );
};

export default AddTodo;
