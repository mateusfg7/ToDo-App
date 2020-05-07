import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "#0085FF",
    height: StatusBar.currentHeight + 70,
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
    justifyContent: "space-between",
    alignItems: "center",
    height: 33,
    borderRadius: 10,
    marginBottom: 12,
    backgroundColor: "#DFDFDF",
  },
  inputNewTodoArea: {
    minWidth: 111,
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
  },
  inputNewTodo: {
    maxWidth: 270,
    color: "#000",
    fontSize: 12,
  },
  addButton: {
    backgroundColor: "#0085FF",
    borderRadius: 10,
    width: 70,
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 14,
  },
});

export default styles;
