import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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
