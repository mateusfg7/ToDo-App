import { StyleSheet } from "react-native";

const todoListStyles = StyleSheet.create({
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
});

export default todoListStyles;
