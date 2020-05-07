import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "#006fc4",
    height: Constants.statusBarHeight + 70,
    alignSelf: "stretch",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  headerViewChild: {
    height: 70,
    alignSelf: "stretch",

    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    color: "#fff",
  },
  todoList: {
    alignSelf: "stretch",
    margin: 15,
  },
  todoListView: {
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 0,
    marginBottom: 14,
  },
  todoText: {
    color: "#000",
    fontSize: 14,
  },
  checkedButton: {
    backgroundColor: "#0085FF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 9,
    width: 35,
    height: 27,
  },
  checkedButtonText: {
    color: "#fff",
    fontSize: 12,
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
