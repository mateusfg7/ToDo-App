import { StyleSheet } from "react-native";
import Constants from "expo-constants";

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

export default styles;
