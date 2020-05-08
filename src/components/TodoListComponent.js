import React from "react";
import { View, FlatList, Text } from "react-native";
import RadioButton, {
  RadioButtonInput,
} from "react-native-simple-radio-button";

import todoListStyles from "../styles/todoListStyles";

const TodoList = ({ todos, setTodos }) => {
  return (
    <FlatList
      style={todoListStyles.todoList}
      data={todos}
      renderItem={({ item: todo }) => (
        <View style={todoListStyles.todoListView}>
          <RadioButton labelHorizontal={true}>
            <RadioButtonInput
              obj={{}}
              buttonSize={20}
              buttonOuterSize={20}
              buttonStyle={todoListStyles.checkedButton}
              onPress={(_) => {
                const keepedTodos = [];
                todos.map((uniqueTodo) => {
                  if (uniqueTodo != todo) {
                    keepedTodos.push(uniqueTodo);
                  }
                });
                setTodos(keepedTodos);
              }}
            />
          </RadioButton>

          <Text style={todoListStyles.todoText}>{todo}</Text>
        </View>
      )}
    />
  );
};

export default TodoList;
