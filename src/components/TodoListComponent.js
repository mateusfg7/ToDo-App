import React from "react";
import { View, FlatList, TouchableOpacity, Text } from "react-native";

import todoListStyles from "../styles/todoListStyles";

const TodoList = ({ todos, setTodos }) => {
  return (
    <FlatList
      style={todoListStyles.todoList}
      data={todos}
      renderItem={({ item: todo }) => (
        <View style={todoListStyles.todoListView}>
          <TouchableOpacity
            style={todoListStyles.checkedButton}
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
            <Text style={todoListStyles.checkedButtonText}>check</Text>
          </TouchableOpacity>
          <Text style={todoListStyles.todoText}>{todo}</Text>
        </View>
      )}
    />
  );
};

export default TodoList;
