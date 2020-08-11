import React from "react";
import { View, FlatList, Text } from "react-native";
import RadioButton, {
  RadioButtonInput,
} from "react-native-simple-radio-button";

import styles from "./styles";

const TodoList = ({ todos, setTodos }) => {
  return (
    <FlatList
      style={styles.todoList}
      data={todos}
      renderItem={({ item: todo }) => (
        <View style={styles.todoListView}>
          <RadioButton labelHorizontal={true}>
            <RadioButtonInput
              obj={{}}
              buttonSize={20}
              buttonOuterSize={20}
              buttonStyle={styles.checkedButton}
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

          <Text style={styles.todoText}>{todo}</Text>
        </View>
      )}
    />
  );
};

export default TodoList;
